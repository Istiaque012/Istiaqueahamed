import { SITE_URL } from "@/lib/person";

const AUTHOR = { "@type": "Person", name: "Istiaque Ahamed", url: SITE_URL } as const;

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

export function stringifyJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
