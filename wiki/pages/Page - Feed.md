---
title: Page - Feed
type: page
status: planned
created: 2026-06-28
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

---

Related: [[Site Architecture#The feed is the spine]] · [[Tech - Sanity CMS Setup]]
