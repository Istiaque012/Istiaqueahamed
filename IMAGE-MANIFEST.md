---
title: Image Manifest
type: system
status: in-progress
visibility: private
updated: 2026-07-14
tags: [project/website, planning, images]
---

# 📸 IMAGE MANIFEST

> [!abstract] Every image the design needs
> Istiaque shoots/supplies these later; the build never waits on them. Each ships as a labelled
> dark placeholder at the exact aspect ratio, so the real image is a drop-in swap. Treatment for
> all photos per [[Design System]]: slightly desaturated, high-contrast, cinematic monochrome
> grade. Alt text always includes "Istiaque Ahamed" where natural (SEO).

**Status legend:** `placeholder` (built, awaiting photo) · `supplied` · `live` ·
`generated-placeholder` · `not-needed`

| # | Image | Page / slot | Aspect | Alt text | Status |
|---|---|---|---|---|---|
| 1 | Hero portrait — cinematic, dark, can be moody/partial | Home · hero | 4:5 (desktop crop 16:9 tolerant) | Istiaque Ahamed — medical doctor and healthcare systems builder | generated-placeholder — architectural visual in v1; portrait still needed |
| 2 | Professional headshot (the canonical one, reused on socials) | About · intro block; OG fallback | 1:1 | Portrait of Dr. Istiaque Ahamed | placeholder |
| 3 | Natural-light human photo (desk/writing or candid) | About · "human side" block | 3:2 | Istiaque Ahamed writing at his desk | placeholder |
| 4 | Hospital / work environment photo | Work · header (optional) and About | 16:9 | Istiaque Ahamed at work in the hospital | placeholder |
| 5 | Father's photograph (the one photo that matters most) | My Beloved Father · opening | 4:5 | Istiaque Ahamed's father | placeholder |
| 6 | Father gallery — 2–4 restrained images (family, era photos) | My Beloved Father · gallery | mixed, displayed 3:2 | — (write per photo) | placeholder |
| 7 | StudyRise screenshots — Today dashboard, study plan, analytics (3–5 clean captures) | Projects · featured; Home projects card | 16:10 (browser frame) | StudyRise study-planning app by Istiaque Ahamed — Today dashboard | supplied — official OG preview used in v1; detailed captures still needed later |
| 8 | My Care Pro visual | Omitted from initial public site | — | — | not-needed |
| 9 | Blog cover images — 1 per post, editorial | Blog · per post (via Sanity) | 16:9 | per post | placeholder |
| 10 | Documentary thumbnails (pulled from YouTube; custom if desired) | Documentaries · grid | 16:9 | per film | auto from YouTube |
| 11 | Book covers × 5 starters | Bookshelf · grid | 2:3 | "<Title> — on Istiaque Ahamed's bookshelf" | sourced by Claude (public covers) |
| 12 | Travel / Australia photo | Timeline · Australia section break; About | 16:9 | Istiaque Ahamed in Australia | placeholder |
| 13 | Fitness photo (optional, tasteful) | About · human side / Timeline | 4:5 | Istiaque Ahamed — training | placeholder |
| 14 | OG share image — name + photo + tagline composition | Site-wide meta | 1200×630 (1.91:1) | — | generated-placeholder — bespoke architectural card wired in v1; replace after #2 |
| 15 | Favicon / monogram ("IA" in Fraunces) | Site chrome | 1:1 (SVG + 512px) | — | Claude builds (no photo needed) |

## Shooting notes (for the photo session)

- One session can cover #1–#4, #12, #13: portrait, headshot, desk, hospital, plus lifestyle.
- Shoot in good directional light; the monochrome cinematic grade is applied in build, so
  colour originals are fine — prioritise contrast and expression.
- Multiple crops: shoot wider than needed; hero (#1) needs headroom for the oversized headline.
- The father photo (#5): highest-resolution scan available; we handle restoration/grade gently.

---

Related: [BUILD-PLAN.md](BUILD-PLAN.md) · [[Design System]] · [[Page - My Beloved Father]]
