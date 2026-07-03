---
title: Build Plan
type: system
status: in-progress
visibility: private
updated: 2026-07-03
tags: [project/website, planning, build]
---

# 🏗️ BUILD PLAN — istiaqueahamed.com

> [!abstract] The file every build session reads first
> Session-sized chunks in build order, derived from [[Build Roadmap]]. Each chunk lists what
> gets built and its done-criteria. Update the Progress table (todo / in-progress / done) at
> the end of every session, and log the session in [[Log|log.md]] per CLAUDE.md.

**Companion files:** [DECISIONS-NEEDED.md](DECISIONS-NEEDED.md) (everything Istiaque must answer
or write) · [[IMAGE-MANIFEST|IMAGE-MANIFEST.md]] (every image the design needs).

**Rules of the build:**
- ⚠️ items are never published as fact — unanswered items ship as clearly neutral placeholders.
- Images ship as labelled placeholders at the right aspect ratio; real photos are a drop-in swap.
- One chunk per session (roughly); each ends reviewable, deployed to a Vercel preview once Chunk 2 lands.
- All copy pulls from `raw/Discovery Answers.md`; design from the locked [[Design System]] tokens.

---

## Progress

| # | Chunk | Phase | Status |
|---|---|---|---|
| 0 | Foundations audit & repo hardening | 0 | `todo` |
| 1 | Sanity project + schemas + Studio | 0 | `todo` |
| 2 | Vercel deploy + domain + CI loop | 0 | `todo` |
| 3 | Global shell: layout, nav, footer, motion, SEO base | 1 | `todo` |
| 4 | Home page (full section map) | 2 | `todo` |
| 5 | About page | 2 | `todo` |
| 6 | Blog: index + post + categories | 3 | `todo` |
| 7 | Journal: index + entry + types | 3 | `todo` |
| 8 | Feed: merged stream + filters + Home preview wiring | 3 | `todo` |
| 9 | My Beloved Father ("different room") | 4 | `todo` |
| 10 | Projects + Work | 5 | `todo` |
| 11 | Documentaries | 5 | `todo` |
| 12 | Timeline + Bookshelf | 6 | `todo` |
| 13 | Course (coming soon) + Contact | 6 | `todo` |
| 14 | SEO / performance / mobile pass | 7 | `todo` |
| 15 | Content seeding + launch | 7 | `todo` |

---

## Starting point (what already exists)

A `site/` scaffold was built in a previous session (2026-06-28, see log): Next.js 14 App Router +
TypeScript + Tailwind + Framer Motion + Lenis, locked design tokens mirrored in
`tailwind.config.ts` / `app/globals.css`, and a first Home page (Nav, Hero, Institutions, About
block, Projects, FAQ, Footer) with Person JSON-LD in `lib/person.ts` and copy in `lib/content.ts`.
No Sanity yet; content is hard-coded. Chunks 0–4 audit, wire, and finish this rather than start over.

---

## Chunk 0 — Foundations audit & repo hardening (Phase 0)

**Build:**
- Audit the existing `site/` scaffold against [[Design System]] tokens and [[Site Architecture]]
  Home section map; fix drift.
- Upgrade check: pin/refresh deps as needed (Next 14 is fine; no rewrite).
- Add `prefers-reduced-motion` audit, ESLint/TS strictness, `.env.example`.
- Route stubs for all 13 pages (each a minimal dark placeholder with correct `<title>`/meta) so
  navigation and sitemap are real from day one.

**Done when:** `npm run build` passes; all 13 routes render themed placeholders; tokens match the
wiki exactly; no ⚠️ copy appears anywhere.

## Chunk 1 — Sanity project + schemas + Studio (Phase 0)

**Build:**
- Sanity project; all schemas from [[Tech - Sanity CMS Setup]]: `blogPost`, `journalEntry`,
  `fatherPiece`, `project`, `documentary`, `book`, `timelineEvent` + singletons `siteSettings`,
  `aboutPage`, `coursePage`.
- Embedded Studio at `/studio`; GROQ client in `lib/sanity/`; typed query helpers; the merged
  feed query.
- Seed one draft document per type (placeholder content, clearly marked).

**Done when:** Istiaque can log into `/studio`, see every content type, publish a test post, and
see it render on a dev page. **Blocked by:** decision D1 (Sanity account) in DECISIONS-NEEDED.

## Chunk 2 — Vercel deploy + domain + CI loop (Phase 0)

**Build:**
- GitHub repo for `site/` (or monorepo subdir — recommendation: deploy `site/` as Vercel root
  from the existing private repo). Vercel project, env vars, preview deploys.
- Point istiaqueahamed.com DNS; SSL; deploy the shell.
- `robots.txt` + `sitemap.xml` generation; 404 page styled.

**Done when:** https://istiaqueahamed.com serves the dark shell over HTTPS and every push creates
a preview URL. **Blocked by:** D2 (Vercel/GitHub access, DNS).

## Chunk 3 — Global shell (Phase 1)

**Build:**
- Final header/nav (5–7 items + Contact CTA; recommendation in DECISIONS D3), footer with
  [[Social Links]], bio line, `rel="me"`, Person schema.
- Page-transition system (0.5s cross-fade), Lenis smooth scroll site-wide, shared `Reveal`
  entrance primitives, reduced-motion support.
- Base SEO: per-page metadata helper (name early in title), OG/Twitter tags, canonical URLs,
  placeholder OG image.

**Done when:** navigating between any two stub pages feels cinematic (transition + scroll), and
view-source shows correct Person JSON-LD, meta, canonical on every route.

## Chunk 4 — Home page (Phase 2)

**Build:** the full 9-section Portfolite-derived map from [[Site Architecture]]: sticky nav ·
hero (name + tagline + photo placeholder + 2 CTAs) · institutions strip · "Meet Istiaque" block ·
projects grid (StudyRise, My Care Pro) · feed teaser (live from Sanity) · quiet father line ·
optional stats/FAQ · contact CTA footer. Word-by-word headline animation, hero parallax.

**Done when:** a stranger scrolling the deployed Home understands "doctor who builds" in 30
seconds; feed teaser shows real Sanity documents; mobile hero still feels cinematic.
**Placeholder-tolerant:** tagline (D4) ships as the neutral framing line until decided; hero photo
is a labelled placeholder.

## Chunk 5 — About page (Phase 2)

**Build:** six-block story layout per [[Page - About]] (hook → credentials → why medicine/father →
the human side → what this site is → CTA), driven by the `aboutPage` singleton; natural-language
bio paragraph for AI search; editorial Fraunces-heavy type.

**Done when:** page renders the six blocks from Sanity with neutral placeholder copy where
Istiaque's narrative (C1) is pending; credentials block is fully accurate from Discovery Answers.

## Chunk 6 — Blog (Phase 3)

**Build:** index with featured/pinned post + category filter (Health & Medicine / Life in
Medicine / Opinion / Personal); single-post view (big title, cover image, reading time, Portable
Text body, related posts); category-aware SEO meta.

**Done when:** publishing a post in Studio makes it appear on index, category filter, and its own
clean URL with correct meta — verified with a draft test post.

## Chunk 7 — Journal (Phase 3)

**Build:** index grouped by month with subtle type tags (Thought / Read / Observation); minimal
single-entry view; `relatedBook` link for Read entries.

**Done when:** same publish-and-verify loop as Blog, with all three types rendering distinctly.

## Chunk 8 — Feed (Phase 3)

**Build:** the merged GROQ stream (blog + journal + father + project + documentary by
`publishedAt`), type filter UI, item rows (tag · title · date · reading time), and wire the Home
feed teaser to the same query.

**Done when:** documents of every type interleave correctly, filters work, Home preview matches
the top of the feed.

## Chunk 9 — My Beloved Father (Phase 4)

**Build:** the "different room" — distinct quieter layout (slower motion, more whitespace, less
UI, Fraunces-led), opening section (photo placeholder + intro), essays + notes lists from
`fatherPiece`, restrained optional gallery. Register shift must be perceptible on entry.

**Done when:** the page feels unmistakably different from the rest of the site; structure renders
with neutral placeholders awaiting Istiaque's first piece (C2 — his words are never ghostwritten).

## Chunk 10 — Projects + Work (Phase 5)

**Build:** Projects — StudyRise featured hero (modes, features, stack, screenshots placeholders,
build story slot, studyrise.app link) + grid of other projects with status badges. Work —
training & education, roles, areas of focus, empty-but-clean publications section, optional CV
download slot.

**Done when:** StudyRise section is complete and accurate from Discovery Answers; other projects
show only confirmed facts (D6 gates links/status); Work wording uses confirmed titles or the
safe defaults (D5).

## Chunk 11 — Documentaries (Phase 5)

**Build:** featured film embedded large + grid of embeds with title/context/theme (YouTube embed
confirmed in Discovery Answers — lazy-load with facade for performance), channel link-out.

**Done when:** at least one real film from @Istiaqamd embeds and plays; context text is real
(C5) or a neutral placeholder; Lighthouse doesn't tank from embeds.

## Chunk 12 — Timeline + Bookshelf (Phase 6)

**Build:** Timeline — vertical scroll-reveal arc, category-coded (Medicine / Tech / Personal /
Australia), from `timelineEvent`; confirmed professional milestones seeded, dated ones pending D7.
Bookshelf — cover-led grid from `book` with personal notes, 5 starter books.

**Done when:** timeline animates through the confirmed arc; bookshelf shows 5 covers with note
slots (C6).

## Chunk 13 — Course + Contact (Phase 6)

**Build:** Course — one-statement "AI in healthcare, for doctors" coming-soon page + register-
interest capture (D8 picks the mechanism). Contact — warm intro line, form (D8: Resend vs
Formspree recommendation: **Resend** — same ecosystem, free tier, no branding), full social links.

**Done when:** a test form submission reaches Istiaque's inbox; course page captures an interest
signup.

## Chunk 14 — SEO / performance / mobile pass (Phase 7)

**Build:** full [[SEO & Discoverability]] checklist (Person schema audit, unique titles/meta,
OG image, canonicals, alt text with name, sitemap), Lighthouse ≥90 mobile on key pages, image
optimization, reduced-motion audit, Google Search Console verification + sitemap submission,
analytics (D9).

**Done when:** checklist all-green, GSC verified, "Istiaque Ahamed" incognito-search baseline
recorded in the log.

## Chunk 15 — Content seeding + launch (Phase 7)

**Build:** load the starter-content set from [[Content Strategy]] once Istiaque supplies it
(About narrative, 2–3 blog posts, 3–4 journal entries, 1 father piece, StudyRise write-up, 1–2
documentary contexts — items C1–C7); swap real photos per IMAGE-MANIFEST; final review; launch 🚀.

**Done when:** live site has zero placeholders above the fold on public pages, all ⚠️ items are
either resolved or their sections neutrally worded, and the launch is logged.

---

Related: [[Build Roadmap]] · [[Site Architecture]] · [[Design System]] · [[Tech Stack Decision]]
