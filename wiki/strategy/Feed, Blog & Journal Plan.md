---
title: Feed, Blog & Journal Plan
type: strategy
status: done
visibility: private
created: 2026-07-16
updated: 2026-07-16
tags: [project/website, strategy, content, navigation]
---

# 📡 Feed, Blog & Journal Plan

Back to [[00 - START HERE]]

> [!abstract] Decision
> Replace **Writing** in the public navigation with **Feed**. Feed becomes the reader-facing home
> for exactly two publishing formats: **Blog** and **Journal**. It is an automatic view, never a
> third format that Istiaque must write for.

> [!success] Implementation state
> Implemented and verified on 2026-07-16. Production navigation, Feed/RSS data, Home, Studio,
> metadata, AI-readable copy, owner instructions, and project documentation now use this model.

---

## Reader mental model

The complete public model should be understandable without explanation:

```text
Feed
├── All       → Blog posts + Journal entries, newest first
├── Blog      → longer, developed writing
└── Journal   → shorter Thoughts, Reads, and Observations
```

- **Feed is the place.** It gathers the two writing formats.
- **Blog and Journal are the formats.** They remain separate public indexes and detail routes.
- **There is no Feed document type.** Publishing a Blog post or Journal entry updates Feed
  automatically.
- **Father, Projects, and Documentaries are not Feed items.** They already have distinct public
  destinations and should not compete with the Blog/Journal distinction.

## Final navigation

### Primary navigation

**Home · About · Father · Feed · Projects · Work · Contact**

- Feed is a normal direct link to `/feed`, not a hover-only or disclosure submenu.
- Feed remains visually active on `/feed`, `/blog`, `/blog/[slug]`, `/journal`, and
  `/journal/[slug]` so readers understand that Blog and Journal belong to it.
- Desktop and mobile navigation use the same seven destinations and the same labels.
- Remove the nested Writing links from the mobile menu; the local Feed navigation handles the
  choice after arrival.

### Local Feed navigation

Feed, Blog, and Journal pages share one compact navigator:

**All · Blog · Journal**

- **All** links to `/feed`.
- **Blog** links to `/blog`.
- **Journal** links to `/journal`.
- Use `aria-current="page"` for the active destination.
- On detail pages, Blog or Journal remains active.
- Do not repeat a large “Writing” label above the navigator.

### Footer

Replace the footer column label **Writing** with **Feed** and use:

- All posts → `/feed`
- Blog → `/blog`
- Journal → `/journal`
- RSS → `/feed.xml`

## Page responsibilities and copy

### Feed

- **Title:** Feed
- **Eyebrow:** Blog & Journal
- **Introduction:** “A chronological stream of longer Blog posts and shorter Journal entries.”
- **Filters:** All · Blog · Journal
- **Rows:** type, date, reading time, title, excerpt when available, and optional Blog cover image
- **Empty state:** explain that published Blog and Journal entries will appear automatically
- **RSS action:** “Follow the Feed by RSS”

The existing URL remains `/feed`; no new `/writing` route is created.

### Blog

Keep [[Page - Blog]] and its existing `/blog` and `/blog/[slug]` routes. Blog remains the place for
longer, developed, authority-building work. Its category filters remain unchanged.

### Journal

Keep [[Page - Journal]] and its existing `/journal` and `/journal/[slug]` routes. Journal remains
the place for shorter Thoughts, Reads, and Observations. Its type filters remain unchanged.

## Home integration

The current Home has both curated Latest Writing and a broader Feed teaser. Narrowing Feed to
Blog/Journal would make those sections repeat the same content, so they must become one section.

- Rename the Home section **From the Feed** or keep **Latest Writing** with an **Open Feed** action.
- Keep the optional featured Blog/Journal item.
- Follow it with the newest non-duplicate Blog/Journal items.
- Remove the separate all-content Feed teaser and its duplicate query/rendering path.
- Keep Father, StudyRise/Projects, and any film doorway in their own existing Home scenes.
- When no Blog or Journal item exists, show one honest Feed empty state rather than two quiet states.

## Data and CMS contract

### Sanity schemas

Do not rename or migrate the underlying schemas:

- `blogPost` remains Blog.
- `journalEntry` remains Journal.
- `fatherPiece`, `project`, and `documentary` remain independent.
- There is still no editable Feed schema.

This avoids content migrations and preserves all existing detail URLs.

### Queries and revalidation

- Change the public Feed query to include only `blogPost` and `journalEntry`.
- Change Feed filters and supported URL parameters to only All, Blog, and Journal.
- Make `/feed.xml` use the same Blog/Journal contract as `/feed`.
- Remove Father, Project, and Documentary from Feed-specific revalidation tags.
- Remove the now-duplicate Home Feed teaser query after Home is consolidated.
- Keep the existing Home featured/latest Blog/Journal query or simplify it into one shared
  projection used by Home and Feed.

### Sanity Studio

- Keep Blog and Journal as the only writing create actions.
- Rename the Studio group from **Writing** to **Blog & Journal** for directness.
- Keep **Feed preview**, but make it read-only and Blog/Journal-only.
- Add guidance: “Publish a Blog post or Journal entry; Feed updates automatically.”
- Update the authoring verification script to enforce the new preview types and labels.

## URL and SEO policy

Keep all current public URLs:

- `/feed`
- `/blog`
- `/blog/[slug]`
- `/journal`
- `/journal/[slug]`
- `/feed.xml`

No redirects or slug migrations are needed. Update only the public language and data contract:

- Feed metadata must say Blog and Journal, not “everything published.”
- Sitemap keeps Feed, Blog, Journal, and their published detail pages.
- RSS title and description must match the narrowed Feed.
- `/llms.txt` must describe Feed as the combined Blog/Journal chronology.
- Internal links currently labelled Writing should become Feed, Read the Feed, or Open the Feed.
- Article metadata and JSON-LD for Blog and Journal detail pages remain unchanged.

## Implementation sequence

### Phase 1 — Navigation and language

1. Change the top-navigation label from Writing to Feed.
2. Replace the desktop Writing disclosure with a direct Feed link.
3. Remove nested Writing links from the mobile menu.
4. Preserve Feed-active state across Feed, Blog, Journal, and their detail routes.
5. Replace the shared Writing navigator with All · Blog · Journal.
6. Update footer labels and cross-links.

### Phase 2 — Feed data boundary

1. Narrow the GROQ Feed query to Blog and Journal.
2. Remove Father, Project, and Documentary filters and copy.
3. Align Feed empty states, row labels, pagination, and URL filters.
4. Align RSS and revalidation with the same two content types.

### Phase 3 — Home consolidation

1. Keep one featured/latest Blog-and-Journal section.
2. Remove the duplicate complete-Feed teaser query and UI.
3. Point the section action to `/feed`.
4. Verify Father and Projects retain their own Home doorways.

### Phase 4 — Studio and supporting surfaces

1. Rename the Studio group to Blog & Journal.
2. Narrow Feed preview to Blog and Journal.
3. Update Studio verification expectations.
4. Update About, Work, Course, empty states, footer, metadata, RSS, sitemap descriptions,
   `/llms.txt`, and owner instructions wherever they promise the old Writing/all-site Feed model.

### Phase 5 — Documentation and release

1. Update [[Content Strategy]], [[Site Architecture]], [[Page - Feed]], [[Page - Blog]],
   [[Page - Journal]], [[Website Owner Guide]], `index.md`, and `log.md` from planned to built truth.
2. Record this as a post-launch change; do not rewrite completed historical session handoffs.
3. Run the full quality gate and Sanity verification scripts.
4. Review desktop and mobile navigation, filters, empty states, RSS, metadata, and active states.
5. Deploy only after the implementation is green and the production smoke-test checklist passes.

## Primary implementation areas

- `site/lib/navigation.ts`
- `site/components/Nav.tsx`
- `site/components/writing/WritingNavigation.tsx`
- `site/components/writing/FeedIndex.tsx`
- `site/components/writing/EditorialPrimitives.tsx`
- `site/app/(site)/feed/page.tsx`
- `site/lib/page-config.ts`
- `site/lib/sanity/queries.ts`
- `site/lib/sanity/tags.ts`
- `site/app/feed.xml/route.ts`
- `site/app/(site)/page.tsx`
- `site/components/LandingPage.tsx`
- `site/sanity/structure.ts`
- `site/scripts/verify-sanity-authoring.ts`
- `site/public/llms.txt`
- Cross-site links and public copy found during the implementation audit

Internal TypeScript identifiers and CSS classes containing `writing` may remain when they are not
reader-facing and renaming them adds no behavioural value. Public labels, accessible names, helper
copy, and documentation must use the new model consistently.

## Acceptance criteria

- The header shows **Feed**, with no Writing dropdown on desktop or nested Writing menu on mobile.
- Feed is active throughout Feed, Blog, Journal, and their detail routes.
- Feed and RSS contain only published Blog and Journal documents.
- Feed exposes exactly All, Blog, and Journal choices.
- Father pieces, projects, and films never appear in Feed or RSS.
- Home has one non-duplicated Blog/Journal publishing section linked to Feed.
- Blog and Journal retain their existing indexes, filters, detail pages, metadata, and URLs.
- Sanity offers Blog and Journal publishing plus an accurate read-only Feed preview.
- No public navigation, metadata, empty state, owner guide, or AI-readable file describes Feed as
  “everything published.”
- Keyboard navigation, focus visibility, active states, touch targets, and reduced motion continue
  to pass at desktop and phone sizes.
- Typecheck, lint, production build, Sanity authoring verification, RSS response, sitemap response,
  and route smoke tests all pass.

## Rollback boundary

The migration does not alter document schemas or content slugs. If the release must be rolled back,
revert the navigation, query, Home, Studio structure, and copy changes together; no Sanity content
restoration or URL redirect cleanup should be required.

---

Related: [[Content Strategy]] · [[Site Architecture]] · [[Page - Feed]] · [[Page - Blog]] ·
[[Page - Journal]] · [[Website Owner Guide]]
