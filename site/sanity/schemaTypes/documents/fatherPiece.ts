import { defineField, defineType } from 'sanity'

export const fatherPiece = defineType({
  name: 'fatherPiece',
  title: 'My Beloved Father — Piece',
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
      name: 'format',
      type: 'string',
      options: { list: ['Essay', 'Note'], layout: 'radio' },
      initialValue: 'Essay',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'body', type: 'portableContent' }),
    defineField({
      name: 'image',
      type: 'imageWithMetadata',
      description: 'Optional approved archive image or labelled placeholder.',
    }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'format', media: 'image' } },
})
