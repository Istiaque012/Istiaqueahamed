import { defineField, defineType } from 'sanity'

export const timelineEvent = defineType({
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      type: 'string',
      description: 'Use only a confirmed year/date label.',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['Medicine', 'Tech', 'Personal', 'Australia'], layout: 'radio' },
      initialValue: 'Medicine',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Story order',
      type: 'number',
      description: 'Optional. Lower numbers appear first; use this when date labels do not sort naturally.',
      validation: (r) => r.integer().min(0),
    }),
    defineField({
      name: 'relatedLink',
      title: 'Continue to',
      type: 'routeLink',
      description: 'Optional related page, such as About, Father, Projects, or Work.',
    }),
  ],
  orderings: [
    {
      title: 'Story order',
      name: 'storyOrder',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'year', direction: 'asc' },
      ],
    },
  ],
  preview: { select: { title: 'title', subtitle: 'year' } },
})
