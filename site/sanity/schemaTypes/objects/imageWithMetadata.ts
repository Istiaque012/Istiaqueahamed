import { defineField, defineType } from 'sanity'

export const imageWithMetadata = defineType({
  name: 'imageWithMetadata',
  title: 'Image',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description:
        'Describe the image for screen readers and search. Leave empty only for decorative images.',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      description: 'Optional short caption shown near the image where the page design supports it.',
    }),
    defineField({
      name: 'placeholderLabel',
      title: 'Placeholder label',
      type: 'string',
      description:
        'Use this only when the real photo is missing, e.g. "Portrait placeholder".',
    }),
  ],
})
