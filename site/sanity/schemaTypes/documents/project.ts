import { defineArrayMember, defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      description: 'One-line public explanation for project cards.',
    }),
    defineField({ name: 'coverImage', type: 'imageWithMetadata' }),
    defineField({
      name: 'screenshots',
      type: 'array',
      description: 'Approved product views. The website has labelled placeholders until these are uploaded.',
      of: [defineArrayMember({ type: 'imageWithMetadata' })],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: 'description',
      type: 'portableContent',
      description: 'The approved build story, written for a general visitor.',
    }),
    defineField({ name: 'techStack', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'liveUrl', type: 'url' }),
    defineField({ name: 'githubUrl', type: 'url' }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      description: 'Controls the project publication date and ordering.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: { list: ['Live', 'In progress', 'Concept'], layout: 'radio' },
      initialValue: 'Live',
    }),
    defineField({ name: 'featured', title: 'Featured (e.g. StudyRise)', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'status', media: 'coverImage' } },
})
