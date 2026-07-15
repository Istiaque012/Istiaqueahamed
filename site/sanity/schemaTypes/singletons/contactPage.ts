import { defineArrayMember, defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeCopy',
      title: 'Welcome copy',
      type: 'portableContent',
      description: 'Short invitation to contact. Do not add public email unless confirmed.',
    }),
    defineField({
      name: 'primaryLinks',
      title: 'Primary contact/social links',
      type: 'array',
      of: [defineArrayMember({ type: 'routeLink' })],
    }),
    defineField({
      name: 'formEnabled',
      title: 'Enable contact form',
      type: 'boolean',
      initialValue: false,
      description: 'Enable only after the delivery provider and private environment variables are verified.',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success message',
      type: 'string',
      description: 'Shown after confirmed delivery. Keep it short and do not promise a response time.',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'formDestinationLabel',
      title: 'Private destination label',
      type: 'string',
      description: 'Internal note only, e.g. "personal inbox"; never expose secrets or tokens.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
})
