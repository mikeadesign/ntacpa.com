# Handoff: NTA, Inc. Website

## Overview
Full marketing website for NTA, Inc. — Nicholas T. Avello, CPA, a solo accounting practice serving individuals/small businesses (tax, bookkeeping) and hedge funds/broker-dealers (regulatory accounting, FINOP work). Five pages: Home, Services, About, Contact, plus two legal pages (Site policies, Tax advice notice). A mobile reference sheet shows all screens at 390px.

## About the Design Files
The files in this bundle are **design references built in HTML** — high-fidelity prototypes of look, content, and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's environment** (React, Vue, whatever framework is already in use — or the best available choice if none exists yet), using that environment's own component and state patterns. Treat the HTML/inline-styles as a precise visual and structural spec, not as markup to paste in.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and copy are locked. Recreate pixel-for-pixel where practical.

## Screens / Views

### 1. Home (`nta-home-document.dc.html`)
The hero is **navy** — confirmed final.
- **Header**: fixed-position not required (static); logo mark + wordmark left, nav links right (Services, About, Contact), white background, 1px bottom border `#ece8df`.
- **Hero**: full-width section, background `#16324d`, 3px gold (`#c9a24a`) border top and bottom. Gold corner tick marks (2px, 56×56px, in from the section's padding edge). Content column max-width 1040px, centered, padding 144px/56px/128px. Gold eyebrow label (11px, 600 weight, 3.5px letter-spacing, uppercase) → H1 "Always, Never, Except For…" (Spectral serif, 700, 108px, line-height 0.98, -2.6px letter-spacing, white) → 160×4px gold rule → 22px lede paragraph (pale blue `#d7dfe8`, max 55ch) → single CTA button "Start a conversation" (white bg, navy text, 22px/46px padding, no border-radius; hover → gold bg/border, navy text). **No phone number in the hero** — removed deliberately, CTA is the only action.
- **Numbers band**: cream background `#faf8f3`, 1px border `#e6dcc3`, two-column grid, vertical divider `#ddd2b8`.
- **Credentials/FINOP section**: two-column, "Credentials" as H3 (26px serif) card label, list of credential rows (`dt`/`dd` pairs, 1px top border `#ece8df` between rows).
- **Pull quote section**: cream/bordered band, quote + attribution joined by a **vertical** 2–3px gold rule (this is one of only two sanctioned uses of the gold rule — see Design Tokens).
- **Footer**: navy background, wordmark, nav links (`#9fb2c6`, hover white), Chicago-area + remote-service line, phone, email, copyright, licensure line (placeholder — see Open Items), Site policies / Tax advice notice links.

### 2. Services (`nta-services.dc.html`)
- **Header**: page-level H1 "Tax, Bookkeeping & Regulatory Accounting Services" (Spectral 700, 60px, -1.3px letter-spacing, max 28ch so it wraps two lines with "Services" never stranded alone), followed by a 30px serif deck paragraph (max 40ch) and a 19px body paragraph.
- **Two service groups**, each its own section: "Everyday accounting" and "Funds & broker-dealers" — group heading is H2, Spectral 600, 38px (same size as every other H2 on the site). Each service row: 64×64px navy icon tile + H3-level service name (not literally tagged H3 in the current build — flag for dev; see Notes) + description + an 11px letterspaced caps tag line (e.g. "SERIES 27 · REGISTERED 40 YEARS") — caps treatment here is a **label, not a heading**.
- **Closing CTA band**: H2 (38px) + single "Start a conversation" button only — no phone number.

### 3. About (`nta-about.dc.html`)
- H1: "Nicholas T. Avello, CPA" (62px Spectral 700, max 22ch), 28px serif deck ("Four decades at the intersection of accounting and the markets."), bio paragraph.
- Headshot: 4:5 image, gold corner tick marks (26×26px, 14px inset) in their **own** relative wrapper (not shared with the caption block below it — this was a bug fix, keep the two elements structurally separate).
- **Credentials & registrations** and **Milestones**: single two-column CSS grid, both H2 headings (38px) on their own grid row so both columns' content starts flush regardless of heading line-wrap; each column is a `dl` of label/value rows with top-border dividers.
- Milestones list: three entries (1983 CPA, 1986 Series 27 — flagged `[year to confirm]`, 1990 founded).
- Closing CTA band: H2 + single button, no phone.

### 4. Contact (`nta-contact.dc.html`)
- H1 "Contact" (72px) + 30px deck "Tell me what you're dealing with." (max 30ch).
- Contact details block: labelled TELEPHONE / EMAIL rows (this is the one place a raw phone number is appropriate outside the footer).
- Form: Name / Email / Message only (no phone field), floating 11px caps labels, 1px border inputs (`#e2e5e9`), navy focus ring (`#2c5f8a`, 3px, offset 2px), submit button navy/white. Success state (`sent` flag) swaps the form for a "Received. Thank you." confirmation with a reset button — implement as local component state, not page navigation.

### 5. Site policies (`nta-site-policies.dc.html`) & 6. Tax advice notice (`nta-tax-notice.dc.html`)
Stripped chrome (no header/footer — just logo, wordmark, "back" link). "On this page" jump nav (H2-level, sticky not required). Body sections are H2 (28px), sub-points are H3 (22px, e.g. "Governing law", "Accuracy", "Changes"). **Both pages contain `[CONFIRM]` callout blocks** — a distinct visual treatment (15px text, `#4a5562`, cream background, 3px gold left border) — these are drafted-but-unconfirmed legal language and must not be treated as final copy. See Open Items.

### 7. Mobile reference (`nta-mobile.dc.html`)
Not a page — a single sheet showing all five pages' content at 390px width, for responsive reference only. Home frame mirrors the navy hero. All heading sizes here were normalized to one scale per level (H2 34px / H3 24px across every frame) — carry that same "one size per level" discipline into the real responsive breakpoints.

## Interactions & Behavior
- **Numbers band / pull-quote visibility**: both are individually toggle-able sections on Home (were built as optional show/hide flags during design iteration) — safe to just always-show both in production unless product wants them configurable.
- Button hover states: solid-fill buttons darken (navy → `#0f2437`) or invert (white → gold on navy hero) — no shadows, no scale transforms, no offset/skeuomorphic effects (an earlier "offset block" CTA treatment was explicitly rejected — do not reintroduce drop-shadow-style button offsets).
- Link hover: `#2c5f8a` → `#16324d`.
- Focus-visible: 3px solid `#2c5f8a` outline, 2px offset, on all interactive elements (links, buttons, inputs, textareas). This is a hard accessibility requirement, not optional polish.
- Contact form: client-side submit swaps to a confirmation panel (`sent`/`notSent` conditional state). No actual submission endpoint is wired up in the prototype — dev needs to connect this to a real backend/email service.
- No animations beyond simple color/background transitions (~180ms ease) on hover and focus.

## State Management
Minimal — this is a static marketing site, not an app:
- Home: `showNumbers` (bool), `showQuote` (bool).
- Contact: `sent` (bool) — form submitted vs. not.
- Site policies: `showContents` (bool) — whether the "On this page" jump nav renders.
No global state, no data fetching beyond the eventual form submission.

## Design Tokens

**Colors**
- Navy (primary/text/dark bg): `#16324d`
- Navy hover/darker: `#0f2437`
- Gold (accent): `#c9a24a`
- Gold dark (eyebrow text): `#8a6a1e`
- Cream (alt background): `#faf8f3`
- Cream border: `#ece8df` / `#e6dcc3` / warm variant `#ddd2b8`
- Body text: `#3c4652` (primary), `#2c3540` (hero lede on cream), `#4a5562` (secondary/caption)
- Pale blue (text on navy): `#d7dfe8`, `#9fb2c6`, `#7ba3c4`
- Link: `#2c5f8a` default, `#16324d` hover
- Input border: `#e2e5e9`
- Focus ring: `#2c5f8a`, 3px, 2px offset
- White: `#ffffff`

**Typography**
- Serif (headings, decks, quotes): **Spectral** — weights 400/500/600/700, italic 400/500 available. Google Fonts.
- Sans (body, UI, labels): **Archivo** — weights 400/500/600/700/800. Google Fonts.
- System fallbacks: `Georgia, serif` for Spectral; `system-ui, sans-serif` for Archivo.
- Scale in use: H1 60–108px depending on page (home hero largest), H2 38px (universal — every H2 site-wide is this size), H3 22–26px depending on context, deck/subtitle paragraphs 22–30px, body 16–19px, caption/label 11–12px.
- Letterspaced uppercase (11px, 600 weight, 2.5–3.5px tracking) is reserved for: eyebrow labels, category/registration tags, footer column heads, form field labels, "On this page" nav label. **Never used for an actual heading level** — if it's an H2/H3, it gets real serif type at real heading size.

**Spacing**: section vertical padding 56–150px depending on hero vs. body section; content max-widths 1000–1120px; consistent 1px hairline dividers (`#ece8df` on white/cream, `#2c5f8a`-family on navy).

**Radius / shadow**: **none anywhere.** All corners are square; the only "decoration" is the 2px gold corner tick marks on the hero and the headshot image, and 1px hairline borders. No box-shadows, no rounded buttons/inputs/cards. This is a deliberate, load-bearing brand rule — don't add either.

**The gold rule — exact usage (do not extend)**
1. **Page opener**: one horizontal gold rule per page, directly under that page's own H1 only. Hero gets a heavy weight (~160×4–6px); interior pages ~88×2px.
2. **Vertical bind**: a 2–3px *vertical* gold rule joining two things that belong together — the mark to the wordmark in the logo lockup, and a pull-quote to its attribution.
3. Optionally, an **active nav-link underline** (2px gold) as a state indicator — confirm with the team whether to keep vs. navy-only active state.
No other horizontal or vertical gold rules should appear — several were added then removed for being decorative rather than systematic (above eyebrows, beside category headings, etc.). If a design comp reappears with a stray gold rule, treat it as a bug, not a new pattern.

## Assets
- `assets/nicholas-avello-headshot.png` — real, final photo (confirmed), 1122×1402px, used on About (4:5 crop) and Home hero (1:1 crop). Only image asset in the site; everything else is type/color/geometry.

## Open Items — needs resolution before ship
1. **Legal review required**: 7 `[CONFIRM]` blocks across Site policies and Tax advice notice — analytics retention period, IP anonymisation setting, applicable state privacy statute, governing-law state, Circular 230 wording, licensure jurisdiction, PTIN disclosure. Do not ship this copy as final; route to counsel.
2. **Two content facts still pending** (phone number is now confirmed — 312-339-3750, live everywhere): licensure jurisdiction (every page footer + both legal pages, currently `[STATE JURISDICTION TO CONFIRM]`), and Series 27 registration year (About milestones list, currently "[year to confirm]"; the "40 years registered" figure elsewhere is separately confirmed). PTIN if the practice uses one.
3. Per-page `<title>` / meta description tags are now live on every page (see each file's `<helmet>`) — review the drafted copy.
4. Favicon, apple-touch-icon, and OG share image are wired in from `assets/` — confirm the OG image once real photography/brand assets are finalized upstream.
5. Service item names inside the two Services groups render as styled text, not consistently tagged as H3 in the current markup — verify heading level when rebuilding and tag accordingly (should be H3, matching About/Home's outline).

## Files
- `nta-home-document.dc.html` — Home page (navy hero, confirmed final)
- `nta-services.dc.html` — Services
- `nta-about.dc.html` — About
- `nta-contact.dc.html` — Contact
- `nta-site-policies.dc.html` — Site policies (legal, draft)
- `nta-tax-notice.dc.html` — Tax advice notice (legal, draft)
- `nta-mobile.dc.html` — mobile reference sheet, all pages at 390px
- `assets/nicholas-avello-headshot.png` — headshot photo
