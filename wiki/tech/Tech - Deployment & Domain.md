---
title: Tech - Deployment & Domain
type: tech
status: in-progress
visibility: private
created: 2026-06-28
updated: 2026-07-15
tags: [project/website, tech, deployment]
---

# 🚀 Tech — Deployment & Domain

Back to [[00 - START HERE]] · Parent: [[Tech Stack Decision]]

> [!abstract] Current truth
> Vercel project `istiaqueahamed` is linked, Namecheap DNS reaches Vercel, and HTTPS works. The
> finished branch has not been pushed or promoted because repository rules require Istiaque to ask
> for a push. The public domain therefore still serves the earlier build.

## What is already connected

- Private GitHub repo: `Istiaque012/Istiaqueahamed`
- Vercel project: `istiaques-projects/istiaqueahamed`
- Vercel root directory: `site/`
- Local project link: present and valid
- Domain: `istiaqueahamed.com`, DNS managed at Namecheap
- Apex and `www` both reach Vercel with HTTPS
- Current live redirect: apex → `www`
- Intended canonical in the finished code: apex (`https://istiaqueahamed.com`)

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

## Final deployment — simple order

1. Add the approved photos and launch writing in Studio, or consciously launch with the labelled
   placeholders listed in [[IMAGE-MANIFEST]].
2. Merge the finished branch to `main` and push it when Istiaque approves.
3. Open the new Vercel Preview and check Home, Studio, Contact, StudyRise, one writing page, and a
   phone-sized view.
4. Confirm the environment names above for both Preview and Production.
5. Promote/deploy `main` to Production.
6. In Vercel Domains, make the apex domain primary; verify `www` redirects to the apex.
7. Enable Web Analytics and Speed Insights.
8. Add the site in Google Search Console, copy its token into `GOOGLE_SITE_VERIFICATION`, redeploy,
   verify, and submit `https://istiaqueahamed.com/sitemap.xml`.
9. Complete the production smoke test in [[Website Owner Guide]].

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
- [ ] Finished branch merged/pushed and new Preview approved
- [ ] Current build deployed to Production
- [ ] Apex chosen as the primary Vercel domain
- [ ] Contact delivery variables configured and real inbox test passed
- [ ] Vercel Analytics and Speed Insights enabled in the dashboard
- [ ] Google Search Console verified and sitemap submitted
- [ ] Thirteen-route production smoke test passed

## Rollback

If a new production deployment is visibly broken, open Vercel → Deployments, select the last known
good Production deployment, and use **Promote to Production**. Do not delete the new deployment;
keep it for diagnosis. Sanity content is separate, so a code rollback does not erase writing.

---

Related: [[Tech Stack Decision]] · [[Tech - Sanity CMS Setup]] · [[Website Owner Guide]] ·
[[Build Roadmap]]
