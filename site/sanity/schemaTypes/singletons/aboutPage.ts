import { defineArrayMember, defineField, defineType } from 'sanity'

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
      title: 'Opening portrait',
      type: 'imageWithMetadata',
      description: 'Approved portrait or labelled placeholder for the About page.',
    }),
    defineField({
      name: 'lifestyleImages',
      title: 'Human-side image sequence',
      type: 'array',
      description: 'Up to three approved images: desk/writing, hospital/work, and Bangladesh-Australia life.',
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'image', type: 'imageWithMetadata' }),
            defineField({
              name: 'label',
              type: 'string',
              description: 'Internal slot label shown while the photograph is pending.',
            }),
          ],
          preview: { select: { title: 'label', media: 'image' } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
