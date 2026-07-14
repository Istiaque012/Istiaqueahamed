import { defineField, defineType } from 'sanity'

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
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'techStack', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'liveUrl', type: 'url' }),
    defineField({ name: 'githubUrl', type: 'url' }),
    defineField({
      name: 'status',
      type: 'string',
      options: { list: ['Live', 'In progress', 'Concept'], layout: 'radio' },
    }),
    defineField({ name: 'featured', title: 'Featured (e.g. StudyRise)', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'status', media: 'coverImage' } },
})
