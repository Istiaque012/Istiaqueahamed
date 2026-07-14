import { groq } from 'next-sanity'

/**
 * GROQ queries. Reading-time is derived from Portable Text at query time
 * (~200 wpm over block children) so we never store a stale count.
 */
const READING_TIME = `"readingTime": round(length(pt::text(body)) / 5 / 200)`

// ── Blog ─────────────────────────────────────────────────────────────────────
export const blogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, category, excerpt, coverImage,
    publishedAt, featured, ${READING_TIME}
  }`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, category, excerpt, coverImage, body,
    publishedAt, featured, ${READING_TIME}
  }`

export const blogSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)].slug.current`

// ── Journal ──────────────────────────────────────────────────────────────────
export const journalEntriesQuery = groq`
  *[_type == "journalEntry" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, type, publishedAt,
    relatedBook->{ _id, title, author }
  }`

export const journalEntryBySlugQuery = groq`
  *[_type == "journalEntry" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, type, body, publishedAt,
    relatedBook->{ _id, title, author, coverImage }
  }`

// ── Father pieces ────────────────────────────────────────────────────────────
export const fatherPiecesQuery = groq`
  *[_type == "fatherPiece" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, format, image, publishedAt
  }`

// ── Projects ─────────────────────────────────────────────────────────────────
export const projectsQuery = groq`
  *[_type == "project"] | order(featured desc, name asc) {
    _id, name, "slug": slug.current, tagline, coverImage, techStack,
    liveUrl, githubUrl, status, featured
  }`

// ── Documentaries ────────────────────────────────────────────────────────────
export const documentariesQuery = groq`
  *[_type == "documentary"] | order(publishedAt desc) {
    _id, title, youtubeUrl, thumbnail, description, topic, publishedAt
  }`

// ── Books ────────────────────────────────────────────────────────────────────
export const booksQuery = groq`
  *[_type == "book"] | order(_createdAt desc) {
    _id, title, author, coverImage, note, status
  }`

// ── Timeline ─────────────────────────────────────────────────────────────────
export const timelineQuery = groq`
  *[_type == "timelineEvent"] | order(year asc) {
    _id, year, title, description, category
  }`

// ── Singletons ───────────────────────────────────────────────────────────────
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const aboutPageQuery = groq`*[_type == "aboutPage"][0]`
export const coursePageQuery = groq`*[_type == "coursePage"][0]`

// ── The merged Feed ──────────────────────────────────────────────────────────
// Pulls blogPost, journalEntry, fatherPiece, project, documentary into one
// stream sorted by publishedAt desc. Each item keeps its _type so the UI can
// render the right tag and filter. Projects have no publishedAt → fall back to
// _createdAt so they still interleave.
export const feedQuery = groq`
  *[_type in ["blogPost", "journalEntry", "fatherPiece", "project", "documentary"]]
    | order(coalesce(publishedAt, _createdAt) desc) {
      _id, _type,
      "date": coalesce(publishedAt, _createdAt),
      "title": select(_type == "project" => name, title),
      "slug": slug.current,
      "tag": select(
        _type == "blogPost" => category,
        _type == "journalEntry" => type,
        _type == "fatherPiece" => format,
        _type == "project" => status,
        _type == "documentary" => topic,
        _type
      ),
      "readingTime": select(
        _type in ["blogPost"] => round(length(pt::text(body)) / 5 / 200),
        null
      )
    }`

// A short teaser for the Home page — top N of the same feed.
export const feedTeaserQuery = groq`${feedQuery}[0...$limit]`
