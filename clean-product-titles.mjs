#!/usr/bin/env node
/**
 * clean-product-titles.mjs
 * 
 * Removes manufacturer names from product titles and optimizes for transactional search.
 * Updates the `title` field in frontmatter across all 7 language directories.
 *
 * Usage:
 *   node clean-product-titles.mjs              # dry-run (preview changes)
 *   node clean-product-titles.mjs --apply      # apply changes to files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_DIR = path.join(__dirname, 'astro-steroid', 'src', 'content', 'products');
const LANGS = ['en', 'nl', 'de', 'fr', 'es', 'it', 'ru'];
const DRY_RUN = !process.argv.includes('--apply');

// ─── Manual overrides: filename → clean title ────────────────────────────────
// These take priority over rule-based cleaning.
const MANUAL_OVERRIDES = {
  // Abdi Ibrahim
  'abdi-ibrahim-anapolon-50.md':       'Anapolon (Oxymetholone) 50mg x 20 Tabs',
  'abdi-ibrahim-sustanon-amp.md':      'Sustanon 250mg 1ml Amp',

  // Aspen
  'aspen-deca-durabolin-100.md':       'Deca-Durabolin (Nandrolone Decanoate) 100mg 1ml Amp',

  // Bayer
  'bayer-primobolan-depot-100.md':     'Primobolan Depot (Methenolone Enanthate) 100mg 1ml Amp',
  'bayer-testoviron-250.md':           'Testoviron Depot (Testosterone Enanthate) 250mg Amp',

  // C4
  'c4-clen-40.md':                     'Clenbuterol 40mcg',
  'c4-t3-25.md':                       'T3 (Liothyronine) 25mcg',
  'c4-turinabol.md':                   'Turinabol 10mg',

  // Geofman
  'geofman-test-e-250.md':             'Testosterone Enanthate 250mg',

  // Hansel
  'hansel-deca-100.md':                'Nandrolone Decanoate (Deca) 100mg 1ml Amp',
  'hansel-sustanon-250.md':            'Sustanon 250mg 1ml Amp',

  // Karachi Organon
  'karachi-organon-sustanon-250.md':   'Sustanon 250mg x 3 Amps',

  // OBS / Testoviron
  'obs-testoviron-test-e-250.md':      'Testosterone Enanthate 250mg x 3 Amps',

  // Testex Prolongatum
  'test-cyp-250-testex-prolongatum.md':'Testosterone Cypionate 250mg 2ml Amp',

  // Bayer Test-E
  'test-e-250-bayer-testoviron.md':    'Testosterone Enanthate 250mg x 3 Amps',

  // ── Intex special codes ──
  'intex-anavar-10.md':                'Anavar (Oxandrolone) 10mg x 100 Tabs',
  'intex-deca-300.md':                 'Nandrolone Decanoate (Deca) 300mg',
  'intex-dianabol-10.md':              'Dianabol (Metandienone) 10mg x 100 Tabs',
  'intex-eq-300.md':                   'Boldenone Undecylenate (Equipoise) 300mg',
  'intex-mast-e-200.md':               'Masteron Enanthate (Drostanolone) 200mg',
  'intex-mast-prop-100.md':            'Masteron Propionate (Drostanolone) 100mg',
  'intex-ment-50.md':                  'Trestolone Acetate (MENT) 50mg',
  'intex-npp-100.md':                  'NPP (Nandrolone Phenylpropionate) 100mg',
  'intex-primo-e-100.md':              'Primobolan Depot (Methenolone Enanthate) 100mg',
  'intex-rip-150.md':                  'Rip Blend 150mg',
  'intex-rip-400.md':                  'Rip Blend 400mg',
  'intex-sustanon-250.md':             'Sustanon 250mg',
  'intex-test-cyp-200.md':             'Testosterone Cypionate 200mg',
  'intex-test-e-300.md':               'Testosterone Enanthate 300mg',
  'intex-test-prop-100.md':            'Testosterone Propionate 100mg',
  'intex-tren-ace-100.md':             'Trenbolone Acetate 100mg',
  'intex-tren-e-200.md':               'Trenbolone Enanthate 200mg',
  'intex-tren-mix-200.md':             'Trenbolone Mix 200mg',

  // ── Hemi special names ──
  'hemi-boldenone-300.md':             'Boldenone Undecylenate 300mg',
  'hemi-deca-300.md':                  'Nandrolone Decanoate (Deca) 300mg',
  'hemi-mass-mix-500.md':              'Mass Mix 500mg',
  'hemi-mast-e-200.md':                'Masteron Enanthate (Drostanolone) 200mg',
  'hemi-mast-prop-100.md':             'Masteron Propionate (Drostanolone) 100mg',
  'hemi-npp-100.md':                   'NPP (Nandrolone Phenylpropionate) 100mg',
  'hemi-rip-mix-200.md':               'Rip Mix 200mg',
  'hemi-sustanon-250.md':              'Sustanon 250mg',
  'hemi-test-cyp-200.md':              'Testosterone Cypionate 200mg',
  'hemi-test-e-300.md':                'Testosterone Enanthate 300mg',
  'hemi-test-mix-400.md':              'Testosterone Mix 400mg',
  'hemi-test-prop-100.md':             'Testosterone Propionate 100mg',
  'hemi-tren-ace-100.md':              'Trenbolone Acetate 100mg',
  'hemi-tren-e-200.md':                'Trenbolone Enanthate 200mg',
  'hemi-tren-mix-200.md':              'Trenbolone Mix 200mg',
  'hemi-tmp-mix-400.md':               'TMP Mix 400mg (Test/Mast/Primo)',
  'hemipharma-npp-100-v2.md':          'NPP (Nandrolone Phenylpropionate) 100mg',
  'hemipharma-turinabol-10.md':        'Turinabol 10mg',

  // ── Pharmaqo special codes ──
  'pharmaqo-anadrol-50.md':            'Anadrol (Oxymetholone) 50mg x 60 Tabs',
  'pharmaqo-boldenone-300.md':         'Boldenone Undecylenate 300mg',
  'pharmaqo-deca-300.md':              'Nandrolone Decanoate (Deca) 300mg',
  'pharmaqo-fastrip-150.md':           'Fastrip 150mg',
  'pharmaqo-mast-e-200.md':            'Masteron Enanthate (Drostanolone) 200mg',
  'pharmaqo-mast-prop-100.md':         'Masteron Propionate (Drostanolone) 100mg',
  'pharmaqo-multi-ester-test-400.md':  'Multi Ester Testosterone 400mg',
  'pharmaqo-multi-ester-tren-200.md':  'Multi Ester Trenbolone 200mg',
  'pharmaqo-npp-100.md':               'NPP (Nandrolone Phenylpropionate) 100mg',
  'pharmaqo-primo-depot-100.md':       'Primobolan Depot (Methenolone Enanthate) 100mg',
  'pharmaqo-sustanon-250.md':          'Sustanon 250mg',
  'pharmaqo-superbolan.md':            'SuperBolan (Test/Mast/Tren Mix)',
  'pharmaqo-test-cyp-200.md':          'Testosterone Cypionate 200mg',
  'pharmaqo-test-e-300.md':            'Testosterone Enanthate 300mg',
  'pharmaqo-test-prop-100.md':         'Testosterone Propionate 100mg',
  'pharmaqo-test-mast-primo.md':       'Test/Mast/Primo Blend',
  'pharmaqo-tren-ace-100.md':          'Trenbolone Acetate 100mg',
  'pharmaqo-tren-hex-100.md':          'Parabolan (Trenbolone Hex) 100mg',
  'pharmaqo-tri-ester-test-400.md':    'Tri Ester Testosterone 400mg',

  // ── Pharmaqo US ──
  'pharmaqo-us-anavar-10.md':          'Anavar (Oxandrolone) 10mg x 100 Tabs',
  'pharmaqo-us-primobol-5x100.md':     'Primobolan Depot 100mg x 5 Vials',
  'pharmaqo-us-primobol-oral.md':      'Primobolan Oral 100 Tabs x 5 Packs',
  'pharmaqo-us-superdrol-10.md':       'Superdrol 10mg x 100 Tabs',
  'pharmaqo-us-turinabol-10.md':       'Turinabol 10mg x 100 Tabs',

  // ── Proton Pharma ──
  'proton-boldenone-250.md':           'Boldenone Undecylenate 250mg',
  'proton-clen-40.md':                 'Clenbuterol 40mcg x 50 Tabs',
  'proton-npp-100.md':                 'NPP (Nandrolone Phenylpropionate) 100mg',
  'proton-primo-100.md':               'Primobolan (Methenolone Enanthate) 100mg',
  'proton-t4-100.md':                  'T4 (Levothyroxine) 100mcg x 50 Tabs',
  'proton-test-prop-100.md':           'Testosterone Propionate 100mg',
  'proton-tren-ace-100.md':            'Trenbolone Acetate 100mg',
  'proton-winstrol-10.md':             'Winstrol (Stanozolol) 10mg',

  // ── Misc ──
  'super-tadapox.md':                  'Super Tadapox (Tadalafil 40mg + Dapoxetine 60mg) x 10 Tabs',
  'pharmaqo-s23-25.md':                'S-23 25mg x 60 Tabs',
};


// ─── Manufacturer prefixes to strip (order matters — longer first) ───────────
const MANUFACTURER_PREFIXES = [
  'Pharmaqo Labs – ',
  'Pharmaqo Labs â€" ',
  'Pharmaqo Labs ',           // no dash (e.g., "Pharmaqo Labs Masteron-E 200")
  'Pharmaqo US – ',
  'Pharmaqo US â€" ',
  'Pharmaqo – ',
  'Pharmaqo â€" ',
  'Intex Pharma ',
  'Hemi Pharma ',
  'Hemipharma ',
  'C4 Pharma ',
  'Abdi Ibrahim ',
  'Aspen Pharma ',
  'Karachi Organon ',
  'Bayer ',
  'Pharma Grade ',
  'C4 ',
];

// ─── Manufacturer suffixes to strip (regex patterns) ─────────────────────────
const MANUFACTURER_SUFFIXES = [
  /\s*[–\-â€"]\s*Abdi\s*Ibrahim\s*$/i,
  /\s*\(Hansel\s*Pharma\)\s*$/i,
  /\s*[–\-â€"]\s*Geofman\s*Pharmaceuticals?\s*$/i,
  /\s*\(Proton\s*Pharma\)\s*$/i,
  /\s*[–\-â€"]\s*Proton\s*Pharma\s*$/i,
  /\s*by\s+OBS\s*Pharma\s*[–\-â€"]\s*/i,
  /\s*[–\-â€"]\s*Bayer\s*Testoviron\s*\(Pharma\s*Grade\)\s*$/i,
  /\s*\(Pharma\s*Grade\)\s*$/i,
];


// ─── Fix mojibake encoding artifacts ─────────────────────────────────────────
function fixEncoding(title) {
  return title
    .replace(/â€"/g, '–')
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€\u009d/g, '"');
}


// ─── Rule-based cleanup ─────────────────────────────────────────────────────
function cleanTitleByRules(title) {
  let t = fixEncoding(title);

  // Strip manufacturer prefixes
  for (const prefix of MANUFACTURER_PREFIXES) {
    const fixedPrefix = fixEncoding(prefix);
    if (t.startsWith(fixedPrefix)) {
      t = t.slice(fixedPrefix.length);
      break;
    }
  }

  // Strip manufacturer suffixes
  for (const rx of MANUFACTURER_SUFFIXES) {
    t = t.replace(rx, '');
  }

  // Remove leading dash/em-dash after prefix removal
  t = t.replace(/^\s*[–\-]\s*/, '');

  // Normalize some abbreviated compound names
  t = t.replace(/\bMasteron-E\b/gi, 'Masteron Enanthate');
  t = t.replace(/\bMasteron-P\b/gi, 'Masteron Propionate');
  t = t.replace(/\bTrenbolone-A\b/gi, 'Trenbolone Acetate');
  t = t.replace(/\bTrenbolone-Hexy\b/gi, 'Parabolan (Trenbolone Hex)');
  t = t.replace(/\bTestosterone-E\b/gi, 'Testosterone Enanthate');
  t = t.replace(/\bTestosterone-P\b/gi, 'Testosterone Propionate');
  t = t.replace(/\bTestosterone-C\b/gi, 'Testosterone Cypionate');
  t = t.replace(/\bDrostanolone-P\b/gi, 'Drostanolone Propionate');
  t = t.replace(/\bNandrolone Deca\b/gi, 'Nandrolone Decanoate (Deca)');

  // Remove "/ml" from dosages for cleaner titles (e.g. "200mg/ml" → "200mg")
  t = t.replace(/(\d+mg)\/ml\b/g, '$1');

  // Handle trailing bare numbers:
  // If pattern is "x NUMBER" at end → it's a count (tabs/units), add "Tabs"
  if (/\bx\s+\d+\s*$/.test(t)) {
    t = t.replace(/\bx\s+(\d+)\s*$/, 'x $1 Tabs');
  } else {
    // Bare trailing number (no unit) → add "mg"
    // But NOT if already has mg/mcg/iu/ml unit
    t = t.replace(/(?<!\w)(\d+)\s*$/, '$1mg');
  }

  // Normalize "tabs" → "Tabs", "amps" → "Amps"
  t = t.replace(/\btabs\b/gi, 'Tabs');
  t = t.replace(/\bamps?\b/gi, 'Amps');
  t = t.replace(/\bamp\b/gi, 'Amp');

  // Clean double spaces
  t = t.replace(/\s{2,}/g, ' ').trim();

  return t;
}


// ─── Get clean title for a file ──────────────────────────────────────────────
function getCleanTitle(filename, currentTitle) {
  // Manual overrides take priority
  if (MANUAL_OVERRIDES[filename]) {
    return MANUAL_OVERRIDES[filename];
  }
  return cleanTitleByRules(currentTitle);
}


// ─── Extract and update title in frontmatter ─────────────────────────────────
function extractTitle(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fmMatch = match[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
  if (!fmMatch) return null;
  return fmMatch[1];
}

function updateTitle(content, newTitle) {
  // Handle both quoted and unquoted title values
  return content.replace(
    /^(title:\s*)["']?(.+?)["']?\s*$/m,
    `$1${newTitle}`
  );
}


// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log(DRY_RUN ? '🔍 DRY RUN — no files will be modified\n' : '✏️  APPLYING changes to files\n');

  // Get list of EN product files
  const enDir = path.join(BASE_DIR, 'en');
  const files = fs.readdirSync(enDir).filter(f => f.endsWith('.md')).sort();

  let changed = 0;
  let unchanged = 0;
  let errors = 0;
  const changes = [];

  for (const filename of files) {
    const enPath = path.join(enDir, filename);
    const content = fs.readFileSync(enPath, 'utf-8');
    const currentTitle = extractTitle(content);

    if (!currentTitle) {
      console.log(`⚠️  ${filename}: could not extract title`);
      errors++;
      continue;
    }

    const cleanTitle = getCleanTitle(filename, currentTitle);
    const currentFixed = fixEncoding(currentTitle);

    if (cleanTitle === currentFixed) {
      unchanged++;
      continue;
    }

    changed++;
    changes.push({ filename, from: currentTitle, to: cleanTitle });

    if (DRY_RUN) {
      console.log(`${filename}`);
      console.log(`  OLD: ${currentTitle}`);
      console.log(`  NEW: ${cleanTitle}`);
      console.log();
    } else {
      // Apply to ALL languages
      for (const lang of LANGS) {
        const filePath = path.join(BASE_DIR, lang, filename);
        if (!fs.existsSync(filePath)) continue;

        const langContent = fs.readFileSync(filePath, 'utf-8');
        const langTitle = extractTitle(langContent);
        if (!langTitle) continue;

        // Update title in this language file
        const updated = updateTitle(langContent, cleanTitle);
        fs.writeFileSync(filePath, updated, 'utf-8');
      }
      console.log(`✅ ${filename}: ${cleanTitle}`);
    }
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`Total files:   ${files.length}`);
  console.log(`Changed:       ${changed}`);
  console.log(`Unchanged:     ${unchanged}`);
  console.log(`Errors:        ${errors}`);

  if (DRY_RUN && changed > 0) {
    console.log(`\nRun with --apply to write changes to all ${LANGS.length} language directories.`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
