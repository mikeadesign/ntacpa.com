# NTA, Inc. — website

Marketing site for **NTA, Inc.**, the accounting practice of **Nicholas T. Avello, CPA**.
Built from the design handoff in [`design_handoff_nta_website/`](design_handoff_nta_website/README.md),
against the brand system in [`_design-system/`](_design-system/readme.md).

Astro, no UI framework. Six static pages, ~2 KB of JavaScript total (the mobile
menu and the contact form's panel swap) — everything else ships as HTML and CSS.

## Running it

```bash
npm install
npm run dev
```

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build |
| `npm run check` | Astro + TypeScript diagnostics |

`dist/` is flat HTML (`/services.html`, not `/services/index.html`), so it drops
onto any static host. Hosts that strip `.html` — Netlify, Cloudflare Pages,
Vercel, S3+CloudFront — serve the `/services` links as-is.

## Beta preview

Every push to `main` deploys to **https://mikeadesign.github.io/ntacpa.com/**
via [`.github/workflows/pages.yml`](.github/workflows/pages.yml) — GitHub
Pages, building through Actions. That's a review link, not the production
deploy; it ships with `<meta name="robots" content="noindex, nofollow">` so it
never gets indexed alongside the real domain.

It serves from a project subpath rather than a root, which internal links
have to account for — `BASE_PATH`/`SITE_URL` (set by the workflow) drive
`astro.config.mjs`, and every internal `href`/`src` in the templates runs
through [`withBase()`](src/utils/url.ts) so it resolves correctly under that
subpath. A plain `npm run build` (no env vars) is unaffected and still
produces the root-relative production build.

Google Analytics (`src/layouts/Base.astro`) only fires on that production
build — it's gated off on the preview and on `astro dev` so beta and local
traffic never lands in production analytics.

## Layout

```
src/
  data/site.ts          every repeated fact + the unresolved placeholders
  styles/
    tokens.css          brand tokens + the site type scale
    global.css          reset, layout primitives, shared components
    legal.css           shared by the two legal pages
  components/
    Logo.astro          the lockup — all geometry derived from one `size`
    Header.astro        desktop nav + full-screen mobile menu
    Footer.astro        LegalHeader/LegalFooter for the stripped legal chrome
    ContactForm.astro   form → sent panel swap
    CtaBand.astro  PullQuote.astro
  layouts/Base.astro    document shell, meta, chrome selection
  pages/                index · services · about · contact · site-policies · tax-advice-notice
```

**Type scale** is `clamp()`-driven in `tokens.css`, running from the 390px
mobile reference values up to the desktop comp values, with letter-spacing in
`em` so it tracks. That is why there are almost no type media queries — the
breakpoints that remain are layout only.

## Brand rules the code enforces

These are load-bearing, not preferences. From `_design-system/readme.md`:

- **Gold `#c9a24a` is never text on a light field** (2.3:1, fails AA). Deep Gold
  `#8a6a1e` exists for that case — see `.label--eyebrow`, `.numbers__plus`.
- **Radius 0 and no shadows, anywhere.** Cards sit on tone or a hairline.
- **Tracked uppercase labels always `white-space: nowrap`.** The tracking leaves
  zero slack, so they silently re-break on a font fallback. Where a label will
  not fit at 390px, it gets *shorter copy* (`.label__long` / `.label__short`),
  never a wrap.
- **The gold rule has exactly two uses**: one horizontal rule under a page's own
  H1, and a vertical rule binding two things that belong together (the logo
  lockup, a pull quote to its attribution).
- **Focus-visible**: 3px `#2c5f8a`, 2px offset, on every interactive element.
- Never hand-build a lockup. `Logo.astro` derives tick inset, tick size, stroke
  weight and glyph size from the mark's edge length and drops the ticks below
  32px, per the degradation table.

## Before this ships

Three things are unresolved and are deliberately visible in the UI rather than
guessed at. All live in `pending` in [`src/data/site.ts`](src/data/site.ts).

1. **Legal review.** Seven `[CONFIRM]` blocks across the two legal pages —
   analytics retention, IP anonymisation, applicable state privacy statute,
   governing-law state, Circular 230 wording, licensure jurisdiction, PTIN.
   **This copy is drafted, not reviewed. Route it to counsel before launch.**
2. **Three content facts** — licensure jurisdiction (every footer + both legal
   pages), the Series 27 registration year (About), the effective date on the
   legal pages.
3. **The contact form has no transport.** Set `PUBLIC_CONTACT_ENDPOINT` (see
   `.env.example`). Until it is set the form does *not* fake a success — it
   shows a panel pointing at the phone number and email instead.

## Where this deviates from the comps

Every one of these is deliberate; revert any you disagree with.

- **Home H2s are 38px, not 36px.** The handoff states twice that every H2 on the
  site is 38px; the Home comp renders 36px. Took the stated system rule.
- **Interior pages carry an 88×2px gold rule under the H1.** The handoff lists
  this as the gold rule's first sanctioned use and gives the interior-page
  dimension; the Services/About/Contact/legal comps omit it. Took the rule.
- **The contact form has an error state.** Not in the comps, which only had
  `sent` / `not sent`. Reuses the confirmation panel's treatment — no new
  colours or geometry.
- **Service names are `<h3>`** on Services, and the Home service list is a
  `<ul>`. The comps used styled `<div>`s; the handoff flags this for fixing.
- **`aria-label`led landmarks, `<figure>`/`<blockquote>` for pull quotes, and a
  `<dl>` for every label/value pair** — semantics the flat prototype could not
  express.

## Contact constants

`site.email` is `contact@ntacpa.com`, per the comps. The practice's current
address is `ntainc@att.net`; the design system notes the move happens with this
site. One constant, one edit.
