---
title: Site Architecture
type: architecture
created: 2026-06-28
tags: [project/website, architecture, moc]
---

# 🗺️ Site Architecture

Back to [[00 - START HERE]]

The full map of every page, what it does, and whether it's managed in the CMS.

---

## Navigation structure

```
istiaqueahamed.com
│
├── Home                  → the cinematic first impression
├── About                 → the full story
├── Feed                  → everything I publish, one stream
│
├── Writing
│   ├── Blog              → 4 categories, long-form
│   └── Journal           → short Thought / Read / Observation
│
├── My Beloved Father     → its own quiet space
│
├── Work & Building
│   ├── Projects          → StudyRise + others
│   ├── Work              → medical credentials & roles
│   └── Documentaries     → YouTube films
│
├── Course                → AI in Healthcare (coming soon)
│
├── More
│   ├── Timeline          → visual life story
│   └── Bookshelf         → what I read
│
└── Contact               → form + socials
```

> [!note] Nav doesn't have to show all 13
> The top nav should stay clean (5–7 items). Group the rest under "Writing", "Work", "More" dropdowns or in the footer. Decide final nav in [[Page - Home]].

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

## Cross-cutting elements (every page)

- Consistent dark cinematic header + footer
- Footer has all [[Social Links]], a short bio line, and the Person schema
- Smooth page transitions (see [[Design System#Motion]])
- Person schema + correct meta on every page (see [[SEO & Discoverability]])

---

Related: [[Design System]] · [[Build Roadmap]] · [[Tech Stack Decision]]
