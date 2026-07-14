import { defineField, defineType } from 'sanity'

export const timelineEvent = defineType({
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    defineField({ name: 'year', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['Medicine', 'Tech', 'Personal', 'Australia'], layout: 'radio' },
    }),
  ],
  orderings: [
    { title: 'Year, ascending', name: 'yearAsc', by: [{ field: 'year', direction: 'asc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'year' } },
})
