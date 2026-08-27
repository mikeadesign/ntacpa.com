# ntacpa.com — URL audit

Crawled 2026-08-25 against the live site, to satisfy the cutover requirement
recorded in [`PRODUCT.md`](PRODUCT.md) ("the existing ntacpa.com has paths that
must stay reachable"). This replaces the "inventory not yet gathered" note.

**Scope and limits.** This covers every URL the live site actually serves,
plus what a link-following crawl finds — which missed one page
(`/contact_form.html`, unlinked from anything) until the production
`wwwroot` was read directly. Treat "linked and crawlable" as a floor, not a
ceiling: an orphaned page can still be live. This also does *not* measure
inbound links or search rankings — that needs Search Console or a backlink
tool, neither of which is reachable from here. Confirm priority against
Search Console before launch if the account exists.

## What is there

A seven-page static site, `Last-Modified` **2015-08-25**, copyright 2009. Plain
HTML 4.01, one stylesheet, no CMS, no build. No `robots.txt` and no
`sitemap.xml` (both 404).

| Legacy URL | Title | Bytes |
| --- | --- | --- |
| `/` | NTA, INC. Certified Public Accountant | 2098 |
| `/index.html` | *(byte-identical to `/`)* | 2098 |
| `/about.html` | About NTA, INC. | 2566 |
| `/education.html` | Credentials: Education | 2400 |
| `/experience.html` | Credentials: Experience | 3081 |
| `/training.html` | Credentials: Special Training | 2363 |
| `/clients.html` | NTA, INC. Clients | 2530 |
| `/contact.html` | NTA, INC. Contact | 2298 |
| `/contact_form.html` | Contact NTA, INC. | 3101 |
| `/ntainc-stylesheet.css` | stylesheet | — |

**`/contact_form.html` is an eighth page the original crawl missed** — nothing
on the live site links to it, so it was never queued. Found by reading the
actual production `wwwroot` directly. Confirmed still live with a
cache-busted fetch (`200`, exact byte match to the file on disk; a genuinely
missing path on the same host correctly returns `404` for comparison), so
it's reachable by anyone with an old bookmark or inbound link even though
nothing on the current site points to it. It carries an older, different
address (200 West Adams, not 231 S LaSalle), a personal `@comcast.net`
email, a pager number, and a `mailto:`-based form — all stale, none of it
matching `/contact.html`'s numbers. Redirecting it, not just leaving it.

## Redirect map

The new build emits flat `.html` at the root, which is the same shape the
legacy site uses — so **three of the eight pages need no rule at all**. Six
URLs require a redirect.

| Legacy URL | Action | Target |
| --- | --- | --- |
| `/` | none — already correct | `/` |
| `/index.html` | none — hosts serve this at root | `/` |
| `/about.html` | none — same path exists in the new build | `/about.html` |
| `/contact.html` | none — same path exists in the new build | `/contact.html` |
| `/education.html` | **301** | `/about` |
| `/experience.html` | **301** | `/about` |
| `/training.html` | **301** | `/about` |
| `/clients.html` | **301** | `/about` |
| `/contact_form.html` | **301** | `/contact` |
| `/ntainc-stylesheet.css` | none — let it 404 | — |

The three `/education`, `/experience`, `/training` pages were the legacy
"Credentials" section. The new About page carries credentials, career
milestones, and the verified registration list, so it is the correct single
target for all three. `/clients.html` also redirects there — Nicholas
confirmed he doesn't want a client list on the current site (see below).

## Three things to fix at cutover

**1. No canonical host or scheme is enforced.** `http://ntacpa.com`,
`https://ntacpa.com`, `http://www.ntacpa.com`, and `https://www.ntacpa.com` all
return **200 with zero redirects**. Every page is therefore served at four
addresses — 28 indexable URLs for 7 pages of content. Pick one canonical
(recommend `https://ntacpa.com`, matching the `site` value already set in
`astro.config.mjs`) and 301 the other three, including HTTPS enforcement.

**2. Add `robots.txt` and a sitemap.** Neither exists today.

**3. Retire the old analytics.** The homepage still loads Classic Analytics
(`ga.js`, property `UA-10616643-1`), which stopped processing data in 2019. The
new site uses `G-SQ5BYHD541`. Nothing to migrate; just don't carry it over.

That loader is a `document.write(unescape("<script src=...ga.js...>"))` pair —
standard for a 2009 GA snippet, but the same shape as obfuscated script
injection, which tripped a Defender heuristic (`Trojan:JS/ScrInject.EK!MTB`)
on a saved copy of the site's 404 page during this audit. A VirusTotal URL
scan of the live site came back clean, so this reads as a false positive, not
an active compromise — but it's one more reason the legacy site shouldn't
survive cutover in any form, including as a cached copy anywhere.

Also on the homepage: a hotlinked **BizFilings affiliate banner**
(`bizfilings.com/gif/...`) and a "Design and Developed by MikeAvello.com"
credit. Neither exists in the new build. Confirm both are intentionally gone.

## Content decisions

### `/clients.html` — resolved: retire, no rebuild

The legacy page publicly listed fifteen client firms (Benjamin and Jerold
Brokerage, Don Alexander Investments, Elkhorn Securities, First Illinois
Securities, Global Derivative House, Greenbriar Partners, Lee's Wish,
Lightwell Investments, Phoenix Global Advisor, Phoenix Global Capital Mgt.,
Spot Trading, Stonehaven, TradeHouse, Worlds Best Holding Corp, Xchange
Holdings) — which contradicted `PRODUCT.md`'s "no named clients on hand,
confidential by default" note. That note was written from the absence of
evidence, before this page was seen.

**Nicholas confirmed he doesn't want a client list on the current site.**
`PRODUCT.md`'s confidentiality stance stands as written; the old page 301s to
`/about` (above) rather than being rebuilt in any form. Whatever inbound links
or proof value it carried do not transfer — accepted as the cost of that
decision, not an oversight.

### Facts on the old site that are not on the new one

Verified against the live pages. Several are genuinely new information:

- **Incorporation:** "formed by Nicholas T. Avello on the 9th of September 1990
  as an Illinois S. Corporation." More precise than the new site's "since 1990,"
  and independently corroborates the Illinois jurisdiction.
- **Additional contact numbers:** cell 630-310-6945, fax 630-749-9998. Not yet
  confirmed as current — carried here only as a lead, not a fact to publish.
- **Two services the new site does not offer:** *Anti-Money-Laundering (AML)
  audits* and *PATRIOT Act compliance*. Worth confirming whether these were
  dropped deliberately or simply missed.
- **Education:** DePaul University, BS Accounting (minor Finance),
  Sept 1975 – June 1979.
- **Career history:** NASD Examiner 1984–1986; Financial Compliance/Controller
  at First Options / Lit America / Rialcor-Shatkin 1986–1990. Both corroborate
  the resume.
- **"Pro Se Litigator — NASD, CBOE, SEC, Court of the 7th Circuit,"** listed
  under Honors and Awards.

### Facts on the old site that must NOT be carried over

All are time-frozen at roughly 2009 and are now wrong:

- "29 years of experience in the Securities and Futures Industries" — now 40+.
- "Registered Series 27 [FINOP] for 25 years" — registered 1986, so ~40 years.
- "September 1990 – Present (18+ years)" — now 35+.
- "Series 6, 27 [FINOP], 62 [Corp Sec]" — the verified FINRA/NFA record is CPA
  plus Series 3, 6, 27, 30, 62, and 99.
- `ntainc@att.net` — retired in favour of `contact@ntacpa.com`.
- Copyright 2009.
- **231 S LaSalle Street #650, Chicago, IL 60604** — confirmed by Nicholas as
  no longer the office; the practice is now home-based / remote. `PRODUCT.md`'s
  "no office address on hand" note stands, now as a confirmed choice rather
  than a gap. Don't publish this address anywhere.
- **200 West Adams, Chicago, IL 60604** — a second, older office address, from
  `/contact_form.html` only. Same resolution as above: no longer current, not
  to be published.
- **`madtek1029@comcast.net` and `ntainc@comcast.net`** — personal-looking
  addresses on `/contact_form.html`, not used anywhere else on the old or new
  site. Don't carry either forward.
- **24/7 pager (312) 514-9357 and fax (312) 922-3950**, also only on
  `/contact_form.html` — a different fax number than the one on `/contact.html`
  (630-749-9998). Neither has been confirmed current; don't publish either.

The phone number **312-339-3750 matches** the new site and needs no change.
