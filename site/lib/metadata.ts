import type { Metadata } from "next";
import { SITE_URL } from "@/lib/person";

type PageMetadataInput = {
  description: string;
  noIndex?: boolean;
  path: string;
  title: string;
  /** Absolute or root-relative social image. Defaults to the site card. */
  imageUrl?: string;
  imageAlt?: string;
  /** Set to "article" for Blog/Journal detail pages so OG renders as an article. */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
};

export function createPageMetadata({
  description,
  noIndex = false,
  path,
  title,
  imageUrl,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
}: PageMetadataInput): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  const image = imageUrl ?? "/og.png";
  const alt = imageAlt ?? `${title} · Istiaque Ahamed`;

  return {
    title,
    description,
    alternates: {
      canonical,
      types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      siteName: "Istiaque Ahamed",
      images: [{ url: image, width: 1200, height: 630, alt }],
      ...(type === "article"
        ? {
            authors: ["Istiaque Ahamed"],
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
            ...(section ? { section } : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
