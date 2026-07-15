import { defineField, defineType } from 'sanity'

export const journalEntry = defineType({
  name: 'journalEntry',
  title: 'Journal entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'The public title shown on Journal and Feed.',
      validation: (r) => r.required(),
    }),
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
      initialValue: 'Thought',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'body', type: 'portableContent' }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
    defineField({
      name: 'featureOnHome',
      title: 'Feature on Home',
      type: 'boolean',
      initialValue: false,
      description: 'Allow this entry to appear in the Home writing scene.',
    }),
    defineField({
      name: 'homeFeatureRank',
      title: 'Home feature rank',
      type: 'number',
      description: 'Optional lower number wins when more than one item is featured on Home.',
      validation: (r) => r.min(1).max(20).integer(),
      hidden: ({ parent }) => parent?.featureOnHome !== true,
    }),
    defineField({
      name: 'relatedBook',
      title: 'Related book (for "Read" entries)',
      type: 'reference',
      to: [{ type: 'book' }],
      hidden: ({ parent }) => parent?.type !== 'Read',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
})
