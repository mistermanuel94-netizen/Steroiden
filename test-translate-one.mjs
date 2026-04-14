import translate from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = 'astro-steroid/src/content/products';
const EN_DIR = path.join(PRODUCTS_DIR, 'en');
const DELAY_MS = 400;

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
  const fmRaw = parts[1];
  const body = parts.slice(2).join('---').trim();
  const parsed = parseSimpleYaml(fmRaw);
  return { body, parsed };
}

function parseSimpleYaml(yaml) {
  const result = { tags: [], images: [], package_sizes: [], faqs: [], meta: {} };
  const lines = yaml.split('\n');
  let currentKey = null;
  let faqIndex = -1;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    
    // Check indentation
    const indent = line.length - line.trimStart().length;
    
    if (indent === 0) {
      // Top-level key
      const kvMatch = trimmed.match(/^([\w_]+)\s*:\s*(.*)$/);
      if (kvMatch) {
        const [, key, val] = kvMatch;
        currentKey = key;
        if (key === 'faqs' || key === 'package_sizes' || key === 'tags' || key === 'images' || key === 'meta') {
          // handled via sub-lines
        } else {
          result[key] = unquote(val);
        }
      }
    } else if (indent >= 2) {
      // Nested content
      if (currentKey === 'meta') {
        if (trimmed.startsWith('title:')) {
          result.meta.title = unquote(trimmed.replace(/^title:\s*/, ''));
        } else if (trimmed.startsWith('description:')) {
          result.meta.description = unquote(trimmed.replace(/^description:\s*/, ''));
        }
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
        } else if (trimmed.startsWith('answer:')) {
          if (faqIndex >= 0) {
            result.faqs[faqIndex].answer = unquote(trimmed.replace(/^answer:\s*/, ''));
          }
        }
      }
    }
  }
  
  return result;
}

async function translateText(text, lang) {
  if (!text || text.trim().length === 0) return text;
  if (/^[\d€$£%\s.,:;/x×\-–—]+$/.test(text)) return text;
  try {
    const res = await translate(text, { from: 'en', to: lang });
    await sleep(DELAY_MS);
    return res.text;
  } catch (err) {
    if (err.message && err.message.includes('Too Many Requests')) {
      console.log('  Rate limited, waiting 10s...');
      await sleep(10000);
      const res = await translate(text, { from: 'en', to: lang });
      return res.text;
    }
    console.log(`  ERR: ${err.message}`);
    return text;
  }
}

const KEYWORD_VERBS = { nl: 'kopen', de: 'kaufen', fr: 'acheter', es: 'comprar', it: 'acquistare', ru: 'купить' };

// Test with ONE file
async function main() {
  const lang = 'nl';
  const testFile = 'test-e-250-bayer-testoviron.md';
  
  console.log(`Testing translation of ${testFile} to ${lang}...`);
  
  const content = fs.readFileSync(path.join(EN_DIR, testFile), 'utf-8');
  const { body, parsed: p } = parseProductFile(content);
  
  console.log('Parsed OK. Translating...');
  
  // Translate each piece
  const short_desc = await translateText(p.short_description, lang);
  console.log('  short_description ✓');
  
  const meta_title = await translateText(p.meta.title, lang);
  console.log('  meta.title ✓');
  
  const meta_desc = await translateText(p.meta.description, lang);
  console.log('  meta.description ✓');
  
  const tags = [];
  for (const tag of p.tags) {
    tags.push(await translateText(tag, lang));
  }
  console.log(`  ${tags.length} tags ✓`);
  
  const faq_questions = [];
  const faq_answers = [];
  for (const faq of p.faqs) {
    faq_questions.push(await translateText(faq.question, lang));
    faq_answers.push(await translateText(faq.answer, lang));
  }
  console.log(`  ${faq_questions.length} FAQs ✓`);
  
  // Body paragraphs
  const bodyParagraphs = body.split(/\n\n+/).filter(x => x.trim().length > 0);
  const translatedParagraphs = [];
  for (const para of bodyParagraphs) {
    translatedParagraphs.push(await translateText(para.trim(), lang));
  }
  console.log(`  ${translatedParagraphs.length} body paragraphs ✓`);
  
  // Build output
  const primary_keyword = (p.primary_keyword || '').replace(/^buy\b/i, KEYWORD_VERBS[lang]);
  
  let out = '---\n';
  out += `id: ${p.id}\n`;
  out += `title: ${p.title}\n`;
  out += `primary_keyword: ${primary_keyword}\n`;
  out += `search_volume: ${p.search_volume || 1000}\n`;
  out += `lang: ${lang}\n`;
  out += `category: ${p.category}\n`;
  out += `form: ${p.form}\n`;
  out += `manufacturer: ${p.manufacturer}\n`;
  out += `concentration: ${p.concentration || ''}\n`;
  out += 'package_sizes:\n';
  for (const ps of (p.package_sizes || ['1 Pack'])) { out += `  - ${ps}\n`; }
  out += `moq: ${p.moq || 1}\n`;
  out += `price: ${p.price}\n`;
  out += `price_range: ${p.price_range || '€' + p.price}\n`;
  out += `short_description: ${escapeYaml(short_desc)}\n`;
  out += 'tags:\n';
  for (const t of tags) { out += `  - ${escapeYaml(t)}\n`; }
  out += 'images:\n';
  for (const img of (p.images || ['/images/steroid-default.jpg'])) { out += `  - ${img}\n`; }
  out += 'meta:\n';
  out += `  title: ${escapeYaml(meta_title)}\n`;
  out += `  description: ${escapeYaml(meta_desc)}\n`;
  out += 'faqs:\n';
  for (let i = 0; i < faq_questions.length; i++) {
    out += `  - question: ${escapeYaml(faq_questions[i])}\n`;
    out += `    answer: ${escapeYaml(faq_answers[i])}\n`;
  }
  out += '---\n\n';
  out += translatedParagraphs.join('\n\n') + '\n';
  
  // Write
  const outPath = path.join(PRODUCTS_DIR, lang, testFile);
  fs.writeFileSync(outPath, out, 'utf-8');
  console.log(`\nWritten to ${outPath}`);
  console.log('\n--- PREVIEW ---');
  console.log(out.substring(0, 2000));
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
