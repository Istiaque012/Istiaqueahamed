import { defineQuery } from 'next-sanity'

/**
 * GROQ queries. Reading-time is derived from Portable Text at query time
 * (~200 wpm over block children) so we never store a stale count.
 */
const READING_TIME = `"readingTime": round(length(pt::text(body)) / 5 / 200)`
const IMAGE = `{
  ...,
  asset->{
    _id,
    url,
    metadata {
      lqip,
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  }
}`

// ── Blog ─────────────────────────────────────────────────────────────────────
export const blogPostsQuery = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    _id, _type, _updatedAt, title, "slug": slug.current, category, excerpt,
    "coverImage": coverImage ${IMAGE},
    publishedAt, featured, featureOnHome, homeFeatureRank, seoTitle, seoDescription, ${READING_TIME}
  }`)

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id, _type, _updatedAt, title, "slug": slug.current, category, excerpt,
    "coverImage": coverImage ${IMAGE}, body,
    publishedAt, featured, featureOnHome, homeFeatureRank, seoTitle, seoDescription, ${READING_TIME}
  }`)

export const blogSlugsQuery = defineQuery(`*[_type == "blogPost" && defined(slug.current)].slug.current`)

// ── Journal ──────────────────────────────────────────────────────────────────
export const journalEntriesQuery = defineQuery(`
  *[_type == "journalEntry" && defined(slug.current)] | order(publishedAt desc) {
    _id, _type, _updatedAt, title, "slug": slug.current, type, publishedAt,
    featureOnHome, homeFeatureRank, ${READING_TIME},
    relatedBook->{ _id, _type, title, author }
  }`)

export const journalEntryBySlugQuery = defineQuery(`
  *[_type == "journalEntry" && slug.current == $slug][0] {
    _id, _type, _updatedAt, title, "slug": slug.current, type, body, publishedAt,
    featureOnHome, homeFeatureRank, ${READING_TIME},
    relatedBook->{ _id, _type, title, author, "coverImage": coverImage ${IMAGE} }
  }`)

// ── Father pieces ────────────────────────────────────────────────────────────
export const fatherPiecesQuery = defineQuery(`
  *[_type == "fatherPiece" && defined(slug.current)] | order(publishedAt desc) {
    _id, _type, _updatedAt, title, "slug": slug.current, format,
    "image": image ${IMAGE}, publishedAt, ${READING_TIME}
  }`)

export const fatherPieceBySlugQuery = defineQuery(`
  *[_type == "fatherPiece" && slug.current == $slug][0] {
    _id, _type, _updatedAt, title, "slug": slug.current, format, body,
    "image": image ${IMAGE}, publishedAt, ${READING_TIME}
  }`)

// ── Projects ─────────────────────────────────────────────────────────────────
export const projectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(featured desc, publishedAt desc, name asc) {
    _id, _type, _updatedAt, name, "slug": slug.current, tagline,
    "coverImage": coverImage ${IMAGE}, techStack,
    liveUrl, githubUrl, publishedAt, status, featured
  }`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id, _type, _updatedAt, name, "slug": slug.current, tagline,
    "coverImage": coverImage ${IMAGE}, "screenshots": screenshots[] ${IMAGE},
    description, techStack, liveUrl, githubUrl, publishedAt, status, featured
  }`)

// ── Documentaries ────────────────────────────────────────────────────────────
export const documentariesQuery = defineQuery(`
  *[_type == "documentary"] | order(featured desc, publishedAt desc, _id asc) {
    _id, _type, _updatedAt, title, youtubeUrl, "thumbnail": thumbnail ${IMAGE},
    description, topic, themes, featured, publishedAt
  }`)

// ── Books ────────────────────────────────────────────────────────────────────
export const booksQuery = defineQuery(`
  *[_type == "book"] | order(coalesce(sortOrder, 999) asc, title asc, _id asc) {
    _id, _type, _updatedAt, title, author, "coverImage": coverImage ${IMAGE}, note, status, sortOrder
  }`)

// ── Timeline ─────────────────────────────────────────────────────────────────
export const timelineQuery = defineQuery(`
  *[_type == "timelineEvent"] | order(coalesce(sortOrder, 999) asc, year asc, _id asc) {
    _id, _type, _updatedAt, year, title, description, category, sortOrder,
    relatedLink { label, href }
  }`)

// ── Singletons ───────────────────────────────────────────────────────────────
export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`)
export const homePageQuery = defineQuery(`
  *[_type == "homePage"][0] {
    _id, _type, _updatedAt,
    presence {
      headline,
      roleLine,
      portrait {
        ...,
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions { width, height, aspectRatio }
          }
        }
      }
    },
    pointOfView,
    fatherDoorway {
      copy,
      archiveImage {
        ...,
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions { width, height, aspectRatio }
          }
        }
      }
    },
    foundation,
    studyRise,
    lifeInMotion[] {
      _key,
      label,
      image {
        ...,
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions { width, height, aspectRatio }
          }
        }
      }
    },
    contactInvitation
  }`)
export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage"][0] {
    _id, _type, _updatedAt,
    hook,
    credentials,
    whyMedicine,
    humanSide,
    whatThisSiteIs,
    cta,
    portrait {
      ...,
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions { width, height, aspectRatio }
        }
      }
    },
    lifestyleImages[] {
      _key,
      label,
      image {
        ...,
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions { width, height, aspectRatio }
          }
        }
      }
    }
  }`)
export const fatherPageQuery = defineQuery(`
  *[_type == "fatherPage"][0] {
    _id, _type, _updatedAt,
    opening,
    archiveImages[] {
      _key,
      caption,
      "image": image ${IMAGE}
    }
  }`)
export const workPageQuery = defineQuery(`
  *[_type == "workPage"][0] {
    _id, _type, _updatedAt, publicFraming,
    areasOfFocus[] { _key, title, description },
    "workImage": workImage ${IMAGE},
    cvEnabled,
    cvFile { asset->{ url, originalFilename } }
  }`)
export const coursePageQuery = defineQuery(`
  *[_type == "coursePage"][0] {
    _id, _type, _updatedAt, status, headline, body, intendedAudience,
    themes[] { _key, title, description },
    writingLink { label, href },
    primaryAction { label, href }
  }`)
export const contactPageQuery = defineQuery(`
  *[_type == "contactPage"][0] {
    _id, _type, _updatedAt, welcomeCopy, formEnabled, successMessage
  }`)

// ── The merged Feed ──────────────────────────────────────────────────────────
// Pulls blogPost, journalEntry, fatherPiece, project, documentary into one
// stream sorted by publishedAt desc. Each item keeps its _type so the UI can
// render the right tag and filter. Projects have no publishedAt → fall back to
// _createdAt so they still interleave.
export const feedQuery = defineQuery(`
  *[
    _type in ["blogPost", "journalEntry", "fatherPiece", "project", "documentary"] &&
    (_type == "documentary" || defined(slug.current))
  ] | order(coalesce(publishedAt, _createdAt) desc, _id asc) {
      _id, _type, _updatedAt,
      "date": coalesce(publishedAt, _createdAt),
      "title": select(_type == "project" => name, title),
      "slug": slug.current,
      "excerpt": select(
        _type == "blogPost" => excerpt,
        _type == "project" => tagline,
        _type == "documentary" => description,
        null
      ),
      "tag": select(
        _type == "blogPost" => category,
        _type == "journalEntry" => type,
        _type == "fatherPiece" => format,
        _type == "project" => status,
        _type == "documentary" => topic,
        _type
      ),
      "readingTime": select(
        _type in ["blogPost", "journalEntry", "fatherPiece"] => round(length(pt::text(body)) / 5 / 200),
        null
      ),
      "image": select(
        _type == "blogPost" => coverImage ${IMAGE},
        _type == "fatherPiece" => image ${IMAGE},
        _type == "project" => coverImage ${IMAGE},
        _type == "documentary" => thumbnail ${IMAGE},
        null
      )
    }`)

// A short teaser for the Home page — top N of the same feed.
export const feedTeaserQuery = defineQuery(`
  *[
    _type in ["blogPost", "journalEntry", "fatherPiece", "project", "documentary"] &&
    (_type == "documentary" || defined(slug.current))
  ] | order(coalesce(publishedAt, _createdAt) desc, _id asc)[0...$limit] {
      _id, _type, _updatedAt,
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
        _type in ["blogPost", "journalEntry", "fatherPiece"] => round(length(pt::text(body)) / 5 / 200),
        null
      )
    }`)

export const homeWritingQuery = defineQuery(`
  {
    "featured": *[
      _type in ["blogPost", "journalEntry"] &&
      defined(slug.current) &&
      featureOnHome == true
    ] | order(coalesce(homeFeatureRank, 99) asc, publishedAt desc)[0] {
      _id, _type, _updatedAt, title, "slug": slug.current,
      "date": publishedAt,
      "tag": select(_type == "blogPost" => category, _type == "journalEntry" => type),
      "excerpt": select(_type == "blogPost" => excerpt, null),
      "image": select(_type == "blogPost" => coverImage ${IMAGE}, null),
      ${READING_TIME}
    },
    "latest": *[
      _type in ["blogPost", "journalEntry"] &&
      defined(slug.current)
    ] | order(publishedAt desc)[0...4] {
      _id, _type, _updatedAt, title, "slug": slug.current,
      "date": publishedAt,
      "tag": select(_type == "blogPost" => category, _type == "journalEntry" => type),
      "excerpt": select(_type == "blogPost" => excerpt, null),
      ${READING_TIME}
    }
  }`)
