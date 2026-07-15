import { defineArrayMember, defineField, defineType } from 'sanity'

export const workPage = defineType({
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  fields: [
    defineField({
      name: 'publicFraming',
      title: 'Approved public framing',
      type: 'portableContent',
      description: 'Professional story only. Avoid detailed current titles until approved.',
    }),
    defineField({
      name: 'areasOfFocus',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),
    defineField({
      name: 'workImage',
      type: 'imageWithMetadata',
      description: 'Optional approved work-related image or labelled placeholder.',
    }),
    defineField({
      name: 'cvEnabled',
      title: 'Show CV download',
      type: 'boolean',
      initialValue: false,
      description: 'Keep off until a real approved public CV exists.',
    }),
    defineField({
      name: 'cvFile',
      title: 'Approved public CV',
      type: 'file',
      options: { accept: 'application/pdf' },
      description: 'Upload the final public PDF before switching the CV control on.',
      hidden: ({ parent }) => parent?.cvEnabled !== true,
    }),
  ],
  preview: { prepare: () => ({ title: 'Work Page' }) },
})
