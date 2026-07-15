"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { EditorialImage } from "@/components/ui";
import EditorialFilters from "@/components/writing/EditorialFilters";
import {
  EditorialEmptyState,
  EditorialMeta,
  WritingCrossLinks,
  type EditorialItem,
} from "@/components/writing/EditorialPrimitives";
import WritingNavigation from "@/components/writing/WritingNavigation";
import type { PageConfig } from "@/lib/page-config";

const ALL = "All";
const PAGE_SIZE = 8;
const FILTERS = [ALL, "Blog", "Journal", "My Beloved Father", "Projects", "Documentaries"] as const;

const filterForKind: Record<string, (typeof FILTERS)[number]> = {
  Blog: "Blog",
  Father: "My Beloved Father",
  Film: "Documentaries",
  Journal: "Journal",
  Project: "Projects",
};

export type FeedViewItem = EditorialItem & { id: string };

export default function FeedIndex({
  config,
  initialFilter,
  items,
}: {
  config: PageConfig;
  initialFilter: (typeof FILTERS)[number];
  items: FeedViewItem[];
}) {
  const router = useRouter();
  const [active, setActive] = useState<(typeof FILTERS)[number]>(initialFilter);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((item) => filterForKind[item.kind] === active)),
    [active, items],
  );
  const shown = filtered.slice(0, visible);
  const hasMore = shown.length < filtered.length;

  function selectFilter(next: string) {
    const filter = next as (typeof FILTERS)[number];
    setActive(filter);
    setVisible(PAGE_SIZE);
    router.replace(filter === ALL ? "/feed" : `/feed?type=${encodeURIComponent(filter)}`, { scroll: false });
  }

  return (
    <main className="writing-scaffold feed-index">
      <WritingNavigation />

      <header className="writing-scaffold__header feed-index__header">
        <p className="section-label">{config.eyebrow}</p>
        <h1>{config.title}</h1>
        <p>{config.intro}</p>
        <Link className="feed-index__rss" href="/feed.xml">
          Follow by RSS <span aria-hidden="true">↗</span>
        </Link>
      </header>

      {items.length ? (
        <section className="feed-index__body" aria-label="Complete publishing feed">
          <div className="feed-index__toolbar">
            <p className="section-label">
              {active === ALL ? "Complete chronology" : active}
              <span> · {filtered.length}</span>
            </p>
            <EditorialFilters active={active} filters={FILTERS} onSelect={selectFilter} />
          </div>

          {shown.length ? (
            <ol className="feed-index__list">
              {shown.map((item, index) => (
                <li className="feed-index__item" key={item.id}>
                  <Link href={item.href}>
                    <span className="feed-index__number">{String(index + 1).padStart(2, "0")}</span>
                    <div className="feed-index__image">
                      {item.image ? (
                        <EditorialImage
                          alt={item.image.alt}
                          altGuidance="Approved image attached to this published item"
                          caption={item.image.caption}
                          ratio="wide"
                          src={item.image.src}
                        />
                      ) : (
                        <div className="feed-index__plate" aria-hidden="true">
                          <span>IA</span>
                          <small>{item.kind}</small>
                        </div>
                      )}
                    </div>
                    <div className="feed-index__copy">
                      <EditorialMeta item={item} />
                      <h2>{item.title}</h2>
                      {item.excerpt ? <p>{item.excerpt}</p> : null}
                    </div>
                    <span className="feed-index__cue" aria-hidden="true">Open ↗</span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <p className="feed-index__none" role="status">No {active.toLowerCase()} item has been published yet.</p>
          )}

          {hasMore ? (
            <div className="feed-index__more">
              <button onClick={() => setVisible((count) => count + PAGE_SIZE)} type="button">
                Load more from the Feed
              </button>
            </div>
          ) : null}

          <WritingCrossLinks current="feed" />
        </section>
      ) : (
        <section className="writing-scaffold__body" aria-label="Feed publishing status">
          <EditorialEmptyState
            description="Blog essays, Journal entries, Father pieces, projects, and films will enter this chronology automatically when they are published. Nothing has been invented to fill it."
            title="The complete stream is quiet for now."
          />
          <WritingCrossLinks current="feed" />
        </section>
      )}
    </main>
  );
}
