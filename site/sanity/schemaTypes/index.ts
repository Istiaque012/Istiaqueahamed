import { type SchemaTypeDefinition } from 'sanity'

import { blogPost } from './documents/blogPost'
import { journalEntry } from './documents/journalEntry'
import { fatherPiece } from './documents/fatherPiece'
import { project } from './documents/project'
import { documentary } from './documents/documentary'
import { book } from './documents/book'
import { timelineEvent } from './documents/timelineEvent'

import { siteSettings } from './singletons/siteSettings'
import { aboutPage } from './singletons/aboutPage'
import { coursePage } from './singletons/coursePage'

export const documentTypes = [
  blogPost,
  journalEntry,
  fatherPiece,
  project,
  documentary,
  book,
  timelineEvent,
]

export const singletonTypes = [siteSettings, aboutPage, coursePage]

export const schemaTypes: SchemaTypeDefinition[] = [...documentTypes, ...singletonTypes]

// Singletons that should be edited as a single document (no "create new").
export const singletonNames = new Set<string>(singletonTypes.map((t) => t.name))
