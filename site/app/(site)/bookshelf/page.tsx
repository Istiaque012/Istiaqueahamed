import Bookshelf, { type BookshelfView } from "@/components/Bookshelf";
import { bookAnchorId } from "@/lib/editorial";
import { bookJsonLd, stringifyJsonLd } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
import { booksQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { Book } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.bookshelf });

const confirmedStarterBooks: BookshelfView[] = [
  { id: "atomic-habits", title: "Atomic Habits" },
  { id: "the-48-laws-of-power", title: "The 48 Laws of Power" },
  { id: "ikigai", title: "Ikigai" },
  { id: "the-subtle-art", title: "The Subtle Art of Not Giving a F*ck" },
  { id: "henrietta-lacks", title: "The Immortal Life of Henrietta Lacks" },
];

const supportedStatuses = ["All", "Reading", "Read", "Want to read"] as const;

export default async function BookshelfPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const initialStatus = supportedStatuses.find((value) => value === status) || "All";
  const documents = await fetchSanity<Book[]>({
    query: booksQuery,
    requestTag: "bookshelf-index",
    tags: [SANITY_TAGS.book],
  });

  const authored: BookshelfView[] = (documents ?? []).map((book) => ({
    author: book.author,
    cover: resolveSanityImage(book.coverImage, {
      fallbackAlt: `${book.title} on Istiaque Ahamed’s bookshelf`,
      height: 1200,
      width: 800,
    }),
    id: book._id,
    note: book.note,
    status: book.status,
    title: book.title,
  }));
  const usesConfirmedFallback = authored.length === 0;
  const books = usesConfirmedFallback ? confirmedStarterBooks : authored;
  const booksJsonLd = books.map((book) => bookJsonLd({
    author: book.author,
    description: book.note,
    imageUrl: book.cover?.src,
    path: `/bookshelf#${bookAnchorId(book.id)}`,
    title: book.title,
  }));

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(booksJsonLd) }}
        type="application/ld+json"
      />
      <Bookshelf
        books={books}
        initialStatus={initialStatus}
        key={initialStatus}
        usesConfirmedFallback={usesConfirmedFallback}
      />
    </>
  );
}
