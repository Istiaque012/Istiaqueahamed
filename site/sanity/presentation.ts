import { defineDocuments, defineLocations } from 'sanity/presentation'

const previewOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000'

const singletonLocations = {
  homePage: { title: 'Home', href: '/' },
  aboutPage: { title: 'About', href: '/about' },
  fatherPage: { title: 'Father', href: '/father' },
  workPage: { title: 'Work', href: '/work' },
  coursePage: { title: 'Course', href: '/course' },
  contactPage: { title: 'Contact', href: '/contact' },
  siteSettings: { title: 'Home', href: '/' },
} as const

export const presentationPreviewUrl = {
  initial: previewOrigin,
  previewMode: {
    enable: '/api/draft-mode/enable',
    disable: '/api/draft-mode/disable',
    shareAccess: false,
  },
}

export const presentationMainDocuments = defineDocuments([
  { route: '/', type: 'homePage' },
  { route: '/about', type: 'aboutPage' },
  { route: '/father', type: 'fatherPage' },
  { route: '/work', type: 'workPage' },
  { route: '/course', type: 'coursePage' },
  { route: '/contact', type: 'contactPage' },
  {
    route: '/blog/:slug',
    filter: '_type == "blogPost" && slug.current == $slug',
    params: ({ params }) => ({ slug: params.slug ?? '' }),
  },
  {
    route: '/journal/:slug',
    filter: '_type == "journalEntry" && slug.current == $slug',
    params: ({ params }) => ({ slug: params.slug ?? '' }),
  },
  {
    route: '/father/:slug',
    filter: '_type == "fatherPiece" && slug.current == $slug',
    params: ({ params }) => ({ slug: params.slug ?? '' }),
  },
  {
    route: '/projects/:slug',
    filter: '_type == "project" && slug.current == $slug',
    params: ({ params }) => ({ slug: params.slug ?? '' }),
  },
])

export const presentationLocations = {
  blogPost: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (value) =>
      value?.slug
        ? { locations: [{ title: value.title || 'Blog post', href: `/blog/${value.slug}` }] }
        : { message: 'Add a slug before previewing this Blog post.', tone: 'caution' },
  }),
  journalEntry: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (value) =>
      value?.slug
        ? { locations: [{ title: value.title || 'Journal entry', href: `/journal/${value.slug}` }] }
        : { message: 'Add a slug before previewing this Journal entry.', tone: 'caution' },
  }),
  fatherPiece: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (value) =>
      value?.slug
        ? { locations: [{ title: value.title || 'Father piece', href: `/father/${value.slug}` }] }
        : { message: 'Add a slug before previewing this Father piece.', tone: 'caution' },
  }),
  project: defineLocations({
    select: { title: 'name', slug: 'slug.current' },
    resolve: (value) =>
      value?.slug
        ? { locations: [{ title: value.title || 'Project', href: `/projects/${value.slug}` }] }
        : { message: 'Add a slug before previewing this Project.', tone: 'caution' },
  }),
  documentary: defineLocations({
    select: { title: 'title' },
    resolve: (value) => ({ locations: [{ title: value?.title || 'Film', href: '/documentaries' }] }),
  }),
  book: defineLocations({
    select: { title: 'title' },
    resolve: (value) => ({ locations: [{ title: value?.title || 'Book', href: '/bookshelf' }] }),
  }),
  timelineEvent: defineLocations({
    select: { title: 'title' },
    resolve: (value) => ({
      locations: [{ title: value?.title || 'Timeline event', href: '/timeline' }],
    }),
  }),
  ...Object.fromEntries(
    Object.entries(singletonLocations).map(([type, location]) => [
      type,
      defineLocations({ locations: [location] }),
    ]),
  ),
}
