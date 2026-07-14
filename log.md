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
