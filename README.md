# Istiaque Ahamed — Personal Website Wiki

A private, self-maintaining knowledge base for building **[istiaqueahamed.com](https://istiaqueahamed.com)**,
run as an [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): an
Obsidian vault where **I source and decide, and Claude does all the writing, cross-linking, and
bookkeeping.** The wiki compounds — every source and answer is integrated, not re-derived.

## How it's organized

| Path | What it is |
|---|---|
| **`CLAUDE.md`** | The schema — conventions + workflows that make Claude a disciplined maintainer. Start here. |
| **`index.md`** | Catalog of every page, with a one-line summary and `public`/`private` visibility. |
| **`log.md`** | Append-only timeline of ingests, queries, and lint passes. |
| **`raw/`** | Immutable sources — my raw answers, research, screenshots. Never edited. |
| **`wiki/`** | Claude-maintained pages: `strategy/`, `site/`, `pages/`, `tech/`, `reference/`. |

Open the folder as an Obsidian vault and use the graph view to see how it all connects. Start at
`wiki/00 - START HERE.md`.

## How I work it

- **Ingest** — I drop a source in `raw/` and ask Claude to process it. Claude reads it, updates the
  relevant pages, the index, and the log.
- **Query** — I ask a question; Claude answers from the wiki with citations and files good answers
  back as new pages.
- **Lint** — periodically Claude health-checks the wiki for contradictions, stale claims, orphans,
  and missing links.

## Public vs private

This planning repo is **private**. Pages marked `visibility: public` in `index.md` are the facts and
copy meant for the live website, which is built to be **indexed by Google and AI assistants** — so
that anyone searching or asking an AI "who is Istiaque Ahamed?" gets the real, consistent answer.
`private` pages (strategy, drafts, unconfirmed ⚠️ items) never ship verbatim.
