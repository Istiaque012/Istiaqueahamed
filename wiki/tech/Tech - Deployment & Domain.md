---
title: Tech - Deployment & Domain
type: tech
created: 2026-06-28
tags: [project/website, tech, deployment]
---

# 🚀 Tech — Deployment & Domain

Back to [[00 - START HERE]] · Parent: [[Tech Stack Decision]]

---

## Domain

- **istiaqueahamed.com** — already secured ✅
- Name-in-domain is a strong SEO signal (see [[SEO & Discoverability]])
- Point DNS to Vercel when ready to go live

## Hosting: Vercel

- Free **Hobby** tier is plenty for a personal site
- Every push to the Git repo auto-deploys
- Preview deployments for every change before it goes live
- Global edge network = fast everywhere, including Bangladesh and Australia
- Built-in analytics available

## Repo & workflow

- Code lives in a **GitHub** repo
- `main` branch = production (live site)
- Sanity Studio can be hosted at `/studio` on the same domain, or on Sanity's hosting

## Environments

| Environment | URL | Purpose |
|---|---|---|
| Production | istiaqueahamed.com | Live site |
| Preview | auto Vercel URLs | Review changes before publishing |
| Local | localhost | Development |

## Pre-launch checklist

- [ ] Domain DNS pointed to Vercel
- [ ] SSL/HTTPS active (automatic on Vercel)
- [ ] Sanity project connected with API tokens set as env vars
- [ ] Google Search Console verified
- [ ] Analytics live
- [ ] OG image + favicons in place
- [ ] 404 page styled
- [ ] Robots.txt + sitemap.xml generating

> [!note] Secrets
> API keys/tokens go in Vercel environment variables — never committed to the repo.

---

Related: [[Tech Stack Decision]] · [[Tech - Sanity CMS Setup]] · [[Build Roadmap]]
