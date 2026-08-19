# NTA, Inc. — Design System

The brand identity for **NTA, Inc.**, the accounting practice of **Nicholas T. Avello, CPA**. Built August 2026 as the first stage of a brand refresh; the existing website (**ntacpa.com**) is scheduled for redesign against this system.

Everything here was authored from scratch. There was no prior design system, no brand guidelines, and no logo files — the previous site carried no reusable identity. Nothing in this system is derived from another company's work.

---

## The firm

A **solo CPA practice with unusual depth**. Nicholas has been a Certified Public Accountant since **1983** and holds **Series 6, 27 (FINOP), and 62 (Corporate Securities)** registrations, with over **40 years in the securities and futures industries** and a specialization in **hedge fund and brokerage accounting** — registered Series 27 (FINOP) for forty years.

The practice deliberately serves **two audiences as one unified practice**, not two divisions:

- **Institutional** — hedge funds, broker-dealers, FINOP engagements
- **Private** — individuals and families, small businesses, high-net-worth individuals

Services: individual and business tax preparation, bookkeeping, tax planning and strategy, IRS representation and audit support.

This duality is the central design problem the identity solves. It has to be credible in a compliance review and approachable to someone bringing in a shoebox of receipts — **without code-switching between the two**.

---

## Content fundamentals

**Tagline (primary):**
> *Where regulatory expertise meets personal service.*

**Supporting lines**, for section openers and secondary pages:
> *Four decades at the intersection of accounting and the markets.*
> *Precise, personal accounting for people who take the long view.*

**Reserved copy — site only.** The client is attached to a phrase from the current site:
> **"Always, Never, Except For…"**

It's a wry, insider read on tax rules — every absolute has a carve-out. It is deliberately **not** part of the identity system (it isn't a tagline and shouldn't appear in a lockup), but it is **approved and wanted for the website**, where it works well as a section opener, an about-page voice moment, or a `PullQuote`. Treat it as the firm's own words and don't rewrite it.

### Tone

| Rule | In practice |
|---|---|
| **Plain, not simplified** | Say "Form 1099" if that's the thing. Don't translate expertise into baby talk. |
| **Specific over superlative** | "Since 1983," never "industry-leading." Numbers and dates do the persuading. |
| **Calm** | No urgency tactics, countdowns, or exclamation marks. Nobody panic-buys an accountant. |
| **First person singular** | One CPA, not a faceless "we." "I'll review your filings," not "our team will." |

**Casing:** sentence case for headings and body. Uppercase is reserved for descriptors, eyebrows, badges, and labels — always with wide tracking.

**No emoji.** Not in UI, not in copy, not in marketing.

**Credentials** live on inside pages — an about page, a footer, a credentials block. They are explicitly *not* part of the logo or the brand mark: "Series 27 (FINOP)" is powerful to a broker-dealer and opaque to an individual filer.

---

## Visual foundations

### Colour

| Token | Hex | Role |
|---|---|---|
| `--nta-navy` | `#16324D` | Primary. Text, mark field, inverse surfaces. |
| `--nta-slate` | `#2C5F8A` | Links, labels, section eyebrows. |
| `--nta-gold` | `#C9A24A` | **Accent only** — rules, corner ticks, fills. |
| `--nta-gold-deep` | `#8A6A1E` | Gold *as text* on light fields (4.6:1). |
| `--nta-paper` | `#FAF8F3` | Section backgrounds, sunken surfaces. |

**The rule that matters most:** gold is an accent, never text on a light background — `#C9A24A` on white is **2.3:1** and fails AA. Deep Gold exists precisely so gold can be typographic. Gold on navy is **5.1:1** and passes.

Also never: Slate on Navy (1.9:1), white on Gold (2.1:1).

Maximum **two background tones per page** — White and Paper, or White and Navy.

### Type

Two families, strictly divided:

- **Spectral** (serif) — the voice of the firm. Headlines, the wordmark, and the tagline in italic. Weights 400/500/600/700. Never for UI labels or small print.
- **Archivo** (sans) — the voice of the interface. Body copy, forms, navigation, tables, and **every descriptor in the logo system**. Weights 400–800.

Both are Google Fonts under the SIL Open Font License — no ongoing cost.

**Descriptors and eyebrows** are always uppercase with wide tracking (`--track-descriptor: 3.5px`), and always carry `white-space: nowrap`. The tracking consumes the final pixel of the line box, so these lines have **zero slack** — without `nowrap` they silently re-break on a font fallback. This bit us repeatedly during the build; it's the single most common way to break a lockup.

### The mark

A **ledger cell with registration marks**. Three ideas, in order:

1. The **square** is the cell of a ledger — the smallest unit of the work.
2. The **corner ticks** read two ways: printer's crop marks, and the tick of a reconciled line.
3. **Diagonal placement** (top-right, bottom-left) keeps the mark asymmetric, so the ticks read as a detail rather than a border.

**Geometry, all derived from the mark's edge length `S`:** tick inset `0.085S`, tick size `0.115S`, stroke `0.019S`, glyph `0.32S`. The `Logo` component enforces this — don't hand-build lockups.

**Degradation, enforced in code:**

| Size | Treatment |
|---|---|
| 88px + | Full detail |
| 32–48px | Ticks thin |
| 17–31px | Ticks off |
| 16px | Single serif **N** |

Clear space is **½ × mark height** on all sides. The full lockup **never appears below 120px wide** — below that, the stacked variant or the mark takes over.

**Circular crops drop the ticks entirely** for a single gold underscore; the ticks clip badly on a circle.

### Layout & geometry

Square corners throughout — radius `0`. The only exceptions are the rounded-square app icon (`10px`) and circular avatar crops (`50%`). This is a print-derived identity, not a rounded-SaaS one.

Container `1000px`, section padding `80px` vertical / `56px` horizontal, body measure `68ch`.

### Surfaces, shadows, motion

**Shadows are near-absent by design.** Cards sit on *tone* (White on Paper, or the reverse) or on a hairline border — not on a shadow. Two shadows exist for genuinely floating UI (`--shadow-card`, `--shadow-float`); the logo never gets one.

**No gradients.** No blur, no glassmorphism, no transparency effects beyond the two documented tinted badge fills.

**Motion is minimal and quiet:** 120–180ms, plain `ease`. Fades and colour transitions only — no bounces, no springs, no scroll-jacking, no parallax. Hover darkens or inverts; press does not scale. A firm that has filed accurately since 1983 does not need its buttons to spring.

**Borders** are hairlines: `1px` in `--nta-line` (warm, on Paper) or `--border-cool` (on White). Brand rules are `2px` gold; card accents `3px` gold.

### Imagery

The one photographic asset is Nicholas's headshot (`assets/nicholas-avello-headshot.png`, 1122×1402) — a **professional studio portrait on a charcoal ground**, dark jacket, dark shirt. The charcoal reads as a natural extension of Navy, so the portrait sits comfortably on both Navy and Paper without a cutout or a protection gradient.

> **Note:** the current headshot is AI-augmented and the client expects to replace it. Keep it in one referenced location so a swap is a single file change.

**Portrait rules:** keep the eyeline in the upper third; square or circular crops both work (circular not below 96px); **do not** tint, duotone, apply gold as an overlay, or cut Nicholas out of the background. Warm-neutral, low-saturation imagery only — no cool-blue corporate stock, no grain, no filters.

There is **no illustration system and no photographic library**. If the site needs more imagery, ask before inventing it.

---

## Iconography

**There is no icon set in this system yet, and none was invented.** The identity is typographic and rule-based; the corner ticks are the only recurring graphic device.

If the site build needs icons, **Lucide** (CDN, 1.5–2px stroke, square-ish terminals) is the closest match to the mark's geometry — flag the choice to the client rather than treating it as settled. Do **not** hand-roll SVG icons, use emoji, or press unicode glyphs into service as icons.

---

## Contact

- **Email:** `ntainc@att.net` — *interim.* The client expects to move to something like `contact@ntacpa.com` with the new site. Reference it from one constant.
- **Domain:** ntacpa.com
- **Still outstanding:** office address, phone number, state licensure jurisdiction, client testimonials.

---

## Index

```
styles.css                  → entry point; @import list only
tokens/
  fonts.css                 → Spectral + Archivo (Google Fonts)
  colors.css                → brand, neutrals, semantic aliases
  typography.css            → families, scale, tracking, leading
  spacing.css               → spacing scale, geometry, logo constants
  elevation.css             → the two shadows, focus ring, transitions
components/
  brand/  Logo · SectionLabel · GoldRule
  core/   Button · Input · Card · Badge · PullQuote
guidelines/                 → 15 foundation specimen cards
assets/
  nicholas-avello-headshot.png
```

### Source documents in this project

These are the live design files the system was derived from — read them for context the tokens can't carry:

| File | What it holds |
|---|---|
| `NTA Brand Identity.dc.html` | The full standards document: lockups, clear space, minimum sizes, one-colour, misuse, contrast, voice, applications, handoff checklist. **The authority.** |
| `NTA Brand Presentation.dc.html` | 16-slide client presentation with speaker notes. |
| `NTA Brand Applications.dc.html` | Digital placements at real export dimensions. |
| `NTA Logo Directions.dc.html` | The five original directions explored. |
| `NTA Logo - Refined.dc.html` | The Ledger / Block / Blend comparison that produced the final mark. |

### Intentional additions

- **`Logo`, `SectionLabel`, `GoldRule`, `PullQuote`** are brand primitives, not generic UI. They exist because the identity's rules (tick degradation, descriptor tracking, the gold rule, italic taglines) are too easy to get wrong by hand.

### Not built, deliberately

- **No website UI kit.** The site design is the *next* project's deliverable — shipping a pre-designed site here would preempt that work.
- **No slide templates.** The presentation deck in this project serves that purpose.
- **No icon set.** See Iconography.
- **No exported PNG/SVG asset files.** Every mark renders from CSS via the `Logo` component. The handoff list in `NTA Brand Identity.dc.html` §10 names the raster files a production build will want (favicons, `og-image.png`, LinkedIn banner and avatar, signature) — generate them from the component at final sizes.
