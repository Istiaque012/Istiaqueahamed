# istiaqueahamed.com

Personal site for **Istiaque Ahamed** — medical doctor, public health professional, healthcare
systems builder. Dark, cinematic, monochrome. Built from the locked design system in
`../wiki/site/Design System.md` and the Home section map in `../wiki/site/Site Architecture.md`.

## Stack

- **Next.js 16.2.10** (App Router) + **React 19** + strict **TypeScript**
- **Tailwind CSS** — design tokens mirrored in `tailwind.config.ts` + `app/globals.css`
- **Framer Motion** — entrance reveals + (respects `prefers-reduced-motion`)
- **Lenis** — weighted smooth-scroll (`components/SmoothScroll.tsx`)
- **next/font/google** — Fraunces (display) + Inter (body)

## Run locally

```bash
cd site
npm install
npm run dev      # http://localhost:3000
```

Public Sanity defaults are committed and validated. Copy `.env.example` to `.env.local` only when
you need local overrides or the server-only draft-preview token.

```bash
npm run build    # production build
npm start        # serve the build
```

Run the complete repeatable quality gate before every handoff or deployment:

```bash
npm run quality  # strict types → ESLint → production build
```

> Note: `next/font/google` downloads Fraunces & Inter at build time, so the first build needs
> internet access. (A sandboxed/offline environment will fail at the font-fetch step only.)

## Structure

```
app/
  layout.tsx        root layout — fonts, metadata, Person JSON-LD, providers
  page.tsx          Home — assembles the sections
  globals.css       locked design tokens + base styles
components/
  Nav · Hero · Institutions · About · Projects · Faq · Footer
  Reveal.tsx        scroll-entrance wrapper
  SmoothScroll.tsx  Lenis provider
  Providers.tsx     client boundary (MotionConfig + SmoothScroll)
lib/
  content.ts        Home copy/data (keep in lockstep with raw/Discovery Answers.md)
  person.ts         Person schema (JSON-LD) for Google + AI search
```

## Deploy

Push to GitHub and import the `site/` directory into Vercel (root directory = `site`), or run a
direct deploy from this folder. Domain `istiaqueahamed.com` is secured.

## TODO before launch

- Professional headshot (monochrome grade) → replace placeholders in `About` / `Projects`
- Confirm final nav items and social links (`sameAs` in `lib/person.ts`)
- Build remaining pages (About, Father, Projects, Timeline, …) per `../wiki`
- Wire Sanity CMS for content-managed pages (see `../wiki/tech/Tech - Sanity CMS Setup.md`)
