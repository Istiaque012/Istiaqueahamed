import Link from "next/link";
import { EditorialImage } from "@/components/ui";
import { formatEditorialDate } from "@/lib/editorial";
import type { ResolvedSanityImage } from "@/lib/sanity/image";

export type EditorialItem = {
  date?: string;
  excerpt?: string;
  href: string;
  image?: ResolvedSanityImage;
  kind: string;
  readingTime?: number;
  tag?: string;
  title: string;
};

export function EditorialMeta({ item }: { item: EditorialItem }) {
  return (
    <div className="editorial-meta">
      <span>{item.kind}{item.tag ? ` · ${item.tag}` : ""}</span>
      <time dateTime={item.date}>{formatEditorialDate(item.date)}</time>
      {item.readingTime ? <span>{item.readingTime} min read</span> : null}
    </div>
  );
}

export function EditorialCard({ item }: { item: EditorialItem }) {
  return (
    <article className="editorial-card">
      <Link href={item.href}>
        {item.image ? (
          <EditorialImage
            alt={item.image.alt}
            altGuidance="Approved editorial cover image"
            caption={item.image.caption}
            ratio="wide"
            src={item.image.src}
          />
        ) : (
          <div className="editorial-card__no-image" aria-hidden="true"><span>IA</span><p>Words first</p></div>
        )}
        <EditorialMeta item={item} />
        <h3>{item.title}</h3>
        {item.excerpt ? <p>{item.excerpt}</p> : null}
        <span className="editorial-card__arrow" aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

export function EditorialRow({ index, item }: { index?: number; item: EditorialItem }) {
  return (
    <article className="editorial-row">
      <Link href={item.href}>
        <span className="editorial-row__index">{index ? String(index).padStart(2, "0") : item.kind}</span>
        <div><EditorialMeta item={item} /><h3>{item.title}</h3></div>
        <span aria-hidden="true">Read&nbsp; ↗</span>
      </Link>
    </article>
  );
}

export function EditorialEmptyState({ description, title }: { description: string; title: string }) {
  return (
    <div className="editorial-empty" role="status">
      <span aria-hidden="true">00</span>
      <div><h2>{title}</h2><p>{description}</p></div>
    </div>
  );
}

export function EditorialPagination({
  currentPage,
  nextHref,
  previousHref,
  totalPages,
}: {
  currentPage: number;
  nextHref?: string;
  previousHref?: string;
  totalPages: number;
}) {
  return (
    <nav className="editorial-pagination" aria-label="Writing pagination">
      {previousHref ? <Link href={previousHref}>← Previous</Link> : <span aria-disabled="true">← Previous</span>}
      <p>Page {currentPage} <span>of {totalPages}</span></p>
      {nextHref ? <Link href={nextHref}>Next →</Link> : <span aria-disabled="true">Next →</span>}
    </nav>
  );
}

export function WritingCrossLinks({ current }: { current: "feed" | "blog" | "journal" }) {
  const links = [
    { key: "feed", href: "/feed", label: "See the complete Feed" },
    { key: "blog", href: "/blog", label: "Read long-form Blog essays" },
    { key: "journal", href: "/journal", label: "Open the shorter Journal" },
  ] as const;

  return (
    <aside className="writing-cross-links" aria-label="More writing">
      <p>Continue through Writing</p>
      {links.filter((link) => link.key !== current).map((link) => (
        <Link href={link.href} key={link.key}>{link.label}<span aria-hidden="true">↗</span></Link>
      ))}
    </aside>
  );
}
