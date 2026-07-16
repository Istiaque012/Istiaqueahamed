---
title: Log
type: system
updated: 2026-06-28
---

# 🪵 Log

Append-only, chronological. Newest at the bottom. Every entry starts with a parseable prefix so
`grep '^## \[' log.md | tail -5` returns the last five events.

---

## [2026-06-28] build | Instantiated the LLM Wiki system
Reorganized the existing planning vault into Karpathy's LLM Wiki pattern.
- Added the schema `CLAUDE.md`, this `log.md`, `index.md`, `README.md`, `.gitignore`.
- Moved 24 planning notes into `wiki/{strategy,site,pages,tech,reference}` and the founding
  source-of-truth into `raw/Discovery Answers.md`. `wiki/00 - START HERE.md` remains the human MOC.
- Defined the `visibility: public|private|mixed` convention so publish-ready, AI-indexable site
  copy is cleanly separable from private strategy. Catalogued every page in `index.md`.
- Removed an unused empty Obsidian vault (`Personal Web/`) and macOS cruft.
- Initialized git; repo destined for the **private** GitHub repo `Istiaque012/Istiaqueahamed`.

## [2026-06-28] lint | Open items carried forward
Unconfirmed (⚠️) items still needing Istiaque's input before they can go `public`:
final tagline; professional headshot/photo set; public-facing wording for roles/titles; three words
a close friend would use; YouTube embed vs link-out; GitHub/app-store links for Projects.

## [2026-06-28] ingest | Portfolite reference → Home section map
Istiaque shared the Portfolite Framer template as a layout reference. Mapped its single-scroll
structure onto our pages and filed it as a "Home page section map" in [[Site Architecture]] —
adopting structure + motion only, reframed into the dark cinematic register and stripped of the
freelancer-funnel sections (book-a-call, pricing, testimonials). Added the Father "different room"
exception. Produced two visual mockups: three design directions, and a dark Home hero in the
Portfolite layout (Direction 01 — Fraunces + warm gold). Design direction still to be locked.

## [2026-06-28] build | Locked Design System core: monochrome + Fraunces/Inter
Worked through the visual direction with Istiaque interactively.
- Reviewed 3 directions (Amber Editorial / Clay Architectural / Cool Electric), then auditioned
  4 professional accents (monochrome / slate blue / deep teal / steel blue).
- **Decision: monochrome** — no chromatic accent. Off-white `#F5F5F5` on near-black `#0A0A0A`;
  contrast, scale, whitespace, and photography carry emphasis. Gold/blues rejected as
  decorative/corporate.
- **Type locked: Fraunces** (display serif + italic) + **Inter** (body/UI).
- Added a `Design tokens (locked)` block (colour, type, radius) to `[[Design System]]`;
  resolved the long-standing accent ⚠️ item. Status → in-progress.
- Confirmed `[[Site Architecture]]` Portfolite-inspired Home section map (adopt structure/motion,
  drop the freelancer funnel; Father page keeps its "different room" register).
- Mocked the Home page (dark, Portfolite bones) for review.

## [2026-06-28] build | Scaffolded the Next.js site (Home page)
Created `site/` — the public website, separate from this private planning vault.
- Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion + Lenis, per
  [[Tech Stack Decision]]. Tokens from [[Design System]] mirrored in `tailwind.config.ts` +
  `app/globals.css` (monochrome, Fraunces + Inter).
- Built the Home page from the [[Site Architecture]] Portfolite section map: Nav, Hero,
  Institutions strip, About (skill tags + timeline), Projects, FAQ, Footer — all monochrome,
  with scroll-entrance reveals and reduced-motion support.
- Added `Person` JSON-LD (`lib/person.ts`) for the Google/AI-search entity story; content in
  `lib/content.ts` to keep in lockstep with `raw/Discovery Answers.md`.
- Verified: `tsc --noEmit` passes clean. `next build` compiles; in-sandbox it stops only at the
  Google-Fonts fetch (no network), which succeeds on a normal machine / Vercel.
- README with run + deploy steps. Pre-launch TODO: headshot, final nav/socials, remaining pages, Sanity.

## [2026-07-03] build | Build plan, decisions register, image manifest
Planning session (no code built, per Istiaque's instruction). Read the full wiki as spec.
- **[[BUILD-PLAN]]** — the [[Build Roadmap]] phases broken into 16 session-sized chunks (0–15),
  each with build scope + done-criteria, and a Progress table (todo/in-progress/done) at the top
  as the resume point for every future session. Documents the existing `site/` Home scaffold as
  the starting point (audit, don't rewrite).
- **[[DECISIONS-NEEDED]]** — one register of everything needed from Istiaque: D1–D10 decisions
  (Sanity account, deploy/DNS access, nav, ⚠️ tagline, ⚠️ role wording, ⚠️ project links,
  ⚠️ timeline dates, form/analytics choices, ⚠️ three words) and C1–C7 content (About narrative,
  first father piece, seed blog/journal, StudyRise story, bookshelf notes, contact/course lines).
  Rule affirmed: unanswered ⚠️ ships as neutral placeholder, never as fact. Blockers for the
  first chunks: **D1 (Sanity) and D2 (GitHub/Vercel/DNS)** only.
- **[[IMAGE-MANIFEST]]** — 15 image slots across the site with aspect ratios, alt text, and
  placeholder plan so the build never waits on photography; includes shooting notes.
- Updated `index.md` with the three root build-system files.

## [2026-07-03] build | Chunk 1 — Sanity embedded in site/ (schemas + Studio + GROQ)
First real build session after planning. Istiaque pasted setup commands that would have scaffolded
a fresh `istiaqueahamed/{studio,web}` monorepo — flagged that this conflicts with [[BUILD-PLAN]]
(keep `site/`, don't rewrite). He chose **keep `site/`, embed Sanity**. Executed Chunk 1 against
the existing `site/` app.
- **D1 resolved:** Sanity project `gtq6sx9w` / dataset `production` now exists (project ID in the
  pasted command). Recorded in [[DECISIONS-NEEDED]].
- Pinned **Sanity v3** line (`sanity@^3`, `next-sanity@^9`) — Sanity 6 requires React 19; site is
  React 18 / Next 14.2.5 and the plan says no framework rewrite.
- Built all schemas from [[Tech - Sanity CMS Setup]]: 7 documents (`blogPost`, `journalEntry`,
  `fatherPiece`, `project`, `documentary`, `book`, `timelineEvent`) + 3 singletons (`siteSettings`,
  `aboutPage`, `coursePage`) under `site/sanity/schemaTypes/`. Singletons pinned via custom desk
  structure; hidden from create menu + duplicate/delete actions.
- Embedded Studio at **`/studio`** (`app/studio/[[...tool]]/page.tsx` + `sanity.config.ts` /
  `sanity.cli.ts`). GROQ client in `lib/sanity/` (`client`, `image`, `queries`) including the
  **merged feed query** (blog+journal+father+project+documentary, `coalesce(publishedAt,_createdAt)`
  sort, `_type`-aware tag/readingTime) + a Home teaser slice. Reading time derived at query time.
- `.env.example` added (public projectId/dataset + optional server read token).
- **Verified:** `npm run build` passes; routes `/` and `/studio/[[...tool]]` render.
- Not done here (needs Istiaque, interactive auth): `sanity login` + seeding one draft per type,
  and confirming `/studio` loads live in the browser. Chunk 2 (Vercel/DNS) still blocked on D2.

## [2026-07-14] query | Production start analysis
Read the build-system files, core strategy/design/page briefs, source-of-truth discovery answers,
and the current `site/` implementation to determine the best production starting point.
- Confirmed the repo already contains a working Next.js/Sanity scaffold: Home page, embedded
  Studio route, schemas, GROQ queries, design tokens, and Person JSON-LD.
- Verified `npm run build` passes in `site/`.
- Recommended starting production with a focused landing-page + global-shell milestone before
  expanding into the full 13-page architecture.

## [2026-07-14] query | Production decisions captured
Recorded Istiaque's first production decisions in [[DECISIONS-NEEDED]].
- D2 resolved: deploy from existing private repo `Istiaque012/Istiaqueahamed`, Vercel root `site/`;
  DNS is managed at Namecheap.
- D4 resolved: final tagline is "Medicine, technology, and the life in between."
- D8 partially resolved: use a contact form and do not show the email address publicly; Resend
  remains the recommended mechanism.
- Still open: final navigation shape, public role wording, photos, and whether to keep evolving the
  current scaffold or redesign the landing page from a stronger creative direction.

## [2026-07-14] query | Navigation, identity, timeline, and sample copy
Filed Istiaque's second set of production answers and created [[Sample Content Drafts]].
- D3 resolved: Home · About · Father · Writing · Projects · Work · Contact. "Father" is top-level;
  Writing contains Feed, Blog, and Journal.
- D5 public summary resolved: "Doctor, healthcare leader, and founder working across Bangladesh
  and Australia." Detailed role titles still need a final accuracy check.
- D6 resolved for launch: publish StudyRise and the GitHub profile; omit unconfirmed project
  concepts. D7 dates recorded; My Care Pro remains ⚠️ until 2023 versus 2024 is confirmed.
- D8 deferred, D9 resolved with Vercel Analytics + Search Console, and D10 deferred.
- Drafted private, editable copy for the landing page, About, Father prompt, blog/journal starters,
  StudyRise, documentary template, Bookshelf, Contact, and the future course placeholder.

## [2026-07-14] query | My Care Pro date and public role boundary
Resolved the final D5 and D7 accuracy questions.
- My Care Pro was founded in 2023; the date is retained as an internal fact for now.
- The public site will not list the current RMO title, upcoming-hospital director title, or
  Founder & Managing Director title at My Care Pro.
- The public framing remains: "Doctor, healthcare leader, and founder working across Bangladesh
  and Australia." Work, About, Timeline, architecture, and the Index were aligned to that boundary.

## [2026-07-14] query | Build readiness confirmed
Audited the remaining decisions, content drafts, build roadmap, and image manifest.
- No unresolved decision blocks the local landing-page build.
- The immediate milestone is foundations audit, global shell, and redesigned Home with image
  placeholders; real photos are a launch input rather than a build blocker.
- Sanity sign-in, Vercel/Namecheap access, and the contact-form provider are needed only at their
  later integration/deployment stages.
- Removed My Care Pro imagery and outdated pending-decision language from the roadmap.

## [2026-07-14] build | Landing page production v1
Built the first production landing-page direction in the existing `site/` foundation.
- Replaced the generic Home scaffold with a name-led full-bleed cinematic hero, light editorial
  About band, Medicine/Systems/Technology strands, public milestone timeline, real StudyRise OG
  visual, Writing preview, quiet Father section, social Contact section, and responsive footer.
- Implemented the confirmed top navigation and mobile menu; added `/father` as a distinct quiet
  doorway. Removed the public email link and kept detailed current professional titles out.
- Added confirmed social profiles to Person schema and refreshed title, description, Open Graph,
  and X metadata. Generated a monochrome architectural hero placeholder and bespoke social card.
- `npm run build` passes. Local browser QA at 1440×1000 and 390×844 found no overflow, console
  errors, or text collisions; mobile menu and Father navigation work.
- Kept local server running at `http://localhost:3000` for Istiaque's review.

## [2026-07-15] query | Blog mentions in planning documents
Checked the wiki catalog and planning documents for blog references.
- Blog is present as a planned public page: [[Page - Blog]].
- Writing is the confirmed nav hub for Feed, Blog, and Journal; the first landing page currently
  surfaces this as a Writing preview rather than a full Blog section.

## [2026-07-15] query | Full-freedom creative direction
Re-read the source-of-truth discovery answers, strategy, design system, architecture, page briefs,
sample copy, build roadmap, and current landing-page preview to form an independent recommendation.
- Proposed a seven-page launch rather than exposing all thirteen planned destinations immediately.
- Consolidated Feed, Blog, Journal, and Documentaries into one reader-facing Writing stream while
  retaining the underlying CMS content types.
- Reframed Home as an eight-scene editorial profile: presence, point of view, inheritance,
  foundation, proof of building, current thinking, life in motion, and contact.
- Kept Father as a top-level destination and moved its Home moment earlier in the narrative.
- Recommended evolving the current landing page rather than discarding its working foundation.
- Filed the full proposal as [[Creative Direction - Full Freedom]].

## [2026-07-15] query | UI and interaction library research
Reviewed the current official documentation for Motion, Lenis, Base UI, Radix Primitives,
Motion Primitives, shadcn/ui, and GSAP ScrollTrigger against the proposed editorial direction.
- Recommended custom public-facing components with Base UI for accessible behaviour, Motion for
  animation, and Lenis for restrained smooth scrolling.
- Motion Primitives is a selective pattern source; shadcn/ui is useful for open component code but
  should not define the public visual identity.
- GSAP remains an optional specialist tool only if one complex scroll sequence genuinely requires
  it. Added the recommendation to [[Creative Direction - Full Freedom]].

## [2026-07-15] query | Complete thirteen-page session plan
Created a full production plan with a mandatory start/end protocol and per-session Handoff blocks.
- Istiaque corrected an initial seven-page-only interpretation: all thirteen planned pages remain
  in scope; the seven-item navigation organises them rather than replacing them.
- [[BUILD-PLAN]] now contains Sessions 00–25, with dedicated sessions for Home, About, Father,
  Writing hub, Blog, Journal, Feed, Projects, Work, Documentaries, Timeline, Bookshelf, Course,
  Contact, quality passes, content, deployment, and handover.
- Sanity keeps distinct Blog, Journal, Father, Documentary, Project, Book, and Timeline types;
  Blog and Journal receive `featureOnHome` controls and visual draft preview.
- Aligned [[Build Roadmap]], [[Creative Direction - Full Freedom]], [[Tech - Sanity CMS Setup]],
  and the Index with the complete scope.

## [2026-07-15] query | Thirteen-page count and Writing clarified
Final consistency clarification for the production plan.
- Writing is the top-navigation group for Feed, Blog, and Journal and defaults to Feed; it is not
  a fourteenth public page.
- All thirteen public pages have dedicated build sessions and none are deferred out of scope.
- Added a milestone-based input table so missing photos, writing, contact configuration, or
  deployment access never silently block an earlier session.

## [2026-07-15] query | New Blog posts on Home clarified
Confirmed and strengthened the Home publishing rule.
- Every newly published Blog post or Journal entry automatically appears in Home's Latest Writing
  while it remains among the newest items.
- **Feature on Home** is an optional prominent pin, not a requirement for Home visibility.
- Home shows one optional featured item plus three latest items, or four latest items when nothing
  is featured; duplicates are excluded.

## [2026-07-15] query | Codex production-session prompt
Added a reusable prompt to [[BUILD-PLAN]] for starting each future production session.
- The prompt tells Codex to read the operating files, continue the next pending session, preserve
  the full thirteen-page roadmap, use codebase-memory first for code discovery, and update the
  Handoff/log/index/wiki files before stopping.
- It also reminds Codex to keep placeholders for missing personal photos and verify UI work locally
  in desktop and mobile views.

## [2026-07-15] build | Session 01 foundations hardened
Completed the repeatable production baseline for istiaqueahamed.com.
- Upgraded to Next.js 16.2.10, React 19.2.7, Sanity 6.5.0, and next-sanity 13.1.2; the current
  production audit has zero high or critical findings.
- Added strict TypeScript checks, zero-warning ESLint, validated environment handling, tracked
  `.env.example`, route/global error boundaries, and the single `npm run quality` command.
- Production build passed; Home and Studio baselines were captured at desktop and mobile sizes.
  Home showed no console errors or horizontal overflow; localhost:3001 Studio awaits CORS approval.

## [2026-07-15] build | Session 02 visual system v2
Converted the locked cinematic editorial direction into reusable interface code.
- Added shared action, link, label, image/placeholder, reveal, filter, and form primitives, with
  44–48px touch targets, visible focus, and reduced-motion behaviour.
- Added a private noindex `/visual-lab` covering dark, light, and Father registers, long copy,
  personal-photo placeholders, and form states.
- Typecheck, zero-warning ESLint, production build, desktop review, and 390px review passed with no
  new console warnings or horizontal overflow.

## [2026-07-15] build | Session 03 paused checkpoint
Paused the global-shell session at Istiaque's request and recorded a continuation-safe checkpoint.
- Implemented the shared header, accessible mobile menu, Writing submenu, route directory footer,
  transitions, scroll behaviour, metadata helper, branded 404, all thirteen public route shells,
  and Blog/Journal/Father/Project detail shells.
- Preserved the seven-item top navigation as an organising layer while retaining all thirteen
  public pages; unfinished page shells remain `noindex` and use labelled photo placeholders.
- Strict TypeScript, zero-warning ESLint, and the production build pass. Full route, keyboard,
  mobile, and screenshot verification are deliberately left for the resumption of Session 03.

## [2026-07-15] build | Session 03 global shell completed
Completed and verified the final navigation layer and route foundation for all thirteen pages.
- Added visible mobile active states, focus containment, Escape restoration, desktop Writing-menu
  closure after navigation, the 404 skip link, and responsive long-title treatment.
- Verified all thirteen public routes, four detail routes, and 404 at desktop and mobile widths;
  repeated the public matrix at 360px with no overflow and confirmed 44px menu controls.
- Strict TypeScript, zero-warning ESLint, and the production build pass. Saved final desktop and
  mobile shell screenshots in `site/.preview/session-03-shell-*`.
- The required codebase-memory refresh was attempted three times but its local transport was
  disconnected; Session 04 should retry before schema discovery.

## [2026-07-15] build | Session 04 Sanity authoring advanced
Materially advanced the Sanity authoring session and left it in progress for authenticated Studio
verification.
- Refreshed codebase-memory successfully, then added guided rich-text/image/link object schemas,
  completed Home/Father/Work/Contact singletons, added Home-feature and SEO fields to writing
  schemas, and reorganised Studio into Website, Writing, Father, Projects, Films, Timeline, and
  Bookshelf.
- Added author-friendly create shortcuts for Blog, Journal, and Father drafts while preserving
  existing document type names and avoiding seeded/invented public content.
- `npm run typecheck`, zero-warning `npm run lint`, `npm run build`, and Sanity schema extraction
  pass. Browser checks confirm `/studio` reaches the Sanity login screen at desktop and mobile
  sizes with no console errors or horizontal overflow.
- Completion is blocked by Sanity authentication: the available browser session is not signed in,
  so the custom desk labels, singleton editors, and create shortcuts still need a signed-in pass.

## [2026-07-15] build | Session 04 auth verification retried
Retried the remaining Session 04 Studio verification without starting Session 05.
- Refreshed codebase-memory successfully and preserved the existing Session 04 code changes.
- `/studio` still stops at "Choose login provider" in both the in-app browser and Chrome; desktop
  1440px and mobile 390px checks show no console errors or horizontal overflow before auth.
- `npm run typecheck` and zero-warning `npm run lint` passed. The sandboxed quality build failed
  only because Google Fonts could not be fetched; rerunning `npm run build` with network access
  passed.
- Session 04 remains in progress until Istiaque signs in to Sanity and the actual custom Studio
  desk labels, singleton editors, create shortcuts, and draft creation can be checked.

## [2026-07-15] build | Session 04 Sanity authoring completed
Completed the authenticated authoring workflow and closed Session 04 without starting Session 05.
- Signed in with the project-owner GitHub identity and exercised the real Studio desk, Website
  singletons, Writing views, complete Blog/Journal/Father shortcut menu, and a guided Blog draft.
- The browser pass exposed duplicate Timeline and Bookshelf desk IDs; fixed the structure, added an
  API version to the custom Feed list, and strengthened the automated contract against duplicate
  top-level IDs.
- Added Studio/document icons and the missing Opinion, Personal, and Observation shortcuts. No test
  content was saved or published.
- `npm run quality`, the 17-schema/16-shortcut authoring contract, and Sanity schema extraction pass.
  Clean 1440px and 390px checks have no fresh console warnings/errors or horizontal overflow.
- The final codebase-memory refresh was attempted but its local transport disconnected; Session 05
  should retry before discovery.

## [2026-07-15] build | Session 04 graph index finalized
Finalized the generated code graph after the Session 04 merge.
- A post-merge refresh on updated `main` completed successfully with 929 nodes and 1,109
  relationships, replacing the incomplete pre-merge artifact.
- Updated the Session 04 Handoff so Session 05 can begin with the fresh graph instead of retrying a
  resolved transport issue. No website or Sanity content changed.

## [2026-07-15] build | Session 05 live preview checkpoint
Started Session 05 and built the live Sanity/preview infrastructure, but left the session
in-progress because the real publish rehearsal and browser QA are still blocked.
- Added typed query projections for all content families, shared Sanity content/image types,
  strict live-fetch helpers, Sanity Presentation/Visual Editing wiring, draft-mode routes,
  signed webhook revalidation, Sanity CDN image config, blur/image helpers, and a Portable Text
  image renderer.
- Added `npm run verify:sanity-live` and wired it into `npm run quality`; typecheck,
  zero-warning lint, Sanity authoring verification, and Sanity live verification pass.
- Escalated `npm run build` passes after the sandboxed quality build fails only on Google Fonts
  network access. Local HTTP checks return 200 for `/` and `/studio`, and the new draft/revalidate
  APIs return explicit 503 configuration errors when secrets are absent.
- Session 05 remains incomplete: no `SANITY_API_READ_TOKEN` or `SANITY_REVALIDATE_SECRET` is
  configured, no Sanity test draft was saved/published/unpublished, and Chromium browser QA is
  blocked by macOS sandbox launch failure (`bootstrap_check_in ... Permission denied (1100)`).

## [2026-07-15] build | Session 05 continuation blocked
Resumed the in-progress Session 05 and confirmed the implementation remains healthy, but did not
start Session 06 because the real Sanity rehearsal is still missing its required secrets.
- Refreshed codebase-memory successfully, then reran `npm run typecheck`, zero-warning
  `npm run lint`, `npm run verify:sanity-live`, and an escalated `npm run build`; all passed.
- The chained `npm run quality` again passed typecheck, lint, authoring verification, and live
  verification, then failed only when sandboxed Google Fonts fetching blocked the final build.
- Escalated local HTTP checks returned 200 for `/` and `/studio`; `/api/draft-mode/enable` and
  `/api/revalidate` returned explicit 503 configuration errors because `SANITY_API_READ_TOKEN` and
  `SANITY_REVALIDATE_SECRET` are not configured locally or in the pulled Vercel production env file.
- Session 05 remains in-progress. No Sanity test draft was saved, published, updated, or
  unpublished; no branch, PR, merge, deployment, or Session 06 work was started.

## [2026-07-15] build | Session 05 live preview completed
Closed the live Sanity data, preview, and image pipeline session after Istiaque supplied the
required preview and revalidation secrets.
- Added the secrets to local `.env.local` for verification and confirmed Vercel Production/Preview
  variables are present from Istiaque's screenshot.
- `npm run typecheck`, zero-warning `npm run lint`, `npm run verify:sanity-authoring`,
  `npm run verify:sanity-live`, and an escalated production build pass.
- Local `/` and `/studio` return 200; direct draft-mode access now fails closed with 401; a signed
  `/api/revalidate` request returns 200 and revalidates Blog, Feed, and Home tags.
- The authenticated Sanity owner session created a labelled Blog test draft, published it, updated
  it, unpublished/deleted it, and confirmed no test document remained.
- Home and Studio were checked at 1440px and 390px with no console errors or horizontal overflow;
  screenshots were saved under `site/.preview/session-05-*`.
  The final codebase-memory refresh was retried but its local transport disconnected again, so
  Session 06 should retry before code discovery.

## [2026-07-15] build | Sessions 06–07 Home v2 completed
Completed the full eight-scene Home rebuild and connected it to the live Sanity publishing layer.
- Replaced Home v1 with Presence, point of view, early Father inheritance, confirmed Foundation,
  StudyRise proof, published writing/Feed, life-in-motion, and Contact scenes.
- Used the confirmed public identity framing and source-of-truth education/AMC facts; no
  professional claim, memory, publication, date, testimonial, or personal photograph was invented.
- Home now reads its singleton, optional featured Blog/Journal item, de-duplicated latest writing,
  and latest complete Feed in parallel. Designed empty states appear while the public dataset is
  intentionally empty.
- Added responsive, accessible portrait/Father/life placeholders that approved Sanity images
  replace without code changes; saved Session 06–07 desktop and phone previews in `site/.preview/`.
- TypeScript, zero-warning lint, both Sanity contract checks, and the production build pass. All
  eight scenes were browser-reviewed at 1440×1000 and 390×844, with an additional 360×800 hero
  check; no overflow, clipped actions, console warnings, or console errors were found.

## [2026-07-15] build | Session 08 About completed
Completed the story-led About page and connected its personal imagery to Sanity.
- Replaced the indexed route placeholder with six editorial scenes covering the opening identity,
  verified training, Bangladesh–Australia arc, Father connection, human side, site purpose, and
  closing invitation.
- Added a resolved About singleton projection/type plus one square portrait and three lifestyle
  image slots that retain designed placeholders until approved photographs are uploaded.
- Kept every public claim aligned with the source-of-truth biography and omitted detailed current
  employer/company titles; the page now reinforces the site-wide Person entity through visible
  natural-language biography and dedicated metadata.
- TypeScript, zero-warning lint, both Sanity contract checks, and the optimized production build
  pass. Desktop, mobile, and narrow-mobile browser review found no horizontal overflow, clipped
  controls, console warnings, or console errors; previews are saved in
  `site/.preview/session-08-about-*`. The refreshed code graph contains 978 nodes and 1,180 edges.

## [2026-07-15] build | Session 09 Father completed
Completed the quieter Father index, archive, and reading experience without inventing personal material.
- Replaced the placeholder with an approved-copy opening, separate Essay and Note publishing lists,
  a restrained Sanity-authorable image archive, honest empty states, and a quieter warm-dark register.
- `/father/[slug]` now renders published Portable Text, archive images, captions, dates, reading
  time, and page metadata; unknown or unpublished slugs return a clean noindex route-group 404.
- Fixed the nested 404 boundary so a missing detail no longer duplicates the shared header and footer.
- TypeScript, zero-warning lint, both Sanity contract checks, and the optimized production build
  pass. The empty public dataset was reviewed at 1440×1000 and 390×844 with no Father-page overflow,
  clipped controls, console warnings, or console errors. The refreshed graph contains 1,054 nodes
  and 1,327 edges.

## [2026-07-15] build | Session 10 shared Writing system completed
Completed the reusable visitor language for Feed, Blog, and Journal without starting their page sessions.
- Added an in-page Writing navigator with Feed as its default, responsive active states, and clear
  plain-language distinctions among the complete stream, long-form Blog, and shorter Journal.
- Added shared editorial metadata, cards, rows, filters, no-image and empty states, pagination,
  cross-links, and canonical date/type/destination helpers; Home now uses the same helpers.
- Replaced the three generic route placeholders with noindex dark/light Writing scaffolds that invent
  no post, opinion, excerpt, cover, or date while their public datasets are empty.
- TypeScript, zero-warning lint, both Sanity contract checks, and the optimized production build
  pass. Feed, Blog, and Journal were reviewed at 1440×1000 and 390×844 with correct active states,
  no horizontal overflow, console warnings, or console errors. The refreshed graph contains 1,079
  nodes and 1,379 edges. Session 11 was not started.

## [2026-07-15] query | Codex capability strategy
Assessed the wiki, production build, remaining sessions, and available Codex capabilities.
- Filed [[Codex Capability Strategy]] with a staged recommendation for existing skills, the Sites
  plugin, official Sanity and Vercel skills, one project-local session skill, and post-launch
  monitoring.
- Recommended keeping Next.js + Sanity + Vercel as the production path; Sites remains useful for
  separate prototypes or a deliberate migration, not as an automatic replacement for the current
  application.
- Identified planning-layer drift for a future lint pass; no unrelated status or naming fixes were
  applied without approval.

## [2026-07-15] query | Codex skills installed and session skill created
Installed the first specialist skills and turned the capability strategy into a reusable Codex setup.
- Installed `sanity-best-practices`, `react-best-practices`, `web-design-guidelines`,
  `fixing-metadata`, and `vercel-optimize` into the local Codex skills folder.
- Created and validated the local `istiaque-site-session` skill for this project's wiki, build-plan,
  code-discovery, QA, Sites-plugin, and handoff rules.
- Updated [[Codex Capability Strategy]] to mark the installed skills and custom session skill.
- Cleaned up approved planning drift: [[Build Roadmap]] now marks Father and shared Writing as
  complete, and root navigation now points to Codex/[[AGENTS]] instead of the old Claude wording.

## [2026-07-15] build | Claude + Codex interoperability and graph refresh
Set up the vault so both Claude and Codex maintain the site interchangeably.
- Made `AGENTS.md` (Codex) and `CLAUDE.md` (Claude) byte-identical except for the title and tree
  marker, and added a "Working with two agents" section: the previous session's Handoff + last two
  log entries + `git log` are the resume contract, only one session is `in-progress` at a time, and
  each agent commits at a clean `npm run quality` checkpoint before handing off.
- Recorded Istiaque's photo workflow: keep personal-photo placeholders for now; photos arrive
  alongside the Blog, Feed, Father, and Journal writing they belong to, uploaded through Sanity.
- Rebuilt the lost codebase-memory index for `site/` (the prior graph had dropped); the correct
  MCP prefix is `codebase-memory-mcp`. Fresh graph: 575 nodes, 930 edges after Sessions 11–12.

## [2026-07-15] build | Sessions 11–12 Blog and Journal completed
Completed the Blog and Journal reading experiences on the Session 10 shared Writing system.
- **Blog**: live index in the light editorial register with a featured essay hero, category filters
  derived from published posts, `Load more` pagination, cover/no-image cards, and an honest empty
  state; `/blog/[slug]` renders the cover, Portable Text body, meta, up-to-three related essays,
  article Open Graph, and `Article` JSON-LD, with a branded 404 for unknown slugs.
- **Journal**: live index in the dark register grouped by month with Thought/Read/Observation
  filters and a related-book line on Read rows; a minimal `/journal/[slug]` view with a related-book
  aside that links to the Bookshelf, article metadata, and `Article` JSON-LD.
- Added `lib/jsonld.ts` and article-aware Open Graph in `lib/metadata.ts`; both pages are now
  indexable (noindex removed). No post, entry, date, category, excerpt, cover, or book was invented;
  the empty public dataset renders the designed empty states.
- Verified: `npm run typecheck`, zero-warning `npm run lint`, `verify:sanity-authoring`,
  `verify:sanity-live`, and the Next.js 16 production build pass. `/blog` reviewed at 1280px and
  375px, `/journal` at 1280px, and `/blog/no-such-essay` returns the branded noindex 404 — no
  console errors and no horizontal overflow. Populated paths are type/build-verified and await real
  content (Session 23) or a labelled test draft for runtime review.
- Updated the [[Build Roadmap]] Phase 3 checkboxes, the [[BUILD-PLAN]] progress table and Session
  11–12 Handoffs, and the [[Page - Blog]]/[[Page - Journal]] rows in `index.md`.

## [2026-07-15] build | Sessions 13–15 Feed, Projects, and Work completed
Completed the unified publishing stream and the first two Work-and-making pages without publishing
unapproved content or professional detail.
- **Feed**: live merged Blog/Journal/Father/Project/Documentary chronology, URL-backed filters,
  stable image/no-image rows, load-more pagination, aligned Home teaser rules, and `/feed.xml` RSS.
- **Projects**: StudyRise-led index and full general-audience case study with the official preview,
  three Sanity-authorable screenshot placeholders, live/GitHub links, and future approved-project support.
- **Work**: approved broad D5 framing, confirmed training and selected experience, five focus areas,
  optional work image, future media room, PDF-gated CV control, and About/Projects/Writing paths.
- Added project publication/screenshot fields, the Work CV file field, stricter live-contract checks,
  indexable page metadata, canonical/RSS alternates, and responsive styling. Detailed current roles,
  unapproved projects, publications, CV, personal photographs, and product claims remain absent.
- Strict TypeScript, zero-warning lint, both Sanity contracts, enforced schema extraction, and the
  Next.js production build pass. Desktop and phone review found and fixed one StudyRise title overflow;
  all final reviewed routes have no horizontal overflow, clipped controls, console warnings, or errors.
- Refreshed the codebase-memory graph after the final code pass: 612 nodes and 1,036 edges.

## [2026-07-15] build | Sessions 16–18 Documentaries, Timeline, and Bookshelf completed
Completed the final film, life-archive, and reading pages before the minimal Course and Contact work.
- **Documentaries:** built featured/archive presentation, click-to-load privacy-enhanced YouTube
  facade, automatic/custom thumbnail fallbacks, approved context/themes, conditional video
  metadata, channel links, and Feed/RSS anchors without inventing a film or loading an iframe in
  the empty public state.
- **Timeline:** built a seven-event confirmed chronology across Medicine, Tech, Personal, and
  Australia, with deliberate Sanity order, optional related links, reduced-motion-safe reveals,
  fixed-navigation-safe event hashes, and About/Father/Projects/Work continuations. Unapproved
  personal milestones and My Care Pro remain absent.
- **Bookshelf:** built the exact 2:3 cover library, URL-backed status filters, five confirmed
  source titles, Sanity-managed covers/status/order/notes, direct Journal book anchors, and honest
  unpublished states. Private C6 tone samples were not published as personal opinions.
- The shared quality gate and schema extraction pass. Desktop and 390×844 browser QA found and
  fixed deep-link reset, a desktop Bookshelf title orphan, and a phone intrinsic-width overflow;
  final routes are indexable, have no horizontal overflow, and report no console warnings/errors.
- Approved film selection/context, book covers/notes, and populated playback/filter rehearsal move
  to Session 23 alongside the planned content-seeding pass.
- Refreshed the final codebase-memory graph: 651 nodes and 1,069 edges.

## [2026-07-15] build | Sessions 19–20 Course and Contact advanced
Completed the honest Course experience and all code-owned Contact work without accepting messages
before a private inbox is connected.
- **Course:** replaced the placeholder with a complete indexable Coming later room, factual audience,
  broad future themes, current Writing doorway, and a Sanity model that reveals a course action only
  after explicit Available status. No waitlist, price, date, format, module, outcome, or sales claim
  is published.
- **Contact:** built the indexable form/social route, canonical six-link directory, no-public-email
  boundary, shared client/server validation, first-error focus, async states, honeypot, same-origin
  and size checks, hashed per-instance rate limiting, and a fail-closed Resend handoff.
- The shared quality gate, schema extraction, and Contact contract pass. Local API checks returned
  the expected 400/403/503/429 results; 1440×1000 and 390×844 reviews found no overflow, public
  email link, console warning, or console error. The refreshed graph contains 708 nodes and 1,172
  edges.
- Session 19 is done. Session 20 remains in-progress because D8 still defers the provider/recipient:
  the live form stays clearly disabled until four private delivery variables are configured, the
  Sanity switch is enabled, and a real message is confirmed in Istiaque's inbox.

## [2026-07-15] build | Session 21 search and discoverability completed
Completed the site-wide search, sharing, and AI-discoverability layer using only confirmed public facts.
- Corrected the canonical identity to “medical doctor, public health professional, and healthcare
  systems builder” and reused one social register across Person schema, Footer, and Contact.
- Added Person, WebSite, Breadcrumb, Article, Video, Book, and Project structured data where
  appropriate; unique route metadata and social cards; canonical URLs; favicons; web manifest;
  published-content sitemap; robots rules; RSS; and a factual `/llms.txt`.
- Resized the existing social card to its declared 1200×630 dimensions and kept drafts, Studio,
  API routes, visual-lab pages, private facts, and placeholders out of indexing.
- The full quality gate and 26-route production build pass. All thirteen public routes plus the
  StudyRise detail were checked for metadata, structured data, overflow, and console health; robots,
  sitemap, manifest, `/llms.txt`, and RSS all return successfully.
- Google Search Console, off-site profile consistency, and an optional photo-led social card remain
  owner tasks because they require account access or approved imagery.

## [2026-07-15] build | Session 22 responsive accessibility and performance completed
Closed the full-site usability and performance pass against the production build.
- Raised muted text contrast across dark, ivory, Father, Blog, Projects, Documentary, Course,
  Timeline, Bookshelf, and Contact registers; restored explicit focus rings for form fields and
  summaries; and gave nested mobile Writing links a 44 px minimum target.
- Verified skip link, landmarks, headings, control names, image alternatives, form descriptions,
  focus trapping/restoration, reduced-motion behaviour, coarse-pointer smooth-scroll bypass,
  responsive image sizing, lazy video, font loading, query caching, and pagination foundations.
- Every one of the thirteen public routes now scores 100 for Lighthouse mobile accessibility and
  SEO. Home, StudyRise, and Contact score 90, 92, and 94 for mobile performance respectively, all
  with 100 best practices, zero measured layout shift, and 20–30 ms total blocking time.
- The complete quality gate and 26-route production build pass. The durable audit record is
  `site/.preview/session-22-audit.md`; large raw Lighthouse files stay local and ignored.

## [2026-07-15] build | Session 23 owner publishing handover completed
Converted the ready Sanity publishing system into a plain-language operating guide without
inventing the missing personal material.
- Added [[Website Owner Guide]] with simple Studio steps for Blog, Journal, Father, Projects, Films,
  Timeline, Bookshelf, page editing, image upload/crop/alt text, Preview, Publish, Home featuring,
  unpublishing, safety checks, and basic troubleshooting.
- Recorded exactly what appears automatically after each content type is published and what to do
  if a live page looks unchanged.
- Collected the remaining owner inputs and account-bound actions into clear before-launch and
  after-launch lists: photos, approved writing, Contact delivery, Vercel, Namecheap, analytics,
  Search Console, social consistency, and monthly checks.
- The authenticated create/publish/update/unpublish/delete rehearsal and all current Studio/schema
  contracts remain verified. Personal photographs, memories, opinions, film context, and launch
  writing remain deferred by design rather than being guessed or published as placeholders.

## [2026-07-15] build | Session 24 launch readiness completed
Finished every code-owned launch integration and documented the remaining account-bound promotion.
- Added Vercel Web Analytics and Speed Insights to the root layout and an optional
  `GOOGLE_SITE_VERIFICATION` metadata path, so Search Console activation needs no later code edit.
- Verified the linked `istiaqueahamed` Vercel project, authenticated CLI, ready deployments, six
  existing Sanity environment names in Preview/Production, Namecheap-served Vercel DNS, and HTTPS
  on both apex and `www`.
- Found that the public domain still serves the earlier build and redirects apex to `www`, while
  the finished site's canonical URLs use the apex. The launch guide now requires the apex to be
  selected as Vercel primary when the new branch is promoted.
- Rewrote [[Tech - Deployment & Domain]] with the actual state, environment-name inventory,
  ordered launch steps, dashboard activation, Search Console submission, smoke tests, and rollback.
- No push, deployment, DNS, or domain-routing change was made because repository rules require
  Istiaque's explicit approval. The production dependency audit has no high or critical finding;
  fourteen moderate transitive findings remain for routine dependency maintenance.

## [2026-07-15] build | Session 25 operations and final handover completed
Closed the 26-session engineering plan and separated every owner-only activation from the finished build.
- Added [[Website Operations & Maintenance]] with the verified Sanity export command, restore
  boundary, backup ownership, five-minute monthly checks, quarterly maintenance, incident actions,
  environment-name inventory, and optional future enhancements.
- Closed the Contact page as an implemented fail-closed experience while keeping provider/inbox
  activation explicit; marked the built `rel="me"` social task complete and retained the off-site
  identity consistency items for Istiaque.
- Updated the master MOC, index, roadmap, build plan, owner guide, deployment guide, and page truths
  so the next helper can resume from files rather than chat history.
- The finished code remains on `codex/complete-website-build` and has not been pushed or promoted.
  The current live domain serves the earlier production build; the new production recheck therefore
  follows owner approval to merge/push/deploy, as documented in the handover.
- Refreshed the final codebase-memory graph: 15,730 nodes and 16,238 edges, status ready.

## [2026-07-16] build | Production deployment completed
Pushed the finished website branch and deployed the current build to Vercel Production after
Istiaque approved publication.
- Pushed `codex/complete-website-build` to GitHub and opened draft PR #9:
  `https://github.com/Istiaque012/Istiaqueahamed/pull/9`.
- Deployed Vercel production deployment `dpl_2UxWnG4RvsgkQuf4sgTgbTbyAYr9`; Vercel marked it
  `READY` and aliased it to `www.istiaqueahamed.com`, `istiaqueahamed.com`, and project URLs.
- Verified `https://www.istiaqueahamed.com` returns the new build with the current title,
  structured data, Sanity portrait, Vercel Analytics, and Speed Insights.
- Basic HTTP smoke test returned 200 for all thirteen public routes plus `robots.txt`,
  `sitemap.xml`, `feed.xml`, and `manifest.webmanifest`.
- Remaining owner/dashboard actions: merge PR #9 to `main` when ready, make the apex domain primary
  in Vercel so it matches canonical URLs, enable Vercel Analytics/Speed Insights dashboards,
  configure Contact delivery, and verify Search Console.

## [2026-07-16] query | Feed, Blog, and Journal navigation approved
Planned the post-launch simplification of the public publishing system after reviewing the current
Writing submenu, all-site Feed, Blog, Journal, Home, RSS, Sanity Studio, and discoverability layer.
- Feed will replace Writing in the primary navigation and act as a direct link rather than a
  desktop/mobile submenu.
- Feed and RSS will contain Blog and Journal only, with All · Blog · Journal local navigation.
- Father, Projects, and Documentaries will remain in their own destinations; Home will consolidate
  its duplicate writing/feed surfaces into one Blog/Journal-led section.
- Existing schemas and `/feed`, `/blog`, and `/journal` URLs remain, avoiding content or redirect
  migrations. The complete implementation and acceptance plan is filed in
  [[Feed, Blog & Journal Plan]].

## [2026-07-16] build | Feed navigation and publishing model implemented
Implemented the approved Feed simplification across the public site, Sanity authoring model, SEO
surfaces, verification scripts, and operating documentation.
- Replaced the global Writing disclosure with one direct Feed link while preserving Feed's active
  state across `/feed`, `/blog`, `/journal`, and their detail routes.
- Limited Feed, RSS, Home invalidation, and Studio's combined preview to Blog posts and Journal
  entries; Father pieces, Projects, and Documentaries remain in their own destinations.
- Consolidated Home's duplicate writing/feed surfaces into one Blog-and-Journal-led Feed section.
- Passed the full `npm run quality` suite, `git diff --check`, Sanity live/authoring verification,
  and responsive browser QA at 1440 px and 390 px with no horizontal overflow or application
  console errors. The only local warning was the expected temporary `localhost:3100` Sanity CORS
  notice.
