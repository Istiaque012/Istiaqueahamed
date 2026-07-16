---
title: Website Owner Guide
type: reference
status: done
visibility: private
created: 2026-07-15
updated: 2026-07-16
tags: [project/website, handover, publishing, sanity]
---

# 🧭 Website Owner Guide

Back to [[00 - START HERE]]

> [!abstract] The simple version
> The website is built. To change words, add photos, or publish writing, open `/studio`. You do not
> need to touch the code. Draft first, look at Preview, then press Publish only when it is ready.

## The two places you use

1. **Your website:** `https://istiaqueahamed.com`
2. **Your editing room:** `https://istiaqueahamed.com/studio`

Sign in to Studio with the Sanity/GitHub account already connected to the project.

## Publish a Blog post, Journal entry, or Father piece

1. Open `/studio` and choose **Blog & Journal** or **Father**.
2. Press the create button and choose the ready-made type, such as **Blog post — Opinion**,
   **Journal entry — Thought**, or **Father piece — Note**.
3. Add the title, press **Generate** beside the slug if shown, add the date, and write the body.
4. Add an image only if it improves the piece. Always fill in its **alt text**.
5. Open **Preview** and read the page as a visitor would.
6. Press **Publish**. A saved draft is private; only a published item appears publicly.

What happens automatically:

| You publish | Where it appears |
|---|---|
| Blog post | Blog, Feed, RSS, and Home's latest Feed section |
| Journal entry | Journal, Feed, RSS, and Home's latest Feed section |
| Father piece | Father page |
| Project | Projects |
| Film | Documentaries |
| Timeline event | Timeline |
| Book | Bookshelf |

You never create a Feed item. Publishing a Blog post or Journal entry updates Feed and RSS
automatically. **Feed preview** in Studio is read-only.

## Put a Blog or Journal item in the large Home position

Open that item, turn on **Feature on Home**, check Preview, and Publish. If more than one item has
the switch on, the lower **Home feature rank** wins. Turn the switch off and Publish again to remove
it from the large Home position. It will still remain in its normal list.

## Change the main pages

In Studio, open **Website**:

- **Home** — main wording and Home photo slots
- **About** — story sections and lifestyle photos
- **Father opening** — opening words and family archive images
- **Work** — public work framing, optional work image, and approved CV
- **Course** — Coming later wording; an action appears only when status is Available
- **Contact** — welcome wording and the form on/off switch
- **Settings and socials** — canonical identity and social links

These are one-off pages. Edit the existing document; do not try to create another copy.

## Add a photo safely

1. Open the correct page or item in Studio.
2. Press **Upload**, choose the original high-quality image, and wait for it to finish.
3. Write plain alt text describing what is visible. Do not keyword-stuff it.
4. Use the crop/hotspot tool to keep the face or important subject inside the frame.
5. Add a caption only when the visitor needs context.
6. Check both desktop and phone Preview, then Publish.

Never upload patient information, private documents, API keys, or photographs you do not have
permission to publish.

## Edit, remove, or recover something

- **Edit:** open it, make the change, Preview, then Publish again.
- **Remove from public view:** choose **Unpublish**. The item returns to draft and disappears from
  the public lists.
- **Wrong photo or wording:** fix the draft and Publish again; no code change is needed.
- **Page looks unchanged:** wait about 30 seconds, refresh, and confirm that you pressed Publish,
  not only Save.

## Before every Publish

- The fact is true and approved for public use.
- No patient or private family information is exposed.
- The title, date, slug, and image alt text are filled in.
- Preview looks right on phone and desktop.
- External links open the intended page.
- Medical writing is educational and does not present personal medical advice.

## Things still due from Istiaque

The site is live; these need your material, accounts, or final approval.

### Still due after deployment

- Supply the approved portrait/headshot, Father photograph/archive scans, lifestyle/work/Australia
  photos, three clean StudyRise screenshots, and any approved book covers. See [[IMAGE-MANIFEST]].
- Approve or write the first Father piece, 2–3 Blog posts, 3–4 Journal entries, StudyRise personal
  build story, 1–2 film selections with context, and personal Bookshelf notes. See
  [[DECISIONS-NEEDED]] Part B.
- Connect private Contact delivery: Resend account/domain, recipient, sender, the four private
  variables, the Studio form switch, and one real inbox test. Never paste these secrets into Studio.
- In Vercel Domains, make `istiaqueahamed.com` the primary host so `www` redirects to it, matching
  the website's canonical URLs; then visually test all thirteen pages on the updated live domain.
- Enable Vercel Web Analytics and Speed Insights, verify Google Search Console, and submit
  `https://istiaqueahamed.com/sitemap.xml`.

### Safe to do after launch

- Use the same approved name, headshot, short bio, and website link on every social profile.
- Replace the current name/tagline social card with a photo-led version if desired.
- Ask a close friend for the optional three-word About detail.
- Add more writing, films, books, timeline events, or approved projects gradually.
- Review analytics, Search Console, links, contact delivery, accuracy, and image size once a month.

The exact five-minute routine, Sanity backup command, incident actions, environment-name inventory,
and future-enhancement list live in [[Website Operations & Maintenance]].

## If you need technical help

Send the helper this repository and say: “Read `AGENTS.md`, `index.md`, `BUILD-PLAN.md`, the last
two `log.md` entries, and [[Website Owner Guide]] before changing anything.” Do not share passwords
or secret values in chat or commit them to git.

---

Related: [[Tech - Sanity CMS Setup]] · [[Tech - Deployment & Domain]] ·
[[Website Operations & Maintenance]] · [[IMAGE-MANIFEST]] · [[DECISIONS-NEEDED]]
