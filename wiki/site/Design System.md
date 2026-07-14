---
title: Design System
type: design
status: done
visibility: private
created: 2026-06-28
updated: 2026-07-15
tags: [project/website, design]
---

# 🎨 Design System

Back to [[00 - START HERE]]

> [!abstract] The feeling
> Dark, cinematic, minimal, masculine, emotionally deep, premium editorial. Photo-led and blog-led. Framer-style motion or better. It should feel like a film, not a brochure.

---

## Aesthetic direction

- **Mood:** dark luxury. Confident, serious, expensive-feeling.
- **Palette base:** black / white / grey. Restraint is the point.
- **Layout:** generous negative space, big type, strong photography, few elements per screen.
- **Feel:** every scroll reveals something, like scenes in a film.

## Colour

| Role | Value (suggested) | Use |
|---|---|---|
| Background | near-black `#0A0A0A` / `#0B0B0B` | page base |
| Surface | `#141414` / `#1A1A1A` | cards, raised panels |
| Primary text | off-white `#F5F5F5` | body, headings |
| Secondary text | grey `#A0A0A0` | meta, captions |
| Hairline | `#262626` | borders, dividers |
| Accent | **none — monochrome** | brightness and type carry emphasis; CTAs use hairline/inverted styling |

> [!success] LOCKED 2026-06-28 — Monochrome
> The accent is **no chromatic accent**. The site is off-white on near-black; contrast,
> scale, whitespace, and photography do all the work. This is the most serious, timeless,
> editorial choice and lets the imagery carry any color. Earlier candidates (gold `#C8A24B`,
> clay, teal, blue) were rejected — gold read decorative, blues read corporate.
> CTAs: a solid **inverted** button (off-white fill, near-black text) for the primary action;
> a **hairline-outline** button (`#2E2E2E` border) for secondary. Links: underline-on-hover, no color.

## Typography

> [!success] LOCKED 2026-06-28 — Type pairing
> **Display/headings: Fraunces** (editorial serif, with its italic for emphasis) ·
> **Body & UI: Inter** (neutral grotesk, weights 300/400/500). Premium-magazine feel that
> pairs cleanly with the monochrome palette. [[Page - My Beloved Father]] and [[Page - Blog]]
> lean harder on Fraunces; UI chrome stays Inter.

- **Hierarchy:** few sizes, lots of contrast between them. Let whitespace do the work.

## Design tokens (locked)

```
/* Colour */
--bg:            #0A0A0A;   /* page base */
--surface:       #141414;   /* cards, raised panels */
--surface-2:     #101010;   /* alt card */
--text:          #F5F5F5;   /* primary */
--text-muted:    #A0A0A0;   /* meta, captions */
--text-faint:    #5A5A5A;   /* labels, eyebrows */
--hairline:      #262626;   /* borders, dividers */
/* no chromatic accent — monochrome */

/* Type */
--font-display:  'Fraunces', serif;
--font-body:     'Inter', sans-serif;
--w-light: 300; --w-reg: 400; --w-med: 500; --w-semi: 600;

/* Radius */
--r-sm: 2px;   /* buttons */
--r-md: 8px;   /* cards */
--r-lg: 10px;  /* panels */
```

> [!info] Motion tokens live in [[Tech Stack Decision#Animation]] (Framer Motion + Lenis).
> Suggested durations: entrance 0.6s / ease-out; page transition 0.5s cross-fade.

## Photography

Photo-led is core. The site lives or dies on image quality.
- Professional headshot (being taken)
- A consistent treatment: slightly desaturated, high-contrast, cinematic grade ties everything together
- Each major page anchored by one strong image

## Motion (the "Framer-style or better" part)

This is what makes it feel premium. Built with Framer Motion + a smooth-scroll library (see [[Tech Stack Decision#Animation]]).

- **Entrance:** elements fade/slide up gently as they enter the viewport
- **Scroll:** smooth, slightly weighted scrolling (Lenis) — the cinematic glide
- **Parallax:** subtle depth on hero images and section breaks
- **Page transitions:** smooth cross-fades / reveals between routes, not hard cuts
- **Hover:** restrained, intentional micro-interactions
- **Text:** key headlines can animate in word-by-word or line-by-line

> [!warning] Restraint
> Motion should feel expensive, not busy. If an animation calls attention to itself instead of the content, cut it. Respect `prefers-reduced-motion` for accessibility.

## Layout & spacing

- Wide, breathing margins
- A consistent vertical rhythm
- Mobile-first — most visitors are on phones; the cinematic feel must survive on a small screen

## Implemented component language — 2026-07-15

The code implementation now includes shared `Button`, `IconButton`, `TextLink`, `SectionLabel`,
`MediaPlaceholder`, `EditorialImage`, `Reveal`, `TextReveal`, `FilterButton`, and `FormField`
primitives. The private `/visual-lab` route stress-tests:

- Dark, soft-ivory light, and warmer Father registers.
- Long action copy and editorial headlines.
- 44–48px touch controls, visible focus, and native form/filter semantics.
- Missing personal photography through labelled, fixed-ratio placeholders with alt-text direction.
- Motion governed by the global reduced-motion preference.

Visible styling remains bespoke; native elements supply behaviour where an external accessibility
layer is unnecessary. The visual lab is excluded from indexing and is not part of the thirteen
public pages.

## The "different room" rule

[[Page - My Beloved Father]] should feel **quieter and more minimal** than the rest of the site — slower motion, more space, less UI. It's a different emotional register and the design should signal that the moment someone enters it.

---

Related: [[Vision & Positioning]] · [[Tech Stack Decision]] · [[Site Architecture]]
