import { defineArrayMember, defineField, defineType } from 'sanity'

export const fatherPage = defineType({
  name: 'fatherPage',
  title: 'Father Page',
  type: 'document',
  fields: [
    defineField({
      name: 'opening',
      title: 'Opening copy',
      type: 'portableContent',
      description: 'The quiet introduction to this section, written only from approved material.',
    }),
    defineField({
      name: 'archiveImages',
      title: 'Archive image slots',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'image', type: 'imageWithMetadata' }),
            defineField({ name: 'caption', type: 'string' }),
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Father Page' }) },
})
