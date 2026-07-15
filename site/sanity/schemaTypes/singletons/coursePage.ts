import { defineField, defineType } from 'sanity'

export const coursePage = defineType({
  name: 'coursePage',
  title: 'Course Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'One-statement headline', type: 'string' }),
    defineField({
      name: 'body',
      type: 'portableContent',
      description: 'Minimal approved course context. Avoid promises until the offer is ready.',
    }),
    defineField({ name: 'comingSoon', title: 'Coming soon', type: 'boolean', initialValue: true }),
  ],
  preview: { prepare: () => ({ title: 'Course Page' }) },
})
