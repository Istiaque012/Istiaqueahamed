import { defineArrayMember, defineField, defineType } from 'sanity'

export const documentary = defineType({
  name: 'documentary',
  title: 'Documentary',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url', validation: (r) => r.required() }),
    defineField({ name: 'thumbnail', type: 'imageWithMetadata' }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'Approved public context only. Do not invent film details.',
      validation: (r) => r.required().max(500),
    }),
    defineField({ name: 'topic', title: 'Primary theme', type: 'string' }),
    defineField({
      name: 'themes',
      title: 'Additional themes',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (r) => r.max(5).unique(),
    }),
    defineField({
      name: 'featured',
      title: 'Feature this film',
      type: 'boolean',
      description: 'The newest featured film receives the large opening presentation.',
      initialValue: false,
    }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'topic', media: 'thumbnail' } },
})
