import { defineField, defineType } from 'sanity'

export const coursePage = defineType({
  name: 'coursePage',
  title: 'Course Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'One-statement headline', type: 'string' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'comingSoon', title: 'Coming soon', type: 'boolean', initialValue: true }),
  ],
  preview: { prepare: () => ({ title: 'Course Page' }) },
})
