import { type SchemaTypeDefinition } from 'sanity'

import { blogPost } from './documents/blogPost'
import { journalEntry } from './documents/journalEntry'
import { fatherPiece } from './documents/fatherPiece'
import { project } from './documents/project'
import { documentary } from './documents/documentary'
import { book } from './documents/book'
import { timelineEvent } from './documents/timelineEvent'

import { siteSettings } from './singletons/siteSettings'
import { homePage } from './singletons/homePage'
import { aboutPage } from './singletons/aboutPage'
import { fatherPage } from './singletons/fatherPage'
import { workPage } from './singletons/workPage'
import { coursePage } from './singletons/coursePage'
import { contactPage } from './singletons/contactPage'

import { imageWithMetadata } from './objects/imageWithMetadata'
import { portableContent } from './objects/portableContent'
import { routeLink } from './objects/routeLink'

export const documentTypes = [
  blogPost,
  journalEntry,
  fatherPiece,
  project,
  documentary,
  book,
  timelineEvent,
]

export const singletonTypes = [
  siteSettings,
  homePage,
  aboutPage,
  fatherPage,
  workPage,
  coursePage,
  contactPage,
]

export const objectTypes = [imageWithMetadata, portableContent, routeLink]

export const schemaTypes: SchemaTypeDefinition[] = [
  ...documentTypes,
  ...singletonTypes,
  ...objectTypes,
]

// Singletons that should be edited as a single document (no "create new").
export const singletonNames = new Set<string>(singletonTypes.map((t) => t.name))
