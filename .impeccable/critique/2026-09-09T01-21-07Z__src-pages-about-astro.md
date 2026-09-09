---
target: the about page
total_score: 22
max_score: 28
na_heuristics: 5,7,9
p0_count: 0
p1_count: 2
timestamp: 2026-09-09T01-21-07Z
slug: src-pages-about-astro
---
Method: dual-agent (A: design-review agent · B: detector/browser-evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active-nav gold underline correctly marks location; little else applies on a static page |
| 2 | Match System / Real World | 3 | Vocabulary matches each audience's real terms, but credential jargon has no bridge to lay meaning |
| 3 | User Control and Freedom | 3 | No traps, single clear CTA, no forced flow |
| 4 | Consistency and Standards | 4 | Rigorously matches the sitewide component system — buttons, dl pattern, section rules, type scale |
| 5 | Error Prevention | n/a | No inputs/forms on this page |
| 6 | Recognition Rather Than Recall | 3 | Credential grouping helps, but still assumes outside knowledge of what a Series 27/30/99 registration is |
| 7 | Flexibility and Efficiency | n/a | No power-user path applies to a static marketing page |
| 8 | Aesthetic and Minimalist Design | 4 | No ornament, exact adherence to the flat/hairline/tick vocabulary |
| 9 | Error Recovery | n/a | No error states present |
| 10 | Help and Documentation | 2 | Six unexplained FINRA/NFA registration codes sit in a row with no gloss connecting them to why a private client should care — a real gap, not a true n/a here |
| **Total** | | **22/28** | **Good (79%)** |

## Design Specificity Verdict

**LLM assessment**: Not a generic professional-services About page. The copy is load-bearing with real specifics — "reconcile to the rule, not to an expectation," "you get the accountant who prepared the return... you get the same one" — and the credential/milestone data is verifiably this practice's own (CPA 1983, Series 27 1986, grouped by the same Principal/Supervisory vs. General Industry taxonomy FINRA/NFA itself uses). The visual system (registration ticks, single gold rule, ledger-style `dl` rows) reinforces the "Registered Sheet" concept rather than decorating around it. This page could not be dropped into a generic accounting firm's site unchanged.

**Deterministic scan**: `detect.mjs --json src/pages/about.astro` — exit 0, `[]`, zero findings on the static source file. The live-rendered-page overlay found something the static scan couldn't: **4 anti-patterns** — `wide-tracking` (×3, on the small tracked uppercase labels: "CONTACT," "CERTIFIED PUBLIC ACCOUNTANT," "PRINCIPAL & SUPERVISORY") and `em-dash-overuse` (8 em-dashes across the full rendered page text). This is a real example of the detector catching something the static per-file scan structurally can't — the tracking values live in `global.css`, not in `about.astro`'s own markup, so only the rendered-DOM check surfaces them. That said, both findings need judgment, not automatic action: the tracked micro-label is an established, consistently-applied sitewide convention (seen in the header, footer, and section labels alike), so flagging it as an About-page-specific defect would be misleading — it's a systemic style choice worth a separate conversation, not a fix scoped to this page. The em-dash count is similarly whole-page (`document.body.innerText`), so it's counting header/footer boilerplate alongside About's own prose, not 8 em-dashes in About's copy alone.

**Visual overlays**: Overlay injection succeeded — console reported the 4 anti-patterns above, consistent with the CLI/live split noted.

## Overall Impression

This page has real craft and a real point of view — the voice, the credential grid engineering, and the brand-metaphor discipline are all doing genuine work, not decorating around an empty template. The gap is that the page's own standing rule — both audiences, one voice, **equal billing** — isn't actually being delivered where it matters most: the page's single densest, most persuasive block of proof is entirely institutional, and the one visual element built to carry personal trust (the headshot) is buried below several screens of registration numbers on mobile.

## What's Working

- **Voice does real persuasive work, not decoration.** "When a notice arrives three years later, you get the same one" encodes the "one person" differentiator into a concrete, memorable scenario instead of a bare claim.
- **Credentials/Milestones grid engineering.** `display: contents` with explicit grid-row placement keeps both `<h2>`s flush on row 1 regardless of wrap, and it collapses cleanly to one column at 860px — a genuinely well-solved layout problem.
- **Brand-metaphor discipline holds throughout.** Diagonal tick pairs on the hero and headshot, the single 88×2px gold rule under the H1, and the ledger-style `dl` rows are exactly the sanctioned uses `DESIGN.md` specifies — no gold-rule creep, no shadow/radius regressions anywhere on this page.

## Priority Issues

**[P1] Equal-billing imbalance in the page's densest section**
- **Why it matters**: The Credentials (7 rows) and Milestones (4 entries) block — the largest, most fact-dense content on the page, positioned right after the hero — is 100% institutional/regulatory (CPA + six FINRA/NFA registrations; milestones: 1983 CPA, 1986 Series 27, 1990 founding, "forty-plus years... still filing"). The private-client audience gets exactly one clause in one sentence anywhere on the page, with no comparable concrete evidence. PRODUCT.md's Principle 1 explicitly forbids the higher-value institutional work "express[ing] itself as more space, earlier placement, or louder emphasis" — by volume and specificity, that's what a scrolling visitor actually experiences here, even if unintentionally driven by which facts happen to be dated and verifiable.
- **Fix**: Add one milestone or line item anchored to the private-client side — e.g., a founding-era note that the practice has served individuals and small businesses alongside the regulatory work since 1990 — so the page's one proof section isn't entirely regulatory.
- **Suggested command**: `/impeccable clarify`

**[P1] Portrait is buried on mobile**
- **Why it matters**: On mobile, the `.portrait` block renders after all three hero paragraphs — roughly four full scroll-screens of body copy before the face appears. This page's entire premise is personal trust ("one person," "the same accountant"), and the single strongest trust signal is the last thing a mobile visitor sees in the hero, not the first.
- **Fix**: Reorder the mobile hero so the portrait (or a smaller instance of it) appears at or near the top, before the body paragraphs.
- **Suggested command**: `/impeccable adapt`

**[P2] No bridge from credential jargon to relevance for the private-client reader**
- **Why it matters**: "Series 30 — NFA Branch Manager," "Series 99 — Operations Professional," etc. are correct per the site's "plain, not simplified" voice rule, but nothing connects them back to why a family or small-business visitor should care. As written, the block reads purely as "look how regulated I am."
- **Fix**: One connecting sentence near the credentials heading — e.g., that the same standard of rigor applies whether the filing goes to the SEC or the IRS.
- **Suggested command**: `/impeccable clarify`

**[P2] The site's strongest reassurance line for an anxious filer never appears on the trust page**
- **Why it matters**: `src/data/site.ts` already contains "Federal and state returns, including years you'd rather not talk about" — exactly the reassurance an anxious back-taxes filer needs — but it only surfaces on Services, not on the page that's explicitly about "can I trust this person."
- **Fix**: Echo that sentiment in the About hero's third paragraph, or link/tease Services from there.
- **Suggested command**: `/impeccable clarify`

**[P2] Primary nav links and the CTA button showed no visible focus outline under scripted focus — needs a manual keyboard check to confirm** — Assessment B focused all 20 interactive elements via `element.focus()` and read computed outline styles. The header/mobile-nav "Services"/"About" links, the "Start a conversation" CTA, and the mobile-menu-close button all returned `outlineStyle: none`, while every footer link and the skip-link returned a visible `2.4px solid rgb(44,95,138)` outline. No CSS rule was found that explicitly strips outline from `.btn` or the nav links, and Chrome's `:focus-visible` heuristic can suppress outline on scripted `.focus()` for elements a prior mouse interaction in the same session already touched (this browser session had clicked the mobile menu open/closed earlier) — so this may be a testing artifact rather than a real gap. Worth a real `Tab`-through to confirm before treating as confirmed.
- **Suggested command**: `/impeccable audit`

**[P3] Redundant "since 1983" repetition** — the CPA-since-1983 fact appears four times in a single page view (hero paragraph 1, credentials row, milestones row, footer copyright). Repetition-for-persuasion fits the site's voice, but four instances in one scroll session risks reading as padding rather than reinforcement.

## Persona Red Flags

**Individual filer with unfiled back taxes (anxious, private audience)**: Never sees "back taxes," "notice," "unfiled," or any acknowledgment of a messy situation anywhere on this page — that empathy only lives on Services. The page's only concrete evidence block (credentials + milestones) offers nothing relevant to them. On mobile, the reassuring human face doesn't appear until after several screens of registration-heavy copy — the wrong ordering for someone who needs to feel "this person is approachable" quickly.

**Compliance officer vetting a FINOP (institutional audience)**: Well served overall — registrations grouped by the same taxonomy FINRA/NFA itself uses, licensure jurisdiction stated, 40-year tenure repeated three times. Gap: no verification path (e.g., a BrokerCheck reference) anywhere on the page — a compliance-minded reader evaluating credibility would likely want one.

**Jordan (First-Timer)**: The two-audience premise is stated in a single dense sentence ("hedge funds and broker-dealers on one side, individuals, families and small businesses on the other") with no visual reinforcement of the split — it's told, not shown, so a first-time reader could easily miss that this is the core positioning rather than a passing detail.

## Minor Observations

- All 25 distinct text/background color pairs on the page pass WCAG AA (lowest measured: footer "Cookies: analytics only" text at 4.93:1); no contrast failures found.
- Heading hierarchy is clean: exactly one H1, three H2s, no level-skipping. The "Always, Never, Except For…" pull quote is a `<blockquote>` with no heading, so it doesn't appear in the page outline — not wrong, just worth knowing if anyone audits document structure.
- Image alt text is inconsistent across logo instances: the header/mobile-menu logos carry empty `alt=""` while the footer logo carries a full descriptive alt and the headshot carries "Nicholas T. Avello, CPA" — likely intentional (decorative header logo vs. content footer logo) but worth a one-line confirmation.
- The "Today" milestone entry ("Forty-plus years... still filing") largely restates hero paragraph 1 rather than adding new information.
- `wide-tracking` and `em-dash-overuse` detector findings (see Design Specificity Verdict above) are sitewide/whole-page patterns, not defects specific to this page — flagged for awareness, not as an About-page action item.

## Questions to Consider

- If "equal billing" is measured by what a scrolling visitor actually sees and remembers rather than by declared intent, is it actually being delivered here — given the single densest, most persuasive block on the page is 100% institutional?
- The face is this practice's strongest "one person, not a faceless team" signal — should it ever be more than one scroll away, especially on mobile?
- Services already has the ideal reassurance line for the anxious individual filer ("years you'd rather not talk about") — why doesn't the one page explicitly about trust and character use it anywhere?
