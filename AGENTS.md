---
title: Wiki Schema & Operating Manual
type: system
updated: 2026-06-28
---

# AGENTS.md — How to maintain this wiki

This repository is a **personal LLM Wiki** for building **istiaqueahamed.com**, following
[Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).
It is an Obsidian vault. **Istiaque sources material, explores, and asks questions. Codex writes
and maintains every page, link, summary, and log entry.** Istiaque rarely edits the wiki by hand.

Read this file at the start of every session. Follow it. Co-evolve it with Istiaque when a
convention stops fitting.

---

## 1. The three layers

1. **`raw/`** — immutable sources. Istiaque's raw discovery answers, pasted research, articles,
   transcripts, screenshots, exported chats. **Codex reads from `raw/` but never edits it.**
   This is the source of truth. Images go in `raw/assets/`.
2. **`wiki/`** — Codex-owned synthesized pages. Strategy, design, architecture, tech, and one
   brief per site page. Codex creates, updates, cross-links, and keeps these consistent.
3. **This file (`AGENTS.md`)** — the schema. Conventions + workflows. The thing that makes Codex
   a disciplined maintainer rather than a generic chatbot.

Plus two navigation files at the root: **`index.md`** (catalog) and **`log.md`** (timeline).

```
.
├── AGENTS.md            ← you are here (the schema)
├── README.md            ← human-facing intro
├── index.md             ← catalog of every page + visibility (READ THIS FIRST on a query)
├── log.md               ← append-only chronological record
├── raw/                 ← immutable sources (never edit)
│   ├── Discovery Answers.md   ← the founding source of truth
│   └── assets/                ← images, screenshots, PDFs
└── wiki/                ← Codex-maintained pages
    ├── 00 - START HERE.md     ← human MOC / map of content
    ├── strategy/   ← Vision, Audience, SEO, Content, Roadmap
    ├── site/       ← Site Architecture, Design System
    ├── pages/      ← one brief per site page (Home, About, Father, …)
    ├── tech/       ← Stack Decision, Sanity CMS, Deployment
    └── reference/  ← Social Links, and future canonical fact pages
```

---

## 2. Page conventions

Every `wiki/` page is Markdown with YAML frontmatter:

```yaml
---
title: Page - Home
type: page          # strategy | design | architecture | tech | page | reference | source | system
status: planned     # planned | in-progress | done | planned-minimal | future | source-of-truth
visibility: public  # public | private | mixed   (see §3)
updated: 2026-06-28
tags: [project/website, page]
---
```

- **Links are Obsidian wikilinks**: `[[Page - Home]]`, `[[SEO & Discoverability]]`. Resolved by
  **basename**, so files can live in any subfolder — keep every basename unique. Link liberally;
  a link to a page that doesn't exist yet is a valid TODO marker.
- **Every wiki page links back up** — pages link to `[[Site Architecture]]` or `[[00 - START HERE]]`;
  tech sub-pages name their parent `[[Tech Stack Decision]]`.
- **Callouts** carry the page's intent: `> [!abstract]` for the one-line job of a page,
  `> [!tip]`, `> [!info]`, `> [!warning]` for unconfirmed items.
- **Unconfirmed facts are flagged with ⚠️** and must never be treated as published-ready.
- Emoji section headers are the house style (`# 🏠 Page — Home`). Match the surrounding voice:
  confident, warm, precise, no filler.

---

## 3. Public vs private — the AI-discoverability rule

Istiaque's goal is to **own his name on Google and in AI search**. The deployed website will be
**public and built for AI/LLM crawlers**. This planning repo stays **private**. So every page
declares `visibility:`:

- **`public`** — facts and copy intended to appear on the live site and be indexed by search
  engines and AI assistants. Must be accurate, consistent, and free of ⚠️ items. The canonical
  identity facts (name, training, roles, projects, links) feed the site's `Person` schema and the
  story an AI assistant should tell when asked "who is Istiaque Ahamed?"
- **`private`** — internal strategy, positioning rationale, roadmap, draft decisions, anything
  with ⚠️ unconfirmed items. Never copy verbatim onto the public site.
- **`mixed`** — a page with both; call out which sections are which.

`index.md` is the authority for per-page visibility (a column there). When the site is built,
the `public` set is the safe export. Keep the public identity facts in lockstep with
`raw/Discovery Answers.md` so the entity story stays consistent everywhere.

---

## 4. Operations

### Ingest — Istiaque adds a source
1. Place the source in `raw/` (images in `raw/assets/`). Read it in full first; if it references
   images, view them separately.
2. Discuss the key takeaways with Istiaque before writing.
3. Integrate, don't dump: update the relevant existing `wiki/` pages — entity facts, page briefs,
   strategy. A single source often touches several pages.
4. Flag contradictions with older claims explicitly (⚠️) instead of silently overwriting.
5. Update `index.md` (new/changed pages, summaries, visibility).
6. Append a `log.md` entry.

### Query — Istiaque asks a question
1. Read `index.md` first to find relevant pages, then drill into them.
2. Answer with citations to specific pages (wikilinks).
3. **File good answers back into the wiki** — a comparison, a decision, a new fact deserves its own
   page or a section on an existing one, not just a chat reply. Then update `index.md` + `log.md`.

### Lint — periodic health check
Scan for: contradictions between pages; stale claims a newer source superseded; orphan pages with
no inbound links; concepts mentioned but lacking a page; missing cross-references; ⚠️ items ready to
confirm; `public` pages that drifted from `raw/Discovery Answers.md`. Propose new questions and
sources. Report findings; apply the fixes Istiaque approves; log the pass.

---

## 5. index.md and log.md

- **`index.md` is content-oriented** — a catalog of every page: link, one-line summary, type,
  visibility, status. Update it on **every** ingest, filed query, and lint. Read it first when
  answering anything.
- **`log.md` is chronological** — append-only. Every entry starts with a parseable prefix so
  `grep '^## \[' log.md | tail -5` works:
  `## [YYYY-MM-DD] <ingest|query|lint|build> | <short title>`

---

## 6. Roles

- **Istiaque**: curates sources, explores, asks questions, makes the final call on ⚠️ items, decides
  what's public. Reviews in Obsidian (graph view shows the shape of the vault).
- **The agent (Claude or Codex)**: all the bookkeeping — summarizing, cross-referencing, filing,
  keeping `index.md`, `log.md`, and cross-links current, flagging contradictions. Touch as many pages
  as a change needs.

### Working with two agents (Claude + Codex)

Istiaque builds this site with **both Claude and Codex**. They share one repo and must be
interchangeable, so:

- **`AGENTS.md` (Codex) and `CLAUDE.md` (Claude) are kept byte-identical** except for the filename in
  the title and the "you are here" tree marker. Edit both together whenever the schema changes.
- **The handoff is the contract.** Whichever agent runs a session reads the previous session's
  **Handoff** block in `BUILD-PLAN.md`, the last two `log.md` entries, and `git log` to resume. It
  does not matter which agent wrote the previous session.
- **Only one session is `in-progress` at a time** (BUILD-PLAN progress table). Before starting, check
  that no session is already open; if one is, continue it rather than opening a new one.
- **Commit at clean checkpoints** with clear messages so the other agent can pick up from a known
  green state. Leave the working tree building (`npm run quality` in `site/`) before handing off.
- Neither agent invents personal facts, photos, or dates; both follow the same public/private rule.

---

## 7. Project facts (so any session has context)

- **Person**: Istiaque Ahamed — medical doctor (MBBS, Sylhet North East Medical College; internship
  BIRDEM; MPH Macquarie; preparing for AMC). Public framing: *"Medical doctor, public health
  professional, and healthcare systems builder."* Based between Bangladesh and Australia.
- **Builds**: StudyRise (studyrise.app — React/Vite/Supabase/Vercel), My Care Pro (Australia),
  hospital leadership/ops. The "doctor who actually builds" angle.
- **Emotional spine**: his late father, a doctor, is why he chose medicine → `[[Page - My Beloved Father]]`.
- **Domain**: istiaqueahamed.com (secured). **Stack**: Next.js + TypeScript + Tailwind + Framer
  Motion + Lenis, content in Sanity, hosted on Vercel.
- **Aesthetic**: dark, cinematic, minimal, masculine, premium editorial, photo-led, Framer-style motion.
- **13 pages.** See `[[Site Architecture]]`. **Primary goal**: be recognised — own his name on
  Google + AI search, and show one complete person.

---

## 8. Git

This repo is **private** on GitHub (`Istiaque012/Istiaqueahamed`). The wiki is just a git repo of
Markdown — commit meaningful checkpoints with clear messages. Only push when Istiaque asks. The
*deployed website* is the public, AI-indexable layer; this planning repo is not.
