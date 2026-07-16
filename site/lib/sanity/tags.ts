import type { SanityDocumentType } from '@/lib/sanity/types'

export const SANITY_TAGS = {
  aboutPage: 'sanity:aboutPage',
  blogPost: 'sanity:blogPost',
  book: 'sanity:book',
  contactPage: 'sanity:contactPage',
  coursePage: 'sanity:coursePage',
  documentary: 'sanity:documentary',
  fatherPage: 'sanity:fatherPage',
  fatherPiece: 'sanity:fatherPiece',
  feed: 'sanity:feed',
  homePage: 'sanity:homePage',
  journalEntry: 'sanity:journalEntry',
  project: 'sanity:project',
  siteSettings: 'sanity:siteSettings',
  timelineEvent: 'sanity:timelineEvent',
  workPage: 'sanity:workPage',
} as const

export function tagsForDocumentType(type: SanityDocumentType | string): string[] {
  const typeTag = SANITY_TAGS[type as keyof typeof SANITY_TAGS]

  if (!typeTag) {
    return []
  }

  if (['blogPost', 'journalEntry'].includes(type)) {
    return [typeTag, SANITY_TAGS.feed, SANITY_TAGS.homePage]
  }

  return [typeTag]
}
