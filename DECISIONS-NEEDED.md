---
title: Decisions Needed
type: system
status: in-progress
visibility: private
updated: 2026-07-14
tags: [project/website, planning, decisions]
---

# ❓ DECISIONS NEEDED

> [!abstract] Everything Claude needs from Istiaque, in one place
> Two lists: **Decisions (D)** — the ⚠️ unconfirmed items and build choices; **Content (C)** —
> writing only Istiaque can do. Answer inline under each prompt, in any order. Anything
> unanswered ships as a clearly neutral placeholder — never as published fact.
> **Build status:** no decision blocks the local landing-page build. Sanity sign-in and external
> deployment access are needed only when connecting live content and publishing previews.

---

## Part A — Decisions (⚠️ items + build choices)

### D1 · Sanity account — *needed by Chunk 1*
Create (or share access to) a Sanity account at sanity.io — free tier is fine. I need the project
ID + a token to wire the CMS.
> **Answer:** ✅ Resolved 2026-07-03 — project `gtq6sx9w`, dataset `production`. Schemas + embedded
> `/studio` built in `site/`. Still needed for content seeding & any draft/preview: run `sanity login`
> (interactive) and, if drafts are wanted, create a Viewer API token → `SANITY_API_READ_TOKEN`.

### D2 · GitHub + Vercel + DNS access — *needed by Chunk 2*
Confirm: deploy from the existing private repo (`Istiaque012/Istiaqueahamed`, root = `site/`)?
And where is istiaqueahamed.com's DNS managed (registrar name), so we can point it to Vercel?
> **Answer:** ✅ Resolved 2026-07-14 — deploy from the existing private repo
> `Istiaque012/Istiaqueahamed`, using `site/` as the Vercel root. DNS is managed at Namecheap.

### D3 · Final top-nav items — *needed by Chunk 3*
Nav should show 5–7 of the 13 pages. **Recommendation:** Home · About · Feed · Writing (Blog +
Journal) · Work & Building (Projects + Work + Documentaries) · Contact — Father, Timeline,
Bookshelf, Course reachable via footer + in-page links. OK, or adjust?
> **Answer:** ✅ Resolved 2026-07-14 — Home · About · Father · Writing · Projects · Work ·
> Contact. "Father" stays top-level for immediate visibility. "Writing" is the hub for Feed,
> Blog, and Journal; the remaining pages are reached through in-page links and the footer.

### D4 · Final tagline ⚠️ — *needed by Chunk 4 (placeholder OK until launch)*
Pick or remix one (from [[Page - Home]]):
1. "Doctor. Builder. Writer."
2. "Medicine, technology, and the life in between."
3. "A doctor building systems, products, and a life across two countries."
4. "Healing, building, and writing it all down."
5. "A doctor's son, building the future of care."

**Recommendation:** #2 — it captures the combination without listing roles, and reads well in an
OG image. Until decided, the hero ships the confirmed framing line: *"Medical doctor, public
health professional, and healthcare systems builder."*
> **Answer:** ✅ Resolved 2026-07-14 — "Medicine, technology, and the life in between."

### D5 · Public role wording ⚠️ — *needed by Chunk 10 (Work), used earlier on About*
Confirm the public one-liner for roles: *"Doctor, healthcare leader, and founder working across
Bangladesh and Australia."* — yes/no/edit? Also confirm each exact public title: RMO at CD Path &
Hospital · Director of an upcoming hospital in Bangladesh (name it publicly, or keep generic?) ·
Founder, StudyRise · Founder & Managing Director, My Care Pro (Australia).
> **Answer:** ✅ Resolved 2026-07-14 — use: "Doctor, healthcare leader, and founder working
> across Bangladesh and Australia." Do not publish the detailed titles RMO at CD Path &
> Hospital, Director of an upcoming hospital in Bangladesh, or Founder & Managing Director of
> My Care Pro Australia.

### D6 · Project links & status ⚠️ — *needed by Chunk 10*
- GitHub link(s) to show publicly? (URL or "none")
- StudyRise on any app store? (link or "web only")
- Which "other projects" appear publicly, and with what status: MedLink / hospital ops tools ·
  CD Path operational systems · smoking health-tracker idea? (Concepts can be listed as
  "Concept" or omitted — your call.)
> **Answer:** ✅ Resolved for the initial launch 2026-07-14 — show
> https://github.com/Istiaque012 and https://studyrise.app. Treat StudyRise as web-only. Omit
> the other project concepts from the initial public Projects page until Istiaque chooses to
> publish them.

### D7 · Timeline dates ⚠️ — *needed by Chunk 12*
Years for: MBBS start/finish · BIRDEM internship · MPH at Macquarie · StudyRise founded ·
My Care Pro founded. Plus any personal milestones you want on the timeline (birth year, school,
faith, fitness journey, first arrival in Australia…).
> **Answer:** ✅ Resolved 2026-07-14 — MBBS 2010–2015; BIRDEM internship 2015; MPH at
> Macquarie University 2019; My Care Pro founded 2023; StudyRise founded 2026. The My Care Pro
> date remains an internal fact unless Istiaque later chooses to include it publicly.

### D8 · Contact form + waitlist mechanism — *needed by Chunk 13*
**Recommendation:** Resend (free tier) for the contact form, and the same for course
register-interest (stored as emails to you; a real list tool can come later). OK? And should your
email address itself be public on the Contact page?
> **Answer:** Deferred 2026-07-14 — Contact should use a form and the email address should not be
> displayed publicly, but the form/waitlist service will be decided and connected later. The
> initial page can ship with a clearly disabled or coming-soon form state if needed.

### D9 · Analytics — *needed by Chunk 14*
**Recommendation:** Vercel Analytics (zero-config, private) now; Google Analytics only if you
want search-campaign depth later. GSC verification happens regardless. OK?
> **Answer:** ✅ Resolved 2026-07-14 — use Vercel Analytics now; add Google Search Console
> verification regardless. Google Analytics is not needed for the initial launch.

### D10 · "Three words a close friend would use" ⚠️ — *nice-to-have, no chunk blocked*
Ask a friend, literally. Used as a small human touch on About.
> **Answer:** Deferred 2026-07-14 — not needed for the initial landing page.

---

## Part B — Content to write (only you can write these)

Voice reminder from [[Content Strategy]]: one person talking to one person; never patient
details; no forced conclusions. Rough drafts are fine — I'll edit, you approve.

### C1 · About narrative — *needed by Chunk 15 (structure ships earlier with placeholders)*
The anchor. Four pieces, any length:
(a) an opening hook sentence; (b) why you became a doctor — your father, honest and specific;
(c) the human side — the many worlds (leadership, StudyRise, documentary, fitness, faith,
Australia); (d) why this site exists / who you're writing for.
> **Draft:** See [[Sample Content Drafts#C1 · About narrative]].

### C2 · First father piece — *needed by Chunk 15; the page structure ships without it*
For [[Page - My Beloved Father]]: a short opening introduction (who he was, in your words), plus
one essay **or** one note (a phrase he used, a habit, a moment that brings him to mind). I will
never ghostwrite this page.
> **Draft:** See [[Sample Content Drafts#C2 · My Beloved Father opening]]. This is a guided
> placeholder with personal blanks, not a finished piece.

### C3 · 2–3 seed blog posts — *needed by Chunk 15*
One each from your top categories, 600–2500 words. Easy first prompts: "What doctors wish
patients knew about ___" (Health & Medicine) · "What the AMC pathway actually looks like" (Life
in Medicine) · "Why I build software as a doctor" (Opinion).
> **Drafts / topic picks:** See [[Sample Content Drafts#C3 · Seed blog starters]].

### C4 · 3–4 seed journal entries — *needed by Chunk 15*
Under 400 words each, mixed types: a Thought, a Read (tie to a Bookshelf book), an Observation.
> **Drafts:** See [[Sample Content Drafts#C4 · Seed journal entries]].

### C5 · StudyRise build story + documentary contexts — *needed by Chunks 10–11 (placeholders OK)*
(a) StudyRise: why you built it, what problem it solves, in your words (I have all the feature
facts). (b) For 1–2 YouTube films: which ones to feature + 2–3 sentences each on what it's about
and why you made it.
> **Draft:** See [[Sample Content Drafts#C5 · StudyRise and documentary copy]].

### C6 · Bookshelf notes — *needed by Chunk 12 (can trickle in)*
One or two sentences per starter book — what it meant to *you*: Atomic Habits · The 48 Laws of
Power · Ikigai · The Subtle Art of Not Giving a F*ck · The Immortal Life of Henrietta Lacks.
> **Notes:** See [[Sample Content Drafts#C6 · Bookshelf notes]].

### C7 · Contact welcome line + Course description — *needed by Chunk 13 (placeholders OK)*
(a) One warm line on what messages you welcome. (b) Course: headline + 2–3 lines on what "AI in
Healthcare for doctors" is and who it's for.
> **Draft:** See [[Sample Content Drafts#C7 · Contact and course]].

---

Related: [BUILD-PLAN.md](BUILD-PLAN.md) · [[IMAGE-MANIFEST|IMAGE-MANIFEST.md]] · [[Discovery Answers]]
