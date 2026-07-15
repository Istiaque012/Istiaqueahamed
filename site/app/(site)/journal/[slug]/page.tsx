import { cache } from "react";
import { notFound } from "next/navigation";
import JournalArticle from "@/components/JournalArticle";
import { createPageMetadata } from "@/lib/metadata";
import { fetchSanity } from "@/lib/sanity/fetch";
import { journalEntryBySlugQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { JournalEntry } from "@/lib/sanity/types";

type Props = { params: Promise<{ slug: string }> };

const getJournalEntry = cache((slug: string) =>
  fetchSanity<JournalEntry | null>({
    query: journalEntryBySlugQuery,
    params: { slug },
    requestTag: `journal-entry-${slug}`,
    tags: [SANITY_TAGS.journalEntry],
  }),
);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = await getJournalEntry(slug);

  if (!entry) {
    return createPageMetadata({
      title: "Journal entry not found",
      description: "The requested Journal entry could not be found.",
      path: `/journal/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${entry.title} · Journal`,
    description: `A ${entry.type.toLowerCase()} by Istiaque Ahamed in the Journal.`,
    path: `/journal/${entry.slug}`,
    type: "article",
    publishedTime: entry.publishedAt,
    modifiedTime: entry._updatedAt,
    section: entry.type,
  });
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getJournalEntry(slug);

  if (!entry) {
    notFound();
  }

  return <JournalArticle entry={entry} />;
}
