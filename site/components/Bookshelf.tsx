"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { EditorialImage } from "@/components/ui";
import EditorialFilters from "@/components/writing/EditorialFilters";
import { bookAnchorId } from "@/lib/editorial";
import type { ResolvedSanityImage } from "@/lib/sanity/image";

const ALL = "All";
const statuses = [ALL, "Reading", "Read", "Want to read"] as const;

export type BookshelfView = {
  author?: string;
  cover?: ResolvedSanityImage;
  id: string;
  note?: string;
  status?: Exclude<(typeof statuses)[number], typeof ALL>;
  title: string;
};

export default function Bookshelf({
  books,
  initialStatus,
  usesConfirmedFallback,
}: {
  books: BookshelfView[];
  initialStatus: (typeof statuses)[number];
  usesConfirmedFallback: boolean;
}) {
  const router = useRouter();
  const [active, setActive] = useState<(typeof statuses)[number]>(initialStatus);
  const filtered = useMemo(
    () => (active === ALL ? books : books.filter((book) => book.status === active)),
    [active, books],
  );

  function selectStatus(value: string) {
    const next = value as (typeof statuses)[number];
    setActive(next);
    router.replace(next === ALL ? "/bookshelf" : `/bookshelf?status=${encodeURIComponent(next)}`, { scroll: false });
  }

  return (
    <main className="bookshelf-page">
      <header className="bookshelf-page__hero">
        <div className="section-shell">
          <Reveal>
            <p className="section-label dark-label">Reading life</p>
            <h1>Bookshelf</h1>
          </Reveal>
          <Reveal className="bookshelf-page__intro" delay={0.08}>
            <p>Books offer another record of a life: the questions someone returns to, the subjects they carry, and the ideas still being worked through.</p>
            <span>{usesConfirmedFallback ? "Five titles are confirmed. Reading statuses, covers, and personal notes remain deliberately unpublished." : "Every status and note below is managed in Istiaque’s Sanity library."}</span>
          </Reveal>
        </div>
      </header>

      <section className="bookshelf-page__library" aria-labelledby="bookshelf-library-title">
        <div className="section-shell">
          <div className="bookshelf-page__toolbar">
            <div>
              <p className="section-label dark-label">The library</p>
              <h2 id="bookshelf-library-title">What is on the shelf.</h2>
            </div>
            <EditorialFilters
              active={active}
              ariaLabel="Filter bookshelf by reading status"
              filters={statuses}
              onSelect={selectStatus}
            />
          </div>

          {filtered.length ? (
            <ol className="bookshelf-page__grid" aria-live="polite">
              {filtered.map((book, index) => (
                <li id={bookAnchorId(book.id)} key={book.id}>
                  <Reveal delay={(index % 3) * 0.04}>
                    <article>
                      <EditorialImage
                        alt={book.cover?.alt || `${book.title} on Istiaque Ahamed’s bookshelf`}
                        altGuidance={`Approved cover for ${book.title}`}
                        caption={book.cover?.caption}
                        label="Book cover pending"
                        ratio="book"
                        src={book.cover?.src}
                      />
                      <div className="bookshelf-page__book-meta">
                        <span>{book.status || "Status not published"}</span>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h3>{book.title}</h3>
                      {book.author ? <p className="bookshelf-page__author">{book.author}</p> : null}
                      {book.note ? <p className="bookshelf-page__note">{book.note}</p> : <p className="bookshelf-page__note bookshelf-page__note--pending">A personal note will appear only after Istiaque writes or approves it.</p>}
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          ) : (
            <p className="bookshelf-page__none" role="status">No books currently carry the “{active}” status.</p>
          )}
        </div>
      </section>

      <section className="bookshelf-page__journal">
        <div className="section-shell">
          <div>
            <p className="section-label">Reading in motion</p>
            <h2>A book can continue in the Journal.</h2>
          </div>
          <div>
            <p>Journal entries marked “Read” can link directly back to the book that prompted them, connecting a passing thought to the wider library.</p>
            <Link className="button button-outline" href="/journal">Open the Journal <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
