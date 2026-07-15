import { defineField, defineType } from 'sanity'

export const routeLink = defineType({
  name: 'routeLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL or site path',
      type: 'string',
      description: 'Use a site path like /about or a full https:// URL.',
      validation: (rule) =>
        rule.required().custom((value) => {
          if (!value) return true
          if (value.startsWith('/') || /^https?:\/\//.test(value)) return true
          return 'Use a site path beginning with / or a full https:// URL.'
        }),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
})
