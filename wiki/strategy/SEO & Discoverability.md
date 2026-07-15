---
title: SEO & Discoverability
type: strategy
status: done
visibility: mixed
created: 2026-06-28
updated: 2026-07-15
tags: [project/website, strategy, seo]
---

# 🔍 SEO & Discoverability

Back to [[00 - START HERE]]

> [!abstract] Goal
> When anyone searches "Istiaque Ahamed" on Google — or asks an AI assistant who he is — this site is the answer, and it owns the top results.

---

## The key insight: entity SEO, not page SEO

Google doesn't rank a personal name the way it ranks a product. It builds an **entity** — an understanding of *who you are*, connected across the whole web. The job is to make Google (and AI search) confident that "Istiaque Ahamed" = this specific medical doctor, public health professional, and healthcare systems builder, with these confirmed roles and links.

This is done by being **consistent everywhere** and giving search engines **structured signals**.

---

## On-site technical checklist

- [x] **Person + WebSite schema (JSON-LD)** site-wide, using only confirmed identity facts and canonical `sameAs` profiles
- [x] **Name in the domain** — istiaqueahamed.com
- [x] **Unique page titles and descriptions** across all thirteen public routes
- [x] **Open Graph + Twitter card tags** so shares on WhatsApp/LinkedIn/X look intentional
- [x] **Custom OG image** with name and tagline; an approved personal photo can be added later
- [x] **Clean URLs** — istiaqueahamed.com/about, /journal, /projects
- [x] **Sitemap.xml + robots.txt**, excluding Studio, API routes, drafts, and private material
- [x] **AI-readable `/llms.txt`** with the confirmed identity and public-route map
- [x] **Structured data** for Breadcrumbs, Articles, Videos, Books, and Projects where relevant
- [x] **Alt-text fields and accessible image fallbacks** throughout the publishing system
- [x] **Canonical tags** so there is one authoritative URL per page

## Off-site / entity consistency

- [ ] Same **name, photo, and bio** across YouTube, Instagram, LinkedIn, X, Facebook (see [[Social Links]])
- [ ] Every social profile **links back** to istiaqueahamed.com
- [x] Use **rel="me"** links from the site to socials to reinforce the entity
- [ ] Claim/optimise **LinkedIn** — it almost always ranks for a name
- [ ] Over time: guest posts, interviews, mentions that link back (backlinks build authority)

## AI search visibility

AI assistants pull from structured, well-linked, consistent content. The same things that help Google help AI:
- Clear, factual **About** content using the confirmed public framing
- Person and WebSite schema, plus page-specific structured data
- Consistent cross-web identity and canonical social links
- An explicit `/llms.txt` summary and crawlable sitemap
- Real, original writing on the [[Page - Blog]] (depth signals expertise)

## Content depth = authority

Search rewards depth and consistency. The [[Content Strategy]] of regular blog + journal writing isn't just for readers — it's what makes the site an authority on the topics tied to his name. A few genuinely strong long posts beat many shallow ones.

## Measurement

- [ ] **Google Search Console** — verify the domain, watch indexing + name queries
- [ ] **Vercel Analytics** — enable during launch setup
- [ ] Check monthly: search "Istiaque Ahamed" in an incognito window, see what ranks

---

Related: [[Content Strategy]] · [[Tech Stack Decision]] · [[Social Links]]
