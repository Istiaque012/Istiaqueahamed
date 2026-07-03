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
