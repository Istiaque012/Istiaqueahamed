import { defineField, defineType } from 'sanity'

export const book = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'author', type: 'string' }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'note', title: 'What it meant to me', type: 'text', rows: 4 }),
    defineField({
      name: 'status',
      type: 'string',
      options: { list: ['Reading', 'Read', 'Want to read'], layout: 'radio' },
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'author', media: 'coverImage' } },
})
