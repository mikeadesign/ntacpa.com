---
target: site-policy footer
total_score: 19
max_score: 20
na_heuristics: 1,5,7,9,10
p0_count: 0
p1_count: 0
timestamp: 2026-09-07T13-32-58Z
slug: src-components-legalfooter-astro
---
Method: dual-agent (A: design-review agent · B: detector/browser-evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | No system-status surface in a footer |
| 2 | Match System / Real World | 4 | Plain-language labels ("Home", "Site policies"/"Tax advice notice"), real copyright text |
| 3 | User Control and Freedom | 4 | "Home" link is an always-present escape hatch from a legal page |
| 4 | Consistency and Standards | 3 | Matches Footer.astro's asset/breakpoint/color system; docks for the flex-end vs. flex-start alignment divergence from the main footer |
| 5 | Error Prevention | n/a | No input on this page |
| 6 | Recognition Rather Than Recall | 4 | Logo + copyright + two links — nothing to remember |
| 7 | Flexibility and Efficiency | n/a | No power-user path applies to a footer |
| 8 | Aesthetic and Minimalist Design | 4 | Two links, one brand block, one copyright line — nothing extraneous |
| 9 | Error Recovery | n/a | No error states on this surface |
| 10 | Help and Documentation | n/a | Not applicable to a footer |
| **Total** | | **19/20** | **Excellent (95%)** |

Five heuristics apply to a legal-page footer; the other five are structurally n/a for this surface type.

## Design Specificity Verdict

**LLM assessment**: Grounded, not generic. The footer renders the real locked-asset SVG lockup (`logo-reversed.svg` desktop → `logo-stacked-reversed.svg` mobile, same 620px breakpoint as `Footer.astro`), sized at the MANIFEST-mandated 320px floor, using the site's `--surface-inverse` / `--nta-on-navy-*` color ladder and `--type-fine` scale. The width, breakpoint, and color choices all trace to specific rules in `MANIFEST.md` — this reads as one brand system's footer, not a template's stock treatment.

**Deterministic scan**: `detect.mjs --json src/components/LegalFooter.astro` — exit code 0, `[]`, zero findings. The live-server overlay injection independently confirmed this: console reported `[impeccable] No anti-patterns found.` No false positives to flag since nothing fired — the detector is silent here because it checks anti-patterns, not the UX-judgment issues below (footprint, alignment, focus styling), which is exactly the split this two-assessment process expects.

**Visual overlays**: No overlay markers to report — a clean detector run produces none. Screenshots (desktop 994px and mobile 375px) confirm the `<picture>`/`<source>` breakpoint swap fires in the live DOM: `img.currentSrc` switches from `logo-reversed.svg` (320×96px) to `logo-stacked-reversed.svg` (180×172.95px) at 620px, matching source.

## Overall Impression

This footer went from plain styled text to the real, correctly-sized brand lockup, and it shows — the asset, the sizing, and the color system are all doing the right, specific thing. The gap isn't in whether the brand asset belongs here; it's in how much room it's allowed to take on a phone, and a couple of smaller consistency/accessibility details a detector can't see. The single biggest opportunity: the mobile stacked lockup is currently sized for legibility, not for footer proportion, and it dominates the one screen size where users are most likely to be scanning fast for the exit.

## What's Working

- **The lockup is the real locked asset, not a re-derivation.** `<picture>` renders `logo-reversed.svg` / `logo-stacked-reversed.svg` straight from the design system rather than hand-set text, so this footer can never silently drift from the brand the way the old plain-text version could.
- **The 320px / 620px thresholds are sourced, not guessed.** Both trace directly to MANIFEST's stated legibility floor (9px descriptor text) and the mark's crowding point, and the component's own comments cite the source — a future editor won't second-guess and shrink it without reading the reasoning first.
- **Bottom-alignment reads as one closing line.** `align-items: flex-end` lines the nav links up with the copyright text's baseline rather than the logo's — both blocks bottom out at the same y (confirmed at 994px viewport), so it reads as an intentional sign-off rather than two floating, unrelated blocks.

## Priority Issues

**[P2] Mobile footer footprint is oversized relative to what it closes**
- **Why it matters**: At 375px, the stacked lockup alone measures 180×173px; with the 8px gap, copyright line, 32px block gap, and nav links added, the footer occupies roughly 330px — over 45% of a 700px mobile viewport. A user finishing a dense legal page and looking to bail out via "Home" has to scroll a near-full extra screen height past a brand mark to reach two links.
- **Fix**: Size the mobile lockup smaller than 180px, or use `logo-compact-reversed.svg` (the header's compact mark, not the full stacked composition) at mobile widths — MANIFEST doesn't mandate 180px for a footer; that's this component's own choice, not a stated floor. Tighten the vertical gaps below 620px to match.
- **Suggested command**: `/impeccable adapt`

**[P2] Alt text gives no distinction between "brand mark" and "footer landmark"**
- **Why it matters**: The `alt` reads the full lockup text ("NTA, Inc. — ACCOUNTING & ADVISORY — Nicholas T. Avello, CPA"), appropriate for a content image, but a screen-reader user hits this full brand-name readout a second time in quick succession — once in the page header, once here — with nothing marking it as closing chrome rather than new content.
- **Fix**: Confirm the `<footer>` landmark is announced ahead of the image (it is, semantically) so the readout has context; consider whether the image needs its full descriptive alt here or whether a shorter `alt="NTA, Inc."` is sufficient given the landmark already establishes "this is the footer."
- **Suggested command**: `/impeccable audit`

**[P3] Alignment inconsistency with the main site footer**
- **Why it matters**: `Footer.astro` top-aligns its columns (`flex-start`); `LegalFooter.astro` bottom-aligns (`flex-end`). Both are locally justified, but a reviewer scanning both footers side by side will read the flipped vertical anchor as a small inconsistency rather than a deliberate variant, since nothing documents the difference.
- **Fix**: Add a one-line comment stating the rationale (single nav line paired with the copyright baseline vs. the main footer's taller multi-line columns), or reconsider top-aligning to visually match the parent footer.
- **Suggested command**: `/impeccable polish`

**[P3] No distinct `:focus-visible` treatment on the footer nav links**
- **Why it matters**: `.legal-footer__links a:hover` only changes color on hover; there's no explicit focus-visible style, so keyboard users tabbing to "Home" or the sibling link get only the browser's default outline, which may render with poor contrast against the navy field depending on user agent.
- **Fix**: Add an explicit `:focus-visible` outline (white or gold) matching the site's other interactive-focus treatment.
- **Suggested command**: `/impeccable audit`

**[P3] Long sibling-label edge case is untested but currently safe**
- **Why it matters**: Today's two real labels ("Home"/"Tax advice notice", "Home"/"Site policies") are short enough that wrapping never triggers, but there's no guard (truncation, `white-space` rule) against a longer label if a third legal page is ever added.
- **Fix**: No action needed now; note it if a third legal page is planned.
- **Suggested command**: `/impeccable harden`

## Persona Red Flags

**Jordan (First-Timer)**: None found. The two footer links are unambiguous, and the full brand lockup reassures Jordan they're still on the real NTA site after reading dense legal text, not on a broken sub-page.

**Sam (Accessibility-Dependent User)**: Hits two full brand-name announcements in quick succession (header, then footer) with nothing distinguishing "closing brand mark" from new content — the P2 alt-text finding above. Also affected by the missing `:focus-visible` styling (P3) when tabbing to the exit links.

**Riley (Stress Tester)**: On a 375×700 viewport, the footer's brand block alone (~330px, logo 173px tall) pushes the actual "Home" link roughly 280px below where the visible legal content ends — read as unnecessary scroll distance for what should be a fast two-link exit. This is the P2 mobile-footprint finding.

## Minor Observations

- Contrast passes comfortably by direct measurement: copyright text (`--nta-on-navy-muted`, rendered `rgb(123,163,196)`) at 4.93:1, nav links (`--nta-on-navy-soft`, rendered `rgb(159,178,198)`) at 6.05:1, both against the navy background `rgb(22,50,77)` — both clear the 4.5:1 AA floor for the small `--type-fine` text they're used at.
- The `<img>`'s HTML `width`/`height` attributes (400×120) don't match the CSS-rendered size (320×96 desktop, 180×172.95 mobile) — expected given `width: 320px; height: auto`, and it doesn't cause layout shift since the aspect ratio is preserved, but worth knowing if anyone later audits for CLS assuming the HTML attributes reflect rendered size.
- The stacked-reversed lockup's near-square aspect ratio (180×173) versus the wide lockup's (320×96) is inherent to the vertical composition, not a bug.

## Questions to Consider

- Is a 320px-wide, 96px-tall lockup — MANIFEST's stated *minimum* — really the right call for a footer whose job is to close quietly, or does using the floor-sized asset make it compete with the page content above it?
- If the stacked mobile lockup costs ~45% of a phone viewport's height to close two legal pages, is "always render the full locked lockup" being applied too literally here versus the main site footer, where there's far more surrounding content to justify the size?
- Was the flex-end vs. flex-start alignment difference from `Footer.astro` a deliberate call, or an artifact of building the two footers separately — should the design system encode which navy-footer variant gets which alignment?
