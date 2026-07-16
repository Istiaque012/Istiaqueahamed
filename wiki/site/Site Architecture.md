---
title: Site Architecture
type: architecture
created: 2026-06-28
updated: 2026-07-16
visibility: private
tags: [project/website, architecture, moc]
---

# 🗺️ Site Architecture

Back to [[00 - START HERE]]

The full map of every page, what it does, and whether it's managed in the CMS.

---

## Navigation structure

The confirmed top navigation is:

**Home · About · Father · Feed · Projects · Work · Contact**

```
istiaqueahamed.com
│
├── Home                  → the cinematic first impression
├── About                 → the full story
├── My Beloved Father     → its own quiet space; nav label "Father"
├── Feed                  → Blog + Journal, newest first
│   ├── All               → combined Blog/Journal chronology
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
> page heading. Link to it again from the Home father moment, the About story, and the footer.

---

## Page register

| Page | Purpose | CMS-managed | Note |
|---|---|---|---|
| Home | First impression, pulls feed | Partly | [[Page - Home]] |
| About | The full story, 6 blocks | Mostly static | [[Page - About]] |
| Feed | Blog + Journal, one stream | Auto (queries both) | [[Page - Feed]] |
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

## Feed is the publishing doorway

The [[Page - Feed]] merges published Blog and Journal documents into one reverse-chronological
stream. Blog and Journal remain distinct formats and routes; Feed is their automatic reader-facing
container. Father, Projects, and Documentaries keep their own destinations.

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
| 6 | Feed | (new) | optional featured Blog/Journal piece + latest writing + Feed action | [[Page - Feed]] |
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

### Implementation checkpoint — 2026-07-16

The final shared shell and all thirteen public route paths are implemented as responsive,
honest scaffolds. The seven top-navigation entries organise those destinations; the footer keeps
the complete public route directory visible. Session 03 passed the complete desktop and mobile
route matrix, narrow 360px overflow checks, keyboard skip/Escape/focus containment, active states,
and the production build. The post-launch Feed migration then replaced the Writing disclosure with
a direct Feed link and preserved its active state across Feed, Blog, Journal, and detail routes.

---

Related: [[Design System]] · [[Tech Stack Decision]]
