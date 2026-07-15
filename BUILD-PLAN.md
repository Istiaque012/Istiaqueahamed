---
title: Build Plan
type: system
status: in-progress
visibility: private
updated: 2026-07-15
tags: [project/website, planning, build, sessions]
---

# 🏗️ BUILD PLAN — istiaqueahamed.com

> [!abstract] The control document for every production session
> Read this file after `AGENTS.md` and `index.md` at the start of every build session. Work on one
> session at a time. Before stopping, update the progress table and that session's handoff record
> so the next session knows exactly what exists, what was verified, and where to resume.

This plan preserves the complete **thirteen-page roadmap**. The seven confirmed top-navigation
destinations remain the clearest entrance to the site; Writing groups Feed, Blog, and Journal, and
the footer/in-page routes expose Documentaries, Timeline, Bookshelf, and Course. Every page receives
its own production session and completion criteria.

**Companion files:** [[Creative Direction - Full Freedom]] · [[Site Architecture]] ·
[[Design System]] · [[Content Strategy]] · [[Tech - Sanity CMS Setup]] ·
[[IMAGE-MANIFEST|IMAGE-MANIFEST.md]] · [[DECISIONS-NEEDED]]

---

## 1. Complete website

### Confirmed top navigation

**Home · About · Father · Writing · Projects · Work · Contact**

Writing opens **Feed · Blog · Journal** and defaults to Feed. It is a navigation group, not a
fourteenth public page. Father remains a direct top-level link.

### Thirteen public pages

| # | Page | Route | Purpose |
|---|---|---|---|
| 1 | Home | `/` | Eight-scene cinematic introduction with selected live content |
| 2 | About | `/about` | Complete story, identity, and two-country arc |
| 3 | Feed | `/feed` | Reverse-chronological stream of everything published |
| 4 | Blog | `/blog` | Crafted long-form essays and authority-building writing |
| 5 | Journal | `/journal` | Shorter Thoughts, Reads, and Observations |
| 6 | My Beloved Father | `/father` | Quiet personal space, essays, notes, and photographs |
| 7 | Projects | `/projects` | StudyRise at first; approved projects later |
| 8 | Work | `/work` | Curated training, public experience, and areas of focus |
| 9 | Documentaries | `/documentaries` | Films, context, and YouTube embeds |
| 10 | Course | `/course` | AI in Healthcare page; minimal until the offer is ready |
| 11 | Timeline | `/timeline` | Visual life arc across medicine, technology, and countries |
| 12 | Bookshelf | `/bookshelf` | Books, reading status, and personal notes |
| 13 | Contact | `/contact` | Private contact form and confirmed social links |

Supporting routes include `/blog/[slug]`, `/journal/[slug]`, `/father/[slug]`,
`/projects/[slug]`, `/studio`, `/sitemap.xml`, `/robots.txt`, `/feed/rss.xml`, and a styled
not-found page.

### Home narrative

1. **Presence** — portrait, name, confirmed tagline, and public role line.
2. **Point of view** — healthcare beyond the consultation room.
3. **Inheritance** — the Father doorway appears early.
4. **Foundation** — concise education and Bangladesh–Australia arc.
5. **Proof of building** — StudyRise as a specific product story.
6. **Current thinking** — selected Blog/Journal items from Sanity.
7. **Life in motion** — personal-photo sequence with exact placeholders until supplied.
8. **Open door** — contact invitation and social links.

### Experience standard

- Ultra-modern cinematic editorial design, authored for this site rather than copied from a kit.
- Mobile-first layouts at 360px, 390px, 430px, tablet, laptop, and wide desktop.
- Motion for pacing: masked text reveals, image transitions, restrained parallax, page transitions,
  and tactile hover/focus states. No animation may make reading or navigation harder.
- Motion and Lenis remain the animation foundation. Base UI supplies accessible behaviour where a
  native element is insufficient. Motion Primitives may be adapted selectively.
- Every non-essential animation respects `prefers-reduced-motion`.
- Every personal-image position has a stable aspect-ratio placeholder, useful alt-text guidance,
  and a Sanity upload field where the image should be author-editable.

---

## 2. Sanity publishing promise

Sanity remains the private content desk for the complete site. After the authoring sessions,
Istiaque's normal Blog workflow is:

1. Open `/studio` and choose **New blog post**.
2. Add title, category, excerpt, body, and optional cover image.
3. Optionally turn on **Feature on Home** when that post should receive the prominent pinned
   position on the landing page.
4. Preview the unpublished page in desktop and mobile views.
5. Publish. It appears in Blog, Feed, its own URL, sitemap/RSS, and automatically at the top of
   Home's **Latest Writing** list.

Journal, Father, Documentary, Project, Timeline, and Bookshelf entries use similarly named Studio
sections and short, guided forms. Drafts never appear publicly.

### Content models

- `blogPost` — long-form post; add `featureOnHome`, optional feature rank, and SEO fields.
- `journalEntry` — Thought / Read / Observation; add `featureOnHome`.
- `fatherPiece` — Essay / Note, separate from ordinary writing.
- `project` — StudyRise and future approved projects.
- `documentary` — YouTube URL, thumbnail, context, and theme.
- `book` — title, author, cover, status, and personal note.
- `timelineEvent` — year/date, category, title, and description.
- `siteSettings`, `homePage`, `aboutPage`, `fatherPage`, `workPage`, `coursePage`, `contactPage` —
  singletons for editable copy, media, links, and metadata.

The Feed is a query over Blog, Journal, Father, Projects, and Documentaries, ordered by publish
date. Home has one optional prominent item selected with `featureOnHome`, followed by the three
newest published Blog/Journal items, excluding any duplicate of the featured item. If nothing is
featured, Home shows the four newest items. Missing cover images use a designed typographic
fallback.

### Future assistance

The initial Studio provides field guidance, templates, validation, preview, and SEO prompts.
Optional AI-assisted outlining or editing may be added after launch as a reviewed enhancement. It
must create drafts only, preserve Istiaque's voice, and never auto-publish medical or personal
content.

---

## 3. Session continuity protocol

### Start of every session

1. Read `AGENTS.md`, `index.md`, this file, and the last two `log.md` entries.
2. Read the previous session's **Handoff** block.
3. Inspect git status without reverting unrelated work.
4. Use codebase-memory first for code discovery; refresh the index if stale.
5. Change exactly one progress row from `todo` to `in-progress` and add the start date.
6. If a photo or personal paragraph is absent, use its documented placeholder and continue unless
   the session explicitly requires the real material.

### Prompt to start a production session

Use this at the start of each new Codex task:

```text
We are building istiaqueahamed.com from /Users/istiaque/Downloads/Personal Webiste.

Before doing anything, read AGENTS.md, index.md, BUILD-PLAN.md, and the last two log.md entries.
Then read the previous session's Handoff block.

Continue the next pending session in BUILD-PLAN.md. Do not skip ahead. Keep the full 13-page
roadmap intact. The seven top-navigation items are only the navigation layer; they do not replace
the 13 public pages.

Use codebase-memory first for any code discovery. Check the current git status, and do not revert
any unrelated existing changes.

At the beginning of the work, mark exactly one session as in-progress. At the end, update the
session progress row, write the session Handoff block, append log.md, and update index.md plus any
relevant wiki pages.

For UI work, use the established dark cinematic editorial direction, make it mobile-friendly, keep
personal-photo placeholders where my photos are missing, and verify the site locally in desktop and
mobile views before final response.

Now start the next session and complete as much of that session as possible.
```

For a specific session, replace the final line with:

```text
Now start Session XX: [session name], and complete as much of that session as possible.
```

### End of every session

Update before sending the final response:

1. This plan's progress row and the session's Handoff block.
2. `log.md` with a `build` entry describing the visible result and verification.
3. `index.md` and every page/tech brief whose status or truth changed.
4. The codebase-memory index after meaningful structural changes.
5. `IMAGE-MANIFEST.md` when an image moves from placeholder to supplied/live.

Use this exact handoff shape:

```md
**Handoff**
- Status: todo | in-progress | done | blocked
- Completed: YYYY-MM-DD
- Built: visible behaviour and routes
- Files/areas: main ownership areas changed
- Verified: build, tests, browser sizes, accessibility/performance checks
- Assets/content: placeholders, supplied items, Sanity documents
- Decisions: choices made in this session
- Remaining: exact unfinished work, or "none"
- Next entry point: first concrete action for the next session
```

If work stops early, leave the session `in-progress` and record the last successful action, exact
unfinished action, and precise file/page/command from which to resume. Never mark a session done
because time ended.

### Definition of done for every UI session

- Production build passes.
- No console errors or failed requests caused by the new work.
- Keyboard navigation, visible focus, reduced motion, and touch behaviour work.
- Browser review at phone and desktop sizes is complete; no overlap, overflow, or layout shift.
- Empty, loading, error, missing-image, and long-text states are handled where relevant.
- A screenshot or preview URL is recorded in the Handoff.

---

## 4. Progress

Only one row may be `in-progress` at a time.

| Session | Production outcome | Status |
|---|---|---|
| 00 | Strategy, codebase baseline, and complete session plan | `done` (2026-07-15) |
| 01 | Foundations hardening and verification baseline | `done` (2026-07-15) |
| 02 | Visual system v2 and reusable interaction primitives | `done` (2026-07-15) |
| 03 | Global shell, all routes, navigation, and page transitions | `done` (2026-07-15) |
| 04 | Author-friendly Sanity schemas and Studio structure | `done` (2026-07-15) |
| 05 | Live Sanity data, draft preview, visual editing, and images | `todo` |
| 06 | Home v2: Presence, point of view, and Father doorway | `todo` |
| 07 | Home v2: Foundation, StudyRise, live content, life, contact | `todo` |
| 08 | About page | `todo` |
| 09 | Father index and Father detail pages | `todo` |
| 10 | Shared Writing navigation and editorial components | `todo` |
| 11 | Blog index and Blog detail pages | `todo` |
| 12 | Journal index and Journal detail pages | `todo` |
| 13 | Unified Feed and Home feed integration | `todo` |
| 14 | Projects index and StudyRise case study | `todo` |
| 15 | Work page | `todo` |
| 16 | Documentaries page and film presentation | `todo` |
| 17 | Timeline page | `todo` |
| 18 | Bookshelf page | `todo` |
| 19 | Course page | `todo` |
| 20 | Contact page and secure form delivery | `todo` |
| 21 | Search, AI discoverability, metadata, sitemap, and RSS | `todo` |
| 22 | Full mobile, accessibility, motion, and performance pass | `todo` |
| 23 | Photography integration, content seeding, author rehearsal | `todo` |
| 24 | Vercel, Namecheap, analytics, Search Console, and launch | `todo` |
| 25 | Post-launch QA, backup, monitoring, and handover | `todo` |

---

## 5. Inputs needed later

Nothing further is required to begin Sessions 01–04. The plan deliberately delays personal inputs
until the build can show the exact slot or workflow being decided.

| Needed for | Input | Placeholder/continuation rule |
|---|---|---|
| Session 05 | Sanity sign-in and secure preview token | Schema/queries can be built first; live draft preview waits for access |
| Session 06–09 | Personal portraits and Father archive images | Exact-ratio labelled placeholders remain until supplied |
| Session 14 | Three clean StudyRise interface captures | Existing official preview remains temporarily |
| Session 16 | One or two approved films and Istiaque's context | Build with private test data; do not publish invented context |
| Session 18 | Personal notes for starter books | Covers/placeholders can be prepared; notes stay draft |
| Session 20 | Contact recipient and final delivery provider | Form UI can be built; real delivery waits for configuration |
| Session 23 | Final photos and approved launch writing | Only approved content is published; drafts remain private |
| Session 24 | Vercel and Namecheap access | Local and preview work continues until deployment session |

“Writing assistance” currently means a simple Sanity workflow with templates, guidance, preview,
and Home-feature controls. If Istiaque means an AI co-writer inside Studio, treat that as an
optional post-launch session after privacy, cost, and draft-only behaviour are agreed.

---

## 6. Session briefs

## Session 00 — Strategy and baseline

**Completed:**
- Reconciled the research and [[Creative Direction - Full Freedom]] with the complete roadmap.
- Confirmed current code contains Home v1, `/father`, `/studio`, Motion, Lenis, Person metadata,
  Sanity schemas, and query foundations.
- Preserved all thirteen pages and defined a session for each destination.
- Defined Home curation, photo placeholders, Studio authoring, and continuity rules.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: planning only; no public-site code changed
- Files/areas: `BUILD-PLAN.md` and aligned private planning documents
- Verified: codebase-memory architecture and current Home/Sanity structures reviewed
- Assets/content: existing placeholders remain; personal photography pending
- Decisions: thirteen-page roadmap retained; seven top-nav entrances; full Sanity publishing desk
- Remaining: Sessions 01–25
- Next entry point: Session 01, inspect build/dependency/test configuration and create the baseline

## Session 01 — Foundations hardening

**Build:** audit dependencies and compatibility; finish strict TypeScript, linting, environment
validation, error boundaries, and `.env.example`; create one repeatable quality command for type,
lint, and production build; capture Home/Studio baseline screenshots; confirm no private facts are
in the public bundle.

**Done when:** the baseline passes and every later session has one documented verification path.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: upgraded Next.js/React/Sanity foundation; strict type, lint, environment, and error-state
  safeguards; one `npm run quality` verification path
- Files/areas: `site/package*.json`, TypeScript/ESLint/env config, root error boundaries, site README
- Verified: strict TypeScript and ESLint pass; Next.js 16.2.10 production build passes; Home checked at
  1440px and 390px with no console errors or horizontal overflow; Studio baseline captured at both sizes
- Assets/content: screenshots in `site/.preview/session-01-*`; no personal assets changed
- Decisions: current supported Next 16/React 19/Sanity 6 line; Node >=22.12; public Sanity defaults are
  validated and server-only tokens remain optional/private
- Remaining: 14 moderate upstream/transitive npm advisories; Sanity CORS approval for localhost:3001;
  no high or critical audit findings remain
- Next entry point: Session 02, convert the locked visual language into reusable primitives and a visual lab

## Session 02 — Visual system v2

**Build:** finalize colour, type, spacing, section rhythm, image treatment, focus rings, and motion
tokens; create custom Button, IconButton, TextLink, SectionLabel, MediaPlaceholder,
EditorialImage, Reveal, TextReveal, filter, and form primitives; use Base UI only for accessible
behaviour; add a private visual-lab route; define mobile and reduced-motion variants.

**Done when:** primitives work in dark/light/Father registers, survive long text, and render from
360px through wide desktop without adopting a generic component-kit appearance.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: locked visual tokens plus Button, IconButton, TextLink, SectionLabel, MediaPlaceholder,
  EditorialImage, Reveal, TextReveal, FilterButton, and FormField primitives; private `/visual-lab`
- Files/areas: `site/components/ui/`, shared Reveal, visual lab route, global CSS/tokens, Tailwind aliases
- Verified: `npm run quality` stages pass with production build completed using network font access;
  visual lab checked at desktop and 390px with no console warnings or horizontal overflow; 44px
  minimum touch controls and long-text/light/Father/reduced-motion states reviewed
- Assets/content: labelled personal portrait and Father archive placeholders; no invented photographs
- Decisions: native accessible controls where sufficient; custom visual layer; no component-kit styling;
  visual lab is private and `noindex`
- Remaining: none
- Next entry point: Session 03, move the landing page onto the final shared shell and scaffold all routes

## Session 03 — Global shell and all routes

**Build:** final header, desktop navigation, Writing submenu, accessible mobile menu, footer route
directory, contact action, skip link, active state, and social links; scaffold all thirteen pages
and detail routes; implement page transitions, scroll restoration, Lenis tuning, reduced motion,
shared metadata helper, and polished 404.

**Done when:** every page is reachable through intended navigation and renders a responsive,
branded placeholder inside the final shell.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: final shared desktop/mobile navigation, active Writing submenu, focus-contained mobile
  menu, scroll progress, complete footer directory, skip links, page transitions, scroll
  restoration, Lenis tuning, shared metadata, polished 404, all thirteen public route shells, and
  Blog/Journal/Father/Project detail shells
- Files/areas: `site/app/(site)/`, root 404, shared Nav/Footer/transition/scroll components,
  `site/lib/navigation.ts`, `site/lib/metadata.ts`, `site/lib/page-config.ts`, and global shell CSS
- Verified: strict TypeScript, zero-warning ESLint, and production build pass; all thirteen routes,
  four detail routes, and 404 checked at 1440px and 390px; all thirteen checked again at 360px;
  no overflow, failed route, or new browser/server warning; skip navigation, Escape close, focus
  wrapping, 44px menu target, active states, and Writing transition verified
- Assets/content: route shells use labelled personal-photo placeholders; no personal photos or
  unconfirmed facts were invented; screenshots at `site/.preview/session-03-shell-{desktop,mobile}.png`
- Decisions: seven top-navigation entries remain the navigation layer; the footer and route shells
  preserve all thirteen public pages; unfinished page content remains `noindex`
- Remaining: no Session 03 product work; codebase-memory refresh should retry at Session 04 start
  because its local transport disconnected during three refresh attempts
- Next entry point: Session 04, retry the graph refresh, then inventory the existing Sanity models
  before adding singletons and plain-language Studio navigation

## Session 04 — Sanity Studio authoring

**Build:** inventory existing documents; complete and validate all content models listed above;
add `featureOnHome` to Blog and Journal; add page/media singletons; organise Studio into **Website**,
**Writing** (Blog, Journal, Feed view), **Father**, **Projects**, **Films**, **Timeline**, and
**Bookshelf**; add clear descriptions, defaults, previews, icons, and create shortcuts.

**Done when:** Istiaque can create the right draft from plain-language Studio navigation without
understanding schemas or code.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: guided Blog, Journal, Father, Project, Documentary, Book, and Timeline documents;
  Home-feature controls for Blog/Journal; reusable rich-text, image-with-alt/caption, and route-link
  objects; all seven page/settings singletons and their queries; icon-led Studio sections for
  Website, Writing, Father, Projects, Films, Timeline, and Bookshelf; all Blog categories, Journal
  formats, and Father formats as guided create shortcuts; an automated authoring-contract check
- Files/areas: `site/sanity/schemaTypes/`, `site/sanity.config.ts`, `site/sanity/structure.ts`,
  `site/lib/sanity/queries.ts`, `site/scripts/verify-sanity-authoring.ts`, package files,
  `site/.preview/session-04-studio-{desktop,mobile}.png`, and codebase-memory artifact
- Verified: the authenticated Studio desk was exercised with its administrator GitHub identity;
  all seven top-level sections and Website/Writing children render, Home opens as a singleton,
  the create menu exposes every guided shortcut, and a Health & Medicine Blog draft opens with the
  correct default without saving content; the real browser pass found and fixed duplicate Timeline
  and Bookshelf IDs, then a clean 1440px and 390px pass showed no fresh console warning, error, or
  horizontal overflow; `npm run quality`, the 17-type/16-shortcut authoring contract, and Sanity
  schema extraction pass
- Assets/content: no public content seeded; no personal facts, photos, testimonials, dates,
  contact details, or private claims invented; all photo fields remain author-editable
- Decisions: keep existing document type names stable; add metadata to image fields instead of
  replacing public field names; keep the Feed as a Studio preview list and not a separate document
  type; use the project-owner GitHub login for Studio; leave the contact form disabled by default
  until Session 20 delivery is configured
- Remaining: codebase-memory's final refresh transport disconnected; retry it before Session 05
  discovery. Live content fetching, draft mode, visual preview, and image delivery belong to
  Session 05 and were not started here
- Next entry point: Session 05, retry codebase-memory first, then connect the validated schemas to
  typed live queries, draft preview, and the image pipeline

## Session 05 — Live content, preview, and images

**Build:** typed queries for every page/content type; draft mode and Sanity Presentation/Visual
Editing; secure publish revalidation/live updates; Portable Text images; upload alt text/caption;
hotspot/crop previews; responsive URLs and blur placeholders; seed labelled drafts only.

**Done when:** a test item can be drafted, visually previewed, published, updated, and unpublished
without a code change.

**Handoff:** _fill at session end._

## Session 06 — Home v2, scenes 1–3

**Build:** portrait-placeholder hero, name, tagline, public summary, point-of-view scene, and early
Father doorway with archive-image placeholder; art-direct desktop/mobile layouts and motion.

**Done when:** person, conviction, and inheritance are clear before the first credential list.

**Handoff:** _fill at session end._

## Session 07 — Home v2, scenes 4–8

**Build:** foundation/education arc; StudyRise proof; optional featured Blog/Journal item plus the
automatic Latest Writing list; latest Feed preview; life-in-motion photo sequence; contact scene;
elegant empty states before publishing.

**Done when:** Home is complete, Sanity-driven, and communicates “doctor who builds” within 30
seconds on mobile and desktop.

**Handoff:** _fill at session end._

## Session 08 — About

**Build:** story-led opening, concise credentials, Father connection, human side, two-country arc,
site purpose, and closing; Sanity portrait/lifestyle slots; factual natural-language biography and
Person-schema reinforcement; no detailed current titles.

**Done when:** the full person is understandable without the page becoming a CV.

**Handoff:** _fill at session end._

## Session 09 — Father

**Build:** quieter Father index, Sanity opening, Essay/Note lists, `/father/[slug]` reading view,
archive gallery, captions, and empty state that invents nothing; reduce navigation and motion while
preserving accessibility.

**Done when:** the space feels distinct and Istiaque can publish his own words and images without a
developer.

**Handoff:** _fill at session end._

## Session 10 — Shared Writing system

**Build:** complete the Writing navigation group with Feed as its default destination; create the
shared editorial rows/cards, format labels, filters, dates, reading-time treatment, pagination
controls, no-image state, and cross-link patterns used by Feed, Blog, and Journal. Do not add a
fourteenth `/writing` page.

**Done when:** visitors can move among long-form Blog, short Journal, and complete Feed through one
consistent navigation and visual language without learning the CMS structure.

**Handoff:** _fill at session end._

## Session 11 — Blog

**Build:** Blog index with featured post, category filters, pagination/load-more, optional cover
images, and no-results state; `/blog/[slug]` with editorial body renderer, images, quotes, callouts,
related posts, print style, metadata, social image, and Article schema.

**Done when:** publishing a Sanity Blog post creates the index item, detail page, correct category,
Feed entry, and optional Home feature automatically.

**Handoff:** _fill at session end._

## Session 12 — Journal

**Build:** Journal index grouped by month with Thought/Read/Observation filters; minimal
`/journal/[slug]` view; related-book link for Read entries; purposeful short-entry typography and
metadata.

**Done when:** all three Journal formats publish distinctly, appear in Feed, and can optionally be
featured on Home.

**Handoff:** _fill at session end._

## Session 13 — Feed

**Build:** merge Blog, Journal, Father, Projects, and Documentaries by publish date; accessible type
filters; pagination/load-more; stable rows for image/no-image content; RSS generation; wire the Home
preview to the same source of truth.

**Done when:** all supported content interleaves correctly and the Home preview agrees with Feed.

**Handoff:** _fill at session end._

## Session 14 — Projects and StudyRise

**Build:** Projects index that feels complete with one launch project; `/projects/studyrise` case
study covering problem, motivation, system, capabilities, product views, build story, live link,
and GitHub; Sanity media with three screenshot placeholders; omit unapproved concepts.

**Done when:** StudyRise proves the builder positioning to a general visitor without becoming a
technical feature list.

**Handoff:** _fill at session end._

## Session 15 — Work

**Build:** curated education, selected public experience, areas of focus, and future media area;
responsive editorial chronology; optional work-photo placeholder; disabled CV slot until a real
approved document exists; links to About, Projects, and Writing.

**Done when:** Work establishes trust using only approved public facts and does not read like a
dense résumé.

**Handoff:** _fill at session end._

## Session 16 — Documentaries

**Build:** featured film, responsive film grid, YouTube facade/lazy embed, thumbnail fallback,
personal context and themes from Sanity, channel link, video metadata, and Feed integration.

**Done when:** at least one approved film plays without harming mobile performance and newly
published films enter Feed automatically.

**Handoff:** _fill at session end._

## Session 17 — Timeline

**Build:** Sanity-driven life arc with Medicine/Technology/Personal/Australia categories; cinematic
scroll progression with reduced-motion equivalent; deep links to About, Father, Projects, and Work;
only confirmed dates are seeded.

**Done when:** the whole journey is understandable as a narrative on phone and desktop without
animation being necessary to access the information.

**Handoff:** _fill at session end._

## Session 18 — Bookshelf

**Build:** cover-led library, Reading/Read/Want-to-read filters, personal notes, optional links from
Journal Read entries, responsive image treatment, and graceful missing-cover state.

**Done when:** five starter books can be managed in Sanity and each note sounds personal rather
than generated or assumed.

**Handoff:** _fill at session end._

## Session 19 — Course

**Build:** complete visual route with confirmed “coming later” state, purpose, intended audience,
and link back to relevant Writing; no signup or sales claims until explicitly approved; structure
Sanity fields so a future course can replace the minimal state without a redesign.

**Done when:** the page feels intentional while making no promise beyond current reality.

**Handoff:** _fill at session end._

## Session 20 — Contact

**Build:** approved welcome copy, confirmed socials, and no public email; accessible form,
validation, pending/success/error states, anti-spam protection, server validation, rate limiting
where appropriate, and delivery through the selected provider.

**Done when:** a real test message reaches Istiaque and invalid/repeated submissions fail safely.

**Handoff:** _fill at session end._

## Session 21 — Search and discoverability

**Build:** Person, WebSite, Breadcrumb, Article, Video, Book, and Project structured data where
appropriate; unique metadata and social cards; canonical URLs, favicons, manifest, sitemap,
robots, Feed RSS, confirmed `sameAs`/`rel="me"`, and complete internal linking; exclude Studio,
drafts, placeholders, and private facts from indexing.

**Done when:** every page presents a consistent Istiaque Ahamed entity to search and AI systems.

**Handoff:** _fill at session end._

## Session 22 — Mobile, accessibility, motion, performance

**Build:** full thirteen-page route matrix at phone/tablet/desktop sizes; keyboard, focus,
screen-reader labels, contrast, reduced motion, touch targets, zoom, and long-text audits; remove
janky motion; tune images, fonts, bundles, query caching, and videos; run Lighthouse/Core Web
Vitals checks.

**Done when:** key routes target ≥90 Lighthouse mobile scores, no critical accessibility issue
remains, and the animations feel composed on mid-range phones.

**Handoff:** _fill at session end._

## Session 23 — Photography, content, author rehearsal

**Build:** replace supplied placeholders; apply crops/hotspots, alt text, captions, and consistent
grade; seed approved page copy, Father piece, StudyRise story, Blog, Journal, films, timeline, and
books; rehearse draft, image upload, preview, Home feature, publish, edit, unfeature, and unpublish;
write a one-page nontechnical publishing guide.

**Done when:** Istiaque can publish independently and no public page contains accidental
placeholder content above the fold.

**Handoff:** _fill at session end._

## Session 24 — Deployment and launch

**Build:** connect the private GitHub repo to Vercel with `site/` root and environment variables;
verify previews; point Namecheap DNS; verify HTTPS and host redirects; enable Vercel Analytics and
Search Console; submit sitemap; production-smoke-test all thirteen pages, Studio, publishing,
contact, images, social previews, RSS, and 404; record rollback steps.

**Done when:** `https://istiaqueahamed.com` serves the approved complete site and every critical
workflow works in production.

**Handoff:** _fill at session end._

## Session 25 — Post-launch handover

**Build:** re-check production after DNS/cache propagation; document Sanity export/backup and
environment inventory without storing secrets; define monthly checks for links, contact delivery,
Search Console, analytics, dependencies, accuracy, and image performance; close page briefs and
record future enhancements.

**Done when:** the website can be maintained without reconstructing knowledge from chat and the
next improvement has a clear starting point.

**Handoff:** _fill at session end._

---

## 7. Deferred enhancements, not deferred pages

All thirteen pages remain in scope. Only these optional capabilities wait for real demand:

- Newsletter.
- Additional projects not approved for public naming.
- Course registration/payment until the course proposition is approved.
- AI-assisted Studio authoring; any future assistant creates drafts only.
- GSAP or WebGL; add only for a specific approved scene Motion cannot express cleanly.

---

Related: [[Build Roadmap]] · [[Creative Direction - Full Freedom]] · [[Site Architecture]] ·
[[Tech Stack Decision]]
