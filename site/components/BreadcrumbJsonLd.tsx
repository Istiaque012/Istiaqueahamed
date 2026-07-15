"use client";

import { usePathname } from "next/navigation";
import { breadcrumbJsonLd, stringifyJsonLd } from "@/lib/jsonld";

const routeLabels: Record<string, string> = {
  about: "About",
  blog: "Blog",
  bookshelf: "Bookshelf",
  contact: "Contact",
  course: "AI in Healthcare",
  documentaries: "Documentaries",
  father: "My Beloved Father",
  feed: "Feed",
  journal: "Journal",
  projects: "Projects",
  timeline: "Timeline",
  work: "Work",
};

function labelSegment(segment: string) {
  const decoded = decodeURIComponent(segment).replace(/[-_]+/g, " ");
  return routeLabels[segment] || decoded.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (!segments.length) return null;

  const items = [
    { name: "Home", path: "/" },
    ...segments.map((segment, index) => ({
      name: labelSegment(segment),
      path: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <script
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd(items)) }}
      type="application/ld+json"
    />
  );
}
