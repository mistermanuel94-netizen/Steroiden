#!/usr/bin/env node
/**
 * translate-products.mjs
 * Comprehensive translation engine for steroid product .md files.
 * Reads English source files, applies extensive phrase-level translations,
 * and writes fully localized versions for de, nl, fr, es, it, ru.
 *
 * Usage: node translate-products.mjs [lang]   (e.g. node translate-products.mjs de)
 *        node translate-products.mjs all       (all languages)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_DIR = path.join(__dirname, 'astro-steroid', 'src', 'content', 'products');
const EN_DIR = path.join(PRODUCTS_DIR, 'en');

const LANGUAGES = ['de', 'nl', 'fr', 'es', 'it', 'ru'];

// ─────────────────────────────────────────────────────────────
// TRANSLATION DICTIONARIES
// Ordered by phrase length (longest first) to avoid substring issues.
// Each entry: [english, translated]
// ─────────────────────────────────────────────────────────────

const dictionaries = {

// ═══════════════════════════════════════════════════
// GERMAN (de)
// ═══════════════════════════════════════════════════
de: [
  // ── Long marketing phrases ──
  ['Order now — trusted since 2019', 'Jetzt bestellen — vertraut seit 2019'],
  ['Order now — trusted since', 'Jetzt bestellen — vertraut seit'],
  ['Fast discreet EU shipping', 'Schneller diskreter EU-Versand'],
  ['Fast tracked EU delivery', 'Schnelle verfolgte EU-Lieferung'],
  ['Fast EU delivery', 'Schnelle EU-Lieferung'],
  ['EU tracked delivery', 'Verfolgte EU-Lieferung'],
  ['EU-wide delivery', 'EU-weite Lieferung'],
  ['EU delivery', 'EU-Lieferung'],
  ['EU Shop', 'EU-Shop'],
  ['EU shipping', 'EU-Versand'],
  ['EU range', 'EU-Sortiment'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'wird in einem diskreten Paket mit verfolgter EU-weiter Lieferung versandt'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Jede Bestellung enthält eine Chargenverifizierungsdokumentation, damit Sie die Echtheit vor Ihrer ersten Injektion bestätigen können'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over three decades', 'seit über drei Jahrzehnten vertraut von Ärzten, TRT-Patienten und Wettkampf-Bodybuildern in ganz Europa'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over', 'vertraut von Ärzten, TRT-Patienten und Wettkampf-Bodybuildern in ganz Europa seit über'],
  ['delivers unmatched value in the pharma-grade', 'bietet unübertroffenen Wert im pharmazeutischen'],
  ['Our minimum order of', 'Unsere Mindestbestellung von'],
  ['ensures you have a full cycle supply', 'stellt sicher, dass Sie einen vollständigen Zyklusvorrat haben'],
  ['the gold standard in pharmaceutical-grade testosterone', 'der Goldstandard in pharmazeutischem Testosteron'],
  ['the gold standard in pharmaceutical-grade', 'der Goldstandard in pharmazeutischem'],
  ['is the gold standard in', 'ist der Goldstandard in'],

  // ── Common product descriptions ──
  ['Hospital-grade purity, batch-verified authenticity', 'Krankenhaus-Reinheit, chargenverifizierte Echtheit'],
  ['hospital-grade purity confirmed through rigorous GMP manufacturing and batch-level quality control', 'Krankenhausreinheit bestätigt durch strenge GMP-Herstellung und chargenbasierte Qualitätskontrolle'],
  ['hospital-grade purity', 'Krankenhaus-Reinheit'],
  ['batch-verified authenticity', 'chargenverifizierte Echtheit'],
  ['pharmaceutical-grade testosterone', 'pharmazeutisches Testosteron'],
  ['pharmaceutical-grade', 'pharmazeutisch'],
  ['pharma-grade', 'Pharma-Qualität'],
  ['pharma grade', 'Pharma-Qualität'],
  ['Pharma Grade', 'Pharma-Qualität'],
  ['Genuine pharmaceutical', 'Echtes pharmazeutisches'],
  ['genuine pharmaceutical', 'echtes pharmazeutisches'],
  ['genuine pharma-grade', 'echte Pharma-Qualität'],
  ['Genuine Bayer', 'Echtes Bayer'],
  ['genuine Bayer', 'echtes Bayer'],
  ['GMP-manufactured', 'GMP-hergestellt'],
  ['GMP manufacturing', 'GMP-Herstellung'],
  ['GMP certified', 'GMP-zertifiziert'],
  ['GMP compliance', 'GMP-Konformität'],
  ['lab-verified', 'laborgeprüft'],
  ['Lab-Verified', 'Laborgeprüft'],
  ['lab tested', 'laborgetestet'],
  ['Lab tested', 'Laborgetestet'],
  ['HPLC-verified', 'HPLC-verifiziert'],
  ['batch verification documentation', 'Chargenverifizierungsdokumentation'],
  ['batch-level quality control', 'chargenbasierte Qualitätskontrolle'],
  ['hologram-sealed packaging', 'hologrammversiegelte Verpackung'],
  ['hologram seals', 'Hologrammsiegel'],
  ['traceable lot numbers', 'rückverfolgbare Chargennummern'],
  ['batch lot numbers', 'Chargen-Losnummern'],
  ['batch numbers', 'Chargennummern'],
  ['analytically tested', 'analytisch getestet'],
  ['analytical testing', 'analytische Tests'],
  ['quality assurance standards', 'Qualitätssicherungsstandards'],
  ['quality assurance', 'Qualitätssicherung'],
  ['quality-assured', 'qualitätsgesichert'],
  ['quality control', 'Qualitätskontrolle'],

  // ── Steroid / pharma terms ──
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
  ['natural testosterone', 'natürliches Testosteron'],
  ['exogenous hormones', 'exogene Hormone'],
  ['blood testosterone levels', 'Blut-Testosteronspiegel'],
  ['blood serum testosterone levels', 'Blutserum-Testosteronspiegel'],
  ['Selective androgen receptor modulators', 'Selektive Androgenrezeptor-Modulatoren'],
  ['selective androgen receptor modulator', 'selektiver Androgenrezeptor-Modulator'],
  ['Human Chorionic Gonadotropin', 'Humanes Choriongonadotropin'],
  ['Human Growth Hormone', 'Humanes Wachstumshormon'],
  ['growth hormone', 'Wachstumshormon'],
  ['Oxandrolone tablets', 'Oxandrolon-Tabletten'],
  ['Oxandrolone', 'Oxandrolon'],
  ['Oxymetholone', 'Oxymetholon'],
  ['Stanozolol', 'Stanozolol'],
  ['Methandienone', 'Methandienon'],
  ['Methenolone', 'Methenolon'],
  ['Drostanolone', 'Drostanolon'],
  ['Boldenone Undecylenate', 'Boldenon Undecylenat'],
  ['Boldenone', 'Boldenon'],
  ['Nandrolone Decanoate', 'Nandrolon Decanoat'],
  ['Nandrolone Phenylpropionate', 'Nandrolon Phenylpropionat'],
  ['Nandrolone', 'Nandrolon'],
  ['Trenbolone Acetate', 'Trenbolon Acetat'],
  ['Trenbolone Enanthate', 'Trenbolon Enantat'],
  ['Trenbolone', 'Trenbolon'],
  ['Clenbuterol', 'Clenbuterol'],
  ['Tamoxifen', 'Tamoxifen'],
  ['Clomiphene', 'Clomifen'],
  ['Sildenafil', 'Sildenafil'],
  ['Tadalafil', 'Tadalafil'],
  ['Bacteriostatic Water', 'Bakteriostatisches Wasser'],
  ['bacteriostatic water', 'bakteriostatisches Wasser'],

  // ── Body / performance terms ──
  ['lean muscle mass', 'magere Muskelmasse'],
  ['lean muscle development', 'magere Muskelentwicklung'],
  ['lean muscle', 'magere Muskulatur'],
  ['lean mass', 'Magermasse'],
  ['lean gains', 'magere Zuwächse'],
  ['muscle mass', 'Muskelmasse'],
  ['muscle pumps', 'Muskelpumps'],
  ['dry mass', 'trockene Masse'],
  ['dry gains', 'trockene Zuwächse'],
  ['strength gains', 'Kraftzuwächse'],
  ['fat loss', 'Fettverlust'],
  ['fat burning', 'Fettverbrennung'],
  ['fat-burning', 'fettverbrennend'],
  ['body composition', 'Körperzusammensetzung'],
  ['performance enhancement', 'Leistungssteigerung'],
  ['athletic performance', 'sportliche Leistung'],
  ['bulking cycles', 'Massekuren'],
  ['bulking cycle', 'Massekur'],
  ['cutting cycles', 'Definitionskuren'],
  ['cutting cycle', 'Definitionskur'],
  ['cutting protocols', 'Definitionsprotokolle'],
  ['cutting phase', 'Definitionsphase'],
  ['cutting use', 'Definitionszwecke'],
  ['steroid cycle', 'Steroidkur'],
  ['steroid cycles', 'Steroidkuren'],
  ['steroid user', 'Steroidanwender'],
  ['steroid users', 'Steroidanwender'],
  ['first steroid cycle', 'erste Steroidkur'],
  ['first-time users', 'Erstanwender'],
  ['first-time user', 'Erstanwender'],
  ['post cycle therapy', 'Post-Cycle-Therapie'],
  ['post-cycle recovery', 'Post-Cycle-Erholung'],
  ['post-cycle', 'Post-Cycle'],
  ['on-cycle', 'während des Zyklus'],
  ['side effects', 'Nebenwirkungen'],
  ['safety profile', 'Sicherheitsprofil'],
  ['well-tolerated', 'gut verträglich'],
  ['recovery between training sessions', 'Erholung zwischen Trainingseinheiten'],
  ['accelerated recovery', 'beschleunigte Erholung'],
  ['training sessions', 'Trainingseinheiten'],
  ['blood flow', 'Blutdurchblutung'],
  ['blood pressure', 'Blutdruck'],
  ['liver support', 'Leberschutz'],
  ['joint relief', 'Gelenkentlastung'],
  ['injection', 'Injektion'],
  ['injections', 'Injektionen'],
  ['inject', 'injizieren'],
  ['injectable', 'injizierbar'],
  ['oral steroid', 'orales Steroid'],
  ['oral compound', 'orale Verbindung'],
  ['anabolic steroid', 'anaboles Steroid'],
  ['anabolic steroids', 'anabole Steroide'],
  ['anabolic effects', 'anabole Effekte'],
  ['androgenic activity', 'androgene Aktivität'],
  ['androgenic', 'androgen'],
  ['virilisation', 'Virilisierung'],
  ['masculine side effects', 'männliche Nebenwirkungen'],
  ['female-friendly', 'frauenfreundlich'],
  ['female athletes', 'weibliche Athleten'],
  ['female beginners', 'weibliche Anfänger'],
  ['testosterone base', 'Testosteron-Basis'],
  ['active ingredient', 'Wirkstoff'],
  ['active compound', 'aktive Verbindung'],
  ['active pharmaceutical ingredients', 'aktive pharmazeutische Inhaltsstoffe'],
  ['long-acting ester', 'langwirkender Ester'],

  // ── FAQ / Q&A patterns ──
  ['How often do I inject', 'Wie oft injiziere ich'],
  ['How do I verify', 'Wie verifiziere ich'],
  ['Can I use', 'Kann ich verwenden'],
  ['Is it safe', 'Ist es sicher'],
  ['Why choose', 'Warum wählen'],
  ['Why is', 'Warum ist'],
  ['How can', 'Wie kann'],
  ['How does', 'Wie funktioniert'],
  ['How much', 'Wie viel'],
  ['Should I', 'Sollte ich'],
  ['What is', 'Was ist'],
  ['When should', 'Wann sollte'],
  ['Is Bayer Testoviron genuine pharmaceutical grade?', 'Ist Bayer Testoviron echte Pharma-Qualität?'],
  ['Most users inject every', 'Die meisten Anwender injizieren alle'],
  ['to maintain stable blood testosterone levels', 'um stabile Blut-Testosteronspiegel aufrechtzuerhalten'],
  ['TRT patients typically inject', 'TRT-Patienten injizieren typischerweise'],
  ['the most recommended compound for first-time users', 'die am meisten empfohlene Verbindung für Erstanwender'],
  ['due to its well-understood safety profile, predictable results, and manageable side effects', 'aufgrund seines gut verstandenen Sicherheitsprofils, vorhersehbarer Ergebnisse und beherrschbarer Nebenwirkungen'],
  ['Yes —', 'Ja —'],
  ['Yes,', 'Ja,'],
  ['Yes.', 'Ja.'],
  ['No —', 'Nein —'],
  ['No.', 'Nein.'],
  ['No,', 'Nein,'],
  ['Absolutely —', 'Absolut —'],
  ['Absolutely.', 'Absolut.'],

  // ── Site / commerce terms ──
  ['per box', 'pro Packung'],
  ['per pack', 'pro Packung'],
  ['minimum order', 'Mindestbestellung'],
  ['Buy', 'Kaufen'],
  ['buy', 'kaufen'],
  ['Shop', 'Shop'],
  ['shop', 'einkaufen'],
  ['for sale', 'zu verkaufen'],
  ['for Sale', 'zu Verkaufen'],
  ['online', 'online'],
  ['Online', 'Online'],
  ['trusted since', 'vertraut seit'],
  ['from licensed European distributors', 'von lizenzierten europäischen Distributoren'],
  ['European distributors', 'europäischen Distributoren'],
  ['underground alternative', 'Underground-Alternative'],
  ['underground alternatives', 'Underground-Alternativen'],
  ['underground labs', 'Untergrundlabore'],
  ['discreet package', 'diskretes Paket'],
  ['discreet', 'diskret'],
  ['tracked', 'verfolgt'],
  ['delivery', 'Lieferung'],
  ['Delivery', 'Lieferung'],
  ['shipping', 'Versand'],
  ['Shipping', 'Versand'],
  ['purity', 'Reinheit'],
  ['Purity', 'Reinheit'],
  ['authenticity', 'Echtheit'],
  ['Authenticity', 'Echtheit'],
  ['verification', 'Verifizierung'],
  ['manufacturer', 'Hersteller'],
  ['manufactured', 'hergestellt'],
  ['manufacturing', 'Herstellung'],

  // ── Common words / phrases ──
  ['provides', 'bietet'],
  ['delivers', 'liefert'],
  ['contains', 'enthält'],
  ['Each box contains', 'Jede Packung enthält'],
  ['At just', 'Für nur'],
  ['At this price point', 'Zu diesem Preis'],
  ['at this price point', 'zu diesem Preis'],
  ['at just', 'für nur'],
  ['Users consistently report', 'Anwender berichten durchgehend über'],
  ['significant increases in', 'signifikante Steigerungen bei'],
  ['within the first', 'innerhalb der ersten'],
  ['decades of clinical research', 'Jahrzehnte klinischer Forschung'],
  ['clinical research', 'klinische Forschung'],
  ['real-world application', 'praktische Anwendung'],
  ['competitive bodybuilders', 'Wettkampf-Bodybuilder'],
  ['bodybuilders', 'Bodybuilder'],
  ['athletes', 'Athleten'],
  ['the most widely prescribed', 'das am häufigsten verschriebene'],
  ['well-understood', 'gut verstanden'],
  ['predictable results', 'vorhersehbare Ergebnisse'],
  ['manageable', 'beherrschbar'],
  ['consistent', 'konsistent'],
  ['precisely', 'präzise'],
  ['genuine', 'echt'],
  ['Genuine', 'Echt'],
  ['premium', 'Premium'],
  ['Premium', 'Premium'],
  ['affordable', 'erschwinglich'],
  ['Affordable', 'Erschwinglich'],
  ['budget', 'Budget'],
  ['Budget', 'Budget'],
  ['economy', 'Wirtschaftlich'],
  ['extraordinary', 'außergewöhnlich'],
  ['unmatched', 'unübertroffen'],
  ['effective', 'wirksam'],
  ['Effective', 'Wirksam'],
  ['potent', 'potent'],
  ['Potent', 'Potent'],
  ['powerful', 'leistungsstark'],
  ['Powerful', 'Leistungsstark'],
  ['reliable', 'zuverlässig'],
  ['Reliable', 'Zuverlässig'],
  ['exceptional', 'außergewöhnlich'],
  ['Exceptional', 'Außergewöhnlich'],
  ['excellent', 'hervorragend'],
  ['Excellent', 'Hervorragend'],
  ['the ideal', 'die ideale'],
  ['the most', 'die/das am meisten'],
  ['Europe', 'Europa'],
  ['European', 'europäischen'],
  ['the continent', 'dem Kontinent'],
  ['good reason', 'gutem Grund'],
  ['for good reason', 'aus gutem Grund'],
  ['peace of mind', 'Seelenruhe'],

  // Region-specific
  ['UK', 'Deutschland'],
  ['United Kingdom', 'Deutschland'],
],

// ═══════════════════════════════════════════════════
// DUTCH (nl)
// ═══════════════════════════════════════════════════
nl: [
  // ── Long marketing phrases ──
  ['Order now — trusted since 2019', 'Bestel nu — vertrouwd sinds 2019'],
  ['Order now — trusted since', 'Bestel nu — vertrouwd sinds'],
  ['Fast discreet EU shipping', 'Snelle discrete EU-verzending'],
  ['Fast tracked EU delivery', 'Snelle getrackte EU-levering'],
  ['Fast EU delivery', 'Snelle EU-levering'],
  ['EU tracked delivery', 'Getrackte EU-levering'],
  ['EU-wide delivery', 'EU-brede levering'],
  ['EU delivery', 'EU-levering'],
  ['EU Shop', 'EU-Winkel'],
  ['EU shipping', 'EU-verzending'],
  ['EU range', 'EU-assortiment'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'wordt verzonden in één discreet pakket met getrackte EU-brede levering'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Elke bestelling bevat batchverificatiedocumentatie zodat u de echtheid kunt bevestigen vóór uw eerste injectie'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over three decades', 'al meer dan drie decennia vertrouwd door artsen, TRT-patiënten en wedstrijdbodybuilders in heel Europa'],
  ['delivers unmatched value in the pharma-grade', 'levert ongeëvenaarde waarde in de farma-kwaliteit'],
  ['Our minimum order of', 'Onze minimale bestelling van'],
  ['ensures you have a full cycle supply', 'zorgt ervoor dat u een volledige cyclusvoorraad heeft'],
  ['the gold standard in pharmaceutical-grade testosterone', 'de gouden standaard in farmaceutisch testosteron'],
  ['is the gold standard in', 'is de gouden standaard in'],

  // ── Common product descriptions ──
  ['Hospital-grade purity, batch-verified authenticity', 'Ziekenhuiskwaliteit zuiverheid, batchgeverifieerde echtheid'],
  ['hospital-grade purity', 'ziekenhuiskwaliteit zuiverheid'],
  ['batch-verified authenticity', 'batchgeverifieerde echtheid'],
  ['pharmaceutical-grade testosterone', 'farmaceutisch testosteron'],
  ['pharmaceutical-grade', 'farmaceutisch'],
  ['pharma-grade', 'farmakwaliteit'],
  ['pharma grade', 'farmakwaliteit'],
  ['Pharma Grade', 'Farmakwaliteit'],
  ['Genuine pharmaceutical', 'Echt farmaceutisch'],
  ['genuine pharmaceutical', 'echt farmaceutisch'],
  ['genuine pharma-grade', 'echte farmakwaliteit'],
  ['Genuine Bayer', 'Echte Bayer'],
  ['genuine Bayer', 'echte Bayer'],
  ['GMP-manufactured', 'GMP-geproduceerd'],
  ['GMP manufacturing', 'GMP-productie'],
  ['GMP certified', 'GMP-gecertificeerd'],
  ['GMP compliance', 'GMP-naleving'],
  ['lab-verified', 'labgeverifieerd'],
  ['Lab-Verified', 'Labgeverifieerd'],
  ['lab tested', 'labgetest'],
  ['Lab tested', 'Labgetest'],
  ['HPLC-verified', 'HPLC-geverifieerd'],
  ['quality assurance standards', 'kwaliteitsborgingsnormen'],
  ['quality assurance', 'kwaliteitsborging'],
  ['quality control', 'kwaliteitscontrole'],
  ['hologram-sealed packaging', 'hologramverzegelde verpakking'],
  ['hologram seals', 'hologramzegels'],
  ['traceable lot numbers', 'traceerbare lotnummers'],
  ['batch lot numbers', 'batch-lotnummers'],
  ['batch numbers', 'batchnummers'],

  // ── Steroid / pharma terms ──
  ['Testosterone Enanthate', 'Testosteron Enanthaat'],
  ['Testosterone Cypionate', 'Testosteron Cypionaat'],
  ['Testosterone Propionate', 'Testosteron Propionaat'],
  ['testosterone enanthate', 'testosteron enanthaat'],
  ['testosterone cypionate', 'testosteron cypionaat'],
  ['testosterone propionate', 'testosteron propionaat'],
  ['Testosterone Replacement Therapy', 'Testosteron Vervangende Therapie'],
  ['testosterone replacement therapy', 'testosteron vervangende therapie'],
  ['testosterone levels', 'testosteronspiegels'],
  ['testosterone production', 'testosteronproductie'],
  ['natural testosterone', 'natuurlijk testosteron'],
  ['blood testosterone levels', 'bloed testosteronspiegels'],
  ['blood serum testosterone levels', 'bloedserum testosteronspiegels'],
  ['Human Chorionic Gonadotropin', 'Humaan Choriongonadotropine'],
  ['Human Growth Hormone', 'Humaan Groeihormoon'],
  ['growth hormone', 'groeihormoon'],
  ['Oxandrolone', 'Oxandrolon'],
  ['Oxymetholone', 'Oxymetholon'],
  ['Stanozolol', 'Stanozolol'],
  ['Methandienone', 'Methandienon'],
  ['Methenolone', 'Methenolon'],
  ['Drostanolone', 'Drostanolon'],
  ['Boldenone Undecylenate', 'Boldenon Undecylenaat'],
  ['Boldenone', 'Boldenon'],
  ['Nandrolone', 'Nandrolon'],
  ['Trenbolone Acetate', 'Trenbolon Acetaat'],
  ['Trenbolone Enanthate', 'Trenbolon Enanthaat'],
  ['Trenbolone', 'Trenbolon'],
  ['Clenbuterol', 'Clenbuterol'],
  ['Tamoxifen', 'Tamoxifen'],
  ['Sildenafil', 'Sildenafil'],
  ['Tadalafil', 'Tadalafil'],
  ['Bacteriostatic Water', 'Bacteriostatisch Water'],
  ['bacteriostatic water', 'bacteriostatisch water'],

  // ── Body / performance terms ──
  ['lean muscle mass', 'magere spiermassa'],
  ['lean muscle development', 'magere spierontwikkeling'],
  ['lean muscle', 'magere spieren'],
  ['lean mass', 'magere massa'],
  ['lean gains', 'magere winst'],
  ['muscle mass', 'spiermassa'],
  ['dry mass', 'droge massa'],
  ['dry gains', 'droge winst'],
  ['strength gains', 'krachtwinst'],
  ['fat loss', 'vetverlies'],
  ['fat burning', 'vetverbranding'],
  ['fat-burning', 'vetverbrandend'],
  ['body composition', 'lichaamssamenstelling'],
  ['performance enhancement', 'prestatieverbetering'],
  ['athletic performance', 'sportieve prestatie'],
  ['bulking cycles', 'bulkcycli'],
  ['bulking cycle', 'bulkcyclus'],
  ['cutting cycles', 'snijcycli'],
  ['cutting cycle', 'snijcyclus'],
  ['cutting phase', 'snijfase'],
  ['steroid cycle', 'steroïdecyclus'],
  ['steroid cycles', 'steroïdecycli'],
  ['steroid user', 'steroïdegebruiker'],
  ['steroid users', 'steroïdegebruikers'],
  ['first steroid cycle', 'eerste steroïdecyclus'],
  ['first-time users', 'eerste gebruikers'],
  ['post cycle therapy', 'post-cyclus therapie'],
  ['post-cycle recovery', 'post-cyclus herstel'],
  ['side effects', 'bijwerkingen'],
  ['safety profile', 'veiligheidsprofiel'],
  ['well-tolerated', 'goed verdragen'],
  ['accelerated recovery', 'versneld herstel'],
  ['training sessions', 'trainingssessies'],
  ['blood flow', 'bloeddoorstroming'],
  ['blood pressure', 'bloeddruk'],
  ['liver support', 'leverondersteuning'],
  ['joint relief', 'gewrichtsverlichting'],
  ['injection', 'injectie'],
  ['injections', 'injecties'],
  ['inject', 'injecteren'],
  ['injectable', 'injecteerbaar'],
  ['oral steroid', 'oraal steroïd'],
  ['anabolic steroid', 'anabool steroïd'],
  ['anabolic steroids', 'anabole steroïden'],
  ['virilisation', 'virilisatie'],
  ['female-friendly', 'vrouwvriendelijk'],
  ['female athletes', 'vrouwelijke atleten'],
  ['female beginners', 'vrouwelijke beginners'],
  ['active ingredient', 'werkzaam bestanddeel'],

  // ── FAQ / Q&A patterns ──
  ['Yes —', 'Ja —'],
  ['Yes,', 'Ja,'],
  ['No —', 'Nee —'],
  ['No.', 'Nee.'],
  ['Absolutely —', 'Absoluut —'],
  ['Most users inject every', 'De meeste gebruikers injecteren elke'],
  ['the most recommended compound for first-time users', 'de meest aanbevolen verbinding voor eerste gebruikers'],

  // ── Site / commerce terms ──
  ['per box', 'per doos'],
  ['per pack', 'per pakket'],
  ['minimum order', 'minimale bestelling'],
  ['Buy', 'Kopen'],
  ['buy', 'kopen'],
  ['for sale', 'te koop'],
  ['online', 'online'],
  ['trusted since', 'vertrouwd sinds'],
  ['European distributors', 'Europese distributeurs'],
  ['underground alternative', 'underground alternatief'],
  ['underground alternatives', 'underground alternatieven'],
  ['underground labs', 'ondergrondse laboratoria'],
  ['discreet', 'discreet'],
  ['tracked', 'getrackt'],
  ['delivery', 'levering'],
  ['shipping', 'verzending'],
  ['purity', 'zuiverheid'],
  ['authenticity', 'echtheid'],
  ['manufacturer', 'fabrikant'],
  ['manufactured', 'geproduceerd'],
  ['manufacturing', 'productie'],
  ['provides', 'biedt'],
  ['delivers', 'levert'],
  ['contains', 'bevat'],
  ['Each box contains', 'Elke doos bevat'],
  ['At just', 'Voor slechts'],
  ['at just', 'voor slechts'],
  ['Users consistently report', 'Gebruikers rapporteren consequent'],
  ['competitive bodybuilders', 'wedstrijdbodybuilders'],
  ['bodybuilders', 'bodybuilders'],
  ['athletes', 'atleten'],
  ['genuine', 'echt'],
  ['Genuine', 'Echt'],
  ['premium', 'premium'],
  ['affordable', 'betaalbaar'],
  ['effective', 'effectief'],
  ['potent', 'krachtig'],
  ['powerful', 'krachtig'],
  ['reliable', 'betrouwbaar'],
  ['Europe', 'Europa'],
  ['European', 'Europees'],
  ['the continent', 'het continent'],
  ['good reason', 'goede reden'],
  ['peace of mind', 'gemoedsrust'],
  ['UK', 'Nederland'],
  ['United Kingdom', 'Nederland'],
],

// ═══════════════════════════════════════════════════
// FRENCH (fr)
// ═══════════════════════════════════════════════════
fr: [
  ['Order now — trusted since 2019', 'Commandez maintenant — confiance depuis 2019'],
  ['Fast discreet EU shipping', 'Livraison UE rapide et discrète'],
  ['Fast tracked EU delivery', 'Livraison UE rapide et suivie'],
  ['Fast EU delivery', 'Livraison UE rapide'],
  ['EU tracked delivery', 'Livraison UE suivie'],
  ['EU-wide delivery', 'Livraison dans toute l\'UE'],
  ['EU delivery', 'Livraison UE'],
  ['EU Shop', 'Boutique UE'],
  ['EU shipping', 'Livraison UE'],
  ['EU range', 'gamme UE'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'expédié dans un colis discret avec livraison suivie dans toute l\'UE'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Chaque commande comprend une documentation de vérification du lot pour confirmer l\'authenticité avant votre première injection'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over three decades', 'de confiance pour les cliniciens, les patients TRT et les bodybuilders compétitifs à travers l\'Europe depuis plus de trois décennies'],
  ['Our minimum order of', 'Notre commande minimale de'],
  ['the gold standard in pharmaceutical-grade testosterone', 'la référence absolue en testostérone de qualité pharmaceutique'],
  ['is the gold standard in', 'est la référence absolue en'],

  ['Hospital-grade purity, batch-verified authenticity', 'Pureté hospitalière, authenticité vérifiée par lot'],
  ['hospital-grade purity', 'pureté de qualité hospitalière'],
  ['pharmaceutical-grade', 'de qualité pharmaceutique'],
  ['pharma-grade', 'qualité pharma'],
  ['pharma grade', 'qualité pharma'],
  ['Pharma Grade', 'Qualité Pharma'],
  ['Genuine pharmaceutical', 'Véritable produit pharmaceutique'],
  ['genuine pharmaceutical', 'véritable produit pharmaceutique'],
  ['genuine pharma-grade', 'véritable qualité pharma'],
  ['Genuine Bayer', 'Véritable Bayer'],
  ['genuine Bayer', 'véritable Bayer'],
  ['GMP-manufactured', 'fabriqué selon les BPF'],
  ['GMP manufacturing', 'fabrication BPF'],
  ['GMP certified', 'certifié BPF'],
  ['GMP compliance', 'conformité BPF'],
  ['lab-verified', 'vérifié en laboratoire'],
  ['lab tested', 'testé en laboratoire'],
  ['HPLC-verified', 'vérifié par HPLC'],
  ['quality assurance', 'assurance qualité'],
  ['quality control', 'contrôle qualité'],
  ['hologram-sealed packaging', 'emballage scellé par hologramme'],
  ['hologram seals', 'sceaux holographiques'],
  ['batch numbers', 'numéros de lot'],

  ['Testosterone Enanthate', 'Testostérone Énanthate'],
  ['Testosterone Cypionate', 'Testostérone Cypionate'],
  ['Testosterone Propionate', 'Testostérone Propionate'],
  ['testosterone enanthate', 'testostérone énanthate'],
  ['Testosterone Replacement Therapy', 'Thérapie de Remplacement de la Testostérone'],
  ['testosterone replacement therapy', 'thérapie de remplacement de la testostérone'],
  ['testosterone levels', 'taux de testostérone'],
  ['testosterone production', 'production de testostérone'],
  ['natural testosterone', 'testostérone naturelle'],
  ['blood testosterone levels', 'taux de testostérone sanguins'],
  ['Human Chorionic Gonadotropin', 'Gonadotrophine Chorionique Humaine'],
  ['Human Growth Hormone', 'Hormone de Croissance Humaine'],
  ['growth hormone', 'hormone de croissance'],
  ['Oxandrolone', 'Oxandrolone'],
  ['Oxymetholone', 'Oxymétholone'],
  ['Methandienone', 'Méthandiénone'],
  ['Methenolone', 'Méthénolone'],
  ['Boldenone Undecylenate', 'Undécylénate de Boldénone'],
  ['Boldenone', 'Boldénone'],
  ['Nandrolone', 'Nandrolone'],
  ['Trenbolone Acetate', 'Acétate de Trenbolone'],
  ['Trenbolone Enanthate', 'Énanthate de Trenbolone'],
  ['Trenbolone', 'Trenbolone'],
  ['Clenbuterol', 'Clenbutérol'],
  ['Tamoxifen', 'Tamoxifène'],
  ['Bacteriostatic Water', 'Eau Bactériostatique'],
  ['bacteriostatic water', 'eau bactériostatique'],

  ['lean muscle mass', 'masse musculaire maigre'],
  ['lean muscle', 'muscle maigre'],
  ['lean mass', 'masse maigre'],
  ['lean gains', 'gains maigres'],
  ['muscle mass', 'masse musculaire'],
  ['dry mass', 'masse sèche'],
  ['strength gains', 'gains de force'],
  ['fat loss', 'perte de graisse'],
  ['fat burning', 'brûlage de graisse'],
  ['fat-burning', 'brûle-graisses'],
  ['body composition', 'composition corporelle'],
  ['performance enhancement', 'amélioration des performances'],
  ['athletic performance', 'performance athlétique'],
  ['bulking cycles', 'cycles de prise de masse'],
  ['bulking cycle', 'cycle de prise de masse'],
  ['cutting cycles', 'cycles de sèche'],
  ['cutting cycle', 'cycle de sèche'],
  ['cutting phase', 'phase de sèche'],
  ['steroid cycle', 'cycle de stéroïdes'],
  ['steroid cycles', 'cycles de stéroïdes'],
  ['steroid user', 'utilisateur de stéroïdes'],
  ['steroid users', 'utilisateurs de stéroïdes'],
  ['first-time users', 'utilisateurs débutants'],
  ['post cycle therapy', 'thérapie post-cycle'],
  ['post-cycle recovery', 'récupération post-cycle'],
  ['side effects', 'effets secondaires'],
  ['safety profile', 'profil de sécurité'],
  ['well-tolerated', 'bien toléré'],
  ['training sessions', 'séances d\'entraînement'],
  ['blood flow', 'flux sanguin'],
  ['blood pressure', 'pression artérielle'],
  ['liver support', 'protection hépatique'],
  ['joint relief', 'soulagement articulaire'],
  ['injection', 'injection'],
  ['injections', 'injections'],
  ['injectable', 'injectable'],
  ['oral steroid', 'stéroïde oral'],
  ['anabolic steroid', 'stéroïde anabolisant'],
  ['anabolic steroids', 'stéroïdes anabolisants'],
  ['virilisation', 'virilisation'],
  ['female-friendly', 'adapté aux femmes'],
  ['female athletes', 'athlètes féminines'],
  ['active ingredient', 'principe actif'],

  ['Yes —', 'Oui —'],
  ['Yes,', 'Oui,'],
  ['No —', 'Non —'],
  ['No.', 'Non.'],
  ['Absolutely —', 'Absolument —'],

  ['per box', 'par boîte'],
  ['per pack', 'par paquet'],
  ['minimum order', 'commande minimale'],
  ['Buy', 'Acheter'],
  ['buy', 'acheter'],
  ['for sale', 'en vente'],
  ['trusted since', 'confiance depuis'],
  ['European distributors', 'distributeurs européens'],
  ['underground alternative', 'alternative underground'],
  ['underground labs', 'laboratoires clandestins'],
  ['discreet', 'discret'],
  ['tracked', 'suivi'],
  ['delivery', 'livraison'],
  ['shipping', 'livraison'],
  ['purity', 'pureté'],
  ['authenticity', 'authenticité'],
  ['manufacturer', 'fabricant'],
  ['manufactured', 'fabriqué'],
  ['provides', 'fournit'],
  ['delivers', 'offre'],
  ['contains', 'contient'],
  ['Each box contains', 'Chaque boîte contient'],
  ['At just', 'À seulement'],
  ['at just', 'à seulement'],
  ['Users consistently report', 'Les utilisateurs rapportent systématiquement'],
  ['competitive bodybuilders', 'bodybuilders compétitifs'],
  ['genuine', 'véritable'],
  ['Genuine', 'Véritable'],
  ['affordable', 'abordable'],
  ['effective', 'efficace'],
  ['potent', 'puissant'],
  ['powerful', 'puissant'],
  ['reliable', 'fiable'],
  ['Europe', 'Europe'],
  ['UK', 'France'],
  ['United Kingdom', 'France'],
],

// ═══════════════════════════════════════════════════
// SPANISH (es)
// ═══════════════════════════════════════════════════
es: [
  ['Order now — trusted since 2019', 'Pedir ahora — confianza desde 2019'],
  ['Fast discreet EU shipping', 'Envío UE rápido y discreto'],
  ['Fast tracked EU delivery', 'Entrega UE rápida y rastreada'],
  ['Fast EU delivery', 'Entrega UE rápida'],
  ['EU tracked delivery', 'Entrega UE rastreada'],
  ['EU-wide delivery', 'Entrega en toda la UE'],
  ['EU delivery', 'Entrega UE'],
  ['EU Shop', 'Tienda UE'],
  ['EU shipping', 'Envío UE'],
  ['EU range', 'gama UE'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'enviado en un paquete discreto con entrega rastreada en toda la UE'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Cada pedido incluye documentación de verificación del lote para confirmar la autenticidad antes de su primera inyección'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over three decades', 'de confianza para clínicos, pacientes de TRT y fisicoculturistas competitivos en toda Europa durante más de tres décadas'],
  ['Our minimum order of', 'Nuestro pedido mínimo de'],
  ['the gold standard in pharmaceutical-grade testosterone', 'el estándar de oro en testosterona de grado farmacéutico'],
  ['is the gold standard in', 'es el estándar de oro en'],

  ['Hospital-grade purity, batch-verified authenticity', 'Pureza de grado hospitalario, autenticidad verificada por lote'],
  ['hospital-grade purity', 'pureza de grado hospitalario'],
  ['pharmaceutical-grade', 'de grado farmacéutico'],
  ['pharma-grade', 'calidad farmacéutica'],
  ['pharma grade', 'calidad farmacéutica'],
  ['Genuine pharmaceutical', 'Auténtico farmacéutico'],
  ['genuine pharmaceutical', 'auténtico farmacéutico'],
  ['Genuine Bayer', 'Auténtico Bayer'],
  ['genuine Bayer', 'auténtico Bayer'],
  ['GMP-manufactured', 'fabricado según GMP'],
  ['GMP certified', 'certificado GMP'],
  ['lab-verified', 'verificado en laboratorio'],
  ['lab tested', 'probado en laboratorio'],
  ['quality assurance', 'garantía de calidad'],
  ['quality control', 'control de calidad'],
  ['hologram-sealed packaging', 'embalaje sellado con holograma'],
  ['batch numbers', 'números de lote'],

  ['Testosterone Enanthate', 'Testosterona Enantato'],
  ['Testosterone Cypionate', 'Testosterona Cipionato'],
  ['Testosterone Propionate', 'Testosterona Propionato'],
  ['testosterone enanthate', 'testosterona enantato'],
  ['Testosterone Replacement Therapy', 'Terapia de Reemplazo de Testosterona'],
  ['testosterone replacement therapy', 'terapia de reemplazo de testosterona'],
  ['testosterone levels', 'niveles de testosterona'],
  ['testosterone production', 'producción de testosterona'],
  ['natural testosterone', 'testosterona natural'],
  ['Human Chorionic Gonadotropin', 'Gonadotropina Coriónica Humana'],
  ['Human Growth Hormone', 'Hormona del Crecimiento Humano'],
  ['growth hormone', 'hormona del crecimiento'],
  ['Oxandrolone', 'Oxandrolona'],
  ['Oxymetholone', 'Oximetolona'],
  ['Methandienone', 'Metandienona'],
  ['Methenolone', 'Metenolona'],
  ['Boldenone Undecylenate', 'Undecilenato de Boldenona'],
  ['Boldenone', 'Boldenona'],
  ['Nandrolone', 'Nandrolona'],
  ['Trenbolone Acetate', 'Acetato de Trembolona'],
  ['Trenbolone Enanthate', 'Enantato de Trembolona'],
  ['Trenbolone', 'Trembolona'],
  ['Clenbuterol', 'Clenbuterol'],
  ['Tamoxifen', 'Tamoxifeno'],
  ['Bacteriostatic Water', 'Agua Bacteriostática'],
  ['bacteriostatic water', 'agua bacteriostática'],

  ['lean muscle mass', 'masa muscular magra'],
  ['lean muscle', 'músculo magro'],
  ['lean mass', 'masa magra'],
  ['lean gains', 'ganancias magras'],
  ['muscle mass', 'masa muscular'],
  ['dry mass', 'masa seca'],
  ['strength gains', 'ganancias de fuerza'],
  ['fat loss', 'pérdida de grasa'],
  ['fat burning', 'quema de grasa'],
  ['fat-burning', 'quemagrasas'],
  ['body composition', 'composición corporal'],
  ['performance enhancement', 'mejora del rendimiento'],
  ['athletic performance', 'rendimiento atlético'],
  ['bulking cycles', 'ciclos de volumen'],
  ['bulking cycle', 'ciclo de volumen'],
  ['cutting cycles', 'ciclos de definición'],
  ['cutting cycle', 'ciclo de definición'],
  ['cutting phase', 'fase de definición'],
  ['steroid cycle', 'ciclo de esteroides'],
  ['steroid cycles', 'ciclos de esteroides'],
  ['steroid user', 'usuario de esteroides'],
  ['steroid users', 'usuarios de esteroides'],
  ['first-time users', 'usuarios principiantes'],
  ['post cycle therapy', 'terapia post-ciclo'],
  ['post-cycle recovery', 'recuperación post-ciclo'],
  ['side effects', 'efectos secundarios'],
  ['safety profile', 'perfil de seguridad'],
  ['well-tolerated', 'bien tolerado'],
  ['training sessions', 'sesiones de entrenamiento'],
  ['blood flow', 'flujo sanguíneo'],
  ['blood pressure', 'presión arterial'],
  ['liver support', 'protección hepática'],
  ['joint relief', 'alivio articular'],
  ['injection', 'inyección'],
  ['injections', 'inyecciones'],
  ['injectable', 'inyectable'],
  ['oral steroid', 'esteroide oral'],
  ['anabolic steroid', 'esteroide anabólico'],
  ['anabolic steroids', 'esteroides anabólicos'],
  ['virilisation', 'virilización'],
  ['female-friendly', 'apta para mujeres'],
  ['female athletes', 'atletas femeninas'],
  ['active ingredient', 'ingrediente activo'],

  ['Yes —', 'Sí —'],
  ['Yes,', 'Sí,'],
  ['No —', 'No —'],
  ['Absolutely —', 'Absolutamente —'],

  ['per box', 'por caja'],
  ['per pack', 'por paquete'],
  ['minimum order', 'pedido mínimo'],
  ['Buy', 'Comprar'],
  ['buy', 'comprar'],
  ['for sale', 'en venta'],
  ['trusted since', 'confianza desde'],
  ['European distributors', 'distribuidores europeos'],
  ['underground labs', 'laboratorios clandestinos'],
  ['discreet', 'discreto'],
  ['tracked', 'rastreado'],
  ['delivery', 'entrega'],
  ['shipping', 'envío'],
  ['purity', 'pureza'],
  ['authenticity', 'autenticidad'],
  ['manufacturer', 'fabricante'],
  ['manufactured', 'fabricado'],
  ['provides', 'proporciona'],
  ['delivers', 'ofrece'],
  ['contains', 'contiene'],
  ['Each box contains', 'Cada caja contiene'],
  ['At just', 'Por solo'],
  ['at just', 'por solo'],
  ['Users consistently report', 'Los usuarios informan consistentemente'],
  ['competitive bodybuilders', 'fisicoculturistas competitivos'],
  ['genuine', 'auténtico'],
  ['Genuine', 'Auténtico'],
  ['affordable', 'asequible'],
  ['effective', 'eficaz'],
  ['potent', 'potente'],
  ['powerful', 'poderoso'],
  ['reliable', 'fiable'],
  ['Europe', 'Europa'],
  ['UK', 'España'],
  ['United Kingdom', 'España'],
],

// ═══════════════════════════════════════════════════
// ITALIAN (it)
// ═══════════════════════════════════════════════════
it: [
  ['Order now — trusted since 2019', 'Ordina ora — affidabile dal 2019'],
  ['Fast discreet EU shipping', 'Spedizione UE rapida e discreta'],
  ['Fast tracked EU delivery', 'Consegna UE rapida e tracciata'],
  ['Fast EU delivery', 'Consegna UE rapida'],
  ['EU tracked delivery', 'Consegna UE tracciata'],
  ['EU-wide delivery', 'Consegna in tutta l\'UE'],
  ['EU delivery', 'Consegna UE'],
  ['EU Shop', 'Negozio UE'],
  ['EU shipping', 'Spedizione UE'],
  ['EU range', 'gamma UE'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'spedito in un pacco discreto con consegna tracciata in tutta l\'UE'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Ogni ordine include documentazione di verifica del lotto per confermare l\'autenticità prima della prima iniezione'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over three decades', 'di fiducia per medici, pazienti TRT e bodybuilder competitivi in tutta Europa da oltre tre decenni'],
  ['Our minimum order of', 'Il nostro ordine minimo di'],
  ['the gold standard in pharmaceutical-grade testosterone', 'il gold standard nel testosterone di grado farmaceutico'],
  ['is the gold standard in', 'è il gold standard nel'],

  ['Hospital-grade purity, batch-verified authenticity', 'Purezza di grado ospedaliero, autenticità verificata per lotto'],
  ['hospital-grade purity', 'purezza di grado ospedaliero'],
  ['pharmaceutical-grade', 'di grado farmaceutico'],
  ['pharma-grade', 'qualità farmaceutica'],
  ['pharma grade', 'qualità farmaceutica'],
  ['Genuine pharmaceutical', 'Autentico farmaceutico'],
  ['genuine pharmaceutical', 'autentico farmaceutico'],
  ['Genuine Bayer', 'Autentico Bayer'],
  ['genuine Bayer', 'autentico Bayer'],
  ['GMP-manufactured', 'prodotto secondo GMP'],
  ['GMP certified', 'certificato GMP'],
  ['lab-verified', 'verificato in laboratorio'],
  ['lab tested', 'testato in laboratorio'],
  ['quality assurance', 'garanzia di qualità'],
  ['quality control', 'controllo qualità'],
  ['hologram-sealed packaging', 'confezione sigillata con ologramma'],
  ['batch numbers', 'numeri di lotto'],

  ['Testosterone Enanthate', 'Testosterone Enantato'],
  ['Testosterone Cypionate', 'Testosterone Cipionato'],
  ['Testosterone Propionate', 'Testosterone Propionato'],
  ['testosterone enanthate', 'testosterone enantato'],
  ['Testosterone Replacement Therapy', 'Terapia Sostitutiva del Testosterone'],
  ['testosterone replacement therapy', 'terapia sostitutiva del testosterone'],
  ['testosterone levels', 'livelli di testosterone'],
  ['testosterone production', 'produzione di testosterone'],
  ['natural testosterone', 'testosterone naturale'],
  ['Human Chorionic Gonadotropin', 'Gonadotropina Corionica Umana'],
  ['Human Growth Hormone', 'Ormone della Crescita Umano'],
  ['growth hormone', 'ormone della crescita'],
  ['Oxandrolone', 'Oxandrolone'],
  ['Oxymetholone', 'Ossimetolone'],
  ['Methandienone', 'Metandienone'],
  ['Methenolone', 'Metenolone'],
  ['Boldenone Undecylenate', 'Boldenone Undecylenato'],
  ['Boldenone', 'Boldenone'],
  ['Nandrolone', 'Nandrolone'],
  ['Trenbolone Acetate', 'Trenbolone Acetato'],
  ['Trenbolone Enanthate', 'Trenbolone Enantato'],
  ['Trenbolone', 'Trenbolone'],
  ['Clenbuterol', 'Clenbuterolo'],
  ['Tamoxifen', 'Tamoxifene'],
  ['Bacteriostatic Water', 'Acqua Batteriostatica'],
  ['bacteriostatic water', 'acqua batteriostatica'],

  ['lean muscle mass', 'massa muscolare magra'],
  ['lean muscle', 'muscolo magro'],
  ['lean mass', 'massa magra'],
  ['lean gains', 'guadagni magri'],
  ['muscle mass', 'massa muscolare'],
  ['dry mass', 'massa asciutta'],
  ['strength gains', 'guadagni di forza'],
  ['fat loss', 'perdita di grasso'],
  ['fat burning', 'bruciare grassi'],
  ['fat-burning', 'brucia-grassi'],
  ['body composition', 'composizione corporea'],
  ['performance enhancement', 'miglioramento delle prestazioni'],
  ['athletic performance', 'prestazione atletica'],
  ['bulking cycles', 'cicli di massa'],
  ['bulking cycle', 'ciclo di massa'],
  ['cutting cycles', 'cicli di definizione'],
  ['cutting cycle', 'ciclo di definizione'],
  ['cutting phase', 'fase di definizione'],
  ['steroid cycle', 'ciclo di steroidi'],
  ['steroid cycles', 'cicli di steroidi'],
  ['steroid user', 'utilizzatore di steroidi'],
  ['steroid users', 'utilizzatori di steroidi'],
  ['first-time users', 'utilizzatori principianti'],
  ['post cycle therapy', 'terapia post-ciclo'],
  ['post-cycle recovery', 'recupero post-ciclo'],
  ['side effects', 'effetti collaterali'],
  ['safety profile', 'profilo di sicurezza'],
  ['well-tolerated', 'ben tollerato'],
  ['training sessions', 'sessioni di allenamento'],
  ['blood flow', 'flusso sanguigno'],
  ['blood pressure', 'pressione sanguigna'],
  ['liver support', 'protezione epatica'],
  ['joint relief', 'sollievo articolare'],
  ['injection', 'iniezione'],
  ['injections', 'iniezioni'],
  ['injectable', 'iniettabile'],
  ['oral steroid', 'steroide orale'],
  ['anabolic steroid', 'steroide anabolizzante'],
  ['anabolic steroids', 'steroidi anabolizzanti'],
  ['virilisation', 'virilizzazione'],
  ['female-friendly', 'adatto alle donne'],
  ['female athletes', 'atlete femminili'],
  ['active ingredient', 'principio attivo'],

  ['Yes —', 'Sì —'],
  ['Yes,', 'Sì,'],
  ['No —', 'No —'],
  ['Absolutely —', 'Assolutamente —'],

  ['per box', 'per scatola'],
  ['per pack', 'per confezione'],
  ['minimum order', 'ordine minimo'],
  ['Buy', 'Acquistare'],
  ['buy', 'acquistare'],
  ['for sale', 'in vendita'],
  ['trusted since', 'affidabile dal'],
  ['European distributors', 'distributori europei'],
  ['underground labs', 'laboratori clandestini'],
  ['discreet', 'discreto'],
  ['tracked', 'tracciato'],
  ['delivery', 'consegna'],
  ['shipping', 'spedizione'],
  ['purity', 'purezza'],
  ['authenticity', 'autenticità'],
  ['manufacturer', 'produttore'],
  ['manufactured', 'prodotto'],
  ['provides', 'fornisce'],
  ['delivers', 'offre'],
  ['contains', 'contiene'],
  ['Each box contains', 'Ogni scatola contiene'],
  ['At just', 'A soli'],
  ['at just', 'a soli'],
  ['Users consistently report', 'Gli utenti riportano costantemente'],
  ['competitive bodybuilders', 'bodybuilder competitivi'],
  ['genuine', 'autentico'],
  ['Genuine', 'Autentico'],
  ['affordable', 'accessibile'],
  ['effective', 'efficace'],
  ['potent', 'potente'],
  ['powerful', 'potente'],
  ['reliable', 'affidabile'],
  ['Europe', 'Europa'],
  ['UK', 'Italia'],
  ['United Kingdom', 'Italia'],
],

// ═══════════════════════════════════════════════════
// RUSSIAN (ru)
// ═══════════════════════════════════════════════════
ru: [
  ['Order now — trusted since 2019', 'Закажите сейчас — доверие с 2019 года'],
  ['Fast discreet EU shipping', 'Быстрая дискретная доставка по ЕС'],
  ['Fast tracked EU delivery', 'Быстрая отслеживаемая доставка по ЕС'],
  ['Fast EU delivery', 'Быстрая доставка по ЕС'],
  ['EU tracked delivery', 'Отслеживаемая доставка по ЕС'],
  ['EU-wide delivery', 'Доставка по всему ЕС'],
  ['EU delivery', 'Доставка по ЕС'],
  ['EU Shop', 'Магазин ЕС'],
  ['EU shipping', 'Доставка по ЕС'],
  ['EU range', 'ассортимент ЕС'],
  ['shipped under one discreet package with tracked EU-wide delivery', 'отправляется в дискретной упаковке с отслеживаемой доставкой по всему ЕС'],
  ['Every order includes batch verification documentation so you can confirm authenticity before your first injection', 'Каждый заказ включает документацию для проверки партии, чтобы вы могли подтвердить подлинность перед первой инъекцией'],
  ['trusted by clinicians, TRT patients, and competitive bodybuilders across Europe for over three decades', 'пользуется доверием врачей, пациентов ЗГТ и соревновательных бодибилдеров по всей Европе более трёх десятилетий'],
  ['Our minimum order of', 'Наш минимальный заказ от'],
  ['the gold standard in pharmaceutical-grade testosterone', 'золотой стандарт фармацевтического тестостерона'],
  ['is the gold standard in', 'является золотым стандартом в'],

  ['Hospital-grade purity, batch-verified authenticity', 'Больничная чистота, подлинность подтверждена партией'],
  ['hospital-grade purity', 'больничная чистота'],
  ['pharmaceutical-grade', 'фармацевтического качества'],
  ['pharma-grade', 'фарма-качества'],
  ['pharma grade', 'фарма-качества'],
  ['Genuine pharmaceutical', 'Подлинный фармацевтический'],
  ['genuine pharmaceutical', 'подлинный фармацевтический'],
  ['Genuine Bayer', 'Подлинный Bayer'],
  ['genuine Bayer', 'подлинный Bayer'],
  ['GMP-manufactured', 'произведённый по GMP'],
  ['GMP certified', 'сертифицирован GMP'],
  ['lab-verified', 'проверенный в лаборатории'],
  ['lab tested', 'лабораторно протестирован'],
  ['quality assurance', 'обеспечение качества'],
  ['quality control', 'контроль качества'],
  ['hologram-sealed packaging', 'упаковка с голографической защитой'],
  ['batch numbers', 'номера партий'],

  ['Testosterone Enanthate', 'Тестостерон Энантат'],
  ['Testosterone Cypionate', 'Тестостерон Ципионат'],
  ['Testosterone Propionate', 'Тестостерон Пропионат'],
  ['testosterone enanthate', 'тестостерон энантат'],
  ['Testosterone Replacement Therapy', 'Заместительная Гормональная Терапия'],
  ['testosterone replacement therapy', 'заместительная гормональная терапия'],
  ['testosterone levels', 'уровень тестостерона'],
  ['testosterone production', 'выработка тестостерона'],
  ['natural testosterone', 'естественный тестостерон'],
  ['Human Chorionic Gonadotropin', 'Хорионический Гонадотропин Человека'],
  ['Human Growth Hormone', 'Гормон Роста Человека'],
  ['growth hormone', 'гормон роста'],
  ['Oxandrolone', 'Оксандролон'],
  ['Oxymetholone', 'Оксиметолон'],
  ['Stanozolol', 'Станозолол'],
  ['Methandienone', 'Метандиенон'],
  ['Methenolone', 'Метенолон'],
  ['Drostanolone', 'Дростанолон'],
  ['Boldenone Undecylenate', 'Болденон Ундецеленат'],
  ['Boldenone', 'Болденон'],
  ['Nandrolone', 'Нандролон'],
  ['Trenbolone Acetate', 'Тренболон Ацетат'],
  ['Trenbolone Enanthate', 'Тренболон Энантат'],
  ['Trenbolone', 'Тренболон'],
  ['Clenbuterol', 'Кленбутерол'],
  ['Tamoxifen', 'Тамоксифен'],
  ['Sildenafil', 'Силденафил'],
  ['Tadalafil', 'Тадалафил'],
  ['Bacteriostatic Water', 'Бактериостатическая Вода'],
  ['bacteriostatic water', 'бактериостатическая вода'],

  ['lean muscle mass', 'сухая мышечная масса'],
  ['lean muscle', 'сухая мышечная масса'],
  ['lean mass', 'сухая масса'],
  ['lean gains', 'сухие результаты'],
  ['muscle mass', 'мышечная масса'],
  ['dry mass', 'сухая масса'],
  ['strength gains', 'прирост силы'],
  ['fat loss', 'потеря жира'],
  ['fat burning', 'жиросжигание'],
  ['fat-burning', 'жиросжигающий'],
  ['body composition', 'состав тела'],
  ['performance enhancement', 'повышение производительности'],
  ['athletic performance', 'спортивные результаты'],
  ['bulking cycles', 'массонаборные курсы'],
  ['bulking cycle', 'массонаборный курс'],
  ['cutting cycles', 'курсы сушки'],
  ['cutting cycle', 'курс сушки'],
  ['cutting phase', 'фаза сушки'],
  ['steroid cycle', 'курс стероидов'],
  ['steroid cycles', 'курсы стероидов'],
  ['steroid user', 'пользователь стероидов'],
  ['steroid users', 'пользователи стероидов'],
  ['first-time users', 'начинающие пользователи'],
  ['post cycle therapy', 'послекурсовая терапия'],
  ['post-cycle recovery', 'восстановление после курса'],
  ['side effects', 'побочные эффекты'],
  ['safety profile', 'профиль безопасности'],
  ['well-tolerated', 'хорошо переносимый'],
  ['training sessions', 'тренировочные сессии'],
  ['blood flow', 'кровоток'],
  ['blood pressure', 'артериальное давление'],
  ['liver support', 'защита печени'],
  ['joint relief', 'облегчение суставов'],
  ['injection', 'инъекция'],
  ['injections', 'инъекции'],
  ['injectable', 'инъекционный'],
  ['oral steroid', 'оральный стероид'],
  ['anabolic steroid', 'анаболический стероид'],
  ['anabolic steroids', 'анаболические стероиды'],
  ['virilisation', 'вирилизация'],
  ['female-friendly', 'подходит для женщин'],
  ['female athletes', 'женщины-спортсменки'],
  ['active ingredient', 'действующее вещество'],

  ['Yes —', 'Да —'],
  ['Yes,', 'Да,'],
  ['No —', 'Нет —'],
  ['No.', 'Нет.'],
  ['Absolutely —', 'Безусловно —'],

  ['per box', 'за упаковку'],
  ['per pack', 'за упаковку'],
  ['minimum order', 'минимальный заказ'],
  ['Buy', 'Купить'],
  ['buy', 'купить'],
  ['for sale', 'в продаже'],
  ['trusted since', 'доверие с'],
  ['European distributors', 'европейских дистрибьюторов'],
  ['underground labs', 'подпольные лаборатории'],
  ['discreet', 'дискретный'],
  ['tracked', 'отслеживаемый'],
  ['delivery', 'доставка'],
  ['shipping', 'доставка'],
  ['purity', 'чистота'],
  ['authenticity', 'подлинность'],
  ['manufacturer', 'производитель'],
  ['manufactured', 'произведённый'],
  ['provides', 'обеспечивает'],
  ['delivers', 'предоставляет'],
  ['contains', 'содержит'],
  ['Each box contains', 'Каждая упаковка содержит'],
  ['At just', 'Всего за'],
  ['at just', 'всего за'],
  ['Users consistently report', 'Пользователи стабильно отмечают'],
  ['competitive bodybuilders', 'соревновательные бодибилдеры'],
  ['genuine', 'подлинный'],
  ['Genuine', 'Подлинный'],
  ['affordable', 'доступный'],
  ['effective', 'эффективный'],
  ['potent', 'мощный'],
  ['powerful', 'мощный'],
  ['reliable', 'надёжный'],
  ['Europe', 'Европа'],
  ['European', 'европейский'],
  ['UK', 'Россия'],
  ['United Kingdom', 'Россия'],
],

}; // end dictionaries


// ─────────────────────────────────────────────────────────────
// "BUY" KEYWORD TRANSLATIONS (for primary_keyword field)
// ─────────────────────────────────────────────────────────────
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

const cheapWords = {
  de: 'günstige', nl: 'goedkope', fr: 'pas cher', es: 'barato', it: 'economico', ru: 'дешевый'
};

const metaPhrases = {
  de: { 'Buy': 'Kaufen', 'Genuine': 'Echtes', 'Pharma-Grade': 'Pharma-Qualität', 'EU Delivery': 'EU-Lieferung', 'EU Shop': 'EU-Shop', 'purity': 'Reinheit', 'Fast discreet EU shipping': 'Schneller diskreter EU-Versand', 'Order now': 'Jetzt bestellen', 'trusted since': 'vertraut seit' },
  nl: { 'Buy': 'Kopen', 'Genuine': 'Echte', 'Pharma-Grade': 'Farmakwaliteit', 'EU Delivery': 'EU-Levering', 'EU Shop': 'EU-Winkel', 'purity': 'zuiverheid', 'Fast discreet EU shipping': 'Snelle discrete EU-verzending', 'Order now': 'Bestel nu', 'trusted since': 'vertrouwd sinds' },
  fr: { 'Buy': 'Acheter', 'Genuine': 'Véritable', 'Pharma-Grade': 'Qualité Pharma', 'EU Delivery': 'Livraison UE', 'EU Shop': 'Boutique UE', 'purity': 'pureté', 'Fast discreet EU shipping': 'Livraison UE rapide et discrète', 'Order now': 'Commandez maintenant', 'trusted since': 'confiance depuis' },
  es: { 'Buy': 'Comprar', 'Genuine': 'Auténtico', 'Pharma-Grade': 'Calidad Farmacéutica', 'EU Delivery': 'Entrega UE', 'EU Shop': 'Tienda UE', 'purity': 'pureza', 'Fast discreet EU shipping': 'Envío UE rápido y discreto', 'Order now': 'Pedir ahora', 'trusted since': 'confianza desde' },
  it: { 'Buy': 'Acquistare', 'Genuine': 'Autentico', 'Pharma-Grade': 'Qualità Farmaceutica', 'EU Delivery': 'Consegna UE', 'EU Shop': 'Negozio UE', 'purity': 'purezza', 'Fast discreet EU shipping': 'Spedizione UE rapida e discreta', 'Order now': 'Ordina ora', 'trusted since': 'affidabile dal' },
  ru: { 'Buy': 'Купить', 'Genuine': 'Подлинный', 'Pharma-Grade': 'Фарма-Качества', 'EU Delivery': 'Доставка по ЕС', 'EU Shop': 'Магазин ЕС', 'purity': 'чистота', 'Fast discreet EU shipping': 'Быстрая дискретная доставка по ЕС', 'Order now': 'Закажите сейчас', 'trusted since': 'доверие с' },
};

// ─────────────────────────────────────────────────────────────
// TRANSLATION ENGINE
// ─────────────────────────────────────────────────────────────

/**
 * Apply dictionary-based translation to a block of text.
 * Longer phrases are applied first (dictionaries are pre-sorted).
 */
function translateText(text, lang) {
  if (!text || !dictionaries[lang]) return text;
  let result = text;
  for (const [en, localized] of dictionaries[lang]) {
    // Use word-boundary-aware replacement to avoid partial word matches
    // But for multi-word phrases, use simple global replace
    if (en.includes(' ') || en.length > 6) {
      // Multi-word phrase or long word: use simple string replace
      result = replaceAll(result, en, localized);
    } else {
      // Short word: use regex with word boundaries to avoid partial matches
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

function replaceAll(str, search, replacement) {
  let result = str;
  let idx = result.indexOf(search);
  while (idx !== -1) {
    result = result.substring(0, idx) + replacement + result.substring(idx + search.length);
    idx = result.indexOf(search, idx + replacement.length);
  }
  return result;
}

/**
 * Translate the primary_keyword field
 */
function translateKeyword(keyword, lang) {
  if (!keyword) return keyword;
  let result = keyword;
  // Replace "buy" / "cheap" / "cheapest"
  result = result.replace(/\bbuy\b/gi, buyWords[lang] || 'buy');
  result = result.replace(/\bcheapest?\b/gi, cheapWords[lang] || 'cheap');
  // Replace regions
  const regions = regionMap[lang] || {};
  for (const [en, loc] of Object.entries(regions)) {
    result = replaceAll(result, en, loc);
  }
  return result;
}

/**
 * Translate tags array
 */
function translateTags(tags, lang) {
  if (!tags || !Array.isArray(tags)) return tags;
  return tags.map(tag => {
    let t = tag;
    // Replace buy/cheap
    t = t.replace(/\bbuy\b/gi, buyWords[lang]);
    t = t.replace(/\bcheapest?\b/gi, cheapWords[lang]);
    // Replace regions
    const regions = regionMap[lang] || {};
    for (const [en, loc] of Object.entries(regions)) {
      t = replaceAll(t, en, loc);
    }
    // Apply dictionary for pharma terms
    t = translateText(t, lang);
    return t;
  });
}

/**
 * Translate meta title and description
 */
function translateMeta(meta, lang) {
  if (!meta) return meta;
  let title = meta.title || '';
  let desc = meta.description || '';

  // Apply meta-specific phrases first
  const phrases = metaPhrases[lang] || {};
  for (const [en, loc] of Object.entries(phrases)) {
    title = replaceAll(title, en, loc);
    desc = replaceAll(desc, en, loc);
  }

  // Apply general dictionary
  title = translateText(title, lang);
  desc = translateText(desc, lang);

  return { title, description: desc };
}

/**
 * Translate FAQs array
 */
function translateFAQs(faqs, lang) {
  if (!faqs || !Array.isArray(faqs)) return faqs;
  return faqs.map(faq => ({
    question: translateText(faq.question, lang),
    answer: translateText(faq.answer, lang),
  }));
}

// ─────────────────────────────────────────────────────────────
// FILE PARSING & WRITING
// ─────────────────────────────────────────────────────────────

function parseMarkdownFile(content) {
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') {
    return { frontmatter: '', body: content, raw: content };
  }

  let endIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      endIdx = i;
      break;
    }
  }

  if (endIdx === -1) {
    return { frontmatter: '', body: content, raw: content };
  }

  const frontmatterStr = lines.slice(1, endIdx).join('\n');
  const body = lines.slice(endIdx + 1).join('\n');

  return { frontmatterStr, body, lines, endIdx };
}

/**
 * Parse YAML frontmatter manually — simpler than a full YAML parser.
 * Returns an object with key fields and the ability to reconstruct.
 */
function parseFrontmatter(fmStr) {
  const data = {};
  const lines = fmStr.split('\n');
  let currentKey = null;
  let currentValue = '';
  let inArray = false;
  let arrayKey = null;
  let arrayItems = [];
  let inFaqs = false;
  let faqItems = [];
  let currentFaq = null;
  let inMeta = false;
  let metaObj = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) continue;

    // Check for top-level key
    const topMatch = line.match(/^(\w[\w_-]*)\s*:\s*(.*)/);
    if (topMatch && !line.startsWith('  ') && !line.startsWith('\t')) {
      // save previous state
      if (inArray && arrayKey) {
        data[arrayKey] = arrayItems;
        inArray = false;
        arrayKey = null;
        arrayItems = [];
      }
      if (inFaqs) {
        if (currentFaq) faqItems.push(currentFaq);
        data['faqs'] = faqItems;
        inFaqs = false;
        faqItems = [];
        currentFaq = null;
      }
      if (inMeta) {
        data['meta'] = metaObj;
        inMeta = false;
        metaObj = {};
      }

      const key = topMatch[1];
      const val = topMatch[2].trim();

      if (key === 'faqs' && val === '') {
        inFaqs = true;
        continue;
      }
      if (key === 'meta' && val === '') {
        inMeta = true;
        continue;
      }
      if (val === '') {
        // Could be array start or nested object
        inArray = true;
        arrayKey = key;
        arrayItems = [];
        continue;
      }

      // Scalar value
      data[key] = val.replace(/^["']|["']$/g, '');
      continue;
    }

    // Handle meta sub-keys
    if (inMeta && line.match(/^\s{2}\w/)) {
      const metaMatch = line.match(/^\s{2}(\w+)\s*:\s*(.*)/);
      if (metaMatch) {
        metaObj[metaMatch[1]] = metaMatch[2].trim().replace(/^["']|["']$/g, '');
      }
      continue;
    }

    // Handle array items
    if (inArray && trimmed.startsWith('- ')) {
      arrayItems.push(trimmed.substring(2).replace(/^["']|["']$/g, ''));
      continue;
    }

    // Handle FAQ items
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

  // Finalize pending state
  if (inArray && arrayKey) data[arrayKey] = arrayItems;
  if (inFaqs) {
    if (currentFaq) faqItems.push(currentFaq);
    data['faqs'] = faqItems;
  }
  if (inMeta) data['meta'] = metaObj;

  return data;
}

/**
 * Reconstruct the frontmatter from existing file content with translated fields.
 * Instead of rebuilding from scratch, we do targeted string replacements.
 */
function translateFile(content, lang) {
  const { frontmatterStr, body, lines, endIdx } = parseMarkdownFile(content);
  if (!frontmatterStr) return content;

  const data = parseFrontmatter(frontmatterStr);

  // Build the translated frontmatter by doing string replacements on the original
  let fm = frontmatterStr;

  // Replace lang field
  fm = fm.replace(/^lang:\s*.+$/m, `lang: ${lang}`);

  // Translate title
  if (data.title) {
    const translatedTitle = translateText(data.title, lang);
    fm = fm.replace(/^title:\s*.+$/m, `title: "${escapeYaml(translatedTitle)}"`);
  }

  // Translate primary_keyword
  if (data.primary_keyword) {
    const translatedKw = translateKeyword(data.primary_keyword, lang);
    fm = fm.replace(/^primary_keyword:\s*.+$/m, `primary_keyword: ${translatedKw}`);
  }

  // Translate short_description
  if (data.short_description) {
    const translatedDesc = translateText(data.short_description, lang);
    fm = fm.replace(/^short_description:\s*.+$/m, `short_description: "${escapeYaml(translatedDesc)}"`);
  }

  // Translate tags - rebuild the tags section
  if (data.tags && data.tags.length > 0) {
    const translatedTags = translateTags(data.tags, lang);
    const tagsSection = 'tags:\n' + translatedTags.map(t => `  - ${t}`).join('\n');
    fm = fm.replace(/^tags:\n(?:\s+-\s+.+\n?)+/m, tagsSection + '\n');
  }

  // Translate meta - rebuild meta section
  if (data.meta) {
    const translatedMeta = translateMeta(data.meta, lang);
    const metaSection = `meta:\n  title: "${escapeYaml(translatedMeta.title)}"\n  description: ${escapeYaml(translatedMeta.description)}`;
    fm = fm.replace(/^meta:\n(?:\s+\w+:\s+.+\n?)+/m, metaSection + '\n');
  }

  // Translate FAQs - rebuild faqs section
  if (data.faqs && data.faqs.length > 0) {
    const translatedFaqs = translateFAQs(data.faqs, lang);
    const faqLines = translatedFaqs.map(f =>
      `  - question: "${escapeYaml(f.question)}"\n    answer: "${escapeYaml(f.answer)}"`
    ).join('\n');
    const faqSection = `faqs:\n${faqLines}`;
    fm = fm.replace(/^faqs:\n(?:\s+-\s+\w+:[\s\S]*?)(?=^[a-z]|\n---)/m, faqSection + '\n');
    // Fallback: try simpler regex
    if (fm.includes('faqs:') && !fm.includes(faqSection)) {
      // Replace from 'faqs:' to the next top-level key or end
      const faqStart = fm.indexOf('faqs:');
      // Find next top-level key after faqs
      const afterFaqs = fm.substring(faqStart + 5);
      const nextKeyMatch = afterFaqs.match(/\n[a-z]/);
      if (nextKeyMatch) {
        const faqEnd = faqStart + 5 + nextKeyMatch.index;
        fm = fm.substring(0, faqStart) + faqSection + '\n' + fm.substring(faqEnd + 1);
      } else {
        // faqs is the last section
        fm = fm.substring(0, faqStart) + faqSection;
      }
    }
  }

  // Translate body content
  const translatedBody = translateText(body, lang);

  return `---\n${fm}\n---\n${translatedBody}`;
}

function escapeYaml(str) {
  if (!str) return '';
  // Remove existing quotes if present
  str = str.replace(/^["']|["']$/g, '');
  // Escape internal double quotes
  return str.replace(/"/g, '\\"');
}

// ─────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────

async function main() {
  const targetLang = process.argv[2] || 'all';
  const langs = targetLang === 'all' ? LANGUAGES : [targetLang];

  // Validate languages
  for (const l of langs) {
    if (!LANGUAGES.includes(l)) {
      console.error(`Unknown language: ${l}. Valid: ${LANGUAGES.join(', ')}`);
      process.exit(1);
    }
  }

  // Read all English files
  const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${enFiles.length} English product files.`);

  // Sort dictionaries by phrase length (longest first)
  for (const lang of langs) {
    if (dictionaries[lang]) {
      dictionaries[lang].sort((a, b) => b[0].length - a[0].length);
    }
  }

  for (const lang of langs) {
    const outDir = path.join(PRODUCTS_DIR, lang);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    let count = 0;
    for (const file of enFiles) {
      const enPath = path.join(EN_DIR, file);
      const content = fs.readFileSync(enPath, 'utf-8');

      try {
        const translated = translateFile(content, lang);
        const outPath = path.join(outDir, file);
        fs.writeFileSync(outPath, translated, 'utf-8');
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
