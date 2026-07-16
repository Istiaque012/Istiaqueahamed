# Session 22 — responsive, accessibility, motion, and performance audit

Date: 2026-07-15

## Outcome

- All thirteen public routes score 100 for Lighthouse mobile accessibility and SEO after fixes.
- Key mobile performance scores: Home 90, StudyRise 92, Contact 94.
- Key mobile best-practices scores: Home 100, StudyRise 100, Contact 100.
- Key mobile layout shift: 0 on Home, StudyRise, and Contact.
- Key mobile total blocking time: 20–30 ms.
- Key mobile LCP: Home 3.6 s, StudyRise 3.3 s, Contact 3.0 s under local throttled Lighthouse.
- The production build, strict TypeScript, zero-warning lint, Sanity contracts, and Contact contract pass.

## Route matrix

| Route | Mobile accessibility | Mobile SEO |
|---|---:|---:|
| `/` | 100 | 100 |
| `/about` | 100 | 100 |
| `/feed` | 100 | 100 |
| `/blog` | 100 | 100 |
| `/journal` | 100 | 100 |
| `/father` | 100 | 100 |
| `/projects` | 100 | 100 |
| `/work` | 100 | 100 |
| `/documentaries` | 100 | 100 |
| `/course` | 100 | 100 |
| `/timeline` | 100 | 100 |
| `/bookshelf` | 100 | 100 |
| `/contact` | 100 | 100 |

StudyRise detail (`/projects/studyrise`) also scores 100 accessibility, 100 SEO, and 92 performance.

## Manual and code checks

- All public routes were reviewed across the earlier phone and desktop production sessions; this
  close-out rechecked the complete mobile route matrix and representative desktop browser state.
- No route has horizontal overflow or new console warnings/errors in the production preview.
- Skip link, landmarks, heading structure, control names, image alternatives, and form descriptions
  are present.
- Visible keyboard focus now includes links, buttons, fields, textareas, selects, and summaries.
- The mobile menu traps focus, closes on Escape, restores focus, and gives its nested Writing links
  a 44 px minimum target.
- Reduced-motion users bypass Lenis and transform-heavy reveals; CSS animations and transitions
  collapse; coarse-pointer devices also bypass smooth scrolling.
- Next Image sizing, intrinsic Portable Text images, priority hero media, lazy YouTube facade, local
  optimized fonts, Sanity query caching, and published-content pagination remain in place.

Raw Lighthouse JSON stays local and is intentionally ignored by git; this summary is the durable record.
