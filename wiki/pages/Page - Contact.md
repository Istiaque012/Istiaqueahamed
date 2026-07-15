---
title: Page - Contact
type: page
status: in-progress
created: 2026-06-28
updated: 2026-07-15
visibility: public
tags: [project/website, page]
---

# ✉️ Page — Contact

Back to [[Site Architecture]]

> [!abstract] Job of this page
> Make it easy and clear to reach him and follow his work while keeping the private destination
> private and refusing messages when delivery is not configured.

---

## Built elements

- [x] A short invitation for thoughtful messages about medicine, systems, building, speaking, and
  meaningful collaboration
- [x] **Contact form** — name, email, and message, with accessible inline validation and async states
- [x] All six confirmed **social links** → [[Social Links]]
- [x] No public email address or `mailto:` link

The current fallback uses neutral public wording rather than publishing the private C7 draft.

## Security and delivery contract

- Shared client/server length and email validation
- First-invalid-field focus plus pending, success, and actionable error announcements
- Hidden honeypot, same-origin enforcement, JSON/content-size limits, and server validation
- Hashed per-instance rate limit: five valid attempts per 15 minutes, then `429`
- Resend delivery handoff with escaped HTML, plain text, private recipient, private sender, and
  Reply-To; no message content is logged
- Fail closed unless the Sanity switch is enabled **and** all four server variables are present:
  `CONTACT_FORM_ENABLED`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`

> [!warning] Real delivery remains deferred
> D8 in [[DECISIONS-NEEDED]] still defers the provider and recipient. The live environment does not
> contain those four delivery settings, so the public form is clearly disabled and visitors are
> directed to confirmed social profiles. Session 20 remains in-progress until a real message reaches
> Istiaque and production abuse checks pass.

## Verified failure behaviour

- Cross-origin request → `403`
- Invalid name/email/message → `400` with field errors
- Valid message before delivery configuration → `503`
- Sixth repeated valid request inside the window → `429`
- Filled honeypot → generic `200` without provider delivery

## Future

- A newsletter signup can live here later, but is not part of the current page
- Stronger shared/serverless rate limiting can replace the per-instance guard if real traffic needs it

## Design notes

- Dark, spacious editorial opening and form room
- Light social directory creates a clear second path while private delivery is unavailable
- Form fields remain visible but disabled so the limitation is understandable rather than hidden

## Technical

> [!note] No database required
> Delivery stays serverless. The endpoint validates and forwards a message; it does not store a
> public inbox or expose the private destination.

---

Related: [[Social Links]] · [[Tech Stack Decision]] · [[Tech - Deployment & Domain]]
