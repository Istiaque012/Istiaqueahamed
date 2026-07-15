"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import WritingNavigation from "@/components/writing/WritingNavigation";
import EditorialFilters from "@/components/writing/EditorialFilters";
import {
  EditorialCard,
  EditorialEmptyState,
  EditorialMeta,
  WritingCrossLinks,
  type EditorialItem,
} from "@/components/writing/EditorialPrimitives";
import { EditorialImage } from "@/components/ui";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { PageConfig } from "@/lib/page-config";

export type BlogListItem = EditorialItem & {
  id: string;
  category: string;
  featured?: boolean;
  image?: ResolvedSanityImage;
};

const PAGE_SIZE = 6;
const ALL = "All";

export default function BlogIndex({
  config,
  featuredId,
  posts,
}: {
  config: PageConfig;
  featuredId?: string;
  posts: BlogListItem[];
}) {
  const categories = useMemo(() => {
    const found = Array.from(new Set(posts.map((post) => post.category))).sort();
    return [ALL, ...found];
  }, [posts]);

  const [active, setActive] = useState<string>(ALL);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const featured = active === ALL ? posts.find((post) => post.id === featuredId) : undefined;

  const filtered = useMemo(() => {
    const base = active === ALL ? posts.filter((post) => post.id !== featured?.id) : posts.filter((post) => post.category === active);
    return base;
  }, [active, featured?.id, posts]);

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > shown.length;

  function selectCategory(next: string) {
    setActive(next);
    setVisible(PAGE_SIZE);
  }

  if (!posts.length) {
    return (
      <main className="writing-scaffold writing-scaffold--blog">
        <WritingNavigation />
        <header className="writing-scaffold__header">
          <p className="section-label">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p>{config.intro}</p>
        </header>
        <section className="writing-scaffold__body" aria-label="Blog publishing status">
          <EditorialEmptyState
            description="Essays will appear here automatically the moment they are published in Sanity. No sample article, date, or opinion has been invented for this empty state."
            title="The first essays are being written."
          />
          <WritingCrossLinks current="blog" />
        </section>
      </main>
    );
  }

  return (
    <main className="writing-scaffold writing-scaffold--blog blog-index">
      <WritingNavigation />

      <header className="writing-scaffold__header">
        <p className="section-label">{config.eyebrow}</p>
        <h1>{config.title}</h1>
        <p>{config.intro}</p>
      </header>

      {featured ? (
        <section className="blog-index__featured" aria-label="Featured essay">
          <Link href={featured.href}>
            {featured.image ? (
              <EditorialImage
                alt={featured.image.alt}
                altGuidance="Approved editorial cover image"
                caption={featured.image.caption}
                priority
                ratio="wide"
                src={featured.image.src}
              />
            ) : (
              <div className="blog-index__featured-plate" aria-hidden="true">
                <span>IA</span>
                <p>Featured essay</p>
              </div>
            )}
            <div className="blog-index__featured-body">
              <span className="blog-index__badge">Featured</span>
              <EditorialMeta item={featured} />
              <h2>{featured.title}</h2>
              {featured.excerpt ? <p>{featured.excerpt}</p> : null}
              <span className="blog-index__featured-cue" aria-hidden="true">Read the essay ↗</span>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="blog-index__list" aria-label="All essays">
        {categories.length > 2 ? (
          <div className="blog-index__toolbar">
            <p className="section-label">
              {active === ALL ? "Every essay" : active}
              <span> · {filtered.length}</span>
            </p>
            <EditorialFilters active={active} filters={categories} onSelect={selectCategory} />
          </div>
        ) : null}

        {shown.length ? (
          <div className="blog-index__grid">
            {shown.map((post) => (
              <EditorialCard item={post} key={post.id} />
            ))}
          </div>
        ) : (
          <p className="blog-index__none" role="status">
            No essay is filed under {active} yet.
          </p>
        )}

        {hasMore ? (
          <div className="blog-index__more">
            <button onClick={() => setVisible((count) => count + PAGE_SIZE)} type="button">
              Load more essays
            </button>
          </div>
        ) : null}
      </section>

      <WritingCrossLinks current="blog" />
    </main>
  );
}
