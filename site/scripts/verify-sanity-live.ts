import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { extractYouTubeId } from '../lib/youtube'

const root = process.cwd()

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

function read(path: string) {
  return readFileSync(join(root, path), 'utf8')
}

const requiredFiles = [
  'lib/sanity/live.ts',
  'lib/sanity/fetch.ts',
  'lib/sanity/tags.ts',
  'lib/sanity/types.ts',
  'components/SanityPortableText.tsx',
  'components/YouTubeFacade.tsx',
  'lib/youtube.ts',
  'app/api/draft-mode/enable/route.ts',
  'app/api/draft-mode/disable/route.ts',
  'app/api/revalidate/route.ts',
  'app/feed.xml/route.ts',
  'sanity/presentation.ts',
]

for (const file of requiredFiles) {
  assert(existsSync(join(root, file)), `Missing Sanity live file: ${file}`)
}

const queries = read('lib/sanity/queries.ts')
for (const queryName of [
  'blogPostsQuery',
  'blogPostBySlugQuery',
  'journalEntriesQuery',
  'journalEntryBySlugQuery',
  'fatherPiecesQuery',
  'fatherPieceBySlugQuery',
  'projectsQuery',
  'projectBySlugQuery',
  'documentariesQuery',
  'booksQuery',
  'timelineQuery',
  'feedQuery',
  'feedTeaserQuery',
  'homeWritingQuery',
  'workPageQuery',
  'coursePageQuery',
  'contactPageQuery',
]) {
  assert(queries.includes(`export const ${queryName} = defineQuery`), `Missing typed query: ${queryName}`)
}

const projectSchema = read('sanity/schemaTypes/documents/project.ts')
assert(projectSchema.includes("name: 'screenshots'"), 'Project schema must expose approved screenshot media')
assert(projectSchema.includes("name: 'publishedAt'"), 'Project schema must provide Feed publication timing')

const workSchema = read('sanity/schemaTypes/singletons/workPage.ts')
assert(workSchema.includes("name: 'cvFile'"), 'Work schema must keep the approved CV file separate from its toggle')

const documentarySchema = read('sanity/schemaTypes/documents/documentary.ts')
assert(documentarySchema.includes("name: 'featured'"), 'Documentary schema must support a featured film')
assert(documentarySchema.includes("name: 'themes'"), 'Documentary schema must support multiple approved themes')

const timelineSchema = read('sanity/schemaTypes/documents/timelineEvent.ts')
assert(timelineSchema.includes("name: 'sortOrder'"), 'Timeline schema must support deliberate story order')
assert(timelineSchema.includes("name: 'relatedLink'"), 'Timeline events must support related-page links')

const bookSchema = read('sanity/schemaTypes/documents/book.ts')
for (const field of ['note', 'status', 'sortOrder']) {
  assert(bookSchema.includes(`name: '${field}'`), `Book schema must expose ${field}`)
}

const courseSchema = read('sanity/schemaTypes/singletons/coursePage.ts')
for (const field of ['status', 'intendedAudience', 'themes', 'writingLink', 'primaryAction']) {
  assert(courseSchema.includes(`name: '${field}'`), `Course schema must expose ${field}`)
}

const contactSchema = read('sanity/schemaTypes/singletons/contactPage.ts')
for (const field of ['welcomeCopy', 'formEnabled', 'successMessage']) {
  assert(contactSchema.includes(`name: '${field}'`), `Contact schema must expose ${field}`)
}

for (const route of ['documentaries', 'timeline', 'bookshelf', 'course', 'contact']) {
  const page = read(`app/(site)/${route}/page.tsx`)
  assert(!page.includes('noIndex: true'), `${route} must be indexable after its page session`)
}

const editorial = read('lib/editorial.ts')
assert(editorial.includes('/documentaries#'), 'Documentary Feed destinations must open the matching film')

const youtubeId = 'dQw4w9WgXcQ'
for (const url of [
  `https://www.youtube.com/watch?v=${youtubeId}`,
  `https://youtu.be/${youtubeId}`,
  `https://www.youtube-nocookie.com/embed/${youtubeId}`,
  `https://www.youtube.com/shorts/${youtubeId}`,
]) {
  assert(extractYouTubeId(url) === youtubeId, `Unsupported YouTube URL format: ${url}`)
}
assert(extractYouTubeId('https://example.com/watch?v=dQw4w9WgXcQ') === undefined, 'Non-YouTube URLs must fail closed')

for (const imageField of ['coverImage', 'image', 'thumbnail']) {
  assert(queries.includes(`"${imageField}":`), `Missing image projection for ${imageField}`)
}

const rootLayout = read('app/layout.tsx')
assert(rootLayout.includes('<SanityLive includeDrafts='), 'Root layout must render SanityLive')
assert(rootLayout.includes('<VisualEditing />'), 'Root layout must render VisualEditing in draft preview')

const sanityConfig = read('sanity.config.ts')
assert(sanityConfig.includes('presentationTool'), 'Sanity Studio must include Presentation Tool')
assert(sanityConfig.includes('presentationLocations'), 'Sanity Studio must expose preview locations')

const nextConfig = read('next.config.mjs')
assert(nextConfig.includes('cdn.sanity.io'), 'Next image config must allow Sanity CDN images')

const envExample = read('.env.example')
assert(envExample.includes('SANITY_API_READ_TOKEN='), '.env.example must document the read token')
assert(envExample.includes('SANITY_REVALIDATE_SECRET='), '.env.example must document revalidation secret')

console.log(`Sanity live verified: ${requiredFiles.length} files, typed queries, preview, webhook, and image config.`)
