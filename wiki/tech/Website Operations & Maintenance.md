---
title: Website Operations & Maintenance
type: tech
status: done
visibility: private
created: 2026-07-15
updated: 2026-07-15
tags: [project/website, operations, backup, monitoring, handover]
---

# 🛟 Website Operations & Maintenance

Back to [[00 - START HERE]] · Parent: [[Tech Stack Decision]]

> [!abstract] The maintenance promise
> Publishing happens in Studio. Code lives in private GitHub. Vercel runs the site. Back up Sanity
> after important content changes, check the five signals below monthly, and use rollback rather
> than making hurried production edits.

## What is backed up where

| Part | Normal home | Backup rule |
|---|---|---|
| Website code and wiki | Private GitHub repo | Push clean, reviewed commits after each approved change |
| Public and draft content | Sanity `production` dataset | Export monthly and after a major publishing batch |
| Uploaded images/files | Sanity asset CDN | Included in the normal dataset export unless `--no-assets` is used |
| Deployments | Vercel deployment history | Keep the last known good Production deployment for rollback |
| Secrets | Vercel/Sanity/Resend account settings | Record names only; use a password manager for values |

## Sanity backup

Ask a technical helper to run this from the `site/` folder, replacing the destination with a
private folder outside the git repository and adding the real date:

```sh
npx sanity datasets export production "/private/backup/folder/sanity-production-YYYY-MM-DD.tar.gz"
```

The export includes documents, drafts, and assets by default. Keep at least the newest three
exports. Never commit the archive to git because it can contain private drafts.

Restore is deliberately a helper-only action: first create or choose a safe target dataset, then
use `npx sanity datasets import`. Do not import over Production without checking the archive,
target dataset, and replacement mode.

## Five-minute monthly check

1. **Website:** open Home, one writing page, StudyRise, Contact, Studio, and a made-up URL for the
   404. Check once on phone and once on desktop.
2. **Contact:** send one real message and confirm it arrives. If it fails, turn the Contact form off
   in Studio while it is investigated.
3. **Search:** open Google Search Console; check indexing, sitemap status, manual actions, and the
   query “Istiaque Ahamed”.
4. **Health:** open Vercel Web Analytics and Speed Insights; look for a sudden traffic drop, a page
   with poor Core Web Vitals, or failed deployments.
5. **Accuracy:** check the bio, roles, social links, current projects, dates, and any medical claims.
   Correct the source wiki and public page together.

Then create a fresh Sanity export if important content changed.

## Every three months

- Ask a technical helper to review dependency updates and the current security audit. Never accept
  an automated downgrade or `--force` fix without a clean `npm run quality` pass and browser review.
- Check broken external links, social profile consistency, image file sizes, and unused drafts.
- Confirm the domain renewal, Sanity account access, GitHub access, Vercel access, and recovery
  methods are current.
- Review the deferred enhancements in [[BUILD-PLAN]] and build only what has a real use.

## Incident shortcuts

- **Website broken after a deploy:** promote the last known good Vercel Production deployment.
- **One piece of content is wrong:** Unpublish it in Studio, correct it, Preview, then Publish again.
- **Contact delivery fails:** turn off **Enable contact form** in Studio; visitors will see the safe
  social-link fallback.
- **Secret exposed:** revoke/rotate it at the provider, update Vercel, redeploy, and remove it from
  git history with expert help if it was committed.
- **Domain fails:** check Vercel Domains, Namecheap Advanced DNS, certificate status, and the primary
  host. Preserve mail-related DNS records.

## Environment names — never values

Public connection:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

Private server settings:

- `SANITY_API_READ_TOKEN`
- `SANITY_REVALIDATE_SECRET`
- `GOOGLE_SITE_VERIFICATION`
- `CONTACT_FORM_ENABLED`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

## Future enhancements — only when useful

- Newsletter
- Additional approved projects
- Course registration/payment after the offer exists
- Shared persistent rate limiting if Contact traffic needs it
- Photo-led OG card after the canonical headshot is approved
- AI-assisted Studio drafts only after privacy, cost, and review rules are agreed
- WebGL/GSAP only for a specific scene that Motion cannot express cleanly

---

Related: [[Website Owner Guide]] · [[Tech - Deployment & Domain]] ·
[[Tech - Sanity CMS Setup]] · [[SEO & Discoverability]]
