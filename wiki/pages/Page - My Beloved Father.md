---
title: Page - My Beloved Father
type: page
status: done
visibility: public
created: 2026-06-28
updated: 2026-07-15
tags: [project/website, page, personal]
---

# 🕊️ Page — My Beloved Father

Back to [[Site Architecture]]

> [!abstract] Job of this page
> The emotional root of the entire site. Medicine came from him. A quiet, sacred space to write about the man who shaped everything. This is what tells visitors who Istiaque really is, more than any credential.

---

## Why it matters

Per [[Discovery Answers]], the answer to "why did you become a doctor?" is simply: *my father was a doctor, and I was inspired by him.* That makes this section the spine of [[Vision & Positioning]] — it connects to [[Page - About]] (the "why medicine" block) and gives the whole site its heart.

## Section name

**"My Beloved Father"** (current). Appears in the nav, the feed tag, and the page title. Can be revisited.

## Structure

1. **Opening** — who he was. One photograph. A short introduction in Istiaque's own words. No long bio — just presence.
2. **Essays** — longer reflections: memories, lessons, things he taught. No word limit.
3. **Notes** — short entries: a phrase he used, a habit, something today that brought him to mind.
4. **Photos** (optional) — a small, restrained gallery. Not a memorial wall. A few images that say something.

## Tone & design — the "different room" rule

This space must feel **quieter and more minimal** than the rest of the site (see [[Design System#The different room rule]]): slower motion, more space, less UI. The moment someone enters, the register should change. Consider a warmer or softer treatment within the dark palette.

## How it connects

- New pieces appear in the [[Page - Feed]] with a quiet "My Beloved Father" tag
- Reachable from the main navigation
- Managed in Sanity like everything else (schema `fatherPiece`, format = Essay / Note — see [[Tech - Sanity CMS Setup#fatherPiece Page - My Beloved Father]])

> [!note] Handle with care
> This is the most personal part of the site. Build it last in its phase, slowly, and let Istiaque set the words. The design should never feel like "content" here — it should feel like a room.

## Production checkpoint — 2026-07-15

The public `/father` route and dynamic `/father/[slug]` reading experience are complete.

- The index opens in a dedicated warm-dark register with no promotional cards or decorative
  motion. Confirmed source material supplies the fallback opening; Sanity can replace it with
  Istiaque's approved words.
- Essays and Notes remain visibly separate. Each published piece automatically receives its date,
  reading time, and reading route; empty lists explicitly wait for Istiaque rather than presenting
  sample memories.
- The first approved singleton archive image becomes the opening portrait. Up to four remaining
  images form a restrained gallery with supplied captions. All current spaces are labelled,
  fixed-ratio, Sanity-authorable placeholders.
- Detail pages render Portable Text, approved inline images, captions, metadata, and an accessible
  return path. Unknown or unpublished slugs return a clean noindex 404 inside one shared shell.

The empty public dataset was reviewed at 1440×1000 and 390×844 with no overflow, clipped Father
controls, console warnings, or console errors. TypeScript, zero-warning lint, both Sanity contracts,
and the optimized production build pass. No personal memory, photograph, caption, or date was
invented.

---

Related: [[Page - About]] · [[Vision & Positioning]] · [[Design System]]
