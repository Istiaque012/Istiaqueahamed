import type { Metadata } from "next";
import { SITE_URL } from "@/lib/person";

type PageMetadataInput = {
  description: string;
  noIndex?: boolean;
  path: string;
  title: string;
};

export function createPageMetadata({
  description,
  noIndex = false,
  path,
  title,
}: PageMetadataInput): Metadata {
  const canonical = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "Istiaque Ahamed",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${title} · Istiaque Ahamed` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
