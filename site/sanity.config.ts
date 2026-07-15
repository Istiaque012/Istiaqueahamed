'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { createElement } from 'react'
import { Icon, type IconSymbol } from '@sanity/icons'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes, singletonNames } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

const sanityIcon = (symbol: IconSymbol) =>
  function SanityIcon() {
    return createElement(Icon, { symbol })
  }

const ComposeIcon = sanityIcon('compose')
const DocumentTextIcon = sanityIcon('document-text')
const EditIcon = sanityIcon('edit')
const HeartIcon = sanityIcon('heart')

export default defineConfig({
  name: 'default',
  title: 'Istiaque Ahamed',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      [
        {
          id: 'blogPost-health',
          title: 'Blog post - Health & Medicine',
          schemaType: 'blogPost',
          icon: DocumentTextIcon,
          value: { category: 'Health & Medicine', featured: false, featureOnHome: false },
        },
        {
          id: 'blogPost-life',
          title: 'Blog post - Life in Medicine',
          schemaType: 'blogPost',
          icon: DocumentTextIcon,
          value: { category: 'Life in Medicine', featured: false, featureOnHome: false },
        },
        {
          id: 'blogPost-opinion',
          title: 'Blog post - Opinion',
          schemaType: 'blogPost',
          icon: DocumentTextIcon,
          value: { category: 'Opinion', featured: false, featureOnHome: false },
        },
        {
          id: 'blogPost-personal',
          title: 'Blog post - Personal',
          schemaType: 'blogPost',
          icon: DocumentTextIcon,
          value: { category: 'Personal', featured: false, featureOnHome: false },
        },
        {
          id: 'journalEntry-thought',
          title: 'Journal entry - Thought',
          schemaType: 'journalEntry',
          icon: EditIcon,
          value: { type: 'Thought', featureOnHome: false },
        },
        {
          id: 'journalEntry-read',
          title: 'Journal entry - Read',
          schemaType: 'journalEntry',
          icon: EditIcon,
          value: { type: 'Read', featureOnHome: false },
        },
        {
          id: 'journalEntry-observation',
          title: 'Journal entry - Observation',
          schemaType: 'journalEntry',
          icon: EditIcon,
          value: { type: 'Observation', featureOnHome: false },
        },
        {
          id: 'fatherPiece-essay',
          title: 'Father piece - Essay',
          schemaType: 'fatherPiece',
          icon: HeartIcon,
          value: { format: 'Essay' },
        },
        {
          id: 'fatherPiece-note',
          title: 'Father piece - Note',
          schemaType: 'fatherPiece',
          icon: ComposeIcon,
          value: { format: 'Note' },
        },
        ...templates.filter(({ schemaType }) => !singletonNames.has(schemaType)),
      ],
  },
  document: {
    // Remove "duplicate" / "delete" actions for singletons.
    actions: (input, context) =>
      singletonNames.has(context.schemaType)
        ? input.filter(({ action }) =>
            ['publish', 'discardChanges', 'restore'].includes(action ?? ''),
          )
        : input,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})
