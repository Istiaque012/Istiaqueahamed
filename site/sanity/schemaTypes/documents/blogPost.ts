import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['Health & Medicine', 'Life in Medicine', 'Opinion', 'Personal'],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'featured', title: 'Featured / pinned', type: 'boolean', initialValue: false }),
    // readingTime is derived from body at query time; not stored.
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
})
