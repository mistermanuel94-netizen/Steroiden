/**
 * Product Generator Script
 * Parses top200products.md and generates Astro content collection .md files
 * for src/content/products/en/
 * 
 * Run: node generate-products.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.join(__dirname, 'top200products.md');
const OUT_DIR = path.join(__dirname, 'astro-steroid', 'src', 'content', 'products', 'en');

// Ensure output directory exists
fs.mkdirSync(OUT_DIR, { recursive: true });

const raw = fs.readFileSync(SOURCE, 'utf-8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

// Split into product blocks by "### Product #"
const blocks = raw.split(/(?=### Product #\d+)/g).filter(b => b.startsWith('### Product #'));

console.log(`Found ${blocks.length} product blocks.`);

// Category slugs mapping
function categorySlug(cat) {
  // Map raw category from the data to a clean slug
  const c = cat.toLowerCase().trim();
  
  if (c.includes('test enanthate') || c.includes('test e')) return 'testosterone';
  if (c.includes('test cypionate') || c.includes('test cyp')) return 'testosterone';
  if (c.includes('test propionate') || c.includes('test prop')) return 'testosterone';
  if (c.includes('sustanon') || c.includes('sust')) return 'testosterone';
  if (c.includes('test mix') || c.includes('testosterone blend') || c.includes('tri ester') || c.includes('multi ester test') || c.includes('test-mix')) return 'testosterone';
  if (c.includes('trestolone') || c.includes('ment')) return 'testosterone';
  if (c.includes('testosterone')) return 'testosterone';
  
  if (c.includes('trenbolone') || c.includes('tren') || c.includes('parabolan') || c.includes('fastrip')) return 'trenbolone';
  
  if (c.includes('nandrolone') || c.includes('deca') || c.includes('npp')) return 'nandrolone';
  
  if (c.includes('boldenone') || c.includes('equipoise')) return 'boldenone';
  
  if (c.includes('masteron') || c.includes('drostanolone')) return 'masteron';
  
  if (c.includes('primobolan') || c.includes('methenolone') || c.includes('primobol')) return 'primobolan';
  
  if (c.includes('mass mix') || c.includes('rip mix') || c.includes('rip-') || c.includes('superbolan') || c.includes('test/mast')) return 'steroid-blends';
  if (c.includes('injectable') && c.includes('mix')) return 'steroid-blends';
  
  if (c.includes('anavar') || c.includes('oxandrolone') || c.includes('winvar') || c.includes('var 10') || c.includes('var-10')) return 'anavar';
  if (c.includes('dianabol') || c.includes('dbol') || c.includes('metandienone') || c.includes('methandienone')) return 'dianabol';
  if (c.includes('winstrol') || c.includes('stanozolol')) return 'winstrol';
  if (c.includes('anadrol') || c.includes('oxymetholone') || c.includes('anapolon')) return 'anadrol';
  if (c.includes('turinabol')) return 'turinabol';
  if (c.includes('superdrol')) return 'superdrol';
  if (c.includes('oral') && c.includes('primo')) return 'oral-primobolan';
  
  if (c.includes('nolvadex') || c.includes('tamoxifen')) return 'pct';
  if (c.includes('clomid') || c.includes('clomiphene')) return 'pct';
  if (c.includes('arimidex') || c.includes('anastrozole')) return 'pct';
  if (c.includes('hcg')) return 'pct';
  if (c.includes('proviron') || c.includes('mesterolone')) return 'pct';
  if (c.includes('aromasin') || c.includes('exemestane')) return 'pct';
  if (c.includes('letrozole')) return 'pct';
  if (c.includes('cabergoline')) return 'pct';
  if (c.includes('raloxifene')) return 'pct';
  if (c.includes('pct')) return 'pct';
  
  if (c.includes('clenbuterol') || c.includes('clen')) return 'weight-loss';
  if (c.includes('t3') || c.includes('liothyronine') || c.includes('t4') || c.includes('levothyroxine') || c.includes('thyroid')) return 'weight-loss';
  if (c.includes('dnp') || c.includes('dinitrophenol')) return 'weight-loss';
  if (c.includes('yohimbine')) return 'weight-loss';
  
  if (c.includes('hgh') || c.includes('somatropin') || c.includes('growth hormone')) return 'hgh';
  
  if (c.includes('peptide') || c.includes('bpc') || c.includes('tb-500') || c.includes('cjc') || c.includes('ipamorelin') || c.includes('ghrp') || c.includes('melanotan') || c.includes('pt-141') || c.includes('igf') || c.includes('mgf') || c.includes('fragment') || c.includes('follistatin') || c.includes('sermorelin') || c.includes('hexarelin') || c.includes('aod') || c.includes('ghk') || c.includes('epithalon') || c.includes('kisspeptin')) return 'peptides';
  
  if (c.includes('sarm') || c.includes('ostarine') || c.includes('ligandrol') || c.includes('rad-140') || c.includes('cardarine') || c.includes('yk-11') || c.includes('s-23') || c.includes('mk-677') || c.includes('sr-9009') || c.includes('ibutamoren') || c.includes('testolone') || c.includes('stenabolic')) return 'sarms';
  
  if (c.includes('cialis') || c.includes('tadalafil') || c.includes('viagra') || c.includes('sildenafil') || c.includes('priligy') || c.includes('dapoxetine') || c.includes('sexual') || c.includes('tadapox')) return 'sexual-health';
  
  if (c.includes('pharma grade')) return 'pharma-grade';
  
  if (c.includes('diazepam') || c.includes('zopiclone') || c.includes('pregabalin') || c.includes('modafinil') || c.includes('xanax') || c.includes('alprazolam') || c.includes('clonazepam') || c.includes('tramadol') || c.includes('relaxant') || c.includes('nootropic') || c.includes('sleep')) return 'ancillaries';
  
  if (c.includes('bacteriostatic') || c.includes('accessori') || c.includes('syringe') || c.includes('needle')) return 'accessories';
  
  // Fallback: slugify the category
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Determine form from category + title
function getForm(cat, title) {
  const c = (cat + ' ' + title).toLowerCase();
  
  // Check injectable FIRST — most products with 'injectable', 'amp', 'vial', 'ml' in the category are injectable
  if (/\binjectable\b/.test(c) || /\bamp\b/.test(c) || /\bamps\b/.test(c) || /\bvial\b/.test(c) || /\d+\s*ml\b/.test(c)) return 'injectable';
  
  // Then check oral — use word boundaries to avoid matching 'injectable' substring
  if (/\boral\b/.test(c) || /\btabs?\b/.test(c) || /\btablets?\b/.test(c)) return 'oral';
  if (/\bcapsules?\b/.test(c)) return 'capsule';
  if (c.includes('cream')) return 'cream';
  if (c.includes('gel')) return 'gel';
  if (c.includes('patch')) return 'patch';
  if (c.includes('drops')) return 'drops';
  
  // Guess from known oral steroids
  const orals = ['anavar', 'dianabol', 'dbol', 'winstrol', 'stanozolol', 'anadrol', 'oxymetholone', 'turinabol', 'superdrol', 'primobolan oral', 'nolvadex', 'clomid', 'arimidex', 'proviron', 'aromasin', 'letrozole', 'cabergoline', 'raloxifene', 'clenbuterol', 't3', 't4', 'liothyronine', 'levothyroxine', 'dnp', 'yohimbine', 'cialis', 'tadalafil', 'viagra', 'sildenafil', 'priligy', 'dapoxetine', 'tadapox', 'diazepam', 'zopiclone', 'pregabalin', 'modafinil', 'xanax', 'alprazolam', 'clonazepam', 'tramadol'];
  if (orals.some(o => c.includes(o))) return 'oral';
  
  // SARMs are oral
  const sarms = ['ostarine', 'ligandrol', 'rad-140', 'cardarine', 'yk-11', 's-23', 'mk-677', 'sr-9009'];
  if (sarms.some(s => c.includes(s))) return 'oral';
  
  // Peptides / HGH are injectable
  const peptides = ['bpc', 'tb-500', 'cjc', 'ipamorelin', 'ghrp', 'melanotan', 'pt-141', 'igf', 'mgf', 'fragment', 'follistatin', 'sermorelin', 'hexarelin', 'aod', 'ghk', 'epithalon', 'kisspeptin', 'hgh', 'somatropin', 'hcg'];
  if (peptides.some(p => c.includes(p))) return 'injectable';
  
  return null;
}

// Extract manufacturer from title
function getManufacturer(title) {
  const labs = [
    'Pharmaqo Labs', 'Pharmaqo US', 'Pharmaqo',
    'Intex Pharma', 'Hemi Pharma', 'Hemipharma',
    'C4 Pharma', 'C4 Pharmaceuticals', 'C4',
    'Proton Pharma',
    'Bayer', 'Abdi Ibrahim', 'Aspen Pharma',
    'Hansel Pharma', 'Geofman Pharmaceuticals',
    'OBS Pharma', 'Karachi Organon',
  ];
  for (const lab of labs) {
    if (title.toLowerCase().includes(lab.toLowerCase())) return lab;
  }
  return null;
}

// Parse price in EUR from "£XX.XX / €XX.XX" format
function parseEurPrice(priceStr) {
  const m = priceStr.match(/€([\d.]+)/);
  return m ? parseFloat(m[1]) : null;
}

// Parse MOQ from "Minimum Order: X units (€XX.XX)"
function parseMoq(moqStr) {
  const m = moqStr.match(/(\d+)\s*units?/i);
  return m ? parseInt(m[1]) : 1;
}

// Extract concentration from title
function extractConcentration(title) {
  const m = title.match(/(\d+(?:\.\d+)?)\s*(?:mg|mcg|iu|ug)(?:\/ml)?/i);
  return m ? m[0] : null;
}

// Parse FAQs
function parseFaqs(text) {
  const faqs = [];
  const faqRegex = /\*\*Q:\s*(.*?)\*\*\s*A:\s*(.*?)(?=\n-\s*\*\*Q:|$)/gs;
  let m;
  while ((m = faqRegex.exec(text)) !== null) {
    faqs.push({
      question: m[1].trim(),
      answer: m[2].trim(),
    });
  }
  return faqs;
}

// Escape YAML string
function yamlStr(s) {
  if (!s) return '""';
  // If contains special YAML chars, wrap in quotes and escape internal quotes
  if (s.includes(':') || s.includes('#') || s.includes("'") || s.includes('"') || s.includes('\n') || s.includes('|') || s.includes('>') || s.includes('{') || s.includes('}') || s.includes('[') || s.includes(']') || s.includes('&') || s.includes('*') || s.includes('!') || s.includes('%') || s.includes('@') || s.includes('`') || s.match(/^\s/) || s.match(/\s$/)) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return s;
}

function extractField(block, fieldName) {
  // Try bold format first: **Field:** value
  const regex = new RegExp(`\\*\\*${fieldName}:\\*\\*\\s*(.+?)(?:\\s*\\|\\s*\\*\\*|$)`, 'im');
  const m = block.match(regex);
  if (m) return m[1].trim();
  return null;
}

function extractMultiLineField(block, fieldName) {
  const regex = new RegExp(`\\*\\*${fieldName}:\\*\\*\\s*(.+?)(?=\\n\\*\\*|\\n---|\n\n###|$)`, 'is');
  const m = block.match(regex);
  if (m) return m[1].trim();
  return null;
}

// Parse a product block
function parseProduct(block, index) {
  // Title
  const titleMatch = block.match(/### Product #\d+\s*—?\s*(.*)/);
  if (!titleMatch) return null;
  const rawTitle = titleMatch[1].trim();
  
  // Full price line (the line after the title — contains Price, Category, SKU)
  const priceLineMatch = block.match(/\*\*Price:\*\*\s*(.*)/);
  const fullPriceLine = priceLineMatch ? priceLineMatch[1] : '';
  
  // Category from the price/category line  
  const catMatch = fullPriceLine.match(/\*\*Category:\*\*\s*([^|*]+)/);
  const rawCategory = catMatch ? catMatch[1].trim() : 'Uncategorized';
  
  // SKU
  const skuMatch = fullPriceLine.match(/\*\*SKU:\*\*\s*([^\s|*]+)/);
  const sku = skuMatch ? skuMatch[1].trim() : `product-${index}`;
  
  // EUR Price - look in the price part before Category
  const pricePart = fullPriceLine.split('**Category')[0];
  const eurPrice = parseEurPrice(pricePart);
  
  // MOQ
  const moqLine = block.match(/\*\*Minimum Order:\*\*\s*(.+?)(?:\n|$)/);
  const moq = moqLine ? parseMoq(moqLine[1]) : 1;
  
  // Meta title & description 
  const metaTitleMatch = block.match(/\*\*Meta Title:\*\*\s*(.+?)(?:\n|$)/);
  const metaTitle = metaTitleMatch ? metaTitleMatch[1].trim() : rawTitle;
  
  const metaDescMatch = block.match(/\*\*Meta Description:\*\*\s*(.+?)(?:\n|$)/);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : '';
  
  // Primary keyword
  const pkMatch = block.match(/\*\*Primary Keyword:\*\*\s*(.+?)(?:\n|$)/);
  const primaryKeyword = pkMatch ? pkMatch[1].trim() : rawTitle;
  
  // Secondary keywords (as tags)
  const skMatch = block.match(/\*\*Secondary Keywords:\*\*\s*(.+?)(?:\n|$)/);
  const tags = skMatch ? skMatch[1].split(',').map(t => t.trim()).filter(Boolean).slice(0, 8) : [];
  
  // SEO Description (paragraphs after "SEO Product Description:")
  const descMatch = block.match(/\*\*SEO Product Description:\*\*\s*\n([\s\S]*?)(?=\n\*\*Key Benefits|$)/);
  const fullDesc = descMatch ? descMatch[1].trim() : '';
  // Use first sentence or metaDesc as short description
  const firstSentence = fullDesc.split(/\.\s/)[0];
  const shortDescription = firstSentence 
    ? (firstSentence.length > 200 ? firstSentence.substring(0, 197) + '...' : firstSentence + '.') 
    : (metaDesc || rawTitle);
  
  // FAQs
  const faqSection = block.match(/\*\*FAQ:\*\*\s*\n([\s\S]*?)(?=\n---|\n###|$)/);
  const faqs = faqSection ? parseFaqs(faqSection[1]) : [];
  
  // Derived fields
  const category = categorySlug(rawCategory + ' ' + rawTitle);
  const form = getForm(rawCategory, rawTitle);
  const manufacturer = getManufacturer(rawTitle);
  const concentration = extractConcentration(rawTitle);
  
  // Calculate price range
  const priceRange = eurPrice ? `€${eurPrice.toFixed(2)}` : 'Contact for price';
  
  // Try to extract package info from title
  const packMatch = rawTitle.match(/x\s*(\d+)\s*(tabs?|amps?|capsules?|vials?)/i);
  const packageSizes = packMatch ? [`${packMatch[1]} ${packMatch[2]}`] : ['1 unit'];
  
  // Also check for "ml" in title
  if (!packMatch) {
    const mlMatch = rawTitle.match(/(\d+)\s*ml/i);
    if (mlMatch) packageSizes[0] = `${mlMatch[1]}ml vial`;
    
    const ampMatch = rawTitle.match(/(\d+)\s*(?:x\s*)?(?:\d+\s*)?amps?/i);
    if (ampMatch) packageSizes[0] = `${ampMatch[0].trim()}`;
  }
  
  return {
    id: sku,
    title: rawTitle,
    primaryKeyword: primaryKeyword,
    eurPrice,
    priceRange,
    category,
    rawCategory,
    form,
    manufacturer,
    concentration,
    moq,
    packageSizes,
    tags,
    shortDescription,
    metaTitle,
    metaDesc,
    faqs,
    fullDesc,
    slug: sku,
  };
}

// Generate YAML frontmatter and markdown body
function generateMd(product) {
  let yaml = '---\n';
  yaml += `id: ${yamlStr(product.id)}\n`;
  yaml += `title: ${yamlStr(product.title)}\n`;
  yaml += `primary_keyword: ${yamlStr(product.primaryKeyword)}\n`;
  yaml += `search_volume: 1000\n`;
  yaml += `lang: en\n`;
  yaml += `category: ${yamlStr(product.category)}\n`;
  
  if (product.form) yaml += `form: ${product.form}\n`;
  if (product.manufacturer) yaml += `manufacturer: ${yamlStr(product.manufacturer)}\n`;
  if (product.concentration) yaml += `concentration: ${yamlStr(product.concentration)}\n`;
  
  yaml += `package_sizes:\n`;
  product.packageSizes.forEach(ps => {
    yaml += `  - ${yamlStr(ps)}\n`;
  });
  
  yaml += `moq: ${product.moq}\n`;
  if (product.eurPrice) yaml += `price: ${product.eurPrice}\n`;
  yaml += `price_range: ${yamlStr(product.priceRange)}\n`;
  yaml += `short_description: ${yamlStr(product.shortDescription)}\n`;
  
  yaml += `tags:\n`;
  product.tags.forEach(tag => {
    yaml += `  - ${yamlStr(tag)}\n`;
  });
  if (product.tags.length === 0) {
    yaml += `  - ${yamlStr(product.category)}\n`;
  }
  
  yaml += `images:\n`;
  yaml += `  - /images/steroid-default.jpg\n`;
  
  yaml += `meta:\n`;
  yaml += `  title: ${yamlStr(product.metaTitle)}\n`;
  yaml += `  description: ${yamlStr(product.metaDesc)}\n`;
  
  if (product.faqs.length > 0) {
    yaml += `faqs:\n`;
    product.faqs.forEach(faq => {
      yaml += `  - question: ${yamlStr(faq.question)}\n`;
      yaml += `    answer: ${yamlStr(faq.answer)}\n`;
    });
  }
  
  yaml += '---\n\n';
  yaml += product.fullDesc || product.shortDescription;
  
  return yaml;
}

// ============== MAIN ==============
const products = [];
for (let i = 0; i < blocks.length; i++) {
  const p = parseProduct(blocks[i], i + 1);
  if (p) products.push(p);
}

console.log(`Parsed ${products.length} products.`);

// Count categories
const cats = {};
products.forEach(p => {
  cats[p.category] = (cats[p.category] || 0) + 1;
});
console.log('\nCategories:');
Object.entries(cats).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} products`);
});

// Generate files in batches of 4
const BATCH_SIZE = 4;
let generated = 0;

for (let i = 0; i < products.length; i += BATCH_SIZE) {
  const batch = products.slice(i, i + BATCH_SIZE);
  
  for (const product of batch) {
    const filename = `${product.slug}.md`;
    const filepath = path.join(OUT_DIR, filename);
    const content = generateMd(product);
    
    fs.writeFileSync(filepath, content, 'utf-8');
    generated++;
  }
  
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  const totalBatches = Math.ceil(products.length / BATCH_SIZE);
  console.log(`Batch ${batchNum}/${totalBatches}: Generated ${batch.map(p => p.slug).join(', ')}`);
}

console.log(`\n✓ Generated ${generated} product files in ${OUT_DIR}`);
