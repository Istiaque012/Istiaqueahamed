---
title: SEO & Discoverability
type: strategy
created: 2026-06-28
tags: [project/website, strategy, seo]
---

# 🔍 SEO & Discoverability

Back to [[00 - START HERE]]

> [!abstract] Goal
> When anyone searches "Istiaque Ahamed" on Google — or asks an AI assistant who he is — this site is the answer, and it owns the top results.

---

## The key insight: entity SEO, not page SEO

Google doesn't rank a personal name the way it ranks a product. It builds an **entity** — a understanding of *who you are*, connected across the whole web. The job is to make Google (and AI search) confident that "Istiaque Ahamed" = this specific doctor + founder + writer, with this photo, these roles, these links.

This is done by being **consistent everywhere** and giving search engines **structured signals**.

---

## On-site technical checklist

- [ ] **Person schema (JSON-LD)** on the home and [[Page - About]] pages — name, job titles, photo, employer(s), alma mater (Sylhet North East Medical College, Macquarie University), sameAs links to every social profile
- [ ] **Name in the domain** ✅ (istiaqueahamed.com)
- [ ] **Name early in every page `<title>`** and meta description
- [ ] **Unique meta description** per page, written with name + role
- [ ] **Open Graph + Twitter card tags** so shares on WhatsApp/LinkedIn/X look intentional
- [ ] **Custom OG image** with name, photo, tagline
- [ ] **Clean URLs** — istiaqueahamed.com/about, /journal, /projects
- [ ] **Sitemap.xml + robots.txt** (Next.js generates these)
- [ ] **Fast load + mobile-first** (the stack handles this — see [[Tech Stack Decision]])
- [ ] **Alt text on every image**, including name where natural
- [ ] **Canonical tags** so there's one authoritative URL per page

## Off-site / entity consistency

- [ ] Same **name, photo, and bio** across YouTube, Instagram, LinkedIn, X, Facebook (see [[Social Links]])
- [ ] Every social profile **links back** to istiaqueahamed.com
- [ ] Use **rel="me"** links from the site to socials to reinforce the entity
- [ ] Claim/optimise **LinkedIn** — it almost always ranks for a name
- [ ] Over time: guest posts, interviews, mentions that link back (backlinks build authority)

## AI search visibility

AI assistants pull from structured, well-linked, consistent content. The same things that help Google help AI:
- Clear, factual **About** content written in natural language ("Istiaque Ahamed is a doctor and founder based between Bangladesh and Australia…")
- Person schema
- Consistent cross-web identity
- Real, original writing on the [[Page - Blog]] (depth signals expertise)

## Content depth = authority

Search rewards depth and consistency. The [[Content Strategy]] of regular blog + journal writing isn't just for readers — it's what makes the site an authority on the topics tied to his name. A few genuinely strong long posts beat many shallow ones.

## Measurement

- [ ] **Google Search Console** — verify the domain, watch indexing + name queries
- [ ] **Vercel Analytics** or **Google Analytics** — traffic and sources
- [ ] Check monthly: search "Istiaque Ahamed" in an incognito window, see what ranks

---

Related: [[Content Strategy]] · [[Tech Stack Decision]] · [[Social Links]]
