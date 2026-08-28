# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served by one person as a single practice rather than two divisions:

- **Institutional** — hedge funds, broker-dealers, commodity pool operators, futures commission merchants, forex dealer merchants. The person evaluating is typically a principal, compliance officer, or operations lead who needs a FINOP or fund accountant, often under time pressure from an examination, a net capital question, or a departing incumbent. They arrive knowing the vocabulary and are checking whether Nicholas is credible enough to trust with a regulated filing.
- **Private** — individuals, families, small businesses, and high-net-worth filers. Often arriving with something unresolved: prior years unfiled, books behind, an IRS notice, or a life change with tax consequences. They are checking whether he is approachable and whether their situation is too messy to bring.

The practice's defining constraint is that both must be served **without code-switching** — the same site has to survive a compliance review and welcome someone with a shoebox of receipts.

## Product Purpose

Marketing site for NTA, Inc., the solo accounting practice of Nicholas T. Avello, CPA (practice founded 1990; CPA since 1983). It replaces the existing ntacpa.com.

Success is a qualified inquiry reaching Nicholas directly — by form, phone, or email.

**Presentation is 50/50.** Both audiences are given equal weight and neither leads. This is a standing rule, not a default awaiting revision: the identity's whole premise is that one practice serves both without code-switching, and visibly ranking the audiences would break it.

**The economics are not 50/50.** The working assumption is that a single institutional engagement — FINOP work, hedge fund or broker-dealer accounting, regulatory and compliance support — is worth materially more than a small private-client project, so those wins matter more to the practice even though the site does not say so. Recorded as the client's stated assumption, not as measured data; no revenue or engagement-value figures are on hand.

What follows from holding both at once: institutional credibility must be unmistakable to someone qualified to judge it, and it earns that through depth and specificity in the substance — credentials, named filings, the vocabulary used at full strength — rather than through more space, earlier placement, or louder emphasis than private-client work receives. Private-client work is never framed as lesser, and the practice is never split into a primary and a secondary side.

## Positioning

A solo practice with institutional-grade regulatory depth — a combination that is structurally hard to copy in either direction. Large firms can match the regulatory credentials but not the "the person who reviewed it also signed it" directness; typical solo practices can match the directness but not forty years as a registered Financial and Operations Principal.

The load-bearing, verifiable specifics:

- Certified Public Accountant since **1983**.
- Registered **Series 27 (Financial and Operations Principal) since 1986** — roughly four decades.
- **40+ years in the securities and futures industries.**
- Nothing is delegated to a junior associate, because there isn't one.

## Operating Context

Work and evaluation both happen against external deadlines and regulatory events, not on the practice's own schedule:

- **Institutional:** net capital computations (including risk-based haircuts under Rule 15c3-1), FOCUS reports, books and records, NAV support, partner allocations, incentive and management fee calculations, year-end packages for auditors, K-1s, and FINRA/SEC examinations. CRD filings (U-4, U-5, BD, BDW, FOCUS, 3070) and NFA filings (7-R, 8-R, 1FR).
- **Private:** federal and multi-state returns, Schedule C through S-corp/partnership/corporate returns, monthly and quarterly close, catch-up bookkeeping, entity choice and timing decisions, IRS notices, examinations, and appeals support.

Inquiries frequently arrive mid-problem — the week before an examination, or after a notice has already been received.

## Capabilities and Constraints

- Six static pages: Home, Services, About, Contact, Site policies, Tax advice notice.
- Astro, no UI framework. Roughly 2 KB of JavaScript total (mobile menu, contact-form panel swap); everything else ships as HTML and CSS. Flat-file output (`/services.html`) so it hosts anywhere static.
- A GitHub Pages beta preview deploys from `main` for review; it is `noindex` and excluded from analytics. Google Analytics fires on the production build only.
- **Contact form transport: confirmed as email-to-Nicholas** via a static-hosting-compatible form service (Formspree, Web3Forms, or equivalent). Not yet implemented — `PUBLIC_CONTACT_ENDPOINT` is unset, and until it is, the form deliberately does *not* fake success; it shows a panel pointing at the phone number and email. The specific service is not yet chosen.
- **Cutover requires URL/SEO preservation.** The existing ntacpa.com has paths that must stay reachable — via preserved URLs or redirects — when this site replaces it. Inventoried in `URL-AUDIT.md`: a 7-page legacy site, 5 of those URLs need a redirect rule, and the canonical host/scheme, `robots.txt`, and sitemap all still need setting up at cutover.
- **Legal copy is drafted, not reviewed.** `[CONFIRM]` blocks remain across the two legal pages (analytics retention, IP anonymisation, applicable state privacy statute, governing-law state, Circular 230 wording), plus the legal effective date. This copy must go to counsel before launch and must not be presented as final.
- Terminology is used at full strength, not translated down — "Form 1099," "Series 27," "net capital," "FOCUS report" appear as themselves.

## Brand Commitments

An identity system exists in `_design-system/` and is binding: brand mark and lockup rules, color, type scale, spacing, and exported assets in `_design-system/brand-assets/`. The build's own rules live in `README.md` under "Brand rules the code enforces."

Voice, confirmed and binding:

| Rule | In practice |
|---|---|
| Plain, not simplified | Say "Form 1099" if that's the thing. Don't translate expertise into baby talk. |
| Specific over superlative | "Since 1983," never "industry-leading." Numbers and dates do the persuading. |
| Calm | No urgency tactics, countdowns, or exclamation marks. Nobody panic-buys an accountant. |
| First person singular | One CPA, not a faceless "we." "I'll review your filings," not "our team will." |

- **Sentence case** for headings and body. Uppercase is reserved for descriptors, eyebrows, badges, and labels, always with wide tracking.
- **No emoji** — not in UI, not in copy, not in marketing.
- **Tagline:** *Where regulatory expertise meets personal service.*
- **Reserved copy, site only:** *"Always, Never, Except For…"* — the client's own phrase from the current site, approved and wanted for the website, but deliberately not part of the identity system and not for use in a lockup. Do not rewrite it.
- **Credentials belong on inside pages** (About, footer, credentials block) — explicitly not in the logo or brand mark. "Series 27 (FINOP)" is powerful to a broker-dealer and opaque to an individual filer.

## Evidence on Hand

- **Headshot:** `_design-system/assets/nicholas-avello-headshot.png` (1122×1402), studio portrait on charcoal. Confirmed final by the client — no replacement pending.
- **Credentials, verified** against Nicholas's official FINRA/NFA exam-history record: CPA (1983), Series 3, 6, 27, 30, 62, 99. This record corrected an earlier verbal list — Series 4, 7, 9/10, 23/24, and 26 do not appear on it and were removed. **One open item:** Nicholas said "4 through 26 can be removed," which numerically includes Series 6, but Series 6 appears on his resume, on the official exam record with two dated entries (1992, 2023), and in current Services copy. Awaiting his confirmation before removing or keeping it.
- **Series 27 registered 1986**, confirmed directly by Nicholas.
- **Licensure jurisdiction: Illinois**, confirmed directly.
- **Contact:** phone 312-339-3750 (confirmed); email `contact@ntacpa.com` (confirmed; the interim `ntainc@att.net` is retired with this site).
- **Resume** on file, used to corroborate credentials and career history.
- **Absent — do not fabricate:** there are no testimonials, no named clients, no case studies, no press, no pricing, no client counts, and no revenue or performance figures. Client engagements are confidential by default; nothing implying a specific named client should be invented or implied.
- **No office address — confirmed, not a gap.** The practice is home-based and remote (see `serviceArea`); Nicholas confirmed the office listed on the old site (231 S LaSalle St, Chicago) is no longer current. Do not surface any office address anywhere on the site.
- **No PTIN displayed**, confirmed directly by Nicholas. The `[CONFIRM]` block asking about this on the tax advice notice has been removed.
- **No limitation-of-liability clause needed**, confirmed directly by Nicholas. The governing-law `[CONFIRM]` block on Site policies now asks only for the state, not the clause.
- **AML / PATRIOT Act compliance stays off Services**, confirmed directly by Nicholas — dropped on purpose, not a gap to fill.
- **Governing-law state is still open.** Nicholas answered the liability-clause half of that question but not the state itself. Illinois (the licensure jurisdiction) is the likely answer, but it hasn't been said — don't fill it in from the inference alone.
- **Circular 230 wording — sent, but not usable as-is.** The text Nicholas provided reads as garbled at the end ("...any tax-related matter(s) said tax advice address(es)."), likely a transcription error. Asked for clean wording before inserting it verbatim into a compliance disclosure.

## Product Principles

1. **Both audiences, one voice, equal billing.** The institutional depth and the personal directness are the same story, not two modes. Never split the practice into a "funds side" and a "people side" that speak differently, and never let the higher value of institutional engagements express itself as more space, earlier placement, or louder emphasis on the surface — it belongs in the depth of the substance, not in the ranking.
2. **Specifics are the persuasion.** Dates, registrations, and named filings do the work that adjectives would do elsewhere. When a claim can be stated as a verifiable number, state it that way.
3. **Credibility is load-bearing and must be exact.** This is a regulated profession; a wrong or unverifiable credential claim is a real liability, not a copy error. Every registration, date, and jurisdiction traces to a confirmed source.
4. **Calm beats urgency.** The visitor is often already under pressure from a deadline, a notice, or an examination. The site should reduce that pressure, never manufacture more.
5. **One person is the product.** The absence of a team is the differentiator, not a limitation to disguise.

## Accessibility & Inclusion

WCAG AA contrast is a hard requirement, not a preference, and the brand system is built around it:

- Brand Gold `#c9a24a` is **never** text on a light field (2.3:1, fails AA). Deep Gold `#8a6a1e` (4.6:1) exists for that case.
- Visible focus on every interactive element: 3px `#2c5f8a`, 2px offset.
- Tracked uppercase labels carry zero slack and must not wrap; where one won't fit at 390px it gets shorter copy, never a reflow.

Visitors may be evaluating the site under time pressure or on mobile between other obligations; comprehension and scanability outrank expression in any conflict.
