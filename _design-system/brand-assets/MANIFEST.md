# NTA, Inc. — Logo Asset Package

Everything a build needs to ship the identity without recreating it. Colours, fonts, and geometry match `readme.md` / `tokens/` in the parent design system — this package is the exported, ready-to-drop-in subset.

## Fonts
Display: **Spectral** (serif) · Text/UI: **Archivo** (sans) — both Google Fonts, SIL OFL, no licensing cost.
```html
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## Colors
Navy `#16324D` · Slate Blue `#2C5F8A` · Gold `#C9A24A` (accent only — never text on light) · Deep Gold `#8A6A1E` (gold-as-text, 4.6:1) · Paper `#FAF8F3`

On navy, in ladder order: White `#FFFFFF` (12.6:1) · `#9FB2C6` (7.0:1) · `#7BA3C4` (5.3:1) · `#7EA6C7` (5.11:1, dimmest — small tracked labels). The dimmest step was `#4D7A9E` in v1.0 and failed AA at 2.87:1; use `#7EA6C7`.

## /svg — vector masters (all text outlined, no font dependency)
| File | Use |
|---|---|
| `favicon.svg` | Browser tab / `<link rel="icon">` |
| `logo-mark-navy.svg` | Standard mark, navy field |
| `logo-mark-reversed.svg` | Mark on navy/dark backgrounds — white field |
| `logo-mark-mono-black.svg` | Single-colour print, engraving, fax |
| `logo-mark-mono-white.svg` | Outline-only, transparent — for photo/dark backgrounds |
| `logo-mark-circular.svg` | Pre-cropped circular version (gold underscore, no corner ticks) |
| `logo-primary.svg` | Full lockup on light — mark · rule · wordmark · 2-line descriptor |
| `logo-reversed.svg` | Full lockup on navy/dark |
| `logo-compact.svg` | Header lockup on light — mark · gold rule · wordmark |
| `logo-compact-reversed.svg` | Header lockup on navy/dark |
| `logo-stacked.svg` | Stacked lockup on light |
| `logo-stacked-reversed.svg` | Stacked lockup on navy/dark |

**Text converted to outlines — safe for `<img>`, no webfont dependency.** Every lockup SVG here carries its wordmark, descriptor, and principal line as filled vector paths traced from real Spectral/Archivo glyphs: no `<text>` elements, no `font-family` anywhere. They render identically whether or not the consuming context has the webfonts loaded — `<img src="*.svg">`, CSS `background-image`, email, third-party embeds, and print all match.

These are the **preferred** header/footer assets: crisp at any zoom and a fraction of the PNG weight. Use the PNGs only where SVG is not an option (some email clients, OG/social cards, favicons, CMS media libraries that reject SVG).

Earlier versions set this text with `font-family: Spectral, serif`. That silently fell back to a wider system serif inside an `<img>` tag — which has no access to the host page's fonts — and clipped against the fixed `viewBox` (`logo-compact.svg` truncated "NTA, Inc." to "NTA, In"). Fixed as of this package; if you ever regenerate these files, outline the text.

## /png — raster exports (for contexts that can't take SVG)
| File | Size | Notes |
|---|---|---|
| `favicon-16.png` | 16×16 | Single "N", no ticks |
| `favicon-32.png` | 32×32 | Full mark, thin ticks |
| `apple-touch-icon-180.png` | 180×180 | iOS home screen |
| `icon-512.png` | 512×512 | PWA manifest |
| `logo-primary.png` | 670×248 | Transparent · full lockup for light backgrounds |
| `logo-reversed-on-navy.png` | 670×248 | Transparent · full lockup, white text, for navy/dark backgrounds |
| `logo-stacked.png` | 368×439 | Transparent · narrow columns, mobile headers |
| `logo-stacked-reversed.png` | 422×374 | Transparent · stacked, white text, for navy/dark backgrounds |
| `logo-compact.png` | 356×112 | Transparent · mark + rule + wordmark, no descriptor — site header |
| `logo-compact-reversed.png` | 356×112 | Transparent · compact, white wordmark, for navy headers |
| `linkedin-avatar-400.png` | 400×400 | Transparent corners · circular crop |
| `og-image-1200x630.png` | 1200×630 | Open Graph / social share card |
| `linkedin-banner-1128x191.png` | 1128×191 | Content clears the left 27% — LinkedIn's avatar overlaps that corner |
| `email-signature.png` | 726×233 | 2× retina-scale |

## Rules that matter
- Gold is **never** text on a light background (2.3:1, fails AA) — use Deep Gold `#8A6A1E`.
- The full lockup (`logo-primary` / `logo-reversed-on-navy`) shouldn't render below **120px wide** — swap to `logo-compact` (header bands), `logo-stacked` (narrow columns), or a mark SVG instead.
- **Compact** is the preferred scaled-down header lockup — the bare mark only when the space is square. Its floor is a **32px mark**; below that, mark only.
- Clear space around any lockup: **½ the mark's height**, all sides.
- Prefer the `/svg` lockups over the `/png` equivalents in the site header, footer, and legal header — text is outlined, so they are portable *and* resolution-independent.
- Square corners everywhere except the app icon (10px radius, applied by the OS) and circular crops.
- Corner ticks disappear below 32px and on any circular crop (replaced by the gold underscore, already baked into `logo-mark-circular.svg` and `linkedin-avatar-400.png`).

## For a React/Tailwind build instead of static files
The parent design system ships a `Logo` React component (`components/brand/Logo.jsx`) that renders any of these configurations live from CSS at any size, rather than a fixed export — prefer it over these PNGs if the site build is componentized. This package exists for cases that need real files: `<link rel="icon">`, `<meta property="og:image">`, README badges, or a CMS media library.

Full brand rationale, voice, and the misuse/contrast rules: see `readme.md` and `NTA Brand Identity.dc.html` in the parent project.
