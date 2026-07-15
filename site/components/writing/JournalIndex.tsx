"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import WritingNavigation from "@/components/writing/WritingNavigation";
import EditorialFilters from "@/components/writing/EditorialFilters";
import { EditorialEmptyState, WritingCrossLinks } from "@/components/writing/EditorialPrimitives";
import { formatEditorialDate } from "@/lib/editorial";
import type { PageConfig } from "@/lib/page-config";

export type JournalListItem = {
  id: string;
  title: string;
  href: string;
  type: string;
  date?: string;
  readingTime?: number;
  relatedBook?: { title: string; author?: string };
};

const ALL = "All";

const monthFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function monthKey(date?: string) {
  if (!date) return { key: "undated", label: "Undated" };
  const value = new Date(date);
  if (Number.isNaN(value.getTime())) return { key: "undated", label: "Undated" };
  return {
    key: `${value.getUTCFullYear()}-${value.getUTCMonth()}`,
    label: monthFormatter.format(value),
  };
}

export default function JournalIndex({
  config,
  entries,
}: {
  config: PageConfig;
  entries: JournalListItem[];
}) {
  const types = useMemo(() => {
    const order = ["Thought", "Read", "Observation"];
    const found = Array.from(new Set(entries.map((entry) => entry.type))).sort(
      (a, b) => order.indexOf(a) - order.indexOf(b),
    );
    return [ALL, ...found];
  }, [entries]);

  const [active, setActive] = useState<string>(ALL);

  const filtered = active === ALL ? entries : entries.filter((entry) => entry.type === active);

  const groups = useMemo(() => {
    const map = new Map<string, { label: string; items: JournalListItem[] }>();
    for (const entry of filtered) {
      const { key, label } = monthKey(entry.date);
      const group = map.get(key) ?? { label, items: [] };
      group.items.push(entry);
      map.set(key, group);
    }
    return Array.from(map.values());
  }, [filtered]);

  if (!entries.length) {
    return (
      <main className="writing-scaffold journal-index">
        <WritingNavigation />
        <header className="writing-scaffold__header">
          <p className="section-label">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p>{config.intro}</p>
        </header>
        <section className="writing-scaffold__body" aria-label="Journal publishing status">
          <EditorialEmptyState
            description="Thoughts, reads, and observations will appear here automatically once they are published in Sanity. Nothing has been invented for this empty state."
            title="The Journal is quiet for now."
          />
          <WritingCrossLinks current="journal" />
        </section>
      </main>
    );
  }

  return (
    <main className="writing-scaffold journal-index">
      <WritingNavigation />

      <header className="writing-scaffold__header">
        <p className="section-label">{config.eyebrow}</p>
        <h1>{config.title}</h1>
        <p>{config.intro}</p>
      </header>

      <section className="journal-index__body" aria-label="Journal entries">
        {types.length > 2 ? (
          <div className="journal-index__toolbar">
            <p className="section-label">
              {active === ALL ? "Everything" : `${active}s`}
              <span> · {filtered.length}</span>
            </p>
            <EditorialFilters active={active} filters={types} onSelect={setActive} />
          </div>
        ) : null}

        {groups.length ? (
          groups.map((group) => (
            <section className="journal-month" key={group.label} aria-label={group.label}>
              <h2 className="journal-month__label">{group.label}</h2>
              <ol className="journal-month__list">
                {group.items.map((entry) => (
                  <li className="journal-entry-row" key={entry.id}>
                    <Link href={entry.href}>
                      <div className="journal-entry-row__meta">
                        <span className="journal-entry-row__type">{entry.type}</span>
                        <time dateTime={entry.date}>{formatEditorialDate(entry.date)}</time>
                        {entry.readingTime ? <span>{entry.readingTime} min read</span> : null}
                      </div>
                      <h3>{entry.title}</h3>
                      {entry.type === "Read" && entry.relatedBook ? (
                        <p className="journal-entry-row__book">
                          On <em>{entry.relatedBook.title}</em>
                          {entry.relatedBook.author ? ` · ${entry.relatedBook.author}` : ""}
                        </p>
                      ) : null}
                      <span className="journal-entry-row__cue" aria-hidden="true">Open&nbsp; ↗</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))
        ) : (
          <p className="journal-index__none" role="status">
            No {active.toLowerCase()} has been published yet.
          </p>
        )}

        <WritingCrossLinks current="journal" />
      </section>
    </main>
  );
}
