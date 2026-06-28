---
title: Design System
type: design
created: 2026-06-28
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
| Accent | **one** restrained accent | links, highlights, key CTAs |

> [!note] Pick ONE accent
> Dark-luxury sites work best with a single restrained accent (a warm gold/amber, a deep clay, or a cool electric tone). Hold it back so it carries meaning instead of becoming wallpaper. Decide the exact accent when we lock the design.

## Typography

- **Display/headings:** a characterful serif or a refined grotesk. Big, confident, sentence case.
- **Body:** a clean, readable sans or a warm serif for long reads.
- **Pairing idea:** editorial serif headings + neutral sans body (premium magazine feel). The [[Page - My Beloved Father]] and [[Page - Blog]] can lean more serif/editorial; UI chrome stays sans.
- **Hierarchy:** few sizes, lots of contrast between them. Let whitespace do the work.

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

## The "different room" rule

[[Page - My Beloved Father]] should feel **quieter and more minimal** than the rest of the site — slower motion, more space, less UI. It's a different emotional register and the design should signal that the moment someone enters it.

---

Related: [[Vision & Positioning]] · [[Tech Stack Decision]] · [[Site Architecture]]
