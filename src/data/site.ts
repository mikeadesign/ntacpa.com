/* ── NTA, Inc. — site constants ───────────────────────────────────────────
   Every fact that appears in more than one place lives here, so a change is
   a single edit. That includes the unresolved placeholders from the handoff
   (see PENDING below) — they are deliberately variables, not literals, so
   filling them in later does not mean grepping six templates. */

export const site = {
  name: 'NTA, Inc.',
  descriptor: 'ACCOUNTING & ADVISORY',
  principal: 'Nicholas T. Avello, CPA',
  principalName: 'Nicholas T. Avello',
  /* Interim address is ntainc@att.net; the practice moves to this one with
     the new site (see _design-system/readme.md → Contact). One constant. */
  email: 'contact@ntacpa.com',
  phone: '312-339-3750',
  phoneHref: 'tel:3123393750',
  serviceArea: 'Chicago area, plus remote clients nationwide',
  copyright: '© 2026 NTA, Inc. Certified Public Accountant since 1983.',
  titleSuffix: 'NTA, Inc., CPA',
} as const;

/* ── PENDING — unresolved before ship ──────────────────────────────────────
   Handoff README, "Open Items". Do not treat these as final copy.
     1. Licensure jurisdiction — appears in every footer and both legal pages.
     2. Series 27 registration year — About milestones.
     3. Legal effective date — both legal pages.
   The 7 [CONFIRM] blocks in the legal pages are marked inline there. */
export const pending = {
  licensureJurisdiction: '[STATE JURISDICTION TO CONFIRM]',
  licensureJurisdictionShort: '[STATE TO CONFIRM]',
  series27Year: '[year to confirm]',
  governingLawState: '[STATE]',
  legalEffectiveDate: '[DATE]',
} as const;

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

export const ctaLabel = 'Start a conversation';
export const ctaHref = '/contact';

export const legalLinks: NavLink[] = [
  { label: 'Site policies', href: '/site-policies' },
  { label: 'Tax advice notice', href: '/tax-advice-notice' },
];

/* ── Credentials ─────────────────────────────────────────────────────────
   Two renderings of the same facts: the short form for the Home card, the
   long form for the About page. Kept as one source so they can't drift. */

export type Credential = { short: string; long: string; value: string };

export const credentials: Credential[] = [
  {
    short: 'Certified Public Accountant',
    long: 'Certified Public Accountant',
    value: 'since 1983',
  },
  {
    short: 'Series 27 — FINOP',
    long: 'Series 27 — Financial & Operations Principal',
    value: '40 years',
  },
  {
    short: 'Series 6 — Investment Company',
    long: 'Series 6 — Investment Company Products',
    value: 'registered',
  },
  {
    short: 'Series 62 — Corporate Securities',
    long: 'Series 62 — Corporate Securities',
    value: 'registered',
  },
];

/* ── Services ─────────────────────────────────────────────────────────────
   `summary` is the one-line form used on the Home overview; `detail` and
   `tag` are the Services page. The tag is a label, not a heading. */

export type Service = {
  name: string;
  homeName: string;
  summary: string;
  detail: string;
  tag: string;
};

export type ServiceGroup = {
  id: string;
  heading: string;
  intro: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'everyday',
    heading: 'Everyday accounting',
    intro:
      'For individuals, families, and small businesses — including the ones whose books need catching up before anything else can happen.',
    services: [
      {
        name: 'Individual tax preparation',
        homeName: 'Individual tax preparation',
        summary:
          "Federal and state returns, including years you'd rather not talk about.",
        detail:
          'Federal and state returns, prepared and signed by the person who reviewed them. Multi-state filings, investment income, K-1s, and prior years that never got filed.',
        tag: 'INDIVIDUALS · FAMILIES · HIGH-NET-WORTH',
      },
      {
        name: 'Business tax preparation',
        homeName: 'Business tax preparation',
        summary: 'Sole proprietors through S-corps and partnerships.',
        detail:
          'Schedule C through S-corp, partnership, and corporate returns, with the year-end adjustments made before the return rather than after the notice.',
        tag: 'SOLE PROPRIETORS · LLCS · S-CORPS',
      },
      {
        name: 'Bookkeeping',
        homeName: 'Bookkeeping',
        summary: 'Monthly or quarterly, reconciled and ready for the filing.',
        detail:
          'Monthly or quarterly close, reconciled accounts, and statements you can hand to a lender without apologising for them. Catch-up work welcome.',
        tag: 'MONTHLY · QUARTERLY · CATCH-UP',
      },
      {
        name: 'Tax planning & strategy',
        homeName: 'Tax planning & strategy',
        summary:
          'Decisions made in March cost less than the ones made in April.',
        detail:
          'Entity choice, timing, retirement and distribution planning. Decisions made in March cost less than the ones made in April — that is most of the value here.',
        tag: 'YEAR-ROUND · PRE-TRANSACTION',
      },
      {
        name: 'IRS representation & audit support',
        homeName: 'IRS representation',
        summary:
          'Notices, examinations, and audit support — I deal with them directly.',
        detail:
          "Notices answered, examinations handled, documentation assembled. You do not have to be on the call, and in most cases you shouldn't be.",
        tag: 'NOTICES · EXAMINATIONS · APPEALS SUPPORT',
      },
    ],
  },
  {
    id: 'funds',
    heading: 'Funds & broker-dealers',
    intro:
      'Forty years in the securities and futures industries, and forty years registered as a Series 27 Financial and Operations Principal.',
    services: [
      {
        name: 'FINOP engagements',
        homeName: 'FINOP engagements',
        summary:
          'Series 27 registered for forty years. Net capital, FOCUS reports, books and records.',
        detail:
          'Acting or supporting Financial and Operations Principal: net capital computations, FOCUS reports, books and records, and the questions that arrive the week before an examination.',
        tag: 'SERIES 27 · REGISTERED 40 YEARS',
      },
      {
        name: 'Broker-dealer accounting',
        homeName: 'Broker-dealer accounting',
        summary:
          'Month-end close and regulatory reporting support for registered firms.',
        detail:
          'Month-end close, general ledger, regulatory reporting support, and reconciliation of clearing and commission activity for registered firms.',
        tag: 'REGISTERED BROKER-DEALERS',
      },
      {
        name: 'Hedge fund accounting',
        homeName: 'Hedge fund accounting',
        summary: 'NAV support, allocations, and year-end packages for auditors.',
        detail:
          'NAV support, partner allocations, incentive and management fee calculations, and year-end packages assembled the way auditors want to receive them.',
        tag: 'FUNDS · MANAGEMENT COMPANIES',
      },
      {
        name: 'Regulatory & compliance questions',
        homeName: 'Compliance-side questions',
        summary: 'Forty years in the securities and futures industries, on call.',
        detail:
          'Series 6 and Series 62 registered as well. When a rule has an exception, the useful question is whether yours is the exception — and that is usually a phone call, not an engagement.',
        tag: 'SERIES 6 · SERIES 27 · SERIES 62',
      },
    ],
  },
];
