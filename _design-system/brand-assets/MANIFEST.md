# NTA, Inc. — Logo Asset Package

Everything a build needs to ship the identity without recreating it. Colours, fonts, and geometry match `readme.md` / `tokens/` in the parent design system — this package is the exported, ready-to-drop-in subset.

## Fonts
Display: **Spectral** (serif) · Text/UI: **Archivo** (sans) — both Google Fonts, SIL OFL, no licensing cost.
```html
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## Colors
Navy `#16324D` · Slate Blue `#2C5F8A` · Gold `#C9A24A` (accent only — never text on light) · Deep Gold `#8A6A1E` (gold-as-text, 4.6:1) · Paper `#FAF8F3`

## Confirmed contact facts
Phone 312-339-3750 · Email contact@ntacpa.com · Hero treatment: Navy (see readme "Website status")

## /svg — vector masters (mark only, exact geometry, no font dependency)
| File | Use |
|---|---|
| `favicon.svg` | Browser tab / `<link rel="icon">` |
| `logo-mark-navy.svg` | Standard mark, navy field |
| `logo-mark-reversed.svg` | Mark on navy/dark backgrounds — white field |
| `logo-mark-mono-black.svg` | Single-colour print, engraving, fax |
| `logo-mark-mono-white.svg` | Outline-only, transparent — for photo/dark backgrounds |
| `logo-mark-circular.svg` | Pre-cropped circular version (gold underscore, no corner ticks) |

Full lockups with the wordmark and descriptor are PNG-only (below) — real browser text rendering, not approximated SVG metrics.

## /png — raster exports (real Spectral/Archivo rendering)
| File | Size | Notes |
|---|---|---|
| `favicon-16.png` | 16×16 | Single "N", no ticks |
| `favicon-32.png` | 32×32 | Full mark, thin ticks |
| `apple-touch-icon-180.png` | 180×180 | iOS home screen |
| `icon-512.png` | 512×512 | PWA manifest |
| `logo-primary.png` | 670×248 | Transparent · full lockup for light backgrounds |
| `logo-reversed-on-navy.png` | 670×248 | Transparent · full lockup, white text, for navy/dark backgrounds |
| `logo-stacked.png` | 368×439 | Transparent · narrow columns, mobile headers |
| `linkedin-avatar-400.png` | 400×400 | Transparent corners · circular crop |
| `og-image-1200x630.png` | 1200×630 | Open Graph / social share card |
| `linkedin-banner-1128x191.png` | 1128×191 | Content clears the left 27% — LinkedIn's avatar overlaps that corner |
| `email-signature.png` | 726×233 | 2× retina-scale |

## Rules that matter
- Gold is **never** text on a light background (2.3:1, fails AA) — use Deep Gold `#8A6A1E`.
- The full lockup (`logo-primary` / `logo-reversed-on-navy`) shouldn't render below **120px wide** — swap to `logo-stacked.png` or a mark SVG instead.
- Clear space around any lockup: **½ the mark's height**, all sides.
- Square corners everywhere except the app icon (10px radius, applied by the OS) and circular crops.
- Corner ticks disappear below 32px and on any circular crop (replaced by the gold underscore, already baked into `logo-mark-circular.svg` and `linkedin-avatar-400.png`).

## For a React/Tailwind build instead of static files
The parent design system ships a `Logo` React component (`components/brand/Logo.jsx`) that renders any of these configurations live from CSS at any size, rather than a fixed export — prefer it over these PNGs if the site build is componentized. This package exists for cases that need real files: `<link rel="icon">`, `<meta property="og:image">`, README badges, or a CMS media library.

Full brand rationale, voice, and the misuse/contrast rules: see `readme.md` and `NTA Brand Identity.dc.html` in the parent project.
