import type { FeedItem } from "@/lib/sanity/types";

const editorialDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatEditorialDate(date?: string) {
  if (!date) return "Undated";
  const value = new Date(date);
  return Number.isNaN(value.getTime()) ? "Undated" : editorialDateFormatter.format(value);
}

export function feedItemHref(item: FeedItem) {
  if (item._type === "documentary") return "/documentaries";
  if (item._type === "project") return item.slug ? `/projects/${item.slug}` : "/projects";
  if (item._type === "fatherPiece") return item.slug ? `/father/${item.slug}` : "/father";
  if (item._type === "journalEntry") return item.slug ? `/journal/${item.slug}` : "/journal";
  return item.slug ? `/blog/${item.slug}` : "/blog";
}

export function feedItemLabel(item: FeedItem) {
  const labels: Record<FeedItem["_type"], string> = {
    blogPost: "Blog",
    documentary: "Film",
    fatherPiece: "Father",
    journalEntry: "Journal",
    project: "Project",
  };
  return labels[item._type];
}
