import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'The public title shown on Blog, Feed, and the article page.',
      validation: (r) => r.required(),
    }),
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
      initialValue: 'Health & Medicine',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'imageWithMetadata',
      description: 'Optional article cover. The site has a designed no-image state.',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for cards, social previews, and search snippets.',
    }),
    defineField({ name: 'body', type: 'portableContent' }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'featured', title: 'Featured / pinned', type: 'boolean', initialValue: false }),
    defineField({
      name: 'featureOnHome',
      title: 'Feature on Home',
      type: 'boolean',
      initialValue: false,
      description: 'Allow this post to be selected for the Home writing scene.',
    }),
    defineField({
      name: 'homeFeatureRank',
      title: 'Home feature rank',
      type: 'number',
      description: 'Optional lower number wins when more than one item is featured on Home.',
      validation: (r) => r.min(1).max(20).integer(),
      hidden: ({ parent }) => parent?.featureOnHome !== true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description: 'Optional override. Leave empty to use the title.',
      validation: (r) => r.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      description: 'Optional search/social description. Leave empty to use the excerpt.',
      validation: (r) => r.max(170),
    }),
    // readingTime is derived from body at query time; not stored.
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
})
