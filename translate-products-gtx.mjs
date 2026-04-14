/**
 * translate-products-gtx.mjs
 * 
 * Uses the translate.googleapis.com/translate_a/single?client=gtx endpoint
 * which has separate (much higher) rate limits from the web scraping endpoint.
 * 
 * Usage:
 *   node translate-products-gtx.mjs all           # all 6 languages
 *   node translate-products-gtx.mjs fr             # just French
 *   node translate-products-gtx.mjs fr --start=130 # resume from file 130
 *   node translate-products-gtx.mjs es,it,ru       # specific languages
 */

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

const DELAY_BETWEEN_FILES = 2000;   // ms between files
const DELAY_BETWEEN_CALLS = 300;    // ms between individual translate calls within a file
const GTX_URL = 'https://translate.googleapis.com/translate_a/single';

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

// ── GTX Translation ───────────────────────────────────────────

let totalApiCalls = 0;

/**
 * Translate a single text using the GTX endpoint
 */
async function translateOneGTX(text, from, to) {
  if (!text || text.trim().length === 0 || /^[\d€$£%\s.,:;/x×\-–—]+$/.test(text)) {
    return text;
  }

  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      totalApiCalls++;
      const url = `${GTX_URL}?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
      const resp = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (resp.status === 429) {
        const wait = 15000 * (attempt + 1);
        process.stdout.write(` [429:${wait/1000}s]`);
        await sleep(wait);
        continue;
      }
      
      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }
      
      const data = await resp.json();
      // Response format: [[["translated text","original text",null,null,N],...],null,"en",...]
      const translated = data[0].map(seg => seg[0]).join('');
      return translated;
    } catch (err) {
      if (attempt === 3) {
        console.log(` [ERR:${err.message}]`);
        return text; // fallback to original
      }
      await sleep(5000 * (attempt + 1));
    }
  }
  return text;
}

/**
 * Translate multiple texts for one product file
 * Batches short strings together using separator to reduce API calls
 */
async function batchTranslateGTX(texts, lang) {
  const results = [...texts];
  
  // Group texts into batches by joining with a unique separator
  // This reduces API calls from ~25 per file to ~3-5
  const SEPARATOR = '\n[|||]\n';
  const MAX_BATCH_CHARS = 3000; // keep well under URL limits after encoding
  
  const batches = [];
  let currentBatch = [];
  let currentLen = 0;
  const indexMap = []; // batch_idx -> [original indices]
  
  for (let i = 0; i < texts.length; i++) {
    const t = texts[i];
    if (!t || t.trim().length === 0 || /^[\d€$£%\s.,:;/x×\-–—]+$/.test(t)) {
      continue; // skip, keep original
    }
    
    const tLen = t.length + SEPARATOR.length;
    if (currentLen + tLen > MAX_BATCH_CHARS && currentBatch.length > 0) {
      // Start new batch
      batches.push({ texts: [...currentBatch], indices: [...(indexMap[batches.length] || [])] });
      indexMap[batches.length - 1] = indexMap[batches.length - 1] || [];
      currentBatch = [];
      currentLen = 0;
    }
    
    if (!indexMap[batches.length]) indexMap[batches.length] = [];
    indexMap[batches.length].push(i);
    currentBatch.push(t);
    currentLen += tLen;
  }
  
  // Push final batch
  if (currentBatch.length > 0) {
    batches.push({ texts: currentBatch, indices: indexMap[batches.length] || [] });
  }
  
  // Translate each batch
  for (const batch of batches) {
    const joined = batch.texts.join(SEPARATOR);
    const translated = await translateOneGTX(joined, 'en', lang);
    
    // Split back using the separator (Google might slightly alter it)
    const parts = translated.split(/\s*\[?\|{2,}\]?\s*|\s*\[\|\|\|\]\s*/);
    
    for (let j = 0; j < batch.indices.length; j++) {
      if (j < parts.length) {
        results[batch.indices[j]] = parts[j].trim();
      }
    }
    
    await sleep(DELAY_BETWEEN_CALLS);
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
  const layout = {};
  
  layout.short_desc = allTexts.length;
  allTexts.push(p.short_description || '');
  
  layout.meta_title = allTexts.length;
  allTexts.push(p.meta.title || '');
  layout.meta_desc = allTexts.length;
  allTexts.push(p.meta.description || '');
  
  layout.tags_start = allTexts.length;
  for (const tag of p.tags) allTexts.push(tag);
  layout.tags_end = allTexts.length;
  
  layout.faqs_start = allTexts.length;
  for (const faq of p.faqs) {
    allTexts.push(faq.question);
    allTexts.push(faq.answer);
  }
  layout.faqs_end = allTexts.length;
  
  const bodyParagraphs = body.split(/\n\n+/).filter(x => x.trim().length > 0);
  layout.body_start = allTexts.length;
  for (const para of bodyParagraphs) allTexts.push(para.trim());
  layout.body_end = allTexts.length;
  
  // Translate all texts using GTX batching
  const translated = await batchTranslateGTX(allTexts, lang);
  
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
    console.log('Usage: node translate-products-gtx.mjs <all|nl|nl,de> [--start=N]');
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
      }

      await sleep(DELAY_BETWEEN_FILES);

      if ((i + 1) % 10 === 0) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
        const done = success + failed;
        const perFile = (Date.now() - startTime) / done;
        const remaining = enFiles.length - i - 1;
        const eta = ((remaining * perFile) / 60000).toFixed(1);
        console.log(`--- ${i+1}/${enFiles.length} | ${elapsed}s | ~${eta}min left | ${totalApiCalls} API calls ---`);
      }
    }

    console.log(`${lang.toUpperCase()}: ${success} OK, ${failed} failed\n`);
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log(`\nDone! ${totalTime}s, ${totalApiCalls} API calls`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
