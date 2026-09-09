---
target: the services page
total_score: 19
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 3
timestamp: 2026-09-09T12-38-48Z
slug: src-pages-services-astro
---
Method: dual-agent (A: design-review agent · B: detector/browser-evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Sticky header + gold active-nav underline correctly show location |
| 2 | Match System / Real World | 4 | Vocabulary is exact and audience-appropriate on both sides — no translation-down |
| 3 | User Control and Freedom | 3 | Ordinary nav/back behavior, no traps |
| 4 | Consistency and Standards | 3 | Row pattern is internally consistent, but the sitewide paper/white rhythm reads as hierarchy on this two-section page |
| 5 | Error Prevention | n/a | No forms or destructive actions on this page |
| 6 | Recognition Rather Than Recall | 3 | Tag is a good scan aid but sits after the paragraph, not before it |
| 7 | Flexibility and Efficiency | n/a | Marketing/persuade-mode page, no repeat-user shortcuts expected |
| 8 | Aesthetic and Minimalist Design | 3 | Clean per the design system, but 9 dense rows in one continuous scroll starts to feel like a document |
| 9 | Error Recovery | n/a | No error states possible here |
| 10 | Help and Documentation | n/a | The closing CTA functions as informal help but only appears once, at the bottom |
| **Total** | | **19/24** | **Good (79%)** |

## Design Specificity Verdict

**LLM assessment**: Not generic — the copy uses real vocabulary ("FOCUS reports," "net capital," "K-1s," "NAV support") rather than translated-down marketing-speak, and the ledger-row treatment matches the site's "printed sheet" system precisely. Where it falls short of full "equal billing" is structural, not cosmetic: every sequencing decision on this page — the H1 word order, the deck line, the group order — consistently positions private/individual work as primary and institutional/regulatory work as the addendum. Within each row the two groups are treated identically (that part is honored well); it's placement and framing across the page that aren't neutral.

**Deterministic scan**: `detect.mjs --json src/pages/services.astro` — exit 0, `[]`, zero findings on the static file. The live-rendered overlay found **9 anti-patterns**, all `wide-tracking`, all landing exactly on the 9 tracked-caps service tags (e.g. "INDIVIDUALS · FAMILIES · HIGH-NET-WORTH"). The source has an explicit comment at line 49 — "A label, not a heading — see the handoff on tracked caps" — and this is the same tracked-uppercase-label convention flagged (and judged a sitewide pattern, not a defect) in the About page critique. Treated the same way here: not an action item for this page specifically.

**Visual overlays**: Confirmed live, 9 markers positioned exactly on the tag elements, consistent with the CLI/live split above.

## Overall Impression

The row-level craft is genuinely strong and the two intro sentences are calibrated in weight, not just length — real equal-billing execution at the sentence level. But it's undercut by page-level sequencing: the H1, the deck line, the section framing (paper vs. plain white), and the group order all consistently put private work first and regulatory work second, which is the exact asymmetry PRODUCT.md's "equal billing" rule forbids, just expressed through structure rather than content. Assessment B also surfaced a real, verified (real keyboard Tab, not scripted) accessibility gap: the focus ring is present everywhere but nearly invisible against navy.

## What's Working

- **The service-row composition is on-brand, not templated.** The grid ratio, hairline top rule, serif name / sans-serif detail split, and tracked tag read as a ledger line — the "printed sheet" metaphor applied to content structure, identical for both audiences at the row level.
- **The two intro sentences are calibrated in weight, not just length.** Neither the individual nor the institutional intro reads as more important than the other — equal billing executed well at the sentence level, even where the page-level structure undercuts it.
- **The page-opener reassurance line does double duty** — simultaneously a wayfinding aid (there are two lists) and an anxiety-reducer (it's fine not to know which one), without a quiz widget or forced-categorization UI that would feel over-engineered for a small static site.

## Priority Issues

**[P1] The paper/white section framing accidentally encodes audience hierarchy**
- **Why it matters**: The alternating paper/white background is a sitewide neutral-rhythm device, but this page has exactly two sections, so it maps 1:1 onto audience — "Everyday accounting" gets the framed, elevated paper section with rule-top/rule-bottom; "Funds & broker-dealers" sits on plain white with no enclosing rule. A compliance officer reaching the Funds section right after leaving a framed section reads it as "the plain second half" — the inverse of what PRODUCT.md's equal-billing rule requires.
- **Fix**: Give both groups matching rule-top/rule-bottom framing regardless of background, or make Funds its own paper band too (a three-zone paper/white/paper rhythm) so the "elevated" treatment isn't tied to one audience.
- **Suggested command**: `/impeccable layout`

**[P1] Sequencing consistently favors the private/individual audience**
- **Why it matters**: The H1 ("Tax, Bookkeeping & Regulatory Accounting Services"), the deck ("Everyday accounting, **and** the regulatory work most solo practices don't do"), and the `serviceGroups` data order (reused identically on Home) all put private work first and frame regulatory work as the add-on. No single instance is severe, but the pattern is total across every ordering decision on the page — and it's baked into the shared data model, not just this page's copy.
- **Fix**: Reword the deck into two grammatically equal clauses rather than an "and...too" subordination, and consider whether private-work-always-first should be treated as a real rule or revisited in `site.ts`.
- **Suggested command**: `/impeccable clarify`

**[P1] Focus ring is present but fails contrast against navy — confirmed via real keyboard Tab**
- **Why it matters**: Assessment B tabbed through all 13 interactive elements with real `Tab` key presses (not scripted `.focus()`) and confirmed every element does receive a visible outline. But the outline color (`rgb(44,95,138)`, the sitewide `--nta-slate` focus ring) computes to 6.75:1 against white — fine — and only **1.95:1** against navy `rgb(22,50,77)` — footer links and both navy CTA buttons (header "Start a conversation," CtaBand's CTA) sit well under WCAG 2.2's 3:1 non-text-contrast minimum. This is the same root cause already fixed once for the legal footer (`LegalFooter.astro`'s local override), but it's unresolved at the global level — every navy surface sitewide inherits it, this page just happens to have two of the worst-affected elements (both CTA buttons).
- **Fix**: Add a navy-aware focus-ring override at the global level (e.g. a `[data-tone="navy"]` or background-aware token) rather than patching component-by-component, since `LegalFooter.astro` already needed its own local fix for the same issue.
- **Suggested command**: `/impeccable audit`

**[P2] No anchor/jump navigation for a 9-row list**
- **Why it matters**: `group.id` (`everyday`, `funds`) is set in the markup but unused for navigation. A compliance officer under exam-week time pressure has to scroll past 5 unrelated rows to reach FINOP content.
- **Fix**: A lightweight two-item jump control near the H1 ("Individuals & businesses" / "Funds & broker-dealers") — small enough to respect the calm, unadorned brand voice, not a filter widget.
- **Suggested command**: `/impeccable layout`

**[P2] The tag is sequenced after the payoff it's supposed to provide**
- **Why it matters**: `INDIVIDUALS · FAMILIES · HIGH-NET-WORTH` and `SERIES 27 · REGISTERED 40 YEARS` are the fastest "is this row for me" signals but sit below the full detail paragraph — readers have to read the paragraph before reaching the one line that would have told them to skip it.
- **Fix**: Move the tag above or beside the service name (small-caps eyebrow position) so scanning works top-down.
- **Suggested command**: `/impeccable layout`

**[P3] The reassurance CTA appears only once, at the very bottom** — for a page this content-dense (9 rows), a filer who gets uneasy mid-scroll (e.g. partway through the Funds section, unsure if they've wandered into the wrong page) has no reassurance touchpoint between the top intro and the very end. A one-line echo near the Everyday/Funds transition, in the existing fine/soft body style, would close the gap without adding urgency.

## Persona Red Flags

**Jordan (confused first-timer scanning for their service)**: Has to read the full paragraph on every row before reaching the tag that would tell them in three words whether it applies to them. On mobile, rows can blur together by row 3–4 with only the serif H3 name as an anchor.

**Compliance officer scanning for FINOP-specific depth**: Must scroll past the entire 5-row Everyday section with no signal that "the regulatory depth is further down." Lands on Funds only to find it on plain white immediately after a framed paper section — a subtle but real "this is the plain second half" cue, the inverse of what this reader needs to feel.

**Anxious individual filer worried their situation is "too messy"**: Well served by the opening reassurance line and closing CTA — both land correctly and calmly. Gap: no reassurance between the top and bottom if they stall out mid-page seeing "FINOP," "FOCUS reports," "NAV support" in the second section, even though it doesn't apply to them.

## Minor Observations

- Everyday accounting has 5 services, Funds has 4 — a real content asymmetry (14% taller / 19% more words), not a styling one, and defensible since it reflects actual service-count differences — but it does make the Everyday section visibly larger on this specific page.
- About.astro orders audiences institutional-first in its prose, while Services/Home order private-first throughout — the site doesn't have a deliberate, consistent tie-breaking convention for which audience is named first; it lands differently per page.
- All 25+ text/background contrast pairs on the page pass WCAG AA (lowest: footer text at 4.93:1) — this is about text contrast, distinct from the focus-ring contrast issue above (a non-text UI component check).
- No content images on this page (only brand-asset logo SVGs in shared chrome); heading hierarchy is clean (1 H1, three H2s, no skipped levels).

## Questions to Consider

- If a compliance officer and an anxious individual filer both open this exact page, which one currently feels more "found" by row 3 of their section — and is that gap acceptable given the stated 50/50 rule?
- The paper/white alternation is a sitewide rhythm rule, not an audience rule — but on a page with exactly two sections, is a rhythm rule that happens to map onto audience actually distinguishable from a hierarchy rule to a reader who's never seen the rest of the site?
- Would the deck line "and the regulatory work most solo practices don't do" survive being read back as "and, secondarily, the harder stuff" — and if not, is there a two-clause version that gives both halves equal grammatical footing?
