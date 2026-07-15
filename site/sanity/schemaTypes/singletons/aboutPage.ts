import { defineField, defineType } from 'sanity'

// The six story blocks for the About page:
// hook → credentials → why medicine/father → the human side → what this site is → CTA
export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'hook', title: '1 · Hook', type: 'portableContent' }),
    defineField({ name: 'credentials', title: '2 · Credentials', type: 'portableContent' }),
    defineField({
      name: 'whyMedicine',
      title: '3 · Why medicine / father',
      type: 'portableContent',
    }),
    defineField({ name: 'humanSide', title: '4 · The human side', type: 'portableContent' }),
    defineField({ name: 'whatThisSiteIs', title: '5 · What this site is', type: 'portableContent' }),
    defineField({ name: 'cta', title: '6 · Call to action', type: 'portableContent' }),
    defineField({
      name: 'portrait',
      type: 'imageWithMetadata',
      description: 'Approved portrait or labelled placeholder for the About page.',
    }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
