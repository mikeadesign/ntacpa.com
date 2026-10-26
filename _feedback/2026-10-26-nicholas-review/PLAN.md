# Nicholas review, Oct 26 2026: change plan

Source: Nicholas's notes on the beta preview at https://mikeadesign.github.io/ntacpa.com/ (Home, Services, About).
The preview was checked against `main` (154d340) and matches the repo exactly, so every "current" value below is what he saw.

Nearly every change lands in `src/data/site.ts`, because credentials and services are single-sourced there and feed Home, Services and About. Two template changes are structural: a service `tag` and a credential `value` both become optional.

Status key: **GO** means build it now from his notes. **GATED** means wait for Nicholas's answer (see the Open questions section and the draft reply). **NO CHANGE** means his note repeats the current copy.

---

## 1. Home (`src/pages/index.astro`, `src/data/site.ts`)

### H1 Hero lede: GO (provisional wording, pending his approval)
Current:
> Every absolute in the tax code has a carve-out, and the carve-outs are where the work is. I prepare returns, keep books, and handle regulatory accounting — for individuals and small businesses, and for the hedge funds and broker-dealers I have worked with for four decades.

His text:
> Every absolute in the tax code has a carve-out, and the carve-outs are changing all the time. I prepare returns, keep books and records, and handle regulatory accounting — for individuals and small businesses, and for the hedge funds and broker-dealers I have worked with for four decades and will keep your filings prepared, based on the latest interpretation of the rules.

He made three changes: "are changing all the time", "books and records", and a new closing clause. As written, the closing clause attaches to "broker-dealers", so it reads as if the broker-dealers keep your filings prepared. Ship this edited version, which keeps all three of his changes, and ask him to approve it:
> Every absolute in the tax code has a carve-out, and the carve-outs are changing all the time. I prepare returns, keep books and records, and handle regulatory accounting — for individuals and small businesses, and for the hedge funds and broker-dealers I have worked with for four decades. Every filing is prepared on the latest interpretation of the rules.

The lede gets about 20% longer. Check that `.measure-55` still sets a comfortable block at 390px and 1280px and doesn't push the CTA below the fold on desktop.

### H2 Business tax preparation, Home summary: GO
`serviceGroups[everyday].services['Business tax preparation'].summary`
Current: "Sole proprietors through S-corps and partnerships."
His text: "Sole proprietors through Corporations [LLC, C and S Corps} as well as Partnerships." (the mismatched bracket is a typo)
New: **"Sole proprietors through LLCs, C and S corporations, and partnerships."**

### H3 Bookkeeping: NO CHANGE
His line matches the current summary word for word.

### H4 IRS representation, Home summary: GO
`summary` current: "Notices, examinations, and audit support — I deal with them directly."
New: **"Notices, examinations, and audit support — I assist in written responses."**
This narrows the scope he's promising. The Services page entry now contradicts it (see S3, GATED).

### H5 Home credentials card: GO
Current card: CPA since 1983 · Series 27 — FINOP 40 years · Series 6 registered · Series 62 registered.
New card, in this order:
1. Certified Public Accountant: since 1983
2. Series 27 — FINOP: **since 1986**
3. Series 30 — NFA Branch Manager: **no value** (see A2)

Data: set `featured`/`featuredOrder` on CPA (1), Series 27 (2), Series 30 (3), and remove `featured` from Series 6 and 62. Both stay on About.
"NFE" in his note is a typo for NFA. His About notes say NFA and the official name is NFA. Keep NFA.
The bracketed "[Financial Principal]" after FINOP is unclear: it could be a note to us, or he may want the expansion shown. Ship "Series 27 — FINOP" unchanged for now. The label is **GATED** on Q3.

## 2. Services (`src/pages/services.astro`, `src/data/site.ts`)

### S1 Business tax preparation: GO
- `tag`: "SOLE PROPRIETORS · LLCS · S-CORPS" → **"SOLE PROPRIETORS · PARTNERSHIPS · LLCS · CORPORATIONS"**
- `detail`: "Schedule C through S-corp, partnership, and corporate returns, with the year-end adjustments made before the return rather than after the notice." → **"LLC, partnership, and corporate returns, with the year-end adjustments made before the return rather than after the notice."** His capitalization is normalized to sentence case to match the site.
- Note: his detail drops sole proprietors (Schedule C) while his tag keeps them. Raised as a light question in Q6. Ship his version.
- Check that the longer tag (four items, tracked caps) doesn't wrap badly in `.service-row__label` at 390px and around 860px. DESIGN.md's rule is that tracked caps never wrap mid-label. If it does wrap, the fix belongs in CSS (stacking or a smaller tracking step), not in his wording.

### S2 Regulatory & compliance questions: GO
- `tag` "SERIES 6 · SERIES 27 · SERIES 62": **delete** (his instruction).
- `detail` current: "Series 6 and Series 62 registered as well. When a rule has an exception, …"
  His text: "Series 6 and Series 62 registered as well 40+ years of experience dealing with Regulatory questions. When a rule has an exception, …"
  New (punctuation fixed; ask him to approve): **"Series 6 and Series 62 registered, with more than forty years of experience on regulatory questions. When a rule has an exception, the useful question is whether yours is the exception — and that is usually a phone call, not an engagement."**
- Structural change: `Service.tag` becomes optional (`tag?: string`), and `services.astro` renders the `<span class="label label--tag">` only when a tag exists. This would be the only service row without a tag. Confirm that `.service-row__name` still lines up with the names in the rows around it (no leftover top margin, no jump in the grid at any breakpoint). If the row looks broken without a tag, the advisor decides on the CSS fix. Don't invent a replacement tag.

### S3 IRS representation & audit support, Services entry: GATED (Q1)
The current detail is "Notices answered, examinations handled, documentation assembled. You do not have to be on the call, and in most cases you shouldn't be." The tag is "NOTICES · EXAMINATIONS · APPEALS SUPPORT" and the name is "IRS representation & audit support". All three suggest he represents clients directly (calls, exams, appeals), which conflicts with his new Home line, "I assist in written responses." Don't change these until he answers Q1. Once he does, update the name, the `homeName`, the tag and the detail together.

## 3. About (`src/pages/about.astro`, `src/data/site.ts`)

### A1 Series 27 value: GO
"40 years" → **"since 1986"**. Lowercase, to match "since 1983". This is the same data edit as H5, so it updates on both pages.

### A2 Series 30 value: GO (delete) / GATED (what replaces it, Q2)
His instruction is to delete "registered". `Credential.value` becomes optional. About and the Home card must still produce valid `<dl>` markup (`dt` followed by `dd`), so render an empty `<dd class="dl__value"></dd>` rather than dropping the element. The row must line up with its neighbors.
Q2 asks whether a year belongs there, or whether Series 30 is no longer an active registration (which would raise whether it should be listed at all, on the Home card especially).

### A3 Rest of the credentials list: NO CHANGE
The CPA row, the two group labels, Series 3, 6, 62 and 99 ("registered"), and "Licensure jurisdiction: Illinois" all match what he sent.

### A4 Milestones: NO CHANGE (pending Q8)
The 1983, 1986, 1990 and Today entries match what he sent. His note cuts off at "st", partway into the Today line. Q8 asks whether anything came after it.

## 4. Knock-on consistency (advisor's call, defaults below)

- Series 27 "40 years" also appears as prose and tags: the funds intro ("forty years registered as a Series 27…"), the FINOP summary ("Series 27 registered for forty years") and the tag "SERIES 27 · REGISTERED 40 YEARS". These are still accurate (1986 to 2026) and he didn't flag them. **Default: leave them.** Note in the PR that they'll go stale in 2027 and offer "since 1986" phrasing as a follow-up.
- `PRODUCT.md` ("Credentials, verified") and the comments in `site.ts`: add one dated line for this round of feedback (Home card set changed, Series 30 value removed, IRS scope narrowed, pending). Keep `site.ts` comments accurate. One of them says the full list has "10 entries" and it has 7, so fix that while you're there.
- Page meta descriptions: no change needed.

## 5. Open questions (for Nicholas; the draft reply is separate)

| # | Question | Blocks |
|---|---|---|
| Q1 | IRS work: written responses only, or do you still represent clients on calls, at examinations and on appeals? | S3, possibly the H4 wording and the service name |
| Q2 | Series 30: leave the value blank, show a year, or is it no longer active (should it be listed at all)? | A2 final state, H5 |
| Q3 | Series 27 label: did "[Financial Principal]" mean you want the full title shown on the Home card? | H5 label |
| Q4 | Confirm Series 6 and 62 should come off the Home card (they stay on About). | H5 |
| Q5 | Approve the edited hero sentence. | H1 final |
| Q6 | Approve the business tax and regulatory edits; should sole proprietors stay in the business tax description? | S1, S2 final |
| Q7 | (assumed, just confirm) "NFE" meant NFA. | none |
| Q8 | His note ends partway into Milestones. Was there more? | A4 |

## 6. Execution phases

1. **Phase 1 (now):** every GO item, on branch `nicholas-feedback-2026-10`. Merging to `main` redeploys the preview, so that waits for Mike's approval.
2. **Phase 2 (after his reply):** the GATED items plus any edits from his wording approvals.
3. **Phase 3:** QA, doc updates and the PR. Mike merges, the preview redeploys, and Nicholas re-reviews.

## 7. Acceptance checks

- `npm run check` and `npm run build` are clean, with no new warnings.
- In `dist/`: the old strings are gone ("where the work is", "I deal with them directly", "S-corps and partnerships", "SOLE PROPRIETORS · LLCS · S-CORPS", "SERIES 6 · SERIES 27 · SERIES 62", "40 years" in the credentials rows) and the new strings are present.
- The Home credentials card has exactly 3 rows, in the order CPA, 27, 30.
- The Series 30 row has an empty `dd` on About and on Home, and its alignment matches the other rows.
- The Regulatory row on Services has no tag element, and its name lines up with the rows around it.
- Playwright screenshots of `/`, `/services` and `/about` at 390, 860 and 1280 wide, saved to `_feedback/2026-10-26-nicholas-review/qa/`.
- The impeccable hooks (PostToolUse and Stop) pass, or each finding is addressed or explained.
