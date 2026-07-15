import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — one document; managed via structure, not the create menu.
  fields: [
    defineField({ name: 'name', type: 'string', description: 'Full name (feeds Person schema)' }),
    defineField({
      name: 'tagline',
      type: 'string',
      description: 'Approved public tagline used across metadata and prominent page areas.',
    }),
    defineField({
      name: 'bio',
      title: 'Bio (natural-language, for AI search)',
      type: 'text',
      rows: 5,
      description: 'Canonical public identity summary. Keep this aligned with the raw source.',
    }),
    defineField({ name: 'ogImage', title: 'Default OG image', type: 'imageWithMetadata' }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'object',
          fields: [
            { name: 'platform', type: 'string' },
            { name: 'url', type: 'url' },
          ],
          preview: { select: { title: 'platform', subtitle: 'url' } },
        }),
      ],
    }),
    // Person-schema fields
    defineField({ name: 'jobTitle', type: 'string' }),
    defineField({ name: 'worksFor', title: 'Works for / affiliations', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'alumniOf', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
