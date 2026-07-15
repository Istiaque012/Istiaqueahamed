---
title: Page - Documentaries
type: page
status: done
created: 2026-06-28
updated: 2026-07-15
visibility: public
tags: [project/website, page]
---

# 🎬 Page — Documentaries

Back to [[Site Architecture]]

> [!abstract] Job of this page
> Showcase his documentary and social-awareness films. This is a rare, distinctive part of his identity — a doctor who tells stories on film. It deserves its own page, not just a social icon.

---

## What it is

Istiaque makes **documentaries / social-awareness videos** on YouTube (@Istiaqamd). This page gives that work a real home on the site.

## Structure

- A strong lead — newest featured film presented large
- Grid of films below, each with:
  - Click-to-load privacy-enhanced YouTube player (no iframe before intent)
  - Title
  - Short context — what it's about, why he made it
  - Primary and supporting themes
- Link out to the full YouTube channel → [[Social Links]]

When no approved film exists, the page keeps an indexable designed film room and links to the
confirmed channel. It does not publish a guessed title, date, subject, thumbnail, or context.

## Schema

`documentary` — see [[Tech - Sanity CMS Setup#documentary Page - Documentaries]]

## Design notes

- Video-forward, cinematic — fits the dark-luxury aesthetic naturally
- Thumbnails should be high quality and consistent
- New uploads flow into the [[Page - Feed]]
- Feed and RSS links open the exact film anchor

## SEO

- Each film's context written as real text (not just an embed) so it's indexable
- Complete film records emit factual `VideoObject` metadata
- Helps the entity: "Istiaque Ahamed" associated with documentary work

## Build status — Session 16

The page, Sanity model, automatic/custom thumbnail path, lazy facade, responsive archive, channel
links, metadata, and Feed integration are complete. Runtime QA covered the honest empty public
state at desktop and phone sizes with no YouTube iframe loaded. Populated playback waits for the
one or two approved C5 films in Session 23.

---

Related: [[Page - Feed]] · [[Social Links]] · [[Vision & Positioning]]
