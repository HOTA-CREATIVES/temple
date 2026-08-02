# PRD: Devalaya — A Modern Digital Platform for Indian Temples

*(Working name — swap in the actual temple's name before sharing externally, e.g. "Sri [Temple Name] Devasthanam Digital Platform")*

---

## 1. Summary

Devalaya is a modern, mobile-first website for an Indian temple that replaces the outdated, table-heavy "trust portal" look common across official temple sites (TTD, Vaishno Devi Shrine Board, Siddhivinayak, etc.) with a clean, devotional, motion-rich experience. It centers on three things existing temple sites do badly: a real **events showcase** (upcoming + past, with galleries), a genuinely usable **Telugu calendar / Panchangam** module, and a fast, calm, mobile-friendly reading experience for devotees checking darshan times, festival dates, and announcements. Built on Next.js + Firebase so a small team (or a single developer) can run it end-to-end without a legacy CMS.

---

## 2. Contacts

| Name | Role | Comment |
|---|---|---|
| Gurunada | Product Engineer / Full-stack Developer | Owns design system, frontend, Firebase architecture |
| Temple Committee / Trust | Product Owner (Content) | Approves event content, calendar data accuracy, donation flows |
| Priest / Panchangam Authority | Domain SME | Validates tithi/nakshatra/muhurtham data before publishing |
| (Optional) Designer collaborator | UI/Visual | Motifs, illustration, iconography polish |

---

## 3. Background

Most Indian temple websites — even for the largest and richest temples in the country — are still built like early-2000s government portals: dense mega-menus, table layouts, PDF-based calendars, visitor counters in the footer, and almost no dedicated space for storytelling (what happened at last year's Brahmotsavam, what the temple actually looks like at different festivals, etc.). Devotees are forced to dig through nested menus to find darshan timings or festival dates.

At the same time, expectations have shifted: devotees — especially the younger and diaspora audience — now expect the same polish from a temple site that they get from any modern consumer product: fast load times, a clear calendar, a scrollable events feed, and a mobile experience that doesn't require pinch-zooming a table.

This is a clean opportunity: keep the sacred visual language (saffron, maroon, gold, gopuram motifs) that gives these sites their identity, but rebuild the actual experience using current frontend patterns. Nothing like this currently exists at the *local/regional temple* level — it's been reserved for a handful of mega-temples with big IT budgets.

---

## 4. Objective

**Objective:** Give the temple a fast, trustworthy, beautiful digital front door that increases devotee engagement (repeat visits, event awareness, donations) while cutting down manual work for temple staff (answering "when is the next festival" calls, manually posting photos to WhatsApp groups, etc.)

**Why it matters:** A well-run digital presence increases footfall for scheduled events, improves trust (transparent, well-organized information beats a stale Facebook page), and gives the temple a durable archive of its own history (past events, festivals, renovations).

**Key Results (first 2 quarters post-launch):**
- KR1: 90+ Lighthouse performance score on mobile (vs. typical 30-40 on legacy temple sites)
- KR2: Panchangam/calendar module used by 40%+ of monthly site visitors (tracked via analytics)
- KR3: Events page becomes the #2 most-visited page after Home
- KR4: Temple staff can publish a new event (with photos) in under 5 minutes via the admin CMS, without developer help
- KR5: Page load under 2s on 4G for the homepage

---

## 5. Market Segment(s)

Markets are defined by the *job* the visitor is trying to do, not just demographics:

| Segment | Job to be done | Constraints |
|---|---|---|
| **Local daily devotees** | Check today's darshan timing, tithi, and any special seva quickly, often on a low-end Android phone | Low bandwidth, need fast loading, simple language toggle (Telugu/English) |
| **Festival-season visitors** | Find out exact festival dates, muhurtham timings, and what to expect before traveling | Needs the calendar to be authoritative and unambiguous, downloadable/shareable |
| **Diaspora / NRI devotees** | Feel connected to the temple remotely — watch past event highlights, donate, follow live darshan | Needs high-quality photo/video, simple donation flow, works well internationally |
| **Elderly devotees** | Same info, but need larger fonts, high contrast, minimal cognitive load | Accessibility (WCAG AA), no dependence on small tap targets |
| **Temple staff / priests (admin side)** | Post events, update calendar, upload photos, without needing a developer | Needs a genuinely simple CMS, not a raw Firebase console |

---

## 6. Value Proposition(s)

- **For devotees**: One place to get accurate darshan timing, panchangam, and festival info — instantly, in Telugu or English, without hunting through a 20-item nav menu.
- **For festival planners / traveling devotees**: A real calendar (not a scanned PDF) that shows tithi, nakshatra, and upcoming festivals at a glance, shareable and exportable.
- **For diaspora devotees**: A living archive of past events (photos/videos) that makes them feel present even when they're not, plus a trustworthy, secure donation flow.
- **For the temple committee**: Less manual WhatsApp-forwarding and phone-call answering; a self-serve CMS that lets any staff member post an update in minutes.
- **Differentiation from existing temple sites**: Where TTD-style portals win on *comprehensiveness*, Devalaya wins on *clarity, speed, and beauty* — it solves the same jobs with a fraction of the friction.

---

## 7. Solution

### 7.1 Design System — Blending Temple Visual Language with Modern UI

**Design philosophy:** *Sacred, not cluttered.* Keep the emotional cues devotees associate with a temple (saffron, gold, maroon, gopuram silhouettes, diya/lamp motifs, rangoli-inspired dividers) but apply them with modern restraint — generous white space, one accent color doing the work at a time, real typographic hierarchy, and subtle motion instead of blinking marquees.

Two themes, similar in spirit to a "Day/Night" temple experience:

| Theme | Name | Feel |
|---|---|---|
| Light (default) | **Prabha** (radiance) | Ivory/cream background, saffron + maroon accents, gold highlights — evokes daytime temple courtyard |
| Dark | **Sandhya** (dusk) | Deep maroon-black background, warm gold accents, diya-glow highlights — evokes evening aarti |

#### Color Tokens

```css
:root {
  /* Prabha (Light) */
  --bg-base: #FFFBF3;         /* warm ivory */
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFF4E0;     /* soft turmeric tint for cards */
  --color-primary: #E8630A;   /* kesari / deep saffron — primary CTA, active nav */
  --color-primary-hover: #C94F05;
  --color-secondary: #7B1E1E; /* temple maroon — headers, section anchors */
  --color-accent-gold: #C8962C; /* muted temple gold — dividers, icons, borders */
  --color-accent-emerald: #1F6F5C; /* used ONLY in calendar module for festival tags — avoids everything being orange/red */
  --text-primary: #2A1B12;    /* warm near-black, not pure black */
  --text-secondary: #6B5B4E;
  --border-subtle: #EFE1CC;
  --success: #2F7A4D;
  --danger: #B3261E;
}

[data-theme="sandhya"] {
  --bg-base: #1A0F0C;
  --bg-surface: #241512;
  --bg-elevated: #2E1B16;
  --color-primary: #F2A65A;   /* warmer, softer saffron for dark bg */
  --color-primary-hover: #FFC080;
  --color-secondary: #E8B4A0;
  --color-accent-gold: #D9A94F;
  --color-accent-emerald: #4FA98A;
  --text-primary: #F6EDE4;
  --text-secondary: #C9B8AC;
  --border-subtle: #3A2620;
}
```

**Rule of thumb:** never use more than 2 accent colors (primary + one other) on a single screen. Gold is reserved for dividers/icon strokes, not large fills — it reads as "cheap gradient" if overused.

#### Typography

| Role | Typeface | Notes |
|---|---|---|
| Display / Headings (English) | **Cormorant Garamond** or **Fraunces** (serif, high-contrast) | Gives a carved-stone, temple-inscription feel without being a literal "ethnic" font |
| Telugu headings | **Ramabhadra** or **Mandali** (Google Fonts, Telugu) | Must pair visually with the serif — similar weight/contrast |
| Body (English) | **Inter** or **Manrope** | Neutral, highly legible on mobile |
| Telugu body | **Noto Sans Telugu** | Reliable rendering, wide language support |
| Numerals (dates, panchangam figures) | **JetBrains Mono** at small sizes for tabular alignment | Calendar/tithi tables look aligned and precise, not hand-wavy |

Font scale (mobile-first, rem): 12 / 14 / 16 / 20 / 26 / 34 / 44 — cap headline size at 34-44px even on desktop hero; avoid the "giant hero text" trend that doesn't suit devotional tone.

#### Motifs & Iconography

- **Gopuram silhouette** as a subtle SVG line-art divider between sections (single-color stroke, low opacity — not a busy illustration)
- **Diya (lamp) flame icon** used sparingly for "featured" or "today" markers
- **Kalasha / lotus line icons** for section markers (Events, Gallery, Calendar) — consistent 2px stroke icon set (Lucide icons customized, or a custom 24px icon set)
- **Rangoli-inspired dot/border pattern** used only as a thin decorative top border on cards — never as a background texture (kills readability + performance)
- Avoid: clip-art deity images, gradient-heavy "religious poster" aesthetics, blinking/marquee text, stock temple bell GIFs

#### Layout Principles

- **Card-based, not table-based** — every list of events/sevas/festivals is a responsive card grid, not an HTML table
- **One primary CTA per screen** (e.g., "View Today's Panchangam" on home, "Donate" on donation page) — legacy sites bury 8 CTAs above the fold
- **Sticky, collapsed nav** — max 5 top-level items (Home, Events, Calendar, Gallery, About/Donate), with a slide-out drawer for secondary links, instead of a 10-column mega-menu
- **Announcement strip**, not a scrolling marquee — a single dismissible banner for urgent notices (e.g., "Darshan closed for maintenance on X date")

---

### 7.2 Key Features

**A. Home**
- Hero: temple image (parallax on scroll via Framer Motion, disabled on `prefers-reduced-motion`), temple name in Telugu + English, one primary CTA
- "Today at a glance" widget: tithi, nakshatra, darshan timing, and countdown to next major festival — pulled live from the Calendar module
- Latest 3 events (upcoming) + latest 3 gallery highlights (past), each linking to full pages
- Announcement strip for urgent notices

**B. Events Showcase (Upcoming + Past)**
- Upcoming Events: card grid with date, title, short description, "Add to Calendar" (.ics export), and RSVP/interest count if enabled
- Past Activities Archive: timeline view grouped by year → festival, each entry expands into a photo/video gallery (Firebase Storage, lazy-loaded, `next/image` optimized)
- Filter/search by year, festival type (e.g., Brahmotsavam, Navaratri, monthly sevas)
- Each event has its own shareable URL with OG image auto-generated (good for WhatsApp sharing — very relevant for this audience)

**C. Telugu Calendar / Panchangam Module** *(the centerpiece differentiator)*
- Monthly calendar grid (not a PDF) showing per-day: tithi, nakshatra, rahu kalam, festival tags
- Tap/click a day to expand full panchangam detail (sunrise/sunset, muhurtham windows if applicable)
- Festival days visually tagged (emerald accent, not saffron — keeps them scannable against the "regular day" saffron/maroon UI)
- "Add to Google Calendar" / downloadable month view (PDF export via a serverless function, styled to match brand — not a raw data dump)
- Data source: either a licensed Panchangam API (e.g., DrikPanchang-style provider) cached daily into Firestore, or a computed astronomical library if the temple wants full independence — **flagged as an assumption to validate (7.4)**

**D. Gallery**
- Masonry/grid layout, lazy-loaded, grouped by album (linked from Past Events)
- Lightbox viewer with swipe support on mobile

**E. Donations / Hundi (Phase 2)**
- Simple form → Razorpay (most common in India) → Firebase Cloud Function verifies payment → auto-generated receipt (PDF, emailed)
- Transparent "where donations go" section — builds trust that legacy sites rarely offer

**F. Live Darshan (Phase 2, if applicable)**
- Embedded YouTube Live or custom stream, shown only during active darshan hours (scheduled visibility via Firestore config, not manual dev deploys)

**G. Admin CMS (internal, Firebase Auth–gated)**
- Role-based access: Super Admin (full control), Editor (events/gallery only), Viewer
- Simple forms for: create event, upload gallery photos, edit today's panchangam override, post announcement
- Built as a protected `/admin` route inside the same Next.js app — no separate CMS platform needed, keeps hosting/cost simple

**H. Accessibility & Language**
- Telugu/English toggle (i18n via `next-intl` or similar), persisted in a cookie
- "Large text" mode toggle for elderly devotees (bumps base font scale, increases line-height)
- WCAG AA contrast minimum on all text/background pairs (validate the saffron-on-ivory combos carefully — saffron on white can fail contrast at small sizes; use the darker `--color-primary-hover` for text-on-light instances)

---

### 7.3 Technology

**Frontend**
- Next.js (App Router), TypeScript
- Tailwind CSS with the color tokens above wired in as CSS variables (supports the two-theme system cleanly)
- Framer Motion for scroll reveals, theme transitions, page transitions (kept subtle — devotional tone, not a flashy product landing page)
- `next/image` for all photo/gallery content; ISR (Incremental Static Regeneration) on Events and Calendar pages so content updates without a full redeploy

**Backend / Data**
- Firebase Firestore: `events`, `galleries`, `panchangam_days`, `announcements`, `admin_users` collections
- Firebase Storage: event photos/videos, with resized variants generated via a Cloud Function on upload (thumbnail + full-res)
- Firebase Auth: admin login (email/password or Google SSO restricted to temple staff emails)
- Firebase Cloud Functions: 
  - Daily panchangam sync job (pulls/calculates next N days, writes to Firestore)
  - Donation webhook handler (Razorpay → Firestore → receipt email)
  - OG image generation for event share links
- Firebase Cloud Messaging (Phase 2+): optional push notifications for festival reminders

**Hosting**
- Vercel (best-in-class Next.js hosting, ISR support) with Firebase as the backend — or Firebase Hosting if the team wants everything in one console. Vercel is the stronger default given ISR needs.

**SEO / Discoverability**
- `schema.org` structured data for `Event` and `Place` types on every event/temple page — this alone is a bigger discoverability win than most temple sites currently have (they're rarely indexed well for "temple festival dates near me")
- Auto-generated sitemap.xml, per-page metadata

---

### 7.4 Assumptions

- Temple committee has (or is willing to digitize) a reasonable back-catalog of event photos to seed the "past activities" archive at launch
- A reliable Panchangam data source is available — either a paid API subscription or in-house astronomical calculation is acceptable to the temple/priest for accuracy sign-off
- Temple staff have at least one person comfortable using a simple web form (CMS) after a short walkthrough
- Donations (Phase 2) require a registered payment gateway account (Razorpay/similar) under the temple trust's name — this is a legal/compliance step outside engineering scope
- Initial launch targets one temple; architecture should stay clean enough to become multi-tenant later if this is templatized across temples (flag for future ADR, not required for v1)

---

## 8. Release Plan

**Phase 1 — MVP (Core Experience)**
- Home, Events (upcoming + past showcase), Telugu Calendar/Panchangam (view-only), Gallery, About, Contact
- Admin CMS: events + gallery + announcements (calendar data seeded manually or via first API integration)
- Theming (Prabha/Sandhya), i18n (Telugu/English), mobile-first responsive build
- *Goal: replace the "we don't really have a real website" or "our website is unusable" problem entirely*

**Phase 2 — Engagement + Trust**
- Donations/Hundi with Razorpay + receipts
- Live Darshan embed
- Calendar export (.ics, PDF)
- Push notifications for upcoming festivals

**Phase 3 — Depth**
- Devotee accounts (save favorite events, donation history)
- Seva booking system
- Multi-temple/multi-tenant support if scaling this to other temples
- Native-feeling PWA install (relevant for the elderly/local devotee segment who may not use app stores)

*(Avoid exact dates per PRD convention — sequence phases by dependency and value, not calendar commitments.)*

---

### Appendix: Competitive Notes (Research Summary)

| Site pattern observed | Where seen | What Devalaya does differently |
|---|---|---|
| Table-based layout, 10+ item mega-menu | TTD/tirumala.org | Card-based layout, 5-item nav + drawer |
| PDF-only calendars | Most trust sites | Interactive calendar UI with export options |
| No dedicated past-events archive | Nearly universal | Dedicated Events + Past Activities module with galleries |
| Visitor counters, marquee text | TTD and similar govt-affiliated sites | Removed — replaced with a single dismissible announcement banner |
| Heavy saffron/red with no accent variation | Most temple sites | Two-theme system, emerald reserved for calendar/festival tags to aid scannability |
| Poor mobile responsiveness | Most legacy sites | Mobile-first build, 90+ Lighthouse target |
