import type { StructureResolver } from 'sanity/structure'
import { singletonNames } from './schemaTypes'

// Custom desk: singletons render as a single editable document; everything else
// is a normal document list.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Course Page')
        .id('coursePage')
        .child(S.document().schemaType('coursePage').documentId('coursePage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonNames.has(item.getId() as string),
      ),
    ])
