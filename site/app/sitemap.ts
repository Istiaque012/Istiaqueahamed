import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/person";
import { client } from "@/lib/sanity/client";
import { sitemapEntriesQuery } from "@/lib/sanity/queries";

export const revalidate = 3600;

type SitemapContentEntry = {
  path?: string;
  updatedAt?: string;
};

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/feed", priority: 0.9, changeFrequency: "daily" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/journal", priority: 0.8, changeFrequency: "weekly" },
  { path: "/father", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects/studyrise", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documentaries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/course", priority: 0.5, changeFrequency: "monthly" },
  { path: "/timeline", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bookshelf", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedEntries = await client
    .withConfig({ useCdn: false, perspective: "published", stega: false })
    .fetch<SitemapContentEntry[]>(sitemapEntriesQuery);
  const routes = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const route of staticRoutes) {
    routes.set(route.path, {
      url: new URL(route.path, SITE_URL).toString(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  for (const entry of publishedEntries ?? []) {
    if (!entry.path) continue;
    routes.set(entry.path, {
      url: new URL(entry.path, SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: 0.7,
      ...(entry.updatedAt ? { lastModified: entry.updatedAt } : {}),
    });
  }

  return [...routes.values()];
}
