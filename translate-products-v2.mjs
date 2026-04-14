#!/usr/bin/env node
/**
 * translate-products-v2.mjs
 * Enhanced comprehensive translation engine for steroid product .md files.
 * Reads English source files, applies extensive phrase-level + sentence-level translations,
 * and writes fully localized versions for de, nl, fr, es, it, ru.
 *
 * Usage: node translate-products-v2.mjs [lang]   (e.g. node translate-products-v2.mjs de)
 *        node translate-products-v2.mjs all       (all languages)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_DIR = path.join(__dirname, 'astro-steroid', 'src', 'content', 'products');
const EN_DIR = path.join(PRODUCTS_DIR, 'en');
const LANGUAGES = ['de', 'nl', 'fr', 'es', 'it', 'ru'];

// ─────────────────────────────────────────────────────────────
// COMPREHENSIVE TRANSLATION DICTIONARIES
// Sorted longest-first at runtime. [english, translated]
// ─────────────────────────────────────────────────────────────

const dictionaries = {

// ═══════════════════════════════════════════════════════════════
// GERMAN (de) — Extended
// ═══════════════════════════════════════════════════════════════
de: [
  // ── Full Sentences / Long Phrases ──
  ['Every batch undergoes independent HPLC concentration analysis, sterility testing, and endotoxin screening', 'Jede Charge durchläuft eine unabhängige HPLC-Konzentrationsanalyse, Sterilitätstests und Endotoxin-Screening'],
  ['exceeding the QA standards of most underground laboratories', 'die QA-Standards der meisten Untergrundlabore übertreffend'],
  ['before it reaches a customer', 'bevor es einen Kunden erreicht'],
  ['This commitment to pharmaceutical-grade QA has made', 'Dieses Engagement für pharmazeutische QA hat gemacht'],
  ['one of the fastest-growing performance brands in Europe', 'zu einer der am schnellsten wachsenden Leistungsmarken in Europa'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Jede Bestellung enthält eine Chargenverifizierungsdokumentation, damit Sie die Echtheit vor Ihrer ersten Injektion bestätigen können'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe', 'dem Vertrauen von Ärzten, TRT-Patienten und Wettkampf-Bodybuildern in ganz Europa'],
  ['the most popular injectable steroid in the world after testosterone', 'das beliebteste injizierbare Steroid der Welt nach Testosteron'],
  ['the single most popular oral steroid in Europe', 'das beliebteste orale Steroid in Europa'],
  ['the safest oral anabolic available', 'das sicherste verfügbare orale Anabolikum'],
  ['one of the most widely sought-after oral steroids in Europe', 'eines der meistgesuchten oralen Steroide in Europa'],
  ['the most effective non-hormonal fat-burning compound available', 'die wirksamste nicht-hormonelle Fettverbrennungssubstanz'],
  ['enough for a complete', 'ausreichend für einen vollständigen'],
  ['enough compound for a complete', 'genug Substanz für einen vollständigen'],
  ['enough for a full', 'ausreichend für einen vollständigen'],
  ['enough for multiple complete', 'genug für mehrere vollständige'],
  ['backed by one of the most rigorous quality assurance protocols', 'unterstützt durch eines der strengsten Qualitätssicherungsprotokolle'],
  ['in the UK underground laboratory market', 'auf dem Untergrundlabormarkt'],
  ['has built its reputation on a simple principle', 'hat seinen Ruf auf einem einfachen Prinzip aufgebaut'],
  ['every vial must pass independent HPLC concentration analysis', 'jede Ampulle muss eine unabhängige HPLC-Konzentrationsanalyse bestehen'],
  ['The pharmaceutical-grade carrier oil is formulated for smooth flow through fine-gauge needles', 'Das pharmazeutische Trägeröl ist für einen gleichmäßigen Fluss durch feine Nadeln formuliert'],
  ['minimising post-injection pain and tissue irritation', 'zur Minimierung von Schmerzen nach der Injektion und Gewebeirritationen'],
  ['even at higher volumes', 'selbst bei höheren Volumina'],
  ['Hemi Pharma\'s combination of verified quality and competitive pricing explains why', 'Hemi Pharmas Kombination aus verifizierter Qualität und wettbewerbsfähigen Preisen erklärt, warum'],
  ['consistently ranks among our top-selling injectables', 'durchgehend zu unseren meistverkauften Injektionspräparaten gehört'],
  ['This property makes it popular with athletes in weight-classed sports', 'Diese Eigenschaft macht es bei Athleten in Gewichtsklassen-Sportarten beliebt'],
  ['who need enhanced performance without moving up a weight category', 'die eine verbesserte Leistung benötigen, ohne eine Gewichtsklasse aufzusteigen'],
  ['as well as bodybuilders seeking lean, aesthetic gains without bloating or water retention', 'sowie Bodybuilder, die magere, ästhetische Zuwächse ohne Aufblähung oder Wassereinlagerung suchen'],
  ['contact us with your batch number and we can provide the corresponding HPLC analysis certificate', 'kontaktieren Sie uns mit Ihrer Chargennummer und wir können das entsprechende HPLC-Analysezertifikat bereitstellen'],
  ['scan it on Pharmaqo\'s official verification page to confirm authenticity', 'scannen Sie es auf der offiziellen Verifizierungsseite von Pharmaqo, um die Echtheit zu bestätigen'],
  ['view batch-specific HPLC test results', 'chargenspezifische HPLC-Testergebnisse einsehen'],
  ['the most commonly counterfeited steroids', 'die am häufigsten gefälschten Steroide'],
  ['the most commonly underdosed and counterfeited oral steroids', 'die am häufigsten unterdosierten und gefälschten oralen Steroide'],
  ['All three brands produce quality', 'Alle drei Marken produzieren qualitativ hochwertige'],
  ['differentiates itself with its comprehensive QA documentation', 'unterscheidet sich durch seine umfassende QA-Dokumentation'],
  ['Pricing is comparable across all three', 'Die Preise sind bei allen drei vergleichbar'],
  ['can provide the corresponding', 'kann das entsprechende bereitstellen'],
  ['includes a unique QR code', 'enthält einen einzigartigen QR-Code'],

  // ── Marketing / Commerce ──
  ['Order now — trusted since 2019', 'Jetzt bestellen — vertraut seit 2019'],
  ['Order now — trusted since', 'Jetzt bestellen — vertraut seit'],
  ['Order today', 'Heute bestellen'],
  ['order today', 'heute bestellen'],
  ['Fast discreet EU shipping', 'Schneller diskreter EU-Versand'],
  ['Fast tracked EU delivery', 'Schnelle verfolgte EU-Lieferung'],
  ['Fast EU delivery', 'Schnelle EU-Lieferung'],
  ['EU tracked delivery', 'Verfolgte EU-Lieferung'],
  ['EU-wide delivery', 'EU-weite Lieferung'],
  ['EU delivery', 'EU-Lieferung'],
  ['EU Shop', 'EU-Shop'],
  ['EU shipping', 'EU-Versand'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'wird in einem diskreten Paket mit verfolgter EU-weiter Lieferung versandt'],
  ['best-value', 'das beste Preis-Leistungs-Verhältnis'],
  ['available in Europe', 'in Europa erhältlich'],
  ['across Europe', 'in ganz Europa'],
  ['throughout Europe', 'in ganz Europa'],
  ['from licensed European distributors', 'von lizenzierten europäischen Distributoren'],

  // ── Quality/Lab phrases ──
  ['Hospital-grade purity, batch-verified authenticity', 'Krankenhaus-Reinheit, chargenverifizierte Echtheit'],
  ['hospital-grade purity confirmed through rigorous GMP manufacturing', 'Krankenhausreinheit bestätigt durch strenge GMP-Herstellung'],
  ['hospital-grade purity', 'Krankenhaus-Reinheit'],
  ['batch-verified authenticity', 'chargenverifizierte Echtheit'],
  ['pharmaceutical-quality', 'pharmazeutische Qualität'],
  ['pharmaceutical-grade testosterone', 'pharmazeutisches Testosteron'],
  ['pharmaceutical-grade', 'pharmazeutisch'],
  ['pharma-grade', 'Pharma-Qualität'],
  ['pharma grade', 'Pharma-Qualität'],
  ['Pharma Grade', 'Pharma-Qualität'],
  ['Genuine pharmaceutical', 'Echtes pharmazeutisches'],
  ['genuine pharmaceutical', 'echtes pharmazeutisches'],
  ['3rd-party lab testing', 'unabhängige Labortests'],
  ['3rd party lab testing', 'unabhängige Labortests'],
  ['third-party lab testing', 'unabhängige Labortests'],
  ['QR batch verification', 'QR-Chargenverifizierung'],
  ['independent lab reports confirm', 'unabhängige Laborberichte bestätigen'],
  ['independently tested', 'unabhängig getestet'],
  ['independently verified', 'unabhängig verifiziert'],
  ['lab-verified for concentration accuracy', 'laborgeprüft auf Konzentrationsgenauigkeit'],
  ['lab-verified', 'laborgeprüft'],
  ['Lab-Verified', 'Laborgeprüft'],
  ['lab tested', 'laborgetestet'],
  ['Lab tested', 'Laborgetestet'],
  ['HPLC-verified', 'HPLC-verifiziert'],
  ['HPLC-tested', 'HPLC-getestet'],
  ['HPLC analysis certificate', 'HPLC-Analysezertifikat'],
  ['GMP-manufactured', 'GMP-hergestellt'],
  ['GMP manufacturing', 'GMP-Herstellung'],
  ['GMP certified', 'GMP-zertifiziert'],
  ['quality assurance protocols', 'Qualitätssicherungsprotokolle'],
  ['quality assurance standards', 'Qualitätssicherungsstandards'],
  ['quality assurance', 'Qualitätssicherung'],
  ['quality control', 'Qualitätskontrolle'],
  ['batch verification documentation', 'Chargenverifizierungsdokumentation'],
  ['batch lot numbers', 'Chargen-Losnummern'],
  ['batch numbers', 'Chargennummern'],
  ['hologram-sealed packaging', 'hologrammversiegelte Verpackung'],
  ['dosing accuracy', 'Dosiergenauigkeit'],
  ['dosing tolerance', 'Dosiertoleranz'],
  ['accurately dosed', 'genau dosiert'],
  ['precision-dosed', 'präzisionsdosiert'],
  ['concentration delivers', 'Konzentration liefert'],

  // ── Steroid / Pharma Terms ──
  ['Testosterone Enanthate', 'Testosteron Enantat'],
  ['Testosterone Cypionate', 'Testosteron Cypionat'],
  ['Testosterone Propionate', 'Testosteron Propionat'],
  ['testosterone enanthate', 'Testosteron Enantat'],
  ['testosterone cypionate', 'Testosteron Cypionat'],
  ['testosterone propionate', 'Testosteron Propionat'],
  ['Testosterone Replacement Therapy', 'Testosteron-Ersatztherapie'],
  ['testosterone replacement therapy', 'Testosteron-Ersatztherapie'],
  ['testosterone levels', 'Testosteronspiegel'],
  ['testosterone production', 'Testosteronproduktion'],
  ['testosterone dosing', 'Testosterondosierung'],
  ['natural testosterone', 'natürliches Testosteron'],
  ['exogenous hormones', 'exogene Hormone'],
  ['blood testosterone levels', 'Blut-Testosteronspiegel'],
  ['Nandrolone Decanoate', 'Nandrolon Decanoat'],
  ['Nandrolone Phenylpropionate', 'Nandrolon Phenylpropionat'],
  ['Nandrolone', 'Nandrolon'],
  ['Trenbolone Acetate', 'Trenbolon Acetat'],
  ['Trenbolone Enanthate', 'Trenbolon Enantat'],
  ['Trenbolone Hexahydrobenzylcarbonate', 'Trenbolon Hexahydrobenzylcarbonat'],
  ['Trenbolone', 'Trenbolon'],
  ['Boldenone Undecylenate', 'Boldenon Undecylenat'],
  ['Boldenone', 'Boldenon'],
  ['Drostanolone Propionate', 'Drostanolon Propionat'],
  ['Drostanolone Enanthate', 'Drostanolon Enantat'],
  ['Drostanolone', 'Drostanolon'],
  ['Human Chorionic Gonadotropin', 'Humanes Choriongonadotropin'],
  ['Human Growth Hormone', 'Humanes Wachstumshormon'],
  ['growth hormone', 'Wachstumshormon'],
  ['Oxandrolone tablets', 'Oxandrolon-Tabletten'],
  ['Oxandrolone', 'Oxandrolon'],
  ['Oxymetholone', 'Oxymetholon'],
  ['Stanozolol', 'Stanozolol'],
  ['Methandienone', 'Methandienon'],
  ['Methenolone Enanthate', 'Methenolon Enantat'],
  ['Methenolone', 'Methenolon'],
  ['Methyldrostanolone', 'Methyldrostanolon'],
  ['Clenbuterol', 'Clenbuterol'],
  ['Tamoxifen Citrate', 'Tamoxifencitrat'],
  ['Tamoxifen', 'Tamoxifen'],
  ['Clomiphene Citrate', 'Clomifencitrat'],
  ['Clomiphene', 'Clomifen'],
  ['Anastrozole', 'Anastrozol'],
  ['Letrozole', 'Letrozol'],
  ['Exemestane', 'Exemestan'],
  ['Mesterolone', 'Mesterolon'],
  ['Sildenafil', 'Sildenafil'],
  ['Tadalafil', 'Tadalafil'],
  ['Bacteriostatic Water', 'Bakteriostatisches Wasser'],
  ['bacteriostatic water', 'bakteriostatisches Wasser'],
  ['phosphocreatine synthesis', 'Phosphokreatinsynthese'],
  ['enhanced protein synthesis', 'verstärkte Proteinsynthese'],
  ['protein synthesis', 'Proteinsynthese'],
  ['nitrogen retention', 'Stickstoffretention'],
  ['collagen synthesis', 'Kollagensynthese'],
  ['red blood cell production', 'Produktion roter Blutkörperchen'],
  ['red blood cell count', 'Anzahl roter Blutkörperchen'],
  ['glycogen storage', 'Glykogenspeicherung'],
  ['ATP regeneration', 'ATP-Regeneration'],
  ['beta-2 adrenergic agonist', 'Beta-2-adrenerger Agonist'],
  ['beta-2 agonist', 'Beta-2-Agonist'],
  ['metabolic rate', 'Stoffwechselrate'],
  ['thermogenesis', 'Thermogenese'],
  ['lipolysis', 'Lipolyse'],
  ['aromatise to estrogen', 'zu Östrogen aromatisieren'],
  ['aromatise', 'aromatisieren'],
  ['aromatize', 'aromatisieren'],
  ['aromatisation', 'Aromatisierung'],
  ['aromatization', 'Aromatisierung'],
  ['estrogenic activity', 'östrogene Aktivität'],
  ['androgenic rating', 'androgene Bewertung'],
  ['androgenic activity', 'androgene Aktivität'],
  ['anabolic rating', 'anabole Bewertung'],
  ['half-life of approximately', 'Halbwertszeit von ungefähr'],
  ['half-life', 'Halbwertszeit'],
  ['Decanoate ester', 'Decanoat-Ester'],
  ['long-acting ester', 'langwirkender Ester'],
  ['active ingredient', 'Wirkstoff'],
  ['active compound', 'aktive Verbindung'],
  ['stable blood levels', 'stabile Blutspiegel'],
  ['peak blood levels', 'maximale Blutspiegel'],
  ['blood serum levels', 'Blutserumspiegel'],
  ['HPTA axis', 'HPTA-Achse'],
  ['HPTA recovery', 'HPTA-Erholung'],
  ['suppresses natural testosterone production', 'unterdrückt die natürliche Testosteronproduktion'],
  ['hepatotoxicity', 'Hepatotoxizität'],
  ['bone mineral density', 'Knochenmineraldichte'],
  ['synovial fluid', 'Gelenkflüssigkeit'],
  ['carrier oil', 'Trägeröl'],
  ['fine-gauge needles', 'feine Nadeln'],
  ['mechanism of action', 'Wirkungsmechanismus'],
  ['clinical heritage', 'klinisches Erbe'],
  ['clinical use', 'klinische Anwendung'],
  ['clinical research', 'klinische Forschung'],
  ['clinical safety data', 'klinische Sicherheitsdaten'],
  ['clinical medicine', 'klinische Medizin'],
  ['muscle-wasting diseases', 'Muskelabbau-Erkrankungen'],
  ['burn recovery', 'Verbrennungsheilung'],
  ['osteoporosis', 'Osteoporose'],
  ['tendon and ligament strength', 'Sehnen- und Bandstärke'],
  ['connective tissues', 'Bindegewebe'],

  // ── Body/Performance Terms ──
  ['lean muscle mass', 'magere Muskelmasse'],
  ['lean muscle development', 'magere Muskelentwicklung'],
  ['lean muscle tissue', 'mageres Muskelgewebe'],
  ['lean muscle', 'magere Muskulatur'],
  ['lean mass', 'Magermasse'],
  ['lean gains', 'magere Zuwächse'],
  ['lean, aesthetic gains', 'magere, ästhetische Zuwächse'],
  ['muscle mass', 'Muskelmasse'],
  ['muscle growth', 'Muskelwachstum'],
  ['muscle-building', 'muskelaufbauend'],
  ['muscle pumps', 'Muskelpumps'],
  ['muscular development', 'Muskelentwicklung'],
  ['dry mass', 'trockene Masse'],
  ['dry gains', 'trockene Zuwächse'],
  ['strength gains', 'Kraftzuwächse'],
  ['strength output', 'Kraftleistung'],
  ['significant increases in', 'signifikante Steigerungen bei'],
  ['fat loss', 'Fettverlust'],
  ['fat burning', 'Fettverbrennung'],
  ['fat-burning properties', 'fettverbrennende Eigenschaften'],
  ['fat-burning', 'fettverbrennend'],
  ['body composition', 'Körperzusammensetzung'],
  ['body fat', 'Körperfett'],
  ['stored body fat', 'gespeichertes Körperfett'],
  ['free fatty acids', 'freie Fettsäuren'],
  ['caloric deficit', 'Kaloriendefizit'],
  ['performance enhancement', 'Leistungssteigerung'],
  ['athletic performance', 'sportliche Leistung'],
  ['enhanced performance', 'verbesserte Leistung'],
  ['water retention', 'Wassereinlagerung'],
  ['joint pain relief', 'Gelenkschmerzlinderung'],
  ['joint support', 'Gelenkunterstützung'],
  ['joint relief', 'Gelenkentlastung'],

  // ── Cycle/Dosage Terms ──
  ['bulking cycles', 'Massekuren'],
  ['bulking cycle', 'Massekur'],
  ['cutting cycles', 'Definitionskuren'],
  ['cutting cycle', 'Definitionskur'],
  ['cutting protocols', 'Definitionsprotokolle'],
  ['cutting phases', 'Definitionsphasen'],
  ['cutting phase', 'Definitionsphase'],
  ['cutting season', 'Definitionsphase'],
  ['cutting use', 'Definitionszwecke'],
  ['contest prep', 'Wettkampfvorbereitung'],
  ['off-season protocols', 'Off-Season-Protokolle'],
  ['steroid cycle', 'Steroidkur'],
  ['steroid cycles', 'Steroidkuren'],
  ['steroid user', 'Steroidanwender'],
  ['steroid users', 'Steroidanwender'],
  ['first steroid cycle', 'erste Steroidkur'],
  ['first-time users', 'Erstanwender'],
  ['first-time user', 'Erstanwender'],
  ['experienced users', 'erfahrene Anwender'],
  ['beginners', 'Anfänger'],
  ['post cycle therapy', 'Post-Cycle-Therapie'],
  ['post-cycle recovery', 'Post-Cycle-Erholung'],
  ['post-cycle', 'Post-Cycle'],
  ['on-cycle', 'während des Zyklus'],
  ['side-effect profile', 'Nebenwirkungsprofil'],
  ['side effects', 'Nebenwirkungen'],
  ['safety profile', 'Sicherheitsprofil'],
  ['well-tolerated', 'gut verträglich'],
  ['tolerability', 'Verträglichkeit'],
  ['recovery between training sessions', 'Erholung zwischen Trainingseinheiten'],
  ['accelerated recovery', 'beschleunigte Erholung'],
  ['training sessions', 'Trainingseinheiten'],
  ['blood flow', 'Blutdurchblutung'],
  ['blood pressure', 'Blutdruck'],
  ['liver support', 'Leberschutz'],
  ['anti-catabolic properties', 'antikatabole Eigenschaften'],
  ['anti-catabolic', 'antikatabol'],
  ['virilisation risk', 'Virilisierungsrisiko'],
  ['virilisation', 'Virilisierung'],
  ['erectile dysfunction', 'erektile Dysfunktion'],
  ['muscle cramps', 'Muskelkrämpfe'],
  ['heart rate', 'Herzfrequenz'],
  ['core body temperature', 'Körperkerntemperatur'],
  ['cardiovascular system', 'Herz-Kreislauf-System'],

  // ── Product/Commerce Terms ──
  ['per 10ml vial', 'pro 10-ml-Ampulle'],
  ['10ml multi-use vial', '10-ml-Mehrfachampulle'],
  ['10ml vial', '10-ml-Ampulle'],
  ['per vial', 'pro Ampulle'],
  ['per box', 'pro Packung'],
  ['per pack', 'pro Packung'],
  ['per tablet', 'pro Tablette'],
  ['tablets total', 'Tabletten insgesamt'],
  ['minimum order', 'Mindestbestellung'],
  ['3-vial minimum order', '3-Ampullen-Mindestbestellung'],
  ['minimum order of', 'Mindestbestellung von'],
  ['vials', 'Ampullen'],
  ['vial', 'Ampulle'],
  ['ampoules', 'Ampullen'],
  ['ampoule', 'Ampulle'],
  ['tablets', 'Tabletten'],
  ['tablet', 'Tablette'],
  ['packs', 'Packungen'],
  ['Buy', 'Kaufen'],
  ['buy', 'kaufen'],
  ['online', 'online'],
  ['for sale', 'zu verkaufen'],
  ['top-selling injectables', 'meistverkauften Injektionspräparate'],
  ['top-selling', 'meistverkauft'],
  ['best-selling', 'meistverkauft'],
  ['most popular', 'beliebteste'],
  ['price point', 'Preisniveau'],
  ['trusted since', 'vertraut seit'],
  ['discreet packaging', 'diskrete Verpackung'],
  ['discreet', 'diskret'],
  ['tracked', 'verfolgt'],
  ['delivery', 'Lieferung'],
  ['Delivery', 'Lieferung'],
  ['shipping', 'Versand'],
  ['Shipping', 'Versand'],
  ['purity', 'Reinheit'],
  ['Purity', 'Reinheit'],
  ['manufacturer', 'Hersteller'],

  // ── FAQ / Q&A Patterns ──
  ['What quality testing does', 'Welche Qualitätstests führt'],
  ['How does', 'Wie vergleicht sich'],
  ['compare to', 'mit'],
  ['Can I see the lab results for my batch?', 'Kann ich die Laborergebnisse für meine Charge einsehen?'],
  ['Can women safely use', 'Können Frauen sicher verwenden'],
  ['How can I verify', 'Wie kann ich überprüfen'],
  ['is genuine', 'echt ist'],
  ['Is it safe', 'Ist es sicher'],
  ['How often do I inject', 'Wie oft injiziere ich'],
  ['Why do I need to run Testosterone with', 'Warum muss ich Testosteron zusammen mit'],
  ['How long until', 'Wie lange bis'],
  ['starts working', 'anfängt zu wirken'],
  ['Does', 'Verursacht'],
  ['cause water retention', 'Wassereinlagerung'],
  ['require PCT', 'PCT erfordern'],
  ['Is Anavar really the safest oral steroid?', 'Ist Anavar wirklich das sicherste orale Steroid?'],
  ['Why is dosing accuracy so important for', 'Warum ist Dosiergenauigkeit so wichtig für'],
  ['specifically?', 'im Speziellen?'],
  ['Should I take', 'Sollte ich nehmen'],
  ['all at once or split the doses?', 'alles auf einmal oder die Dosen aufteilen?'],
  ['How does Clenbuterol compare to OTC fat burners?', 'Wie vergleicht sich Clenbuterol mit frei verkäuflichen Fettverbrennern?'],
  ['Why the 2 weeks on / 2 weeks off protocol?', 'Warum das 2 Wochen an / 2 Wochen aus Protokoll?'],
  ['Does Clenbuterol require PCT?', 'Erfordert Clenbuterol eine PCT?'],
  ['Yes —', 'Ja —'],
  ['Yes,', 'Ja,'],
  ['Yes.', 'Ja.'],
  ['No —', 'Nein —'],
  ['No,', 'Nein,'],
  ['No.', 'Nein.'],
  ['Absolutely —', 'Absolut —'],
  ['There\'s no comparison', 'Es gibt keinen Vergleich'],
  ['for good reason', 'aus gutem Grund'],

  // ── Common Adjectives/Phrases ──
  ['one of the most', 'eines der'],
  ['the most', 'das/die am meisten'],
  ['with good reason', 'mit gutem Grund'],
  ['genuine', 'echt'],
  ['premium', 'Premium'],
  ['effective', 'wirksam'],
  ['potent', 'potent'],
  ['powerful', 'leistungsstark'],
  ['reliable', 'zuverlässig'],
  ['exceptional', 'außergewöhnlich'],
  ['remarkable', 'bemerkenswert'],
  ['legendary', 'legendär'],
  ['iconic', 'ikonisch'],
  ['indispensable', 'unverzichtbar'],
  ['provides', 'bietet'],
  ['delivers', 'liefert'],
  ['contains', 'enthält'],
  ['produces', 'produziert'],
  ['increases', 'erhöht'],
  ['enhances', 'verbessert'],
  ['maintains', 'erhält'],
  ['ensures', 'gewährleistet'],
  ['requires', 'erfordert'],
  ['competitive bodybuilders', 'Wettkampf-Bodybuilder'],
  ['bodybuilders', 'Bodybuilder'],
  ['athletes', 'Athleten'],
  ['researchers', 'Forscher'],
  ['female athletes', 'weibliche Athleten'],
  ['female-friendly', 'frauenfreundlich'],
  ['injectable steroid', 'injizierbares Steroid'],
  ['oral steroid', 'orales Steroid'],
  ['oral anabolic', 'orales Anabolikum'],
  ['anabolic steroid', 'anaboles Steroid'],
  ['anabolic steroids', 'anabole Steroide'],
  ['Europe', 'Europa'],
  ['European', 'europäisch'],
  ['UK', 'Europa'],
  ['United Kingdom', 'Europa'],

  // ── Additional Connecting/Structural Phrases ──
  ['is a precision-dosed', 'ist ein präzisionsdosiertes'],
  ['precision-dosed', 'präzisionsdosiert'],
  ['has remained the go-to', 'ist nach wie vor die erste Wahl'],
  ['excels in', 'eignet sich hervorragend für'],
  ['integrates perfectly into', 'integriert sich perfekt in'],
  ['creates a pronounced anabolic environment', 'schafft eine ausgeprägte anabole Umgebung'],
  ['produces dramatic improvements in', 'erzeugt dramatische Verbesserungen bei'],
  ['amplifies the effectiveness of', 'verstärkt die Wirksamkeit von'],
  ['positioning it as one of the more affordable', 'und positioniert es als eines der erschwinglichsten'],
  ['translates to a compound that', 'ergibt eine Verbindung, die'],
  ['ensures each tablet delivers exactly', 'stellt sicher, dass jede Tablette genau liefert'],
  ['allowing users to follow', 'und ermöglicht es Anwendern zu folgen'],
  ['saves significant cost compared to', 'spart erhebliche Kosten im Vergleich zu'],
  ['commands premium pricing due to', 'erzielt Premium-Preise aufgrund von'],
  ['means you know exactly what you are injecting', 'bedeutet, dass Sie genau wissen, was Sie injizieren'],
  ['enabling precise protocol management', 'und ermöglicht ein präzises Protokollmanagement'],
  ['operates via', 'wirkt über'],
  ['clinical heritage', 'klinisches Erbe'],
  ['with minimal injection volume', 'mit minimalem Injektionsvolumen'],
  ['minimal injection volume', 'minimalem Injektionsvolumen'],
  ['single comfortable injection', 'einzige bequeme Injektion'],
  ['ultra-stable blood levels', 'ultra-stabile Blutspiegel'],
  ['remarkably mild androgenic profile', 'bemerkenswert mildes androgenes Profil'],
  ['remarkably mild nature', 'bemerkenswert milde Natur'],
  ['evidence-based approach', 'evidenzbasierter Ansatz'],
  ['evidence-based titration protocols', 'evidenzbasierte Titrationsprotokolle'],
  ['proven quality-assured format', 'bewährtes qualitätsgesichertes Format'],
  ['visible physique changes', 'sichtbare Körperveränderungen'],
  ['exceptional value', 'außergewöhnlicher Wert'],
  ['exceptional safety profile', 'außergewöhnliches Sicherheitsprofil'],
  ['competitive EU pricing', 'wettbewerbsfähige EU-Preise'],
  ['competitive pricing', 'wettbewerbsfähige Preise'],
  ['accessible EU pricing', 'erschwingliche EU-Preise'],
  ['consistent, predictable dose', 'konsistente, vorhersehbare Dosis'],
  ['independent batch testing', 'unabhängige Chargentests'],
  ['pronounced anabolic environment', 'ausgeprägtes anaboles Umfeld'],
  ['dramatically improved nutrient partitioning', 'dramatisch verbesserte Nährstoffverteilung'],
  ['most side-effect-friendly', 'nebenwirkungsärmste'],
  ['side-effect-friendly', 'nebenwirkungsarm'],
  ['most powerful injectable anabolic', 'stärkste injizierbare anabole'],
  ['without the harsh side effects', 'ohne die schweren Nebenwirkungen'],
  ['without compromising on', 'ohne Kompromisse bei'],
  ['without sacrificing quality', 'ohne Qualitätseinbußen'],

  // ── Common single words/short phrases ──
  ['injection', 'Injektion'],
  ['injections', 'Injektionen'],
  ['injection volume', 'Injektionsvolumen'],
  ['concentration', 'Konzentration'],
  ['protocol', 'Protokoll'],
  ['protocols', 'Protokolle'],
  ['administered', 'verabreicht'],
  ['formulated for', 'formuliert für'],
  ['designed for', 'entwickelt für'],
  ['total', 'gesamt'],
  ['weekly', 'wöchentlich'],
  ['daily', 'täglich'],
  ['standard', 'standardmäßig'],
  ['optimal', 'optimal'],
  ['aggressive', 'aggressiv'],
  ['mild', 'mild'],
  ['dramatic', 'dramatisch'],
  ['significant', 'signifikant'],
  ['substantial', 'erheblich'],
  ['pronounced', 'ausgeprägt'],
  ['noticeable', 'spürbar'],
  ['minimal', 'minimal'],
  ['comfortable', 'bequem'],
  ['smooth', 'glatt'],
  ['strict', 'streng'],
  ['rigorous', 'streng'],
  ['comprehensive', 'umfassend'],
  ['advanced', 'fortgeschritten'],
  ['modern', 'modern'],
  ['affordable', 'erschwinglich'],
  ['volume', 'Volumen'],
  ['approach', 'Ansatz'],
  ['compound', 'Verbindung'],
  ['compounds', 'Verbindungen'],
  ['cycle', 'Zyklus'],
  ['dose', 'Dosis'],
  ['doses', 'Dosen'],
  ['dosage', 'Dosierung'],
  ['dosages', 'Dosierungen'],
  ['tolerance','Toleranz'],
  ['advantage', 'Vorteil'],
  ['results', 'Ergebnisse'],
  ['gains', 'Zuwächse'],
  ['stack', 'Stack'],
  ['stacked', 'gestackt'],
  ['stacked with', 'gestackt mit'],
  ['When stacked with', 'Wenn gestackt mit'],
  ['compared to', 'im Vergleich zu'],
  ['in contrast to', 'im Gegensatz zu'],
  ['with significantly fewer', 'mit deutlich weniger'],
  ['without the', 'ohne die'],
  ['as well as', 'sowie'],
  ['in combination with', 'in Kombination mit'],
  ['in addition to', 'zusätzlich zu'],
  ['for a standard', 'für einen Standard'],
  ['for a complete', 'für einen vollständigen'],
  ['for a generous', 'für einen großzügigen'],
  ['for a full', 'für einen vollständigen'],
  ['or two full', 'oder zwei volle'],
  ['per day', 'pro Tag'],
  ['per week', 'pro Woche'],
  ['once weekly', 'einmal wöchentlich'],
  ['twice weekly', 'zweimal wöchentlich'],
  ['every other day', 'jeden zweiten Tag'],
  ['weeks of use', 'Wochen der Anwendung'],
  ['weeks on / 2 weeks off', 'Wochen an / 2 Wochen aus'],
  ['the first', 'die ersten'],
  ['the most', 'die meisten'],
  ['the result is', 'das Ergebnis ist'],
  ['the premium quality', 'die Premium-Qualität'],
  ['this translates to', 'dies bedeutet'],
  ['this means', 'das bedeutet'],
  ['this property', 'diese Eigenschaft'],
  ['this commitment to', 'dieses Engagement für'],
  ['making every', 'und macht jede'],
  ['making extended', 'was längere'],
  ['making proper', 'und macht ordnungsgemäße'],
  ['achievable with', 'erreichbar mit'],
  ['Each tablet', 'Jede Tablette'],
  ['Each vial', 'Jede Ampulle'],
  ['Every order', 'Jede Bestellung'],
  ['Both deliver', 'Beide liefern'],
  ['Most users', 'Die meisten Anwender'],
  ['Blood work', 'Blutarbeit'],
  ['is recommended', 'wird empfohlen'],
  ['is manageable', 'ist handhabbar'],
  ['is well-tolerated', 'ist gut verträglich'],
  ['is evident from', 'zeigt sich ab'],
  ['from the first injection', 'ab der ersten Injektion'],
  ['from first tablet to last', 'von der ersten bis zur letzten Tablette'],
  ['No other oral compound', 'Keine andere orale Verbindung'],
  ['No other oral steroid', 'Kein anderes orales Steroid'],
  ['choice is personal preference', 'die Wahl ist persönliche Präferenz'],
  ['choose based on', 'wählen Sie basierend auf'],
  ['you\'ll have enough', 'Sie haben genug'],
  ['with room to spare', 'mit Reserven'],
  ['with generous reserves', 'mit großzügigen Reserven'],
  ['with surplus', 'mit Überschuss'],
  ['with enhanced vascularity', 'mit verbesserter Vaskularität'],
  ['muscle separation', 'Muskeltrennung'],
  ['vascularity', 'Vaskularität'],
  ['nutrient partitioning', 'Nährstoffverteilung'],
  ['SHBG reduction', 'SHBG-Reduktion'],
  ['dry, hard physique', 'trockene, harte Physik'],
  ['lean, dry, and keepable', 'mager, trocken und haltbar'],
  ['body recomposition', 'Körperrekomposition'],
  ['mass builder', 'Masseaufbau'],
  ['kickstart', 'Kickstart'],
  ['Batch tracked', 'Chargenverfolgt'],
  ['Fast tracked EU delivery', 'Schnelle verfolgte EU-Lieferung'],
  ['low PIP', 'niedrigem PIP'],
  ['smooth oil', 'glattem Öl'],
  ['smooth-oil formulation', 'Glattöl-Formulierung'],
],

// ═══════════════════════════════════════════════════════════════
// DUTCH (nl) — Extended
// ═══════════════════════════════════════════════════════════════
nl: [
  // ── Full Sentences / Long Phrases ──
  ['Every batch undergoes independent HPLC concentration analysis, sterility testing, and endotoxin screening', 'Elke batch ondergaat onafhankelijke HPLC-concentratieanalyse, steriliteitstest en endotoxine-screening'],
  ['exceeding the QA standards of most underground laboratories', 'de QA-normen van de meeste ondergrondse laboratoria overtrefft'],
  ['before it reaches a customer', 'voordat het een klant bereikt'],
  ['This commitment to pharmaceutical-grade QA has made', 'Deze toewijding aan farmaceutische QA heeft gemaakt'],
  ['one of the fastest-growing performance brands in Europe', 'tot een van de snelst groeiende prestatie-merken in Europa'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Elke bestelling bevat batchverificatiedocumentatie zodat u de echtheid kunt bevestigen vóór uw eerste injectie'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe', 'vertrouwd door artsen, TRT-patiënten en wedstrijdbodybuilders in heel Europa'],
  ['the most popular injectable steroid in the world after testosterone', 'het populairste injecteerbare steroïd ter wereld na testosteron'],
  ['the single most popular oral steroid in Europe', 'het populairste orale steroïd in Europa'],
  ['the safest oral anabolic available', 'het veiligste beschikbare orale anabolicum'],
  ['one of the most widely sought-after oral steroids in Europe', 'een van de meest gezochte orale steroïden in Europa'],
  ['the most effective non-hormonal fat-burning compound available', 'de meest effectieve niet-hormonale vetverbrandende stof'],
  ['enough for a complete', 'voldoende voor een volledige'],
  ['enough compound for a complete', 'genoeg stof voor een volledige'],
  ['enough for a full', 'voldoende voor een volledige'],
  ['enough for multiple complete', 'genoeg voor meerdere volledige'],
  ['backed by one of the most rigorous quality assurance protocols', 'ondersteund door een van de strengste kwaliteitsborgingsprotocollen'],
  ['in the UK underground laboratory market', 'op de ondergrondse laboratoriummarkt'],
  ['has built its reputation on a simple principle', 'heeft zijn reputatie opgebouwd op een eenvoudig principe'],
  ['every vial must pass independent HPLC concentration analysis', 'elke flacon moet een onafhankelijke HPLC-concentratieanalyse doorstaan'],
  ['The pharmaceutical-grade carrier oil is formulated for smooth flow through fine-gauge needles', 'De farmaceutische draagolie is geformuleerd voor een soepele doorstroming door fijne naalden'],
  ['minimising post-injection pain and tissue irritation', 'ter minimalisering van pijn na injectie en weefselirritatie'],
  ['even at higher volumes', 'zelfs bij hogere volumes'],
  ['consistently ranks among our top-selling injectables', 'consequent behoort tot onze bestverkopende injecteerbare producten'],
  ['This property makes it popular with athletes in weight-classed sports', 'Deze eigenschap maakt het populair bij atleten in gewichtsklasse-sporten'],
  ['who need enhanced performance without moving up a weight category', 'die verbeterde prestaties nodig hebben zonder een gewichtsklasse op te gaan'],
  ['as well as bodybuilders seeking lean, aesthetic gains without bloating or water retention', 'evenals bodybuilders die magere, esthetische winst zoeken zonder opgeblazen gevoel of vochtretentie'],
  ['contact us with your batch number and we can provide the corresponding HPLC analysis certificate', 'neem contact met ons op met uw batchnummer en wij kunnen het bijbehorende HPLC-analysecertificaat verstrekken'],
  ['the most commonly counterfeited steroids', 'de meest vervalste steroïden'],
  ['the most commonly underdosed and counterfeited oral steroids', 'de meest onderdoseerde en vervalste orale steroïden'],
  ['All three brands produce quality', 'Alle drie merken produceren kwalitatief'],
  ['differentiates itself with its comprehensive QA documentation', 'onderscheidt zich door zijn uitgebreide QA-documentatie'],
  ['Pricing is comparable across all three', 'De prijzen zijn vergelijkbaar bij alle drie'],
  ['includes a unique QR code', 'bevat een unieke QR-code'],

  // ── Marketing ──
  ['Order now — trusted since 2019', 'Bestel nu — vertrouwd sinds 2019'],
  ['Order today', 'Bestel vandaag'],
  ['Fast discreet EU shipping', 'Snelle discrete EU-verzending'],
  ['Fast tracked EU delivery', 'Snelle getrackte EU-levering'],
  ['EU tracked delivery', 'Getrackte EU-levering'],
  ['EU delivery', 'EU-levering'],
  ['EU Shop', 'EU-Winkel'],
  ['available in Europe', 'verkrijgbaar in Europa'],
  ['across Europe', 'in heel Europa'],
  ['throughout Europe', 'in heel Europa'],

  // ── Quality/Lab ──  
  ['hospital-grade purity', 'ziekenhuiskwaliteit zuiverheid'],
  ['pharmaceutical-quality', 'farmaceutische kwaliteit'],
  ['pharmaceutical-grade', 'farmaceutisch'],
  ['pharma-grade', 'farmakwaliteit'],
  ['3rd-party lab testing', 'onafhankelijke laboratoriumtests'],
  ['QR batch verification', 'QR-batchverificatie'],
  ['independent lab reports confirm', 'onafhankelijke laboratoriumrapporten bevestigen'],
  ['independently tested', 'onafhankelijk getest'],
  ['lab-verified', 'labgeverifieerd'],
  ['HPLC-verified', 'HPLC-geverifieerd'],
  ['HPLC-tested', 'HPLC-getest'],
  ['GMP-manufactured', 'GMP-geproduceerd'],
  ['quality assurance protocols', 'kwaliteitsborgingsprotocollen'],
  ['quality assurance', 'kwaliteitsborging'],
  ['quality control', 'kwaliteitscontrole'],
  ['batch verification documentation', 'batchverificatiedocumentatie'],
  ['batch numbers', 'batchnummers'],
  ['dosing accuracy', 'doseringsnauwkeurigheid'],
  ['dosing tolerance', 'doseringstolerantie'],
  ['precision-dosed', 'precies gedoseerd'],

  // ── Pharma Terms ──
  ['Testosterone Enanthate', 'Testosteron Enanthaat'],
  ['Testosterone Cypionate', 'Testosteron Cypionaat'],
  ['Testosterone Propionate', 'Testosteron Propionaat'],
  ['testosterone enanthate', 'testosteron enanthaat'],
  ['Testosterone Replacement Therapy', 'Testosteron Vervangende Therapie'],
  ['testosterone levels', 'testosteronspiegels'],
  ['testosterone production', 'testosteronproductie'],
  ['natural testosterone', 'natuurlijk testosteron'],
  ['Human Growth Hormone', 'Humaan Groeihormoon'],
  ['growth hormone', 'groeihormoon'],
  ['Nandrolone Decanoate', 'Nandrolon Decanoaat'],
  ['Nandrolone', 'Nandrolon'],
  ['Trenbolone Acetate', 'Trenbolon Acetaat'],
  ['Trenbolone Enanthate', 'Trenbolon Enanthaat'],
  ['Trenbolone', 'Trenbolon'],
  ['Boldenone Undecylenate', 'Boldenon Undecylenaat'],
  ['Boldenone', 'Boldenon'],
  ['Drostanolone', 'Drostanolon'],
  ['Oxandrolone', 'Oxandrolon'],
  ['Oxymetholone', 'Oxymetholon'],
  ['Methandienone', 'Methandienon'],
  ['Methenolone', 'Methenolon'],
  ['Clenbuterol', 'Clenbuterol'],
  ['Tamoxifen', 'Tamoxifen'],
  ['Bacteriostatic Water', 'Bacteriostatisch Water'],
  ['phosphocreatine synthesis', 'fosfocreatinesynthese'],
  ['protein synthesis', 'eiwitsynthese'],
  ['nitrogen retention', 'stikstofretentie'],
  ['collagen synthesis', 'collageensynthese'],
  ['red blood cell production', 'aanmaak van rode bloedcellen'],
  ['metabolic rate', 'stofwisselingssnelheid'],
  ['thermogenesis', 'thermogenese'],
  ['lipolysis', 'lipolyse'],
  ['aromatise', 'aromatiseren'],
  ['estrogenic activity', 'oestrogene activiteit'],
  ['androgenic activity', 'androgene activiteit'],
  ['half-life', 'halfwaardetijd'],
  ['active ingredient', 'werkzaam bestanddeel'],
  ['stable blood levels', 'stabiele bloedspiegels'],
  ['HPTA axis', 'HPTA-as'],
  ['suppresses natural testosterone production', 'onderdrukt de natuurlijke testosteronproductie'],
  ['hepatotoxicity', 'hepatotoxiciteit'],
  ['bone mineral density', 'botmineraaldichtheid'],
  ['carrier oil', 'draagolie'],
  ['mechanism of action', 'werkingsmechanisme'],
  ['clinical safety data', 'klinische veiligheidsgegevens'],
  ['clinical research', 'klinisch onderzoek'],
  ['muscle-wasting diseases', 'spierafbrekende ziekten'],
  ['connective tissues', 'bindweefsel'],

  // ── Body/Performance ──
  ['lean muscle mass', 'magere spiermassa'],
  ['lean muscle tissue', 'mager spierweefsel'],
  ['lean muscle', 'magere spieren'],
  ['lean mass', 'magere massa'],
  ['lean gains', 'magere winst'],
  ['muscle mass', 'spiermassa'],
  ['muscle growth', 'spiergroei'],
  ['dry mass', 'droge massa'],
  ['dry gains', 'droge winst'],
  ['strength gains', 'krachtwinst'],
  ['fat loss', 'vetverlies'],
  ['fat burning', 'vetverbranding'],
  ['fat-burning', 'vetverbrandend'],
  ['body composition', 'lichaamssamenstelling'],
  ['body fat', 'lichaamsvet'],
  ['caloric deficit', 'calorietekort'],
  ['water retention', 'vochtretentie'],
  ['joint pain relief', 'gewrichtspijnverlichting'],
  ['joint support', 'gewrichtsondersteuning'],
  ['joint relief', 'gewrichtsverlichting'],

  // ── Cycle/Dosage ──
  ['bulking cycles', 'bulkcycli'],
  ['bulking cycle', 'bulkcyclus'],
  ['cutting cycles', 'snijcycli'],
  ['cutting cycle', 'snijcyclus'],
  ['cutting phase', 'snijfase'],
  ['cutting season', 'snijseizoen'],
  ['contest prep', 'wedstrijdvoorbereiding'],
  ['off-season protocols', 'off-season protocollen'],
  ['steroid cycle', 'steroïdecyclus'],
  ['steroid cycles', 'steroïdecycli'],
  ['first-time users', 'eerste gebruikers'],
  ['experienced users', 'ervaren gebruikers'],
  ['post cycle therapy', 'post-cyclus therapie'],
  ['post-cycle recovery', 'post-cyclus herstel'],
  ['side-effect profile', 'bijwerkingsprofiel'],
  ['side effects', 'bijwerkingen'],
  ['safety profile', 'veiligheidsprofiel'],
  ['well-tolerated', 'goed verdragen'],
  ['training sessions', 'trainingssessies'],
  ['blood flow', 'bloeddoorstroming'],
  ['blood pressure', 'bloeddruk'],
  ['liver support', 'leverondersteuning'],
  ['anti-catabolic', 'anti-katabool'],
  ['virilisation risk', 'virilisatierisico'],
  ['virilisation', 'virilisatie'],
  ['erectile dysfunction', 'erectiestoornissen'],

  // ── Commerce ──
  ['per 10ml vial', 'per 10ml flacon'],
  ['10ml vial', '10ml flacon'],
  ['per vial', 'per flacon'],
  ['per box', 'per doos'],
  ['per pack', 'per pakket'],
  ['minimum order', 'minimale bestelling'],
  ['vials', 'flacons'],
  ['vial', 'flacon'],
  ['tablets', 'tabletten'],
  ['tablet', 'tablet'],
  ['Buy', 'Kopen'],
  ['buy', 'kopen'],
  ['for sale', 'te koop'],
  ['top-selling', 'bestverkopend'],
  ['best-selling', 'bestverkopend'],
  ['discreet', 'discreet'],
  ['tracked', 'getrackt'],
  ['delivery', 'levering'],
  ['shipping', 'verzending'],
  ['purity', 'zuiverheid'],
  ['manufacturer', 'fabrikant'],

  // ── FAQ patterns ──
  ['Yes —', 'Ja —'],
  ['Yes,', 'Ja,'],
  ['No —', 'Nee —'],
  ['No.', 'Nee.'],
  ['There\'s no comparison', 'Er is geen vergelijking'],
  ['genuine', 'echt'],
  ['effective', 'effectief'],
  ['potent', 'krachtig'],
  ['powerful', 'krachtig'],
  ['reliable', 'betrouwbaar'],
  ['provides', 'biedt'],
  ['delivers', 'levert'],
  ['contains', 'bevat'],
  ['injectable steroid', 'injecteerbaar steroïd'],
  ['oral steroid', 'oraal steroïd'],
  ['anabolic steroid', 'anabool steroïd'],
  ['anabolic steroids', 'anabole steroïden'],
  ['female-friendly', 'vrouwvriendelijk'],
  ['female athletes', 'vrouwelijke atleten'],
  ['bodybuilders', 'bodybuilders'],
  ['athletes', 'atleten'],
  ['Europe', 'Europa'],
  ['UK', 'Europa'],
  ['United Kingdom', 'Europa'],

  // ── Additional Connecting/Structural Phrases ──
  ['is a precision-dosed', 'is een precies gedoseerde'],
  ['precision-dosed', 'precies gedoseerd'],
  ['has remained the go-to', 'is de eerste keuze gebleven'],
  ['excels in', 'blinkt uit in'],
  ['creates a pronounced anabolic environment', 'creëert een uitgesproken anabole omgeving'],
  ['produces dramatic improvements in', 'produceert dramatische verbeteringen in'],
  ['competitive pricing', 'concurrerende prijzen'],
  ['competitive EU pricing', 'concurrerende EU-prijzen'],
  ['without the harsh side effects', 'zonder de zware bijwerkingen'],
  ['without compromising on', 'zonder in te boeten op'],
  ['without sacrificing quality', 'zonder kwaliteitsverlies'],
  ['evidence-based approach', 'wetenschappelijk onderbouwde aanpak'],
  ['exceptional value', 'uitzonderlijke waarde'],
  ['exceptional safety profile', 'uitzonderlijk veiligheidsprofiel'],
  ['with minimal injection volume', 'met minimaal injectievolume'],
  ['single comfortable injection', 'enkele comfortabele injectie'],
  ['ultra-stable blood levels', 'ultra-stabiele bloedspiegels'],

  ['injection', 'injectie'],
  ['injections', 'injecties'],
  ['concentration', 'concentratie'],
  ['protocol', 'protocol'],
  ['protocols', 'protocollen'],
  ['administered', 'toegediend'],
  ['formulated for', 'geformuleerd voor'],
  ['designed for', 'ontworpen voor'],
  ['total', 'totaal'],
  ['weekly', 'wekelijks'],
  ['daily', 'dagelijks'],
  ['standard', 'standaard'],
  ['optimal', 'optimaal'],
  ['aggressive', 'agressief'],
  ['mild', 'mild'],
  ['dramatic', 'dramatisch'],
  ['significant', 'significant'],
  ['substantial', 'aanzienlijk'],
  ['minimal', 'minimaal'],
  ['comfortable', 'comfortabel'],
  ['smooth', 'soepel'],
  ['comprehensive', 'uitgebreid'],
  ['advanced', 'gevorderd'],
  ['modern', 'modern'],
  ['affordable', 'betaalbaar'],
  ['volume', 'volume'],
  ['compound', 'verbinding'],
  ['compounds', 'verbindingen'],
  ['cycle', 'cyclus'],
  ['dose', 'dosis'],
  ['doses', 'doses'],
  ['dosage', 'dosering'],
  ['results', 'resultaten'],
  ['gains', 'winst'],
  ['stack', 'stack'],
  ['stacked with', 'gestackt met'],
  ['compared to', 'vergeleken met'],
  ['as well as', 'evenals'],
  ['in combination with', 'in combinatie met'],
  ['per day', 'per dag'],
  ['per week', 'per week'],
  ['once weekly', 'eenmaal per week'],
  ['twice weekly', 'tweemaal per week'],
  ['every other day', 'om de dag'],
  ['weeks of use', 'weken gebruik'],
  ['this translates to', 'dit vertaalt zich naar'],
  ['Each tablet', 'Elke tablet'],
  ['Each vial', 'Elke flacon'],
  ['Every order', 'Elke bestelling'],
  ['Both deliver', 'Beide leveren'],
  ['Most users', 'De meeste gebruikers'],
  ['is recommended', 'wordt aanbevolen'],
  ['from the first injection', 'vanaf de eerste injectie'],
  ['with room to spare', 'met ruimte over'],
  ['with generous reserves', 'met ruime reserves'],
  ['vascularity', 'vasculariteit'],
  ['body recomposition', 'lichaamsherverdeling'],
  ['mass builder', 'massabouwer'],
  ['kickstart', 'kickstart'],
  ['Batch tracked', 'Batchgetrackt'],
  ['low PIP', 'lage PIP'],
  ['smooth oil', 'glad olie'],
],

// ═══════════════════════════════════════════════════════════════
// FRENCH (fr) — Extended
// ═══════════════════════════════════════════════════════════════
fr: [
  ['Every batch undergoes independent HPLC concentration analysis, sterility testing, and endotoxin screening', 'Chaque lot subit une analyse de concentration HPLC indépendante, des tests de stérilité et un dépistage des endotoxines'],
  ['exceeding the QA standards of most underground laboratories', 'dépassant les normes AQ de la plupart des laboratoires clandestins'],
  ['one of the fastest-growing performance brands in Europe', 'l\'une des marques de performance à la croissance la plus rapide en Europe'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe', 'approuvé par les cliniciens, les patients TRT et les bodybuilders compétitifs à travers l\'Europe'],
  ['the most popular injectable steroid in the world after testosterone', 'le stéroïde injectable le plus populaire au monde après la testostérone'],
  ['the single most popular oral steroid in Europe', 'le stéroïde oral le plus populaire en Europe'],
  ['the safest oral anabolic available', 'l\'anabolisant oral le plus sûr disponible'],
  ['the most effective non-hormonal fat-burning compound available', 'le composé brûle-graisses non hormonal le plus efficace disponible'],
  ['enough for a complete', 'suffisant pour un complet'],
  ['enough for a full', 'suffisant pour un complet'],
  ['backed by one of the most rigorous quality assurance protocols', 'soutenu par l\'un des protocoles d\'assurance qualité les plus rigoureux'],
  ['in the UK underground laboratory market', 'sur le marché des laboratoires clandestins'],
  ['has built its reputation on a simple principle', 'a bâti sa réputation sur un principe simple'],
  ['the most commonly counterfeited steroids', 'les stéroïdes les plus fréquemment contrefaits'],
  ['All three brands produce quality', 'Les trois marques produisent des produits de qualité'],
  ['Pricing is comparable across all three', 'Les prix sont comparables pour les trois'],
  ['includes a unique QR code', 'comprend un code QR unique'],

  ['Order today', 'Commandez aujourd\'hui'],
  ['Fast discreet EU shipping', 'Livraison UE rapide et discrète'],
  ['EU tracked delivery', 'Livraison UE suivie'],
  ['EU delivery', 'Livraison UE'],
  ['EU Shop', 'Boutique UE'],
  ['available in Europe', 'disponible en Europe'],
  ['across Europe', 'à travers l\'Europe'],

  ['hospital-grade purity', 'pureté de qualité hospitalière'],
  ['pharmaceutical-quality', 'qualité pharmaceutique'],
  ['pharmaceutical-grade', 'de qualité pharmaceutique'],
  ['pharma-grade', 'qualité pharma'],
  ['3rd-party lab testing', 'tests en laboratoire tiers'],
  ['independently tested', 'testé indépendamment'],
  ['lab-verified', 'vérifié en laboratoire'],
  ['HPLC-verified', 'vérifié par HPLC'],
  ['HPLC-tested', 'testé par HPLC'],
  ['quality assurance', 'assurance qualité'],
  ['quality control', 'contrôle qualité'],
  ['batch numbers', 'numéros de lot'],
  ['precision-dosed', 'dosé avec précision'],

  ['Testosterone Enanthate', 'Testostérone Énanthate'],
  ['Testosterone Cypionate', 'Testostérone Cypionate'],
  ['Testosterone Propionate', 'Testostérone Propionate'],
  ['testosterone enanthate', 'testostérone énanthate'],
  ['Testosterone Replacement Therapy', 'Thérapie de Remplacement de la Testostérone'],
  ['testosterone levels', 'taux de testostérone'],
  ['natural testosterone', 'testostérone naturelle'],
  ['Human Growth Hormone', 'Hormone de Croissance Humaine'],
  ['growth hormone', 'hormone de croissance'],
  ['Nandrolone Decanoate', 'Décanoate de Nandrolone'],
  ['Nandrolone', 'Nandrolone'],
  ['Trenbolone Acetate', 'Acétate de Trenbolone'],
  ['Trenbolone Enanthate', 'Énanthate de Trenbolone'],
  ['Trenbolone', 'Trenbolone'],
  ['Boldenone Undecylenate', 'Undécylénate de Boldénone'],
  ['Boldenone', 'Boldénone'],
  ['Oxandrolone', 'Oxandrolone'],
  ['Oxymetholone', 'Oxymétholone'],
  ['Methandienone', 'Méthandiénone'],
  ['Clenbuterol', 'Clenbutérol'],
  ['Bacteriostatic Water', 'Eau Bactériostatique'],
  ['protein synthesis', 'synthèse protéique'],
  ['nitrogen retention', 'rétention d\'azote'],
  ['collagen synthesis', 'synthèse du collagène'],
  ['red blood cell production', 'production de globules rouges'],
  ['metabolic rate', 'taux métabolique'],
  ['thermogenesis', 'thermogenèse'],
  ['aromatise', 'aromatiser'],
  ['half-life', 'demi-vie'],
  ['active ingredient', 'principe actif'],
  ['stable blood levels', 'taux sanguins stables'],
  ['hepatotoxicity', 'hépatotoxicité'],
  ['carrier oil', 'huile vecteur'],
  ['mechanism of action', 'mécanisme d\'action'],
  ['clinical research', 'recherche clinique'],
  ['connective tissues', 'tissus conjonctifs'],

  ['lean muscle mass', 'masse musculaire maigre'],
  ['lean muscle', 'muscle maigre'],
  ['lean mass', 'masse maigre'],
  ['lean gains', 'gains maigres'],
  ['muscle mass', 'masse musculaire'],
  ['muscle growth', 'croissance musculaire'],
  ['dry mass', 'masse sèche'],
  ['strength gains', 'gains de force'],
  ['fat loss', 'perte de graisse'],
  ['fat burning', 'brûlage de graisse'],
  ['fat-burning', 'brûle-graisses'],
  ['body composition', 'composition corporelle'],
  ['water retention', 'rétention d\'eau'],
  ['joint relief', 'soulagement articulaire'],
  ['joint support', 'soutien articulaire'],

  ['bulking cycle', 'cycle de prise de masse'],
  ['cutting cycle', 'cycle de sèche'],
  ['cutting phase', 'phase de sèche'],
  ['contest prep', 'préparation de compétition'],
  ['steroid cycle', 'cycle de stéroïdes'],
  ['first-time users', 'utilisateurs débutants'],
  ['experienced users', 'utilisateurs expérimentés'],
  ['post cycle therapy', 'thérapie post-cycle'],
  ['side effects', 'effets secondaires'],
  ['safety profile', 'profil de sécurité'],
  ['well-tolerated', 'bien toléré'],
  ['training sessions', 'séances d\'entraînement'],
  ['blood pressure', 'pression artérielle'],
  ['liver support', 'protection hépatique'],
  ['virilisation', 'virilisation'],

  ['per vial', 'par flacon'],
  ['per box', 'par boîte'],
  ['minimum order', 'commande minimale'],
  ['vials', 'flacons'],
  ['vial', 'flacon'],
  ['tablets', 'comprimés'],
  ['tablet', 'comprimé'],
  ['Buy', 'Acheter'],
  ['buy', 'acheter'],
  ['for sale', 'en vente'],
  ['discreet', 'discret'],
  ['delivery', 'livraison'],
  ['shipping', 'livraison'],
  ['purity', 'pureté'],
  ['manufacturer', 'fabricant'],

  ['Yes —', 'Oui —'],
  ['Yes,', 'Oui,'],
  ['No —', 'Non —'],
  ['No.', 'Non.'],
  ['genuine', 'véritable'],
  ['effective', 'efficace'],
  ['potent', 'puissant'],
  ['powerful', 'puissant'],
  ['reliable', 'fiable'],
  ['provides', 'fournit'],
  ['delivers', 'offre'],
  ['contains', 'contient'],
  ['injectable steroid', 'stéroïde injectable'],
  ['oral steroid', 'stéroïde oral'],
  ['anabolic steroid', 'stéroïde anabolisant'],
  ['anabolic steroids', 'stéroïdes anabolisants'],
  ['female-friendly', 'adapté aux femmes'],
  ['bodybuilders', 'bodybuilders'],
  ['athletes', 'athlètes'],
  ['Europe', 'Europe'],
  ['UK', 'Europe'],
  ['United Kingdom', 'Europe'],

  // ── Additional Connecting/Structural Phrases ──
  ['is a precision-dosed', 'est un produit dosé avec précision'],
  ['precision-dosed', 'dosé avec précision'],
  ['has remained the go-to', 'est resté le choix privilégié'],
  ['excels in', 'excelle dans'],
  ['creates a pronounced anabolic environment', 'crée un environnement anabolique prononcé'],
  ['competitive pricing', 'prix compétitifs'],
  ['without the harsh side effects', 'sans les effets secondaires sévères'],
  ['without compromising on', 'sans compromettre'],
  ['without sacrificing quality', 'sans sacrifier la qualité'],
  ['evidence-based approach', 'approche fondée sur les preuves'],
  ['exceptional value', 'valeur exceptionnelle'],
  ['with minimal injection volume', 'avec un volume d\'injection minimal'],
  ['ultra-stable blood levels', 'taux sanguins ultra-stables'],

  ['injection', 'injection'],
  ['injections', 'injections'],
  ['concentration', 'concentration'],
  ['protocol', 'protocole'],
  ['protocols', 'protocoles'],
  ['administered', 'administré'],
  ['formulated for', 'formulé pour'],
  ['designed for', 'conçu pour'],
  ['total', 'total'],
  ['weekly', 'hebdomadaire'],
  ['daily', 'quotidien'],
  ['standard', 'standard'],
  ['optimal', 'optimal'],
  ['aggressive', 'agressif'],
  ['mild', 'doux'],
  ['dramatic', 'spectaculaire'],
  ['significant', 'significatif'],
  ['substantial', 'substantiel'],
  ['minimal', 'minimal'],
  ['comfortable', 'confortable'],
  ['smooth', 'lisse'],
  ['comprehensive', 'complet'],
  ['advanced', 'avancé'],
  ['modern', 'moderne'],
  ['affordable', 'abordable'],
  ['volume', 'volume'],
  ['compound', 'composé'],
  ['compounds', 'composés'],
  ['cycle', 'cycle'],
  ['dose', 'dose'],
  ['doses', 'doses'],
  ['dosage', 'dosage'],
  ['results', 'résultats'],
  ['gains', 'gains'],
  ['stacked with', 'combiné avec'],
  ['compared to', 'par rapport à'],
  ['as well as', 'ainsi que'],
  ['in combination with', 'en combinaison avec'],
  ['per day', 'par jour'],
  ['per week', 'par semaine'],
  ['once weekly', 'une fois par semaine'],
  ['twice weekly', 'deux fois par semaine'],
  ['every other day', 'un jour sur deux'],
  ['weeks of use', 'semaines d\'utilisation'],
  ['Each tablet', 'Chaque comprimé'],
  ['Each vial', 'Chaque flacon'],
  ['Every order', 'Chaque commande'],
  ['Both deliver', 'Les deux offrent'],
  ['Most users', 'La plupart des utilisateurs'],
  ['is recommended', 'est recommandé'],
  ['from the first injection', 'dès la première injection'],
  ['with room to spare', 'avec de la marge'],
  ['vascularity', 'vascularité'],
  ['body recomposition', 'recomposition corporelle'],
  ['mass builder', 'constructeur de masse'],
  ['kickstart', 'kickstart'],
  ['Batch tracked', 'Lot suivi'],
  ['low PIP', 'faible PIP'],
  ['smooth oil', 'huile lisse'],
],

// ═══════════════════════════════════════════════════════════════
// SPANISH (es) — Extended
// ═══════════════════════════════════════════════════════════════
es: [
  ['Every batch undergoes independent HPLC concentration analysis, sterility testing, and endotoxin screening', 'Cada lote se somete a análisis de concentración HPLC independiente, pruebas de esterilidad y detección de endotoxinas'],
  ['exceeding the QA standards of most underground laboratories', 'superando los estándares de calidad de la mayoría de los laboratorios clandestinos'],
  ['one of the fastest-growing performance brands in Europe', 'una de las marcas de rendimiento de más rápido crecimiento en Europa'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe', 'de confianza para clínicos, pacientes de TRT y fisicoculturistas competitivos en toda Europa'],
  ['the most popular injectable steroid in the world after testosterone', 'el esteroide inyectable más popular del mundo después de la testosterona'],
  ['the single most popular oral steroid in Europe', 'el esteroide oral más popular en Europa'],
  ['the safest oral anabolic available', 'el anabólico oral más seguro disponible'],
  ['the most effective non-hormonal fat-burning compound available', 'el compuesto quemagrasas no hormonal más efectivo disponible'],
  ['enough for a complete', 'suficiente para un completo'],
  ['enough for a full', 'suficiente para un completo'],
  ['backed by one of the most rigorous quality assurance protocols', 'respaldado por uno de los protocolos de aseguramiento de calidad más rigurosos'],
  ['in the UK underground laboratory market', 'en el mercado de laboratorios clandestinos'],
  ['has built its reputation on a simple principle', 'ha construido su reputación sobre un principio simple'],
  ['the most commonly counterfeited steroids', 'los esteroides más comúnmente falsificados'],
  ['All three brands produce quality', 'Las tres marcas producen productos de calidad'],
  ['Pricing is comparable across all three', 'Los precios son comparables en las tres'],
  ['includes a unique QR code', 'incluye un código QR único'],

  ['Order today', 'Pida hoy'],
  ['Fast discreet EU shipping', 'Envío UE rápido y discreto'],
  ['EU tracked delivery', 'Entrega UE rastreada'],
  ['EU delivery', 'Entrega UE'],
  ['EU Shop', 'Tienda UE'],
  ['available in Europe', 'disponible en Europa'],
  ['across Europe', 'en toda Europa'],

  ['hospital-grade purity', 'pureza de grado hospitalario'],
  ['pharmaceutical-quality', 'calidad farmacéutica'],
  ['pharmaceutical-grade', 'de grado farmacéutico'],
  ['pharma-grade', 'calidad farmacéutica'],
  ['3rd-party lab testing', 'pruebas de laboratorio de terceros'],
  ['independently tested', 'probado independientemente'],
  ['lab-verified', 'verificado en laboratorio'],
  ['HPLC-verified', 'verificado por HPLC'],
  ['HPLC-tested', 'probado por HPLC'],
  ['quality assurance', 'garantía de calidad'],
  ['quality control', 'control de calidad'],
  ['batch numbers', 'números de lote'],
  ['precision-dosed', 'dosificado con precisión'],

  ['Testosterone Enanthate', 'Testosterona Enantato'],
  ['Testosterone Cypionate', 'Testosterona Cipionato'],
  ['Testosterone Propionate', 'Testosterona Propionato'],
  ['testosterone enanthate', 'testosterona enantato'],
  ['Testosterone Replacement Therapy', 'Terapia de Reemplazo de Testosterona'],
  ['testosterone levels', 'niveles de testosterona'],
  ['natural testosterone', 'testosterona natural'],
  ['Human Growth Hormone', 'Hormona del Crecimiento Humano'],
  ['growth hormone', 'hormona del crecimiento'],
  ['Nandrolone Decanoate', 'Decanoato de Nandrolona'],
  ['Nandrolone', 'Nandrolona'],
  ['Trenbolone Acetate', 'Acetato de Trembolona'],
  ['Trenbolone Enanthate', 'Enantato de Trembolona'],
  ['Trenbolone', 'Trembolona'],
  ['Boldenone Undecylenate', 'Undecilenato de Boldenona'],
  ['Boldenone', 'Boldenona'],
  ['Oxandrolone', 'Oxandrolona'],
  ['Oxymetholone', 'Oximetolona'],
  ['Methandienone', 'Metandienona'],
  ['Clenbuterol', 'Clenbuterol'],
  ['Bacteriostatic Water', 'Agua Bacteriostática'],
  ['protein synthesis', 'síntesis de proteínas'],
  ['nitrogen retention', 'retención de nitrógeno'],
  ['collagen synthesis', 'síntesis de colágeno'],
  ['red blood cell production', 'producción de glóbulos rojos'],
  ['metabolic rate', 'tasa metabólica'],
  ['thermogenesis', 'termogénesis'],
  ['half-life', 'vida media'],
  ['active ingredient', 'ingrediente activo'],
  ['stable blood levels', 'niveles sanguíneos estables'],
  ['hepatotoxicity', 'hepatotoxicidad'],
  ['carrier oil', 'aceite portador'],
  ['mechanism of action', 'mecanismo de acción'],
  ['clinical research', 'investigación clínica'],
  ['connective tissues', 'tejidos conectivos'],

  ['lean muscle mass', 'masa muscular magra'],
  ['lean muscle', 'músculo magro'],
  ['lean mass', 'masa magra'],
  ['lean gains', 'ganancias magras'],
  ['muscle mass', 'masa muscular'],
  ['muscle growth', 'crecimiento muscular'],
  ['dry mass', 'masa seca'],
  ['strength gains', 'ganancias de fuerza'],
  ['fat loss', 'pérdida de grasa'],
  ['fat burning', 'quema de grasa'],
  ['fat-burning', 'quemagrasas'],
  ['body composition', 'composición corporal'],
  ['water retention', 'retención de agua'],
  ['joint relief', 'alivio articular'],
  ['joint support', 'soporte articular'],

  ['bulking cycle', 'ciclo de volumen'],
  ['cutting cycle', 'ciclo de definición'],
  ['cutting phase', 'fase de definición'],
  ['contest prep', 'preparación de competición'],
  ['steroid cycle', 'ciclo de esteroides'],
  ['first-time users', 'usuarios principiantes'],
  ['experienced users', 'usuarios experimentados'],
  ['post cycle therapy', 'terapia post-ciclo'],
  ['side effects', 'efectos secundarios'],
  ['safety profile', 'perfil de seguridad'],
  ['well-tolerated', 'bien tolerado'],
  ['training sessions', 'sesiones de entrenamiento'],
  ['blood pressure', 'presión arterial'],
  ['liver support', 'protección hepática'],
  ['virilisation', 'virilización'],

  ['per vial', 'por ampolla'],
  ['per box', 'por caja'],
  ['minimum order', 'pedido mínimo'],
  ['vials', 'ampollas'],
  ['vial', 'ampolla'],
  ['tablets', 'comprimidos'],
  ['tablet', 'comprimido'],
  ['Buy', 'Comprar'],
  ['buy', 'comprar'],
  ['for sale', 'en venta'],
  ['discreet', 'discreto'],
  ['delivery', 'entrega'],
  ['shipping', 'envío'],
  ['purity', 'pureza'],
  ['manufacturer', 'fabricante'],

  ['Yes —', 'Sí —'],
  ['Yes,', 'Sí,'],
  ['No —', 'No —'],
  ['genuine', 'auténtico'],
  ['effective', 'eficaz'],
  ['potent', 'potente'],
  ['powerful', 'poderoso'],
  ['reliable', 'fiable'],
  ['provides', 'proporciona'],
  ['delivers', 'ofrece'],
  ['contains', 'contiene'],
  ['injectable steroid', 'esteroide inyectable'],
  ['oral steroid', 'esteroide oral'],
  ['anabolic steroid', 'esteroide anabólico'],
  ['anabolic steroids', 'esteroides anabólicos'],
  ['female-friendly', 'apta para mujeres'],
  ['bodybuilders', 'fisicoculturistas'],
  ['athletes', 'atletas'],
  ['Europe', 'Europa'],
  ['UK', 'Europa'],
  ['United Kingdom', 'Europa'],

  // ── Additional Connecting/Structural Phrases ──
  ['is a precision-dosed', 'es un producto dosificado con precisión'],
  ['precision-dosed', 'dosificado con precisión'],
  ['has remained the go-to', 'sigue siendo la opción preferida'],
  ['excels in', 'destaca en'],
  ['creates a pronounced anabolic environment', 'crea un entorno anabólico pronunciado'],
  ['competitive pricing', 'precios competitivos'],
  ['without the harsh side effects', 'sin los efectos secundarios severos'],
  ['without compromising on', 'sin comprometer'],
  ['without sacrificing quality', 'sin sacrificar calidad'],
  ['evidence-based approach', 'enfoque basado en evidencia'],
  ['exceptional value', 'valor excepcional'],
  ['with minimal injection volume', 'con volumen de inyección mínimo'],
  ['ultra-stable blood levels', 'niveles sanguíneos ultra-estables'],

  ['injection', 'inyección'],
  ['injections', 'inyecciones'],
  ['concentration', 'concentración'],
  ['protocol', 'protocolo'],
  ['protocols', 'protocolos'],
  ['administered', 'administrado'],
  ['formulated for', 'formulado para'],
  ['designed for', 'diseñado para'],
  ['total', 'total'],
  ['weekly', 'semanal'],
  ['daily', 'diario'],
  ['standard', 'estándar'],
  ['optimal', 'óptimo'],
  ['aggressive', 'agresivo'],
  ['mild', 'suave'],
  ['dramatic', 'espectacular'],
  ['significant', 'significativo'],
  ['substantial', 'sustancial'],
  ['minimal', 'mínimo'],
  ['comfortable', 'cómodo'],
  ['smooth', 'suave'],
  ['comprehensive', 'integral'],
  ['advanced', 'avanzado'],
  ['modern', 'moderno'],
  ['affordable', 'asequible'],
  ['volume', 'volumen'],
  ['compound', 'compuesto'],
  ['compounds', 'compuestos'],
  ['cycle', 'ciclo'],
  ['dose', 'dosis'],
  ['dosage', 'dosificación'],
  ['results', 'resultados'],
  ['gains', 'ganancias'],
  ['stacked with', 'combinado con'],
  ['compared to', 'comparado con'],
  ['as well as', 'así como'],
  ['in combination with', 'en combinación con'],
  ['per day', 'por día'],
  ['per week', 'por semana'],
  ['once weekly', 'una vez por semana'],
  ['twice weekly', 'dos veces por semana'],
  ['every other day', 'cada dos días'],
  ['weeks of use', 'semanas de uso'],
  ['Each tablet', 'Cada comprimido'],
  ['Each vial', 'Cada ampolla'],
  ['Every order', 'Cada pedido'],
  ['Both deliver', 'Ambos ofrecen'],
  ['Most users', 'La mayoría de usuarios'],
  ['is recommended', 'se recomienda'],
  ['from the first injection', 'desde la primera inyección'],
  ['with room to spare', 'con margen de sobra'],
  ['vascularity', 'vascularidad'],
  ['body recomposition', 'recomposición corporal'],
  ['mass builder', 'constructor de masa'],
  ['kickstart', 'arranque rápido'],
  ['Batch tracked', 'Lote rastreado'],
  ['low PIP', 'bajo PIP'],
  ['smooth oil', 'aceite suave'],
],

// ═══════════════════════════════════════════════════════════════
// ITALIAN (it) — Extended
// ═══════════════════════════════════════════════════════════════
it: [
  ['Every batch undergoes independent HPLC concentration analysis, sterility testing, and endotoxin screening', 'Ogni lotto viene sottoposto ad analisi indipendente della concentrazione HPLC, test di sterilità e screening delle endotossine'],
  ['exceeding the QA standards of most underground laboratories', 'superando gli standard QA della maggior parte dei laboratori clandestini'],
  ['one of the fastest-growing performance brands in Europe', 'uno dei marchi di prestazione in più rapida crescita in Europa'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe', 'di fiducia per medici, pazienti TRT e bodybuilder competitivi in tutta Europa'],
  ['the most popular injectable steroid in the world after testosterone', 'lo steroide iniettabile più popolare al mondo dopo il testosterone'],
  ['the single most popular oral steroid in Europe', 'lo steroide orale più popolare in Europa'],
  ['the safest oral anabolic available', 'l\'anabolizzante orale più sicuro disponibile'],
  ['the most effective non-hormonal fat-burning compound available', 'il composto brucia-grassi non ormonale più efficace disponibile'],
  ['enough for a complete', 'sufficiente per un completo'],
  ['enough for a full', 'sufficiente per un completo'],
  ['backed by one of the most rigorous quality assurance protocols', 'supportato da uno dei protocolli di garanzia qualità più rigorosi'],
  ['in the UK underground laboratory market', 'nel mercato dei laboratori clandestini'],
  ['has built its reputation on a simple principle', 'ha costruito la sua reputazione su un principio semplice'],
  ['the most commonly counterfeited steroids', 'gli steroidi più comunemente contraffatti'],
  ['All three brands produce quality', 'Tutti e tre i marchi producono prodotti di qualità'],
  ['Pricing is comparable across all three', 'I prezzi sono comparabili per tutti e tre'],
  ['includes a unique QR code', 'include un codice QR unico'],

  ['Order today', 'Ordina oggi'],
  ['Fast discreet EU shipping', 'Spedizione UE rapida e discreta'],
  ['EU tracked delivery', 'Consegna UE tracciata'],
  ['EU delivery', 'Consegna UE'],
  ['EU Shop', 'Negozio UE'],
  ['available in Europe', 'disponibile in Europa'],
  ['across Europe', 'in tutta Europa'],

  ['hospital-grade purity', 'purezza di grado ospedaliero'],
  ['pharmaceutical-quality', 'qualità farmaceutica'],
  ['pharmaceutical-grade', 'di grado farmaceutico'],
  ['pharma-grade', 'qualità farmaceutica'],
  ['3rd-party lab testing', 'test di laboratorio di terze parti'],
  ['independently tested', 'testato in modo indipendente'],
  ['lab-verified', 'verificato in laboratorio'],
  ['HPLC-verified', 'verificato con HPLC'],
  ['HPLC-tested', 'testato con HPLC'],
  ['quality assurance', 'garanzia di qualità'],
  ['quality control', 'controllo qualità'],
  ['batch numbers', 'numeri di lotto'],
  ['precision-dosed', 'dosaggio di precisione'],

  ['Testosterone Enanthate', 'Testosterone Enantato'],
  ['Testosterone Cypionate', 'Testosterone Cipionato'],
  ['Testosterone Propionate', 'Testosterone Propionato'],
  ['testosterone enanthate', 'testosterone enantato'],
  ['Testosterone Replacement Therapy', 'Terapia Sostitutiva del Testosterone'],
  ['testosterone levels', 'livelli di testosterone'],
  ['natural testosterone', 'testosterone naturale'],
  ['Human Growth Hormone', 'Ormone della Crescita Umano'],
  ['growth hormone', 'ormone della crescita'],
  ['Nandrolone Decanoate', 'Decanoato di Nandrolone'],
  ['Nandrolone', 'Nandrolone'],
  ['Trenbolone Acetate', 'Acetato di Trenbolone'],
  ['Trenbolone Enanthate', 'Enantato di Trenbolone'],
  ['Trenbolone', 'Trenbolone'],
  ['Boldenone Undecylenate', 'Undecylenato di Boldenone'],
  ['Boldenone', 'Boldenone'],
  ['Oxandrolone', 'Oxandrolone'],
  ['Oxymetholone', 'Ossimetolone'],
  ['Methandienone', 'Metandienone'],
  ['Clenbuterol', 'Clenbuterolo'],
  ['Bacteriostatic Water', 'Acqua Batteriostatica'],
  ['protein synthesis', 'sintesi proteica'],
  ['nitrogen retention', 'ritenzione di azoto'],
  ['collagen synthesis', 'sintesi del collagene'],
  ['red blood cell production', 'produzione di globuli rossi'],
  ['metabolic rate', 'tasso metabolico'],
  ['thermogenesis', 'termogenesi'],
  ['half-life', 'emivita'],
  ['active ingredient', 'principio attivo'],
  ['stable blood levels', 'livelli ematici stabili'],
  ['hepatotoxicity', 'epatotossicità'],
  ['carrier oil', 'olio vettore'],
  ['mechanism of action', 'meccanismo d\'azione'],
  ['clinical research', 'ricerca clinica'],
  ['connective tissues', 'tessuti connettivi'],

  ['lean muscle mass', 'massa muscolare magra'],
  ['lean muscle', 'muscolo magro'],
  ['lean mass', 'massa magra'],
  ['lean gains', 'guadagni magri'],
  ['muscle mass', 'massa muscolare'],
  ['muscle growth', 'crescita muscolare'],
  ['dry mass', 'massa asciutta'],
  ['strength gains', 'guadagni di forza'],
  ['fat loss', 'perdita di grasso'],
  ['fat burning', 'brucia grassi'],
  ['fat-burning', 'brucia-grassi'],
  ['body composition', 'composizione corporea'],
  ['water retention', 'ritenzione idrica'],
  ['joint relief', 'sollievo articolare'],
  ['joint support', 'supporto articolare'],

  ['bulking cycle', 'ciclo di massa'],
  ['cutting cycle', 'ciclo di definizione'],
  ['cutting phase', 'fase di definizione'],
  ['contest prep', 'preparazione alla gara'],
  ['steroid cycle', 'ciclo di steroidi'],
  ['first-time users', 'utilizzatori principianti'],
  ['experienced users', 'utilizzatori esperti'],
  ['post cycle therapy', 'terapia post-ciclo'],
  ['side effects', 'effetti collaterali'],
  ['safety profile', 'profilo di sicurezza'],
  ['well-tolerated', 'ben tollerato'],
  ['training sessions', 'sessioni di allenamento'],
  ['blood pressure', 'pressione sanguigna'],
  ['liver support', 'protezione epatica'],
  ['virilisation', 'virilizzazione'],

  ['per vial', 'per fiala'],
  ['per box', 'per scatola'],
  ['minimum order', 'ordine minimo'],
  ['vials', 'fiale'],
  ['vial', 'fiala'],
  ['tablets', 'compresse'],
  ['tablet', 'compressa'],
  ['Buy', 'Acquistare'],
  ['buy', 'acquistare'],
  ['for sale', 'in vendita'],
  ['discreet', 'discreto'],
  ['delivery', 'consegna'],
  ['shipping', 'spedizione'],
  ['purity', 'purezza'],
  ['manufacturer', 'produttore'],

  ['Yes —', 'Sì —'],
  ['Yes,', 'Sì,'],
  ['No —', 'No —'],
  ['genuine', 'autentico'],
  ['effective', 'efficace'],
  ['potent', 'potente'],
  ['powerful', 'potente'],
  ['reliable', 'affidabile'],
  ['provides', 'fornisce'],
  ['delivers', 'offre'],
  ['contains', 'contiene'],
  ['injectable steroid', 'steroide iniettabile'],
  ['oral steroid', 'steroide orale'],
  ['anabolic steroid', 'steroide anabolizzante'],
  ['anabolic steroids', 'steroidi anabolizzanti'],
  ['female-friendly', 'adatto alle donne'],
  ['bodybuilders', 'bodybuilder'],
  ['athletes', 'atleti'],
  ['Europe', 'Europa'],
  ['UK', 'Europa'],
  ['United Kingdom', 'Europa'],

  // ── Additional Connecting/Structural Phrases ──
  ['is a precision-dosed', 'è un prodotto dosato con precisione'],
  ['precision-dosed', 'dosato con precisione'],
  ['has remained the go-to', 'è rimasto la scelta principale'],
  ['excels in', 'eccelle in'],
  ['creates a pronounced anabolic environment', 'crea un ambiente anabolico pronunciato'],
  ['competitive pricing', 'prezzi competitivi'],
  ['without the harsh side effects', 'senza i gravi effetti collaterali'],
  ['without compromising on', 'senza compromettere'],
  ['without sacrificing quality', 'senza sacrificare la qualità'],
  ['evidence-based approach', 'approccio basato sulle evidenze'],
  ['exceptional value', 'valore eccezionale'],
  ['with minimal injection volume', 'con volume di iniezione minimo'],
  ['ultra-stable blood levels', 'livelli ematici ultra-stabili'],

  ['injection', 'iniezione'],
  ['injections', 'iniezioni'],
  ['concentration', 'concentrazione'],
  ['protocol', 'protocollo'],
  ['protocols', 'protocolli'],
  ['administered', 'somministrato'],
  ['formulated for', 'formulato per'],
  ['designed for', 'progettato per'],
  ['total', 'totale'],
  ['weekly', 'settimanale'],
  ['daily', 'giornaliero'],
  ['standard', 'standard'],
  ['optimal', 'ottimale'],
  ['aggressive', 'aggressivo'],
  ['mild', 'mite'],
  ['dramatic', 'drammatico'],
  ['significant', 'significativo'],
  ['substantial', 'sostanziale'],
  ['minimal', 'minimo'],
  ['comfortable', 'confortevole'],
  ['smooth', 'liscio'],
  ['comprehensive', 'completo'],
  ['advanced', 'avanzato'],
  ['modern', 'moderno'],
  ['affordable', 'accessibile'],
  ['volume', 'volume'],
  ['compound', 'composto'],
  ['compounds', 'composti'],
  ['cycle', 'ciclo'],
  ['dose', 'dose'],
  ['dosage', 'dosaggio'],
  ['results', 'risultati'],
  ['gains', 'guadagni'],
  ['stacked with', 'combinato con'],
  ['compared to', 'rispetto a'],
  ['as well as', 'così come'],
  ['in combination with', 'in combinazione con'],
  ['per day', 'al giorno'],
  ['per week', 'alla settimana'],
  ['once weekly', 'una volta alla settimana'],
  ['twice weekly', 'due volte alla settimana'],
  ['every other day', 'a giorni alterni'],
  ['weeks of use', 'settimane di utilizzo'],
  ['Each tablet', 'Ogni compressa'],
  ['Each vial', 'Ogni fiala'],
  ['Every order', 'Ogni ordine'],
  ['Both deliver', 'Entrambi offrono'],
  ['Most users', 'La maggior parte degli utilizzatori'],
  ['is recommended', 'è raccomandato'],
  ['from the first injection', 'dalla prima iniezione'],
  ['with room to spare', 'con margine di scorta'],
  ['vascularity', 'vascolarità'],
  ['body recomposition', 'ricomposizione corporea'],
  ['mass builder', 'costruttore di massa'],
  ['kickstart', 'kickstart'],
  ['Batch tracked', 'Lotto tracciato'],
  ['low PIP', 'basso PIP'],
  ['smooth oil', 'olio liscio'],
],

// ═══════════════════════════════════════════════════════════════
// RUSSIAN (ru) — Extended
// ═══════════════════════════════════════════════════════════════
ru: [
  ['Every batch undergoes independent HPLC concentration analysis, sterility testing, and endotoxin screening', 'Каждая партия проходит независимый ВЭЖХ-анализ концентрации, тестирование на стерильность и скрининг эндотоксинов'],
  ['exceeding the QA standards of most underground laboratories', 'превышая стандарты качества большинства подпольных лабораторий'],
  ['one of the fastest-growing performance brands in Europe', 'один из самых быстрорастущих брендов производительности в Европе'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe', 'пользуется доверием врачей, пациентов ЗГТ и соревновательных бодибилдеров по всей Европе'],
  ['the most popular injectable steroid in the world after testosterone', 'самый популярный инъекционный стероид в мире после тестостерона'],
  ['the single most popular oral steroid in Europe', 'самый популярный оральный стероид в Европе'],
  ['the safest oral anabolic available', 'самый безопасный доступный оральный анаболик'],
  ['the most effective non-hormonal fat-burning compound available', 'самое эффективное негормональное жиросжигающее соединение'],
  ['enough for a complete', 'достаточно для полного'],
  ['enough for a full', 'достаточно для полного'],
  ['backed by one of the most rigorous quality assurance protocols', 'подкреплённый одним из самых строгих протоколов обеспечения качества'],
  ['in the UK underground laboratory market', 'на рынке подпольных лабораторий'],
  ['has built its reputation on a simple principle', 'построил свою репутацию на простом принципе'],
  ['the most commonly counterfeited steroids', 'наиболее часто подделываемые стероиды'],
  ['All three brands produce quality', 'Все три бренда производят качественные'],
  ['Pricing is comparable across all three', 'Цены сопоставимы у всех трёх'],
  ['includes a unique QR code', 'включает уникальный QR-код'],

  ['Order today', 'Закажите сегодня'],
  ['Fast discreet EU shipping', 'Быстрая дискретная доставка по ЕС'],
  ['EU tracked delivery', 'Отслеживаемая доставка по ЕС'],
  ['EU delivery', 'Доставка по ЕС'],
  ['EU Shop', 'Магазин ЕС'],
  ['available in Europe', 'доступен в Европе'],
  ['across Europe', 'по всей Европе'],

  ['hospital-grade purity', 'больничная чистота'],
  ['pharmaceutical-quality', 'фармацевтическое качество'],
  ['pharmaceutical-grade', 'фармацевтического качества'],
  ['pharma-grade', 'фарма-качества'],
  ['3rd-party lab testing', 'независимое лабораторное тестирование'],
  ['independently tested', 'независимо протестирован'],
  ['lab-verified', 'проверенный в лаборатории'],
  ['HPLC-verified', 'верифицирован ВЭЖХ'],
  ['HPLC-tested', 'протестирован ВЭЖХ'],
  ['quality assurance', 'обеспечение качества'],
  ['quality control', 'контроль качества'],
  ['batch numbers', 'номера партий'],
  ['precision-dosed', 'точно дозированный'],

  ['Testosterone Enanthate', 'Тестостерон Энантат'],
  ['Testosterone Cypionate', 'Тестостерон Ципионат'],
  ['Testosterone Propionate', 'Тестостерон Пропионат'],
  ['testosterone enanthate', 'тестостерон энантат'],
  ['Testosterone Replacement Therapy', 'Заместительная Гормональная Терапия'],
  ['testosterone levels', 'уровень тестостерона'],
  ['natural testosterone', 'естественный тестостерон'],
  ['Human Growth Hormone', 'Гормон Роста Человека'],
  ['growth hormone', 'гормон роста'],
  ['Nandrolone Decanoate', 'Нандролон Деканоат'],
  ['Nandrolone', 'Нандролон'],
  ['Trenbolone Acetate', 'Тренболон Ацетат'],
  ['Trenbolone Enanthate', 'Тренболон Энантат'],
  ['Trenbolone', 'Тренболон'],
  ['Boldenone Undecylenate', 'Болденон Ундецеленат'],
  ['Boldenone', 'Болденон'],
  ['Oxandrolone', 'Оксандролон'],
  ['Oxymetholone', 'Оксиметолон'],
  ['Methandienone', 'Метандиенон'],
  ['Clenbuterol', 'Кленбутерол'],
  ['Bacteriostatic Water', 'Бактериостатическая Вода'],
  ['protein synthesis', 'синтез белка'],
  ['nitrogen retention', 'удержание азота'],
  ['collagen synthesis', 'синтез коллагена'],
  ['red blood cell production', 'выработка красных кровяных клеток'],
  ['metabolic rate', 'скорость метаболизма'],
  ['thermogenesis', 'термогенез'],
  ['half-life', 'период полувыведения'],
  ['active ingredient', 'действующее вещество'],
  ['stable blood levels', 'стабильный уровень в крови'],
  ['hepatotoxicity', 'гепатотоксичность'],
  ['carrier oil', 'масло-носитель'],
  ['mechanism of action', 'механизм действия'],
  ['clinical research', 'клинические исследования'],
  ['connective tissues', 'соединительные ткани'],

  ['lean muscle mass', 'сухая мышечная масса'],
  ['lean muscle', 'сухие мышцы'],
  ['lean mass', 'сухая масса'],
  ['lean gains', 'сухие результаты'],
  ['muscle mass', 'мышечная масса'],
  ['muscle growth', 'мышечный рост'],
  ['dry mass', 'сухая масса'],
  ['strength gains', 'прирост силы'],
  ['fat loss', 'потеря жира'],
  ['fat burning', 'жиросжигание'],
  ['fat-burning', 'жиросжигающий'],
  ['body composition', 'состав тела'],
  ['water retention', 'задержка воды'],
  ['joint relief', 'облегчение суставов'],
  ['joint support', 'поддержка суставов'],

  ['bulking cycle', 'массонаборный курс'],
  ['cutting cycle', 'курс сушки'],
  ['cutting phase', 'фаза сушки'],
  ['contest prep', 'подготовка к соревнованиям'],
  ['steroid cycle', 'курс стероидов'],
  ['first-time users', 'начинающие пользователи'],
  ['experienced users', 'опытные пользователи'],
  ['post cycle therapy', 'послекурсовая терапия'],
  ['side effects', 'побочные эффекты'],
  ['safety profile', 'профиль безопасности'],
  ['well-tolerated', 'хорошо переносимый'],
  ['training sessions', 'тренировочные сессии'],
  ['blood pressure', 'артериальное давление'],
  ['liver support', 'защита печени'],
  ['virilisation', 'вирилизация'],

  ['per vial', 'за ампулу'],
  ['per box', 'за упаковку'],
  ['minimum order', 'минимальный заказ'],
  ['vials', 'ампулы'],
  ['vial', 'ампула'],
  ['tablets', 'таблетки'],
  ['tablet', 'таблетка'],
  ['Buy', 'Купить'],
  ['buy', 'купить'],
  ['for sale', 'в продаже'],
  ['discreet', 'дискретный'],
  ['delivery', 'доставка'],
  ['shipping', 'доставка'],
  ['purity', 'чистота'],
  ['manufacturer', 'производитель'],

  ['Yes —', 'Да —'],
  ['Yes,', 'Да,'],
  ['No —', 'Нет —'],
  ['No.', 'Нет.'],
  ['genuine', 'подлинный'],
  ['effective', 'эффективный'],
  ['potent', 'мощный'],
  ['powerful', 'мощный'],
  ['reliable', 'надёжный'],
  ['provides', 'обеспечивает'],
  ['delivers', 'предоставляет'],
  ['contains', 'содержит'],
  ['injectable steroid', 'инъекционный стероид'],
  ['oral steroid', 'оральный стероид'],
  ['anabolic steroid', 'анаболический стероид'],
  ['anabolic steroids', 'анаболические стероиды'],
  ['female-friendly', 'подходит для женщин'],
  ['bodybuilders', 'бодибилдеры'],
  ['athletes', 'атлеты'],
  ['Europe', 'Европа'],
  ['UK', 'Россия'],
  ['United Kingdom', 'Россия'],

  // ── Additional Connecting/Structural Phrases ──
  ['is a precision-dosed', 'является точно дозированным'],
  ['precision-dosed', 'точно дозированный'],
  ['has remained the go-to', 'остаётся основным выбором'],
  ['excels in', 'превосходно подходит для'],
  ['creates a pronounced anabolic environment', 'создаёт выраженную анаболическую среду'],
  ['competitive pricing', 'конкурентоспособные цены'],
  ['without the harsh side effects', 'без серьёзных побочных эффектов'],
  ['without compromising on', 'без ущерба для'],
  ['without sacrificing quality', 'без ущерба для качества'],
  ['evidence-based approach', 'научно обоснованный подход'],
  ['exceptional value', 'исключительная ценность'],
  ['with minimal injection volume', 'с минимальным объёмом инъекции'],
  ['ultra-stable blood levels', 'ультрастабильные уровни в крови'],

  ['injection', 'инъекция'],
  ['injections', 'инъекции'],
  ['concentration', 'концентрация'],
  ['protocol', 'протокол'],
  ['protocols', 'протоколы'],
  ['administered', 'введён'],
  ['formulated for', 'разработан для'],
  ['designed for', 'предназначен для'],
  ['total', 'всего'],
  ['weekly', 'еженедельно'],
  ['daily', 'ежедневно'],
  ['standard', 'стандартный'],
  ['optimal', 'оптимальный'],
  ['aggressive', 'агрессивный'],
  ['mild', 'мягкий'],
  ['dramatic', 'значительный'],
  ['significant', 'значительный'],
  ['substantial', 'существенный'],
  ['minimal', 'минимальный'],
  ['comfortable', 'комфортный'],
  ['smooth', 'гладкий'],
  ['comprehensive', 'комплексный'],
  ['advanced', 'продвинутый'],
  ['modern', 'современный'],
  ['affordable', 'доступный'],
  ['volume', 'объём'],
  ['compound', 'соединение'],
  ['compounds', 'соединения'],
  ['cycle', 'курс'],
  ['dose', 'доза'],
  ['dosage', 'дозировка'],
  ['results', 'результаты'],
  ['gains', 'результаты'],
  ['stacked with', 'в сочетании с'],
  ['compared to', 'по сравнению с'],
  ['as well as', 'а также'],
  ['in combination with', 'в сочетании с'],
  ['per day', 'в день'],
  ['per week', 'в неделю'],
  ['once weekly', 'раз в неделю'],
  ['twice weekly', 'два раза в неделю'],
  ['every other day', 'через день'],
  ['weeks of use', 'недель применения'],
  ['Each tablet', 'Каждая таблетка'],
  ['Each vial', 'Каждая ампула'],
  ['Every order', 'Каждый заказ'],
  ['Both deliver', 'Оба предоставляют'],
  ['Most users', 'Большинство пользователей'],
  ['is recommended', 'рекомендуется'],
  ['from the first injection', 'с первой инъекции'],
  ['with room to spare', 'с запасом'],
  ['vascularity', 'васкуляризация'],
  ['body recomposition', 'рекомпозиция тела'],
  ['mass builder', 'для набора массы'],
  ['kickstart', 'быстрый старт'],
  ['Batch tracked', 'Отслеживание партий'],
  ['low PIP', 'низкий PIP'],
  ['smooth oil', 'гладкое масло'],
],

}; // end dictionaries


// ═══════════════════════════════════════════════════════════════
// KEYWORD / META / TAG HELPERS
// ═══════════════════════════════════════════════════════════════

const buyWords = {
  de: 'kaufen', nl: 'kopen', fr: 'acheter', es: 'comprar', it: 'acquistare', ru: 'купить'
};

const regionMap = {
  de: { 'UK': 'Deutschland', 'Europe': 'Europa', 'United Kingdom': 'Deutschland' },
  nl: { 'UK': 'Nederland', 'Europe': 'Europa', 'United Kingdom': 'Nederland' },
  fr: { 'UK': 'France', 'Europe': 'Europe', 'United Kingdom': 'France' },
  es: { 'UK': 'España', 'Europe': 'Europa', 'United Kingdom': 'España' },
  it: { 'UK': 'Italia', 'Europe': 'Europa', 'United Kingdom': 'Italia' },
  ru: { 'UK': 'Россия', 'Europe': 'Европа', 'United Kingdom': 'Россия' },
};

const metaPhrases = {
  de: { 'Buy': 'Kaufen', 'Genuine': 'Echtes', 'EU Delivery': 'EU-Lieferung', 'EU Shop': 'EU-Shop', 'Fast discreet EU shipping': 'Schneller diskreter EU-Versand', 'Order now': 'Jetzt bestellen', 'Order today': 'Heute bestellen', 'Lab tested': 'Laborgetestet' },
  nl: { 'Buy': 'Kopen', 'Genuine': 'Echte', 'EU Delivery': 'EU-Levering', 'EU Shop': 'EU-Winkel', 'Fast discreet EU shipping': 'Snelle discrete EU-verzending', 'Order now': 'Bestel nu', 'Order today': 'Bestel vandaag', 'Lab tested': 'Labgetest' },
  fr: { 'Buy': 'Acheter', 'Genuine': 'Véritable', 'EU Delivery': 'Livraison UE', 'EU Shop': 'Boutique UE', 'Fast discreet EU shipping': 'Livraison UE rapide et discrète', 'Order now': 'Commandez maintenant', 'Order today': 'Commandez aujourd\'hui', 'Lab tested': 'Testé en laboratoire' },
  es: { 'Buy': 'Comprar', 'Genuine': 'Auténtico', 'EU Delivery': 'Entrega UE', 'EU Shop': 'Tienda UE', 'Fast discreet EU shipping': 'Envío UE rápido y discreto', 'Order now': 'Pida ahora', 'Order today': 'Pida hoy', 'Lab tested': 'Probado en laboratorio' },
  it: { 'Buy': 'Acquistare', 'Genuine': 'Autentico', 'EU Delivery': 'Consegna UE', 'EU Shop': 'Negozio UE', 'Fast discreet EU shipping': 'Spedizione UE rapida e discreta', 'Order now': 'Ordina ora', 'Order today': 'Ordina oggi', 'Lab tested': 'Testato in laboratorio' },
  ru: { 'Buy': 'Купить', 'Genuine': 'Подлинный', 'EU Delivery': 'Доставка по ЕС', 'EU Shop': 'Магазин ЕС', 'Fast discreet EU shipping': 'Быстрая дискретная доставка по ЕС', 'Order now': 'Закажите сейчас', 'Order today': 'Закажите сегодня', 'Lab tested': 'Лабораторно протестирован' },
};

// ═══════════════════════════════════════════════════════════════
// TRANSLATION ENGINE
// ═══════════════════════════════════════════════════════════════

function replaceAll(str, search, replacement) {
  let result = str;
  let idx = result.indexOf(search);
  while (idx !== -1) {
    result = result.substring(0, idx) + replacement + result.substring(idx + search.length);
    idx = result.indexOf(search, idx + replacement.length);
  }
  return result;
}

function translateText(text, lang) {
  if (!text || !dictionaries[lang]) return text;
  let result = text;
  for (const [en, localized] of dictionaries[lang]) {
    if (en.includes(' ') || en.length > 6) {
      result = replaceAll(result, en, localized);
    } else {
      try {
        const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`\\b${escaped}\\b`, 'g');
        result = result.replace(re, localized);
      } catch {
        result = replaceAll(result, en, localized);
      }
    }
  }
  return result;
}

function translateKeyword(keyword, lang) {
  if (!keyword) return keyword;
  let result = keyword;
  result = result.replace(/\bbuy\b/gi, buyWords[lang] || 'buy');
  const regions = regionMap[lang] || {};
  for (const [en, loc] of Object.entries(regions)) {
    result = replaceAll(result, en, loc);
  }
  return result;
}

function translateTags(tags, lang) {
  if (!tags || !Array.isArray(tags)) return tags;
  return tags.map(tag => {
    let t = tag;
    t = t.replace(/\bbuy\b/gi, buyWords[lang]);
    const regions = regionMap[lang] || {};
    for (const [en, loc] of Object.entries(regions)) {
      t = replaceAll(t, en, loc);
    }
    t = translateText(t, lang);
    return t;
  });
}

function translateMeta(meta, lang) {
  if (!meta) return meta;
  let title = meta.title || '';
  let desc = meta.description || '';
  const phrases = metaPhrases[lang] || {};
  for (const [en, loc] of Object.entries(phrases)) {
    title = replaceAll(title, en, loc);
    desc = replaceAll(desc, en, loc);
  }
  title = translateText(title, lang);
  desc = translateText(desc, lang);
  return { title, description: desc };
}

function translateFAQs(faqs, lang) {
  if (!faqs || !Array.isArray(faqs)) return faqs;
  return faqs.map(faq => ({
    question: translateText(faq.question, lang),
    answer: translateText(faq.answer, lang),
  }));
}

// ═══════════════════════════════════════════════════════════════
// FILE PARSING & WRITING
// ═══════════════════════════════════════════════════════════════

function parseMarkdownFile(content) {
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') return { frontmatter: '', body: content, raw: content };
  let endIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') { endIdx = i; break; }
  }
  if (endIdx === -1) return { frontmatter: '', body: content, raw: content };
  return {
    frontmatterStr: lines.slice(1, endIdx).join('\n'),
    body: lines.slice(endIdx + 1).join('\n'),
    lines,
    endIdx,
  };
}

function parseFrontmatter(fmStr) {
  const data = {};
  const lines = fmStr.split('\n');
  let inArray = false, arrayKey = null, arrayItems = [];
  let inFaqs = false, faqItems = [], currentFaq = null;
  let inMeta = false, metaObj = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    const topMatch = line.match(/^(\w[\w_-]*)\s*:\s*(.*)/);
    if (topMatch && !line.startsWith('  ') && !line.startsWith('\t')) {
      if (inArray && arrayKey) { data[arrayKey] = arrayItems; inArray = false; arrayKey = null; arrayItems = []; }
      if (inFaqs) { if (currentFaq) faqItems.push(currentFaq); data['faqs'] = faqItems; inFaqs = false; faqItems = []; currentFaq = null; }
      if (inMeta) { data['meta'] = metaObj; inMeta = false; metaObj = {}; }

      const key = topMatch[1], val = topMatch[2].trim();
      if (key === 'faqs' && val === '') { inFaqs = true; continue; }
      if (key === 'meta' && val === '') { inMeta = true; continue; }
      if (val === '') { inArray = true; arrayKey = key; arrayItems = []; continue; }
      data[key] = val.replace(/^["']|["']$/g, '');
      continue;
    }

    if (inMeta && line.match(/^\s{2}\w/)) {
      const metaMatch = line.match(/^\s{2}(\w+)\s*:\s*(.*)/);
      if (metaMatch) metaObj[metaMatch[1]] = metaMatch[2].trim().replace(/^["']|["']$/g, '');
      continue;
    }

    if (inArray && trimmed.startsWith('- ')) {
      arrayItems.push(trimmed.substring(2).replace(/^["']|["']$/g, ''));
      continue;
    }

    if (inFaqs) {
      if (trimmed.startsWith('- question:')) {
        if (currentFaq) faqItems.push(currentFaq);
        currentFaq = { question: trimmed.replace('- question:', '').trim().replace(/^["']|["']$/g, '') };
        continue;
      }
      if (trimmed.startsWith('question:') && line.match(/^\s{4}/)) {
        if (currentFaq) faqItems.push(currentFaq);
        currentFaq = { question: trimmed.replace('question:', '').trim().replace(/^["']|["']$/g, '') };
        continue;
      }
      if (trimmed.startsWith('answer:') && currentFaq) {
        currentFaq.answer = trimmed.replace('answer:', '').trim().replace(/^["']|["']$/g, '');
        continue;
      }
    }
  }

  if (inArray && arrayKey) data[arrayKey] = arrayItems;
  if (inFaqs) { if (currentFaq) faqItems.push(currentFaq); data['faqs'] = faqItems; }
  if (inMeta) data['meta'] = metaObj;
  return data;
}

function translateFile(content, lang) {
  // Robust line-by-line frontmatter reconstruction
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') return content;

  // Find closing ---
  let endIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') { endIdx = i; break; }
  }
  if (endIdx === -1) return content;

  const fmLines = lines.slice(1, endIdx);
  const bodyLines = lines.slice(endIdx + 1);

  // Parse frontmatter into structured blocks
  const blocks = []; // Each block: { key, lines[], type: 'simple'|'array'|'meta'|'faqs' }
  let current = null;

  for (const line of fmLines) {
    const topLevel = line.match(/^([a-z_][\w_-]*)\s*:\s*(.*)/i);
    if (topLevel && !line.startsWith(' ') && !line.startsWith('\t')) {
      if (current) blocks.push(current);
      const key = topLevel[1];
      const val = topLevel[2].trim();
      if (key === 'faqs' && val === '') {
        current = { key, lines: [line], type: 'faqs' };
      } else if (key === 'meta' && val === '') {
        current = { key, lines: [line], type: 'meta' };
      } else if (key === 'tags' && val === '' || key === 'package_sizes' && val === '' || key === 'images' && val === '') {
        current = { key, lines: [line], type: 'array' };
      } else {
        current = { key, lines: [line], type: 'simple', value: val };
      }
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) blocks.push(current);

  // Now translate each block
  const outputFmLines = [];
  for (const block of blocks) {
    switch (block.key) {
      case 'lang':
        outputFmLines.push(`lang: ${lang}`);
        break;

      case 'primary_keyword': {
        const val = block.value || '';
        outputFmLines.push(`primary_keyword: ${translateKeyword(val, lang)}`);
        break;
      }

      case 'short_description': {
        const raw = block.value || '';
        const clean = raw.replace(/^["']|["']$/g, '');
        const translated = translateText(clean, lang);
        outputFmLines.push(`short_description: "${escapeYaml(translated)}"`);
        break;
      }

      case 'tags': {
        // Collect tag items
        const tagItems = block.lines.slice(1)
          .map(l => l.trim())
          .filter(l => l.startsWith('- '))
          .map(l => l.substring(2).replace(/^["']|["']$/g, ''));
        const translatedTags = translateTags(tagItems, lang);
        outputFmLines.push('tags:');
        for (const t of translatedTags) {
          outputFmLines.push(`  - ${t}`);
        }
        break;
      }

      case 'meta': {
        // Parse meta sub-fields
        const metaFields = {};
        for (const l of block.lines.slice(1)) {
          const m = l.match(/^\s+(\w+)\s*:\s*(.*)/);
          if (m) metaFields[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
        }
        const translated = translateMeta(metaFields, lang);
        outputFmLines.push('meta:');
        outputFmLines.push(`  title: "${escapeYaml(translated.title)}"`);
        outputFmLines.push(`  description: "${escapeYaml(translated.description)}"`);
        break;
      }

      case 'faqs': {
        // Parse FAQ items
        const faqItems = [];
        let cur = null;
        for (const l of block.lines.slice(1)) {
          const trimmed = l.trim();
          if (trimmed.startsWith('- question:')) {
            if (cur) faqItems.push(cur);
            cur = { question: trimmed.replace('- question:', '').trim().replace(/^["']|["']$/g, '') };
          } else if (trimmed.startsWith('question:') && l.match(/^\s{4}/)) {
            if (cur) faqItems.push(cur);
            cur = { question: trimmed.replace('question:', '').trim().replace(/^["']|["']$/g, '') };
          } else if (trimmed.startsWith('answer:') && cur) {
            cur.answer = trimmed.replace('answer:', '').trim().replace(/^["']|["']$/g, '');
          }
        }
        if (cur) faqItems.push(cur);

        const translatedFaqs = translateFAQs(faqItems, lang);
        outputFmLines.push('faqs:');
        for (const f of translatedFaqs) {
          outputFmLines.push(`  - question: "${escapeYaml(f.question)}"`);
          outputFmLines.push(`    answer: "${escapeYaml(f.answer)}"`);
        }
        break;
      }

      default:
        // Pass through unchanged (id, title, category, form, manufacturer, package_sizes, images, moq, price, etc.)
        for (const l of block.lines) outputFmLines.push(l);
    }
  }

  // Translate body
  const body = bodyLines.join('\n');
  const translatedBody = translateText(body, lang);

  return `---\n${outputFmLines.join('\n')}\n---\n${translatedBody}`;
}

function escapeYaml(str) {
  if (!str) return '';
  // Strip outer quotes
  str = str.replace(/^["']|["']$/g, '');
  // First unescape any already-escaped quotes to avoid double-escaping
  str = str.replace(/\\"/g, '"');
  str = str.replace(/\\'/g, "'");
  // Now escape for YAML double-quoted string
  return str.replace(/"/g, '\\"');
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

async function main() {
  const targetLang = process.argv[2] || 'all';
  const langs = targetLang === 'all' ? LANGUAGES : [targetLang];

  for (const l of langs) {
    if (!LANGUAGES.includes(l)) {
      console.error(`Unknown language: ${l}. Valid: ${LANGUAGES.join(', ')}`);
      process.exit(1);
    }
  }

  const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${enFiles.length} English product files.`);

  // Sort dictionaries: longest phrases first
  for (const lang of langs) {
    if (dictionaries[lang]) {
      dictionaries[lang].sort((a, b) => b[0].length - a[0].length);
    }
  }

  for (const lang of langs) {
    const outDir = path.join(PRODUCTS_DIR, lang);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    let count = 0;
    for (const file of enFiles) {
      const enPath = path.join(EN_DIR, file);
      const content = fs.readFileSync(enPath, 'utf-8');
      try {
        const translated = translateFile(content, lang);
        fs.writeFileSync(path.join(outDir, file), translated, 'utf-8');
        count++;
      } catch (err) {
        console.error(`  Error translating ${file} to ${lang}: ${err.message}`);
      }
    }
    console.log(`  ${lang}: ${count}/${enFiles.length} files translated.`);
  }

  console.log('Done!');
}

main().catch(console.error);
