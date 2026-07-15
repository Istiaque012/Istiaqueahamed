import Link from "next/link";
import SanityPortableText from "@/components/SanityPortableText";
import { articleJsonLd } from "@/lib/jsonld";
import { formatEditorialDate } from "@/lib/editorial";
import type { JournalEntry } from "@/lib/sanity/types";

type JournalArticleProps = {
  entry: JournalEntry;
};

export default function JournalArticle({ entry }: JournalArticleProps) {
  const jsonLd = articleJsonLd({
    title: entry.title,
    path: `/journal/${entry.slug}`,
    datePublished: entry.publishedAt,
    dateModified: entry._updatedAt,
    section: entry.type,
  });

  return (
    <main className="journal-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="journal-article__header">
        <Link className="journal-article__back" href="/journal">
          <span aria-hidden="true">←</span> Journal
        </Link>
        <p className="section-label">{entry.type}</p>
        <h1>{entry.title}</h1>
        <div className="journal-article__meta">
          <time dateTime={entry.publishedAt}>{formatEditorialDate(entry.publishedAt)}</time>
          {entry.readingTime ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{entry.readingTime} min read</span>
            </>
          ) : null}
        </div>
      </header>

      <article className="journal-article__body">
        {entry.body?.length ? (
          <SanityPortableText value={entry.body} />
        ) : (
          <p className="journal-article__empty">The full entry has not been published yet.</p>
        )}
      </article>

      {entry.type === "Read" && entry.relatedBook ? (
        <aside className="journal-article__book" aria-label="Related book">
          <p className="section-label">The book</p>
          <div>
            <h2>{entry.relatedBook.title}</h2>
            {entry.relatedBook.author ? <p>{entry.relatedBook.author}</p> : null}
            <Link className="text-link" href="/bookshelf">
              See it on the Bookshelf <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      ) : null}

      <footer className="journal-article__footer">
        <span>Istiaque Ahamed · Journal</span>
        <Link className="text-link" href="/journal">
          Return to the Journal <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </main>
  );
}
