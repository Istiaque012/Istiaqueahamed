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
