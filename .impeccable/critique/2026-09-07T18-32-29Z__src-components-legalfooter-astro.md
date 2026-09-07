---
target: site-policy footer
total_score: 20
max_score: 20
na_heuristics: 1,5,7,9,10
p0_count: 0
p1_count: 0
timestamp: 2026-09-07T18-32-29Z
slug: src-components-legalfooter-astro
---
Method: dual-agent (A: design-review agent · B: detector/browser-evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | No system-status surface in a footer |
| 2 | Match System / Real World | 4 | Plain-language labels, real copyright text |
| 3 | User Control and Freedom | 4 | "Home" link is an always-present escape hatch |
| 4 | Consistency and Standards | 4 | The flex-end vs. Footer.astro flex-start divergence is now documented inline with its rationale — no longer undocumented drift (was 3, docked for the same gap) |
| 5 | Error Prevention | n/a | No input on this page |
| 6 | Recognition Rather Than Recall | 4 | Logo + copyright + two links — nothing to remember |
| 7 | Flexibility and Efficiency | n/a | No power-user path applies to a footer |
| 8 | Aesthetic and Minimalist Design | 4 | Two links, one brand block — nothing extraneous |
| 9 | Error Recovery | n/a | No error states on this surface |
| 10 | Help and Documentation | n/a | Not applicable to a footer |
| **Total** | | **20/20** | **Excellent (100%)** — up from 19/20 |

## Design Specificity Verdict

**LLM assessment**: Still grounded, not generic. The footer renders the real locked brand SVGs (`logo-reversed.svg` desktop → `logo-compact-reversed.svg` below 620px, confirmed live via `img.currentSrc`), sized per MANIFEST's 320px floor on desktop. Colors resolve to the documented on-navy ladder. Every threshold traces to a specific brand rule, cited inline in the component's own comments.

**Deterministic scan**: `detect.mjs --json src/components/LegalFooter.astro` — exit 0, `[]`, zero findings. The live-overlay injection independently confirmed it: `[impeccable] No anti-patterns found.` Consistent with the prior run — the detector was clean before and after, since none of the fixed issues were anti-pattern-shaped; they were UX-judgment calls the two-assessment process exists to catch.

**Visual overlays**: Nothing to overlay on a clean run. Fresh-load screenshots and DOM measurements at 994px and 375px confirmed the breakpoint swap fires correctly: `logo-reversed.svg` (320×96px) → `logo-compact-reversed.svg` (~125×40px) at 620px.

## Overall Impression

All five issues from the prior critique verified fixed with concrete evidence, not just re-inspected by eye. The footer now closes the legal pages the way it was meant to: real brand asset, right-sized on every viewport, keyboard-accessible, and documented where a choice could otherwise look like an oversight. Score moved from 19/20 to a clean 20/20 on the heuristics that apply to a footer.

## What's Working

- **Every fix verified against live-rendered evidence, not just source.** Mobile footprint measured at 196.8px / 24.2% of an 812px viewport (down from ~330px / ~45%); alt text confirmed `"NTA, Inc."` via `img.alt`; focus outline confirmed `rgb(255,255,255)` solid via real keyboard `Tab` navigation and a `:focus-visible` match check, not just `.focus()`.
- **Consistency score moved from 3 to 4** — the flex-end/flex-start divergence from `Footer.astro` is no longer silent; the component's header comment now states why, which is exactly what a reviewer scanning both footers side by side needed.
- **The long-label wrap fix was independently stress-tested twice** (by both assessments, with different injected strings) and held at both mobile and desktop widths with no overflow.

## Priority Issues

**[P3] `<img>` width/height attributes still don't reflect either rendered size** — the HTML attributes read 400×120, but desktop renders at 320×96 and mobile at ~125×40 (compact's own ~3.1:1 ratio, not 400:120's 3.33:1). No visible layout shift results since the ratios are close and `height: auto`/fixed-height CSS overrides consistently, but a future CLS audit assuming the HTML attributes match rendered size would be misled. This was flagged as a minor observation in the prior critique too — still true, still low-risk, not a regression.
- **Suggested command**: `/impeccable harden` (only if a CLS audit is ever on the table — otherwise skippable)

## Persona Red Flags

**Jordan (First-Timer)**: None found — unambiguous, brand mark still recognizable at compact size.

**Sam (Accessibility-Dependent User)**: None found now — alt text de-duplicated from the header readout, keyboard focus confirmed clearly visible (white 2.4px solid outline, verified via real `Tab` navigation and a `:focus-visible` match).

**Riley (Stress Tester)**: None found — mobile footprint down to ~24% of viewport, long-label stress test (independently repeated by both assessments) showed no overflow at either breakpoint.

## Minor Observations

- Contrast reconfirmed unchanged and passing: copyright text 4.93:1, nav links 6.04–6.05:1, both against navy — both clear AA for the small `--type-fine` text they're used at (short of AAA 7:1, not required here).
- One assessment noted the `<picture>` source only re-evaluates on a fresh page load, not on a live browser resize without reload — standard `<picture>` behavior, not a bug, but worth knowing if anyone tests this responsively without reloading and briefly sees the wrong asset.
- Cross-link correctness reconfirmed on both legal pages (site-policies ↔ tax-advice-notice).

## Questions to Consider

- Now that the compact mark handles mobile, is there still a case for giving this quiet closing bar a bit more breathing room above MANIFEST's 320px *minimum* on desktop, rather than sitting exactly at the floor?
- Is the `<picture>`-only-reevaluates-on-load behavior worth a short code comment somewhere more central than this one component, so it doesn't get mistaken for a bug elsewhere in the codebase?
- With all five prior issues verifiably fixed and only one pre-existing P3 remaining, has this footer reached diminishing returns for further design iteration?
