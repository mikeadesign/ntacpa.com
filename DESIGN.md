---
name: NTA, Inc.
description: Regulatory-grade accounting identity — navy, paper, and rationed gold, set square and flat.
colors:
  navy: "#16324d"
  navy-hover: "#0f2437"
  slate: "#2c5f8a"
  gold: "#c9a24a"
  gold-deep: "#8a6a1e"
  paper: "#faf8f3"
  white: "#ffffff"
  body: "#3c4652"
  body-soft: "#4a5562"
  muted-light: "#b3b8bf"
  line: "#ece8df"
  line-warm: "#e6dcc3"
  line-warm-strong: "#ddd2b8"
  line-cool: "#e2e5e9"
  on-navy-lede: "#d7dfe8"
  on-navy-soft: "#9fb2c6"
  on-navy-muted: "#7ba3c4"
  on-navy-label: "#7ea6c7"
  error: "#a83f3f"
typography:
  display:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(34px, 8.5vw, 108px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.023em"
  headline:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(24px, 3.6vw, 38px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.016em"
  title:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(22px, 2.4vw, 26px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.012em"
  deck:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(23px, 2.8vw, 30px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  quote:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(24px, 3vw, 32px)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
  stat:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(44px, 5.2vw, 56px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  lead:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(17px, 1.7vw, 19px)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "3px"
rounded:
  none: "0"
spacing:
  gutter: "56px"
  gutter-md: "32px"
  gutter-sm: "24px"
  section-y: "80px"
  section-y-md: "64px"
  section-y-sm: "48px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "17px 34px"
  button-primary-hover:
    backgroundColor: "{colors.navy-hover}"
    textColor: "{colors.white}"
  button-on-navy:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "17px 34px"
  button-on-navy-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "13px 26px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "36px 32px"
  card-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "44px 40px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "14px"
  confirm-note:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.body-soft}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
---

# Design System: NTA, Inc.

## Overview

**Creative North Star: "The Registered Sheet"**

The system is built on a double meaning that belongs only to this practice. The corner ticks framing the hero and the headshot are printer's registration marks — the crosshairs that prove a sheet was pulled in alignment. *Registration* is also what a Series 27 is. The mark itself is a ledger cell with those ticks set into it, so the identity's smallest element already carries both readings: a page pulled correctly, and a professional on the register.

Everything follows from treating the surface as a printed sheet rather than a screen. Paper (`#faf8f3`) and white are the two grounds, separated by tone and a 1px warm hairline rather than by shadow. Corners are square because a trimmed sheet has square corners. Gold appears the way a press mark appears — as trim at the edge of the work, never as a field, and never carrying body copy. Spectral sets the display type with the weight of a set page; Archivo handles everything a form or a label needs. Depth is entirely tonal; there is no elevation ramp, because a sheet does not float.

The restraint is doing strategic work, not just aesthetic work. This practice's differentiator is that one person handles both a broker-dealer's net capital computation and a family's late return, without changing voice between them. A system that performed for either audience would break that. So the design proves competence by refusing to perform it: correct alignment, exact hairlines, credentials stated as dates and numbers, and no ornament anywhere that a compliance reviewer would have to look past.

**Key Characteristics:**
- Flat by construction — no shadows, no gradients, no radius anywhere.
- Two grounds only: white and paper, divided by 1px warm hairlines.
- Gold is trim, strictly rationed to two sanctioned rule placements plus the tick pairs.
- Serif display against sans UI; tracked uppercase is always a label, never a heading.
- Type scales by `clamp()` from a 390px reference, so layout breakpoints stay layout-only.
- Registration ticks appear in diagonal pairs, never four corners.

## Colors

A cool navy authority set on warm paper, with a single metallic accent held in reserve and a cool slate reserved for interaction.

### Primary
- **Ledger Navy** (`navy`): The voice of the system. All headings, the hero field, the footer, primary buttons, and the brand mark's cell. On a light ground it is text; as a full-bleed field it inverts the whole page and becomes the hero and footer.
- **Navy Depressed** (`navy-hover`): The pressed state of every solid navy fill. Never used as a resting color — its only job is to darken a navy button on hover.

### Secondary
- **Registration Gold** (`gold`): Trim, and only trim. The corner tick pairs, the two sanctioned rule placements, the active nav underline, the `[CONFIRM]` callout's left edge, and the on-navy button's hover fill. It never carries type on a light ground and never fills a large area.
- **Deep Gold** (`gold-deep`): The typographic form of gold. Eyebrow labels on light grounds and the `40+` plus sign in the numbers band. Exists solely because Registration Gold cannot legally be text on paper.

### Tertiary
- **Slate** (`slate`): Interaction, not brand. Link rest color, input focus border, and the focus ring on every interactive element. Deliberately cooler and lower-contrast than navy so a link reads as a link and resolves to navy on hover.

### Neutral
- **Paper** (`paper`): The warm sunken ground. Alternating sections, cards, the numbers band, form panels, and `[CONFIRM]` callouts. The system's second surface, and the reason no shadow is needed.
- **White** (`white`): The page ground and the raised card. Inside a paper section, a white card is the "lifted" state.
- **Body Graphite** (`body`) / **Body Graphite Soft** (`body-soft`): Running text and secondary text. Both are warm-leaning greys, never pure black.
- **Muted Light** (`muted-light`): Placeholder text only.
- **Warm Hairline** (`line`): The default 1px divider on white or paper — section rules, `dl` rows, card borders, service rows.
- **Paper Edge** (`line-warm`) and **Band Divider** (`line-warm-strong`): Progressively warmer, stronger hairlines for the numbers band's outer edge and its internal vertical divider.
- **Cool Hairline** (`line-cool`): Input borders only — the one place the divider goes cool, so a field reads as an input rather than a rule.
- **On-Navy Lede / Soft / Muted / Label** (`on-navy-lede`, `on-navy-soft`, `on-navy-muted`, `on-navy-label`): The pale blue ladder for type on navy, from hero lede down to footer column heads. Descending contrast, never pure white except for headings and links.
- **Error** (`error`): Invalid input border and form error text. The only red in the system.

### Named Rules

**The Deep Gold Rule.** Registration Gold is never type on a light field — it measures 2.3:1 and fails AA. When gold must be typographic on white or paper, it is Deep Gold (4.6:1). There is no exception, including for large display sizes.

**The Trim Rule.** Gold marks edges; it does not fill areas. Ticks, rules, a 2px active underline, a 3px callout border. The single exception is the on-navy button's hover fill, where gold sits against navy rather than paper.

## Typography

**Display Font:** Spectral (with Georgia, 'Times New Roman', serif)
**Body Font:** Archivo (with system-ui, -apple-system, 'Segoe UI', sans-serif)

**Character:** A transitional serif with real weight in its display sizes against a grotesque with a large x-height and clean numerals. The pairing does the practice's two-audiences job structurally — Spectral carries the authority and the long-view voice, Archivo carries anything procedural: labels, tags, credentials, form fields, buttons. Neither ever borrows the other's role.

### Hierarchy
- **Display** (Spectral 700, `clamp(34px, 8.5vw, 108px)`, line-height 1.02, -0.023em): Page H1 only, one per page. Five per-page clamps exist — hero, services, about, contact, legal — differing only in their desktop ceiling; all five share the same 34px mobile floor.
- **Headline** (Spectral 600, `clamp(24px, 3.6vw, 38px)`, line-height 1.15, -0.016em): Every H2 site-wide. Legal pages use a lower ceiling (28px) but the same 24px floor.
- **Title** (Spectral 600, `clamp(22px, 2.4vw, 26px)`, line-height 1.2, -0.012em): H3 — card headings, service group headings, legal sub-points.
- **Deck** (Spectral 500, `clamp(23px, 2.8vw, 30px)`, line-height 1.4): The serif paragraph directly under an H1. A supporting voice, never a second heading.
- **Quote** (Spectral 400 italic, `clamp(24px, 3vw, 32px)`, line-height 1.35): Pull quotes only. The system's only italic.
- **Stat** (Spectral 600, `clamp(44px, 5.2vw, 56px)`, line-height 1): The numbers band figures. Units inside a figure drop to 28px at weight 500.
- **Lead** (Archivo 400, `clamp(17px, 1.7vw, 19px)`, line-height 1.7): Intro paragraphs under a deck.
- **Body** (Archivo 400, 16px, line-height 1.7): Running text. Measure is set per element in `ch` (20–68ch), never left to fill the container.
- **Label** (Archivo 600, 11px, 3px tracking, uppercase): Eyebrows, category tags, footer column heads, form field labels, "On this page" heads. Tracking varies by role — 3.5px for descriptors and eyebrows, 2.5px for tags and names.

### Named Rules

**The Real Heading Rule.** Tracked uppercase is a label, never a heading level. If a line is an H2 or H3, it gets real serif type at real heading size. Caps treatment marks an eyebrow, tag, column head, or field label — nothing else.

**The No-Wrap Rule.** Every tracked uppercase label carries `white-space: nowrap`. The tracking consumes the last pixel of the line box, so a label silently re-breaks on a font fallback. A label that will not fit at 390px gets *shorter copy* — the `label__long` / `label__short` pair — never a wrap.

**The One Size Per Level Rule.** At the 390px reference, every H1 is 34px, every H2 is 24px, every H3 is 22px — across marketing and legal pages alike. Clamp ceilings differ; the mobile floor does not. Four sizes doing the work of two heading levels is the failure this rule prevents.

## Layout

A single centered column, not a grid system. Container is 1000px (`container`), widening to 1040px for the hero only (`container-hero`). Gutters and section rhythm step down at two breakpoints and nowhere else: 56px / 80px at desktop, 32px / 64px below 900px, 24px / 48px below 620px.

Sections alternate ground rather than stacking cards: a `section--paper` band against the white page, closed with `section--rule-top` / `section--rule-bottom` hairlines. Two-column arrangements are explicit `grid` declarations at the page level (`0.9fr 1.1fr` for service rows, `1fr 1fr` for credentials) that collapse to a single column at 620px. The credentials grid uses `display: contents` on its groups so both headings sit on grid row 1 and both columns start flush regardless of how either heading wraps.

Measure is controlled per element with `ch` helpers (`measure-20` through `measure-68`), because the comps set line length per block rather than globally. The header is sticky (`z-index: 20`); below 860px the full lockup swaps to the mark alone and the nav becomes a full-screen navy overlay.

### Named Rules

**The Clamp-Not-Breakpoint Rule.** Type scales by `clamp()` from the 390px reference to the desktop comp value, and letter-spacing is expressed in `em` so it tracks the clamp. The breakpoints that exist (900px, 620px, 860px for the header) are layout-only. Adding a type media query means the clamp was wrong.

## Elevation & Depth

**There is no elevation system.** No shadow scale, no ramp, no `box-shadow` anywhere in the codebase — this is a deliberate, load-bearing brand rule, not an oversight to correct.

Depth is carried two ways. First, **tonally**: white (`white`) against paper (`paper`) is the entire surface hierarchy, and inside a paper section a white card reads as lifted. Second, by **hairline**: a 1px warm rule (`line`) separates sections, `dl` rows, service rows, and card edges, with warmer, stronger variants (`line-warm`, `line-warm-strong`) reserved for the numbers band. The navy hero and footer invert the page outright, which is the strongest depth move available and is used exactly twice per page.

### Named Rules

**The Flat Rule.** A `box-shadow`, gradient, blur, or transform-on-hover anywhere in this system is a bug, not an enhancement. Surfaces separate by tone and hairline. An earlier "offset block" button treatment was explicitly rejected during design — do not reintroduce drop-shadow or offset effects under any name.

## Shapes

Square, without exception. `--radius` is `0` and it is not a knob to turn — buttons, cards, inputs, panels, and images are all trimmed square. The system's entire form vocabulary is the rectangle, the hairline, and the tick.

Rules come in three weights: 1px hairline (`rule-hairline`) for dividers, 2px (`rule-brand`) for the gold brand rule and the active nav underline, 3px (`rule-heavy`) for the pull-quote bind, the `[CONFIRM]` callout border, and the hero's top and bottom edges.

The corner ticks are the one non-rectangular gesture, and they are still built from rules: two perpendicular borders forming an L, placed as a diagonal pair. They frame the hero (56px, 24px inset) and the headshot (26px, 14px inset), scaled by CSS custom properties rather than redrawn.

### Named Rules

**The Square Corner Rule.** Radius is 0 everywhere. Not softened for cards, not softened for inputs, not softened for images, not softened "just for the mobile menu."

**The Two Sanctioned Gold Rules.** Gold rules have exactly two placements. (1) **Page opener** — one horizontal rule under a page's own H1, 160×4px on the home hero and 88×2px on interior pages. (2) **Vertical bind** — a 2–3px vertical rule joining two things that belong together: the mark to the wordmark in the lockup, and a pull quote to its attribution. A third placement is a bug, not a new pattern. Several decorative ones were added and removed during design; if one reappears in a comp, treat it as a regression.

**The Diagonal Tick Rule.** Ticks are always a top-right / bottom-left pair. Four corners reads as a border and destroys the registration-mark meaning; two reads as alignment. They also degrade — below 32px the mark drops its ticks entirely rather than shipping them clipped.

## Components

Refined and restrained. Every component is a flat fill or a hairline border, and its state changes are color-only over 180ms — no movement, no shadow, no scale.

### Buttons
- **Shape:** Square (`0` radius), 1px border always present (transparent when unused, so no layout shift between variants).
- **Sizes:** Small (13px/24px, 14px type), Medium (17px/34px, 19px type), Large (22px/46px, 19px type).
- **Primary (`btn--navy`):** Navy fill, white text. Hover darkens to Navy Depressed.
- **On-navy (`btn--on-navy`):** White fill, navy text — for use on the navy hero. Hover **inverts to gold fill** with navy text, the one place gold fills an area.
- **Outline (`btn--outline`):** Transparent with a navy border and navy text, 16px type at 13px/26px padding. Hover fills navy with white text. Used for secondary actions like the form's reset.
- **Mobile:** `btn--block-mobile` goes full-width below 620px.
- **Focus:** 3px slate outline, 2px offset — inherited from the global rule, never overridden.

### Cards / Containers
- **Corner Style:** Square (`0`).
- **Background:** Paper (`card`) on a white section; White (`card--white`) inside a paper section. The card's ground is always the opposite of the section it sits in — that inversion *is* the elevation.
- **Border:** 1px warm hairline. No shadow.
- **Internal Padding:** 36px/32px for paper cards, 44px/40px for white cards, dropping to 32px/24px below 620px.

### Inputs / Fields
- **Style:** White fill, 1px **cool** hairline (`line-cool`) — the one divider in the system that goes cool, so a field reads as enterable rather than as a rule. Square, 14px padding, 16px type.
- **Label:** 11px tracked uppercase in navy, stacked above the field with an 8px gap.
- **Focus:** Border shifts to slate, plus the global 3px slate focus ring.
- **Error:** Border and message in Error red, applied via `:user-invalid` so it only fires after the field has actually been touched.
- **Textarea:** `resize: vertical` only.

### Navigation
- **Desktop:** 14px Archivo medium links, 0.2px tracking, in a sticky white header with a 1px hairline bottom border. The active link takes weight 600, navy color, and a **2px gold bottom border** with 3px of padding — the third sanctioned gold placement and the only state indicator in the nav.
- **Mobile (below 860px):** The full lockup collapses to the mark alone, and a hamburger opens a full-screen navy overlay carrying large serif links, the CTA button, and phone/email.

### Definition Lists
The system's workhorse for every label/value pair — credentials, milestones, contact rows. Rows are `flex` with `space-between`, 16px vertical padding, and a 1px warm hairline on top plus one on the last child's bottom, so a list reads as a ruled ledger block. Terms are 16px navy at weight 500; values are 14px soft grey, `nowrap`.

### Pull Quote
A `figure` whose italic Spectral quote is bound to its attribution by a 3px vertical gold rule with `align-self: stretch`, at a 36px gap (20px below 620px). One of only two sanctioned vertical gold rules.

### Numbers Band
A paper band with a warm outer edge, splitting into two cells divided by a vertical `line-warm-strong` hairline. Each cell pairs an 11px tracked label with a Spectral stat figure; units inside a figure drop to 28px/500 and the `+` takes Deep Gold. Below 620px the vertical divider becomes a horizontal one and the cells stack.

### Corner Ticks
Reusable framing device (`.ticks` + `.tick--tr` / `.tick--bl`), sized entirely by `--tick-size`, `--tick-inset`, and `--tick-weight` custom properties so the hero and headshot instances share one implementation. `pointer-events: none`.

### Logo Lockup
Never hand-built or recreated in HTML/CSS — the brand mark is locked. Every instance renders from the official exports in `_design-system/brand-assets/` (mirrored into `public/assets/`), not a live-scaling component:
- **Header / legal-header**: `logo-compact.svg` / `logo-compact-reversed.svg` — mark + gold rule + wordmark, no descriptor or principal. Preferred over the bare mark per the asset manifest; its 32px-mark floor covers both the desktop (56px mark) and mobile (40px mark) header sizes.
- **Footer**: the full four-line lockup (mark + wordmark + descriptor + principal) — `logo-reversed-on-navy.png` above 620px, swapping to the vertical `logo-stacked-reversed.png` below it via `<picture>`, so the mark keeps room to breathe instead of shrinking toward the 32px floor.

See `_design-system/brand-assets/MANIFEST.md` for the complete asset list and usage rules.

### [CONFIRM] Callout
Drafted-but-unconfirmed legal language: 15px soft grey on paper with a 3px gold left border and 14px/18px padding. Deliberately conspicuous — it marks copy that must not ship as final.

## Do's and Don'ts

### Do:
- **Do** use Deep Gold (`#8a6a1e`) whenever gold must be typographic on a light ground; Registration Gold is trim only.
- **Do** invert the card's ground against its section — paper card on white, white card on paper. That inversion is the entire elevation system.
- **Do** give a tracked uppercase label `white-space: nowrap`, and shorten its copy rather than let it wrap at 390px.
- **Do** hold one size per heading level at the 390px reference: H1 34px, H2 24px, H3 22px, on every page type.
- **Do** scale type with `clamp()` from the mobile reference and express letter-spacing in `em` so it tracks.
- **Do** set line measure per block with the `ch` helpers rather than letting text fill the container.
- **Do** render the logo from the locked brand-asset files in `public/assets/` — the compact lockup (SVG) for header/legal-header, the full lockup (PNG, wide/stacked-reversed by breakpoint) for the footer. Never rebuild it from live text/CSS.
- **Do** keep the 3px slate focus ring at 2px offset on every interactive element — it is an accessibility requirement, not styling.

### Don't:
- **Don't** add a `box-shadow`, gradient, blur, scale, or offset-block effect anywhere. The system is flat by construction, and the offset-block button was explicitly rejected once already.
- **Don't** soften a corner. Radius is 0 for buttons, cards, inputs, panels, and images alike.
- **Don't** place a gold rule anywhere outside the two sanctioned uses — page opener under an H1, or vertical bind between two related elements.
- **Don't** draw ticks on four corners; the diagonal pair is what makes them registration marks rather than a frame.
- **Don't** use tracked uppercase as a heading level, or serif display type as a label.
- **Don't** put Registration Gold on paper or white as text, at any size or weight.
- **Don't** add a type media query — if the type is wrong at a width, the clamp is wrong.
- **Don't** introduce a second accent color, a cool grey into the warm hairline family, or a shadow-based "card" that competes with the paper/white inversion.
- **Don't** resemble the generic small-practice accountant template (corporate blue, stock handshakes, rounded cards), fintech SaaS (gradient mesh, glassmorphism, neon dark mode), or big-four corporate polish. The last one is the sharpest rejection: faceless enterprise gloss implies a large team, which is the exact opposite of this practice's differentiator.
