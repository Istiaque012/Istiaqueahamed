---
title: Page - About
type: page
status: done
created: 2026-06-28
updated: 2026-07-15
visibility: public
tags: [project/website, page]
---

# 👤 Page — About

Back to [[Site Architecture]]

> [!abstract] Job of this page
> Take someone from curious to convinced. Establish credibility *and* make him human. Story-first, credentials in support.

---

## The six blocks

1. **Opening hook** — a sentence that makes someone lean in. Not "Hi, I'm Istiaque." Something with conviction.
2. **Credentials (brief)** — MBBS (Sylhet North East Medical College), internship (BIRDEM), MPH (Macquarie), AMC pathway, current roles. 2–3 sentences, confident not stuffy. Full detail lives in [[Page - Work]].
3. **Why I became a doctor** — his father. This is the soul of the page and links to [[Page - My Beloved Father]]. Honest and specific.
4. **The human side** — the many worlds: hospital leadership, StudyRise & tech, documentary, fitness, faith, the Australia journey, writing. The surprising combination.
5. **What this site is about** — why he writes and who he's writing for (pull from [[Audience & Goals]]).
6. **Closing CTA** — a door, not a period. "Read the latest" → [[Page - Feed]] or "Get in touch" → [[Page - Contact]].

## The dual-identity angle

Prominently surface the **Bangladesh ↔ Australia** arc. It's central to the brand and to the people following the journey. Ties to [[Page - Timeline]].

## Source material

All raw content in [[Discovery Answers]]. The confirmed public summary is: **"Doctor, healthcare
leader, and founder working across Bangladesh and Australia."** Detailed current employer and
company titles are intentionally omitted from the public biography; see [[DECISIONS-NEEDED]].

Editable first-pass copy: [[Sample Content Drafts#C1 · About narrative]].

## Design notes

- Editorial, photo-supported, generous space (see [[Design System]])
- A natural-light, human photo here, not just the formal headshot
- Optional CV download

## Production checkpoint — 2026-07-15

The public `/about` route is complete in the shared shell. It uses six story-led scenes:

1. A light editorial opening with the natural-language identity statement and square portrait slot.
2. Verified MBBS, BIRDEM internship, MPH, and AMC preparation in support of the story.
3. A visible Bangladesh ↔ Australia bridge.
4. A warmer Father scene linking into [[Page - My Beloved Father]].
5. The human-side worlds and three author-editable lifestyle image slots.
6. Site purpose, routes into Feed/Projects/Timeline, and an open closing action.

The page is indexable and reinforces the existing site-wide Person schema through visible,
extractable biographical language and dedicated metadata. Detailed current employer and company
titles remain omitted. Every personal photograph remains a labelled, fixed-ratio placeholder until
an approved image is uploaded in Sanity.

Verification passed at 1440×1000, 390×844, and 360×800 with no horizontal overflow, clipped
controls, browser warnings, or browser errors. Preview captures are stored in `site/.preview/`.

## SEO

- Person schema reinforced here
- Natural-language bio that AI search can lift: "Istiaque Ahamed is a doctor and founder based between Bangladesh and Australia…"

---

Related: [[Page - My Beloved Father]] · [[Page - Work]] · [[Page - Timeline]] · [[Discovery Answers]]
