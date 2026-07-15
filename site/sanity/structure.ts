import type { StructureResolver } from 'sanity/structure'
import { createElement, type ComponentType } from 'react'
import { Icon, type IconSymbol } from '@sanity/icons'
import { apiVersion } from './env'
import { singletonNames } from './schemaTypes'

const sanityIcon = (symbol: IconSymbol) =>
  function SanityIcon() {
    return createElement(Icon, { symbol })
  }

const BookIcon = sanityIcon('book')
const CalendarIcon = sanityIcon('calendar')
const CogIcon = sanityIcon('cog')
const ComposeIcon = sanityIcon('compose')
const DocumentIcon = sanityIcon('document')
const DocumentTextIcon = sanityIcon('document-text')
const EditIcon = sanityIcon('edit')
const EyeOpenIcon = sanityIcon('eye-open')
const HeartIcon = sanityIcon('heart')
const HomeIcon = sanityIcon('home')
const ProjectsIcon = sanityIcon('projects')
const TimelineIcon = sanityIcon('timeline')
const UserIcon = sanityIcon('user')
const VideoIcon = sanityIcon('video')
const EarthGlobeIcon = sanityIcon('earth-globe')
const EnvelopeIcon = sanityIcon('envelope')

const feedTypes = ['blogPost', 'journalEntry', 'fatherPiece', 'project', 'documentary']
const customDeskTypes = [...feedTypes, 'timelineEvent', 'book']
const schemaIcons: Record<string, ComponentType> = {
  aboutPage: UserIcon,
  blogPost: DocumentTextIcon,
  book: BookIcon,
  contactPage: EnvelopeIcon,
  coursePage: CalendarIcon,
  documentary: VideoIcon,
  fatherPage: HeartIcon,
  fatherPiece: ComposeIcon,
  homePage: HomeIcon,
  journalEntry: EditIcon,
  project: ProjectsIcon,
  siteSettings: CogIcon,
  timelineEvent: TimelineIcon,
  workPage: ProjectsIcon,
}

const iconFor = (schemaType: string) => schemaIcons[schemaType] ?? DocumentIcon

// Custom desk: plain-language sections match the public site instead of the
// underlying schema names. Singletons render as one editable document.
export const structure: StructureResolver = (S) => {
  const singletonItem = (schemaType: string, title: string) =>
    S.listItem()
      .title(title)
      .id(schemaType)
      .icon(iconFor(schemaType))
      .child(S.document().schemaType(schemaType).documentId(schemaType))

  const documentListItem = (schemaType: string, title: string) =>
    S.listItem()
      .title(title)
      .id(schemaType)
      .icon(iconFor(schemaType))
      .child(S.documentTypeList(schemaType).title(title))

  return S.list()
    .title('Istiaque Ahamed')
    .items([
      S.listItem()
        .title('Website')
        .id('website')
        .icon(EarthGlobeIcon)
        .child(
          S.list()
            .title('Website')
            .items([
              singletonItem('homePage', 'Home'),
              singletonItem('aboutPage', 'About'),
              singletonItem('fatherPage', 'Father opening'),
              singletonItem('workPage', 'Work'),
              singletonItem('coursePage', 'Course'),
              singletonItem('contactPage', 'Contact'),
              S.divider(),
              singletonItem('siteSettings', 'Settings and socials'),
            ]),
        ),
      S.listItem()
        .title('Writing')
        .id('writing')
        .icon(EditIcon)
        .child(
          S.list()
            .title('Writing')
            .items([
              documentListItem('blogPost', 'Blog posts'),
              documentListItem('journalEntry', 'Journal entries'),
              S.listItem()
                .title('Feed preview')
                .id('feedPreview')
                .icon(EyeOpenIcon)
                .child(
                  S.documentList()
                    .title('Feed preview')
                    .apiVersion(apiVersion)
                    .filter('_type in $types')
                    .params({ types: feedTypes })
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
                ),
            ]),
        ),
      S.listItem()
        .title('Father')
        .id('father')
        .icon(HeartIcon)
        .child(
          S.list()
            .title('Father')
            .items([
              singletonItem('fatherPage', 'Opening and archive images'),
              documentListItem('fatherPiece', 'Essays and notes'),
            ]),
        ),
      documentListItem('project', 'Projects'),
      documentListItem('documentary', 'Films'),
      documentListItem('timelineEvent', 'Timeline'),
      documentListItem('book', 'Bookshelf'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          !singletonNames.has(item.getId() as string) &&
          !customDeskTypes.includes(item.getId() as string),
      ),
    ])
}
