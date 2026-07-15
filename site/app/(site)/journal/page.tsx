import JournalIndex, { type JournalListItem } from "@/components/writing/JournalIndex";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { journalEntriesQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { JournalEntry } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.journal });

export default async function JournalPage() {
  const entries = await fetchSanity<JournalEntry[]>({
    query: journalEntriesQuery,
    requestTag: "journal-entries",
    tags: [SANITY_TAGS.journalEntry],
  });

  const items: JournalListItem[] = (entries ?? []).map((entry) => ({
    id: entry._id,
    title: entry.title,
    href: `/journal/${entry.slug}`,
    type: entry.type,
    date: entry.publishedAt,
    readingTime: entry.readingTime,
    relatedBook: entry.relatedBook
      ? { title: entry.relatedBook.title, author: entry.relatedBook.author }
      : undefined,
  }));

  return <JournalIndex config={pageConfigs.journal} entries={items} />;
}
