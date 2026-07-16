---
title: Content Strategy
type: strategy
status: in-progress
visibility: private
created: 2026-06-28
updated: 2026-07-16
tags: [project/website, strategy, content]
---

# ✍️ Content Strategy

Back to [[00 - START HERE]]

---

## The principle

Consistency over frequency. A few honest, well-made things beat a flood of shallow ones. Every piece should sound like one person talking to one other person.

## The content types

| Type | Length | Cadence | Lives in |
|---|---|---|---|
| Blog post | 600–2500 words | When there's something real to say | [[Page - Blog]] |
| Journal entry | Under 400 words | When something moves me | [[Page - Journal]] |
| Father piece | Any length | Whenever | [[Page - My Beloved Father]] |
| Project update | Short | On milestones | [[Page - Projects]] |
| Documentary | Video + context | On release | [[Page - Documentaries]] |

Blog and Journal surface together in the [[Page - Feed]]. Father pieces, Projects, and
Documentaries remain in their own distinct destinations.

## What appears on Home

Every newly published Blog post or Journal entry automatically enters Home's **Latest Writing**
list. Sanity also adds **Feature on Home**, which optionally pins one published piece in the more
prominent position without changing code.

- A draft never appears on Home.
- Turning **Feature on Home** off removes only the prominent pin. The piece can still appear in
  Latest Writing while it is among the newest published items.
- Father pieces stay in the Father space unless a separate, deliberate Home treatment is approved;
  they are not mixed into ordinary promotional cards.
- Home shows one optional featured piece plus the three newest Blog/Journal items. If no piece is
  featured, it shows the four newest. [[Page - Feed]] presents the same two formats chronologically.

## Blog categories

1. **Health & Medicine** — explain conditions, debunk myths, public health, systems thinking
2. **Life in Medicine** — day-in-the-life, burnout, what doctors wish patients knew, the Australia pathway
3. **Opinion** — healthcare, policy, tech in medicine, discipline, building
4. **Personal** — growth, faith, fitness, reflections, life outside the clinic

## Journal entry types

- **Thought** — inner monologue made visible
- **Read** — something learned from a book or article (ties to [[Page - Bookshelf]])
- **Observation** — a small, specific moment worth noticing

## The non-negotiable rules

> [!warning] Ethics & safety
> - **Never include patient details** — not even anonymised. Impressions and feelings only.
> - Keep clinical content to what's appropriate for a public audience.

> [!tip] Voice rules
> - Write like you're talking to one person.
> - No entry needs a tidy conclusion — end mid-thought if that's honest.
> - Cut corporate filler. Say the real thing.
> - Show the human, not just the credential.

## Starter content (first month)

To launch with substance, aim for:
- [ ] 1 strong **About** narrative (the anchor)
- [ ] 2–3 **blog** posts (one per top category)
- [ ] 3–4 **journal** entries (mix of types)
- [ ] 1 **father** piece (sets the tone for that space)
- [ ] **StudyRise** project write-up
- [ ] 1–2 **documentaries** embedded with context

## Content → SEO link

Depth and consistency are what build the entity authority described in [[SEO & Discoverability]]. Writing isn't decoration here; it's the engine of recognition.

## Shared Feed experience — 2026-07-16

- Feed is a direct primary-navigation destination, not a separate format and not a disclosure menu.
- Feed, Blog, and Journal share **All · Blog · Journal** local navigation with clear active states.
- Feed and `/feed.xml` contain published Blog and Journal items only.
- Home uses one featured/latest Blog-and-Journal scene and one Feed action; the duplicate all-site
  teaser and query are removed.
- Father, Projects, and Documentaries keep their own public destinations.
- Empty public datasets display one explicit quiet state. No sample post, date, opinion, excerpt,
  or cover is created merely to fill the design.

## Feed navigation decision — 2026-07-16

> [!success] Implemented
> [[Feed, Blog & Journal Plan]] replaced the public **Writing** navigation label with **Feed**.
> The existing schemas and `/feed`, `/blog`, and `/journal` URLs remain unchanged.

---

Related: [[Vision & Positioning]] · [[SEO & Discoverability]] · [[Feed, Blog & Journal Plan]] ·
[[Page - Blog]] · [[Page - Journal]]
