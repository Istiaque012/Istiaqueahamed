import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'presence',
      title: '1 · Presence',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          type: 'string',
          description: 'Usually the name. Keep this factual and short.',
        }),
        defineField({
          name: 'roleLine',
          title: 'Public role line',
          type: 'text',
          rows: 2,
          description: 'The approved one-sentence public framing for the hero.',
        }),
        defineField({
          name: 'portrait',
          type: 'imageWithMetadata',
          description: 'Main personal portrait. Keep the placeholder until a real photo is approved.',
        }),
      ],
    }),
    defineField({
      name: 'pointOfView',
      title: '2 · Point of view',
      type: 'portableContent',
      description: 'Healthcare beyond the consultation room.',
    }),
    defineField({
      name: 'fatherDoorway',
      title: '3 · Father doorway',
      type: 'object',
      fields: [
        defineField({ name: 'copy', type: 'portableContent' }),
        defineField({ name: 'archiveImage', type: 'imageWithMetadata' }),
      ],
    }),
    defineField({
      name: 'foundation',
      title: '4 · Foundation',
      type: 'portableContent',
      description: 'Education and Bangladesh-Australia arc using only confirmed facts.',
    }),
    defineField({
      name: 'studyRise',
      title: '5 · StudyRise proof',
      type: 'portableContent',
      description: 'Short public introduction to StudyRise as the proof-of-building scene.',
    }),
    defineField({
      name: 'lifeInMotion',
      title: '7 · Life in motion images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'image', type: 'imageWithMetadata' }),
            defineField({
              name: 'label',
              type: 'string',
              description: 'Internal slot label, e.g. "Australia walk placeholder".',
            }),
          ],
          preview: {
            select: { title: 'label', media: 'image' },
          },
        }),
      ],
    }),
    defineField({
      name: 'contactInvitation',
      title: '8 · Open door',
      type: 'portableContent',
      description: 'Closing invitation. Do not add contact details here unless confirmed.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
})
