# Claude Design Prompt — istiaqueahamed.com

Copy everything below the line into Claude (or Claude's design tool) to generate the website.
You have full creative freedom — treat the visual direction as a starting point, not a constraint.
If a different aesthetic serves the person better, propose it.

---

## The brief

Design and build a personal website for **Istiaque Ahamed**. This is not a CV or a portfolio in
the freelancer sense — it's the digital home of one whole person. The single most important goal:
when someone Googles "Istiaque Ahamed" or asks an AI assistant "who is Istiaque Ahamed?", **this
site is the definitive, authoritative answer.** It should make a stranger feel they've met a real,
multidimensional human in under a minute.

Build it as a polished, production-quality site. You may choose the framework, but Next.js (App
Router) + TypeScript + Tailwind is preferred, with tasteful motion. Make it responsive and
mobile-first — most visitors arrive on a phone.

## Who he is (use these facts; they are the source of truth)

- **Istiaque Ahamed** — a medical doctor who also builds things. Public framing:
  *"Medical doctor, public health professional, and healthcare systems builder."*
- **Training:** MBBS (Sylhet North East Medical College) · internship at BIRDEM · MPH (Macquarie
  University, Australia) · currently preparing for the AMC (Australian Medical Council).
- **Based** between **Bangladesh and Australia**.
- **What he builds:** StudyRise (studyrise.app — a study platform, React/Vite/Supabase/Vercel),
  My Care Pro (healthcare tooling for the Australian care sector), and hospital leadership/ops.
  The throughline is *"the doctor who actually builds."*
- **He also tells stories on camera** — documentaries.
- **Emotional core:** his late father, also a doctor, is the reason he chose medicine. This is the
  heart of the site and deserves its own quiet, reverent space.
- **Identity in one line:** one person uniting medicine, public health, building, and storytelling —
  not four separate résumés, but one coherent life.

## The 13 pages

1. **Home** — the cinematic first impression. Make a stranger want to know more in 30 seconds.
2. **About** — curious → convinced. Story-first; credentials in support, not leading.
3. **Feed** — one reverse-chronological stream of everything he publishes (blog, journal, father
   notes, projects, films), filterable by type. This is the "spine" people bookmark to follow him.
4. **Blog** — crafted long-form, four categories. The SEO engine.
5. **Journal** — rawer, shorter, honest "letters to the internet" (Thought / Read / Observation).
6. **My Beloved Father** — the emotional root. A separate, quieter, more minimal space — slower,
   more whitespace, less UI. It should feel like entering a different room the moment you arrive.
7. **Projects** — the doctor who builds: StudyRise and more, for a general (non-technical) audience.
8. **Work** — professional medical credentials and roles, laid out cleanly.
9. **Documentaries** — his films; a doctor who tells stories on camera.
10. **Course (AI in Healthcare)** — a future course for doctors; a minimal "coming soon" for now.
11. **Timeline** — the whole life arc in one scroll, Bangladesh → Australia.
12. **Bookshelf** — what he reads; intellectual depth with a human touch.
13. **Contact** — easy, confident ways to reach and follow him.

Keep the top navigation clean (5–7 items); group the rest under "Writing", "Work", "More", or the
footer. You decide the final nav.

## Visual direction (a starting point — change it if you can do better)

The current intent is **dark, cinematic, minimal, premium editorial** — "it should feel like a
film, not a brochure." Generous negative space, big confident type, photo-led, few elements per
screen, every scroll revealing something. A monochrome palette (off-white on near-black) was the
last decision, letting photography carry any color — but **you are free to reinterpret**: a lighter
editorial look, a warmer palette, a bolder type-driven system, or a single restrained accent are
all fair game if they better serve "one whole, serious, human person." Avoid anything that reads as
a generic corporate template or a freelancer-for-hire landing page.

If you keep it dark/editorial: pair a characterful serif for display with a clean neutral sans for
body. Use motion with restraint — gentle entrance reveals, smooth weighted scroll, subtle parallax
on hero images, smooth page transitions — never busy. Respect `prefers-reduced-motion`.

The Father page is the one fixed rule: whatever the overall system, that page must shift into a
quieter, more spacious, slower register than the rest of the site.

## Built for AI & search discoverability (important)

- Include valid **`Person` JSON-LD schema** with his name, roles, training (alumniOf), the things
  he's known for, and his projects/links. This is how AI assistants learn the canonical story.
- Strong, accurate meta tags and Open Graph on every page; semantic HTML; fast and accessible.
- Consider an FAQ-style section answering "who is Istiaque Ahamed?", "is he a doctor or a builder?",
  "where is he based?" — phrased as clean Q&A an assistant can lift directly.
- Every public fact must stay consistent across the whole site so the entity story never conflicts.

## Deliverables

- A working, responsive site with the Home page fully designed and built, and the other 12 pages
  scaffolded (real layout + placeholder content where his copy isn't final yet).
- Clean component structure so content can later be moved into a CMS (Sanity is planned).
- Note clearly anywhere you used placeholder copy or images (e.g. the professional headshot is still
  being taken) so they're easy to swap.

Make it beautiful, coherent, and unmistakably *his*. Surprise us if you have a better idea.
