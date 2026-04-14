import fs from 'fs';
import path from 'path';

const EN_DIR = 'astro-steroid/src/content/products/en';
const NL_DIR = 'astro-steroid/src/content/products/nl';

const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.md'));

// Collect all body text from NL files to find remaining English
const englishFragments = {};

for (const f of enFiles) {
  const nlPath = path.join(NL_DIR, f);
  if (!fs.existsSync(nlPath)) continue;
  const nlRaw = fs.readFileSync(nlPath, 'utf-8');
  const nlBody = (nlRaw.split('---')[2] || '').trim();
  
  // Find English-looking words/phrases that weren't translated
  // Common English words that should be translated
  const englishWords = nlBody.match(/\b(?:the|this|that|which|where|who|whose|whom|these|those|with|without|from|into|through|during|before|after|between|against|under|over|above|below|while|when|because|since|although|though|until|unless|whether|however|therefore|furthermore|moreover|nevertheless|additionally|consequently|alternatively|specifically|particularly|significantly|approximately|essentially|typically|effectively|consistently|independently|exclusively|simultaneously|pharmaceutical|manufactured|manufacturing|authentic|authenticity|formulation|administration|concentration|competitive|comfortable|injectable|protection|verification|underground|performance|recommended|experienced|experienced|alternative|alternatives|available|powerful|critical|complete|standard|verified|delivers|provides|requires|contains|ensuring|making|enough|across|muscle|growth|levels|effects|dosing|single|supply|extended|recovery|blend|potent|premium|trusted|genuine|superior|optimal|minimal|significant|prominent)\b/gi);
  
  if (englishWords) {
    for (const w of englishWords) {
      const lower = w.toLowerCase();
      englishFragments[lower] = (englishFragments[lower] || 0) + 1;
    }
  }
}

console.log('\n=== Most frequent untranslated English words in NL files ===');
const sorted = Object.entries(englishFragments).sort((a,b) => b[1] - a[1]).slice(0, 80);
for (const [word, count] of sorted) {
  console.log(`${count}\t${word}`);
}

// Now show some full sentences that are mostly English from NL body
console.log('\n=== Sample untranslated sentences from NL files ===');
let sampleCount = 0;
for (const f of enFiles.slice(0, 10)) {
  const nlPath = path.join(NL_DIR, f);
  if (!fs.existsSync(nlPath)) continue;
  const nlRaw = fs.readFileSync(nlPath, 'utf-8');
  const nlBody = (nlRaw.split('---')[2] || '').trim();
  const sentences = nlBody.split(/[.!?]\s+/);
  for (const s of sentences) {
    // Count English-looking words vs non-English
    const words = s.split(/\s+/).filter(w => w.length > 2);
    const engWords = words.filter(w => /^(the|this|that|which|with|from|for|and|has|its|their|our|can|are|was|were|been|being|have|will|would|could|should|may|might|shall|must|need|than|more|most|also|just|only|even|very|well|much|each|every|both|all|any|some|such|but|not|into|over|under|through|during|before|after|while|where|when|who|how|why|what|because|since|although|until|unless|or|nor|yet|so|if|then|else|at|by|on|in|is|of|to|as|no|do|did|does|about|between|against|above|below|around|without|within|along|across|among|off|out|up|down|back|away|here|there|now|still|already|often|always|never|sometimes|usually|especially|particularly|specifically|significantly|approximately|effectively|essentially|ultimately|typically|consistently|independently|exclusively)$/i.test(w));
    const ratio = words.length > 0 ? engWords.length / words.length : 0;
    if (ratio > 0.3 && words.length > 5 && sampleCount < 20) {
      console.log(`[${f}] ${s.substring(0, 200)}`);
      sampleCount++;
    }
  }
}
