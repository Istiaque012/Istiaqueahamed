---
title: Tech - Sanity CMS Setup
type: tech
created: 2026-06-28
tags: [project/website, tech, cms, sanity]
---

# 🗄️ Tech — Sanity CMS Setup

Back to [[00 - START HERE]] · Parent: [[Tech Stack Decision]]

How content is modelled in Sanity. These "schemas" define what you can write and publish. Each maps to a page.

---

## Content types (schemas)

### `blogPost` → [[Page - Blog]]
- title
- slug
- category (Health & Medicine / Life in Medicine / Opinion / Personal)
- coverImage
- excerpt
- body (Portable Text — rich content)
- publishedAt
- featured (boolean — for the pinned post)
- readingTime (auto-calculated)

### `journalEntry` → [[Page - Journal]]
- title
- slug
- type (Thought / Read / Observation)
- body (Portable Text, kept short)
- publishedAt
- relatedBook (optional reference → `book`, for "Read" entries)

### `fatherPiece` → [[Page - My Beloved Father]]
- title
- slug
- format (Essay / Note)
- body (Portable Text)
- image (optional)
- publishedAt

### `project` → [[Page - Projects]]
- name
- slug
- tagline
- coverImage
- description (Portable Text)
- techStack (array)
- liveUrl / githubUrl
- status (Live / In progress / Concept)
- featured (boolean — StudyRise is featured)

### `documentary` → [[Page - Documentaries]]
- title
- youtubeUrl (for embed)
- thumbnail
- description
- publishedAt
- topic / theme

### `book` → [[Page - Bookshelf]]
- title
- author
- coverImage
- note (what it meant to me)
- status (Reading / Read / Want to read)

### `timelineEvent` → [[Page - Timeline]]
- year
- title
- description
- category (Medicine / Tech / Personal / Australia)

### Singletons (one-off documents)
- `siteSettings` — name, tagline, bio, social links, OG image, Person-schema fields
- `aboutPage` — the six story blocks for [[Page - About]]
- `coursePage` — content for [[Page - Course (AI in Healthcare)]]

---

## The feed query

The [[Page - Feed]] doesn't have its own schema. It's a GROQ query that pulls `blogPost`, `journalEntry`, `fatherPiece`, `project`, and `documentary`, merges them, and sorts by `publishedAt` descending. Each item carries a `_type` so the UI can show the right tag and filter.

---

## Publishing workflow (what you'll actually do)

1. Go to your Sanity Studio (a clean web dashboard at e.g. istiaqueahamed.com/studio)
2. Pick a content type ("New blog post")
3. Write in a rich editor — add images, format text
4. Hit **Publish**
5. It appears on the live site (and in the feed) within seconds

> [!tip] No code, ever, after setup
> Once the schemas above are built, you never touch code to publish. The Studio is your whole writing world.

---

Related: [[Tech Stack Decision]] · [[Site Architecture]] · [[Content Strategy]]
