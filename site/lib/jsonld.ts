import { PERSON_ID, SITE_URL } from "@/lib/person";

const AUTHOR = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Istiaque Ahamed",
  url: SITE_URL,
} as const;

type ArticleJsonLdInput = {
  title: string;
  description?: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
  section?: string;
};

type VideoJsonLdInput = {
  title: string;
  description?: string;
  path: string;
  uploadDate?: string;
  thumbnailUrl?: string;
  videoId?: string;
};

type BreadcrumbJsonLdItem = {
  name: string;
  path: string;
};

type BookJsonLdInput = {
  author?: string;
  description?: string;
  imageUrl?: string;
  path: string;
  title: string;
};

type ProjectJsonLdInput = {
  description?: string;
  githubUrl?: string;
  imageUrl?: string;
  liveUrl?: string;
  name: string;
  path: string;
  techStack?: string[];
};

/**
 * Article structured data for a Blog post or Journal entry. Kept minimal and
 * fact-only so the Istiaque Ahamed entity stays consistent for search and AI.
 */
export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  imageUrl,
  section,
}: ArticleJsonLdInput) {
  const url = new URL(path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    ...(description ? { description } : {}),
    author: AUTHOR,
    publisher: AUTHOR,
    mainEntityOfPage: url,
    url,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(imageUrl ? { image: [imageUrl] } : {}),
    ...(section ? { articleSection: section } : {}),
  };
}

/**
 * VideoObject metadata is emitted only when the visible film record has the
 * core fields search engines expect. Missing context stays missing rather
 * than becoming generated copy.
 */
export function videoJsonLd({
  title,
  description,
  path,
  uploadDate,
  thumbnailUrl,
  videoId,
}: VideoJsonLdInput) {
  if (!description || !uploadDate || !thumbnailUrl || !videoId) return null;

  const url = new URL(path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    uploadDate,
    thumbnailUrl: [thumbnailUrl],
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    url,
    author: AUTHOR,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function bookJsonLd({
  author,
  description,
  imageUrl,
  path,
  title,
}: BookJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    url: new URL(path, SITE_URL).toString(),
    ...(author ? { author: { "@type": "Person", name: author } } : {}),
    ...(description ? { description } : {}),
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}

export function projectJsonLd({
  description,
  githubUrl,
  imageUrl,
  liveUrl,
  name,
  path,
  techStack,
}: ProjectJsonLdInput) {
  const pageUrl = new URL(path, SITE_URL).toString();
  const sameAs = [liveUrl, githubUrl].filter((value): value is string => Boolean(value));

  return {
    "@context": "https://schema.org",
    "@type": name === "StudyRise" ? ["Project", "SoftwareApplication"] : "Project",
    name,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    founder: AUTHOR,
    ...(description ? { description } : {}),
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(techStack?.length ? { keywords: techStack.join(", ") } : {}),
  };
}

export function stringifyJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
