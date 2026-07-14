---
title: Creative Direction - Full Freedom
type: strategy
status: proposed
visibility: private
created: 2026-07-15
updated: 2026-07-15
tags: [project/website, strategy, creative-direction]
---

# 🎬 Creative Direction — Full Freedom

Back to [[00 - START HERE]]

> [!abstract] The recommendation
> Keep the project's emotional core, factual discipline, technology, and confirmed navigation
> language. Shape all thirteen pages into one cinematic editorial portrait, using seven clear
> navigation entrances and a much stronger narrative sequence.

## The site I would make

Not a portfolio, online CV, or collection of interests. It would feel like an evolving digital
profile: part documentary opening, part personal archive, and part proof of work.

The central idea would be:

> **A doctor shaped by inheritance, interested in the systems around care, and willing to build
> the tools he thinks should exist.**

The site would reveal this through evidence rather than repeatedly listing identities. His father
explains the beginning, medical and public-health training establish the foundation, StudyRise
proves the builder claim, and the writing shows how he thinks.

## What stays from the existing plan

- The name-led hero and confirmed line: **Medicine, technology, and the life in between.**
- The public summary: **Doctor, healthcare leader, and founder working across Bangladesh and
  Australia.**
- **Father** as an unmistakable top-level destination at `/father`.
- StudyRise as the only featured launch project.
- Fraunces + Inter, restrained motion, strong editorial typography, and a dark cinematic base.
- The Next.js, Sanity, Vercel, structured-data, and search foundations already built.
- The rule that detailed current job titles and private project concepts are not published.

## What changes

### Seven clear entrances, thirteen complete pages

The confirmed navigation stays concise without reducing the eventual website. Seven top-level
entrances organise the complete thirteen-page roadmap:

```
Home
├── About
├── Father
├── Writing
│   ├── Feed
│   ├── Blog
│   └── Journal
├── Projects
├── Work
└── Contact

Footer / in-page routes
├── Documentaries
├── Timeline
├── Bookshelf
└── Course
```

- **Writing** is the reader-friendly navigation group. It opens Feed, Blog, and Journal and
  defaults to Feed; it does not create a fourteenth page.
- **Documentaries, Timeline, Bookshelf, and Course** remain full pages reached from the footer,
  related content, and contextual links.
- The complete site is built session by session; pages may use honest minimal states until their
  real content is supplied, but none is removed from the roadmap.

### A story-led Home page

The Home page should unfold like an eight-scene profile:

1. **Presence** — a real portrait or restrained moving image, the name, tagline, public summary,
   and one action: *Enter the story*.
2. **Point of view** — lead with the strongest original idea in the documents: good healthcare is
   built through systems, communication, leadership, and details beyond the consultation room.
3. **Inheritance** — bring the Father moment forward. One archival photograph, two honest lines,
   and a clear doorway to **My Beloved Father**.
4. **Foundation** — a concise, visual education and life arc: medical school, BIRDEM, Macquarie,
   and the ongoing Bangladesh–Australia journey.
5. **Proof of building** — StudyRise shown as a real product story with interface imagery, the
   problem, the response, and links to the live product and GitHub.
6. **Current thinking** — three strong pieces from Writing, presented as editorial headlines
   rather than cards.
7. **A life in motion** — a photographic sequence across medicine, work, fitness, books,
   technology, Bangladesh, and Australia. This shows the whole person without another paragraph
   of labels.
8. **Open door** — a quiet contact invitation and social links.

The Father scene appears early because the site should explain *why* before cataloguing *what*.

## Visual direction

Call the style **cinematic editorial documentary**, not simply “ultra-modern.” Modernity comes
from composition, type, pacing, and interaction; it should not depend on fashionable effects.

- Real portraiture and personal archive images replace generic architectural imagery.
- Near-black and soft ivory remain the base, while photographs are allowed to bring restrained
  natural colour into the page.
- Sections are full-width scenes, not stacks of feature cards.
- Motion is used for pacing: image crossfades, masked text reveals, gentle scene transitions,
  and subtle shifts in scale. No constant movement.
- The Father page becomes warmer, quieter, and almost still. It keeps navigation minimal and
  reads like a private room made public with care.
- Mobile is treated as the primary cinematic format: tall portrait crops, decisive type sizes,
  and one focal idea per screen.

## Writing strategy

Visitors should not need to understand the CMS to navigate the writing. The Writing menu and
shared design language make the relationship clear: Blog is long-form, Journal is short-form,
and Feed is the complete chronology.

Use three reader-facing formats across the Writing family:

| Format | Purpose | Examples |
|---|---|---|
| Blog essays | Authority and depth | healthcare systems, medicine, technology |
| Journal notes | Short, personal continuity | books, discipline, Australia, observations |
| Films | Documentary storytelling | embedded films with a short personal context |

Father pieces remain their own category and their own room. They can appear selectively in the
Writing stream, but the site should never treat them as ordinary content inventory.

The initial content pillars are:

1. **Medicine beyond the consultation room** — systems, public health, leadership, patient trust.
2. **Doctors who build** — StudyRise, useful technology, AI, and practical problem solving.
3. **The life in between** — Bangladesh and Australia, preparation, discipline, faith, books,
   fitness, and becoming.

## Photography needed

The design should be completed around a small, deliberate set rather than waiting for a large
library:

- One defining portrait for Home.
- One natural portrait for About.
- One work or desk image showing concentration rather than posing.
- Two to four family/archive photographs for Father, selected by Istiaque.
- Three clean StudyRise product views.
- A handful of honest life images from Bangladesh and Australia.

## UI and interaction library recommendation

The site should have a custom visual language rather than inherit the appearance of a complete UI
kit. Use libraries for behaviour and motion, then design the visible layer specifically for this
site.

- **[Motion](https://motion.dev/docs/react)** — keep as the main animation system for reveals,
  image transitions, layout changes, and restrained scroll-linked storytelling. Its reduced-motion
  support should govern every non-essential animation.
- **[Lenis](https://www.lenis.dev/)** — keep for subtle, consistent smooth scrolling. Tune it
  lightly so the site still feels immediate on mobile.
- **[Base UI](https://base-ui.com/react/overview/about)** — preferred unstyled interaction layer
  for accessible menus, dialogs, filters, tooltips, and form controls. It supplies keyboard and
  focus behaviour without imposing a visual theme.
- **[Motion Primitives](https://motion-primitives.com/)** — use as a pattern library, not a design
  system. Adapt only a few suitable ideas such as text reveals, image transitions, or an animated
  disclosure.
- **[shadcn/ui](https://ui.shadcn.com/docs)** — useful as a source of open component code for the
  contact form or internal Studio-adjacent tools, but do not apply its default visual language
  across the public site.
- **[GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)** — reserve for one
  genuinely complex, art-directed scroll sequence that Motion cannot express cleanly. Do not add
  a second animation system merely for ordinary fades or parallax.

Recommended production stack: **custom editorial components + Base UI behaviour + Motion +
Lenis**, with Motion Primitives used selectively for references. The quality gain should come
primarily from composition, typography, photography, and pacing rather than the number of installed
libraries.

## Relationship to the current landing page

The existing landing page is a sound visual prototype: its typography, responsiveness, navigation,
and editorial contrast are worth keeping. The generic architectural hero is only a placeholder,
however, and the current page still explains the identity in categories more than it reveals the
person through story and evidence.

The better path is an evolution, not a rebuild: replace the hero with personal photography,
reorder the narrative, organise the Writing family clearly, bring Father forward, and let
StudyRise carry more specific proof.

## Recommended production order

1. Recut Home around the eight-scene narrative using temporary personal-photo slots.
2. Build About and Father so the emotional and factual core is complete.
3. Build the shared Writing navigation, Blog, Journal, and Feed as connected but distinct
   experiences.
4. Build the full StudyRise project story, Work, and Documentaries.
5. Build Timeline, Bookshelf, Course, and Contact with honest content states.
6. Add photography, structured search signals, final mobile polish, content seeding, and launch.

---

Related: [[Vision & Positioning]] · [[Audience & Goals]] · [[Site Architecture]] ·
[[Design System]] · [[Content Strategy]] · [[Page - Home]]
