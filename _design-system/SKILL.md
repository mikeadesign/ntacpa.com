---
name: nta-inc-design
description: Use this skill to generate well-branded interfaces and assets for NTA, Inc. — the accounting practice of Nicholas T. Avello, CPA — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Logo lockups** — four configurations, each with a reversed twin for navy grounds. `components/brand/Logo.jsx` renders all of them from a single `size` (the mark's edge length) and enforces the degradation rules; prefer it over the exported files in any componentized build:

```jsx
<Logo variant="primary" size={106} />                 // default signature
<Logo variant="compact" size={56} />                  // site header
<Logo variant="compact" tone="reversed" size={56} />  // header on navy
<Logo variant="stacked" tone="reversed" size={72} />  // navy footer
<Logo variant="mark" size={32} />                     // favicon
```

Static files live in `brand-assets/` — `/svg` masters (all text outlined: no webfont dependency, safe in `<img>`, preferred for header/footer) and `/png` exports at exact target sizes for contexts that reject SVG. See `brand-assets/MANIFEST.md` for the file-by-file use table.

Three rules break this brand faster than anything else — check them first:

1. **Gold (`#C9A24A`) is never text on a light background** — 2.3:1, fails AA. Use Deep Gold `#8A6A1E` for gold type on white or Paper.
2. **Every uppercase tracked descriptor needs `white-space: nowrap`** — the tracking leaves zero slack, so those lines silently re-break without it.
3. **Square corners, no shadows on the logo, no gradients anywhere.** This identity is print-derived; cards sit on tone or a hairline.
4. **Never hand-build a lockup.** The full lockup below 120px wide is the most common break — use `variant="compact"` (32px mark floor) for headers, `variant="mark"` below that.
