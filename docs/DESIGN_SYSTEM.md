# Devalaya — Design System & Layout Specification

## 1. Overview & Philosophy

**Core Philosophy:** *Sacred, not cluttered.*

Devalaya balances sacred traditional Indian temple aesthetics (saffron, maroon, gold, gopuram motifs, diya lamps) with modern UI principles (generous white space, responsive card-based layouts, dynamic theme switching, smooth micro-animations).

---

## 2. Theme Systems (Prabha & Sandhya)

The application supports two themes representing different times of day in a temple environment.

### 2.1 Color Tokens (CSS Variables)

```css
:root {
  /* Theme: Prabha (Radiance / Day Mode - Default) */
  --bg-base: #FFFBF3;           /* Warm ivory background */
  --bg-surface: #FFFFFF;        /* Pure white for primary cards */
  --bg-elevated: #FFF4E0;       /* Soft turmeric/cream tint for secondary cards */
  
  --color-primary: #E8630A;     /* Kesari / Deep Saffron — primary CTAs, active states */
  --color-primary-hover: #C94F05;
  --color-secondary: #7B1E1E;   /* Temple Maroon — section headers, major anchors */
  --color-secondary-hover: #5E1616;
  
  --color-accent-gold: #C8962C; /* Muted Temple Gold — borders, dividers, subtle iconography */
  --color-accent-emerald: #1F6F5C; /* Emerald Green — strictly for Calendar festival tags */
  
  --text-primary: #2A1B12;      /* Warm charcoal-brown, never pure black */
  --text-secondary: #6B5B4E;    /* Muted warm brown for secondary copy */
  --text-muted: #9E8E82;
  
  --border-subtle: #EFE1CC;     /* Warm subtle border */
  --border-gold: #D9B36C;       /* Accent border */
  
  --shadow-sm: 0 2px 4px rgba(42, 27, 18, 0.04);
  --shadow-md: 0 4px 12px rgba(42, 27, 18, 0.08);
  --shadow-lg: 0 8px 24px rgba(42, 27, 18, 0.12);
  
  --success: #2F7A4D;
  --danger: #B3261E;
}

[data-theme="sandhya"] {
  /* Theme: Sandhya (Dusk / Night Mode) */
  --bg-base: #1A0F0C;           /* Deep obsidian-maroon background */
  --bg-surface: #241512;        /* Dark surface card background */
  --bg-elevated: #2E1B16;       /* Elevated dark card */
  
  --color-primary: #F2A65A;     /* Soft warm saffron for dark background */
  --color-primary-hover: #FFC080;
  --color-secondary: #E8B4A0;   /* Muted rose-maroon for dark mode headers */
  --color-secondary-hover: #F0C4B4;
  
  --color-accent-gold: #D9A94F; /* Warm glowing gold */
  --color-accent-emerald: #4FA98A; /* Soft mint-emerald for festival tags */
  
  --text-primary: #F6EDE4;      /* Soft warm cream text */
  --text-secondary: #C9B8AC;    /* Muted warm grey-brown text */
  --text-muted: #8C7B6F;
  
  --border-subtle: #3A2620;
  --border-gold: #8C6A2E;
  
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
}
```

---

## 3. Typography Specification

| Role | Font Family (English) | Font Family (Telugu) | Usage |
|---|---|---|---|
| **Headings / Display** | `Cormorant Garamond`, `Fraunces`, `serif` | `Ramabhadra`, `Mandali` | Page titles, hero text, section headers |
| **Body / Copy** | `Inter`, `Manrope`, `sans-serif` | `Noto Sans Telugu` | Paragraphs, descriptions, buttons, inputs |
| **Tabular Data** | `JetBrains Mono`, `monospace` | `JetBrains Mono` | Panchangam timings, dates, countdown timers |

### Scale & Spacing Rules:
- **Mobile Scale:** `xs: 0.75rem`, `sm: 0.875rem`, `base: 1rem`, `lg: 1.25rem`, `xl: 1.625rem`, `2xl: 2.125rem`, `3xl: 2.75rem`.
- Maximum heading size capped at `2.75rem` (`44px`) even on desktop to preserve devotional restraint.

---

## 4. Layout & Grid Architecture

### 4.1 Page Container & Structure
- **Max Width Container:** `max-w-7xl` (`1280px`) centered with horizontal padding (`px-4 sm:px-6 lg:px-8`).
- **Section Vertical Spacing:** `py-8 sm:py-12 lg:py-16`.

### 4.2 Core Navigation & Header Layout
- **Navbar:** Sticky top bar (`h-16 sm:h-20`), backdrop blur, with max 5 top-level items:
  1. Home (`/`)
  2. Events (`/events`)
  3. Telugu Calendar (`/calendar`)
  4. Gallery (`/gallery`)
  5. About / Donate (`/about`)
- **Action Triggers:** Theme Toggle (Prabha/Sandhya), Language Toggle (EN/TE), Mobile Slide-out Drawer trigger.

### 4.3 Key Page Layout Blueprints

#### A. Homepage Layout
1. **Urgent Announcement Banner:** Top dismissible strip (`bg-[var(--color-primary)] text-white`).
2. **Hero Section:** Full-width background image with subtle parallax, overlay gradient, temple name in Telugu & English, primary CTA button ("View Today's Panchangam").
3. **"Today at a Glance" Widget (Panchangam Card):** 3-column responsive card grid displaying Tithi, Nakshatra, Darshan Timings, and Next Major Festival Countdown.
4. **Upcoming Events Section:** 3-column card grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
5. **Gallery Highlights Masonry:** 4-column responsive image preview.
6. **Footer:** Temple address, trust info, quick links, simple copyright.

#### B. Telugu Calendar / Panchangam Layout
- **Header:** Month switcher controls (Previous / Next Month, Today button).
- **Calendar Grid:** 7-column desktop grid, responsive card stack on mobile.
- **Day Cell Tokens:** Regular day (subtle border), Today (gold highlighted border + diya indicator), Festival day (emerald tag badge).
- **Expanded Detail Drawer/Modal:** Detailed breakdown of Sunrise, Sunset, Rahu Kalam, Yamagandam, Gulika Kalam, and Muhurtham timings.

#### C. Events Showcase Layout
- **Tab Navigation:** "Upcoming Events" vs. "Past Activities Archive".
- **Filtering Bar:** Search input, Festival type filter dropdown, Year selector.
- **Event Card Anatomy:** Feature Image (`next/image`), Date Badge, Title, Description, Location/Time info, "Add to Calendar" export button, WhatsApp Share button.

---

## 5. UI Components & Tokens Guidelines

- **Cards:** Rounded corners (`rounded-xl` or `rounded-2xl`), subtle border (`border-[var(--border-subtle)]`), background (`bg-[var(--bg-surface)]`).
- **Buttons:**
  - **Primary CTA:** Saffron background (`bg-[var(--color-primary)]`), text white, `rounded-lg`, hover scale effect.
  - **Secondary CTA:** Outlined gold/maroon border, text primary.
- **Decorators:**
  - Top border of primary cards has a 2px accent line (`border-t-2 border-[var(--color-accent-gold)]`).
  - Gopuram SVG line art used exclusively as section dividers.
