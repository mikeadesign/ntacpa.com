// Fails if British spellings appear in src/. All site copy is American English.
// To extend: add the British word to DENY (whole word, case insensitive) with its US form.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = 'src';
const EXTENSIONS = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.mdx', '.json', '.html', '.css']);

// British -> American. Inflections are listed explicitly because matching is whole word.
const DENY = {
  apologise: 'apologize', apologised: 'apologized', apologising: 'apologizing', apologises: 'apologizes',
  organise: 'organize', organised: 'organized', organising: 'organizing', organisation: 'organization', organisations: 'organizations',
  recognise: 'recognize', recognised: 'recognized', recognising: 'recognizing', recognises: 'recognizes',
  anonymisation: 'anonymization', anonymise: 'anonymize', anonymised: 'anonymized',
  analyse: 'analyze', analysed: 'analyzed', analysing: 'analyzing', analyses_verb: 'analyzes',
  summarise: 'summarize', summarised: 'summarized', summarising: 'summarizing',
  realise: 'realize', realised: 'realized', minimise: 'minimize', maximise: 'maximize',
  utilise: 'utilize', utilised: 'utilized', authorise: 'authorize', authorised: 'authorized', authorisation: 'authorization',
  customise: 'customize', customised: 'customized', specialise: 'specialize', specialised: 'specialized',
  prioritise: 'prioritize', optimise: 'optimize', finalise: 'finalize', categorise: 'categorize',
  standardise: 'standardize', capitalise: 'capitalize', emphasise: 'emphasize', characterise: 'characterize',
  colour: 'color', colours: 'colors', coloured: 'colored',
  favour: 'favor', favours: 'favors', favourite: 'favorite', favoured: 'favored',
  behaviour: 'behavior', behaviours: 'behaviors',
  honour: 'honor', honours: 'honors', honoured: 'honored',
  neighbour: 'neighbor', labour: 'labor', flavour: 'flavor', rumour: 'rumor', humour: 'humor', endeavour: 'endeavor',
  centre: 'center', centres: 'centers', centred: 'centered', theatre: 'theater', metre: 'meter', litre: 'liter', fibre: 'fiber',
  licence: 'license', licences: 'licenses',
  practise: 'practice', practised: 'practiced', practising: 'practicing',
  defence: 'defense', offence: 'offense', pretence: 'pretense',
  cancelled: 'canceled', cancelling: 'canceling', travelled: 'traveled', travelling: 'traveling',
  modelling: 'modeling', labelled: 'labeled', labelling: 'labeling', counselling: 'counseling', totalling: 'totaling',
  enrol: 'enroll', enrolment: 'enrollment', instalment: 'installment', fulfil: 'fulfill',
  judgement: 'judgment', catalogue: 'catalog', cheque: 'check', cheques: 'checks', programme: 'program', programmes: 'programs',
  whilst: 'while', amongst: 'among', learnt: 'learned', ageing: 'aging', artefact: 'artifact', sceptic: 'skeptic', sceptical: 'skeptical',
  skilful: 'skillful', wilful: 'willful', aluminium: 'aluminum', jewellery: 'jewelry', manoeuvre: 'maneuver', fortnight: 'two weeks',
};
delete DENY.analyses_verb; // "analyses" is also the valid plural noun in US English

const pattern = new RegExp(String.raw`\b(${Object.keys(DENY).join('|')})\b`, 'gi');

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (EXTENSIONS.has(extname(path))) yield path;
  }
}

let failures = 0;
for (const file of walk(ROOT)) {
  readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, i) => {
    for (const m of line.matchAll(pattern)) {
      failures++;
      console.error(`${file}:${i + 1}: "${m[0]}" is a British spelling; use "${DENY[m[0].toLowerCase()]}"`);
    }
  });
}

if (failures) {
  console.error(`\n${failures} British spelling(s) found. All copy must be American English.`);
  process.exit(1);
}
