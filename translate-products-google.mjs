/**
 * translate-products-google.mjs  (OPTIMIZED - batch API calls)
 * 
 * Translates all product .md files from English to target languages
 * using Google Translate API with batch translation for speed.
 * 
 * Usage:
 *   node translate-products-google.mjs all          # all 6 languages
 *   node translate-products-google.mjs nl            # just Dutch
 *   node translate-products-google.mjs nl,de         # specific languages
 *   node translate-products-google.mjs nl --start=50 # resume from file 50
 */

import translate from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';

// ── Config ────────────────────────────────────────────────────
const PRODUCTS_DIR = 'astro-steroid/src/content/products';
const EN_DIR = path.join(PRODUCTS_DIR, 'en');
const LANG_MAP = { nl: 'nl', de: 'de', fr: 'fr', es: 'es', it: 'it', ru: 'ru' };
const KEYWORD_VERBS = {
  nl: 'kopen', de: 'kaufen', fr: 'acheter',
  es: 'comprar', it: 'acquistare', ru: 'купить',
};

const DELAY_BETWEEN_FILES = 3000;  // ms between files to avoid rate limiting
const RATE_LIMIT_BACKOFF = 20000;

// ── Helpers ───────────────────────────────────────────────────

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function unquote(s) {
  if (!s) return '';
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function escapeYaml(s) {
  if (!s) return '""';
  const needsQuoting = /[:#\[\]{}&*!|>'"`,@?\\]/.test(s) || s.includes('\n') || s.startsWith(' ') || s.endsWith(' ');
  if (needsQuoting) {
    let clean = s.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    clean = clean.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${clean}"`;
  }
  return s;
}

function parseProductFile(content) {
  const parts = content.split('---');
  if (parts.length < 3) return null;
  return { body: parts.slice(2).join('---').trim(), parsed: parseSimpleYaml(parts[1]) };
}

function parseSimpleYaml(yaml) {
  const result = { tags: [], images: [], package_sizes: [], faqs: [], meta: {} };
  const lines = yaml.split('\n');
  let currentKey = null;
  let faqIndex = -1;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const indent = line.length - line.trimStart().length;

    if (indent === 0) {
      const m = trimmed.match(/^([\w_]+)\s*:\s*(.*)$/);
      if (m) {
        currentKey = m[1];
        if (!['faqs', 'package_sizes', 'tags', 'images', 'meta'].includes(m[1])) {
          result[m[1]] = unquote(m[2]);
        }
      }
    } else if (indent >= 2) {
      if (currentKey === 'meta') {
        if (trimmed.startsWith('title:')) result.meta.title = unquote(trimmed.replace(/^title:\s*/, ''));
        else if (trimmed.startsWith('description:')) result.meta.description = unquote(trimmed.replace(/^description:\s*/, ''));
      } else if (currentKey === 'tags' && trimmed.startsWith('- ')) {
        result.tags.push(unquote(trimmed.slice(2)));
      } else if (currentKey === 'images' && trimmed.startsWith('- ')) {
        result.images.push(unquote(trimmed.slice(2)));
      } else if (currentKey === 'package_sizes' && trimmed.startsWith('- ')) {
        result.package_sizes.push(unquote(trimmed.slice(2)));
      } else if (currentKey === 'faqs') {
        if (trimmed.startsWith('- question:')) {
          faqIndex++;
          result.faqs[faqIndex] = { question: unquote(trimmed.replace(/^- question:\s*/, '')), answer: '' };
        } else if (trimmed.startsWith('answer:') && faqIndex >= 0) {
          result.faqs[faqIndex].answer = unquote(trimmed.replace(/^answer:\s*/, ''));
        }
      }
    }
  }
  return result;
}

// ── Translation ───────────────────────────────────────────────

let totalApiCalls = 0;

/**
 * Batch translate all strings for one file in a SINGLE API call
 */
async function batchTranslate(texts, lang) {
  // Filter out empty/numeric-only strings
  const indexMap = [];  // maps result index → original index
  const toTranslate = [];
  
  for (let i = 0; i < texts.length; i++) {
    const t = texts[i];
    if (!t || t.trim().length === 0 || /^[\d€$£%\s.,:;/x×\-–—]+$/.test(t)) {
      // Keep as-is
    } else {
      indexMap.push(i);
      toTranslate.push(t);
    }
  }
  
  if (toTranslate.length === 0) return [...texts];
  
  // Translate in chunks of 20 strings max to avoid request size limits
  const CHUNK_SIZE = 20;
  const results = [...texts];
  
  for (let c = 0; c < toTranslate.length; c += CHUNK_SIZE) {
    const chunk = toTranslate.slice(c, c + CHUNK_SIZE);
    const chunkIndices = indexMap.slice(c, c + CHUNK_SIZE);
    
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        totalApiCalls++;
        const res = await translate(chunk, { from: 'en', to: lang });
        
        // res is an array when input is an array
        const resArray = Array.isArray(res) ? res : [res];
        for (let i = 0; i < resArray.length; i++) {
          results[chunkIndices[i]] = resArray[i].text;
        }
        break; // success
      } catch (err) {
        if (err.message && (err.message.includes('Too Many') || err.message.includes('429'))) {
          const wait = RATE_LIMIT_BACKOFF * (attempt + 1);
          console.log(`    Rate limited, waiting ${wait/1000}s...`);
          await sleep(wait);
        } else {
          console.log(`    Error: ${err.message}`);
          if (attempt === 2) {
            // Return originals for this chunk
            break;
          }
          await sleep(5000);
        }
      }
    }
  }
  
  return results;
}

function buildProductFile(p, t, lang) {
  let out = '---\n';
  out += `id: ${p.id}\n`;
  out += `title: ${p.title}\n`;
  out += `primary_keyword: ${t.primary_keyword}\n`;
  out += `search_volume: ${p.search_volume || 1000}\n`;
  out += `lang: ${lang}\n`;
  out += `category: ${p.category}\n`;
  out += `form: ${p.form}\n`;
  out += `manufacturer: ${p.manufacturer}\n`;
  out += `concentration: ${p.concentration || ''}\n`;
  out += 'package_sizes:\n';
  for (const ps of (p.package_sizes.length ? p.package_sizes : ['1 Pack'])) out += `  - ${ps}\n`;
  out += `moq: ${p.moq || 1}\n`;
  out += `price: ${p.price}\n`;
  out += `price_range: ${p.price_range || '€' + p.price}\n`;
  out += `short_description: ${escapeYaml(t.short_description)}\n`;
  out += 'tags:\n';
  for (const tag of t.tags) out += `  - ${escapeYaml(tag)}\n`;
  out += 'images:\n';
  for (const img of (p.images.length ? p.images : ['/images/steroid-default.jpg'])) out += `  - ${img}\n`;
  out += 'meta:\n';
  out += `  title: ${escapeYaml(t.meta_title)}\n`;
  out += `  description: ${escapeYaml(t.meta_description)}\n`;
  out += 'faqs:\n';
  for (let i = 0; i < t.faq_questions.length; i++) {
    out += `  - question: ${escapeYaml(t.faq_questions[i])}\n`;
    out += `    answer: ${escapeYaml(t.faq_answers[i] || '')}\n`;
  }
  out += '---\n\n';
  out += t.body + '\n';
  return out;
}

async function translateProductFile(enFile, lang) {
  const content = fs.readFileSync(path.join(EN_DIR, enFile), 'utf-8');
  const result = parseProductFile(content);
  if (!result) return false;

  const { body, parsed: p } = result;

  // Collect ALL translatable text into one array
  const allTexts = [];
  const layout = {}; // track positions
  
  // short_description at index 0
  layout.short_desc = allTexts.length;
  allTexts.push(p.short_description || '');
  
  // meta title, description
  layout.meta_title = allTexts.length;
  allTexts.push(p.meta.title || '');
  layout.meta_desc = allTexts.length;
  allTexts.push(p.meta.description || '');
  
  // tags
  layout.tags_start = allTexts.length;
  for (const tag of p.tags) allTexts.push(tag);
  layout.tags_end = allTexts.length;
  
  // FAQ questions and answers (interleaved)
  layout.faqs_start = allTexts.length;
  for (const faq of p.faqs) {
    allTexts.push(faq.question);
    allTexts.push(faq.answer);
  }
  layout.faqs_end = allTexts.length;
  
  // Body paragraphs
  const bodyParagraphs = body.split(/\n\n+/).filter(x => x.trim().length > 0);
  layout.body_start = allTexts.length;
  for (const para of bodyParagraphs) allTexts.push(para.trim());
  layout.body_end = allTexts.length;
  
  // SINGLE batch translate call
  const translated = await batchTranslate(allTexts, lang);
  
  // Extract results
  const primary_keyword = (p.primary_keyword || '').replace(/^buy\b/i, KEYWORD_VERBS[lang] || 'buy');
  
  const faq_questions = [], faq_answers = [];
  for (let i = layout.faqs_start; i < layout.faqs_end; i += 2) {
    faq_questions.push(translated[i]);
    faq_answers.push(translated[i + 1] || '');
  }
  
  const translations = {
    short_description: translated[layout.short_desc],
    tags: translated.slice(layout.tags_start, layout.tags_end),
    meta_title: translated[layout.meta_title],
    meta_description: translated[layout.meta_desc],
    faq_questions,
    faq_answers,
    body: translated.slice(layout.body_start, layout.body_end).join('\n\n'),
    primary_keyword,
  };

  const targetDir = path.join(PRODUCTS_DIR, lang);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, enFile), buildProductFile(p, translations, lang), 'utf-8');
  return true;
}

// ── Main ──────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const langArg = args.find(a => !a.startsWith('--'));
  const startArg = args.find(a => a.startsWith('--start='));
  const startIndex = startArg ? parseInt(startArg.split('=')[1]) - 1 : 0;

  if (!langArg) {
    console.log('Usage: node translate-products-google.mjs <all|nl|nl,de> [--start=N]');
    process.exit(1);
  }

  const langs = langArg === 'all'
    ? Object.keys(LANG_MAP)
    : langArg.split(',').filter(l => LANG_MAP[l]);

  if (!langs.length) {
    console.log('No valid languages. Available:', Object.keys(LANG_MAP).join(', '));
    process.exit(1);
  }

  const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.md')).sort();
  console.log(`Found ${enFiles.length} EN product files`);
  console.log(`Languages: ${langs.join(', ')}`);
  if (startIndex > 0) console.log(`Starting from file #${startIndex + 1}`);
  
  const startTime = Date.now();

  for (const lang of langs) {
    console.log(`\n== TRANSLATING TO ${lang.toUpperCase()} ==`);

    let success = 0, failed = 0;

    for (let i = startIndex; i < enFiles.length; i++) {
      const file = enFiles[i];
      try {
        process.stdout.write(`[${i+1}/${enFiles.length}] ${file}...`);
        const ok = await translateProductFile(file, lang);
        if (ok) { console.log(' OK'); success++; }
        else { console.log(' PARSE_ERR'); failed++; }
      } catch (err) {
        console.log(` FAIL: ${err.message}`);
        failed++;
        if (err.message && err.message.includes('429')) {
          console.log('Persistent rate limit, pausing 30s...');
          await sleep(30000);
        }
      }

      await sleep(DELAY_BETWEEN_FILES);

      if ((i + 1) % 10 === 0) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
        const done = success + failed;
        const perFile = (Date.now() - startTime) / done;
        const totalRemaining = (enFiles.length - i - 1);
        const langRemaining = langs.slice(langs.indexOf(lang) + 1).length * enFiles.length;
        const eta = (((totalRemaining + langRemaining) * perFile) / 60000).toFixed(1);
        console.log(`--- ${done} done | ${elapsed}s | ~${eta}min left | ${totalApiCalls} API calls ---`);
      }
    }

    console.log(`${lang.toUpperCase()}: ${success} OK, ${failed} failed\n`);
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log(`\nDone! ${totalTime}s, ${totalApiCalls} API calls`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
