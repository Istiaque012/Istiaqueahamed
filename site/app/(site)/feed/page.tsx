import FeedIndex, { type FeedViewItem } from "@/components/writing/FeedIndex";
import { feedItemHref, feedItemLabel } from "@/lib/editorial";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
import { feedQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { FeedItem } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.feed });

const supportedFilters = ["All", "Blog", "Journal"] as const;

export default async function FeedPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initialFilter = supportedFilters.find((filter) => filter === type) || "All";
  const feed = await fetchSanity<FeedItem[]>({
    query: feedQuery,
    requestTag: "blog-journal-feed",
    tags: [SANITY_TAGS.feed],
  });

  const items: FeedViewItem[] = (feed ?? []).map((item) => ({
    id: item._id,
    date: item.date,
    excerpt: item.excerpt,
    href: feedItemHref(item),
    image: resolveSanityImage(item.image, {
      fallbackAlt: `Published image for ${item.title || feedItemLabel(item)}`,
      height: 720,
      width: 1152,
    }),
    kind: feedItemLabel(item),
    readingTime: item.readingTime,
    tag: item.tag,
    title: item.title || "Untitled",
  }));

  return <FeedIndex config={pageConfigs.feed} initialFilter={initialFilter} items={items} key={initialFilter} />;
}
