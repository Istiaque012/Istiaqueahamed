---
title: Page - Home
type: page
status: done
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

1. **Presence** — name-led full-screen hero, approved public role framing, portrait slot, and paths
   into [[Page - About]] and [[Page - Projects]].
2. **Point of view** — the confirmed belief that good healthcare is also built through systems,
   communication, leadership, discipline, and operational details.
3. **Inheritance** — the early, warmer Father doorway and archive-image slot, before credentials.
4. **Foundation** — confirmed medical training, BIRDEM internship, Macquarie MPH, and AMC path.
5. **Proof of building** — StudyRise as the practical “doctor who builds” evidence.
6. **Published** — one optional featured Blog/Journal item, then three de-duplicated latest pieces;
   without a feature, the four latest pieces. Continue into the broader [[Page - Feed]] teaser.
7. **Life in motion** — three authorable photo slots connecting the two-country, medicine, and
   building strands without presenting them as separate identities.
8. **Open door** — Contact action and the canonical [[Social Links]].

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

## Production checkpoint — 2026-07-15

- Home v2 is complete as eight cinematic scenes. Person, conviction, and Father now arrive before
  the education arc; StudyRise provides the proof of building; life and Contact close the page.
- The Home singleton supplies its portrait, role line, point of view, Father copy/image,
  Foundation, StudyRise, life images, and Contact invitation. Confirmed public fallbacks keep the
  page complete while those fields are empty.
- Published Blog/Journal content is live: an optional Home feature is followed by three latest
  non-duplicate pieces, or four latest pieces when no feature exists. The separate Feed teaser
  draws from Blog, Journal, Father, Projects, and Documentaries.
- The current public dataset is intentionally empty, so the page shows designed writing/Feed empty
  states rather than sample posts presented as real publications.
- Approved personal photography remains non-blocking: the hero, Father archive, and three life
  slots use accessible exact-purpose placeholders that Sanity images replace without code changes.
- TypeScript, zero-warning lint, Sanity authoring/live contracts, and the production build pass.
  Browser review passed at 1440×1000, 390×844, and 360×800 with no overflow, clipped actions, or
  console errors. Previews live in `site/.preview/session-06-*` and `session-07-*`.

## SEO

- `<title>`: "Istiaque Ahamed — Doctor, Healthcare Leader & Founder"
- Person schema lives here (see [[SEO & Discoverability]])
- Custom OG image with name + photo + tagline

---

Related: [[Page - About]] · [[Page - Feed]] · [[Design System]]
