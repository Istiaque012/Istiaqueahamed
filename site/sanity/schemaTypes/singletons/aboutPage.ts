import { defineField, defineType } from 'sanity'

// The six story blocks for the About page:
// hook → credentials → why medicine/father → the human side → what this site is → CTA
export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'hook', title: '1 · Hook', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'credentials', title: '2 · Credentials', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'whyMedicine', title: '3 · Why medicine / father', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'humanSide', title: '4 · The human side', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'whatThisSiteIs', title: '5 · What this site is', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'cta', title: '6 · Call to action', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'portrait', type: 'image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
