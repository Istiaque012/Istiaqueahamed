export type SanityDocumentType =
  | 'blogPost'
  | 'journalEntry'
  | 'fatherPiece'
  | 'project'
  | 'documentary'
  | 'book'
  | 'timelineEvent'
  | 'siteSettings'
  | 'homePage'
  | 'aboutPage'
  | 'fatherPage'
  | 'workPage'
  | 'coursePage'
  | 'contactPage'

export type SanityReference = {
  _ref: string
  _type: 'reference'
}

export type SanityImageAsset = {
  _id: string
  url?: string
  metadata?: {
    lqip?: string
    dimensions?: {
      width?: number
      height?: number
      aspectRatio?: number
    }
  }
}

export type SanityImageWithMetadata = {
  _type?: 'image' | 'imageWithMetadata'
  asset?: SanityReference | SanityImageAsset
  alt?: string
  caption?: string
  placeholderLabel?: string
  crop?: Record<string, number>
  hotspot?: Record<string, number>
}

export type PortableTextBlock = {
  _key: string
  _type: string
  children?: Array<{
    _key: string
    _type: string
    marks?: string[]
    text?: string
  }>
  markDefs?: Array<Record<string, unknown>>
  style?: string
  listItem?: string
}

export type BaseContent = {
  _id: string
  _type: SanityDocumentType
  _updatedAt?: string
  publishedAt?: string
}

export type BlogPost = BaseContent & {
  _type: 'blogPost'
  title: string
  slug: string
  category: string
  excerpt?: string
  coverImage?: SanityImageWithMetadata
  body?: PortableTextBlock[]
  featured?: boolean
  featureOnHome?: boolean
  homeFeatureRank?: number
  seoTitle?: string
  seoDescription?: string
  readingTime?: number
}

export type JournalEntry = BaseContent & {
  _type: 'journalEntry'
  title: string
  slug: string
  type: 'Thought' | 'Read' | 'Observation'
  body?: PortableTextBlock[]
  featureOnHome?: boolean
  homeFeatureRank?: number
  relatedBook?: Pick<Book, '_id' | '_type' | 'title' | 'author' | 'coverImage'>
  readingTime?: number
}

export type FatherPiece = BaseContent & {
  _type: 'fatherPiece'
  title: string
  slug: string
  format: 'Essay' | 'Note'
  body?: PortableTextBlock[]
  image?: SanityImageWithMetadata
  readingTime?: number
}

export type Project = BaseContent & {
  _type: 'project'
  name: string
  slug?: string
  tagline?: string
  summary?: string
  body?: PortableTextBlock[]
  coverImage?: SanityImageWithMetadata
  techStack?: string[]
  liveUrl?: string
  githubUrl?: string
  status?: string
  featured?: boolean
}

export type Documentary = BaseContent & {
  _type: 'documentary'
  title: string
  youtubeUrl?: string
  thumbnail?: SanityImageWithMetadata
  description?: string
  topic?: string
}

export type Book = BaseContent & {
  _type: 'book'
  title: string
  author?: string
  coverImage?: SanityImageWithMetadata
  note?: string
  status?: 'Reading' | 'Read' | 'Want to read'
}

export type TimelineEvent = BaseContent & {
  _type: 'timelineEvent'
  year?: string
  title: string
  description?: string
  category?: string
}

export type FeedItem = {
  _id: string
  _type: 'blogPost' | 'journalEntry' | 'fatherPiece' | 'project' | 'documentary'
  _updatedAt?: string
  date?: string
  title?: string
  slug?: string
  excerpt?: string
  tag?: string
  readingTime?: number
  image?: SanityImageWithMetadata
}

export type HomeWriting = {
  featured?: FeedItem | null
  latest: FeedItem[]
}

export type HomePage = BaseContent & {
  _type: 'homePage'
  presence?: {
    headline?: string
    roleLine?: string
    portrait?: SanityImageWithMetadata
  }
  pointOfView?: PortableTextBlock[]
  fatherDoorway?: {
    copy?: PortableTextBlock[]
    archiveImage?: SanityImageWithMetadata
  }
  foundation?: PortableTextBlock[]
  studyRise?: PortableTextBlock[]
  lifeInMotion?: Array<{
    _key?: string
    image?: SanityImageWithMetadata
    label?: string
  }>
  contactInvitation?: PortableTextBlock[]
}

export type AboutPage = BaseContent & {
  _type: 'aboutPage'
  hook?: PortableTextBlock[]
  credentials?: PortableTextBlock[]
  whyMedicine?: PortableTextBlock[]
  humanSide?: PortableTextBlock[]
  whatThisSiteIs?: PortableTextBlock[]
  cta?: PortableTextBlock[]
  portrait?: SanityImageWithMetadata
  lifestyleImages?: Array<{
    _key?: string
    image?: SanityImageWithMetadata
    label?: string
  }>
}

export type FatherPage = BaseContent & {
  _type: 'fatherPage'
  opening?: PortableTextBlock[]
  archiveImages?: Array<{
    _key?: string
    caption?: string
    image?: SanityImageWithMetadata
  }>
}
