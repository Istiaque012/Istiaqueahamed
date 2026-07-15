---
title: Page - Blog
type: page
status: planned
created: 2026-06-28
updated: 2026-07-15
tags: [project/website, page]
---

# ✍️ Page — Blog

Back to [[Site Architecture]]

> [!abstract] Job of this page
> Thought leadership. Longer, crafted writing that builds authority and shows how he thinks. The engine of [[SEO & Discoverability]].

---

## Categories

1. **Health & Medicine** — explain conditions, debunk myths, public health, systems thinking
2. **Life in Medicine** — day-in-the-life, burnout, the Australia pathway, what doctors wish patients knew
3. **Opinion** — healthcare, policy, tech in medicine, discipline, building
4. **Personal** — growth, faith, fitness, reflections

## Page structure

- **Index:** featured/pinned post up top, then a filterable grid/list by category
- **Single post:** big title, cover image, reading time, body, related posts
- Search/filter by category

## Content rules

From [[Content Strategy]]: write for one person, never include patient details, depth over volume, no forced conclusions.

## Schema

`blogPost` — see [[Tech - Sanity CMS Setup#blogPost Page - Blog]]

## Design notes

- Editorial typography, comfortable reading measure
- Serif body is an option here for a premium long-read feel (see [[Design System#Typography]])

## Shared foundation — 2026-07-15

The `/blog` route now carries the completed Writing navigator, light editorial scaffold, honest
empty state, and cross-links into Feed and Journal. Shared card/row, metadata, category-filter,
no-image, pagination, date, and destination helpers are ready for Session 11. The route remains
noindex and `status: planned` until the real Blog index and detail renderer are complete.

---

Related: [[Page - Journal]] · [[Content Strategy]] · [[Page - Feed]]
