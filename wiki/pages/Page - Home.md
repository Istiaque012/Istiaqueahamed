---
title: Page - Home
type: page
status: in-progress
created: 2026-06-28
updated: 2026-07-15
visibility: public
tags: [project/website, page]
---

# 🏠 Page — Home

Back to [[Site Architecture]]

> [!abstract] Job of this page
> Make a stranger want to know more within 30 seconds. Dark, cinematic, confident. This is the most design-heavy page — it sets the tone for everything.

---

## Structure (top to bottom)

1. **Hero** — full-screen, dark, cinematic
   - Name large: **Istiaque Ahamed**
   - Tagline: **Medicine, technology, and the life in between.**
   - Role line: **Doctor, healthcare leader, and founder working across Bangladesh and Australia.**
   - Strong photo
   - Two CTAs: explore the story ([[Page - About]]) + see what he is building ([[Page - Projects]])
2. **Short intro** — 2–3 lines capturing the whole person (doctor · builder · writer · son)
3. **Identity strands** — a few elegant blocks hinting at the worlds: Medicine · Building (StudyRise) · Writing · Documentary · The journey. Each links deeper.
4. **Current thinking + Feed preview** — one optional Blog/Journal piece pinned through Sanity's
   **Feature on Home**, followed by the three newest published Blog/Journal items; with no pinned
   piece, show the four newest. Continue into the latest items from [[Page - Feed]].
5. **A line about the father** — a quiet, single sentence linking to [[Page - My Beloved Father]] (the emotional root)
6. **Footer** — socials, bio line, schema

## Final navigation

**Home · About · Father · Writing · Projects · Work · Contact**

"Father" remains top-level so it is easy to find. "Writing" is the entry point for the
[[Page - Feed]], [[Page - Blog]], and [[Page - Journal]]. See [[Site Architecture]].

## Working copy

The editable first-pass landing-page copy is in [[Sample Content Drafts#Landing page — first complete draft]]. It remains private until Istiaque approves it.

## Design notes

- Lean hard into [[Design System]] — motion on entrance, smooth scroll, one strong hero image
- Keep copy minimal; let space and photography carry it
- Mobile: the hero must still feel cinematic on a phone

## Production checkpoint — 2026-07-14

- Landing page v1 built in `site/` with the confirmed navigation, name-led hero, tagline, public
  role framing, editorial About, three identity strands, public timeline, StudyRise feature,
  Writing preview, Father moment, social contact links, and responsive mobile navigation.
- Added `/father` as the first secondary route and a distinct quieter doorway.
- Added a generated monochrome architectural hero placeholder and a bespoke social preview card;
  both are replaced or revisited when Istiaque supplies photography.
- Local production build passes. Browser-checked at 1440×1000 and 390×844 with no horizontal
  overflow, no console errors, and working mobile navigation.
- Still pending for Home completion: real portrait, live Sanity selected-writing/Feed teaser, and
  Istiaque's visual review of this first direction.

## SEO

- `<title>`: "Istiaque Ahamed — Doctor, Healthcare Leader & Founder"
- Person schema lives here (see [[SEO & Discoverability]])
- Custom OG image with name + photo + tagline

---

Related: [[Page - About]] · [[Page - Feed]] · [[Design System]]
