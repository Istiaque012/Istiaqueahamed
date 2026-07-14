'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes, singletonNames } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Istiaque Ahamed',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "create new document" menu.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonNames.has(schemaType)),
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
