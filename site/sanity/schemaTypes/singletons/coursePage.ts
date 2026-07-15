import { defineArrayMember, defineField, defineType } from 'sanity'

export const coursePage = defineType({
  name: 'coursePage',
  title: 'Course Page',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Current status',
      type: 'string',
      initialValue: 'comingLater',
      options: {
        layout: 'radio',
        list: [
          { title: 'Coming later', value: 'comingLater' },
          { title: 'In development', value: 'inDevelopment' },
          { title: 'Available', value: 'available' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'One-statement headline',
      type: 'string',
      validation: (rule) => rule.max(100),
    }),
    defineField({
      name: 'body',
      type: 'portableContent',
      description: 'Minimal approved course context. Avoid promises until the offer is ready.',
    }),
    defineField({
      name: 'intendedAudience',
      title: 'Intended audience',
      type: 'array',
      description: 'Short, factual audience descriptions. Do not imply enrolment or outcomes.',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.max(5).unique(),
    }),
    defineField({
      name: 'themes',
      title: 'Future course themes',
      type: 'array',
      description: 'Broad areas only. Modules, dates, format, and outcomes wait until approved.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', validation: (rule) => rule.required().max(60) }),
            defineField({ name: 'description', type: 'text', rows: 3, validation: (rule) => rule.max(180) }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'writingLink',
      title: 'Relevant writing link',
      type: 'routeLink',
      description: 'A published Blog, Journal, or Feed route visitors can read now.',
    }),
    defineField({
      name: 'primaryAction',
      title: 'Course action',
      type: 'routeLink',
      description: 'Shown only when the course is available. Do not add a waitlist before approval.',
      hidden: ({ document }) => document?.status !== 'available',
    }),
    defineField({
      name: 'comingSoon',
      title: 'Coming soon (legacy)',
      type: 'boolean',
      deprecated: { reason: 'Use Current status instead.' },
      readOnly: true,
      hidden: ({ value }) => value === undefined,
      initialValue: undefined,
    }),
  ],
  preview: { prepare: () => ({ title: 'Course Page' }) },
})
