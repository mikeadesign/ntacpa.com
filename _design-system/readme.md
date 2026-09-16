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

Also never: Slate on Navy (1.9:1), white on Gold (2.1:1), or the old `--nta-muted` `#8a8f98` as text on white (3.25:1 — corrected to `#6B7280`, 4.83:1).

`--nta-muted-light` `#B3B8BF` is **not a text colour** — 2.0:1 on white. It is for hairlines, decorative rules, and disabled icons only. Small labels use `--nta-muted`. There is no lighter text step: nothing above `#6B7280` clears 4.5:1 on white, so the palette has exactly one muted text tone.

### Minimum width for the full lockup

The full lockup is **320px wide minimum; 360px+ recommended, 400px native.** The constraint is the two descriptor lines, which scale with the lockup:

| Lockup width | Mark | Wordmark | "ACCOUNTING & ADVISORY" | "NICHOLAS T. AVELLO, CPA" |
|---|---|---|---|---|
| 400px (native) | 120px | 42px | 11.3px | 10.8px |
| 360px | 108px | 37.8px | 10.2px | 9.7px |
| **320px (floor)** | 96px | 33.6px | **9.0px** | **8.6px** |
| 280px | 84px | 29.4px | 7.9px ✗ | 7.6px ✗ |
| 190px | 57px | 19.9px | 5.4px ✗ | 5.1px ✗ |

**On contrast specifically: WCAG AA contrast ratios do not change with scale.** Every colour in the lockup passes at any size — navy wordmark and descriptor 13.15:1 on white, white on navy 13.15:1, the reversed principal tint 6.05:1 on navy. So 190px is no worse than 400px on 1.4.3 grounds. What breaks below 320px is **legibility**, not contrast: 9px is the practical floor for wide-tracked uppercase Archivo, and WCAG has no minimum type size to lean on. Below 320px use **compact**, which carries no small text at all and is therefore clean down to its 32px-mark floor (~100px wide).

One caveat worth knowing: WCAG 1.4.3 exempts text that is part of a logo or brand name from the contrast requirement. We hold the lockup to 4.5:1 anyway — in a site header these lines read as information, not decoration.

**The on-navy label ladder** — four steps, dimmest last, every one of them AA-safe for small tracked-uppercase type on `#16324D`:

| Token | Hex | On navy |
|---|---|---|
| `--nta-on-navy` | `#FFFFFF` | 12.6:1 |
| `--nta-on-navy-soft` | `#9FB2C6` | 7.0:1 |
| `--nta-on-navy-muted` | `#7BA3C4` | 5.3:1 |
| `--nta-on-navy-label` | `#7EA6C7` | 5.11:1 |

`--nta-on-navy-label` was `#4D7A9E` through v1.0 — **2.87:1, failing AA** for the ~11px bold labels it carries (footer column headers, mobile-menu labels). Corrected to `#7EA6C7`: same hue, lighter — `oklch(56.2% 0.075 243.8)` to `oklch(70.8% 0.065 243.8)`. Anything in `#74A0C0`–`#82A9C9` satisfies the floor if the step ever needs retuning; never darker.

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

Clear space is **½ × mark height** on all sides. The full lockup **never appears below 320px wide** (`--logo-min-width`) — below that:

| Configuration | Use | Floor |
|---|---|---|
| **primary** — mark · rule · wordmark · 2-line descriptor | Default signature: site hero, letterhead, proposals, signage | **320px wide** (96px mark) |
| **compact** — mark · rule · wordmark | Site header and any horizontal band; **preferred over the bare mark** when width allows, because the name still reads | 32px mark |
| **stacked** — mark over rule over wordmark + descriptor | Narrow columns, mobile, navy footers | 48px mark |
| **mark** | Avatars, favicons, square frames | 16px (single **N**) |

### The site header

**The header takes `logo-compact`, never `logo-primary`.** A header band gives a logo 150–220px of width. The full lockup's floor is 320px wide, so any header that uses it is rendering the primary lockup below its own minimum — the descriptor lines set under 7px and become texture. Compact drops both descriptor lines and keeps mark · gold rule · wordmark, so the firm's name still reads at header scale.

**Use the SVG, not the PNG or a CSS-composed lockup.** `brand-assets/svg/logo-compact.svg` is 374×120 with all text converted to outlines, so the wordmark's Spectral letterforms are locked into the file and render identically whether or not the host page has loaded webfonts. Set `height` only and let width follow the 3.117:1 ratio.

| State | Band height | Logo asset | `height` | Rendered width |
|---|---|---|---|---|
| Desktop, resting | `--header-h` 96px | `logo-compact.svg` | 56px | 175px |
| Desktop, sticky/condensed | `--header-h-sticky` 68px | `logo-compact.svg` | 40px | 125px |
| Mobile (<640px) | `--header-h-mobile` 72px | `logo-compact.svg` | 44px | 137px |
| Navy header band | — | `logo-compact-reversed.svg` | same | same |
| Below a 32px mark | — | `logo-mark-navy.svg` | 32px | 32px |

Rules for the band:

- **Clear space** is ½ the mark height — 28px at the resting size. That is the minimum gap between the logo and the first nav item, and it sets the band's inner padding.
- **The logo is a link to `/`** and needs a real label: `alt="NTA, Inc. — Nicholas T. Avello, CPA"`. An empty `alt` on the header mark leaves the home link unnamed for screen readers.
- **Never scale the logo on scroll with a CSS `transform`.** Animate `height`; a transform-scaled SVG re-rasterises soft in Safari.
- **The primary lockup belongs below the header** — hero, letterhead, proposals, signage, the OG card. The footer keeps it too (`logo-reversed.svg`), where there is width for it.
- One background tone per band: White, Paper, or Navy. A navy band swaps to the reversed compact asset — not a CSS filter.

Static exports for all eight configurations live in `brand-assets/svg/` with **text converted to outlines** — no `<text>`, no `font-family`, so they are safe inside an `<img>` tag, where the host page's webfonts are unavailable. Prefer them over the PNGs anywhere SVG is accepted.

Every one of these has a **reversed twin** for navy grounds (`tone="reversed"`): the mark field inverts to white, the wordmark and descriptor go white, the credential line steps to `#9FB2C6`, and the gold rule and ticks are unchanged — gold on navy clears AA at 5.1:1.

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
