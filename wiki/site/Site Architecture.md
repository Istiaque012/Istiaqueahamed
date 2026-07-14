---
title: Site Architecture
type: architecture
created: 2026-06-28
updated: 2026-07-15
visibility: private
tags: [project/website, architecture, moc]
---

# 🗺️ Site Architecture

Back to [[00 - START HERE]]

The full map of every page, what it does, and whether it's managed in the CMS.

---

## Navigation structure

The confirmed top navigation is:

**Home · About · Father · Writing · Projects · Work · Contact**

```
istiaqueahamed.com
│
├── Home                  → the cinematic first impression
├── About                 → the full story
├── My Beloved Father     → its own quiet space; nav label "Father"
├── Writing               → navigation group; defaults to Feed (no separate 14th page)
│   ├── Feed              → everything I publish, one stream
│   ├── Blog              → 4 categories, long-form
│   └── Journal           → short Thought / Read / Observation
├── Projects              → StudyRise at initial launch
├── Work                  → medical credentials & roles
└── Contact               → form + socials

Footer / in-page routes
├── Documentaries         → YouTube films
├── Timeline              → visual life story
├── Bookshelf             → what I read
└── Course                → AI in Healthcare (later)
```

> [!tip] Father discoverability
> Use `/father` as the short URL and "Father" as the nav label; keep **My Beloved Father** as the
> page heading. Link to it again from the Home father moment, the About story, the Feed filter,
> and the footer.

---

## Page register

| Page | Purpose | CMS-managed | Note |
|---|---|---|---|
| Home | First impression, pulls feed | Partly | [[Page - Home]] |
| About | The full story, 6 blocks | Mostly static | [[Page - About]] |
| Feed | All content, one stream | Auto (queries all) | [[Page - Feed]] |
| Blog | Long-form, 4 categories | ✅ Yes | [[Page - Blog]] |
| Journal | Short entries, 3 types | ✅ Yes | [[Page - Journal]] |
| My Beloved Father | Essays + notes + photos | ✅ Yes | [[Page - My Beloved Father]] |
| Projects | StudyRise + others | ✅ Yes | [[Page - Projects]] |
| Work | Credentials & roles | Mostly static | [[Page - Work]] |
| Documentaries | YouTube films | ✅ Yes | [[Page - Documentaries]] |
| Course | AI in Healthcare, coming soon | Static for now | [[Page - Course (AI in Healthcare)]] |
| Timeline | Visual life arc | Semi-static | [[Page - Timeline]] |
| Bookshelf | Reading list | ✅ Yes | [[Page - Bookshelf]] |
| Contact | Form + socials | Static | [[Page - Contact]] |

---

## The feed is the spine

The [[Page - Feed]] deserves special attention. Every CMS content type (blog, journal, father, project, documentary) carries a `publishedAt` date. Next.js queries them all and merges into one reverse-chronological stream, filterable by type. This is what someone bookmarks to follow the journey, and it's surfaced on the home page too.

---

## Home page section map (Portfolite-inspired)

The [[Page - Home]] adopts the single-scroll structure of the Portfolite Framer template —
*structure and motion only*, rendered in our dark cinematic register (see [[Design System]]),
not its light/bright agency mood. Each borrowed section is reframed from "freelancer selling
services" to "one person, one whole life."

| # | Section | Borrowed from Portfolite | Our content | Feeds page |
|---|---|---|---|---|
| 1 | Sticky nav | top nav + single CTA | clean 5–7 items + Contact CTA | site chrome |
| 2 | Hero | oversized name + tagline + 2 CTAs | "Istiaque Ahamed" + final tagline | [[Page - Home]] |
| 3 | Credibility strip | client-logo row | institutions: Sylhet NE Medical College · BIRDEM · Macquarie (MPH) · AMC | [[Page - Work]] |
| 4 | About block | "Meet Meily" photo + intro + skill tags | "Meet Istiaque" + facet tags | [[Page - About]] |
| 5 | Projects feature | case-study presentation | StudyRise | [[Page - Projects]] |
| 6 | Writing + Feed teaser | (new) | selected Blog/Journal pieces + latest from Feed | [[Page - Feed]] |
| 7 | Father moment | — (no equivalent) | a quiet break into the "different room" | [[Page - My Beloved Father]] |
| 8 | Stats / FAQ | counters + accordion | reusable credibility components (optional) | — |
| 9 | Contact CTA footer | "let's create together" | confident reach-out + [[Social Links]] | [[Page - Contact]] |

> [!note] Adapt, don't copy
> **Dropped** as wrong for this site: "book a free call", pricing, "available for work",
> testimonials we can't substantiate. The site sells *recognition*, not a service.

> [!tip] The Father exception
> Section 7 must visibly shift register — slower motion, more space — honouring the
> "different room" rule in [[Design System]]. Portfolite has no emotional gear; this is ours.

---

## Cross-cutting elements (every page)

- Consistent dark cinematic header + footer
- Footer has all [[Social Links]], a short bio line, and the Person schema
- Smooth page transitions (see [[Design System#Motion]])
- Person schema + correct meta on every page (see [[SEO & Discoverability]])

### Implementation checkpoint — 2026-07-15

The final shared shell and all thirteen public route paths are implemented as responsive,
honest scaffolds. The seven top-navigation entries organise those destinations; the footer keeps
the complete public route directory visible. Session 03 is paused before its full route-matrix,
mobile-menu, keyboard, and production-build verification, so the unfinished page scaffolds remain
`noindex` until their dedicated build sessions.

---

Related: [[Design System]] · [[Build Roadmap]] · [[Tech Stack Decision]]
