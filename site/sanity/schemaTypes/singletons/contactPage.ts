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
      description: 'Keep disabled until Session 20 configures real delivery.',
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
