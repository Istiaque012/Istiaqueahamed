---
title: Page - Contact
type: page
status: planned
created: 2026-06-28
updated: 2026-07-14
visibility: public
tags: [project/website, page]
---

# ✉️ Page — Contact

Back to [[Site Architecture]]

> [!abstract] Job of this page
> Make it easy and clear to reach him, and to follow him. Simple and confident.

---

## Elements

- A short, warm line on what kinds of messages he welcomes (collaboration, speaking, questions, just saying hello)
- **Contact form** — name, email, message (handled via Resend/Formspree — see [[Tech Stack Decision#The full stack]])
- All **social links** → [[Social Links]]
- Email (if he wants it public)

Confirmed for the initial build: use a contact form and do not display the email address. The
form service will be connected later; see D8 in [[DECISIONS-NEEDED]]. Editable welcome copy is in
[[Sample Content Drafts#C7 · Contact and course]].

## Future

- A newsletter signup can live here later (not now — see [[Audience & Goals]])

## Design notes

- Minimal, plenty of space, same dark aesthetic
- Form must be obviously easy; low friction

## Technical

> [!note] No `<form>` complexity needed
> A simple form posting to a form service keeps this serverless. No database required.

---

Related: [[Social Links]] · [[Tech Stack Decision]]
