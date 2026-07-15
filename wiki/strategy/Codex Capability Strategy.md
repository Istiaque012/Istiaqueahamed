---
title: Codex Capability Strategy
type: strategy
status: in-progress
visibility: private
updated: 2026-07-15
tags: [project/website, codex, workflow, skills, plugins]
---

# 🧰 Codex Capability Strategy

Back to [[00 - START HERE]]

> [!abstract] Operating recommendation
> Keep the current Next.js + Sanity + Vercel production path. Add a small number of targeted
> Codex skills at the session where they create leverage, and create one project-specific session
> skill rather than accumulating overlapping general-purpose plugins.

## What Codex is helping build

This repository now contains four connected systems:

1. A private LLM-maintained Obsidian wiki with `raw/` sources, synthesized `wiki/` pages, an
   authoritative [[index]], and an append-only [[log]].
2. A production Next.js and Sanity site with a locked editorial design system, live preview,
   publishing workflows, reusable components, and browser QA.
3. A public identity and content system designed to make Istiaque Ahamed legible to readers,
   Google, and AI assistants.
4. A launch and operating system spanning Vercel, Namecheap, analytics, Search Console, content
   authoring, monitoring, and future iteration.

The right capability mix therefore needs to cover code quality, CMS correctness, browser review,
content, discoverability, launch, and wiki continuity. No single site-building plugin covers all
of those well.

## Sites plugin — where it fits

The Sites plugin would have been valuable at the beginning for:

- rapidly producing a visible first prototype;
- comparing three visual directions through design pickers before locking [[Design System]];
- testing an alternate one-page portfolio or campaign microsite without committing it to the main
  architecture;
- privately publishing a disposable prototype for feedback.

> [!warning] Do not switch the current production build to Sites by default
> The implemented product is already a multi-route Next.js 16 + Sanity 6 application designed for
> Vercel, and `site/` has no `.openai/hosting.json`. The Sites build-and-host workflow is oriented
> around its own Cloudflare-compatible deployment path. Adopting it now would be a hosting and
> architecture decision, not a harmless extra skill.

Use Sites from this point only for a separate experiment, microsite, or a deliberate hosting
migration. Keep [[Tech Stack Decision]] and [[Tech - Deployment & Domain]] authoritative for the
main site.

## Available capabilities to use deliberately

| Capability | Best use here | Timing |
|---|---|---|
| `codebase-memory` | Structural discovery, call paths, impact analysis, and post-session graph refresh | Every code session; already required |
| Browser / Chrome control | Responsive review, keyboard flows, Sanity Studio rehearsal, and signed-in dashboard work | Every UI session; launch dashboards later |
| `ai-seo` | Entity consistency, answer-engine visibility, structured signals, and AI citation readiness | Session 21 |
| `content-strategy` | Blog/Journal/Father distinctions, editorial cadence, topic clusters, and publishing rules | Sessions 11–13 and post-launch |
| `copywriting` + `copy-editing` | Page copy, headlines, excerpts, metadata, and voice-preserving polish | Sessions 11–20 and 23 |
| `product-marketing` | One consolidated positioning/ICP context and message consistency | One focused pass before final copy seeding |
| `analytics` | Event plan for contact, reading, project visits, course interest, and attribution | Session 24 |
| `image` / `imagegen` | OG-card concepts, abstract editorial assets, and visual experiments | Selectively; never fake personal or Father photography |
| GitHub `yeet` / CI repair | Intentional checkpoint commits, draft PRs, and failed GitHub Actions diagnosis | Only when Istiaque asks to publish work |
| `launch` | Coordinated pre-launch checklist, announcement, channel sequencing, and post-launch follow-up | Sessions 24–25 |
| `cro` | Contact and course-interest flow clarity | Only after the core pages and real offer exist |
| `documents` | A future downloadable media kit, speaker bio, or polished CV | Post-launch extension |
| `openai-docs` | A future draft-only Sanity co-writer or accurate AI-course technical material | Only if those features are approved |

## Skills installed or worth adding

### 1. Sanity Best Practices — installed 2026-07-15

Official Sanity guidance is the clearest missing specialist layer. It should inform schema changes,
GROQ, preview, Visual Editing, image handling, TypeGen, security, and performance through the
remaining CMS-backed sessions.

```text
npx skills add https://github.com/sanity-io/agent-toolkit --skill sanity-best-practices
```

Source: [Sanity agent toolkit](https://github.com/sanity-io/agent-toolkit)

### 2. Vercel React Best Practices — installed 2026-07-15

Use this during the remaining Next.js page work and the final performance pass. It is especially
relevant to parallel data fetching, server/client boundaries, rendering cost, and bundle size.

```text
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

Source: [Vercel agent skills](https://github.com/vercel-labs/agent-skills)

### 3. Web Design Guidelines — installed 2026-07-15

This is a focused final audit for accessibility, forms, focus states, animation, image behaviour,
touch targets, typography, and UX conventions. It complements browser QA; it does not replace it.

```text
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

Source: [Web Design Guidelines](https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines)

### 4. Metadata audit — installed 2026-07-15, use in Session 21

The installed `ai-seo` skill covers the strategy. A narrow metadata auditor can add a second pass
over canonical URLs, indexing directives, Open Graph, JSON-LD, icons, and deterministic metadata.

```text
npx skills add https://github.com/ibelick/ui-skills --skill fixing-metadata
```

Source: [fixing-metadata](https://www.skills.sh/ibelick/ui-skills/fixing-metadata)

### 5. Vercel Optimize — installed 2026-07-15, post-launch only

Use real production metrics to inspect caching, slow routes, function usage, build cost, and
reliability. It is premature before the production deployment has representative traffic.

```text
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-optimize
```

Source: [Vercel agent skills](https://www.skills.sh/vercel-labs/agent-skills)

## One custom skill is more valuable than another generic plugin

Created a local `istiaque-site-session` skill with `skill-creator`. It does not duplicate facts
from this vault. It routes Codex through the existing sources of truth:

1. Read `AGENTS.md`, [[index]], [[BUILD-PLAN]], the last two [[log]] entries, and the previous
   Handoff.
2. Use the code graph first, inspect git status, and activate exactly one pending session.
3. Apply only the specialist skills relevant to that session.
4. Run the defined quality and browser checks.
5. Update the Handoff, affected wiki pages, [[index]], [[log]], and the code graph.

This would make the established session protocol automatically reusable while keeping
[[BUILD-PLAN]]—not the skill—as the authority for progress.

## Other leverage beyond skills

- Add a wiki lint check for stale status boxes, obsolete `CLAUDE.md` references, public/private
  visibility drift, orphan wikilinks, and public facts that diverge from [[Discovery Answers]].
- After launch, create a monthly Codex monitor for the live site: availability, sitemap and robots,
  schema, broken links, public metadata, name-search visibility, and identity consistency.
- Use GitHub draft PRs as reviewable checkpoints for groups of related sessions instead of one PR
  per tiny change or one very large launch PR.
- Keep real photographs, personal memories, medical claims, and public role wording behind the
  existing human-approval boundary. No skill should weaken that rule.

## Recommended adoption order

1. Use the installed Sanity Best Practices and Vercel React Best Practices skills from Session 11
   onward.
2. Build Sessions 11–20 with the existing browser, content, copy, and code-graph capabilities.
3. Use `ai-seo` plus the installed metadata audit in Session 21.
4. Use the installed Web Design Guidelines skill plus real browser review in Session 22.
5. Use analytics, launch, Chrome/computer control, and GitHub workflows in Sessions 24–25.
6. Use Vercel Optimize and recurring monitoring only after production data exists.

---

Related: [[BUILD-PLAN]] · [[Build Roadmap]] · [[Tech Stack Decision]] ·
[[SEO & Discoverability]] · [[Content Strategy]] · [[Design System]]
