---
title: Tech - Deployment & Domain
type: tech
status: in-progress
visibility: private
created: 2026-06-28
updated: 2026-07-16
tags: [project/website, tech, deployment]
---

# 🚀 Tech — Deployment & Domain

Back to [[00 - START HERE]] · Parent: [[Tech Stack Decision]]

> [!abstract] Current truth
> PR #9 is merged to `main`, and the direct Feed navigation with its Blog/Journal-only publishing
> model is deployed to Vercel Production. `www.istiaqueahamed.com` serves the current site. The
> remaining domain cleanup is to make the apex domain primary so it matches the site's canonical
> URLs.

## What is already connected

- Private GitHub repo: `Istiaque012/Istiaqueahamed`
- Vercel project: `istiaques-projects/istiaqueahamed`
- Vercel root directory: `site/`
- Local project link: present and valid
- Domain: `istiaqueahamed.com`, DNS managed at Namecheap
- Apex and `www` both reach Vercel with HTTPS
- Current live redirect: apex → `www`
- Intended canonical in the finished code: apex (`https://istiaqueahamed.com`)
- Merged PR: `https://github.com/Istiaque012/Istiaqueahamed/pull/9`
- Production deployment: `dpl_8CskJUszbiXThcMSqZXDvQD4n9eV`
- Production inspect URL: `https://vercel.com/istiaques-projects/istiaqueahamed/8CskJUszbiXThcMSqZXDvQD4n9eV`

> [!warning] Preferred host must be aligned
> In Vercel Domains, make `istiaqueahamed.com` the primary domain so `www` redirects to the apex.
> This matches every canonical URL, sitemap entry, RSS link, and structured-data URL in the build.

## Environment inventory — names only

Already present in Vercel Preview + Production:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN`
- `SANITY_REVALIDATE_SECRET`

Still due when the related account is ready:

- `GOOGLE_SITE_VERIFICATION`
- `CONTACT_FORM_ENABLED`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Never store their values in this wiki, git, Studio, screenshots, or chat.

## Analytics and performance monitoring

The finished code includes Vercel Web Analytics and Speed Insights in the root layout. After the
new production deployment, open the Vercel project and enable both dashboard products. No Google
Analytics integration is needed for the initial launch.

## Production deployment completed — 2026-07-16

The latest release was deployed with Vercel CLI from the linked repository root. The production
build generated all 26 Next.js routes and Vercel marked deployment
`dpl_8CskJUszbiXThcMSqZXDvQD4n9eV` `READY`.

Basic HTTP smoke test passed on:

- All thirteen public pages: Home, About, Feed, Blog, Journal, Father, Projects, Work,
  Documentaries, Course, Timeline, Bookshelf, and Contact
- `robots.txt`
- `sitemap.xml`
- `feed.xml`
- `manifest.webmanifest`

The post-launch Feed release also passed live desktop and mobile browser checks, returned no
application console warnings or errors, and verified that Feed and RSS contain Blog and Journal
only.

## Remaining launch cleanup — simple order

1. Add the approved photos and launch writing in Studio, or consciously launch with the labelled
   placeholders listed in [[IMAGE-MANIFEST]].
2. In Vercel Domains, make the apex domain primary; verify `www` redirects to the apex.
3. Enable Web Analytics and Speed Insights.
4. Add the site in Google Search Console, copy its token into `GOOGLE_SITE_VERIFICATION`, redeploy,
   verify, and submit `https://istiaqueahamed.com/sitemap.xml`.
5. Complete a human content review using [[Website Owner Guide]] after approved photography and
   launch writing are published.

If Vercel asks for DNS changes, copy the exact record it displays into Namecheap Advanced DNS.
Do not guess a CNAME value: Vercel can assign a project-specific record. DNS changes can take time
to propagate, and existing mail-related MX/TXT records must not be removed.

## Current launch checklist

- [x] Vercel project linked with `site/` root
- [x] Namecheap DNS reaches Vercel
- [x] HTTPS active on apex and `www`
- [x] Sanity public variables and preview/revalidation secrets present in Preview + Production
- [x] OG image, favicons, web manifest, 404, robots, sitemap, RSS, and structured data built
- [x] Vercel Web Analytics and Speed Insights code installed
- [x] Search Console verification code path built
- [x] Finished branch pushed to GitHub
- [x] PR #9 opened and merged to `main`
- [x] Current build deployed to Production
- [x] Basic production HTTP smoke test passed
- [x] Human phone/desktop production visual review passed for the Feed release
- [ ] Apex chosen as the primary Vercel domain
- [ ] Contact delivery variables configured and real inbox test passed
- [ ] Vercel Analytics and Speed Insights enabled in the dashboard
- [ ] Google Search Console verified and sitemap submitted

## Rollback

If a new production deployment is visibly broken, open Vercel → Deployments, select the last known
good Production deployment, and use **Promote to Production**. Do not delete the new deployment;
keep it for diagnosis. Sanity content is separate, so a code rollback does not erase writing.

---

Related: [[Tech Stack Decision]] · [[Tech - Sanity CMS Setup]] · [[Website Owner Guide]]
