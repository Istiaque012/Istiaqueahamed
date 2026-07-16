---
title: Page - Feed
type: page
status: done
visibility: public
created: 2026-06-28
updated: 2026-07-16
tags: [project/website, page]
---

# 📡 Page — Feed

Back to [[Site Architecture]]

> [!abstract] Job of this page
> The reader-facing home for Istiaque's Blog and Journal: one reverse-chronological stream, with
> clear paths into long-form and short-form writing.

---

## What it pulls together

- Blog posts → [[Page - Blog]]
- Journal entries → [[Page - Journal]]

## Behaviour

- Merged and sorted by `publishedAt`, newest first
- Each item shows a **type tag** (Blog / Journal)
- Shared local navigation: **All · Blog · Journal**
- Feed-page filters: **All · Blog · Journal**, reflected in the URL
- Each item links to its full view
- The home page shows one optional featured item plus the newest Blog/Journal items and an
  **Open the Feed** action

## Technical

- A GROQ query across `blogPost` and `journalEntry` (see [[Tech - Sanity CMS Setup#The feed query]])
- No separate schema — it's a view over existing content

## Design notes

- Clean list rows, type tag, title, date, reading time
- Restrained motion as items enter on scroll (see [[Design System#Motion]])
- Blog cover images remain optional; Journal stays text-first

## Built — 2026-07-16

The public `/feed` route is the direct primary-navigation destination for Blog and Journal. It has
All/Blog/Journal local navigation and URL-backed filters, stable image/no-image rows, eight-item
load-more pagination, honest empty/no-result states, and matching RSS at `/feed.xml`. Feed remains
active throughout Blog, Journal, and their detail routes. Father pieces, projects, and films no
longer enter Feed or RSS.

---

Related: [[Feed, Blog & Journal Plan]] · [[Site Architecture#Feed is the publishing doorway]] ·
[[Tech - Sanity CMS Setup]]
