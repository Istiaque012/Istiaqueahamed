import { feedItemHref, feedItemLabel } from "@/lib/editorial";
import { SITE_URL } from "@/lib/person";
import { fetchSanity } from "@/lib/sanity/fetch";
import { feedQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { FeedItem } from "@/lib/sanity/types";

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '\"': "&quot;",
  })[character] || character);

const rssDate = (value?: string) => {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toUTCString();
};

export async function GET() {
  const feed = await fetchSanity<FeedItem[]>({
    query: feedQuery,
    requestTag: "rss-feed",
    tags: [SANITY_TAGS.feed],
  });
  const items = feed ?? [];
  const latestDate = rssDate(items[0]?.date);

  const entries = items.map((item) => {
    const url = new URL(feedItemHref(item), SITE_URL).toString();
    const published = rssDate(item.date);
    const description = item.excerpt || `${feedItemLabel(item)} published by Istiaque Ahamed.`;

    return [
      "<item>",
      `<title>${escapeXml(item.title || "Untitled")}</title>`,
      `<link>${escapeXml(url)}</link>`,
      `<guid isPermaLink="false">sanity:${escapeXml(item._id)}</guid>`,
      `<category>${escapeXml(feedItemLabel(item))}</category>`,
      published ? `<pubDate>${published}</pubDate>` : "",
      `<description>${escapeXml(description)}</description>`,
      "</item>",
    ].filter(Boolean).join("");
  }).join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0"><channel>',
    "<title>Istiaque Ahamed — Feed</title>",
    `<link>${SITE_URL}/feed</link>`,
    "<description>Blog essays, Journal entries, Father pieces, projects, and films by Istiaque Ahamed.</description>",
    "<language>en</language>",
    latestDate ? `<lastBuildDate>${latestDate}</lastBuildDate>` : "",
    entries,
    "</channel></rss>",
  ].filter(Boolean).join("");

  return new Response(xml, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
