import { defineField, defineType } from 'sanity'

export const journalEntry = defineType({
  name: 'journalEntry',
  title: 'Journal Entry',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: { list: ['Thought', 'Read', 'Observation'], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
    defineField({
      name: 'relatedBook',
      title: 'Related book (for "Read" entries)',
      type: 'reference',
      to: [{ type: 'book' }],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
})
