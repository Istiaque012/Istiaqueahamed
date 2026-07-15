---
title: Page - Feed
type: page
status: planned
created: 2026-06-28
updated: 2026-07-15
tags: [project/website, page]
---

# 📡 Page — Feed

Back to [[Site Architecture]]

> [!abstract] Job of this page
> The pulse of the site. One reverse-chronological stream of everything published, so anyone can follow the journey from a single place. The page people bookmark.

---

## What it pulls together

- Blog posts → [[Page - Blog]]
- Journal entries → [[Page - Journal]]
- Father pieces → [[Page - My Beloved Father]]
- Project updates → [[Page - Projects]]
- Documentaries → [[Page - Documentaries]]

## Behaviour

- Merged and sorted by `publishedAt`, newest first
- Each item shows a **type tag** (Blog / Journal / Father / Project / Documentary)
- **Filter** by type: All · Blog · Journal · My Beloved Father · Projects · Documentaries
- Each item links to its full view
- The home page shows a **preview** (latest 5–8) with "see everything →"

## Technical

- A GROQ query across all content types (see [[Tech - Sanity CMS Setup#The feed query]])
- No separate schema — it's a view over existing content

## Design notes

- Clean list rows, type tag, title, date, reading time
- Restrained motion as items enter on scroll (see [[Design System#Motion]])
- The father items can carry a subtler, quieter tag treatment

## Shared foundation — 2026-07-15

The `/feed` route now carries the completed Writing navigator, dark editorial scaffold, honest
empty state, and cross-links into Blog and Journal. Shared row/card, metadata, filter, no-image,
pagination, and destination helpers are ready for Session 13 to connect to the existing merged GROQ
query. The route remains noindex and `status: planned` until that real stream is produced.

---

Related: [[Site Architecture#The feed is the spine]] · [[Tech - Sanity CMS Setup]]
