# NTA, Inc. — website

Marketing site for **NTA, Inc.**, the accounting practice of **Nicholas T. Avello, CPA**.
Built from the design handoff in [`_dev-handoff/`](_dev-handoff/README.md),
against the brand system in [`_design-system/`](_design-system/readme.md).

Astro, no UI framework. Six static pages. No JavaScript bundle is emitted at
all — the two scripts (the mobile menu and the contact form's panel swap) are
inlined into the pages that need them, about 0.5 KB on most pages and 1.7 KB on
Contact. Everything else ships as HTML and CSS.

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

## Project context

Two files at the root carry the durable context, and are worth reading before
changing anything visual or factual:

- [`PRODUCT.md`](PRODUCT.md) — product truth. Audiences, positioning, voice,
  confirmed credentials, and the decisions that are deliberately still open.
  Notably: **presentation is 50/50 between the institutional and private
  audiences**, and that is a standing rule, not a default awaiting revision.
- [`DESIGN.md`](DESIGN.md) — the visual system as actually implemented, with
  its tokens as machine-readable frontmatter and the invariants written as
  named rules. `.impeccable/design.json` is its sidecar (tonal ramps, motion,
  and renderable component snippets).

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
  utils/url.ts          withBase() — makes internal links base-path aware
  styles/
    tokens.css          brand tokens + the site type scale
    global.css          reset, layout primitives, shared components
    legal.css           shared by the two legal pages
  components/
    Header.astro        desktop nav + full-screen mobile menu
    Footer.astro        LegalHeader/LegalFooter for the stripped legal chrome
    ContactForm.astro   form → sent panel swap
    CtaBand.astro  PullQuote.astro
  layouts/Base.astro    document shell, meta, chrome selection
  pages/                index · services · about · contact · site-policies · tax-advice-notice
    robots.txt.ts       generated, not static — Disallow: / on preview, Allow + Sitemap on prod
public/                 favicons, apple-touch-icon, OG image, headshot
```

Icons and the social card are the official exports from
`_design-system/brand-assets/`, wired up in `Base.astro`. Don't hand-redraw
them; re-export from the design system if they need to change.

**Type scale** is `clamp()`-driven in `tokens.css`, running from the 390px
mobile reference values up to the desktop comp values, with letter-spacing in
`em` so it tracks. That is why there are almost no type media queries — the
breakpoints that remain are layout only. Two tokens (`--type-h2-legal-sm`,
`--type-h3-legal`) are deliberately flat rather than clamped, because their
clamp floors undercut the shared mobile size for their heading level.

## Brand rules the code enforces

These are load-bearing, not preferences. From `_design-system/readme.md`, and
stated as named rules in [`DESIGN.md`](DESIGN.md):

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
- **One size per heading level at 390px**: H1 34px, H2 24px, H3 22px, on every
  page type including the legal pages.
- **Focus-visible**: 3px `#2c5f8a`, 2px offset, on every interactive element.
- Never hand-build or recreate the logo in HTML/CSS. The lockup renders from
  the locked exports in `_design-system/brand-assets/` (mirrored into
  `public/assets/`) — the **compact** lockup (mark + gold rule + wordmark,
  SVG) for the header/legal-header, and the full four-line lockup (SVG) for
  the footer, wide above 620px and stacked-reversed below it. SVG is safe
  here because the asset package's lockup SVGs carry their text as outlined
  vector paths, not `<text>` + `font-family` — no webfont dependency, so
  nothing to fall back and clip against the `viewBox`. (An earlier package
  version set live text instead; that broke exactly this way when loaded via
  `<img src="*.svg">`, which can't see the host page's loaded fonts — fixed
  upstream, and PNG is no longer needed for this.)

## Before this ships

Two things are unresolved and are deliberately visible in the UI rather than
guessed at. The remaining placeholders live in `pending` in
[`src/data/site.ts`](src/data/site.ts).

1. **Legal review.** Three `[CONFIRM]` blocks across the two legal pages —
   IP anonymisation and the cookie banner, analytics and inquiry retention,
   and applicable state privacy statute — plus the legal effective date.
   **This copy is drafted, not reviewed. Route it to counsel before launch.**
2. **The contact form has no transport.** The intake decision is made — email
   straight to Nicholas via a form service — but nothing is wired yet. Set
   `PUBLIC_CONTACT_ENDPOINT` (see `.env.example`); the specific service is
   still unchosen. Until it is set the form does *not* fake a success — it
   shows a panel pointing at the phone number and email instead.

One more item is not a code change but must not be missed: **the cutover has to
preserve ntacpa.com's existing URLs**. That inventory has not been gathered yet
and needs auditing against the live site before launch, not assuming.

Resolved since the handoff: licensure jurisdiction (**Illinois**), the Series 27
registration year (**1986**), the phone number, the email address, and the full
credentials list, which was verified against Nicholas's official FINRA/NFA
exam-history record. Also resolved, confirmed directly by Nicholas: no PTIN is
displayed, no limitation-of-liability clause is needed, AML/PATRIOT Act
compliance stays off the Services page (dropped on purpose, not missed), the
Terms of Use governing-law state is **Illinois** (confirmed on its own, not
inferred from licensure), and the formal Circular 230 disclosure is inserted
as provided.

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
- **The credentials list runs longer than the comps', and About groups it.**
  Seven entries, since the verified record turned out to be larger than the
  four the comps showed; the array itself stays CPA-first then ascending by
  series number (`src/data/site.ts`), but About re-groups it into "Principal &
  Supervisory" (27, 30) and "General Industry & Product" (3, 6, 62, 99) — not
  in the comps at all, added at Nicholas's request to match how his own
  FINRA/NFA exam-history record categorizes them. Home still shows an
  unwrapped four-entry teaser; the grouping only applies to About's full list.

## Contact constants

`site.email` is `contact@ntacpa.com` — confirmed, and the former `ntainc@att.net`
is retired with this site. `site.phone` is `312-339-3750`. One constant, one edit.
