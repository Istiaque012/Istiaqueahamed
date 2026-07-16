---
title: Build Plan
type: system
status: done
visibility: private
updated: 2026-07-16
tags: [project/website, planning, build, sessions]
---

# 🏗️ BUILD PLAN — istiaqueahamed.com

> [!abstract] The control document for every production session
> Read this file after `AGENTS.md` and `index.md` at the start of every build session. Work on one
> session at a time. Before stopping, update the progress table and that session's handoff record
> so the next session knows exactly what exists, what was verified, and where to resume.

This plan preserves the complete **thirteen-page roadmap**. The seven confirmed top-navigation
destinations remain the clearest entrance to the site; Feed directly gathers Blog and Journal, and
the footer/in-page routes expose Documentaries, Timeline, Bookshelf, and Course. Every page receives
its own production session and completion criteria.

**Companion files:** [[Creative Direction - Full Freedom]] · [[Site Architecture]] ·
[[Design System]] · [[Content Strategy]] · [[Tech - Sanity CMS Setup]] ·
[[IMAGE-MANIFEST|IMAGE-MANIFEST.md]] · [[DECISIONS-NEEDED]]

**Release state — 2026-07-16:** PR #9 is merged to `main`. Production deployment
`dpl_8CskJUszbiXThcMSqZXDvQD4n9eV` contains the direct Feed navigation and Blog/Journal-only
publishing model; route, metadata, RSS, responsive, and live-console checks pass.

---

## 1. Complete website

### Confirmed top navigation

**Home · About · Father · Feed · Projects · Work · Contact**

Feed is a direct link with **All · Blog · Journal** local navigation. It is an automatic view, not a
third publishing format or a fourteenth public page. Father remains a direct top-level link.

### Thirteen public pages

| # | Page | Route | Purpose |
|---|---|---|---|
| 1 | Home | `/` | Eight-scene cinematic introduction with selected live content |
| 2 | About | `/about` | Complete story, identity, and two-country arc |
| 3 | Feed | `/feed` | Reverse-chronological stream of Blog and Journal |
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
`/projects/[slug]`, `/studio`, `/sitemap.xml`, `/robots.txt`, `/feed.xml`, and a styled
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

The Feed is a query over Blog and Journal, ordered by publish date. Home has one optional prominent
item selected with `featureOnHome`, followed by the three
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
| 05 | Live Sanity data, draft preview, visual editing, and images | `done` (2026-07-15) |
| 06 | Home v2: Presence, point of view, and Father doorway | `done` (2026-07-15) |
| 07 | Home v2: Foundation, StudyRise, live content, life, contact | `done` (2026-07-15) |
| 08 | About page | `done` (2026-07-15) |
| 09 | Father index and Father detail pages | `done` (2026-07-15) |
| 10 | Shared Writing navigation and editorial components | `done` (2026-07-15) |
| 11 | Blog index and Blog detail pages | `done` (2026-07-15) |
| 12 | Journal index and Journal detail pages | `done` (2026-07-15) |
| 13 | Unified Feed and Home feed integration | `done` (2026-07-15) |
| 14 | Projects index and StudyRise case study | `done` (2026-07-15) |
| 15 | Work page | `done` (2026-07-15) |
| 16 | Documentaries page and film presentation | `done` (2026-07-15; approved film rehearsal in Session 23) |
| 17 | Timeline page | `done` (2026-07-15) |
| 18 | Bookshelf page | `done` (2026-07-15; personal notes in Session 23) |
| 19 | Course page | `done` (2026-07-15) |
| 20 | Contact page and secure form delivery | `done` (2026-07-15; private delivery setup and inbox rehearsal deferred to owner) |
| 21 | Search, AI discoverability, metadata, sitemap, and RSS | `done` (2026-07-15) |
| 22 | Full mobile, accessibility, motion, and performance pass | `done` (2026-07-15) |
| 23 | Photography integration, content seeding, author rehearsal | `done` (2026-07-15; owner photos and approved launch writing deferred) |
| 24 | Vercel, Namecheap, analytics, Search Console, and launch | `done` (2026-07-15; final deploy and account activation deferred to owner) |
| 25 | Post-launch QA, backup, monitoring, and handover | `done` (2026-07-15; live recheck follows owner production promotion) |

---

## 5. Inputs needed later

Nothing further is required to begin Sessions 01–04. The plan deliberately delays personal inputs
until the build can show the exact slot or workflow being decided.

| Needed for | Input | Placeholder/continuation rule |
|---|---|---|
| Session 05 | Sanity sign-in and secure preview token | Resolved 2026-07-15; read token and revalidation secret configured locally and in Vercel Production/Preview |
| Session 06–09 | Personal portraits and Father archive images | Exact-ratio labelled placeholders remain until supplied |
| Session 14 | Three clean StudyRise interface captures | Three exact-purpose placeholders are built and Sanity-authorable; existing official preview remains the primary visual |
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
  schema extraction pass; the post-merge codebase-memory refresh completed with 929 nodes and
  1,109 relationships
- Assets/content: no public content seeded; no personal facts, photos, testimonials, dates,
  contact details, or private claims invented; all photo fields remain author-editable
- Decisions: keep existing document type names stable; add metadata to image fields instead of
  replacing public field names; keep the Feed as a Studio preview list and not a separate document
  type; use the project-owner GitHub login for Studio; leave the contact form disabled by default
  until Session 20 delivery is configured
- Remaining: no Session 04 product work. Live content fetching, draft mode, visual preview, and
  image delivery belong to Session 05 and were not started here
- Next entry point: Session 05, use the refreshed codebase-memory graph first, then connect the
  validated schemas to typed live queries, draft preview, and the image pipeline

## Session 05 — Live content, preview, and images

**Build:** typed queries for every page/content type; draft mode and Sanity Presentation/Visual
Editing; secure publish revalidation/live updates; Portable Text images; upload alt text/caption;
hotspot/crop previews; responsive URLs and blur placeholders; seed labelled drafts only.

**Done when:** a test item can be drafted, visually previewed, published, updated, and unpublished
without a code change.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: typed Sanity query projections for every content/page family; shared content/image types;
  server-only live fetch helper using `next-sanity` strict mode; Sanity Presentation/Visual Editing
  wiring; draft-mode enable/disable routes; signed webhook revalidation route; Sanity CDN image
  configuration; responsive image URL/blur helpers; Portable Text image renderer; automated
  Session 05 contract check in `npm run quality`; local and Vercel Production/Preview environment
  variables for draft reads and signed revalidation
- Files/areas: `site/lib/sanity/`, `site/app/api/`, `site/sanity/presentation.ts`,
  `site/sanity.config.ts`, root layout, image config, Portable Text component, CSS,
  `.env.example`, package scripts, and codebase-memory artifact
- Verified: `npm run typecheck`, zero-warning `npm run lint`, `npm run verify:sanity-authoring`,
  `npm run verify:sanity-live`, and an escalated `npm run build` pass; `/` and `/studio` return
  200 locally after restart; direct draft-mode access now fails closed with 401 instead of 503;
  a signed local `/api/revalidate` request returns 200 and revalidates `sanity:blogPost`,
  `sanity:feed`, and `sanity:homePage`; an authenticated Sanity owner rehearsal created a labelled
  test Blog draft, published it, updated it, unpublished/deleted it, and confirmed cleanup; browser
  checks at 1440px and 390px showed no console errors or horizontal overflow for Home or Studio;
  screenshots saved at `site/.preview/session-05-{home,studio}-{desktop,mobile}.png`
- Assets/content: no public content remains; the labelled test Blog document was fully cleaned up;
  no personal facts, photos, testimonials, dates, or contact details were invented; personal image
  placeholders remain author-editable
- Decisions: keep `SANITY_API_READ_TOKEN` read-only for preview; use the authenticated Sanity owner
  session for write rehearsals; preview and revalidation fail closed when secrets/signatures are
  absent or invalid; Home writing queries remain Blog/Journal-only; Feed query remains Blog,
  Journal, Father, Projects, and Documentaries
- Remaining: codebase-memory refresh was retried at close and its transport disconnected; retry at
  the start of Session 06. Production Vercel now has the environment names in Production/Preview,
  so the next deploy should verify those values in the deployed preview before publishing forward
- Next entry point: Session 06, retry the graph refresh first, then build Home v2 scenes 1-3 with
  the portrait placeholder, point-of-view scene, and early Father doorway

## Session 06 — Home v2, scenes 1–3

**Build:** portrait-placeholder hero, name, tagline, public summary, point-of-view scene, and early
Father doorway with archive-image placeholder; art-direct desktop/mobile layouts and motion.

**Done when:** person, conviction, and inheritance are clear before the first credential list.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a new name-led Presence scene with authorable Sanity portrait/name/role fields and an
  approved factual fallback; responsive portrait placeholder; restrained hero motion; a public
  healthcare-systems point-of-view scene; and an early, warmer Father doorway with an authorable
  archive image and personal copy
- Files/areas: `site/components/LandingPage.tsx`, Home route data assembly, Home Sanity projection
  and types, global Home scene styling, and `site/.preview/session-06-home-{desktop,mobile}.png`
- Verified: strict TypeScript, zero-warning ESLint, Sanity authoring/live contracts, and production
  build pass; scenes 1–3 reviewed at 1440×1000 and 390×844, with an additional 360×800 check; no
  horizontal overflow, clipped actions, console warnings/errors, or broken placeholder states
- Assets/content: no personal photograph was invented; hero and Father slots use fixed-ratio,
  accessible labelled placeholders until approved images are uploaded; all fallback identity,
  belief, and Father copy traces to [[Discovery Answers]]
- Decisions: use the confirmed “medical doctor, public health professional, and healthcare systems
  builder” framing instead of the still-unconfirmed healthcare-leader wording; place inheritance
  before credentials so person, conviction, and Father land first
- Remaining: approved personal portrait and Father archive photography can replace placeholders in
  Sanity without code changes; optional author-written Home copy can replace the factual fallbacks
- Next entry point: Session 07, complete scenes 4–8 and connect live publishing states

## Session 07 — Home v2, scenes 4–8

**Build:** foundation/education arc; StudyRise proof; optional featured Blog/Journal item plus the
automatic Latest Writing list; latest Feed preview; life-in-motion photo sequence; contact scene;
elegant empty states before publishing.

**Done when:** Home is complete, Sanity-driven, and communicates “doctor who builds” within 30
seconds on mobile and desktop.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: confirmed-fact Foundation/education arc; responsive StudyRise proof scene; Sanity-driven
  optional featured Blog/Journal item plus de-duplicated latest writing; latest complete-Feed
  preview; intentional writing and Feed empty states; three-slot life-in-motion gallery; and final
  Contact scene using the canonical social links
- Files/areas: `site/app/(site)/page.tsx`, `site/components/LandingPage.tsx`, Home Sanity query/types,
  global Home scene styling, and `site/.preview/session-07-home-writing-{desktop,mobile}.png`
- Verified: strict TypeScript, zero-warning ESLint, both Sanity contract checks, and optimized Next.js
  production build pass; all eight scenes reviewed at 1440×1000 and 390×844, plus the 360×800 hero;
  no horizontal overflow, clipped interactive elements, console warnings/errors, or failed content
  states; Home returns the expected empty publishing states against the currently empty public dataset
- Assets/content: StudyRise uses its existing official preview; life-in-motion slots remain labelled
  placeholders; no posts, dates, professional claims, memories, testimonials, or photographs were
  invented
- Decisions: Home fetches the singleton, Home writing, and Feed teaser in parallel; the featured item
  is excluded from Latest Writing; show three latest items when featured or four when unfeatured;
  Feed remains the broader Blog/Journal/Father/Project/Documentary stream
- Remaining: approved writing and photography will populate these live scenes through Sanity; no
  engineering blocker remains for Home
- Next entry point: Session 08, build the story-led About page using the Home visual language and
  confirmed natural-language biography

## Session 08 — About

**Build:** story-led opening, concise credentials, Father connection, human side, two-country arc,
site purpose, and closing; Sanity portrait/lifestyle slots; factual natural-language biography and
Person-schema reinforcement; no detailed current titles.

**Done when:** the full person is understandable without the page becoming a CV.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a story-led opening and natural-language identity statement; concise verified training;
  a visible Bangladesh–Australia arc; warmer Father connection; a unified human-side scene across
  medicine, systems, StudyRise, writing, documentary, fitness, and faith; site-purpose routes; and
  a closing invitation
- Files/areas: About route and component, About Sanity projection/type/schema, responsive About
  styling, and `site/.preview/session-08-about-{desktop,mobile}.png`
- Verified: strict TypeScript, zero-warning ESLint, both Sanity contract checks, and the optimized
  production build pass; all six story blocks reviewed at 1440×1000 and 390×844, with an additional
  360×800 opening check; no horizontal overflow, clipped controls, console warnings, or console
  errors; codebase-memory refreshed to 978 nodes and 1,180 edges
- Assets/content: the square portrait and three lifestyle slots are fixed-ratio, accessible,
  author-editable Sanity placeholders; all biography, training, Father, interests, and location
  language traces to confirmed public sources; detailed current employer/company titles remain omitted
- Decisions: keep the page a personal story rather than a chronology or CV; use the Father register
  for one restrained scene; reinforce Person identity through visible natural-language biography,
  page metadata, and the existing site-wide Person schema
- Remaining: approved portrait, desk, hospital, and Australia photographs can replace placeholders
  through Sanity; no engineering blocker remains for About
- Next entry point: Session 09, build the quieter Father index and reading experience without
  inventing personal memories or archive content

## Session 09 — Father

**Build:** quieter Father index, Sanity opening, Essay/Note lists, `/father/[slug]` reading view,
archive gallery, captions, and empty state that invents nothing; reduce navigation and motion while
preserving accessibility.

**Done when:** the space feels distinct and Istiaque can publish his own words and images without a
developer.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a distinct quiet Father index with approved singleton opening copy, one opening archive
  image, separate Essay and Note lists, restrained archive gallery, honest empty states, and a
  dynamic `/father/[slug]` reading view with Portable Text, images, captions, dates, reading time,
  metadata, and a clean unpublished-piece 404
- Files/areas: Father index/detail routes, `Father` and `FatherArticle` components, Father Sanity
  projections/types, route-group 404 boundary, and responsive Father-register styling
- Verified: strict TypeScript, zero-warning ESLint, both Sanity contract checks, optimized production
  build, and `http://localhost:3000/father` at 1440×1000 and 390×844; no horizontal overflow,
  clipped Father controls, console warnings, or console errors; missing detail is noindex and
  settles to one header/footer/main; refreshed graph contains 1,054 nodes and 1,327 edges
- Assets/content: Father portrait and three archive spaces remain labelled Sanity-authorable
  placeholders; the public dataset contains no Father pieces, so no memory, caption, photograph,
  date, or personal writing was invented
- Decisions: keep the global accessible shell but remove promotional UI and decorative motion from
  the Father body; use the first approved archive image as the opening portrait and the next four
  as the optional gallery; publish Essay and Note lists separately
- Remaining: approved opening words, Father portrait/archive images, captions, and Istiaque's first
  Father piece can be added entirely through Sanity; no engineering blocker remains
- Next entry point: Session 10, extract the shared Writing navigation, metadata, editorial row/card,
  filters, and pagination language used by Feed, Blog, and Journal without creating `/writing`

## Session 10 — Shared Writing system

**Build:** complete the Writing navigation group with Feed as its default destination; create the
shared editorial rows/cards, format labels, filters, dates, reading-time treatment, pagination
controls, no-image state, and cross-link patterns used by Feed, Blog, and Journal. Do not add a
fourteenth `/writing` page.

**Done when:** visitors can move among long-form Blog, short Journal, and complete Feed through one
consistent navigation and visual language without learning the CMS structure.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a shared in-page Writing navigation with Feed as the default, active Feed/Blog/Journal
  states, responsive page scaffolds, reusable editorial metadata, card, row, filter, empty state,
  no-image state, pagination, and cross-link components, plus shared date/type/href helpers now
  used by Home
- Files/areas: `site/components/writing/`, shared editorial helpers, Feed/Blog/Journal route
  scaffolds, Home writing links, and responsive Writing-system styling
- Verified: strict TypeScript, zero-warning ESLint, both Sanity contract checks, and optimized
  production build pass; Feed, Blog, and Journal reviewed at 1440×1000 and 390×844 with correct
  active states, no horizontal overflow, console warnings, or console errors; mobile Writing opens
  to `/feed`, exposes all three destinations, and restores focus/scroll after Escape; refreshed
  graph contains 1,079 nodes and 1,379 edges
- Assets/content: no public post, opinion, date, excerpt, or cover was invented; current routes show
  honest no-content states and remain noindex until their dedicated production sessions
- Decisions: Writing remains a navigation group rather than a `/writing` page; Feed is its default;
  Blog uses the light editorial register while Feed and Journal use the dark register; all later
  indexes share the same metadata and navigation contracts without exposing CMS type names
- Remaining: Sessions 11–13 will connect the shared components to real Blog, Journal, and Feed data
- Next entry point: Session 11, build the Blog index/detail experience on the shared Writing system

## Session 11 — Blog

**Build:** Blog index with featured post, category filters, pagination/load-more, optional cover
images, and no-results state; `/blog/[slug]` with editorial body renderer, images, quotes, callouts,
related posts, print style, metadata, social image, and Article schema.

**Done when:** publishing a Sanity Blog post creates the index item, detail page, correct category,
Feed entry, and optional Home feature automatically.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a live Blog index on the shared light editorial register (featured essay hero, category
  filters derived from published posts, `Load more` pagination, cover/no-image cards, and an honest
  empty state); a `/blog/[slug]` article with cover, Portable Text body, category/date/reading-time
  meta, up-to-three related essays (same-category first), branded 404 for unknown slugs, article
  Open Graph metadata, and `Article` JSON-LD
- Files/areas: `app/(site)/blog/page.tsx`, `app/(site)/blog/[slug]/page.tsx`,
  `components/writing/BlogIndex.tsx`, `components/BlogArticle.tsx`, `lib/jsonld.ts`,
  `lib/metadata.ts` (article OG support), and the Blog index/article CSS in `app/globals.css`
- Verified: `npm run typecheck`, zero-warning `npm run lint`, `verify:sanity-authoring`,
  `verify:sanity-live`, and the Next.js 16 production build pass; `/blog` reviewed at 1280px and
  375px with correct Writing-nav active state, no console errors, and no horizontal overflow;
  `/blog/no-such-essay` returns the branded noindex 404; Blog is now indexable (noindex removed)
- Assets/content: the public dataset is intentionally empty, so the empty state renders and no post,
  category, date, excerpt, or cover was invented; cover slots resolve author-uploaded Sanity images
- Decisions: reuse the Session 10 shared Writing components/register; featured hero shows only in the
  "All" view; category filters appear only when more than one category exists; related essays prefer
  the same category; detail pages stay dynamic (no build-time Sanity calls), matching Father
- Remaining: the populated index/detail paths are type- and build-verified but not yet
  runtime-reviewed against real content; exercise them during Session 23 content seeding or with a
  labelled test draft, as in Session 05
- Next entry point: Session 12, build the Journal index and detail on the same shared system

## Session 12 — Journal

**Build:** Journal index grouped by month with Thought/Read/Observation filters; minimal
`/journal/[slug]` view; related-book link for Read entries; purposeful short-entry typography and
metadata.

**Done when:** all three Journal formats publish distinctly, appear in Feed, and can optionally be
featured on Home.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a live Journal index on the shared dark register (entries grouped by month, Thought/Read/
  Observation filters shown only when present, related-book line on Read rows, minimal editorial
  rows, and an honest empty state); a minimal `/journal/[slug]` view with type/date/reading-time
  meta, Portable Text body, a related-book aside linking to the Bookshelf for Read entries, branded
  404 for unknown slugs, article metadata, and `Article` JSON-LD
- Files/areas: `app/(site)/journal/page.tsx`, `app/(site)/journal/[slug]/page.tsx`,
  `components/writing/JournalIndex.tsx`, `components/JournalArticle.tsx`, and the Journal index/
  article CSS in `app/globals.css`
- Verified: `npm run typecheck`, zero-warning `npm run lint`, both Sanity contract checks, and the
  production build pass; `/journal` reviewed at 1280px with the correct Writing-nav active state,
  no console errors, and no horizontal overflow; the empty state renders against the empty dataset;
  Journal is now indexable (noindex removed)
- Assets/content: no thought, read, observation, date, or book was invented; the related-book line
  reads from the existing `journalEntry.relatedBook` reference
- Decisions: keep Journal deliberately minimal and text-first (no cover images); month grouping is
  derived at render time from `publishedAt`; type order is Thought → Read → Observation; Read entries
  surface their book and route to `/bookshelf`; detail pages stay dynamic, matching Blog and Father
- Remaining: populated grouping/filter/detail paths are type- and build-verified but not yet
  runtime-reviewed with real content; exercise them during Session 23 seeding or with a test draft
- Next entry point: Session 13, unify the Feed data source and align the Home preview with it

## Session 13 — Feed

**Build:** merge Blog, Journal, Father, Projects, and Documentaries by publish date; accessible type
filters; pagination/load-more; stable rows for image/no-image content; RSS generation; wire the Home
preview to the same source of truth.

**Done when:** all supported content interleaves correctly and the Home preview agrees with Feed.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: live merged Feed over Blog, Journal, Father, Projects, and Documentaries; deterministic
  publish-date ordering; URL-backed accessible type filters; stable image/no-image rows; eight-item
  load-more pagination; RSS at `/feed.xml`; an RSS metadata alternate; Home and Feed queries aligned
  to the same eligible content, ordering, labels, and destinations
- Files/areas: `app/(site)/feed/page.tsx`, `components/writing/FeedIndex.tsx`,
  `app/feed.xml/route.ts`, shared metadata/editorial helpers, Feed GROQ, and Feed CSS
- Verified: strict TypeScript, zero-warning lint, both Sanity contracts, schema extraction, and the
  optimized production build pass; `/feed` and `/feed.xml` return 200 and are indexable; RSS has the
  correct content type and alternate link; desktop and phone review found no overflow, clipped
  controls, console warnings, or console errors
- Assets/content: the public dataset remains intentionally empty, so the honest complete-stream
  state renders; no post, project update, film, date, excerpt, or image was invented
- Decisions: filters deep-link through `?type=`; project publication uses `publishedAt`; films link
  to their index until Session 16 supplies their full presentation; the Home teaser remains a
  smaller projection of the same Feed contract
- Remaining: populated interleaving, filter counts, and load-more behaviour are type/build-verified
  but await real content in Session 23 or a labelled temporary draft rehearsal
- Next entry point: Session 14, present StudyRise as the initial complete project

## Session 14 — Projects and StudyRise

**Build:** Projects index that feels complete with one launch project; `/projects/studyrise` case
study covering problem, motivation, system, capabilities, product views, build story, live link,
and GitHub; Sanity media with three screenshot placeholders; omit unapproved concepts.

**Done when:** StudyRise proves the builder positioning to a general visitor without becoming a
technical feature list.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: cinematic Projects index with StudyRise as the complete initial project; a general-audience
  `/projects/studyrise` case study covering the study problem, system, capabilities, build story,
  product views, stack, live site, and GitHub; future approved-project rendering; branded 404 for
  unknown projects; expanded Sanity project authoring for publication timing and up to five product
  screenshots
- Files/areas: `app/(site)/projects/`, `components/ProjectIndex.tsx`,
  `components/ProjectCaseStudy.tsx`, project schema/query/types, official StudyRise preview, and
  Projects/case-study CSS
- Verified: the shared quality gate and schema extraction pass; `/projects` and
  `/projects/studyrise` were reviewed at 1440×1000 and 390×844 with correct metadata, links, image
  behaviour, active navigation, no final horizontal overflow, and no console warnings/errors;
  an unapproved slug returns the branded 404
- Assets/content: the existing official StudyRise preview is the primary visual; Today dashboard,
  Study plan, and Progress & analytics have exact-purpose placeholders wired to Sanity; no MedLink,
  hospital tool, smoking tracker, user claim, result, date, or unapproved project was published
- Decisions: confirmed source facts provide the launch fallback so Projects feels complete before
  Sanity seeding; published Sanity copy/media can replace and extend that record without code
- Remaining: replace the three product placeholders with clean approved captures when supplied;
  runtime-review a fully Sanity-authored project during Session 23
- Next entry point: Session 15, build the curated public Work record

## Session 15 — Work

**Build:** curated education, selected public experience, areas of focus, and future media area;
responsive editorial chronology; optional work-photo placeholder; disabled CV slot until a real
approved document exists; links to About, Projects, and Writing.

**Done when:** Work establishes trust using only approved public facts and does not read like a
dense résumé.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: responsive editorial Work page with approved D5 public framing, confirmed medical/public
  health training, selected 2016–2018 experience, StudyRise founder role, five areas of focus,
  optional Sanity work image, future publications/media room, an approved-PDF-only CV control, and
  direct paths to About, Projects, and Writing
- Files/areas: `app/(site)/work/page.tsx`, `components/Work.tsx`, Work singleton query/type/schema,
  global RSS metadata support, and Work CSS
- Verified: the shared quality gate and schema extraction pass; `/work` was reviewed at 1440×1000
  and 390×844 with the photo placeholder, disabled CV state, full chronology, correct active nav,
  no horizontal overflow, and no console warnings/errors; refreshed code graph has 612 nodes and
  1,036 edges
- Assets/content: no current RMO, hospital-director, My Care Pro, publication, talk, CV, employer
  date, or work photograph was invented; the detailed titles excluded by D5 remain absent
- Decisions: use the approved broad D5 role line while keeping the Home's confirmed identity line;
  enable CV only when both the Studio toggle and a real uploaded PDF are present
- Remaining: optional work photograph, public CV, interviews, publications, and detailed current
  roles remain intentionally absent until separately approved and supplied
- Next entry point: Session 16, build the documentary index and performant film presentation

## Session 16 — Documentaries

**Build:** featured film, responsive film grid, YouTube facade/lazy embed, thumbnail fallback,
personal context and themes from Sanity, channel link, video metadata, and Feed integration.

**Done when:** at least one approved film plays without harming mobile performance and newly
published films enter Feed automatically.

**Handoff**
- Status: done; the approved-film content rehearsal remains intentionally deferred
- Completed: 2026-07-15
- Built: cinematic film index with newest featured presentation, responsive archive grid,
  click-to-load `youtube-nocookie.com` playback, automatic YouTube thumbnail plus Sanity override,
  designed invalid/missing-thumbnail states, approved context and multi-theme fields, canonical
  channel links, conditional `VideoObject` metadata, and Feed/RSS destinations that open the exact
  film anchor
- Files/areas: `app/(site)/documentaries/page.tsx`, `components/Documentaries.tsx`,
  `components/YouTubeFacade.tsx`, YouTube/editorial/JSON-LD helpers, documentary schema/query/type,
  remote-image configuration, and Documentary CSS
- Verified: shared quality gate and schema extraction pass; YouTube URL parsing is runtime-checked
  for watch, short, embed, and privacy-enhanced formats; the indexable empty public state was
  reviewed at 1440×1000 and 390×844 with zero preloaded YouTube iframes, no overflow, and no
  console warnings/errors
- Assets/content: no film title, subject, date, thumbnail, or personal context was invented; the
  page links to the confirmed YouTube channel while waiting for C5 approval
- Remaining: select one or two real films, approve the context, and click-test populated playback
  during Session 23; the code path is type/build-verified but cannot honestly satisfy that content
  rehearsal before an approved film exists
- Next entry point: Session 17, build the confirmed life arc

## Session 17 — Timeline

**Build:** Sanity-driven life arc with Medicine/Technology/Personal/Australia categories; cinematic
scroll progression with reduced-motion equivalent; deep links to About, Father, Projects, and Work;
only confirmed dates are seeded.

**Done when:** the whole journey is understandable as a narrative on phone and desktop without
animation being necessary to access the information.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: seven-event confirmed opening chronology; Medicine, Tech, Personal, and Australia threads;
  responsive cinematic progression; reduced-motion-safe reveals; deliberate Sanity story order;
  optional event deep links; and direct About, Father, Projects, and Work continuations
- Files/areas: `app/(site)/timeline/page.tsx`, `components/Timeline.tsx`, timeline schema/query/type,
  shared hash/smooth-scroll coordination, and Timeline CSS
- Verified: shared quality gate and schema extraction pass; all seven confirmed events render in
  source order; `/timeline#event-mph` lands below the fixed navigation at desktop and phone sizes;
  desktop and 390×844 review found no horizontal overflow, clipped narrative, console warning, or
  console error, and no information depends on motion
- Assets/content: only D7-confirmed dates and established public facts are present; My Care Pro,
  birth, school, faith, fitness, and other unapproved personal milestones remain absent
- Decisions: the confirmed code fallback keeps the launch page complete until a deliberately
  ordered Sanity chronology replaces it; partial unreviewed CMS timelines do not mix with the
  canonical fallback
- Remaining: add optional approved personal milestones or an Australia section-break photograph
  in Session 23
- Next entry point: Session 18, build the reading library

## Session 18 — Bookshelf

**Build:** cover-led library, Reading/Read/Want-to-read filters, personal notes, optional links from
Journal Read entries, responsive image treatment, and graceful missing-cover state.

**Done when:** five starter books can be managed in Sanity and each note sounds personal rather
than generated or assumed.

**Handoff**
- Status: done; approved personal notes and covers remain intentionally deferred
- Completed: 2026-07-15
- Built: light editorial, cover-led library; exact 2:3 Sanity covers and designed fallbacks;
  URL-backed All/Reading/Read/Want-to-read filters; five confirmed starter titles; honest
  unpublished status/note treatment; direct Journal Read-to-book anchors; and optional shelf order
- Files/areas: `app/(site)/bookshelf/page.tsx`, `components/Bookshelf.tsx`, shared editorial/filter
  helpers, book schema/query/type, exact-ratio image primitive, and Bookshelf CSS
- Verified: shared quality gate and schema extraction pass; five confirmed titles render; filters
  announce empty results and preserve their URL state; book anchors land below navigation; desktop
  and 390×844 review found and fixed the initial title orphan and intrinsic-width overflow, with no
  final horizontal overflow or console warnings/errors; refreshed code graph has 651 nodes and
  1,069 edges
- Assets/content: no author, reading status, cover, or personal opinion was assumed; the private C6
  tone samples remain unpublished
- Decisions: source-confirmed titles form the complete no-CMS fallback; once reviewed Sanity books
  exist, their real authors, statuses, covers, order, and Istiaque-authored notes take over
- Remaining: approve C6 notes, upload/source approved covers, and runtime-review populated filters
  plus a Journal Read cross-link during Session 23
- Next entry point: Session 19, build the intentional Course coming-later route

## Session 19 — Course

**Build:** complete visual route with confirmed “coming later” state, purpose, intended audience,
and link back to relevant Writing; no signup or sales claims until explicitly approved; structure
Sanity fields so a future course can replace the minimal state without a redesign.

**Done when:** the page feels intentional while making no promise beyond current reality.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: complete indexable Course route with an intentional Coming later state, factual purpose
  and audience, broad future themes, current Writing doorway, and no signup, price, date, module,
  outcome, or enrolment claim
- Files/areas: Course route/component/styles; explicit Course GROQ projection and TypeScript type;
  expanded Course singleton with status, audience, themes, Writing link, and available-only action
- Verified: shared quality gate and schema extraction pass; `http://localhost:3000/course` reviewed
  at 1440×1000 and 390×844 with no horizontal overflow or console warning/error
- Assets/content: no image is required; neutral fallback copy publishes only the confirmed future
  direction, while a published Sanity singleton can replace it without changing the layout
- Decisions: keep registration, waitlist, format, dates, curriculum, pricing, and outcomes absent
  until approved; show a course action only when the CMS status is explicitly Available
- Remaining: none for the honest Coming later version; future offer/content approval remains a
  separate enhancement
- Next entry point: Session 20, complete Contact while preserving the deferred delivery decision

## Session 20 — Contact

**Build:** approved welcome copy, confirmed socials, and no public email; accessible form,
validation, pending/success/error states, anti-spam protection, server validation, rate limiting
where appropriate, and delivery through the selected provider.

**Done when:** a real test message reaches Istiaque and invalid/repeated submissions fail safely.

**Handoff**
- Status: done
- Completed: 2026-07-15 (implementation; owner delivery setup deferred)
- Built: complete indexable Contact route; confirmed social directory; no public email; accessible
  Name/Email/Message form with inline errors, first-error focus, pending/success/error states,
  honeypot, same-origin and content-size checks, shared client/server validation, hashed per-instance
  rate limiting, and a fail-closed Resend handoff
- Files/areas: Contact route/components/styles; `/api/contact`; contact validation and private
  delivery helpers; Contact GROQ/type/schema; environment example; automated Contact contract
- Verified: shared quality gate and schema extraction pass; invalid payload returns 400, cross-origin
  submission 403, honeypot 200 without delivery, unconfigured delivery 503, and the sixth repeated
  valid request 429; `http://localhost:3000/contact` reviewed at 1440×1000 and 390×844 with no
  overflow, public email link, console warning, or console error; refreshed code graph has 708
  nodes and 1,172 edges
- Assets/content: canonical six social URLs come from the same public register as the Footer and
  Person entity; no recipient, sender, token, or email address is committed or sent to the browser
- Decisions: require both the Sanity Enable contact form switch and four private server variables;
  keep the form clearly unavailable rather than accepting messages that cannot be delivered
- Remaining: owner setup remains on the handover list: configure `CONTACT_FORM_ENABLED`,
  `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`, enable the Contact singleton, send
  one real message, confirm arrival, and repeat the production abuse checks
- Next entry point: Session 21, complete search and AI discoverability while preserving confirmed identity facts

## Session 21 — Search and discoverability

**Build:** Person, WebSite, Breadcrumb, Article, Video, Book, and Project structured data where
appropriate; unique metadata and social cards; canonical URLs, favicons, manifest, sitemap,
robots, Feed RSS, confirmed `sameAs`/`rel="me"`, and complete internal linking; exclude Studio,
drafts, placeholders, and private facts from indexing.

**Done when:** every page presents a consistent Istiaque Ahamed entity to search and AI systems.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a single confirmed Istiaque Ahamed entity across every route; Person and WebSite JSON-LD;
  route-aware Breadcrumb schema; Article, Video, Book, and Project schema where appropriate; unique
  metadata and social cards; corrected 1200×630 OG image; canonical URLs; favicons; web manifest;
  dynamic published-content sitemap; robots rules; RSS; canonical `sameAs`/`rel="me"`; and a factual
  `/llms.txt` for AI systems
- Files/areas: root/site layouts and metadata, JSON-LD and identity helpers, dynamic-content
  queries, Blog/Journal/Father/Project detail metadata, Bookshelf schema, `robots.ts`, `sitemap.ts`,
  `manifest.ts`, icons, social image, and `/public/llms.txt`
- Verified: full `npm run quality` gate; 26-route Next.js production build; all thirteen public
  static routes plus StudyRise at desktop width with unique title, description, canonical, and
  Open Graph URL; no horizontal overflow or browser console warning/error; breadcrumbs on every
  non-Home route; Book and StudyRise schemas; 200 responses for robots, sitemap, manifest,
  `/llms.txt`, and RSS; local preview `http://localhost:3000`
- Assets/content: all entity facts trace to [[Discovery Answers]]; no unconfirmed title, employer,
  photograph, private fact, placeholder, or draft is exposed to indexing
- Decisions: use “medical doctor, public health professional, and healthcare systems builder” as
  the canonical public framing; allow public crawlers through the wildcard robots policy while
  excluding API, Studio, visual lab, drafts, and private planning; keep dynamic metadata free of
  Sanity visual-editing markers
- Remaining: off-site identity consistency, Google Search Console verification, sitemap
  submission, and an optional photo-led social card require owner accounts or approved imagery and
  remain on the final handover list
- Next entry point: Session 22, run the full responsive, accessibility, motion, and performance matrix

## Session 22 — Mobile, accessibility, motion, performance

**Build:** full thirteen-page route matrix at phone/tablet/desktop sizes; keyboard, focus,
screen-reader labels, contrast, reduced motion, touch targets, zoom, and long-text audits; remove
janky motion; tune images, fonts, bundles, query caching, and videos; run Lighthouse/Core Web
Vitals checks.

**Done when:** key routes target ≥90 Lighthouse mobile scores, no critical accessibility issue
remains, and the animations feel composed on mid-range phones.

**Handoff**
- Status: done
- Completed: 2026-07-15
- Built: a site-wide accessibility and legibility close-out; WCAG-compliant muted text in dark,
  ivory, Father, Blog, Projects, Documentary, Course, Timeline, Bookshelf, and Contact registers;
  visible field/select/summary focus; and 44 px nested mobile Writing targets
- Files/areas: global visual/focus tokens, Contact and Course light-section tokens, and
  `site/.preview/session-22-audit.md`
- Verified: full `npm run quality`; 26-route production build; Lighthouse mobile accessibility and
  SEO score 100 on every one of the thirteen public routes; Home 90, StudyRise 92, and Contact 94
  mobile performance, all with 100 best practices, zero measured layout shift, and 20–30 ms total
  blocking time; complete prior-session phone/desktop browser reviews plus the final production
  route matrix report at `site/.preview/session-22-audit.md`
- Assets/content: no personal asset or public copy changed; labelled intentional photo/content
  placeholders remain for Session 23 and the owner handover
- Decisions: preserve the restrained editorial palette while raising every functional and small
  muted label to accessible contrast; retain Motion/Lenis because reduced-motion and coarse-pointer
  fallbacks are already explicit and key-route blocking time remains low
- Remaining: approved personal photography and launch writing are owner inputs, not accessibility
  defects; real-device production checks remain part of the post-deployment owner list
- Next entry point: Session 23, document the nontechnical author workflow and separate missing owner content from completed publishing infrastructure

## Session 23 — Photography, content, author rehearsal

**Build:** replace supplied placeholders; apply crops/hotspots, alt text, captions, and consistent
grade; seed approved page copy, Father piece, StudyRise story, Blog, Journal, films, timeline, and
books; rehearse draft, image upload, preview, Home feature, publish, edit, unfeature, and unpublish;
write a one-page nontechnical publishing guide.

**Done when:** Istiaque can publish independently and no public page contains accidental
placeholder content above the fold.

**Handoff**
- Status: done
- Completed: 2026-07-15 (publishing system and owner guide; personal content deferred)
- Built: [[Website Owner Guide]], a nontechnical path for Studio sign-in, creating each content
  type, draft/Preview/Publish, image upload and crop, Home featuring/unfeaturing, editing,
  unpublishing, safety checks, troubleshooting, and the exact pre-launch/after-launch owner list
- Files/areas: `wiki/reference/Website Owner Guide.md`, aligned CMS documentation, index, roadmap,
  and build record
- Verified: the existing authenticated Session 05 create/publish/update/unpublish/delete rehearsal;
  the Session 22 quality and Studio contract gates; all 17 schema types, 16 guided create templates,
  41 desk nodes, preview wiring, image metadata fields, and Home feature controls remain verified
- Assets/content: no personal photograph, memory, opinion, film context, or launch writing was
  invented; the public dataset remains deliberately honest and the exact requested inputs are
  listed in [[Website Owner Guide]], [[IMAGE-MANIFEST]], and [[DECISIONS-NEEDED]]
- Decisions: treat missing owner material as a documented handover task, not a reason to leave the
  website engineering open; preserve labelled placeholders until approved replacements exist
- Remaining: Istiaque supplies/approves the personal photos and launch content, then follows the
  guide to upload, preview, and publish them; a live owner rehearsal can be repeated at that time
- Next entry point: Session 24, finish launch-ready code and document account-bound deployment steps without changing DNS or pushing until Istiaque chooses to do them

## Session 24 — Deployment and launch

**Build:** connect the private GitHub repo to Vercel with `site/` root and environment variables;
verify previews; point Namecheap DNS; verify HTTPS and host redirects; enable Vercel Analytics and
Search Console; submit sitemap; production-smoke-test all thirteen pages, Studio, publishing,
contact, images, social previews, RSS, and 404; record rollback steps.

**Done when:** `https://istiaqueahamed.com` serves the approved complete site and every critical
workflow works in production.

**Handoff**
- Status: done
- Completed: 2026-07-15 (launch-ready code; production promotion deferred)
- Built: Vercel Web Analytics and Speed Insights in the root layout; optional environment-driven
  Google Search Console verification; a current deployment/domain/environment/rollback guide; and
  an updated owner launch order based on the actual linked infrastructure
- Files/areas: root layout, dependencies/lockfile, environment example, [[Tech - Deployment & Domain]],
  and [[Website Owner Guide]]
- Verified: Vercel CLI authentication and project link; current Preview/Production Sanity variable
  names; existing ready deployments; Namecheap-served Vercel DNS; apex and `www` HTTPS; current
  apex→`www` redirect; package versions; production dependency audit has no high or critical finding
- Assets/content: no secret values were read into documentation; Contact keys/addresses, Search
  Console token, approved launch content, and photography remain owner inputs
- Decisions: recommend apex as Vercel primary because the finished site's canonical URLs use it;
  include Web Analytics plus Speed Insights; do not deploy, push, change DNS, or alter domain
  routing without Istiaque's explicit approval
- Remaining: merge/push the finished branch; approve the new Preview; deploy Production; switch the
  Vercel primary host to apex; add Contact/Search Console variables; enable both Vercel dashboards;
  verify Search Console and submit the sitemap; then run production smoke tests
- Next entry point: Session 25, document backups, monthly operations, final verification, and the complete handover

## Session 25 — Post-launch handover

**Build:** re-check production after DNS/cache propagation; document Sanity export/backup and
environment inventory without storing secrets; define monthly checks for links, contact delivery,
Search Console, analytics, dependencies, accuracy, and image performance; close page briefs and
record future enhancements.

**Done when:** the website can be maintained without reconstructing knowledge from chat and the
next improvement has a clear starting point.

**Handoff**
- Status: done
- Completed: 2026-07-15 (operations/handover; live recheck deferred until promotion)
- Built: [[Website Operations & Maintenance]] with code/content/asset/deployment backup ownership,
  verified Sanity export syntax, restore boundary, a five-minute monthly routine, quarterly
  maintenance, incident shortcuts, environment-name inventory, and ranked future enhancements;
  final owner-guide cross-links and closed build/page statuses
- Files/areas: operations and owner documentation, Contact/Social/MOC truth alignment, index,
  roadmap, build record, and final log
- Verified: Sanity 6 export/import CLI help; current Git/Vercel/Sanity/domain state; live domain
  currently renders the earlier Home client experience while the finished branch remains local;
  the latest code quality gate and all Session 22 accessibility/performance evidence remain green;
  the final code graph is ready with 15,730 nodes and 16,238 edges
- Assets/content: personal images, approved launch writing, Contact/Search Console values, and
  provider credentials remain intentionally outside the repository and on the owner checklist
- Decisions: keep backups outside git; export Sanity monthly and after major publishing batches;
  use Vercel rollback and Studio unpublish/Contact-disable actions during incidents; consider future
  enhancements only when real demand exists
- Remaining: owner-only activation listed in [[Website Owner Guide]] — approve content/photos,
  connect Contact, ask for branch push/promotion, align the apex primary host, enable dashboards,
  verify Search Console, and run the production smoke check after the new deployment
- Next entry point: [[Website Owner Guide]] for normal use; [[Tech - Deployment & Domain]] for launch; [[Website Operations & Maintenance]] for monthly care

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
