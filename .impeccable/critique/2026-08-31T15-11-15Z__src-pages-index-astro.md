---
target: Home page (src/pages/index.astro)
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-31T15-11-15Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design-review sub-agent · B: detector+browser-evidence sub-agent)

## Design Health Score — Home page

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Nothing signals the Contact CTA may lead to a form that can't currently submit (endpoint unset) |
| 2 | Match System / Real World | 4/4 | Vocabulary at full strength ("FOCUS reports," "Series 27") for institutional readers; plain language ("shoebox of receipts") for private ones |
| 3 | User Control and Freedom | 3/4 | No back-to-top or in-page nav on a long mobile scroll |
| 4 | Consistency and Standards | 3/4 | Component system applied consistently; see note below on the `dl__row--tight` finding |
| 5 | Error Prevention | 3/4 | The "not a client engagement" disclaimer under the CTA pre-empts anxiety before the click |
| 6 | Recognition Rather Than Recall | 3/4 | Contact is a button, not a nav link, breaking the nav's own pattern |
| 7 | Flexibility and Efficiency | n/a | Single-path marketing page; no power-user surface to score |
| 8 | Aesthetic and Minimalist Design | 3/4 | Restrained overall; undercut by a dense, undifferentiated services list |
| 9 | Error Recovery | 2/4 | No fallback signal on Home for the CTA's actual current form state |
| 10 | Help and Documentation | n/a | Marketing page; the tax-advice-notice link is the one appropriate "documentation" touchpoint |
| **Total** | | **23/32** | **Good (72%)** |

## Design Specificity Verdict

**LLM assessment:** Mixed. The content layer is unmistakably this practice — dated credentials, "Always, Never, Except For…", the specific two-audience framing — but the composition (hero → proof band → feature grid → testimonial → team-equivalent → CTA) is the default shape of a B2B SaaS landing page. Strip the copy and gold ticks, and the skeleton underneath could belong to almost anything.

**Deterministic scan:** detect.mjs found exactly one issue — an em-dash-overuse warning on Base.astro, and it's a confirmed false positive: every em-dash is inside build/routing comments or a single conventional title-separator, never rendered body prose.

**Visual overlays (browser injection succeeded):** the live detector found 15 anti-patterns. Verified against source:
- Real, confirmed: the header/footer logo lockup's descriptor and principal text renders at 7.5px, 8.5px, and 8px — recomputed Logo.astro's derived-ratio formula by hand and it matches exactly (header lockup: 64x0.117≈7.5px; footer: explicit descriptorSize={8.5} override; footer principal: 8.5x0.94≈8px). All three sit well under the design system's own 11px label floor, and carry extreme relative letter-spacing as a side effect (fixed 3.5px tracking on a 7.5px font ≈ 0.47em). Missed by the design-review pass entirely, because it only surfaces at the specific pixel sizes the lockup actually renders at in the header/footer.
- False positive: gray-on-color flagged #d7dfe8 on #16324d (the hero lede text) — computed actual contrast at 9.77:1, nowhere near a failure.
- False positive: kicker-above-heading x3 flagged the eyebrow-then-H2 pattern — this is DESIGN.md's own documented, intentional convention (.label--eyebrow), not drift.
- Plausible, unverified: line-length flagged ~90-107 characters/line against several measure-* blocks. Worth a look: ch-based measure tokens cap nominal width, but Archivo's actual average character width is narrower than the "0" glyph ch is defined against, so real rendered line length can run longer than the token name suggests.

## Overall Impression

The page is calm, disciplined, and clearly authored with real product knowledge — but two things undercut it in the exact moments that matter most: a chunking failure in the busiest content section (Services), and a legibility failure in the site's own brand mark that neither assessment would have caught alone. The biggest opportunity is tightening the Services list and fixing the lockup's tiny-size type before either becomes a "how did we ship this" moment.

## What's Working

- The disclaimer placement under the primary CTA ("Nothing you send is a client engagement until we both say so in writing") is the single best piece of UX writing on the page — it defuses the highest-stakes anxiety at the exact click moment, textbook "calm beats urgency."
- The credentials teaser -> About full-list pattern is genuine, correct progressive disclosure: Home shows 4 featured credentials with an explicit "Read the longer version →," never pretending to be complete.
- Color contrast is a real strength, not just an absence of failures — the detector's one contrast-shaped finding turned out to be a false positive when actually measured (9.77:1), and Deep Gold vs. Registration Gold is applied correctly everywhere checked.

## Priority Issues

**[P1] Logo lockup text is illegible at its shipped sizes — 7.5-8.5px, sitewide.**
- Why it matters: The header lockup's "ACCOUNTING & ADVISORY" (7.5px) and the footer's descriptor/principal line (8.5px / 8px) render below the design system's own 11px label floor, with extreme relative letter-spacing as a side effect (~0.3-0.47em). Present on every page, in the header (desktop) and footer (all viewports).
- Fix: Logo.astro's ratio-derived descriptor size (size x 0.117) breaks down at small size values. Either raise the minimum descriptor size with a floor (e.g. Math.max(10, round(size * 0.117))), or drop the descriptor line entirely below a size threshold the way ticks already degrade below 32px.
- Suggested command: /impeccable typeset (or /impeccable adapt if treated as a small-size responsive-degradation problem)

**[P1] Mobile section padding doesn't scale — a dead-space valley lands right before Contact.**
- Why it matters: #services, #about, #contact { padding-block: 96px; } in index.astro has no mobile breakpoint override, unlike every other spacing value on the page. Confirmed no such media query exists anywhere in the file. At 375px this reads as an unexplained blank gap between the Credentials card and "Tell me what you're dealing with" — right before the one conversion action.
- Fix: @media (max-width: 620px) { #services, #about, #contact { padding-block: var(--section-y-sm); } }, matching the token scale everything else on the page already uses.
- Suggested command: /impeccable adapt

**[P1] Services section presents 9 ungrouped rows in one scroll — a chunking violation.**
- Why it matters: "Everyday accounting" has 5 rows, "Funds & broker-dealers" has 4 — both at or over the ≤4-per-group working-memory ceiling, with no visual break between rows. A visitor arriving mid-crisis has to read past several rows to self-locate.
- Fix: Either cap Home's teaser at 4 per group (mirroring the credentials pattern — full list stays on Services), or add a visual weight break between 2 "primary" rows and the rest.
- Suggested command: /impeccable layout

**[P2] Contact is a CTA button, not a nav link — breaks the nav's own pattern.**
- Why it matters: nav in site.ts lists only Services and About. Contact only exists as a button. A visitor mentally modeling "the nav shows all top-level destinations" won't find it there.
- Fix: May be intentional (CTA vs. peer link is a legitimate distinction) — if so, no change needed. If not, add Contact as a nav link alongside the button.
- Suggested command: /impeccable clarify

**[P2] Every CTA on Home funnels into a form that may not currently submit.**
- Why it matters: Per PRODUCT.md, PUBLIC_CONTACT_ENDPOINT is unset, so Contact's form shows its fallback panel rather than sending. Home sends visitors there via three separate CTAs with zero signal of this. Not fixable on Home in isolation, but Home is the funnel's mouth.
- Suggested command: none (transport/config gap from the earlier audit, not a Home-page design fix)

Note on a fifth candidate: Assessment A also flagged Home's .dl__row--tight credentials styling as an undocumented inconsistency with About's. Checked the source directly — it's not undocumented: index.astro carries an explicit comment ("The Home credentials card runs a slightly tighter row than About's") confirming it's intentional. Downgraded out of the priority list.

## Persona Red Flags

**Riley (stress tester, arrives mid-examination/mid-notice):** Hits the 9-row Services wall while scanning under time pressure to confirm "does this person handle my exact situation" — no way to jump straight to "IRS representation" without reading past several other rows first. On mobile, lands in the P1 dead-space gap right before the one action they need to take.

**Casey (distracted mobile user):** The illegible 8.5px footer type is exactly what a thumb-scrolling, half-attention reader squints at and gives up on — on every page, not just Home. Also faces an unusually long hero-to-content scroll before any concrete service information appears.

**Sam (accessibility-dependent):** Contrast is genuinely solid everywhere checked (9.77:1 on the hero lede, Deep Gold correctly reserved for typographic gold). But the 7.5-8.5px logo type is a real problem independent of contrast — below any reasonable minimum legible size regardless of color, and this persona is exactly who it fails first.

## Minor Observations

- hero__title's max-width: 13ch is a deliberate, working typographic choice — it forces the "Always, Never, / Except For…" break consistently across widths.
- The tagline ("Where regulatory expertise meets personal service") appears twice on one page (numbers band + pull quote) with no variation — not wrong, just worth knowing.
- The line-length detector finding is plausible but unverified — worth a manual check of measure-55/measure-62 blocks in Archivo at actual render size before treating it as confirmed.

## Questions to Consider

- If institutional and private-client work must carry truly equal billing, is "Everyday accounting" getting 5 services to "Funds & broker-dealers"' 4 a quiet ranking signal, or just how the list happened to grow?
- If the ticks and gold trim were stripped from Home, would the layout alone still register "40 years as a registered FINOP" to a compliance officer — or does all the specificity live only in the words?
