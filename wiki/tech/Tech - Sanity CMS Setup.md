---
title: Tech - Sanity CMS Setup
type: tech
status: done
visibility: private
created: 2026-06-28
updated: 2026-07-15
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
- featureOnHome (boolean — selected posts can appear on Home)
- homeFeatureRank (optional ordering for selected Home posts)
- seoTitle / seoDescription (optional overrides)
- readingTime (auto-calculated)

### `journalEntry` → [[Page - Journal]]
- title
- slug
- type (Thought / Read / Observation)
- body (Portable Text, kept short)
- publishedAt
- featureOnHome (boolean — selected entries can appear on Home)
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
- screenshots (up to five approved product views)
- description (Portable Text)
- techStack (array)
- liveUrl / githubUrl
- publishedAt (Feed ordering)
- status (Live / In progress / Concept)
- featured (boolean — StudyRise is featured)

### `documentary` → [[Page - Documentaries]]
- title
- youtubeUrl (for embed)
- thumbnail
- description (required approved public context)
- publishedAt
- primary topic / up to five supporting themes
- featured (newest featured film opens the page)

### `book` → [[Page - Bookshelf]]
- title
- author
- coverImage
- note (what it meant to me)
- status (Reading / Read / Want to read)
- optional shelf order

### `timelineEvent` → [[Page - Timeline]]
- year
- title
- description
- category (Medicine / Tech / Personal / Australia)
- optional story order
- optional related-page link

### Singletons (one-off documents)
- `siteSettings` — name, tagline, bio, social links, OG image, Person-schema fields
- `homePage` — editable Home copy and personal-image slots
- `aboutPage` — the six story blocks for [[Page - About]]
- `fatherPage` — opening copy and archive image slots
- `workPage` — approved public framing, focus areas, optional work image, and approved-PDF-only CV control
- `coursePage` — status, approved context, intended audience, broad themes, current Writing link,
  and an Available-only action for [[Page - Course (AI in Healthcare)]]
- `contactPage` — welcome copy, success message, and the author-controlled form switch for
  [[Page - Contact]]; delivery credentials and recipient stay in private server variables

---

## The feed query

The [[Page - Feed]] doesn't have its own schema. It's a GROQ query that pulls `blogPost`, `journalEntry`, `fatherPiece`, `project`, and `documentary`, merges them, and sorts by `publishedAt` descending. Each item carries a `_type` so the UI can show the right tag and filter.

Session 13 now exposes that same contract as the complete visitor Feed and `/feed.xml` RSS. Home's
smaller teaser keeps the same eligibility, order, label, and destination rules, so the two surfaces
cannot disagree about what is newest.

Session 16 keeps Documentary publication in the same Feed/RSS contract and now sends each Feed
link to the film's stable page anchor. YouTube embeds are facades: the external player loads only
after a visitor chooses Play.

Home uses two related queries: one optional published Blog/Journal item with
`featureOnHome == true`, plus the three newest published Blog/Journal items excluding that item.
With no featured item, Home shows the four newest. A newly published Blog post therefore appears
automatically in Latest Writing.

## Studio structure — what Istiaque sees

- **Website** — Home, About, Father, Work, Course, Contact, and Settings
- **Writing** — Blog posts, Journal entries, and a read-only Feed preview
- **Father** — Father essays and notes
- **Projects** — StudyRise and future approved projects
- **Films** — Documentaries
- **Timeline** — life events
- **Bookshelf** — books and notes

Every form uses plain-language descriptions, validation, sensible initial values, and a preview.
The create menu offers guided shortcuts for all four Blog categories, all three Journal formats,
and Father essays/notes, each with the correct format already selected. Section and document icons
make the desk scannable without exposing schema names.

> [!success] Session 04 verified
> The authenticated Studio was checked with the project-owner GitHub identity. The seven desk
> sections, Website singletons, Writing views, complete shortcut menu, and a guided Blog draft all
> work as intended. Fresh 1440px and 390px passes showed no console warnings/errors or horizontal
> overflow, and no test content was saved.

## Draft and visual preview

Session 05 adds the Studio Presentation view so the real website can sit beside the editing form.
Draft Mode will keep unpublished work private while letting Istiaque preview it at desktop and
mobile sizes. Image fields already support upload, alt text, captions, and hotspot/crop controls so
the same personal picture can be art-directed for different layouts.

> [!success] Session 05 verified
> Typed live queries, strict `next-sanity` live fetching, Presentation routes, Visual Editing hooks,
> fail-closed draft/revalidation APIs, Sanity CDN image support, blur helpers, and Portable Text
> image rendering are built. `SANITY_API_READ_TOKEN` and `SANITY_REVALIDATE_SECRET` are configured
> locally and in Vercel Production/Preview. A labelled test Blog draft was created, published,
> updated, unpublished/deleted, and confirmed cleaned up; signed revalidation returned the expected
> Blog, Feed, and Home tags.

---

## Publishing workflow (what you'll actually do)

1. Go to your Sanity Studio (a clean web dashboard at e.g. istiaqueahamed.com/studio)
2. Pick a content type ("New blog post")
3. Write in a rich editor — add images, format text
4. Preview the unpublished page; optionally select **Feature on Home** for the prominent pin
5. Hit **Publish**
6. It appears on its page, in Feed, and automatically in Home's Latest Writing; a selected piece
   also receives the prominent Home position

> [!tip] No code, ever, after setup
> Once the schemas above are built, you never touch code to publish. The Studio is your whole writing world.

For the short owner workflow, photo rules, unpublishing steps, and pre-publish checklist, use
[[Website Owner Guide]].

---

Related: [[Tech Stack Decision]] · [[Site Architecture]] · [[Content Strategy]]
