---
title: Tech Stack Decision
type: tech
created: 2026-06-28
updated: 2026-07-15
status: done
visibility: private
tags: [project/website, tech, decision]
---

# 🧱 Tech Stack Decision

Back to [[00 - START HERE]]

> [!abstract] The recommendation in one line
> **Next.js + TypeScript + Tailwind + Framer Motion + Lenis, content in Sanity, hosted on Vercel, domain istiaqueahamed.com.** This is the best balance of cinematic design freedom, a clean writing experience, fast performance, strong SEO, and near-zero running cost.

---

## The full stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js** (App Router) | Industry standard for fast, SEO-friendly sites; great DX; native Vercel deploy |
| Language | **TypeScript** | Type safety; fewer bugs; matches modern best practice |
| Styling | **Tailwind CSS** | Fast, consistent styling; pairs perfectly with a custom design system |
| Animation | **Framer Motion** + **Lenis** | The cinematic, Framer-style motion you want; Lenis gives weighted smooth scroll |
| CMS | **Sanity** | Best-in-class writing experience; you publish without touching code |
| Hosting | **Vercel** | Free tier, instant deploys, global edge, made by the Next.js team |
| Forms | **Resend** or **Formspree** | Simple contact form handling without a backend server |
| Analytics | **Vercel Analytics** + **Google Search Console** | Traffic + search visibility |
| SEO | Next.js Metadata API + **JSON-LD Person schema** | Owns your name in search (see [[SEO & Discoverability]]) |
| Images | `next/image` + **Sanity image CDN** | Auto-optimised, fast-loading photography |

## Foundation baseline — 2026-07-15

- **Next.js 16.2.10**, **React 19.2.7**, and strict TypeScript.
- **Sanity 6.5.0** with `next-sanity` 13.1.2, aligned before the authoring work in
  [[Tech - Sanity CMS Setup]].
- Node.js **22.12 or newer** is required by the current Studio toolchain.
- `npm run quality` is the one repeatable handoff gate: strict typecheck, zero-warning ESLint, then
  a production build.
- Public Sanity connection values have validated safe defaults; any future preview token remains
  server-only and is documented in the tracked `.env.example`.
- Route and global error boundaries preserve the monochrome editorial register on failure.
- The 2026-07-15 production audit reports **zero high or critical findings**. Fourteen moderate
  upstream/transitive findings remain in Next/Sanity tooling and are recorded for dependency
  review rather than “fixed” with unsafe downgrades.

---

## The big decision: which CMS?

You'll write here regularly, and you're not going to be in code every day. So the CMS choice matters more than anything else. I evaluated the four serious 2026 options.

### Sanity ✅ (recommended)
- **Best-in-class editor** — the Studio is the most polished writing/publishing interface of the options; non-technical publishing is effortless.
- **Portable Text** — rich content with inline components, perfect for blog + journal + father essays.
- **Built-in image CDN** — uploads are auto-optimised and fast, which matters for a photo-led site.
- **Generous free tier**, then ~$15/editor/mo if you ever exceed it (you won't, solo).
- **Mature Next.js integration** (`next-sanity`, visual editing, draft previews).
- Trade-off: content lives on Sanity's hosted "content lake" (some lock-in), and there are metered limits on the free tier — fine for a personal site.

### Payload CMS (strong alternative)
- Open-source, **self-hosted**, **you own the data** in your own Postgres, MIT-licensed (de-risked by Figma's 2025 acquisition).
- TypeScript-native; admin runs inside the Next.js app (no external API seam).
- Trade-off: **you run the database and stay on top of security patches** (a critical SQL-injection CVE was disclosed and patched in 2025–26). More operational burden than you want for a personal site. Admin is more developer-facing than Sanity's.

### Strapi (not chosen)
- Free, open-source, self-hosted. But editor feels like a form builder, not a publishing tool; rich text is weaker. Adds a separate server to run.

### Contentful (not chosen)
- Enterprise-grade but **removed its free community tier**; entry pricing is steep ($300+/mo at scale). Overkill and overpriced for one person.

> [!success] Decision
> **Sanity.** For a content-heavy, photo-led personal site written by one busy non-developer, the polished editor + hosted image CDN + zero database ops win clearly. Payload would be the pick only if data-ownership/self-hosting were a hard requirement — they aren't here.

---

## Why not WordPress (revisited)

WordPress would launch faster, but it fights you on a bold, bespoke, animated design — exactly the thing you most want. The dark-luxury, Framer-motion aesthetic needs the design freedom of Next.js. You build it once and write in it forever. See the original comparison reasoning in [[Vision & Positioning]].

---

## A note on StudyRise's stack

StudyRise uses React + Vite + Supabase. This website using Sanity instead of Supabase is the right call — they're different jobs. Supabase is an app database (great for StudyRise's logged-in app); Sanity is a content/editorial CMS (great for writing). No need to force consistency; use the best tool for each.

> [!note] Optional future link
> If you later want the website and StudyRise to share data (e.g. show live StudyRise stats on [[Page - Projects]]), Supabase can feed the Next.js site via its API. Not needed for launch.

---

## Cost summary

| Item | Cost |
|---|---|
| Domain (istiaqueahamed.com) | ~$10–15/year |
| Vercel hosting | Free (Hobby tier) |
| Sanity | Free tier |
| Framer Motion / Lenis / Tailwind | Free (open source) |
| **Total to run** | **≈ domain cost only** |

---

Related: [[Tech - Sanity CMS Setup]] · [[Tech - Deployment & Domain]] · [[Design System]] · [[Build Roadmap]]
