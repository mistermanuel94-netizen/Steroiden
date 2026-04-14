#!/usr/bin/env node
/**
 * Generate localized product files for all non-English languages.
 * Reads English product .md files and creates copies for nl, de, fr, es, it, ru
 * with updated `lang` field and localized meta/description/keywords where possible.
 */

import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.join('astro-steroid', 'src', 'content', 'products');
const EN_DIR = path.join(PRODUCTS_DIR, 'en');
const LANGS = ['nl', 'de', 'fr', 'es', 'it', 'ru'];

// ── Localization maps ──────────────────────────────────────────────────────────

const buyTranslations = {
  nl: 'kopen', de: 'kaufen', fr: 'acheter', es: 'comprar', it: 'comprare', ru: 'купить'
};

const deliveryTranslations = {
  nl: 'EU-levering', de: 'EU-Lieferung', fr: 'Livraison UE', es: 'Envío UE', it: 'Consegna UE', ru: 'Доставка ЕС'
};

const orderNowTranslations = {
  nl: 'Bestel nu', de: 'Jetzt bestellen', fr: 'Commandez maintenant', es: 'Pida ahora', it: 'Ordina ora', ru: 'Закажите сейчас'
};

const trustedSinceTranslations = {
  nl: 'vertrouwd sinds', de: 'vertraut seit', fr: 'de confiance depuis', es: 'confianza desde', it: 'affidabile dal', ru: 'доверие с'
};

const fastDiscreetTranslations = {
  nl: 'Snelle discrete EU-verzending', de: 'Schneller diskreter EU-Versand', fr: 'Expédition UE rapide et discrète', es: 'Envío discreto rápido en la UE', it: 'Spedizione UE rapida e discreta', ru: 'Быстрая дискретная доставка по ЕС'
};

const purityTranslations = {
  nl: 'zuiverheid', de: 'Reinheit', fr: 'pureté', es: 'pureza', it: 'purezza', ru: 'чистота'
};

// Primary keyword prefix: "buy X" → localized
const keywordPrefixes = {
  nl: { 'buy': 'koop', 'best': 'beste', 'cheap': 'goedkope', 'where to buy': 'waar koop je' },
  de: { 'buy': 'kaufen', 'best': 'beste', 'cheap': 'günstige', 'where to buy': 'wo kaufen' },
  fr: { 'buy': 'acheter', 'best': 'meilleur', 'cheap': 'pas cher', 'where to buy': 'où acheter' },
  es: { 'buy': 'comprar', 'best': 'mejor', 'cheap': 'barato', 'where to buy': 'dónde comprar' },
  it: { 'buy': 'comprare', 'best': 'migliore', 'cheap': 'economico', 'where to buy': 'dove comprare' },
  ru: { 'buy': 'купить', 'best': 'лучший', 'cheap': 'дешёвый', 'where to buy': 'где купить' },
};

// Region/country substitutions in tags and meta
const regionReplacements = {
  nl: { 'UK': 'Nederland', 'Europe': 'Europa', 'EU': 'EU' },
  de: { 'UK': 'Deutschland', 'Europe': 'Europa', 'EU': 'EU' },
  fr: { 'UK': 'France', 'Europe': 'Europe', 'EU': 'UE' },
  es: { 'UK': 'España', 'Europe': 'Europa', 'EU': 'UE' },
  it: { 'UK': 'Italia', 'Europe': 'Europa', 'EU': 'UE' },
  ru: { 'UK': 'Россия', 'Europe': 'Европа', 'EU': 'ЕС' },
};

// ── Helpers ─────────────────────────────────────────────────────────────────────

function localizeKeyword(keyword, lang) {
  let result = keyword;
  const prefixes = keywordPrefixes[lang];
  for (const [en, loc] of Object.entries(prefixes)) {
    const re = new RegExp(`\\b${en}\\b`, 'gi');
    result = result.replace(re, loc);
  }
  return result;
}

function localizeTag(tag, lang) {
  let result = tag;
  const regions = regionReplacements[lang];
  for (const [en, loc] of Object.entries(regions)) {
    // Replace as whole word (case-sensitive for country codes)
    result = result.replace(new RegExp(`\\b${en}\\b`, 'g'), loc);
  }
  // Also localize "buy" / "cheap" in tags
  const prefixes = keywordPrefixes[lang];
  for (const [en, loc] of Object.entries(prefixes)) {
    result = result.replace(new RegExp(`\\b${en}\\b`, 'gi'), loc);
  }
  return result;
}

function localizeMetaTitle(title, lang) {
  let result = title;
  const regions = regionReplacements[lang];
  for (const [en, loc] of Object.entries(regions)) {
    result = result.replace(new RegExp(`\\b${en}\\b`, 'g'), loc);
  }
  // Replace "Buy" at start
  result = result.replace(/^Buy\b/i, keywordPrefixes[lang]['buy'].charAt(0).toUpperCase() + keywordPrefixes[lang]['buy'].slice(1));
  // Replace "EU Delivery" / "Delivery"
  result = result.replace(/EU Delivery/gi, deliveryTranslations[lang]);
  result = result.replace(/\bOrder now\b/gi, orderNowTranslations[lang]);
  result = result.replace(/trusted since/gi, trustedSinceTranslations[lang]);
  return result;
}

function localizeMetaDescription(desc, lang) {
  let result = desc;
  const regions = regionReplacements[lang];
  for (const [en, loc] of Object.entries(regions)) {
    result = result.replace(new RegExp(`\\b${en}\\b`, 'g'), loc);
  }
  result = result.replace(/Fast discreet EU shipping/gi, fastDiscreetTranslations[lang]);
  result = result.replace(/\bOrder now\b/gi, orderNowTranslations[lang]);
  result = result.replace(/trusted since/gi, trustedSinceTranslations[lang]);
  result = result.replace(/\bpurity\b/gi, purityTranslations[lang]);
  return result;
}

// ── Parse & build ───────────────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  return { frontmatterRaw: match[1], body: match[2] };
}

function processFile(filename, enContent, lang) {
  const parsed = parseFrontmatter(enContent);
  if (!parsed) {
    console.error(`  ⚠ Could not parse frontmatter for ${filename}`);
    return null;
  }

  let fm = parsed.frontmatterRaw;

  // 1. Replace lang: en → lang: {lang}
  fm = fm.replace(/^lang:\s*en$/m, `lang: ${lang}`);

  // 2. Localize primary_keyword
  fm = fm.replace(/^(primary_keyword:\s*)(.+)$/m, (_, prefix, kw) => {
    return prefix + localizeKeyword(kw.trim(), lang);
  });

  // 3. Localize tags
  fm = fm.replace(/^(  - )(.+)$/gm, (full, prefix, tag) => {
    // Only localize tags (not inside faqs/images/package_sizes context)
    return prefix + localizeTag(tag, lang);
  });

  // 4. Localize meta title (handles both quoted and unquoted)
  fm = fm.replace(/^(  title:\s*"?)([^"\n]+)("?)$/m, (_, prefix, title, suffix) => {
    return prefix + localizeMetaTitle(title, lang) + suffix;
  });

  // 5. Localize meta description
  fm = fm.replace(/^(  description:\s*)(.+)$/m, (_, prefix, desc) => {
    return prefix + localizeMetaDescription(desc, lang);
  });

  return `---\n${fm}\n---\n${parsed.body}`;
}

// ── Main ────────────────────────────────────────────────────────────────────────

const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.md'));
console.log(`Found ${enFiles.length} English product files.`);

let totalCreated = 0;

for (const lang of LANGS) {
  const langDir = path.join(PRODUCTS_DIR, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }

  let created = 0;
  for (const filename of enFiles) {
    const enContent = fs.readFileSync(path.join(EN_DIR, filename), 'utf-8').replace(/\r\n/g, '\n');
    const localized = processFile(filename, enContent, lang);
    if (localized) {
      fs.writeFileSync(path.join(langDir, filename), localized, 'utf-8');
      created++;
    }
  }
  totalCreated += created;
  console.log(`✓ ${lang}: ${created} product files created in ${langDir}`);
}

console.log(`\nDone! Created ${totalCreated} localized product files across ${LANGS.length} languages.`);
