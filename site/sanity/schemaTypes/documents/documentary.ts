import { defineField, defineType } from 'sanity'

export const documentary = defineType({
  name: 'documentary',
  title: 'Documentary',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url', validation: (r) => r.required() }),
    defineField({ name: 'thumbnail', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'topic', title: 'Topic / theme', type: 'string' }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'topic', media: 'thumbnail' } },
})
