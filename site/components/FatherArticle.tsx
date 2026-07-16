import Link from "next/link";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import { articleJsonLd, stringifyJsonLd } from "@/lib/jsonld";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { FatherPiece } from "@/lib/sanity/types";

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(date?: string) {
  if (!date) return "Date pending";
  const value = new Date(date);
  return Number.isNaN(value.getTime()) ? "Date pending" : dateFormatter.format(value);
}

type FatherArticleProps = {
  image?: ResolvedSanityImage;
  piece: FatherPiece;
};

export default function FatherArticle({ image, piece }: FatherArticleProps) {
  const jsonLd = articleJsonLd({
    title: piece.title,
    path: `/father/${piece.slug}`,
    datePublished: piece.publishedAt,
    dateModified: piece._updatedAt,
    imageUrl: image?.src,
    section: `My Beloved Father · ${piece.format}`,
  });

  return (
    <main className="father-piece register-father">
      <script
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
        type="application/ld+json"
      />
      <header className="father-piece__header">
        <Link className="father-piece__back" href="/father"><span aria-hidden="true">←</span> My Beloved Father</Link>
        <p className="section-label">{piece.format} · In his memory</p>
        <h1>{piece.title}</h1>
        <div className="father-piece__meta">
          <time dateTime={piece.publishedAt}>{formatDate(piece.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{piece.readingTime ? `${piece.readingTime} min read` : piece.format}</span>
        </div>
      </header>

      {image ? (
        <div className="father-piece__image">
          <EditorialImage
            alt={image.alt}
            altGuidance="An approved archive photograph supplied with this piece"
            caption={image.caption}
            ratio="landscape"
            src={image.src}
          />
        </div>
      ) : null}

      <article className="father-piece__body">
        {piece.body?.length ? (
          <SanityPortableText value={piece.body} />
        ) : (
          <p className="father-piece__empty">The full text has not been published yet.</p>
        )}
      </article>

      <footer className="father-piece__footer">
        <span>My Beloved Father</span>
        <Link className="text-link" href="/father">Return to all pieces <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
