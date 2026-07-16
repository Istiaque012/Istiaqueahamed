---
title: Page - Journal
type: page
status: done
created: 2026-06-28
updated: 2026-07-16
tags: [project/website, page]
---

# 📓 Page — Journal

Back to [[Site Architecture]]

> [!abstract] Job of this page
> The raw, honest side of his mind. Shorter and rawer than the [[Page - Blog]]. A "letter to the internet" — honest but crafted. Fully public.

> [!info] Built (Session 12 · 2026-07-15)
> Live at `/journal` on the shared dark register: entries grouped by month with Thought/Read/
> Observation filters and a related-book line on Read rows. `/journal/[slug]` is a minimal reading
> view with a related-book aside linking to the Bookshelf, article metadata, and `Article` JSON-LD.
> See [[BUILD-PLAN]] Session 12.

---

## Entry types

- **Thought** — inner monologue made visible
- **Read** — something learned from a book/article (can link to [[Page - Bookshelf]])
- **Observation** — a small, specific moment worth noticing

## Rules

- Under ~400 words each
- Consistency over frequency — write when something moves you, not on a schedule
- **Never patient details** — impressions and feelings only (see [[Content Strategy#The non-negotiable rules]])
- No tidy conclusions required

## Page structure

- **Index:** entries with date + type tag, archived by month
- **Single entry:** clean, minimal, just the words

## Schema

`journalEntry` — see [[Tech - Sanity CMS Setup#journalEntry Page - Journal]]

## Design notes

- Minimal, typography-forward, lots of space
- Type tag colour-coded but subtle

## Shared Feed foundation — 2026-07-16

The `/journal` route carries the shared **All · Blog · Journal** Feed navigator, dark editorial
register, honest empty state, and cross-links into Feed and Blog. Journal and its detail pages keep
their existing URLs, month grouping, type filters, related-book treatment, metadata, and Article
schema.

---

Related: [[Page - Blog]] · [[Page - Bookshelf]] · [[Content Strategy]]
