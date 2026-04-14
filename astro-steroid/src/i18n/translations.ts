// Translation strings for all supported languages
// Languages: English (en), Dutch (nl), German (de), French (fr), Spanish (es), Italian (it), Russian (ru)

export type SupportedLanguage = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'it' | 'ru';

export const languages: Record<SupportedLanguage, string> = {
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
};

export const supportedLanguages = Object.keys(languages) as SupportedLanguage[];

export const languageFlags: Record<SupportedLanguage, string> = {
  en: '🇬🇧',
  nl: '🇳🇱',
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  ru: '🇷🇺',
};

export const defaultLang: SupportedLanguage = 'en';

// Maps English slugs to localized slugs
export const productSlugTranslations: Record<SupportedLanguage, Record<string, string>> = {
  en: {},
  nl: {},
  de: {},
  fr: {},
  es: {},
  it: {},
  ru: {},
};

// Maps English page slugs to localized page slugs
export const pageSlugTranslations: Record<SupportedLanguage, Record<string, string>> = {
  en: {},
  nl: {
    'quality': 'kwaliteit',
    'shipping': 'verzending',
    'terms': 'voorwaarden',
    'privacy': 'privacy',
    'disclaimer': 'disclaimer',
    'coa-policy': 'coa-beleid',
    'blog': 'blog',
    'learn': 'leren',
    'what-are-steroids': 'wat-zijn-steroiden',
    'bundles': 'bundels',
    'wholesale': 'groothandel',
    'about': 'over-ons',
    'contact': 'contact',
    'faq': 'veelgestelde-vragen',
    'shop': 'winkel',
    'cart': 'winkelwagen',
    'checkout': 'afrekenen',
    'sitemap': 'sitemap',
  },
  de: {
    'quality': 'qualitaet',
    'shipping': 'versand',
    'terms': 'agb',
    'privacy': 'datenschutz',
    'disclaimer': 'haftungsausschluss',
    'coa-policy': 'coa-richtlinie',
    'blog': 'blog',
    'learn': 'lernen',
    'what-are-steroids': 'was-sind-steroide',
    'bundles': 'bundles',
    'wholesale': 'grosshandel',
    'about': 'ueber-uns',
    'contact': 'kontakt',
    'faq': 'haeufige-fragen',
    'shop': 'shop',
    'cart': 'warenkorb',
    'checkout': 'kasse',
    'sitemap': 'sitemap',
  },
  fr: {
    'quality': 'qualite',
    'shipping': 'livraison',
    'terms': 'conditions',
    'privacy': 'confidentialite',
    'disclaimer': 'avertissement',
    'coa-policy': 'politique-coa',
    'blog': 'blog',
    'learn': 'apprendre',
    'what-are-steroids': 'que-sont-les-steroides',
    'bundles': 'lots',
    'wholesale': 'grossiste',
    'about': 'a-propos',
    'contact': 'contact',
    'faq': 'faq',
    'shop': 'boutique',
    'cart': 'panier',
    'checkout': 'paiement',
    'sitemap': 'plan-du-site',
  },
  es: {
    'quality': 'calidad',
    'shipping': 'envio',
    'terms': 'terminos',
    'privacy': 'privacidad',
    'disclaimer': 'descargo',
    'coa-policy': 'politica-coa',
    'blog': 'blog',
    'learn': 'aprender',
    'what-are-steroids': 'que-son-los-esteroides',
    'bundles': 'paquetes',
    'wholesale': 'mayorista',
    'about': 'sobre-nosotros',
    'contact': 'contacto',
    'faq': 'preguntas-frecuentes',
    'shop': 'tienda',
    'cart': 'carrito',
    'checkout': 'pago',
    'sitemap': 'mapa-del-sitio',
  },
  it: {
    'quality': 'qualita',
    'shipping': 'spedizione',
    'terms': 'termini',
    'privacy': 'privacy',
    'disclaimer': 'disclaimer',
    'coa-policy': 'politica-coa',
    'blog': 'blog',
    'learn': 'imparare',
    'what-are-steroids': 'cosa-sono-gli-steroidi',
    'bundles': 'pacchetti',
    'wholesale': 'ingrosso',
    'about': 'chi-siamo',
    'contact': 'contatti',
    'faq': 'domande-frequenti',
    'shop': 'negozio',
    'cart': 'carrello',
    'checkout': 'cassa',
    'sitemap': 'mappa-del-sito',
  },
  ru: {
    'quality': 'kachestvo',
    'shipping': 'dostavka',
    'terms': 'usloviya',
    'privacy': 'konfidentsialnost',
    'disclaimer': 'otkaz-ot-otvetstvennosti',
    'coa-policy': 'coa-policy',
    'blog': 'blog',
    'learn': 'obuchenie',
    'what-are-steroids': 'chto-takoe-steroidy',
    'bundles': 'nabory',
    'wholesale': 'optom',
    'about': 'o-nas',
    'contact': 'kontakty',
    'faq': 'faq',
    'shop': 'magazin',
    'cart': 'korzina',
    'checkout': 'ozformlenie',
    'sitemap': 'karta-sayta',
  },
};

// Maps English category slugs to localized category slugs
export const categorySlugTranslations: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    'testosterone': 'testosterone',
    'trenbolone': 'trenbolone',
    'nandrolone': 'nandrolone',
    'winstrol': 'winstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptides',
    'sarms': 'sarms',
    'weight-loss': 'weight-loss',
    'pct': 'pct',
    'ancillaries': 'ancillaries',
    'sexual-health': 'sexual-health',
    'steroid-blends': 'steroid-blends',
    'hgh': 'hgh',
    'boldenone': 'boldenone',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'accessories',
  },
  nl: {
    'testosterone': 'testosteron',
    'trenbolone': 'trenbolon',
    'nandrolone': 'nandrolon',
    'winstrol': 'winstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptiden',
    'sarms': 'sarms',
    'weight-loss': 'gewichtsverlies',
    'pct': 'pct',
    'ancillaries': 'hulpmiddelen',
    'sexual-health': 'seksuele-gezondheid',
    'steroid-blends': 'steroide-mengsels',
    'hgh': 'hgh',
    'boldenone': 'boldenon',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'accessoires',
  },
  de: {
    'testosterone': 'testosteron',
    'trenbolone': 'trenbolon',
    'nandrolone': 'nandrolon',
    'winstrol': 'winstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptide',
    'sarms': 'sarms',
    'weight-loss': 'gewichtsverlust',
    'pct': 'pct',
    'ancillaries': 'zusatzmittel',
    'sexual-health': 'sexuelle-gesundheit',
    'steroid-blends': 'steroid-mischungen',
    'hgh': 'hgh',
    'boldenone': 'boldenon',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'zubehoer',
  },
  fr: {
    'testosterone': 'testosterone',
    'trenbolone': 'trenbolone',
    'nandrolone': 'nandrolone',
    'winstrol': 'winstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptides',
    'sarms': 'sarms',
    'weight-loss': 'perte-de-poids',
    'pct': 'pct',
    'ancillaries': 'auxiliaires',
    'sexual-health': 'sante-sexuelle',
    'steroid-blends': 'melanges-de-steroides',
    'hgh': 'hgh',
    'boldenone': 'boldenone',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'accessoires',
  },
  es: {
    'testosterone': 'testosterona',
    'trenbolone': 'trembolona',
    'nandrolone': 'nandrolona',
    'winstrol': 'winstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptidos',
    'sarms': 'sarms',
    'weight-loss': 'perdida-de-peso',
    'pct': 'pct',
    'ancillaries': 'auxiliares',
    'sexual-health': 'salud-sexual',
    'steroid-blends': 'mezclas-de-esteroides',
    'hgh': 'hgh',
    'boldenone': 'boldenona',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'accesorios',
  },
  it: {
    'testosterone': 'testosterone',
    'trenbolone': 'trenbolone',
    'nandrolone': 'nandrolone',
    'winstrol': 'winstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptidi',
    'sarms': 'sarms',
    'weight-loss': 'perdita-di-peso',
    'pct': 'pct',
    'ancillaries': 'ausiliari',
    'sexual-health': 'salute-sessuale',
    'steroid-blends': 'miscele-di-steroidi',
    'hgh': 'hgh',
    'boldenone': 'boldenone',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'accessori',
  },
  ru: {
    'testosterone': 'testosteron',
    'trenbolone': 'trenbolon',
    'nandrolone': 'nandrolon',
    'winstrol': 'vinstrol',
    'anavar': 'anavar',
    'dianabol': 'dianabol',
    'masteron': 'masteron',
    'primobolan': 'primobolan',
    'peptides': 'peptidy',
    'sarms': 'sarms',
    'weight-loss': 'snizhenie-vesa',
    'pct': 'pkt',
    'ancillaries': 'vspomogatelnye',
    'sexual-health': 'seksualnoe-zdorovye',
    'steroid-blends': 'steroidnye-smesi',
    'hgh': 'grch',
    'boldenone': 'boldenon',
    'anadrol': 'anadrol',
    'turinabol': 'turinabol',
    'superdrol': 'superdrol',
    'accessories': 'aksessuary',
  },
};

// Helper function to translate category slug
export function translateCategorySlug(slug: string, lang: SupportedLanguage): string {
  return categorySlugTranslations[lang]?.[slug] || slug;
}

// Helper function to get canonical (English) category slug from any localized slug
export function getCanonicalCategorySlug(slug: string): string {
  // First check if it's already an English slug
  if (categorySlugTranslations.en[slug]) {
    return slug;
  }
  
  // Reverse lookup from any language
  for (const lang of Object.keys(categorySlugTranslations) as SupportedLanguage[]) {
    const table = categorySlugTranslations[lang];
    for (const [englishSlug, localizedSlug] of Object.entries(table)) {
      if (localizedSlug === slug) {
        return englishSlug;
      }
    }
  }
  
  return slug;
}

interface Translations {
  nav: {
    home: string;
    peptides: string;
    categories: string;
    allPeptides: string;
    weightLoss: string;
    muscleRecovery: string;
    growthHormone: string;
    tanning: string;
    cognitive: string;
    supplies: string;
    blog: string;
    about: string;
    quality: string;
    contact: string;
    cart: string;
    account: string;
    search: string;
    menu: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    sections: {
      excellence: string;
      mission: string;
      quality: string;
    };
    content: {
      excellence: string;
      mission: string;
      quality: string;
    };
    features: {
      hplc: string;
      hplcSubtitle: string;
      massSpec: string;
      massSpecSubtitle: string;
      storage: string;
      storageSubtitle: string;
    };
  };
  contactPage: {
    title: string;
    subtitle: string;
    section: {
      sendMessage: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      errorMessage: string;
    };
    info: {
      emailTitle: string;
      emailSubtitle: string;
      callTitle: string;
      callSubtitle: string;
      locationTitle: string;
      locationValue: string;
    };
    successMessage: string;
  };
  shopPage: {
    title: string;
    subtitle: string;
    showing: string;
    sort: {
      featured: string;
      priceLowHigh: string;
      priceHighLow: string;
      nameAZ: string;
    };
  };
  faqPage: {
    title: string;
    description: string;
    categoriesTitle: string;
    categories: {
      general: string;
      quality: string;
      payment: string;
      shipping: string;
      international: string;
      storage: string;
      returns: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  qualityPage: {
    title: string;
    subtitle: string;
    description: string;
    hplcTitle: string;
    hplcDescription: string;
    purityStandard: string;
    msTitle: string;
    msDescription: string;
    molecularConfirmation: string;
    verified: string;
    coaTitle: string;
    coaDescription: string;
    coaItems: {
      batchNumber: string;
      dateOfAnalysis: string;
      molecularWeight: string;
      hplcChromatogram: string;
      physicalAppearance: string;
      solubilityProfile: string;
    };
    storageTitle: string;
    storageDescription: string;
    storageItems: {
      lyophilizedTitle: string;
      lyophilizedDescription: string;
      lightProtectionTitle: string;
      lightProtectionDescription: string;
      freezeThawTitle: string;
      freezeThawDescription: string;
    };
  };
  shippingPage: {
    title: string;
    subtitle: string;
    description: string;
  };
  termsPage: {
    title: string;
    description: string;
  };
  privacyPage: {
    title: string;
    description: string;
  };
  disclaimerPage: {
    title: string;
    description: string;
  };
  coaPolicyPage: {
    title: string;
    description: string;
  };
  blogPage: {
    title: string;
    description: string;
    readMore: string;
    publishedOn: string;
    byAuthor: string;
    categories: string;
    recentPosts: string;
    searchPosts: string;
    noPosts: string;
    featuredArticles: string;
    featured?: string;
    latestArticles: string;
    moreArticles?: string;
    articles?: string;
    tableOfContents?: string;
    minRead?: string;
    writtenBy?: string;
    exploreProducts?: string;
    comingSoon: string;
    comingSoonDesc: string;
    aboutBlog: string;
    aboutBlogDesc: string;
    stayUpdated: string;
    stayUpdatedDesc: string;
    subscribe: string;
    emailPlaceholder: string;
    relatedArticles: string;
    shopPeptides: string;
    shopPeptidesDesc: string;
    backToBlog: string;
    articleCount: string;
  };
  learnPage: {
    title: string;
    description: string;
    whatArePeptides: string;
    whatArePeptidesDescription: string;
    browsePeptides: string;
    understandingPeptides: string;
    badge: string;
    readTime: string;
    article: {
      introTitle: string;
      introParagraph1: string;
      introParagraph2: string;
      keyPointLabel: string;
      keyPointText: string;
      structureTitle: string;
      structureSubtitle: string;
      aminoAcids: string[];
      diagramCaption: string;
      categoriesTitle: string;
      categoriesIntro: string;
      categories: Array<{
        name: string;
        description: string;
        examples: string[];
      }>;
      synthesisTitle: string;
      synthesisIntro: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
      qualityControlLabel: string;
      qualityControlText: string;
      faqTitle: string;
      faqLabel: string;
      faqs: Array<{
        question: string;
        answer: string;
      }>;
      ctaTitle: string;
      ctaSubtitle: string;
      ctaButton: string;
    };
  };
  bundlesPage: {
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    mostPopular: string;
    save: string;
    saveBadge: string;
    addToCart: string;
    addedToCart: string;
    bundleNames: {
      recovery: string;
      metabolic: string;
      growthHormone: string;
      cognitive: string;
      starter: string;
    };
    recoveryTagline: string;
    recoveryDescription: string;
    metabolicTagline: string;
    metabolicDescription: string;
    ghTagline: string;
    ghDescription: string;
    cognitiveTagline: string;
    cognitiveDescription: string;
    starterTagline: string;
    starterDescription: string;
    features: {
      synergistic: string;
      complementary: string;
      complete: string;
      popular: string;
      glp1: string;
      dualAgonist: string;
      metabolic: string;
      suppliesIncluded: string;
      ghrhSynergy: string;
      multipleSecretagogues: string;
      ghPulse: string;
      reconstitution: string;
      bdnf: string;
      neuroprotection: string;
      complementaryMechanisms: string;
      cognitiveEnhancement: string;
      beginnerFriendly: string;
      completeSupplies: string;
      popularPeptide: string;
      excellentValue: string;
    };
  };
  wholesalePage: {
    title: string;
    subtitle: string;
    description: string;
    applyNow: string;
    getStarted: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    minOrder: string;
    mostPopular: string;
    offAllProducts: string;
    tiersLabel: string;
    tiersTitle: string;
    tiersSubtitle: string;
    tiers: {
      starter: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
      professional: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
      };
      enterprise: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
      };
    };
    benefitsLabel: string;
    benefitsTitle: string;
    benefitsSubtitle: string;
    benefits: {
      quality: { title: string; description: string };
      supply: { title: string; description: string };
      support: { title: string; description: string };
      documentation: { title: string; description: string };
      payment: { title: string; description: string };
      custom: { title: string; description: string };
    };
    applyLabel: string;
    applyTitle: string;
    applySubtitle: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      organization: string;
      country: string;
      selectCountry: string;
      otherEU: string;
      volume: string;
      selectVolume: string;
      products: string;
      productsPlaceholder: string;
      additional: string;
      additionalPlaceholder: string;
      submit: string;
      responseTime: string;
    };
  };
  accountPage: {
    title: string;
    description: string;
    dashboard: string;
    totalOrders: string;
    inProgress: string;
    recentOrders: string;
    myOrders: string;
    savedAddresses: string;
    addressesSavedDuringCheckout: string;
    accountSettings: string;
    profileInfo: string;
    firstName: string;
    lastName: string;
    memberSince: string;
    dangerZone: string;
    overview: string;
    orders: string;
    addresses: string;
    settings: string;
    logout: string;
    googleAccount: string;
    facebookAccount: string;
    noOrders: string;
    noOrdersDesc: string;
    shopNow: string;
    noAddresses: string;
    noAddressesDesc: string;
    editProfile: string;
    saveChanges: string;
    cancel: string;
    phone: string;
    deleteAccount: string;
    deleteAccountDesc: string;
    redirecting: string;
    completed: string;
    viewAll: string;
    welcomeBack: string;
    dashboardDesc: string;
    phoneOptional: string;
    placedOn: string;
    defaultBadge: string;
  };
  checkout: {
    steps: {
      account: string;
      shipping: string;
      payment: string;
      review: string;
    };
    titles: {
      accountDetails: string;
      shippingAddress: string;
      paymentMethod: string;
      billingAddress: string;
      deliveryMethod: string;
      orderSummary: string;
      shippingInformation: string;
      reviewOrder: string;
    };
    fields: {
      email: string;
      password: string;
      confirmPassword: string;
      firstName: string;
      lastName: string;
      street: string;
      address: string;
      city: string;
      county: string;
      postcode: string;
      country: string;
      phone: string;
      phoneOptional: string;
    };
    shipping: {
      standard: string;
      express: string;
      standardTime: string;
      expressTime: string;
      standardDelivery: string;
      expressDelivery: string;
      freeDeliveryMessage: string;
    };
    payment: {
      bankTransfer: string;
      bitcoin: string;
      bankTransferDesc: string;
      bitcoinDesc: string;
      bitcoinDiscount: string;
      bitcoinDiscountLabel: string;
      fastBadge: string;
      ordersProcessedInfo: string;
      screenshotInfo: string;
    };
    actions: {
      continue: string;
      continueToPayment: string;
      continueToReview: string;
      placeOrder: string;
      back: string;
      login: string;
      guest: string;
      signIn: string;
      signInContinue: string;
      signingIn: string;
      createAccount: string;
      createAccountContinue: string;
      creatingAccount: string;
      continueAsGuest: string;
      continueShopping: string;
      browsePeptides: string;
      viewMyOrders: string;
      copyAddress: string;
      reviewOrder: string;
      processing: string;
      tryAgain?: string;
      contactSupport?: string;
    };
    account: {
      title: string;
      subtitle: string;
      guestCheckout: string;
      guestDesc: string;
      signInOption: string;
      signInDesc: string;
      createAccountOption: string;
      createAccountDesc: string;
      recommended: string;
      orWithEmail: string;
      dontHaveAccount: string;
      alreadyHaveAccount: string;
      createOne: string;
    };
    errors: {
      passwordsDoNotMatch: string;
      passwordTooShort: string;
    };
    empty: {
      title: string;
      description: string;
    };
    minOrder: {
      title: string;
      currentTotal: string;
      addMore: string;
    };
    confirmation: {
      orderConfirmed: string;
      orderId: string;
      confirmationSent: string;
      paymentInstructions: string;
      paymentInstructionsDesc: string;
      whatHappensNext: string;
      whatHappensNextDesc: string;
      checkSpam: string;
    };
    bitcoin: {
      completePayment: string;
      sendExactly: string;
      toAddress: string;
      scanQRCode: string;
      paymentExpires: string;
      completeBeforeExpires: string;
      paymentConfirmation: string;
      paymentInfo: string;
      timeRemaining: string;
      monitoringPayment: string;
      paymentDetected: string;
      waitingConfirmation: string;
      processing: string;
      confirmationNotice: string;
      paymentConfirmed: string;
      paymentReceived: string;
      confirmationEmailSent: string;
      paymentExpired: string;
      orderCancelled: string;
      tryAgain: string;
    };
    summary: {
      subtotal: string;
      shipping: string;
      discount: string;
      total: string;
    };
    review: {
      shippingAddress: string;
      paymentMethod: string;
      items: string;
      delivery: string;
      discountApplied: string;
      free: string;
      qty: string;
    };
    security: {
      sslSecure: string;
      encryption: string;
      paymentMethodsDesc: string;
      weAccept: string;
    };
    trust: {
      title: string;
      purityTitle: string;
      purityDesc: string;
      discreetTitle: string;
      discreetDesc: string;
      dispatchTitle: string;
      dispatchDesc: string;
      supportTitle: string;
      supportDesc: string;
      ordersTitle: string;
      ordersDesc: string;
    };
    badges: {
      ukShipping: string;
      labTested: string;
      fastDispatch: string;
    };
  };
  reviews: {
    title: string;
    showAll: string;
    basedOn: string;
    stars: string;
    star: string;
    verified: string;
    noReviews: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    shopNow: string;
    viewLabReports: string;
    ticker: {
      freeShipping: string;
      freeShippingText: string;
      sameDay: string;
      sameDayText: string;
      purity: string;
      purityText: string;
      coa: string;
      coaText: string;
    };
    stats: {
      ordersDelivered: string;
      purityGuarantee: string;
      expressShipping: string;
      researchLabs: string;
    };
    trustBar?: {
      purity: string;
      purityDesc: string;
      coa: string;
      coaDesc: string;
      shipping: string;
      shippingDesc: string;
      secure: string;
      secureDesc: string;
    };
    categories: {
      title: string;
      subtitle: string;
      desc: {
        weightLoss: string;
        muscleRecovery: string;
        cognitive: string;
        antiAging: string;
        tanning: string;
        growthHormone: string;
      };
    };
    bestSellers: {
      title: string;
      subtitle: string;
      viewAll: string;
      viewAllPeptides: string;
    };
    filters: {
      antiAging: string;
    };
    whyChooseUs?: {
      title: string;
      subtitle: string;
      hplc: string;
      hplcDesc: string;
      massSpec: string;
      massSpecDesc: string;
      coaEvery: string;
      coaEveryDesc: string;
      coldChain: string;
      coldChainDesc: string;
      viewQuality: string;
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      learnMore: string;
      features: {
        isoCertified: string;
        isoCertifiedDesc: string;
        fastDispatch: string;
        fastDispatchDesc: string;
        expertTeam: string;
        expertTeamDesc: string;
        globalReach: string;
        globalReachDesc: string;
      };
    };
    blog: {
      title: string;
      subtitle: string;
      description?: string;
      viewAll: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      role1?: string;
      text1?: string;
      role2?: string;
      text2?: string;
      role3?: string;
      text3?: string;
    };
    faq: {
      title: string;
      subtitle: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
      q5: string;
      a5: string;
      q6: string;
      a6: string;
      q7: string;
      a7: string;
      q8: string;
      a8: string;
    };
    seo: {
      title: string;
      buyLocal: string;
      buyLocalDesc: string;
      buyEurope: string;
      buyEuropeDesc: string;
      weightLoss: string;
      weightLossDesc: string;
      muscleGrowth: string;
      muscleGrowthDesc: string;
      cognitive: string;
      cognitiveDesc: string;
      growthHormone: string;
      growthHormoneDesc: string;
      browseAll: string;
    };
    cta: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
    };
  };
  product: {
    addToCart: string;
    addedToCart: string;
    buyNow: string;
    inStock: string;
    outOfStock: string;
    purity: string;
    description: string;
    specifications: string;
    reviews: string;
    faq: string;
    relatedProducts: string;
    viewOptions: string;
    wishlistAdd: string;
    wishlistRemove: string;
    casNo: string;
    molecularWeight: string;
    storage: string;
    availableSizes: string;
    priceRangeLabel: string;
    downloadCoa: string;
    researchOnlyTitle: string;
    researchOnlyText: string;
    minQuantity: string;
    off: string;
    pack: string;
    packs: string;
    vial: string;
    vials: string;
    bottle: string;
    bottles: string;
    unit: string;
    units: string;
    pricePer: string;
    perUnit: string;
    selectQuantity: string;
    belowMin: string;
    minRequired: string;
    addMore: string;
    discountBanner: string;
    youSave: string;
    trust: {
      purity: string;
      coa: string;
      delivery: string;
    };
  };
  cart: {
    title: string;
    empty: string;
    heroTitle: string;
    heroSubtitle: string;
    secureCheckout: string;
    sslEncrypted: string;
    checkoutSubtitle: string;
    readyToCheckout: string;
    freeDeliveryIncluded: string;
    addMoreForFreeDelivery: string;
    browsePeptides: string;
    cartItemsLabel: string;
    item: string;
    items: string;
    inStockFastDelivery: string;
    each: string;
    subtotal: string;
    shipping: string;
    calculatedAtCheckout: string;
    total: string;
    checkout: string;
    proceedToCheckout: string;
    secureSslEncryptedCheckout: string;
    orderSummary: string;
    bulkDiscountsApplied: string;
    freeDelivery: string;
    deliveryOptions: string;
    standardDelivery: string;
    standardDeliveryTime: string;
    expressDelivery: string;
    expressDeliveryTime: string;
    ordersOverThreshold: string;
    secureBadge: string;
    pureBadge: string;
    fastDeliveryBadge: string;
    yourCartCount: string;
    closeCart: string;
    addProductsToGetStarted: string;
    browseProducts: string;
    viewCart: string;
    addedToCart: string;
    continueShopping: string;
    remove: string;
    quantity: string;
  };
  footer: {
    newsletter: string;
    subscribe: string;
    aboutUs: string;
    customerService: string;
    legal: string;
    copyright: string;
    termsAndConditions: string;
    privacyPolicy: string;
    disclaimer: string;
    coaPolicy: string;
    sitemap: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    disclaimerLabel: string;
  };
  common: {
    all: string;
    viewOptions: string;
    learnMore: string;
    readMore: string;
    loading: string;
    error: string;
    success: string;
    skipToMainContent: string;
    free: string;
    searchLabel: string;
    searching: string;
    noResultsFound: string;
    welcome: string;
    signInForBestExperience: string;
    signIn: string;
    createAccount: string;
    or: string;
    dashboard: string;
    myOrders: string;
    settings: string;
    signOut: string;
    backTo: string;
    home: string;
    name: string;
    email: string;
    phone: string;
    notSet: string;
    share?: string;
    viewAll?: string;
    important: string;
  };
  legalPages: {
    lastUpdated: string;
    terms: {
      title: string;
      subtitle: string;
      acceptance: { title: string; content: string; };
      researchUse: { title: string; warning: string; notHumans: string; notFood: string; notHousehold: string; acknowledgment: string; };
      purchaser: { title: string; intro: string; age: string; institution: string; hazards: string; handling: string; };
      liability: { title: string; content: string; };
      governing: { title: string; content: string; };
    };
    privacy: {
      title: string;
      subtitle: string;
      infoCollect: { title: string; content: string; };
      howUse: { title: string; intro: string; orders: string; coa: string; questions: string; legal: string; };
      security: { title: string; content: string; };
      cookies: { title: string; content: string; };
    };
    disclaimer: {
      title: string;
      subtitle: string;
      warning: string;
      warningText: string;
      lead: string;
      patent: string;
      qualified: string;
      rights: string;
    };
    shipping: {
      title: string;
      subtitle: string;
      policyTitle: string;
      processing: string;
      method: string;
      temperature: string;
      returnsTitle: string;
      customsTitle: string;
      customsContent: string;
    };
    coaPolicy: {
      title: string;
      subtitle: string;
      batchTitle: string;
      batchContent: string;
      methodsTitle: string;
      hplc: string;
      ms: string;
      availTitle: string;
      availContent: string;
    };
  };
}

export const translations: Record<SupportedLanguage, Translations> = {
  en: {
    nav: {
      home: 'Home',
      peptides: 'Steroids',
      categories: 'Categories',
      allPeptides: 'all steroids',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Blog',
      about: 'About Us',
      quality: 'Quality',
      contact: 'Contact',
      cart: 'Cart',
      account: 'Account',
      search: 'Search steroids...',
      menu: 'Menu',
    },
    aboutPage: {
      title: 'About Steroiden',
      subtitle: 'Europe\'s leading supplier of premium anabolic steroids, testosterone, and performance-enhancing compounds with lab-verified purity.',
      sections: {
        excellence: 'Commitment to Excellence',
        mission: 'Our Mission',
        quality: 'Quality First',
      },
      content: {
        excellence: 'We are a dedicated team of experts committed to providing the highest quality anabolic steroids and hormones for bodybuilders, athletes, and researchers across Europe.',
        mission: 'Our mission is to be the best place to buy steroids in the UK and Europe. We believe in transparency, lab-tested purity, and reliable supply. That\'s why every product we sell comes with full analytical documentation and guaranteed potency.',
        quality: 'In an industry often plagued by counterfeits and underdosed products, Steroiden stands apart by providing pharmaceutical-grade compounds with comprehensive lab testing for every batch.',
      },
      features: {
        hplc: 'Lab Tested',
        hplcSubtitle: 'Verified purity ≥99%',
        massSpec: 'Pharmaceutical Grade',
        massSpecSubtitle: 'GMP-certified manufacturing',
        storage: 'Proper Storage',
        storageSubtitle: 'Climate-controlled facilities',
      },
    },
    contactPage: {
      title: 'Get In Touch',
      subtitle: 'Have questions about our products or need a custom quote? Our expert team is here to help.',
      section: {
        sendMessage: 'Send us a Message',
      },
      form: {
        name: 'Name',
        namePlaceholder: 'John Doe',
        email: 'Email Address',
        emailPlaceholder: 'john@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Product Inquiry',
        message: 'Message',
        messagePlaceholder: 'Tell us about your research needs...',
        submit: 'Send Message',
        sending: 'Sending...',
        errorMessage: 'An error occurred. Please try again.',
      },
      info: {
        emailTitle: 'Email Us',
        emailSubtitle: 'Get a response within 24 hours',
        callTitle: 'Call Us',
        callSubtitle: 'Mon - Fri: 9:00 - 17:00 CET',
        locationTitle: 'Location',
        locationValue: 'Steroiden<br>Europe',
      },
      successMessage: 'Thank you for your message. We will get back to you shortly.',
    },
    shopPage: {
      title: 'Buy Steroids Online UK',
      subtitle: 'Browse our complete catalog of anabolic steroids, testosterone, and performance compounds with guaranteed purity.',
      showing: '{count} products',
      sort: {
        featured: 'Featured',
        priceLowHigh: 'Price: Low to High',
        priceHighLow: 'Price: High to Low',
        nameAZ: 'Name: A-Z',
      },
    },
    faqPage: {
      title: 'Frequently Asked Questions',
      description: 'Find answers about buying steroids, ordering, shipping, and quality testing. Get the information you need.',
      categoriesTitle: 'Categories',
      categories: {
        general: 'General Information',
        quality: 'Quality & Testing',
        payment: 'Ordering & Payment',
        shipping: 'Shipping & Delivery',
        international: 'International Orders',
        storage: 'Storage & Handling',
        returns: 'Returns & Refunds',
      },
      cta: {
        title: 'Still have questions?',
        description: 'Can\'t find what you\'re looking for? Our support team is here to help.',
        button: 'Contact Us',
      },
    },
    qualityPage: {
      title: 'Quality Guarantee',
      subtitle: 'Your safety matters. We implement rigorous quality control and third-party lab testing to ensure every product meets pharmaceutical-grade standards.',
      description: 'Our commitment to purity. Learn about our lab testing and quality assurance protocols for all steroids and hormones.',
      hplcTitle: 'Lab Analysis',
      hplcDescription: 'Every batch undergoes comprehensive laboratory analysis to verify compound purity, potency, and identity. We guarantee minimum 99% purity for all products.',
      purityStandard: 'Purity Standard',
      msTitle: 'Identity Verification',
      msDescription: 'Advanced analytical testing verifies the molecular identity and concentration of every compound. This confirms you receive exactly what you ordered.',
      molecularConfirmation: 'Molecular Confirmation',
      verified: '100% Verified',
      coaTitle: 'Certificate of Analysis (COA)',
      coaDescription: 'Transparency is key. A certificate of analysis is available for every batch we produce.',
      coaItems: {
        batchNumber: 'Batch Number',
        dateOfAnalysis: 'Date of Analysis',
        molecularWeight: 'Molecular Weight',
        hplcChromatogram: 'HPLC Chromatogram',
        physicalAppearance: 'Physical Appearance',
        solubilityProfile: 'Solubility Profile',
      },
      storageTitle: 'Storage & Handling',
      storageDescription: 'To maintain product quality after delivery, we recommend the following:',
      storageItems: {
        lyophilizedTitle: 'Cool Storage',
        lyophilizedDescription: 'Store in a cool, dry place away from heat',
        lightProtectionTitle: 'Light Protection',
        lightProtectionDescription: 'Keep away from direct sunlight',
        freezeThawTitle: 'Proper Handling',
        freezeThawDescription: 'Follow storage instructions to preserve product integrity',
      },
    },
    shippingPage: {
      title: 'Shipping Information',
      subtitle: 'Fast, secure delivery to your location',
      description: 'Learn about our shipping methods, delivery times, and packaging standards.',
    },
    termsPage: {
      title: 'Terms and Conditions',
      description: 'Please read these terms carefully before using our services.',
    },
    privacyPage: {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information.',
    },
    disclaimerPage: {
      title: 'Disclaimer',
      description: 'Important legal information about steroid purchases and use.',
    },
    coaPolicyPage: {
      title: 'COA Policy',
      description: 'Our certificate of analysis policy and procedures.',
    },
    blogPage: {
      title: 'Research Blog',
      description: 'Latest steroid cycle news, guides, and scientific insights.',
      readMore: 'Read More',
      publishedOn: 'Published on',
      byAuthor: 'by',
      categories: 'Categories',
      recentPosts: 'Recent Posts',
      searchPosts: 'Search posts...',
      noPosts: 'No posts found.',
      featuredArticles: 'Featured Articles',
      latestArticles: 'Latest Articles',
      comingSoon: 'Coming Soon',
      comingSoonDesc: 'We\'re working on exciting new content. Check back soon for research insights and guides.',
      aboutBlog: 'About Our Blog',
      aboutBlogDesc: 'Our research blog provides educational content for laboratory professionals and researchers. From steroid handling protocols to the latest scientific developments, we share expert insights to support your research.',
      stayUpdated: 'Stay Updated',
      stayUpdatedDesc: 'Get the latest research insights delivered to your inbox.',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Your email address',
      relatedArticles: 'Related Articles',
      shopPeptides: 'Shop Steroids',
      shopPeptidesDesc: 'Browse our selection of premium anabolic steroids with guaranteed ≥99% purity.',
      backToBlog: 'â† Back to Blog',
      articleCount: '{count} article(s)',
    },
    learnPage: {
      title: 'Learn About Steroids',
      description: 'Educational resources about anabolic steroids, testosterone, and performance-enhancing compounds.',
      whatArePeptides: 'What Are Steroids?',
      whatArePeptidesDescription: 'Steroids are organic compounds with a characteristic molecular structure containing four rings of carbon atoms. Anabolic steroids are synthetic variations of testosterone, the primary male sex hormone. They are widely used in bodybuilding, athletics, and hormone replacement therapy to enhance muscle growth, strength, and physical performance.',
      browsePeptides: 'Browse Steroids',
      understandingPeptides: 'Understanding Steroids',
      badge: 'Education',
      readTime: 'min read',
      article: {
        introTitle: 'Understanding Steroids',
        introParagraph1: 'Anabolic-androgenic steroids (AAS) are synthetic derivatives of testosterone, the primary male sex hormone. They promote muscle growth (anabolic effects) and the development of male characteristics (androgenic effects). Originally developed in the 1930s, they have since become widely used in sports, bodybuilding, and medical treatments for conditions such as delayed puberty, muscle wasting, and hormone deficiency.',
        introParagraph2: 'The body naturally produces steroid hormones including testosterone, estrogen, and cortisol. These endogenous steroids regulate critical functions including muscle growth, bone density, metabolism, immune response, and sexual development. Synthetic anabolic steroids are designed to maximize the muscle-building properties while minimizing androgenic side effects.',
        keyPointLabel: 'Key Point',
        keyPointText: 'Anabolic steroids work by binding to androgen receptors in muscle cells, triggering increased protein synthesis and nitrogen retention. This leads to accelerated muscle growth, improved recovery, and enhanced athletic performance when combined with proper training and nutrition.',
        structureTitle: 'The Steroid Structure',
        structureSubtitle: 'Four-ring carbon structure forming the steroid nucleus',
        aminoAcids: ['Ring A', 'Ring B', 'Ring C', 'Ring D', 'C-17', 'C-3', 'OH', 'CH3'],
        diagramCaption: 'The cyclopentanoperhydrophenanthrene nucleus: three six-membered rings (A, B, C) and one five-membered ring (D) form the basic steroid skeleton',
        categoriesTitle: 'Categories of Steroids',
        categoriesIntro: 'Steroids are classified by their primary effects and chemical modifications. Here are the main categories:',
        categories: [],
        synthesisTitle: 'How Are Steroids Manufactured?',
        synthesisIntro: 'Modern pharmaceutical-grade steroids are manufactured under strict GMP (Good Manufacturing Practice) conditions to ensure purity, potency, and consistency.',
        steps: [
          {
            title: 'Raw Material Sourcing',
            description: 'Pharmaceutical-grade raw materials are sourced from certified suppliers',
          },
          {
            title: 'Chemical Synthesis',
            description: 'Compounds are synthesized under controlled laboratory conditions',
          },
          {
            title: 'Purification',
            description: 'Multi-step purification ensures ≥99% compound purity',
          },
          {
            title: 'Quality Testing',
            description: 'Every batch undergoes lab analysis for purity, potency, and sterility',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After manufacturing, all steroids undergo rigorous quality testing including laboratory analysis for purity verification, potency testing, and sterility checks. Only products meeting strict pharmaceutical-grade standards are released for sale.',
        faqTitle: 'Frequently Asked Questions',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between anabolic steroids and corticosteroids?',
            answer: 'Anabolic steroids are synthetic derivatives of testosterone that promote muscle growth and strength. Corticosteroids (like prednisone) are anti-inflammatory drugs used to treat conditions like asthma and arthritis. They work through entirely different mechanisms and have different effects.',
          },
          {
            question: 'What are the most popular anabolic steroids?',
            answer: 'The most commonly used anabolic steroids include Testosterone (various esters), Nandrolone (Deca-Durabolin), Stanozolol (Winstrol), Oxandrolone (Anavar), and Trenbolone. Each has different properties suited to bulking, cutting, or strength goals.',
          },
          {
            question: 'How do you verify steroid quality?',
            answer: 'We use third-party laboratory testing to verify the purity, identity, and potency of every batch. Each product comes with a Certificate of Analysis (COA) showing the test results, ensuring you receive exactly what is listed on the label.',
          },
          {
            question: 'What is testosterone replacement therapy (TRT)?',
            answer: 'TRT is a medical treatment for men with clinically low testosterone levels (hypogonadism). It involves administering exogenous testosterone to restore normal hormone levels, improving energy, mood, muscle mass, and overall quality of life.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Injectable steroids should be stored at room temperature (15-25°C) away from direct sunlight. Oral tablets should be kept in a cool, dry place in their original packaging. Always check the specific storage instructions for each product.',
          },
        ],
        ctaTitle: 'Ready to Get Started?',
        ctaSubtitle: 'Explore our complete catalog of premium steroids and performance compounds. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Steroid Stacks',
      description: 'Steroid Stacks',
      heroTitle: 'Steroid Stacks',
      heroDescription: 'Carefully curated steroid combinations for optimized performance protocols. Save up to 20% compared to individual purchases.',
      mostPopular: 'Most Popular',
      save: 'Save',
      saveBadge: 'Bundle Savings',
      addToCart: 'Add Bundle to Cart',
      addedToCart: 'added to cart!',
      bundleNames: {
        recovery: 'Recovery Research Stack',
        metabolic: 'Metabolic Research Stack',
        growthHormone: '',
        cognitive: '',
        starter: 'Beginner Starter Kit',
      },
      recoveryTagline: 'Complete recovery research protocol',
      recoveryDescription: 'The most popular combination for tissue repair and recovery research. BPC-157 and TB-500 work through complementary mechanisms.',
      metabolicTagline: 'Advanced metabolic research protocol',
      metabolicDescription: 'Comprehensive metabolic research with the latest GLP-1 receptor agonists. Ideal for studying appetite regulation and metabolic pathways.',
      ghTagline: 'Growth hormone secretagogue stack',
      ghDescription: 'A complete growth hormone research protocol combining GHRH and anabolic compounds for synergistic GH release studies.',
      cognitiveTagline: 'Nootropic steroid cycle protocol',
      cognitiveDescription: 'Russian-developed strength compounds for neuroscience research. Complementary mechanisms targeting BDNF and anxiolytic pathways.',
      starterTagline: 'Perfect introduction to steroid cycle',
      starterDescription: 'Everything you need to begin your steroid cycle journey. Includes the safest and most well-researched compounds with proper cycle support.',
      features: {
        synergistic: 'Synergistic Effects',
        complementary: 'Complementary Mechanisms',
        complete: 'Complete Protocol',
        popular: 'Most Researched',
        glp1: 'GLP-1 Receptor Agonist',
        dualAgonist: 'Dual GLP-1/GIP Agonist',
        metabolic: 'Metabolic Research',
        suppliesIncluded: 'Supplies Included',
        ghrhSynergy: 'GHRH + GHRP Synergy',
        multipleSecretagogues: 'Multiple Secretagogues',
        ghPulse: 'GH Pulse Research',
        reconstitution: 'Reconstitution Supplies',
        bdnf: 'BDNF Enhancement',
        neuroprotection: 'Neuroprotective',
        complementaryMechanisms: 'Complementary Mechanisms',
        cognitiveEnhancement: 'Cognitive Research',
        beginnerFriendly: 'Beginner Friendly',
        completeSupplies: 'Complete Supplies',
        popularPeptide: 'Best-Selling Stack',
        excellentValue: 'Excellent Value',
      },
    },
    wholesalePage: {
      title: 'Wholesale',
      subtitle: 'Bulk Steroids for Gyms & Resellers',
      description: 'Wholesale steroids for gyms, coaches, and resellers. Bulk pricing, dedicated support, and flexible payment terms.',
      applyNow: 'Apply for Wholesale Account',
      getStarted: 'Get Started',
      heroBadge: 'B2B Steroid Supply',
      heroTitle: 'Wholesale Steroids for Professionals',
      heroDescription: 'Partner with Europe\'s trusted steroid supplier. Volume discounts up to 30%, dedicated account management, and priority fulfillment for gyms, coaches, and resellers.',
      minOrder: 'Minimum Order',
      mostPopular: 'Most Popular',
      offAllProducts: 'off all products',
      tiersLabel: 'Volume Pricing',
      tiersTitle: 'Wholesale Pricing Tiers',
      tiersSubtitle: 'The more you order, the more you save. All tiers include free shipping and priority processing.',
      tiers: {
        starter: {
          feature1: '10% discount on all steroids',
          feature2: 'Free standard shipping',
          feature3: 'Email support',
          feature4: 'COA included with every order',
        },
        professional: {
          feature1: '20% discount on all steroids',
          feature2: 'Free express shipping',
          feature3: 'Priority email & phone support',
          feature4: 'Dedicated account manager',
          feature5: 'Net 30 payment terms',
        },
        enterprise: {
          feature1: '30% discount on all steroids',
          feature2: 'Same-day dispatch priority',
          feature3: '24/7 dedicated support line',
          feature4: 'Custom formulations available',
          feature5: 'Net 60 payment terms',
          feature6: 'Quarterly business reviews',
        },
      },
      benefitsLabel: 'Partnership Benefits',
      benefitsTitle: 'Why Partner With Us',
      benefitsSubtitle: 'Join leading gyms and resellers across Europe who trust us for their steroid supply needs.',
      benefits: {
        quality: {
          title: 'Guaranteed Purity',
          description: 'Every batch tested to ≥99% purity with full COA documentation.',
        },
        supply: {
          title: 'Reliable Supply',
          description: 'Consistent stock levels and priority allocation for wholesale partners.',
        },
        support: {
          title: 'Dedicated Support',
          description: 'Your own account manager for personalized service and quick issue resolution.',
        },
        documentation: {
          title: 'Complete Documentation',
          description: 'Full COA, MSDS, and compliance documentation for your records.',
        },
        payment: {
          title: 'Flexible Payment',
          description: 'Net 30/60 terms, multiple payment methods, and credit facilities.',
        },
        custom: {
          title: 'Custom Solutions',
          description: 'Custom formulations, labeling, and packaging available on request.',
        },
      },
      applyLabel: 'Get Started',
      applyTitle: 'Apply for a Wholesale Account',
      applySubtitle: 'Complete the form below and our team will review your application within 24 hours.',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Business Email',
        organization: 'Organization / Institution',
        country: 'Country',
        selectCountry: 'Select your country',
        otherEU: 'Other EU Country',
        volume: 'Expected Monthly Volume',
        selectVolume: 'Select expected volume',
        products: 'Products of Interest',
        productsPlaceholder: 'Which steroids are you interested in?',
        additional: 'Additional Information',
        additionalPlaceholder: 'Tell us about your research needs or any specific requirements...',
        submit: 'Submit Application',
        responseTime: 'We typically respond within 24 business hours.',
      },
    },
    accountPage: {
      title: 'My Account',
      description: 'Manage your Steroiden account. View orders, track shipments, and update your information.',
      dashboard: 'Account Dashboard',
      totalOrders: 'Total Orders',
      inProgress: 'In Progress',
      recentOrders: 'Recent Orders',
      myOrders: 'My Orders',
      savedAddresses: 'Saved Addresses',
      addressesSavedDuringCheckout: 'Addresses will be saved during checkout.',
      accountSettings: 'Account Settings',
      profileInfo: 'Profile Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      memberSince: 'Member Since',
      dangerZone: 'Danger Zone',
      overview: 'Overview',
      orders: 'My Orders',
      addresses: 'Addresses',
      settings: 'Settings',
      logout: 'Logout',
      googleAccount: 'Google Account',
      facebookAccount: 'Facebook Account',
      noOrders: 'No orders yet',
      noOrdersDesc: 'When you make a purchase, your orders will appear here.',
      shopNow: 'Shop Now',
      noAddresses: 'No saved addresses',
      noAddressesDesc: 'Your shipping addresses will appear here after your first order.',
      editProfile: 'Edit Profile',
      saveChanges: 'Save Changes',
      cancel: 'Cancel',
      phone: 'Phone',
      deleteAccount: 'Delete Account',
      deleteAccountDesc: 'Once you delete your account, there is no going back. Please be certain.',
      redirecting: 'Redirecting to login...',
      completed: 'Completed',
      viewAll: 'View All',
      welcomeBack: 'Welcome back',
      dashboardDesc: 'Manage your orders, addresses, and account settings from your dashboard.',
      phoneOptional: 'Phone (Optional)',
      placedOn: 'Placed on',
      defaultBadge: 'DEFAULT',
    },
    checkout: {
      steps: {
        account: 'Account',
        shipping: 'Shipping',
        payment: 'Payment',
        review: 'Review',
      },
      titles: {
        accountDetails: 'Account Details',
        shippingAddress: 'Shipping Address',
        paymentMethod: 'Payment Method',
        billingAddress: 'Billing Address',
        deliveryMethod: 'Delivery Method',
        orderSummary: 'Order Summary',
        shippingInformation: 'Shipping Information',
        reviewOrder: 'Review Your Order',
      },
      fields: {
        email: 'Email Address',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        firstName: 'First Name',
        lastName: 'Last Name',
        street: 'Street Address',
        address: 'Address',
        city: 'City',
        county: 'County',
        postcode: 'Postcode',
        country: 'Country',
        phone: 'Phone Number',
        phoneOptional: 'Phone (Optional)',
      },
      shipping: {
        standard: 'Standard Delivery',
        express: 'Express Delivery',
        standardTime: '3-5 business days',
        expressTime: '1-2 business days',
        standardDelivery: 'Standard Delivery (3-5 business days)',
        expressDelivery: 'Express Delivery (1-2 business days)',
        freeDeliveryMessage: 'Free delivery on orders over {amount}',
      },
      payment: {
        bankTransfer: 'Bank Transfer',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Pay via direct bank transfer',
        bitcoinDesc: 'Fast, secure & private payment',
        bitcoinDiscount: '10% OFF',
        bitcoinDiscountLabel: 'Bitcoin Discount (10%)',
        fastBadge: 'FAST',
        ordersProcessedInfo: 'Orders processed within 24 hours of payment confirmation',
        screenshotInfo: 'Please send a screenshot of your payment confirmation via our contact form to speed up order processing.',
      },
      actions: {
        continue: 'Continue',
        continueToPayment: 'Continue to Payment',
        continueToReview: 'Continue to Review',
        placeOrder: 'Place Order',
        back: 'Back',
        login: 'Log In',
        guest: 'Guest Checkout',
        signIn: 'Sign In',
        signInContinue: 'Sign In & Continue',
        signingIn: 'Signing In...',
        createAccount: 'Create Account',
        createAccountContinue: 'Create Account & Continue',
        creatingAccount: 'Creating Account...',
        continueAsGuest: 'Continue as Guest',
        continueShopping: 'Continue Shopping',
        browsePeptides: 'Browse Steroids',
        viewMyOrders: 'View My Orders',
        copyAddress: 'Copy Address',
        reviewOrder: 'Review Order',
        processing: 'Processing...',
        tryAgain: 'Try Again',
        contactSupport: 'Contact Support',
      },
      account: {
        title: 'How would you like to checkout?',
        subtitle: 'Create an account to track orders, or continue as guest',
        guestCheckout: 'Continue as Guest',
        guestDesc: 'Quick checkout without creating an account',
        signInOption: 'Sign In',
        signInDesc: 'Already have an account? Sign in to continue',
        createAccountOption: 'Create Account',
        createAccountDesc: 'Track orders, save addresses & faster checkout',
        recommended: 'RECOMMENDED',
        orWithEmail: 'or with email',
        dontHaveAccount: "Don't have an account?",
        alreadyHaveAccount: 'Already have an account?',
        createOne: 'Create one',
      },
      errors: {
        passwordsDoNotMatch: 'Passwords do not match',
        passwordTooShort: 'Password must be at least 8 characters',
      },
      empty: {
        title: 'Your cart is empty',
        description: 'Add some products before checkout.',
      },
      minOrder: {
        title: 'Minimum Order Required',
        currentTotal: 'Your current cart total is',
        addMore: 'Add {amount} more to proceed',
      },
      confirmation: {
        orderConfirmed: 'Order Confirmed!',
        orderId: 'Order ID',
        confirmationSent: 'A confirmation email has been sent to',
        paymentInstructions: 'Payment Instructions Coming Soon',
        paymentInstructionsDesc: 'Our bank transfer details and payment instructions will be sent to {email} shortly.',
        whatHappensNext: 'What happens next?',
        whatHappensNextDesc: 'Check your inbox for an email with our bank details and the amount to transfer: {amount}. Once we receive your payment, we\'ll send you a confirmation and dispatch your order.',
        checkSpam: "Don't see the email? Check your spam folder or contact us via the contact form.",
      },
      bitcoin: {
        completePayment: 'Complete Your Bitcoin Payment',
        sendExactly: 'Send exactly:',
        toAddress: 'To this address:',
        paymentExpires: 'Payment expires in 15 minutes.',
        completeBeforeExpires: 'Please complete the payment before the timer expires.',
        paymentConfirmation: 'Once payment is confirmed on the blockchain, you will receive a confirmation email at',
        paymentInfo: "You'll receive a unique Bitcoin address. Payment expires in 15 minutes.",
        scanQRCode: 'Scan QR code to pay',
        timeRemaining: 'Time Remaining',
        monitoringPayment: 'Monitoring blockchain for your payment...',
        paymentDetected: 'Payment Detected!',
        waitingConfirmation: 'Waiting for blockchain confirmation...',
        processing: 'Processing...',
        confirmationNotice: 'You will receive an email confirmation once your payment is confirmed.',
        paymentConfirmed: 'Payment Confirmed!',
        paymentReceived: 'Your Bitcoin payment has been received and confirmed!',
        confirmationEmailSent: 'A confirmation email has been sent to',
        paymentExpired: 'Payment Time Expired',
        orderCancelled: 'Your order has been cancelled due to payment timeout.',
        tryAgain: 'Please try again or contact support if you need assistance.',
      },
      summary: {
        subtotal: 'Subtotal',
        shipping: 'Shipping',
        discount: 'Discount',
        total: 'Total',
      },
      review: {
        shippingAddress: 'Shipping Address',
        paymentMethod: 'Payment Method',
        items: 'Items',
        delivery: 'Delivery',
        discountApplied: '10% discount applied',
        free: 'FREE',
        qty: 'Qty',
      },
      security: {
        sslSecure: 'SSL Secure Checkout',
        encryption: '256-bit encryption',
        paymentMethodsDesc: 'Bank Transfer & Bitcoin accepted. Order tracking included.',
        weAccept: 'We Accept',
      },
      trust: {
        title: 'Why Order With Confidence',
        purityTitle: '99%+ Purity Guaranteed',
        purityDesc: 'All products verified via HPLC testing',
        discreetTitle: 'Discreet Packaging',
        discreetDesc: 'Plain packaging with no product labels',
        dispatchTitle: 'Same-Day Dispatch',
        dispatchDesc: 'Orders before 2pm shipped same day',
        supportTitle: 'UK-Based Support',
        supportDesc: 'Real customer service, not bots',
        ordersTitle: '5000+ Orders Delivered',
        ordersDesc: 'Trusted by UK researchers',
      },
      badges: {
        ukShipping: 'UK Shipping',
        labTested: 'Lab Tested',
        fastDispatch: 'Fast Dispatch',
      },
    },
    reviews: {
      title: 'Customer Reviews',
      showAll: 'Show All {count} Reviews',
      basedOn: 'Based on {count} reviews',
      stars: 'stars',
      star: 'star',
      verified: 'Verified Purchase',
      noReviews: 'No reviews yet',
    },
    home: {
      heroBadge: '✓ Lab Tested | 99%+ Purity | COA With Every Order',
      heroTitle: 'Buy Steroids UK',
      heroTitleHighlight: 'Best Place to Buy Steroids Online',
      heroSubtitle: 'Europe\'s trusted source for premium anabolic steroids, testosterone, and performance compounds. Every batch lab-tested, COA-documented, and dispatched within 24 hours. Testosterone, Winstrol, Deca & more in stock.',
      shopNow: 'Browse All Steroids',
      viewLabReports: 'View Lab Reports & COAs',
      ticker: {
        freeShipping: 'FREE SHIPPING',
        freeShippingText: 'on orders over €150',
        sameDay: 'SAME-DAY DISPATCH',
        sameDayText: 'when you order before 4PM',
        purity: '99%+ PURITY',
        purityText: 'HPLC verified on every batch',
        coa: 'COA INCLUDED',
        coaText: 'with every order',
      },
      stats: {
        ordersDelivered: 'Orders Delivered',
        purityGuarantee: 'HPLC Purity',
        expressShipping: 'Same-Day Dispatch',
        researchLabs: 'Research Labs Served',
      },
      trustBar: {
        purity: '99%+ HPLC Purity',
        purityDesc: 'Every batch verified',
        coa: 'COA Included',
        coaDesc: 'Full analytical data',
        shipping: '24h Dispatch',
        shippingDesc: 'Fast European delivery',
        secure: 'Secure Payment',
        secureDesc: 'SSL encrypted checkout',
      },
      categories: {
        title: 'Shop Steroids by Category',
        subtitle: 'Find the right steroids for your goals',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Best-Selling Steroids',
        subtitle: 'Most popular steroids chosen by thousands of customers',
        viewAll: 'View All Steroids',
        viewAllPeptides: 'View Complete Catalog',
      },
      filters: {
        antiAging: 'Anti-aging',
      },
      whyChooseUs: {
        title: 'Why Thousands Choose Steroiden',
        subtitle: 'The quality difference',
        hplc: 'Lab Verified',
        hplcDesc: 'Every single batch undergoes comprehensive laboratory testing to verify ≥99% purity and potency before release.',
        massSpec: 'Pharmaceutical Grade',
        massSpecDesc: 'All compounds manufactured under GMP conditions. We source only from certified pharmaceutical facilities.',
        coaEvery: 'COA With Every Order',
        coaEveryDesc: 'Download batch-specific Certificates of Analysis including purity data, potency verification, and composition specs.',
        coldChain: 'Secure Packaging',
        coldChainDesc: 'All orders shipped in discreet, tamper-proof packaging with proper storage materials to maintain product integrity.',
        viewQuality: 'View Our Quality Standards',
      },
      about: {
        title: 'Europe\'s Trusted Steroid Supplier',
        subtitle: 'Your reliable source for premium steroids since 2015.',
        description: 'Steroiden partners with GMP-certified pharmaceutical facilities to deliver the highest quality anabolic steroids, testosterone, and performance compounds. Every product undergoes third-party lab testing before release. We supply Testosterone, Winstrol, Deca-Durabolin, Anavar, Trenbolone, and many more compounds with full COA documentation and fast delivery across the UK and Europe.',
        learnMore: 'Learn More About Us',
        features: {
          isoCertified: 'GMP Certified',
          isoCertifiedDesc: 'Pharmaceutical Partners',
          fastDispatch: '24h Dispatch',
          fastDispatchDesc: 'Same-Day Processing',
          expertTeam: 'Expert Team',
          expertTeamDesc: 'QC & Support Staff',
          globalReach: 'Pan-European',
          globalReachDesc: 'UK + 30 Countries',
        },
      },
      blog: {
        title: 'Steroid Guides & Articles',
        subtitle: 'Latest from the Blog',
        description: 'In-depth steroid guides, cycle protocols, dosage calculators, PCT advice, and expert bodybuilding insights.',
        viewAll: 'View All Articles',
      },
      testimonials: {
        title: 'Trusted by Thousands of Customers',
        subtitle: 'What our customers say',
        role1: 'Competitive Bodybuilder, UK',
        text1: 'The quality of Steroiden\'s products is outstanding. Consistent dosing, fast delivery, and the COA documentation gives me total confidence in what I\'m using. Best place to buy steroids UK.',
        role2: 'Strength Coach, Germany',
        text2: 'Fast delivery to Germany and consistently high-quality products. I\'ve been ordering from Steroiden for over a year now. Truly the best steroid supplier in Europe.',
        role3: 'Personal Trainer, Spain',
        text3: 'We switched from another supplier to Steroiden and the difference in product quality is night and day. Better prices, faster delivery, and genuine pharmaceutical-grade steroids. Highly recommended.',
      },
      faq: {
        title: 'Frequently Asked Questions About Buying Steroids',
        subtitle: 'Everything you need to know',
        q1: 'What makes your steroids different from competitors?',
        a1: 'Every product we sell undergoes rigorous third-party lab testing to verify purity, potency, and identity. Every batch comes with a Certificate of Analysis (COA) so you know exactly what you\'re getting.',
        q2: 'How quickly can I receive my order?',
        a2: 'All orders are dispatched within 24 hours. We offer standard delivery (3-5 business days) and express shipping (1-2 business days) options across the UK and Europe.',
        q3: 'Do you provide Certificates of Analysis (COA)?',
        a3: 'Yes, every product includes a batch-specific COA with lab analysis data, purity percentage, potency verification, and storage recommendations.',
        q4: 'Where can I buy steroids in the UK?',
        a4: 'You can buy steroids online from Steroiden with fast delivery across the UK and Europe. We are the best place to buy steroids UK with discreet packaging and reliable service.',
        q5: 'What payment methods do you accept?',
        a5: 'We accept bank transfers and Bitcoin (with a 10% discount). All transactions are securely processed with full encryption.',
        q6: 'How should I store my steroids?',
        a6: 'Injectable steroids should be stored at room temperature (15-25°C) away from direct sunlight. Oral steroids should be kept in a cool, dry place. Always check specific storage instructions for each product.',
        q7: 'Are your products pharmaceutical grade?',
        a7: 'Yes. All our products are manufactured under GMP conditions by certified pharmaceutical facilities. We only sell lab-tested, pharmaceutical-grade compounds.',
        q8: 'Can I get a refund or replacement if there\'s an issue?',
        a8: 'Absolutely. If you receive a product that doesn\'t meet our advertised specifications, we offer a full refund or replacement. Please contact our support team with your order details within 30 days of receipt.',
      },
      seo: {
        title: 'Buy Steroids Online {market} & Europe — Steroiden',
        buyLocal: 'Buy Steroids {market} — Fast Local Delivery',
        buyLocalDesc: 'Buy steroids in {location} with next-day dispatch. Steroiden supplies premium anabolic steroids including Testosterone, Winstrol, Deca-Durabolin, Anavar, Trenbolone, and many more. Every order includes a batch-specific Certificate of Analysis (COA) with lab-verified purity ≥99%. GMP-certified manufacturing partners guarantee pharmaceutical-grade quality.',
        buyEurope: 'Buy Steroids Europe — Pan-European Shipping',
        buyEuropeDesc: 'Fast steroid delivery across all of Europe. We ship to the UK, Netherlands, Germany, France, Spain, Italy, Belgium, Austria, Ireland, Portugal, and 20+ additional countries. All shipments use discreet, tamper-proof packaging. Whether you need testosterone for TRT, anabolic steroids for bodybuilding, or PCT compounds, Steroiden is the preferred European steroid supplier.',
        weightLoss: 'Cutting Steroids',
        weightLossDesc: 'Our cutting steroid catalog includes the most effective fat-burning compounds: Anavar (Oxandrolone), Winstrol (Stanozolol), Clenbuterol, and Trenbolone Acetate. Each product is lab-tested for purity ≥99% and supplied with comprehensive COA documentation. Ideal for competition prep, body recomposition, and achieving a lean physique.',
        muscleGrowth: 'Bulking Steroids for Muscle Growth',
        muscleGrowthDesc: 'Premium bulking steroids for maximum muscle growth: Testosterone Enanthate, Deca-Durabolin (Nandrolone), Dianabol (Methandrostenolone), Anadrol (Oxymetholone), and Trenbolone Enanthate. All compounds lab-verified at ≥99% purity. Fast dispatch and competitive pricing for serious bodybuilders.',
        cognitive: 'Testosterone & Hormone Therapy',
        cognitiveDesc: 'Complete testosterone range for hormone replacement therapy and performance enhancement: Testosterone Enanthate, Testosterone Cypionate, Testosterone Propionate, Sustanon 250, and HCG. Lab-verified purity with full COA documentation for every batch.',
        growthHormone: 'PCT & Cycle Support',
        growthHormoneDesc: 'Essential post-cycle therapy and cycle support compounds: Nolvadex (Tamoxifen), Clomid (Clomiphene), Arimidex (Anastrozole), HCG, and liver support supplements. All products pharmaceutical-grade with ≥99% purity verification.',
        browseAll: 'Browse Complete Steroid Catalog',
      },
      cta: {
        title: 'Get 10% Off Your First Order',
        subtitle: 'Join thousands of customers who trust Steroiden for premium quality steroids.',
        placeholder: 'Enter your email address',
        button: 'Get 10% Off',
      },
    },
    product: {
      addToCart: 'Add to Cart',
      addedToCart: 'Added to Cart',
      buyNow: 'Buy Now',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      purity: 'Purity',
      description: 'Description',
      specifications: 'Specifications',
      reviews: 'Reviews',
      faq: 'FAQ',
      relatedProducts: 'Related Products',
      viewOptions: 'View Options',
      wishlistAdd: 'Add to wishlist',
      wishlistRemove: 'Remove from wishlist',
      casNo: 'CAS No.',
      molecularWeight: 'Molecular Weight',
      storage: 'Storage',
      availableSizes: 'Available Sizes',
      priceRangeLabel: 'Price Range',
      downloadCoa: 'Download COA',
      researchOnlyTitle: 'Research Use Only',
      researchOnlyText: 'Not for human consumption',
      minQuantity: 'Min {qty}',
      off: 'OFF',
      pack: 'pack',
      packs: 'packs',
      vial: 'vial',
      vials: 'vials',
      bottle: 'bottle',
      bottles: 'bottles',
      unit: 'unit',
      units: 'units',
      pricePer: 'Price per',
      perUnit: 'per',
      selectQuantity: 'Select Quantity',
      belowMin: 'Below min',
      minRequired: 'Minimum Required',
      addMore: 'Add {count} more {unit}(s)',
      discountBanner: 'Up to 15% OFF + FREE delivery on orders over £{amount}',
      youSave: 'You save',
      trust: {
        purity: '≥99% Purity',
        coa: 'COA Included',
        delivery: 'Fast UK Delivery',
      },
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      heroTitle: 'Your Shopping Cart',
      heroSubtitle: '',
      secureCheckout: 'Secure Checkout',
      sslEncrypted: 'SSL Encrypted',
      checkoutSubtitle: 'Complete your order with confidence. All payments are encrypted and secure.',
      readyToCheckout: '✓ Ready to checkout',
      freeDeliveryIncluded: 'FREE delivery included!',
      addMoreForFreeDelivery: 'Add £{amount} more for FREE delivery',
      browsePeptides: 'Browse Steroids',
      cartItemsLabel: 'Cart Items',
      item: 'item',
      items: 'items',
      inStockFastDelivery: 'In Stock • Fast delivery',
      each: 'each',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      calculatedAtCheckout: 'Calculated at checkout',
      total: 'Total',
      checkout: 'Checkout',
      proceedToCheckout: 'Proceed to Checkout',
      secureSslEncryptedCheckout: 'Secure SSL encrypted checkout',
      orderSummary: 'Order Summary',
      bulkDiscountsApplied: 'Bulk Discounts Applied',
      freeDelivery: 'FREE Delivery',
      deliveryOptions: 'Delivery Options',
      standardDelivery: 'Standard Delivery',
      standardDeliveryTime: '3-5 business days',
      expressDelivery: 'Express Delivery',
      expressDeliveryTime: '1-2 business days',
      ordersOverThreshold: 'Orders over £{amount}',
      secureBadge: 'Secure',
      pureBadge: '≥99% Pure',
      fastDeliveryBadge: 'Fast Delivery',
      yourCartCount: 'Your Cart ({count})',
      closeCart: 'Close cart',
      addProductsToGetStarted: 'Add some products to get started!',
      browseProducts: 'Browse Products',
      viewCart: 'View Cart',
      addedToCart: 'Added to Cart!',
      continueShopping: 'Continue Shopping',
      remove: 'Remove',
      quantity: 'Quantity',
    },
    footer: {
      newsletter: 'Subscribe to our newsletter',
      subscribe: 'Subscribe',
      aboutUs: 'About Us',
      customerService: 'Customer Service',
      legal: 'Legal',
      termsAndConditions: 'Terms & Conditions',
      privacyPolicy: 'Privacy Policy',
      disclaimer: 'Disclaimer',
      coaPolicy: 'COA Policy',
      sitemap: 'Sitemap',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
      hoursValue: 'Mon - Fri: 9AM - 5PM',
      disclaimerLabel: 'Disclaimer',
      copyright: '© {year} Steroiden. All rights reserved.',
    },
    common: {
      all: 'All',
      viewOptions: 'View Options',
      learnMore: 'Learn More',
      readMore: 'Read More',
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success!',
      skipToMainContent: 'Skip to main content',
      free: 'Free',
      searchLabel: 'Search',
      searching: 'Searching...',
      noResultsFound: 'No results found for "{query}"',
      welcome: 'Welcome!',
      signInForBestExperience: 'Sign in for the best experience',
      signIn: 'Sign In',
      createAccount: 'Create Account',
      or: 'or',
      dashboard: 'Dashboard',
      myOrders: 'My Orders',
      settings: 'Settings',
      signOut: 'Sign Out',
      backTo: 'Back to',
      home: 'Home',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      notSet: 'Not set',
      important: 'Important',
    },
    legalPages: {
      lastUpdated: 'Last updated',
      terms: {
        title: 'Terms and Conditions',
        subtitle: 'Please read these terms carefully before using our website and services.',
        acceptance: { title: '1. Acceptance of Terms', content: 'By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our site.' },
        researchUse: { title: '2. Research Use Only', warning: 'ALL PRODUCTS SOLD ON THIS SITE ARE FOR LABORATORY RESEARCH PURPOSES ONLY.', notHumans: 'Humans or animals', notFood: 'Foods, drugs, or cosmetics', notHousehold: 'Household chemicals', acknowledgment: 'You acknowledge that the products have not been tested for safety or efficacy in food, drug, medical device, cosmetic, commercial or any other use.' },
        purchaser: { title: '3. Purchaser Representations', intro: 'By purchasing from Steroiden, you represent and warrant that:', age: 'You are at least 18 years of age.', institution: 'You are affiliated with a research institution, laboratory, or are a qualified researcher.', hazards: 'You are aware of the health and safety hazards associated with handling research chemicals.', handling: 'You will handle, store, and dispose of these products in accordance with all applicable laws and regulations.' },
        liability: { title: '4. Limitation of Liability', content: 'Steroiden shall not be liable for any special, incidental, or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.' },
        governing: { title: '5. Governing Law', content: 'These terms shall be governed by and construed in accordance with the laws of the European Union.' },
      },
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect your personal information.',
        infoCollect: { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you request a quote, create an account, or contact customer support. This may include your name, email address, institution, and shipping details.' },
        howUse: { title: '2. How We Use Your Information', intro: 'We use the information we collect to:', orders: 'Process your enquiries and orders.', coa: 'Send you technical information and COAs.', questions: 'Respond to your comments and questions.', legal: 'Comply with legal obligations regarding the sale of research chemicals.' },
        security: { title: '3. Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.' },
        cookies: { title: '4. Cookies', content: 'We use cookies to improve your experience on our site. You can control cookies through your browser settings.' },
      },
      disclaimer: {
        title: 'Research Use Only Disclaimer',
        subtitle: 'Important information about the intended use of our products.',
        warning: 'WARNING: NOT FOR HUMAN CONSUMPTION',
        warningText: 'The products offered by Steroiden are intended exclusively for laboratory research and development purposes.',
        lead: 'These products are not intended for use as food additives, drugs, cosmetics, household chemicals, or other inappropriate applications.',
        patent: 'The listing of a material on this site does not constitute a license to its use in infringement of any patent.',
        qualified: 'All products must be handled only by qualified and trained individuals. The customer acknowledges that there are hazards associated with the use of these products.',
        rights: 'Steroiden reserves the right to limit sales of products or not to sell products to unqualified customers.',
      },
      shipping: {
        title: 'Shipping Information',
        subtitle: 'Information about our shipping policies and procedures.',
        policyTitle: 'Shipping Policy',
        processing: 'Processing Time: Orders are processed within 1-2 business days.',
        method: 'Shipping Method: We use tracked courier services for all orders.',
        temperature: 'Temperature Control: Temperature-sensitive items are shipped with appropriate packaging.',
        returnsTitle: 'Returns Policy',
        customsTitle: 'Customs & Import Duties',
        customsContent: 'International customers are responsible for any customs duties or import taxes.',
      },
      coaPolicy: {
        title: 'Certificate of Analysis Policy',
        subtitle: 'Our commitment to quality and transparency.',
        batchTitle: 'Batch-Specific Testing',
        batchContent: 'Every batch of steroids undergoes comprehensive analytical testing before release.',
        methodsTitle: 'Verification Methods',
        hplc: 'HPLC Analysis: High-Performance Liquid Chromatography for purity verification.',
        ms: 'Mass Spectrometry: Confirmation of molecular identity and weight.',
        availTitle: 'Availability',
        availContent: 'COAs are available for download on each product page and are included with every order.',
      },
    },
  },
  nl: {
    nav: {
      menu: 'Menu',
      home: 'Home',
      peptides: 'steroïden',
      categories: 'Categorieën',
      allPeptides: 'Alle steroïden',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Blog',
      about: 'Over ons',
      quality: 'Kwaliteit',
      contact: 'Contact',
      cart: 'Winkelwagen',
      account: 'Account',
      search: 'Zoek steroïden...',
    },
    aboutPage: {
      title: 'Over Steroiden',
      subtitle: 'Europa\'s meest vertrouwde leverancier van premium anabole steroïden, testosteron en prestatieverhogende middelen met farmaceutische kwaliteit.',
      sections: {
        excellence: 'Toewijding aan farmaceutische kwaliteit',
        mission: 'Onze missie',
        quality: 'Kwaliteit eerst',
      },
      content: {
        excellence: 'Wij zijn een toegewijd team van farmaceutische experts en supply chain specialisten die zich inzetten voor het leveren van de hoogste kwaliteit anabole steroïden in heel Europa.',
        mission: 'Onze missie is om sporters en bodybuilders te voorzien van veilige, geteste en authentieke anabole steroïden. Elk product is laboratorium-getest en geleverd met een Certificaat van Analyse.',
        quality: 'In een industrie vol vervalsingen onderscheiden wij ons door transparantie en kwaliteit. Elk product wordt onafhankelijk getest op zuiverheid en authenticiteit.',
      },
      features: {
        hplc: 'Laboratorium getest',
        hplcSubtitle: 'Onafhankelijke kwaliteitscontrole',
        massSpec: 'Authenticiteitsgarantie',
        massSpecSubtitle: 'Elk product geverifieerd',
        storage: 'Strikte opslag',
        storageSubtitle: 'Optimale bewaarcondities',
      },
    },
    contactPage: {
      title: 'Neem contact op',
      subtitle: 'Vragen over onze producten of een offerte op maat nodig? Ons team helpt graag.',
      section: {
        sendMessage: 'Stuur ons een bericht',
      },
      form: {
        name: 'Naam',
        namePlaceholder: 'Jan Jansen',
        email: 'E-mailadres',
        emailPlaceholder: 'jan@voorbeeld.nl',
        subject: 'Onderwerp',
        subjectPlaceholder: 'Productvraag',
        message: 'Bericht',
        messagePlaceholder: 'Vertel ons over uw onderzoeksbehoeften...',
        submit: 'Bericht versturen',
        sending: 'Verzenden...',
        errorMessage: 'Er is een fout opgetreden. Probeer het opnieuw.',
      },
      info: {
        emailTitle: 'E-mail ons',
        emailSubtitle: 'Krijg antwoord binnen 24 uur',
        callTitle: 'Bel ons',
        callSubtitle: 'Ma - Vr: 9:00 - 17:00 CET',
        locationTitle: 'Locatie',
        locationValue: 'Steroiden<br>Europa',
      },
      successMessage: 'Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.',
    },
    shopPage: {
      title: 'Steroïden Kopen Nederland',
      subtitle: 'Bekijk onze catalogus van premium anabole steroïden. Testosteron, Winstrol, Deca-Durabolin en meer.',
      showing: '{count} producten',
      sort: {
        featured: 'Uitgelicht',
        priceLowHigh: 'Prijs: laag naar hoog',
        priceHighLow: 'Prijs: hoog naar laag',
        nameAZ: 'Naam: A-Z',
      },
    },
    faqPage: {
      title: 'Veelgestelde vragen',
      description: 'Vind antwoorden over anabole steroïden, bestellen, verzending en kwaliteitstesten. Krijg de informatie die u nodig heeft.',
      categoriesTitle: 'Categorieën',
      categories: {
        general: 'Algemene informatie',
        quality: 'Kwaliteit & testen',
        payment: 'Bestellen & betalen',
        shipping: 'Verzending & levering',
        international: 'Internationale bestellingen',
        storage: 'Opslag & behandeling',
        returns: 'Retourneren & terugbetaling',
      },
      cta: {
        title: 'Heeft u nog vragen?',
        description: 'Kunt u niet vinden wat u zoekt? Ons supportteam staat klaar om u te helpen.',
        button: 'Neem contact op',
      },
    },
    qualityPage: {
      title: 'Kwaliteitsgarantie',
      subtitle: 'Authenticiteit en zuiverheid staan centraal. Elk product wordt onafhankelijk getest en geleverd met volledige documentatie.',
      description: 'Onze toewijding aan kwaliteit. Leer over onze testprotocollen voor anabole steroïden en testosteron.',
      hplcTitle: 'Laboratoriumanalyse',
      hplcDescription: 'Onafhankelijke laboratoriumtests verifiëren de zuiverheid en dosering van elk product. Wij garanderen farmaceutische kwaliteit voor alle artikelen.',
      purityStandard: 'Zuiverheidsstandaard',
      msTitle: 'Identiteitsverificatie',
      msDescription: 'Spectroscopische analyse bevestigt de moleculaire identiteit en zuiverheid van elk product.',
      molecularConfirmation: 'Moleculaire bevestiging',
      verified: '100% Geverifieerd',
      coaTitle: 'Certificaat van Analyse (COA)',
      coaDescription: 'Transparantie is essentieel. Een analysecertificaat is beschikbaar voor elke batch die we produceren.',
      coaItems: {
        batchNumber: 'Batchnummer',
        dateOfAnalysis: 'Datum van analyse',
        molecularWeight: 'Molecuulgewicht',
        hplcChromatogram: 'HPLC-chromatogram',
        physicalAppearance: 'Fysiek uiterlijk',
        solubilityProfile: 'Oplosbaarheidsprofiel',
      },
      storageTitle: 'Opslag & behandeling',
      storageDescription: 'Om de productkwaliteit na levering te behouden, raden wij het volgende aan:',
      storageItems: {
        lyophilizedTitle: 'Koele opslag',
        lyophilizedDescription: 'Bewaar op een koele, droge plaats',
        lightProtectionTitle: 'Lichtbescherming',
        lightProtectionDescription: 'Houd weg van direct zonlicht',
        freezeThawTitle: 'Vries-dooi cycli',
        freezeThawDescription: 'Minimaliseer cycli om productintegriteit te behouden',
      },
    },
    shippingPage: {
      title: 'Verzendingsinformatie',
      subtitle: 'Snelle, veilige levering naar uw locatie',
      description: 'Leer over onze verzendmethodes, levertijden en verpakkingsstandaarden.',
    },
    termsPage: {
      title: 'Algemene voorwaarden',
      description: 'Lees deze voorwaarden zorgvuldig door voordat u onze diensten gebruikt.',
    },
    privacyPage: {
      title: 'Privacybeleid',
      description: 'Hoe wij uw persoonlijke informatie verzamelen, gebruiken en beschermen.',
    },
    disclaimerPage: {
      title: 'Disclaimer',
      description: 'Belangrijke juridische informatie over de aankoop van anabole steroïden.',
    },
    coaPolicyPage: {
      title: 'COA-beleid',
      description: 'Ons analysecertificaatbeleid en procedures.',
    },
    blogPage: {
      title: 'Onderzoeksblog',
      description: 'Laatste nieuws over steroïden, bodybuilding gidsen, kuurschema\'s en sportvoeding tips.',
      readMore: 'Lees meer',
      publishedOn: 'Gepubliceerd op',
      byAuthor: 'door',
      categories: 'Categorieën',
      recentPosts: 'Recente berichten',
      searchPosts: 'Zoek berichten...',
      noPosts: 'Geen berichten gevonden.',
      featuredArticles: 'Uitgelichte artikelen',
      latestArticles: 'Laatste artikelen',
      comingSoon: 'Binnenkort beschikbaar',
      comingSoonDesc: 'We werken aan spannende nieuwe content. Kom binnenkort terug voor onderzoeksinzichten en gidsen.',
      aboutBlog: 'Over onze blog',
      aboutBlogDesc: 'Onze blog biedt uitgebreide informatie over anabole steroïden, bodybuilding kuurschema\'s en sportvoeding. Van testosteron tot Winstrol, we delen expertkennis om uw trainingsdoelen te ondersteunen.',
      stayUpdated: 'Blijf op de hoogte',
      stayUpdatedDesc: 'Ontvang de nieuwste onderzoeksinzichten in uw inbox.',
      subscribe: 'Abonneren',
      emailPlaceholder: 'Uw e-mailadres',
      relatedArticles: 'Gerelateerde artikelen',
      shopPeptides: 'Shop Steroïden',
      shopPeptidesDesc: 'Bekijk onze selectie van premium anabole steroïden met gegarandeerde authenticiteit.',
      backToBlog: 'â† Terug naar blog',
      articleCount: '{count} artikel(en)',
    },
    learnPage: {
      title: 'Leer over steroïden',
      description: 'Educatieve bronnen over anabole steroïden en testosteron.',
      whatArePeptides: 'Wat zijn anabole steroïden?',
      whatArePeptidesDescription: 'Anabole steroïden zijn synthetische derivaten van testosteron die spiergroei en atletische prestaties bevorderen. Ze werken door binding aan androgeenreceptoren in spiercellen.',
      browsePeptides: 'Bekijk steroïden',
      understandingPeptides: 'Steroïden begrijpen',
      badge: 'Onderzoeksonderwijs',
      readTime: 'min leestijd',
      article: {
        introTitle: 'Understanding steroids',
        introParagraph1: 'Anabole steroïden zijn synthetische derivaten van testosteron, het belangrijkste mannelijke geslachtshormoon. Ze bevorderen spiergroei (anabool effect) en mannelijke kenmerken (androgeen effect). Steroïden worden veel gebruikt in de sportwereld voor het verbeteren van kracht, spiermassa en atletische prestaties.',
        introParagraph2: 'The human body naturally produces many steroids, including hormones like insulin (51 amino acids) and oxytocin (9 amino acids). These endogenous steroids regulate crucial functions including metabolism, immune response, cell signaling, and tissue repair.',
        keyPointLabel: 'Key Point',
        keyPointText: 'premium steroids are synthetic versions of natural or novel steroid sequences, manufactured to precise specifications for laboratory research. They allow scientists to study biological mechanisms that would otherwise be difficult to investigate.',
        structureTitle: 'The steroid Structure',
        structureSubtitle: 'Amino acids connected by steroid bonds form a steroid chain',
        aminoAcids: ['Gly', 'Ala', 'Leu', 'Val', 'Ile', 'Pro', 'Ser', 'Thr'],
        diagramCaption: 'Example: An octasteroid (8 amino acids) showing glycine, alanine, leucine, valine, isoleucine, proline, serine, and threonine',
        categoriesTitle: 'Categories of premium steroids',
        categoriesIntro: 'premium steroids are typically classified by their primary area of study or mechanism of action. Here are the main categories available for scientific research:',
        categories: [],
        synthesisTitle: 'How Are steroids Synthesized?',
        synthesisIntro: 'Modern steroid synthesis primarily uses Solid-Phase steroid Synthesis (SPPS), a revolutionary technique developed by Bruce Merrifield in 1963, for which he received the Nobel Prize in Chemistry in 1984.',
        steps: [
          {
            title: 'Attach to Resin',
            description: 'The first amino acid is attached to an insoluble polymer resin',
          },
          {
            title: 'Deprotection',
            description: 'Protective groups are removed from the amino acid',
          },
          {
            title: 'Coupling',
            description: 'Next amino acid is coupled to the growing chain',
          },
          {
            title: 'Cleavage',
            description: 'Completed steroid is cleaved from the resin and purified',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After synthesis, steroids undergo rigorous testing including HPLC analysis for purity verification and Mass Spectrometry for molecular weight confirmation. Only steroids meeting strict purity standards (typically ≥98%) are released for research use.',
        faqTitle: 'Frequently Asked Questions',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between steroids and proteins?',
            answer: 'The main difference is size. steroids typically contain 2-50 amino acids, while proteins contain more than 50 amino acids. Proteins have more complex three-dimensional structures and generally perform more diverse biological functions.',
          },
          {
            question: 'How are synthetic steroids made?',
            answer: 'Synthetic steroids are manufactured using solid-phase steroid synthesis (SPPS), developed by Bruce Merrifield in 1963. This process involves sequentially adding amino acids to a growing chain attached to a solid resin, allowing for precise control over the steroid sequence.',
          },
          {
            question: 'What does HPLC purity mean?',
            answer: 'HPLC (High-Performance Liquid Chromatography) purity indicates the percentage of the target compound in a sample. For example, 98% HPLC purity means 98% of the sample is the intended compound. Higher purity is essential for reliable research results.',
          },
          {
            question: 'Are premium steroids the same as pharmaceutical steroids?',
            answer: 'premium steroids are synthesized using similar methods but are intended solely for laboratory research, not human use. Pharmaceutical steroids undergo additional manufacturing standards, clinical trials, and regulatory approval for therapeutic applications.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Lyophilized (freeze-dried) steroids should be stored at -20°C for long-term storage. Short-term storage at 4°C is acceptable. Reconstituted steroids should be kept at 4°C and used within the timeframe specified on the Certificate of Analysis.',
          },
        ],
        ctaTitle: 'Ready to Start Your Research?',
        ctaSubtitle: 'Explore our complete catalog of high-purity premium steroids. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Steroïden Stacks & Bundels',
      description: 'Bespaar met onze samengestelde steroïdenstacks.',
      heroTitle: 'Steroïden Stacks & Bundels',
      heroDescription: 'Zorgvuldig samengestelde steroïdencombinaties voor optimale resultaten. Bespaar tot 20% vergeleken met individuele aankoop.',
      mostPopular: 'Meest populair',
      save: 'Bespaar',
      saveBadge: 'Bundelbesparing',
      addToCart: 'Bundel toevoegen aan winkelwagen',
      addedToCart: 'toegevoegd aan winkelwagen!',
      bundleNames: {
        recovery: 'Herstelonderzoek Stack',
        metabolic: 'Metabool Onderzoek Stack',
        growthHormone: '',
        cognitive: '',
        starter: 'Beginner Starter Kit',
      },
      recoveryTagline: 'Compleet herstelonderzoeksprotocol',
      recoveryDescription: 'De meest populaire combinatie voor weefselreparatie en herstelonderzoek. BPC-157 en TB-500 werken via complementaire mechanismen.',
      metabolicTagline: 'Geavanceerd metabool onderzoeksprotocol',
      metabolicDescription: 'Uitgebreid metabool onderzoek met de nieuwste GLP-1 receptor agonisten. Ideaal voor het bestuderen van eetlustregulatie en metabole routes.',
      ghTagline: 'Groeihormoon secretagoog stack',
      ghDescription: 'Een compleet groeihormoononderzoeksprotocol dat GHRH en GHRP steroïden combineert voor synergetische GH-afgifte studies.',
      cognitiveTagline: 'Nootropisch steroid onderzoeksprotocol',
      cognitiveDescription: 'Russisch ontwikkelde cognitieve steroïden voor neurowetenschappelijk onderzoek. Complementaire mechanismen gericht op BDNF en anxiolytische routes.',
      starterTagline: 'Perfecte introductie tot steroïdenonderzoek',
      starterDescription: 'Alles wat u nodig heeft om uw steroïdenonderzoeksreis te beginnen. Inclusief het meest bestudeerde steroid met alle benodigde benodigdheden.',
      features: {
        synergistic: 'Synergetische effecten',
        complementary: 'Complementaire mechanismen',
        complete: 'Compleet protocol',
        popular: 'Meest onderzocht',
        glp1: 'GLP-1 receptor agonist',
        dualAgonist: 'Dubbele GLP-1/GIP agonist',
        metabolic: 'Metabool onderzoek',
        suppliesIncluded: 'Benodigdheden inbegrepen',
        ghrhSynergy: 'GHRH + GHRP synergie',
        multipleSecretagogues: 'Meerdere secretagogen',
        ghPulse: 'GH pulsonderzoek',
        reconstitution: 'Reconstitutiebenodigdheden',
        bdnf: 'BDNF verhoging',
        neuroprotection: 'Neuroprotectief',
        complementaryMechanisms: 'Complementaire mechanismen',
        cognitiveEnhancement: 'Cognitief onderzoek',
        beginnerFriendly: 'Beginnersvriendelijk',
        completeSupplies: 'Complete benodigdheden',
        popularPeptide: 'Populair anabole steroid',
        excellentValue: 'Uitstekende waarde',
      },
    },
    wholesalePage: {
      title: 'Groothandel',
      subtitle: 'Bulk steroïden voor sportscholen en wederverkopers',
      description: 'Groothandel anabole steroïden voor laboratoria en instellingen. Bulkprijzen, toegewijde ondersteuning en flexibele betalingsvoorwaarden.',
      applyNow: 'Aanvragen voor groothandelsaccount',
      getStarted: 'Aan de slag',
      heroBadge: 'B2B anabole steroïden',
      heroTitle: 'Groothandel steroïden voor sportscholen en wederverkopers',
      heroDescription: 'Partner met Europa\'s betrouwbare steroïdenleverancier. Volumekortingen tot 30%, toegewijd accountbeheer en prioritaire afhandeling voor laboratoria en onderzoeksinstellingen.',
      minOrder: 'Minimale bestelling',
      mostPopular: 'Meest populair',
      offAllProducts: 'korting op alle producten',
      tiersLabel: 'Volumeprijzen',
      tiersTitle: 'Groothandelsprijsniveaus',
      tiersSubtitle: 'Hoe meer u bestelt, hoe meer u bespaart. Alle niveaus inclusief gratis verzending en prioritaire verwerking.',
      tiers: {
        starter: {
          feature1: '10% korting op Alle steroïden',
          feature2: 'Gratis standaard verzending',
          feature3: 'E-mail ondersteuning',
          feature4: 'COA inbegrepen bij elke bestelling',
        },
        professional: {
          feature1: '20% korting op Alle steroïden',
          feature2: 'Gratis express verzending',
          feature3: 'Prioritaire e-mail & telefoonondersteuning',
          feature4: 'Toegewijde accountmanager',
          feature5: 'Netto 30 betalingsvoorwaarden',
        },
        enterprise: {
          feature1: '30% korting op Alle steroïden',
          feature2: 'Zelfde dag verzending prioriteit',
          feature3: '24/7 toegewijde ondersteuningslijn',
          feature4: 'Aangepaste formuleringen beschikbaar',
          feature5: 'Netto 60 betalingsvoorwaarden',
          feature6: 'Kwartaal zakelijke reviews',
        },
      },
      benefitsLabel: 'Partnerschapsvoordelen',
      benefitsTitle: 'Waarom met ons samenwerken',
      benefitsSubtitle: 'Sluit u aan bij toonaangevende onderzoeksinstellingen in heel Europa die op ons vertrouwen voor hun steroïdenbehoeften.',
      benefits: {
        quality: {
          title: 'Gegarandeerde zuiverheid',
          description: 'Elke batch getest op ≥99% zuiverheid met volledige COA-documentatie.',
        },
        supply: {
          title: 'Betrouwbare levering',
          description: 'Consistente voorraadniveaus en prioritaire toewijzing voor groothandelspartners.',
        },
        support: {
          title: 'Toegewijde ondersteuning',
          description: 'Uw eigen accountmanager voor persoonlijke service en snelle probleemoplossing.',
        },
        documentation: {
          title: 'Volledige documentatie',
          description: 'Volledige COA, MSDS en compliance-documentatie voor uw administratie.',
        },
        payment: {
          title: 'Flexibele betaling',
          description: 'Netto 30/60 voorwaarden, meerdere betaalmethoden en kredietfaciliteiten.',
        },
        custom: {
          title: 'Maatwerkoplossingen',
          description: 'Aangepaste formuleringen, etikettering en verpakking op aanvraag beschikbaar.',
        },
      },
      applyLabel: 'Aan de slag',
      applyTitle: 'Aanvragen voor een groothandelsaccount',
      applySubtitle: 'Vul het onderstaande formulier in en ons team beoordeelt uw aanvraag binnen 24 uur.',
      form: {
        firstName: 'Voornaam',
        lastName: 'Achternaam',
        email: 'Zakelijk e-mailadres',
        organization: 'Organisatie / Instelling',
        country: 'Land',
        selectCountry: 'Selecteer uw land',
        otherEU: 'Ander EU-land',
        volume: 'Verwacht maandelijks volume',
        selectVolume: 'Selecteer verwacht volume',
        products: 'Producten van interesse',
        productsPlaceholder: 'In welke steroïden bent u geïnteresseerd?',
        additional: 'Aanvullende informatie',
        additionalPlaceholder: 'Vertel ons over uw onderzoeksbehoeften of specifieke vereisten...',
        submit: 'Aanvraag indienen',
        responseTime: 'We reageren meestal binnen 24 werkuren.',
      },
    },
    accountPage: {
      title: 'Mijn account',
      description: 'Beheer uw Steroiden-account. Bekijk bestellingen, volg zendingen en werk uw gegevens bij.',
      dashboard: 'Accountdashboard',
      totalOrders: 'Totaal bestellingen',
      inProgress: 'In behandeling',
      recentOrders: 'Recente bestellingen',
      myOrders: 'Mijn bestellingen',
      savedAddresses: 'Opgeslagen adressen',
      addressesSavedDuringCheckout: 'Adressen worden opgeslagen tijdens het afrekenen.',
      accountSettings: 'Accountinstellingen',
      profileInfo: 'Profielinformatie',
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      memberSince: 'Lid sinds',
      dangerZone: 'Gevarenzone',
      overview: 'Overzicht',
      orders: 'Mijn Bestellingen',
      addresses: 'Adressen',
      settings: 'Instellingen',
      logout: 'Uitloggen',
      googleAccount: 'Google Account',
      facebookAccount: 'Facebook Account',
      noOrders: 'Nog geen bestellingen',
      noOrdersDesc: 'Wanneer u een aankoop doet, verschijnen uw bestellingen hier.',
      shopNow: 'Nu Winkelen',
      noAddresses: 'Geen opgeslagen adressen',
      noAddressesDesc: 'Uw verzendadressen verschijnen hier na uw eerste bestelling.',
      editProfile: 'Profiel Bewerken',
      saveChanges: 'Wijzigingen Opslaan',
      cancel: 'Annuleren',
      phone: 'Telefoon',
      deleteAccount: 'Account Verwijderen',
      deleteAccountDesc: 'Zodra u uw account verwijdert, is er geen weg terug. Wees alstublieft zeker.',
      redirecting: 'Doorsturen naar inloggen...',
      completed: 'Voltooid',
      viewAll: 'Alles Bekijken',
      welcomeBack: 'Welkom terug',
      dashboardDesc: 'Beheer uw bestellingen, adressen en accountinstellingen vanuit uw dashboard.',
      phoneOptional: 'Telefoon (Optioneel)',
      placedOn: 'Geplaatst op',
      defaultBadge: 'STANDAARD',
    },
    checkout: {
      steps: {
        account: 'Account',
        shipping: 'Verzending',
        payment: 'Betaling',
        review: 'Overzicht',
      },
      titles: {
        accountDetails: 'Accountgegevens',
        shippingAddress: 'Verzendadres',
        paymentMethod: 'Betaalmethode',
        billingAddress: 'Factuuradres',
        deliveryMethod: 'Bezorgmethode',
        orderSummary: 'Besteloverzicht',
        shippingInformation: 'Verzendgegevens',
        reviewOrder: 'Controleer uw bestelling',
      },
      fields: {
        email: 'E-mailadres',
        password: 'Wachtwoord',
        confirmPassword: 'Bevestig wachtwoord',
        firstName: 'Voornaam',
        lastName: 'Achternaam',
        street: 'Straat en huisnummer',
        address: 'Adres',
        city: 'Stad',
        county: 'Provincie',
        postcode: 'Postcode',
        country: 'Land',
        phone: 'Telefoonnummer',
        phoneOptional: 'Telefoon (Optioneel)',
      },
      shipping: {
        standard: 'Standaard verzending',
        express: 'Express verzending',
        standardTime: '3-5 werkdagen',
        expressTime: '1-2 werkdagen',
        standardDelivery: 'Standaard Bezorging (3-5 werkdagen)',
        expressDelivery: 'Express Bezorging (1-2 werkdagen)',
        freeDeliveryMessage: 'Gratis bezorging bij bestellingen boven {amount}',
      },
      payment: {
        bankTransfer: 'Bankoverschrijving',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Betaal via directe bankoverschrijving',
        bitcoinDesc: 'Snel, veilig & privé betalen',
        bitcoinDiscount: '10% KORTING',
        bitcoinDiscountLabel: 'Bitcoin Korting (10%)',
        fastBadge: 'SNEL',
        ordersProcessedInfo: 'Bestellingen worden binnen 24 uur na bevestiging van betaling verwerkt',
        screenshotInfo: 'Stuur een screenshot van uw betalingsbevestiging via ons contactformulier om de orderverwerking te versnellen.',
      },
      actions: {
        continue: 'Doorgaan',
        continueToPayment: 'Doorgaan naar betaling',
        continueToReview: 'Doorgaan naar overzicht',
        placeOrder: 'Bestelling plaatsen',
        back: 'Terug',
        login: 'Inloggen',
        guest: 'Als gast afrekenen',
        signIn: 'Inloggen',
        signInContinue: 'Inloggen & doorgaan',
        signingIn: 'Bezig met inloggen...',
        createAccount: 'Account aanmaken',
        createAccountContinue: 'Account aanmaken & doorgaan',
        creatingAccount: 'Account aanmaken...',
        continueAsGuest: 'Doorgaan als gast',
        continueShopping: 'Verder winkelen',
        browsePeptides: 'Bekijk steroïden',
        viewMyOrders: 'Mijn bestellingen bekijken',
        copyAddress: 'Adres kopiëren',
        reviewOrder: 'Bestelling controleren',
        processing: 'Verwerken...',
        tryAgain: 'Opnieuw proberen',
        contactSupport: 'Neem contact op met ondersteuning',
      },
      account: {
        title: 'Hoe wilt u afrekenen?',
        subtitle: 'Maak een account aan om bestellingen te volgen, of ga door als gast',
        guestCheckout: 'Doorgaan als gast',
        guestDesc: 'Snel afrekenen zonder account aan te maken',
        signInOption: 'Inloggen',
        signInDesc: 'Heeft u al een account? Log in om door te gaan',
        createAccountOption: 'Account aanmaken',
        createAccountDesc: 'Bestellingen volgen, adressen opslaan & sneller afrekenen',
        recommended: 'AANBEVOLEN',
        orWithEmail: 'of met e-mail',
        dontHaveAccount: 'Geen account?',
        alreadyHaveAccount: 'Heeft u al een account?',
        createOne: 'Maak er een aan',
      },
      errors: {
        passwordsDoNotMatch: 'Wachtwoorden komen niet overeen',
        passwordTooShort: 'Wachtwoord moet minimaal 8 tekens bevatten',
      },
      empty: {
        title: 'Uw winkelwagen is leeg',
        description: 'Voeg eerst producten toe voor het afrekenen.',
      },
      minOrder: {
        title: 'Minimale bestelling vereist',
        currentTotal: 'Uw huidige winkelwagentotaal is',
        addMore: 'Voeg nog {amount} toe om door te gaan',
      },
      confirmation: {
        orderConfirmed: 'Bestelling bevestigd!',
        orderId: 'Bestelnummer',
        confirmationSent: 'Een bevestigingsmail is verzonden naar',
        paymentInstructions: 'Betaalinstructies volgen spoedig',
        paymentInstructionsDesc: 'Onze bankgegevens en betaalinstructies worden binnenkort naar {email} verzonden.',
        whatHappensNext: 'Wat gebeurt er nu?',
        whatHappensNextDesc: 'Controleer uw inbox voor een e-mail met onze bankgegevens en het over te maken bedrag: {amount}. Zodra wij uw betaling hebben ontvangen, sturen wij u een bevestiging en verzenden wij uw bestelling.',
        checkSpam: 'Geen e-mail ontvangen? Controleer uw spam-map of neem contact met ons op via het contactformulier.',
      },
      bitcoin: {
        completePayment: 'Voltooi uw Bitcoin-betaling',
        sendExactly: 'Stuur precies:',
        toAddress: 'Naar dit adres:',
        scanQRCode: 'Scan QR-code om te betalen',
        paymentExpires: 'Betaling verloopt over 15 minuten.',
        completeBeforeExpires: 'Voltooi de betaling voordat de timer afloopt.',
        paymentConfirmation: 'Zodra de betaling is bevestigd op de blockchain, ontvangt u een bevestigingsmail op',
        paymentInfo: 'U ontvangt een uniek Bitcoin-adres. Betaling verloopt over 15 minuten.',
        timeRemaining: 'Resterende tijd',
        monitoringPayment: 'Blockchain wordt gecontroleerd op uw betaling...',
        paymentDetected: 'Betaling gedetecteerd!',
        waitingConfirmation: 'Wachten op blockchain-bevestiging...',
        processing: 'Verwerken...',
        confirmationNotice: 'U ontvangt een e-mailbevestiging zodra uw betaling is bevestigd.',
        paymentConfirmed: 'Betaling bevestigd!',
        paymentReceived: 'Uw Bitcoin-betaling is ontvangen en bevestigd!',
        confirmationEmailSent: 'Een bevestigingsmail is verzonden naar',
        paymentExpired: 'Betalingstijd verlopen',
        orderCancelled: 'Uw bestelling is geannuleerd vanwege time-out van de betaling.',
        tryAgain: 'Probeer het opnieuw of neem contact op met support voor hulp.',
      },
      summary: {
        subtotal: 'Subtotaal',
        shipping: 'Verzending',
        discount: 'Korting',
        total: 'Totaal',
      },
      review: {
        shippingAddress: 'Verzendadres',
        paymentMethod: 'Betaalmethode',
        items: 'Artikelen',
        delivery: 'Bezorging',
        discountApplied: '10% korting toegepast',
        free: 'GRATIS',
        qty: 'Aantal',
      },
      security: {
        sslSecure: 'SSL Veilige Checkout',
        encryption: '256-bit encryptie',
        paymentMethodsDesc: 'Bankoverschrijving & Bitcoin geaccepteerd. Ordertracering inbegrepen.',
        weAccept: 'Wij Accepteren',
      },
      trust: {
        title: 'Waarom Met Vertrouwen Bestellen',
        purityTitle: '99%+ Zuiverheid Gegarandeerd',
        purityDesc: 'Alle producten geverifieerd via HPLC-testen',
        discreetTitle: 'Discrete Verpakking',
        discreetDesc: 'Neutrale verpakking zonder productlabels',
        dispatchTitle: 'Verzending Dezelfde Dag',
        dispatchDesc: 'Bestellingen vóór 14:00 uur verzonden dezelfde dag',
        supportTitle: 'EU-gebaseerde Ondersteuning',
        supportDesc: 'Echte klantenservice, geen bots',
        ordersTitle: '5000+ Bestellingen Geleverd',
        ordersDesc: 'Vertrouwd door EU onderzoekers',
      },
      badges: {
        ukShipping: 'EU Verzending',
        labTested: 'Lab Getest',
        fastDispatch: 'Snelle Verzending',
      },
    },
    reviews: {
      title: 'Klantbeoordelingen',
      showAll: 'Toon alle {count} beoordelingen',
      basedOn: 'Gebaseerd op {count} beoordelingen',
      stars: 'sterren',
      star: 'ster',
      verified: 'Geverifieerde aankoop',
      noReviews: 'Nog geen beoordelingen',
    },
    home: {
      heroBadge: 'Europese leverancier voor onderzoek',
      heroTitle: 'Premium',
      heroTitleHighlight: 'anabole steroïden',
      heroSubtitle: '',
      shopNow: 'Shop nu',
      viewLabReports: 'Labrapporten bekijken',
      ticker: {
        freeShipping: 'GRATIS VERZENDING',
        freeShippingText: 'bij bestellingen boven €150',
        sameDay: 'ZELFDE DAG VERZENDING',
        sameDayText: 'bij bestelling vóór 16:00',
        purity: '99%+ ZUIVERHEID',
        purityText: 'HPLC geverifieerd per batch',
        coa: 'COA INBEGREPEN',
        coaText: 'bij elke bestelling',
      },
      stats: {
        ordersDelivered: 'Bestellingen geleverd',
        purityGuarantee: 'Zuiverheidsgarantie',
        expressShipping: 'Express verzending',
        researchLabs: 'Onderzoekslabs',
      },
      categories: {
        title: 'Categorieën',
        subtitle: 'Zoek op onderzoeksdoel',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Best verkocht',
        subtitle: 'Topkeuzes van labs',
        viewAll: 'Alles bekijken',
        viewAllPeptides: 'Alle steroïden bekijken',
      },
      filters: {
        antiAging: 'Anti-aging',
      },
      about: {
        title: 'Over Steroiden',
        subtitle: 'Uw betrouwbare leverancier voor onderzoek.',
        description: '',
        learnMore: 'Meer over ons',
        features: {
          isoCertified: 'ISO Gecertificeerd',
          isoCertifiedDesc: 'Kwaliteitsmanagement',
          fastDispatch: 'Snelle verzending',
          fastDispatchDesc: '24-uurs verwerking',
          expertTeam: 'Expert team',
          expertTeamDesc: 'PhD wetenschappers',
          globalReach: 'Wereldwijd bereik',
          globalReachDesc: 'Wereldwijde verzending',
        },
      },
      blog: {
        title: 'Onderzoeksblog',
        subtitle: 'Laatste inzichten',
        viewAll: 'Alle artikelen bekijken',
      },
      testimonials: {
        title: 'Vertrouwd door wetenschappers',
        subtitle: 'Getuigenissen',
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Veelgestelde vragen',
        q1: 'Wat maakt jullie steroïden anders dan die van concurrenten?',
        a1: 'Onze steroïden ondergaan strenge HPLC- en massaspectrometrie-analyse met verificatie door derden. Elke batch wordt geleverd met een analysecertificaat (COA) dat 99,9%+ zuiverheid aantoont.',
        q2: 'Hoe snel kan ik mijn bestelling ontvangen?',
        a2: 'Alle bestellingen worden binnen 24 uur verzonden. We bieden standaardlevering (3-5 werkdagen) en expresverzending (1-2 werkdagen) aan.',
        q3: 'Leveren jullie analysecertificaten (COA)?',
        a3: 'Ja, elk product bevat een batchspecifiek COA met HPLC-chromatogram, massaspectrometriegegevens, zuiverheidspercentage en opslagaanbevelingen.',
        q4: 'Waar kan ik steroïden kopen in Europa?',
        a4: 'U kunt online steroïden kopen bij Steroiden met snelle levering in heel Europa. Levertijden variëren per bestemming en serviceniveau, en we bieden zowel standaard als express opties.',
        q5: 'Welke betaalmethoden accepteren jullie?',
        a5: 'We accepteren alle gangbare creditcards (Visa, MasterCard, American Express), PayPal en bankoverschrijvingen voor institutionele bestellingen. Alle transacties worden veilig verwerkt.',
        q6: 'Hoe moet ik mijn steroïden bewaren?',
        a6: 'Gelyofiliseerde steroïden moeten worden bewaard bij -20°C voor langdurige opslag. Na reconstitutie bewaren bij 2-8°C en gebruiken binnen de in de productdocumentatie aangegeven termijn. Altijd beschermen tegen licht en herhaalde vries-dooi cycli.',
        q7: 'Zijn jullie steroïden voor menselijke consumptie?',
        a7: 'Nee. Al onze steroïden worden uitsluitend verkocht voor onderzoeks- en laboratoriumgebruik. Ze zijn niet bedoeld voor menselijk of veterinair gebruik, voedseladditieven, medicijnen of cosmetische toepassingen.',
        q8: 'Kan ik een terugbetaling of vervanging krijgen bij problemen?',
        a8: 'Absoluut. Als u een product ontvangt dat niet voldoet aan onze geadverteerde zuiverheidsspecificaties, bieden we een volledige terugbetaling of vervanging. Neem contact op met ons supportteam met uw COA en eventuele ondersteunende documentatie binnen 30 dagen na ontvangst.',
      },
      seo: {
        title: 'steroïden Online Kopen {market} & Europa - Uw Complete Gids',
        buyLocal: 'steroïden kopen {market}',
        buyLocalDesc: '',
        buyEurope: 'steroïden kopen Europa',
        buyEuropeDesc: '',
        weightLoss: '',
        weightLossDesc: '',
        muscleGrowth: 'steroïden voor Spiergroeionderzoek',
        muscleGrowthDesc: '',
        cognitive: '',
        cognitiveDesc: '',
        growthHormone: '',
        growthHormoneDesc: '',
        browseAll: 'Bekijk Alle steroïden te Koop',
      },
      cta: {
        title: '10% korting op uw eerste bestelling',
        subtitle: 'Sluit u aan bij duizenden onderzoekers.',
        placeholder: 'Voer uw e-mailadres in',
        button: 'Krijg 10% korting',
      },
    },
    product: {
      addToCart: 'In winkelwagen',
      addedToCart: 'Toegevoegd',
      buyNow: 'Nu kopen',
      inStock: 'Op voorraad',
      outOfStock: 'Niet op voorraad',
      purity: 'Zuiverheid',
      description: 'Beschrijving',
      specifications: 'Specificaties',
      reviews: 'Beoordelingen',
      faq: 'FAQ',
      relatedProducts: 'Gerelateerde producten',
      viewOptions: 'Bekijk opties',
      wishlistAdd: 'Toevoegen aan verlanglijst',
      wishlistRemove: 'Verwijderen uit verlanglijst',
      casNo: 'CAS-nr.',
      molecularWeight: 'Molecuulgewicht',
      storage: 'Bewaring',
      availableSizes: 'Beschikbare formaten',
      priceRangeLabel: 'Prijsbereik',
      downloadCoa: 'COA downloaden',
      researchOnlyTitle: 'Alleen voor onderzoek',
      researchOnlyText: 'Niet voor menselijke consumptie',
      minQuantity: 'Min {qty}',
      off: 'KORTING',
      vial: 'flacon',
      vials: 'flacons',
      pack: 'verpakking',
      packs: 'verpakkingen',
      bottle: 'fles',
      bottles: 'flessen',
      unit: 'eenheid',
      units: 'eenheden',
      pricePer: 'Prijs per',
      perUnit: 'per',
      selectQuantity: 'Aantal kiezen',
      belowMin: 'Onder minimum',
      minRequired: 'Minimum vereist',
      addMore: 'Voeg {count} meer {unit}(s) toe',
      discountBanner: 'Tot 15% KORTING + GRATIS verzending boven £{amount}',
      youSave: 'Je bespaart',
      trust: {
        purity: '≥99% Zuiverheid',
        coa: 'COA Inbegrepen',
        delivery: 'Snelle levering NL',
      },
    },
    cart: {
      title: 'Winkelwagen',
      empty: 'Je winkelwagen is leeg',
      heroTitle: 'Je winkelwagen',
      heroSubtitle: '',
      secureCheckout: 'Veilig afrekenen',
      sslEncrypted: 'SSL-versleuteld',
      checkoutSubtitle: 'Rond je bestelling met vertrouwen af. Alle betalingen zijn versleuteld en veilig.',
      readyToCheckout: '✓ Klaar om af te rekenen',
      freeDeliveryIncluded: 'GRATIS levering inbegrepen!',
      addMoreForFreeDelivery: 'Voeg £{amount} toe voor GRATIS levering',
      browsePeptides: 'steroïden bekijken',
      cartItemsLabel: 'Winkelwagenitems',
      item: 'item',
      items: 'items',
      inStockFastDelivery: 'Op voorraad • Snelle levering',
      each: 'per stuk',
      subtotal: 'Subtotaal',
      shipping: 'Verzending',
      calculatedAtCheckout: 'Berekend bij het afrekenen',
      total: 'Totaal',
      checkout: 'Afrekenen',
      proceedToCheckout: 'Verder naar afrekenen',
      secureSslEncryptedCheckout: 'Veilig afrekenen met SSL-versleuteling',
      orderSummary: 'Besteloverzicht',
      bulkDiscountsApplied: 'Bulk-korting toegepast',
      freeDelivery: 'GRATIS levering',
      deliveryOptions: 'Bezorgopties',
      standardDelivery: 'Standaard bezorging',
      standardDeliveryTime: '3-5 werkdagen',
      expressDelivery: 'Express bezorging',
      expressDeliveryTime: '1-2 werkdagen',
      ordersOverThreshold: 'Bestellingen boven £{amount}',
      secureBadge: 'Veilig',
      pureBadge: '≥99% zuiver',
      fastDeliveryBadge: 'Snelle levering',
      yourCartCount: 'Je winkelwagen ({count})',
      closeCart: 'Winkelwagen sluiten',
      addProductsToGetStarted: 'Voeg producten toe om te beginnen!',
      browseProducts: 'Producten bekijken',
      viewCart: 'Winkelwagen bekijken',
      addedToCart: 'Toegevoegd aan winkelwagen!',
      continueShopping: 'Verder winkelen',
      remove: 'Verwijderen',
      quantity: 'Aantal',
    },
    footer: {
      newsletter: 'Schrijf u in voor onze nieuwsbrief',
      subscribe: 'Inschrijven',
      aboutUs: 'Over ons',
      customerService: 'Klantenservice',
      legal: 'Juridisch',
      termsAndConditions: 'Algemene voorwaarden',
      privacyPolicy: 'Privacybeleid',
      disclaimer: 'Disclaimer',
      coaPolicy: 'COA-beleid',
      sitemap: 'Sitemap',
      emailLabel: 'E-mail',
      hoursLabel: 'Openingstijden',
      hoursValue: 'Ma - Vr: 9:00 - 17:00',
      disclaimerLabel: 'Disclaimer',
      copyright: '© {year} Steroiden. Alle rechten voorbehouden.',
    },
    common: {
      all: 'Alle',
      viewOptions: 'Bekijk opties',
      learnMore: 'Meer info',
      readMore: 'Lees meer',
      loading: 'Laden...',
      error: 'Er is een fout opgetreden',
      success: 'Gelukt!',
      skipToMainContent: 'Naar hoofdinhoud',
      free: 'Gratis',
      searchLabel: 'Zoeken',
      searching: 'Zoeken...',
      noResultsFound: 'Geen resultaten voor "{query}"',
      welcome: 'Welkom!',
      signInForBestExperience: 'Log in voor de beste ervaring',
      signIn: 'Inloggen',
      createAccount: 'Account aanmaken',
      or: 'of',
      dashboard: 'Dashboard',
      myOrders: 'Mijn bestellingen',
      settings: 'Instellingen',
      signOut: 'Uitloggen',
      backTo: 'Terug naar',
      home: 'Home',
      name: 'Naam',
      email: 'E-mail',
      phone: 'Telefoon',
      notSet: 'Niet ingesteld',
      important: 'Belangrijk',
    },
    legalPages: {
      lastUpdated: 'Laatst bijgewerkt',
      terms: {
        title: 'Algemene Voorwaarden',
        subtitle: 'Lees deze voorwaarden zorgvuldig door voordat u onze website en diensten gebruikt.',
        acceptance: { title: '1. Aanvaarding van Voorwaarden', content: 'Door deze website te bezoeken en te gebruiken, gaat u akkoord met deze Algemene Voorwaarden. Als u niet akkoord gaat, gebruik onze site dan niet.' },
        researchUse: { title: '2. Uitsluitend voor Onderzoek', warning: 'ALLE PRODUCTEN OP DEZE SITE ZIJN UITSLUITEND VOOR LABORATORIUMONDERZOEK BESTEMD.', notHumans: 'Mensen of dieren', notFood: 'Voedingsmiddelen, medicijnen of cosmetica', notHousehold: 'Huishoudchemicaliën', acknowledgment: 'U erkent dat de producten niet zijn getest op veiligheid of werkzaamheid voor voedsel, medicijnen, medische hulpmiddelen, cosmetica, commercieel of enig ander gebruik.' },
        purchaser: { title: '3. Verklaringen van de Koper', intro: 'Door bij Steroiden te kopen, verklaart en garandeert u dat:', age: 'U bent minimaal 18 jaar oud.', institution: 'U bent verbonden aan een onderzoeksinstelling, laboratorium, of bent een gekwalificeerde onderzoeker.', hazards: 'U bent op de hoogte van de gezondheids- en veiligheidsrisico\'s verbonden aan het hanteren van onderzoekschemicaliën.', handling: 'U zult deze producten hanteren, opslaan en afvoeren in overeenstemming met alle toepasselijke wet- en regelgeving.' },
        liability: { title: '4. Beperking van Aansprakelijkheid', content: 'Steroiden is niet aansprakelijk voor enige speciale, incidentele of gevolgschade die voortvloeit uit het gebruik van, of het onvermogen om te gebruiken, de materialen op deze site of de prestaties van de producten.' },
        governing: { title: '5. Toepasselijk Recht', content: 'Deze voorwaarden worden beheerst door en geïnterpreteerd in overeenstemming met het recht van de Europese Unie.' },
      },
      privacy: {
        title: 'Privacybeleid',
        subtitle: 'Hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen.',
        infoCollect: { title: '1. Gegevens die We Verzamelen', content: 'Wij verzamelen gegevens die u rechtstreeks aan ons verstrekt, zoals wanneer u een offerte aanvraagt, een account aanmaakt of contact opneemt met onze klantenservice. Dit kan uw naam, e-mailadres, instelling en verzendgegevens omvatten.' },
        howUse: { title: '2. Hoe We Uw Gegevens Gebruiken', intro: 'Wij gebruiken de verzamelde gegevens om:', orders: 'Uw aanvragen en bestellingen te verwerken.', coa: 'U technische informatie en COA\'s te sturen.', questions: 'Op uw opmerkingen en vragen te reageren.', legal: 'Te voldoen aan wettelijke verplichtingen met betrekking tot de verkoop van onderzoekschemicaliën.' },
        security: { title: '3. Gegevensbeveiliging', content: 'Wij implementeren passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.' },
        cookies: { title: '4. Cookies', content: 'Wij gebruiken cookies om uw ervaring op onze site te verbeteren. U kunt cookies beheren via uw browserinstellingen.' },
      },
      disclaimer: {
        title: 'Disclaimer - Uitsluitend voor Onderzoek',
        subtitle: 'Belangrijke informatie over het beoogde gebruik van onze producten.',
        warning: 'WAARSCHUWING: NIET VOOR MENSELIJKE CONSUMPTIE',
        warningText: 'De producten van Steroiden zijn uitsluitend bestemd voor laboratoriumonderzoek en -ontwikkeling.',
        lead: 'Deze producten zijn niet bedoeld voor gebruik als voedingsadditieven, medicijnen, cosmetica, huishoudchemicaliën of andere ongepaste toepassingen.',
        patent: 'De vermelding van een materiaal op deze site vormt geen licentie voor het gebruik ervan in strijd met enig octrooi.',
        qualified: 'Alle producten mogen alleen worden gehanteerd door gekwalificeerde en getrainde personen. De klant erkent dat er gevaren verbonden zijn aan het gebruik van deze producten.',
        rights: 'Steroiden behoudt zich het recht voor om de verkoop van producten te beperken of niet te verkopen aan ongekwalificeerde klanten.',
      },
      shipping: {
        title: 'Verzendinformatie',
        subtitle: 'Informatie over ons verzendbeleid en procedures.',
        policyTitle: 'Verzendbeleid',
        processing: 'Verwerkingstijd: Bestellingen worden binnen 1-2 werkdagen verwerkt.',
        method: 'Verzendmethode: Wij gebruiken getraceerde koeriersdiensten voor alle bestellingen.',
        temperature: 'Temperatuurcontrole: Temperatuurgevoelige artikelen worden verzonden met gepaste verpakking.',
        returnsTitle: 'Retourbeleid',
        customsTitle: 'Douane en Invoerrechten',
        customsContent: 'Internationale klanten zijn verantwoordelijk voor eventuele douanerechten of invoerbelastingen.',
      },
      coaPolicy: {
        title: 'Certificaat van Analyse Beleid',
        subtitle: 'Onze toewijding aan kwaliteit en transparantie.',
        batchTitle: 'Batchspecifieke Testen',
        batchContent: 'Elke batch steroïden ondergaat uitgebreide analytische tests voor vrijgave.',
        methodsTitle: 'Verificatiemethoden',
        hplc: 'HPLC-analyse: High-Performance Liquid Chromatography voor zuiverheidsverificatie.',
        ms: 'Massaspectrometrie: Bevestiging van moleculaire identiteit en gewicht.',
        availTitle: 'Beschikbaarheid',
        availContent: 'COA\'s zijn beschikbaar voor download op elke productpagina en worden bij elke bestelling meegeleverd.',
      },
    },
  },
  de: {
    nav: {
      menu: 'Menü',
      home: 'Startseite',
      peptides: 'Steroide kaufen',
      categories: 'Kategorien',
      allPeptides: 'Alle Steroide',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Blog',
      about: 'Über uns',
      quality: 'Qualität & Reinheit',
      contact: 'Kontakt',
      cart: 'Warenkorb',
      account: 'Konto',
      search: 'Steroide suchen...',
    },
    aboutPage: {
      title: 'Steroide sicher kaufen – Über Steroiden',
      subtitle: 'Europas vertrauenswürdigster Anbieter für premium anabole Steroide, Testosteron und leistungssteigernde Mittel in pharmazeutischer Qualität.',
      sections: {
        excellence: 'Engagement für pharmazeutische Qualität',
        mission: 'Unsere Mission: steroid sicher kaufen',
        quality: 'Reinheit & Qualität zuerst',
      },
      content: {
        excellence: 'Wir sind ein engagiertes Team pharmazeutischer Experten, die sich der Lieferung hochwertigster anaboler Steroide in ganz Europa widmen.',
        mission: 'Unsere Mission ist es, Sportlern und Bodybuildern sichere, getestete und authentische anabole Steroide bereitzustellen. Jedes Produkt ist laborgeprüft und wird mit einem Analysezertifikat geliefert.',
        quality: 'In einer Branche voller Fälschungen heben wir uns durch Transparenz und Qualität ab. Jedes Produkt wird unabhängig auf Reinheit und Authentizität getestet.',
      },
      features: {
        hplc: 'Laborgetestet',
        hplcSubtitle: 'Unabhängige Qualitätskontrolle',
        massSpec: 'Echtheitsgarantie',
        massSpecSubtitle: 'Jedes Produkt verifiziert',
        storage: 'Kühlketten-Lagerung',
        storageSubtitle: 'Optimale Lagerbedingungen',
      },
    },
    contactPage: {
      title: 'Kontakt',
      subtitle: 'Fragen zu steroid kaufen oder ein individuelles Angebot? Unser Team hilft gerne.',
      section: {
        sendMessage: 'Nachricht senden',
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Max Mustermann',
        email: 'E-Mail-Adresse',
        emailPlaceholder: 'max@beispiel.de',
        subject: 'Betreff',
        subjectPlaceholder: 'Produktanfrage',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie uns von Ihren Forschungsbedürfnissen...',
        submit: 'Nachricht senden',
        sending: 'Senden...',
        errorMessage: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      },
      info: {
        emailTitle: 'E-Mail',
        emailSubtitle: 'Antwort innerhalb von 24 Stunden',
        callTitle: 'Anrufen',
        callSubtitle: 'Mo - Fr: 9:00 - 17:00 MEZ',
        locationTitle: 'Standort',
        locationValue: 'Steroiden<br>Europa',
      },
      successMessage: 'Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden.',
    },
    shopPage: {
      title: 'Steroide Kaufen Deutschland',
      subtitle: 'Entdecken Sie unseren Katalog an premium anabolen Steroiden. Testosteron, Winstrol, Deca-Durabolin und mehr.',
      showing: '{count} Produkte',
      sort: {
        featured: 'Empfohlen',
        priceLowHigh: 'Preis: aufsteigend',
        priceHighLow: 'Preis: absteigend',
        nameAZ: 'Name: A-Z',
      },
    },
    faqPage: {
      title: 'Häufige Fragen – steroid kaufen',
      description: 'Antworten zu Forschungssteroïden, Bestellung, Versand und Qualitätsprüfung. Alle wichtigen Informationen finden Sie hier.',
      categoriesTitle: 'Kategorien',
      categories: {
        general: 'Was sind steroid?',
        quality: 'Steroide Reinheit & Analyse',
        payment: 'Bestellung & Zahlung',
        shipping: 'Versand & Lieferung',
        international: 'Internationale Bestellungen',
        storage: 'Lagerung & Handhabung',
        returns: 'Rückgabe & Erstattung',
      },
      cta: {
        title: 'Noch Fragen?',
        description: 'Nicht gefunden, was Sie suchen? Unser Support-Team hilft Ihnen gerne weiter.',
        button: 'Kontakt',
      },
    },
    qualityPage: {
      title: 'Qualitätssicherung',
      subtitle: 'Authentizität und Reinheit stehen im Mittelpunkt. Jedes Produkt wird unabhängig getestet und mit vollständiger Dokumentation geliefert.',
      description: 'Unser Engagement für Qualität. Erfahren Sie mehr über unsere Testprotokolle für anabole Steroide und Testosteron.',
      hplcTitle: 'Laboranalyse',
      hplcDescription: 'Unabhängige Laboranalysen verifizieren die Reinheit und Dosierung jedes Produkts. Wir garantieren pharmazeutische Qualität.',
      purityStandard: 'Reinheitsstandard',
      msTitle: 'Identitätsverifikation',
      msDescription: 'Spektroskopische Analyse bestätigt die molekulare Identität und Reinheit jedes Produkts.',
      molecularConfirmation: 'Molekulare Bestätigung',
      verified: '100% Verifiziert',
      coaTitle: 'Analysezertifikat (COA)',
      coaDescription: 'Transparenz ist entscheidend. Ein Analysezertifikat ist für jede produzierte Charge verfügbar.',
      coaItems: {
        batchNumber: 'Chargennummer',
        dateOfAnalysis: 'Analysedatum',
        molecularWeight: 'Molekulargewicht',
        hplcChromatogram: 'HPLC-Chromatogramm',
        physicalAppearance: 'Physisches Erscheinungsbild',
        solubilityProfile: 'Löslichkeitsprofil',
      },
      storageTitle: 'Lagerung & Handhabung',
      storageDescription: 'Um die Produktqualität nach der Lieferung zu erhalten, empfehlen wir:',
      storageItems: {
        lyophilizedTitle: 'Lyophilisierte Lagerung',
        lyophilizedDescription: 'Bei -20°C sofort nach Erhalt lagern',
        lightProtectionTitle: 'Lichtschutz',
        lightProtectionDescription: 'Von direktem Sonnenlicht fernhalten',
        freezeThawTitle: 'Gefrier-Auftau-Zyklen',
        freezeThawDescription: 'Zyklen minimieren zur Erhaltung der steroidintegrität',
      },
    },
    shippingPage: {
      title: 'Versandinformationen',
      subtitle: 'Schnelle, sichere Lieferung an Ihren Standort',
      description: 'Erfahren Sie mehr über unsere Versandmethoden, Lieferzeiten und Verpackungsstandards.',
    },
    termsPage: {
      title: 'Allgemeine Geschäftsbedingungen',
      description: 'Bitte lesen Sie diese Bedingungen sorgfältig durch.',
    },
    privacyPage: {
      title: 'Datenschutzerklärung',
      description: 'Wie wir Ihre persönlichen Daten sammeln, nutzen und schützen.',
    },
    disclaimerPage: {
      title: 'Haftungsausschluss',
      description: 'Wichtige rechtliche Informationen zum Kauf anaboler Steroide.',
    },
    coaPolicyPage: {
      title: 'COA-Richtlinie',
      description: 'Unsere Analysezertifikat-Richtlinie und Verfahren.',
    },
    blogPage: {
      title: 'Forschungsblog',
      description: 'Neueste Nachrichten über Steroide, Bodybuilding-Guides, Kurpläne und Sporternährungstipps.',
      readMore: 'Weiterlesen',
      publishedOn: 'Veröffentlicht am',
      byAuthor: 'von',
      categories: 'Kategorien',
      recentPosts: 'Neueste Beiträge',
      searchPosts: 'Beiträge suchen...',
      noPosts: 'Keine Beiträge gefunden.',
      featuredArticles: 'Empfohlene Artikel',
      latestArticles: 'Neueste Artikel',
      comingSoon: 'Demnächst verfügbar',
      comingSoonDesc: 'Wir arbeiten an spannenden neuen Inhalten. Schauen Sie bald wieder vorbei für Forschungseinblicke und Leitfäden.',
      aboutBlog: 'Über unseren Blog',
      aboutBlogDesc: 'Unser Forschungsblog bietet Bildungsinhalte für Laborprofis und Forscher. Von Steroid-Handhabungsprotokollen bis zu den neuesten wissenschaftlichen Entwicklungen teilen wir Experteneinblicke zur Unterstützung Ihrer Forschung.',
      stayUpdated: 'Bleiben Sie informiert',
      stayUpdatedDesc: 'Erhalten Sie die neuesten Forschungseinblicke direkt in Ihr Postfach.',
      subscribe: 'Abonnieren',
      emailPlaceholder: 'Ihre E-Mail-Adresse',
      relatedArticles: 'Verwandte Artikel',
      shopPeptides: 'Steroide kaufen',
      shopPeptidesDesc: 'Stöbern Sie in unserer Auswahl an hochreinen Forschungssteroïden mit garantiert ≥99% Reinheit.',
      backToBlog: 'â† Zurück zum Blog',
      articleCount: '{count} Artikel',
    },
    learnPage: {
      title: 'Über Steroide lernen',
      description: 'Bildungsressourcen über anabole Steroide und Testosteron.',
      whatArePeptides: 'Was sind anabole Steroide?',
      whatArePeptidesDescription: 'Anabole Steroide sind synthetische Derivate von Testosteron, die Muskelwachstum und sportliche Leistung fördern. Sie binden an Androgenrezeptoren in Muskelzellen.',
      browsePeptides: 'Steroide durchsuchen',
      understandingPeptides: 'Steroide verstehen',
      badge: 'Forschungsbildung',
      readTime: 'Min. Lesezeit',
      article: {
        introTitle: 'Understanding steroids',
        introParagraph1: 'Anabole Steroide sind synthetische Derivate von Testosteron, dem wichtigsten männlichen Sexualhormon. Sie fördern Muskelwachstum (anabole Wirkung) und männliche Eigenschaften (androgene Wirkung). Steroide werden im Sport häufig zur Steigerung von Kraft, Muskelmasse und athletischer Leistung eingesetzt.',
        introParagraph2: 'The human body naturally produces many steroids, including hormones like insulin (51 amino acids) and oxytocin (9 amino acids). These endogenous steroids regulate crucial functions including metabolism, immune response, cell signaling, and tissue repair.',
        keyPointLabel: 'Key Point',
        keyPointText: 'premium steroids are synthetic versions of natural or novel steroid sequences, manufactured to precise specifications for laboratory research. They allow scientists to study biological mechanisms that would otherwise be difficult to investigate.',
        structureTitle: 'The steroid Structure',
        structureSubtitle: 'Amino acids connected by steroid bonds form a steroid chain',
        aminoAcids: ['Gly', 'Ala', 'Leu', 'Val', 'Ile', 'Pro', 'Ser', 'Thr'],
        diagramCaption: 'Example: An octasteroid (8 amino acids) showing glycine, alanine, leucine, valine, isoleucine, proline, serine, and threonine',
        categoriesTitle: 'Categories of premium steroids',
        categoriesIntro: 'premium steroids are typically classified by their primary area of study or mechanism of action. Here are the main categories available for scientific research:',
        categories: [],
        synthesisTitle: 'How Are steroids Synthesized?',
        synthesisIntro: 'Modern steroid synthesis primarily uses Solid-Phase steroid Synthesis (SPPS), a revolutionary technique developed by Bruce Merrifield in 1963, for which he received the Nobel Prize in Chemistry in 1984.',
        steps: [
          {
            title: 'Attach to Resin',
            description: 'The first amino acid is attached to an insoluble polymer resin',
          },
          {
            title: 'Deprotection',
            description: 'Protective groups are removed from the amino acid',
          },
          {
            title: 'Coupling',
            description: 'Next amino acid is coupled to the growing chain',
          },
          {
            title: 'Cleavage',
            description: 'Completed steroid is cleaved from the resin and purified',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After synthesis, steroids undergo rigorous testing including HPLC analysis for purity verification and Mass Spectrometry for molecular weight confirmation. Only steroids meeting strict purity standards (typically ≥98%) are released for research use.',
        faqTitle: 'Frequently Asked Questions',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between steroids and proteins?',
            answer: 'The main difference is size. steroids typically contain 2-50 amino acids, while proteins contain more than 50 amino acids. Proteins have more complex three-dimensional structures and generally perform more diverse biological functions.',
          },
          {
            question: 'How are synthetic steroids made?',
            answer: 'Synthetic steroids are manufactured using solid-phase steroid synthesis (SPPS), developed by Bruce Merrifield in 1963. This process involves sequentially adding amino acids to a growing chain attached to a solid resin, allowing for precise control over the steroid sequence.',
          },
          {
            question: 'What does HPLC purity mean?',
            answer: 'HPLC (High-Performance Liquid Chromatography) purity indicates the percentage of the target compound in a sample. For example, 98% HPLC purity means 98% of the sample is the intended compound. Higher purity is essential for reliable research results.',
          },
          {
            question: 'Are premium steroids the same as pharmaceutical steroids?',
            answer: 'premium steroids are synthesized using similar methods but are intended solely for laboratory research, not human use. Pharmaceutical steroids undergo additional manufacturing standards, clinical trials, and regulatory approval for therapeutic applications.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Lyophilized (freeze-dried) steroids should be stored at -20°C for long-term storage. Short-term storage at 4°C is acceptable. Reconstituted steroids should be kept at 4°C and used within the timeframe specified on the Certificate of Analysis.',
          },
        ],
        ctaTitle: 'Ready to Start Your Research?',
        ctaSubtitle: 'Explore our complete catalog of high-purity premium steroids. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Steroid-Stacks & Bundles',
      description: 'Sparen Sie mit unseren kuratierten Steroid-Stacks.',
      heroTitle: 'Steroid-Stacks & Bundles',
      heroDescription: 'Sorgfältig kuratierte Steroidkombinationen für umfassende Forschungsprotokolle. Sparen Sie bis zu 20% im Vergleich zu Einzelkäufen.',
      mostPopular: 'Am beliebtesten',
      save: 'Sparen',
      saveBadge: 'Bundle-Ersparnis',
      addToCart: 'Bundle in den Warenkorb',
      addedToCart: 'zum Warenkorb hinzugefügt!',
      bundleNames: {
        recovery: 'Erholungsforschung Stack',
        metabolic: 'Metabolische Forschung Stack',
        growthHormone: '',
        cognitive: '',
        starter: 'Steroid Starter Kit',
      },
      recoveryTagline: 'Komplettes Erholungsforschungsprotokoll',
      recoveryDescription: 'Die beliebteste Kombination für Gewebereparatur- und Erholungsforschung. BPC-157 und TB-500 wirken über komplementäre Mechanismen.',
      metabolicTagline: 'Fortgeschrittenes metabolisches Forschungsprotokoll',
      metabolicDescription: 'Umfassende metabolische Forschung mit den neuesten GLP-1-Rezeptoragonisten. Ideal für die Untersuchung von Appetitregulierung und Stoffwechselwegen.',
      ghTagline: 'Wachstumshormon-Sekretagogen-Stack',
      ghDescription: 'Ein komplettes Wachstumshormon-Forschungsprotokoll, das GHRH- und GHRP-steroid für synergistische GH-Freisetzungsstudien kombiniert.',
      cognitiveTagline: 'Nootropisches Steroid-Forschungsprotokoll',
      cognitiveDescription: 'Russisch entwickelte kognitive steroid für neurowissenschaftliche Forschung. Komplementäre Mechanismen, die auf BDNF und anxiolytische Wege abzielen.',
      starterTagline: 'Perfekte Einführung in die Steroidforschung',
      starterDescription: 'Alles, was Sie brauchen, um Ihre Steroidforschungsreise zu beginnen. Enthält das am meisten erforschte Steroid mit allem notwendigen Zubehör.',
      features: {
        synergistic: 'Synergistische Effekte',
        complementary: 'Komplementäre Mechanismen',
        complete: 'Vollständiges Protokoll',
        popular: 'Am meisten erforscht',
        glp1: 'GLP-1-Rezeptoragonist',
        dualAgonist: 'Dualer GLP-1/GIP-Agonist',
        metabolic: 'Metabolische Forschung',
        suppliesIncluded: 'Zubehör inklusive',
        ghrhSynergy: 'GHRH + GHRP Synergie',
        multipleSecretagogues: 'Mehrere Sekretagogen',
        ghPulse: 'GH-Puls-Forschung',
        reconstitution: 'Rekonstitutionszubehör',
        bdnf: 'BDNF-Verbesserung',
        neuroprotection: 'Neuroprotektiv',
        complementaryMechanisms: 'Komplementäre Mechanismen',
        cognitiveEnhancement: 'Kognitive Forschung',
        beginnerFriendly: 'Anfängerfreundlich',
        completeSupplies: 'Komplettes Zubehör',
        popularPeptide: 'Beliebtes Forschungssteroid',
        excellentValue: 'Ausgezeichnetes Preis-Leistungs-Verhältnis',
      },
    },
    wholesalePage: {
      title: 'Großhandel',
      subtitle: 'Bulk-Steroide für Fitnessstudios und Wiederverkäufer',
      description: 'Großhandel-Forschungssteroid für Labore und Institutionen. Mengenpreise, dedizierter Support und flexible Zahlungsbedingungen.',
      applyNow: 'Großhandelskonto beantragen',
      getStarted: 'Loslegen',
      heroBadge: 'B2B-anabole Steroide',
      heroTitle: 'Großhandel Steroide für Fitnessstudios und Wiederverkäufer',
      heroDescription: 'Partnern Sie mit Europas vertrauenswürdigem Steroidlieferanten. Mengenrabatte bis zu 30%, dediziertes Account-Management und Prioritätsabwicklung für Labore und Forschungseinrichtungen.',
      minOrder: 'Mindestbestellung',
      mostPopular: 'Am beliebtesten',
      offAllProducts: 'Rabatt auf alle Produkte',
      tiersLabel: 'Mengenpreise',
      tiersTitle: 'Großhandels-Preisstufen',
      tiersSubtitle: 'Je mehr Sie bestellen, desto mehr sparen Sie. Alle Stufen beinhalten kostenlosen Versand und Prioritätsverarbeitung.',
      tiers: {
        starter: {
          feature1: '10% Rabatt auf Alle Steroide',
          feature2: 'Kostenloser Standardversand',
          feature3: 'E-Mail-Support',
          feature4: 'COA bei jeder Bestellung inklusive',
        },
        professional: {
          feature1: '20% Rabatt auf Alle Steroide',
          feature2: 'Kostenloser Expressversand',
          feature3: 'Prioritäts-E-Mail- & Telefonsupport',
          feature4: 'Dedizierter Account-Manager',
          feature5: 'Netto 30 Zahlungsbedingungen',
        },
        enterprise: {
          feature1: '30% Rabatt auf Alle Steroide',
          feature2: 'Gleichtägiger Versand Priorität',
          feature3: '24/7 dedizierte Supportlinie',
          feature4: 'Kundenspezifische Formulierungen verfügbar',
          feature5: 'Netto 60 Zahlungsbedingungen',
          feature6: 'Vierteljährliche Geschäftsreviews',
        },
      },
      benefitsLabel: 'Partnerschaftsvorteile',
      benefitsTitle: 'Warum mit uns partnern',
      benefitsSubtitle: 'Schließen Sie sich führenden Forschungseinrichtungen in ganz Europa an, die uns für ihre Steroidversorgung vertrauen.',
      benefits: {
        quality: {
          title: 'Garantierte Reinheit',
          description: 'Jede Charge auf ≥99% Reinheit getestet mit vollständiger COA-Dokumentation.',
        },
        supply: {
          title: 'Zuverlässige Versorgung',
          description: 'Konstante Lagerbestände und Prioritätszuteilung für Großhandelspartner.',
        },
        support: {
          title: 'Dedizierter Support',
          description: 'Ihr eigener Account-Manager für persönlichen Service und schnelle Problemlösung.',
        },
        documentation: {
          title: 'Vollständige Dokumentation',
          description: 'Vollständige COA, MSDS und Compliance-Dokumentation für Ihre Unterlagen.',
        },
        payment: {
          title: 'Flexible Zahlung',
          description: 'Netto 30/60 Bedingungen, mehrere Zahlungsmethoden und Kreditfazilitäten.',
        },
        custom: {
          title: 'Maßgeschneiderte Lösungen',
          description: 'Kundenspezifische Formulierungen, Etikettierung und Verpackung auf Anfrage verfügbar.',
        },
      },
      applyLabel: 'Loslegen',
      applyTitle: 'Großhandelskonto beantragen',
      applySubtitle: 'Füllen Sie das untenstehende Formular aus und unser Team prüft Ihre Bewerbung innerhalb von 24 Stunden.',
      form: {
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'Geschäftliche E-Mail',
        organization: 'Organisation / Institution',
        country: 'Land',
        selectCountry: 'Wählen Sie Ihr Land',
        otherEU: 'Anderes EU-Land',
        volume: 'Erwartetes monatliches Volumen',
        selectVolume: 'Erwartetes Volumen wählen',
        products: 'Interessante Produkte',
        productsPlaceholder: 'An welchen steroïden sind Sie interessiert?',
        additional: 'Zusätzliche Informationen',
        additionalPlaceholder: 'Erzählen Sie uns von Ihren Forschungsbedürfnissen oder spezifischen Anforderungen...',
        submit: 'Bewerbung einreichen',
        responseTime: 'Wir antworten in der Regel innerhalb von 24 Geschäftsstunden.',
      },
    },
    accountPage: {
      title: 'Mein Konto',
      description: 'Verwalten Sie Ihr Steroiden-Konto. Bestellungen einsehen, Sendungen verfolgen und Ihre Daten aktualisieren.',
      dashboard: 'Konto-Dashboard',
      totalOrders: 'Gesamtbestellungen',
      inProgress: 'In Bearbeitung',
      recentOrders: 'Letzte Bestellungen',
      myOrders: 'Meine Bestellungen',
      savedAddresses: 'Gespeicherte Adressen',
      addressesSavedDuringCheckout: 'Adressen werden beim Checkout gespeichert.',
      accountSettings: 'Kontoeinstellungen',
      profileInfo: 'Profilinformationen',
      firstName: 'Vorname',
      lastName: 'Nachname',
      memberSince: 'Mitglied seit',
      dangerZone: 'Gefahrenzone',
      overview: 'Übersicht',
      orders: 'Meine Bestellungen',
      addresses: 'Adressen',
      settings: 'Einstellungen',
      logout: 'Abmelden',
      googleAccount: 'Google-Konto',
      facebookAccount: 'Facebook-Konto',
      noOrders: 'Noch keine Bestellungen',
      noOrdersDesc: 'Wenn Sie einen Kauf tätigen, erscheinen Ihre Bestellungen hier.',
      shopNow: 'Jetzt Einkaufen',
      noAddresses: 'Keine gespeicherten Adressen',
      noAddressesDesc: 'Ihre Lieferadressen erscheinen hier nach Ihrer ersten Bestellung.',
      editProfile: 'Profil Bearbeiten',
      saveChanges: 'Änderungen Speichern',
      cancel: 'Abbrechen',
      phone: 'Telefon',
      deleteAccount: 'Konto Löschen',
      deleteAccountDesc: 'Sobald Sie Ihr Konto löschen, gibt es kein Zurück. Bitte seien Sie sich sicher.',
      redirecting: 'Weiterleitung zur Anmeldung...',
      completed: 'Abgeschlossen',
      viewAll: 'Alle Anzeigen',
      welcomeBack: 'Willkommen zurück',
      dashboardDesc: 'Verwalten Sie Ihre Bestellungen, Adressen und Kontoeinstellungen über Ihr Dashboard.',
      phoneOptional: 'Telefon (Optional)',
      placedOn: 'Bestellt am',
      defaultBadge: 'STANDARD',
    },
    checkout: {
      steps: {
        account: 'Konto',
        shipping: 'Versand',
        payment: 'Zahlung',
        review: 'Prüfen',
      },
      titles: {
        accountDetails: 'Kontodetails',
        shippingAddress: 'Lieferadresse',
        paymentMethod: 'Zahlungsmethode',
        billingAddress: 'Rechnungsadresse',
        deliveryMethod: 'Versandart',
        orderSummary: 'Bestellübersicht',
        shippingInformation: 'Versandinformationen',
        reviewOrder: 'Bestellung überprüfen',
      },
      fields: {
        email: 'E-Mail-Adresse',
        password: 'Passwort',
        confirmPassword: 'Passwort bestätigen',
        firstName: 'Vorname',
        lastName: 'Nachname',
        street: 'Straße und Hausnummer',
        address: 'Adresse',
        city: 'Stadt',
        county: 'Bundesland',
        postcode: 'Postleitzahl',
        country: 'Land',
        phone: 'Telefonnummer',
        phoneOptional: 'Telefon (Optional)',
      },
      shipping: {
        standard: 'Standardversand',
        express: 'Expressversand',
        standardTime: '3-5 Werktage',
        expressTime: '1-2 Werktage',
        standardDelivery: 'Standardlieferung (3-5 Werktage)',
        expressDelivery: 'Expresslieferung (1-2 Werktage)',
        freeDeliveryMessage: 'Kostenloser Versand bei Bestellungen über {amount}',
      },
      payment: {
        bankTransfer: 'Banküberweisung',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Zahlung per Banküberweisung',
        bitcoinDesc: 'Schnell, sicher & privat bezahlen',
        bitcoinDiscount: '10% RABATT',
        bitcoinDiscountLabel: 'Bitcoin Rabatt (10%)',
        fastBadge: 'SCHNELL',
        ordersProcessedInfo: 'Bestellungen werden innerhalb von 24 Stunden nach Zahlungsbestätigung bearbeitet',
        screenshotInfo: 'Bitte senden Sie einen Screenshot Ihrer Zahlungsbestätigung über unser Kontaktformular, um die Bestellbearbeitung zu beschleunigen.',
      },
      actions: {
        continue: 'Weiter',
        continueToPayment: 'Weiter zur Zahlung',
        continueToReview: 'Weiter zur Prüfung',
        placeOrder: 'Bestellung aufgeben',
        back: 'Zurück',
        login: 'Anmelden',
        guest: 'Als Gast',
        signIn: 'Anmelden',
        signInContinue: 'Anmelden & fortfahren',
        signingIn: 'Anmeldung läuft...',
        createAccount: 'Konto erstellen',
        createAccountContinue: 'Konto erstellen & fortfahren',
        creatingAccount: 'Konto wird erstellt...',
        continueAsGuest: 'Als Gast fortfahren',
        continueShopping: 'Weiter einkaufen',
        browsePeptides: 'Steroide durchsuchen',
        viewMyOrders: 'Meine Bestellungen anzeigen',
        copyAddress: 'Adresse kopieren',
        reviewOrder: 'Bestellung prüfen',
        processing: 'Verarbeitung...',
      },
      account: {
        title: 'Wie möchten Sie bestellen?',
        subtitle: 'Erstellen Sie ein Konto, um Bestellungen zu verfolgen, oder fahren Sie als Gast fort',
        guestCheckout: 'Als Gast fortfahren',
        guestDesc: 'Schneller Checkout ohne Kontoerstellung',
        signInOption: 'Anmelden',
        signInDesc: 'Bereits ein Konto? Melden Sie sich an, um fortzufahren',
        createAccountOption: 'Konto erstellen',
        createAccountDesc: 'Bestellungen verfolgen, Adressen speichern & schneller bestellen',
        recommended: 'EMPFOHLEN',
        orWithEmail: 'oder mit E-Mail',
        dontHaveAccount: 'Noch kein Konto?',
        alreadyHaveAccount: 'Bereits ein Konto?',
        createOne: 'Jetzt erstellen',
      },
      errors: {
        passwordsDoNotMatch: 'Passwörter stimmen nicht überein',
        passwordTooShort: 'Passwort muss mindestens 8 Zeichen haben',
      },
      empty: {
        title: 'Ihr Warenkorb ist leer',
        description: 'Fügen Sie Produkte hinzu, bevor Sie zur Kasse gehen.',
      },
      minOrder: {
        title: 'Mindestbestellwert erforderlich',
        currentTotal: 'Ihr aktueller Warenkorbwert beträgt',
        addMore: 'Fügen Sie noch {amount} hinzu, um fortzufahren',
      },
      confirmation: {
        orderConfirmed: 'Bestellung bestätigt!',
        orderId: 'Bestellnummer',
        confirmationSent: 'Eine Bestätigungsmail wurde gesendet an',
        paymentInstructions: 'Zahlungsanweisungen folgen in Kürze',
        paymentInstructionsDesc: 'Unsere Bankdaten und Zahlungsanweisungen werden in Kürze an {email} gesendet.',
        whatHappensNext: 'Was passiert als Nächstes?',
        whatHappensNextDesc: 'Prüfen Sie Ihren Posteingang für eine E-Mail mit unseren Bankdaten und dem zu überweisenden Betrag: {amount}. Sobald wir Ihre Zahlung erhalten haben, senden wir Ihnen eine Bestätigung und versenden Ihre Bestellung.',
        checkSpam: 'Keine E-Mail erhalten? Prüfen Sie Ihren Spam-Ordner oder kontaktieren Sie uns über das Kontaktformular.',
      },
      bitcoin: {
        completePayment: 'Ihre Bitcoin-Zahlung abschließen',
        sendExactly: 'Senden Sie genau:',
        toAddress: 'An diese Adresse:',
        scanQRCode: 'QR-Code scannen zum Bezahlen',
        paymentExpires: 'Zahlung läuft in 15 Minuten ab.',
        completeBeforeExpires: 'Bitte schließen Sie die Zahlung vor Ablauf des Timers ab.',
        paymentConfirmation: 'Sobald die Zahlung auf der Blockchain bestätigt ist, erhalten Sie eine Bestätigungsmail an',
        paymentInfo: 'Sie erhalten eine eindeutige Bitcoin-Adresse. Zahlung läuft in 15 Minuten ab.',
        timeRemaining: 'Verbleibende Zeit',
        monitoringPayment: 'Blockchain wird auf Ihre Zahlung überwacht...',
        paymentDetected: 'Zahlung erkannt!',
        waitingConfirmation: 'Warten auf Blockchain-Bestätigung...',
        processing: 'Verarbeitung...',
        confirmationNotice: 'Sie erhalten eine E-Mail-Bestätigung, sobald Ihre Zahlung bestätigt ist.',
        paymentConfirmed: 'Zahlung bestätigt!',
        paymentReceived: 'Ihre Bitcoin-Zahlung wurde empfangen und bestätigt!',
        confirmationEmailSent: 'Eine Bestätigungsmail wurde gesendet an',
        paymentExpired: 'Zahlungszeit abgelaufen',
        orderCancelled: 'Ihre Bestellung wurde aufgrund eines Zahlungs-Timeouts storniert.',
        tryAgain: 'Bitte versuchen Sie es erneut oder kontaktieren Sie den Support.',
      },
      summary: {
        subtotal: 'Zwischensumme',
        shipping: 'Versand',
        discount: 'Rabatt',
        total: 'Gesamt',
      },
      review: {
        shippingAddress: 'Lieferadresse',
        paymentMethod: 'Zahlungsmethode',
        items: 'Artikel',
        delivery: 'Lieferung',
        discountApplied: '10% Rabatt angewendet',
        free: 'GRATIS',
        qty: 'Anzahl',
      },
      security: {
        sslSecure: 'SSL Sichere Zahlung',
        encryption: '256-Bit-Verschlüsselung',
        paymentMethodsDesc: 'Banküberweisung & Bitcoin akzeptiert. Sendungsverfolgung inklusive.',
        weAccept: 'Wir Akzeptieren',
      },
      trust: {
        title: 'Warum Mit Vertrauen Bestellen',
        purityTitle: '99%+ Reinheit Garantiert',
        purityDesc: 'Alle Produkte via HPLC-Tests verifiziert',
        discreetTitle: 'Diskrete Verpackung',
        discreetDesc: 'Neutrale Verpackung ohne Produktkennzeichnung',
        dispatchTitle: 'Versand Am Selben Tag',
        dispatchDesc: 'Bestellungen vor 14 Uhr werden am selben Tag versendet',
        supportTitle: 'EU-basierter Support',
        supportDesc: 'Echter Kundenservice, keine Bots',
        ordersTitle: '5000+ Bestellungen Geliefert',
        ordersDesc: 'Von EU-Forschern vertraut',
      },
      badges: {
        ukShipping: 'EU Versand',
        labTested: 'Laborgetestet',
        fastDispatch: 'Schneller Versand',
      },
    },
    reviews: {
      title: 'Kundenbewertungen',
      showAll: 'Alle {count} Bewertungen anzeigen',
      basedOn: 'Basierend auf {count} Bewertungen',
      stars: 'Sterne',
      star: 'Stern',
      verified: 'Verifizierter Kauf',
      noReviews: 'Noch keine Bewertungen',
    },
    home: {
      heroBadge: 'Steroide kaufen Deutschland – Ihr Steroiden',
      heroTitle: 'Steroide kaufen',
      heroTitleHighlight: 'legal & sicher',
      heroSubtitle: '',
      shopNow: 'Steroide kaufen',
      viewLabReports: 'COA-Zertifikate ansehen',
      ticker: {
        freeShipping: 'KOSTENLOSER VERSAND',
        freeShippingText: 'ab einem Bestellwert von €150',
        sameDay: 'VERSAND AM SELBEN TAG',
        sameDayText: 'bei Bestellung vor 16 Uhr',
        purity: '99%+ REINHEIT',
        purityText: 'HPLC-verifiziert für jede Charge',
        coa: 'COA INKLUSIVE',
        coaText: 'bei jeder Bestellung',
      },
      stats: {
        ordersDelivered: 'Bestellungen geliefert',
        purityGuarantee: 'Reinheitsgarantie',
        expressShipping: 'Expressversand DE',
        researchLabs: 'Forschungslabore',
      },
      categories: {
        title: 'Steroide Kategorien',
        subtitle: 'Entdecken Sie unsere Steroid-Kategorien:',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Meistverkaufte Steroide',
        subtitle: 'BPC-157, TB-500, Semaglutide & mehr',
        viewAll: 'Alle Steroide',
        viewAllPeptides: 'Alle Steroide kaufen',
      },
      filters: {
        antiAging: 'Anti-Aging Steroide',
      },
      about: {
        title: 'Warum Steroiden?',
        subtitle: 'Steroide sicher kaufen bei Deutschlands vertrauenswürdigstem Anbieter.',
        description: '',
        learnMore: 'Mehr erfahren',
        features: {
          isoCertified: 'ISO Zertifiziert',
          isoCertifiedDesc: 'Qualitätsmanagement',
          fastDispatch: 'Schneller Versand',
          fastDispatchDesc: '24-Stunden Bearbeitung',
          expertTeam: 'Experten-Team',
          expertTeamDesc: 'PhD Wissenschaftler',
          globalReach: 'Globale Reichweite',
          globalReachDesc: 'Weltweiter Versand',
        },
      },
      blog: {
        title: 'Forschungsblog',
        subtitle: 'Aktuelle Erkenntnisse',
        viewAll: 'Alle Artikel ansehen',
      },
      testimonials: {
        title: 'Von Wissenschaftlern vertraut',
        subtitle: 'Referenzen',
      },
      faq: {
        title: 'Häufige Fragen',
        subtitle: 'Häufig gestellte Fragen',
        q1: 'Was unterscheidet Ihre Steroide von denen der Konkurrenz?',
        a1: 'Unsere Steroide durchlaufen strenge Laboranalysen und Drittanbieterverifizierung. Jede Charge wird mit einem Analysezertifikat (COA) geliefert, das pharmazeutische Qualität belegt.',
        q2: 'Wie schnell kann ich meine Bestellung erhalten?',
        a2: 'Alle Bestellungen werden innerhalb von 24 Stunden versandt. Wir bieten Standardlieferung (3-5 Werktage) und Expressversand (1-2 Werktage) an.',
        q3: 'Stellen Sie Analysezertifikate (COA) bereit?',
        a3: 'Ja, jedes Produkt enthält ein chargenspezifisches COA mit HPLC-Chromatogramm, Massenspektrometrie-Daten, Reinheitsprozentsatz und Lagerungsempfehlungen.',
        q4: 'Wo kann ich Steroide in Europa kaufen?',
        a4: 'Sie können Steroide online bei Steroiden mit schneller Lieferung in ganz Europa kaufen. Die Lieferzeiten variieren je nach Zielort und Serviceniveau, und wir bieten sowohl Standard- als auch Expressoptionen an.',
        q5: 'Welche Zahlungsmethoden akzeptieren Sie?',
        a5: 'Wir akzeptieren alle gängigen Kreditkarten (Visa, MasterCard, American Express), PayPal und Banküberweisungen für institutionelle Bestellungen. Alle Transaktionen werden sicher verarbeitet.',
        q6: 'Wie sollte ich meine Steroide lagern?',
        a6: 'Steroide sollten an einem kühlen, trockenen Ort gelagert werden. Bewahren Sie sie fern von direktem Sonnenlicht und Feuchtigkeit auf. Beachten Sie die Lagerungshinweise auf der Produktverpackung.',
        q7: 'Sind Ihre Steroide legal erhältlich?',
        a7: 'Unsere Steroide werden unter Einhaltung aller geltenden Vorschriften verkauft. Bitte informieren Sie sich über die Gesetze in Ihrem Land bezüglich des Kaufs und Besitzes anaboler Steroide.',
        q8: 'Kann ich bei Problemen eine Rückerstattung oder einen Ersatz erhalten?',
        a8: 'Absolut. Wenn Sie ein Produkt erhalten, das nicht unseren beworbenen Reinheitsspezifikationen entspricht, bieten wir eine vollständige Rückerstattung oder einen Ersatz an. Bitte kontaktieren Sie unser Support-Team mit Ihrem COA und allen unterstützenden Unterlagen innerhalb von 30 Tagen nach Erhalt.',
      },
      seo: {
        title: 'Steroide Online Kaufen {market} & Europa - Ihr Kompletter Leitfaden',
        buyLocal: 'Steroide kaufen {market}',
        buyLocalDesc: '',
        buyEurope: 'Steroide kaufen Europa',
        buyEuropeDesc: '',
        weightLoss: '',
        weightLossDesc: '',
        muscleGrowth: 'Steroide für Muskelwachstumsforschung',
        muscleGrowthDesc: '',
        cognitive: '',
        cognitiveDesc: '',
        growthHormone: '',
        growthHormoneDesc: '',
        browseAll: 'Alle Steroide zum Verkauf durchsuchen',
      },
      cta: {
        title: '10% Rabatt auf Ihre erste Bestellung',
        subtitle: 'Steroide kaufen Deutschland – Jetzt Newsletter abonnieren.',
        placeholder: 'E-Mail-Adresse eingeben',
        button: '10% Rabatt sichern',
      },
    },
    product: {
      addToCart: 'In den Warenkorb',
      addedToCart: 'Hinzugefügt',
      buyNow: 'Jetzt kaufen',
      inStock: 'Auf Lager – Sofort lieferbar',
      outOfStock: 'Derzeit nicht verfügbar',
      purity: 'Reinheit (HPLC)',
      description: 'Beschreibung',
      specifications: 'Spezifikationen',
      reviews: 'Kundenbewertungen',
      faq: 'Häufige Fragen',
      relatedProducts: 'Weitere steroid kaufen',
      viewOptions: 'Optionen ansehen',
      wishlistAdd: 'Zur Wunschliste hinzufügen',
      wishlistRemove: 'Von der Wunschliste entfernen',
      casNo: 'CAS-Nr.',
      molecularWeight: 'Molekulargewicht',
      storage: 'Lagerung',
      availableSizes: 'Verfügbare Größen',
      priceRangeLabel: 'Preisspanne',
      downloadCoa: 'COA herunterladen',
      researchOnlyTitle: 'Nur für Forschungszwecke',
      researchOnlyText: 'Nicht für den menschlichen Verzehr',
      minQuantity: 'Min {qty}',
      off: 'RABATT',
      vial: 'Ampulle',
      vials: 'Ampullen',
      pack: 'Packung',
      packs: 'Packungen',
      bottle: 'Flasche',
      bottles: 'Flaschen',
      unit: 'Einheit',
      units: 'Einheiten',
      pricePer: 'Preis pro',
      perUnit: 'pro',
      selectQuantity: 'Menge wählen',
      belowMin: 'Unter Mindestbestellwert',
      minRequired: 'Mindestbestellwert erforderlich',
      addMore: 'Fügen Sie {count} weitere {unit}(en) hinzu',
      discountBanner: 'Bis zu 15% RABATT + KOSTENLOSER Versand ab £{amount}',
      youSave: 'Sie sparen',
      trust: {
        purity: '≥99% Reinheit',
        coa: 'COA-Zertifikat',
        delivery: 'Schneller Versand DE',
      },
    },
    cart: {
      title: 'Warenkorb',
      empty: 'Dein Warenkorb ist leer',
      heroTitle: 'Dein Warenkorb',
      heroSubtitle: '',
      secureCheckout: 'Sicherer Checkout',
      sslEncrypted: 'SSL-verschlüsselt',
      checkoutSubtitle: 'Schließe deine Bestellung sicher ab. Alle Zahlungen sind verschlüsselt und sicher.',
      readyToCheckout: '✓ Bereit zum Checkout',
      freeDeliveryIncluded: 'KOSTENLOSE Lieferung inklusive!',
      addMoreForFreeDelivery: 'Füge £{amount} hinzu für KOSTENLOSE Lieferung',
      browsePeptides: 'Steroide entdecken',
      cartItemsLabel: 'Warenkorbartikel',
      item: 'Artikel',
      items: 'Artikel',
      inStockFastDelivery: 'Auf Lager • Schnelle Lieferung',
      each: 'pro Stück',
      subtotal: 'Zwischensumme',
      shipping: 'Versand',
      calculatedAtCheckout: 'Wird beim Checkout berechnet',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
      proceedToCheckout: 'Weiter zur Kasse',
      secureSslEncryptedCheckout: 'Sicherer SSL-verschlüsselter Checkout',
      orderSummary: 'Bestellübersicht',
      bulkDiscountsApplied: 'Mengenrabatte angewendet',
      freeDelivery: 'KOSTENLOSE Lieferung',
      deliveryOptions: 'Lieferoptionen',
      standardDelivery: 'Standardversand',
      standardDeliveryTime: '3-5 Werktage',
      expressDelivery: 'Expressversand',
      expressDeliveryTime: '1-2 Werktage',
      ordersOverThreshold: 'Bestellungen über £{amount}',
      secureBadge: 'Sicher',
      pureBadge: '≥99% rein',
      fastDeliveryBadge: 'Schnelle Lieferung',
      yourCartCount: 'Dein Warenkorb ({count})',
      closeCart: 'Warenkorb schließen',
      addProductsToGetStarted: 'Füge Produkte hinzu, um zu starten!',
      browseProducts: 'Produkte ansehen',
      viewCart: 'Warenkorb ansehen',
      addedToCart: 'In den Warenkorb gelegt!',
      continueShopping: 'Weiter einkaufen',
      remove: 'Entfernen',
      quantity: 'Menge',
    },
    footer: {
      newsletter: 'Newsletter – 10% Rabatt sichern',
      subscribe: 'Abonnieren',
      aboutUs: 'Über Steroiden',
      customerService: 'Kundenservice',
      legal: 'Rechtliches',
      termsAndConditions: 'AGB',
      privacyPolicy: 'Datenschutz (DSGVO)',
      disclaimer: 'Haftungsausschluss',
      coaPolicy: 'COA-Zertifikate',
      sitemap: 'Seitenübersicht',
      emailLabel: 'E-Mail',
      hoursLabel: 'Erreichbarkeit',
      hoursValue: 'Mo – Fr: 9:00 – 17:00 Uhr',
      disclaimerLabel: 'Hinweis',
      copyright: '© {year} Steroiden – steroid kaufen Deutschland. Alle Rechte vorbehalten.',
    },
    common: {
      all: 'Alle',
      viewOptions: 'Optionen',
      learnMore: 'Mehr erfahren',
      readMore: 'Weiterlesen',
      loading: 'Lädt...',
      error: 'Ein Fehler ist aufgetreten',
      success: 'Erfolg!',
      skipToMainContent: 'Zum Hauptinhalt springen',
      free: 'Kostenlos',
      searchLabel: 'Suche',
      searching: 'Suche…',
      noResultsFound: 'Keine Ergebnisse für "{query}"',
      welcome: 'Willkommen!',
      signInForBestExperience: 'Melde dich an für das beste Erlebnis',
      signIn: 'Anmelden',
      createAccount: 'Konto erstellen',
      or: 'oder',
      dashboard: 'Dashboard',
      myOrders: 'Meine Bestellungen',
      settings: 'Einstellungen',
      signOut: 'Abmelden',
      backTo: 'Zurück zu',
      home: 'Startseite',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      notSet: 'Nicht festgelegt',
      important: 'Wichtig',
    },
    legalPages: {
      lastUpdated: 'Zuletzt aktualisiert',
      terms: {
        title: 'Allgemeine Geschäftsbedingungen',
        subtitle: 'Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Website und Dienste nutzen.',
        acceptance: { title: '1. Annahme der Bedingungen', content: 'Durch den Zugriff auf und die Nutzung dieser Website erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie unsere Seite bitte nicht.' },
        researchUse: { title: '2. Nur für Forschungszwecke', warning: 'ALLE AUF DIESER WEBSITE VERKAUFTEN PRODUKTE SIND AUSSCHLIESSLICH FÜR LABORFORSCHUNGSZWECKE BESTIMMT.', notHumans: 'Menschen oder Tiere', notFood: 'Lebensmittel, Arzneimittel oder Kosmetika', notHousehold: 'Haushaltschemikalien', acknowledgment: 'Sie erkennen an, dass die Produkte nicht auf Sicherheit oder Wirksamkeit für Lebensmittel, Arzneimittel, Medizinprodukte, Kosmetika, kommerzielle oder andere Verwendungszwecke getestet wurden.' },
        purchaser: { title: '3. Erklärungen des Käufers', intro: 'Mit dem Kauf bei Steroiden erklären und garantieren Sie, dass:', age: 'Sie mindestens 18 Jahre alt sind.', institution: 'Sie einer Forschungseinrichtung, einem Labor angehören oder ein qualifizierter Forscher sind.', hazards: 'Sie sich der Gesundheits- und Sicherheitsrisiken beim Umgang mit Forschungschemikalien bewusst sind.', handling: 'Sie diese Produkte in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften handhaben, lagern und entsorgen werden.' },
        liability: { title: '4. Haftungsbeschränkung', content: 'Steroiden haftet nicht für besondere, zufällige oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung der Materialien auf dieser Website oder der Leistung der Produkte resultieren.' },
        governing: { title: '5. Anwendbares Recht', content: 'Diese Bedingungen unterliegen dem Recht der Europäischen Union und werden entsprechend ausgelegt.' },
      },
      privacy: {
        title: 'Datenschutzerklärung',
        subtitle: 'Wie wir Ihre persönlichen Daten erfassen, verwenden und schützen.',
        infoCollect: { title: '1. Daten, die wir erfassen', content: 'Wir erfassen Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Angebot anfordern, ein Konto erstellen oder den Kundendienst kontaktieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse, Institution und Versanddetails umfassen.' },
        howUse: { title: '2. Wie wir Ihre Daten verwenden', intro: 'Wir verwenden die erfassten Informationen, um:', orders: 'Ihre Anfragen und Bestellungen zu bearbeiten.', coa: 'Ihnen technische Informationen und COAs zu senden.', questions: 'Auf Ihre Kommentare und Fragen zu antworten.', legal: 'Gesetzlichen Verpflichtungen beim Verkauf von Forschungschemikalien nachzukommen.' },
        security: { title: '3. Datensicherheit', content: 'Wir implementieren angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen.' },
        cookies: { title: '4. Cookies', content: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Sie können Cookies über Ihre Browsereinstellungen steuern.' },
      },
      disclaimer: {
        title: 'Haftungsausschluss - Nur für Forschungszwecke',
        subtitle: 'Wichtige Informationen über den bestimmungsgemäßen Gebrauch unserer Produkte.',
        warning: 'WARNUNG: NICHT FÜR DEN MENSCHLICHEN VERZEHR',
        warningText: 'Die von Steroiden angebotenen Produkte sind ausschließlich für Laborforschung und -entwicklung bestimmt.',
        lead: 'Diese Produkte sind nicht für die Verwendung als Lebensmittelzusatzstoffe, Arzneimittel, Kosmetika, Haushaltschemikalien oder andere unangemessene Anwendungen bestimmt.',
        patent: 'Die Auflistung eines Materials auf dieser Website stellt keine Lizenz für dessen Verwendung unter Verletzung eines Patents dar.',
        qualified: 'Alle Produkte dürfen nur von qualifizierten und geschulten Personen gehandhabt werden. Der Kunde erkennt an, dass mit der Verwendung dieser Produkte Gefahren verbunden sind.',
        rights: 'Steroiden behält sich das Recht vor, den Verkauf von Produkten einzuschränken oder nicht an unqualifizierte Kunden zu verkaufen.',
      },
      shipping: {
        title: 'Versandinformationen',
        subtitle: 'Informationen zu unseren Versandrichtlinien und -verfahren.',
        policyTitle: 'Versandrichtlinie',
        processing: 'Bearbeitungszeit: Bestellungen werden innerhalb von 1-2 Werktagen bearbeitet.',
        method: 'Versandmethode: Wir verwenden nachverfolgbare Kurierdienste für alle Bestellungen.',
        temperature: 'Temperaturkontrolle: Temperaturempfindliche Artikel werden mit geeigneter Verpackung versendet.',
        returnsTitle: 'Rückgaberichtlinie',
        customsTitle: 'Zoll und Einfuhrabgaben',
        customsContent: 'Internationale Kunden sind für eventuelle Zollgebühren oder Einfuhrsteuern verantwortlich.',
      },
      coaPolicy: {
        title: 'COA-Zertifikat Richtlinie',
        subtitle: 'Unser Engagement für Qualität und Transparenz.',
        batchTitle: 'Chargenspezifische Prüfung',
        batchContent: 'Jede Charge steroid durchläuft vor der Freigabe umfassende analytische Tests.',
        methodsTitle: 'Prüfmethoden',
        hplc: 'HPLC-Analyse: Hochleistungsflüssigkeitschromatographie zur Reinheitsprüfung.',
        ms: 'Massenspektrometrie: Bestätigung der molekularen Identität und des Gewichts.',
        availTitle: 'Verfügbarkeit',
        availContent: 'COAs stehen auf jeder Produktseite zum Download bereit und werden jeder Bestellung beigelegt.',
      },
    },
  },
  fr: {
    nav: {
      menu: 'Menu',
      home: 'Accueil',
      peptides: 'Stéroïdes',
      categories: 'Catégories',
      allPeptides: 'Tous les stéroïdes',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Blog',
      about: 'À propos',
      quality: 'Qualité',
      contact: 'Contact',
      cart: 'Panier',
      account: 'Compte',
      search: 'Rechercher stéroïdes…',
    },
    aboutPage: {
      title: 'À propos de Steroiden',
      subtitle: 'Le fournisseur européen le plus fiable de stéroïdes anabolisants premium, testostérone et produits de performance de qualité pharmaceutique.',
      sections: {
        excellence: 'Engagement envers la qualité pharmaceutique',
        mission: 'Notre mission',
        quality: 'Qualité avant tout',
      },
      content: {
        excellence: 'Nous sommes une équipe dévouée d\'experts pharmaceutiques engagés à fournir les stéroïdes anabolisants de la plus haute qualité à travers l\'Europe.',
        mission: 'Notre mission est de fournir aux athlètes et bodybuilders des stéroïdes anabolisants sûrs, testés et authentiques. Chaque produit est testé en laboratoire et livré avec un Certificat d\'Analyse.',
        quality: 'Dans une industrie pleine de contrefaçons, nous nous distinguons par la transparence et la qualité. Chaque produit est testé indépendamment pour la pureté et l\'authenticité.',
      },
      features: {
        hplc: 'Testé en laboratoire',
        hplcSubtitle: 'Contrôle qualité indépendant',
        massSpec: 'Garantie d\'authenticité',
        massSpecSubtitle: 'Chaque produit vérifié',
        storage: 'Stockage strict',
        storageSubtitle: 'Conditions de stockage optimales',
      },
    },
    contactPage: {
      title: 'Nous contacter',
      subtitle: 'Des questions ou besoin d\'un devis ? Notre équipe est là pour aider.',
      section: {
        sendMessage: 'Envoyer un message',
      },
      form: {
        name: 'Nom',
        namePlaceholder: 'Jean Dupont',
        email: 'Adresse e-mail',
        emailPlaceholder: 'jean@exemple.fr',
        subject: 'Objet',
        subjectPlaceholder: 'Demande de produit',
        message: 'Message',
        messagePlaceholder: 'Parlez-nous de vos besoins de recherche...',
        submit: 'Envoyer',
        sending: 'Envoi en cours...',
        errorMessage: 'Une erreur s\'est produite. Veuillez réessayer.',
      },
      info: {
        emailTitle: 'Email',
        emailSubtitle: 'Réponse sous 24 heures',
        callTitle: 'Téléphone',
        callSubtitle: 'Lun - Ven: 9h00 - 17h00 CET',
        locationTitle: 'Adresse',
        locationValue: 'Steroiden<br>Europe',
      },
      successMessage: 'Merci pour votre message ! Nous vous répondrons sous 24 heures.',
    },
    shopPage: {
      title: 'Acheter Stéroïdes France',
      subtitle: 'Découvrez notre catalogue de stéroïdes anabolisants premium. Testostérone, Winstrol, Deca-Durabolin et plus.',
      showing: '{count} produits',
      sort: {
        featured: 'En vedette',
        priceLowHigh: 'Prix : croissant',
        priceHighLow: 'Prix : décroissant',
        nameAZ: 'Nom : A-Z',
      },
    },
    faqPage: {
      title: 'Questions fréquentes',
      description: 'Trouvez des réponses sur les steroids de recherche, les commandes, la livraison et les tests de qualité.',
      categoriesTitle: 'Catégories',
      categories: {
        general: 'Informations générales',
        quality: 'Qualité & tests',
        payment: 'Commande & paiement',
        shipping: 'Expédition & livraison',
        international: 'Commandes internationales',
        storage: 'Stockage & manipulation',
        returns: 'Retours & remboursements',
      },
      cta: {
        title: 'Encore des questions ?',
        description: 'Vous ne trouvez pas ce que vous cherchez ? Notre équipe support est là pour vous aider.',
        button: 'Nous contacter',
      },
    },
    qualityPage: {
      title: 'Assurance qualité',
      subtitle: 'Pour les athlètes et bodybuilders, la qualité des stéroïdes anabolisants est primordiale. Nous mettons en œuvre des contrôles rigoureux pour garantir l\'authenticité et la pureté.',
      description: 'Notre engagement envers la qualité. Découvrez nos protocoles de test en laboratoire et de vérification d\'authenticité.',
      hplcTitle: 'Tests en laboratoire',
      hplcDescription: 'Chaque lot de stéroïdes anabolisants est testé en laboratoire indépendant pour vérifier la pureté et le dosage. Nous garantissons l\'authenticité de chaque produit.',
      purityStandard: 'Norme de qualité',
      msTitle: 'Vérification d\'authenticité',
      msDescription: 'Chaque stéroïde est vérifié pour son authenticité et sa composition exacte, garantissant que vous recevez exactement ce qui est indiqué sur l\'étiquette.',
      molecularConfirmation: 'Confirmation d\'authenticité',
      verified: '100% Authentique',
      coaTitle: 'Certificat d\'analyse (COA)',
      coaDescription: 'La transparence est essentielle. Un certificat d\'analyse est disponible pour chaque lot de stéroïdes produit.',
      coaItems: {
        batchNumber: 'Numéro de lot',
        dateOfAnalysis: 'Date d\'analyse',
        molecularWeight: 'Dosage vérifié',
        hplcChromatogram: 'Résultats de laboratoire',
        physicalAppearance: 'Aspect physique',
        solubilityProfile: 'Profil du produit',
      },
      storageTitle: 'Stockage & manipulation',
      storageDescription: 'Pour maintenir la qualité de vos stéroïdes après livraison, nous recommandons :',
      storageItems: {
        lyophilizedTitle: 'Stockage au frais',
        lyophilizedDescription: 'Conserver dans un endroit frais et sec dès réception',
        lightProtectionTitle: 'Protection contre la lumière',
        lightProtectionDescription: 'Tenir à l\'abri de la lumière directe',
        freezeThawTitle: 'Température stable',
        freezeThawDescription: 'Éviter les variations extrêmes de température pour préserver la qualité',
      },
    },
    shippingPage: {
      title: 'Informations de livraison',
      subtitle: 'Livraison rapide et sécurisée',
      description: 'Découvrez nos méthodes d\'expédition, délais de livraison et normes d\'emballage.',
    },
    termsPage: {
      title: 'Conditions générales',
      description: 'Veuillez lire attentivement ces conditions avant d\'utiliser nos services.',
    },
    privacyPage: {
      title: 'Politique de confidentialité',
      description: 'Comment nous collectons, utilisons et protégeons vos informations personnelles.',
    },
    disclaimerPage: {
      title: 'Avertissement',
      description: 'Informations juridiques importantes concernant l\'achat de stéroïdes anabolisants.',
    },
    coaPolicyPage: {
      title: 'Politique COA',
      description: 'Notre politique et procédures de certificat d\'analyse.',
    },
    blogPage: {
      title: 'Blog de recherche',
      description: 'Dernières nouvelles sur les stéroïdes, guides de musculation, protocoles de cure et conseils nutrition sportive.',
      readMore: 'Lire la suite',
      publishedOn: 'Publié le',
      byAuthor: 'par',
      categories: 'Catégories',
      recentPosts: 'Articles récents',
      searchPosts: 'Rechercher...',
      noPosts: 'Aucun article trouvé.',
      featuredArticles: 'Articles en vedette',
      latestArticles: 'Derniers articles',
      comingSoon: 'Bientôt disponible',
      comingSoonDesc: 'Nous travaillons sur du nouveau contenu passionnant. Revenez bientôt pour des aperçus de recherche et des guides.',
      aboutBlog: 'À propos de notre blog',
      aboutBlogDesc: 'Notre blog de recherche fournit du contenu éducatif pour les professionnels de laboratoire et les chercheurs. Des protocoles de manipulation des steroids aux dernières avancées scientifiques, nous partageons des informations d\'experts pour soutenir votre recherche.',
      stayUpdated: 'Restez informé',
      stayUpdatedDesc: 'Recevez les dernières informations de recherche dans votre boîte mail.',
      subscribe: 'S\'abonner',
      emailPlaceholder: 'Votre adresse e-mail',
      relatedArticles: 'Articles connexes',
      shopPeptides: 'Acheter des stéroïdes',
      shopPeptidesDesc: 'Parcourez notre sélection de stéroïdes anabolisants premium avec authenticité garantie.',
      backToBlog: 'â† Retour au blog',
      articleCount: '{count} article(s)',
    },
    learnPage: {
      title: 'En savoir plus sur les stéroïdes',
      description: 'Ressources éducatives sur les stéroïdes anabolisants et la testostérone.',
      whatArePeptides: 'Que sont les stéroïdes anabolisants ?',
      whatArePeptidesDescription: 'Les stéroïdes anabolisants sont des dérivés synthétiques de la testostérone qui favorisent la croissance musculaire et les performances athlétiques. Ils agissent en se liant aux récepteurs androgènes dans les cellules musculaires.',
      browsePeptides: 'Parcourir les stéroïdes',
      understandingPeptides: 'Comprendre les stéroïdes',
      badge: 'Éducation à la recherche',
      readTime: 'min de lecture',
      article: {
        introTitle: 'Understanding steroids',
        introParagraph1: 'Les stéroïdes anabolisants sont des dérivés synthétiques de la testostérone, la principale hormone sexuelle masculine. Ils favorisent la croissance musculaire (effet anabolisant) et les caractéristiques masculines (effet androgène). Les stéroïdes sont largement utilisés dans le sport pour améliorer la force, la masse musculaire et les performances athlétiques.',
        introParagraph2: 'The human body naturally produces many steroids, including hormones like insulin (51 amino acids) and oxytocin (9 amino acids). These endogenous steroids regulate crucial functions including metabolism, immune response, cell signaling, and tissue repair.',
        keyPointLabel: 'Key Point',
        keyPointText: 'premium steroids are synthetic versions of natural or novel steroid sequences, manufactured to precise specifications for laboratory research. They allow scientists to study biological mechanisms that would otherwise be difficult to investigate.',
        structureTitle: 'The steroid Structure',
        structureSubtitle: 'Amino acids connected by steroid bonds form a steroid chain',
        aminoAcids: ['Gly', 'Ala', 'Leu', 'Val', 'Ile', 'Pro', 'Ser', 'Thr'],
        diagramCaption: 'Example: An octasteroid (8 amino acids) showing glycine, alanine, leucine, valine, isoleucine, proline, serine, and threonine',
        categoriesTitle: 'Categories of premium steroids',
        categoriesIntro: 'premium steroids are typically classified by their primary area of study or mechanism of action. Here are the main categories available for scientific research:',
        categories: [],
        synthesisTitle: 'How Are steroids Synthesized?',
        synthesisIntro: 'Modern steroid synthesis primarily uses Solid-Phase steroid Synthesis (SPPS), a revolutionary technique developed by Bruce Merrifield in 1963, for which he received the Nobel Prize in Chemistry in 1984.',
        steps: [
          {
            title: 'Attach to Resin',
            description: 'The first amino acid is attached to an insoluble polymer resin',
          },
          {
            title: 'Deprotection',
            description: 'Protective groups are removed from the amino acid',
          },
          {
            title: 'Coupling',
            description: 'Next amino acid is coupled to the growing chain',
          },
          {
            title: 'Cleavage',
            description: 'Completed steroid is cleaved from the resin and purified',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After synthesis, steroids undergo rigorous testing including HPLC analysis for purity verification and Mass Spectrometry for molecular weight confirmation. Only steroids meeting strict purity standards (typically ≥98%) are released for research use.',
        faqTitle: 'Frequently Asked Questions',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between steroids and proteins?',
            answer: 'The main difference is size. steroids typically contain 2-50 amino acids, while proteins contain more than 50 amino acids. Proteins have more complex three-dimensional structures and generally perform more diverse biological functions.',
          },
          {
            question: 'How are synthetic steroids made?',
            answer: 'Synthetic steroids are manufactured using solid-phase steroid synthesis (SPPS), developed by Bruce Merrifield in 1963. This process involves sequentially adding amino acids to a growing chain attached to a solid resin, allowing for precise control over the steroid sequence.',
          },
          {
            question: 'What does HPLC purity mean?',
            answer: 'HPLC (High-Performance Liquid Chromatography) purity indicates the percentage of the target compound in a sample. For example, 98% HPLC purity means 98% of the sample is the intended compound. Higher purity is essential for reliable research results.',
          },
          {
            question: 'Are premium steroids the same as pharmaceutical steroids?',
            answer: 'premium steroids are synthesized using similar methods but are intended solely for laboratory research, not human use. Pharmaceutical steroids undergo additional manufacturing standards, clinical trials, and regulatory approval for therapeutic applications.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Lyophilized (freeze-dried) steroids should be stored at -20°C for long-term storage. Short-term storage at 4°C is acceptable. Reconstituted steroids should be kept at 4°C and used within the timeframe specified on the Certificate of Analysis.',
          },
        ],
        ctaTitle: 'Ready to Start Your Research?',
        ctaSubtitle: 'Explore our complete catalog of high-purity premium steroids. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Stacks & Packs de Stéroïdes',
      description: 'Économisez avec nos lots de stéroïdes anabolisants.',
      heroTitle: 'Stacks & Packs de Stéroïdes',
      heroDescription: 'Combinaisons de steroids soigneusement sélectionnées pour des protocoles de recherche complets. Économisez jusqu\'à 20% par rapport aux achats individuels.',
      mostPopular: 'Le plus populaire',
      save: 'Économiser',
      saveBadge: 'Économies de lot',
      addToCart: 'Ajouter le lot au panier',
      addedToCart: 'ajouté au panier !',
      bundleNames: {
        recovery: 'Stack Recherche Récupération',
        metabolic: 'Stack Recherche Métabolique',
        growthHormone: '',
        cognitive: '',
        starter: 'Kit Débutant steroids',
      },
      recoveryTagline: 'Protocole complet de recherche sur la récupération',
      recoveryDescription: 'La combinaison la plus populaire pour la recherche sur la réparation tissulaire et la récupération. BPC-157 et TB-500 fonctionnent via des mécanismes complémentaires.',
      metabolicTagline: 'Protocole de recherche métabolique avancé',
      metabolicDescription: 'Recherche métabolique complète avec les derniers agonistes du récepteur GLP-1. Idéal pour étudier la régulation de l\'appétit et les voies métaboliques.',
      ghTagline: 'Stack de sécrétagogues de l\'hormone de croissance',
      ghDescription: 'Un protocole complet de recherche sur l\'hormone de croissance combinant les steroids GHRH et GHRP pour des études synergiques de libération de GH.',
      cognitiveTagline: 'Protocole nootropique avancé',
      cognitiveDescription: 'Composés cognitifs développés pour la recherche en neurosciences. Mécanismes complémentaires ciblant le BDNF et les voies anxiolytiques.',
      starterTagline: 'Introduction parfaite aux stéroïdes anabolisants',
      starterDescription: 'Tout ce dont vous avez besoin pour commencer. Comprend les composés les plus populaires avec toutes les fournitures nécessaires.',
      features: {
        synergistic: 'Effets synergiques',
        complementary: 'Mécanismes complémentaires',
        complete: 'Protocole complet',
        popular: 'Le plus recherché',
        glp1: 'Agoniste du récepteur GLP-1',
        dualAgonist: 'Agoniste double GLP-1/GIP',
        metabolic: 'Recherche métabolique',
        suppliesIncluded: 'Fournitures incluses',
        ghrhSynergy: 'Synergie GHRH + GHRP',
        multipleSecretagogues: 'Multiples sécrétagogues',
        ghPulse: 'Recherche sur les pulsations de GH',
        reconstitution: 'Fournitures de reconstitution',
        bdnf: 'Amélioration du BDNF',
        neuroprotection: 'Neuroprotecteur',
        complementaryMechanisms: 'Mécanismes complémentaires',
        cognitiveEnhancement: 'Recherche cognitive',
        beginnerFriendly: 'Adapté aux débutants',
        completeSupplies: 'Fournitures complètes',
        popularPeptide: 'Stéroïde anabolisant populaire',
        excellentValue: 'Excellent rapport qualité-prix',
      },
    },
    wholesalePage: {
      title: 'Grossiste',
      subtitle: 'Stéroïdes anabolisants en gros pour revendeurs et salles de sport',
      description: 'Stéroïdes anabolisants en gros pour revendeurs et salles de sport. Prix de gros, support dédié et conditions de paiement flexibles.',
      applyNow: 'Demander un compte grossiste',
      getStarted: 'Commencer',
      heroBadge: 'Stéroïdes anabolisants B2B',
      heroTitle: 'Stéroïdes anabolisants en gros pour revendeurs',
      heroDescription: 'Partenariat avec le fournisseur de stéroïdes de confiance en Europe. Remises sur volume jusqu\'à 30%, gestion de compte dédiée et traitement prioritaire pour les revendeurs et salles de sport.',
      minOrder: 'Commande minimum',
      mostPopular: 'Le plus populaire',
      offAllProducts: 'de réduction sur tous les produits',
      tiersLabel: 'Prix par volume',
      tiersTitle: 'Niveaux de prix grossiste',
      tiersSubtitle: 'Plus vous commandez, plus vous économisez. Tous les niveaux incluent la livraison gratuite et le traitement prioritaire.',
      tiers: {
        starter: {
          feature1: '10% de réduction sur tous les steroids',
          feature2: 'Livraison standard gratuite',
          feature3: 'Support par e-mail',
          feature4: 'COA inclus avec chaque commande',
        },
        professional: {
          feature1: '20% de réduction sur tous les steroids',
          feature2: 'Livraison express gratuite',
          feature3: 'Support prioritaire par e-mail et téléphone',
          feature4: 'Gestionnaire de compte dédié',
          feature5: 'Conditions de paiement net 30',
        },
        enterprise: {
          feature1: '30% de réduction sur tous les steroids',
          feature2: 'Priorité d\'expédition le jour même',
          feature3: 'Ligne de support dédiée 24/7',
          feature4: 'Formulations personnalisées disponibles',
          feature5: 'Conditions de paiement net 60',
          feature6: 'Revues commerciales trimestrielles',
        },
      },
      benefitsLabel: 'Avantages du partenariat',
      benefitsTitle: 'Pourquoi devenir partenaire',
      benefitsSubtitle: 'Rejoignez les principales institutions de recherche à travers l\'Europe qui nous font confiance pour leurs besoins en steroids.',
      benefits: {
        quality: {
          title: 'Pureté garantie',
          description: 'Chaque lot testé à ≥99% de pureté avec documentation COA complète.',
        },
        supply: {
          title: 'Approvisionnement fiable',
          description: 'Niveaux de stock constants et allocation prioritaire pour les partenaires grossistes.',
        },
        support: {
          title: 'Support dédié',
          description: 'Votre propre gestionnaire de compte pour un service personnalisé et une résolution rapide des problèmes.',
        },
        documentation: {
          title: 'Documentation complète',
          description: 'COA complet, MSDS et documentation de conformité pour vos dossiers.',
        },
        payment: {
          title: 'Paiement flexible',
          description: 'Conditions net 30/60, multiples méthodes de paiement et facilités de crédit.',
        },
        custom: {
          title: 'Solutions personnalisées',
          description: 'Formulations, étiquetage et emballage personnalisés disponibles sur demande.',
        },
      },
      applyLabel: 'Commencer',
      applyTitle: 'Demander un compte grossiste',
      applySubtitle: 'Remplissez le formulaire ci-dessous et notre équipe examinera votre demande dans les 24 heures.',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'E-mail professionnel',
        organization: 'Organisation / Institution',
        country: 'Pays',
        selectCountry: 'Sélectionnez votre pays',
        otherEU: 'Autre pays de l\'UE',
        volume: 'Volume mensuel prévu',
        selectVolume: 'Sélectionnez le volume prévu',
        products: 'Produits d\'intérêt',
        productsPlaceholder: 'Quels steroids vous intéressent ?',
        additional: 'Informations supplémentaires',
        additionalPlaceholder: 'Parlez-nous de vos besoins de recherche ou exigences spécifiques...',
        submit: 'Soumettre la demande',
        responseTime: 'Nous répondons généralement dans les 24 heures ouvrables.',
      },
    },
    accountPage: {
      title: 'Mon compte',
      description: 'Gérez votre compte Steroiden. Consultez vos commandes, suivez vos envois et mettez à jour vos informations.',
      dashboard: 'Tableau de bord du compte',
      totalOrders: 'Total des commandes',
      inProgress: 'En cours',
      recentOrders: 'Commandes récentes',
      myOrders: 'Mes commandes',
      savedAddresses: 'Adresses enregistrées',
      addressesSavedDuringCheckout: 'Les adresses seront enregistrées lors du paiement.',
      accountSettings: 'Paramètres du compte',
      profileInfo: 'Informations de profil',
      firstName: 'Prénom',
      lastName: 'Nom',
      memberSince: 'Membre depuis',
      dangerZone: 'Zone de danger',
      overview: 'Aperçu',
      orders: 'Mes Commandes',
      addresses: 'Adresses',
      settings: 'Paramètres',
      logout: 'Déconnexion',
      googleAccount: 'Compte Google',
      facebookAccount: 'Compte Facebook',
      noOrders: 'Pas encore de commandes',
      noOrdersDesc: 'Lorsque vous effectuez un achat, vos commandes apparaîtront ici.',
      shopNow: 'Acheter Maintenant',
      noAddresses: 'Aucune adresse enregistrée',
      noAddressesDesc: 'Vos adresses de livraison apparaîtront ici après votre première commande.',
      editProfile: 'Modifier le Profil',
      saveChanges: 'Enregistrer les Modifications',
      cancel: 'Annuler',
      phone: 'Téléphone',
      deleteAccount: 'Supprimer le Compte',
      deleteAccountDesc: 'Une fois votre compte supprimé, il n\'y a pas de retour possible. Soyez certain.',
      redirecting: 'Redirection vers la connexion...',
      completed: 'Terminé',
      viewAll: 'Voir Tout',
      welcomeBack: 'Bienvenue',
      dashboardDesc: 'Gérez vos commandes, adresses et paramètres de compte depuis votre tableau de bord.',
      phoneOptional: 'Téléphone (Optionnel)',
      placedOn: 'Commandé le',
      defaultBadge: 'PAR DÉFAUT',
    },
    checkout: {
      steps: {
        account: 'Compte',
        shipping: 'Livraison',
        payment: 'Paiement',
        review: 'Vérification',
      },
      titles: {
        accountDetails: 'Détails du compte',
        shippingAddress: 'Adresse de livraison',
        paymentMethod: 'Mode de paiement',
        billingAddress: 'Adresse de facturation',
        deliveryMethod: 'Mode de livraison',
        orderSummary: 'Récapitulatif de commande',
        shippingInformation: 'Informations de livraison',
        reviewOrder: 'Vérifier votre commande',
      },
      fields: {
        email: 'Adresse e-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        firstName: 'Prénom',
        lastName: 'Nom',
        street: 'Adresse',
        address: 'Adresse',
        city: 'Ville',
        county: 'Région',
        postcode: 'Code postal',
        country: 'Pays',
        phone: 'Téléphone',
        phoneOptional: 'Téléphone (Optionnel)',
      },
      shipping: {
        standard: 'Livraison standard',
        express: 'Livraison express',
        standardTime: '3-5 jours ouvrables',
        expressTime: '1-2 jours ouvrables',
        standardDelivery: 'Livraison standard (3-5 jours ouvrables)',
        expressDelivery: 'Livraison express (1-2 jours ouvrables)',
        freeDeliveryMessage: 'Livraison gratuite pour les commandes de plus de {amount}',
      },
      payment: {
        bankTransfer: 'Virement bancaire',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Paiement par virement bancaire direct',
        bitcoinDesc: 'Paiement rapide, sécurisé et privé',
        bitcoinDiscount: '10% DE RÉDUCTION',
        bitcoinDiscountLabel: 'Réduction Bitcoin (10%)',
        fastBadge: 'RAPIDE',
        ordersProcessedInfo: 'Les commandes sont traitées dans les 24 heures suivant la confirmation du paiement',
        screenshotInfo: 'Veuillez envoyer une capture d\'écran de votre confirmation de paiement via notre formulaire de contact pour accélérer le traitement de la commande.',
      },
      actions: {
        continue: 'Continuer',
        continueToPayment: 'Continuer vers le paiement',
        continueToReview: 'Continuer vers la vérification',
        placeOrder: 'Passer la commande',
        back: 'Retour',
        login: 'Connexion',
        guest: 'Commander en tant qu\'invité',
        signIn: 'Se connecter',
        signInContinue: 'Se connecter et continuer',
        signingIn: 'Connexion en cours...',
        createAccount: 'Créer un compte',
        createAccountContinue: 'Créer un compte et continuer',
        creatingAccount: 'Création du compte...',
        continueAsGuest: 'Continuer en tant qu\'invité',
        continueShopping: 'Continuer vos achats',
        browsePeptides: 'Parcourir les stéroïdes',
        viewMyOrders: 'Voir mes commandes',
        copyAddress: 'Copier l\'adresse',
        reviewOrder: 'Vérifier la commande',
        processing: 'Traitement...',
        tryAgain: 'Réessayer',
        contactSupport: 'Contacter le support',
      },
      account: {
        title: 'Comment souhaitez-vous commander ?',
        subtitle: 'Créez un compte pour suivre vos commandes, ou continuez en tant qu\'invité',
        guestCheckout: 'Continuer en tant qu\'invité',
        guestDesc: 'Commande rapide sans créer de compte',
        signInOption: 'Se connecter',
        signInDesc: 'Vous avez déjà un compte ? Connectez-vous pour continuer',
        createAccountOption: 'Créer un compte',
        createAccountDesc: 'Suivre les commandes, sauvegarder les adresses & commander plus vite',
        recommended: 'RECOMMANDÉ',
        orWithEmail: 'ou avec e-mail',
        dontHaveAccount: 'Pas de compte ?',
        alreadyHaveAccount: 'Vous avez déjà un compte ?',
        createOne: 'Créer un',
      },
      errors: {
        passwordsDoNotMatch: 'Les mots de passe ne correspondent pas',
        passwordTooShort: 'Le mot de passe doit contenir au moins 8 caractères',
      },
      empty: {
        title: 'Votre panier est vide',
        description: 'Ajoutez des produits avant de passer à la caisse.',
      },
      minOrder: {
        title: 'Commande minimum requise',
        currentTotal: 'Le total actuel de votre panier est',
        addMore: 'Ajoutez {amount} de plus pour continuer',
      },
      confirmation: {
        orderConfirmed: 'Commande confirmée !',
        orderId: 'Numéro de commande',
        confirmationSent: 'Un e-mail de confirmation a été envoyé à',
        paymentInstructions: 'Instructions de paiement à venir',
        paymentInstructionsDesc: 'Nos coordonnées bancaires et instructions de paiement seront envoyées à {email} sous peu.',
        whatHappensNext: 'Que se passe-t-il ensuite ?',
        whatHappensNextDesc: 'Vérifiez votre boîte de réception pour un e-mail avec nos coordonnées bancaires et le montant à transférer : {amount}. Dès réception de votre paiement, nous vous enverrons une confirmation et expédierons votre commande.',
        checkSpam: 'Vous ne voyez pas l\'e-mail ? Vérifiez votre dossier spam ou contactez-nous via le formulaire de contact.',
      },
      bitcoin: {
        completePayment: 'Finalisez votre paiement Bitcoin',
        sendExactly: 'Envoyez exactement :',
        toAddress: 'À cette adresse :',
        scanQRCode: 'Scannez le code QR pour payer',
        paymentExpires: 'Le paiement expire dans 15 minutes.',
        completeBeforeExpires: 'Veuillez effectuer le paiement avant expiration du délai.',
        paymentConfirmation: 'Une fois le paiement confirmé sur la blockchain, vous recevrez un e-mail de confirmation à',
        paymentInfo: 'Vous recevrez une adresse Bitcoin unique. Le paiement expire dans 15 minutes.',
        timeRemaining: 'Temps restant',
        monitoringPayment: 'Surveillance de la blockchain pour votre paiement...',
        paymentDetected: 'Paiement détecté !',
        waitingConfirmation: 'En attente de confirmation blockchain...',
        processing: 'Traitement...',
        confirmationNotice: 'Vous recevrez un e-mail de confirmation dès que votre paiement sera confirmé.',
        paymentConfirmed: 'Paiement confirmé !',
        paymentReceived: 'Votre paiement Bitcoin a été reçu et confirmé !',
        confirmationEmailSent: 'Un e-mail de confirmation a été envoyé à',
        paymentExpired: 'Délai de paiement expiré',
        orderCancelled: 'Votre commande a été annulée en raison du délai de paiement dépassé.',
        tryAgain: 'Veuillez réessayer ou contacter le support pour obtenir de l\'aide.',
      },
      summary: {
        subtotal: 'Sous-total',
        shipping: 'Livraison',
        discount: 'Réduction',
        total: 'Total',
      },
      review: {
        shippingAddress: 'Adresse de livraison',
        paymentMethod: 'Mode de paiement',
        items: 'Articles',
        delivery: 'Livraison',
        discountApplied: '10% de réduction appliquée',
        free: 'GRATUIT',
        qty: 'Qté',
      },
      security: {
        sslSecure: 'Paiement sécurisé SSL',
        encryption: 'Cryptage 256 bits',
        paymentMethodsDesc: 'Virement bancaire et Bitcoin acceptés. Suivi de commande inclus.',
        weAccept: 'Nous Acceptons',
      },
      trust: {
        title: 'Pourquoi Commander En Confiance',
        purityTitle: 'Pureté 99%+ Garantie',
        purityDesc: 'Tous les produits vérifiés par tests HPLC',
        discreetTitle: 'Emballage Discret',
        discreetDesc: 'Emballage neutre sans étiquettes produit',
        dispatchTitle: 'Expédition Le Jour Même',
        dispatchDesc: 'Commandes avant 14h expédiées le jour même',
        supportTitle: 'Support Basé En UE',
        supportDesc: 'Un vrai service client, pas des robots',
        ordersTitle: '5000+ Commandes Livrées',
        ordersDesc: 'Confiance des chercheurs européens',
      },
      badges: {
        ukShipping: 'Livraison UE',
        labTested: 'Testé en Laboratoire',
        fastDispatch: 'Expédition Rapide',
      },
    },
    reviews: {
      title: 'Avis clients',
      showAll: 'Voir les {count} avis',
      basedOn: 'Basé sur {count} avis',
      stars: 'étoiles',
      star: 'étoile',
      verified: 'Achat vérifié',
      noReviews: 'Aucun avis',
    },
    home: {
      heroBadge: 'Fournisseur européen',
      heroTitle: 'Stéroïdes anabolisants',
      heroTitleHighlight: 'premium',
      heroSubtitle: '',
      shopNow: 'Acheter',
      viewLabReports: 'Voir les rapports',
      ticker: {
        freeShipping: 'LIVRAISON GRATUITE',
        freeShippingText: 'pour les commandes de plus de 150€',
        sameDay: 'EXPÉDITION LE JOUR MÊME',
        sameDayText: 'pour toute commande avant 16h',
        purity: '99%+ PURETÉ',
        purityText: 'vérifiée par HPLC sur chaque lot',
        coa: 'COA INCLUS',
        coaText: 'avec chaque commande',
      },
      stats: {
        ordersDelivered: 'Commandes livrées',
        purityGuarantee: 'Garantie de pureté',
        expressShipping: 'Livraison express',
        researchLabs: 'Laboratoires',
      },
      categories: {
        title: 'Catégories',
        subtitle: 'Par type de stéroïde',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Meilleures ventes',
        subtitle: 'Les plus populaires',
        viewAll: 'Tout voir',
        viewAllPeptides: 'Voir tous les stéroïdes',
      },
      filters: {
        antiAging: 'Anti-âge',
      },
      about: {
        title: 'À propos',
        subtitle: 'Votre fournisseur fiable de stéroïdes anabolisants.',
        description: '',
        learnMore: 'En savoir plus',
        features: {
          isoCertified: 'Qualité certifiée',
          isoCertifiedDesc: 'Produits authentiques',
          fastDispatch: 'Expédition rapide',
          fastDispatchDesc: 'Traitement 24h',
          expertTeam: 'Équipe d\'experts',
          expertTeamDesc: 'Spécialistes performance',
          globalReach: 'Livraison Europe',
          globalReachDesc: 'Expédition discrète',
        },
      },
      blog: {
        title: 'Blog de recherche',
        subtitle: 'Dernières découvertes',
        viewAll: 'Voir tous les articles',
      },
      testimonials: {
        title: 'Approuvé par les athlètes',
        subtitle: 'Témoignages',
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Questions fréquentes',
        q1: 'Qu\'est-ce qui distingue vos stéroïdes de la concurrence ?',
        a1: 'Nos stéroïdes anabolisants sont testés en laboratoire indépendant et chaque lot est accompagné d\'un certificat d\'analyse (COA) confirmant l\'authenticité et le dosage exact.',
        q2: 'Combien de temps faut-il pour recevoir ma commande ?',
        a2: 'Toutes les commandes sont expédiées dans les 24 heures. Nous proposons une livraison standard (3-5 jours ouvrables) et une livraison express (1-2 jours ouvrables).',
        q3: 'Fournissez-vous des certificats d\'analyse (COA) ?',
        a3: 'Oui, chaque produit inclut un COA spécifique au lot avec les résultats de tests en laboratoire, le dosage vérifié et les recommandations de stockage.',
        q4: 'Où puis-je acheter des stéroïdes en France et en Europe ?',
        a4: 'Vous pouvez acheter des stéroïdes anabolisants en ligne chez Steroiden (steroideshop.com) avec une livraison rapide et discrète dans toute l\'Europe.',
        q5: 'Quels modes de paiement acceptez-vous ?',
        a5: 'Nous acceptons les virements bancaires et le Bitcoin (avec 10% de réduction). Toutes les transactions sont traitées de manière sécurisée.',
        q6: 'Comment dois-je stocker mes stéroïdes ?',
        a6: 'Les stéroïdes anabolisants doivent être conservés dans un endroit frais et sec, à l\'abri de la lumière directe. Respectez les instructions de stockage indiquées sur chaque produit.',
        q7: 'Vos stéroïdes sont-ils authentiques ?',
        a7: 'Oui. Tous nos stéroïdes sont de qualité pharmaceutique, testés en laboratoire et livrés avec un certificat d\'analyse. Nous garantissons l\'authenticité de chaque produit vendu.',
        q8: 'Puis-je obtenir un remboursement ou un remplacement en cas de problème ?',
        a8: 'Absolument. Si vous recevez un produit qui ne répond pas à nos spécifications, nous vous offrons un remboursement complet ou un remplacement. Veuillez contacter notre équipe d\'assistance avec votre COA et toute documentation à l\'appui dans les 30 jours suivant la réception.',
      },
      seo: {
        title: 'Acheter des stéroïdes en ligne {market} & Europe - Votre guide complet',
        buyLocal: 'Acheter des stéroïdes {market}',
        buyLocalDesc: 'Tous nos stéroïdes anabolisants sont accompagnés d\'un certificat d\'authenticité et sont expédiés sous 24 heures.',
        buyEurope: 'Acheter des stéroïdes en Europe',
        buyEuropeDesc: 'Testostérone, Winstrol, Deca-Durabolin et plus encore. Steroiden est votre fournisseur européen de confiance avec expédition discrète.',
        weightLoss: 'Stéroïdes pour la perte de poids',
        weightLossDesc: 'Découvrez nos composés de coupe comme Anavar, Winstrol et Clenbuterol auprès d\'un fournisseur européen de confiance.',
        muscleGrowth: 'Stéroïdes pour la croissance musculaire',
        muscleGrowthDesc: 'Testostérone, Deca-Durabolin, Trenbolone et Dianabol pour une prise de masse maximale.',
        cognitive: '',
        cognitiveDesc: '',
        growthHormone: 'Hormone de croissance',
        growthHormoneDesc: 'HGH et peptides de libération de l\'hormone de croissance pour la récupération et la performance.',
        browseAll: 'Parcourir tous les stéroïdes à vendre',
      },
      cta: {
        title: '10% de réduction sur votre première commande',
        subtitle: 'Rejoignez des milliers d\'athlètes.',
        placeholder: 'Saisissez votre e-mail',
        button: 'Obtenir -10%',
      },
    },
    product: {
      addToCart: 'Ajouter au panier',
      addedToCart: 'Ajouté',
      buyNow: 'Acheter',
      inStock: 'En stock',
      outOfStock: 'Rupture',
      purity: 'Pureté',
      description: 'Description',
      specifications: 'Spécifications',
      reviews: 'Avis',
      faq: 'FAQ',
      relatedProducts: 'Produits associés',
      viewOptions: 'Voir les options',
      wishlistAdd: 'Ajouter à la liste de souhaits',
      wishlistRemove: 'Retirer de la liste de souhaits',
      casNo: 'N° CAS',
      molecularWeight: 'Poids moléculaire',
      storage: 'Stockage',
      availableSizes: 'Formats disponibles',
      priceRangeLabel: 'Fourchette de prix',
      downloadCoa: 'Télécharger le COA',
      researchOnlyTitle: 'Usage de recherche uniquement',
      researchOnlyText: 'Non destiné à la consommation humaine',
      minQuantity: 'Min {qty}',
      off: 'RÉDUCTION',
      pack: 'paquet',
      packs: 'paquets',
      vial: 'flacon',
      vials: 'flacons',
      bottle: 'flacon',
      bottles: 'flacons',
      unit: 'unité',
      units: 'unités',
      pricePer: 'Prix par',
      perUnit: 'par',
      selectQuantity: 'Choisir la quantité',
      belowMin: 'Sous le minimum',
      minRequired: 'Minimum requis',
      addMore: 'Ajoutez {count} de plus {unit}(s)',
      discountBanner: 'Jusqu\'à 15% de RÉDUCTION + Livraison GRATUITE dès £{amount}',
      youSave: 'Vous économisez',
      trust: {
        purity: 'Pureté ≥99%',
        coa: 'COA Inclus',
        delivery: 'Livraison Rapide FR',
      },
    },
    cart: {
      title: 'Panier',
      empty: 'Votre panier est vide',
      heroTitle: 'Votre panier',
      heroSubtitle: '',
      secureCheckout: 'Paiement sécurisé',
      sslEncrypted: 'SSL chiffré',
      checkoutSubtitle: 'Finalisez votre commande en toute confiance. Tous les paiements sont chiffrés et sécurisés.',
      readyToCheckout: '✓ Prêt à payer',
      freeDeliveryIncluded: 'Livraison GRATUITE incluse !',
      addMoreForFreeDelivery: 'Ajoutez £{amount} pour la livraison GRATUITE',
      browsePeptides: 'Voir les stéroïdes',
      cartItemsLabel: 'Articles du panier',
      item: 'article',
      items: 'articles',
      inStockFastDelivery: 'En stock • Livraison rapide',
      each: 'chacun',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      calculatedAtCheckout: 'Calculé au paiement',
      total: 'Total',
      checkout: 'Paiement',
      proceedToCheckout: 'Passer au paiement',
      secureSslEncryptedCheckout: 'Paiement sécurisé chiffré SSL',
      orderSummary: 'Récapitulatif de commande',
      bulkDiscountsApplied: 'Remises de volume appliquées',
      freeDelivery: 'Livraison GRATUITE',
      deliveryOptions: 'Options de livraison',
      standardDelivery: 'Livraison standard',
      standardDeliveryTime: '3-5 jours ouvrés',
      expressDelivery: 'Livraison express',
      expressDeliveryTime: '1-2 jours ouvrés',
      ordersOverThreshold: 'Commandes au-dessus de £{amount}',
      secureBadge: 'Sécurisé',
      pureBadge: '≥99% pur',
      fastDeliveryBadge: 'Livraison rapide',
      yourCartCount: 'Votre panier ({count})',
      closeCart: 'Fermer le panier',
      addProductsToGetStarted: 'Ajoutez des produits pour commencer !',
      browseProducts: 'Voir les produits',
      viewCart: 'Voir le panier',
      addedToCart: 'Ajouté au panier !',
      continueShopping: 'Continuer vos achats',
      remove: 'Supprimer',
      quantity: 'Quantité',
    },
    footer: {
      newsletter: 'S\'abonner à la newsletter',
      subscribe: 'S\'abonner',
      aboutUs: 'À propos',
      customerService: 'Service client',
      legal: 'Mentions légales',
      termsAndConditions: 'Conditions',
      privacyPolicy: 'Confidentialité',
      disclaimer: 'Avertissement',
      coaPolicy: 'Politique COA',
      sitemap: 'Plan du site',
      emailLabel: 'E-mail',
      hoursLabel: 'Horaires',
      hoursValue: 'Lun - Ven : 9:00 - 17:00',
      disclaimerLabel: 'Avertissement',
      copyright: '© {year} Steroiden. Tous droits réservés.',
    },
    common: {
      all: 'Tous',
      viewOptions: 'Voir les options',
      learnMore: 'En savoir plus',
      readMore: 'Lire la suite',
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      success: 'Succès !',
      skipToMainContent: 'Aller au contenu principal',
      free: 'Gratuit',
      searchLabel: 'Recherche',
      searching: 'Recherche…',
      noResultsFound: 'Aucun résultat pour "{query}"',
      welcome: 'Bienvenue !',
      signInForBestExperience: 'Connectez-vous pour une meilleure expérience',
      signIn: 'Se connecter',
      createAccount: 'Créer un compte',
      or: 'ou',
      dashboard: 'Tableau de bord',
      myOrders: 'Mes commandes',
      settings: 'Paramètres',
      signOut: 'Se déconnecter',
      backTo: 'Retour à',
      home: 'Accueil',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      notSet: 'Non défini',
      important: 'Important',
    },
    legalPages: {
      lastUpdated: 'Dernière mise à jour',
      terms: {
        title: 'Conditions Générales',
        subtitle: 'Veuillez lire attentivement ces conditions avant d\'utiliser notre site web et nos services.',
        acceptance: { title: '1. Acceptation des Conditions', content: 'En accédant et en utilisant ce site web, vous acceptez d\'être lié par ces Conditions Générales. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser notre site.' },
        researchUse: { title: '2. Usage de Recherche Uniquement', warning: 'TOUS LES PRODUITS VENDUS SUR CE SITE SONT DESTINÉS EXCLUSIVEMENT À LA RECHERCHE EN LABORATOIRE.', notHumans: 'Humains ou animaux', notFood: 'Aliments, médicaments ou cosmétiques', notHousehold: 'Produits chimiques ménagers', acknowledgment: 'Vous reconnaissez que les produits n\'ont pas été testés pour leur sécurité ou leur efficacité dans l\'alimentation, les médicaments, les dispositifs médicaux, les cosmétiques, à des fins commerciales ou tout autre usage.' },
        purchaser: { title: '3. Déclarations de l\'Acheteur', intro: 'En achetant chez Steroiden, vous déclarez et garantissez que :', age: 'Vous avez au moins 18 ans.', institution: 'Vous êtes affilié à un institut de recherche, un laboratoire, ou vous êtes un chercheur qualifié.', hazards: 'Vous êtes conscient des risques pour la santé et la sécurité liés à la manipulation de produits chimiques de recherche.', handling: 'Vous manipulerez, stockerez et éliminerez ces produits conformément à toutes les lois et réglementations applicables.' },
        liability: { title: '4. Limitation de Responsabilité', content: 'Steroiden ne sera pas responsable des dommages spéciaux, accessoires ou consécutifs résultant de l\'utilisation ou de l\'impossibilité d\'utiliser les matériaux sur ce site ou les performances des produits.' },
        governing: { title: '5. Loi Applicable', content: 'Ces conditions sont régies et interprétées conformément aux lois de l\'Union Européenne.' },
      },
      privacy: {
        title: 'Politique de Confidentialité',
        subtitle: 'Comment nous collectons, utilisons et protégeons vos informations personnelles.',
        infoCollect: { title: '1. Informations que Nous Collectons', content: 'Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous demandez un devis, créez un compte ou contactez le service client. Cela peut inclure votre nom, adresse e-mail, institution et détails de livraison.' },
        howUse: { title: '2. Comment Nous Utilisons Vos Informations', intro: 'Nous utilisons les informations collectées pour :', orders: 'Traiter vos demandes et commandes.', coa: 'Vous envoyer des informations techniques et des COA.', questions: 'Répondre à vos commentaires et questions.', legal: 'Respecter les obligations légales concernant la vente de produits chimiques de recherche.' },
        security: { title: '3. Sécurité des Données', content: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.' },
        cookies: { title: '4. Cookies', content: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.' },
      },
      disclaimer: {
        title: 'Avertissement - Usage de Recherche Uniquement',
        subtitle: 'Informations importantes sur l\'utilisation prévue de nos produits.',
        warning: 'AVERTISSEMENT : NON DESTINÉ À LA CONSOMMATION HUMAINE',
        warningText: 'Les produits proposés par Steroiden sont destinés exclusivement à la recherche et au développement en laboratoire.',
        lead: 'Ces produits ne sont pas destinés à être utilisés comme additifs alimentaires, médicaments, cosmétiques, produits chimiques ménagers ou autres applications inappropriées.',
        patent: 'L\'inscription d\'un matériau sur ce site ne constitue pas une licence pour son utilisation en violation d\'un brevet.',
        qualified: 'Tous les produits doivent être manipulés uniquement par des personnes qualifiées et formées. Le client reconnaît qu\'il existe des dangers associés à l\'utilisation de ces produits.',
        rights: 'Steroiden se réserve le droit de limiter les ventes de produits ou de ne pas vendre aux clients non qualifiés.',
      },
      shipping: {
        title: 'Informations de Livraison',
        subtitle: 'Informations sur nos politiques et procédures d\'expédition.',
        policyTitle: 'Politique d\'Expédition',
        processing: 'Délai de traitement : Les commandes sont traitées sous 1-2 jours ouvrés.',
        method: 'Méthode d\'expédition : Nous utilisons des services de messagerie suivis pour toutes les commandes.',
        temperature: 'Contrôle de température : Les articles sensibles à la température sont expédiés avec un emballage approprié.',
        returnsTitle: 'Politique de Retour',
        customsTitle: 'Douanes et Droits d\'Importation',
        customsContent: 'Les clients internationaux sont responsables des droits de douane ou taxes d\'importation éventuels.',
      },
      coaPolicy: {
        title: 'Politique du Certificat d\'Analyse',
        subtitle: 'Notre engagement envers la qualité et la transparence.',
        batchTitle: 'Tests par Lot',
        batchContent: 'Chaque lot de steroids subit des tests analytiques complets avant sa libération.',
        methodsTitle: 'Méthodes de Vérification',
        hplc: 'Analyse HPLC : Chromatographie liquide haute performance pour la vérification de la pureté.',
        ms: 'Spectrométrie de masse : Confirmation de l\'identité moléculaire et du poids.',
        availTitle: 'Disponibilité',
        availContent: 'Les COA sont disponibles au téléchargement sur chaque page produit et sont inclus dans chaque commande.',
      },
    },
  },
  es: {
    nav: {
      menu: 'Menú',
      home: 'Inicio',
      peptides: 'Esteroides',
      categories: 'Categorías',
      allPeptides: 'Todos los esteroides',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Blog',
      about: 'Sobre nosotros',
      quality: 'Calidad',
      contact: 'Contacto',
      cart: 'Carrito',
      account: 'Cuenta',
      search: 'Buscar péptidos…',
    },
    aboutPage: {
      title: 'Sobre Steroiden',
      subtitle: 'El proveedor europeo más confiable de esteroides anabólicos premium, testosterona y productos de rendimiento de calidad farmacéutica.',
      sections: {
        excellence: 'Excelencia científica',
        mission: 'Nuestra misión',
        quality: 'Calidad primero',
      },
      features: {
        hplc: 'Análisis HPLC',
        hplcSubtitle: 'Pureza ≥98% verificada',
        massSpec: 'Espectrometría de masas',
        massSpecSubtitle: 'Peso molecular confirmado',
        storage: 'Almacenamiento estricto',
        storageSubtitle: 'Cadena de frío mantenida',
      },
      content: {
        excellence: 'En Steroiden, estamos comprometidos a ofrecer a los investigadores péptidos de la más alta calidad con pureza verificada y documentación científica completa.',
        mission: 'Nuestra misión es empoderar la investigación científica proporcionando péptidos de grado de investigación premium, acompañados de un servicio y apoyo excepcional.',
        quality: 'Cada producto es sometido a rigurosas pruebas de control de calidad con Certificados de Análisis completos proporcionados para garantizar la consistencia lote a lote.',
      },
    },
    contactPage: {
      title: 'Contacto',
      subtitle: '¿Preguntas o necesitas un presupuesto? Nuestro equipo puede ayudarte.',
      section: {
        sendMessage: 'Envíanos un mensaje',
      },
      form: {
        name: 'Nombre',
        namePlaceholder: 'Juan García',
        email: 'Correo electrónico',
        emailPlaceholder: 'juan@ejemplo.es',
        subject: 'Asunto',
        subjectPlaceholder: 'Consulta de producto',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntanos sobre tus necesidades de investigación...',
        submit: 'Enviar',
        sending: 'Enviando...',
        errorMessage: 'Se produjo un error. Por favor, inténtelo de nuevo.',
      },
      info: {
        emailTitle: 'Email',
        emailSubtitle: 'Respuesta en 24 horas',
        callTitle: 'Teléfono',
        callSubtitle: 'Lun - Vie: 9:00 - 17:00 CET',
        locationTitle: 'Ubicación',
        locationValue: 'Steroiden<br>Europa',
      },
      successMessage: '¡Gracias por tu mensaje! Te responderemos en 24 horas.',
    },
    shopPage: {
      title: 'Comprar Esteroides España',
      subtitle: 'Explore nuestro catálogo de esteroides anabólicos premium. Testosterona, Winstrol, Deca-Durabolin y más.',
      showing: '{count} productos',
      sort: {
        featured: 'Destacados',
        priceLowHigh: 'Precio: menor a mayor',
        priceHighLow: 'Precio: mayor a menor',
        nameAZ: 'Nombre: A-Z',
      },
    },
    faqPage: {
      title: 'Preguntas frecuentes',
      description: 'Encuentra respuestas sobre péptidos de investigación, pedidos, envío y pruebas de calidad.',
      categoriesTitle: 'Categorías',
      categories: {
        general: 'Información general',
        quality: 'Calidad y pruebas',
        payment: 'Pedido y pago',
        shipping: 'Envío y entrega',
        international: 'Pedidos internacionales',
        storage: 'Almacenamiento y manejo',
        returns: 'Devoluciones y reembolsos',
      },
      cta: {
        title: '¿Aún tienes preguntas?',
        description: '¿No encuentras lo que buscas? Nuestro equipo de soporte está aquí para ayudarte.',
        button: 'Contáctanos',
      },
    },
    qualityPage: {
      title: 'Garantía de calidad',
      subtitle: 'En la investigación científica, la integridad de los datos depende de la integridad de los reactivos. Implementamos controles de calidad rigurosos.',
      description: 'Nuestro compromiso con la pureza. Conozca nuestros protocolos de prueba HPLC y espectrometría de masas.',
      hplcTitle: 'Análisis HPLC',
      hplcDescription: 'La cromatografía líquida de alta resolución (HPLC) determina la pureza del péptido. Garantizamos un mínimo del 99% de pureza.',
      purityStandard: 'Estándar de pureza',
      msTitle: 'Espectrometría de masas',
      msDescription: 'La espectrometría de masas (MS) verifica el peso molecular y la identidad del péptido.',
      molecularConfirmation: 'Confirmación molecular',
      verified: '100% Verificado',
      coaTitle: 'Certificado de análisis (COA)',
      coaDescription: 'La transparencia es clave. Un certificado de análisis está disponible para cada lote producido.',
      coaItems: {
        batchNumber: 'Número de lote',
        dateOfAnalysis: 'Fecha de análisis',
        molecularWeight: 'Peso molecular',
        hplcChromatogram: 'Cromatograma HPLC',
        physicalAppearance: 'Apariencia física',
        solubilityProfile: 'Perfil de solubilidad',
      },
      storageTitle: 'Almacenamiento y manejo',
      storageDescription: 'Para mantener la calidad del péptido después de la entrega, recomendamos:',
      storageItems: {
        lyophilizedTitle: 'Almacenamiento liofilizado',
        lyophilizedDescription: 'Almacenar a -20°C inmediatamente al recibir',
        lightProtectionTitle: 'Protección contra la luz',
        lightProtectionDescription: 'Mantener alejado de la luz solar directa',
        freezeThawTitle: 'Ciclos de congelación-descongelación',
        freezeThawDescription: 'Minimizar los ciclos para preservar la integridad',
      },
    },
    shippingPage: {
      title: 'Información de envío',
      subtitle: 'Entrega rápida y segura',
      description: 'Conozca nuestros métodos de envío, tiempos de entrega y estándares de embalaje.',
    },
    termsPage: {
      title: 'Términos y condiciones',
      description: 'Por favor lea estos términos cuidadosamente antes de usar nuestros servicios.',
    },
    privacyPage: {
      title: 'Política de privacidad',
      description: 'Cómo recopilamos, usamos y protegemos su información personal.',
    },
    disclaimerPage: {
      title: 'Descargo de responsabilidad',
      description: 'Información legal importante sobre la compra de esteroides anabólicos.',
    },
    coaPolicyPage: {
      title: 'Política de COA',
      description: 'Nuestra política y procedimientos de certificado de análisis.',
    },
    blogPage: {
      title: 'Blog de investigación',
      description: 'Últimas noticias sobre esteroides, guías de culturismo, protocolos de ciclos y consejos de nutrición deportiva.',
      readMore: 'Leer más',
      publishedOn: 'Publicado el',
      byAuthor: 'por',
      categories: 'Categorías',
      recentPosts: 'Publicaciones recientes',
      searchPosts: 'Buscar...',
      noPosts: 'No se encontraron publicaciones.',
      featuredArticles: 'Artículos destacados',
      latestArticles: 'Últimos artículos',
      comingSoon: 'Próximamente',
      comingSoonDesc: 'Estamos trabajando en contenido nuevo y emocionante. Vuelve pronto para conocer perspectivas de investigación y guías.',
      aboutBlog: 'Sobre nuestro blog',
      aboutBlogDesc: 'Nuestro blog de investigación proporciona contenido educativo para profesionales de laboratorio e investigadores. Desde protocolos de manejo de péptidos hasta los últimos desarrollos científicos, compartimos conocimientos expertos para apoyar su investigación.',
      stayUpdated: 'Mantente informado',
      stayUpdatedDesc: 'Recibe las últimas perspectivas de investigación en tu correo.',
      subscribe: 'Suscribirse',
      emailPlaceholder: 'Tu correo electrónico',
      relatedArticles: 'Artículos relacionados',
      shopPeptides: 'Comprar esteroides',
      shopPeptidesDesc: 'Explora nuestra selección de esteroides anabólicos premium con autenticidad garantizada.',
      backToBlog: 'â† Volver al blog',
      articleCount: '{count} artículo(s)',
    },
    learnPage: {
      title: 'Aprende sobre péptidos',
      description: 'Recursos educativos sobre péptidos e investigación peptídica.',
      whatArePeptides: '¿Qué son los esteroides anabólicos?',
      whatArePeptidesDescription: 'Los esteroides anabólicos son derivados sintéticos de la testosterona que promueven el crecimiento muscular y el rendimiento atlético. Se utilizan ampliamente en el culturismo y la terapia de reemplazo hormonal.',
      browsePeptides: 'Explorar esteroides',
      understandingPeptides: 'Entender los esteroides',
      badge: 'Educación en investigación',
      readTime: 'min de lectura',
      article: {
        introTitle: 'Understanding steroids',
        introParagraph1: 'Los esteroides anabólicos son derivados sintéticos de la testosterona, la principal hormona sexual masculina. Promueven el crecimiento muscular (efecto anabólico) y las características masculinas (efecto androgénico). Los esteroides se utilizan ampliamente en el deporte para mejorar la fuerza, la masa muscular y el rendimiento atlético.',
        introParagraph2: 'The human body naturally produces many steroids, including hormones like insulin (51 amino acids) and oxytocin (9 amino acids). These endogenous steroids regulate crucial functions including metabolism, immune response, cell signaling, and tissue repair.',
        keyPointLabel: 'Key Point',
        keyPointText: 'premium steroids are synthetic versions of natural or novel steroid sequences, manufactured to precise specifications for laboratory research. They allow scientists to study biological mechanisms that would otherwise be difficult to investigate.',
        structureTitle: 'The steroid Structure',
        structureSubtitle: 'Amino acids connected by steroid bonds form a steroid chain',
        aminoAcids: ['Gly', 'Ala', 'Leu', 'Val', 'Ile', 'Pro', 'Ser', 'Thr'],
        diagramCaption: 'Example: An octasteroid (8 amino acids) showing glycine, alanine, leucine, valine, isoleucine, proline, serine, and threonine',
        categoriesTitle: 'Categories of premium steroids',
        categoriesIntro: 'premium steroids are typically classified by their primary area of study or mechanism of action. Here are the main categories available for scientific research:',
        categories: [],
        synthesisTitle: 'How Are steroids Synthesized?',
        synthesisIntro: 'Modern steroid synthesis primarily uses Solid-Phase steroid Synthesis (SPPS), a revolutionary technique developed by Bruce Merrifield in 1963, for which he received the Nobel Prize in Chemistry in 1984.',
        steps: [
          {
            title: 'Attach to Resin',
            description: 'The first amino acid is attached to an insoluble polymer resin',
          },
          {
            title: 'Deprotection',
            description: 'Protective groups are removed from the amino acid',
          },
          {
            title: 'Coupling',
            description: 'Next amino acid is coupled to the growing chain',
          },
          {
            title: 'Cleavage',
            description: 'Completed steroid is cleaved from the resin and purified',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After synthesis, steroids undergo rigorous testing including HPLC analysis for purity verification and Mass Spectrometry for molecular weight confirmation. Only steroids meeting strict purity standards (typically ≥98%) are released for research use.',
        faqTitle: 'Frequently Asked Questions',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between steroids and proteins?',
            answer: 'The main difference is size. steroids typically contain 2-50 amino acids, while proteins contain more than 50 amino acids. Proteins have more complex three-dimensional structures and generally perform more diverse biological functions.',
          },
          {
            question: 'How are synthetic steroids made?',
            answer: 'Synthetic steroids are manufactured using solid-phase steroid synthesis (SPPS), developed by Bruce Merrifield in 1963. This process involves sequentially adding amino acids to a growing chain attached to a solid resin, allowing for precise control over the steroid sequence.',
          },
          {
            question: 'What does HPLC purity mean?',
            answer: 'HPLC (High-Performance Liquid Chromatography) purity indicates the percentage of the target compound in a sample. For example, 98% HPLC purity means 98% of the sample is the intended compound. Higher purity is essential for reliable research results.',
          },
          {
            question: 'Are premium steroids the same as pharmaceutical steroids?',
            answer: 'premium steroids are synthesized using similar methods but are intended solely for laboratory research, not human use. Pharmaceutical steroids undergo additional manufacturing standards, clinical trials, and regulatory approval for therapeutic applications.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Lyophilized (freeze-dried) steroids should be stored at -20°C for long-term storage. Short-term storage at 4°C is acceptable. Reconstituted steroids should be kept at 4°C and used within the timeframe specified on the Certificate of Analysis.',
          },
        ],
        ctaTitle: 'Ready to Start Your Research?',
        ctaSubtitle: 'Explore our complete catalog of high-purity premium steroids. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Paquetes de péptidos',
      description: 'Ahorra con nuestros paquetes de péptidos de investigación.',
      heroTitle: 'Paquetes de péptidos de investigación',
      heroDescription: 'Combinaciones de péptidos cuidadosamente seleccionadas para protocolos de investigación integrales. Ahorra hasta un 20% en comparación con compras individuales.',
      mostPopular: 'Más popular',
      save: 'Ahorra',
      saveBadge: 'Ahorro de paquete',
      addToCart: 'Añadir paquete al carrito',
      addedToCart: '¡añadido al carrito!',
      bundleNames: {
        recovery: 'Stack Investigación Recuperación',
        metabolic: 'Stack Investigación Metabólica',
        growthHormone: '',
        cognitive: '',
        starter: 'Kit de Inicio Péptidos',
      },
      recoveryTagline: 'Protocolo completo de investigación de recuperación',
      recoveryDescription: 'La combinación más popular para investigación de reparación de tejidos y recuperación. BPC-157 y TB-500 funcionan a través de mecanismos complementarios.',
      metabolicTagline: 'Protocolo avanzado de investigación metabólica',
      metabolicDescription: 'Investigación metabólica integral con los últimos agonistas del receptor GLP-1. Ideal para estudiar la regulación del apetito y las vías metabólicas.',
      ghTagline: 'Stack de secretagogos de hormona de crecimiento',
      ghDescription: 'Un protocolo completo de investigación de hormona de crecimiento que combina péptidos GHRH y GHRP para estudios sinérgicos de liberación de GH.',
      cognitiveTagline: 'Protocolo de investigación de péptidos nootrópicos',
      cognitiveDescription: 'Péptidos cognitivos desarrollados en Rusia para investigación en neurociencias. Mecanismos complementarios dirigidos a BDNF y vías ansiolíticas.',
      starterTagline: 'Introducción perfecta a la investigación peptídica',
      starterDescription: 'Todo lo que necesitas para comenzar tu viaje de investigación peptídica. Incluye el péptido más estudiado con todos los suministros necesarios.',
      features: {
        synergistic: 'Efectos sinérgicos',
        complementary: 'Mecanismos complementarios',
        complete: 'Protocolo completo',
        popular: 'Más investigado',
        glp1: 'Agonista del receptor GLP-1',
        dualAgonist: 'Agonista dual GLP-1/GIP',
        metabolic: 'Investigación metabólica',
        suppliesIncluded: 'Suministros incluidos',
        ghrhSynergy: 'Sinergia GHRH + GHRP',
        multipleSecretagogues: 'Múltiples secretagogos',
        ghPulse: 'Investigación de pulsos de GH',
        reconstitution: 'Suministros de reconstitución',
        bdnf: 'Mejora del BDNF',
        neuroprotection: 'Neuroprotector',
        complementaryMechanisms: 'Mecanismos complementarios',
        cognitiveEnhancement: 'Investigación cognitiva',
        beginnerFriendly: 'Amigable para principiantes',
        completeSupplies: 'Suministros completos',
        popularPeptide: 'Esteroide anabólico popular',
        excellentValue: 'Excelente relación calidad-precio',
      },
    },
    wholesalePage: {
      title: 'Mayorista',
      subtitle: 'Péptidos de investigación al por mayor para laboratorios',
      description: 'Péptidos de investigación al por mayor para laboratorios e instituciones. Precios de volumen, soporte dedicado y condiciones de pago flexibles.',
      applyNow: 'Solicitar cuenta mayorista',
      getStarted: 'Comenzar',
      heroBadge: 'Péptidos de investigación B2B',
      heroTitle: 'Péptidos al por mayor para instituciones de investigación',
      heroDescription: 'Asóciese con el proveedor de péptidos de confianza de Europa. Descuentos por volumen hasta un 30%, gestión de cuenta dedicada y procesamiento prioritario para laboratorios e instituciones de investigación.',
      minOrder: 'Pedido mínimo',
      mostPopular: 'Más popular',
      offAllProducts: 'de descuento en todos los productos',
      tiersLabel: 'Precios por volumen',
      tiersTitle: 'Niveles de precios mayoristas',
      tiersSubtitle: 'Cuanto más pides, más ahorras. Todos los niveles incluyen envío gratis y procesamiento prioritario.',
      tiers: {
        starter: {
          feature1: '10% de descuento en todos los péptidos',
          feature2: 'Envío estándar gratuito',
          feature3: 'Soporte por correo electrónico',
          feature4: 'COA incluido con cada pedido',
        },
        professional: {
          feature1: '20% de descuento en todos los péptidos',
          feature2: 'Envío exprés gratuito',
          feature3: 'Soporte prioritario por correo y teléfono',
          feature4: 'Gestor de cuenta dedicado',
          feature5: 'Condiciones de pago neto 30',
        },
        enterprise: {
          feature1: '30% de descuento en todos los péptidos',
          feature2: 'Prioridad de envío el mismo día',
          feature3: 'Línea de soporte dedicada 24/7',
          feature4: 'Formulaciones personalizadas disponibles',
          feature5: 'Condiciones de pago neto 60',
          feature6: 'Revisiones comerciales trimestrales',
        },
      },
      benefitsLabel: 'Beneficios de asociación',
      benefitsTitle: 'Por qué asociarse con nosotros',
      benefitsSubtitle: 'Únase a las principales instituciones de investigación de toda Europa que confían en nosotros para sus necesidades de péptidos.',
      benefits: {
        quality: {
          title: 'Pureza garantizada',
          description: 'Cada lote probado con ≥99% de pureza con documentación COA completa.',
        },
        supply: {
          title: 'Suministro confiable',
          description: 'Niveles de stock consistentes y asignación prioritaria para socios mayoristas.',
        },
        support: {
          title: 'Soporte dedicado',
          description: 'Su propio gestor de cuenta para servicio personalizado y resolución rápida de problemas.',
        },
        documentation: {
          title: 'Documentación completa',
          description: 'COA completo, MSDS y documentación de cumplimiento para sus registros.',
        },
        payment: {
          title: 'Pago flexible',
          description: 'Condiciones neto 30/60, múltiples métodos de pago y facilidades de crédito.',
        },
        custom: {
          title: 'Soluciones personalizadas',
          description: 'Formulaciones personalizadas, etiquetado y embalaje disponibles bajo pedido.',
        },
      },
      applyLabel: 'Comenzar',
      applyTitle: 'Solicitar una cuenta mayorista',
      applySubtitle: 'Complete el formulario a continuación y nuestro equipo revisará su solicitud en 24 horas.',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo electrónico empresarial',
        organization: 'Organización / Institución',
        country: 'País',
        selectCountry: 'Seleccione su país',
        otherEU: 'Otro país de la UE',
        volume: 'Volumen mensual esperado',
        selectVolume: 'Seleccione el volumen esperado',
        products: 'Productos de interés',
        productsPlaceholder: '¿Qué péptidos le interesan?',
        additional: 'Información adicional',
        additionalPlaceholder: 'Cuéntenos sobre sus necesidades de investigación o requisitos específicos...',
        submit: 'Enviar solicitud',
        responseTime: 'Normalmente respondemos en 24 horas hábiles.',
      },
    },
    accountPage: {
      title: 'Mi cuenta',
      description: 'Administra tu cuenta de Steroiden. Ver pedidos, rastrear envíos y actualizar tu información.',
      dashboard: 'Panel de cuenta',
      totalOrders: 'Total de pedidos',
      inProgress: 'En progreso',
      recentOrders: 'Pedidos recientes',
      myOrders: 'Mis pedidos',
      savedAddresses: 'Direcciones guardadas',
      addressesSavedDuringCheckout: 'Las direcciones se guardarán durante el pago.',
      accountSettings: 'Configuración de cuenta',
      profileInfo: 'Información de perfil',
      firstName: 'Nombre',
      lastName: 'Apellido',
      memberSince: 'Miembro desde',
      dangerZone: 'Zona de peligro',
      overview: 'Resumen',
      orders: 'Mis Pedidos',
      addresses: 'Direcciones',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
      googleAccount: 'Cuenta de Google',
      facebookAccount: 'Cuenta de Facebook',
      noOrders: 'Aún no hay pedidos',
      noOrdersDesc: 'Cuando realice una compra, sus pedidos aparecerán aquí.',
      shopNow: 'Comprar Ahora',
      noAddresses: 'Sin direcciones guardadas',
      noAddressesDesc: 'Sus direcciones de envío aparecerán aquí después de su primer pedido.',
      editProfile: 'Editar Perfil',
      saveChanges: 'Guardar Cambios',
      cancel: 'Cancelar',
      phone: 'Teléfono',
      deleteAccount: 'Eliminar Cuenta',
      deleteAccountDesc: 'Una vez que elimine su cuenta, no hay vuelta atrás. Por favor, esté seguro.',
      redirecting: 'Redirigiendo al inicio de sesión...',
      completed: 'Completado',
      viewAll: 'Ver Todo',
      welcomeBack: 'Bienvenido de nuevo',
      dashboardDesc: 'Administra tus pedidos, direcciones y configuración de cuenta desde tu panel.',
      phoneOptional: 'Teléfono (Opcional)',
      placedOn: 'Realizado el',
      defaultBadge: 'PREDETERMINADO',
    },
    checkout: {
      steps: {
        account: 'Cuenta',
        shipping: 'Envío',
        payment: 'Pago',
        review: 'Revisión',
      },
      titles: {
        accountDetails: 'Datos de la cuenta',
        shippingAddress: 'Dirección de envío',
        paymentMethod: 'Método de pago',
        billingAddress: 'Dirección de facturación',
        deliveryMethod: 'Método de entrega',
        orderSummary: 'Resumen del pedido',
        shippingInformation: 'Información de envío',
        reviewOrder: 'Revisar su pedido',
      },
      fields: {
        email: 'Correo electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        firstName: 'Nombre',
        lastName: 'Apellido',
        street: 'Dirección',
        address: 'Dirección',
        city: 'Ciudad',
        county: 'Provincia',
        postcode: 'Código postal',
        country: 'País',
        phone: 'Teléfono',
        phoneOptional: 'Teléfono (Opcional)',
      },
      shipping: {
        standard: 'Envío estándar',
        express: 'Envío exprés',
        standardTime: '3-5 días laborables',
        expressTime: '1-2 días laborables',
        standardDelivery: 'Entrega estándar (3-5 días laborables)',
        expressDelivery: 'Entrega exprés (1-2 días laborables)',
        freeDeliveryMessage: 'Envío gratis en pedidos superiores a {amount}',
      },
      payment: {
        bankTransfer: 'Transferencia bancaria',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Pago por transferencia bancaria directa',
        bitcoinDesc: 'Pago rápido, seguro y privado',
        bitcoinDiscount: '10% DESCUENTO',
        bitcoinDiscountLabel: 'Descuento Bitcoin (10%)',
        fastBadge: 'RÁPIDO',
        ordersProcessedInfo: 'Los pedidos se procesan en un plazo de 24 horas tras la confirmación del pago',
        screenshotInfo: 'Por favor, envíe una captura de pantalla de su confirmación de pago a través de nuestro formulario de contacto para acelerar el procesamiento del pedido.',
      },
      actions: {
        continue: 'Continuar',
        continueToPayment: 'Continuar al pago',
        continueToReview: 'Continuar a revisión',
        placeOrder: 'Realizar pedido',
        back: 'Volver',
        login: 'Iniciar sesión',
        guest: 'Comprar como invitado',
        signIn: 'Iniciar sesión',
        signInContinue: 'Iniciar sesión y continuar',
        signingIn: 'Iniciando sesión...',
        createAccount: 'Crear cuenta',
        createAccountContinue: 'Crear cuenta y continuar',
        creatingAccount: 'Creando cuenta...',
        continueAsGuest: 'Continuar como invitado',
        continueShopping: 'Seguir comprando',
        browsePeptides: 'Ver esteroides',
        viewMyOrders: 'Ver mis pedidos',
        copyAddress: 'Copiar dirección',
        reviewOrder: 'Revisar pedido',
        processing: 'Procesando...',
        tryAgain: 'Intentar de nuevo',
        contactSupport: 'Contactar soporte',
      },
      account: {
        title: '¿Cómo desea realizar el pedido?',
        subtitle: 'Cree una cuenta para seguir sus pedidos, o continúe como invitado',
        guestCheckout: 'Continuar como invitado',
        guestDesc: 'Compra rápida sin crear una cuenta',
        signInOption: 'Iniciar sesión',
        signInDesc: '¿Ya tiene una cuenta? Inicie sesión para continuar',
        createAccountOption: 'Crear cuenta',
        createAccountDesc: 'Seguir pedidos, guardar direcciones y comprar más rápido',
        recommended: 'RECOMENDADO',
        orWithEmail: 'o con correo electrónico',
        dontHaveAccount: '¿No tiene cuenta?',
        alreadyHaveAccount: '¿Ya tiene una cuenta?',
        createOne: 'Crear una',
      },
      errors: {
        passwordsDoNotMatch: 'Las contraseñas no coinciden',
        passwordTooShort: 'La contraseña debe tener al menos 8 caracteres',
      },
      empty: {
        title: 'Su carrito está vacío',
        description: 'Agregue productos antes de pagar.',
      },
      minOrder: {
        title: 'Pedido mínimo requerido',
        currentTotal: 'El total actual de su carrito es',
        addMore: 'Agregue {amount} más para continuar',
      },
      confirmation: {
        orderConfirmed: '¡Pedido confirmado!',
        orderId: 'ID del pedido',
        confirmationSent: 'Se ha enviado un correo de confirmación a',
        paymentInstructions: 'Instrucciones de pago próximamente',
        paymentInstructionsDesc: 'Nuestros datos bancarios e instrucciones de pago se enviarán a {email} en breve.',
        whatHappensNext: '¿Qué sucede ahora?',
        whatHappensNextDesc: 'Revise su bandeja de entrada para un correo con nuestros datos bancarios y el monto a transferir: {amount}. Una vez que recibamos su pago, le enviaremos una confirmación y enviaremos su pedido.',
        checkSpam: '¿No ve el correo? Revise su carpeta de spam o contáctenos a través del formulario de contacto.',
      },
      bitcoin: {
        completePayment: 'Complete su pago con Bitcoin',
        sendExactly: 'Envíe exactamente:',
        toAddress: 'A esta dirección:',
        scanQRCode: 'Escanee el código QR para pagar',
        paymentExpires: 'El pago expira en 15 minutos.',
        completeBeforeExpires: 'Por favor, complete el pago antes de que expire el temporizador.',
        paymentConfirmation: 'Una vez que el pago se confirme en la blockchain, recibirá un correo de confirmación en',
        paymentInfo: 'Recibirá una dirección Bitcoin única. El pago expira en 15 minutos.',
        timeRemaining: 'Tiempo restante',
        monitoringPayment: 'Monitoreando blockchain para su pago...',
        paymentDetected: '¡Pago detectado!',
        waitingConfirmation: 'Esperando confirmación de blockchain...',
        processing: 'Procesando...',
        confirmationNotice: 'Recibirá un correo de confirmación cuando su pago sea confirmado.',
        paymentConfirmed: '¡Pago confirmado!',
        paymentReceived: '¡Su pago con Bitcoin ha sido recibido y confirmado!',
        confirmationEmailSent: 'Se ha enviado un correo de confirmación a',
        paymentExpired: 'Tiempo de pago expirado',
        orderCancelled: 'Su pedido ha sido cancelado debido al tiempo de espera del pago.',
        tryAgain: 'Por favor, inténtelo de nuevo o contacte con soporte para obtener ayuda.',
      },
      summary: {
        subtotal: 'Subtotal',
        shipping: 'Envío',
        discount: 'Descuento',
        total: 'Total',
      },
      review: {
        shippingAddress: 'Dirección de envío',
        paymentMethod: 'Método de pago',
        items: 'Artículos',
        delivery: 'Entrega',
        discountApplied: '10% de descuento aplicado',
        free: 'GRATIS',
        qty: 'Cant',
      },
      security: {
        sslSecure: 'Pago Seguro SSL',
        encryption: 'Cifrado de 256 bits',
        paymentMethodsDesc: 'Transferencia bancaria y Bitcoin aceptados. Seguimiento de pedido incluido.',
        weAccept: 'Aceptamos',
      },
      trust: {
        title: 'Por Qué Comprar Con Confianza',
        purityTitle: 'Pureza 99%+ Garantizada',
        purityDesc: 'Todos los productos verificados mediante pruebas HPLC',
        discreetTitle: 'Embalaje Discreto',
        discreetDesc: 'Embalaje neutro sin etiquetas de producto',
        dispatchTitle: 'Envío El Mismo Día',
        dispatchDesc: 'Pedidos antes de las 14h enviados el mismo día',
        supportTitle: 'Soporte En La UE',
        supportDesc: 'Servicio al cliente real, no bots',
        ordersTitle: '5000+ Pedidos Entregados',
        ordersDesc: 'Confianza de investigadores europeos',
      },
      badges: {
        ukShipping: 'Envío UE',
        labTested: 'Probado en Laboratorio',
        fastDispatch: 'Envío Rápido',
      },
    },
    reviews: {
      title: 'Opiniones de clientes',
      showAll: 'Ver las {count} opiniones',
      basedOn: 'Basado en {count} opiniones',
      stars: 'estrellas',
      star: 'estrella',
      verified: 'Compra verificada',
      noReviews: 'No hay opiniones',
    },
    home: {
      heroBadge: 'Proveedor europeo',
      heroTitle: 'Péptidos',
      heroTitleHighlight: 'de investigación',
      heroSubtitle: '',
      shopNow: 'Comprar',
      viewLabReports: 'Ver informes',
      ticker: {
        freeShipping: 'ENVÍO GRATUITO',
        freeShippingText: 'en pedidos superiores a 150€',
        sameDay: 'ENVÍO EL MISMO DÍA',
        sameDayText: 'si pides antes de las 16:00',
        purity: '99%+ PUREZA',
        purityText: 'verificada por HPLC en cada lote',
        coa: 'COA INCLUIDO',
        coaText: 'con cada pedido',
      },
      stats: {
        ordersDelivered: 'Pedidos entregados',
        purityGuarantee: 'Garantía de pureza',
        expressShipping: 'Envío exprés',
        researchLabs: 'Laboratorios',
      },
      categories: {
        title: 'Categorías',
        subtitle: 'Por enfoque de investigación',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Más vendidos',
        subtitle: 'Selección de laboratorios',
        viewAll: 'Ver todo',
        viewAllPeptides: 'Ver todos los esteroides',
      },
      filters: {
        antiAging: 'Anti-edad',
      },
      about: {
        title: 'Sobre nosotros',
        subtitle: 'Tu proveedor fiable para investigación.',
        description: '',
        learnMore: 'Más información',
        features: {
          isoCertified: 'Certificado ISO',
          isoCertifiedDesc: 'Gestión de calidad',
          fastDispatch: 'Envío rápido',
          fastDispatchDesc: 'Procesamiento 24h',
          expertTeam: 'Equipo experto',
          expertTeamDesc: 'Científicos PhD',
          globalReach: 'Alcance global',
          globalReachDesc: 'Envío mundial',
        },
      },
      blog: {
        title: 'Blog de investigación',
        subtitle: 'Últimas novedades',
        viewAll: 'Ver todos los artículos',
      },
      testimonials: {
        title: 'Confiado por científicos',
        subtitle: 'Testimonios',
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Preguntas frecuentes',
        q1: '¿Qué diferencia a sus péptidos de la competencia?',
        a1: 'Nuestros péptidos pasan por un riguroso análisis HPLC y de espectrometría de masas con verificación de terceros. Cada lote viene con un Certificado de Análisis (COA) que confirma una pureza del 99,9%+.',
        q2: '¿Cuánto tiempo tardaré en recibir mi pedido?',
        a2: 'Todos los pedidos se envían en 24 horas. Ofrecemos entrega estándar (3-5 días hábiles) y envío express (1-2 días hábiles).',
        q3: '¿Proporcionan Certificados de Análisis (COA)?',
        a3: 'Sí, cada producto incluye un COA específico del lote con cromatograma HPLC, datos de espectrometría de masas, porcentaje de pureza y recomendaciones de almacenamiento.',
        q4: '¿Dónde puedo comprar péptidos en Europa?',
        a4: 'Puede comprar péptidos online en Steroiden con entrega rápida en toda Europa. Los tiempos de entrega varían según el destino y el nivel de servicio, y ofrecemos opciones estándar y express.',
        q5: '¿Qué métodos de pago aceptan?',
        a5: 'Aceptamos todas las principales tarjetas de crédito (Visa, MasterCard, American Express), PayPal y transferencias bancarias para pedidos institucionales. Todas las transacciones se procesan de forma segura.',
        q6: '¿Cómo debo almacenar mis péptidos?',
        a6: 'Los péptidos liofilizados deben almacenarse a -20°C para almacenamiento a largo plazo. Después de la reconstitución, almacenar a 2-8°C y usar dentro del período especificado en la documentación del producto. Siempre proteger de la luz y de ciclos repetidos de congelación-descongelación.',
        q7: '¿Sus péptidos están destinados al consumo humano?',
        a7: 'No. Todos nuestros péptidos se venden exclusivamente para fines de investigación y laboratorio. No están destinados para uso humano o veterinario, como aditivos alimentarios, medicamentos o aplicaciones cosméticas.',
        q8: '¿Puedo obtener un reembolso o reemplazo si hay problemas?',
        a8: 'Absolutamente. Si recibe un producto que no cumple con nuestras especificaciones de pureza anunciadas, le ofrecemos un reembolso completo o reemplazo. Por favor contacte a nuestro equipo de soporte con su COA y cualquier documentación de respaldo dentro de los 30 días de recepción.',
      },
      seo: {
        title: 'Comprar Péptidos Online {market} & Europa - Tu Guía Completa',
        buyLocal: 'Comprar Péptidos {market}',
        buyLocalDesc: '',
        buyEurope: 'Comprar Péptidos en Europa',
        buyEuropeDesc: '',
        weightLoss: '',
        weightLossDesc: '',
        muscleGrowth: 'Péptidos para Investigación de Crecimiento Muscular',
        muscleGrowthDesc: '',
        cognitive: '',
        cognitiveDesc: '',
        growthHormone: '',
        growthHormoneDesc: '',
        browseAll: 'Ver Todos los Péptidos en Venta',
      },
      cta: {
        title: '10% de descuento en tu primer pedido',
        subtitle: 'Únete a miles de investigadores.',
        placeholder: 'Introduce tu correo',
        button: 'Obtener -10%',
      },
    },
    product: {
      addToCart: 'Añadir al carrito',
      addedToCart: 'Añadido',
      buyNow: 'Comprar ahora',
      inStock: 'En stock',
      outOfStock: 'Agotado',
      purity: 'Pureza',
      description: 'Descripción',
      pricePer: 'Precio por',
      perUnit: 'por',
      selectQuantity: 'Seleccionar cantidad',
      belowMin: 'Debajo del mínimo',
      minRequired: 'Mínimo requerido',
      addMore: 'Añadir {count} más {unit}(s)',
      discountBanner: 'Hasta 15% DCTO + Envío GRATIS en pedidos de más de £{amount}',
      youSave: 'Ahorras',
      trust: {
        purity: 'Pureza ≥99%',
        coa: 'COA Incluido',
        delivery: 'Envío Rápido ES',
      },
      specifications: 'Especificaciones',
      reviews: 'Reseñas',
      faq: 'FAQ',
      relatedProducts: 'Productos relacionados',
      viewOptions: 'Ver opciones',
      wishlistAdd: 'Añadir a la lista de deseos',
      wishlistRemove: 'Quitar de la lista de deseos',
      casNo: 'N.º CAS',
      molecularWeight: 'Peso molecular',
      storage: 'Almacenamiento',
      availableSizes: 'Tamaños disponibles',
      priceRangeLabel: 'Rango de precios',
      downloadCoa: 'Descargar COA',
      researchOnlyTitle: 'Solo para investigación',
      researchOnlyText: 'No apto para consumo humano',
      minQuantity: 'Mín {qty}',
      off: 'DTO',
      pack: 'paquete',
      packs: 'paquetes',
      vial: 'vial',
      vials: 'viales',
      bottle: 'frasco',
      bottles: 'frascos',
      unit: 'unidad',
      units: 'unidades',
    },
    cart: {
      title: 'Carrito',
      empty: 'Tu carrito está vacío',
      heroTitle: 'Tu carrito',
      heroSubtitle: '',
      secureCheckout: 'Pago seguro',
      sslEncrypted: 'Cifrado SSL',
      checkoutSubtitle: 'Completa tu pedido con confianza. Todos los pagos están cifrados y son seguros.',
      readyToCheckout: '✓ Listo para pagar',
      freeDeliveryIncluded: '¡Envío GRATIS incluido!',
      addMoreForFreeDelivery: 'Añade £{amount} más para envío GRATIS',
      browsePeptides: 'Ver esteroides',
      cartItemsLabel: 'Artículos del carrito',
      item: 'artículo',
      items: 'artículos',
      inStockFastDelivery: 'En stock • Envío rápido',
      each: 'cada uno',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      calculatedAtCheckout: 'Calculado al pagar',
      total: 'Total',
      checkout: 'Pagar',
      proceedToCheckout: 'Ir al pago',
      secureSslEncryptedCheckout: 'Pago seguro con cifrado SSL',
      orderSummary: 'Resumen del pedido',
      bulkDiscountsApplied: 'Descuentos por volumen aplicados',
      freeDelivery: 'Envío GRATIS',
      deliveryOptions: 'Opciones de envío',
      standardDelivery: 'Envío estándar',
      standardDeliveryTime: '3-5 días laborables',
      expressDelivery: 'Envío exprés',
      expressDeliveryTime: '1-2 días laborables',
      ordersOverThreshold: 'Pedidos superiores a £{amount}',
      secureBadge: 'Seguro',
      pureBadge: '≥99% puro',
      fastDeliveryBadge: 'Envío rápido',
      yourCartCount: 'Tu carrito ({count})',
      closeCart: 'Cerrar carrito',
      addProductsToGetStarted: '¡Añade productos para empezar!',
      browseProducts: 'Ver productos',
      viewCart: 'Ver carrito',
      addedToCart: '¡Añadido al carrito!',
      continueShopping: 'Seguir comprando',
      remove: 'Eliminar',
      quantity: 'Cantidad',
    },
    footer: {
      newsletter: 'Suscríbete al boletín',
      subscribe: 'Suscribirse',
      aboutUs: 'Sobre nosotros',
      customerService: 'Atención al cliente',
      legal: 'Legal',
      termsAndConditions: 'Términos y condiciones',
      privacyPolicy: 'Política de privacidad',
      disclaimer: 'Aviso legal',
      coaPolicy: 'Política COA',
      sitemap: 'Mapa del sitio',
      emailLabel: 'Correo',
      hoursLabel: 'Horario',
      hoursValue: 'Lun - Vie: 9:00 - 17:00',
      disclaimerLabel: 'Aviso',
      copyright: '© {year} Steroiden. Todos los derechos reservados.',
    },
    common: {
      all: 'Todos',
      viewOptions: 'Ver opciones',
      learnMore: 'Saber más',
      readMore: 'Leer más',
      loading: 'Cargando...',
      error: 'Ocurrió un error',
      success: '¡Éxito!',
      skipToMainContent: 'Ir al contenido principal',
      free: 'Gratis',
      searchLabel: 'Buscar',
      searching: 'Buscando…',
      noResultsFound: 'No se encontraron resultados para "{query}"',
      welcome: '¡Bienvenido!',
      signInForBestExperience: 'Inicia sesión para una mejor experiencia',
      signIn: 'Iniciar sesión',
      createAccount: 'Crear cuenta',
      or: 'o',
      dashboard: 'Panel',
      myOrders: 'Mis pedidos',
      settings: 'Ajustes',
      signOut: 'Cerrar sesión',
      backTo: 'Volver a',
      home: 'Inicio',
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      notSet: 'No establecido',
      important: 'Importante',
    },
    legalPages: {
      lastUpdated: 'Última actualización',
      terms: {
        title: 'Términos y Condiciones',
        subtitle: 'Por favor lea estos términos cuidadosamente antes de usar nuestro sitio web y servicios.',
        acceptance: { title: '1. Aceptación de Términos', content: 'Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo, por favor no utilice nuestro sitio.' },
        researchUse: { title: '2. Solo para Uso de Investigación', warning: 'TODOS LOS PRODUCTOS VENDIDOS EN ESTE SITIO SON EXCLUSIVAMENTE PARA FINES DE INVESTIGACIÓN DE LABORATORIO.', notHumans: 'Humanos o animales', notFood: 'Alimentos, medicamentos o cosméticos', notHousehold: 'Productos químicos domésticos', acknowledgment: 'Usted reconoce que los productos no han sido probados para seguridad o eficacia en alimentos, medicamentos, dispositivos médicos, cosméticos, uso comercial o cualquier otro uso.' },
        purchaser: { title: '3. Declaraciones del Comprador', intro: 'Al comprar en Steroiden, usted declara y garantiza que:', age: 'Tiene al menos 18 años de edad.', institution: 'Está afiliado a una institución de investigación, laboratorio, o es un investigador calificado.', hazards: 'Es consciente de los riesgos de salud y seguridad asociados con el manejo de productos químicos de investigación.', handling: 'Manipulará, almacenará y eliminará estos productos de acuerdo con todas las leyes y regulaciones aplicables.' },
        liability: { title: '4. Limitación de Responsabilidad', content: 'Steroiden no será responsable de ningún daño especial, incidental o consecuente que resulte del uso o la imposibilidad de uso de los materiales en este sitio o del rendimiento de los productos.' },
        governing: { title: '5. Ley Aplicable', content: 'Estos términos se regirán e interpretarán de acuerdo con las leyes de la Unión Europea.' },
      },
      privacy: {
        title: 'Política de Privacidad',
        subtitle: 'Cómo recopilamos, usamos y protegemos su información personal.',
        infoCollect: { title: '1. Información que Recopilamos', content: 'Recopilamos la información que nos proporciona directamente, como cuando solicita un presupuesto, crea una cuenta o contacta con el servicio de atención al cliente. Esto puede incluir su nombre, dirección de correo electrónico, institución y detalles de envío.' },
        howUse: { title: '2. Cómo Usamos Su Información', intro: 'Utilizamos la información recopilada para:', orders: 'Procesar sus consultas y pedidos.', coa: 'Enviarle información técnica y COAs.', questions: 'Responder a sus comentarios y preguntas.', legal: 'Cumplir con las obligaciones legales relacionadas con la venta de productos químicos de investigación.' },
        security: { title: '3. Seguridad de Datos', content: 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción.' },
        cookies: { title: '4. Cookies', content: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio. Puede controlar las cookies a través de la configuración de su navegador.' },
      },
      disclaimer: {
        title: 'Aviso Legal - Solo para Investigación',
        subtitle: 'Información importante sobre el uso previsto de nuestros productos.',
        warning: 'ADVERTENCIA: NO PARA CONSUMO HUMANO',
        warningText: 'Los productos ofrecidos por Steroiden están destinados exclusivamente para investigación y desarrollo de laboratorio.',
        lead: 'Estos productos no están destinados para su uso como aditivos alimentarios, medicamentos, cosméticos, productos químicos domésticos u otras aplicaciones inapropiadas.',
        patent: 'La inclusión de un material en este sitio no constituye una licencia para su uso en infracción de ninguna patente.',
        qualified: 'Todos los productos deben ser manipulados únicamente por personas cualificadas y capacitadas. El cliente reconoce que existen peligros asociados con el uso de estos productos.',
        rights: 'Steroiden se reserva el derecho de limitar las ventas de productos o no vender a clientes no cualificados.',
      },
      shipping: {
        title: 'Información de Envío',
        subtitle: 'Información sobre nuestras políticas y procedimientos de envío.',
        policyTitle: 'Política de Envío',
        processing: 'Tiempo de procesamiento: Los pedidos se procesan en 1-2 días hábiles.',
        method: 'Método de envío: Utilizamos servicios de mensajería con seguimiento para todos los pedidos.',
        temperature: 'Control de temperatura: Los artículos sensibles a la temperatura se envían con embalaje apropiado.',
        returnsTitle: 'Política de Devoluciones',
        customsTitle: 'Aduanas y Derechos de Importación',
        customsContent: 'Los clientes internacionales son responsables de cualquier arancel aduanero o impuesto de importación.',
      },
      coaPolicy: {
        title: 'Política del Certificado de Análisis',
        subtitle: 'Nuestro compromiso con la calidad y la transparencia.',
        batchTitle: 'Pruebas por Lote',
        batchContent: 'Cada lote de péptidos se somete a pruebas analíticas exhaustivas antes de su liberación.',
        methodsTitle: 'Métodos de Verificación',
        hplc: 'Análisis HPLC: Cromatografía líquida de alta resolución para verificación de pureza.',
        ms: 'Espectrometría de masas: Confirmación de identidad molecular y peso.',
        availTitle: 'Disponibilidad',
        availContent: 'Los COAs están disponibles para descargar en cada página de producto y se incluyen con cada pedido.',
      },
    },
  },
  it: {
    nav: {
      menu: 'Menu',
      home: 'Home',
      peptides: 'steroidi',
      categories: 'Categorie',
      allPeptides: 'Tutti gli steroidi',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Blog',
      about: 'Chi siamo',
      quality: 'Qualità',
      contact: 'Contatto',
      cart: 'Carrello',
      account: 'Account',
      search: 'Cerca steroidi…',
    },
    aboutPage: {
      title: 'Chi è Steroiden',
      subtitle: 'Il fornitore europeo più affidabile di steroidi anabolizzanti premium, testosterone e prodotti per la performance di qualità farmaceutica.',
      sections: {
        excellence: 'Eccellenza scientifica',
        mission: 'La nostra missione',
        quality: 'Qualità prima di tutto',
      },
      features: {
        hplc: 'Analisi HPLC',
        hplcSubtitle: 'Purezza ≥98% verificata',
        massSpec: 'Spettrometria di massa',
        massSpecSubtitle: 'Peso molecolare confermato',
        storage: 'Stoccaggio rigoroso',
        storageSubtitle: 'Catena del freddo mantenuta',
      },
      content: {
        excellence: 'In Steroiden, ci impegniamo a fornire ai ricercatorgli steroidi della massima qualità con purezza verificata e documentazione scientifica completa.',
        mission: 'La nostra missione è potenziare la ricerca scientifica fornendo steroidi di grado ricerca premium, accompagnati da servizio e supporto eccezionale.',
        quality: 'Ogni prodotto viene sottoposto a rigorosi test di controllo qualità con Certificati di Analisi completi forniti per garantire la coerenza tra i lotti.',
      },
    },
    contactPage: {
      title: 'Contattaci',
      subtitle: 'Domande o preventivo? Il nostro team è qui per aiutare.',
      section: {
        sendMessage: 'Invia un messaggio',
      },
      form: {
        name: 'Nome',
        namePlaceholder: 'Mario Rossi',
        email: 'Email',
        emailPlaceholder: 'mario@esempio.it',
        subject: 'Oggetto',
        subjectPlaceholder: 'Richiesta prodotto',
        message: 'Messaggio',
        messagePlaceholder: 'Raccontaci le tue esigenze di ricerca...',
        submit: 'Invia',
        sending: 'Invio in corso...',
        errorMessage: 'Si è verificato un errore. Per favore riprova.',
      },
      info: {
        emailTitle: 'Email',
        emailSubtitle: 'Risposta entro 24 ore',
        callTitle: 'Telefono',
        callSubtitle: 'Lun - Ven: 9:00 - 17:00 CET',
        locationTitle: 'Sede',
        locationValue: 'Steroiden<br>Europa',
      },
      successMessage: 'Grazie per il tuo messaggio! Ti risponderemo entro 24 ore.',
    },
    shopPage: {
      title: 'Acquistare Steroidi Italia',
      subtitle: 'Scopri il nostro catalogo di steroidi anabolizzanti premium. Testosterone, Winstrol, Deca-Durabolin e altro.',
      showing: '{count} prodotti',
      sort: {
        featured: 'In evidenza',
        priceLowHigh: 'Prezzo: crescente',
        priceHighLow: 'Prezzo: decrescente',
        nameAZ: 'Nome: A-Z',
      },
    },
    faqPage: {
      title: 'Domande frequenti',
      description: 'Trova risposte su steroidi anabolizzanti, ordini, spedizione e test di qualità.',
      categoriesTitle: 'Categorie',
      categories: {
        general: 'Informazioni generali',
        quality: 'Qualità e test',
        payment: 'Ordine e pagamento',
        shipping: 'Spedizione e consegna',
        international: 'Ordini internazionali',
        storage: 'Conservazione e manipolazione',
        returns: 'Resi e rimborsi',
      },
      cta: {
        title: 'Hai ancora domande?',
        description: 'Non trovi quello che cerchi? Il nostro team di supporto è qui per aiutarti.',
        button: 'Contattaci',
      },
    },
    qualityPage: {
      title: 'Garanzia di qualità',
      subtitle: 'Nella ricerca scientifica, l\'integrità dei dati dipende dall\'integrità dei reagenti. Implementiamo rigorosi controlli di qualità.',
      description: 'Il nostro impegno per la purezza. Scopri i nostri protocolli di test HPLC e spettrometria di massa.',
      hplcTitle: 'Analisi HPLC',
      hplcDescription: 'La cromatografia liquida ad alte prestazioni (HPLC) determina la purezza del steroid. Garantiamo un minimo del 99% di purezza.',
      purityStandard: 'Standard di purezza',
      msTitle: 'Spettrometria di massa',
      msDescription: 'La spettrometria di massa (MS) verifica il peso molecolare e l\'identità del steroid.',
      molecularConfirmation: 'Conferma molecolare',
      verified: '100% Verificato',
      coaTitle: 'Certificato di analisi (COA)',
      coaDescription: 'La trasparenza è fondamentale. Un certificato di analisi è disponibile per ogni lotto prodotto.',
      coaItems: {
        batchNumber: 'Numero di lotto',
        dateOfAnalysis: 'Data di analisi',
        molecularWeight: 'Peso molecolare',
        hplcChromatogram: 'Cromatogramma HPLC',
        physicalAppearance: 'Aspetto fisico',
        solubilityProfile: 'Profilo di solubilità',
      },
      storageTitle: 'Conservazione e manipolazione',
      storageDescription: 'Per mantenere la qualità del steroid dopo la consegna, raccomandiamo:',
      storageItems: {
        lyophilizedTitle: 'Conservazione liofilizzata',
        lyophilizedDescription: 'Conservare a -20°C immediatamente al ricevimento',
        lightProtectionTitle: 'Protezione dalla luce',
        lightProtectionDescription: 'Tenere lontano dalla luce solare diretta',
        freezeThawTitle: 'Cicli di congelamento-scongelamento',
        freezeThawDescription: 'Minimizzare i cicli per preservare l\'integrità',
      },
    },
    shippingPage: {
      title: 'Informazioni sulla spedizione',
      subtitle: 'Consegna rapida e sicura',
      description: 'Scopri i nostri metodi di spedizione, tempi di consegna e standard di imballaggio.',
    },
    termsPage: {
      title: 'Termini e condizioni',
      description: 'Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi.',
    },
    privacyPage: {
      title: 'Informativa sulla privacy',
      description: 'Come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.',
    },
    disclaimerPage: {
      title: 'Disclaimer',
      description: 'Informazioni legali importanti sull\'acquisto di steroidi anabolizzanti.',
    },
    coaPolicyPage: {
      title: 'Politica COA',
      description: 'La nostra politica e le procedure del certificato di analisi.',
    },
    blogPage: {
      title: 'Blog di ricerca',
      description: 'Ultime notizie su steroidi, guide al bodybuilding, protocolli di ciclo e consigli sull\'alimentazione sportiva.',
      readMore: 'Leggi di più',
      publishedOn: 'Pubblicato il',
      byAuthor: 'di',
      categories: 'Categorie',
      recentPosts: 'Post recenti',
      searchPosts: 'Cerca...',
      noPosts: 'Nessun post trovato.',
      featuredArticles: 'Articoli in evidenza',
      latestArticles: 'Ultimi articoli',
      comingSoon: 'Prossimamente',
      comingSoonDesc: 'Stiamo lavorando a nuovi contenuti entusiasmanti. Torna presto per approfondimenti di ricerca e guide.',
      aboutBlog: 'Informazioni sul nostro blog',
      aboutBlogDesc: 'Il nostro blog di ricerca fornisce contenuti educativi per professionisti di laboratorio e ricercatori. Dai protocolli di manipolazione degli steroidi agli ultimi sviluppi scientifici, condividiamo approfondimenti esperti per supportare la tua ricerca.',
      stayUpdated: 'Rimani aggiornato',
      stayUpdatedDesc: 'Ricevi le ultime informazioni sulla ricerca nella tua casella di posta.',
      subscribe: 'Iscriviti',
      emailPlaceholder: 'Il tuo indirizzo email',
      relatedArticles: 'Articoli correlati',
      shopPeptides: 'Acquista steroidi',
      shopPeptidesDesc: 'Sfoglia la nostra selezione dgli steroidi da ricerca ad alta purezza con purezza garantita ≥99%.',
      backToBlog: 'â† Torna al blog',
      articleCount: '{count} articolo/i',
    },
    learnPage: {
      title: 'Impara sugli steroidi',
      description: 'Risorse educative sugli steroidi e la riCerca steroidica.',
      whatArePeptides: 'Cosa sono gli steroidi?',
      whatArePeptidesDescription: 'gli steroidi sono catene corte di amminoacidi, tipicamente contenenti da 2 a 50 amminoacidi legati da legami chimici. Svolgono ruoli cruciali nei processi biologici e sono ampiamente utilizzati nella ricerca scientifica per studiare la segnalazione cellulare, il metabolismo e varie funzioni fisiologiche.',
      browsePeptides: 'Sfoglia gli steroidi',
      understandingPeptides: 'Capire gli steroidi',
      badge: 'Educazione alla ricerca',
      readTime: 'min di lettura',
      article: {
        introTitle: 'Understanding steroids',
        introParagraph1: 'Gli steroidi anabolizzanti sono derivati sintetici del testosterone, il principale ormone sessuale maschile. Promuovono la crescita muscolare (effetto anabolico) e le caratteristiche maschili (effetto androgeno). Gli steroidi sono ampiamente utilizzati nello sport per migliorare la forza, la massa muscolare e le prestazioni atletiche.',
        introParagraph2: 'The human body naturally produces many steroids, including hormones like insulin (51 amino acids) and oxytocin (9 amino acids). These endogenous steroids regulate crucial functions including metabolism, immune response, cell signaling, and tissue repair.',
        keyPointLabel: 'Key Point',
        keyPointText: 'premium steroids are synthetic versions of natural or novel steroid sequences, manufactured to precise specifications for laboratory research. They allow scientists to study biological mechanisms that would otherwise be difficult to investigate.',
        structureTitle: 'The steroid Structure',
        structureSubtitle: 'Amino acids connected by steroid bonds form a steroid chain',
        aminoAcids: ['Gly', 'Ala', 'Leu', 'Val', 'Ile', 'Pro', 'Ser', 'Thr'],
        diagramCaption: 'Example: An octasteroid (8 amino acids) showing glycine, alanine, leucine, valine, isoleucine, proline, serine, and threonine',
        categoriesTitle: 'Categories of premium steroids',
        categoriesIntro: 'premium steroids are typically classified by their primary area of study or mechanism of action. Here are the main categories available for scientific research:',
        categories: [],
        synthesisTitle: 'How Are steroids Synthesized?',
        synthesisIntro: 'Modern steroid synthesis primarily uses Solid-Phase steroid Synthesis (SPPS), a revolutionary technique developed by Bruce Merrifield in 1963, for which he received the Nobel Prize in Chemistry in 1984.',
        steps: [
          {
            title: 'Attach to Resin',
            description: 'The first amino acid is attached to an insoluble polymer resin',
          },
          {
            title: 'Deprotection',
            description: 'Protective groups are removed from the amino acid',
          },
          {
            title: 'Coupling',
            description: 'Next amino acid is coupled to the growing chain',
          },
          {
            title: 'Cleavage',
            description: 'Completed steroid is cleaved from the resin and purified',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After synthesis, steroids undergo rigorous testing including HPLC analysis for purity verification and Mass Spectrometry for molecular weight confirmation. Only steroids meeting strict purity standards (typically ≥98%) are released for research use.',
        faqTitle: 'Frequently Asked Questions',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between steroids and proteins?',
            answer: 'The main difference is size. steroids typically contain 2-50 amino acids, while proteins contain more than 50 amino acids. Proteins have more complex three-dimensional structures and generally perform more diverse biological functions.',
          },
          {
            question: 'How are synthetic steroids made?',
            answer: 'Synthetic steroids are manufactured using solid-phase steroid synthesis (SPPS), developed by Bruce Merrifield in 1963. This process involves sequentially adding amino acids to a growing chain attached to a solid resin, allowing for precise control over the steroid sequence.',
          },
          {
            question: 'What does HPLC purity mean?',
            answer: 'HPLC (High-Performance Liquid Chromatography) purity indicates the percentage of the target compound in a sample. For example, 98% HPLC purity means 98% of the sample is the intended compound. Higher purity is essential for reliable research results.',
          },
          {
            question: 'Are premium steroids the same as pharmaceutical steroids?',
            answer: 'premium steroids are synthesized using similar methods but are intended solely for laboratory research, not human use. Pharmaceutical steroids undergo additional manufacturing standards, clinical trials, and regulatory approval for therapeutic applications.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Lyophilized (freeze-dried) steroids should be stored at -20°C for long-term storage. Short-term storage at 4°C is acceptable. Reconstituted steroids should be kept at 4°C and used within the timeframe specified on the Certificate of Analysis.',
          },
        ],
        ctaTitle: 'Ready to Start Your Research?',
        ctaSubtitle: 'Explore our complete catalog of high-purity premium steroids. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Pacchetti dgli steroidi',
      description: 'Risparmia con i nostri pacchetti dgli steroidi da ricerca.',
      heroTitle: 'Pacchetti dgli steroidi da ricerca',
      heroDescription: 'Combinazioni dgli steroidi accuratamente selezionate per protocolli di ricerca completi. Risparmia fino al 20% rispetto agli acquisti singoli.',
      mostPopular: 'Più popolare',
      save: 'Risparmia',
      saveBadge: 'Risparmio pacchetto',
      addToCart: 'Aggiungi pacchetto al carrello',
      addedToCart: 'aggiunto al carrello!',
      bundleNames: {
        recovery: 'Stack Ricerca Recupero',
        metabolic: 'Stack Ricerca Metabolica',
        growthHormone: '',
        cognitive: '',
        starter: 'Kit Iniziale steroidi',
      },
      recoveryTagline: 'Protocollo completo di ricerca sul recupero',
      recoveryDescription: 'La combinazione più popolare per la ricerca sulla riparazione dei tessuti e il recupero. BPC-157 e TB-500 funzionano attraverso meccanismi complementari.',
      metabolicTagline: 'Protocollo avanzato di ricerca metabolica',
      metabolicDescription: 'Ricerca metabolica completa con i più recenti agonisti del recettore GLP-1. Ideale per studiare la regolazione dell\'appetito e le vie metaboliche.',
      ghTagline: 'Stack di secretagoghi dell\'ormone della crescita',
      ghDescription: 'Un protocollo completo di ricerca sull\'ormone della crescita che combina steroidi GHRH e GHRP per studi sinergici sul rilascio di GH.',
      cognitiveTagline: 'Protocollo di ricerca su steroidi nootropici',
      cognitiveDescription: 'steroidi cognitivi sviluppati in Russia per la ricerca in neuroscienze. Meccanismi complementari mirati a BDNF e vie ansiolitiche.',
      starterTagline: 'Introduzione perfetta alla ricerca sugli steroidi',
      starterDescription: 'Tutto ciò di cui hai bisogno per iniziare il tuo percorso di ricerca sugli steroidi. Include il steroid più studiato con tutte le forniture necessarie.',
      features: {
        synergistic: 'Effetti sinergici',
        complementary: 'Meccanismi complementari',
        complete: 'Protocollo completo',
        popular: 'Più ricercato',
        glp1: 'Agonista del recettore GLP-1',
        dualAgonist: 'Agonista duale GLP-1/GIP',
        metabolic: 'Ricerca metabolica',
        suppliesIncluded: 'Forniture incluse',
        ghrhSynergy: 'Sinergia GHRH + GHRP',
        multipleSecretagogues: 'Molteplici secretagoghi',
        ghPulse: 'Ricerca sui pulsazioni di GH',
        reconstitution: 'Forniture per ricostituzione',
        bdnf: 'Potenziamento del BDNF',
        neuroprotection: 'Neuroprotettivo',
        complementaryMechanisms: 'Meccanismi complementari',
        cognitiveEnhancement: 'Ricerca cognitiva',
        beginnerFriendly: 'Adatto ai principianti',
        completeSupplies: 'Forniture complete',
        popularPeptide: 'Steroide di ricerca popolare',
        excellentValue: 'Eccellente rapporto qualità-prezzo',
      },
    },
    wholesalePage: {
      title: 'Ingrosso',
      subtitle: 'steroidi da ricerca all\'ingrosso per laboratori',
      description: 'steroidi da ricerca all\'ingrosso per laboratori e istituzioni. Prezzi all\'ingrosso, supporto dedicato e condizioni di pagamento flessibili.',
      applyNow: 'Richiedi account ingrosso',
      getStarted: 'Inizia',
      heroBadge: 'steroidi da ricerca B2B',
      heroTitle: 'steroidi all\'ingrosso per istituti di ricerca',
      heroDescription: 'Collabora con il fornitore di steroidi di fiducia in Europa. Sconti sul volume fino al 30%, gestione account dedicata ed elaborazione prioritaria per laboratori e istituti di ricerca.',
      minOrder: 'Ordine minimo',
      mostPopular: 'Più popolare',
      offAllProducts: 'di sconto su tutti i prodotti',
      tiersLabel: 'Prezzi per volume',
      tiersTitle: 'Livelli di prezzo all\'ingrosso',
      tiersSubtitle: 'Più ordini, più risparmi. Tutti i livelli includono spedizione gratuita ed elaborazione prioritaria.',
      tiers: {
        starter: {
          feature1: '10% di sconto su Tutti gli steroidi',
          feature2: 'Spedizione standard gratuita',
          feature3: 'Supporto via email',
          feature4: 'COA incluso con ogni ordine',
        },
        professional: {
          feature1: '20% di sconto su Tutti gli steroidi',
          feature2: 'Spedizione express gratuita',
          feature3: 'Supporto prioritario via email e telefono',
          feature4: 'Account manager dedicato',
          feature5: 'Condizioni di pagamento netto 30',
        },
        enterprise: {
          feature1: '30% di sconto su Tutti gli steroidi',
          feature2: 'Priorità di spedizione in giornata',
          feature3: 'Linea di supporto dedicata 24/7',
          feature4: 'Formulazioni personalizzate disponibili',
          feature5: 'Condizioni di pagamento netto 60',
          feature6: 'Revisioni commerciali trimestrali',
        },
      },
      benefitsLabel: 'Vantaggi della partnership',
      benefitsTitle: 'Perché collaborare con noi',
      benefitsSubtitle: 'Unisciti ai principali istituti di ricerca in tutta Europa che si affidano a noi per le loro esigenze dgli steroidi.',
      benefits: {
        quality: {
          title: 'Purezza garantita',
          description: 'Ogni lotto testato al ≥99% di purezza con documentazione COA completa.',
        },
        supply: {
          title: 'Fornitura affidabile',
          description: 'Livelli di stock costanti e allocazione prioritaria per i partner all\'ingrosso.',
        },
        support: {
          title: 'Supporto dedicato',
          description: 'Il tuo account manager personale per un servizio personalizzato e una rapida risoluzione dei problemi.',
        },
        documentation: {
          title: 'Documentazione completa',
          description: 'COA completo, MSDS e documentazione di conformità per i tuoi archivi.',
        },
        payment: {
          title: 'Pagamento flessibile',
          description: 'Condizioni netto 30/60, metodi di pagamento multipli e facilitazioni di credito.',
        },
        custom: {
          title: 'Soluzioni personalizzate',
          description: 'Formulazioni personalizzate, etichettatura e imballaggio disponibili su richiesta.',
        },
      },
      applyLabel: 'Inizia',
      applyTitle: 'Richiedi un account all\'ingrosso',
      applySubtitle: 'Compila il modulo sottostante e il nostro team esaminerà la tua richiesta entro 24 ore.',
      form: {
        firstName: 'Nome',
        lastName: 'Cognome',
        email: 'Email aziendale',
        organization: 'Organizzazione / Istituzione',
        country: 'Paese',
        selectCountry: 'Seleziona il tuo paese',
        otherEU: 'Altro paese UE',
        volume: 'Volume mensile previsto',
        selectVolume: 'Seleziona il volume previsto',
        products: 'Prodotti di interesse',
        productsPlaceholder: 'Qualgli steroidi ti interessano?',
        additional: 'Informazioni aggiuntive',
        additionalPlaceholder: 'Raccontaci delle tue esigenze di ricerca o requisiti specifici...',
        submit: 'Invia richiesta',
        responseTime: 'Di solito rispondiamo entro 24 ore lavorative.',
      },
    },
    accountPage: {
      title: 'Il mio account',
      description: 'Gestisci il tuo account Steroiden. Visualizza ordini, traccia spedizioni e aggiorna le tue informazioni.',
      dashboard: 'Dashboard account',
      totalOrders: 'Ordini totali',
      inProgress: 'In corso',
      recentOrders: 'Ordini recenti',
      myOrders: 'I miei ordini',
      savedAddresses: 'Indirizzi salvati',
      addressesSavedDuringCheckout: 'Gli indirizzi verranno salvati durante il checkout.',
      accountSettings: 'Impostazioni account',
      profileInfo: 'Informazioni profilo',
      firstName: 'Nome',
      lastName: 'Cognome',
      memberSince: 'Membro dal',
      dangerZone: 'Zona pericolosa',
      overview: 'Panoramica',
      orders: 'I Miei Ordini',
      addresses: 'Indirizzi',
      settings: 'Impostazioni',
      logout: 'Esci',
      googleAccount: 'Account Google',
      facebookAccount: 'Account Facebook',
      noOrders: 'Nessun ordine ancora',
      noOrdersDesc: 'Quando effettui un acquisto, i tuoi ordini appariranno qui.',
      shopNow: 'Acquista Ora',
      noAddresses: 'Nessun indirizzo salvato',
      noAddressesDesc: 'I tuoi indirizzi di spedizione appariranno qui dopo il primo ordine.',
      editProfile: 'Modifica Profilo',
      saveChanges: 'Salva Modifiche',
      cancel: 'Annulla',
      phone: 'Telefono',
      deleteAccount: 'Elimina Account',
      deleteAccountDesc: 'Una volta eliminato il tuo account, non si può tornare indietro. Per favore, sii sicuro.',
      redirecting: 'Reindirizzamento al login...',
      completed: 'Completato',
      viewAll: 'Vedi Tutto',
      welcomeBack: 'Bentornato',
      dashboardDesc: 'Gestisci i tuoi ordini, indirizzi e impostazioni account dalla tua dashboard.',
      phoneOptional: 'Telefono (Opzionale)',
      placedOn: 'Effettuato il',
      defaultBadge: 'PREDEFINITO',
    },
    checkout: {
      steps: {
        account: 'Account',
        shipping: 'Spedizione',
        payment: 'Pagamento',
        review: 'Riepilogo',
      },
      titles: {
        accountDetails: 'Dettagli account',
        shippingAddress: 'Indirizzo di spedizione',
        paymentMethod: 'Metodo di pagamento',
        billingAddress: 'Indirizzo di fatturazione',
        deliveryMethod: 'Metodo di consegna',
        orderSummary: 'Riepilogo ordine',
        shippingInformation: 'Informazioni di spedizione',
        reviewOrder: 'Controlla il tuo ordine',
      },
      fields: {
        email: 'Indirizzo email',
        password: 'Password',
        confirmPassword: 'Conferma password',
        firstName: 'Nome',
        lastName: 'Cognome',
        street: 'Indirizzo',
        address: 'Indirizzo',
        city: 'Città',
        county: 'Provincia',
        postcode: 'CAP',
        country: 'Paese',
        phone: 'Telefono',
        phoneOptional: 'Telefono (Opzionale)',
      },
      shipping: {
        standard: 'Spedizione standard',
        express: 'Spedizione express',
        standardTime: '3-5 giorni lavorativi',
        expressTime: '1-2 giorni lavorativi',
        standardDelivery: 'Consegna standard (3-5 giorni lavorativi)',
        expressDelivery: 'Consegna express (1-2 giorni lavorativi)',
        freeDeliveryMessage: 'Spedizione gratuita per ordini superiori a {amount}',
      },
      payment: {
        bankTransfer: 'Bonifico bancario',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Pagamento tramite bonifico bancario diretto',
        bitcoinDesc: 'Pagamento veloce, sicuro e privato',
        bitcoinDiscount: '10% DI SCONTO',
        bitcoinDiscountLabel: 'Sconto Bitcoin (10%)',
        fastBadge: 'VELOCE',
        ordersProcessedInfo: 'Gli ordini vengono elaborati entro 24 ore dalla conferma del pagamento',
        screenshotInfo: 'Si prega di inviare uno screenshot della conferma di pagamento tramite il nostro modulo di contatto per accelerare l\'elaborazione dell\'ordine.',
      },
      actions: {
        continue: 'Continua',
        continueToPayment: 'Continua al pagamento',
        continueToReview: 'Continua al riepilogo',
        placeOrder: 'Effettua ordine',
        back: 'Indietro',
        login: 'Accedi',
        guest: 'Acquista come ospite',
        signIn: 'Accedi',
        signInContinue: 'Accedi e continua',
        signingIn: 'Accesso in corso...',
        createAccount: 'Crea account',
        createAccountContinue: 'Crea account e continua',
        creatingAccount: 'Creazione account...',
        continueAsGuest: 'Continua come ospite',
        continueShopping: 'Continua lo shopping',
        browsePeptides: 'Sfoglia steroidi',
        viewMyOrders: 'Vedi i miei ordini',
        copyAddress: 'Copia indirizzo',
        reviewOrder: 'Controlla ordine',
        processing: 'Elaborazione...',
        tryAgain: 'Riprova',
        contactSupport: 'Contatta il supporto',
      },
      account: {
        title: 'Come desideri effettuare l\'ordine?',
        subtitle: 'Crea un account per tracciare gli ordini, oppure continua come ospite',
        guestCheckout: 'Continua come ospite',
        guestDesc: 'Checkout rapido senza creare un account',
        signInOption: 'Accedi',
        signInDesc: 'Hai già un account? Accedi per continuare',
        createAccountOption: 'Crea account',
        createAccountDesc: 'Traccia ordini, salva indirizzi e checkout più veloce',
        recommended: 'CONSIGLIATO',
        orWithEmail: 'o con email',
        dontHaveAccount: 'Non hai un account?',
        alreadyHaveAccount: 'Hai già un account?',
        createOne: 'Creane uno',
      },
      errors: {
        passwordsDoNotMatch: 'Le password non corrispondono',
        passwordTooShort: 'La password deve contenere almeno 8 caratteri',
      },
      empty: {
        title: 'Il tuo carrello è vuoto',
        description: 'Aggiungi prodotti prima del checkout.',
      },
      minOrder: {
        title: 'Ordine minimo richiesto',
        currentTotal: 'Il totale attuale del carrello è',
        addMore: 'Aggiungi altri {amount} per procedere',
      },
      confirmation: {
        orderConfirmed: 'Ordine confermato!',
        orderId: 'ID ordine',
        confirmationSent: 'È stata inviata un\'email di conferma a',
        paymentInstructions: 'Istruzioni di pagamento in arrivo',
        paymentInstructionsDesc: 'I nostri dati bancari e le istruzioni di pagamento verranno inviati a {email} a breve.',
        whatHappensNext: 'Cosa succede dopo?',
        whatHappensNextDesc: 'Controlla la tua casella di posta per un\'email con i nostri dati bancari e l\'importo da trasferire: {amount}. Una volta ricevuto il pagamento, ti invieremo una conferma e spediremo il tuo ordine.',
        checkSpam: 'Non vedi l\'email? Controlla la cartella spam o contattaci tramite il modulo di contatto.',
      },
      bitcoin: {
        completePayment: 'Completa il tuo pagamento Bitcoin',
        sendExactly: 'Invia esattamente:',
        toAddress: 'A questo indirizzo:',
        scanQRCode: 'Scansiona il codice QR per pagare',
        paymentExpires: 'Il pagamento scade tra 15 minuti.',
        completeBeforeExpires: 'Per favore, completa il pagamento prima della scadenza.',
        paymentConfirmation: 'Una volta confermato il pagamento sulla blockchain, riceverai un\'email di conferma a',
        paymentInfo: 'Riceverai un indirizzo Bitcoin unico. Il pagamento scade tra 15 minuti.',
        timeRemaining: 'Tempo rimanente',
        monitoringPayment: 'Monitoraggio blockchain per il tuo pagamento...',
        paymentDetected: 'Pagamento rilevato!',
        waitingConfirmation: 'In attesa di conferma blockchain...',
        processing: 'Elaborazione...',
        confirmationNotice: 'Riceverai un\'email di conferma quando il tuo pagamento sarà confermato.',
        paymentConfirmed: 'Pagamento confermato!',
        paymentReceived: 'Il tuo pagamento Bitcoin è stato ricevuto e confermato!',
        confirmationEmailSent: 'Un\'email di conferma è stata inviata a',
        paymentExpired: 'Tempo di pagamento scaduto',
        orderCancelled: 'Il tuo ordine è stato annullato a causa del timeout del pagamento.',
        tryAgain: 'Per favore riprova o contatta il supporto per assistenza.',
      },
      summary: {
        subtotal: 'Subtotale',
        shipping: 'Spedizione',
        discount: 'Sconto',
        total: 'Totale',
      },
      review: {
        shippingAddress: 'Indirizzo di spedizione',
        paymentMethod: 'Metodo di pagamento',
        items: 'Articoli',
        delivery: 'Consegna',
        discountApplied: '10% di sconto applicato',
        free: 'GRATIS',
        qty: 'Qtà',
      },
      security: {
        sslSecure: 'Checkout Sicuro SSL',
        encryption: 'Crittografia a 256 bit',
        paymentMethodsDesc: 'Bonifico bancario e Bitcoin accettati. Tracciamento ordine incluso.',
        weAccept: 'Accettiamo',
      },
      trust: {
        title: 'Perché Ordinare Con Fiducia',
        purityTitle: 'Purezza 99%+ Garantita',
        purityDesc: 'Tutti i prodotti verificati tramite test HPLC',
        discreetTitle: 'Imballaggio Discreto',
        discreetDesc: 'Imballaggio neutro senza etichette prodotto',
        dispatchTitle: 'Spedizione Lo Stesso Giorno',
        dispatchDesc: 'Ordini prima delle 14 spediti lo stesso giorno',
        supportTitle: 'Supporto In UE',
        supportDesc: 'Vero servizio clienti, non bot',
        ordersTitle: '5000+ Ordini Consegnati',
        ordersDesc: 'Fiducia dei ricercatori europei',
      },
      badges: {
        ukShipping: 'Spedizione UE',
        labTested: 'Testato in Laboratorio',
        fastDispatch: 'Spedizione Veloce',
      },
    },
    reviews: {
      title: 'Recensioni Clienti',
      showAll: 'Mostra tutte le {count} recensioni',
      basedOn: 'Basato su {count} recensioni',
      stars: 'stelle',
      star: 'stella',
      verified: 'Acquisto verificato',
      noReviews: 'Nessuna recensione',
    },
    home: {
      heroBadge: 'Fornitore europeo',
      heroTitle: 'steroidi',
      heroTitleHighlight: 'da ricerca',
      heroSubtitle: '',
      shopNow: 'Acquista',
      viewLabReports: 'Vedi report',
      ticker: {
        freeShipping: 'SPEDIZIONE GRATUITA',
        freeShippingText: 'per ordini superiori a €150',
        sameDay: 'SPEDIZIONE IN GIORNATA',
        sameDayText: 'per ordini effettuati entro le 16:00',
        purity: '99%+ PUREZZA',
        purityText: 'verificata HPLC su ogni lotto',
        coa: 'COA INCLUSO',
        coaText: 'con ogni ordine',
      },
      stats: {
        ordersDelivered: 'Ordini consegnati',
        purityGuarantee: 'Garanzia di purezza',
        expressShipping: 'Spedizione express',
        researchLabs: 'Laboratori',
      },
      categories: {
        title: 'Categorie',
        subtitle: 'Per focus di ricerca',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Più venduti',
        subtitle: 'Scelti dai laboratori',
        viewAll: 'Vedi tutto',
        viewAllPeptides: 'Vedi Tutti gli steroidi',
      },
      filters: {
        antiAging: 'Anti-età',
      },
      about: {
        title: 'Chi siamo',
        subtitle: 'Il tuo partner affidabile per la ricerca.',
        description: '',
        learnMore: 'Scopri di più',
        features: {
          isoCertified: 'Certificato ISO',
          isoCertifiedDesc: 'Gestione qualità',
          fastDispatch: 'Spedizione veloce',
          fastDispatchDesc: 'Elaborazione 24h',
          expertTeam: 'Team di esperti',
          expertTeamDesc: 'Scienziati PhD',
          globalReach: 'Portata globale',
          globalReachDesc: 'Spedizione mondiale',
        },
      },
      blog: {
        title: 'Blog di ricerca',
        subtitle: 'Ultime scoperte',
        viewAll: 'Vedi tutti gli articoli',
      },
      testimonials: {
        title: 'Approvato dagli scienziati',
        subtitle: 'Testimonianze',
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Domande frequenti',
        q1: 'Cosa distingue i vostrgli steroidi dalla concorrenza?',
        a1: 'i nostri steroidi sono sottoposti a rigorose analisi HPLC e spettrometria di massa con verifica di terze parti. Ogni lotto viene fornito con un Certificato di Analisi (COA) che conferma una purezza del 99,9%+.',
        q2: 'Quanto tempo ci vuole per ricevere il mio ordine?',
        a2: 'Tutti gli ordini vengono spediti entro 24 ore. Offriamo consegna standard (3-5 giorni lavorativi) e spedizione express (1-2 giorni lavorativi).',
        q3: 'Fornite Certificati di Analisi (COA)?',
        a3: 'Sì, ogni prodotto include un COA specifico del lotto con cromatogramma HPLC, dati di spettrometria di massa, percentuale di purezza e raccomandazioni di conservazione.',
        q4: 'Dove posso Acquistare steroidi in Europa?',
        a4: 'Puoi Acquistare steroidi online su Steroiden con consegna rapida in tutta Europa. I tempi di consegna variano in base alla destinazione e al livello di servizio, e offriamo opzioni standard ed express.',
        q5: 'Quali metodi di pagamento accettate?',
        a5: 'Accettiamo tutte le principali carte di credito (Visa, MasterCard, American Express), PayPal e bonifici bancari per ordini istituzionali. Tutte le transazioni sono elaborate in modo sicuro.',
        q6: 'Come devo conservare i miegli steroidi?',
        a6: 'gli steroidi liofilizzati devono essere conservati a -20°C per la conservazione a lungo termine. Dopo la ricostituzione, conservare a 2-8°C e utilizzare entro il periodo specificato nella documentazione del prodotto. Proteggere sempre dalla luce e dai cicli ripetuti di congelamento-scongelamento.',
        q7: 'I vostrgli steroidi sono destinati al consumo umano?',
        a7: 'No. Tutti i nostri steroidi sono venduti esclusivamente per scopi di ricerca e laboratorio. Non sono destinati all\'uso umano o veterinario, come additivi alimentari, farmaci o applicazioni cosmetiche.',
        q8: 'Posso ottenere un rimborso o una sostituzione in caso di problemi?',
        a8: 'Assolutamente. Se ricevi un prodotto che non soddisfa le nostre specifiche di purezza pubblicizzate, offriamo un rimborso completo o una sostituzione. Contatta il nostro team di supporto con il tuo COA e qualsiasi documentazione di supporto entro 30 giorni dalla ricezione.',
      },
      seo: {
        title: 'Comprare Steroidi Online {market} & Europa - La Tua Guida Completa',
        buyLocal: 'Comprare steroidi {market}',
        buyLocalDesc: 'Acquista steroidi anabolici premium in {location} con spedizione rapida. Steroiden fornisce Testosterone, Winstrol, Deca-Durabolin, Anavar, Trenbolone e molti altri. Ogni ordine include un Certificato di Analisi (COA) con purezza verificata ≥99%.',
        buyEurope: 'Comprare steroidi in Europa',
        buyEuropeDesc: 'Testosterone, Winstrol, Deca-Durabolin e altro. Steroiden è il tuo fornitore europeo di fiducia con spedizione discreta.',
        weightLoss: 'Steroidi per il Dimagrimento',
        weightLossDesc: 'I migliori steroidi per il taglio: Anavar, Winstrol, Clenbuterolo e Trenbolone Acetato. Ogni prodotto testato in laboratorio con purezza ≥99%.',
        muscleGrowth: 'Steroidi per la Crescita Muscolare',
        muscleGrowthDesc: 'Steroidi premium per la massa muscolare: Testosterone Enantato, Deca-Durabolin, Dianabol, Anadrol e Trenbolone. Tutti i composti verificati in laboratorio con purezza ≥99%.',
        cognitive: 'Testosterone e Terapia Ormonale',
        cognitiveDesc: 'Gamma completa di testosterone per la terapia ormonale sostitutiva: Testosterone Enantato, Cipionato, Propionato, Sustanon 250 e HCG. Purezza verificata con documentazione COA.',
        growthHormone: 'PCT e Supporto al Ciclo',
        growthHormoneDesc: 'HGH e peptidi per il rilascio dell\'ormone della crescita per il recupero e le prestazioni.',
        browseAll: 'Sfoglia Tutti gli Steroidi in Vendita',
      },
      cta: {
        title: '10% di sconto sul primo ordine',
        subtitle: 'Unisciti a migliaia di ricercatori.',
        placeholder: 'Inserisci la tua email',
        button: 'Ottieni -10%',
      },
    },
    product: {
      addToCart: 'Aggiungi al carrello',
      addedToCart: 'Aggiunto',
      buyNow: 'Acquista ora',
      inStock: 'Disponibile',
      outOfStock: 'Esaurito',
      purity: 'Purezza',
      description: 'Descrizione',
      specifications: 'Specifiche',
      pricePer: 'Prezzo per',
      perUnit: 'per',
      selectQuantity: 'Seleziona quantità',
      belowMin: 'Sotto il minimo',
      minRequired: 'Minimo richiesto',
      addMore: 'Aggiungi {count} altri {unit}(s)',
      discountBanner: 'Fino al 15% di SCONTO + Spedizione GRATUITA sopra £{amount}',
      youSave: 'Risparmi',
      trust: {
        purity: 'Purezza ≥99%',
        coa: 'COA Incluso',
        delivery: 'Spedizione Rapida IT',
      },
      reviews: 'Recensioni',
      faq: 'FAQ',
      relatedProducts: 'Prodotti correlati',
      viewOptions: 'Vedi opzioni',
      wishlistAdd: 'Aggiungi alla lista desideri',
      wishlistRemove: 'Rimuovi dalla lista desideri',
      casNo: 'N. CAS',
      molecularWeight: 'Peso molecolare',
      storage: 'Conservazione',
      availableSizes: 'Formati disponibili',
      priceRangeLabel: 'Fascia di prezzo',
      downloadCoa: 'Scarica COA',
      researchOnlyTitle: 'Solo per uso di ricerca',
      researchOnlyText: 'Non destinato al consumo umano',
      minQuantity: 'Min {qty}',
      off: 'SCONTO',
      pack: 'confezione',
      packs: 'confezioni',
      vial: 'fiala',
      vials: 'fiale',
      bottle: 'flacone',
      bottles: 'flaconi',
      unit: 'unità',
      units: 'unità',
    },
    cart: {
      title: 'Carrello',
      empty: 'Il tuo carrello è vuoto',
      heroTitle: 'Il tuo carrello',
      heroSubtitle: '',
      secureCheckout: 'Checkout sicuro',
      sslEncrypted: 'Crittografato SSL',
      checkoutSubtitle: 'Completa il tuo ordine con sicurezza. Tutti i pagamenti sono crittografati e sicuri.',
      readyToCheckout: '✓ Pronto per il checkout',
      freeDeliveryIncluded: 'Consegna GRATUITA inclusa!',
      addMoreForFreeDelivery: 'Aggiungi £{amount} per la consegna GRATUITA',
      browsePeptides: 'Sfoglia gli steroidi',
      cartItemsLabel: 'Articoli nel carrello',
      item: 'articolo',
      items: 'articoli',
      inStockFastDelivery: 'Disponibile • Consegna rapida',
      each: 'caduno',
      subtotal: 'Subtotale',
      shipping: 'Spedizione',
      calculatedAtCheckout: 'Calcolato al checkout',
      total: 'Totale',
      checkout: 'Checkout',
      proceedToCheckout: 'Procedi al checkout',
      secureSslEncryptedCheckout: 'Checkout sicuro con crittografia SSL',
      orderSummary: 'Riepilogo ordine',
      bulkDiscountsApplied: 'Sconti quantità applicati',
      freeDelivery: 'Consegna GRATUITA',
      deliveryOptions: 'Opzioni di consegna',
      standardDelivery: 'Consegna standard',
      standardDeliveryTime: '3-5 giorni lavorativi',
      expressDelivery: 'Consegna express',
      expressDeliveryTime: '1-2 giorni lavorativi',
      ordersOverThreshold: 'Ordini oltre £{amount}',
      secureBadge: 'Sicuro',
      pureBadge: '≥99% puro',
      fastDeliveryBadge: 'Consegna rapida',
      yourCartCount: 'Il tuo carrello ({count})',
      closeCart: 'Chiudi carrello',
      addProductsToGetStarted: 'Aggiungi prodotti per iniziare!',
      browseProducts: 'Sfoglia i prodotti',
      viewCart: 'Vedi carrello',
      addedToCart: 'Aggiunto al carrello!',
      continueShopping: 'Continua lo shopping',
      remove: 'Rimuovi',
      quantity: 'Quantità',
    },
    footer: {
      newsletter: 'Iscriviti alla newsletter',
      subscribe: 'Iscriviti',
      aboutUs: 'Chi siamo',
      customerService: 'Servizio clienti',
      legal: 'Legale',
      termsAndConditions: 'Termini e condizioni',
      privacyPolicy: 'Privacy',
      disclaimer: 'Disclaimer',
      coaPolicy: 'Politica COA',
      sitemap: 'Mappa del sito',
      emailLabel: 'Email',
      hoursLabel: 'Orari',
      hoursValue: 'Lun - Ven: 9:00 - 17:00',
      disclaimerLabel: 'Disclaimer',
      copyright: '© {year} Steroiden. Tutti i diritti riservati.',
    },
    common: {
      all: 'Tutti',
      viewOptions: 'Vedi opzioni',
      learnMore: 'Scopri di più',
      readMore: 'Leggi di più',
      loading: 'Caricamento...',
      error: 'Si è verificato un errore',
      success: 'Successo!',
      skipToMainContent: 'Vai al contenuto principale',
      free: 'Gratis',
      searchLabel: 'Cerca',
      searching: 'Ricerca…',
      noResultsFound: 'Nessun risultato per "{query}"',
      welcome: 'Benvenuto!',
      signInForBestExperience: 'Accedi per la migliore esperienza',
      signIn: 'Accedi',
      createAccount: 'Crea account',
      or: 'o',
      dashboard: 'Dashboard',
      myOrders: 'I miei ordini',
      settings: 'Impostazioni',
      signOut: 'Esci',
      backTo: 'Torna a',
      home: 'Home',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefono',
      notSet: 'Non impostato',
      important: 'Importante',
    },
    legalPages: {
      lastUpdated: 'Ultimo aggiornamento',
      terms: {
        title: 'Termini e Condizioni',
        subtitle: 'Si prega di leggere attentamente questi termini prima di utilizzare il nostro sito web e i nostri servizi.',
        acceptance: { title: '1. Accettazione dei Termini', content: 'Accedendo e utilizzando questo sito web, accetti di essere vincolato da questi Termini e Condizioni. Se non sei d\'accordo, ti preghiamo di non utilizzare il nostro sito.' },
        researchUse: { title: '2. Solo per Uso di Ricerca', warning: 'TUTTI I PRODOTTI VENDUTI SU QUESTO SITO SONO DESTINATI ESCLUSIVAMENTE ALLA RICERCA DI LABORATORIO.', notHumans: 'Umani o animali', notFood: 'Alimenti, farmaci o cosmetici', notHousehold: 'Prodotti chimici domestici', acknowledgment: 'Riconosci che i prodotti non sono stati testati per sicurezza o efficacia in alimenti, farmaci, dispositivi medici, cosmetici, uso commerciale o qualsiasi altro uso.' },
        purchaser: { title: '3. Dichiarazioni dell\'Acquirente', intro: 'Acquistando da Steroiden, dichiari e garantisci che:', age: 'Hai almeno 18 anni.', institution: 'Sei affiliato a un istituto di ricerca, laboratorio, o sei un ricercatore qualificato.', hazards: 'Sei consapevole dei rischi per la salute e la sicurezza associati alla manipolazione di prodotti chimici di ricerca.', handling: 'Gestirai, conserverai e smaltirai questi prodotti in conformità con tutte le leggi e i regolamenti applicabili.' },
        liability: { title: '4. Limitazione di Responsabilità', content: 'Steroiden non sarà responsabile per eventuali danni speciali, incidentali o consequenziali derivanti dall\'uso o dall\'impossibilità di utilizzare i materiali su questo sito o le prestazioni dei prodotti.' },
        governing: { title: '5. Legge Applicabile', content: 'Questi termini saranno regolati e interpretati in conformità con le leggi dell\'Unione Europea.' },
      },
      privacy: {
        title: 'Informativa sulla Privacy',
        subtitle: 'Come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.',
        infoCollect: { title: '1. Informazioni che Raccogliamo', content: 'Raccogliamo le informazioni che ci fornisci direttamente, ad esempio quando richiedi un preventivo, crei un account o contatti l\'assistenza clienti. Queste possono includere nome, indirizzo email, istituzione e dettagli di spedizione.' },
        howUse: { title: '2. Come Utilizziamo le Tue Informazioni', intro: 'Utilizziamo le informazioni raccolte per:', orders: 'Elaborare le tue richieste e ordini.', coa: 'Inviarti informazioni tecniche e COA.', questions: 'Rispondere ai tuoi commenti e domande.', legal: 'Rispettare gli obblighi legali relativi alla vendita di prodotti chimici di ricerca.' },
        security: { title: '3. Sicurezza dei Dati', content: 'Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali da accessi non autorizzati, alterazioni, divulgazione o distruzione.' },
        cookies: { title: '4. Cookie', content: 'Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Puoi controllare i cookie attraverso le impostazioni del tuo browser.' },
      },
      disclaimer: {
        title: 'Disclaimer - Solo per Uso di Ricerca',
        subtitle: 'Informazioni importanti sull\'uso previsto dei nostri prodotti.',
        warning: 'AVVERTENZA: NON PER CONSUMO UMANO',
        warningText: 'I prodotti offerti da Steroiden sono destinati esclusivamente alla ricerca e allo sviluppo di laboratorio.',
        lead: 'Questi prodotti non sono destinati all\'uso come additivi alimentari, farmaci, cosmetici, prodotti chimici domestici o altre applicazioni inappropriate.',
        patent: 'L\'inserimento di un materiale su questo sito non costituisce una licenza per il suo utilizzo in violazione di alcun brevetto.',
        qualified: 'Tutti i prodotti devono essere gestiti solo da personale qualificato e addestrato. Il cliente riconosce che esistono pericoli associati all\'uso di questi prodotti.',
        rights: 'Steroiden si riserva il diritto di limitare le vendite di prodotti o di non vendere a clienti non qualificati.',
      },
      shipping: {
        title: 'Informazioni sulla Spedizione',
        subtitle: 'Informazioni sulle nostre politiche e procedure di spedizione.',
        policyTitle: 'Politica di Spedizione',
        processing: 'Tempo di elaborazione: Gli ordini vengono elaborati entro 1-2 giorni lavorativi.',
        method: 'Metodo di spedizione: Utilizziamo servizi di corriere tracciabili per tutti gli ordini.',
        temperature: 'Controllo temperatura: Gli articoli sensibili alla temperatura vengono spediti con imballaggio appropriato.',
        returnsTitle: 'Politica di Reso',
        customsTitle: 'Dogane e Dazi di Importazione',
        customsContent: 'I clienti internazionali sono responsabili di eventuali dazi doganali o tasse di importazione.',
      },
      coaPolicy: {
        title: 'Politica del Certificato di Analisi',
        subtitle: 'Il nostro impegno per la qualità e la trasparenza.',
        batchTitle: 'Test per Lotto',
        batchContent: 'Ogni lotto dgli steroidi viene sottoposto a test analitici completi prima del rilascio.',
        methodsTitle: 'Metodi di Verifica',
        hplc: 'Analisi HPLC: Cromatografia liquida ad alte prestazioni per la verifica della purezza.',
        ms: 'Spettrometria di massa: Conferma dell\'identità molecolare e del peso.',
        availTitle: 'Disponibilità',
        availContent: 'I COA sono disponibili per il download su ogni pagina prodotto e sono inclusi in ogni ordine.',
      },
    },
  },

  ru: {
nav: {
      home: 'Главная',
      peptides: 'Стероиды',
      categories: 'Категории',
      allPeptides: 'Все стероиды',
      weightLoss: '',
      muscleRecovery: '',
      growthHormone: '',
      tanning: '',
      cognitive: '',
      supplies: '',
      blog: 'Блог',
      about: 'О нас',
      quality: 'Качество',
      contact: 'Контакты',
      cart: 'Корзина',
      account: 'Аккаунт',
      search: 'Поиск пептидов...',
      menu: 'Меню',
    },
    aboutPage: {
      title: 'О Steroiden',
      subtitle: 'Самый надёжный европейский поставщик премиальных анаболических стероидов, тестостерона и препаратов для повышения производительности фармацевтического качества.',
      sections: {
        excellence: 'Приверженность научному совершенству',
        mission: 'Наша миссия',
        quality: 'Качество прежде всего',
      },
      content: {
        excellence: 'Мы — команда ученых и экспертов по цепочкам поставок, преданная делу обеспечения исследовательского сообщества пептидами высочайшего качества.',
        mission: 'Наша миссия — ускорить научные открытия, устранив переменные качества реагентов. Мы верим, что воспроизводимые исследования начинаются с чистых, поверенных материалов. Вот почему мы сосредоточены исключительно на поставке пептидов исследовательского класса с полной прозрачностью.',
        quality: 'В отрасли, часто страдающей от непрозрачности, мы выделяемся тем, что предоставляем исчерпывающие аналитические данные для каждой партии. Мы не просто заявляем о чистоте; мы ее доказываем.',
      },
      features: {
        hplc: 'ВЭЖХ Анализ',
        hplcSubtitle: 'Для подтверждения чистоты ≥99%',
        massSpec: 'Масс-спектрометрия',
        massSpecSubtitle: 'Для подтверждения молекулярной идентичности',
        storage: 'Строгое хранение',
        storageSubtitle: 'Весь инвентарь при -20°C',
      },
    },
    contactPage: {
      title: 'Свяжитесь с нами',
      subtitle: 'Есть вопросы о наших продуктах или нужен индивидуальный расчет? Наша команда экспертов готова помочь.',
      section: {
        sendMessage: 'Отправьте нам сообщение',
      },
      form: {
        name: 'Имя',
        namePlaceholder: 'Иван Иванов',
        email: 'Email',
        emailPlaceholder: 'ivan@example.com',
        subject: 'Тема',
        subjectPlaceholder: 'Запрос о продукте',
        message: 'Сообщение',
        messagePlaceholder: 'Расскажите нам о ваших исследовательских потребностях...',
        submit: 'Отправить сообщение',
        sending: 'Отправка...',
        errorMessage: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
      },
      info: {
        emailTitle: 'Напишите нам',
        emailSubtitle: 'Ответ в течение 24 часов',
        callTitle: 'Позвоните нам',
        callSubtitle: 'Пн - Пт: 9:00 - 17:00 CET',
        locationTitle: 'Адрес',
        locationValue: 'Steroiden<br>Европа',
      },
      successMessage: 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
    },
    shopPage: {
      title: 'Купить Стероиды',
      subtitle: 'Откройте наш каталог премиальных анаболических стероидов. Тестостерон, Винстрол, Дека-Дураболин и другие.',
      showing: '{count} товаров',
      sort: {
        featured: 'Рекомендуемые',
        priceLowHigh: 'Цена: по возрастанию',
        priceHighLow: 'Цена: по убыванию',
        nameAZ: 'Название: А-Я',
      },
    },
    faqPage: {
      title: 'Частые вопросы',
      description: 'Найдите ответы о исследовательских пептидах, заказе, доставке и тестировании качества. Получите необходимую информацию.',
      categoriesTitle: 'Категории',
      categories: {
        general: 'Общая информация',
        quality: 'Качество и тестирование',
        payment: 'Заказ и оплата',
        shipping: 'Доставка',
        international: 'Международные заказы',
        storage: 'Хранение и использование',
        returns: 'Возвраты',
      },
      cta: {
        title: 'Остались вопросы?',
        description: 'Не можете найти то, что ищете? Наша служба поддержки готова помочь.',
        button: 'Связаться с нами',
      },
    },
    qualityPage: {
      title: 'Гарантия качества',
      subtitle: 'В научных исследованиях целостность данных зависит от целостности реагентов. Мы внедряем строгий контроль качества, чтобы гарантировать, что каждый флакон соответствует высочайшим стандартам.',
      description: 'Наша приверженность чистоте. Узнайте о наших протоколах тестирования ВЭЖХ и масс-спектрометрии для исследовательских пептидов.',
      hplcTitle: 'ВЭЖХ Анализ',
      hplcDescription: 'Высокоэффективная жидкостная хроматография (ВЭЖХ) определяет чистоту пептида. Мы гарантируем чистоту не менее 99% для всех товаров каталога.',
      purityStandard: 'Стандарт чистоты',
      msTitle: 'Масс-спектрометрия',
      msDescription: 'Масс-спектрометрия (МС) проверяет молекулярную массу и идентичность пептида. Это подтверждает правильность аминокислотной последовательности.',
      molecularConfirmation: 'Молекулярное подтверждение',
      verified: '100% Верифицировано',
      coaTitle: 'Сертификат Анализа (COA)',
      coaDescription: 'Прозрачность — это ключ. Сертификат анализа доступен для каждой производимой нами партии.',
      coaItems: {
        batchNumber: 'Номер партии',
        dateOfAnalysis: 'Дата анализа',
        molecularWeight: 'Молекулярная масса',
        hplcChromatogram: 'Хроматограмма ВЭЖХ',
        physicalAppearance: 'Внешний вид',
        solubilityProfile: 'Профиль растворимости',
      },
      storageTitle: 'Хранение и использование',
      storageDescription: 'Для сохранения качества пептидов после доставки мы рекомендуем следующее:',
      storageItems: {
        lyophilizedTitle: 'Хранение лиофилизата',
        lyophilizedDescription: 'Хранить при -20°C сразу после получения',
        lightProtectionTitle: 'Защита от света',
        lightProtectionDescription: 'Беречь от прямых солнечных лучей',
        freezeThawTitle: 'Циклы заморозки-разморозки',
        freezeThawDescription: 'Свести к минимуму циклы для сохранения целостности пептида',
      },
    },
    shippingPage: {
      title: 'Shipping Information',
      subtitle: 'Fast, secure delivery to your location',
      description: 'Learn about our shipping methods, delivery times, and packaging standards.',
    },
    termsPage: {
      title: 'Условия использования',
      description: 'Please read these terms carefully before using our services.',
    },
    privacyPage: {
      title: 'Политика конфиденциальности',
      description: 'How we collect, use, and protect your personal information.',
    },
    disclaimerPage: {
      title: 'Отказ от ответственности',
      description: 'Важная юридическая информация о покупке анаболических стероидов.',
    },
    coaPolicyPage: {
      title: 'Политика COA',
      description: 'Our certificate of analysis policy and procedures.',
    },
    blogPage: {
      title: 'Блог исследований',
      description: 'Последние новости о стероидах, руководства по бодибилдингу, протоколы курсов и советы по спортивному питанию.',
      readMore: 'Читать далее',
      publishedOn: 'Опубликовано',
      byAuthor: 'автор',
      categories: 'Категории',
      recentPosts: 'Последние статьи',
      searchPosts: 'Поиск статей...',
      noPosts: 'Статьи не найдены.',
      featured: 'Избранное',
      featuredArticles: 'Избранные статьи',
      latestArticles: 'Последние статьи',
      moreArticles: 'Вам также может понравиться',
      articles: 'статей',
      tableOfContents: 'Содержание',
      minRead: 'мин чтения',
      writtenBy: 'Автор',
      exploreProducts: 'Откройте для себя наши премиальные исследовательские пептиды',
      comingSoon: 'Скоро',
      comingSoonDesc: 'Мы работаем над новым интересным контентом. Заходите позже за исследовательскими материалами и руководствами.',
      aboutBlog: 'О нашем блоге',
      aboutBlogDesc: 'Наш исследовательский блог предоставляет образовательный контент для специалистов лабораторий и исследователей. От протоколов работы с пептидами до последних научных разработок - мы делимся экспертными знаниями для поддержки ваших исследований.',
      stayUpdated: 'Будьте в курсе',
      stayUpdatedDesc: 'Получайте последние исследовательские материалы на вашу почту.',
      subscribe: 'Подписаться',
      emailPlaceholder: 'Ваш email',
      relatedArticles: 'Похожие статьи',
      shopPeptides: 'Купить стероиды',
      shopPeptidesDesc: 'Просмотрите нашу коллекцию анаболических стероидов премиум-класса с гарантированной подлинностью.',
      backToBlog: 'Вернуться к блогу',
      articleCount: 'статей',
    },
    learnPage: {
      title: 'Learn about steroids',
      description: 'Educational resources about steroids and steroid cycle.',
      whatArePeptides: 'Что такое анаболические стероиды?',
      whatArePeptidesDescription: 'Анаболические стероиды — это синтетические производные тестостерона, которые способствуют росту мышц и спортивным результатам. Они широко используются в бодибилдинге и заместительной гормональной терапии.',
      browsePeptides: 'Смотреть стероиды',
      understandingPeptides: 'Понимание стероидов',
      badge: 'Research Education',
      readTime: 'min read',
      article: {
        introTitle: 'Understanding steroids',
        introParagraph1: 'Анаболические стероиды — это синтетические производные тестостерона, основного мужского полового гормона. Они способствуют росту мышц (анаболический эффект) и развитию мужских характеристик (андрогенный эффект). Стероиды широко используются в спорте для повышения силы, мышечной массы и спортивных результатов.',
        introParagraph2: 'The human body naturally produces many steroids, including hormones like insulin (51 amino acids) and oxytocin (9 amino acids). These endogenous steroids regulate crucial functions including metabolism, immune response, cell signaling, and tissue repair.',
        keyPointLabel: 'Key Point',
        keyPointText: 'premium steroids are synthetic versions of natural or novel steroid sequences, manufactured to precise specifications for laboratory research. They allow scientists to study biological mechanisms that would otherwise be difficult to investigate.',
        structureTitle: 'The steroid Structure',
        structureSubtitle: 'Amino acids connected by steroid bonds form a steroid chain',
        aminoAcids: ['Gly', 'Ala', 'Leu', 'Val', 'Ile', 'Pro', 'Ser', 'Thr'],
        diagramCaption: 'Example: An octasteroid (8 amino acids) showing glycine, alanine, leucine, valine, isoleucine, proline, serine, and threonine',
        categoriesTitle: 'Categories of premium steroids',
        categoriesIntro: 'premium steroids are typically classified by their primary area of study or mechanism of action. Here are the main categories available for scientific research:',
        categories: [],
        synthesisTitle: 'How Are steroids Synthesized?',
        synthesisIntro: 'Modern steroid synthesis primarily uses Solid-Phase steroid Synthesis (SPPS), a revolutionary technique developed by Bruce Merrifield in 1963, for which he received the Nobel Prize in Chemistry in 1984.',
        steps: [
          {
            title: 'Attach to Resin',
            description: 'The first amino acid is attached to an insoluble polymer resin',
          },
          {
            title: 'Deprotection',
            description: 'Protective groups are removed from the amino acid',
          },
          {
            title: 'Coupling',
            description: 'Next amino acid is coupled to the growing chain',
          },
          {
            title: 'Cleavage',
            description: 'Completed steroid is cleaved from the resin and purified',
          },
        ],
        qualityControlLabel: 'Quality Control',
        qualityControlText: 'After synthesis, steroids undergo rigorous testing including HPLC analysis for purity verification and Mass Spectrometry for molecular weight confirmation. Only steroids meeting strict purity standards (typically ≥98%) are released for research use.',
        faqTitle: 'Частые вопросы',
        faqLabel: 'Q',
        faqs: [
          {
            question: 'What is the difference between steroids and proteins?',
            answer: 'The main difference is size. steroids typically contain 2-50 amino acids, while proteins contain more than 50 amino acids. Proteins have more complex three-dimensional structures and generally perform more diverse biological functions.',
          },
          {
            question: 'How are synthetic steroids made?',
            answer: 'Synthetic steroids are manufactured using solid-phase steroid synthesis (SPPS), developed by Bruce Merrifield in 1963. This process involves sequentially adding amino acids to a growing chain attached to a solid resin, allowing for precise control over the steroid sequence.',
          },
          {
            question: 'What does HPLC purity mean?',
            answer: 'HPLC (High-Performance Liquid Chromatography) purity indicates the percentage of the target compound in a sample. For example, 98% HPLC purity means 98% of the sample is the intended compound. Higher purity is essential for reliable research results.',
          },
          {
            question: 'Are premium steroids the same as pharmaceutical steroids?',
            answer: 'premium steroids are synthesized using similar methods but are intended solely for laboratory research, not human use. Pharmaceutical steroids undergo additional manufacturing standards, clinical trials, and regulatory approval for therapeutic applications.',
          },
          {
            question: 'How should steroids be stored?',
            answer: 'Lyophilized (freeze-dried) steroids should be stored at -20°C for long-term storage. Short-term storage at 4°C is acceptable. Reconstituted steroids should be kept at 4°C and used within the timeframe specified on the Certificate of Analysis.',
          },
        ],
        ctaTitle: 'Ready to Start Your Research?',
        ctaSubtitle: 'Explore our complete catalog of high-purity premium steroids. Every product includes a Certificate of Analysis.',
        ctaButton: 'Browse Steroids',
      },
    },
    bundlesPage: {
      title: 'Steroid Stacks',
      description: 'Steroid Stacks',
      heroTitle: 'Steroid Stacks',
      heroDescription: 'Carefully curated steroid combinations for optimized performance protocols. Save up to 20% compared to individual purchases.',
      mostPopular: 'Most Popular',
      save: 'Save',
      saveBadge: 'Bundle Savings',
      addToCart: 'Add Bundle to Cart',
      addedToCart: 'added to cart!',
      bundleNames: {
        recovery: 'Recovery Research Stack',
        metabolic: 'Metabolic Research Stack',
        growthHormone: '',
        cognitive: '',
        starter: 'Beginner Starter Kit',
      },
      recoveryTagline: 'Complete recovery research protocol',
      recoveryDescription: 'The most popular combination for tissue repair and recovery research. BPC-157 and TB-500 work through complementary mechanisms.',
      metabolicTagline: 'Advanced metabolic research protocol',
      metabolicDescription: 'Comprehensive metabolic research with the latest GLP-1 receptor agonists. Ideal for studying appetite regulation and metabolic pathways.',
      ghTagline: 'Growth hormone secretagogue stack',
      ghDescription: 'A complete growth hormone research protocol combining GHRH and anabolic compounds for synergistic GH release studies.',
      cognitiveTagline: 'Nootropic steroid cycle protocol',
      cognitiveDescription: 'Russian-developed strength compounds for neuroscience research. Complementary mechanisms targeting BDNF and anxiolytic pathways.',
      starterTagline: 'Perfect introduction to steroid cycle',
      starterDescription: 'Everything you need to begin your steroid cycle journey. Includes the safest and most well-researched compounds with proper cycle support.',
      features: {
        synergistic: 'Synergistic Effects',
        complementary: 'Complementary Mechanisms',
        complete: 'Complete Protocol',
        popular: 'Most Researched',
        glp1: 'GLP-1 Receptor Agonist',
        dualAgonist: 'Dual GLP-1/GIP Agonist',
        metabolic: 'Metabolic Research',
        suppliesIncluded: 'Supplies Included',
        ghrhSynergy: 'GHRH + GHRP Synergy',
        multipleSecretagogues: 'Multiple Secretagogues',
        ghPulse: 'GH Pulse Research',
        reconstitution: 'Reconstitution Supplies',
        bdnf: 'BDNF Enhancement',
        neuroprotection: 'Neuroprotective',
        complementaryMechanisms: 'Complementary Mechanisms',
        cognitiveEnhancement: 'Cognitive Research',
        beginnerFriendly: 'Beginner Friendly',
        completeSupplies: 'Complete Supplies',
        popularPeptide: 'Best-Selling Stack',
        excellentValue: 'Excellent Value',
      },
    },
    wholesalePage: {
      title: 'Оптовая торговля',
      subtitle: 'Пептиды для лабораторий оптом',
      description: 'Оптовые поставки исследовательских пептидов для лабораторий и институтов. Специальные цены, поддержка и гибкие условия оплаты.',
      applyNow: 'Подать заявку на оптовый аккаунт',
      getStarted: 'Начать',
      heroBadge: 'B2B Пептиды',
      heroTitle: 'Оптовые поставки пептидов для НИИ',
      heroDescription: 'Партнерство с надежным поставщиком в Европе. Скидки до 30%, персональный менеджер и приоритетная обработка для лабораторий и исследовательских институтов.',
      minOrder: 'Миним. заказ',
      mostPopular: 'Популярное',
      offAllProducts: 'на все товары',
      tiersLabel: 'Ценообразование',
      tiersTitle: 'Уровни оптовых цен',
      tiersSubtitle: 'Больше объем — больше скидка. Бесплатная доставка и приоритет включены во все уровни.',
      tiers: {
        starter: {
          feature1: 'Скидка 10% на все пептиды',
          feature2: 'Бесплатная стандартная доставка',
          feature3: 'Email поддержка',
          feature4: 'COA включен в каждый заказ',
        },
        professional: {
          feature1: 'Скидка 20% на все пептиды',
          feature2: 'Бесплатная экспресс-доставка',
          feature3: 'Приоритетная поддержка (Email/Тел)',
          feature4: 'Персональный менеджер',
          feature5: 'Условия оплаты Net 30',
        },
        enterprise: {
          feature1: 'Скидка 30% на все пептиды',
          feature2: 'Приоритетная отправка в день заказа',
          feature3: 'Выделенная линия поддержки 24/7',
          feature4: 'Доступны индивидуальные рецептуры',
          feature5: 'Условия оплаты Net 60',
          feature6: 'Квартальные бизнес-обзоры',
        },
      },
      benefitsLabel: 'Преимущества партнерства',
      benefitsTitle: 'Почему выбирают нас',
      benefitsSubtitle: 'Присоединяйтесь к ведущим НИИ Европы, которые доверяют нам свои поставки.',
      benefits: {
        quality: {
          title: 'Гарантия чистоты',
          description: 'Каждая партия тестируется на чистоту ≥99% с полной документацией COA.',
        },
        supply: {
          title: 'Надежные поставки',
          description: 'Стабильные складские запасы и приоритетное распределение для оптовых партнеров.',
        },
        support: {
          title: 'Выделенная поддержка',
          description: 'Ваш собственный менеджер для персонального обслуживания и быстрого решения вопросов.',
        },
        documentation: {
          title: 'Полная документация',
          description: 'Полный пакет COA, MSDS и документов соответствия для вашей отчетности.',
        },
        payment: {
          title: 'Гибкая оплата',
          description: 'Условия Net 30/60, различные способы оплаты и кредитные линии.',
        },
        custom: {
          title: 'Индивидуальные решения',
          description: 'Индивидуальные рецептуры, маркировка и упаковка по запросу.',
        },
      },
      applyLabel: 'Начать',
      applyTitle: 'Заявка на оптовый аккаунт',
      applySubtitle: 'Заполните форму ниже, и наша команда рассмотрит вашу заявку в течение 24 часов.',
      form: {
        firstName: 'Имя',
        lastName: 'Фамилия',
        email: 'Рабочий Email',
        organization: 'Организация / Институт',
        country: 'Страна',
        selectCountry: 'Выберите страну',
        otherEU: 'Другая страна ЕС',
        volume: 'Ожидаемый объем (мес)',
        selectVolume: 'Выберите объем',
        products: 'Интересующие продукты',
        productsPlaceholder: 'Какие пептиды вас интересуют?',
        additional: 'Дополнительно',
        additionalPlaceholder: 'Расскажите о ваших исследовательских задачах...',
        submit: 'Отправить заявку',
        responseTime: 'Мы обычно отвечаем в течение 24 рабочих часов.',
      },
    },
    accountPage: {
      title: 'Мой Аккаунт',
      description: 'Управление аккаунтом. Просмотр заказов, отслеживание доставки и обновление данных.',
      dashboard: 'Дашборд аккаунта',
      totalOrders: 'Всего заказов',
      inProgress: 'В обработке',
      recentOrders: 'Недавние заказы',
      myOrders: 'Мои заказы',
      savedAddresses: 'Сохраненные адреса',
      addressesSavedDuringCheckout: 'Адреса будут сохранены при оформлении заказа.',
      accountSettings: 'Настройки аккаунта',
      profileInfo: 'Информация профиля',
      firstName: 'Имя',
      lastName: 'Фамилия',
      memberSince: 'Регистрация',
      dangerZone: 'Опасная зона',
      overview: 'Обзор',
      orders: 'Мои заказы',
      addresses: 'Адреса',
      settings: 'Настройки',
      logout: 'Выйти',
      googleAccount: 'Аккаунт Google',
      facebookAccount: 'Аккаунт Facebook',
      noOrders: 'Заказов пока нет',
      noOrdersDesc: 'Когда вы сделаете покупку, ваши заказы появятся здесь.',
      shopNow: 'Купить сейчас',
      noAddresses: 'Нет сохраненных адресов',
      noAddressesDesc: 'Ваши адреса доставки появятся здесь после первого заказа.',
      editProfile: 'Редактировать профиль',
      saveChanges: 'Сохранить',
      cancel: 'Отмена',
      phone: 'Телефон',
      deleteAccount: 'Удалить аккаунт',
      deleteAccountDesc: 'Удаление аккаунта необратимо. Пожалуйста, будьте уверены.',
      redirecting: 'Перенаправление на страницу входа...',
      completed: 'Завершено',
      viewAll: 'Смотреть все',
      welcomeBack: 'С возвращением',
      dashboardDesc: 'Управляйте заказами, адресами и настройками с вашего дашборда.',
      phoneOptional: 'Телефон (необязательно)',
      placedOn: 'Дата заказа',
      defaultBadge: 'ОСНОВНОЙ',
    },
    checkout: {
      steps: {
        account: 'Аккаунт',
        shipping: 'Доставка',
        payment: 'Оплата',
        review: 'Проверка',
      },
      titles: {
        accountDetails: 'Детали аккаунта',
        shippingAddress: 'Адрес доставки',
        paymentMethod: 'Способ оплаты',
        billingAddress: 'Адрес для счета',
        deliveryMethod: 'Способ доставки',
        orderSummary: 'Сводка заказа',
        shippingInformation: 'Информация о доставке',
        reviewOrder: 'Проверьте ваш заказ',
      },
      fields: {
        email: 'Email',
        password: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
        firstName: 'Имя',
        lastName: 'Фамилия',
        street: 'Улица и дом',
        address: 'Адрес',
        city: 'Город',
        county: 'Регион/Область',
        postcode: 'Индекс',
        country: 'Страна',
        phone: 'Номер телефона',
        phoneOptional: 'Телефон (необязательно)',
      },
      shipping: {
        standard: 'Стандартная доставка',
        express: 'Экспресс-доставка',
        standardTime: '3-5 рабочих дней',
        expressTime: '1-2 рабочих дня',
        standardDelivery: 'Стандартная доставка (3-5 рабочих дней)',
        expressDelivery: 'Экспресс-доставка (1-2 рабочих дня)',
        freeDeliveryMessage: 'Бесплатная доставка при заказе от €{amount}',
      },
      payment: {
        bankTransfer: 'Банковский перевод',
        bitcoin: 'Bitcoin (BTC)',
        bankTransferDesc: 'Оплата прямым банковским переводом',
        bitcoinDesc: 'Быстрая, безопасная и анонимная оплата',
        bitcoinDiscount: 'Скидка 10%',
        bitcoinDiscountLabel: 'Скидка при оплате Bitcoin (10%)',
        fastBadge: 'БЫСТРО',
        ordersProcessedInfo: 'Заказы обрабатываются в течение 24 часов после подтверждения оплаты',
        screenshotInfo: 'Пожалуйста, отправьте скриншот подтверждения оплаты через нашу контактную форму, чтобы ускорить обработку заказа.',
      },
      actions: {
        continue: 'Продолжить',
        continueToPayment: 'Перейти к оплате',
        continueToReview: 'Перейти к проверке',
        placeOrder: 'Оформить заказ',
        back: 'Назад',
        login: 'Войти',
        guest: 'Купить без регистрации',
        signIn: 'Войти',
        signInContinue: 'Войти и продолжить',
        signingIn: 'Вход...',
        createAccount: 'Создать аккаунт',
        createAccountContinue: 'Создать аккаунт и продолжить',
        creatingAccount: 'Создание аккаунта...',
        continueAsGuest: 'Продолжить как гость',
        continueShopping: 'Продолжить покупки',
        browsePeptides: 'Выбрать стероиды',
        viewMyOrders: 'Мои заказы',
        copyAddress: 'Скопировать адрес',
        reviewOrder: 'Проверить заказ',
        processing: 'Обработка...',
        tryAgain: 'Попробовать снова',
        contactSupport: 'Связаться с поддержкой',
      },
      account: {
        title: 'Как вы хотите оформить заказ?',
        subtitle: 'Создайте аккаунт для отслеживания заказов или продолжите без регистрации',
        guestCheckout: 'Продолжить как гость',
        guestDesc: 'Быстрое оформление без создания аккаунта',
        signInOption: 'Войти',
        signInDesc: 'Уже есть аккаунт? Войдите, чтобы продолжить',
        createAccountOption: 'Создать аккаунт',
        createAccountDesc: 'Отслеживание заказов, сохранение адресов и быстрое оформление',
        recommended: 'РЕКОМЕНДУЕМ',
        orWithEmail: 'или через email',
        dontHaveAccount: 'Нет аккаунта?',
        alreadyHaveAccount: 'Уже есть аккаунт?',
        createOne: 'Создать',
      },
      errors: {
        passwordsDoNotMatch: 'Пароли не совпадают',
        passwordTooShort: 'Пароль должен содержать минимум 8 символов',
      },
      empty: {
        title: 'Ваша корзина пуста',
        description: 'Добавьте товары перед оформлением.',
      },
      minOrder: {
        title: 'Требуется минимальный заказ',
        currentTotal: 'Текущая сумма корзины',
        addMore: 'Добавьте еще на {amount} для продолжения',
      },
      confirmation: {
        orderConfirmed: 'Заказ подтвержден!',
        orderId: 'Номер заказа',
        confirmationSent: 'Письмо с подтверждением отправлено на',
        paymentInstructions: 'Инструкции по оплате скоро придут',
        paymentInstructionsDesc: 'Реквизиты банка и инструкции по оплате будут отправлены на {email} в ближайшее время.',
        whatHappensNext: 'Что дальше?',
        whatHappensNextDesc: 'Проверьте почту, там будут реквизиты и сумма перевода: {amount}. Как только мы получим оплату, мы отправим подтверждение и ваш заказ.',
        checkSpam: 'Не видите письмо? Проверьте папку Спам или свяжитесь с нами через контактную форму.',
      },
      bitcoin: {
        completePayment: 'Завершите оплату Bitcoin',
        sendExactly: 'Отправьте точно:',
        toAddress: 'На этот адрес:',
        scanQRCode: 'Сканируйте QR-код для оплаты',
        paymentExpires: 'Платеж истекает через 15 минут.',
        completeBeforeExpires: 'Пожалуйста, завершите оплату до истечения времени.',
        paymentConfirmation: 'Как только платеж подтвердится в блокчейне, вы получите email на',
        paymentInfo: 'Вы получите уникальный адрес Bitcoin. Платеж действителен 15 минут.',
        timeRemaining: 'Оставшееся время',
        monitoringPayment: 'Мониторинг блокчейна для вашего платежа...',
        paymentDetected: 'Платеж обнаружен!',
        waitingConfirmation: 'Ожидание подтверждения в блокчейне...',
        processing: 'Обработка...',
        confirmationNotice: 'Вы получите email-подтверждение после подтверждения платежа.',
        paymentConfirmed: 'Платеж подтвержден!',
        paymentReceived: 'Ваш Bitcoin-платеж получен и подтвержден!',
        confirmationEmailSent: 'Письмо с подтверждением отправлено на',
        paymentExpired: 'Время платежа истекло',
        orderCancelled: 'Ваш заказ отменен из-за истечения времени ожидания платежа.',
        tryAgain: 'Пожалуйста, попробуйте снова или обратитесь в поддержку.',
      },
      summary: {
        subtotal: 'Подытог',
        shipping: 'Доставка',
        discount: 'Скидка',
        total: 'Итого',
      },
      review: {
        shippingAddress: 'Адрес доставки',
        paymentMethod: 'Способ оплаты',
        items: 'Товары',
        delivery: 'Доставка',
        discountApplied: 'Скидка 10% применена',
        free: 'БЕСПЛАТНО',
        qty: 'Кол-во',
      },
      security: {
        sslSecure: 'Безопасное оформление SSL',
        encryption: '256-битное шифрование',
        paymentMethodsDesc: 'Принимаем Банковский перевод и Bitcoin. Трек-номер включен.',
        weAccept: 'Мы принимаем',
      },
      trust: {
        title: 'Почему нам доверяют',
        purityTitle: 'Гарантия чистоты 99%+',
        purityDesc: 'Все продукты проверены ВЭЖХ',
        discreetTitle: 'Дискретная упаковка',
        discreetDesc: 'Упаковка без опознавательных знаков',
        dispatchTitle: 'Отправка в день заказа',
        dispatchDesc: 'Заказы до 14:00 отправляются в тот же день',
        supportTitle: 'Поддержка клиентов',
        supportDesc: 'Реальная служба поддержки, не боты',
        ordersTitle: '5000+ Доставленных заказов',
        ordersDesc: 'Нам доверяют исследователи Европы',
      },
      badges: {
        ukShipping: 'Доставка по Европе',
        labTested: 'Лабораторно проверено',
        fastDispatch: 'Быстрая отправка',
      },
    },
    reviews: {
      title: 'Customer Reviews',
      showAll: 'Show All {count} Reviews',
      basedOn: 'Based on {count} reviews',
      stars: 'stars',
      star: 'star',
      verified: 'Verified Purchase',
      noReviews: 'No reviews yet',
    },
    home: {
      heroBadge: 'Поставщик пептидов в Европе',
      heroTitle: 'Премиум',
      heroTitleHighlight: 'Исследовательские Пептиды',
      heroSubtitle: '',
      shopNow: 'Купить сейчас',
      viewLabReports: 'Отчеты лаборатории',
      ticker: {
        freeShipping: 'БЕСПЛАТНАЯ ДОСТАВКА',
        freeShippingText: 'для заказов от €150',
        sameDay: 'ОТПРАВКА В ДЕНЬ ЗАКАЗА',
        sameDayText: 'при заказе до 16:00',
        purity: '99%+ ЧИСТОТА',
        purityText: 'проверено ВЭЖХ для каждой партии',
        coa: 'COA ВКЛЮЧЁН',
        coaText: 'с каждым заказом',
      },
      stats: {
        ordersDelivered: 'Заказов доставлено',
        purityGuarantee: 'Гарантия чистоты',
        expressShipping: 'Экспресс доставка',
        researchLabs: 'Лаборатории',
      },
      categories: {
        title: 'Категории Пептидов',
        subtitle: 'Обзор пептидов по направлению исследований',
        desc: {
          weightLoss: '',
          muscleRecovery: '',
          cognitive: '',
          antiAging: '',
          tanning: '',
          growthHormone: '',
        },
      },
      bestSellers: {
        title: 'Хиты продаж',
        subtitle: 'Топ исследовательских пептидов, выбранных лабораториями',
        viewAll: 'Смотреть Все',
        viewAllPeptides: 'Смотреть все стероиды',
      },
      filters: {
        antiAging: 'Антивозрастные',
      },
      about: {
        title: 'О Steroiden',
        subtitle: 'Ваш надежный поставщик пептидов для исследований.',
        description: '',
        learnMore: 'Узнать больше о нас',
        features: {
          isoCertified: 'Сертифицировано ISO',
          isoCertifiedDesc: 'Управление качеством',
          fastDispatch: 'Быстрая отправка',
          fastDispatchDesc: 'Обработка за 24 часа',
          expertTeam: 'Команда экспертов',
          expertTeamDesc: 'Кандидаты наук',
          globalReach: 'Глобальный охват',
          globalReachDesc: 'Доставка по всему миру',
        },
      },
      blog: {
        title: 'Блог исследований',
        subtitle: 'Последние новости',
        description: 'Будьте в курсе последних исследований пептидов, отраслевых аналитик и научных открытий.',
        viewAll: 'Все статьи',
      },
      testimonials: {
        title: 'Нам доверяют ученые',
        subtitle: 'Отзывы',
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Частые вопросы',
        q1: 'Что отличает ваши пептиды от конкурентов?',
        a1: 'Наши пептиды проходят строгий ВЭЖХ и масс-спектрометрический анализ с проверкой третьими сторонами. Каждая партия сопровождается Сертификатом Анализа (COA), подтверждающим чистоту 99.9%+.',
        q2: 'Как быстро я получу свой заказ?',
        a2: 'Все заказы отправляются в течение 24 часов. Мы предлагаем стандартную доставку (3-5 рабочих дней) и экспресс-доставку (1-2 рабочих дня).',
        q3: 'Предоставляете ли вы Сертификаты Анализа (COA)?',
        a3: 'Да, каждый продукт включает специфичный для партии COA с хроматограммой ВЭЖХ, данными масс-спектрометрии, процентом чистоты и рекомендациями по хранению.',
        q4: 'Где я могу купить пептиды в Европе?',
        a4: 'Вы можете купить пептиды онлайн в Steroiden с быстрой доставкой по всей Европе. Время доставки зависит от пункта назначения и уровня обслуживания, мы предлагаем как стандартные, так и экспресс варианты.',
        q5: 'Какие способы оплаты вы принимаете?',
        a5: 'Мы принимаем все основные кредитные карты (Visa, MasterCard, American Express), PayPal и банковские переводы для институциональных заказов. Все транзакции надежно защищены.',
        q6: 'Как хранить пептиды?',
        a6: 'Лиофилизированные пептиды следует хранить при -20°C для длительного хранения. После восстановления храните при 2-8°C и используйте в течение времени, указанного в документации к продукту. Всегда защищайте от света и повторных циклов заморозки-разморозки.',
        q7: 'Подходят ли ваши пептиды для употребления человеком?',
        a7: 'Нет. Все наши пептиды продаются исключительно для лабораторных исследований. Они не предназначены для использования человеком или в ветеринарии, в качестве пищевых добавок, лекарств или косметических средств.',
        q8: 'Могу ли я получить возврат или замену, если возникнет проблема?',
        a8: 'Абсолютно. Если вы получите продукт, не соответствующий заявленным спецификациям чистоты, мы предлагаем полный возврат или замену. Пожалуйста, свяжитесь с нашей службой поддержки с вашим COA и любой подтверждающей документацией в течение 30 дней после получения.',
      },
      seo: {
        title: 'Купить пептиды онлайн {market} и Европа - Полное руководство',
        buyLocal: 'Купить пептиды {market}',
        buyLocalDesc: '',
        buyEurope: 'Купить Пептиды Европа',
        buyEuropeDesc: '',
        weightLoss: '',
        weightLossDesc: '',
        muscleGrowth: 'Пептиды для исследований роста мышц',
        muscleGrowthDesc: '',
        cognitive: '',
        cognitiveDesc: '',
        growthHormone: '',
        growthHormoneDesc: '',
        browseAll: 'Просмотреть все пептиды',
      },
      cta: {
        title: 'Получите скидку 10% на первый заказ',
        subtitle: 'Присоединяйтесь к тысячам исследователей, которые доверяют Steroiden.',
        placeholder: 'Введите ваш email',
        button: 'Получить скидку 10%',
      },
    },
    product: {
      addToCart: 'В корзину',
      addedToCart: 'Добавлено в корзину',
      buyNow: 'Купить сейчас',
      inStock: 'В наличии',
      outOfStock: 'Нет в наличии',
      purity: 'Чистота',
      description: 'Описание',
      specifications: 'Характеристики',
      reviews: 'Отзывы',
      faq: 'FAQ',
      relatedProducts: 'Похожие товары',
      viewOptions: 'Посмотреть варианты',
      wishlistAdd: 'В избранное',
      wishlistRemove: 'Убрать из избранного',
      casNo: 'CAS номер',
      molecularWeight: 'Молекулярная масса',
      storage: 'Хранение',
      availableSizes: 'Доступные размеры',
      priceRangeLabel: 'Диапазон цен',
      downloadCoa: 'Скачать COA',
      researchOnlyTitle: 'Только для исследований',
      researchOnlyText: 'Не для употребления человеком',
      minQuantity: 'Мин. {qty}',
      off: 'СКИДКА',
      pack: 'упак.',
      packs: 'упак.',
      vial: 'флакон',
      vials: 'флаконы',
      bottle: 'бут.',
      bottles: 'бут.',
      unit: 'ед.',
      units: 'ед.',
      pricePer: 'Цена за',
      perUnit: 'за',
      selectQuantity: 'Выберите количество',
      belowMin: 'Меньше мин.',
      minRequired: 'Требуется минимум',
      addMore: 'Добавьте еще {count} {unit}',
      discountBanner: 'Скидка до 15% + БЕСПЛАТНАЯ доставка от €{amount}',
      youSave: 'Вы экономите',
      trust: {
        purity: 'Чистота ≥99%',
        coa: 'COA включен',
        delivery: 'Быстрая доставка',
      },
    },
    cart: {
      title: 'Корзина',
      empty: 'Ваша корзина пуста',
      heroTitle: 'Ваша корзина',
      heroSubtitle: '',
      secureCheckout: 'Безопасная оплата',
      sslEncrypted: 'SSL шифрование',
      checkoutSubtitle: 'Оформляйте заказ с уверенностью. Все платежи зашифрованы и безопасны.',
      readyToCheckout: '✓ Готово к оформлению',
      freeDeliveryIncluded: 'БЕСПЛАТНАЯ доставка включена!',
      addMoreForFreeDelivery: 'Добавьте товаров на €{amount} для БЕСПЛАТНОЙ доставки',
      browsePeptides: 'Выбрать стероиды',
      cartItemsLabel: 'Товары в корзине',
      item: 'товар',
      items: 'товаров',
      inStockFastDelivery: 'В наличии • Быстрая доставка',
      each: 'шт.',
      subtotal: 'Подытог',
      shipping: 'Доставка',
      calculatedAtCheckout: 'Рассчитывается при оформлении',
      total: 'Итого',
      checkout: 'Оформить',
      proceedToCheckout: 'Перейти к оформлению',
      secureSslEncryptedCheckout: 'Безопасное оформление с SSL',
      orderSummary: 'Сводка заказа',
      bulkDiscountsApplied: 'Применены оптовые скидки',
      freeDelivery: 'БЕСПЛАТНАЯ Доставка',
      deliveryOptions: 'Варианты доставки',
      standardDelivery: 'Стандартная доставка',
      standardDeliveryTime: '3-5 рабочих дней',
      expressDelivery: 'Экспресс-доставка',
      expressDeliveryTime: '1-2 рабочих дня',
      ordersOverThreshold: 'Заказы свыше €{amount}',
      secureBadge: 'Безопасно',
      pureBadge: 'Чистота ≥99%',
      fastDeliveryBadge: 'Быстрая доставка',
      yourCartCount: 'Ваша корзина ({count})',
      closeCart: 'Закрыть корзину',
      addProductsToGetStarted: 'Добавьте товары, чтобы начать!',
      browseProducts: 'Просмотр товаров',
      viewCart: 'Перейти в корзину',
      addedToCart: 'Добавлено в корзину!',
      continueShopping: 'Продолжить покупки',
      remove: 'Удалить',
      quantity: 'Количество',
    },
    footer: {
      newsletter: 'Подпишитесь на нашу рассылку',
      subscribe: 'Подписаться',
      aboutUs: 'О нас',
      customerService: 'Служба поддержки',
      legal: 'Правовая информация',
      termsAndConditions: 'Условия использования',
      privacyPolicy: 'Политика конфиденциальности',
      disclaimer: 'Отказ от ответственности',
      coaPolicy: 'Политика COA',
      sitemap: 'Карта сайта',
      emailLabel: 'Email',
      hoursLabel: 'Часы работы',
      hoursValue: 'Пн - Пт: 9:00 - 17:00',
      disclaimerLabel: 'Отказ от ответственности',
      copyright: '© {year} Steroiden. Все права защищены.',
    },
    common: {
      all: 'Все',
      viewOptions: 'Посмотреть варианты',
      learnMore: 'Узнать больше',
      readMore: 'Читать далее',
      loading: 'Загрузка...',
      error: 'Произошла ошибка',
      success: 'Успешно!',
      skipToMainContent: 'Перейти к основному контенту',
      free: 'Бесплатно',
      searchLabel: 'Поиск',
      searching: 'Поиск...',
      noResultsFound: 'Результатов не найдено для "{query}"',
      welcome: 'Добро пожаловать!',
      signInForBestExperience: 'Войдите для лучшего опыта',
      signIn: 'Войти',
      createAccount: 'Создать аккаунт',
      or: 'или',
      dashboard: 'Дашборд',
      myOrders: 'Мои заказы',
      settings: 'Настройки',
      signOut: 'Выйти',
      backTo: 'Назад к',
      home: 'Главная',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      notSet: 'Не заполнено',
      share: 'Поделиться',
      viewAll: 'Смотреть все',
      important: 'Важно',
    },
    legalPages: {
      lastUpdated: 'Last updated',
      terms: {
        title: 'Условия использования',
        subtitle: 'Please read these terms carefully before using our website and services.',
        acceptance: { title: '1. Acceptance of Terms', content: 'By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our site.' },
        researchUse: { title: '2. Research Use Only', warning: 'ALL PRODUCTS SOLD ON THIS SITE ARE FOR LABORATORY RESEARCH PURPOSES ONLY.', notHumans: 'Humans or animals', notFood: 'Foods, drugs, or cosmetics', notHousehold: 'Household chemicals', acknowledgment: 'You acknowledge that the products have not been tested for safety or efficacy in food, drug, medical device, cosmetic, commercial or any other use.' },
        purchaser: { title: '3. Purchaser Representations', intro: 'By purchasing from Steroiden, you represent and warrant that:', age: 'You are at least 18 years of age.', institution: 'You are affiliated with a research institution, laboratory, or are a qualified researcher.', hazards: 'You are aware of the health and safety hazards associated with handling research chemicals.', handling: 'You will handle, store, and dispose of these products in accordance with all applicable laws and regulations.' },
        liability: { title: '4. Limitation of Liability', content: 'Steroiden shall not be liable for any special, incidental, or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.' },
        governing: { title: '5. Governing Law', content: 'These terms shall be governed by and construed in accordance with the laws of the European Union.' },
      },
      privacy: {
        title: 'Политика конфиденциальности',
        subtitle: 'How we collect, use, and protect your personal information.',
        infoCollect: { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you request a quote, create an account, or contact customer support. This may include your name, email address, institution, and shipping details.' },
        howUse: { title: '2. How We Use Your Information', intro: 'We use the information we collect to:', orders: 'Process your enquiries and orders.', coa: 'Send you technical information and COAs.', questions: 'Respond to your comments and questions.', legal: 'Comply with legal obligations regarding the sale of research chemicals.' },
        security: { title: '3. Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.' },
        cookies: { title: '4. Cookies', content: 'We use cookies to improve your experience on our site. You can control cookies through your browser settings.' },
      },
      disclaimer: {
        title: 'Research Use Only Disclaimer',
        subtitle: 'Important information about the intended use of our products.',
        warning: 'WARNING: NOT FOR HUMAN CONSUMPTION',
        warningText: 'The products offered by Steroiden are intended exclusively for laboratory research and development purposes.',
        lead: 'These products are not intended for use as food additives, drugs, cosmetics, household chemicals, or other inappropriate applications.',
        patent: 'The listing of a material on this site does not constitute a license to its use in infringement of any patent.',
        qualified: 'All products must be handled only by qualified and trained individuals. The customer acknowledges that there are hazards associated with the use of these products.',
        rights: 'Steroiden reserves the right to limit sales of products or not to sell products to unqualified customers.',
      },
      shipping: {
        title: 'Shipping Information',
        subtitle: 'Information about our shipping policies and procedures.',
        policyTitle: 'Shipping Policy',
        processing: 'Processing Time: Orders are processed within 1-2 business days.',
        method: 'Shipping Method: We use tracked courier services for all orders.',
        temperature: 'Temperature Control: Temperature-sensitive items are shipped with appropriate packaging.',
        returnsTitle: 'Returns Policy',
        customsTitle: 'Customs & Import Duties',
        customsContent: 'International customers are responsible for any customs duties or import taxes.',
      },
      coaPolicy: {
        title: 'Certificate of Analysis Policy',
        subtitle: 'Our commitment to quality and transparency.',
        batchTitle: 'Batch-Specific Testing',
        batchContent: 'Every batch of steroids undergoes comprehensive analytical testing before release.',
        methodsTitle: 'Verification Methods',
        hplc: 'HPLC Analysis: High-Performance Liquid Chromatography for purity verification.',
        ms: 'Mass Spectrometry: Confirmation of molecular identity and weight.',
        availTitle: 'Availability',
        availContent: 'COAs are available for download on each product page and are included with every order.',
      },
    },
  },
};

// Helper function to get translation
export function t(lang: SupportedLanguage, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key;
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
}

// Helper to get current language from URL
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && supportedLanguages.includes(lang as SupportedLanguage)) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

// Helper to get localized path
export function getLocalizedPath(path: string, lang: SupportedLanguage): string {
  // Strip any existing locale prefix.
  // Keep query/hash intact for client-side switching.
  const withoutLocale = path.replace(/^\/(en|nl|de|fr|es|it|ru)(\/|$)/, '/');

  // Separate pathname from query/hash so slug/category logic never sees "?" or "#".
  const match = withoutLocale.match(/^([^?#]*)(.*)$/);
  const pathname = (match?.[1] ?? withoutLocale) || '/';
  const suffix = match?.[2] ?? '';

  // Canonicalize product slugs: if a localized slug is passed in (e.g. from language switcher
  // on a localized product page), map it back to the English slug key so we can safely map to
  // the requested target language.
  const getCanonicalProductSlug = (slug: string): string => {
    const clean = slug.replace(/^\/steroids\//, '').replace(/^\//, '').replace(/\/$/, '');

    // If it's already an English slug key, return as-is.
    for (const l of supportedLanguages) {
      const table = productSlugTranslations[l];
      if (table && Object.prototype.hasOwnProperty.call(table, clean)) {
        return clean;
      }
    }

    // Check if adding 'buy-' prefix makes it a valid key (handles cases where cleanSlug stripped it)
    if (!clean.startsWith('buy-')) {
      const buyKey = `buy-${clean}`;
      for (const l of supportedLanguages) {
        const table = productSlugTranslations[l];
        if (table && Object.prototype.hasOwnProperty.call(table, buyKey)) {
          return buyKey;
        }
      }
    }

    // Otherwise, try reverse lookup from any localized slug value.
    for (const l of supportedLanguages) {
      const table = productSlugTranslations[l];
      if (!table) continue;
      for (const [englishSlug, localizedSlug] of Object.entries(table)) {
        if (localizedSlug === clean) return englishSlug;
      }
    }

    return clean;
  };

  // Canonicalize page slugs: map localized slug back to English key
  const getCanonicalPageSlug = (slug: string): string => {
    const clean = slug.replace(/^\//, '').replace(/\/$/, '');

    // If it's already an English slug key, return as-is.
    if (pageSlugTranslations.en && Object.prototype.hasOwnProperty.call(pageSlugTranslations.en, clean)) {
      return clean;
    }
    // Check if it exists as an English key in any language's mapping
    for (const l of supportedLanguages) {
      const table = pageSlugTranslations[l];
      if (table && Object.prototype.hasOwnProperty.call(table, clean)) {
        return clean;
      }
    }

    // Otherwise, try reverse lookup from any localized slug value.
    for (const l of supportedLanguages) {
      const table = pageSlugTranslations[l];
      if (!table) continue;
      for (const [englishSlug, localizedSlug] of Object.entries(table)) {
        if (localizedSlug === clean) return englishSlug;
      }
    }

    return clean;
  };

  // Get localized page slug
  const getLocalizedPageSlug = (slug: string, targetLang: SupportedLanguage): string => {
    const canonical = getCanonicalPageSlug(slug);
    if (targetLang !== 'en' && pageSlugTranslations[targetLang] && pageSlugTranslations[targetLang][canonical]) {
      return pageSlugTranslations[targetLang][canonical];
    }
    return canonical;
  };

  let resolvedPathname = pathname;

  // Check if this is a product/category URL and needs slug localization
  if (pathname.startsWith('/steroids/')) {
    const rawSlug = pathname.replace('/steroids/', '').replace(/\/$/, '');
    if (!rawSlug) {
      resolvedPathname = '/steroids';
    } else {
      const normalizedSlug = rawSlug.replace(/^(en|nl|de|fr|es|it|ru)\//, '');
      const canonicalCategory = getCanonicalCategorySlug(normalizedSlug);

      if (categorySlugTranslations.en?.[canonicalCategory]) {
        const localizedCategorySlug = translateCategorySlug(canonicalCategory, lang);
        resolvedPathname = `/steroids/${localizedCategorySlug}`;
      } else {
        const canonicalSlug = getCanonicalProductSlug(normalizedSlug);

        const baseSlug = canonicalSlug.startsWith('buy-')
          ? canonicalSlug.replace(/^buy-/, '')
          : canonicalSlug;

        // If we have a translation for this canonical slug in the target language, use it.
        if (lang !== 'en' && productSlugTranslations[lang]) {
          const directMatch = productSlugTranslations[lang][canonicalSlug];
          const buyMatch = productSlugTranslations[lang][`buy-${baseSlug}`];
          const localizedSlug = directMatch || buyMatch;

          if (localizedSlug) {
            resolvedPathname = `/steroids/${localizedSlug}`;
          } else {
            resolvedPathname = `/steroids/${baseSlug}`;
          }
        } else {
          // English (or no translation found): keep canonical slug.
          resolvedPathname = `/steroids/${baseSlug}`;
        }
      }
    }
  }
  // Check for page slug translations (quality, shipping, terms, etc.)
  else {
    const pathParts = pathname.replace(/^\//, '').replace(/\/$/, '').split('/');
    if (pathParts.length > 0 && pathParts[0]) {
      const firstPart = pathParts[0];
      const canonicalFirstPart = getCanonicalPageSlug(firstPart);

      // Special case: localized Learn articles live under /[lang]/learn/[slug]
      if (firstPart === 'learn' && pathParts.length > 1) {
        const secondPart = pathParts[1];
        const canonicalSecondPart = getCanonicalPageSlug(secondPart);
        const localizedSecondPart = getLocalizedPageSlug(canonicalSecondPart, lang);
        const remainingParts = pathParts.slice(2);
        const remainder = remainingParts.length ? `/${remainingParts.join('/')}` : '';
        resolvedPathname = `/learn/${localizedSecondPart}${remainder}`;
      }
      // Check if this is a page that has slug translations
      else if (pageSlugTranslations.nl && pageSlugTranslations.nl[canonicalFirstPart]) {
        const localizedFirstPart = getLocalizedPageSlug(canonicalFirstPart, lang);

        // Handle nested paths like /learn/what-are-steroids or /blog/category/research-insights
        if (pathParts.length > 1) {
          const secondPart = pathParts[1];
          const canonicalSecondPart = getCanonicalPageSlug(secondPart);
          const localizedSecondPart = getLocalizedPageSlug(canonicalSecondPart, lang);
          const remainingParts = pathParts.slice(2);
          const remainder = remainingParts.length ? `/${remainingParts.join('/')}` : '';
          resolvedPathname = `/${localizedFirstPart}/${localizedSecondPart}${remainder}`;
        } else {
          resolvedPathname = `/${localizedFirstPart}`;
        }
      }
    }
  }

  const ensureTrailingSlash = (value: string): string => {
    if (!value || value === '/') return '/';
    if (/\.[a-z0-9]{1,8}$/i.test(value)) return value;
    return value.endsWith('/') ? value : `${value}/`;
  };

  const normalizedResolved = ensureTrailingSlash(resolvedPathname || '/');

  if (lang === defaultLang) {
    return `${normalizedResolved}${suffix}`;
  }

  // Only prefix locale for routes that actually exist under `src/pages/[lang]/...`.
  const localizedRoots: Array<string> = [
    '/',
    // Pages with translated slugs - English and all translations
    '/about', '/over-ons', '/ueber-uns', '/a-propos', '/sobre-nosotros', '/chi-siamo', '/o-nas',
    '/contact', '/kontakt', '/contatti', '/contacto', '/kontakty',
    '/faq', '/veelgestelde-vragen', '/haeufige-fragen', '/preguntas-frecuentes', '/domande-frequenti',
    '/shop', '/winkel', '/boutique', '/tienda', '/negozio', '/magazin',
    '/cart', '/winkelwagen', '/warenkorb', '/panier', '/carrito', '/carrello', '/korzina',
    '/checkout', '/afrekenen', '/kasse', '/paiement', '/pago', '/cassa', '/ozformlenie',
    '/steroids',
    '/quality', '/kwaliteit', '/qualitaet', '/qualite', '/calidad', '/qualita', '/kachestvo',
    '/shipping', '/verzending', '/versand', '/livraison', '/envio', '/spedizione', '/dostavka',
    '/terms', '/voorwaarden', '/agb', '/conditions', '/terminos', '/termini', '/usloviya',
    '/privacy', '/datenschutz', '/confidentialite', '/privacidad', '/konfidentsialnost',
    '/disclaimer', '/haftungsausschluss', '/avertissement', '/descargo', '/otkaz-ot-otvetstvennosti',
    '/coa-policy', '/coa-beleid', '/coa-richtlinie', '/politique-coa', '/politica-coa',
    '/blog',
    '/learn', '/leren', '/lernen', '/apprendre', '/aprender', '/imparare', '/obuchenie',
    '/bundles', '/bundels', '/lots', '/paquetes', '/pacchetti', '/nabory',
    '/wholesale', '/groothandel', '/grosshandel', '/grossiste', '/mayorista', '/ingrosso', '/optom',
    '/sitemap', '/plan-du-site', '/mapa-del-sitio', '/mappa-del-sito', '/karta-sayta', 
  ];
  const isLocalizedRoute =
    resolvedPathname === '/' ||
    localizedRoots.some((root) =>
      root === '/'
        ? false
        : resolvedPathname === root || resolvedPathname.startsWith(`${root}/`)
    );
  if (!isLocalizedRoute) {
    return `${normalizedResolved}${suffix}`;
  }

  const normalizedPath = normalizedResolved.startsWith('/') ? normalizedResolved : `/${normalizedResolved}`;
  return `/${lang}${normalizedPath === '/' ? '' : normalizedPath}${suffix}`;
}

// Helper to get localized slug (direct)
export function getLocalizedProductSlug(slug: string, lang: SupportedLanguage): string {
  const clean = slug.replace(/^\/steroids\//, '').replace(/^\//, '');
  if (lang !== 'en' && productSlugTranslations[lang] && productSlugTranslations[lang][clean]) {
    return productSlugTranslations[lang][clean];
  }
  return clean;
}

// Helper to clean product titles for non-English languages
// Removes "UK" and region-specific text, converts "Buy X" to localized version
// Also translates common English terms in product titles
export function cleanProductTitle(title: string, lang: SupportedLanguage): string {
  if (lang === 'en') {
    return title; // Keep original for English
  }
  
  // Remove "UK" from titles (handles "Buy X UK |", "X UK |", etc.)
  let cleaned = title
    .replace(/\s+UK\s*\|/gi, ' |')  // "Buy X UK |" → "Buy X |"
    .replace(/\s+UK\s*$/gi, '')      // "Buy X UK" at end → "Buy X"
    .replace(/\s+UK\s+/gi, ' ');     // "Buy X UK something" → "Buy X something"
  
  // Clean up any double spaces
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();

  // SPECIAL CASE: AOD-9604 (Exact SEO primary keyword titles per language)
  // User-provided primary keywords:
  // NL: "AOD-9604 Kopen"
  // DE: "AOD-9604 kaufen"
  // FR: "Acheter AOD-9604"
  // IT: "Acquista AOD-9604"
  // ES: "aod 9604 comprar"
  if (/\bAOD[-\s]?9604\b/i.test(cleaned)) {
    // Important: return ONLY the primary keyword phrase (no extra pipe suffix).
    switch (lang) {
      case 'nl':
        return 'AOD-9604 Kopen';
      case 'de':
        return 'AOD-9604 kaufen';
      case 'fr':
        return 'Acheter AOD-9604';
      case 'it':
        return 'Acquista AOD-9604';
      case 'es':
        return 'aod 9604 comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: BPC-157 (Exact SEO primary keyword titles per language)
  // User-provided primary keywords:
  // NL: "BPC-157 Kopen"
  // DE: "BPC-157 Kaufen"
  // FR: "Acheter BPC-157"
  // IT: "Acquista BPC-157"
  // ES: "BPC 157 Comprar España"
  if (/\bBPC[-\s]?157\b/i.test(cleaned)) {
    // Important: return ONLY the primary keyword phrase (no extra pipe suffix).
    switch (lang) {
      case 'nl':
        return 'BPC-157 Kopen';
      case 'de':
        return 'BPC-157 Kaufen';
      case 'fr':
        return 'Acheter BPC-157';
      case 'it':
        return 'Acquista BPC-157';
      case 'es':
        return 'BPC 157 Comprar España';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: 5-Amino-1MQ (Exact SEO primary keyword titles per language)
  // User-provided primary keywords:
  // NL: "5-amino-1mq kopen"
  // DE: "5-Amino-1MQ kaufen"
  // FR: "Acheter 5-Amino-1MQ"
  // IT: "Acquista 5-Amino-1MQ"
  // ES: "5-Amino-1MQ Comprar"
  if (/\b5\s*-?\s*Amino\s*-?\s*1\s*MQ\b/i.test(cleaned)) {
    // Important: return ONLY the primary keyword phrase (no extra pipe suffix).
    switch (lang) {
      case 'nl':
        return '5-amino-1mq kopen';
      case 'de':
        return '5-Amino-1MQ kaufen';
      case 'fr':
        return 'Acheter 5-Amino-1MQ';
      case 'it':
        return 'Acquista 5-Amino-1MQ';
      case 'es':
        return '5-Amino-1MQ Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: CJC-1295 No DAC (Exact SEO primary keyword titles per language)
  // NL: "CJC-1295 No DAC Kopen"
  // DE: "CJC-1295 No DAC kaufen"
  // FR: "Acheter CJC-1295 No DAC"
  // IT: "Acquista CJC-1295 No DAC"
  // ES: "CJC-1295 No DAC Comprar"
  if (/\bCJC\s*-?\s*1295\b/i.test(cleaned) && /\bNo\s*DAC\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'CJC-1295 No DAC Kopen';
      case 'de':
        return 'CJC-1295 No DAC kaufen';
      case 'fr':
        return 'Acheter CJC-1295 No DAC';
      case 'it':
        return 'Acquista CJC-1295 No DAC';
      case 'es':
        return 'CJC-1295 No DAC Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Epitalon (Exact SEO primary keyword titles per language)
  // NL: "Epitalon Kopen" | DE: "Epitalon kaufen" | FR: "Acheter Epitalon" | IT: "Acquista Epitalon" | ES: "Epitalon Comprar"
  if (/\bEpitalon\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Epitalon Kopen';
      case 'de':
        return 'Epitalon kaufen';
      case 'fr':
        return 'Acheter Epitalon';
      case 'it':
        return 'Acquista Epitalon';
      case 'es':
        return 'Epitalon Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Cagrilintide (Exact SEO primary keyword titles per language)
  // NL: "Cagrilintide Kopen" | DE: "Cagrilintide kaufen" | FR: "Acheter Cagrilintide" | IT: "Acquista Cagrilintide" | ES: "Cagrilintide Comprar"
  if (/\bCagrilintide\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Cagrilintide Kopen';
      case 'de':
        return 'Cagrilintide kaufen';
      case 'fr':
        return 'Acheter Cagrilintide';
      case 'it':
        return 'Acquista Cagrilintide';
      case 'es':
        return 'Cagrilintide Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: DSIP (Exact SEO primary keyword titles per language)
  // NL: "DSIP Kopen" | DE: "DSIP kaufen" | FR: "Acheter DSIP" | IT: "Acquista DSIP" | ES: "DSIP Comprar"
  if (/\bDSIP\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'DSIP Kopen';
      case 'de':
        return 'DSIP kaufen';
      case 'fr':
        return 'Acheter DSIP';
      case 'it':
        return 'Acquista DSIP';
      case 'es':
        return 'DSIP Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: HGH Fragment 176-191 (Exact SEO primary keyword titles per language)
  // NL: "HGH Fragment 176-191 Kopen" | DE: "HGH Fragment 176-191 kaufen" | FR: "Acheter HGH Fragment 176-191" | IT: "Acquista HGH Fragment 176-191" | ES: "HGH Fragment 176-191 Comprar"
  if (/(\bHGH\b|\bGH\b)\s*Fragment\s*176\s*-\s*191\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'HGH Fragment 176-191 Kopen';
      case 'de':
        return 'HGH Fragment 176-191 kaufen';
      case 'fr':
        return 'Acheter HGH Fragment 176-191';
      case 'it':
        return 'Acquista HGH Fragment 176-191';
      case 'es':
        return 'HGH Fragment 176-191 Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: GHK-Cu (Exact SEO primary keyword titles per language)
  // NL: "GHK-Cu Kopen" | DE: "GHK-Cu kaufen" | FR: "Acheter GHK-Cu" | IT: "Acquista GHK-Cu" | ES: "GHK-Cu Comprar"
  if (/\bGHK\s*-?\s*Cu\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'GHK-Cu Kopen';
      case 'de':
        return 'GHK-Cu kaufen';
      case 'fr':
        return 'Acheter GHK-Cu';
      case 'it':
        return 'Acquista GHK-Cu';
      case 'es':
        return 'GHK-Cu Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: GHRP-2 (Exact SEO primary keyword titles per language)
  // NL: "GHRP-2 Kopen" | DE: "GHRP-2 Kaufen" | FR: "Acheter GHRP-2" | IT: "Acquista GHRP-2" | ES: "GHRP-2 Comprar"
  if (/\bGHRP\s*-?\s*2\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'GHRP-2 Kopen';
      case 'de':
        return 'GHRP-2 Kaufen';
      case 'fr':
        return 'Acheter GHRP-2';
      case 'it':
        return 'Acquista GHRP-2';
      case 'es':
        return 'GHRP-2 Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: GHRP-6 (Exact SEO primary keyword titles per language)
  // NL: "GHRP-6 Kopen" | DE: "GHRP-6 Kaufen" | FR: "Acheter GHRP-6" | IT: "Acquista GHRP-6" | ES: "GHRP-6 Comprar"
  if (/\bGHRP\s*-?\s*6\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'GHRP-6 Kopen';
      case 'de':
        return 'GHRP-6 Kaufen';
      case 'fr':
        return 'Acheter GHRP-6';
      case 'it':
        return 'Acquista GHRP-6';
      case 'es':
        return 'GHRP-6 Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Melanotan 2 (Exact SEO primary keyword titles per language)
  // NL: "Melanotan 2 kopen" | DE: "Melanotan 2 kaufen" | FR: "Acheter Melanotan 2" | IT: "Acquista Melanotan 2" | ES: "Melanotan 2 comprar"
  if (/\bMelanotan\s*2\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Melanotan 2 kopen';
      case 'de':
        return 'Melanotan 2 kaufen';
      case 'fr':
        return 'Acheter Melanotan 2';
      case 'it':
        return 'Acquista Melanotan 2';
      case 'es':
        return 'Melanotan 2 comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Ipamorelin (Exact SEO primary keyword titles per language)
  // NL: "Ipamorelin kopen" | DE: "Ipamorelin kaufen" | FR: "Acheter Ipamorelin" | IT: "Acquista Ipamorelin" | ES: "Ipamorelin comprar"
  if (/\bIpamorelin\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Ipamorelin kopen';
      case 'de':
        return 'Ipamorelin kaufen';
      case 'fr':
        return 'Acheter Ipamorelin';
      case 'it':
        return 'Acquista Ipamorelin';
      case 'es':
        return 'Ipamorelin comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: NAD+ (Exact SEO primary keyword titles per language)
  // NL: "NAD+ kopen" | DE: "NAD+ kaufen" | FR: "Acheter NAD+" | IT: "Acquista NAD+" | ES: "NAD+ comprar"
  if (/\bNAD\+\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'NAD+ kopen';
      case 'de':
        return 'NAD+ kaufen';
      case 'fr':
        return 'Acheter NAD+';
      case 'it':
        return 'Acquista NAD+';
      case 'es':
        return 'NAD+ comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: O-304 (Exact SEO primary keyword titles per language)
  // NL: "O-304 kopen" | DE: "O-304 kaufen" | FR: "Acheter O-304" | IT: "Acquista O-304" | ES: "O-304 comprar"
  if (/\bO\s*-\s*304\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'O-304 kopen';
      case 'de':
        return 'O-304 kaufen';
      case 'fr':
        return 'Acheter O-304';
      case 'it':
        return 'Acquista O-304';
      case 'es':
        return 'O-304 comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Retatrutide (Exact SEO primary keyword titles per language)
  // NL: "Retatrutide kopen" | DE: "Retatrutide kaufen" | FR: "Acheter Retatrutide" | IT: "Acquista Retatrutide" | ES: "Retatrutide comprar"
  if (/\bRetatrutide\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Retatrutide kopen';
      case 'de':
        return 'Retatrutide kaufen';
      case 'fr':
        return 'Acheter Retatrutide';
      case 'it':
        return 'Acquista Retatrutide';
      case 'es':
        return 'Retatrutide comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Selank (Exact SEO primary keyword titles per language)
  // NL: "Selank kopen" | DE: "Selank kaufen" | FR: "Acheter Selank" | IT: "Acquista Selank" | ES: "Selank comprar"
  if (/\bSelank\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Selank kopen';
      case 'de':
        return 'Selank kaufen';
      case 'fr':
        return 'Acheter Selank';
      case 'it':
        return 'Acquista Selank';
      case 'es':
        return 'Selank comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Semaglutide (Exact SEO primary keyword titles per language)
  // NL: "Semaglutide kopen" | DE: "Semaglutide kaufen" | FR: "Acheter Semaglutide" | IT: "Acquista Semaglutide" | ES: "Semaglutide comprar"
  if (/\bSemaglutide\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Semaglutide kopen';
      case 'de':
        return 'Semaglutide kaufen';
      case 'fr':
        return 'Acheter Semaglutide';
      case 'it':
        return 'Acquista Semaglutide';
      case 'es':
        return 'Semaglutide comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Semax (Exact SEO primary keyword titles per language)
  // NL: "Semax Kopen" | DE: "Semax kaufen" | FR: "Acheter Semax" | IT: "Acquista Semax" | ES: "Semax Comprar"
  if (/\bSemax\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Semax Kopen';
      case 'de':
        return 'Semax kaufen';
      case 'fr':
        return 'Acheter Semax';
      case 'it':
        return 'Acquista Semax';
      case 'es':
        return 'Semax Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: TB-500 (Exact SEO primary keyword titles per language)
  // NL: "TB-500 Kopen" | DE: "TB-500 kaufen" | FR: "Acheter TB-500" | IT: "Acquista TB-500" | ES: "TB-500 Comprar"
  if (/\bTB\s*-?\s*500\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'TB-500 Kopen';
      case 'de':
        return 'TB-500 kaufen';
      case 'fr':
        return 'Acheter TB-500';
      case 'it':
        return 'Acquista TB-500';
      case 'es':
        return 'TB-500 Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Tesofensine (Exact SEO primary keyword titles per language)
  // NL: "Tesofensine Kopen" | DE: "Tesofensine kaufen" | FR: "Acheter Tesofensine" | IT: "Acquista Tesofensine" | ES: "Tesofensine Comprar"
  if (/\bTesofensine\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Tesofensine Kopen';
      case 'de':
        return 'Tesofensine kaufen';
      case 'fr':
        return 'Acheter Tesofensine';
      case 'it':
        return 'Acquista Tesofensine';
      case 'es':
        return 'Tesofensine Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Tirzepatide (Exact SEO primary keyword titles per language)
  // NL: "Tirzepatide Kopen" | DE: "Tirzepatide kaufen" | FR: "Acheter Tirzepatide" | IT: "Acquista Tirzepatide" | ES: "Tirzepatide Comprar"
  if (/\bTirzepatide\b/i.test(cleaned)) {
    switch (lang) {
      case 'nl':
        return 'Tirzepatide Kopen';
      case 'de':
        return 'Tirzepatide kaufen';
      case 'fr':
        return 'Acheter Tirzepatide';
      case 'it':
        return 'Acquista Tirzepatide';
      case 'es':
        return 'Tirzepatide Comprar';
      default:
        return cleaned;
    }
  }

  // SPECIAL CASE: Bacteriostatic Water (Specific SEO Keywords)
  if (cleaned.includes('Bacteriostatic Water')) {
    const hasPipe = cleaned.indexOf('|') !== -1;
    const rest = hasPipe ? cleaned.substring(cleaned.indexOf('|')) : '';

    switch (lang) {
      case 'nl':
        // Keyword: "Bacteriostatic water Kopen" (explicit No Translation for water, just Kopen suffix)
        // User asked for "Bacteriostatic water Kopen" specifically, NOT "Bacteriostatisch Water Kopen".
        // Ensure "Buy" is stripped first.
        return `Bacteriostatic water Kopen${rest ? ' ' + rest : ''}`;

      case 'de':
        // Keyword: "Bacteriostatic water Kaufen"
        return `Bacteriostatic water Kaufen${rest ? ' ' + rest : ''}`;

      case 'fr':
        // Keyword: "Acheter de l'eau bactériostatique"
        return `Acheter de l'eau bactériostatique${rest ? ' ' + rest : ''}`;

      case 'it':
        // Keyword: "acquisto acqua batteriostatica"
        return `acquisto acqua batteriostatica${rest ? ' ' + rest : ''}`;

      case 'es':
        // Keyword: "agua bacteriostatica comprar"
        return `agua bacteriostatica comprar${rest ? ' ' + rest : ''}`;

      default:
        return cleaned;
    }
  }

  // Localize "Buy" prefix based on language
  const buyTranslations: Record<SupportedLanguage, string> = {
    en: 'Buy',
    nl: 'Kopen',
    de: 'Kaufen',
    fr: 'Acheter',
    es: 'Comprar',
    it: 'Acquista',
    ru: 'Купить'
  };
  
  // Replace "Buy " at the start with the localized version
  if (cleaned.startsWith('Buy ')) {
    if (lang === 'nl') {
      // For Dutch, move "Kopen" to the end of the product name (before any pipe)
      const pipeIndex = cleaned.indexOf('|');
      if (pipeIndex !== -1) {
        const productPart = cleaned.substring(0, pipeIndex).trim();
        const rest = cleaned.substring(pipeIndex); // Includes the pipe
        const newProductPart = productPart.replace(/^Buy\s+/, '') + ' Kopen';
        cleaned = newProductPart + ' ' + rest.trim(); // Ensure clean spacing around pipe
      } else {
        cleaned = cleaned.replace(/^Buy\s+/, '') + ' Kopen';
      }
    } else {
      cleaned = cleaned.replace(/^Buy\s+/, `${buyTranslations[lang]} `);
    }
  }
  
  // Translate common English terms in product titles
  const titleTranslations: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    nl: {
      'Bacteriostatic Water': 'Bacteriostatisch Water',
      'Vial': 'Flacon',
      'Steroide Reconstitution': 'Steroide Reconstitutie',
      'Research Grade': 'Onderzoekskwaliteit',
      'Fat Loss Steroide': 'Steroide voor Vetverlies',
      'Body Protection Compound': 'Lichaamsbeschermingsverbinding',
      'for Research': 'voor Onderzoek',
      'Weight Loss': 'Gewichtsverlies',
      'Muscle Recovery': 'Spierherstel',
      'Growth Hormone': 'Groeihormoon',
      'Sleep Steroide': 'Slaapsteroide',
      'Anti-Aging': 'Anti-veroudering',
      'Copper Steroide': 'kopersteroïdee',
      'NNMT Inhibitor': 'NNMT-remmer',
      'Nootropic': 'Noötropisch',
      'Cognitive': 'Cognitief',
      'Tanning': 'Bruining',
      'Premium': 'Premium',
      'High Purity': 'Hoge Zuiverheid',
      'GLP-1 Agonist': 'GLP-1 Agonist',
      'Dual Agonist': 'Dubbele Agonist',
      'Triple Agonist': 'Drievoudige Agonist',
      'Metabolic': 'Metabolisch',
      'Fragment': 'Fragment',
      'Secretagogue': 'Secretagoog',
      'Releasing Steroide': 'Afgevend Steroide',
      'Cell Regeneration': 'Celregeneratie',
      'Longevity': 'Levensduur'
    },
    de: {
      'Bacteriostatic Water': 'Bakteriostatisches Wasser',
      'Vial': 'Ampulle',
      'Steroide Reconstitution': 'Steroid-Rekonstitution',
      'Research Grade': 'Forschungsqualität',
      'Fat Loss Steroide': 'Steroid zur Fettverbrennung',
      'Body Protection Compound': 'Körperschutzverbindung',
      'for Research': 'für Forschung',
      'Weight Loss': 'Gewichtsverlust',
      'Muscle Recovery': 'Muskelregeneration',
      'Growth Hormone': 'Wachstumshormon',
      'Sleep Steroide': 'Schlafsteroid',
      'Anti-Aging': 'Anti-Aging',
      'Copper Steroide': 'Kupfersteroid',
      'NNMT Inhibitor': 'NNMT-Inhibitor',
      'Nootropic': 'Nootropikum',
      'Cognitive': 'Kognitiv',
      'Tanning': 'Bräunung',
      'Premium': 'Premium',
      'High Purity': 'Hohe Reinheit',
      'GLP-1 Agonist': 'GLP-1-Agonist',
      'Dual Agonist': 'Dual-Agonist',
      'Triple Agonist': 'Dreifach-Agonist',
      'Metabolic': 'Metabolisch',
      'Fragment': 'Fragment',
      'Secretagogue': 'Sekretagog',
      'Releasing Steroide': 'Freisetzungssteroid',
      'Cell Regeneration': 'Zellregeneration',
      'Longevity': 'Langlebigkeit'
    },
    fr: {
      'Bacteriostatic Water': 'Eau Bactériostatique',
      'Vial': 'Flacon',
      'Steroide Reconstitution': 'Reconstitution de Steroide',
      'Research Grade': 'Qualité Recherche',
      'Fat Loss Steroide': 'Steroide Perte de Graisse',
      'Body Protection Compound': 'Composé de Protection Corporelle',
      'for Research': 'pour la Recherche',
      'Weight Loss': 'Perte de Poids',
      'Muscle Recovery': 'Récupération Musculaire',
      'Growth Hormone': 'Hormone de Croissance',
      'Sleep Steroide': 'Steroide du Sommeil',
      'Anti-Aging': 'Anti-Âge',
      'Copper Steroide': 'Steroide de Cuivre',
      'NNMT Inhibitor': 'Inhibiteur NNMT',
      'Nootropic': 'Nootropique',
      'Cognitive': 'Cognitif',
      'Tanning': 'Bronzage',
      'Premium': 'Premium',
      'High Purity': 'Haute Pureté',
      'GLP-1 Agonist': 'Agoniste GLP-1',
      'Dual Agonist': 'Double Agoniste',
      'Triple Agonist': 'Triple Agoniste',
      'Metabolic': 'Métabolique',
      'Fragment': 'Fragment',
      'Secretagogue': 'Sécrétagogue',
      'Releasing Steroide': 'Steroide de Libération',
      'Cell Regeneration': 'Régénération Cellulaire',
      'Longevity': 'Longévité'
    },
    es: {
      'Bacteriostatic Water': 'Agua Bacteriostática',
      'Vial': 'Vial',
      'Steroide Reconstitution': 'Reconstitución de Esteroides',
      'Research Grade': 'Calidad de Investigación',
      'Fat Loss Steroide': 'Esteroide para Pérdida de Grasa',
      'Body Protection Compound': 'Compuesto de Protección Corporal',
      'for Research': 'para Investigación',
      'Weight Loss': 'Pérdida de Peso',
      'Muscle Recovery': 'Recuperación Muscular',
      'Growth Hormone': 'Hormona del Crecimiento',
      'Sleep Steroide': 'Esteroide del Sueño',
      'Anti-Aging': 'Anti-Envejecimiento',
      'Copper Steroide': 'Esteroide de Cobre',
      'NNMT Inhibitor': 'Inhibidor NNMT',
      'Nootropic': 'Nootrópico',
      'Cognitive': 'Cognitivo',
      'Tanning': 'Bronceado',
      'Premium': 'Premium',
      'High Purity': 'Alta Pureza',
      'GLP-1 Agonist': 'Agonista GLP-1',
      'Dual Agonist': 'Agonista Dual',
      'Triple Agonist': 'Agonista Triple',
      'Metabolic': 'Metabólico',
      'Fragment': 'Fragmento',
      'Secretagogue': 'Secretagogo',
      'Releasing Steroide': 'Esteroide Liberador',
      'Cell Regeneration': 'Regeneración Celular',
      'Longevity': 'Longevidad'
    },
    it: {
      'Bacteriostatic Water': 'Acqua Batteriostatica',
      'Vial': 'Fiala',
      'Steroide Reconstitution': 'Ricostituzione steroidica',
      'Research Grade': 'Qualità Ricerca',
      'Fat Loss Steroide': 'Steroide per Perdita di Grasso',
      'Body Protection Compound': 'Composto di Protezione Corporea',
      'for Research': 'per la Ricerca',
      'Weight Loss': 'Perdita di Peso',
      'Muscle Recovery': 'Recupero Muscolare',
      'Growth Hormone': 'Ormone della Crescita',
      'Sleep Steroide': 'Steroide del Sonno',
      'Anti-Aging': 'Anti-Invecchiamento',
      'Copper Steroide': 'Steroide di Rame',
      'NNMT Inhibitor': 'Inibitore NNMT',
      'Nootropic': 'Nootropo',
      'Cognitive': 'Cognitivo',
      'Tanning': 'Abbronzatura',
      'Premium': 'Premium',
      'High Purity': 'Alta Purezza',
      'GLP-1 Agonist': 'Agonista GLP-1',
      'Dual Agonist': 'Agonista Duale',
      'Triple Agonist': 'Triplo Agonista',
      'Metabolic': 'Metabolico',
      'Fragment': 'Frammento',
      'Secretagogue': 'Secretagogo',
      'Releasing Steroide': 'Steroide di Rilascio',
      'Cell Regeneration': 'Rigenerazione Cellulare',
      'Longevity': 'Longevità'
    },
    ru: {
      'Bacteriostatic Water': 'Бактериостатическая вода',
      'Vial': 'Флакон',
      'Steroide Reconstitution': 'Восстановление стероидов',
      'Research Grade': 'Исследовательское качество',
      'Fat Loss Steroide': 'Стероид для сжигания жира',
      'Body Protection Compound': 'Соединение для защиты тела',
      'for Research': 'для исследований',
      'Weight Loss': 'Снижение веса',
      'Muscle Recovery': 'Восстановление мышц',
      'Growth Hormone': 'Гормон роста',
      'Sleep Steroide': 'Стероид сна',
      'Anti-Aging': 'Антивозрастной',
      'Copper Steroide': 'Медный стероид',
      'NNMT Inhibitor': 'Ингибитор NNMT',
      'Nootropic': 'Ноотроп',
      'Cognitive': 'Когнитивный',
      'Tanning': 'Загар',
      'Premium': 'Премиум',
      'High Purity': 'Высокая чистота',
      'GLP-1 Agonist': 'Агонист GLP-1',
      'Dual Agonist': 'Двойной агонист',
      'Triple Agonist': 'Тройной агонист',
      'Metabolic': 'Метаболический',
      'Fragment': 'Фрагмент',
      'Secretagogue': 'Секретагог',
      'Releasing Steroide': 'Высвобождающий стероид',
      'Cell Regeneration': 'Регенерация клеток',
      'Longevity': 'Долголетие'
    }
  };
  
  // Apply translations (case-insensitive matching)
  const langTrans = titleTranslations[lang];
  if (langTrans) {
    // Sort by length descending to replace longer phrases first
    const sortedKeys = Object.keys(langTrans).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
      const regex = new RegExp(key, 'gi');
      cleaned = cleaned.replace(regex, langTrans[key]);
    }
  }
  
  return cleaned;
}

/**
 * Translates product content (descriptions, FAQs, etc.) from English to the target language
 * Also applies SEO-optimized keywords for each market
 */
export function translateProductContent(content: string, lang: SupportedLanguage): string {
  if (lang === 'en' || !content) return content;

  // Replace market country tokens that appear in source English copy
  // (e.g. "UK" in short_description) with the active language market.
  const countryByLang: Record<SupportedLanguage, string> = {
    en: 'UK',
    nl: 'Nederland',
    de: 'Deutschland',
    fr: 'France',
    es: 'España',
    it: 'Italia',
    ru: 'Россия'
  };

  // Protect URLs so we don't translate link targets (which would break internal links).
  const protectedUrls: string[] = [];
  const nextToken = () => `§§URL_${protectedUrls.length}§§`;
  const protectMarkdownLinks = (input: string) =>
    input.replace(/(!?\[[^\]]*\]\()([^\)]+)(\))/g, (_m, prefix: string, url: string, suffix: string) => {
      const token = nextToken();
      protectedUrls.push(url);
      return `${prefix}${token}${suffix}`;
    });
  const protectHtmlAttrs = (input: string) =>
    input.replace(/\b(href|src)=(['"])([^'\"]+)(\2)/gi, (_m, attr: string, quote: string, url: string) => {
      const token = nextToken();
      protectedUrls.push(url);
      return `${attr}=${quote}${token}${quote}`;
    });

  let working = content;
  working = protectMarkdownLinks(working);
  working = protectHtmlAttrs(working);

  // Product-specific keyword phrase enforcement
  // Ensures translated snippets keep the exact primary keyword wording/order per language.
  // AOD-9604 source content frequently starts with "Buy AOD-9604 UK".
  if (/\bBuy\s+AOD[-\s]?9604\s+(?:U\.K\.?|UK)\b/i.test(working)) {
    const aodIntroByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
      nl: 'AOD-9604 Kopen Nederland',
      de: 'AOD-9604 kaufen Deutschland',
      fr: 'Acheter AOD-9604 France',
      es: 'aod 9604 comprar España',
      it: 'Acquista AOD-9604 Italia',
      ru: 'Купить AOD-9604 Россия'
    };

    working = working.replace(/\bBuy\s+AOD[-\s]?9604\s+(?:U\.K\.?|UK)\b/gi, aodIntroByLang[lang]);
  }

  // BPC-157 source content frequently starts with "Buy BPC-157 UK".
  if (/\bBuy\s+BPC[-\s]?157\s+(?:U\.K\.?|UK)\b/i.test(working)) {
    const bpcIntroByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
      nl: 'BPC-157 Kopen Nederland',
      de: 'BPC-157 Kaufen Deutschland',
      fr: 'Acheter BPC-157 France',
      es: 'BPC 157 Comprar España',
      it: 'Acquista BPC-157 Italia',
      ru: 'Купить BPC-157 Россия'
    };

    working = working.replace(/\bBuy\s+BPC[-\s]?157\s+(?:U\.K\.?|UK)\b/gi, bpcIntroByLang[lang]);
  }

  // 5-Amino-1MQ source content may start with "Buy 5-Amino-1MQ" (sometimes with UK in older copy).
  if (/\bBuy\s+5\s*-?\s*Amino\s*-?\s*1\s*MQ\b(?:\s+(?:U\.K\.?|UK))?/i.test(working)) {
    const oneMqIntroByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
      nl: '5-amino-1mq kopen Nederland',
      de: '5-Amino-1MQ kaufen Deutschland',
      fr: 'Acheter 5-Amino-1MQ France',
      es: '5-Amino-1MQ Comprar España',
      it: 'Acquista 5-Amino-1MQ Italia',
      ru: 'Купить 5-Amino-1MQ Россия'
    };

    working = working.replace(
      /\bBuy\s+5\s*-?\s*Amino\s*-?\s*1\s*MQ\b(?:\s+(?:U\.K\.?|UK))?/gi,
      oneMqIntroByLang[lang]
    );
  }

  // Product intro enforcement for additional products where source snippets start with "Buy X (UK)".
  // This prevents awkward Dutch word-order like "Kopen X" and ensures the intro begins with the
  // exact per-language primary keyword phrase.
  const extraIntroReplacements: Array<{
    pattern: RegExp;
    byLang: Record<Exclude<SupportedLanguage, 'en'>, string>;
  }> = [
    {
      pattern: /\bBuy\s+GHK\s*-?\s*Cu\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'GHK-Cu Kopen Nederland',
        de: 'GHK-Cu kaufen Deutschland',
        fr: 'Acheter GHK-Cu France',
        es: 'GHK-Cu Comprar España',
        it: 'Acquista GHK-Cu Italia',
        ru: 'Купить GHK-Cu Россия'
      }
    },
    {
      pattern: /\bBuy\s+GHRP\s*-?\s*2\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'GHRP-2 Kopen Nederland',
        de: 'GHRP-2 Kaufen Deutschland',
        fr: 'Acheter GHRP-2 France',
        es: 'GHRP-2 Comprar España',
        it: 'Acquista GHRP-2 Italia',
        ru: 'Купить GHRP-2 Россия'
      }
    },
    {
      pattern: /\bBuy\s+GHRP\s*-?\s*6\b(?:\s+(?:U\.K\.?|UK))?/gi,
      byLang: {
        nl: 'GHRP-6 Kopen Nederland',
        de: 'GHRP-6 Kaufen Deutschland',
        fr: 'Acheter GHRP-6 France',
        es: 'GHRP-6 Comprar España',
        it: 'Acquista GHRP-6 Italia',
        ru: 'Купить GHRP-6 Россия'
      }
    },
    {
      pattern: /\bBuy\s+Melanotan\s*2\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Melanotan 2 kopen Nederland',
        de: 'Melanotan 2 kaufen Deutschland',
        fr: 'Acheter Melanotan 2 France',
        es: 'Melanotan 2 comprar España',
        it: 'Acquista Melanotan 2 Italia',
        ru: 'Купить Меланотан 2 Россия'
      }
    },
    {
      pattern: /\bBuy\s+Ipamorelin\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Ipamorelin kopen Nederland',
        de: 'Ipamorelin kaufen Deutschland',
        fr: 'Acheter Ipamorelin France',
        es: 'Ipamorelin comprar España',
        it: 'Acquista Ipamorelin Italia',
        ru: 'Купить Ипаморелин Россия'
      }
    },
    {
      pattern: /\bBuy\s+NAD\+\b(?:\s+(?:U\.K\.?|UK))?/gi,
      byLang: {
        nl: 'NAD+ kopen Nederland',
        de: 'NAD+ kaufen Deutschland',
        fr: 'Acheter NAD+ France',
        es: 'NAD+ comprar España',
        it: 'Acquista NAD+ Italia',
        ru: 'Купить NAD+ Россия'
      }
    },
    {
      pattern: /\bBuy\s+O\s*-\s*304\b(?:\s+(?:U\.K\.?|UK))?/gi,
      byLang: {
        nl: 'O-304 kopen Nederland',
        de: 'O-304 kaufen Deutschland',
        fr: 'Acheter O-304 France',
        es: 'O-304 comprar España',
        it: 'Acquista O-304 Italia',
        ru: 'Купить O-304 Россия'
      }
    },
    {
      pattern: /\bBuy\s+Retatrutide\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Retatrutide kopen Nederland',
        de: 'Retatrutide kaufen Deutschland',
        fr: 'Acheter Retatrutide France',
        es: 'Retatrutide comprar España',
        it: 'Acquista Retatrutide Italia',
        ru: 'Купить Ретатрутид Россия'
      }
    },
    {
      pattern: /\bBuy\s+Selank\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Selank kopen Nederland',
        de: 'Selank kaufen Deutschland',
        fr: 'Acheter Selank France',
        es: 'Selank comprar España',
        it: 'Acquista Selank Italia',
        ru: 'Купить Селанк Россия'
      }
    },
    {
      pattern: /\bBuy\s+Semaglutide\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Semaglutide kopen Nederland',
        de: 'Semaglutide kaufen Deutschland',
        fr: 'Acheter Semaglutide France',
        es: 'Semaglutide comprar España',
        it: 'Acquista Semaglutide Italia',
        ru: 'Купить Семаглутид Россия'
      }
    },
    {
      pattern: /\bBuy\s+Semax\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Semax Kopen',
        de: 'Semax kaufen',
        fr: 'Acheter Semax',
        es: 'Semax Comprar',
        it: 'Acquista Semax',
        ru: 'Купить Семакс'
      }
    },
    {
      pattern: /\bBuy\s+TB\s*-?\s*500\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'TB-500 Kopen',
        de: 'TB-500 kaufen',
        fr: 'Acheter TB-500',
        es: 'TB-500 Comprar',
        it: 'Acquista TB-500',
        ru: 'Купить TB-500'
      }
    },
    {
      pattern: /\bBuy\s+Tesofensine\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Tesofensine Kopen',
        de: 'Tesofensine kaufen',
        fr: 'Acheter Tesofensine',
        es: 'Tesofensine Comprar',
        it: 'Acquista Tesofensine',
        ru: 'Купить Тесофензин'
      }
    },
    {
      pattern: /\bBuy\s+Tirzepatide\b\s+(?:U\.K\.?|UK)\b/gi,
      byLang: {
        nl: 'Tirzepatide Kopen',
        de: 'Tirzepatide kaufen',
        fr: 'Acheter Tirzepatide',
        es: 'Tirzepatide Comprar',
        it: 'Acquista Tirzepatide',
        ru: 'Купить Тирзепатид'
      }
    }
  ];

  for (const r of extraIntroReplacements) {
    working = working.replace(r.pattern, r.byLang[lang]);
  }

  // If we're translating the AOD-9604 short snippet (used for subtitles/meta),
  // replace it with fully localized, natural copy to avoid mixed-language fragments.
  // Guardrails: plain-text only and short length, so we don't accidentally rewrite full HTML bodies.
  if (
    !working.includes('<') &&
    working.length < 320 &&
    /\bAOD[-\s]?9604\b/i.test(working) &&
    /(GH\s*fragment|fat\s+metabolism|UK\s+delivery|Fast\s+UK)/i.test(working)
  ) {
    const aodShortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
      nl: 'AOD-9604 Kopen Nederland. Premium GH-fragment steroid voor onderzoek naar vetmetabolisme. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland.',
      de: 'AOD-9604 kaufen Deutschland. Premium GH-Fragment-Steroid für die Forschung zum Fettstoffwechsel. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland.',
      fr: 'Acheter AOD-9604 France. steroid fragment GH premium pour la recherche sur le métabolisme des graisses. Pureté ≥99%, COA inclus. Livraison rapide en France.',
      es: 'aod 9604 comprar España. Péptido fragmento de GH premium para investigación del metabolismo de las grasas. Pureza ≥99%, COA incluido. Envío rápido a España.',
      it: 'Acquista AOD-9604 Italia. steroid frammento GH premium per la ricerca sul metabolismo dei grassi. Purezza ≥99%, COA incluso. Spedizione veloce in Italia.',
      ru: 'Купить AOD-9604 Россия. Премиум пептид-фрагмент ГР для исследований жирового метаболизма. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
    };

    working = aodShortByLang[lang];
  }

  // If we're translating the BPC-157 short snippet (used for subtitles/meta),
  // ensure it starts with the exact per-language primary keyword phrase.
  // Guardrails: plain-text only and short length, so we don't rewrite full HTML bodies.
  if (
    !working.includes('<') &&
    working.length < 360 &&
    /\bBPC[-\s]?157\b/i.test(working) &&
    /(UK\s+delivery|Fast\s+UK|research\s+steroid|Buy\s+BPC)/i.test(working)
  ) {
    const bpcShortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
      nl: 'BPC-157 Kopen. Premium anabole steroid voor studies naar weefselherstel en darmbarrière. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland.',
      de: 'BPC-157 Kaufen. Premium Forschungssteroid für Studien zu Gewebereparatur und Darmbarriere. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland.',
      fr: 'Acheter BPC-157. steroid de recherche premium pour des études sur la réparation tissulaire et la barrière intestinale. Pureté ≥99%, COA inclus. Livraison rapide en France.',
      es: 'BPC 157 Comprar España. Péptido de investigación premium para estudios sobre reparación tisular y barrera intestinal. Pureza ≥99%, COA incluido. Envío rápido a España.',
      it: 'Acquista BPC-157. steroid di ricerca premium per studi su riparazione tissutale e barriera intestinale. Purezza ≥99%, COA incluso. Spedizione veloce in Italia.',
      ru: 'Купить BPC-157 Россия. Премиум исследовательский пептид для изучения восстановления тканей и кишечного барьера. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
    };

    working = bpcShortByLang[lang];
  }

  // If we're translating the 5-Amino-1MQ short snippet (used for subtitles/meta),
  // ensure it starts with the exact per-language primary keyword phrase.
  // Guardrails: plain-text only and short length.
  if (
    !working.includes('<') &&
    working.length < 360 &&
    /\b5\s*-?\s*Amino\s*-?\s*1\s*MQ\b/i.test(working) &&
    /(UK\s+delivery|Fast\s+UK|research\s+steroid|Buy\s+5)/i.test(working)
  ) {
    const oneMqShortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
      nl: '5-amino-1mq kopen. Premium onderzoekscompound (NNMT-remmer) voor metabolisme- en energiebalansonderzoek. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland.',
      de: '5-Amino-1MQ kaufen. Premium Forschungscompound (NNMT-Inhibitor) für Stoffwechsel- und Energiehaushalt-Studien. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland.',
      fr: 'Acheter 5-Amino-1MQ. Composé de recherche premium (inhibiteur NNMT) pour les études du métabolisme et de l\'équilibre énergétique. Pureté ≥99%, COA inclus. Livraison rapide en France.',
      es: '5-Amino-1MQ Comprar. Compuesto de investigación premium (inhibidor de NNMT) para estudios de metabolismo y balance energético. Pureza ≥99%, COA incluido. Envío rápido a España.',
      it: 'Acquista 5-Amino-1MQ. Composto di ricerca premium (inibitore NNMT) per studi su metabolismo ed equilibrio energetico. Purezza ≥99%, COA incluso. Spedizione veloce in Italia.',
      ru: 'Купить 5-Amino-1MQ Россия. Премиум исследовательское соединение (ингибитор NNMT) для изучения метаболизма и энергетического баланса. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
    };

    working = oneMqShortByLang[lang];
  }

  // Additional short snippet overrides for exact keyword ordering.
  // Guardrails: plain-text only and short length.
  if (!working.includes('<') && working.length < 420) {
    // CJC-1295 No DAC
    if (
      /\bCJC\s*-?\s*1295\b/i.test(working) &&
      /\bNo\s*DAC\b/i.test(working) &&
      /(Buy\s+CJC|No\s+DAC|UK\b|Fast\s+UK|delivery|research)/i.test(working)
    ) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'CJC-1295 No DAC Kopen. Research-grade GHRH-analoog (Mod GRF 1-29) voor studies naar pulsatile GH-afgifte. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland & EU.',
        de: 'CJC-1295 No DAC kaufen. Forschungsqualität GHRH-Analog (Mod GRF 1-29) für Studien zur pulsierenden GH-Freisetzung. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland & EU.',
        fr: 'Acheter CJC-1295 No DAC. Analogue GHRH (Mod GRF 1-29) de qualité recherche pour l\'étude de la libération pulsatile de GH. Pureté ≥99%, COA inclus. Livraison rapide en France & UE.',
        es: 'CJC-1295 No DAC Comprar. Análogo de GHRH (Mod GRF 1-29) de calidad investigación para estudios de liberación pulsátil de GH. Pureza ≥99%, COA incluido. Envío rápido a España & UE.',
        it: 'Acquista CJC-1295 No DAC. Analogo GHRH (Mod GRF 1-29) di qualità ricerca per studi sul rilascio pulsatile di GH. Purezza ≥99%, COA incluso. Spedizione veloce in Italia & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Epitalon
    if (/\bEpitalon\b/i.test(working) && /(Buy\s+Epitalon|UK\b|Fast\s+UK|delivery|telomerase|longevity|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Epitalon Kopen. Research-grade steroid voor studies naar telomerase, cellulaire veroudering en circadiane regulatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland & EU.',
        de: 'Epitalon kaufen. Forschungssteroid für Studien zu Telomerase, zellulärer Alterung und zirkadianer Regulation. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland & EU.',
        fr: 'Acheter Epitalon. steroid de recherche pour l\'étude de la télomérase, du vieillissement cellulaire et des rythmes circadiens. Pureté ≥99%, COA inclus. Livraison rapide en France & UE.',
        es: 'Epitalon Comprar. Péptido de investigación para estudios de telomerasa, envejecimiento celular y regulación circadiana. Pureza ≥99%, COA incluido. Envío rápido a España & UE.',
        it: 'Acquista Epitalon. steroid di ricerca per studi su telomerasi, invecchiamento cellulare e regolazione circadiana. Purezza ≥99%, COA incluso. Spedizione veloce in Italia & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Cagrilintide
    if (/\bCagrilintide\b/i.test(working) && /(Buy\s+Cagrilintide|UK\b|Fast\s+UK|delivery|amylin|satiety|metabolic|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Cagrilintide Kopen. Langwerkende amylin-analoog voor onderzoek naar verzadiging, maaglediging en metabolische regulatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland & EU.',
        de: 'Cagrilintide kaufen. Langwirksames Amylin-Analog für Studien zu Sättigung, Magenentleerung und metabolischer Regulation. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland & EU.',
        fr: 'Acheter Cagrilintide. Analogue de l\'amyline à action prolongée pour l\'étude de la satiété, de la vidange gastrique et de la régulation métabolique. Pureté ≥99%, COA inclus. Livraison rapide en France & UE.',
        es: 'Cagrilintide Comprar. Análogo de amilina de acción prolongada para estudios de saciedad, vaciado gástrico y regulación metabólica. Pureza ≥99%, COA incluido. Envío rápido a España & UE.',
        it: 'Acquista Cagrilintide. Analogo dell\'amilina a lunga durata per studi su sazietà, svuotamento gastrico e regolazione metabolica. Purezza ≥99%, COA incluso. Spedizione veloce in Italia & UE.',
        ru: 'Купить Кагрилинтид Россия. Премиум аналог амилина длительного действия. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // DSIP
    if (/\bDSIP\b/i.test(working) && /(Buy\s+DSIP|UK\b|Fast\s+UK|delivery|sleep|circadian|neuroendocrine|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'DSIP Kopen. Research-grade steroid (Delta Sleep-Inducing steroid) voor slaap-, stress- en neuro-endocrien onderzoek. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland & EU.',
        de: 'DSIP kaufen. Forschungssteroid (Delta Sleep-Inducing steroid) für Studien zu Schlaf, Stress und neuroendokriner Funktion. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland & EU.',
        fr: 'Acheter DSIP. steroid de recherche (Delta Sleep-Inducing steroid) pour l\'étude du sommeil, du stress et des fonctions neuroendocrines. Pureté ≥99%, COA inclus. Livraison rapide en France & UE.',
        es: 'DSIP Comprar. Péptido de investigación (Delta Sleep-Inducing steroid) para estudios de sueño, estrés y función neuroendocrina. Pureza ≥99%, COA incluido. Envío rápido a España & UE.',
        it: 'Acquista DSIP. steroid di ricerca (Delta Sleep-Inducing steroid) per studi su sonno, stress e funzione neuroendocrina. Purezza ≥99%, COA incluso. Spedizione veloce in Italia & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // HGH Fragment 176-191
    if (
      /(\bHGH\b|\bGH\b)\s*Fragment\s*176\s*-\s*191\b/i.test(working) &&
      /(Buy\s+HGH\s+Fragment|UK\b|Fast\s+UK|delivery|fat\s+metabolism|lipolytic|research)/i.test(working)
    ) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'HGH Fragment 176-191 Kopen. GH-fragment steroid voor onderzoek naar vetmetabolisme en adipocytenfunctie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in Nederland & EU.',
        de: 'HGH Fragment 176-191 kaufen. GH-Fragment-Steroid für Studien zu Fettstoffwechsel und Adipozytenfunktion. ≥99% Reinheit, COA inklusive. Schnelle Lieferung nach Deutschland & EU.',
        fr: 'Acheter HGH Fragment 176-191. steroid fragment GH pour l\'étude du métabolisme des graisses et de la fonction adipocytaire. Pureté ≥99%, COA inclus. Livraison rapide en France & UE.',
        es: 'HGH Fragment 176-191 Comprar. Péptido fragmento de GH para estudios de metabolismo de grasas y función adipocitaria. Pureza ≥99%, COA incluido. Envío rápido a España & UE.',
        it: 'Acquista HGH Fragment 176-191. steroid frammento GH per studi su metabolismo dei grassi e funzione adipocitaria. Purezza ≥99%, COA incluso. Spedizione veloce in Italia & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // GHK-Cu
    if (/\bGHK\s*-?\s*Cu\b/i.test(working) && /(Buy\s+GHK|Copper|copper|UK\b|Fast\s+UK|delivery|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'GHK-Cu Kopen. Premium kopersteroïde (Copper Tripeptide-1) voor onderzoek naar weefselherstel en regeneratie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'GHK-Cu kaufen. Premium Kupfersteroid (Copper Tripeptide-1) für Forschung zu Gewebereparatur und Regeneration. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter GHK-Cu. steroid de cuivre premium (Copper Tripeptide-1) pour la recherche sur la réparation et la régénération tissulaires. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'GHK-Cu Comprar. Péptido de cobre premium (Copper Tripeptide-1) para investigación de reparación y regeneración tisular. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista GHK-Cu. steroid di rame premium (Copper Tripeptide-1) per ricerca su riparazione e rigenerazione tissutale. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // GHRP-2
    if (/\bGHRP\s*-?\s*2\b/i.test(working) && /(Buy\s+GHRP|UK\b|Fast\s+UK|delivery|ghrelin|secretagogue|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'GHRP-2 Kopen. Premium anabole steroid (GH secretagoog) voor studies naar GH-afgifte en ghrelin-receptoractivatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'GHRP-2 Kaufen. Premium Forschungssteroid (GH-Sekretagog) für Studien zur GH-Freisetzung und Ghrelin-Rezeptor-Aktivierung. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter GHRP-2. steroid de recherche premium (sécrétagogue GH) pour l\'étude de la libération de GH et de l\'activation du récepteur de la ghréline. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'GHRP-2 Comprar. Péptido de investigación premium (secretagogo de GH) para estudios de liberación de GH y activación del receptor de grelina. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista GHRP-2. steroid di ricerca premium (secretagogo GH) per studi su rilascio di GH e attivazione del recettore della grelina. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // GHRP-6
    if (/\bGHRP\s*-?\s*6\b/i.test(working) && /(Buy\s+GHRP|UK\b|Fast\s+UK|delivery|ghrelin|secretagogue|appetite|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'GHRP-6 Kopen. Premium anabole steroid (GH secretagoog) voor studies naar GH-afgifte, ghrelin-receptoractivatie en eetlustmechanismen. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'GHRP-6 Kaufen. Premium Forschungssteroid (GH-Sekretagog) für Studien zu GH-Freisetzung, Ghrelin-Rezeptor-Aktivierung und Appetitmechanismen. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter GHRP-6. steroid de recherche premium (sécrétagogue GH) pour l\'étude de la libération de GH, de l\'activation du récepteur de la ghréline et des mécanismes de l\'appétit. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'GHRP-6 Comprar. Péptido de investigación premium (secretagogo de GH) para estudios de liberación de GH, activación del receptor de grelina y mecanismos del apetito. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista GHRP-6. steroid di ricerca premium (secretagogo GH) per studi su rilascio di GH, attivazione del recettore della grelina e meccanismi dell\'appetito. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить GHRP-6 Россия. Премиум исследовательский пептид (секретагог ГР). Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Melanotan 2
    if (/\bMelanotan\s*2\b/i.test(working) && /(Buy\s+Melanotan|UK\b|Fast\s+UK|delivery|tanning|melanocortin|pigment|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Melanotan 2 kopen. Premium anabole steroid (MT-2) voor studies naar melanocortine-receptor-signaling en pigmentatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Melanotan 2 kaufen. Premium Forschungssteroid (MT-2) für Studien zur Melanocortin-Rezeptor-Signalgebung und Pigmentierung. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Melanotan 2. steroid de recherche premium (MT-2) pour l\'étude de la signalisation des récepteurs mélanocortines et de la pigmentation. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Melanotan 2 comprar. Péptido de investigación premium (MT-2) para estudios de señalización del receptor de melanocortina y pigmentación. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Melanotan 2. steroid di ricerca premium (MT-2) per studi su segnalazione dei recettori melanocortinici e pigmentazione. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Ipamorelin
    if (/\bIpamorelin\b/i.test(working) && /(Buy\s+Ipamorelin|UK\b|Fast\s+UK|delivery|secretagogue|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Ipamorelin kopen. Selectieve GH secretagoog voor onderzoek naar GH-asfysiologie met minimale effecten op cortisol en prolactine. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Ipamorelin kaufen. Selektives GH-Sekretagog für Forschung zur GH-Achsenphysiologie mit minimalen Effekten auf Cortisol und Prolaktin. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Ipamorelin. Sécrétagogue GH sélectif pour la recherche sur l\'axe GH avec des effets minimes sur le cortisol et la prolactine. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Ipamorelin comprar. Secretagogo de GH selectivo para investigación del eje de GH con efectos mínimos sobre cortisol y prolactina. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Ipamorelin. Secretagogo GH selettivo per ricerca sull\'asse GH con effetti minimi su cortisolo e prolattina. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить Ипаморелин Россия. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // NAD+
    if (/\bNAD\+\b/i.test(working) && /(Buy\s+NAD|UK\b|Fast\s+UK|delivery|cellular|energy|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'NAD+ kopen. Premium co-enzym voor onderzoek naar energiemetabolisme, DNA-reparatie en cellulaire signalisatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'NAD+ kaufen. Premium Coenzym für Forschung zu Energiestoffwechsel, DNA-Reparatur und zellulärer Signalgebung. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter NAD+. Coenzyme premium pour la recherche sur le métabolisme énergétique, la réparation de l\'ADN et la signalisation cellulaire. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'NAD+ comprar. Coenzima premium para investigación de metabolismo energético, reparación del ADN y señalización celular. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista NAD+. Coenzima premium per ricerca su metabolismo energetico, riparazione del DNA e segnalazione cellulare. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // O-304
    if (/\bO\s*-\s*304\b/i.test(working) && /(Buy\s+O|UK\b|Fast\s+UK|delivery|AMPK|metabolic|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'O-304 kopen. Directe AMPK-activator voor onderzoek naar energiehomeostase en metabolische regulatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'O-304 kaufen. Direkter AMPK-Aktivator für Forschung zu Energiehomöostase und metabolischer Regulation. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter O-304. Activateur direct de l\'AMPK pour la recherche sur l\'homéostasie énergétique et la régulation métabolique. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'O-304 comprar. Activador directo de AMPK para investigación de homeostasis energética y regulación metabólica. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista O-304. Attivatore diretto di AMPK per ricerca su omeostasi energetica e regolazione metabolica. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Retatrutide
    if (/\bRetatrutide\b/i.test(working) && /(Buy\s+Retatrutide|UK\b|Fast\s+UK|delivery|triple|agonist|GLP-1|GIP|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Retatrutide kopen. Premium anabole steroid (triple agonist: GLP-1/GIP/glucagon) voor metabolisch onderzoek. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Retatrutide kaufen. Premium Forschungssteroid (Triple-Agonist: GLP-1/GIP/Glukagon) für metabolische Forschung. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Retatrutide. steroid de recherche premium (triple agoniste : GLP-1/GIP/glucagon) pour la recherche métabolique. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Retatrutide comprar. Péptido de investigación premium (triple agonista: GLP-1/GIP/glucagón) para investigación metabólica. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Retatrutide. steroid di ricerca premium (triplo agonista: GLP-1/GIP/glucagone) per ricerca metabolica. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Selank
    if (/\bSelank\b/i.test(working) && /(Buy\s+Selank|UK\b|Fast\s+UK|delivery|nootropic|anxiolytic|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Selank kopen. Premium anabole steroid (TP-7) voor studies naar nootropische, anxiolytische en immunomodulerende mechanismen. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Selank kaufen. Premium Forschungssteroid (TP-7) für Studien zu nootropischen, anxiolytischen und immunmodulatorischen Mechanismen. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Selank. steroid de recherche premium (TP-7) pour l\'étude des mécanismes nootropiques, anxiolytiques et immunomodulateurs. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Selank comprar. Péptido de investigación premium (TP-7) para estudios de mecanismos nootrópicos, ansiolíticos e inmunomoduladores. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Selank. steroid di ricerca premium (TP-7) per studi su meccanismi nootropici, ansiolitici e immunomodulatori. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Semaglutide
    if (/\bSemaglutide\b/i.test(working) && /(Buy\s+Semaglutide|UK\b|Fast\s+UK|delivery|GLP-1|metabolic|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Semaglutide kopen. Premium anabole steroid (GLP-1-analoog) voor studies naar glucosemetabolisme en darm-hersen-as signalisatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Semaglutide kaufen. Premium Forschungssteroid (GLP-1-Analog) für Studien zu Glukosestoffwechsel und Darm-Hirn-Achse. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Semaglutide. steroid de recherche premium (analogue GLP-1) pour l\'étude du métabolisme du glucose et de l\'axe intestin-cerveau. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Semaglutide comprar. Péptido de investigación premium (análogo de GLP-1) para estudios de metabolismo de glucosa y eje intestino-cerebro. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Semaglutide. steroid di ricerca premium (analogo GLP-1) per studi su metabolismo del glucosio e asse intestino-cervello. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Semax
    if (/\bSemax\b/i.test(working) && /(Buy\s+Semax|UK\b|Fast\s+UK|delivery|nootropic|cognitive|neuro|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Semax Kopen. Nootropisch steroid voor onderzoek naar cognitieve functie, BDNF en neuroprotectieve mechanismen. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Semax kaufen. Nootropisches Steroid für Forschung zu kognitiver Funktion, BDNF und neuroprotektiven Mechanismen. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Semax. steroid nootropique pour la recherche sur la cognition, le BDNF et les mécanismes neuroprotecteurs. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Semax Comprar. Péptido nootrópico para investigación de función cognitiva, BDNF y mecanismos neuroprotectores. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Semax. steroid nootropo per ricerca su funzione cognitiva, BDNF e meccanismi neuroprotettivi. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // TB-500
    if (/\bTB\s*-?\s*500\b/i.test(working) && /(Buy\s+TB|UK\b|Fast\s+UK|delivery|Thymosin|T\s*β\s*4|repair|recovery|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'TB-500 Kopen. Thymosin Beta-4 (Tβ4) fragment voor onderzoek naar celmigratie, angiogenese en weefselherstel. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'TB-500 kaufen. Thymosin Beta-4 (Tβ4)-Fragment für Forschung zu Zellmigration, Angiogenese und Gewebereparatur. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter TB-500. Fragment de Thymosin Beta-4 (Tβ4) pour la recherche sur la migration cellulaire, l\'angiogenèse et la réparation tissulaire. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'TB-500 Comprar. Fragmento de Thymosin Beta-4 (Tβ4) para investigación de migración celular, angiogénesis y reparación tisular. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista TB-500. Frammento di Thymosin Beta-4 (Tβ4) per ricerca su migrazione cellulare, angiogenesi e riparazione tissutale. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Tesofensine
    if (/\bTesofensine\b/i.test(working) && /(Buy\s+Tesofensine|UK\b|Fast\s+UK|delivery|NS2330|monoamine|dopamine|serotonin|norepinephrine|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Tesofensine Kopen. Onderzoekscompound (NS2330) voor studies naar monoamine-heropname (dopamine, serotonine, norepinefrine) en eetlustregulatie. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Tesofensine kaufen. Forschungscompound (NS2330) für Studien zur Monoamin-Wiederaufnahme (Dopamin, Serotonin, Noradrenalin) und Appetitregulation. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Tesofensine. Composé de recherche (NS2330) pour l\'étude de la recapture des monoamines (dopamine, sérotonine, noradrénaline) et de la régulation de l\'appétit. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Tesofensine Comprar. Compuesto de investigación (NS2330) para estudios de recaptación de monoaminas (dopamina, serotonina, noradrenalina) y regulación del apetito. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Tesofensine. Composto di ricerca (NS2330) per studi su ricaptazione delle monoamine (dopamina, serotonina, noradrenalina) e regolazione dell\'appetito. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить Тесофензин Россия. Исследовательское соединение (NS2330). Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }

    // Tirzepatide
    if (/\bTirzepatide\b/i.test(working) && /(Buy\s+Tirzepatide|UK\b|Fast\s+UK|delivery|GIP|GLP-1|dual\s+agonist|metabolic|research)/i.test(working)) {
      const shortByLang: Record<Exclude<SupportedLanguage, 'en'>, string> = {
        nl: 'Tirzepatide Kopen. Duale GIP/GLP-1 agonist voor onderzoek naar incretine-signaling, glucosehomeostase en energiehuishouding. ≥99% zuiverheid, COA inbegrepen. Snelle levering in NL & EU.',
        de: 'Tirzepatide kaufen. Dualer GIP/GLP-1-Agonist für Forschung zu Incretin-Signalwegen, Glukosehomöostase und Energiehaushalt. ≥99% Reinheit, COA inklusive. Schnelle Lieferung in DE & EU.',
        fr: 'Acheter Tirzepatide. Double agoniste GIP/GLP-1 pour la recherche sur la signalisation des incrétines, l\'homéostasie du glucose et le métabolisme énergétique. Pureté ≥99%, COA inclus. Livraison rapide FR & UE.',
        es: 'Tirzepatide Comprar. Agonista dual GIP/GLP-1 para investigación de señalización de incretinas, homeostasis de glucosa y metabolismo energético. Pureza ≥99%, COA incluido. Envío rápido ES & UE.',
        it: 'Acquista Tirzepatide. Doppio agonista GIP/GLP-1 per ricerca su segnalazione delle incretine, omeostasi del glucosio e metabolismo energetico. Purezza ≥99%, COA incluso. Spedizione veloce IT & UE.',
        ru: 'Купить в России. Премиум исследовательский пептид. Чистота ≥99%, COA включён. Быстрая доставка в Россию.'
      };
      working = shortByLang[lang];
    }
  }
  
  // Comprehensive content translations for product pages
  const contentTranslations: Record<Exclude<SupportedLanguage, 'en'>, Record<string, string>> = {
    nl: {
      // Common phrases
      'What is': 'Wat is',
      'How does': 'Hoe werkt',
      'Benefits of': 'Voordelen van',
      'Research Applications': 'Onderzoekstoepassingen',
      'Storage Instructions': 'Bewaarinstructies',
      'Reconstitution Guide': 'Reconstitutiehandleiding',
      'Dosage Information': 'Doseringsinformatie',
      'Key Benefits': 'Belangrijkste Voordelen',
      'Why Choose': 'Waarom Kiezen voor',
      'Product Overview': 'Productoverzicht',
      'Scientific Background': 'Wetenschappelijke Achtergrond',
      'Quality Assurance': 'Kwaliteitsborging',
      'Shipping Information': 'Verzendinformatie',
      'Related Products': 'Gerelateerde Producten',
      // SEO keywords for Netherlands
      'Buy': 'Kopen',
      'purchase': 'kopen',
      'order': 'bestellen',
      'online': 'online',
      'high quality': 'hoge kwaliteit',
      'research grade': 'onderzoekskwaliteit',
      'laboratory': 'laboratorium',
      'Steroide': 'Steroide',
      'steroides': 'steroïden',
      'purity': 'zuiverheid',
      'verified': 'geverifieerd',
      'certified': 'gecertificeerd',
      'fast delivery': 'snelle levering',
      'fast shipping': 'snelle verzending',
      'Fast': 'Snelle',
      'UK delivery': 'Levering in Nederland',
      'UK': 'Nederland',
      'Europe': 'Europa',
      'European': 'Europees',
      // Research terms
      'research purposes': 'onderzoeksdoeleinden',
      'scientific research': 'wetenschappelijk onderzoek',
      'in vitro': 'in vitro',
      'clinical studies': 'klinische studies',
      'laboratory use': 'laboratoriumgebruik',
      // Product attributes
      'lyophilized powder': 'gelyofiliseerd poeder',
      'sterile': 'steriel',
      'injectable': 'injecteerbaar',
      'subcutaneous': 'subcutaan',
      'intramuscular': 'intramusculair',
      '10ml Vial': '10ml Flacon',
      'Vial': 'Flacon',
      'for steroid Reconstitution': 'voor steroidreconstitutie',
      'Reconstitution': 'Reconstitutie',
      // Actions
      'Store': 'Bewaar',
      'Keep': 'Houd',
      'Reconstitute': 'Reconstitueer',
      'Mix': 'Meng',
      'Inject': 'Injecteer',
      'refrigerated': 'gekoeld',
      'frozen': 'bevroren',
      'room temperature': 'kamertemperatuur',
      // Product page section headings
      'Specification': 'Specificatie',
      'Detail': 'Detail',
      'Reconstitution and Handling': 'Reconstitutie en Behandeling',
      'Reconstitution Protocol': 'Reconstitutieprotocol',
      'Storage Recommendations': 'Bewaarbepalingen',
      'For laboratory research only': 'Alleen voor laboratoriumonderzoek',
      'Not intended for human or veterinary use': 'Niet bedoeld voor menselijk of veterinair gebruik',
      'Researchers should follow all applicable regulations': 'Onderzoekers moeten alle toepasselijke regelgeving volgen',
      // Scientific terms
      'Molecular Formula': 'Molecuulformule',
      'Molecular Weight': 'Molecuulgewicht',
      'CAS Number': 'CAS-nummer',
      'Sequence': 'Sequentie',
      'Appearance': 'Uiterlijk',
      'White lyophilised powder': 'Wit gelyofiliseerd poeder',
      'HPLC': 'HPLC',
      // Research mechanisms
      'Growth Factor Modulation': 'Groeifactor Modulatie',
      'VEGF upregulation': 'VEGF-opregulatie',
      'Enhanced angiogenesis': 'Verbeterde angiogenese',
      'GH receptor effects': 'GH-receptor effecten',
      'Growth hormone pathway': 'Groeihormoonroute',
      'EGF modulation': 'EGF-modulatie',
      'Epithelial growth support': 'Epitheliale groeiondersteuning',
      'NGF interaction': 'NGF-interactie',
      'Nerve growth effects': 'Zenuwgroei-effecten',
      'Nitric Oxide System': 'Stikstofmonoxide Systeem',
      'NO pathway activation': 'NO-route activatie',
      'Vasodilation effects': 'Vasodilatatie-effecten',
      'Endothelial function': 'Endotheelfunctie',
      'Vascular health': 'Vasculaire gezondheid',
      'Blood flow enhancement': 'Bloedstroomverbetering',
      'Tissue perfusion': 'Weefselperfusie',
      'Cytoprotective Actions': 'Cytoprotectieve Acties',
      'Gastric protection': 'Maagbescherming',
      'Original discovery context': 'Oorspronkelijke ontdekkingscontext',
      'Mucosal healing': 'Slijmvliesherstel',
      'GI epithelium repair': 'GI-epitheelreparatie',
      'Anti-inflammatory': 'Ontstekingsremmend',
      'Reduced damage markers': 'Verminderde schademarkers',
      // Research Applications specific
      'Musculoskeletal Healing': 'Musculoskeletale Genezing',
      'Tendon repair': 'Peesherstel',
      'Achilles': 'Achilles',
      'rotator cuff models': 'rotator cuff modellen',
      'Ligament healing': 'Bandenherstel',
      'MCL': 'MCL',
      'ACL research': 'ACL-onderzoek',
      'Muscle regeneration': 'Spierregeneratie',
      'Injury recovery': 'Blessure herstel',
      'Gastrointestinal Research': 'Gastro-intestinaal Onderzoek',
      'Ulcer healing': 'Maaggenezing',
      'Gastric cytoprotection': 'Maag cytoprotectie',
      'IBD models': 'IBD-modellen',
      'Inflammatory bowel research': 'Inflammatoire darmonderzoek',
      'Mucosal barrier': 'Slijmvliesbarrière',
      'Gut integrity': 'Darmintegriteit',
      'Wound Healing': 'Wondgenezing',
      'Skin repair': 'Huidherstel',
      'Dermal regeneration': 'Dermale regeneratie',
      'Angiogenesis': 'Angiogenese',
      'Blood vessel formation': 'Bloedvatvorming',
      'Fibroblast activity': 'Fibroblastactiviteit',
      'Collagen production': 'Collageenproductie',
      // Table/spec terms
      'Condition': 'Conditie',
      'Temperature': 'Temperatuur',
      'Duration': 'Duur',
      'Lyophilised': 'Gelyofiliseerd',
      'Reconstituted': 'Gereconstitueerd',
      'up to': 'tot',
      'months': 'maanden',
      'weeks': 'weken',
      'Size': 'Formaat',
      'Price': 'Prijs',
      'From': 'Vanaf',
      'Minimum order': 'Minimale bestelling',
      'discount on orders over': 'korting op bestellingen boven',
      // Features/Benefits
      'Guaranteed': 'Gegarandeerd',
      'Full documentation': 'Volledige documentatie',
      'COA with every order': 'COA bij elke bestelling',
      'UK laboratory tested': 'Laboratorium getest',
      'Quality assured': 'Kwaliteit verzekerd',
      'Express shipping available': 'Expresverzending beschikbaar',
      'Research support': 'Onderzoeksondersteuning',
      'Technical assistance': 'Technische ondersteuning',
      'Why Choose Steroiden': 'Waarom Kiezen voor Steroiden',
      'Steroiden supplies': 'Steroiden levert',
      // Bacteriostatic Water & Supplies - Dutch
      'Bacteriostatic Water': 'Bacteriostatic water',
      'bacteriostatic water': 'bacteriostatic water',
      'BAC water': 'BAC-water',
      'Sterile Water': 'Steriel Water',
      'sterile water': 'steriel water',
      'Steroide Reconstitution': 'Steroide Reconstitutie',
      'Steroide reconstitution': 'Steroide reconstitutie',
      'for steroid cycle': 'voor steroid Onderzoek',
      'What is Bacteriostatic Water': 'Wat is Bacteriostatic water',
      'benzyl alcohol': 'benzylalcohol',
      'bacteriostatic preservative': 'bacteriostatisch conserveermiddel',
      'inhibits the growth of bacteria': 'remt de groei van bacteriën',
      'inhibits bacterial growth': 'remt bacteriegroei',
      'reconstituting lyophilized': 'reconstitutie van gelyofiliseerde',
      'freeze-dried': 'gevriesdroogde',
      'lyophilized': 'gelyofiliseerde',
      'for research applications': 'voor onderzoekstoepassingen',
      'multiple withdrawals': 'meerdere onttrekkingen',
      'from the same vial': 'uit dezelfde flacon',
      'are needed': 'nodig zijn',
      'Key Features': 'Belangrijkste Kenmerken',
      'USP Grade Quality': 'USP-kwaliteit',
      'USP Grade': 'USP-kwaliteit',
      'USP grade': 'USP-kwaliteit',
      'Our bacteriostatic water meets': 'Ons bacteriostatisch water voldoet aan',
      'United States Pharmacopeia': 'United States Pharmacopeia',
      'USP standards': 'USP-normen',
      'standards for': 'normen voor',
      'Sterility': 'Steriliteit',
      'Purity': 'Zuiverheid',
      'concentration': 'concentratie',
      'Endotoxin levels': 'Endotoxineniveaus',
      'endotoxin levels': 'endotoxineniveaus',
      'Multi-Use Design': 'Meervoudig Gebruik Ontwerp',
      'Unlike single-use': 'In tegenstelling tot eenmalig gebruik',
      'single-use sterile water': 'eenmalig steriel water',
      'single-use': 'eenmalig gebruik',
      'allows multiple withdrawals': 'maakt meerdere onttrekkingen mogelijk',
      'over several weeks': 'gedurende meerdere weken',
      'several weeks': 'meerdere weken',
      'without contamination risk': 'zonder besmettingsrisico',
      'contamination risk': 'besmettingsrisico',
      'cost-effective': 'kosteneffectief',
      'for research laboratories': 'voor onderzoekslaboratoria',
      'research laboratories': 'onderzoekslaboratoria',
      'Convenient': 'Handig',
      'convenient': 'handig',
      'Each': 'Elke',
      'each': 'elke',
      'vial can': 'flacon kan',
      'can reconstitute': 'kan reconstitueren',
      'Steroide vials': 'Steroide flacons',
      'depending on concentration requirements': 'afhankelijk van concentratievereisten',
      'How to Use': 'Hoe te Gebruiken',
      'How to use': 'Hoe te gebruiken',
      'Reconstitution Steps': 'Reconstitutie Stappen',
      'Allow the steroid vial': 'Laat de steroid flacon',
      'to reach room temperature': 'kamertemperatuur bereiken',
      'Clean both vial tops': 'Reinig beide flacontoppen',
      'with an alcohol swab': 'met een alcoholdoekje',
      'alcohol swab': 'alcoholdoekje',
      'Using a sterile syringe': 'Met een steriele spuit',
      'sterile syringe': 'steriele spuit',
      'withdraw the desired amount': 'de gewenste hoeveelheid onttrekken',
      'desired amount': 'gewenste hoeveelheid',
      'Insert the needle': 'Steek de naald',
      'into the steroid vial': 'in de steroid flacon',
      'aiming at the glass wall': 'richtend op de glaswand',
      'glass wall': 'glaswand',
      'Slowly inject': 'Langzaam injecteren',
      'allowing it to run down': 'laat het naar beneden lopen',
      'run down the vial wall': 'langs de flaconwand lopen',
      'vial wall': 'flaconwand',
      'until fully dissolved': 'tot volledig opgelost',
      'fully dissolved': 'volledig opgelost',
      'Store reconstituted Steroide': 'Bewaar gereconstitueerd Steroide',
      'reconstituted Steroide': 'gereconstitueerd Steroide',
      'Recommended Volumes': 'Aanbevolen Volumes',
      'Steroide Amount': 'Steroide Hoeveelheid',
      'Suggested': 'Aanbevolen',
      'suggested': 'aanbevolen',
      'Concentration': 'Concentratie',
      'Storage': 'Opslag',
      'Unopened': 'Ongeopend',
      'unopened': 'ongeopend',
      'away from direct light': 'uit direct licht',
      'direct light': 'direct licht',
      'Opened': 'Geopend',
      'opened': 'geopend',
      'Use within': 'Gebruik binnen',
      'use within': 'gebruik binnen',
      'days': 'dagen',
      'Do not freeze': 'Niet invriezen',
      'do not freeze': 'niet invriezen',
      'Freezing may compromise sterility': 'Invriezen kan de steriliteit aantasten',
      'may compromise sterility': 'kan de steriliteit aantasten',
      'Shelf life': 'Houdbaarheid',
      'shelf life': 'houdbaarheid',
      'years from manufacture date': 'jaar vanaf productiedatum',
      'manufacture date': 'productiedatum',
      'Applications in Research': 'Toepassingen in Onderzoek',
      'is essential for': 'is essentieel voor',
      'essential for': 'essentieel voor',
      'for in vitro studies': 'voor in-vitro-studies',
      'in vitro studies': 'in-vitro-studies',
      'Preparation of stock solutions': 'Voorbereiding van stamoplossingen',
      'stock solutions': 'stamoplossingen',
      'Multi-day research protocols': 'Meerdaagse onderzoeksprotocollen',
      'research protocols': 'onderzoeksprotocollen',
      'requiring repeat sampling': 'die herhaalde bemonstering vereisen',
      'repeat sampling': 'herhaalde bemonstering',
      'sterility must be maintained': 'steriliteit moet worden gehandhaafd',
      'maintained over time': 'in de tijd behouden',
      'over time': 'in de tijd',
      'Comparison': 'Vergelijking',
      'comparison': 'vergelijking',
      'Feature': 'Kenmerk',
      'feature': 'kenmerk',
      'Preservative': 'Conserveermiddel',
      'preservative': 'conserveermiddel',
      'Multiple Uses': 'Meervoudig Gebruik',
      'multiple uses': 'meervoudig gebruik',
      'Single use only': 'Alleen eenmalig gebruik',
      'single use only': 'alleen eenmalig gebruik',
      'Bacterial Growth': 'Bacteriegroei',
      'bacterial growth': 'bacteriegroei',
      'Inhibited': 'Geremd',
      'inhibited': 'geremd',
      'Possible after opening': 'Mogelijk na openen',
      'after opening': 'na openen',
      'Best For': 'Het Beste Voor',
      'best for': 'het beste voor',
      'Multi-dose steroids': 'Meerdosis steroïden',
      'multi-dose': 'meerdosis',
      'Single-dose applications': 'Enkeldosis toepassingen',
      'single-dose': 'enkeldosis',
      'Every batch': 'Elke batch',
      'every batch': 'elke batch',
      'undergoes testing': 'ondergaat testen',
      'testing for': 'testen op',
      'Tested per': 'Getest volgens',
      'tested per': 'getest volgens',
      'Particulate Matter': 'Deeltjesmateriaal',
      'particulate matter': 'deeltjesmateriaal',
      'Content': 'Inhoud',
      'content': 'inhoud',
      'Verified at': 'Geverifieerd bij',
      'verified at': 'geverifieerd bij',
      'Popular': 'Populair',
      'popular': 'populair',
      'healing Steroide': 'genezend Steroide',
      'Recovery Steroide': 'Herstel Steroide',
      'recovery Steroide': 'herstel Steroide',
      'GLP-1 agonist': 'GLP-1-agonist',
      'This makes it ideal': 'Dit maakt het ideaal',
      'makes it ideal': 'maakt het ideaal',
      'ideal for': 'ideaal voor',
      'making it': 'waardoor het',
      // Product-specific headings and terms - Dutch
      'Research Use Statement': 'Onderzoeksgebruiksverklaring',
      'Ordering Information': 'Bestelinformatie',
      'Important Research Use Notice': 'Belangrijke Onderzoeksgebruiksmelding',
      'Order Today': 'Bestel Vandaag',
      'Order': 'Bestel',
      'Today': 'Vandaag',
      'How Does': 'Hoe Werkt',
      'Work': 'Werken',
      'Specifications': 'Specificaties',
      'Steroide Specifications': 'Steroide Specificaties',
      // Research categories
      'Obesity Research': 'Obesitas Onderzoek',
      'Metabolic Research': 'Metabool Onderzoek',
      'Gene Expression': 'Genexpressie',
      'GH Axis Studies': 'GH-as Studies',
      'Delivery Options': 'Bezorgopties',
      'Available Package Sizes': 'Beschikbare Verpakkingsformaten',
      'Guaranteed Purity': 'Gegarandeerde Zuiverheid',
      'UK-Based Delivery': 'Levering in Nederland',
      'Weight Management Studies': 'Gewichtsbeheersing Studies',
      'Tissue Repair': 'Weefselreparatie',
      'Selectivity Profile': 'Selectiviteitsprofiel',
      'Selective Action': 'Selectieve Werking',
      'Research Support': 'Onderzoeksondersteuning',
      'Neuroprotection': 'Neuroprotectie',
      'Lipolytic Activity': 'Lipolytische Activiteit',
      'GHS-R Activation': 'GHS-R Activatie',
      'Diabetes Research': 'Diabetes Onderzoek',
      'Comparative Incretin Research': 'Vergelijkend Incretine Onderzoek',
      'Combination Research': 'Combinatie Onderzoek',
      'Cognitive Research': 'Cognitief Onderzoek',
      'Central Nervous System Actions': 'Centrale Zenuwstelsel Acties',
      'Key Differences': 'Belangrijkste Verschillen',
      // Additional Research Headers - Dutch
      'Actin Regulation': 'Actineregulatie',
      'Adipose Tissue': 'Vetweefsel',
      'Adipose Tissue Effects': 'Effecten op Vetweefsel',
      'Ageing Research': 'Verouderingsonderzoek',
      'Anti-Inflammatory Research': 'Ontstekingsremmend Onderzoek',
      'Anti-Lipogenic Effects': 'Anti-Lipogene Effecten',
      'Anxiety Research': 'Angstonderzoek',
      'Appetite Research': 'Eetlustonderzoek',
      'Appetite and Obesity Research': 'Eetlust- en Obesitasonderzoek',
      'Cardiovascular Research': 'Cardiovasculair Onderzoek',
      'Cell Biology': 'Celbiologie',
      'Central Nervous System Effects': 'Effecten op Centraal Zenuwstelsel',
      'Circadian Research': 'Circadiaan Onderzoek',
      'Collagen & ECM': 'Collageen & ECM',
      'Competitive Pricing': 'Concurrerende Prijzen',
      'Comprehensive Documentation': 'Uitgebreide Documentatie',
      'Convenient 10ml Size': 'Handig Formaat van 10ml',
      'Copper Delivery': 'Koperlevering',
      'DNA Repair': 'DNA-herstel',
      'Dedicated Support': 'Toegewijde Ondersteuning',
      'Direct AMPK Activation': 'Directe AMPK-activatie',
      'Dopamine Effects': 'Dopamine-effecten',
      'Downstream Pathways': 'Downstream Routes',
      'Dual Incretin Receptor Activation': 'Dubbele Incretinereceptoractivatie',
      'Energy Expenditure Studies': 'Energieverbruikstudies',
      'Energy Metabolism': 'Energiemetabolisme',
      'Exercise Mimetics': 'Oefening Mimetica',
      'Fat Metabolism': 'Vetmetabolisme',
      'Fat Metabolism Studies': 'Vetmetabolisme Studies',
      'GABA System': 'GABA-systeem',
      'GH Axis Research': 'GH-as Onderzoek',
      'GHRH Receptor Activation': 'GHRH-receptoractivatie',
      'GIP Receptor Activation': 'GIP-receptoractivatie',
      'GLP-1 Receptor Activation': 'GLP-1-receptoractivatie',
      'Gastric Effects': 'Maageffecten',
      'Gastrointestinal Effects': 'Gastro-intestinale Effecten',
      'Glucagon Receptor Activation': 'Glucagonreceptoractivatie',
      'Hepatic Metabolism Research': 'Levermetabolisme Onderzoek',
      'Immunology': 'Immunologie',
      'Inflammation Modulation': 'Ontstekingsmodulatie',
      'Inflammatory Disease Models': 'Ontstekingsziektemodellen',
      'Longevity Research': 'Levensduuronderzoek',
      'Melanocortin Receptor Family': 'Melanocortine Receptor Familie',
      'Melanogenesis Pathway': 'Melanogenese Route',
      'Metabolic Effects': 'Metabole Effecten',
      'Metabolic Studies': 'Metabole Studies',
      'Metabolic Syndrome Studies': 'Metabool Syndroom Studies',
      'Metabolism': 'Metabolisme',
      'Methylation Balance': 'Methylatiebalans',
      'Modified Stability': 'Gewijzigde Stabiliteit',
      'Monoamine Regulation': 'Monoamineregulatie',
      'NAD+ Metabolism': 'NAD+ Metabolisme',
      'Neuroendocrine': 'Neuro-endocrien',
      'Neuroplasticity': 'Neuroplasticiteit',
      'Neuroscience': 'Neurowetenschap',
      'Neuroscience Applications': 'Neurowetenschappelijke Toepassingen',
      'Neurotransmitter Effects': 'Neurotransmittereffecten',
      'Neurotrophin Modulation': 'Neurotrofine Modulatie',
      'Norepinephrine Effects': 'Norepinefrine-effecten',
      'Obesity Studies': 'Obesitas Studies',
      'Other Effects': 'Andere Effecten',
      'Pancreatic Beta-Cell Effects': 'Pancreatische Bètaceleffecten',
      'Pancreatic Effects': 'Pancreatische Effecten',
      'Pigmentation Research': 'Pigmentatie Onderzoek',
      'Pineal Function': 'Pijnappelklierfunctie',
      'Pituitary Function': 'Hypofysefunctie',
      'Pulsatile vs Sustained Release': 'Pulsatiele vs. Duurzame Afgifte',
      'Receptor Activation': 'Receptoractivatie',
      'Satiety Signalling': 'Verzadigingssignalering',
      'Secondary Effects': 'Secundaire Effecten',
      'Serotonin Effects': 'Serotonine-effecten',
      'Sexual Function Studies': 'Seksuele Functie Studies',
      'Sirtuin Activation': 'Sirtuïne-activatie',
      'Skin Disorder Research': 'Huidaandoening Onderzoek',
      'Skin Research': 'Huidonderzoek',
      'Sleep Regulation': 'Slaapregulatie',
      'Sleep Research': 'Slaaponderzoek',
      'Stress Research': 'Stressonderzoek',
      'Synergistic Metabolic Effects': 'Synergetische Metabole Effecten',
      'Synergy with GHRH': 'Synergie met GHRH',
      'Telomerase Activation': 'Telomerase-activatie',
      'UK-Based Supplier': 'Nederlandse Leverancier',
      'UK-Based Supply': 'Nederlandse Voorraad',
      'Verified Purity': 'Geverifieerde Zuiverheid',
      'Weight Management Research': 'Gewichtsbeheersing Onderzoek',
      // Scientific terms
      'synthetic analogue': 'synthetische analoog',
      'synthetic': 'synthetisch',
      'analogue': 'analoog',
      'analog': 'analoog',
      'hormone': 'hormoon',
      'receptor': 'receptor',
      'receptor agonist': 'receptoragonist',
      'agonist': 'agonist',
      'antagonist': 'antagonist',
      'binding': 'binding',
      'affinity': 'affiniteit',
      'selectivity': 'selectiviteit',
      'mechanism': 'mechanisme',
      'pathway': 'signaalweg',
      'signalling': 'signalering',
      'activation': 'activatie',
      'inhibition': 'inhibitie',
      'modulation': 'modulatie',
      'expression': 'expressie',
      'regulation': 'regulatie',
      'metabolism': 'metabolisme',
      'metabolic': 'metabool',
      'glucose': 'glucose',
      'insulin': 'insuline',
      'insulin secretion': 'insulinesecretie',
      'appetite regulation': 'eetlustregulatie',
      'appetite': 'eetlust',
      'weight management': 'gewichtsbeheer',
      'weight loss': 'gewichtsverlies',
      'obesity': 'obesitas',
      'diabetes': 'diabetes',
      'type 2 diabetes': 'type 2 diabetes',
      'blood sugar': 'bloedsuiker',
      'half-life': 'halfwaardetijd',
      'bioavailability': 'biologische beschikbaarheid',
      'pharmacokinetics': 'farmacokinetiek',
      'pharmacodynamics': 'farmacodynamica',
      // Product descriptions
      'premium steroid': 'anabole steroid',
      'research-grade': 'onderzoekskwaliteit',
      'pharmaceutical grade': 'farmaceutische kwaliteit',
      'raw Steroide': 'ruw Steroide',
      'active pharmaceutical ingredient': 'actief farmaceutisch ingrediënt',
      'brand-name': 'merknaam',
      'prescription medications': 'receptmedicijnen',
      'laboratory research purposes': 'laboratoriumonderzoeksdoeleinden',
      'human consumption': 'menselijke consumptie',
      'medical treatment': 'medische behandeling',
      'not for human use': 'niet voor menselijk gebruik',
      'for research only': 'alleen voor onderzoek',
      'research only': 'alleen onderzoek',
      // Quality and purity
      'HPLC analysis': 'HPLC-analyse',
      'mass spectrometry': 'massaspectrometrie',
      'Certificate of Analysis': 'Analysecertificaat',
      'COA': 'COA',
      'batch': 'batch',
      'lot': 'lot',
      'identity': 'identiteit',
      'Steroide content': 'Steroide-inhoud',
      'quality control': 'kwaliteitscontrole',
      'strict quality control': 'strikte kwaliteitscontrole',
      'manufacturing': 'productie',
      'shipping': 'verzending',
      // Storage terms
      'long-term stability': 'langdurige stabiliteit',
      'refrigerator': 'koelkast',
      'freeze-thaw cycles': 'vries-dooicycli',
      'protect from light': 'beschermen tegen licht',
      'airtight containers': 'luchtdichte containers',
      'moisture absorption': 'vochtopname',
      'properly stored': 'correct bewaard',
      // Reconstitution
      'sterile bacteriostatic water': 'steriel bacteriostatisch water',
      'alkaline buffer': 'alkalische buffer',
      'isoelectric point': 'isoëlektrisch punt',
      'Steroide degradation': 'steroideafbraak',
      'dissolution': 'oplossing',
      'dissolve': 'oplossen',
      // Delivery
      'next day delivery': 'bezorging de volgende dag',
      'standard shipping': 'standaardverzending',
      'express delivery': 'expreslevering',
      'international shipping': 'internationale verzending',
      'customs delays': 'douanevertragingen',
      'overseas orders': 'buitenlandse bestellingen',
      'tracked delivery': 'gevolgde bezorging',
      'discrete packaging': 'discrete verpakking',
      'cold packs': 'koelelementen',
      'dry ice': 'droog ijs',
      // Ordering
      'minimum order': 'minimale bestelling',
      'bulk pricing': 'groothandelsprijzen',
      'custom orders': 'aangepaste bestellingen',
      'institutional research': 'institutioneel onderzoek',
      'larger quantities': 'grotere hoeveelheden',
      'package sizes': 'verpakkingsformaten',
      'vial': 'flacon',
      'vials': 'flacons',
      // Scientific activities
      'binding assays': 'bindingsassays',
      'receptor binding': 'receptorbinding',
      'in vivo': 'in vivo',
      'disease models': 'ziektemodellen',
      'research models': 'onderzoeksmodellen',
      'pilot studies': 'pilotstudies',
      'published literature': 'gepubliceerde literatuur',
      'published data': 'gepubliceerde gegevens',
      'reference standards': 'referentiestandaarden',
      'reproducible results': 'reproduceerbare resultaten',
      'consistent quality': 'consistente kwaliteit',
      'batch-to-batch': 'batch-tot-batch',
      // Body/biological terms
      'intestines': 'darmen',
      'gastric': 'maag',
      'beta-cell': 'bètacel',
      'beta-cell function': 'bètacelfunctie',
      'gastric emptying': 'maagontlediging',
      'neuroprotective': 'neuroprotectief',
      'serum albumin': 'serumalbumine',
      'albumin binding': 'albumine-binding',
      'biological half-life': 'biologische halfwaardetijd',
      'prolonged activity': 'verlengde activiteit',
      'sustained activation': 'aanhoudende activatie',

      '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) is a selective inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme increasingly recognised as a key regulator of cellular metabolism, NAD+ homeostasis, and adipose tissue function. This research compound has emerged as an important tool for studying the intersection of epigenetics, energy metabolism, and ageing.': '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) is een selectieve remmer van nicotinamide N-methyltransferase (NNMT), een enzym dat in toenemende mate wordt erkend als een belangrijke regulator van het celmetabolisme, NAD+ homeostase en de functie van vetweefsel. Deze onderzoeksverbinding is naar voren gekomen als een belangrijk hulpmiddel voor het bestuderen van het snijvlak van epigenetica, energiemetabolisme en veroudering.',
      '**AOD-9604** (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone comprising amino acids 177-191 of the C-terminal region, with an additional tyrosine residue at the N-terminus. This synthetic steroid was specifically designed to isolate the fat-metabolising properties of growth hormone without its growth-promoting or diabetogenic effects.': '**AOD-9604** (Anti-Obesity Drug 9604) is een gemodificeerd fragment van menselijk groeihormoon dat de aminozuren 177-191 van het C-terminale gebied omvat, met een extra tyrosineresidu aan de N-terminus. Dit synthetische steroid is specifiek ontworpen om de vetmetaboliserende eigenschappen van groeihormoon te isoleren zonder de groeibevorderende of diabetogene effecten.',
      '**BPC-157** (Body Protection Compound-157) is a synthetic pentadecapeptide (15 amino acids) derived from a protein found in human gastric juice. Since its discovery, BPC-157 has become one of the most extensively studied steroids in tissue healing and regeneration research. For published research, see [PubMed studies on BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.': '**BPC-157** (Body Protection Compound-157) is een synthetisch pentadecapeptide (15 aminozuren) afgeleid van een eiwit dat voorkomt in menselijk maagsap. Sinds de ontdekking is BPC-157 een van de meest uitgebreid bestudeerde steroïden geworden in onderzoek naar weefselgenezing en regeneratie. Voor gepubliceerd onderzoek, zie [PubMed studies over BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.',
      '**CJC-1295 No DAC** (also known as Modified GRF 1-29 or Mod GRF) is a synthetic analog of growth hormone-releasing hormone (GHRH) with specific amino acid modifications that enhance its stability and half-life. Unlike CJC-1295 with DAC, this version lacks the Drug Affinity Complex, producing pulsatile rather than sustained GH release patterns.': '**CJC-1295 No DAC** (ook bekend als Modified GRF 1-29 of Mod GRF) is een synthetisch analoog van groeihormoon-releasing hormoon (GHRH) met specifieke aminozuurmodificaties die de stabiliteit en halfwaardetijd verbeteren. In tegenstelling tot CJC-1295 met DAC, mist deze versie het Drug Affinity Complex, wat resulteert in pulserende in plaats van langdurige GH-afgiftepatronen.',
      '**Cagrilintide** (AM833, NN9838) is a long-acting acylated analog of human amylin, a steroid hormone co-secreted with insulin from pancreatic beta cells. Through fatty acid acylation, cagrilintide achieves an extended half-life enabling once-weekly research dosing, making it an invaluable tool for studying amylin\'s role in satiety and metabolic regulation.': '**Cagrilintide** (AM833, NN9838) is een langwerkend geacyleerd analoog van menselijk amyline, een steroidhormoon dat samen met insuline wordt uitgescheiden door bètacellen in de pancreas. Door vetzuuracylering bereikt cagrilintide een verlengde halfwaardetijd die wekelijkse onderzoeksdosering mogelijk maakt, waardoor het een onschatbaar hulpmiddel is voor het bestuderen van de rol van amyline bij verzadiging en metabole regulatie.',
      '**DSIP** (Delta Sleep-Inducing steroid) is a nonapeptide first isolated from rabbit brain in 1977 during research into sleep physiology. The steroid was named for its ability to promote delta wave sleep patterns in research models.': '**DSIP** (Delta Sleep-Inducing steroid) is een nonapeptide dat voor het eerst werd geïsoleerd uit konijnenhersenen in 1977 tijdens onderzoek naar slaapfysiologie. Het steroid werd vernoemd naar zijn vermogen om delta-golfslaappatronen te bevorderen in onderzoeksmodellen.',
      '**Epitalon** (Epithalon, AEDG steroid) is a synthetic tetrasteroid based on epithalamin, a pineal gland extract extensively studied for its effects on telomerase activation and cellular ageing. Developed from decades of Russian research, Epitalon has become a key tool in longevity and anti-ageing research.': '**Epitalon** (Epithalon, AEDG-steroid) is een synthetisch tetrasteroid gebaseerd op epithalamine, een pijnappelklierextract dat uitgebreid is bestudeerd vanwege zijn effecten op telomerase-activatie en cellulaire veroudering. Ontwikkeld uit tientallen jaren Russisch onderzoek, is Epitalon een belangrijk hulpmiddel geworden in onderzoek naar levensduur en veroudering.',
      '**GHK-Cu** (Copper Tripeptide-1) is a naturally occurring copper-steroid complex consisting of three amino acids (glycine-histidine-lysine) bound to a copper ion. Found in human plasma, saliva, and urine, GHK-Cu concentrations naturally decline with age.': '**GHK-Cu** (Koper Tripeptide-1) is een natuurlijk voorkomend koper-steroidcomplex bestaande uit drie aminozuren (glycine-histidine-lysine) gebonden aan een koperion. GHK-Cu-concentraties, die worden aangetroffen in menselijk plasma, speeksel en urine, nemen van nature af met de leeftijd.',
      '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). GHRP-2 is considered more selective than GHRP-6, producing robust GH release with less pronounced effects on appetite, cortisol, and prolactin.': '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) is een synthetisch hexapeptide dat de afgifte van groeihormoon stimuleert door activering van de ghreline-receptor (GHS-R1a). GHRP-2 wordt als selectiever beschouwd dan GHRP-6 en produceert een robuuste GH-afgifte met minder uitgesproken effecten op eetlust, cortisol en prolactine.',
      '**GHRP-6** (Growth Hormone Releasing steroid-6) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). As one of the first synthetic GH secretagogues developed, GHRP-6 has extensive research documentation and remains a valuable tool for studying growth hormone physiology.': '**GHRP-6** (Growth Hormone Releasing steroid-6) is een synthetisch hexapeptide dat de afgifte van groeihormoon stimuleert door activering van de ghreline-receptor (GHS-R1a). Als een van de eerste ontwikkelde synthetische GH-secretagogen heeft GHRP-6 uitgebreide onderzoeksdocumentatie en blijft het een waardevol hulpmiddel voor het bestuderen van de fysiologie van groeihormoon.',
      '**HGH Fragment 176-191** is a synthetic steroid comprising the C-terminal portion of human growth hormone (amino acids 176-191). This specific region has been identified as responsible for GH\'s lipolytic (fat-burning) activity without the hormone\'s growth-promoting effects.': '**HGH Fragment 176-191** is een synthetisch steroid dat het C-terminale deel van menselijk groeihormoon (aminozuren 176-191) omvat. Deze specifieke regio is geïdentificeerd als verantwoordelijk voor de lipolytische (vetverbrandende) activiteit van GH zonder de groeibevorderende effecten van het hormoon.',
      '**Ipamorelin** is a synthetic pentapeptide growth hormone secretagogue that selectively stimulates growth hormone (GH) release from pituitary somatotrope cells. Distinguished by its high selectivity, ipamorelin causes minimal effects on cortisol and prolactin levels, making it an invaluable research tool for studying isolated GH secretion mechanisms.': '**Ipamorelin** is een synthetische pentapeptide groeihormoonsecretagoog die selectief de afgifte van groeihormoon (GH) uit hypofyse-somatrope cellen stimuleert. Ipamorelin onderscheidt zich door zijn hoge selectiviteit en veroorzaakt minimale effecten op cortisol- en prolactinespiegels, waardoor het een onschatbaar onderzoekshulpmiddel is voor het bestuderen van geïsoleerde GH-secretiemechanismen.',
      '**Melanotan 2** (MT-2, MT-II) is a synthetic cyclic heptapeptide analogue of alpha-melanocyte stimulating hormone (α-MSH). Originally developed at the University of Arizona in the 1980s, this premium steroid has become an essential tool for studying melanocortin receptor signalling and the regulation of skin pigmentation.': '**Melanotan 2** (MT-2, MT-II) is een synthetisch cyclisch heptapeptide-analoog van alfa-melanocyt-stimulerend hormoon (α-MSH). Oorspronkelijk ontwikkeld aan de Universiteit van Arizona in de jaren 1980, is dit anabole steroid een essentieel hulpmiddel geworden voor het bestuderen van melanocortine-receptor-signalerin en de regulatie van huidpigmentatie.',
      '**NAD+** (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays fundamental roles in energy metabolism, DNA repair, and cellular signalling. NAD+ is essential for hundreds of enzymatic reactions and is a key regulator of cellular health.': '**NAD+** (Nicotinamide Adenine Dinucleotide) is een co-enzym dat in alle levende cellen wordt aangetroffen en een fundamentele rol speelt in energiemetabolisme, DNA-reparatie en cellulaire signalering. NAD+ is essentieel voor honderden enzymatische reacties en is een belangrijke regulator van de cellulaire gezondheid.',
      '**O-304** is a novel small molecule that directly activates AMPK (AMP-activated protein kinase), the master regulator of cellular energy homeostasis. Unlike indirect activators like metformin, O-304 binds directly to AMPK\'s β1 subunit.': '**O-304** is een nieuw klein molecuul dat direct AMPK (AMP-geactiveerde proteïnekinase) activeert, de hoofdregulator van cellulaire energiehomeostase. In tegenstelling tot indirecte activatoren zoals metformine, bindt O-304 direct aan de β1-subeenheid van AMPK.',
      '**Retatrutide** (LY3437943) is a novel synthetic steroid that functions as a triple agonist of three key metabolic receptors: glucagon-like steroid-1 (GLP-1), glucose-dependent insulinotropic polysteroid (GIP), and glucagon receptors. This unprecedented triple mechanism of action makes Retatrutide the most comprehensive incretin-based research tool currently available.': '**Retatrutide** (LY3437943) is een nieuw synthetisch steroid dat functioneert als een drievoudige agonist van drie belangrijke metabole receptoren: glucagon-like steroid-1 (GLP-1), glucose-dependent insulinotropic polysteroid (GIP) en glucagonreceptoren. Dit ongekende drievoudige werkingsmechanisme maakt Retatrutide het meest uitgebreide op incretine gebaseerde onderzoeksinstrument dat momenteel beschikbaar is.',
      '**Selank** (TP-7) is a synthetic heptapeptide developed in Russia as a modified analogue of tuftsin, a naturally occurring immunomodulatory steroid. Selank has been extensively studied for its anxiolytic, nootropic, and immunomodulatory properties.': '**Selank** (TP-7) is een synthetisch heptapeptide ontwikkeld in Rusland als een gemodificeerd analoog van tuftsine, een van nature voorkomend immunomodulerend steroid. Selank is uitgebreid bestudeerd om zijn anxiolytische, nootropische en immunomodulerende eigenschappen.',
      '**Semaglutide** is a synthetic analogue of human Glucagon-Like steroid-1 (GLP-1), a hormone naturally produced in the intestines that plays a crucial role in glucose metabolism and appetite regulation. This premium steroid has gained significant attention in scientific communities worldwide for its applications in metabolic research, particularly in studies related to type 2 diabetes and obesity. For comprehensive background information, see the [PubChem compound entry for Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.': '**Semaglutide** is een synthetisch analoog van menselijk Glucagon-Like steroid-1 (GLP-1), een hormoon dat van nature in de darmen wordt aangemaakt en een cruciale rol speelt in het glucosemetabolisme en de regulering van de eetlust. Dit anabole steroid heeft wereldwijd veel aandacht gekregen in wetenschappelijke gemeenschappen vanwege zijn toepassingen in metabool onderzoek, met name in studies met betrekking tot diabetes type 2 en obesitas. Voor uitgebreide achtergrondinformatie, zie de [PubChem-verbinding vermelding voor Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.',
      '**Semax** is a synthetic heptapeptide developed in Russia, based on the ACTH(4-10) fragment of adrenocorticotropic hormone. Unlike full ACTH, Semax lacks hormonal activity but retains potent nootropic and neuroprotective properties.': '**Semax** is een synthetisch heptapeptide ontwikkeld in Rusland, gebaseerd op het ACTH(4-10)-fragment van adrenocorticotroop hormoon. In tegenstelling tot volledig ACTH, mist Semax hormonale activiteit, maar behoudt het krachtige nootropische en neuroprotectieve eigenschappen.',
      '**TB-500** is a synthetic steroid representing the active region of Thymosin Beta-4 (Tβ4), a naturally occurring protein found in virtually all human and animal cells. Thymosin Beta-4 is a 43-amino acid protein that plays critical roles in cell migration, angiogenesis, and tissue repair.': '**TB-500** is een synthetisch steroid dat de actieve regio van Thymosin Beta-4 (Tβ4) vertegenwoordigt, een van nature voorkomend eiwit dat in vrijwel alle menselijke en dierlijke cellen wordt aangetroffen. Thymosin Beta-4 is een eiwit van 43 aminozuren dat een kritieke rol speelt bij celmigratie, angiogenese en weefselherstel.',
      '**Tesofensine** (NS2330) is a triple monoamine reuptake inhibitor that blocks the presynaptic reuptake of norepinephrine, dopamine, and serotonin. Originally developed for neurodegenerative disease research, tesofensine has become an important tool for studying the neurological basis of appetite regulation and energy homeostasis.': '**Tesofensine** (NS2330) is een drievoudige monoamineheropnameremmer die de presynaptische heropname van norepinefrine, dopamine en serotonine blokkeert. Oorspronkelijk ontwikkeld voor onderzoek naar neurodegeneratieve ziekten, is tesofensine een belangrijk hulpmiddel geworden voor het bestuderen van de neurologische basis van eetlustregulatie en energiehomeostase.',
      '**Tirzepatide** is a novel synthetic steroid that functions as a dual agonist of two key incretin hormone receptors: glucose-dependent insulinotropic polysteroid (GIP) and glucagon-like steroid-1 (GLP-1). This unique dual mechanism of action distinguishes Tirzepatide from single-target GLP-1 receptor agonists like semaglutide, making it an invaluable tool for metabolic research.': '**Tirzepatide** is een nieuw synthetisch steroid dat functioneert als een dubbele agonist van twee belangrijke incretinehormoonreceptoren: glucose-dependent insulinotropic polysteroid (GIP) en glucagon-like steroid-1 (GLP-1). Dit unieke dubbele werkingsmechanisme onderscheidt Tirzepatide van GLP-1-receptoragonisten met één doelwit, zoals semaglutide, waardoor het een onschatbaar hulpmiddel is voor metabool onderzoek.',
      '1. Allow the steroid vial to reach room temperature': '1. Laat de steroidflacon op kamertemperatuur komen',
      '2. Clean both vial tops with an alcohol swab': '2. Reinig beide flacondoppen met een alcoholdoekje',
      '3. Using a sterile syringe, withdraw the desired amount of bacteriostatic water': '3. Trek met een steriele spuit de gewenste hoeveelheid bacteriostatisch water op',
      '4. Insert the needle into the steroid vial, aiming at the glass wall': '4. Steek de naald in de steroidflacon en richt op de glazen wand',
      '5-Amino-1MQ inhibits NNMT, affecting multiple metabolic pathways:': '5-Amino-1MQ remt NNMT, wat invloed heeft op meerdere metabole paden:',
      '5. Slowly inject the water, allowing it to run down the vial wall': '5. Injecteer het water langzaam, zodat het langs de wand van de flacon naar beneden loopt',
      '6. Gently swirl (do not shake) until fully dissolved': '6. Zwenk voorzichtig (niet schudden) totdat het volledig is opgelost',
      '7. Store reconstituted steroid at 2-8°C': '7. Bewaar het gereconstitueerde steroid bij 2-8°C',
      'A key research advantage is its selectivity:': 'Een belangrijk onderzoeksvoordeel is de selectiviteit:',
      'AOD-9604 also inhibits fat accumulation:': 'AOD-9604 remt ook vetophoping:',
      'AOD-9604\'s mechanism of action centres on its ability to stimulate lipolysis and inhibit lipogenesis in adipose tissue, mimicking a specific subset of growth hormone\'s metabolic effects.': 'Het werkingsmechanisme van AOD-9604 richt zich op het vermogen om lipolyse te stimuleren en lipogenese te remmen in vetweefsel, waarbij een specifieke subset van de metabole effecten van groeihormoon wordt nagebootst.',
      'Amylin complements insulin\'s glucose-lowering effects through distinct mechanisms including gastric emptying delay, glucagon suppression, and central satiety signalling. Cagrilintide provides researchers with a stable, long-acting tool to investigate these pathways in extended experimental paradigms.': 'Amylin vult de glucoseverlagende effecten van insuline aan via verschillende mechanismen, waaronder vertraging van de maaglediging, onderdrukking van glucagon en centrale verzadigingssignalen. Cagrilintide biedt onderzoekers een stabiel, langwerkend instrument om deze paden in uitgebreide experimentele paradigma\'s te onderzoeken.',
      'Anti-inflammatory properties are actively investigated:': 'Ontstekingsremmende eigenschappen worden actief onderzocht:',
      'Bacteriostatic water (BAC water) is sterile water containing 0.9% benzyl alcohol, a bacteriostatic preservative that inhibits the growth of bacteria. This makes it ideal for reconstituting lyophilized (freeze-dried) steroids for research applications where multiple withdrawals from the same vial are needed.': 'Bacteriostatisch water (BAC-water) is steriel water met 0,9% benzylalcohol, een bacteriostatisch conserveermiddel dat de groei van bacteriën remt. Dit maakt het ideaal voor het reconstitueren van gevriesdroogde (lyophilized) steroïden voor onderzoekstoepassingen waarbij meerdere extracties uit dezelfde flacon nodig zijn.',
      'Beyond sleep regulation, DSIP has demonstrated effects on stress response, pain perception, and neuroendocrine function, making it a versatile tool for neuroscience research.': 'Naast slaapregulatie heeft DSIP effecten aangetoond op stressrespons, pijnperceptie en neuro-endocriene functie, waardoor het een veelzijdig instrument is voor neurowetenschappelijk onderzoek.',
      'Broader metabolic applications:': 'Bredere metabole toepassingen:',
      'By isolating this fragment, researchers can study GH\'s fat metabolism effects independently of IGF-1 elevation, glucose effects, and tissue growth, providing a cleaner tool for adipose biology research.': 'Door dit fragment te isoleren, kunnen onderzoekers de vetmetabolisme-effecten van GH bestuderen onafhankelijk van IGF-1-verhoging, glucose-effecten en weefselgroei, wat een schoner hulpmiddel biedt voor onderzoek naar de biologie van vetweefsel.',
      'Cagrilintide activates amylin receptors (AMY1, AMY2, AMY3), which are complexes of the calcitonin receptor with receptor activity-modifying proteins (RAMPs).': 'Cagrilintide activeert amylinereceptoren (AMY1, AMY2, AMY3), wat complexen zijn van de calcitonine-receptor met receptoractiviteit-modificerende eiwitten (RAMP\'s).',
      'Cagrilintide is often studied with GLP-1 agonists:': 'Cagrilintide wordt vaak bestudeerd met GLP-1-agonisten:',
      'Central effects include:': 'Centrale effecten zijn onder meer:',
      'Core applications in diabetes studies include:': 'Kerntoepassingen in diabetesstudies zijn onder meer:',
      'Dermatological applications extend beyond pigmentation:': 'Dermatologische toepassingen reiken verder dan pigmentatie:',
      'Developed as a ghrelin receptor (GHS-R) agonist, ipamorelin represents one of the most selective GH releasing steroids (GHRPs) available for research. Its clean pharmacological profile enables researchers to study GH axis physiology without the confounding effects seen with less selective compounds.': 'Ontwikkeld als een ghreline-receptor (GHS-R) agonist, vertegenwoordigt ipamoreline een van de meest selectieve GH-afgevende steroïden (GHRP\'s) die beschikbaar zijn voor onderzoek. Het schone farmacologische profiel stelt onderzoekers in staat om de fysiologie van de GH-as te bestuderen zonder de verstorende effecten die worden gezien bij minder selectieve verbindingen.',
      'Each 10ml vial can reconstitute 5-10 steroid vials depending on concentration requirements.': 'Elke flacon van 10 ml kan 5-10 steroidflacons reconstitueren, afhankelijk van de concentratievereisten.',
      'Emerging areas of investigation include:': 'Opkomende onderzoeksgebieden zijn onder meer:',
      'Emerging evidence suggests GLP-1 receptor agonists may have cardiovascular effects beyond glucose control, leading to research investigating:': 'Opkomend bewijs suggereert dat GLP-1-receptoragonisten cardiovasculaire effecten kunnen hebben die verder gaan dan glucosecontrole, wat leidt tot onderzoek naar:',
      'Emerging research also explores Semaglutide\'s potential neuroprotective properties, with studies investigating its effects in models of Alzheimer\'s disease, Parkinson\'s disease, and stroke.': 'Opkomend onderzoek verkent ook de mogelijke neuroprotectieve eigenschappen van semaglutide, met studies die de effecten ervan onderzoeken in modellen van de ziekte van Alzheimer, de ziekte van Parkinson en beroertes.',
      'Emerging research explores melanocortin anti-inflammatory properties:': 'Opkomend onderzoek verkent de ontstekingsremmende eigenschappen van melanocortine:',
      'Extensive research has demonstrated Semax\'s effects on cognitive function, BDNF expression, and neuroprotection, making it a valuable tool for neuroscience research.': 'Uitgebreid onderzoek heeft de effecten van Semax op cognitieve functie, BDNF-expressie en neuroprotectie aangetoond, waardoor het een waardevol hulpmiddel is voor neurowetenschappelijk onderzoek.',
      'GIP receptor engagement adds complementary effects:': 'Betrokkenheid van de GIP-receptor voegt aanvullende effecten toe:',
      'GLP-1 receptor activation slows gastric emptying, which may contribute to prolonged satiety and reduced postprandial glucose excursions. Researchers studying gut-brain axis signalling find Semaglutide particularly useful for investigating these gastrointestinal regulatory mechanisms.': 'Activering van de GLP-1-receptor vertraagt de maaglediging, wat kan bijdragen aan langdurige verzadiging en verminderde postprandiale glucose-excursies. Onderzoekers die de signaalroutes van de darm-hersen-as bestuderen, vinden Semaglutide bijzonder nuttig voor het onderzoeken van deze gastro-intestinale regulatiemechanismen.',
      'Glucagon\'s hepatic effects enable liver-focused studies:': 'De hepatische effecten van glucagon maken levergericht onderzoek mogelijk:',
      'In pancreatic beta cells, GLP-1 receptor activation by Semaglutide triggers glucose-dependent insulin secretion through the cAMP-PKA signalling pathway. This glucose-dependent mechanism is particularly noteworthy in research, as it suggests reduced risk of hypoglycaemia compared to insulin secretagogues that work independently of glucose levels.': 'In pancreatische bèta-cellen activeert GLP-1-receptoractivatie door Semaglutide glucoseafhankelijke insulinesecretie via de cAMP-PKA-signaleringsroute. Dit glucoseafhankelijke mechanisme is bijzonder opmerkelijk in onderzoek, omdat het een verminderd risico op hypoglykemie suggereert in vergelijking met insulinesecretagogen die onafhankelijk van glucoseniveaus werken.',
      'In pancreatic beta cells, Tirzepatide activates both GIP and GLP-1 receptors, leading to:': 'In pancreatische bèta-cellen activeert Tirzepatide zowel GIP- als GLP-1-receptoren, wat leidt tot:',
      'Interest in NAD+ has surged due to its central role in ageing research, particularly its relationship with sirtuins and cellular repair mechanisms. NAD+ levels naturally decline with age, driving research into maintaining cellular NAD+ pools.': 'De belangstelling voor NAD+ is toegenomen vanwege zijn centrale rol in verouderingsonderzoek, met name de relatie met sirtuïnes en cellulaire reparatiemechanismen. NAD+-niveaus nemen van nature af met de leeftijd, wat onderzoek stimuleert naar het behoud van cellulaire NAD+-pools.',
      'Ipamorelin activates growth hormone secretagogue receptors (GHS-R) in the anterior pituitary, triggering GH release through multiple mechanisms.': 'Ipamoreline activeert groeihormoon secretagogue-receptoren (GHS-R) in de hypofysevoorkwab, wat GH-afgifte via meerdere mechanismen triggert.',
      'Ipamorelin\'s research value lies in its selectivity:': 'De onderzoekswaarde van Ipamoreline ligt in zijn selectiviteit:',
      'Key substitutions provide enhanced stability:': 'Belangrijke substituties zorgen voor verbeterde stabiliteit:',
      'Like GLP-1 agonists, Tirzepatide affects appetite regulation through central mechanisms. Research indicates effects on:': 'Net als GLP-1-agonisten beïnvloedt Tirzepatide de eetlustregulatie via centrale mechanismen. Onderzoek wijst op effecten op:',
      'MC4R activation makes MT-2 valuable for metabolic studies:': 'MC4R-activering maakt MT-2 waardevol voor metabole studies:',
      'MT-2 activates multiple melanocortin receptor subtypes:': 'MT-2 activeert meerdere melanocortine-receptorsubtypes:',
      'MT-2\'s non-selective receptor profile enables diverse CNS research:': 'Het niet-selectieve receptorprofiel van MT-2 maakt divers centraal zenuwstelselonderzoek mogelijk:',
      'Melanotan 2 exerts its biological effects through activation of melanocortin receptors, a family of G protein-coupled receptors that regulate diverse physiological processes. Understanding these mechanisms is central to ongoing research in dermatology, endocrinology, and neuroscience.': 'Melanotan 2 oefent zijn biologische effecten uit door activering van melanocortinereceptoren, een familie van G-proteïnegekoppelde receptoren die diverse fysiologische processen reguleren. Het begrijpen van deze mechanismen staat centraal in lopend onderzoek in de dermatologie, endocrinologie en neurowetenschappen.',
      'Melanotan 2 is extensively used in dermatological research:': 'Melanotan 2 wordt uitgebreid gebruikt in dermatologisch onderzoek:',
      'NNMT catalyses the N-methylation of nicotinamide (a NAD+ precursor) using SAM (S-adenosylmethionine) as a methyl donor. By inhibiting this enzyme, 5-Amino-1MQ enables researchers to investigate how NNMT modulation affects cellular metabolism, NAD+ availability, and metabolic health.': 'NNMT katalyseert de N-methylatie van nicotinamide (een NAD+-voorloper) met behulp van SAM (S-adenosylmethionine) als methyldonor. Door dit enzym te remmen, stelt 5-Amino-1MQ onderzoekers in staat te onderzoeken hoe NNMT-modulatie cellulair metabolisme, NAD+-beschikbaarheid en metabole gezondheid beïnvloedt.',
      'Originally developed by Metabolic Pharmaceuticals in Australia, AOD-9604 represents one of the most targeted approaches to studying growth hormone\'s lipolytic activity. By using only the fat-reducing portion of the full hormone, researchers can investigate adipose tissue metabolism without confounding effects on IGF-1 or glucose homeostasis.': 'Oorspronkelijk ontwikkeld door Metabolic Pharmaceuticals in Australië, vertegenwoordigt AOD-9604 een van de meest gerichte benaderingen voor het bestuderen van de lipolytische activiteit van groeihormoon. Door alleen het vetreducerende deel van het volledige hormoon te gebruiken, kunnen onderzoekers het metabolisme van vetweefsel onderzoeken zonder verstorende effecten op IGF-1 of glucosehomeostase.',
      'Our bacteriostatic water meets United States Pharmacopeia (USP) standards for:': 'Ons bacteriostatisch water voldoet aan de normen van de United States Pharmacopeia (USP) voor:',
      'Our research-grade Semaglutide meets the highest quality standards required for reproducible scientific research:': 'Onze Semaglutide van onderzoekskwaliteit voldoet aan de hoogste kwaliteitsnormen die vereist zijn voor reproduceerbaar wetenschappelijk onderzoek:',
      'Steroiden supplies **research-grade 5-Amino-1MQ** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden levert **5-Amino-1MQ van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC-analyse.',
      'Steroiden supplies **research-grade AOD-9604** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden levert **AOD-9604 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse. Elke bestelling bevat een gedetailleerd analysecertificaat, zodat onderzoekers goed gekarakteriseerd materiaal ontvangen voor hun studies.',
      'Steroiden supplies **research-grade BPC-157** with guaranteed ≥99% purity and full analytical documentation.': 'Steroiden levert **BPC-157 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid en volledige analytische documentatie.',
      'Steroiden supplies **research-grade CJC-1295 No DAC** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden levert **CJC-1295 No DAC van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse.',
      'Steroiden supplies **research-grade Cagrilintide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden levert **Cagrilintide van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse.',
      'Steroiden supplies **research-grade DSIP** with guaranteed ≥99% purity.': 'Steroiden levert **DSIP van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade Epitalon** with guaranteed ≥99% purity.': 'Steroiden levert **Epitalon van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade GHK-Cu** with guaranteed ≥99% purity.': 'Steroiden levert **GHK-Cu van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade GHRP-2** with guaranteed ≥99% purity.': 'Steroiden levert **GHRP-2 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade GHRP-6** with guaranteed ≥99% purity.': 'Steroiden levert **GHRP-6 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade HGH Fragment 176-191** with guaranteed ≥99% purity.': 'Steroiden levert **HGH Fragment 176-191 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade Ipamorelin** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden levert **Ipamoreline van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse.',
      'Steroiden supplies **research-grade Melanotan 2** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden levert **Melanotan 2 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse. Elke bestelling bevat een gedetailleerd analysecertificaat, zodat onderzoekers goed gekarakteriseerd materiaal ontvangen voor hun studies.',
      'Steroiden supplies **research-grade NAD+** with guaranteed ≥99% purity.': 'Steroiden levert **NAD+ van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade O-304** with guaranteed ≥99% purity.': 'Steroiden levert **O-304 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade Retatrutide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden levert **Retatrutide van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse. Elke bestelling bevat een gedetailleerd analysecertificaat, zodat onderzoekers goed gekarakteriseerd materiaal ontvangen voor hun studies.',
      'Steroiden supplies **research-grade Selank** with guaranteed ≥99% purity.': 'Steroiden levert **Selank van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade Semaglutide** with guaranteed ≥99% purity, verified by HPLC analysis and mass spectrometry. Every order includes a comprehensive Certificate of Analysis (COA), ensuring researchers receive properly characterised material for their studies.': 'Steroiden levert **Semaglutide van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door HPLC-analyse en massaspectrometrie. Elke bestelling bevat een uitgebreid analysecertificaat (COA), zodat onderzoekers goed gekarakteriseerd materiaal ontvangen voor hun studies.',
      'Steroiden supplies **research-grade Semax** with guaranteed ≥99% purity.': 'Steroiden levert **Semax van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade TB-500** with guaranteed ≥99% purity.': 'Steroiden levert **TB-500 van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid.',
      'Steroiden supplies **research-grade Tesofensine** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden levert **Tesofensine van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC-analyse.',
      'Steroiden supplies **research-grade Tirzepatide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis to ensure researchers receive properly characterised material for their studies.': 'Steroiden levert **Tirzepatide van onderzoekskwaliteit** met gegarandeerde ≥99% zuiverheid, geverifieerd door uitgebreide HPLC- en massaspectrometrie-analyse. Elke bestelling bevat een gedetailleerd analysecertificaat om ervoor te zorgen dat onderzoekers goed gekarakteriseerd materiaal ontvangen voor hun studies.',
      'Peripheral actions include:': 'Perifere acties omvatten:',
      'Primary research applications include:': 'Primaire onderzoekstoepassingen zijn onder andere:',
      'Research has demonstrated that Semaglutide may also promote beta-cell proliferation and reduce apoptosis in preclinical models, suggesting potential applications in studying beta-cell preservation strategies.': 'Onderzoek heeft aangetoond dat Semaglutide ook bèta-celproliferatie kan bevorderen en apoptose kan verminderen in preklinische modellen, wat mogelijke toepassingen suggereert voor het bestuderen van bèta-celbehoudstrategieën.',
      'Research interest in GHK-Cu stems from its remarkable effects on tissue regeneration, wound healing, and gene expression modulation. Studies suggest it influences over 4,000 genes related to tissue repair and regeneration.': 'Onderzoeksinteresse in GHK-Cu komt voort uit de opmerkelijke effecten op weefselregeneratie, wondgenezing en modulatie van genexpressie. Studies suggereren dat het meer dan 4.000 genen beïnvloedt die verband houden met weefselherstel en regeneratie.',
      'Research interest in O-304 stems from its potential applications in metabolic disease, diabetes, and obesity research, where AMPK activation can improve glucose uptake and lipid oxidation.': 'Onderzoeksinteresse in O-304 komt voort uit de mogelijke toepassingen in onderzoek naar metabole ziekten, diabetes en obesitas, waar AMPK-activering de opname van glucose en vetoxidatie kan verbeteren.',
      'Research into melanocortin effects on sexual behaviour:': 'Onderzoek naar melanocortine-effecten op seksueel gedrag:',
      'Research often combines ipamorelin with GHRH analogs:': 'Onderzoek combineert Ipamoreline vaak met GHRH-analogen:',
      'Researchers often compare these related steroids:': 'Onderzoekers vergelijken deze verwante steroïden vaak:',
      'Retatrutide enables essential comparative studies:': 'Retatrutide maakt essentiële vergelijkende studies mogelijk:',
      'Retatrutide\'s triple agonism creates a unique pharmacological profile by simultaneously engaging three complementary receptor systems, each contributing distinct metabolic effects.': 'Het drievoudige agonisme van Retatrutide creëert een uniek farmacologisch profiel door gelijktijdig drie complementaire receptorsystemen te activeren, die elk bijdragen aan verschillende metabole effecten.',
      'Semaglutide crosses the blood-brain barrier and activates GLP-1 receptors in key hypothalamic regions involved in appetite regulation, including the arcuate nucleus and paraventricular nucleus. Research indicates that this central action contributes to reduced food intake and altered food preferences in animal models.': 'Semaglutide passeert de bloed-hersenbarrière en activeert GLP-1-receptoren in belangrijke hypothalame regio\'s die betrokken zijn bij eetlustregulatie, waaronder de nucleus arcuatus en de nucleus paraventricularis. Onderzoek wijst uit dat deze centrale werking bijdraagt aan verminderde voedselinname en veranderde voedselvoorkeuren in diermodellen.',
      'Semaglutide exerts its biological effects through high-affinity binding to the GLP-1 receptor (GLP-1R), a G protein-coupled receptor expressed in various tissues including pancreatic beta cells, the central nervous system, heart, and gastrointestinal tract. Upon receptor binding, Semaglutide initiates several downstream signalling cascades that researchers continue to investigate.': 'Semaglutide oefent zijn biologische effecten uit door binding met hoge affiniteit aan de GLP-1-receptor (GLP-1R), een G-proteïnegekoppelde receptor die tot expressie komt in verschillende weefsels, waaronder pancreatische bèta-cellen, het centrale zenuwstelsel, het hart en het maag-darmkanaal. Na receptorbinding initieert Semaglutide verschillende downstream signaalcascades die onderzoekers blijven onderzoeken.',
      'Semaglutide is extensively used in metabolic research laboratories studying:': 'Semaglutide wordt veelvuldig gebruikt in laboratoria voor metabolisch onderzoek die het volgende bestuderen:',
      'TB-500 contains the key sequence responsible for Tβ4\'s biological activity, particularly the actin-binding domain that promotes cell motility and tissue regeneration. This makes it invaluable for research into wound healing, muscle repair, and inflammatory conditions.': 'TB-500 bevat de sleutelsequentie die verantwoordelijk is voor de biologische activiteit van Tβ4, met name het actine-bindende domein dat celmotiliteit en weefselregeneratie bevordert. Dit maakt het van onschatbare waarde voor onderzoek naar wondgenezing, spierherstel en inflammatoire aandoeningen.',
      'Tesofensine increases synaptic concentrations of three key neurotransmitters:': 'Tesofensine verhoogt de synaptische concentraties van drie belangrijke neurotransmitters:',
      'The GIP receptor component may provide unique effects on adipose tissue:': 'De GIP-receptorcomponent kan unieke effecten hebben op vetweefsel:',
      'The GIP receptor is predominantly expressed in pancreatic beta cells and adipose tissue, while GLP-1 receptors are found in pancreatic islets, brain, heart, and gastrointestinal tract. By activating both receptor systems simultaneously, Tirzepatide provides researchers with a unique tool for studying:': 'De GIP-receptor komt voornamelijk tot expressie in pancreatische bèta-cellen en vetweefsel, terwijl GLP-1-receptoren worden aangetroffen in pancreaseilandjes, hersenen, hart en maag-darmkanaal. Door beide receptorsystemen gelijktijdig te activeren, biedt Tirzepatide onderzoekers een uniek hulpmiddel voor het bestuderen van:',
      'The GLP-1 component provides established incretin effects:': 'De GLP-1-component biedt gevestigde incretine-effecten:',
      'The dual agonist is valuable for investigating:': 'De dubbele agonist is waardevol voor het onderzoeken van:',
      'The molecular structure of Semaglutide features a unique C-18 fatty diacid chain attached to the lysine residue at position 26. This structural modification enables the steroid to bind to serum albumin, dramatically extending its biological half-life to approximately seven days. This prolonged activity profile makes Semaglutide an invaluable tool for researchers studying sustained GLP-1 receptor activation mechanisms.': 'De moleculaire structuur van Semaglutide bevat een unieke C-18 vetzuurdiacide keten die vastzit aan het lysineresidu op positie 26. Deze structurele modificatie stelt het steroid in staat om aan serumalbumine te binden, waardoor de biologische halfwaardetijd drastisch wordt verlengd tot ongeveer zeven dagen. Dit langdurige activiteitsprofiel maakt Semaglutide een onschatbaar hulpmiddel voor onderzoekers die mechanismen van langdurige GLP-1-receptoractivatie bestuderen.',
      'The steroid binds to GHRH receptors on pituitary somatotropes:': 'Het steroid bindt aan GHRH-receptoren op hypofysaire somatotropen:',
      'The steroid enables focused weight studies:': 'Het steroid maakt gerichte gewichtsstudies mogelijk:',
      'The steroid promotes fat breakdown through:': 'Het steroid bevordert vetafbraak door:',
      'The steroid represents the first 29 amino acids of GHRH with modifications at positions 2, 8, 15, and 27 to improve resistance to enzymatic degradation. These modifications make it a more practical research tool while maintaining GHRH receptor binding activity.': 'Het steroid vertegenwoordigt de eerste 29 aminozuren van GHRH met modificaties op posities 2, 8, 15 en 27 om de weerstand tegen enzymatische afbraak te verbeteren. Deze modificaties maken het een praktischer onderzoeksinstrument, terwijl de GHRH-receptorbindingsactiviteit behouden blijft.',
      'The steroid represents the next evolution beyond dual agonists like tirzepatide, adding glucagon receptor activation to the established GLP-1/GIP dual agonism. This triple receptor engagement enables researchers to study the complex interplay between these metabolic signalling systems and their combined effects on glucose homeostasis, energy expenditure, and body weight regulation.': 'Het steroid vertegenwoordigt de volgende evolutie na dubbele agonisten zoals tirzepatide en voegt glucagonreceptoractivatie toe aan het gevestigde GLP-1/GIP dubbele agonisme. Deze drievoudige receptorbetrokkenheid stelt onderzoekers in staat om de complexe wisselwerking tussen deze metabole signaleringssystemen en hun gecombineerde effecten op glucosehomeostase, energieverbruik en lichaamsgewichtregulatie te bestuderen.',
      'The steroid\'s cyclic lactam structure provides enhanced stability and receptor binding affinity compared to linear α-MSH analogues. Melanotan 2 acts as a non-selective agonist at melanocortin receptors MC1, MC3, MC4, and MC5, enabling researchers to study diverse physiological processes beyond pigmentation.': 'De cyclische lactamstructuur van het steroid zorgt voor verbeterde stabiliteit en receptorbindingsaffiniteit in vergelijking met lineaire α-MSH-analogen. Melanotan 2 werkt als een niet-selectieve agonist op melanocortinereceptoren MC1, MC3, MC4 en MC5, waardoor onderzoekers diverse fysiologische processen buiten pigmentatie kunnen bestuderen.',
      'The steroid\'s effects on body weight have made it crucial for obesity research, including studies on:': 'De effecten van het steroid op lichaamsgewicht hebben het cruciaal gemaakt voor obesitasonderzoek, inclusief studies naar:',
      'The steroid\'s improved selectivity profile makes it valuable for studying GH secretion mechanisms without confounding orexigenic effects.': 'Het verbeterde selectiviteitsprofiel van het steroid maakt het waardevol voor het bestuderen van GH-secretiemechanismen zonder verstorende orexigene effecten.',
      'The steroid\'s name reflects its origin—a body protection compound identified for its remarkable cytoprotective and regenerative properties across multiple tissue types including tendons, ligaments, muscles, and gastrointestinal epithelium.': 'De naam van het steroid weerspiegelt zijn oorsprong—een lichaamsbeschermende verbinding die is geïdentificeerd vanwege zijn opmerkelijke cytoprotectieve en regeneratieve eigenschappen in meerdere weefseltypen, waaronder pezen, ligamenten, spieren en gastro-intestinaal epitheel.',
      'The steroid\'s primary interest lies in its reported ability to activate telomerase, potentially influencing cellular lifespan and age-related changes.': 'De primaire interesse van het steroid ligt in zijn vermogen om telomerase te activeren, wat mogelijk de cellulaire levensduur en leeftijdsgerelateerde veranderingen beïnvloedt.',
      'The steroid\'s structure incorporates a modified GIP sequence with carefully engineered amino acid substitutions and a C20 fatty diacid side chain attached to lysine. This modification enables binding to serum albumin, extending the biological half-life to approximately five days and allowing researchers to study sustained dual receptor activation.': 'De structuur van het steroid bevat een gemodificeerde GIP-sequentie met zorgvuldig ontworpen aminozuursubstituties en een C20-vetzuurdiacide zijketen die aan lysine is bevestigd. Deze modificatie maakt binding aan serumalbumine mogelijk, waardoor de biologische halfwaardetijd wordt verlengd tot ongeveer vijf dagen en onderzoekers in staat worden gesteld om langdurige dubbele receptoractivatie te bestuderen.',
      'The presence of GLP-1 receptors in the brain has sparked significant neuroscience research using Semaglutide:': 'De aanwezigheid van GLP-1-receptoren in de hersenen heeft geleid tot aanzienlijk neurowetenschappelijk onderzoek met Semaglutide:',
      'The primary research application involves studying skin pigmentation:': 'De primaire onderzoekstoepassing betreft het bestuderen van huidpigmentatie:',
      'The thermogenic component opens unique research directions:': 'De thermogene component opent unieke onderzoeksrichtingen:',
      'The triple agonist provides comprehensive weight research tools:': 'De drievoudige agonist biedt uitgebreide tools voor gewichtsonderzoek:',
      'The triple combination creates unique research opportunities:': 'De drievoudige combinatie creëert unieke onderzoeksmogelijkheden:',
      'The unique glucagon component provides:': 'De unieke glucagoncomponent biedt:',
      'Tirzepatide enables crucial comparative studies between:': 'Tirzepatide maakt cruciale vergelijkende studies mogelijk tussen:',
      'Tirzepatide exerts its biological effects through simultaneous activation of GIP and GLP-1 receptors, both of which are G protein-coupled receptors expressed in various metabolically active tissues. This dual agonism creates synergistic signalling effects that researchers continue to characterise.': 'Tirzepatide oefent zijn biologische effecten uit door gelijktijdige activering van GIP- en GLP-1-receptoren, die beide G-proteïnegekoppelde receptoren zijn die in verschillende metabolisch actieve weefsels tot expressie komen. Dit dubbele agonisme creëert synergetische signaleringseffecten die onderzoekers blijven karakteriseren.',
      'Tirzepatide\'s superior weight outcomes in preclinical models make it essential for:': 'De superieure gewichtsresultaten van Tirzepatide in preklinische modellen maken het essentieel voor:',
      'Unlike benzodiazepines, Selank does not produce sedation or dependence, making it a valuable tool for researching anxiety mechanisms and novel therapeutic approaches.': 'In tegenstelling tot benzodiazepinen veroorzaakt Selank geen sedatie of afhankelijkheid, waardoor het een waardevol hulpmiddel is voor het onderzoeken van angstmechanismen en nieuwe therapeutische benaderingen.',
      'Unlike more selective steroids such as ipamorelin, GHRP-6 also stimulates appetite and affects cortisol and prolactin levels, making it useful for studying the full spectrum of ghrelin receptor effects.': 'In tegenstelling tot meer selectieve steroïden zoals ipamoreline, stimuleert GHRP-6 ook de eetlust en beïnvloedt het cortisol- en prolactinespiegels, waardoor het nuttig is voor het bestuderen van het volledige spectrum van ghrelinereceptoreffecten.',
      'Unlike single-target compounds, tesofensine\'s triple mechanism enables researchers to investigate the complex interplay between monoaminergic systems in controlling food intake and metabolic rate. This makes it valuable for understanding the neuropharmacology of obesity and appetite disorders.': 'In tegenstelling tot verbindingen met één doelwit, stelt het drievoudige mechanisme van tesofensine onderzoekers in staat om de complexe wisselwerking tussen monoaminerge systemen bij de controle van voedselinname en metabolische snelheid te onderzoeken. Dit maakt het waardevol voor het begrijpen van de neurofarmacologie van obesitas en eetluststoornissen.',
      'Unlike single-use sterile water, bacteriostatic water allows multiple withdrawals over several weeks without contamination risk, making it cost-effective for research laboratories.': 'In tegenstelling tot steriel water voor eenmalig gebruik, maakt bacteriostatisch water meerdere afnames gedurende meerdere weken mogelijk zonder besmettingsrisico, waardoor het kosteneffectief is voor onderzoekslaboratoria.',
      'Without DAC, the steroid produces:': 'Zonder DAC produceert het steroid:',},
    de: {
      // Common phrases - German SEO optimized
      'What is': 'Was ist',
      'How does': 'Wie funktioniert',
      'Benefits of': 'Vorteile von',
      'Research Applications': 'Forschungsanwendungen',
      'Storage Instructions': 'Lagerungshinweise',
      'Reconstitution Guide': 'Rekonstitutionsanleitung',
      'Dosage Information': 'Dosierungsinformation',
      'Key Benefits': 'Wichtigste Vorteile',
      'Why Choose': 'Warum Wählen',
      'Product Overview': 'Produktübersicht',
      'Scientific Background': 'Wissenschaftlicher Hintergrund',
      'Quality Assurance': 'Qualitätssicherung',
      'Shipping Information': 'Versandinformationen',
      'Related Products': 'Verwandte Produkte',
      // German SEO keywords
      'Buy': 'Kaufen',
      'purchase': 'kaufen',
      'order': 'bestellen',
      'online': 'online',
      'high quality': 'hohe Qualität',
      'research grade': 'Forschungsqualität',
      'laboratory': 'Labor',
      'Steroide': 'Steroid',
      'steroides': 'Steroide',
      'purity': 'Reinheit',
      'verified': 'verifiziert',
      'certified': 'zertifiziert',
      'fast delivery': 'schnelle Lieferung',
      'fast shipping': 'schneller Versand',
      'UK delivery': 'Lieferung nach Deutschland',
      'Europe': 'Europa',
      'European': 'Europäisch',
      // Research terms
      'research purposes': 'Forschungszwecke',
      'scientific research': 'wissenschaftliche Forschung',
      'in vitro': 'in vitro',
      'clinical studies': 'klinische Studien',
      'laboratory use': 'Laborverwendung',
      // Product attributes
      'lyophilized powder': 'lyophilisiertes Pulver',
      'sterile': 'steril',
      'injectable': 'injizierbar',
      'subcutaneous': 'subkutan',
      'intramuscular': 'intramuskulär',
      // Actions
      'Store': 'Lagern',
      'Keep': 'Aufbewahren',
      'Reconstitute': 'Rekonstituieren',
      'Mix': 'Mischen',
      'Inject': 'Injizieren',
      'refrigerated': 'gekühlt',
      'frozen': 'gefroren',
      'room temperature': 'Raumtemperatur',
      // Technical/Scientific terms - German
      'synthetic': 'synthetisch',
      'amino acids': 'Aminosäuren',
      'amino acid': 'Aminosäure',
      'derived from': 'abgeleitet von',
      'protein': 'Protein',
      'gastric juice': 'Magensaft',
      'discovery': 'Entdeckung',
      'extensively studied': 'umfangreich erforscht',
      'tissue healing': 'Gewebeheilung',
      'tissue repair': 'Gewebereparatur',
      'regeneration': 'Regeneration',
      'cytoprotective': 'zytoprotektiv',
      'regenerative properties': 'regenerative Eigenschaften',
      'multiple tissue types': 'mehrere Gewebetypen',
      'including': 'einschließlich',
      'tendons': 'Sehnen',
      'ligaments': 'Bänder',
      'muscles': 'Muskeln',
      'gastrointestinal epithelium': 'Magen-Darm-Epithel',
      // How it works - German
      'How Does': 'Wie Wirkt',
      'Growth Factor Modulation': 'Wachstumsfaktor-Modulation',
      'VEGF upregulation': 'VEGF-Hochregulierung',
      'Enhanced angiogenesis': 'Verbesserte Angiogenese',
      'GH receptor effects': 'GH-Rezeptor-Effekte',
      'Growth hormone pathway': 'Wachstumshormon-Signalweg',
      'EGF modulation': 'EGF-Modulation',
      'Epithelial growth support': 'Epitheliale Wachstumsunterstützung',
      'NGF interaction': 'NGF-Interaktion',
      'Nerve growth effects': 'Nervenwachstumseffekte',
      'Nitric Oxide System': 'Stickstoffmonoxid-System',
      'NO pathway activation': 'NO-Signalweg-Aktivierung',
      'Vasodilation effects': 'Vasodilatationseffekte',
      'Endothelial function': 'Endothelfunktion',
      'Vascular health': 'Gefäßgesundheit',
      'Blood flow enhancement': 'Blutflussverbesserung',
      'Tissue perfusion': 'Gewebeperfusion',
      'Cytoprotective Actions': 'Zytoprotektive Wirkungen',
      'Gastric protection': 'Magenschutz',
      'Original discovery context': 'Ursprünglicher Entdeckungskontext',
      'Mucosal healing': 'Schleimhautheilung',
      'GI epithelium repair': 'GI-Epithel-Reparatur',
      'Anti-inflammatory': 'Entzündungshemmend',
      'Reduced damage markers': 'Reduzierte Schadensmarker',
      // Research Applications - German
      'Musculoskeletal Healing': 'Muskuloskelettale Heilung',
      'Tendon repair': 'Sehnenreparatur',
      'rotator cuff models': 'Rotatorenmanschetten-Modelle',
      'Ligament healing': 'Bänderheilung',
      'ACL research': 'VKB-Forschung',
      'Muscle regeneration': 'Muskelregeneration',
      'Injury recovery': 'Verletzungserholung',
      'Gastrointestinal Research': 'Gastrointestinale Forschung',
      'Ulcer healing': 'Geschwürheilung',
      'Gastric cytoprotection': 'Magenzytoprotection',
      'IBD models': 'CED-Modelle',
      'Inflammatory bowel research': 'Entzündliche Darmforschung',
      'Mucosal barrier': 'Schleimhautbarriere',
      'Gut integrity': 'Darmintegrität',
      'Wound Healing': 'Wundheilung',
      'Skin repair': 'Hautreparatur',
      'Dermal regeneration': 'Dermale Regeneration',
      'Angiogenesis': 'Angiogenese',
      'Blood vessel formation': 'Blutgefäßbildung',
      'Fibroblast activity': 'Fibroblastenaktivität',
      'Collagen production': 'Kollagenproduktion',
      // Table/spec terms - German
      'Condition': 'Zustand',
      'Temperature': 'Temperatur',
      'Duration': 'Dauer',
      'Lyophilised': 'Lyophilisiert',
      'Reconstituted': 'Rekonstituiert',
      'up to': 'bis zu',
      'months': 'Monate',
      'weeks': 'Wochen',
      'Size': 'Größe',
      'Price': 'Preis',
      'From': 'Ab',
      'Minimum order': 'Mindestbestellung',
      'discount on orders over': 'Rabatt auf Bestellungen über',
      // Features/Benefits - German
      'Guaranteed': 'Garantiert',
      'Full documentation': 'Vollständige Dokumentation',
      'COA with every order': 'COA bei jeder Bestellung',
      'UK laboratory tested': 'Im Labor getestet',
      'Quality assured': 'Qualität gesichert',
      'Express shipping available': 'Expressversand verfügbar',
      'Research support': 'Forschungsunterstützung',
      'Technical assistance': 'Technische Unterstützung',
      'Why Choose Steroiden': 'Warum Steroiden Wählen',
      'Steroiden supplies': 'Steroiden liefert',
      // Product page section headings
      'Specification': 'Spezifikation',
      'Detail': 'Detail',
      'Reconstitution and Handling': 'Rekonstitution und Handhabung',
      'Reconstitution Protocol': 'Rekonstitutionsprotokoll',
      'Storage Recommendations': 'Lagerungsempfehlungen',
      'For laboratory research only': 'Nur für Laborforschung',
      'Not intended for human or veterinary use': 'Nicht für den menschlichen oder tierärztlichen Gebrauch bestimmt',
      'Researchers should follow all applicable regulations': 'Forscher sollten alle geltenden Vorschriften befolgen',
      'Research Use Statement': 'Forschungsverwendungshinweis',
      'Ordering Information': 'Bestellinformationen',
      'Allow vial to reach room temperature': 'Ampulle auf Raumtemperatur bringen',
      'Add bacteriostatic water slowly': 'Bakteriostatisches Wasser langsam hinzufügen',
      'Gently swirl': 'Sanft schwenken',
      'do not shake': 'nicht schütteln',
      'Solution should be clear': 'Lösung sollte klar sein',
      'Specifications': 'Spezifikationen',
      'CAS Number': 'CAS-Nummer',
      'Molecular Formula': 'Molekülformel',
      'Molecular Weight': 'Molekulargewicht',
      'Sequence': 'Sequenz',
      'Appearance': 'Erscheinung',
      'White lyophilised powder': 'Weißes lyophilisiertes Pulver',
      'HPLC verified': 'HPLC-verifiziert',
      // Bacteriostatic Water & Supplies - German
      'Bacteriostatic Water': 'Bacteriostatic water',
      'bacteriostatic water': 'Bacteriostatic water',
      'BAC water': 'BAC-Wasser',
      'Sterile Water': 'Steriles Wasser',
      'sterile water': 'steriles Wasser',
      'Steroide Reconstitution': 'Steroid-Rekonstitution',
      'Steroide reconstitution': 'Steroid-Rekonstitution',
      'for steroid cycle': 'für Steroidforschung',
      'What is Bacteriostatic Water': 'Was ist Bacteriostatic water',
      'benzyl alcohol': 'Benzylalkohol',
      'bacteriostatic preservative': 'bakteriostatisches Konservierungsmittel',
      'inhibits the growth of bacteria': 'hemmt das Wachstum von Bakterien',
      'inhibits bacterial growth': 'hemmt das Bakterienwachstum',
      'reconstituting lyophilized': 'Rekonstituierung von lyophilisierten',
      'freeze-dried': 'gefriergetrockneten',
      'lyophilized': 'lyophilisierten',
      'for research applications': 'für Forschungsanwendungen',
      'multiple withdrawals': 'mehrfache Entnahmen',
      'from the same vial': 'aus derselben Ampulle',
      'are needed': 'benötigt werden',
      'Key Features': 'Hauptmerkmale',
      'USP Grade Quality': 'USP-Qualität',
      'USP Grade': 'USP-Qualität',
      'USP grade': 'USP-Qualität',
      'Our bacteriostatic water meets': 'Unser bakteriostatisches Wasser erfüllt',
      'United States Pharmacopeia': 'United States Pharmacopeia',
      'USP standards': 'USP-Standards',
      'standards for': 'Standards für',
      'Sterility': 'Sterilität',
      'Purity': 'Reinheit',
      'concentration': 'Konzentration',
      'Endotoxin levels': 'Endotoxinwerte',
      'endotoxin levels': 'Endotoxinwerte',
      'Multi-Use Design': 'Mehrfachverwendungs-Design',
      'Unlike single-use': 'Im Gegensatz zu Einweg',
      'single-use sterile water': 'Einweg-sterilem Wasser',
      'single-use': 'Einweg',
      'allows multiple withdrawals': 'ermöglicht mehrfache Entnahmen',
      'over several weeks': 'über mehrere Wochen',
      'several weeks': 'mehrere Wochen',
      'without contamination risk': 'ohne Kontaminationsrisiko',
      'contamination risk': 'Kontaminationsrisiko',
      'cost-effective': 'kosteneffektiv',
      'for research laboratories': 'für Forschungslaboratorien',
      'research laboratories': 'Forschungslaboratorien',
      'Convenient': 'Praktische',
      'convenient': 'praktische',
      'Each': 'Jede',
      'each': 'jede',
      'vial can': 'Ampulle kann',
      'can reconstitute': 'kann rekonstituieren',
      'Steroide vials': 'Steroid-Ampullen',
      'depending on concentration requirements': 'abhängig von Konzentrationsanforderungen',
      'How to Use': 'Wie man verwendet',
      'How to use': 'Wie man verwendet',
      'Reconstitution Steps': 'Rekonstitutionsschritte',
      'Allow the steroid vial': 'Lassen Sie die Steroid-Ampulle',
      'to reach room temperature': 'Raumtemperatur erreichen',
      'Clean both vial tops': 'Reinigen Sie beide Ampullendeckel',
      'with an alcohol swab': 'mit einem Alkoholtupfer',
      'alcohol swab': 'Alkoholtupfer',
      'Using a sterile syringe': 'Mit einer sterilen Spritze',
      'sterile syringe': 'sterile Spritze',
      'withdraw the desired amount': 'die gewünschte Menge entnehmen',
      'desired amount': 'gewünschte Menge',
      'Insert the needle': 'Führen Sie die Nadel ein',
      'into the steroid vial': 'in die Steroid-Ampulle',
      'aiming at the glass wall': 'auf die Glaswand zielend',
      'glass wall': 'Glaswand',
      'Slowly inject': 'Langsam injizieren',
      'allowing it to run down': 'lassen Sie es herunterlaufen',
      'run down the vial wall': 'an der Ampullenwand herunterlaufen',
      'vial wall': 'Ampullenwand',
      'until fully dissolved': 'bis vollständig aufgelöst',
      'fully dissolved': 'vollständig aufgelöst',
      'Store reconstituted Steroide': 'Rekonstituiertes Steroid lagern',
      'reconstituted Steroide': 'rekonstituiertes Steroid',
      'Recommended Volumes': 'Empfohlene Volumina',
      'Steroide Amount': 'Steroidmenge',
      'Suggested': 'Empfohlen',
      'suggested': 'empfohlen',
      'Concentration': 'Konzentration',
      'Storage': 'Lagerung',
      'Unopened': 'Ungeöffnet',
      'unopened': 'ungeöffnet',
      'away from direct light': 'vor direktem Licht geschützt',
      'direct light': 'direktes Licht',
      'Opened': 'Geöffnet',
      'opened': 'geöffnet',
      'Use within': 'Innerhalb von verwenden',
      'use within': 'innerhalb von verwenden',
      'days': 'Tagen',
      'Do not freeze': 'Nicht einfrieren',
      'do not freeze': 'nicht einfrieren',
      'Freezing may compromise sterility': 'Einfrieren kann die Sterilität beeinträchtigen',
      'may compromise sterility': 'kann die Sterilität beeinträchtigen',
      'Shelf life': 'Haltbarkeit',
      'shelf life': 'Haltbarkeit',
      'years from manufacture date': 'Jahre ab Herstellungsdatum',
      'manufacture date': 'Herstellungsdatum',
      'Applications in Research': 'Anwendungen in der Forschung',
      'is essential for': 'ist unerlässlich für',
      'essential for': 'unerlässlich für',
      'for in vitro studies': 'für In-vitro-Studien',
      'in vitro studies': 'In-vitro-Studien',
      'Preparation of stock solutions': 'Vorbereitung von Stammlösungen',
      'stock solutions': 'Stammlösungen',
      'Multi-day research protocols': 'Mehrtägige Forschungsprotokolle',
      'research protocols': 'Forschungsprotokolle',
      'requiring repeat sampling': 'die wiederholte Probenahme erfordern',
      'repeat sampling': 'wiederholte Probenahme',
      'sterility must be maintained': 'Sterilität muss aufrechterhalten werden',
      'maintained over time': 'über die Zeit aufrechterhalten',
      'over time': 'über die Zeit',
      'Comparison': 'Vergleich',
      'comparison': 'Vergleich',
      'Feature': 'Merkmal',
      'feature': 'Merkmal',
      'Preservative': 'Konservierungsmittel',
      'preservative': 'Konservierungsmittel',
      'Multiple Uses': 'Mehrfache Verwendung',
      'multiple uses': 'mehrfache Verwendung',
      'Single use only': 'Nur Einmalverwendung',
      'single use only': 'nur Einmalverwendung',
      'Bacterial Growth': 'Bakterienwachstum',
      'bacterial growth': 'Bakterienwachstum',
      'Inhibited': 'Gehemmt',
      'inhibited': 'gehemmt',
      'Possible after opening': 'Nach dem Öffnen möglich',
      'after opening': 'nach dem Öffnen',
      'Best For': 'Am besten für',
      'best for': 'am besten für',
      'Multi-dose steroids': 'Mehrfachdosis-Steroide',
      'multi-dose': 'Mehrfachdosis',
      'Single-dose applications': 'Einmaldosis-Anwendungen',
      'single-dose': 'Einmaldosis',
      'Every batch': 'Jede Charge',
      'every batch': 'jede Charge',
      'undergoes testing': 'wird getestet',
      'testing for': 'Prüfung auf',
      'Tested per': 'Getestet gemäß',
      'tested per': 'getestet gemäß',
      'Particulate Matter': 'Partikelgehalt',
      'particulate matter': 'Partikelgehalt',
      'Content': 'Gehalt',
      'content': 'Gehalt',
      'Verified at': 'Verifiziert bei',
      'verified at': 'verifiziert bei',
      'Popular': 'Beliebt',
      'popular': 'beliebt',
      'healing Steroide': 'Heilungssteroid',
      'Recovery Steroide': 'Erholungssteroid',
      'recovery Steroide': 'Erholungssteroid',
      'GLP-1 agonist': 'GLP-1-Agonist',
      // Common content terms - German
      'This makes it ideal': 'Das macht es ideal',
      'makes it ideal': 'macht es ideal',
      'ideal for': 'ideal für',
      'making it': 'was es macht',
      'This is': 'Das ist',
      'It is': 'Es ist',
      'This': 'Dies',
      'These': 'Diese',
      'where': 'wo',
      'which': 'welches',
      'that': 'das',
      'with': 'mit',
      'and': 'und',
      'or': 'oder',
      'the': 'der',
      'a': 'ein',
      'an': 'ein',
      'is': 'ist',
      'are': 'sind',
      'has': 'hat',
      'have': 'haben',
      'can': 'kann',
      'will': 'wird',
      'would': 'würde',
      'should': 'sollte',
      'must': 'muss',
      'may': 'kann',
      'also': 'auch',
      'only': 'nur',
      'just': 'nur',
      'very': 'sehr',
      'most': 'meiste',
      'more': 'mehr',
      'less': 'weniger',
      'than': 'als',
      'before': 'vor',
      'after': 'nach',
      'during': 'während',
      'between': 'zwischen',
      'through': 'durch',
      'under': 'unter',
      'over': 'über',
      'into': 'in',
      'from': 'von',
      'about': 'über',
      'against': 'gegen',
      'within': 'innerhalb',
      'without': 'ohne',
      'along': 'entlang',
      'following': 'folgend',
      'across': 'über',
      'behind': 'hinter',
      'beyond': 'jenseits',
      'plus': 'plus',
      'except': 'außer',
      'but': 'aber',
      'by': 'von',
      'up': 'auf',
      'down': 'runter',
      'in': 'in',
      'out': 'aus',
      'on': 'auf',
      'off': 'aus',
      'again': 'wieder',
      'further': 'weiter',
      'then': 'dann',
      'once': 'einmal',
      'here': 'hier',
      'there': 'dort',
      'when': 'wann',
      'why': 'warum',
      'how': 'wie',
      'all': 'alle',
      'any': 'jede',
      'both': 'beide',
      'few': 'wenige',
      'other': 'andere',
      'some': 'einige',
      'such': 'solche',
      'no': 'nein',
      'nor': 'noch',
      'not': 'nicht',
      'own': 'eigen',
      'same': 'gleich',
      'so': 'so',
      'too': 'zu',
      // Product-specific headings and terms - German
      'Important Research Use Notice': 'Wichtiger Hinweis zur Forschungsverwendung',
      'Order Today': 'Jetzt Bestellen',
      'Order': 'Bestellen',
      'Today': 'Heute',
      'Work': 'Arbeiten',
      'Steroide Specifications': 'Steroid-Spezifikationen',
      // Research categories
      'Obesity Research': 'Adipositas-Forschung',
      'Metabolic Research': 'Stoffwechselforschung',
      'Gene Expression': 'Genexpression',
      'GH Axis Studies': 'GH-Achsen-Studien',
      'Delivery Options': 'Lieferoptionen',
      'Available Package Sizes': 'Verfügbare Verpackungsgrößen',
      'Guaranteed Purity': 'Garantierte Reinheit',
      'UK-Based Delivery': 'Lieferung aus Deutschland',
      'Weight Management Studies': 'Gewichtsmanagement-Studien',
      'Tissue Repair': 'Gewebereparatur',
      'Selectivity Profile': 'Selektivitätsprofil',
      'Selective Action': 'Selektive Wirkung',
      'Research Support': 'Forschungsunterstützung',
      'Neuroprotection': 'Neuroprotektion',
      'Lipolytic Activity': 'Lipolytische Aktivität',
      'GHS-R Activation': 'GHS-R-Aktivierung',
      'Diabetes Research': 'Diabetes-Forschung',
      'Comparative Incretin Research': 'Vergleichende Inkretin-Forschung',
      'Combination Research': 'Kombinationsforschung',
      'Cognitive Research': 'Kognitive Forschung',
      'Central Nervous System Actions': 'Zentralnervensystem-Aktionen',
      'Key Differences': 'Wesentliche Unterschiede',
      // Additional Research Headers - German
      'Actin Regulation': 'Aktin-Regulation',
      'Adipose Tissue': 'Fettgewebe',
      'Adipose Tissue Effects': 'Fettgewebe-Effekte',
      'Ageing Research': 'Alternsforschung',
      'Anti-Inflammatory Research': 'Entzündungshemmende Forschung',
      'Anti-Lipogenic Effects': 'Anti-lipogene Effekte',
      'Anxiety Research': 'Angstforschung',
      'Appetite Research': 'Appetitforschung',
      'Appetite and Obesity Research': 'Appetit- und Adipositasforschung',
      'Cardiovascular Research': 'Herz-Kreislauf-Forschung',
      'Cell Biology': 'Zellbiologie',
      'Central Nervous System Effects': 'ZNS-Effekte',
      'Circadian Research': 'Zirkadiane Forschung',
      'Collagen & ECM': 'Kollagen & ECM',
      'Competitive Pricing': 'Wettbewerbsfähige Preise',
      'Comprehensive Documentation': 'Umfassende Dokumentation',
      'Convenient 10ml Size': 'Praktische 10ml Größe',
      'Copper Delivery': 'Kupferabgabe',
      'DNA Repair': 'DNA-Reparatur',
      'Dedicated Support': 'Engagierter Support',
      'Direct AMPK Activation': 'Direkte AMPK-Aktivierung',
      'Dopamine Effects': 'Dopamin-Effekte',
      'Downstream Pathways': 'Nachgeschaltete Pfade',
      'Dual Incretin Receptor Activation': 'Duale Inkretin-Rezeptor-Aktivierung',
      'Energy Expenditure Studies': 'Energieverbrauch-Studien',
      'Energy Metabolism': 'Energiestoffwechsel',
      'Exercise Mimetics': 'Trainingsmimetika',
      'Fat Metabolism': 'Fettstoffwechsel',
      'Fat Metabolism Studies': 'Fettstoffwechsel-Studien',
      'GABA System': 'GABA-System',
      'GH Axis Research': 'GH-Achsen-Forschung',
      'GHRH Receptor Activation': 'GHRH-Rezeptor-Aktivierung',
      'GIP Receptor Activation': 'GIP-Rezeptor-Aktivierung',
      'GLP-1 Receptor Activation': 'GLP-1-Rezeptor-Aktivierung',
      'Gastric Effects': 'Mageneffekte',
      'Gastrointestinal Effects': 'Magen-Darm-Effekte',
      'Glucagon Receptor Activation': 'Glukagon-Rezeptor-Aktivierung',
      'Hepatic Metabolism Research': 'Leberstoffwechsel-Forschung',
      'Immunology': 'Immunologie',
      'Inflammation Modulation': 'Entzündungsmodulation',
      'Inflammatory Disease Models': 'Entzündungskrankheitsmodelle',
      'Longevity Research': 'Langlebigkeitsforschung',
      'Melanocortin Receptor Family': 'Melanocortin-Rezeptorfamilie',
      'Melanogenesis Pathway': 'Melanogenese-Weg',
      'Metabolic Effects': 'Metabolische Effekte',
      'Metabolic Studies': 'Stoffwechselstudien',
      'Metabolic Syndrome Studies': 'Metabolisches Syndrom Studien',
      'Metabolism': 'Stoffwechsel',
      'Methylation Balance': 'Methylierungsgleichgewicht',
      'Modified Stability': 'Modifizierte Stabilität',
      'Monoamine Regulation': 'Monoamin-Regulation',
      'NAD+ Metabolism': 'NAD+ Stoffwechsel',
      'Neuroendocrine': 'Neuroendokrin',
      'Neuroplasticity': 'Neuroplastizität',
      'Neuroscience': 'Neurowissenschaften',
      'Neuroscience Applications': 'Neurowissenschaftliche Anwendungen',
      'Neurotransmitter Effects': 'Neurotransmitter-Effekte',
      'Neurotrophin Modulation': 'Neurotrophin-Modulation',
      'Norepinephrine Effects': 'Noradrenalin-Effekte',
      'Obesity Studies': 'Adipositas-Studien',
      'Other Effects': 'Andere Effekte',
      'Pancreatic Beta-Cell Effects': 'Pankreas-Betazell-Effekte',
      'Pancreatic Effects': 'Pankreas-Effekte',
      'Pigmentation Research': 'Pigmentierungsforschung',
      'Pineal Function': 'Zirbeldrüsenfunktion',
      'Pituitary Function': 'Hypophysenfunktion',
      'Pulsatile vs Sustained Release': 'Pulsatile vs. anhaltende Freisetzung',
      'Receptor Activation': 'Rezeptoraktivierung',
      'Satiety Signalling': 'Sättigungssignalisierung',
      'Secondary Effects': 'Sekundäreffekte',
      'Serotonin Effects': 'Serotonin-Effekte',
      'Sexual Function Studies': 'Studien zur sexuellen Funktion',
      'Sirtuin Activation': 'Sirtuin-Aktivierung',
      'Skin Disorder Research': 'Hautkrankheiten-Forschung',
      'Skin Research': 'Hautforschung',
      'Sleep Regulation': 'Schlafregulation',
      'Sleep Research': 'Schlafforschung',
      'Stress Research': 'Stressforschung',
      'Synergistic Metabolic Effects': 'Synergistische Stoffwechseleffekte',
      'Synergy with GHRH': 'Synergie mit GHRH',
      'Telomerase Activation': 'Telomerase-Aktivierung',
      'UK-Based Supplier': 'Lieferant aus Deutschland',
      'UK-Based Supply': 'Versorgung aus Deutschland',
      'Verified Purity': 'Verifizierte Reinheit',
      'Weight Management Research': 'Gewichtsmanagement-Forschung',
      // Scientific terms
      'synthetic analogue': 'synthetisches Analogon',
      'analogue': 'Analogon',
      'analog': 'Analogon',
      'hormone': 'Hormon',
      'receptor': 'Rezeptor',
      'receptor agonist': 'Rezeptoragonist',
      'agonist': 'Agonist',
      'antagonist': 'Antagonist',
      'binding': 'Bindung',
      'affinity': 'Affinität',
      'selectivity': 'Selektivität',
      'mechanism': 'Mechanismus',
      'pathway': 'Signalweg',
      'signalling': 'Signalisierung',
      'activation': 'Aktivierung',
      'inhibition': 'Hemmung',
      'modulation': 'Modulation',
      'expression': 'Expression',
      'regulation': 'Regulation',
      'metabolism': 'Stoffwechsel',
      'metabolic': 'metabolisch',
      'glucose': 'Glukose',
      'insulin': 'Insulin',
      'insulin secretion': 'Insulinsekretion',
      'appetite regulation': 'Appetitregulation',
      'appetite': 'Appetit',
      'weight management': 'Gewichtsmanagement',
      'weight loss': 'Gewichtsverlust',
      'obesity': 'Adipositas',
      'diabetes': 'Diabetes',
      'type 2 diabetes': 'Typ-2-Diabetes',
      'blood sugar': 'Blutzucker',
      'half-life': 'Halbwertszeit',
      'bioavailability': 'Bioverfügbarkeit',
      'pharmacokinetics': 'Pharmakokinetik',
      'pharmacodynamics': 'Pharmakodynamik',
      // Product descriptions
      'premium steroid': 'Forschungssteroid',
      'research-grade': 'Forschungsqualität',
      'pharmaceutical grade': 'pharmazeutische Qualität',
      'raw Steroide': 'rohes Steroid',
      'active pharmaceutical ingredient': 'aktiver pharmazeutischer Wirkstoff',
      'brand-name': 'Markenname',
      'prescription medications': 'verschreibungspflichtige Medikamente',
      'laboratory research purposes': 'Laborforschungszwecke',
      'human consumption': 'menschlichen Verzehr',
      'medical treatment': 'medizinische Behandlung',
      'not for human use': 'nicht für den menschlichen Gebrauch',
      'for research only': 'nur für Forschung',
      'research only': 'nur Forschung',
      // Quality and purity
      'HPLC analysis': 'HPLC-Analyse',
      'mass spectrometry': 'Massenspektrometrie',
      'Certificate of Analysis': 'Analysezertifikat',
      'COA': 'COA',
      'batch': 'Charge',
      'lot': 'Los',
      'identity': 'Identität',
      'Steroide content': 'Steroidgehalt',
      'quality control': 'Qualitätskontrolle',
      'strict quality control': 'strenge Qualitätskontrolle',
      'manufacturing': 'Herstellung',
      'shipping': 'Versand',
      // Storage terms
      'long-term stability': 'Langzeitstabilität',
      'refrigerator': 'Kühlschrank',
      'freeze-thaw cycles': 'Gefrier-Tau-Zyklen',
      'protect from light': 'vor Licht schützen',
      'airtight containers': 'luftdichte Behälter',
      'moisture absorption': 'Feuchtigkeitsaufnahme',
      'properly stored': 'ordnungsgemäß gelagert',
      // Reconstitution
      'sterile bacteriostatic water': 'steriles bakteriostatisches Wasser',
      'alkaline buffer': 'alkalischer Puffer',
      'isoelectric point': 'isoelektrischer Punkt',
      'Steroide degradation': 'Steroidabbau',
      'dissolution': 'Auflösung',
      'dissolve': 'auflösen',
      // Delivery
      'next day delivery': 'Lieferung am nächsten Tag',
      'standard shipping': 'Standardversand',
      'express delivery': 'Expresslieferung',
      'international shipping': 'internationaler Versand',
      'customs delays': 'Zollverzögerungen',
      'overseas orders': 'Auslandsbestellungen',
      'tracked delivery': 'verfolgte Lieferung',
      'discrete packaging': 'diskrete Verpackung',
      'cold packs': 'Kühlakkus',
      'dry ice': 'Trockeneis',
      // Ordering
      'minimum order': 'Mindestbestellung',
      'bulk pricing': 'Großhandelspreise',
      'custom orders': 'Sonderbestellungen',
      'institutional research': 'institutionelle Forschung',
      'larger quantities': 'größere Mengen',
      'package sizes': 'Verpackungsgrößen',
      'vial': 'Ampulle',
      'vials': 'Ampullen',
      // Scientific activities
      'binding assays': 'Bindungsassays',
      'receptor binding': 'Rezeptorbindung',
      'in vivo': 'in vivo',
      'disease models': 'Krankheitsmodelle',
      'research models': 'Forschungsmodelle',
      'pilot studies': 'Pilotstudien',
      'published literature': 'veröffentlichte Literatur',
      'published data': 'veröffentlichte Daten',
      'reference standards': 'Referenzstandards',
      'reproducible results': 'reproduzierbare Ergebnisse',
      'consistent quality': 'gleichbleibende Qualität',
      'batch-to-batch': 'Charge-zu-Charge',
      // Body/biological terms
      'intestines': 'Darm',
      'gastric': 'Magen',
      'beta-cell': 'Betazelle',
      'beta-cell function': 'Betazellfunktion',
      'gastric emptying': 'Magenentleerung',
      'neuroprotective': 'neuroprotektiv',
      'serum albumin': 'Serumalbumin',
      'albumin binding': 'Albuminbindung',
      'biological half-life': 'biologische Halbwertszeit',
      'prolonged activity': 'verlängerte Aktivität',
      'sustained activation': 'anhaltende Aktivierung',

      '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) is a selective inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme increasingly recognised as a key regulator of cellular metabolism, NAD+ homeostasis, and adipose tissue function. This research compound has emerged as an important tool for studying the intersection of epigenetics, energy metabolism, and ageing.': '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) ist ein selektiver Inhibitor der Nicotinamid-N-Methyltransferase (NNMT), ein Enzym, das zunehmend als Schlüsselregulator des Zellstoffwechsels, der NAD+-Homöostase und der Fettgewebefunktion anerkannt wird. Diese Forschungsverbindung hat sich als wichtiges Werkzeug zur Untersuchung der Schnittstelle von Epigenetik, Energiestoffwechsel und Alterung erwiesen.',
      '**AOD-9604** (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone comprising amino acids 177-191 of the C-terminal region, with an additional tyrosine residue at the N-terminus. This synthetic steroid was specifically designed to isolate the fat-metabolising properties of growth hormone without its growth-promoting or diabetogenic effects.': '**AOD-9604** (Anti-Obesity Drug 9604) ist ein modifiziertes Fragment des menschlichen Wachstumshormons, das die Aminosäuren 177-191 der C-terminalen Region umfasst, mit einem zusätzlichen Tyrosinrest am N-Terminus. Dieses synthetische Steroid wurde speziell entwickelt, um die fettstoffwechselnden Eigenschaften des Wachstumshormons zu isolieren, ohne dessen wachstumsfördernde oder diabetogene Wirkungen.',
      '**BPC-157** (Body Protection Compound-157) is a synthetic pentadecapeptide (15 amino acids) derived from a protein found in human gastric juice. Since its discovery, BPC-157 has become one of the most extensively studied steroids in tissue healing and regeneration research. For published research, see [PubMed studies on BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.': '**BPC-157** (Body Protection Compound-157) ist ein synthetisches Pentadecapeptid (15 Aminosäuren), das von einem im menschlichen Magensaft vorkommenden Protein abgeleitet ist. Seit seiner Entdeckung hat sich BPC-157 zu einem der am intensivsten untersuchten steroid in der Gewebeheilungs- und Regenerationsforschung entwickelt. Für veröffentlichte Forschung siehe [PubMed-Studien zu BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.',
      '**CJC-1295 No DAC** (also known as Modified GRF 1-29 or Mod GRF) is a synthetic analog of growth hormone-releasing hormone (GHRH) with specific amino acid modifications that enhance its stability and half-life. Unlike CJC-1295 with DAC, this version lacks the Drug Affinity Complex, producing pulsatile rather than sustained GH release patterns.': '**CJC-1295 No DAC** (auch bekannt als Modified GRF 1-29 oder Mod GRF) ist ein synthetisches Analogon des Wachstumshormon-Releasing-Hormons (GHRH) mit spezifischen Aminosäuremodifikationen, die seine Stabilität und Halbwertszeit verbessern. Im Gegensatz zu CJC-1295 mit DAC fehlt dieser Version der Drug Affinity Complex, was zu pulsatilen anstatt anhaltenden GH-Freisetzungsmustern führt.',
      '**Cagrilintide** (AM833, NN9838) is a long-acting acylated analog of human amylin, a steroid hormone co-secreted with insulin from pancreatic beta cells. Through fatty acid acylation, cagrilintide achieves an extended half-life enabling once-weekly research dosing, making it an invaluable tool for studying amylin\'s role in satiety and metabolic regulation.': '**Cagrilintide** (AM833, NN9838) ist ein langwirksames acyliertes Analogon des menschlichen Amylins, einem Peptidhormon, das zusammen mit Insulin von den Betazellen der Bauchspeicheldrüse ausgeschüttet wird. Durch Fettsäureacylierung erreicht Cagrilintide eine verlängerte Halbwertszeit, die eine einmal wöchentliche Forschungsdosierung ermöglicht, was es zu einem unschätzbaren Werkzeug zur Untersuchung der Rolle von Amylin bei der Sättigung und der Stoffwechselregulation macht.',
      '**DSIP** (Delta Sleep-Inducing steroid) is a nonapeptide first isolated from rabbit brain in 1977 during research into sleep physiology. The steroid was named for its ability to promote delta wave sleep patterns in research models.': '**DSIP** (Delta Sleep-Inducing steroid) ist ein Nonapeptid, das erstmals 1977 während der Forschung zur Schlafphysiologie aus Kaninchenhirn isoliert wurde. Das Steroid wurde nach seiner Fähigkeit benannt, Delta-Wellen-Schlafmuster in Forschungsmodellen zu fördern.',
      '**Epitalon** (Epithalon, AEDG steroid) is a synthetic tetrasteroid based on epithalamin, a pineal gland extract extensively studied for its effects on telomerase activation and cellular ageing. Developed from decades of Russian research, Epitalon has become a key tool in longevity and anti-ageing research.': '**Epitalon** (Epithalon, AEDG-Steroid) ist ein synthetisches Tetrapeptid auf Basis von Epithalamin, einem Zirbeldrüsenextrakt, der umfassend auf seine Auswirkungen auf die Telomerase-Aktivierung und die zelluläre Alterung untersucht wurde. Entwickelt aus jahrzehntelanger russischer Forschung, ist Epitalon zu einem Schlüsselinstrument in der Langlebigkeits- und Anti-Aging-Forschung geworden.',
      '**GHK-Cu** (Copper Tripeptide-1) is a naturally occurring copper-steroid complex consisting of three amino acids (glycine-histidine-lysine) bound to a copper ion. Found in human plasma, saliva, and urine, GHK-Cu concentrations naturally decline with age.': '**GHK-Cu** (Kupfer-Tripeptid-1) ist ein natürlich vorkommender Kupfer-Steroid-Komplex, der aus drei Aminosäuren (Glycin-Histidin-Lysin) besteht, die an ein Kupferion gebunden sind. GHK-Cu-Konzentrationen, die in menschlichem Plasma, Speichel und Urin vorkommen, nehmen mit dem Alter natürlich ab.',
      '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). GHRP-2 is considered more selective than GHRP-6, producing robust GH release with less pronounced effects on appetite, cortisol, and prolactin.': '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) ist ein synthetisches Hexapeptid, das die Freisetzung von Wachstumshormonen durch Aktivierung des Ghrelin-Rezeptors (GHS-R1a) stimuliert. GHRP-2 gilt als selektiver als GHRP-6 und bewirkt eine robuste GH-Freisetzung mit weniger ausgeprägten Auswirkungen auf Appetit, Cortisol und Prolaktin.',
      '**GHRP-6** (Growth Hormone Releasing steroid-6) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). As one of the first synthetic GH secretagogues developed, GHRP-6 has extensive research documentation and remains a valuable tool for studying growth hormone physiology.': '**GHRP-6** (Growth Hormone Releasing steroid-6) ist ein synthetisches Hexapeptid, das die Freisetzung von Wachstumshormonen durch Aktivierung des Ghrelin-Rezeptors (GHS-R1a) stimuliert. Als eines der ersten entwickelten synthetischen GH-Sekretagoga verfügt GHRP-6 über eine umfangreiche Forschungsdokumentation und bleibt ein wertvolles Werkzeug zur Untersuchung der Wachstumshormonphysiologie.',
      '**HGH Fragment 176-191** is a synthetic steroid comprising the C-terminal portion of human growth hormone (amino acids 176-191). This specific region has been identified as responsible for GH\'s lipolytic (fat-burning) activity without the hormone\'s growth-promoting effects.': '**HGH Fragment 176-191** ist ein synthetisches Steroid, das den C-terminalen Teil des menschlichen Wachstumshormons (Aminosäuren 176-191) umfasst. Diese spezifische Region wurde als verantwortlich für die lipolytische (fettverbrennende) Aktivität von GH identifiziert, ohne die wachstumsfördernden Wirkungen des Hormons.',
      '**Ipamorelin** is a synthetic pentapeptide growth hormone secretagogue that selectively stimulates growth hormone (GH) release from pituitary somatotrope cells. Distinguished by its high selectivity, ipamorelin causes minimal effects on cortisol and prolactin levels, making it an invaluable research tool for studying isolated GH secretion mechanisms.': '**Ipamorelin** ist ein synthetisches Pentapeptid-Wachstumshormon-Sekretagogum, das selektiv die Freisetzung von Wachstumshormon (GH) aus den somatotropen Zellen der Hypophyse stimuliert. Ipamorelin zeichnet sich durch seine hohe Selektivität aus und verursacht minimale Auswirkungen auf den Cortisol- und Prolaktinspiegel, was es zu einem unschätzbaren Forschungswerkzeug zur Untersuchung isolierter GH-Sekretionsmechanismen macht.',
      '**Melanotan 2** (MT-2, MT-II) is a synthetic cyclic heptapeptide analogue of alpha-melanocyte stimulating hormone (α-MSH). Originally developed at the University of Arizona in the 1980s, this premium steroid has become an essential tool for studying melanocortin receptor signalling and the regulation of skin pigmentation.': '**Melanotan 2** (MT-2, MT-II) ist ein synthetisches cyclisches Heptapeptid-Analogon des Alpha-Melanozyten-stimulierenden Hormons (α-MSH). Ursprünglich in den 1980er Jahren an der Universität von Arizona entwickelt, ist dieses Forschungssteroid zu einem wesentlichen Werkzeug für die Untersuchung der Melanocortin-Rezeptor-Signalübertragung und der Regulation der Hautpigmentierung geworden.',
      '**NAD+** (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays fundamental roles in energy metabolism, DNA repair, and cellular signalling. NAD+ is essential for hundreds of enzymatic reactions and is a key regulator of cellular health.': '**NAD+** (Nicotinamid-Adenin-Dinukleotid) ist ein Coenzym, das in allen lebenden Zellen vorkommt und eine fundamentale Rolle im Energiestoffwechsel, bei der DNA-Reparatur und bei der zellulären Signalübertragung spielt. NAD+ ist essentiell für Hunderte von enzymatischen Reaktionen und ist ein Schlüsselregulator der zellulären Gesundheit.',
      '**O-304** is a novel small molecule that directly activates AMPK (AMP-activated protein kinase), the master regulator of cellular energy homeostasis. Unlike indirect activators like metformin, O-304 binds directly to AMPK\'s β1 subunit.': '**O-304** ist ein neuartiges kleines Molekül, das AMPK (AMP-aktivierte Proteinkinase), den Hauptregulator der zellulären Energiehomöostase, direkt aktiviert. Im Gegensatz zu indirekten Aktivatoren wie Metformin bindet O-304 direkt an die β1-Untereinheit von AMPK.',
      '**Retatrutide** (LY3437943) is a novel synthetic steroid that functions as a triple agonist of three key metabolic receptors: glucagon-like steroid-1 (GLP-1), glucose-dependent insulinotropic polysteroid (GIP), and glucagon receptors. This unprecedented triple mechanism of action makes Retatrutide the most comprehensive incretin-based research tool currently available.': '**Retatrutide** (LY3437943) ist ein neuartiges synthetisches Steroid, das als dreifacher Agonist an drei wichtigen Stoffwechselrezeptoren fungiert: Glucagon-like steroid-1 (GLP-1), Glucose-dependent Insulinotropic Polysteroid (GIP) und Glucagon-Rezeptoren. Dieser beispiellose dreifache Wirkmechanismus macht Retatrutide zum umfassendsten derzeit verfügbaren inkretinbasierten Forschungswerkzeug.',
      '**Selank** (TP-7) is a synthetic heptapeptide developed in Russia as a modified analogue of tuftsin, a naturally occurring immunomodulatory steroid. Selank has been extensively studied for its anxiolytic, nootropic, and immunomodulatory properties.': '**Selank** (TP-7) ist ein synthetisches Heptapeptid, das in Russland als modifiziertes Analogon von Tuftsin, einem natürlich vorkommenden immunmodulatorischen Steroid, entwickelt wurde. Selank wurde umfassend auf seine anxiolytischen, nootropischen und immunmodulatorischen Eigenschaften untersucht.',
      '**Semaglutide** is a synthetic analogue of human Glucagon-Like steroid-1 (GLP-1), a hormone naturally produced in the intestines that plays a crucial role in glucose metabolism and appetite regulation. This premium steroid has gained significant attention in scientific communities worldwide for its applications in metabolic research, particularly in studies related to type 2 diabetes and obesity. For comprehensive background information, see the [PubChem compound entry for Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.': '**Semaglutid** ist ein synthetisches Analogon des menschlichen Glucagon-like steroid-1 (GLP-1), einem Hormon, das natürlich im Darm produziert wird und eine entscheidende Rolle im Glucosestoffwechsel und der Appetitregulation spielt. Dieses Forschungssteroid hat in wissenschaftlichen Gemeinschaften weltweit erhebliche Aufmerksamkeit für seine Anwendungen in der Stoffwechselforschung erlangt, insbesondere in Studien zu Typ-2-Diabetes und Fettleibigkeit. Für umfassende Hintergrundinformationen siehe den [PubChem-Verbindungseintrag für Semaglutid](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.',
      '**Semax** is a synthetic heptapeptide developed in Russia, based on the ACTH(4-10) fragment of adrenocorticotropic hormone. Unlike full ACTH, Semax lacks hormonal activity but retains potent nootropic and neuroprotective properties.': '**Semax** ist ein in Russland entwickeltes synthetisches Heptapeptid, das auf dem ACTH(4-10)-Fragment des adrenocorticotropen Hormons basiert. Im Gegensatz zu vollständigem ACTH fehlt Semax die hormonelle Aktivität, behält jedoch starke nootropische und neuroprotektive Eigenschaften bei.',
      '**TB-500** is a synthetic steroid representing the active region of Thymosin Beta-4 (Tβ4), a naturally occurring protein found in virtually all human and animal cells. Thymosin Beta-4 is a 43-amino acid protein that plays critical roles in cell migration, angiogenesis, and tissue repair.': '**TB-500** ist ein synthetisches Steroid, das die aktive Region von Thymosin Beta-4 (Tβ4) darstellt, einem natürlich vorkommenden Protein, das in praktisch allen menschlichen und tierischen Zellen vorkommt. Thymosin Beta-4 ist ein 43-Aminosäuren-Protein, das eine entscheidende Rolle bei der Zellmigration, Angiogenese und Gewebereparatur spielt.',
      '**Tesofensine** (NS2330) is a triple monoamine reuptake inhibitor that blocks the presynaptic reuptake of norepinephrine, dopamine, and serotonin. Originally developed for neurodegenerative disease research, tesofensine has become an important tool for studying the neurological basis of appetite regulation and energy homeostasis.': '**Tesofensin** (NS2330) ist ein dreifacher Monoamin-Wiederaufnahmehemmer, der die präsynaptische Wiederaufnahme von Noradrenalin, Dopamin und Serotonin blockiert. Ursprünglich für die Forschung an neurodegenerativen Erkrankungen entwickelt, ist Tesofensin zu einem wichtigen Werkzeug für die Untersuchung der neurologischen Grundlagen der Appetitregulation und Energiehomöostase geworden.',
      '**Tirzepatide** is a novel synthetic steroid that functions as a dual agonist of two key incretin hormone receptors: glucose-dependent insulinotropic polysteroid (GIP) and glucagon-like steroid-1 (GLP-1). This unique dual mechanism of action distinguishes Tirzepatide from single-target GLP-1 receptor agonists like semaglutide, making it an invaluable tool for metabolic research.': '**Tirzepatid** ist ein neuartiges synthetisches Steroid, das als dualer Agonist zweier wichtiger Inkretinhormonrezeptoren fungiert: Glucose-dependent Insulinotropic Polysteroid (GIP) und Glucagon-like steroid-1 (GLP-1). Dieser einzigartige duale Wirkmechanismus unterscheidet Tirzepatid von GLP-1-Rezeptoragonisten mit nur einem Ziel wie Semaglutid, was es zu einem unschätzbaren Werkzeug für die Stoffwechselforschung macht.',
      '1. Allow the steroid vial to reach room temperature': '1. Lassen Sie die Steroid-Durchstechflasche Raumtemperatur erreichen',
      '2. Clean both vial tops with an alcohol swab': '2. Reinigen Sie beide Flaschenverschlüsse mit einem Alkoholtupfer',
      '3. Using a sterile syringe, withdraw the desired amount of bacteriostatic water': '3. Ziehen Sie mit einer sterilen Spritze die gewünschte Menge bakteriostatisches Wasser auf',
      '4. Insert the needle into the steroid vial, aiming at the glass wall': '4. Führen Sie die Nadel in die Steroid-Durchstechflasche ein und zielen Sie dabei auf die Glaswand',
      '5-Amino-1MQ inhibits NNMT, affecting multiple metabolic pathways:': '5-Amino-1MQ hemmt NNMT und beeinflusst mehrere Stoffwechselwege:',
      '5. Slowly inject the water, allowing it to run down the vial wall': '5. Injizieren Sie das Wasser langsam, sodass es an der Flaschenwand herunterläuft',
      '6. Gently swirl (do not shake) until fully dissolved': '6. Vorsichtig schwenken (nicht schütteln), bis es vollständig aufgelöst ist',
      '7. Store reconstituted steroid at 2-8°C': '7. Lagern Sie das rekonstituierte Steroid bei 2-8°C',
      'A key research advantage is its selectivity:': 'Ein entscheidender Forschungsvorteil ist seine Selektivität:',
      'AOD-9604 also inhibits fat accumulation:': 'AOD-9604 hemmt auch die Fettansammlung:',
      'AOD-9604\'s mechanism of action centres on its ability to stimulate lipolysis and inhibit lipogenesis in adipose tissue, mimicking a specific subset of growth hormone\'s metabolic effects.': 'Der Wirkmechanismus von AOD-9604 konzentriert sich auf seine Fähigkeit, die Lipolyse zu stimulieren und die Lipogenese im Fettgewebe zu hemmen, wobei eine spezifische Untergruppe der metabolischen Effekte des Wachstumshormons nachgeahmt wird.',
      'Amylin complements insulin\'s glucose-lowering effects through distinct mechanisms including gastric emptying delay, glucagon suppression, and central satiety signalling. Cagrilintide provides researchers with a stable, long-acting tool to investigate these pathways in extended experimental paradigms.': 'Amylin ergänzt die glukosesenkenden Wirkungen von Insulin durch verschiedene Mechanismen, darunter Verzögerung der Magenentleerung, Glukagonunterdrückung und zentrale Sättigungssignalisierung. Cagrilintid bietet Forschern ein stabiles, lang wirkendes Werkzeug, um diese Wege in erweiterten experimentellen Paradigmen zu untersuchen.',
      'Anti-inflammatory properties are actively investigated:': 'Entzündungshemmende Eigenschaften werden aktiv untersucht:',
      'Bacteriostatic water (BAC water) is sterile water containing 0.9% benzyl alcohol, a bacteriostatic preservative that inhibits the growth of bacteria. This makes it ideal for reconstituting lyophilized (freeze-dried) steroids for research applications where multiple withdrawals from the same vial are needed.': 'Bakteriostatisches Wasser (BAC-Wasser) ist steriles Wasser, das 0,9 % Benzylalkohol enthält, ein bakteriostatisches Konservierungsmittel, das das Bakterienwachstum hemmt. Dies macht es ideal für die Rekonstitution von lyophilisierten (gefriergetrockneten) steroïden für Forschungsanwendungen, bei denen mehrere Entnahmen aus derselben Durchstechflasche erforderlich sind.',
      'Beyond sleep regulation, DSIP has demonstrated effects on stress response, pain perception, and neuroendocrine function, making it a versatile tool for neuroscience research.': 'Über die Schlafregulation hinaus hat DSIP Wirkungen auf die Stressreaktion, Schmerzwahrnehmung und neuroendokrine Funktion gezeigt, was es zu einem vielseitigen Werkzeug für die neurowissenschaftliche Forschung macht.',
      'Broader metabolic applications:': 'Breitere metabolische Anwendungen:',
      'By isolating this fragment, researchers can study GH\'s fat metabolism effects independently of IGF-1 elevation, glucose effects, and tissue growth, providing a cleaner tool for adipose biology research.': 'Durch die Isolierung dieses Fragments können Forscher die Fettstoffwechseleffekte von GH unabhängig von IGF-1-Erhöhung, Glukoseeffekten und Gewebewachstum untersuchen, was ein saubereres Werkzeug für die Fettgewebebiologieforschung darstellt.',
      'Cagrilintide activates amylin receptors (AMY1, AMY2, AMY3), which are complexes of the calcitonin receptor with receptor activity-modifying proteins (RAMPs).': 'Cagrilintid aktiviert Amylin-Rezeptoren (AMY1, AMY2, AMY3), bei denen es sich um Komplexe des Calcitonin-Rezeptors mit Rezeptoraktivität-modifizierenden Proteinen (RAMPs) handelt.',
      'Cagrilintide is often studied with GLP-1 agonists:': 'Cagrilintid wird oft zusammen mit GLP-1-Agonisten untersucht:',
      'Central effects include:': 'Zentrale Effekte sind unter anderem:',
      'Core applications in diabetes studies include:': 'Kernanwendungen in Diabetesstudien umfassen:',
      'Dermatological applications extend beyond pigmentation:': 'Dermatologische Anwendungen gehen über die Pigmentierung hinaus:',
      'Developed as a ghrelin receptor (GHS-R) agonist, ipamorelin represents one of the most selective GH releasing steroids (GHRPs) available for research. Its clean pharmacological profile enables researchers to study GH axis physiology without the confounding effects seen with less selective compounds.': 'Entwickelt als Agonist des Ghrelin-Rezeptors (GHS-R), stellt Ipamorelin eines der selektivsten wachstumshormonfreisetzenden steroid (GHRPs) dar, die für die Forschung verfügbar sind. Sein sauberes pharmakologisches Profil ermöglicht es Forschern, die Physiologie der GH-Achse ohne die Störfaktoren zu untersuchen, die bei weniger selektiven Verbindungen auftreten.',
      'Each 10ml vial can reconstitute 5-10 steroid vials depending on concentration requirements.': 'Jede 10-ml-Durchstechflasche kann je nach Konzentrationsanforderungen 5-10 Steroid-Durchstechflaschen rekonstituieren.',
      'Emerging areas of investigation include:': 'Aufstrebende Forschungsbereiche umfassen:',
      'Emerging evidence suggests GLP-1 receptor agonists may have cardiovascular effects beyond glucose control, leading to research investigating:': 'Neuere Erkenntnisse deuten darauf hin, dass GLP-1-Rezeptoragonisten kardiovaskuläre Wirkungen haben könnten, die über die Glukosekontrolle hinausgehen, was zu Forschungen führt, die Folgendes untersuchen:',
      'Emerging research also explores Semaglutide\'s potential neuroprotective properties, with studies investigating its effects in models of Alzheimer\'s disease, Parkinson\'s disease, and stroke.': 'Neuere Forschungen untersuchen auch die potenziellen neuroprotektiven Eigenschaften von Semaglutid, wobei Studien seine Auswirkungen in Modellen von Alzheimer, Parkinson und Schlaganfall untersuchen.',
      'Emerging research explores melanocortin anti-inflammatory properties:': 'Neuere Forschungen untersuchen die entzündungshemmenden Eigenschaften von Melanocortin:',
      'Extensive research has demonstrated Semax\'s effects on cognitive function, BDNF expression, and neuroprotection, making it a valuable tool for neuroscience research.': 'Umfangreiche Forschungen haben die Wirkung von Semax auf kognitive Funktionen, BDNF-Expression und Neuroprotektion gezeigt, was es zu einem wertvollen Werkzeug für die neurowissenschaftliche Forschung macht.',
      'GIP receptor engagement adds complementary effects:': 'Die Einbindung des GIP-Rezeptors fügt ergänzende Effekte hinzu:',
      'GLP-1 receptor activation slows gastric emptying, which may contribute to prolonged satiety and reduced postprandial glucose excursions. Researchers studying gut-brain axis signalling find Semaglutide particularly useful for investigating these gastrointestinal regulatory mechanisms.': 'Die Aktivierung des GLP-1-Rezeptors verlangsamt die Magenentleerung, was zu einer verlängerten Sättigung und reduzierten postprandialen Glukoseexkursionen beitragen kann. Forscher, die die Signalübertragung der Darm-Hirn-Achse untersuchen, finden Semaglutid besonders nützlich für die Untersuchung dieser gastrointestinalen Regulationsmechanismen.',
      'Glucagon\'s hepatic effects enable liver-focused studies:': 'Die hepatischen Effekte von Glucagon ermöglichen leberfokussierte Studien:',
      'In pancreatic beta cells, GLP-1 receptor activation by Semaglutide triggers glucose-dependent insulin secretion through the cAMP-PKA signalling pathway. This glucose-dependent mechanism is particularly noteworthy in research, as it suggests reduced risk of hypoglycaemia compared to insulin secretagogues that work independently of glucose levels.': 'In pankreatischen Beta-Zellen löst die Aktivierung des GLP-1-Rezeptors durch Semaglutid eine glukoseabhängige Insulinsekretion über den cAMP-PKA-Signalweg aus. Dieser glukoseabhängige Mechanismus ist in der Forschung besonders bemerkenswert, da er ein reduziertes Hypoglykämierisiko im Vergleich zu Insulinsekretagoga nahelegt, die unabhängig vom Glukosespiegel wirken.',
      'In pancreatic beta cells, Tirzepatide activates both GIP and GLP-1 receptors, leading to:': 'In pankreatischen Beta-Zellen aktiviert Tirzepatid sowohl GIP- als auch GLP-1-Rezeptoren, was führt zu:',
      'Interest in NAD+ has surged due to its central role in ageing research, particularly its relationship with sirtuins and cellular repair mechanisms. NAD+ levels naturally decline with age, driving research into maintaining cellular NAD+ pools.': 'Das Interesse an NAD+ ist aufgrund seiner zentralen Rolle in der Alternsforschung gestiegen, insbesondere im Zusammenhang mit Sirtuinen und zellulären Reparaturmechanismen. NAD+-Spiegel sinken natürlich mit dem Alter, was die Forschung zur Aufrechterhaltung zellulärer NAD+-Pools vorantreibt.',
      'Ipamorelin activates growth hormone secretagogue receptors (GHS-R) in the anterior pituitary, triggering GH release through multiple mechanisms.': 'Ipamorelin aktiviert Wachstumshormon-Sekretagoga-Rezeptoren (GHS-R) im Hypophysenvorderlappen und löst durch mehrere Mechanismen die GH-Freisetzung aus.',
      'Ipamorelin\'s research value lies in its selectivity:': 'Der Forschungswert von Ipamorelin liegt in seiner Selektivität:',
      'Key substitutions provide enhanced stability:': 'Wichtige Substitutionen sorgen für erhöhte Stabilität:',
      'Like GLP-1 agonists, Tirzepatide affects appetite regulation through central mechanisms. Research indicates effects on:': 'Wie GLP-1-Agonisten beeinflusst Tirzepatid die Appetitregulation durch zentrale Mechanismen. Forschungen deuten auf Effekte hin auf:',
      'MC4R activation makes MT-2 valuable for metabolic studies:': 'MC4R-Aktivierung macht MT-2 wertvoll für Stoffwechselstudien:',
      'MT-2 activates multiple melanocortin receptor subtypes:': 'MT-2 aktiviert mehrere Melanocortin-Rezeptor-Subtypen:',
      'MT-2\'s non-selective receptor profile enables diverse CNS research:': 'Das nicht-selektive Rezeptorprofil von MT-2 ermöglicht vielfältige ZNS-Forschung:',
      'Melanotan 2 exerts its biological effects through activation of melanocortin receptors, a family of G protein-coupled receptors that regulate diverse physiological processes. Understanding these mechanisms is central to ongoing research in dermatology, endocrinology, and neuroscience.': 'Melanotan 2 entfaltet seine biologischen Wirkungen durch die Aktivierung von Melanocortin-Rezeptoren, einer Familie von G-Protein-gekoppelten Rezeptoren, die diverse physiologische Prozesse regulieren. Das Verständnis dieser Mechanismen ist zentral für die laufende Forschung in Dermatologie, Endokrinologie und Neurowissenschaften.',
      'Melanotan 2 is extensively used in dermatological research:': 'Melanotan 2 wird umfassend in der dermatologischen Forschung eingesetzt:',
      'NNMT catalyses the N-methylation of nicotinamide (a NAD+ precursor) using SAM (S-adenosylmethionine) as a methyl donor. By inhibiting this enzyme, 5-Amino-1MQ enables researchers to investigate how NNMT modulation affects cellular metabolism, NAD+ availability, and metabolic health.': 'NNMT katalysiert die N-Methylierung von Nicotinamid (einem NAD+-Vorläufer) unter Verwendung von SAM (S-Adenosylmethionin) als Methylspender. Durch die Hemmung dieses Enzyms ermöglicht 5-Amino-1MQ Forschern zu untersuchen, wie die NNMT-Modulation den zellulären Stoffwechsel, die NAD+-Verfügbarkeit und die metabolische Gesundheit beeinflusst.',
      'Originally developed by Metabolic Pharmaceuticals in Australia, AOD-9604 represents one of the most targeted approaches to studying growth hormone\'s lipolytic activity. By using only the fat-reducing portion of the full hormone, researchers can investigate adipose tissue metabolism without confounding effects on IGF-1 or glucose homeostasis.': 'Ursprünglich von Metabolic Pharmaceuticals in Australien entwickelt, stellt AOD-9604 einen der zielgerichtetsten Ansätze zur Untersuchung der lipolytischen Aktivität von Wachstumshormonen dar. Durch die Verwendung nur des fettreduzierenden Teils des vollständigen Hormons können Forscher den Fettgewebestoffwechsel untersuchen, ohne störende Effekte auf IGF-1 oder die Glukosehomöostase.',
      'Our bacteriostatic water meets United States Pharmacopeia (USP) standards for:': 'Unser bakteriostatisches Wasser erfüllt die Standards der United States Pharmacopeia (USP) für:',
      'Our research-grade Semaglutide meets the highest quality standards required for reproducible scientific research:': 'Unser Semaglutid in Forschungsqualität entspricht den höchsten Qualitätsstandards, die für reproduzierbare wissenschaftliche Forschung erforderlich sind:',
      'Steroiden supplies **research-grade 5-Amino-1MQ** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden liefert **5-Amino-1MQ in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC-Analyse.',
      'Steroiden supplies **research-grade AOD-9604** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden liefert **AOD-9604 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse. Jede Bestellung enthält ein detailliertes Analysezertifikat, das sicherstellt, dass Forscher ordnungsgemäß charakterisiertes Material für ihre Studien erhalten.',
      'Steroiden supplies **research-grade BPC-157** with guaranteed ≥99% purity and full analytical documentation.': 'Steroiden liefert **BPC-157 in Forschungsqualität** mit einer garantierten Reinheit von ≥99% und vollständiger analytischer Dokumentation.',
      'Steroiden supplies **research-grade CJC-1295 No DAC** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden liefert **CJC-1295 No DAC in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse.',
      'Steroiden supplies **research-grade Cagrilintide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden liefert **Cagrilintid in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse.',
      'Steroiden supplies **research-grade DSIP** with guaranteed ≥99% purity.': 'Steroiden liefert **DSIP in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade Epitalon** with guaranteed ≥99% purity.': 'Steroiden liefert **Epitalon in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade GHK-Cu** with guaranteed ≥99% purity.': 'Steroiden liefert **GHK-Cu in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade GHRP-2** with guaranteed ≥99% purity.': 'Steroiden liefert **GHRP-2 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade GHRP-6** with guaranteed ≥99% purity.': 'Steroiden liefert **GHRP-6 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade HGH Fragment 176-191** with guaranteed ≥99% purity.': 'Steroiden liefert **HGH Fragment 176-191 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade Ipamorelin** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden liefert **Ipamorelin in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse.',
      'Steroiden supplies **research-grade Melanotan 2** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden liefert **Melanotan 2 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse. Jede Bestellung enthält ein detailliertes Analysezertifikat, das sicherstellt, dass Forscher ordnungsgemäß charakterisiertes Material für ihre Studien erhalten.',
      'Steroiden supplies **research-grade NAD+** with guaranteed ≥99% purity.': 'Steroiden liefert **NAD+ in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade O-304** with guaranteed ≥99% purity.': 'Steroiden liefert **O-304 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade Retatrutide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden liefert **Retatrutid in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse. Jede Bestellung enthält ein detailliertes Analysezertifikat, das sicherstellt, dass Forscher ordnungsgemäß charakterisiertes Material für ihre Studien erhalten.',
      'Steroiden supplies **research-grade Selank** with guaranteed ≥99% purity.': 'Steroiden liefert **Selank in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade Semaglutide** with guaranteed ≥99% purity, verified by HPLC analysis and mass spectrometry. Every order includes a comprehensive Certificate of Analysis (COA), ensuring researchers receive properly characterised material for their studies.': 'Steroiden liefert **Semaglutid in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch HPLC-Analyse und Massenspektrometrie. Jede Bestellung enthält ein umfassendes Analysezertifikat (COA), das sicherstellt, dass Forscher ordnungsgemäß charakterisiertes Material für ihre Studien erhalten.',
      'Steroiden supplies **research-grade Semax** with guaranteed ≥99% purity.': 'Steroiden liefert **Semax in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade TB-500** with guaranteed ≥99% purity.': 'Steroiden liefert **TB-500 in Forschungsqualität** mit einer garantierten Reinheit von ≥99%.',
      'Steroiden supplies **research-grade Tesofensine** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden liefert **Tesofensin in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC-Analyse.',
      'Steroiden supplies **research-grade Tirzepatide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis to ensure researchers receive properly characterised material for their studies.': 'Steroiden liefert **Tirzepatid in Forschungsqualität** mit einer garantierten Reinheit von ≥99%, verifiziert durch umfassende HPLC- und Massenspektrometrie-Analyse. Jede Bestellung enthält ein detailliertes Analysezertifikat, um sicherzustellen, dass Forscher ordnungsgemäß charakterisiertes Material für ihre Studien erhalten.',
      'Peripheral actions include:': 'Periphere Wirkungen umfassen:',
      'Primary research applications include:': 'Primäre Forschungsanwendungen umfassen:',
      'Research has demonstrated that Semaglutide may also promote beta-cell proliferation and reduce apoptosis in preclinical models, suggesting potential applications in studying beta-cell preservation strategies.': 'Forschungen haben gezeigt, dass Semaglutid auch die Beta-Zell-Proliferation fördern und die Apoptose in präklinischen Modellen reduzieren kann, was auf mögliche Anwendungen bei der Untersuchung von Strategien zur Erhaltung von Beta-Zellen hindeutet.',
      'Research interest in GHK-Cu stems from its remarkable effects on tissue regeneration, wound healing, and gene expression modulation. Studies suggest it influences over 4,000 genes related to tissue repair and regeneration.': 'Das Forschungsinteresse an GHK-Cu rührt von seinen bemerkenswerten Wirkungen auf Geweberegeneration, Wundheilung und Genexpressionsmodulation her. Studien deuten darauf hin, dass es über 4.000 Gene beeinflusst, die mit Gewebereparatur und Regeneration zusammenhängen.',
      'Research interest in O-304 stems from its potential applications in metabolic disease, diabetes, and obesity research, where AMPK activation can improve glucose uptake and lipid oxidation.': 'Das Forschungsinteresse an O-304 rührt von seinen potenziellen Anwendungen in der Stoffwechsel-, Diabetes- und Adipositasforschung her, wo die AMPK-Aktivierung die Glukoseaufnahme und Lipidoxidation verbessern kann.',
      'Research into melanocortin effects on sexual behaviour:': 'Forschung zu Melanocortin-Effekten auf das Sexualverhalten:',
      'Research often combines ipamorelin with GHRH analogs:': 'Forschung kombiniert Ipamorelin oft mit GHRH-Analoga:',
      'Researchers often compare these related steroids:': 'Forscher vergleichen diese verwandten steroid oft:',
      'Retatrutide enables essential comparative studies:': 'Retatrutid ermöglicht wesentliche Vergleichsstudien:',
      'Retatrutide\'s triple agonism creates a unique pharmacological profile by simultaneously engaging three complementary receptor systems, each contributing distinct metabolic effects.': 'Der dreifache Agonismus von Retatrutid schafft ein einzigartiges pharmakologisches Profil, indem er gleichzeitig drei komplementäre Rezeptorsysteme einbindet, die jeweils zu unterschiedlichen metabolischen Effekten beitragen.',
      'Semaglutide crosses the blood-brain barrier and activates GLP-1 receptors in key hypothalamic regions involved in appetite regulation, including the arcuate nucleus and paraventricular nucleus. Research indicates that this central action contributes to reduced food intake and altered food preferences in animal models.': 'Semaglutid überwindet die Blut-Hirn-Schranke und aktiviert GLP-1-Rezeptoren in wichtigen hypothalamischen Regionen, die an der Appetitregulation beteiligt sind, einschließlich des Nucleus arcuatus und des Nucleus paraventricularis. Forschungen zeigen, dass diese zentrale Wirkung zu einer reduzierten Nahrungsaufnahme und veränderten Nahrungspräferenzen in Tiermodellen beiträgt.',
      'Semaglutide exerts its biological effects through high-affinity binding to the GLP-1 receptor (GLP-1R), a G protein-coupled receptor expressed in various tissues including pancreatic beta cells, the central nervous system, heart, and gastrointestinal tract. Upon receptor binding, Semaglutide initiates several downstream signalling cascades that researchers continue to investigate.': 'Semaglutid entfaltet seine biologischen Wirkungen durch hochaffine Bindung an den GLP-1-Rezeptor (GLP-1R), einen G-Protein-gekoppelten Rezeptor, der in verschiedenen Geweben exprimiert wird, einschließlich pankreatischer Beta-Zellen, des Zentralnervensystems, des Herzens und des Magen-Darm-Trakts. Nach der Rezeptorbindung initiiert Semaglutid mehrere nachgeschaltete Signalkaskaden, die Forscher weiterhin untersuchen.',
      'Semaglutide is extensively used in metabolic research laboratories studying:': 'Semaglutid wird umfassend in Stoffwechselforschungslabors eingesetzt, die untersuchen:',
      'TB-500 contains the key sequence responsible for Tβ4\'s biological activity, particularly the actin-binding domain that promotes cell motility and tissue regeneration. This makes it invaluable for research into wound healing, muscle repair, and inflammatory conditions.': 'TB-500 enthält die Schlüsselsequenz, die für die biologische Aktivität von Tβ4 verantwortlich ist, insbesondere die Aktin-bindende Domäne, die die Zellmotilität und Geweberegeneration fördert. Dies macht es von unschätzbarem Wert für die Forschung zu Wundheilung, Muskelreparatur und entzündlichen Erkrankungen.',
      'Tesofensine increases synaptic concentrations of three key neurotransmitters:': 'Tesofensin erhöht die synaptischen Konzentrationen von drei wichtigen Neurotransmittern:',
      'The GIP receptor component may provide unique effects on adipose tissue:': 'Die GIP-Rezeptorkomponente kann einzigartige Wirkungen auf das Fettgewebe haben:',
      'The GIP receptor is predominantly expressed in pancreatic beta cells and adipose tissue, while GLP-1 receptors are found in pancreatic islets, brain, heart, and gastrointestinal tract. By activating both receptor systems simultaneously, Tirzepatide provides researchers with a unique tool for studying:': 'Der GIP-Rezeptor wird überwiegend in pankreatischen Beta-Zellen und Fettgewebe exprimiert, während GLP-1-Rezeptoren in Pankreasinseln, Gehirn, Herz und Magen-Darm-Trakt zu finden sind. Durch die gleichzeitige Aktivierung beider Rezeptorsysteme bietet Tirzepatid Forschern ein einzigartiges Werkzeug zur Untersuchung von:',
      'The GLP-1 component provides established incretin effects:': 'Die GLP-1-Komponente bietet etablierte Inkretin-Effekte:',
      'The dual agonist is valuable for investigating:': 'Der duale Agonist ist wertvoll für die Untersuchung von:',
      'The molecular structure of Semaglutide features a unique C-18 fatty diacid chain attached to the lysine residue at position 26. This structural modification enables the steroid to bind to serum albumin, dramatically extending its biological half-life to approximately seven days. This prolonged activity profile makes Semaglutide an invaluable tool for researchers studying sustained GLP-1 receptor activation mechanisms.': 'Die molekulare Struktur von Semaglutid weist eine einzigartige C-18-Fettsäurediacid-Kette auf, die an den Lysinrest an Position 26 gebunden ist. Diese strukturelle Modifikation ermöglicht es dem Steroid, an Serumalbumin zu binden, wodurch seine biologische Halbwertszeit drastisch auf etwa sieben Tage verlängert wird. Dieses verlängerte Aktivitätsprofil macht Semaglutid zu einem unschätzbaren Werkzeug für Forscher, die Mechanismen der anhaltenden GLP-1-Rezeptoraktivierung untersuchen.',
      'The steroid binds to GHRH receptors on pituitary somatotropes:': 'Das Steroid bindet an GHRH-Rezeptoren auf hypophysären Somatotropen:',
      'The steroid enables focused weight studies:': 'Das Steroid ermöglicht fokussierte Gewichtsstudien:',
      'The steroid promotes fat breakdown through:': 'Das Steroid fördert den Fettabbau durch:',
      'The steroid represents the first 29 amino acids of GHRH with modifications at positions 2, 8, 15, and 27 to improve resistance to enzymatic degradation. These modifications make it a more practical research tool while maintaining GHRH receptor binding activity.': 'Das Steroid repräsentiert die ersten 29 Aminosäuren von GHRH mit Modifikationen an den Positionen 2, 8, 15 und 27 zur Verbesserung der Resistenz gegen enzymatischen Abbau. Diese Modifikationen machen es zu einem praktischeren Forschungswerkzeug, während die GHRH-Rezeptorbindungsaktivität erhalten bleibt.',
      'The steroid represents the next evolution beyond dual agonists like tirzepatide, adding glucagon receptor activation to the established GLP-1/GIP dual agonism. This triple receptor engagement enables researchers to study the complex interplay between these metabolic signalling systems and their combined effects on glucose homeostasis, energy expenditure, and body weight regulation.': 'Das Steroid stellt die nächste Evolution jenseits dualer Agonisten wie Tirzepatid dar und fügt dem etablierten GLP-1/GIP-Dualagonismus die Glucagon-Rezeptor-Aktivierung hinzu. Diese dreifache Rezeptoreinbindung ermöglicht es Forschern, das komplexe Zusammenspiel zwischen diesen metabolischen Signalsystemen und ihren kombinierten Auswirkungen auf die Glukosehomöostase, den Energieverbrauch und die Regulierung des Körpergewichts zu untersuchen.',
      'The steroid\'s cyclic lactam structure provides enhanced stability and receptor binding affinity compared to linear α-MSH analogues. Melanotan 2 acts as a non-selective agonist at melanocortin receptors MC1, MC3, MC4, and MC5, enabling researchers to study diverse physiological processes beyond pigmentation.': 'Die zyklische Lactamstruktur des Peptids bietet im Vergleich zu linearen α-MSH-Analoga eine erhöhte Stabilität und Rezeptorbindungsaffinität. Melanotan 2 wirkt als nicht-selektiver Agonist an den Melanocortin-Rezeptoren MC1, MC3, MC4 und MC5 und ermöglicht es Forschern, vielfältige physiologische Prozesse jenseits der Pigmentierung zu untersuchen.',
      'The steroid\'s effects on body weight have made it crucial for obesity research, including studies on:': 'Die Auswirkungen des Peptids auf das Körpergewicht haben es entscheidend für die Adipositasforschung gemacht, einschließlich Studien zu:',
      'The steroid\'s improved selectivity profile makes it valuable for studying GH secretion mechanisms without confounding orexigenic effects.': 'Das verbesserte Selektivitätsprofil des Peptids macht es wertvoll für die Untersuchung von GH-Sekretionsmechanismen ohne störende orexigene Effekte.',
      'The steroid\'s name reflects its origin—a body protection compound identified for its remarkable cytoprotective and regenerative properties across multiple tissue types including tendons, ligaments, muscles, and gastrointestinal epithelium.': 'Der Name des Peptids spiegelt seinen Ursprung wider – eine Körperschutzverbindung, die für ihre bemerkenswerten zytoprotektiven und regenerativen Eigenschaften in mehreren Gewebetypen, darunter Sehnen, Bänder, Muskeln und Magen-Darm-Epithel, identifiziert wurde.',
      'The steroid\'s primary interest lies in its reported ability to activate telomerase, potentially influencing cellular lifespan and age-related changes.': 'Das primäre Interesse an dem Steroid liegt in der berichteten Fähigkeit, Telomerase zu aktivieren, was potenziell die zelluläre Lebensdauer und altersbedingte Veränderungen beeinflusst.',
      'The steroid\'s structure incorporates a modified GIP sequence with carefully engineered amino acid substitutions and a C20 fatty diacid side chain attached to lysine. This modification enables binding to serum albumin, extending the biological half-life to approximately five days and allowing researchers to study sustained dual receptor activation.': 'Die Struktur des Peptids enthält eine modifizierte GIP-Sequenz mit sorgfältig entwickelten Aminosäuresubstitutionen und einer an Lysin gebundenen C20-Fettsäurediacid-Seitenkette. Diese Modifikation ermöglicht die Bindung an Serumalbumin, verlängert die biologische Halbwertszeit auf etwa fünf Tage und ermöglicht es Forschern, eine anhaltende duale Rezeptoraktivierung zu untersuchen.',
      'The presence of GLP-1 receptors in the brain has sparked significant neuroscience research using Semaglutide:': 'Das Vorhandensein von GLP-1-Rezeptoren im Gehirn hat umfangreiche neurowissenschaftliche Forschung mit Semaglutid ausgelöst:',
      'The primary research application involves studying skin pigmentation:': 'Die primäre Forschungsanwendung umfasst die Untersuchung der Hautpigmentierung:',
      'The thermogenic component opens unique research directions:': 'Die thermogene Komponente eröffnet einzigartige Forschungsrichtungen:',
      'The triple agonist provides comprehensive weight research tools:': 'Der dreifache Agonist bietet umfassende Werkzeuge zur Gewichtsforschung:',
      'The triple combination creates unique research opportunities:': 'Die Dreierkombination schafft einzigartige Forschungsmöglichkeiten:',
      'The unique glucagon component provides:': 'Die einzigartige Glucagon-Komponente bietet:',
      'Tirzepatide enables crucial comparative studies between:': 'Tirzepatid ermöglicht entscheidende Vergleichsstudien zwischen:',
      'Tirzepatide exerts its biological effects through simultaneous activation of GIP and GLP-1 receptors, both of which are G protein-coupled receptors expressed in various metabolically active tissues. This dual agonism creates synergistic signalling effects that researchers continue to characterise.': 'Tirzepatid entfaltet seine biologischen Wirkungen durch gleichzeitige Aktivierung von GIP- und GLP-1-Rezeptoren, beides G-Protein-gekoppelte Rezeptoren, die in verschiedenen metabolisch aktiven Geweben exprimiert werden. Dieser duale Agonismus erzeugt synergistische Signaleffekte, die Forscher weiterhin charakterisieren.',
      'Tirzepatide\'s superior weight outcomes in preclinical models make it essential for:': 'Die überlegenen Gewichtsergebnisse von Tirzepatid in präklinischen Modellen machen es unverzichtbar für:',
      'Unlike benzodiazepines, Selank does not produce sedation or dependence, making it a valuable tool for researching anxiety mechanisms and novel therapeutic approaches.': 'Im Gegensatz zu Benzodiazepinen erzeugt Selank keine Sedierung oder Abhängigkeit, was es zu einem wertvollen Werkzeug für die Erforschung von Angstmechanismen und neuartigen therapeutischen Ansätzen macht.',
      'Unlike more selective steroids such as ipamorelin, GHRP-6 also stimulates appetite and affects cortisol and prolactin levels, making it useful for studying the full spectrum of ghrelin receptor effects.': 'Im Gegensatz zu selektiveren steroïden wie Ipamorelin stimuliert GHRP-6 auch den Appetit und beeinflusst den Cortisol- und Prolaktinspiegel, was es nützlich für die Untersuchung des gesamten Spektrums der Ghrelin-Rezeptor-Effekte macht.',
      'Unlike single-target compounds, tesofensine\'s triple mechanism enables researchers to investigate the complex interplay between monoaminergic systems in controlling food intake and metabolic rate. This makes it valuable for understanding the neuropharmacology of obesity and appetite disorders.': 'Im Gegensatz zu Verbindungen mit einem einzigen Ziel ermöglicht der dreifache Mechanismus von Tesofensin Forschern, das komplexe Zusammenspiel zwischen monoaminergen Systemen bei der Steuerung der Nahrungsaufnahme und der Stoffwechselrate zu untersuchen. Dies macht es wertvoll für das Verständnis der Neuropharmakologie von Adipositas und Appetitstörungen.',
      'Unlike single-use sterile water, bacteriostatic water allows multiple withdrawals over several weeks without contamination risk, making it cost-effective for research laboratories.': 'Im Gegensatz zu sterilem Einwegwasser ermöglicht bakteriostatisches Wasser mehrere Entnahmen über mehrere Wochen ohne Kontaminationsrisiko, was es für Forschungslabore kostengünstig macht.',
      'Without DAC, the steroid produces:': 'Ohne DAC erzeugt das Steroid:',},
    fr: {
      // French SEO optimized phrases
      'What is': 'Qu\'est-ce que',
      'How does': 'Comment fonctionne',
      'Benefits of': 'Avantages de',
      'Research Applications': 'Applications de Recherche',
      'Storage Instructions': 'Instructions de Conservation',
      'Reconstitution Guide': 'Guide de Reconstitution',
      'Dosage Information': 'Informations de Dosage',
      'Key Benefits': 'Principaux Avantages',
      'Why Choose': 'Pourquoi Choisir',
      'Product Overview': 'Aperçu du Produit',
      'Scientific Background': 'Contexte Scientifique',
      'Quality Assurance': 'Assurance Qualité',
      'Shipping Information': 'Informations de Livraison',
      'Related Products': 'Produits Connexes',
      // French SEO keywords
      'Buy': 'Acheter',
      'purchase': 'acheter',
      'order': 'commander',
      'online': 'en ligne',
      'high quality': 'haute qualité',
      'research grade': 'qualité recherche',
      'laboratory': 'laboratoire',
      'Steroide': 'Steroide',
      'steroides': 'steroides',
      'purity': 'pureté',
      'verified': 'vérifié',
      'certified': 'certifié',
      'fast delivery': 'livraison rapide',
      'fast shipping': 'expédition rapide',
      'UK delivery': 'livraison en France',
      'Europe': 'Europe',
      'European': 'Européen',
      // Research terms
      'research purposes': 'fins de recherche',
      'scientific research': 'recherche scientifique',
      'in vitro': 'in vitro',
      'clinical studies': 'études cliniques',
      'laboratory use': 'usage en laboratoire',
      // Product attributes
      'lyophilized powder': 'poudre lyophilisée',
      'sterile': 'stérile',
      'injectable': 'injectable',
      'subcutaneous': 'sous-cutané',
      'intramuscular': 'intramusculaire',
      // Actions
      'Store': 'Conserver',
      'Keep': 'Garder',
      'Reconstitute': 'Reconstituer',
      'Mix': 'Mélanger',
      'Inject': 'Injecter',
      'refrigerated': 'réfrigéré',
      'frozen': 'congelé',
      'room temperature': 'température ambiante',
      // Technical/Scientific terms - French
      'synthetic': 'synthétique',
      'amino acids': 'acides aminés',
      'amino acid': 'acide aminé',
      'derived from': 'dérivé de',
      'protein': 'protéine',
      'gastric juice': 'suc gastrique',
      'discovery': 'découverte',
      'extensively studied': 'largement étudié',
      'tissue healing': 'guérison des tissus',
      'tissue repair': 'réparation des tissus',
      'regeneration': 'régénération',
      'cytoprotective': 'cytoprotecteur',
      'regenerative properties': 'propriétés régénératives',
      'multiple tissue types': 'plusieurs types de tissus',
      'including': 'y compris',
      'tendons': 'tendons',
      'ligaments': 'ligaments',
      'muscles': 'muscles',
      'gastrointestinal epithelium': 'épithélium gastro-intestinal',
      // How it works - French
      'How Does': 'Comment Fonctionne',
      'Growth Factor Modulation': 'Modulation des Facteurs de Croissance',
      'VEGF upregulation': 'Régulation positive du VEGF',
      'Enhanced angiogenesis': 'Angiogenèse améliorée',
      'GH receptor effects': 'Effets sur les récepteurs GH',
      'Growth hormone pathway': 'Voie de l\'hormone de croissance',
      'EGF modulation': 'Modulation de l\'EGF',
      'Epithelial growth support': 'Support de croissance épithéliale',
      'NGF interaction': 'Interaction NGF',
      'Nerve growth effects': 'Effets sur la croissance nerveuse',
      'Nitric Oxide System': 'Système d\'Oxyde Nitrique',
      'NO pathway activation': 'Activation de la voie NO',
      'Vasodilation effects': 'Effets vasodilatateurs',
      'Endothelial function': 'Fonction endothéliale',
      'Vascular health': 'Santé vasculaire',
      'Blood flow enhancement': 'Amélioration du flux sanguin',
      'Tissue perfusion': 'Perfusion tissulaire',
      'Cytoprotective Actions': 'Actions Cytoprotectrices',
      'Gastric protection': 'Protection gastrique',
      'Original discovery context': 'Contexte de découverte original',
      'Mucosal healing': 'Guérison des muqueuses',
      'GI epithelium repair': 'Réparation de l\'épithélium GI',
      'Anti-inflammatory': 'Anti-inflammatoire',
      'Reduced damage markers': 'Marqueurs de dommages réduits',
      // Research Applications - French
      'Musculoskeletal Healing': 'Guérison Musculo-squelettique',
      'Tendon repair': 'Réparation des tendons',
      'rotator cuff models': 'modèles de coiffe des rotateurs',
      'Ligament healing': 'Guérison des ligaments',
      'ACL research': 'Recherche sur le LCA',
      'Muscle regeneration': 'Régénération musculaire',
      'Injury recovery': 'Récupération après blessure',
      'Gastrointestinal Research': 'Recherche Gastro-intestinale',
      'Ulcer healing': 'Guérison des ulcères',
      'Gastric cytoprotection': 'Cytoprotection gastrique',
      'IBD models': 'Modèles de MICI',
      'Inflammatory bowel research': 'Recherche sur les maladies inflammatoires de l\'intestin',
      'Mucosal barrier': 'Barrière muqueuse',
      'Gut integrity': 'Intégrité intestinale',
      'Wound Healing': 'Cicatrisation',
      'Skin repair': 'Réparation cutanée',
      'Dermal regeneration': 'Régénération dermique',
      'Angiogenesis': 'Angiogenèse',
      'Blood vessel formation': 'Formation des vaisseaux sanguins',
      'Fibroblast activity': 'Activité des fibroblastes',
      'Collagen production': 'Production de collagène',
      // Table/spec terms - French
      'Condition': 'Condition',
      'Temperature': 'Température',
      'Duration': 'Durée',
      'Lyophilised': 'Lyophilisé',
      'Reconstituted': 'Reconstitué',
      'up to': 'jusqu\'à',
      'months': 'mois',
      'weeks': 'semaines',
      'Size': 'Taille',
      'Price': 'Prix',
      'From': 'À partir de',
      'Minimum order': 'Commande minimale',
      'discount on orders over': 'réduction sur les commandes de plus de',
      // Features/Benefits - French
      'Guaranteed': 'Garanti',
      'Full documentation': 'Documentation complète',
      'COA with every order': 'COA avec chaque commande',
      'UK laboratory tested': 'Testé en laboratoire',
      'Quality assured': 'Qualité assurée',
      'Express shipping available': 'Expédition express disponible',
      'Research support': 'Support de recherche',
      'Technical assistance': 'Assistance technique',
      'Why Choose Steroiden': 'Pourquoi Choisir Steroiden',
      'Steroiden supplies': 'Steroiden fournit',
      // Product page section headings
      'Specification': 'Spécification',
      'Detail': 'Détail',
      'Reconstitution and Handling': 'Reconstitution et Manipulation',
      'Reconstitution Protocol': 'Protocole de Reconstitution',
      'Storage Recommendations': 'Recommandations de Stockage',
      'For laboratory research only': 'Pour la recherche en laboratoire uniquement',
      'Not intended for human or veterinary use': 'Non destiné à un usage humain ou vétérinaire',
      'Researchers should follow all applicable regulations': 'Les chercheurs doivent suivre toutes les réglementations applicables',
      'Allow vial to reach room temperature': 'Laisser le flacon atteindre la température ambiante',
      'Add bacteriostatic water slowly': 'Ajouter l\'eau bactériostatique lentement',
      'Gently swirl': 'Agiter doucement',
      'do not shake': 'ne pas secouer',
      'Solution should be clear': 'La solution doit être claire',
      'Specifications': 'Spécifications',
      'CAS Number': 'Numéro CAS',
      'Molecular Formula': 'Formule Moléculaire',
      'Molecular Weight': 'Poids Moléculaire',
      'Sequence': 'Séquence',
      'Appearance': 'Apparence',
      'White lyophilised powder': 'Poudre lyophilisée blanche',
      'HPLC verified': 'Vérifié par HPLC',
      // Bacteriostatic Water & Supplies - French
      'Bacteriostatic Water': 'Eau bactériostatique',
      'bacteriostatic water': 'eau bactériostatique',
      'BAC water': 'Eau BAC',
      'Sterile Water': 'Eau Stérile',
      'sterile water': 'eau stérile',
      'Steroide Reconstitution': 'Reconstitution de steroids',
      'Steroide reconstitution': 'reconstitution de steroids',
      'for steroid cycle': 'pour la Recherche sur les steroids',
      'What is Bacteriostatic Water': 'Qu\'est-ce que l\'Eau bactériostatique',
      'benzyl alcohol': 'alcool benzylique',
      'bacteriostatic preservative': 'conservateur bactériostatique',
      'inhibits the growth of bacteria': 'inhibe la croissance des bactéries',
      'inhibits bacterial growth': 'inhibe la croissance bactérienne',
      'reconstituting lyophilized': 'reconstitution de steroids lyophilisés',
      'freeze-dried': 'lyophilisés',
      'lyophilized': 'lyophilisés',
      'for research applications': 'pour applications de recherche',
      'multiple withdrawals': 'prélèvements multiples',
      'from the same vial': 'du même flacon',
      'are needed': 'sont nécessaires',
      'Key Features': 'Caractéristiques Clés',
      'USP Grade Quality': 'Qualité USP',
      'USP Grade': 'Qualité USP',
      'USP grade': 'qualité USP',
      'Our bacteriostatic water meets': 'Notre eau bactériostatique répond aux',
      'United States Pharmacopeia': 'Pharmacopée des États-Unis',
      'USP standards': 'normes USP',
      'standards for': 'normes pour',
      'Sterility': 'Stérilité',
      'Purity': 'Pureté',
      'concentration': 'concentration',
      'Endotoxin levels': 'Niveaux d\'endotoxines',
      'endotoxin levels': 'niveaux d\'endotoxines',
      'Multi-Use Design': 'Conception Multi-Usage',
      'Unlike single-use': 'Contrairement à l\'usage unique',
      'single-use sterile water': 'eau stérile à usage unique',
      'single-use': 'usage unique',
      'allows multiple withdrawals': 'permet des prélèvements multiples',
      'over several weeks': 'pendant plusieurs semaines',
      'several weeks': 'plusieurs semaines',
      'without contamination risk': 'sans risque de contamination',
      'contamination risk': 'risque de contamination',
      'cost-effective': 'rentable',
      'for research laboratories': 'pour les laboratoires de recherche',
      'research laboratories': 'laboratoires de recherche',
      'Convenient': 'Pratique',
      'convenient': 'pratique',
      'Each': 'Chaque',
      'each': 'chaque',
      'vial can': 'flacon peut',
      'can reconstitute': 'peut reconstituer',
      'Steroide vials': 'flacons de steroids',
      'depending on concentration requirements': 'selon les exigences de concentration',
      'How to Use': 'Comment Utiliser',
      'How to use': 'Comment utiliser',
      'Reconstitution Steps': 'Étapes de Reconstitution',
      'Allow the steroid vial': 'Laisser le flacon de Steroide',
      'to reach room temperature': 'atteindre la température ambiante',
      'Clean both vial tops': 'Nettoyer les deux bouchons',
      'with an alcohol swab': 'avec un tampon d\'alcool',
      'alcohol swab': 'tampon d\'alcool',
      'Using a sterile syringe': 'À l\'aide d\'une seringue stérile',
      'sterile syringe': 'seringue stérile',
      'withdraw the desired amount': 'prélever la quantité désirée',
      'desired amount': 'quantité désirée',
      'Insert the needle': 'Insérer l\'aiguille',
      'into the steroid vial': 'dans le flacon de Steroide',
      'aiming at the glass wall': 'en visant la paroi de verre',
      'glass wall': 'paroi de verre',
      'Slowly inject': 'Injecter lentement',
      'allowing it to run down': 'en le laissant couler',
      'run down the vial wall': 'couler le long de la paroi',
      'vial wall': 'paroi du flacon',
      'until fully dissolved': 'jusqu\'à dissolution complète',
      'fully dissolved': 'complètement dissous',
      'Store reconstituted Steroide': 'Conserver le steroid reconstitué',
      'reconstituted Steroide': 'Steroide reconstitué',
      'Recommended Volumes': 'Volumes Recommandés',
      'Steroide Amount': 'Quantité de Steroide',
      'Suggested': 'Suggéré',
      'suggested': 'suggéré',
      'Concentration': 'Concentration',
      'Storage': 'Conservation',
      'Unopened': 'Non ouvert',
      'unopened': 'non ouvert',
      'away from direct light': 'à l\'abri de la lumière directe',
      'direct light': 'lumière directe',
      'Opened': 'Ouvert',
      'opened': 'ouvert',
      'Use within': 'Utiliser dans',
      'use within': 'utiliser dans',
      'days': 'jours',
      'Do not freeze': 'Ne pas congeler',
      'do not freeze': 'ne pas congeler',
      'Freezing may compromise sterility': 'La congélation peut compromettre la stérilité',
      'may compromise sterility': 'peut compromettre la stérilité',
      'Shelf life': 'Durée de conservation',
      'shelf life': 'durée de conservation',
      'years from manufacture date': 'ans à partir de la date de fabrication',
      'manufacture date': 'date de fabrication',
      'Applications in Research': 'Applications en Recherche',
      'is essential for': 'est essentiel pour',
      'essential for': 'essentiel pour',
      'for in vitro studies': 'pour les études in vitro',
      'in vitro studies': 'études in vitro',
      'Preparation of stock solutions': 'Préparation de solutions mères',
      'stock solutions': 'solutions mères',
      'Multi-day research protocols': 'Protocoles de recherche sur plusieurs jours',
      'research protocols': 'protocoles de recherche',
      'requiring repeat sampling': 'nécessitant des prélèvements répétés',
      'repeat sampling': 'prélèvements répétés',
      'sterility must be maintained': 'la stérilité doit être maintenue',
      'maintained over time': 'maintenue dans le temps',
      'over time': 'dans le temps',
      'Comparison': 'Comparaison',
      'comparison': 'comparaison',
      'Feature': 'Caractéristique',
      'feature': 'caractéristique',
      'Preservative': 'Conservateur',
      'preservative': 'conservateur',
      'Multiple Uses': 'Utilisations Multiples',
      'multiple uses': 'utilisations multiples',
      'Single use only': 'Usage unique seulement',
      'single use only': 'usage unique seulement',
      'Bacterial Growth': 'Croissance Bactérienne',
      'bacterial growth': 'croissance bactérienne',
      'Inhibited': 'Inhibée',
      'inhibited': 'inhibée',
      'Possible after opening': 'Possible après ouverture',
      'after opening': 'après ouverture',
      'Best For': 'Idéal Pour',
      'best for': 'idéal pour',
      'Multi-dose steroids': 'Stéroïdes multi-doses',
      'multi-dose': 'multi-doses',
      'Single-dose applications': 'Applications mono-dose',
      'single-dose': 'mono-dose',
      'Every batch': 'Chaque lot',
      'every batch': 'chaque lot',
      'undergoes testing': 'subit des tests',
      'testing for': 'tests pour',
      'Tested per': 'Testé selon',
      'tested per': 'testé selon',
      'Particulate Matter': 'Particules',
      'particulate matter': 'particules',
      'Content': 'Contenu',
      'content': 'contenu',
      'Verified at': 'Vérifié à',
      'verified at': 'vérifié à',
      'Popular': 'Populaire',
      'popular': 'populaire',
      'healing Steroide': 'Steroide cicatrisant',
      'Recovery Steroide': 'Steroide de récupération',
      'recovery Steroide': 'Steroide de récupération',
      'GLP-1 agonist': 'agoniste GLP-1',
      // Product-specific headings and terms - French
      'Important Research Use Notice': 'Avis Important d\'Utilisation pour la Recherche',
      'Order Today': 'Commander Aujourd\'hui',
      'Order': 'Commander',
      'Today': 'Aujourd\'hui',
      'Work': 'Fonctionner',
      'Steroide Specifications': 'Spécifications du Steroide',
      // Research categories
      'Obesity Research': 'Recherche sur l\'Obésité',
      'Metabolic Research': 'Recherche Métabolique',
      'Gene Expression': 'Expression Génique',
      'GH Axis Studies': 'Études de l\'Axe GH',
      'Delivery Options': 'Options de Livraison',
      'Available Package Sizes': 'Tailles de Conditionnement Disponibles',
      'Guaranteed Purity': 'Pureté Garantie',
      'UK-Based Delivery': 'Livraison depuis la France',
      'Weight Management Studies': 'Études de Gestion du Poids',
      'Tissue Repair': 'Réparation Tissulaire',
      'Selectivity Profile': 'Profil de Sélectivité',
      'Selective Action': 'Action Sélective',
      'Research Support': 'Support de Recherche',
      'Neuroprotection': 'Neuroprotection',
      'Lipolytic Activity': 'Activité Lipolytique',
      'GHS-R Activation': 'Activation GHS-R',
      'Diabetes Research': 'Recherche sur le Diabète',
      'Comparative Incretin Research': 'Recherche Comparative sur les Incrétines',
      'Combination Research': 'Recherche Combinée',
      'Cognitive Research': 'Recherche Cognitive',
      'Central Nervous System Actions': 'Actions sur le Système Nerveux Central',
      'Key Differences': 'Différences Clés',
      // Additional Research Headers - French
      'Actin Regulation': 'Régulation de l\'actine',
      'Adipose Tissue': 'Tissu adipeux',
      'Adipose Tissue Effects': 'Effets sur le tissu adipeux',
      'Ageing Research': 'Recherche sur le vieillissement',
      'Anti-Inflammatory Research': 'Recherche anti-inflammatoire',
      'Anti-Lipogenic Effects': 'Effets anti-lipogéniques',
      'Anxiety Research': 'Recherche sur l\'anxiété',
      'Appetite Research': 'Recherche sur l\'appétit',
      'Appetite and Obesity Research': 'Recherche sur l\'appétit et l\'obésité',
      'Cardiovascular Research': 'Recherche cardiovasculaire',
      'Cell Biology': 'Biologie cellulaire',
      'Central Nervous System Effects': 'Effets sur le système nerveux central',
      'Circadian Research': 'Recherche circadienne',
      'Collagen & ECM': 'Collagène et MEC',
      'Competitive Pricing': 'Prix compétitifs',
      'Comprehensive Documentation': 'Documentation complète',
      'Convenient 10ml Size': 'Format pratique de 10ml',
      'Copper Delivery': 'Apport de cuivre',
      'DNA Repair': 'Réparation de l\'ADN',
      'Dedicated Support': 'Support dédié',
      'Direct AMPK Activation': 'Activation directe de l\'AMPK',
      'Dopamine Effects': 'Effets sur la dopamine',
      'Downstream Pathways': 'Voies en aval',
      'Dual Incretin Receptor Activation': 'Activation double des récepteurs incrétines',
      'Energy Expenditure Studies': 'Études sur la dépense énergétique',
      'Energy Metabolism': 'Métabolisme énergétique',
      'Exercise Mimetics': 'Mimétiques de l\'exercice',
      'Fat Metabolism': 'Métabolisme des graisses',
      'Fat Metabolism Studies': 'Études sur le métabolisme des graisses',
      'GABA System': 'Système GABA',
      'GH Axis Research': 'Recherche sur l\'axe GH',
      'GHRH Receptor Activation': 'Activation du récepteur GHRH',
      'GIP Receptor Activation': 'Activation du récepteur GIP',
      'GLP-1 Receptor Activation': 'Activation du récepteur GLP-1',
      'Gastric Effects': 'Effets gastriques',
      'Gastrointestinal Effects': 'Effets gastro-intestinaux',
      'Glucagon Receptor Activation': 'Activation du récepteur du glucagon',
      'Hepatic Metabolism Research': 'Recherche sur le métabolisme hépatique',
      'Immunology': 'Immunologie',
      'Inflammation Modulation': 'Modulation de l\'inflammation',
      'Inflammatory Disease Models': 'Modèles de maladies inflammatoires',
      'Longevity Research': 'Recherche sur la longévité',
      'Melanocortin Receptor Family': 'Famille des récepteurs de la mélanocortine',
      'Melanogenesis Pathway': 'Voie de la mélanogenèse',
      'Metabolic Effects': 'Effets métaboliques',
      'Metabolic Studies': 'Études métaboliques',
      'Metabolic Syndrome Studies': 'Études sur le syndrome métabolique',
      'Metabolism': 'Métabolisme',
      'Methylation Balance': 'Équilibre de méthylation',
      'Modified Stability': 'Stabilité modifiée',
      'Monoamine Regulation': 'Régulation des monoamines',
      'NAD+ Metabolism': 'Métabolisme du NAD+',
      'Neuroendocrine': 'Neuroendocrinien',
      'Neuroplasticity': 'Neuroplasticité',
      'Neuroscience': 'Neuroscience',
      'Neuroscience Applications': 'Applications en neurosciences',
      'Neurotransmitter Effects': 'Effets sur les neurotransmetteurs',
      'Neurotrophin Modulation': 'Modulation des neurotrophines',
      'Norepinephrine Effects': 'Effets sur la noradrénaline',
      'Obesity Studies': 'Études sur l\'obésité',
      'Other Effects': 'Autres effets',
      'Pancreatic Beta-Cell Effects': 'Effets sur les cellules bêta pancréatiques',
      'Pancreatic Effects': 'Effets pancréatiques',
      'Pigmentation Research': 'Recherche sur la pigmentation',
      'Pineal Function': 'Fonction pinéale',
      'Pituitary Function': 'Fonction pituitaire',
      'Pulsatile vs Sustained Release': 'Libération pulsatile vs soutenue',
      'Receptor Activation': 'Activation des récepteurs',
      'Satiety Signalling': 'Signalisation de la satiété',
      'Secondary Effects': 'Effets secondaires',
      'Serotonin Effects': 'Effets sur la sérotonine',
      'Sexual Function Studies': 'Études sur la fonction sexuelle',
      'Sirtuin Activation': 'Activation des sirtuines',
      'Skin Disorder Research': 'Recherche sur les troubles cutanés',
      'Skin Research': 'Recherche sur la peau',
      'Sleep Regulation': 'Régulation du sommeil',
      'Sleep Research': 'Recherche sur le sommeil',
      'Stress Research': 'Recherche sur le stress',
      'Synergistic Metabolic Effects': 'Effets métaboliques synergiques',
      'Synergy with GHRH': 'Synergie avec GHRH',
      'Telomerase Activation': 'Activation de la télomérase',
      'UK-Based Supplier': 'Fournisseur basé en France',
      'UK-Based Supply': 'Approvisionnement basé en France',
      'Verified Purity': 'Pureté vérifiée',
      'Weight Management Research': 'Recherche sur la gestion du poids',
      // Scientific terms
      'synthetic analogue': 'analogue synthétique',
      'analogue': 'analogue',
      'analog': 'analogue',
      'hormone': 'hormone',
      'receptor': 'récepteur',
      'receptor agonist': 'agoniste du récepteur',
      'agonist': 'agoniste',
      'antagonist': 'antagoniste',
      'binding': 'liaison',
      'affinity': 'affinité',
      'selectivity': 'sélectivité',
      'mechanism': 'mécanisme',
      'pathway': 'voie de signalisation',
      'signalling': 'signalisation',
      'activation': 'activation',
      'inhibition': 'inhibition',
      'modulation': 'modulation',
      'expression': 'expression',
      'regulation': 'régulation',
      'metabolism': 'métabolisme',
      'metabolic': 'métabolique',
      'glucose': 'glucose',
      'insulin': 'insuline',
      'insulin secretion': 'sécrétion d\'insuline',
      'appetite regulation': 'régulation de l\'appétit',
      'appetite': 'appétit',
      'weight management': 'gestion du poids',
      'weight loss': 'perte de poids',
      'obesity': 'obésité',
      'diabetes': 'diabète',
      'type 2 diabetes': 'diabète de type 2',
      'blood sugar': 'glycémie',
      'half-life': 'demi-vie',
      'bioavailability': 'biodisponibilité',
      'pharmacokinetics': 'pharmacocinétique',
      'pharmacodynamics': 'pharmacodynamique',
      // Product descriptions
      'premium steroid': 'Steroide de recherche',
      'research-grade': 'qualité recherche',
      'pharmaceutical grade': 'qualité pharmaceutique',
      'raw Steroide': 'Steroide brut',
      'active pharmaceutical ingredient': 'principe actif pharmaceutique',
      'brand-name': 'marque',
      'prescription medications': 'médicaments sur ordonnance',
      'laboratory research purposes': 'fins de recherche en laboratoire',
      'human consumption': 'consommation humaine',
      'medical treatment': 'traitement médical',
      'not for human use': 'pas pour usage humain',
      'for research only': 'pour la recherche uniquement',
      'research only': 'recherche uniquement',
      // Quality and purity
      'HPLC analysis': 'analyse HPLC',
      'mass spectrometry': 'spectrométrie de masse',
      'Certificate of Analysis': 'Certificat d\'Analyse',
      'COA': 'COA',
      'batch': 'lot',
      'lot': 'lot',
      'identity': 'identité',
      'Steroide content': 'teneur en Steroide',
      'quality control': 'contrôle qualité',
      'strict quality control': 'contrôle qualité strict',
      'manufacturing': 'fabrication',
      'shipping': 'expédition',
      // Storage terms
      'long-term stability': 'stabilité à long terme',
      'refrigerator': 'réfrigérateur',
      'freeze-thaw cycles': 'cycles de congélation-décongélation',
      'protect from light': 'protéger de la lumière',
      'airtight containers': 'conteneurs hermétiques',
      'moisture absorption': 'absorption d\'humidité',
      'properly stored': 'correctement stocké',
      // Reconstitution
      'sterile bacteriostatic water': 'eau bactériostatique stérile',
      'alkaline buffer': 'tampon alcalin',
      'isoelectric point': 'point isoélectrique',
      'Steroide degradation': 'dégradation du Steroide',
      'dissolution': 'dissolution',
      'dissolve': 'dissoudre',
      // Delivery
      'next day delivery': 'livraison le lendemain',
      'standard shipping': 'expédition standard',
      'express delivery': 'livraison express',
      'international shipping': 'expédition internationale',
      'customs delays': 'retards douaniers',
      'overseas orders': 'commandes internationales',
      'tracked delivery': 'livraison suivie',
      'discrete packaging': 'emballage discret',
      'cold packs': 'packs réfrigérants',
      'dry ice': 'glace sèche',
      // Ordering
      'minimum order': 'commande minimale',
      'bulk pricing': 'prix de gros',
      'custom orders': 'commandes personnalisées',
      'institutional research': 'recherche institutionnelle',
      'larger quantities': 'quantités plus importantes',
      'package sizes': 'tailles de conditionnement',
      'vial': 'flacon',
      'vials': 'flacons',
      // Scientific activities
      'binding assays': 'essais de liaison',
      'receptor binding': 'liaison au récepteur',
      'in vivo': 'in vivo',
      'disease models': 'modèles de maladie',
      'research models': 'modèles de recherche',
      'pilot studies': 'études pilotes',
      'published literature': 'littérature publiée',
      'published data': 'données publiées',
      'reference standards': 'standards de référence',
      'reproducible results': 'résultats reproductibles',
      'consistent quality': 'qualité constante',
      'batch-to-batch': 'lot à lot',
      // Body/biological terms
      'intestines': 'intestins',
      'gastric': 'gastrique',
      'beta-cell': 'cellule bêta',
      'beta-cell function': 'fonction des cellules bêta',
      'gastric emptying': 'vidange gastrique',
      'neuroprotective': 'neuroprotecteur',
      'serum albumin': 'albumine sérique',
      'albumin binding': 'liaison à l\'albumine',
      'biological half-life': 'demi-vie biologique',
      'prolonged activity': 'activité prolongée',
      'sustained activation': 'activation soutenue',

      '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) is a selective inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme increasingly recognised as a key regulator of cellular metabolism, NAD+ homeostasis, and adipose tissue function. This research compound has emerged as an important tool for studying the intersection of epigenetics, energy metabolism, and ageing.': '**5-Amino-1MQ** (5-Amino-1-Méthylquinolinium) est un inhibiteur sélectif de la nicotinamide N-méthyltransférase (NNMT), une enzyme de plus en plus reconnue comme un régulateur clé du métabolisme cellulaire, de l\'homéostasie du NAD+ et de la fonction du tissu adipeux. Ce composé de recherche est devenu un outil important pour étudier l\'intersection de l\'épigénétique, du métabolisme énergétique et du vieillissement.',
      '**AOD-9604** (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone comprising amino acids 177-191 of the C-terminal region, with an additional tyrosine residue at the N-terminus. This synthetic steroid was specifically designed to isolate the fat-metabolising properties of growth hormone without its growth-promoting or diabetogenic effects.': '**AOD-9604** (Anti-Obesity Drug 9604) est un fragment modifié de l\'hormone de croissance humaine comprenant les acides aminés 177-191 de la région C-terminale, avec un résidu de tyrosine supplémentaire à l\'extrémité N-terminale. Ce steroid synthétique a été spécifiquement conçu pour isoler les propriétés de métabolisation des graisses de l\'hormone de croissance sans ses effets favorisant la croissance ou diabétogènes.',
      '**BPC-157** (Body Protection Compound-157) is a synthetic pentadecapeptide (15 amino acids) derived from a protein found in human gastric juice. Since its discovery, BPC-157 has become one of the most extensively studied steroids in tissue healing and regeneration research. For published research, see [PubMed studies on BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.': '**BPC-157** (Body Protection Compound-157) est un pentadécasteroid synthétique (15 acides aminés) dérivé d\'une protéine présente dans le suc gastrique humain. Depuis sa découverte, le BPC-157 est devenu un des steroids les plus étudiés dans la recherche sur la cicatrisation et la régénération des tissus. Pour les recherches publiées, voir [Études PubMed sur le BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.',
      '**CJC-1295 No DAC** (also known as Modified GRF 1-29 or Mod GRF) is a synthetic analog of growth hormone-releasing hormone (GHRH) with specific amino acid modifications that enhance its stability and half-life. Unlike CJC-1295 with DAC, this version lacks the Drug Affinity Complex, producing pulsatile rather than sustained GH release patterns.': '**CJC-1295 No DAC** (également connu sous le nom de Modified GRF 1-29 ou Mod GRF) est un analogue synthétique de l\'hormone de libération de l\'hormone de croissance (GHRH) avec des modifications spécifiques d\'acides aminés qui améliorent sa stabilité et sa demi-vie. Contrairement au CJC-1295 avec DAC, cette version est dépourvue du complexe d\'affinité médicamenteuse (Drug Affinity Complex), produisant des modèles de libération de GH pulsatiles plutôt que soutenus.',
      '**Cagrilintide** (AM833, NN9838) is a long-acting acylated analog of human amylin, a steroid hormone co-secreted with insulin from pancreatic beta cells. Through fatty acid acylation, cagrilintide achieves an extended half-life enabling once-weekly research dosing, making it an invaluable tool for studying amylin\'s role in satiety and metabolic regulation.': '**Cagrilintide** (AM833, NN9838) est un analogue acylé à longue action de l\'amyline humaine, une hormone steroidique co-sécrétée avec l\'insuline par les cellules bêta pancréatiques. Grâce à l\'acylation des acides gras, le cagrilintide atteint une demi-vie prolongée permettant un dosage de recherche une fois par semaine, ce qui en fait un outil inestimable pour étudier le rôle de l\'amyline dans la satiété et la régulation métabolique.',
      '**DSIP** (Delta Sleep-Inducing steroid) is a nonapeptide first isolated from rabbit brain in 1977 during research into sleep physiology. The steroid was named for its ability to promote delta wave sleep patterns in research models.': '**DSIP** (Delta Sleep-Inducing steroid) est un nonapeptide isolé pour la première fois du cerveau de lapin en 1977 lors de recherches sur la physiologie du sommeil. Le steroid a été nommé pour sa capacité à favoriser les modèles de sommeil à ondes delta dans les modèles de recherche.',
      '**Epitalon** (Epithalon, AEDG steroid) is a synthetic tetrasteroid based on epithalamin, a pineal gland extract extensively studied for its effects on telomerase activation and cellular ageing. Developed from decades of Russian research, Epitalon has become a key tool in longevity and anti-ageing research.': '**Epitalon** (Epithalon, steroid AEDG) est un tétrasteroid synthétique basé sur l\'épithalamine, un extrait de la glande pinéale largement étudié pour ses effets sur l\'activation de la télomérase et le vieillissement cellulaire. Développé à partir de décennies de recherches russes, l\'Epitalon est devenu un outil clé dans la recherche sur la longévité et l\'anti-âge.',
      '**GHK-Cu** (Copper Tripeptide-1) is a naturally occurring copper-steroid complex consisting of three amino acids (glycine-histidine-lysine) bound to a copper ion. Found in human plasma, saliva, and urine, GHK-Cu concentrations naturally decline with age.': '**GHK-Cu** (Cuivre Tripeptide-1) est un complexe cuivre-steroid naturel composé de trois acides aminés (glycine-histidine-lysine) liés à un ion cuivre. Présent dans le plasma humain, la salive et l\'urine, les concentrations de GHK-Cu diminuent naturellement avec l\'âge.',
      '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). GHRP-2 is considered more selective than GHRP-6, producing robust GH release with less pronounced effects on appetite, cortisol, and prolactin.': '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmoreline) est un hexapeptide synthétique qui stimule la libération de l\'hormone de croissance par l\'activation du récepteur de la ghréline (GHS-R1a). Le GHRP-2 est considéré comme plus sélectif que le GHRP-6, produisant une forte libération de GH avec des effets moins prononcés sur l\'appétit, le cortisol et la prolactine.',
      '**GHRP-6** (Growth Hormone Releasing steroid-6) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). As one of the first synthetic GH secretagogues developed, GHRP-6 has extensive research documentation and remains a valuable tool for studying growth hormone physiology.': '**GHRP-6** (Growth Hormone Releasing steroid-6) est un hexapeptide synthétique qui stimule la libération de l\'hormone de croissance par l\'activation du récepteur de la ghréline (GHS-R1a). En tant que l\'un des premiers sécrétagogues de GH synthétiques développés, le GHRP-6 dispose d\'une documentation de recherche approfondie et reste un outil précieux pour étudier la physiologie de l\'hormone de croissance.',
      '**HGH Fragment 176-191** is a synthetic steroid comprising the C-terminal portion of human growth hormone (amino acids 176-191). This specific region has been identified as responsible for GH\'s lipolytic (fat-burning) activity without the hormone\'s growth-promoting effects.': '**HGH Fragment 176-191** est un steroid synthétique comprenant la partie C-terminale de l\'hormone de croissance humaine (acides aminés 176-191). Cette région spécifique a été identifiée comme responsable de l\'activité lipolytique (brûle-graisse) de la GH sans les effets favorisant la croissance de l\'hormone.',
      '**Ipamorelin** is a synthetic pentapeptide growth hormone secretagogue that selectively stimulates growth hormone (GH) release from pituitary somatotrope cells. Distinguished by its high selectivity, ipamorelin causes minimal effects on cortisol and prolactin levels, making it an invaluable research tool for studying isolated GH secretion mechanisms.': '**Ipamorelin** est un sécrétagogue d\'hormone de croissance pentapeptideique synthétique qui stimule sélectivement la libération de l\'hormone de croissance (GH) à partir des cellules somatotropes hypophysaires. Distingué par sa haute sélectivité, l\'ipamoréline provoque des effets minimes sur les niveaux de cortisol et de prolactine, ce qui en fait un outil de recherche inestimable pour étudier les mécanismes isolés de sécrétion de GH.',
      '**Melanotan 2** (MT-2, MT-II) is a synthetic cyclic heptapeptide analogue of alpha-melanocyte stimulating hormone (α-MSH). Originally developed at the University of Arizona in the 1980s, this premium steroid has become an essential tool for studying melanocortin receptor signalling and the regulation of skin pigmentation.': '**Melanotan 2** (MT-2, MT-II) est un analogue heptapeptideique cyclique synthétique de l\'hormone alpha-mélanostimulante (α-MSH). Développé à l\'origine à l\'Université de l\'Arizona dans les années 1980, ce steroid de recherche est devenu un outil essentiel pour étudier la signalisation des récepteurs de la mélanocortine et la régulation de la pigmentation de la peau.',
      '**NAD+** (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays fundamental roles in energy metabolism, DNA repair, and cellular signalling. NAD+ is essential for hundreds of enzymatic reactions and is a key regulator of cellular health.': '**NAD+** (Nicotinamide Adénine Dinucléotide) est une coenzyme présente dans toutes les cellules vivantes qui joue un rôle fondamental dans le métabolisme énergétique, la réparation de l\'ADN et la signalisation cellulaire. Le NAD+ est essentiel à des centaines de réactions enzymatiques et est un régulateur clé de la santé cellulaire.',
      '**O-304** is a novel small molecule that directly activates AMPK (AMP-activated protein kinase), the master regulator of cellular energy homeostasis. Unlike indirect activators like metformin, O-304 binds directly to AMPK\'s β1 subunit.': '**O-304** est une nouvelle petite molécule qui active directement l\'AMPK (protéine kinase activée par l\'AMP), le régulateur principal de l\'homéostasie énergétique cellulaire. Contrairement aux activateurs indirects comme la metformine, l\'O-304 se lie directement à la sous-unité β1 de l\'AMPK.',
      '**Retatrutide** (LY3437943) is a novel synthetic steroid that functions as a triple agonist of three key metabolic receptors: glucagon-like steroid-1 (GLP-1), glucose-dependent insulinotropic polysteroid (GIP), and glucagon receptors. This unprecedented triple mechanism of action makes Retatrutide the most comprehensive incretin-based research tool currently available.': '**Retatrutide** (LY3437943) est un nouveau steroid synthétique qui fonctionne comme un triple agoniste de trois récepteurs métaboliques clés : le steroid-1 de type glucagon (GLP-1), le polysteroid insulinotrope dépendant du glucose (GIP) et les récepteurs du glucagon. Ce triple mécanisme d\'action sans précédent fait du Rétatrutide l\'outil de recherche à base d\'incrétine le plus complet actuellement disponible.',
      '**Selank** (TP-7) is a synthetic heptapeptide developed in Russia as a modified analogue of tuftsin, a naturally occurring immunomodulatory steroid. Selank has been extensively studied for its anxiolytic, nootropic, and immunomodulatory properties.': '**Selank** (TP-7) est un heptapeptide synthétique développé en Russie en tant qu\'analogue modifié de la tuftsine, un steroid immunomodulateur naturel. Le Selank a été largement étudié pour ses propriétés anxiolytiques, nootropiques et immunomodulatrices.',
      '**Semaglutide** is a synthetic analogue of human Glucagon-Like steroid-1 (GLP-1), a hormone naturally produced in the intestines that plays a crucial role in glucose metabolism and appetite regulation. This premium steroid has gained significant attention in scientific communities worldwide for its applications in metabolic research, particularly in studies related to type 2 diabetes and obesity. For comprehensive background information, see the [PubChem compound entry for Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.': '**Sémaglutide** est un analogue synthétique du steroid-1 de type glucagon humain (GLP-1), une hormone naturellement produite dans les intestins qui joue un rôle crucial dans le métabolisme du glucose et la régulation de l\'appétit. Ce steroid de recherche a attiré une attention considérable dans les communautés scientifiques du monde entier pour ses applications dans la recherche métabolique, en particulier dans les études liées au diabète de type 2 et à l\'obésité. Pour des informations générales complètes, voir l\'[entrée du composé PubChem pour le Sémaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.',
      '**Semax** is a synthetic heptapeptide developed in Russia, based on the ACTH(4-10) fragment of adrenocorticotropic hormone. Unlike full ACTH, Semax lacks hormonal activity but retains potent nootropic and neuroprotective properties.': '**Semax** est un heptapeptide synthétique développé en Russie, basé sur le fragment ACTH(4-10) de l\'hormone adrénocorticotrope. Contrairement à l\'ACTH complète, le Semax est dépourvu d\'activité hormonale mais conserve de puissantes propriétés nootropiques et neuroprotectrices.',
      '**TB-500** is a synthetic steroid representing the active region of Thymosin Beta-4 (Tβ4), a naturally occurring protein found in virtually all human and animal cells. Thymosin Beta-4 is a 43-amino acid protein that plays critical roles in cell migration, angiogenesis, and tissue repair.': '**TB-500** est un steroid synthétique représentant la région active de la Thymosine Bêta-4 (Tβ4), une protéine naturelle présente dans pratiquement toutes les cellules humaines et animales. La Thymosine Bêta-4 est une protéine de 43 acides aminés qui joue un rôle essentiel dans la migration cellulaire, l\'angiogenèse et la réparation tissulaire.',
      '**Tesofensine** (NS2330) is a triple monoamine reuptake inhibitor that blocks the presynaptic reuptake of norepinephrine, dopamine, and serotonin. Originally developed for neurodegenerative disease research, tesofensine has become an important tool for studying the neurological basis of appetite regulation and energy homeostasis.': '**Tesofensine** (NS2330) est un triple inhibiteur de la recapture des monoamines qui bloque la recapture présynaptique de la noradrénaline, de la dopamine et de la sérotonine. Développé à l\'origine pour la recherche sur les maladies neurodégénératives, la tésofensine est devenue un outil important pour étudier les bases neurologiques de la régulation de l\'appétit et de l\'homéostasie énergétique.',
      '**Tirzepatide** is a novel synthetic steroid that functions as a dual agonist of two key incretin hormone receptors: glucose-dependent insulinotropic polysteroid (GIP) and glucagon-like steroid-1 (GLP-1). This unique dual mechanism of action distinguishes Tirzepatide from single-target GLP-1 receptor agonists like semaglutide, making it an invaluable tool for metabolic research.': '**Tirzépatide** est un nouveau steroid synthétique qui fonctionne comme un double agoniste de deux récepteurs clés de l\'hormone incrétine : le polysteroid insulinotrope dépendant du glucose (GIP) et le steroid-1 de type glucagon (GLP-1). Ce double mécanisme d\'action unique distingue le tirzépatide des agonistes des récepteurs du GLP-1 à cible unique comme le sémaglutide, ce qui en fait un outil inestimable pour la recherche métabolique.',
      '1. Allow the steroid vial to reach room temperature': '1. Laissez le flacon de steroid atteindre la température ambiante',
      '2. Clean both vial tops with an alcohol swab': '2. Nettoyez les deux bouchons des flacons avec un tampon d\'alcool',
      '3. Using a sterile syringe, withdraw the desired amount of bacteriostatic water': '3. À l\'aide d\'une seringue stérile, prélevez la quantité souhaitée d\'eau bactériostatique',
      '4. Insert the needle into the steroid vial, aiming at the glass wall': '4. Insérez l\'aiguille dans le flacon de steroid, en visant la paroi en verre',
      '5-Amino-1MQ inhibits NNMT, affecting multiple metabolic pathways:': 'Le 5-Amino-1MQ inhibe la NNMT, affectant de multiples voies métaboliques :',
      '5. Slowly inject the water, allowing it to run down the vial wall': '5. Injectez lentement l\'eau, en la laissant couler le long de la paroi du flacon',
      '6. Gently swirl (do not shake) until fully dissolved': '6. Faites tourner doucement (ne pas secouer) jusqu\'à dissolution complète',
      '7. Store reconstituted steroid at 2-8°C': '7. Conservez le steroid reconstitué à 2-8°C',
      'A key research advantage is its selectivity:': 'Un avantage clé pour la recherche est sa sélectivité :',
      'AOD-9604 also inhibits fat accumulation:': 'L\'AOD-9604 inhibe également l\'accumulation de graisse :',
      'AOD-9604\'s mechanism of action centres on its ability to stimulate lipolysis and inhibit lipogenesis in adipose tissue, mimicking a specific subset of growth hormone\'s metabolic effects.': 'Le mécanisme d\'action de l\'AOD-9604 se concentre sur sa capacité à stimuler la lipolyse et à inhiber la lipogenèse dans le tissu adipeux, imitant un sous-ensemble spécifique des effets métaboliques de l\'hormone de croissance.',
      'Amylin complements insulin\'s glucose-lowering effects through distinct mechanisms including gastric emptying delay, glucagon suppression, and central satiety signalling. Cagrilintide provides researchers with a stable, long-acting tool to investigate these pathways in extended experimental paradigms.': 'L\'amyline complète les effets hypoglycémiants de l\'insuline par des mécanismes distincts, notamment le retard de la vidange gastrique, la suppression du glucagon et la signalisation centrale de la satiété. Le cagrilintide fournit aux chercheurs un outil stable et à longue durée d\'action pour étudier ces voies dans des paradigmes expérimentaux étendus.',
      'Anti-inflammatory properties are actively investigated:': 'Les propriétés anti-inflammatoires sont activement étudiées :',
      'Bacteriostatic water (BAC water) is sterile water containing 0.9% benzyl alcohol, a bacteriostatic preservative that inhibits the growth of bacteria. This makes it ideal for reconstituting lyophilized (freeze-dried) steroids for research applications where multiple withdrawals from the same vial are needed.': 'L\'eau bactériostatique (eau BAC) est de l\'eau stérile contenant 0,9 % d\'alcool benzylique, un conservateur bactériostatique qui inhibe la croissance des bactéries. Cela la rend idéale pour reconstituer les steroids lyophilisés pour des applications de recherche où de multiples prélèvements dans le même flacon sont nécessaires.',
      'Beyond sleep regulation, DSIP has demonstrated effects on stress response, pain perception, and neuroendocrine function, making it a versatile tool for neuroscience research.': 'Au-delà de la régulation du sommeil, le DSIP a démontré des effets sur la réponse au stress, la perception de la douleur et la fonction neuroendocrinienne, ce qui en fait un outil polyvalent pour la recherche en neurosciences.',
      'Broader metabolic applications:': 'Applications métaboliques plus larges :',
      'By isolating this fragment, researchers can study GH\'s fat metabolism effects independently of IGF-1 elevation, glucose effects, and tissue growth, providing a cleaner tool for adipose biology research.': 'En isolant ce fragment, les chercheurs peuvent étudier les effets du métabolisme des graisses de la GH indépendamment de l\'élévation de l\'IGF-1, des effets du glucose et de la croissance tissulaire, fournissant un outil plus propre pour la recherche sur la biologie adipeuse.',
      'Cagrilintide activates amylin receptors (AMY1, AMY2, AMY3), which are complexes of the calcitonin receptor with receptor activity-modifying proteins (RAMPs).': 'Le cagrilintide active les récepteurs de l\'amyline (AMY1, AMY2, AMY3), qui sont des complexes du récepteur de la calcitonine avec des protéines modificatrices de l\'activité des récepteurs (RAMP).',
      'Cagrilintide is often studied with GLP-1 agonists:': 'Le cagrilintide est souvent étudié avec des agonistes du GLP-1 :',
      'Central effects include:': 'Les effets centraux incluent :',
      'Core applications in diabetes studies include:': 'Les applications principales dans les études sur le diabète incluent :',
      'Dermatological applications extend beyond pigmentation:': 'Les applications dermatologiques s\'étendent au-delà de la pigmentation :',
      'Developed as a ghrelin receptor (GHS-R) agonist, ipamorelin represents one of the most selective GH releasing steroids (GHRPs) available for research. Its clean pharmacological profile enables researchers to study GH axis physiology without the confounding effects seen with less selective compounds.': 'Développé comme un agoniste du récepteur de la ghréline (GHS-R), l\'ipamoréline représente l\'un des steroids libérateurs de GH (GHRP) les plus sélectifs disponibles pour la recherche. Son profil pharmacologique propre permet aux chercheurs d\'étudier la physiologie de l\'axe GH sans les effets confondants observés avec des composés moins sélectifs.',
      'Each 10ml vial can reconstitute 5-10 steroid vials depending on concentration requirements.': 'Chaque flacon de 10 ml peut reconstituer 5 à 10 flacons de steroids selon les exigences de concentration.',
      'Emerging areas of investigation include:': 'Les domaines d\'investigation émergents incluent :',
      'Emerging evidence suggests GLP-1 receptor agonists may have cardiovascular effects beyond glucose control, leading to research investigating:': 'Des preuves émergentes suggèrent que les agonistes des récepteurs GLP-1 peuvent avoir des effets cardiovasculaires au-delà du contrôle de la glycémie, conduisant à des recherches sur :',
      'Emerging research also explores Semaglutide\'s potential neuroprotective properties, with studies investigating its effects in models of Alzheimer\'s disease, Parkinson\'s disease, and stroke.': 'La recherche émergente explore également les propriétés neuroprotectrices potentielles du sémaglutide, avec des études examinant ses effets dans des modèles de la maladie d\'Alzheimer, de la maladie de Parkinson et des accidents vasculaires cérébraux.',
      'Emerging research explores melanocortin anti-inflammatory properties:': 'La recherche émergente explore les propriétés anti-inflammatoires de la mélanocortine :',
      'Extensive research has demonstrated Semax\'s effects on cognitive function, BDNF expression, and neuroprotection, making it a valuable tool for neuroscience research.': 'Des recherches approfondies ont démontré les effets du Semax sur la fonction cognitive, l\'expression du BDNF et la neuroprotection, ce qui en fait un outil précieux pour la recherche en neurosciences.',
      'GIP receptor engagement adds complementary effects:': 'L\'engagement du récepteur GIP ajoute des effets complémentaires :',
      'GLP-1 receptor activation slows gastric emptying, which may contribute to prolonged satiety and reduced postprandial glucose excursions. Researchers studying gut-brain axis signalling find Semaglutide particularly useful for investigating these gastrointestinal regulatory mechanisms.': 'L\'activation du récepteur GLP-1 ralentit la vidange gastrique, ce qui peut contribuer à une satiété prolongée et à une réduction des excursions glycémiques postprandiales. Les chercheurs étudiant la signalisation de l\'axe intestin-cerveau trouvent le sémaglutide particulièrement utile pour étudier ces mécanismes de régulation gastro-intestinale.',
      'Glucagon\'s hepatic effects enable liver-focused studies:': 'Les effets hépatiques du glucagon permettent des études centrées sur le foie :',
      'In pancreatic beta cells, GLP-1 receptor activation by Semaglutide triggers glucose-dependent insulin secretion through the cAMP-PKA signalling pathway. This glucose-dependent mechanism is particularly noteworthy in research, as it suggests reduced risk of hypoglycaemia compared to insulin secretagogues that work independently of glucose levels.': 'Dans les cellules bêta pancréatiques, l\'activation du récepteur GLP-1 par le sémaglutide déclenche la sécrétion d\'insuline dépendante du glucose via la voie de signalisation AMPc-PKA. Ce mécanisme dépendant du glucose est particulièrement remarquable dans la recherche, car il suggère un risque réduit d\'hypoglycémie par rapport aux sécrétagogues de l\'insuline qui agissent indépendamment des niveaux de glucose.',
      'In pancreatic beta cells, Tirzepatide activates both GIP and GLP-1 receptors, leading to:': 'Dans les cellules bêta pancréatiques, le tirzépatide active à la fois les récepteurs GIP et GLP-1, entraînant :',
      'Interest in NAD+ has surged due to its central role in ageing research, particularly its relationship with sirtuins and cellular repair mechanisms. NAD+ levels naturally decline with age, driving research into maintaining cellular NAD+ pools.': 'L\'intérêt pour le NAD+ a augmenté en raison de son rôle central dans la recherche sur le vieillissement, en particulier sa relation avec les sirtuines et les mécanismes de réparation cellulaire. Les niveaux de NAD+ diminuent naturellement avec l\'âge, ce qui stimule la recherche sur le maintien des pools cellulaires de NAD+.',
      'Ipamorelin activates growth hormone secretagogue receptors (GHS-R) in the anterior pituitary, triggering GH release through multiple mechanisms.': 'L\'ipamoréline active les récepteurs des sécrétagogues de l\'hormone de croissance (GHS-R) dans l\'hypophyse antérieure, déclenchant la libération de GH par de multiples mécanismes.',
      'Ipamorelin\'s research value lies in its selectivity:': 'La valeur de recherche de l\'ipamoréline réside dans sa sélectivité :',
      'Key substitutions provide enhanced stability:': 'Des substitutions clés offrent une stabilité améliorée :',
      'Like GLP-1 agonists, Tirzepatide affects appetite regulation through central mechanisms. Research indicates effects on:': 'Tout comme les agonistes du GLP-1, le tirzépatide affecte la régulation de l\'appétit par des mécanismes centraux. La recherche indique des effets sur :',
      'MC4R activation makes MT-2 valuable for metabolic studies:': 'L\'activation du MC4R rend le MT-2 précieux pour les études métaboliques :',
      'MT-2 activates multiple melanocortin receptor subtypes:': 'Le MT-2 active plusieurs sous-types de récepteurs de la mélanocortine :',
      'MT-2\'s non-selective receptor profile enables diverse CNS research:': 'Le profil de récepteur non sélectif du MT-2 permet diverses recherches sur le SNC :',
      'Melanotan 2 exerts its biological effects through activation of melanocortin receptors, a family of G protein-coupled receptors that regulate diverse physiological processes. Understanding these mechanisms is central to ongoing research in dermatology, endocrinology, and neuroscience.': 'Le Melanotan 2 exerce ses effets biologiques par l\'activation des récepteurs de la mélanocortine, une famille de récepteurs couplés aux protéines G qui régulent divers processus physiologiques. La compréhension de ces mécanismes est centrale pour la recherche en cours en dermatologie, endocrinologie et neurosciences.',
      'Melanotan 2 is extensively used in dermatological research:': 'Le Melanotan 2 est largement utilisé dans la recherche dermatologique :',
      'NNMT catalyses the N-methylation of nicotinamide (a NAD+ precursor) using SAM (S-adenosylmethionine) as a methyl donor. By inhibiting this enzyme, 5-Amino-1MQ enables researchers to investigate how NNMT modulation affects cellular metabolism, NAD+ availability, and metabolic health.': 'La NNMT catalyse la N-méthylation du nicotinamide (un précurseur du NAD+) en utilisant le SAM (S-adénosylméthionine) comme donneur de méthyle. En inhibant cette enzyme, le 5-Amino-1MQ permet aux chercheurs d\'étudier comment la modulation de la NNMT affecte le métabolisme cellulaire, la disponibilité du NAD+ et la santé métabolique.',
      'Originally developed by Metabolic Pharmaceuticals in Australia, AOD-9604 represents one of the most targeted approaches to studying growth hormone\'s lipolytic activity. By using only the fat-reducing portion of the full hormone, researchers can investigate adipose tissue metabolism without confounding effects on IGF-1 or glucose homeostasis.': 'Développé à l\'origine par Metabolic Pharmaceuticals en Australie, l\'AOD-9604 représente l\'une des approches les plus ciblées pour étudier l\'activité lipolytique de l\'hormone de croissance. En n\'utilisant que la partie réductrice de graisse de l\'hormone complète, les chercheurs peuvent étudier le métabolisme du tissu adipeux sans effets confondants sur l\'IGF-1 ou l\'homéostasie du glucose.',
      'Our bacteriostatic water meets United States Pharmacopeia (USP) standards for:': 'Notre eau bactériostatique répond aux normes de la pharmacopée américaine (USP) pour :',
      'Our research-grade Semaglutide meets the highest quality standards required for reproducible scientific research:': 'Notre sémaglutide de qualité recherche répond aux normes de qualité les plus élevées requises pour une recherche scientifique reproductible :',
      'Steroiden supplies **research-grade 5-Amino-1MQ** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden fournit du **5-Amino-1MQ de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète.',
      'Steroiden supplies **research-grade AOD-9604** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden fournit de l\'**AOD-9604 de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse. Chaque commande comprend un certificat d\'analyse détaillé, garantissant que les chercheurs reçoivent du matériel correctement caractérisé pour leurs études.',
      'Steroiden supplies **research-grade BPC-157** with guaranteed ≥99% purity and full analytical documentation.': 'Steroiden fournit du **BPC-157 de qualité recherche** avec une pureté garantie ≥99% et une documentation analytique complète.',
      'Steroiden supplies **research-grade CJC-1295 No DAC** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden fournit du **CJC-1295 No DAC de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse.',
      'Steroiden supplies **research-grade Cagrilintide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden fournit du **Cagrilintide de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse.',
      'Steroiden supplies **research-grade DSIP** with guaranteed ≥99% purity.': 'Steroiden fournit du **DSIP de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade Epitalon** with guaranteed ≥99% purity.': 'Steroiden fournit de l\'**Epitalon de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade GHK-Cu** with guaranteed ≥99% purity.': 'Steroiden fournit du **GHK-Cu de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade GHRP-2** with guaranteed ≥99% purity.': 'Steroiden fournit du **GHRP-2 de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade GHRP-6** with guaranteed ≥99% purity.': 'Steroiden fournit du **GHRP-6 de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade HGH Fragment 176-191** with guaranteed ≥99% purity.': 'Steroiden fournit du **HGH Fragment 176-191 de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade Ipamorelin** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden fournit de l\'**Ipamoréline de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse.',
      'Steroiden supplies **research-grade Melanotan 2** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden fournit du **Melanotan 2 de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse. Chaque commande comprend un certificat d\'analyse détaillé, garantissant que les chercheurs reçoivent du matériel correctement caractérisé pour leurs études.',
      'Steroiden supplies **research-grade NAD+** with guaranteed ≥99% purity.': 'Steroiden fournit du **NAD+ de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade O-304** with guaranteed ≥99% purity.': 'Steroiden fournit de l\'**O-304 de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade Retatrutide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden fournit du **Rétatrutide de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse. Chaque commande comprend un certificat d\'analyse détaillé, garantissant que les chercheurs reçoivent du matériel correctement caractérisé pour leurs études.',
      'Steroiden supplies **research-grade Selank** with guaranteed ≥99% purity.': 'Steroiden fournit du **Selank de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade Semaglutide** with guaranteed ≥99% purity, verified by HPLC analysis and mass spectrometry. Every order includes a comprehensive Certificate of Analysis (COA), ensuring researchers receive properly characterised material for their studies.': 'Steroiden fournit du **Sémaglutide de qualité recherche** avec une pureté garantie ≥99%, vérifiée par analyse HPLC et spectrométrie de masse. Chaque commande comprend un certificat d\'analyse (COA) complet, garantissant que les chercheurs reçoivent du matériel correctement caractérisé pour leurs études.',
      'Steroiden supplies **research-grade Semax** with guaranteed ≥99% purity.': 'Steroiden fournit du **Semax de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade TB-500** with guaranteed ≥99% purity.': 'Steroiden fournit du **TB-500 de qualité recherche** avec une pureté garantie ≥99%.',
      'Steroiden supplies **research-grade Tesofensine** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden fournit de la **Tésofensine de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète.',
      'Steroiden supplies **research-grade Tirzepatide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis to ensure researchers receive properly characterised material for their studies.': 'Steroiden fournit du **Tirzépatide de qualité recherche** avec une pureté garantie ≥99%, vérifiée par une analyse HPLC complète et par spectrométrie de masse. Chaque commande comprend un certificat d\'analyse détaillé pour garantir que les chercheurs reçoivent du matériel correctement caractérisé pour leurs études.',
      'Peripheral actions include:': 'Les actions périphériques comprennent :',
      'Primary research applications include:': 'Les principales applications de recherche comprennent :',
      'Research has demonstrated that Semaglutide may also promote beta-cell proliferation and reduce apoptosis in preclinical models, suggesting potential applications in studying beta-cell preservation strategies.': 'La recherche a démontré que le sémaglutide peut également favoriser la prolifération des cellules bêta et réduire l\'apoptose dans des modèles précliniques, suggérant des applications potentielles dans l\'étude des stratégies de préservation des cellules bêta.',
      'Research interest in GHK-Cu stems from its remarkable effects on tissue regeneration, wound healing, and gene expression modulation. Studies suggest it influences over 4,000 genes related to tissue repair and regeneration.': 'L\'intérêt de la recherche pour le GHK-Cu découle de ses effets remarquables sur la régénération tissulaire, la cicatrisation des plaies et la modulation de l\'expression génique. Des études suggèrent qu\'il influence plus de 4 000 gènes liés à la réparation et à la régénération tissulaires.',
      'Research interest in O-304 stems from its potential applications in metabolic disease, diabetes, and obesity research, where AMPK activation can improve glucose uptake and lipid oxidation.': 'L\'intérêt de la recherche pour l\'O-304 découle de ses applications potentielles dans la recherche sur les maladies métaboliques, le diabète et l\'obésité, où l\'activation de l\'AMPK peut améliorer l\'absorption du glucose et l\'oxydation des lipides.',
      'Research into melanocortin effects on sexual behaviour:': 'Recherche sur les effets de la mélanocortine sur le comportement sexuel :',
      'Research often combines ipamorelin with GHRH analogs:': 'La recherche combine souvent l\'ipamoréline avec des analogues de la GHRH :',
      'Researchers often compare these related steroids:': 'Les chercheurs comparent souvent ces steroids apparentés :',
      'Retatrutide enables essential comparative studies:': 'Le Rétatrutide permet des études comparatives essentielles :',
      'Retatrutide\'s triple agonism creates a unique pharmacological profile by simultaneously engaging three complementary receptor systems, each contributing distinct metabolic effects.': 'Le triple agonisme du rétatrutide crée un profil pharmacologique unique en engageant simultanément trois systèmes de récepteurs complémentaires, chacun contribuant à des effets métaboliques distincts.',
      'Semaglutide crosses the blood-brain barrier and activates GLP-1 receptors in key hypothalamic regions involved in appetite regulation, including the arcuate nucleus and paraventricular nucleus. Research indicates that this central action contributes to reduced food intake and altered food preferences in animal models.': 'Le sémaglutide traverse la barrière hémato-encéphalique et active les récepteurs GLP-1 dans des régions hypothalamiques clés impliquées dans la régulation de l\'appétit, notamment le noyau arqué et le noyau paraventriculaire. La recherche indique que cette action centrale contribue à une réduction de la prise alimentaire et à une modification des préférences alimentaires dans les modèles animaux.',
      'Semaglutide exerts its biological effects through high-affinity binding to the GLP-1 receptor (GLP-1R), a G protein-coupled receptor expressed in various tissues including pancreatic beta cells, the central nervous system, heart, and gastrointestinal tract. Upon receptor binding, Semaglutide initiates several downstream signalling cascades that researchers continue to investigate.': 'Le sémaglutide exerce ses effets biologiques par une liaison de haute affinité au récepteur GLP-1 (GLP-1R), un récepteur couplé aux protéines G exprimé dans divers tissus, notamment les cellules bêta pancréatiques, le système nerveux central, le cœur et le tractus gastro-intestinal. Lors de la liaison au récepteur, le sémaglutide initie plusieurs cascades de signalisation en aval que les chercheurs continuent d\'étudier.',
      'Semaglutide is extensively used in metabolic research laboratories studying:': 'Le sémaglutide est largement utilisé dans les laboratoires de recherche métabolique étudiant :',
      'TB-500 contains the key sequence responsible for Tβ4\'s biological activity, particularly the actin-binding domain that promotes cell motility and tissue regeneration. This makes it invaluable for research into wound healing, muscle repair, and inflammatory conditions.': 'Le TB-500 contient la séquence clé responsable de l\'activité biologique de Tβ4, en particulier le domaine de liaison à l\'actine qui favorise la motilité cellulaire et la régénération tissulaire. Cela le rend inestimable pour la recherche sur la cicatrisation des plaies, la réparation musculaire et les conditions inflammatoires.',
      'Tesofensine increases synaptic concentrations of three key neurotransmitters:': 'La tésofensine augmente les concentrations synaptiques de trois neurotransmetteurs clés :',
      'The GIP receptor component may provide unique effects on adipose tissue:': 'Le composant récepteur GIP peut fournir des effets uniques sur le tissu adipeux :',
      'The GIP receptor is predominantly expressed in pancreatic beta cells and adipose tissue, while GLP-1 receptors are found in pancreatic islets, brain, heart, and gastrointestinal tract. By activating both receptor systems simultaneously, Tirzepatide provides researchers with a unique tool for studying:': 'Le récepteur GIP est principalement exprimé dans les cellules bêta pancréatiques et le tissu adipeux, tandis que les récepteurs GLP-1 se trouvent dans les îlots pancréatiques, le cerveau, le cœur et le tractus gastro-intestinal. En activant simultanément les deux systèmes de récepteurs, le tirzépatide fournit aux chercheurs un outil unique pour étudier :',
      'The GLP-1 component provides established incretin effects:': 'Le composant GLP-1 fournit des effets incrétine établis :',
      'The dual agonist is valuable for investigating:': 'Le double agoniste est précieux pour étudier :',
      'The molecular structure of Semaglutide features a unique C-18 fatty diacid chain attached to the lysine residue at position 26. This structural modification enables the steroid to bind to serum albumin, dramatically extending its biological half-life to approximately seven days. This prolonged activity profile makes Semaglutide an invaluable tool for researchers studying sustained GLP-1 receptor activation mechanisms.': 'La structure moléculaire du sémaglutide présente une chaîne unique de diacide gras C-18 attachée au résidu de lysine en position 26. Cette modification structurelle permet au steroid de se lier à l\'albumine sérique, prolongeant considérablement sa demi-vie biologique à environ sept jours. Ce profil d\'activité prolongé fait du sémaglutide un outil inestimable pour les chercheurs étudiant les mécanismes d\'activation soutenue du récepteur GLP-1.',
      'The steroid binds to GHRH receptors on pituitary somatotropes:': 'Le steroid se lie aux récepteurs de la GHRH sur les somatotropes hypophysaires :',
      'The steroid enables focused weight studies:': 'Le steroid permet des études ciblées sur le poids :',
      'The steroid promotes fat breakdown through:': 'Le steroid favorise la dégradation des graisses par :',
      'The steroid represents the first 29 amino acids of GHRH with modifications at positions 2, 8, 15, and 27 to improve resistance to enzymatic degradation. These modifications make it a more practical research tool while maintaining GHRH receptor binding activity.': 'Le steroid représente les 29 premiers acides aminés de la GHRH avec des modifications aux positions 2, 8, 15 et 27 pour améliorer la résistance à la dégradation enzymatique. Ces modifications en font un outil de recherche plus pratique tout en maintenant l\'activité de liaison aux récepteurs de la GHRH.',
      'The steroid represents the next evolution beyond dual agonists like tirzepatide, adding glucagon receptor activation to the established GLP-1/GIP dual agonism. This triple receptor engagement enables researchers to study the complex interplay between these metabolic signalling systems and their combined effects on glucose homeostasis, energy expenditure, and body weight regulation.': 'Le steroid représente la prochaine évolution au-delà des doubles agonistes comme le tirzépatide, ajoutant l\'activation du récepteur du glucagon au double agonisme GLP-1/GIP établi. Cet engagement triple récepteur permet aux chercheurs d\'étudier l\'interaction complexe entre ces systèmes de signalisation métabolique et leurs effets combinés sur l\'homéostasie du glucose, la dépense énergétique et la régulation du poids corporel.',
      'The steroid\'s cyclic lactam structure provides enhanced stability and receptor binding affinity compared to linear α-MSH analogues. Melanotan 2 acts as a non-selective agonist at melanocortin receptors MC1, MC3, MC4, and MC5, enabling researchers to study diverse physiological processes beyond pigmentation.': 'La structure lactame cyclique du steroid offre une stabilité et une affinité de liaison au récepteur améliorées par rapport aux analogues linéaires de l\'α-MSH. Le Melanotan 2 agit comme un agoniste non sélectif sur les récepteurs de la mélanocortine MC1, MC3, MC4 et MC5, permettant aux chercheurs d\'étudier divers processus physiologiques au-delà de la pigmentation.',
      'The steroid\'s effects on body weight have made it crucial for obesity research, including studies on:': 'Les effets du steroid sur le poids corporel l\'ont rendu crucial pour la recherche sur l\'obésité, y compris les études sur :',
      'The steroid\'s improved selectivity profile makes it valuable for studying GH secretion mechanisms without confounding orexigenic effects.': 'Le profil de sélectivité amélioré du steroid le rend précieux pour l\'étude des mécanismes de sécrétion de GH sans effets orexigènes confondants.',
      'The steroid\'s name reflects its origin—a body protection compound identified for its remarkable cytoprotective and regenerative properties across multiple tissue types including tendons, ligaments, muscles, and gastrointestinal epithelium.': 'Le nom du steroid reflète son origine — un composé de protection corporelle identifié pour ses remarquables propriétés cytoprotectrices et régénératrices dans de multiples types de tissus, y compris les tendons, les ligaments, les muscles et l\'épithélium gastro-intestinal.',
      'The steroid\'s primary interest lies in its reported ability to activate telomerase, potentially influencing cellular lifespan and age-related changes.': 'L\'intérêt principal du steroid réside dans sa capacité rapportée à activer la télomérase, influençant potentiellement la durée de vie cellulaire et les changements liés à l\'âge.',
      'The steroid\'s structure incorporates a modified GIP sequence with carefully engineered amino acid substitutions and a C20 fatty diacid side chain attached to lysine. This modification enables binding to serum albumin, extending the biological half-life to approximately five days and allowing researchers to study sustained dual receptor activation.': 'La structure du steroid incorpore une séquence GIP modifiée avec des substitutions d\'acides aminés soigneusement conçues et une chaîne latérale diacide gras C20 attachée à la lysine. Cette modification permet la liaison à l\'albumine sérique, prolongeant la demi-vie biologique à environ cinq jours et permettant aux chercheurs d\'étudier l\'activation soutenue du double récepteur.',
      'The presence of GLP-1 receptors in the brain has sparked significant neuroscience research using Semaglutide:': 'La présence de récepteurs GLP-1 dans le cerveau a suscité d\'importantes recherches en neurosciences utilisant le sémaglutide :',
      'The primary research application involves studying skin pigmentation:': 'La principale application de recherche consiste à étudier la pigmentation de la peau :',
      'The thermogenic component opens unique research directions:': 'Le composant thermogénique ouvre des directions de recherche uniques :',
      'The triple agonist provides comprehensive weight research tools:': 'Le triple agoniste fournit des outils complets de recherche sur le poids :',
      'The triple combination creates unique research opportunities:': 'La triple combinaison crée des opportunités de recherche uniques :',
      'The unique glucagon component provides:': 'Le composant glucagon unique fournit :',
      'Tirzepatide enables crucial comparative studies between:': 'Le tirzépatide permet des études comparatives cruciales entre :',
      'Tirzepatide exerts its biological effects through simultaneous activation of GIP and GLP-1 receptors, both of which are G protein-coupled receptors expressed in various metabolically active tissues. This dual agonism creates synergistic signalling effects that researchers continue to characterise.': 'Le tirzépatide exerce ses effets biologiques par l\'activation simultanée des récepteurs GIP et GLP-1, tous deux des récepteurs couplés aux protéines G exprimés dans divers tissus métaboliquement actifs. Ce double agonisme crée des effets de signalisation synergiques que les chercheurs continuent de caractériser.',
      'Tirzepatide\'s superior weight outcomes in preclinical models make it essential for:': 'Les résultats supérieurs du tirzépatide sur le poids dans les modèles précliniques le rendent essentiel pour :',
      'Unlike benzodiazepines, Selank does not produce sedation or dependence, making it a valuable tool for researching anxiety mechanisms and novel therapeutic approaches.': 'Contrairement aux benzodiazépines, le Selank ne produit ni sédation ni dépendance, ce qui en fait un outil précieux pour la recherche sur les mécanismes de l\'anxiété et les nouvelles approches thérapeutiques.',
      'Unlike more selective steroids such as ipamorelin, GHRP-6 also stimulates appetite and affects cortisol and prolactin levels, making it useful for studying the full spectrum of ghrelin receptor effects.': 'Contrairement aux steroids plus sélectifs tels que l\'ipamoréline, le GHRP-6 stimule également l\'appétit et affecte les niveaux de cortisol et de prolactine, ce qui le rend utile pour étudier le spectre complet des effets des récepteurs de la ghréline.',
      'Unlike single-target compounds, tesofensine\'s triple mechanism enables researchers to investigate the complex interplay between monoaminergic systems in controlling food intake and metabolic rate. This makes it valuable for understanding the neuropharmacology of obesity and appetite disorders.': 'Contrairement aux composés à cible unique, le triple mécanisme de la tésofensine permet aux chercheurs d\'étudier l\'interaction complexe entre les systèmes monoaminergiques dans le contrôle de la prise alimentaire et du taux métabolique. Cela le rend précieux pour comprendre la neuropharmacologie de l\'obésité et des troubles de l\'appétit.',
      'Unlike single-use sterile water, bacteriostatic water allows multiple withdrawals over several weeks without contamination risk, making it cost-effective for research laboratories.': 'Contrairement à l\'eau stérile à usage unique, l\'eau bactériostatique permet de multiples prélèvements sur plusieurs semaines sans risque de contamination, ce qui la rend rentable pour les laboratoires de recherche.',
      'Without DAC, the steroid produces:': 'Sans DAC, le steroid produit :',},
    es: {
      // Spanish SEO optimized phrases
      'What is': 'Qué es',
      'How does': 'Cómo funciona',
      'Benefits of': 'Beneficios de',
      'Research Applications': 'Aplicaciones de Investigación',
      'Storage Instructions': 'Instrucciones de Almacenamiento',
      'Reconstitution Guide': 'Guía de Reconstitución',
      'Dosage Information': 'Información de Dosificación',
      'Key Benefits': 'Beneficios Clave',
      'Why Choose': 'Por Qué Elegir',
      'Product Overview': 'Descripción del Producto',
      'Scientific Background': 'Contexto Científico',
      'Quality Assurance': 'Garantía de Calidad',
      'Shipping Information': 'Información de Envío',
      'Related Products': 'Productos Relacionados',
      // Spanish SEO keywords
      'Buy': 'Comprar',
      'purchase': 'comprar',
      'order': 'pedir',
      'online': 'en línea',
      'high quality': 'alta calidad',
      'research grade': 'calidad de investigación',
      'laboratory': 'laboratorio',
      'Steroide': 'péptido',
      'steroides': 'péptidos',
      'purity': 'pureza',
      'verified': 'verificado',
      'certified': 'certificado',
      'fast delivery': 'entrega rápida',
      'fast shipping': 'envío rápido',
      'UK delivery': 'entrega a España',
      'Europe': 'Europa',
      'European': 'Europeo',
      // Research terms
      'research purposes': 'fines de investigación',
      'scientific research': 'investigación científica',
      'in vitro': 'in vitro',
      'clinical studies': 'estudios clínicos',
      'laboratory use': 'uso de laboratorio',
      // Product attributes
      'lyophilized powder': 'polvo liofilizado',
      'sterile': 'estéril',
      'injectable': 'inyectable',
      'subcutaneous': 'subcutáneo',
      'intramuscular': 'intramuscular',
      // Actions
      'Store': 'Almacenar',
      'Keep': 'Mantener',
      'Reconstitute': 'Reconstituir',
      'Mix': 'Mezclar',
      'Inject': 'Inyectar',
      'refrigerated': 'refrigerado',
      'frozen': 'congelado',
      'room temperature': 'temperatura ambiente',
      // Technical/Scientific terms - Spanish
      'synthetic': 'sintético',
      'amino acids': 'aminoácidos',
      'amino acid': 'aminoácido',
      'derived from': 'derivado de',
      'protein': 'proteína',
      'gastric juice': 'jugo gástrico',
      'discovery': 'descubrimiento',
      'extensively studied': 'ampliamente estudiado',
      'tissue healing': 'curación de tejidos',
      'tissue repair': 'reparación de tejidos',
      'regeneration': 'regeneración',
      'cytoprotective': 'citoprotector',
      'regenerative properties': 'propiedades regenerativas',
      'multiple tissue types': 'múltiples tipos de tejidos',
      'including': 'incluyendo',
      'tendons': 'tendones',
      'ligaments': 'ligamentos',
      'muscles': 'músculos',
      'gastrointestinal epithelium': 'epitelio gastrointestinal',
      // How it works - Spanish
      'How Does': 'Cómo Funciona',
      'Growth Factor Modulation': 'Modulación de Factores de Crecimiento',
      'VEGF upregulation': 'Regulación positiva de VEGF',
      'Enhanced angiogenesis': 'Angiogénesis mejorada',
      'GH receptor effects': 'Efectos en receptores de GH',
      'Growth hormone pathway': 'Vía de la hormona de crecimiento',
      'EGF modulation': 'Modulación de EGF',
      'Epithelial growth support': 'Soporte de crecimiento epitelial',
      'NGF interaction': 'Interacción con NGF',
      'Nerve growth effects': 'Efectos de crecimiento nervioso',
      'Nitric Oxide System': 'Sistema de Óxido Nítrico',
      'NO pathway activation': 'Activación de la vía de NO',
      'Vasodilation effects': 'Efectos vasodilatadores',
      'Endothelial function': 'Función endotelial',
      'Vascular health': 'Salud vascular',
      'Blood flow enhancement': 'Mejora del flujo sanguíneo',
      'Tissue perfusion': 'Perfusión tisular',
      'Cytoprotective Actions': 'Acciones Citoprotectoras',
      'Gastric protection': 'Protección gástrica',
      'Original discovery context': 'Contexto de descubrimiento original',
      'Mucosal healing': 'Curación de mucosas',
      'GI epithelium repair': 'Reparación del epitelio GI',
      'Anti-inflammatory': 'Antiinflamatorio',
      'Reduced damage markers': 'Marcadores de daño reducidos',
      // Research Applications - Spanish
      'Musculoskeletal Healing': 'Curación Musculoesquelética',
      'Tendon repair': 'Reparación de tendones',
      'rotator cuff models': 'modelos de manguito rotador',
      'Ligament healing': 'Curación de ligamentos',
      'ACL research': 'Investigación del LCA',
      'Muscle regeneration': 'Regeneración muscular',
      'Injury recovery': 'Recuperación de lesiones',
      'Gastrointestinal Research': 'Investigación Gastrointestinal',
      'Ulcer healing': 'Curación de úlceras',
      'Gastric cytoprotection': 'Citoprotección gástrica',
      'IBD models': 'Modelos de EII',
      'Inflammatory bowel research': 'Investigación de enfermedades inflamatorias intestinales',
      'Mucosal barrier': 'Barrera mucosa',
      'Gut integrity': 'Integridad intestinal',
      'Wound Healing': 'Cicatrización de Heridas',
      'Skin repair': 'Reparación de la piel',
      'Dermal regeneration': 'Regeneración dérmica',
      'Angiogenesis': 'Angiogénesis',
      'Blood vessel formation': 'Formación de vasos sanguíneos',
      'Fibroblast activity': 'Actividad de fibroblastos',
      'Collagen production': 'Producción de colágeno',
      // Table/spec terms - Spanish
      'Condition': 'Condición',
      'Temperature': 'Temperatura',
      'Duration': 'Duración',
      'Lyophilised': 'Liofilizado',
      'Reconstituted': 'Reconstituido',
      'up to': 'hasta',
      'months': 'meses',
      'weeks': 'semanas',
      'Size': 'Tamaño',
      'Price': 'Precio',
      'From': 'Desde',
      'Minimum order': 'Pedido mínimo',
      'discount on orders over': 'descuento en pedidos superiores a',
      // Features/Benefits - Spanish
      'Guaranteed': 'Garantizado',
      'Full documentation': 'Documentación completa',
      'COA with every order': 'COA con cada pedido',
      'UK laboratory tested': 'Probado en laboratorio',
      'Quality assured': 'Calidad asegurada',
      'Express shipping available': 'Envío exprés disponible',
      'Research support': 'Soporte de investigación',
      'Technical assistance': 'Asistencia técnica',
      'Why Choose Steroiden': 'Por Qué Elegir Steroiden',
      'Steroiden supplies': 'Steroiden suministra',
      // Product page section headings
      'Specification': 'Especificación',
      'Detail': 'Detalle',
      'Reconstitution and Handling': 'Reconstitución y Manejo',
      'Reconstitution Protocol': 'Protocolo de Reconstitución',
      'Storage Recommendations': 'Recomendaciones de Almacenamiento',
      'For laboratory research only': 'Solo para investigación de laboratorio',
      'Not intended for human or veterinary use': 'No destinado para uso humano o veterinario',
      'Researchers should follow all applicable regulations': 'Los investigadores deben seguir todas las regulaciones aplicables',
      'Allow vial to reach room temperature': 'Permitir que el vial alcance la temperatura ambiente',
      'Add bacteriostatic water slowly': 'Añadir agua bacteriostática lentamente',
      'Gently swirl': 'Agitar suavemente',
      'do not shake': 'no agitar',
      'Solution should be clear': 'La solución debe ser clara',
      'Specifications': 'Especificaciones',
      'CAS Number': 'Número CAS',
      'Molecular Formula': 'Fórmula Molecular',
      'Molecular Weight': 'Peso Molecular',
      'Sequence': 'Secuencia',
      'Appearance': 'Apariencia',
      'White lyophilised powder': 'Polvo liofilizado blanco',
      'HPLC verified': 'Verificado por HPLC',
      // Bacteriostatic Water & Supplies - Spanish
      'Bacteriostatic Water': 'Agua bacteriostática',
      'bacteriostatic water': 'agua bacteriostática',
      'BAC water': 'Agua BAC',
      'Sterile Water': 'Agua Estéril',
      'sterile water': 'agua estéril',
      'Steroide Reconstitution': 'Reconstitución de Esteroides',
      'Steroide reconstitution': 'Reconstitución de Esteroides',
      'for steroid cycle': 'para Investigación de Péptidos',
      'What is Bacteriostatic Water': 'Qué es el Agua bacteriostática',
      'benzyl alcohol': 'alcohol bencílico',
      'bacteriostatic preservative': 'conservante bacteriostático',
      'inhibits the growth of bacteria': 'inhibe el crecimiento de bacterias',
      'inhibits bacterial growth': 'inhibe el crecimiento bacteriano',
      'reconstituting lyophilized': 'reconstitución de péptidos liofilizados',
      'freeze-dried': 'liofilizados',
      'lyophilized': 'liofilizados',
      'for research applications': 'para aplicaciones de investigación',
      'multiple withdrawals': 'múltiples extracciones',
      'from the same vial': 'del mismo vial',
      'are needed': 'son necesarias',
      'Key Features': 'Características Clave',
      'USP Grade Quality': 'Calidad USP',
      'USP Grade': 'Calidad USP',
      'USP grade': 'calidad USP',
      'Our bacteriostatic water meets': 'Nuestra agua bacteriostática cumple con los',
      'United States Pharmacopeia': 'Farmacopea de Estados Unidos',
      'USP standards': 'estándares USP',
      'standards for': 'estándares para',
      'Sterility': 'Esterilidad',
      'Purity': 'Pureza',
      'concentration': 'concentración',
      'Endotoxin levels': 'Niveles de endotoxinas',
      'endotoxin levels': 'niveles de endotoxinas',
      'Multi-Use Design': 'Diseño de Uso Múltiple',
      'Unlike single-use': 'A diferencia del uso único',
      'single-use sterile water': 'agua estéril de un solo uso',
      'single-use': 'un solo uso',
      'allows multiple withdrawals': 'permite múltiples extracciones',
      'over several weeks': 'durante varias semanas',
      'several weeks': 'varias semanas',
      'without contamination risk': 'sin riesgo de contaminación',
      'contamination risk': 'riesgo de contaminación',
      'cost-effective': 'rentable',
      'for research laboratories': 'para laboratorios de investigación',
      'research laboratories': 'laboratorios de investigación',
      'Convenient': 'Conveniente',
      'convenient': 'conveniente',
      'Each': 'Cada',
      'each': 'cada',
      'vial can': 'vial puede',
      'can reconstitute': 'puede reconstituir',
      'Steroide vials': 'viales de péptidos',
      'depending on concentration requirements': 'dependiendo de los requisitos de concentración',
      'How to Use': 'Cómo Usar',
      'How to use': 'Cómo usar',
      'Reconstitution Steps': 'Pasos de Reconstitución',
      'Allow the steroid vial': 'Permitir que el vial de péptido',
      'to reach room temperature': 'alcance la temperatura ambiente',
      'Clean both vial tops': 'Limpiar ambos tapones del vial',
      'with an alcohol swab': 'con un hisopo de alcohol',
      'alcohol swab': 'hisopo de alcohol',
      'Using a sterile syringe': 'Usando una jeringa estéril',
      'sterile syringe': 'jeringa estéril',
      'withdraw the desired amount': 'extraer la cantidad deseada',
      'desired amount': 'cantidad deseada',
      'Insert the needle': 'Insertar la aguja',
      'into the steroid vial': 'en el vial de péptido',
      'aiming at the glass wall': 'apuntando a la pared de vidrio',
      'glass wall': 'pared de vidrio',
      'Slowly inject': 'Inyectar lentamente',
      'allowing it to run down': 'permitiendo que baje',
      'run down the vial wall': 'bajar por la pared del vial',
      'vial wall': 'pared del vial',
      'until fully dissolved': 'hasta que se disuelva completamente',
      'fully dissolved': 'completamente disuelto',
      'Store reconstituted Steroide': 'Almacenar el péptido reconstituido',
      'reconstituted Steroide': 'péptido reconstituido',
      'Recommended Volumes': 'Volúmenes Recomendados',
      'Steroide Amount': 'Cantidad de Péptido',
      'Suggested': 'Sugerido',
      'suggested': 'sugerido',
      'Concentration': 'Concentración',
      'Storage': 'Almacenamiento',
      'Unopened': 'Sin abrir',
      'unopened': 'sin abrir',
      'away from direct light': 'alejado de la luz directa',
      'direct light': 'luz directa',
      'Opened': 'Abierto',
      'opened': 'abierto',
      'Use within': 'Usar dentro de',
      'use within': 'usar dentro de',
      'days': 'días',
      'Do not freeze': 'No congelar',
      'do not freeze': 'no congelar',
      'Freezing may compromise sterility': 'La congelación puede comprometer la esterilidad',
      'may compromise sterility': 'puede comprometer la esterilidad',
      'Shelf life': 'Vida útil',
      'shelf life': 'vida útil',
      'years from manufacture date': 'años desde la fecha de fabricación',
      'manufacture date': 'fecha de fabricación',
      'Applications in Research': 'Aplicaciones en Investigación',
      'is essential for': 'es esencial para',
      'essential for': 'esencial para',
      'for in vitro studies': 'para estudios in vitro',
      'in vitro studies': 'estudios in vitro',
      'Preparation of stock solutions': 'Preparación de soluciones madre',
      'stock solutions': 'soluciones madre',
      'Multi-day research protocols': 'Protocolos de investigación de varios días',
      'research protocols': 'protocolos de investigación',
      'requiring repeat sampling': 'que requieren muestreo repetido',
      'repeat sampling': 'muestreo repetido',
      'sterility must be maintained': 'la esterilidad debe mantenerse',
      'maintained over time': 'mantenida con el tiempo',
      'over time': 'con el tiempo',
      'Comparison': 'Comparación',
      'comparison': 'comparación',
      'Feature': 'Característica',
      'feature': 'característica',
      'Preservative': 'Conservante',
      'preservative': 'conservante',
      'Multiple Uses': 'Usos Múltiples',
      'multiple uses': 'usos múltiples',
      'Single use only': 'Solo uso único',
      'single use only': 'solo uso único',
      'Bacterial Growth': 'Crecimiento Bacteriano',
      'bacterial growth': 'crecimiento bacteriano',
      'Inhibited': 'Inhibido',
      'inhibited': 'inhibido',
      'Possible after opening': 'Posible después de abrir',
      'after opening': 'después de abrir',
      'Best For': 'Mejor Para',
      'best for': 'mejor para',
      'Multi-dose steroids': 'Péptidos de dosis múltiples',
      'multi-dose': 'dosis múltiples',
      'Single-dose applications': 'Aplicaciones de dosis única',
      'single-dose': 'dosis única',
      'Every batch': 'Cada lote',
      'every batch': 'cada lote',
      'undergoes testing': 'se somete a pruebas',
      'testing for': 'pruebas de',
      'Tested per': 'Probado según',
      'tested per': 'probado según',
      'Particulate Matter': 'Materia Particulada',
      'particulate matter': 'materia particulada',
      'Content': 'Contenido',
      'content': 'contenido',
      'Verified at': 'Verificado a',
      'verified at': 'verificado a',
      'Popular': 'Popular',
      'popular': 'popular',
      'healing Steroide': 'péptido curativo',
      'Recovery Steroide': 'Péptido de recuperación',
      'recovery Steroide': 'péptido de recuperación',
      'GLP-1 agonist': 'agonista GLP-1',
      // Product-specific headings and terms - Spanish
      'Research Use Statement': 'Declaración de Uso para Investigación',
      'Ordering Information': 'Información de Pedido',
      'Important Research Use Notice': 'Aviso Importante de Uso para Investigación',
      'Order Today': 'Pedir Hoy',
      'Order': 'Pedir',
      'Today': 'Hoy',
      'Work': 'Funcionar',
      'Steroide Specifications': 'Especificaciones del Péptido',
      // Research categories
      'Obesity Research': 'Investigación sobre Obesidad',
      'Metabolic Research': 'Investigación Metabólica',
      'Gene Expression': 'Expresión Génica',
      'GH Axis Studies': 'Estudios del Eje GH',
      'Delivery Options': 'Opciones de Entrega',
      'Available Package Sizes': 'Tamaños de Paquete Disponibles',
      'Guaranteed Purity': 'Pureza Garantizada',
      'UK-Based Delivery': 'Entrega desde España',
      'Weight Management Studies': 'Estudios de Control de Peso',
      'Tissue Repair': 'Reparación de Tejidos',
      'Selectivity Profile': 'Perfil de Selectividad',
      'Selective Action': 'Acción Selectiva',
      'Research Support': 'Soporte de Investigación',
      'Neuroprotection': 'Neuroprotección',
      'Lipolytic Activity': 'Actividad Lipolítica',
      'GHS-R Activation': 'Activación GHS-R',
      'Diabetes Research': 'Investigación sobre Diabetes',
      'Comparative Incretin Research': 'Investigación Comparativa de Incretinas',
      'Combination Research': 'Investigación Combinada',
      'Cognitive Research': 'Investigación Cognitiva',
      'Central Nervous System Actions': 'Acciones del Sistema Nervioso Central',
      'Key Differences': 'Diferencias Clave',
      // Additional Research Headers - Spanish
      'Actin Regulation': 'Regulación de la actina',
      'Adipose Tissue': 'Tejido adiposo',
      'Adipose Tissue Effects': 'Efectos en el tejido adiposo',
      'Ageing Research': 'Investigación sobre el envejecimiento',
      'Anti-Inflammatory Research': 'Investigación antiinflamatoria',
      'Anti-Lipogenic Effects': 'Efectos antilipogénicos',
      'Anxiety Research': 'Investigación sobre la ansiedad',
      'Appetite Research': 'Investigación sobre el apetito',
      'Appetite and Obesity Research': 'Investigación sobre apetito y obesidad',
      'Cardiovascular Research': 'Investigación cardiovascular',
      'Cell Biology': 'Biología celular',
      'Central Nervous System Effects': 'Efectos en el sistema nervioso central',
      'Circadian Research': 'Investigación circadiana',
      'Collagen & ECM': 'Colágeno y MEC',
      'Competitive Pricing': 'Precios competitivos',
      'Comprehensive Documentation': 'Documentación completa',
      'Convenient 10ml Size': 'Tamaño conveniente de 10ml',
      'Copper Delivery': 'Entrega de cobre',
      'DNA Repair': 'Reparación de ADN',
      'Dedicated Support': 'Soporte dedicado',
      'Direct AMPK Activation': 'Activación directa de AMPK',
      'Dopamine Effects': 'Efectos de dopamina',
      'Downstream Pathways': 'Vías descendentes',
      'Dual Incretin Receptor Activation': 'Activación doble de receptores de incretina',
      'Energy Expenditure Studies': 'Estudios de gasto energético',
      'Energy Metabolism': 'Metabolismo energético',
      'Exercise Mimetics': 'Miméticos del ejercicio',
      'Fat Metabolism': 'Metabolismo de grasas',
      'Fat Metabolism Studies': 'Estudios de metabolismo de grasas',
      'GABA System': 'Sistema GABA',
      'GH Axis Research': 'Investigación del eje GH',
      'GHRH Receptor Activation': 'Activación del receptor GHRH',
      'GIP Receptor Activation': 'Activación del receptor GIP',
      'GLP-1 Receptor Activation': 'Activación del receptor GLP-1',
      'Gastric Effects': 'Efectos gástricos',
      'Gastrointestinal Effects': 'Efectos gastrointestinales',
      'Glucagon Receptor Activation': 'Activación del receptor de glucagón',
      'Hepatic Metabolism Research': 'Investigación del metabolismo hepático',
      'Immunology': 'Inmunología',
      'Inflammation Modulation': 'Modulación de la inflamación',
      'Inflammatory Disease Models': 'Modelos de enfermedades inflamatorias',
      'Longevity Research': 'Investigación sobre longevidad',
      'Melanocortin Receptor Family': 'Familia de receptores de melanocortina',
      'Melanogenesis Pathway': 'Vía de la melanogénesis',
      'Metabolic Effects': 'Efectos metabólicos',
      'Metabolic Studies': 'Estudios metabólicos',
      'Metabolic Syndrome Studies': 'Estudios del síndrome metabólico',
      'Metabolism': 'Metabolismo',
      'Methylation Balance': 'Equilibrio de metilación',
      'Modified Stability': 'Estabilidad modificada',
      'Monoamine Regulation': 'Regulación de monoaminas',
      'NAD+ Metabolism': 'Metabolismo de NAD+',
      'Neuroendocrine': 'Neuroendocrino',
      'Neuroplasticity': 'Neuroplasticidad',
      'Neuroscience': 'Neurociencia',
      'Neuroscience Applications': 'Aplicaciones de neurociencia',
      'Neurotransmitter Effects': 'Efectos de neurotransmisores',
      'Neurotrophin Modulation': 'Modulación de neurotrofinas',
      'Norepinephrine Effects': 'Efectos de norepinefrina',
      'Obesity Studies': 'Estudios de obesidad',
      'Other Effects': 'Otros efectos',
      'Pancreatic Beta-Cell Effects': 'Efectos en células beta pancreáticas',
      'Pancreatic Effects': 'Efectos pancreáticos',
      'Pigmentation Research': 'Investigación sobre pigmentación',
      'Pineal Function': 'Función pineal',
      'Pituitary Function': 'Función pituitaria',
      'Pulsatile vs Sustained Release': 'Liberación pulsátil vs sostenida',
      'Receptor Activation': 'Activación de receptores',
      'Satiety Signalling': 'Señalización de saciedad',
      'Secondary Effects': 'Efectos secundarios',
      'Serotonin Effects': 'Efectos de serotonina',
      'Sexual Function Studies': 'Estudios de función sexual',
      'Sirtuin Activation': 'Activación de sirtuinas',
      'Skin Disorder Research': 'Investigación de trastornos de la piel',
      'Skin Research': 'Investigación de la piel',
      'Sleep Regulation': 'Regulación del sueño',
      'Sleep Research': 'Investigación del sueño',
      'Stress Research': 'Investigación del estrés',
      'Synergistic Metabolic Effects': 'Efectos metabólicos sinérgicos',
      'Synergy with GHRH': 'Sinergia con GHRH',
      'Telomerase Activation': 'Activación de la telomerasa',
      'UK-Based Supplier': 'Proveedor con sede en España',
      'UK-Based Supply': 'Suministro desde España',
      'Verified Purity': 'Pureza verificada',
      'Weight Management Research': 'Investigación sobre control de peso',
      // Scientific terms
      'synthetic analogue': 'análogo sintético',
      'analogue': 'análogo',
      'analog': 'análogo',
      'hormone': 'hormona',
      'receptor': 'receptor',
      'receptor agonist': 'agonista del receptor',
      'agonist': 'agonista',
      'antagonist': 'antagonista',
      'binding': 'enlace',
      'affinity': 'afinidad',
      'selectivity': 'selectividad',
      'mechanism': 'mecanismo',
      'pathway': 'vía de señalización',
      'signalling': 'señalización',
      'activation': 'activación',
      'inhibition': 'inhibición',
      'modulation': 'modulación',
      'expression': 'expresión',
      'regulation': 'regulación',
      'metabolism': 'metabolismo',
      'metabolic': 'metabólico',
      'glucose': 'glucosa',
      'insulin': 'insulina',
      'insulin secretion': 'secreción de insulina',
      'appetite regulation': 'regulación del apetito',
      'appetite': 'apetito',
      'weight management': 'control de peso',
      'weight loss': 'pérdida de peso',
      'obesity': 'obesidad',
      'diabetes': 'diabetes',
      'type 2 diabetes': 'diabetes tipo 2',
      'blood sugar': 'azúcar en sangre',
      'half-life': 'vida media',
      'bioavailability': 'biodisponibilidad',
      'pharmacokinetics': 'farmacocinética',
      'pharmacodynamics': 'farmacodinámica',
      // Product descriptions
      'premium steroid': 'péptido de investigación',
      'research-grade': 'calidad de investigación',
      'pharmaceutical grade': 'calidad farmacéutica',
      'raw Steroide': 'péptido crudo',
      'active pharmaceutical ingredient': 'ingrediente farmacéutico activo',
      'brand-name': 'marca',
      'prescription medications': 'medicamentos con receta',
      'laboratory research purposes': 'fines de investigación de laboratorio',
      'human consumption': 'consumo humano',
      'medical treatment': 'tratamiento médico',
      'not for human use': 'no para uso humano',
      'for research only': 'solo para investigación',
      'research only': 'solo investigación',
      // Quality and purity
      'HPLC analysis': 'análisis HPLC',
      'mass spectrometry': 'espectrometría de masas',
      'Certificate of Analysis': 'Certificado de Análisis',
      'COA': 'COA',
      'batch': 'lote',
      'lot': 'lote',
      'identity': 'identidad',
      'Steroide content': 'contenido de péptido',
      'quality control': 'control de calidad',
      'strict quality control': 'control de calidad estricto',
      'manufacturing': 'fabricación',
      'shipping': 'envío',
      // Storage terms
      'long-term stability': 'estabilidad a largo plazo',
      'refrigerator': 'refrigerador',
      'freeze-thaw cycles': 'ciclos de congelación-descongelación',
      'protect from light': 'proteger de la luz',
      'airtight containers': 'contenedores herméticos',
      'moisture absorption': 'absorción de humedad',
      'properly stored': 'almacenado correctamente',
      // Reconstitution
      'sterile bacteriostatic water': 'agua bacteriostática estéril',
      'alkaline buffer': 'tampón alcalino',
      'isoelectric point': 'punto isoeléctrico',
      'Steroide degradation': 'degradación del péptido',
      'dissolution': 'disolución',
      'dissolve': 'disolver',
      // Delivery
      'next day delivery': 'entrega al día siguiente',
      'standard shipping': 'envío estándar',
      'express delivery': 'entrega exprés',
      'international shipping': 'envío internacional',
      'customs delays': 'retrasos aduaneros',
      'overseas orders': 'pedidos internacionales',
      'tracked delivery': 'entrega con seguimiento',
      'discrete packaging': 'embalaje discreto',
      'cold packs': 'paquetes fríos',
      'dry ice': 'hielo seco',
      // Ordering
      'minimum order': 'pedido mínimo',
      'bulk pricing': 'precios al por mayor',
      'custom orders': 'pedidos personalizados',
      'institutional research': 'investigación institucional',
      'larger quantities': 'cantidades mayores',
      'package sizes': 'tamaños de paquete',
      'vial': 'vial',
      'vials': 'viales',
      // Scientific activities
      'binding assays': 'ensayos de enlace',
      'receptor binding': 'enlace al receptor',
      'in vivo': 'in vivo',
      'disease models': 'modelos de enfermedad',
      'research models': 'modelos de investigación',
      'pilot studies': 'estudios piloto',
      'published literature': 'literatura publicada',
      'published data': 'datos publicados',
      'reference standards': 'estándares de referencia',
      'reproducible results': 'resultados reproducibles',
      'consistent quality': 'calidad constante',
      'batch-to-batch': 'lote a lote',
      // Body/biological terms
      'intestines': 'intestinos',
      'gastric': 'gástrico',
      'beta-cell': 'célula beta',
      'beta-cell function': 'función de células beta',
      'gastric emptying': 'vaciamiento gástrico',
      'neuroprotective': 'neuroprotector',
      'serum albumin': 'albúmina sérica',
      'albumin binding': 'enlace a albúmina',
      'biological half-life': 'vida media biológica',
      'prolonged activity': 'actividad prolongada',
      'sustained activation': 'activación sostenida',

      '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) is a selective inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme increasingly recognised as a key regulator of cellular metabolism, NAD+ homeostasis, and adipose tissue function. This research compound has emerged as an important tool for studying the intersection of epigenetics, energy metabolism, and ageing.': '**5-Amino-1MQ** (5-Amino-1-Metilquinolinio) es un inhibidor selectivo de la nicotinamida N-metiltransferasa (NNMT), una enzima cada vez más reconocida como un regulador clave del metabolismo celular, la homeostasis de NAD+ y la función del tejido adiposo. Este compuesto de investigación ha surgido como una herramienta importante para estudiar la intersección de la epigenética, el metabolismo energético y el envejecimiento.',
      '**AOD-9604** (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone comprising amino acids 177-191 of the C-terminal region, with an additional tyrosine residue at the N-terminus. This synthetic steroid was specifically designed to isolate the fat-metabolising properties of growth hormone without its growth-promoting or diabetogenic effects.': '**AOD-9604** (Anti-Obesity Drug 9604) es un fragmento modificado de la hormona del crecimiento humana que comprende los aminoácidos 177-191 de la región C-terminal, con un residuo de tirosina adicional en el extremo N-terminal. Este péptido sintético fue diseñado específicamente para aislar las propiedades metabolizadoras de grasa de la hormona del crecimiento sin sus efectos promotores del crecimiento o diabetógenos.',
      '**BPC-157** (Body Protection Compound-157) is a synthetic pentadecapeptide (15 amino acids) derived from a protein found in human gastric juice. Since its discovery, BPC-157 has become one of the most extensively studied steroids in tissue healing and regeneration research. For published research, see [PubMed studies on BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.': '**BPC-157** (Body Protection Compound-157) es un pentadecapéptido sintético (15 aminoácidos) derivado de una proteína que se encuentra en el jugo gástrico humano. Desde su descubrimiento, el BPC-157 se ha convertido en uno de los péptidos más estudiados en la investigación de la curación y regeneración de tejidos. Para investigaciones publicadas, consulte [Estudios de PubMed sobre BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.',
      '**CJC-1295 No DAC** (also known as Modified GRF 1-29 or Mod GRF) is a synthetic analog of growth hormone-releasing hormone (GHRH) with specific amino acid modifications that enhance its stability and half-life. Unlike CJC-1295 with DAC, this version lacks the Drug Affinity Complex, producing pulsatile rather than sustained GH release patterns.': '**CJC-1295 No DAC** (también conocido como Modified GRF 1-29 o Mod GRF) es un análogo sintético de la hormona liberadora de hormona del crecimiento (GHRH) con modificaciones específicas de aminoácidos que mejoran su estabilidad y vida media. A diferencia del CJC-1295 con DAC, esta versión carece del Complejo de Afinidad a Fármacos (Drug Affinity Complex), produciendo patrones de liberación de GH pulsátiles en lugar de sostenidos.',
      '**Cagrilintide** (AM833, NN9838) is a long-acting acylated analog of human amylin, a steroid hormone co-secreted with insulin from pancreatic beta cells. Through fatty acid acylation, cagrilintide achieves an extended half-life enabling once-weekly research dosing, making it an invaluable tool for studying amylin\'s role in satiety and metabolic regulation.': '**Cagrilintide** (AM833, NN9838) es un análogo acilado de acción prolongada de la amilina humana, una hormona peptídica co-segregada con la insulina por las células beta pancreáticas. A través de la acilación de ácidos grasos, el cagrilintide logra una vida media extendida que permite una dosificación de investigación semanal, convirtiéndolo en una herramienta invaluable para estudiar el papel de la amilina en la saciedad y la regulación metabólica.',
      '**DSIP** (Delta Sleep-Inducing steroid) is a nonapeptide first isolated from rabbit brain in 1977 during research into sleep physiology. The steroid was named for its ability to promote delta wave sleep patterns in research models.': '**DSIP** (Delta Sleep-Inducing steroid) es un nonapéptido aislado por primera vez del cerebro de conejo en 1977 durante la investigación sobre la fisiología del sueño. El péptido recibió su nombre por su capacidad para promover patrones de sueño de ondas delta en modelos de investigación.',
      '**Epitalon** (Epithalon, AEDG steroid) is a synthetic tetrasteroid based on epithalamin, a pineal gland extract extensively studied for its effects on telomerase activation and cellular ageing. Developed from decades of Russian research, Epitalon has become a key tool in longevity and anti-ageing research.': '**Epitalon** (Epithalon, péptido AEDG) es un tetrapéptido sintético basado en la epitalamina, un extracto de la glándula pineal ampliamente estudiado por sus efectos sobre la activación de la telomerasa y el envejecimiento celular. Desarrollado a partir de décadas de investigación rusa, Epitalon se ha convertido en una herramienta clave en la investigación de la longevidad y el antienvejecimiento.',
      '**GHK-Cu** (Copper Tripeptide-1) is a naturally occurring copper-steroid complex consisting of three amino acids (glycine-histidine-lysine) bound to a copper ion. Found in human plasma, saliva, and urine, GHK-Cu concentrations naturally decline with age.': '**GHK-Cu** (Tripéptido de Cobre-1) es un complejo de cobre-péptido que ocurre naturalmente y consiste en tres aminoácidos (glicina-histidina-lisina) unidos a un ion de cobre. Encontrado en el plasma humano, la saliva y la orina, las concentraciones de GHK-Cu disminuyen naturalmente con la edad.',
      '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). GHRP-2 is considered more selective than GHRP-6, producing robust GH release with less pronounced effects on appetite, cortisol, and prolactin.': '**GHRP-2** (Péptido Liberador de Hormona del Crecimiento-2, Pralmorelina) es un hexapéptido sintético que estimula la liberación de la hormona del crecimiento a través de la activación del receptor de grelina (GHS-R1a). GHRP-2 se considera más selectivo que GHRP-6, produciendo una liberación robusta de GH con efectos menos pronunciados sobre el apetito, el cortisol y la prolactina.',
      '**GHRP-6** (Growth Hormone Releasing steroid-6) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). As one of the first synthetic GH secretagogues developed, GHRP-6 has extensive research documentation and remains a valuable tool for studying growth hormone physiology.': '**GHRP-6** (Péptido Liberador de Hormona del Crecimiento-6) es un hexapéptido sintético que estimula la liberación de la hormona del crecimiento a través de la activación del receptor de grelina (GHS-R1a). Como uno de los primeros secretagogos sintéticos de GH desarrollados, GHRP-6 tiene una extensa documentación de investigación y sigue siendo una herramienta valiosa para estudiar la fisiología de la hormona del crecimiento.',
      '**HGH Fragment 176-191** is a synthetic steroid comprising the C-terminal portion of human growth hormone (amino acids 176-191). This specific region has been identified as responsible for GH\'s lipolytic (fat-burning) activity without the hormone\'s growth-promoting effects.': '**HGH Fragment 176-191** es un péptido sintético que comprende la porción C-terminal de la hormona del crecimiento humana (aminoácidos 176-191). Esta región específica ha sido identificada como responsable de la actividad lipolítica (quema de grasa) de la GH sin los efectos promotores del crecimiento de la hormona.',
      '**Ipamorelin** is a synthetic pentapeptide growth hormone secretagogue that selectively stimulates growth hormone (GH) release from pituitary somatotrope cells. Distinguished by its high selectivity, ipamorelin causes minimal effects on cortisol and prolactin levels, making it an invaluable research tool for studying isolated GH secretion mechanisms.': '**Ipamorelin** es un secretagogo de la hormona del crecimiento pentapeptídico sintético que estimula selectivamente la liberación de la hormona del crecimiento (GH) de las células somatotropas pituitarias. Distinguido por su alta selectividad, ipamorelin causa efectos mínimos sobre los niveles de cortisol y prolactina, convirtiéndolo en una herramienta de investigación invaluable para estudiar los mecanismos aislados de secreción de GH.',
      '**Melanotan 2** (MT-2, MT-II) is a synthetic cyclic heptapeptide analogue of alpha-melanocyte stimulating hormone (α-MSH). Originally developed at the University of Arizona in the 1980s, this premium steroid has become an essential tool for studying melanocortin receptor signalling and the regulation of skin pigmentation.': '**Melanotan 2** (MT-2, MT-II) es un análogo heptapeptídico cíclico sintético de la hormona estimulante de melanocitos alfa (α-MSH). Desarrollado originalmente en la Universidad de Arizona en la década de 1980, este péptido de investigación se ha convertido en una herramienta esencial para estudiar la señalización del receptor de melanocortina y la regulación de la pigmentación de la piel.',
      '**NAD+** (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays fundamental roles in energy metabolism, DNA repair, and cellular signalling. NAD+ is essential for hundreds of enzymatic reactions and is a key regulator of cellular health.': '**NAD+** (Nicotinamida Adenina Dinucleótido) es una coenzima que se encuentra en todas las células vivas y desempeña un papel fundamental en el metabolismo energético, la reparación del ADN y la señalización celular. NAD+ es esencial para cientos de reacciones enzimáticas y es un regulador clave de la salud celular.',
      '**O-304** is a novel small molecule that directly activates AMPK (AMP-activated protein kinase), the master regulator of cellular energy homeostasis. Unlike indirect activators like metformin, O-304 binds directly to AMPK\'s β1 subunit.': '**O-304** es una pequeña molécula novedosa que activa directamente la AMPK (proteína quinasa activada por AMP), el regulador maestro de la homeostasis energética celular. A diferencia de los activadores indirectos como la metformina, O-304 se une directamente a la subunidad β1 de la AMPK.',
      '**Retatrutide** (LY3437943) is a novel synthetic steroid that functions as a triple agonist of three key metabolic receptors: glucagon-like steroid-1 (GLP-1), glucose-dependent insulinotropic polysteroid (GIP), and glucagon receptors. This unprecedented triple mechanism of action makes Retatrutide the most comprehensive incretin-based research tool currently available.': '**Retatrutide** (LY3437943) es un péptido sintético novedoso que funciona como un agonista triple de tres receptores metabólicos clave: péptido similar al glucagón-1 (GLP-1), polipéptido insulinotrópico dependiente de glucosa (GIP) y receptores de glucagón. Este triple mecanismo de acción sin precedentes hace que Retatrutide sea la herramienta de investigación basada en incretinas más completa disponible actualmente.',
      '**Selank** (TP-7) is a synthetic heptapeptide developed in Russia as a modified analogue of tuftsin, a naturally occurring immunomodulatory steroid. Selank has been extensively studied for its anxiolytic, nootropic, and immunomodulatory properties.': '**Selank** (TP-7) es un heptapéptido sintético desarrollado en Rusia como un análogo modificado de la tuftsina, un péptido inmunomodulador que se produce naturalmente. Selank ha sido ampliamente estudiado por sus propiedades ansiolíticas, nootrópicas e inmunomoduladoras.',
      '**Semaglutide** is a synthetic analogue of human Glucagon-Like steroid-1 (GLP-1), a hormone naturally produced in the intestines that plays a crucial role in glucose metabolism and appetite regulation. This premium steroid has gained significant attention in scientific communities worldwide for its applications in metabolic research, particularly in studies related to type 2 diabetes and obesity. For comprehensive background information, see the [PubChem compound entry for Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.': '**Semaglutida** es un análogo sintético del péptido similar al glucagón-1 humano (GLP-1), una hormona producida naturalmente en los intestinos que desempeña un papel crucial en el metabolismo de la glucosa y la regulación del apetito. Este péptido de investigación ha ganado una atención significativa en las comunidades científicas de todo el mundo por sus aplicaciones en la investigación metabólica, particularmente en estudios relacionados con la diabetes tipo 2 y la obesidad. Para obtener información general completa, consulte la [entrada del compuesto PubChem para Semaglutida](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.',
      '**Semax** is a synthetic heptapeptide developed in Russia, based on the ACTH(4-10) fragment of adrenocorticotropic hormone. Unlike full ACTH, Semax lacks hormonal activity but retains potent nootropic and neuroprotective properties.': '**Semax** es un heptapéptido sintético desarrollado en Rusia, basado en el fragmento ACTH(4-10) de la hormona adrenocorticotropa. A diferencia de la ACTH completa, Semax carece de actividad hormonal pero conserva potentes propiedades nootrópicas y neuroprotectoras.',
      '**TB-500** is a synthetic steroid representing the active region of Thymosin Beta-4 (Tβ4), a naturally occurring protein found in virtually all human and animal cells. Thymosin Beta-4 is a 43-amino acid protein that plays critical roles in cell migration, angiogenesis, and tissue repair.': '**TB-500** es un péptido sintético que representa la región activa de la Timosina Beta-4 (Tβ4), una proteína natural que se encuentra en prácticamente todas las células humanas y animales. La Timosina Beta-4 es una proteína de 43 aminoácidos que desempeña un papel fundamental en la migración celular, la angiogénesis y la reparación de tejidos.',
      '**Tesofensine** (NS2330) is a triple monoamine reuptake inhibitor that blocks the presynaptic reuptake of norepinephrine, dopamine, and serotonin. Originally developed for neurodegenerative disease research, tesofensine has become an important tool for studying the neurological basis of appetite regulation and energy homeostasis.': '**Tesofensina** (NS2330) es un inhibidor triple de la recaptación de monoaminas que bloquea la recaptación presináptica de norepinefrina, dopamina y serotonina. Desarrollado originalmente para la investigación de enfermedades neurodegenerativas, la tesofensina se ha convertido en una herramienta importante para estudiar la base neurológica de la regulación del apetito y la homeostasis energética.',
      '**Tirzepatide** is a novel synthetic steroid that functions as a dual agonist of two key incretin hormone receptors: glucose-dependent insulinotropic polysteroid (GIP) and glucagon-like steroid-1 (GLP-1). This unique dual mechanism of action distinguishes Tirzepatide from single-target GLP-1 receptor agonists like semaglutide, making it an invaluable tool for metabolic research.': '**Tirzepatida** es un péptido sintético novedoso que funciona como un agonista dual de dos receptores de hormonas incretinas clave: polipéptido insulinotrópico dependiente de glucosa (GIP) y péptido similar al glucagón-1 (GLP-1). Este mecanismo de acción dual único distingue a la tirzepatida de los agonistas del receptor de GLP-1 de un solo objetivo como la semaglutida, convirtiéndola en una herramienta invaluable para la investigación metabólica.',
      '1. Allow the steroid vial to reach room temperature': '1. Deje que el vial de péptido alcance la temperatura ambiente',
      '2. Clean both vial tops with an alcohol swab': '2. Limpie ambas tapas de los viales con una toallita con alcohol',
      '3. Using a sterile syringe, withdraw the desired amount of bacteriostatic water': '3. Usando una jeringa estéril, extraiga la cantidad deseada de agua bacteriostática',
      '4. Insert the needle into the steroid vial, aiming at the glass wall': '4. Inserte la aguja en el vial de péptido, apuntando a la pared de vidrio',
      '5-Amino-1MQ inhibits NNMT, affecting multiple metabolic pathways:': '5-Amino-1MQ inhibe la NNMT, afectando múltiples vías metabólicas:',
      '5. Slowly inject the water, allowing it to run down the vial wall': '5. Inyecte lentamente el agua, permitiendo que corra por la pared del vial',
      '6. Gently swirl (do not shake) until fully dissolved': '6. Gire suavemente (no agite) hasta que se disuelva por completo',
      '7. Store reconstituted steroid at 2-8°C': '7. Almacene el péptido reconstituido a 2-8°C',
      'A key research advantage is its selectivity:': 'Una ventaja clave de investigación es su selectividad:',
      'AOD-9604 also inhibits fat accumulation:': 'AOD-9604 también inhibe la acumulación de grasa:',
      'AOD-9604\'s mechanism of action centres on its ability to stimulate lipolysis and inhibit lipogenesis in adipose tissue, mimicking a specific subset of growth hormone\'s metabolic effects.': 'El mecanismo de acción de AOD-9604 se centra en su capacidad para estimular la lipólisis e inhibir la lipogénesis en el tejido adiposo, imitando un subconjunto específico de los efectos metabólicos de la hormona del crecimiento.',
      'Amylin complements insulin\'s glucose-lowering effects through distinct mechanisms including gastric emptying delay, glucagon suppression, and central satiety signalling. Cagrilintide provides researchers with a stable, long-acting tool to investigate these pathways in extended experimental paradigms.': 'La amilina complementa los efectos hipoglucemiantes de la insulina a través de mecanismos distintos que incluyen el retraso del vaciado gástrico, la supresión de glucagón y la señalización central de saciedad. Cagrilintide proporciona a los investigadores una herramienta estable y de acción prolongada para investigar estas vías en paradigmas experimentales extendidos.',
      'Anti-inflammatory properties are actively investigated:': 'Las propiedades antiinflamatorias se investigan activamente:',
      'Bacteriostatic water (BAC water) is sterile water containing 0.9% benzyl alcohol, a bacteriostatic preservative that inhibits the growth of bacteria. This makes it ideal for reconstituting lyophilized (freeze-dried) steroids for research applications where multiple withdrawals from the same vial are needed.': 'El agua bacteriostática (agua BAC) es agua estéril que contiene 0,9% de alcohol bencílico, un conservante bacteriostático que inhibe el crecimiento de bacterias. Esto la hace ideal para reconstituir péptidos liofilizados para aplicaciones de investigación donde se necesitan múltiples extracciones del mismo vial.',
      'Beyond sleep regulation, DSIP has demonstrated effects on stress response, pain perception, and neuroendocrine function, making it a versatile tool for neuroscience research.': 'Más allá de la regulación del sueño, DSIP ha demostrado efectos sobre la respuesta al estrés, la percepción del dolor y la función neuroendocrina, convirtiéndolo en una herramienta versátil para la investigación en neurociencia.',
      'Broader metabolic applications:': 'Aplicaciones metabólicas más amplias:',
      'By isolating this fragment, researchers can study GH\'s fat metabolism effects independently of IGF-1 elevation, glucose effects, and tissue growth, providing a cleaner tool for adipose biology research.': 'Al aislar este fragmento, los investigadores pueden estudiar los efectos del metabolismo de las grasas de la GH independientemente de la elevación de IGF-1, los efectos de la glucosa y el crecimiento tisular, proporcionando una herramienta más limpia para la investigación de la biología adiposa.',
      'Cagrilintide activates amylin receptors (AMY1, AMY2, AMY3), which are complexes of the calcitonin receptor with receptor activity-modifying proteins (RAMPs).': 'Cagrilintide activa los receptores de amilina (AMY1, AMY2, AMY3), que son complejos del receptor de calcitonina con proteínas modificadoras de la actividad del receptor (RAMP).',
      'Cagrilintide is often studied with GLP-1 agonists:': 'Cagrilintide a menudo se estudia con agonistas de GLP-1:',
      'Central effects include:': 'Los efectos centrales incluyen:',
      'Core applications in diabetes studies include:': 'Las aplicaciones principales en estudios de diabetes incluyen:',
      'Dermatological applications extend beyond pigmentation:': 'Las aplicaciones dermatológicas se extienden más allá de la pigmentación:',
      'Developed as a ghrelin receptor (GHS-R) agonist, ipamorelin represents one of the most selective GH releasing steroids (GHRPs) available for research. Its clean pharmacological profile enables researchers to study GH axis physiology without the confounding effects seen with less selective compounds.': 'Desarrollado como un agonista del receptor de grelina (GHS-R), la ipamorelina representa uno de los péptidos liberadores de GH (GHRP) más selectivos disponibles para la investigación. Su perfil farmacológico limpio permite a los investigadores estudiar la fisiología del eje GH sin los efectos de confusión observados con compuestos menos selectivos.',
      'Each 10ml vial can reconstitute 5-10 steroid vials depending on concentration requirements.': 'Cada vial de 10 ml puede reconstituir 5-10 viales de péptidos dependiendo de los requisitos de concentración.',
      'Emerging areas of investigation include:': 'Las áreas emergentes de investigación incluyen:',
      'Emerging evidence suggests GLP-1 receptor agonists may have cardiovascular effects beyond glucose control, leading to research investigating:': 'La evidencia emergente sugiere que los agonistas del receptor GLP-1 pueden tener efectos cardiovasculares más allá del control de la glucosa, lo que lleva a investigaciones que estudian:',
      'Emerging research also explores Semaglutide\'s potential neuroprotective properties, with studies investigating its effects in models of Alzheimer\'s disease, Parkinson\'s disease, and stroke.': 'La investigación emergente también explora las posibles propiedades neuroprotectoras de Semaglutida, con estudios que investigan sus efectos en modelos de enfermedad de Alzheimer, enfermedad de Parkinson y accidentes cerebrovasculares.',
      'Emerging research explores melanocortin anti-inflammatory properties:': 'La investigación emergente explora las propiedades antiinflamatorias de la melanocortina:',
      'Extensive research has demonstrated Semax\'s effects on cognitive function, BDNF expression, and neuroprotection, making it a valuable tool for neuroscience research.': 'Una extensa investigación ha demostrado los efectos de Semax en la función cognitiva, la expresión de BDNF y la neuroprotección, lo que lo convierte en una herramienta valiosa para la investigación en neurociencia.',
      'GIP receptor engagement adds complementary effects:': 'La participación del receptor GIP añade efectos complementarios:',
      'GLP-1 receptor activation slows gastric emptying, which may contribute to prolonged satiety and reduced postprandial glucose excursions. Researchers studying gut-brain axis signalling find Semaglutide particularly useful for investigating these gastrointestinal regulatory mechanisms.': 'La activación del receptor GLP-1 ralentiza el vaciado gástrico, lo que puede contribuir a una saciedad prolongada y a reducir las excursiones de glucosa posprandiales. Los investigadores que estudian la señalización del eje intestino-cerebro encuentran que la semaglutida es particularmente útil para investigar estos mecanismos reguladores gastrointestinales.',
      'Glucagon\'s hepatic effects enable liver-focused studies:': 'Los efectos hepáticos del glucagón permiten estudios centrados en el hígado:',
      'In pancreatic beta cells, GLP-1 receptor activation by Semaglutide triggers glucose-dependent insulin secretion through the cAMP-PKA signalling pathway. This glucose-dependent mechanism is particularly noteworthy in research, as it suggests reduced risk of hypoglycaemia compared to insulin secretagogues that work independently of glucose levels.': 'En las células beta pancreáticas, la activación del receptor GLP-1 por la semaglutida desencadena la secreción de insulina dependiente de glucosa a través de la vía de señalización AMPc-PKA. Este mecanismo dependiente de glucosa es particularmente notable en la investigación, ya que sugiere un riesgo reducido de hipoglucemia en comparación con los secretagogos de insulina que funcionan independientemente de los niveles de glucosa.',
      'In pancreatic beta cells, Tirzepatide activates both GIP and GLP-1 receptors, leading to:': 'En las células beta pancreáticas, la tirzepatida activa tanto los receptores GIP como GLP-1, lo que conduce a:',
      'Interest in NAD+ has surged due to its central role in ageing research, particularly its relationship with sirtuins and cellular repair mechanisms. NAD+ levels naturally decline with age, driving research into maintaining cellular NAD+ pools.': 'El interés en NAD+ ha aumentado debido a su papel central en la investigación del envejecimiento, particularmente su relación con las sirtuinas y los mecanismos de reparación celular. Los niveles de NAD+ disminuyen naturalmente con la edad, impulsando la investigación sobre el mantenimiento de las reservas celulares de NAD+.',
      'Ipamorelin activates growth hormone secretagogue receptors (GHS-R) in the anterior pituitary, triggering GH release through multiple mechanisms.': 'La ipamorelina activa los receptores secretagogos de la hormona del crecimiento (GHS-R) en la hipófisis anterior, desencadenando la liberación de GH a través de múltiples mecanismos.',
      'Ipamorelin\'s research value lies in its selectivity:': 'El valor de investigación de la ipamorelina radica en su selectividad:',
      'Key substitutions provide enhanced stability:': 'Las sustituciones clave proporcionan una estabilidad mejorada:',
      'Like GLP-1 agonists, Tirzepatide affects appetite regulation through central mechanisms. Research indicates effects on:': 'Al igual que los agonistas de GLP-1, la tirzepatida afecta la regulación del apetito a través de mecanismos centrales. La investigación indica efectos sobre:',
      'MC4R activation makes MT-2 valuable for metabolic studies:': 'La activación de MC4R hace que MT-2 sea valioso para estudios metabólicos:',
      'MT-2 activates multiple melanocortin receptor subtypes:': 'MT-2 activa múltiples subtipos de receptores de melanocortina:',
      'MT-2\'s non-selective receptor profile enables diverse CNS research:': 'El perfil de receptor no selectivo de MT-2 permite diversas investigaciones del SNC:',
      'Melanotan 2 exerts its biological effects through activation of melanocortin receptors, a family of G protein-coupled receptors that regulate diverse physiological processes. Understanding these mechanisms is central to ongoing research in dermatology, endocrinology, and neuroscience.': 'Melanotan 2 ejerce sus efectos biológicos a través de la activación de los receptores de melanocortina, una familia de receptores acoplados a proteínas G que regulan diversos procesos fisiológicos. Comprender estos mecanismos es fundamental para la investigación en curso en dermatología, endocrinología y neurociencia.',
      'Melanotan 2 is extensively used in dermatological research:': 'Melanotan 2 se utiliza ampliamente en la investigación dermatológica:',
      'NNMT catalyses the N-methylation of nicotinamide (a NAD+ precursor) using SAM (S-adenosylmethionine) as a methyl donor. By inhibiting this enzyme, 5-Amino-1MQ enables researchers to investigate how NNMT modulation affects cellular metabolism, NAD+ availability, and metabolic health.': 'La NNMT cataliza la N-metilación de la nicotinamida (un precursor de NAD+) utilizando SAM (S-adenosilmetionina) como donante de metilo. Al inhibir esta enzima, el 5-Amino-1MQ permite a los investigadores investigar cómo la modulación de NNMT afecta el metabolismo celular, la disponibilidad de NAD+ y la salud metabólica.',
      'Originally developed by Metabolic Pharmaceuticals in Australia, AOD-9604 represents one of the most targeted approaches to studying growth hormone\'s lipolytic activity. By using only the fat-reducing portion of the full hormone, researchers can investigate adipose tissue metabolism without confounding effects on IGF-1 or glucose homeostasis.': 'Originalmente desarrollado por Metabolic Pharmaceuticals en Australia, AOD-9604 representa uno de los enfoques más específicos para estudiar la actividad lipolítica de la hormona del crecimiento. Al utilizar solo la porción reductora de grasa de la hormona completa, los investigadores pueden investigar el metabolismo del tejido adiposo sin efectos de confusión sobre el IGF-1 o la homeostasis de la glucosa.',
      'Our bacteriostatic water meets United States Pharmacopeia (USP) standards for:': 'Nuestra agua bacteriostática cumple con los estándares de la Farmacopea de los Estados Unidos (USP) para:',
      'Our research-grade Semaglutide meets the highest quality standards required for reproducible scientific research:': 'Nuestra semaglutida de grado de investigación cumple con los más altos estándares de calidad requeridos para una investigación científica reproducible:',
      'Steroiden supplies **research-grade 5-Amino-1MQ** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden suministra **5-Amino-1MQ de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC.',
      'Steroiden supplies **research-grade AOD-9604** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden suministra **AOD-9604 de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas. Cada pedido incluye un Certificado de Análisis detallado, lo que garantiza que los investigadores reciban material debidamente caracterizado para sus estudios.',
      'Steroiden supplies **research-grade BPC-157** with guaranteed ≥99% purity and full analytical documentation.': 'Steroiden suministra **BPC-157 de grado de investigación** con una pureza garantizada de ≥99% y documentación analítica completa.',
      'Steroiden supplies **research-grade CJC-1295 No DAC** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden suministra **CJC-1295 No DAC de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas.',
      'Steroiden supplies **research-grade Cagrilintide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden suministra **Cagrilintida de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas.',
      'Steroiden supplies **research-grade DSIP** with guaranteed ≥99% purity.': 'Steroiden suministra **DSIP de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade Epitalon** with guaranteed ≥99% purity.': 'Steroiden suministra **Epitalon de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade GHK-Cu** with guaranteed ≥99% purity.': 'Steroiden suministra **GHK-Cu de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade GHRP-2** with guaranteed ≥99% purity.': 'Steroiden suministra **GHRP-2 de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade GHRP-6** with guaranteed ≥99% purity.': 'Steroiden suministra **GHRP-6 de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade HGH Fragment 176-191** with guaranteed ≥99% purity.': 'Steroiden suministra **HGH Fragment 176-191 de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade Ipamorelin** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden suministra **Ipamorelina de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas.',
      'Steroiden supplies **research-grade Melanotan 2** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden suministra **Melanotan 2 de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas. Cada pedido incluye un Certificado de Análisis detallado, lo que garantiza que los investigadores reciban material debidamente caracterizado para sus estudios.',
      'Steroiden supplies **research-grade NAD+** with guaranteed ≥99% purity.': 'Steroiden suministra **NAD+ de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade O-304** with guaranteed ≥99% purity.': 'Steroiden suministra **O-304 de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade Retatrutide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden suministra **Retatrutida de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas. Cada pedido incluye un Certificado de Análisis detallado, lo que garantiza que los investigadores reciban material debidamente caracterizado para sus estudios.',
      'Steroiden supplies **research-grade Selank** with guaranteed ≥99% purity.': 'Steroiden suministra **Selank de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade Semaglutide** with guaranteed ≥99% purity, verified by HPLC analysis and mass spectrometry. Every order includes a comprehensive Certificate of Analysis (COA), ensuring researchers receive properly characterised material for their studies.': 'Steroiden suministra **Semaglutida de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante análisis HPLC y espectrometría de masas. Cada pedido incluye un Certificado de Análisis (COA) completo, lo que garantiza que los investigadores reciban material debidamente caracterizado para sus estudios.',
      'Steroiden supplies **research-grade Semax** with guaranteed ≥99% purity.': 'Steroiden suministra **Semax de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade TB-500** with guaranteed ≥99% purity.': 'Steroiden suministra **TB-500 de grado de investigación** con una pureza garantizada de ≥99%.',
      'Steroiden supplies **research-grade Tesofensine** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden suministra **Tesofensina de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC.',
      'Steroiden supplies **research-grade Tirzepatide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis to ensure researchers receive properly characterised material for their studies.': 'Steroiden suministra **Tirzepatida de grado de investigación** con una pureza garantizada de ≥99%, verificada mediante un análisis completo de HPLC y espectrometría de masas. Cada pedido incluye un Certificado de Análisis detallado para garantizar que los investigadores reciban material debidamente caracterizado para sus estudios.',
      'Peripheral actions include:': 'Las acciones periféricas incluyen:',
      'Primary research applications include:': 'Las principales aplicaciones de investigación incluyen:',
      'Research has demonstrated that Semaglutide may also promote beta-cell proliferation and reduce apoptosis in preclinical models, suggesting potential applications in studying beta-cell preservation strategies.': 'La investigación ha demostrado que la semaglutida también puede promover la proliferación de células beta y reducir la apoptosis en modelos preclínicos, lo que sugiere posibles aplicaciones en el estudio de estrategias de preservación de células beta.',
      'Research interest in GHK-Cu stems from its remarkable effects on tissue regeneration, wound healing, and gene expression modulation. Studies suggest it influences over 4,000 genes related to tissue repair and regeneration.': 'El interés de investigación en GHK-Cu proviene de sus notables efectos en la regeneración de tejidos, la cicatrización de heridas y la modulación de la expresión génica. Los estudios sugieren que influye en más de 4,000 genes relacionados con la reparación y regeneración de tejidos.',
      'Research interest in O-304 stems from its potential applications in metabolic disease, diabetes, and obesity research, where AMPK activation can improve glucose uptake and lipid oxidation.': 'El interés de investigación en O-304 proviene de sus aplicaciones potenciales en la investigación de enfermedades metabólicas, diabetes y obesidad, donde la activación de AMPK puede mejorar la captación de glucosa y la oxidación de lípidos.',
      'Research into melanocortin effects on sexual behaviour:': 'Investigación sobre los efectos de la melanocortina en el comportamiento sexual:',
      'Research often combines ipamorelin with GHRH analogs:': 'La investigación a menudo combina ipamorelina con análogos de GHRH:',
      'Researchers often compare these related steroids:': 'Los investigadores a menudo comparan estos péptidos relacionados:',
      'Retatrutide enables essential comparative studies:': 'La Retatrutida permite estudios comparativos esenciales:',
      'Retatrutide\'s triple agonism creates a unique pharmacological profile by simultaneously engaging three complementary receptor systems, each contributing distinct metabolic effects.': 'El triple agonismo de la retatrutida crea un perfil farmacológico único al involucrar simultáneamente tres sistemas de receptores complementarios, cada uno contribuyendo con efectos metabólicos distintos.',
      'Semaglutide crosses the blood-brain barrier and activates GLP-1 receptors in key hypothalamic regions involved in appetite regulation, including the arcuate nucleus and paraventricular nucleus. Research indicates that this central action contributes to reduced food intake and altered food preferences in animal models.': 'La semaglutida atraviesa la barrera hematoencefálica y activa los receptores GLP-1 en regiones hipotalámicas clave involucradas en la regulación del apetito, incluidos el núcleo arqueado y el núcleo paraventricular. La investigación indica que esta acción central contribuye a la reducción de la ingesta de alimentos y a la alteración de las preferencias alimentarias en modelos animales.',
      'Semaglutide exerts its biological effects through high-affinity binding to the GLP-1 receptor (GLP-1R), a G protein-coupled receptor expressed in various tissues including pancreatic beta cells, the central nervous system, heart, and gastrointestinal tract. Upon receptor binding, Semaglutide initiates several downstream signalling cascades that researchers continue to investigate.': 'La semaglutida ejerce sus efectos biológicos a través de la unión de alta afinidad al receptor GLP-1 (GLP-1R), un receptor acoplado a proteínas G expresado en varios tejidos, incluidas las células beta pancreáticas, el sistema nervioso central, el corazón y el tracto gastrointestinal. Tras la unión al receptor, la semaglutida inicia varias cascadas de señalización aguas abajo que los investigadores continúan investigando.',
      'Semaglutide is extensively used in metabolic research laboratories studying:': 'La semaglutida se utiliza ampliamente en laboratorios de investigación metabólica que estudian:',
      'TB-500 contains the key sequence responsible for Tβ4\'s biological activity, particularly the actin-binding domain that promotes cell motility and tissue regeneration. This makes it invaluable for research into wound healing, muscle repair, and inflammatory conditions.': 'TB-500 contiene la secuencia clave responsable de la actividad biológica de Tβ4, particularmente el dominio de unión a actina que promueve la motilidad celular y la regeneración de tejidos. Esto lo hace invaluable para la investigación sobre la cicatrisation de heridas, la reparación muscular y las condiciones inflamatorias.',
      'Tesofensine increases synaptic concentrations of three key neurotransmitters:': 'La tesofensina aumenta las concentraciones sinápticas de tres neurotransmisores clave:',
      'The GIP receptor component may provide unique effects on adipose tissue:': 'El componente del receptor GIP puede proporcionar efectos únicos sobre el tejido adiposo:',
      'The GIP receptor is predominantly expressed in pancreatic beta cells and adipose tissue, while GLP-1 receptors are found in pancreatic islets, brain, heart, and gastrointestinal tract. By activating both receptor systems simultaneously, Tirzepatide provides researchers with a unique tool for studying:': 'El receptor GIP se expresa predominantemente en las células beta pancreáticas y el tejido adiposo, mientras que los receptores GLP-1 se encuentran en los islotes pancreáticos, el cerebro, el corazón y el tracto gastrointestinal. Al activar ambos sistemas de receptores simultáneamente, la tirzepatida proporciona a los investigadores una herramienta única para estudiar:',
      'The GLP-1 component provides established incretin effects:': 'El componente GLP-1 proporciona efectos de incretina establecidos:',
      'The dual agonist is valuable for investigating:': 'El agonista dual es valioso para investigar:',
      'The molecular structure of Semaglutide features a unique C-18 fatty diacid chain attached to the lysine residue at position 26. This structural modification enables the steroid to bind to serum albumin, dramatically extending its biological half-life to approximately seven days. This prolonged activity profile makes Semaglutide an invaluable tool for researchers studying sustained GLP-1 receptor activation mechanisms.': 'La estructura molecular de la semaglutida presenta una cadena única de diácido graso C-18 unida al residuo de lisina en la posición 26. Esta modificación estructural permite que el péptido se una a la albúmina sérica, extendiendo dramáticamente su vida media biológica a aproximadamente siete días. Este perfil de actividad prolongado hace que la semaglutida sea una herramienta invaluable para los investigadores que estudian los mecanismos de activación sostenida del receptor GLP-1.',
      'The steroid binds to GHRH receptors on pituitary somatotropes:': 'El péptido se une a los receptores GHRH en los somatotropos pituitarios:',
      'The steroid enables focused weight studies:': 'El péptido permite estudios de peso enfocados:',
      'The steroid promotes fat breakdown through:': 'El péptido promueve la degradación de grasas a través de:',
      'The steroid represents the first 29 amino acids of GHRH with modifications at positions 2, 8, 15, and 27 to improve resistance to enzymatic degradation. These modifications make it a more practical research tool while maintaining GHRH receptor binding activity.': 'El péptido representa los primeros 29 aminoácidos de GHRH con modificaciones en las posiciones 2, 8, 15 y 27 para mejorar la resistencia a la degradación enzimática. Estas modificaciones lo convierten en una herramienta de investigación más práctica al tiempo que mantiene la actividad de unión al receptor GHRH.',
      'The steroid represents the next evolution beyond dual agonists like tirzepatide, adding glucagon receptor activation to the established GLP-1/GIP dual agonism. This triple receptor engagement enables researchers to study the complex interplay between these metabolic signalling systems and their combined effects on glucose homeostasis, energy expenditure, and body weight regulation.': 'El péptido representa la siguiente evolución más allá de los agonistas duales como la tirzepatida, añadiendo la activación del receptor de glucagón al agonismo dual GLP-1/GIP establecido. Esta participación de triple receptor permite a los investigadores estudiar la compleja interacción entre estos sistemas de señalización metabólica y sus efectos combinados sobre la homeostasis de la glucosa, el gasto energético y la regulación del peso corporal.',
      'The steroid\'s cyclic lactam structure provides enhanced stability and receptor binding affinity compared to linear α-MSH analogues. Melanotan 2 acts as a non-selective agonist at melanocortin receptors MC1, MC3, MC4, and MC5, enabling researchers to study diverse physiological processes beyond pigmentation.': 'La estructura de lactama cíclica del péptido proporciona una estabilidad y afinidad de unión al receptor mejoradas en comparación con los análogos lineales de α-MSH. Melanotan 2 actúa como un agonista no selectivo en los receptores de melanocortina MC1, MC3, MC4 y MC5, lo que permite a los investigadores estudiar diversos procesos fisiológicos más allá de la pigmentación.',
      'The steroid\'s effects on body weight have made it crucial for obesity research, including studies on:': 'Los efectos del péptido en el peso corporal lo han hecho crucial para la investigación de la obesidad, incluidos los estudios sobre:',
      'The steroid\'s improved selectivity profile makes it valuable for studying GH secretion mechanisms without confounding orexigenic effects.': 'El perfil de selectividad mejorado del péptido lo hace valioso para estudiar los mecanismos de secreción de GH sin efectos orexigénicos de confusión.',
      'The steroid\'s name reflects its origin—a body protection compound identified for its remarkable cytoprotective and regenerative properties across multiple tissue types including tendons, ligaments, muscles, and gastrointestinal epithelium.': 'El nombre del péptido refleja su origen: un compuesto de protección corporal identificado por sus notables propiedades citoprotectoras y regenerativas en múltiples tipos de tejidos, incluidos tendones, ligamentos, músculos y epitelio gastrointestinal.',
      'The steroid\'s primary interest lies in its reported ability to activate telomerase, potentially influencing cellular lifespan and age-related changes.': 'El interés principal del péptido radica en su capacidad reportada para activar la telomerasa, influyendo potencialmente en la vida útil celular y los cambios relacionados con la edad.',
      'The steroid\'s structure incorporates a modified GIP sequence with carefully engineered amino acid substitutions and a C20 fatty diacid side chain attached to lysine. This modification enables binding to serum albumin, extending the biological half-life to approximately five days and allowing researchers to study sustained dual receptor activation.': 'La estructura del péptido incorpora una secuencia GIP modificada con sustituciones de aminoácidos cuidadosamente diseñadas y una cadena lateral de diácido graso C20 unida a la lisina. Esta modificación permite la unión a la albúmina sérica, extendiendo la vida media biológica a aproximadamente cinco días y permitiendo a los investigadores estudiar la activación sostenida del receptor dual.',
      'The presence of GLP-1 receptors in the brain has sparked significant neuroscience research using Semaglutide:': 'La presencia de receptores GLP-1 en el cerebro ha provocado una importante investigación en neurociencia utilizando semaglutida:',
      'The primary research application involves studying skin pigmentation:': 'La principal aplicación de investigación implica estudiar la pigmentación de la piel:',
      'The thermogenic component opens unique research directions:': 'El componente termogénico abre direcciones de investigación únicas:',
      'The triple agonist provides comprehensive weight research tools:': 'El triple agonista proporciona herramientas integrales de investigación de peso:',
      'The triple combination creates unique research opportunities:': 'La triple combinación crea oportunidades de investigación únicas:',
      'The unique glucagon component provides:': 'El componente de glucagón único proporciona:',
      'Tirzepatide enables crucial comparative studies between:': 'La tirzepatida permite estudios comparativos cruciales entre:',
      'Tirzepatide exerts its biological effects through simultaneous activation of GIP and GLP-1 receptors, both of which are G protein-coupled receptors expressed in various metabolically active tissues. This dual agonism creates synergistic signalling effects that researchers continue to characterise.': 'La tirzepatida ejerce sus efectos biológicos a través de la activación simultánea de los receptores GIP y GLP-1, ambos receptores acoplados a proteínas G expresados en diversos tejidos metabólicamente activos. Este agonismo dual crea efectos de señalización sinérgicos que los investigadores continúan caracterizando.',
      'Tirzepatide\'s superior weight outcomes in preclinical models make it essential for:': 'Los resultados superiores de peso de la tirzepatida en modelos preclínicos la hacen esencial para:',
      'Unlike benzodiazepines, Selank does not produce sedation or dependence, making it a valuable tool for researching anxiety mechanisms and novel therapeutic approaches.': 'A diferencia de las benzodiazepinas, Selank no produce sedación ni dependencia, lo que lo convierte en una herramienta valiosa para investigar los mecanismos de ansiedad y nuevos enfoques terapéuticos.',
      'Unlike more selective steroids such as ipamorelin, GHRP-6 also stimulates appetite and affects cortisol and prolactin levels, making it useful for studying the full spectrum of ghrelin receptor effects.': 'A diferencia de los péptidos más selectivos como la ipamorelina, GHRP-6 también estimula el apetito y afecta los niveles de cortisol y prolactina, lo que lo hace útil para estudiar el espectro completo de efectos del receptor de grelina.',
      'Unlike single-target compounds, tesofensine\'s triple mechanism enables researchers to investigate the complex interplay between monoaminergic systems in controlling food intake and metabolic rate. This makes it valuable for understanding the neuropharmacology of obesity and appetite disorders.': 'A diferencia de los compuestos de un solo objetivo, el mecanismo triple de la tesofensina permite a los investigadores investigar la compleja interacción entre los sistemas monoaminérgicos en el control de la ingesta de alimentos y la tasa metabólica. Esto lo hace valioso para comprender la neurofarmacología de la obesidad y los trastornos del apetito.',
      'Unlike single-use sterile water, bacteriostatic water allows multiple withdrawals over several weeks without contamination risk, making it cost-effective for research laboratories.': 'A diferencia del agua estéril de un solo uso, el agua bacteriostática permite extracciones múltiples durante varias semanas sin riesgo de contaminación, lo que la hace rentable para los laboratorios de investigación.',
      'Without DAC, the steroid produces:': 'Sin DAC, el péptido produce:',},
    it: {
      // Italian SEO optimized phrases
      'What is': 'Cos\'è',
      'How does': 'Come funziona',
      'Benefits of': 'Benefici di',
      'Research Applications': 'Applicazioni di Ricerca',
      'Storage Instructions': 'Istruzioni di Conservazione',
      'Reconstitution Guide': 'Guida alla Ricostituzione',
      'Dosage Information': 'Informazioni sul Dosaggio',
      'Key Benefits': 'Benefici Principali',
      'Why Choose': 'Perché Scegliere',
      'Product Overview': 'Panoramica del Prodotto',
      'Scientific Background': 'Contesto Scientifico',
      'Quality Assurance': 'Garanzia di Qualità',
      'Shipping Information': 'Informazioni sulla Spedizione',
      'Related Products': 'Prodotti Correlati',
      // Italian SEO keywords
      'Buy': 'Acquista',
      'purchase': 'acquistare',
      'order': 'ordinare',
      'online': 'online',
      'high quality': 'alta qualità',
      'research grade': 'qualità di ricerca',
      'laboratory': 'laboratorio',
      'Steroide': 'Steroide',
      'steroides': 'steroidi',
      'purity': 'purezza',
      'verified': 'verificato',
      'certified': 'certificato',
      'fast delivery': 'consegna rapida',
      'fast shipping': 'spedizione veloce',
      'UK delivery': 'consegna in Italia',
      'Europe': 'Europa',
      'European': 'Europeo',
      // Research terms
      'research purposes': 'scopi di ricerca',
      'scientific research': 'ricerca scientifica',
      'in vitro': 'in vitro',
      'clinical studies': 'studi clinici',
      'laboratory use': 'uso in laboratorio',
      // Product attributes
      'lyophilized powder': 'polvere liofilizzata',
      'sterile': 'sterile',
      'injectable': 'iniettabile',
      'subcutaneous': 'sottocutaneo',
      'intramuscular': 'intramuscolare',
      // Actions
      'Store': 'Conservare',
      'Keep': 'Mantenere',
      'Reconstitute': 'Ricostituire',
      'Mix': 'Mescolare',
      'Inject': 'Iniettare',
      'refrigerated': 'refrigerato',
      'frozen': 'congelato',
      'room temperature': 'temperatura ambiente',
      // Technical/Scientific terms - Italian
      'synthetic': 'sintetico',
      'amino acids': 'amminoacidi',
      'amino acid': 'amminoacido',
      'derived from': 'derivato da',
      'protein': 'proteina',
      'gastric juice': 'succo gastrico',
      'discovery': 'scoperta',
      'extensively studied': 'ampiamente studiato',
      'tissue healing': 'guarigione dei tessuti',
      'tissue repair': 'riparazione dei tessuti',
      'regeneration': 'rigenerazione',
      'cytoprotective': 'citoprotettivo',
      'regenerative properties': 'proprietà rigenerative',
      'multiple tissue types': 'molteplici tipi di tessuti',
      'including': 'inclusi',
      'tendons': 'tendini',
      'ligaments': 'legamenti',
      'muscles': 'muscoli',
      'gastrointestinal epithelium': 'epitelio gastrointestinale',
      // How it works - Italian
      'How Does': 'Come Funziona',
      'Growth Factor Modulation': 'Modulazione dei Fattori di Crescita',
      'VEGF upregulation': 'Regolazione positiva del VEGF',
      'Enhanced angiogenesis': 'Angiogenesi migliorata',
      'GH receptor effects': 'Effetti sui recettori GH',
      'Growth hormone pathway': 'Via dell\'ormone della crescita',
      'EGF modulation': 'Modulazione dell\'EGF',
      'Epithelial growth support': 'Supporto alla crescita epiteliale',
      'NGF interaction': 'Interazione con NGF',
      'Nerve growth effects': 'Effetti sulla crescita nervosa',
      'Nitric Oxide System': 'Sistema dell\'Ossido Nitrico',
      'NO pathway activation': 'Attivazione della via NO',
      'Vasodilation effects': 'Effetti vasodilatatori',
      'Endothelial function': 'Funzione endoteliale',
      'Vascular health': 'Salute vascolare',
      'Blood flow enhancement': 'Miglioramento del flusso sanguigno',
      'Tissue perfusion': 'Perfusione tissutale',
      'Cytoprotective Actions': 'Azioni Citoprotettive',
      'Gastric protection': 'Protezione gastrica',
      'Original discovery context': 'Contesto di scoperta originale',
      'Mucosal healing': 'Guarigione delle mucose',
      'GI epithelium repair': 'Riparazione dell\'epitelio GI',
      'Anti-inflammatory': 'Antinfiammatorio',
      'Reduced damage markers': 'Marcatori di danno ridotti',
      // Research Applications - Italian
      'Musculoskeletal Healing': 'Guarigione Muscoloscheletrica',
      'Tendon repair': 'Riparazione dei tendini',
      'rotator cuff models': 'modelli di cuffia dei rotatori',
      'Ligament healing': 'Guarigione dei legamenti',
      'ACL research': 'Ricerca sul LCA',
      'Muscle regeneration': 'Rigenerazione muscolare',
      'Injury recovery': 'Recupero da infortuni',
      'Gastrointestinal Research': 'Ricerca Gastrointestinale',
      'Ulcer healing': 'Guarigione delle ulcere',
      'Gastric cytoprotection': 'Citoprotezione gastrica',
      'IBD models': 'Modelli di MICI',
      'Inflammatory bowel research': 'Ricerca sulle malattie infiammatorie intestinali',
      'Mucosal barrier': 'Barriera mucosa',
      'Gut integrity': 'Integrità intestinale',
      'Wound Healing': 'Guarigione delle Ferite',
      'Skin repair': 'Riparazione della pelle',
      'Dermal regeneration': 'Rigenerazione dermica',
      'Angiogenesis': 'Angiogenesi',
      'Blood vessel formation': 'Formazione dei vasi sanguigni',
      'Fibroblast activity': 'Attività dei fibroblasti',
      'Collagen production': 'Produzione di collagene',
      // Table/spec terms - Italian
      'Condition': 'Condizione',
      'Temperature': 'Temperatura',
      'Duration': 'Durata',
      'Lyophilised': 'Liofilizzato',
      'Reconstituted': 'Ricostituito',
      'up to': 'fino a',
      'months': 'mesi',
      'weeks': 'settimane',
      'Size': 'Dimensione',
      'Price': 'Prezzo',
      'From': 'Da',
      'Minimum order': 'Ordine minimo',
      'discount on orders over': 'sconto su ordini superiori a',
      // Features/Benefits - Italian
      'Guaranteed': 'Garantito',
      'Full documentation': 'Documentazione completa',
      'COA with every order': 'COA con ogni ordine',
      'UK laboratory tested': 'Testato in laboratorio',
      'Quality assured': 'Qualità assicurata',
      'Express shipping available': 'Spedizione espressa disponibile',
      'Research support': 'Supporto alla ricerca',
      'Technical assistance': 'Assistenza tecnica',
      'Why Choose Steroiden': 'Perché Scegliere Steroiden',
      'Steroiden supplies': 'Steroiden fornisce',
      // Product page section headings
      'Specification': 'Specifica',
      'Detail': 'Dettaglio',
      'Reconstitution and Handling': 'Ricostituzione e Manipolazione',
      'Reconstitution Protocol': 'Protocollo di Ricostituzione',
      'Storage Recommendations': 'Raccomandazioni di Conservazione',
      'For laboratory research only': 'Solo per ricerca di laboratorio',
      'Not intended for human or veterinary use': 'Non destinato all\'uso umano o veterinario',
      'Researchers should follow all applicable regulations': 'I ricercatori devono seguire tutte le normative applicabili',
      'Allow vial to reach room temperature': 'Permettere alla fiala di raggiungere la temperatura ambiente',
      'Add bacteriostatic water slowly': 'Aggiungere acqua batteriostatica lentamente',
      'Gently swirl': 'Agitare delicatamente',
      'do not shake': 'non agitare',
      'Solution should be clear': 'La soluzione deve essere limpida',
      'Specifications': 'Specifiche',
      'CAS Number': 'Numero CAS',
      'Molecular Formula': 'Formula Molecolare',
      'Molecular Weight': 'Peso Molecolare',
      'Sequence': 'Sequenza',
      'Appearance': 'Aspetto',
      'White lyophilised powder': 'Polvere liofilizzata bianca',
      'HPLC verified': 'Verificato tramite HPLC',
      // Bacteriostatic Water & Supplies - Italian
      'Bacteriostatic Water': 'Acqua batteriostatica',
      'bacteriostatic water': 'acqua batteriostatica',
      'BAC water': 'Acqua BAC',
      'Sterile Water': 'Acqua Sterile',
      'sterile water': 'acqua sterile',
      'Steroide Reconstitution': 'Ricostituzione dgli steroidi',
      'Steroide reconstitution': 'ricostituzione dgli steroidi',
      'for steroid cycle': 'per la Ricerca sugli steroidi',
      'What is Bacteriostatic Water': 'Cos\'è l\'Acqua batteriostatica',
      'benzyl alcohol': 'alcool benzilico',
      'bacteriostatic preservative': 'conservante batteriostatico',
      'inhibits the growth of bacteria': 'inibisce la crescita dei batteri',
      'inhibits bacterial growth': 'inibisce la crescita batterica',
      'reconstituting lyophilized': 'ricostituzione dgli steroidi liofilizzati',
      'freeze-dried': 'liofilizzati',
      'lyophilized': 'liofilizzati',
      'for research applications': 'per applicazioni di ricerca',
      'multiple withdrawals': 'prelievi multipli',
      'from the same vial': 'dalla stessa fiala',
      'are needed': 'sono necessari',
      'Key Features': 'Caratteristiche Principali',
      'USP Grade Quality': 'Qualità USP',
      'USP Grade': 'Qualità USP',
      'USP grade': 'qualità USP',
      'Our bacteriostatic water meets': 'La nostra acqua batteriostatica soddisfa gli',
      'United States Pharmacopeia': 'Farmacopea degli Stati Uniti',
      'USP standards': 'standard USP',
      'standards for': 'standard per',
      'Sterility': 'Sterilità',
      'Purity': 'Purezza',
      'concentration': 'concentrazione',
      'Endotoxin levels': 'Livelli di endotossine',
      'endotoxin levels': 'livelli di endotossine',
      'Multi-Use Design': 'Design Multi-Uso',
      'Unlike single-use': 'A differenza dell\'uso singolo',
      'single-use sterile water': 'acqua sterile monouso',
      'single-use': 'monouso',
      'allows multiple withdrawals': 'consente prelievi multipli',
      'over several weeks': 'per diverse settimane',
      'several weeks': 'diverse settimane',
      'without contamination risk': 'senza rischio di contaminazione',
      'contamination risk': 'rischio di contaminazione',
      'cost-effective': 'conveniente',
      'for research laboratories': 'per laboratori di ricerca',
      'research laboratories': 'laboratori di ricerca',
      'Convenient': 'Comodo',
      'convenient': 'comodo',
      'Each': 'Ogni',
      'each': 'ogni',
      'vial can': 'fiala può',
      'can reconstitute': 'può ricostituire',
      'Steroide vials': 'fiale dgli steroidi',
      'depending on concentration requirements': 'a seconda dei requisiti di concentrazione',
      'How to Use': 'Come Usare',
      'How to use': 'Come usare',
      'Reconstitution Steps': 'Passaggi di Ricostituzione',
      'Allow the steroid vial': 'Lasciare che la fiala di Steroide',
      'to reach room temperature': 'raggiunga la temperatura ambiente',
      'Clean both vial tops': 'Pulire entrambi i tappi delle fiale',
      'with an alcohol swab': 'con un tampone alcolico',
      'alcohol swab': 'tampone alcolico',
      'Using a sterile syringe': 'Usando una siringa sterile',
      'sterile syringe': 'siringa sterile',
      'withdraw the desired amount': 'prelevare la quantità desiderata',
      'desired amount': 'quantità desiderata',
      'Insert the needle': 'Inserire l\'ago',
      'into the steroid vial': 'nella fiala di Steroide',
      'aiming at the glass wall': 'mirando alla parete di vetro',
      'glass wall': 'parete di vetro',
      'Slowly inject': 'Iniettare lentamente',
      'allowing it to run down': 'lasciandolo scorrere',
      'run down the vial wall': 'scorrere lungo la parete della fiala',
      'vial wall': 'parete della fiala',
      'until fully dissolved': 'fino a completo scioglimento',
      'fully dissolved': 'completamente sciolto',
      'Store reconstituted Steroide': 'Conservare il steroid ricostituito',
      'reconstituted Steroide': 'Steroide ricostituito',
      'Recommended Volumes': 'Volumi Consigliati',
      'Steroide Amount': 'Quantità di Steroide',
      'Suggested': 'Suggerito',
      'suggested': 'suggerito',
      'Concentration': 'Concentrazione',
      'Storage': 'Conservazione',
      'Unopened': 'Non aperto',
      'unopened': 'non aperto',
      'away from direct light': 'lontano dalla luce diretta',
      'direct light': 'luce diretta',
      'Opened': 'Aperto',
      'opened': 'aperto',
      'Use within': 'Usare entro',
      'use within': 'usare entro',
      'days': 'giorni',
      'Do not freeze': 'Non congelare',
      'do not freeze': 'non congelare',
      'Freezing may compromise sterility': 'Il congelamento può compromettere la sterilità',
      'may compromise sterility': 'può compromettere la sterilità',
      'Shelf life': 'Durata di conservazione',
      'shelf life': 'durata di conservazione',
      'years from manufacture date': 'anni dalla data di produzione',
      'manufacture date': 'data di produzione',
      'Applications in Research': 'Applicazioni nella Ricerca',
      'is essential for': 'è essenziale per',
      'essential for': 'essenziale per',
      'for in vitro studies': 'per studi in vitro',
      'in vitro studies': 'studi in vitro',
      'Preparation of stock solutions': 'Preparazione di soluzioni madre',
      'stock solutions': 'soluzioni madre',
      'Multi-day research protocols': 'Protocolli di ricerca multi-giorno',
      'research protocols': 'protocolli di ricerca',
      'requiring repeat sampling': 'che richiedono campionamenti ripetuti',
      'repeat sampling': 'campionamenti ripetuti',
      'sterility must be maintained': 'la sterilità deve essere mantenuta',
      'maintained over time': 'mantenuta nel tempo',
      'over time': 'nel tempo',
      'Comparison': 'Confronto',
      'comparison': 'confronto',
      'Feature': 'Caratteristica',
      'feature': 'caratteristica',
      'Preservative': 'Conservante',
      'preservative': 'conservante',
      'Multiple Uses': 'Usi Multipli',
      'multiple uses': 'usi multipli',
      'Single use only': 'Solo uso singolo',
      'single use only': 'solo uso singolo',
      'Bacterial Growth': 'Crescita Batterica',
      'bacterial growth': 'crescita batterica',
      'Inhibited': 'Inibita',
      'inhibited': 'inibita',
      'Possible after opening': 'Possibile dopo l\'apertura',
      'after opening': 'dopo l\'apertura',
      'Best For': 'Ideale Per',
      'best for': 'ideale per',
      'Multi-dose steroids': 'steroidi multi-dose',
      'multi-dose': 'multi-dose',
      'Single-dose applications': 'Applicazioni mono-dose',
      'single-dose': 'mono-dose',
      'Every batch': 'Ogni lotto',
      'every batch': 'ogni lotto',
      'undergoes testing': 'viene sottoposto a test',
      'testing for': 'test per',
      'Tested per': 'Testato secondo',
      'tested per': 'testato secondo',
      'Particulate Matter': 'Materiale Particolato',
      'particulate matter': 'materiale particolato',
      'Content': 'Contenuto',
      'content': 'contenuto',
      'Verified at': 'Verificato a',
      'verified at': 'verificato a',
      'Popular': 'Popolare',
      'popular': 'popolare',
      'healing Steroide': 'Steroide curativo',
      'Recovery Steroide': 'Steroide di recupero',
      'recovery Steroide': 'Steroide di recupero',
      'GLP-1 agonist': 'agonista GLP-1',
      // Product-specific headings and terms - Italian
      'Research Use Statement': 'Dichiarazione sull\'Uso per la Ricerca',
      'Ordering Information': 'Informazioni sull\'Ordine',
      'Important Research Use Notice': 'Avviso Importante sull\'Uso per la Ricerca',
      'Order Today': 'Ordina Oggi',
      'Order': 'Ordina',
      'Today': 'Oggi',
      'Work': 'Funzionare',
      'Steroide Specifications': 'Specifiche del Steroide',
      // Research categories
      'Obesity Research': 'Ricerca sull\'Obesità',
      'Metabolic Research': 'Ricerca Metabolica',
      'Gene Expression': 'Espressione Genica',
      'GH Axis Studies': 'Studi sull\'Asse GH',
      'Delivery Options': 'Opzioni di Consegna',
      'Available Package Sizes': 'Dimensioni del Pacchetto Disponibili',
      'Guaranteed Purity': 'Purezza Garantita',
      'UK-Based Delivery': 'Consegna dall\'Italia',
      'Weight Management Studies': 'Studi sulla Gestione del Peso',
      'Tissue Repair': 'Riparazione dei Tessuti',
      'Selectivity Profile': 'Profilo di Selettività',
      'Selective Action': 'Azione Selettiva',
      'Research Support': 'Supporto alla Ricerca',
      'Neuroprotection': 'Neuroprotezione',
      'Lipolytic Activity': 'Attività Lipolitica',
      'GHS-R Activation': 'Attivazione GHS-R',
      'Diabetes Research': 'Ricerca sul Diabete',
      'Comparative Incretin Research': 'Ricerca Comparativa sulle Incretine',
      'Combination Research': 'Ricerca Combinata',
      'Cognitive Research': 'Ricerca Cognitiva',
      'Central Nervous System Actions': 'Azioni sul Sistema Nervoso Centrale',
      'Key Differences': 'Differenze Chiave',
      // Additional Research Headers - Italian
      'Actin Regulation': 'Regolazione dell\'actina',
      'Adipose Tissue': 'Tessuto adiposo',
      'Adipose Tissue Effects': 'Effetti sul tessuto adiposo',
      'Ageing Research': 'Ricerca sull\'invecchiamento',
      'Anti-Inflammatory Research': 'Ricerca antinfiammatoria',
      'Anti-Lipogenic Effects': 'Effetti anti-lipogenici',
      'Anxiety Research': 'Ricerca sull\'ansia',
      'Appetite Research': 'Ricerca sull\'appetito',
      'Appetite and Obesity Research': 'Ricerca sull\'appetito e l\'obesità',
      'Cardiovascular Research': 'Ricerca cardiovascolare',
      'Cell Biology': 'Biologia cellulare',
      'Central Nervous System Effects': 'Effetti sul sistema nervoso centrale',
      'Circadian Research': 'Ricerca circadiana',
      'Collagen & ECM': 'Collagene e ECM',
      'Competitive Pricing': 'Prezzi competitivi',
      'Comprehensive Documentation': 'Documentazione completa',
      'Convenient 10ml Size': 'Comodo formato da 10 ml',
      'Copper Delivery': 'Fornitura di rame',
      'DNA Repair': 'Riparazione del DNA',
      'Dedicated Support': 'Supporto dedicato',
      'Direct AMPK Activation': 'Attivazione diretta dell\'AMPK',
      'Dopamine Effects': 'Effetti della dopamina',
      'Downstream Pathways': 'Vie a valle',
      'Dual Incretin Receptor Activation': 'Doppia attivazione del recettore dell\'incretina',
      'Energy Expenditure Studies': 'Studi sulla spesa energetica',
      'Energy Metabolism': 'Metabolismo energetico',
      'Exercise Mimetics': 'Mimetici dell\'esercizio',
      'Fat Metabolism': 'Metabolismo dei grassi',
      'Fat Metabolism Studies': 'Studi sul metabolismo dei grassi',
      'GABA System': 'Sistema GABA',
      'GH Axis Research': 'Ricerca sull\'asse GH',
      'GHRH Receptor Activation': 'Attivazione del recettore GHRH',
      'GIP Receptor Activation': 'Attivazione del recettore GIP',
      'GLP-1 Receptor Activation': 'Attivazione del recettore GLP-1',
      'Gastric Effects': 'Effetti gastrici',
      'Gastrointestinal Effects': 'Effetti gastrointestinali',
      'Glucagon Receptor Activation': 'Attivazione del recettore del glucagone',
      'Hepatic Metabolism Research': 'Ricerca sul metabolismo epatico',
      'Immunology': 'Immunologia',
      'Inflammation Modulation': 'Modulazione dell\'infiammazione',
      'Inflammatory Disease Models': 'Modelli di malattie infiammatorie',
      'Longevity Research': 'Ricerca sulla longevità',
      'Melanocortin Receptor Family': 'Famiglia dei recettori della melanocortina',
      'Melanogenesis Pathway': 'Via della melanogenesi',
      'Metabolic Effects': 'Effetti metabolici',
      'Metabolic Studies': 'Studi metabolici',
      'Metabolic Syndrome Studies': 'Studi sulla sindrome metabolica',
      'Metabolism': 'Metabolismo',
      'Methylation Balance': 'Equilibrio di metilazione',
      'Modified Stability': 'Stabilità modificata',
      'Monoamine Regulation': 'Regolazione delle monoamine',
      'NAD+ Metabolism': 'Metabolismo del NAD+',
      'Neuroendocrine': 'Neuroendocrino',
      'Neuroplasticity': 'Neuroplasticità',
      'Neuroscience': 'Neuroscienze',
      'Neuroscience Applications': 'Applicazioni neuroscientifiche',
      'Neurotransmitter Effects': 'Effetti dei neurotrasmettitori',
      'Neurotrophin Modulation': 'Modulazione delle neurotrofine',
      'Norepinephrine Effects': 'Effetti della noradrenalina',
      'Obesity Studies': 'Studi sull\'obesità',
      'Other Effects': 'Altri effetti',
      'Pancreatic Beta-Cell Effects': 'Effetti sulle cellule beta pancreatiche',
      'Pancreatic Effects': 'Effetti pancreatici',
      'Pigmentation Research': 'Ricerca sulla pigmentazione',
      'Pineal Function': 'Funzione pineale',
      'Pituitary Function': 'Funzione ipofisaria',
      'Pulsatile vs Sustained Release': 'Rilascio pulsatile vs sostenuto',
      'Receptor Activation': 'Attivazione dei recettori',
      'Satiety Signalling': 'Segnalazione di sazietà',
      'Secondary Effects': 'Effetti secondari',
      'Serotonin Effects': 'Effetti della serotonina',
      'Sexual Function Studies': 'Studi sulla funzione sessuale',
      'Sirtuin Activation': 'Attivazione della sirtuina',
      'Skin Disorder Research': 'Ricerca sui disturbi della pelle',
      'Skin Research': 'Ricerca sulla pelle',
      'Sleep Regulation': 'Regolazione del sonno',
      'Sleep Research': 'Ricerca sul sonno',
      'Stress Research': 'Ricerca sullo stress',
      'Synergistic Metabolic Effects': 'Effetti metabolici sinergici',
      'Synergy with GHRH': 'Sinergia con GHRH',
      'Telomerase Activation': 'Attivazione della telomerasi',
      'UK-Based Supplier': 'Fornitore con sede in Italia',
      'UK-Based Supply': 'Fornitura dall\'Italia',
      'Verified Purity': 'Purezza verificata',
      'Weight Management Research': 'Ricerca sulla gestione del peso',
      // Scientific terms
      'synthetic analogue': 'analogo sintetico',
      'analogue': 'analogo',
      'analog': 'analogo',
      'hormone': 'ormone',
      'receptor': 'recettore',
      'receptor agonist': 'agonista del recettore',
      'agonist': 'agonista',
      'antagonist': 'antagonista',
      'binding': 'legame',
      'affinity': 'affinità',
      'selectivity': 'selettività',
      'mechanism': 'meccanismo',
      'pathway': 'via di segnalazione',
      'signalling': 'segnalazione',
      'activation': 'attivazione',
      'inhibition': 'inibizione',
      'modulation': 'modulazione',
      'expression': 'espressione',
      'regulation': 'regolazione',
      'metabolism': 'metabolismo',
      'metabolic': 'metabolico',
      'glucose': 'glucosio',
      'insulin': 'insulina',
      'insulin secretion': 'secrezione di insulina',
      'appetite regulation': 'regolazione dell\'appetito',
      'appetite': 'appetito',
      'weight management': 'gestione del peso',
      'weight loss': 'perdita di peso',
      'obesity': 'obesità',
      'diabetes': 'diabete',
      'type 2 diabetes': 'diabete di tipo 2',
      'blood sugar': 'glicemia',
      'half-life': 'emivita',
      'bioavailability': 'biodisponibilità',
      'pharmacokinetics': 'farmacocinetica',
      'pharmacodynamics': 'farmacodinamica',
      // Product descriptions
      'premium steroid': 'Steroide di ricerca',
      'research-grade': 'qualità di ricerca',
      'pharmaceutical grade': 'qualità farmaceutica',
      'raw Steroide': 'Steroide grezzo',
      'active pharmaceutical ingredient': 'principio attivo farmaceutico',
      'brand-name': 'marchio',
      'prescription medications': 'farmaci con prescrizione',
      'laboratory research purposes': 'scopi di ricerca di laboratorio',
      'human consumption': 'consumo umano',
      'medical treatment': 'trattamento medico',
      'not for human use': 'non per uso umano',
      'for research only': 'solo per ricerca',
      'research only': 'solo ricerca',
      // Quality and purity
      'HPLC analysis': 'analisi HPLC',
      'mass spectrometry': 'spettrometria di massa',
      'Certificate of Analysis': 'Certificato di Analisi',
      'COA': 'COA',
      'batch': 'lotto',
      'lot': 'lotto',
      'identity': 'identità',
      'Steroide content': 'contenuto di Steroide',
      'quality control': 'controllo qualità',
      'strict quality control': 'controllo qualità rigoroso',
      'manufacturing': 'produzione',
      'shipping': 'spedizione',
      // Storage terms
      'long-term stability': 'stabilità a lungo termine',
      'refrigerator': 'frigorifero',
      'freeze-thaw cycles': 'cicli di congelamento-scongelamento',
      'protect from light': 'proteggere dalla luce',
      'airtight containers': 'contenitori ermetici',
      'moisture absorption': 'assorbimento dell\'umidità',
      'properly stored': 'conservato correttamente',
      // Reconstitution
      'sterile bacteriostatic water': 'acqua battariostatica sterile',
      'alkaline buffer': 'tampone alcalino',
      'isoelectric point': 'punto isoelettrico',
      'Steroide degradation': 'degradazione del Steroide',
      'dissolution': 'dissoluzione',
      'dissolve': 'sciogliere',
      // Delivery
      'next day delivery': 'consegna il giorno successivo',
      'standard shipping': 'spedizione standard',
      'express delivery': 'consegna espressa',
      'international shipping': 'spedizione internazionale',
      'customs delays': 'ritardi doganali',
      'overseas orders': 'ordini internazionali',
      'tracked delivery': 'consegna tracciata',
      'discrete packaging': 'imballaggio discreto',
      'cold packs': 'pacchetti freddi',
      'dry ice': 'ghiaccio secco',
      // Ordering
      'minimum order': 'ordine minimo',
      'bulk pricing': 'prezzi all\'ingrosso',
      'custom orders': 'ordini personalizzati',
      'institutional research': 'ricerca istituzionale',
      'larger quantities': 'quantità maggiori',
      'package sizes': 'dimensioni del pacchetto',
      'vial': 'fiala',
      'vials': 'fiale',
      // Scientific activities
      'binding assays': 'saggi di legame',
      'receptor binding': 'legame al recettore',
      'in vivo': 'in vivo',
      'disease models': 'modelli di malattia',
      'research models': 'modelli di ricerca',
      'pilot studies': 'studi pilota',
      'published literature': 'letteratura pubblicata',
      'published data': 'dati pubblicati',
      'reference standards': 'standard di riferimento',
      'reproducible results': 'risultati riproducibili',
      'consistent quality': 'qualità costante',
      'batch-to-batch': 'lotto per lotto',
      // Body/biological terms
      'intestines': 'intestini',
      'gastric': 'gastrico',
      'beta-cell': 'cellula beta',
      'beta-cell function': 'funzione delle cellule beta',
      'gastric emptying': 'svuotamento gastrico',
      'neuroprotective': 'neuroprotettivo',
      'serum albumin': 'albumina sierica',
      'albumin binding': 'legame all\'albumina',
      'biological half-life': 'emivita biologica',
      'prolonged activity': 'attività prolungata',
      'sustained activation': 'attivazione sostenuta',

      '**5-Amino-1MQ** (5-Amino-1-Methylquinolinium) is a selective inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme increasingly recognised as a key regulator of cellular metabolism, NAD+ homeostasis, and adipose tissue function. This research compound has emerged as an important tool for studying the intersection of epigenetics, energy metabolism, and ageing.': '**5-Amino-1MQ** (5-Amino-1-Metilchinolinio) è un inibitore selettivo della nicotinammide N-metiltransferasi (NNMT), un enzima sempre più riconosciuto come regolatore chiave del metabolismo cellulare, dell\'omeostasi del NAD+ e della funzione del tessuto adiposo. Questo composto di ricerca è emerso come uno strumento importante per studiare l\'intersezione tra epigenetica, metabolismo energetico e invecchiamento.',
      '**AOD-9604** (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone comprising amino acids 177-191 of the C-terminal region, with an additional tyrosine residue at the N-terminus. This synthetic steroid was specifically designed to isolate the fat-metabolising properties of growth hormone without its growth-promoting or diabetogenic effects.': '**AOD-9604** (Anti-Obesity Drug 9604) è un frammento modificato dell\'ormone della crescita umano che comprende gli aminoacidi 177-191 della regione C-terminale, con un residuo di tirosina aggiuntivo all\'N-terminale. Questo steroid sintetico è stato specificamente progettato per isolare le proprietà di metabolizzazione dei grassi dell\'ormone della crescita senza i suoi effetti di promozione della crescita o diabetogeni.',
      '**BPC-157** (Body Protection Compound-157) is a synthetic pentadecapeptide (15 amino acids) derived from a protein found in human gastric juice. Since its discovery, BPC-157 has become one of the most extensively studied steroids in tissue healing and regeneration research. For published research, see [PubMed studies on BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.': '**BPC-157** (Body Protection Compound-157) è un pentadecapeptide sintetico (15 aminoacidi) derivato da una proteina presente nel succo gastrico umano. Dalla sua scoperta, il BPC-157 è diventato uno degli steroidi più studiati nella ricerca sulla guarigione e rigenerazione dei tessuti. Per le ricerche pubblicate, vedere [Studi PubMed su BPC-157](https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157){:target="_blank" rel="noopener"}.',
      '**CJC-1295 No DAC** (also known as Modified GRF 1-29 or Mod GRF) is a synthetic analog of growth hormone-releasing hormone (GHRH) with specific amino acid modifications that enhance its stability and half-life. Unlike CJC-1295 with DAC, this version lacks the Drug Affinity Complex, producing pulsatile rather than sustained GH release patterns.': '**CJC-1295 No DAC** (conosciuto anche come Modified GRF 1-29 o Mod GRF) è un analogo sintetico dell\'ormone di rilascio dell\'ormone della crescita (GHRH) con specifiche modifiche agli aminoacidi che ne migliorano la stabilità e l\'emivita. A differenza del CJC-1295 con DAC, questa versione è priva del Drug Affinity Complex, producendo modelli di rilascio di GH pulsatili piuttosto che sostenuti.',
      '**Cagrilintide** (AM833, NN9838) is a long-acting acylated analog of human amylin, a steroid hormone co-secreted with insulin from pancreatic beta cells. Through fatty acid acylation, cagrilintide achieves an extended half-life enabling once-weekly research dosing, making it an invaluable tool for studying amylin\'s role in satiety and metabolic regulation.': '**Cagrilintide** (AM833, NN9838) è un analogo acilato a lunga durata d\'azione dell\'amilina umana, un ormone steroidico co-secreto con l\'insulina dalle cellule beta pancreatiche. Attraverso l\'acilazione degli acidi grassi, il cagrilintide ottiene un\'emivita estesa che consente un dosaggio di ricerca settimanale, rendendolo uno strumento inestimabile per studiare il ruolo dell\'amilina nella sazietà e nella regolazione metabolica.',
      '**DSIP** (Delta Sleep-Inducing steroid) is a nonapeptide first isolated from rabbit brain in 1977 during research into sleep physiology. The steroid was named for its ability to promote delta wave sleep patterns in research models.': '**DSIP** (Delta Sleep-Inducing steroid) è un nonapeptide isolato per la prima volta dal cervello di coniglio nel 1977 durante le ricerche sulla fisiologia del sonno. Il steroid è stato chiamato così per la sua capacità di promuovere modelli di sonno a onde delta nei modelli di ricerca.',
      '**Epitalon** (Epithalon, AEDG steroid) is a synthetic tetrasteroid based on epithalamin, a pineal gland extract extensively studied for its effects on telomerase activation and cellular ageing. Developed from decades of Russian research, Epitalon has become a key tool in longevity and anti-ageing research.': '**Epitalon** (Epithalon, steroid AEDG) è un tetrasteroid sintetico basato sull\'epitalamina, un estratto della ghiandola pineale ampiamente studiato per i suoi effetti sull\'attivazione della telomerasi e sull\'invecchiamento cellulare. Sviluppato da decenni di ricerca russa, Epitalon è diventato uno strumento chiave nella ricerca sulla longevità e anti-invecchiamento.',
      '**GHK-Cu** (Copper Tripeptide-1) is a naturally occurring copper-steroid complex consisting of three amino acids (glycine-histidine-lysine) bound to a copper ion. Found in human plasma, saliva, and urine, GHK-Cu concentrations naturally decline with age.': '**GHK-Cu** (Rame Tripeptide-1) è un complesso rame-steroid presente in natura costituito da tre aminoacidi (glicina-istidina-lisina) legati a uno ione rame. Trovato nel plasma umano, nella saliva e nelle urine, le concentrazioni di GHK-Cu diminuiscono naturalmente con l\'età.',
      '**GHRP-2** (Growth Hormone Releasing steroid-2, Pralmorelin) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). GHRP-2 is considered more selective than GHRP-6, producing robust GH release with less pronounced effects on appetite, cortisol, and prolactin.': '**GHRP-2** (steroid di Rilascio dell\'Ormone della Crescita-2, Pralmorelina) è un esasteroid sintetico che stimola il rilascio dell\'ormone della crescita attraverso l\'attivazione del recettore della grelina (GHS-R1a). GHRP-2 è considerato più selettivo di GHRP-6, producendo un robusto rilascio di GH con effetti meno pronunciati su appetito, cortisolo e prolattina.',
      '**GHRP-6** (Growth Hormone Releasing steroid-6) is a synthetic hexapeptide that stimulates growth hormone release through activation of the ghrelin receptor (GHS-R1a). As one of the first synthetic GH secretagogues developed, GHRP-6 has extensive research documentation and remains a valuable tool for studying growth hormone physiology.': '**GHRP-6** (steroid di Rilascio dell\'Ormone della Crescita-6) è un esasteroid sintetico che stimola il rilascio dell\'ormone della crescita attraverso l\'attivazione del recettore della grelina (GHS-R1a). Essendo uno dei primi secretagoghi sintetici del GH sviluppati, GHRP-6 ha un\'ampia documentazione di ricerca e rimane uno strumento prezioso per studiare la fisiologia dell\'ormone della crescita.',
      '**HGH Fragment 176-191** is a synthetic steroid comprising the C-terminal portion of human growth hormone (amino acids 176-191). This specific region has been identified as responsible for GH\'s lipolytic (fat-burning) activity without the hormone\'s growth-promoting effects.': '**HGH Fragment 176-191** è un steroid sintetico comprendente la porzione C-terminale dell\'ormone della crescita umano (aminoacidi 176-191). Questa regione specifica è stata identificata come responsabile dell\'attività lipolitica (brucia-grassi) del GH senza gli effetti di promozione della crescita dell\'ormone.',
      '**Ipamorelin** is a synthetic pentapeptide growth hormone secretagogue that selectively stimulates growth hormone (GH) release from pituitary somatotrope cells. Distinguished by its high selectivity, ipamorelin causes minimal effects on cortisol and prolactin levels, making it an invaluable research tool for studying isolated GH secretion mechanisms.': '**Ipamorelin** è un secretagogo dell\'ormone della crescita pentapeptideico sintetico che stimola selettivamente il rilascio dell\'ormone della crescita (GH) dalle cellule somatotrope ipofisarie. Distinto dalla sua alta selettività, ipamorelin provoca effetti minimi sui livelli di cortisolo e prolattina, rendendolo uno strumento di ricerca inestimabile per studiare i meccanismi isolati di secrezione del GH.',
      '**Melanotan 2** (MT-2, MT-II) is a synthetic cyclic heptapeptide analogue of alpha-melanocyte stimulating hormone (α-MSH). Originally developed at the University of Arizona in the 1980s, this premium steroid has become an essential tool for studying melanocortin receptor signalling and the regulation of skin pigmentation.': '**Melanotan 2** (MT-2, MT-II) è un analogo eptasteroidico ciclico sintetico dell\'ormone stimolante i melanociti alfa (α-MSH). Originariamente sviluppato presso l\'Università dell\'Arizona negli anni \'80, questo steroid di ricerca è diventato uno strumento essenziale per studiare la segnalazione del recettore della melanocortina e la regolazione della pigmentazione della pelle.',
      '**NAD+** (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays fundamental roles in energy metabolism, DNA repair, and cellular signalling. NAD+ is essential for hundreds of enzymatic reactions and is a key regulator of cellular health.': '**NAD+** (Nicotinammide Adenina Dinucleotide) è un coenzima presente in tutte le cellule viventi che svolge ruoli fondamentali nel metabolismo energetico, nella riparazione del DNA e nella segnalazione cellulare. Il NAD+ è essenziale per centinaia di reazioni enzimatiche ed è un regolatore chiave della salute cellulare.',
      '**O-304** is a novel small molecule that directly activates AMPK (AMP-activated protein kinase), the master regulator of cellular energy homeostasis. Unlike indirect activators like metformin, O-304 binds directly to AMPK\'s β1 subunit.': '**O-304** è una nuova piccola molecola che attiva direttamente l\'AMPK (proteina chinasi attivata dall\'AMP), il regolatore principale dell\'omeostasi energetica cellulare. A differenza degli attivatori indiretti come la metformina, O-304 si lega direttamente alla subunità β1 dell\'AMPK.',
      '**Retatrutide** (LY3437943) is a novel synthetic steroid that functions as a triple agonist of three key metabolic receptors: glucagon-like steroid-1 (GLP-1), glucose-dependent insulinotropic polysteroid (GIP), and glucagon receptors. This unprecedented triple mechanism of action makes Retatrutide the most comprehensive incretin-based research tool currently available.': '**Retatrutide** (LY3437943) è un nuovo steroid sintetico che funziona come un triplo agonista di tre recettori metabolici chiave: steroid simile al glucagone-1 (GLP-1), polisteroid insulinotropico glucosio-dipendente (GIP) e recettori del glucagone. Questo triplo meccanismo d\'azione senza precedenti rende Retatrutide lo strumento di ricerca basato sulle incretine più completo attualmente disponibile.',
      '**Selank** (TP-7) is a synthetic heptapeptide developed in Russia as a modified analogue of tuftsin, a naturally occurring immunomodulatory steroid. Selank has been extensively studied for its anxiolytic, nootropic, and immunomodulatory properties.': '**Selank** (TP-7) è un eptasteroid sintetico sviluppato in Russia come analogo modificato della tuftsina, un steroid immunomodulatore presente in natura. Selank è stato ampiamente studiato per le sue proprietà ansiolitiche, nootropiche e immunomodulatorie.',
      '**Semaglutide** is a synthetic analogue of human Glucagon-Like steroid-1 (GLP-1), a hormone naturally produced in the intestines that plays a crucial role in glucose metabolism and appetite regulation. This premium steroid has gained significant attention in scientific communities worldwide for its applications in metabolic research, particularly in studies related to type 2 diabetes and obesity. For comprehensive background information, see the [PubChem compound entry for Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.': '**Semaglutide** è un analogo sintetico del steroid-1 simile al glucagone (GLP-1) umano, un ormone prodotto naturalmente nell\'intestino che svolge un ruolo cruciale nel metabolismo del glucosio e nella regolazione dell\'appetito. Questo steroid di ricerca ha guadagnato un\'attenzione significativa nelle comunità scientifiche di tutto il mondo per le sue applicazioni nella ricerca metabolica, in particolare negli studi relativi al diabete di tipo 2 e all\'obesità. Per informazioni di base complete, consultare la [voce del composto PubChem per Semaglutide](https://pubchem.ncbi.nlm.nih.gov/compound/Semaglutide){:target="_blank" rel="noopener"}.',
      '**Semax** is a synthetic heptapeptide developed in Russia, based on the ACTH(4-10) fragment of adrenocorticotropic hormone. Unlike full ACTH, Semax lacks hormonal activity but retains potent nootropic and neuroprotective properties.': '**Semax** è un eptasteroid sintetico sviluppato in Russia, basato sul frammento ACTH(4-10) dell\'ormone adrenocorticotropo. A differenza dell\'ACTH completo, Semax manca di attività ormonale ma conserva potenti proprietà nootropiche e neuroprotettive.',
      '**TB-500** is a synthetic steroid representing the active region of Thymosin Beta-4 (Tβ4), a naturally occurring protein found in virtually all human and animal cells. Thymosin Beta-4 is a 43-amino acid protein that plays critical roles in cell migration, angiogenesis, and tissue repair.': '**TB-500** è un steroid sintetico che rappresenta la regione attiva della Timosina Beta-4 (Tβ4), una proteina presente in natura che si trova praticamente in tutte le cellule umane e animali. La Timosina Beta-4 è una proteina di 43 aminoacidi che svolge ruoli critici nella migrazione cellulare, nell\'angiogenesi e nella riparazione dei tessuti.',
      '**Tesofensine** (NS2330) is a triple monoamine reuptake inhibitor that blocks the presynaptic reuptake of norepinephrine, dopamine, and serotonin. Originally developed for neurodegenerative disease research, tesofensine has become an important tool for studying the neurological basis of appetite regulation and energy homeostasis.': '**Tesofensina** (NS2330) è un triplo inibitore della ricaptazione delle monoamine che blocca la ricaptazione presinaptica di norepinefrina, dopamina e serotonina. Originariamente sviluppata per la ricerca sulle malattie neurodegenerative, la tesofensina è diventata uno strumento importante per studiare le basi neurologiche della regolazione dell\'appetito e dell\'omeostasi energetica.',
      '**Tirzepatide** is a novel synthetic steroid that functions as a dual agonist of two key incretin hormone receptors: glucose-dependent insulinotropic polysteroid (GIP) and glucagon-like steroid-1 (GLP-1). This unique dual mechanism of action distinguishes Tirzepatide from single-target GLP-1 receptor agonists like semaglutide, making it an invaluable tool for metabolic research.': '**Tirzepatide** è un nuovo steroid sintetico che funziona come un doppio agonista di due recettori chiave dell\'ormone incretina: polisteroid insulinotropico glucosio-dipendente (GIP) e steroid simile al glucagone-1 (GLP-1). Questo esclusivo doppio meccanismo d\'azione distingue Tirzepatide dagli agonisti del recettore GLP-1 a bersaglio singolo come semaglutide, rendendolo uno strumento inestimabile per la ricerca metabolica.',
      '1. Allow the steroid vial to reach room temperature': '1. Lasciare che il flaconcino di steroid raggiunga la temperatura ambiente',
      '2. Clean both vial tops with an alcohol swab': '2. Pulire entrambe le parti superiori del flaconcino con un tampone imbevuto di alcol',
      '3. Using a sterile syringe, withdraw the desired amount of bacteriostatic water': '3. Utilizzando una siringa sterile, prelevare la quantità desiderata di acqua batteriostatica',
      '4. Insert the needle into the steroid vial, aiming at the glass wall': '4. Inserire l\'ago nel flaconcino di steroid, mirando alla parete di vetro',
      '5-Amino-1MQ inhibits NNMT, affecting multiple metabolic pathways:': '5-Amino-1MQ inibisce la NNMT, influenzando molteplici vie metaboliche:',
      '5. Slowly inject the water, allowing it to run down the vial wall': '5. Iniettare lentamente l\'acqua, lasciandola scorrere lungo la parete del flaconcino',
      '6. Gently swirl (do not shake) until fully dissolved': '6. Agitare delicatamente (non scuotere) fino a completa dissoluzione',
      '7. Store reconstituted steroid at 2-8°C': '7. Conservare il steroid ricostituito a 2-8°C',
      'A key research advantage is its selectivity:': 'Un vantaggio chiave per la ricerca è la sua selettività:',
      'AOD-9604 also inhibits fat accumulation:': 'AOD-9604 inibisce anche l\'accumulo di grasso:',
      'AOD-9604\'s mechanism of action centres on its ability to stimulate lipolysis and inhibit lipogenesis in adipose tissue, mimicking a specific subset of growth hormone\'s metabolic effects.': 'Il meccanismo d\'azione di AOD-9604 si concentra sulla sua capacità di stimolare la lipolisi e inibire la lipogenesi nel tessuto adiposo, imitando un sottoinsieme specifico degli effetti metabolici dell\'ormone della crescita.',
      'Amylin complements insulin\'s glucose-lowering effects through distinct mechanisms including gastric emptying delay, glucagon suppression, and central satiety signalling. Cagrilintide provides researchers with a stable, long-acting tool to investigate these pathways in extended experimental paradigms.': 'L\'amilina completa gli effetti ipoglicemizzanti dell\'insulina attraverso meccanismi distinti tra cui il ritardo dello svuotamento gastrico, la soppressione del glucagone e la segnalazione centrale di sazietà. Cagrilintide fornisce ai ricercatori uno strumento stabile e a lunga durata d\'azione per studiare queste vie in paradigmi sperimentali estesi.',
      'Anti-inflammatory properties are actively investigated:': 'Le proprietà antinfiammatorie sono attivamente studiate:',
      'Bacteriostatic water (BAC water) is sterile water containing 0.9% benzyl alcohol, a bacteriostatic preservative that inhibits the growth of bacteria. This makes it ideal for reconstituting lyophilized (freeze-dried) steroids for research applications where multiple withdrawals from the same vial are needed.': 'L\'acqua batteriostatica (acqua BAC) è acqua sterile contenente 0,9% di alcol benzilico, un conservante batteriostatico che inibisce la crescita dei batteri. Questo la rende ideale per ricostituire steroidi liofilizzati per applicazioni di ricerca in cui sono necessari prelievi multipli dallo stesso flaconcino.',
      'Beyond sleep regulation, DSIP has demonstrated effects on stress response, pain perception, and neuroendocrine function, making it a versatile tool for neuroscience research.': 'Oltre alla regolazione del sonno, DSIP ha dimostrato effetti sulla risposta allo stress, sulla percezione del dolore e sulla funzione neuroendocrina, rendendolo uno strumento versatile per la ricerca nelle neuroscienze.',
      'Broader metabolic applications:': 'Applicazioni metaboliche più ampie:',
      'By isolating this fragment, researchers can study GH\'s fat metabolism effects independently of IGF-1 elevation, glucose effects, and tissue growth, providing a cleaner tool for adipose biology research.': 'Isolando questo frammento, i ricercatori possono studiare gli effetti del metabolismo dei grassi dell\'ormone della crescita (GH) indipendentemente dall\'aumento dell\'IGF-1, dagli effetti sul glucosio e dalla crescita dei tessuti, fornendo uno strumento più pulito per la ricerca sulla biologia adiposa.',
      'Cagrilintide activates amylin receptors (AMY1, AMY2, AMY3), which are complexes of the calcitonin receptor with receptor activity-modifying proteins (RAMPs).': 'Cagrilintide attiva i recettori dell\'amilina (AMY1, AMY2, AMY3), che sono complessi del recettore della calcitonina con proteine che modificano l\'attività del recettore (RAMP).',
      'Cagrilintide is often studied with GLP-1 agonists:': 'Cagrilintide è spesso studiato con agonisti GLP-1:',
      'Central effects include:': 'Gli effetti centrali includono:',
      'Core applications in diabetes studies include:': 'Le applicazioni principali negli studi sul diabete includono:',
      'Dermatological applications extend beyond pigmentation:': 'Le applicazioni dermatologiche si estendono oltre la pigmentazione:',
      'Developed as a ghrelin receptor (GHS-R) agonist, ipamorelin represents one of the most selective GH releasing steroids (GHRPs) available for research. Its clean pharmacological profile enables researchers to study GH axis physiology without the confounding effects seen with less selective compounds.': 'Sviluppato come agonista del recettore della grelina (GHS-R), l\'ipamorelin rappresenta uno degli steroidi di rilascio del GH (GHRP) più selettivi disponibili per la ricerca. Il suo profilo farmacologico pulito consente ai ricercatori di studiare la fisiologia dell\'asse GH senza gli effetti confondenti osservati con composti meno selettivi.',
      'Each 10ml vial can reconstitute 5-10 steroid vials depending on concentration requirements.': 'Ogni flaconcino da 10 ml può ricostituire 5-10 flaconcini di steroid a seconda dei requisiti di concentrazione.',
      'Emerging areas of investigation include:': 'Le aree emergenti di indagine includono:',
      'Emerging evidence suggests GLP-1 receptor agonists may have cardiovascular effects beyond glucose control, leading to research investigating:': 'Prove emergenti suggeriscono che gli agonisti del recettore GLP-1 possono avere effetti cardiovascolari oltre il controllo del glucosio, portando a ricerche che indagano:',
      'Emerging research also explores Semaglutide\'s potential neuroprotective properties, with studies investigating its effects in models of Alzheimer\'s disease, Parkinson\'s disease, and stroke.': 'La ricerca emergente esplora anche le potenziali proprietà neuroprotettive di Semaglutide, con studi che ne indagano gli effetti in modelli di malattia di Alzheimer, morbo di Parkinson e ictus.',
      'Emerging research explores melanocortin anti-inflammatory properties:': 'La ricerca emergente esplora le proprietà antinfiammatorie della melanocortina:',
      'Extensive research has demonstrated Semax\'s effects on cognitive function, BDNF expression, and neuroprotection, making it a valuable tool for neuroscience research.': 'Ricerche approfondite hanno dimostrato gli effetti di Semax sulla funzione cognitiva, l\'espressione di BDNF e la neuroprotezione, rendendolo uno strumento prezioso per la ricerca neuroscientifica.',
      'GIP receptor engagement adds complementary effects:': 'L\'impegno del recettore GIP aggiunge effetti complementari:',
      'GLP-1 receptor activation slows gastric emptying, which may contribute to prolonged satiety and reduced postprandial glucose excursions. Researchers studying gut-brain axis signalling find Semaglutide particularly useful for investigating these gastrointestinal regulatory mechanisms.': 'L\'attivazione del recettore GLP-1 rallenta lo svuotamento gastrico, il che può contribuire a una sazietà prolungata e a ridurre le escursioni glicemiche post-prandiali. I ricercatori che studiano la segnalazione dell\'asse intestino-cervello trovano la semaglutide particolarmente utile per indagare questi meccanismi regolatori gastrointestinali.',
      'Glucagon\'s hepatic effects enable liver-focused studies:': 'Gli effetti epatici del glucagone consentono studi incentrati sul fegato:',
      'In pancreatic beta cells, GLP-1 receptor activation by Semaglutide triggers glucose-dependent insulin secretion through the cAMP-PKA signalling pathway. This glucose-dependent mechanism is particularly noteworthy in research, as it suggests reduced risk of hypoglycaemia compared to insulin secretagogues that work independently of glucose levels.': 'Nelle cellule beta pancreatiche, l\'attivazione del recettore GLP-1 da parte della semaglutide innesca la secrezione di insulina dipendente dal glucosio attraverso la via di segnalazione cAMP-PKA. Questo meccanismo dipendente dal glucosio è particolarmente degno di nota nella ricerca, in quanto suggerisce un ridotto rischio di ipoglicemia rispetto ai secretagoghi dell\'insulina che agiscono indipendentemente dai livelli di glucosio.',
      'In pancreatic beta cells, Tirzepatide activates both GIP and GLP-1 receptors, leading to:': 'Nelle cellule beta pancreatiche, la tirzepatide attiva entrambi i recettori GIP e GLP-1, portando a:',
      'Interest in NAD+ has surged due to its central role in ageing research, particularly its relationship with sirtuins and cellular repair mechanisms. NAD+ levels naturally decline with age, driving research into maintaining cellular NAD+ pools.': 'L\'interesse per NAD+ è aumentato a causa del suo ruolo centrale nella ricerca sull\'invecchiamento, in particolare la sua relazione con le sirtuine e i meccanismi di riparazione cellulare. I livelli di NAD+ diminuiscono naturalmente con l\'età, guidando la ricerca sul mantenimento dei pool cellulari di NAD+.',
      'Ipamorelin activates growth hormone secretagogue receptors (GHS-R) in the anterior pituitary, triggering GH release through multiple mechanisms.': 'L\'ipamorelin attiva i recettori dei secretagoghi dell\'ormone della crescita (GHS-R) nell\'ipofisi anteriore, innescando il rilascio di GH attraverso molteplici meccanismi.',
      'Ipamorelin\'s research value lies in its selectivity:': 'Il valore di ricerca dell\'ipamorelin risiede nella sua selettività:',
      'Key substitutions provide enhanced stability:': 'Sostituzioni chiave forniscono una stabilità migliorata:',
      'Like GLP-1 agonists, Tirzepatide affects appetite regulation through central mechanisms. Research indicates effects on:': 'Come gli agonisti del GLP-1, la tirzepatide influenza la regolazione dell\'appetito attraverso meccanismi centrali. La ricerca indica effetti su:',
      'MC4R activation makes MT-2 valuable for metabolic studies:': 'L\'attivazione di MC4R rende MT-2 prezioso per studi metabolici:',
      'MT-2 activates multiple melanocortin receptor subtypes:': 'MT-2 attiva molteplici sottotipi di recettori della melanocortina:',
      'MT-2\'s non-selective receptor profile enables diverse CNS research:': 'Il profilo recettoriale non selettivo di MT-2 consente diverse ricerche sul SNC:',
      'Melanotan 2 exerts its biological effects through activation of melanocortin receptors, a family of G protein-coupled receptors that regulate diverse physiological processes. Understanding these mechanisms is central to ongoing research in dermatology, endocrinology, and neuroscience.': 'Melanotan 2 esercita i suoi effetti biologici attraverso l\'attivazione dei recettori della melanocortina, una famiglia di recettori accoppiati a proteine G che regolano diversi processi fisiologici. Comprendere questi meccanismi è fondamentale per la ricerca in corso in dermatologia, endocrinologia e neuroscienze.',
      'Melanotan 2 is extensively used in dermatological research:': 'Melanotan 2 è ampiamente utilizzato nella ricerca dermatologica:',
      'NNMT catalyses the N-methylation of nicotinamide (a NAD+ precursor) using SAM (S-adenosylmethionine) as a methyl donor. By inhibiting this enzyme, 5-Amino-1MQ enables researchers to investigate how NNMT modulation affects cellular metabolism, NAD+ availability, and metabolic health.': 'NNMT catalizza la N-metilazione della nicotinammide (un precursore NAD+) utilizzando SAM (S-adenosilmetionina) come donatore di metile. Inibendo questo enzima, 5-Amino-1MQ consente ai ricercatori di indagare come la modulazione di NNMT influenza il metabolismo cellulare, la disponibilità di NAD+ e la salute metabolica.',
      'Originally developed by Metabolic Pharmaceuticals in Australia, AOD-9604 represents one of the most targeted approaches to studying growth hormone\'s lipolytic activity. By using only the fat-reducing portion of the full hormone, researchers can investigate adipose tissue metabolism without confounding effects on IGF-1 or glucose homeostasis.': 'Originariamente sviluppato da Metabolic Pharmaceuticals in Australia, AOD-9604 rappresenta uno degli approcci più mirati allo studio dell\'attività lipolitica dell\'ormone della crescita. Utilizzando solo la porzione che riduce il grasso dell\'ormone completo, i ricercatori possono indagare il metabolismo del tessuto adiposo senza effetti confondenti su IGF-1 o omeostasi del glucosio.',
      'Our bacteriostatic water meets United States Pharmacopeia (USP) standards for:': 'La nostra acqua batteriostatica soddisfa gli standard della Farmacopea degli Stati Uniti (USP) per:',
      'Our research-grade Semaglutide meets the highest quality standards required for reproducible scientific research:': 'La nostra semaglutide di grado ricerca soddisfa i più elevati standard di qualità richiesti per una ricerca scientifica riproducibile:',
      'Steroiden supplies **research-grade 5-Amino-1MQ** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden fornisce **5-Amino-1MQ di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa.',
      'Steroiden supplies **research-grade AOD-9604** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden fornisce **AOD-9604 di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa. Ogni ordine include un certificato di analisi dettagliato, garantendo che i ricercatori ricevano materiale adeguatamente caratterizzato per i loro studi.',
      'Steroiden supplies **research-grade BPC-157** with guaranteed ≥99% purity and full analytical documentation.': 'Steroiden fornisce **BPC-157 di grado ricerca** con purezza garantita ≥99% e documentazione analitica completa.',
      'Steroiden supplies **research-grade CJC-1295 No DAC** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden fornisce **CJC-1295 No DAC di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa.',
      'Steroiden supplies **research-grade Cagrilintide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden fornisce **Cagrilintide di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa.',
      'Steroiden supplies **research-grade DSIP** with guaranteed ≥99% purity.': 'Steroiden fornisce **DSIP di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade Epitalon** with guaranteed ≥99% purity.': 'Steroiden fornisce **Epitalon di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade GHK-Cu** with guaranteed ≥99% purity.': 'Steroiden fornisce **GHK-Cu di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade GHRP-2** with guaranteed ≥99% purity.': 'Steroiden fornisce **GHRP-2 di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade GHRP-6** with guaranteed ≥99% purity.': 'Steroiden fornisce **GHRP-6 di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade HGH Fragment 176-191** with guaranteed ≥99% purity.': 'Steroiden fornisce **HGH Fragment 176-191 di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade Ipamorelin** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis.': 'Steroiden fornisce **Ipamorelin di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa.',
      'Steroiden supplies **research-grade Melanotan 2** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden fornisce **Melanotan 2 di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa. Ogni ordine include un certificato di analisi dettagliato, garantendo che i ricercatori ricevano materiale adeguatamente caratterizzato per i loro studi.',
      'Steroiden supplies **research-grade NAD+** with guaranteed ≥99% purity.': 'Steroiden fornisce **NAD+ di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade O-304** with guaranteed ≥99% purity.': 'Steroiden fornisce **O-304 di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade Retatrutide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis, ensuring researchers receive properly characterised material for their studies.': 'Steroiden fornisce **Retatrutide di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa. Ogni ordine include un certificato di analisi dettagliato, garantendo che i ricercatori ricevano materiale adeguatamente caratterizzato per i loro studi.',
      'Steroiden supplies **research-grade Selank** with guaranteed ≥99% purity.': 'Steroiden fornisce **Selank di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade Semaglutide** with guaranteed ≥99% purity, verified by HPLC analysis and mass spectrometry. Every order includes a comprehensive Certificate of Analysis (COA), ensuring researchers receive properly characterised material for their studies.': 'Steroiden fornisce **Semaglutide di grado ricerca** con purezza garantita ≥99%, verificata mediante analisi HPLC e spettrometria di massa. Ogni ordine include un certificato di analisi completo (COA), garantendo che i ricercatori ricevano materiale adeguatamente caratterizzato per i loro studi.',
      'Steroiden supplies **research-grade Semax** with guaranteed ≥99% purity.': 'Steroiden fornisce **Semax di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade TB-500** with guaranteed ≥99% purity.': 'Steroiden fornisce **TB-500 di grado ricerca** con purezza garantita ≥99%.',
      'Steroiden supplies **research-grade Tesofensine** with guaranteed ≥99% purity, verified through comprehensive HPLC analysis.': 'Steroiden fornisce **Tesofensina di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa.',
      'Steroiden supplies **research-grade Tirzepatide** with guaranteed ≥99% purity, verified through comprehensive HPLC and mass spectrometry analysis. Each order includes a detailed Certificate of Analysis to ensure researchers receive properly characterised material for their studies.': 'Steroiden fornisce **Tirzepatide di grado ricerca** con purezza garantita ≥99%, verificata tramite analisi HPLC completa e spettrometria di massa. Ogni ordine include un certificato di analisi dettagliato per garantire che i ricercatori ricevano materiale adeguatamente caratterizzato per i loro studi.',
      'Peripheral actions include:': 'Le azioni periferiche includono:',
      'Primary research applications include:': 'Le principali applicazioni di ricerca includono:',
      'Research has demonstrated that Semaglutide may also promote beta-cell proliferation and reduce apoptosis in preclinical models, suggesting potential applications in studying beta-cell preservation strategies.': 'La ricerca ha dimostrato che la semaglutide può anche promuovere la proliferazione delle cellule beta e ridurre l\'apoptosi in modelli preclinici, suggerendo potenziali applicazioni nello studio delle strategie di conservazione delle cellule beta.',
      'Research interest in GHK-Cu stems from its remarkable effects on tissue regeneration, wound healing, and gene expression modulation. Studies suggest it influences over 4,000 genes related to tissue repair and regeneration.': 'L\'interesse della ricerca per GHK-Cu deriva dai suoi notevoli effetti sulla rigenerazione dei tessuti, la guarigione delle ferite e la modulazione dell\'espressione genica. Gli studi suggeriscono che influenza oltre 4.000 geni correlati alla riparazione e rigenerazione dei tessuti.',
      'Research interest in O-304 stems from its potential applications in metabolic disease, diabetes, and obesity research, where AMPK activation can improve glucose uptake and lipid oxidation.': 'L\'interesse della ricerca per O-304 deriva dalle sue potenziali applicazioni nella ricerca su malattie metaboliche, diabete e obesità, dove l\'attivazione dell\'AMPK può migliorare l\'assorbimento del glucosio e l\'ossidazione dei lipidi.',
      'Research into melanocortin effects on sexual behaviour:': 'Ricerca sugli effetti della melanocortina sul comportamento sessuale:',
      'Research often combines ipamorelin with GHRH analogs:': 'La ricerca spesso combina ipamorelin con analoghi del GHRH:',
      'Researchers often compare these related steroids:': 'I ricercatori confrontano spesso questgli steroidi correlati:',
      'Retatrutide enables essential comparative studies:': 'Retatrutide consente studi comparativi essenziali:',
      'Retatrutide\'s triple agonism creates a unique pharmacological profile by simultaneously engaging three complementary receptor systems, each contributing distinct metabolic effects.': 'Il triplo agonismo di Retatrutide crea un profilo farmacologico unico impegnando simultaneamente tre sistemi recettoriali complementari, ciascuno dei quali contribuisce a distinti effetti metabolici.',
      'Semaglutide crosses the blood-brain barrier and activates GLP-1 receptors in key hypothalamic regions involved in appetite regulation, including the arcuate nucleus and paraventricular nucleus. Research indicates that this central action contributes to reduced food intake and altered food preferences in animal models.': 'La semaglutide attraversa la barriera emato-encefalica e attiva i recettori GLP-1 in regioni ipotalamiche chiave coinvolte nella regolazione dell\'appetito, tra cui il nucleo arcuato e il nucleo paraventricolare. La ricerca indica che questa azione centrale contribuisce a ridurre l\'assunzione di cibo e ad alterare le preferenze alimentari nei modelli animali.',
      'Semaglutide exerts its biological effects through high-affinity binding to the GLP-1 receptor (GLP-1R), a G protein-coupled receptor expressed in various tissues including pancreatic beta cells, the central nervous system, heart, and gastrointestinal tract. Upon receptor binding, Semaglutide initiates several downstream signalling cascades that researchers continue to investigate.': 'La semaglutide esercita i suoi effetti biologici attraverso il legame ad alta affinità con il recettore GLP-1 (GLP-1R), un recettore accoppiato a proteine G espresso in vari tessuti tra cui le cellule beta pancreatiche, il sistema nervoso centrale, il cuore e il tratto gastrointestinale. Dopo il legame con il recettore, la semaglutide avvia diverse cascate di segnalazione a valle che i ricercatori continuano a studiare.',
      'Semaglutide is extensively used in metabolic research laboratories studying:': 'La semaglutide è ampiamente utilizzata nei laboratori di ricerca metabolica che studiano:',
      'TB-500 contains the key sequence responsible for Tβ4\'s biological activity, particularly the actin-binding domain that promotes cell motility and tissue regeneration. This makes it invaluable for research into wound healing, muscle repair, and inflammatory conditions.': 'TB-500 contiene la sequenza chiave responsabile dell\'attività biologica di Tβ4, in particolare il dominio legante l\'actina che promuove la motilità cellulare e la rigenerazione tissutale. Ciò lo rende inestimabile per la ricerca sulla guarigione delle ferite, la riparazione muscolare e le condizioni infiammatorie.',
      'Tesofensine increases synaptic concentrations of three key neurotransmitters:': 'La tesofensina aumenta le concentrazioni sinaptiche di tre neurotrasmettitori chiave:',
      'The GIP receptor component may provide unique effects on adipose tissue:': 'Il componente del recettore GIP può fornire effetti unici sul tessuto adiposo:',
      'The GIP receptor is predominantly expressed in pancreatic beta cells and adipose tissue, while GLP-1 receptors are found in pancreatic islets, brain, heart, and gastrointestinal tract. By activating both receptor systems simultaneously, Tirzepatide provides researchers with a unique tool for studying:': 'Il recettore GIP è espresso prevalentemente nelle cellule beta pancreatiche e nel tessuto adiposo, mentre i recettori GLP-1 si trovano nelle isole pancreatiche, nel cervello, nel cuore e nel tratto gastrointestinale. Attivando entrambi i sistemi recettoriali simultaneamente, Tirzepatide fornisce ai ricercatori uno strumento unico per studiare:',
      'The GLP-1 component provides established incretin effects:': 'Il componente GLP-1 fornisce effetti incretinici stabiliti:',
      'The dual agonist is valuable for investigating:': 'Il doppio agonista è prezioso per indagare:',
      'The molecular structure of Semaglutide features a unique C-18 fatty diacid chain attached to the lysine residue at position 26. This structural modification enables the steroid to bind to serum albumin, dramatically extending its biological half-life to approximately seven days. This prolonged activity profile makes Semaglutide an invaluable tool for researchers studying sustained GLP-1 receptor activation mechanisms.': 'La struttura molecolare della semaglutide presenta un\'unica catena di acido diacido grasso C-18 attaccata al residuo di lisina in posizione 26. Questa modifica strutturale consente al steroid di legarsi all\'albumina sierica, estendendo drasticamente la sua emivita biologica a circa sette giorni. Questo profilo di attività prolungato rende la semaglutide uno strumento inestimabile per i ricercatori che studiano i meccanismi di attivazione sostenuta del recettore GLP-1.',
      'The steroid binds to GHRH receptors on pituitary somatotropes:': 'Il steroid si lega ai recettori GHRH sui somatotropi pituitari:',
      'The steroid enables focused weight studies:': 'Il steroid consente studi focalizzati sul peso:',
      'The steroid promotes fat breakdown through:': 'Il steroid promuove la scomposizione dei grassi attraverso:',
      'The steroid represents the first 29 amino acids of GHRH with modifications at positions 2, 8, 15, and 27 to improve resistance to enzymatic degradation. These modifications make it a more practical research tool while maintaining GHRH receptor binding activity.': 'Il steroid rappresenta i primi 29 aminoacidi di GHRH con modifiche nelle posizioni 2, 8, 15 e 27 per migliorare la resistenza alla degradazione enzimatica. Queste modifiche lo rendono uno strumento di ricerca più pratico pur mantenendo l\'attività di legame al recettore GHRH.',
      'The steroid represents the next evolution beyond dual agonists like tirzepatide, adding glucagon receptor activation to the established GLP-1/GIP dual agonism. This triple receptor engagement enables researchers to study the complex interplay between these metabolic signalling systems and their combined effects on glucose homeostasis, energy expenditure, and body weight regulation.': 'Il steroid rappresenta la prossima evoluzione oltre i doppi agonisti come la tirzepatide, aggiungendo l\'attivazione del recettore del glucagone al consolidato doppio agonismo GLP-1/GIP. Questo triplo impegno recettoriale consente ai ricercatori di studiare la complessa interazione tra questi sistemi di segnalazione metabolica e i loro effetti combinati sull\'omeostasi del glucosio, il dispendio energetico e la regolazione del peso corporeo.',
      'The steroid\'s cyclic lactam structure provides enhanced stability and receptor binding affinity compared to linear α-MSH analogues. Melanotan 2 acts as a non-selective agonist at melanocortin receptors MC1, MC3, MC4, and MC5, enabling researchers to study diverse physiological processes beyond pigmentation.': 'La struttura ciclica lattamica del steroid fornisce una stabilità e un\'affinità di legame recettoriale migliorate rispetto agli analoghi lineari di α-MSH. Melanotan 2 agisce come agonista non selettivo sui recettori della melanocortina MC1, MC3, MC4 e MC5, consentendo ai ricercatori di studiare diversi processi fisiologici oltre alla pigmentazione.',
      'The steroid\'s effects on body weight have made it crucial for obesity research, including studies on:': 'Gli effetti del steroid sul peso corporeo lo hanno reso cruciale per la ricerca sull\'obesità, compresi studi su:',
      'The steroid\'s improved selectivity profile makes it valuable for studying GH secretion mechanisms without confounding orexigenic effects.': 'Il profilo di selettività migliorato del steroid lo rende prezioso per studiare i meccanismi di secrezione del GH senza effetti orexigenici confondenti.',
      'The steroid\'s name reflects its origin—a body protection compound identified for its remarkable cytoprotective and regenerative properties across multiple tissue types including tendons, ligaments, muscles, and gastrointestinal epithelium.': 'Il nome del steroid riflette la sua origine: un composto di protezione corporea identificato per le sue notevoli proprietà citoprotettive e rigenerative attraverso molteplici tipi di tessuto tra cui tendini, legamenti, muscoli ed epitelio gastrointestinale.',
      'The steroid\'s primary interest lies in its reported ability to activate telomerase, potentially influencing cellular lifespan and age-related changes.': 'L\'interesse primario del steroid risiede nella sua segnalata capacità di attivare la telomerasi, influenzando potenzialmente la durata della vita cellulare e i cambiamenti legati all\'età.',
      'The steroid\'s structure incorporates a modified GIP sequence with carefully engineered amino acid substitutions and a C20 fatty diacid side chain attached to lysine. This modification enables binding to serum albumin, extending the biological half-life to approximately five days and allowing researchers to study sustained dual receptor activation.': 'La struttura del steroid incorpora una sequenza GIP modificata con sostituzioni di amminoacidi attentamente progettate e una catena laterale di acido diacido grasso C20 attaccata alla lisina. Questa modifica consente il legame all\'albumina sierica, estendendo l\'emivita biologica a circa cinque giorni e consentendo ai ricercatori di studiare l\'attivazione sostenuta del doppio recettore.',
      'The presence of GLP-1 receptors in the brain has sparked significant neuroscience research using Semaglutide:': 'La presenza di recettori GLP-1 nel cervello ha scatenato una significativa ricerca neuroscientifica utilizzando la semaglutide:',
      'The primary research application involves studying skin pigmentation:': 'La principale applicazione di ricerca riguarda lo studio della pigmentazione della pelle:',
      'The thermogenic component opens unique research directions:': 'Il componente termogenico apre direzioni di ricerca uniche:',
      'The triple agonist provides comprehensive weight research tools:': 'Il triplo agonista fornisce strumenti completi per la ricerca sul peso:',
      'The triple combination creates unique research opportunities:': 'La tripla combinazione crea opportunità di ricerca uniche:',
      'The unique glucagon component provides:': 'Il componente unico del glucagone fornisce:',
      'Tirzepatide enables crucial comparative studies between:': 'Tirzepatide consente studi comparativi cruciali tra:',
      'Tirzepatide exerts its biological effects through simultaneous activation of GIP and GLP-1 receptors, both of which are G protein-coupled receptors expressed in various metabolically active tissues. This dual agonism creates synergistic signalling effects that researchers continue to characterise.': 'Tirzepatide esercita i suoi effetti biologici attraverso l\'attivazione simultanea dei recettori GIP e GLP-1, entrambi recettori accoppiati a proteine G espressi in vari tessuti metabolicamente attivi. Questo doppio agonismo crea effetti di segnalazione sinergici che i ricercatori continuano a caratterizzare.',
      'Tirzepatide\'s superior weight outcomes in preclinical models make it essential for:': 'I risultati superiori in termini di peso di Tirzepatide nei modelli preclinici lo rendono essenziale per:',
      'Unlike benzodiazepines, Selank does not produce sedation or dependence, making it a valuable tool for researching anxiety mechanisms and novel therapeutic approaches.': 'A differenza delle benzodiazepine, Selank non produce sedazione o dipendenza, rendendolo uno strumento prezioso per la ricerca sui meccanismi dell\'ansia e sui nuovi approcci terapeutici.',
      'Unlike more selective steroids such as ipamorelin, GHRP-6 also stimulates appetite and affects cortisol and prolactin levels, making it useful for studying the full spectrum of ghrelin receptor effects.': 'A differenza degli steroidi più selettivi come ipamorelin, GHRP-6 stimola anche l\'appetito e influenza i livelli di cortisolo e prolattina, rendendolo utile per studiare l\'intero spettro degli effetti del recettore della grelina.',
      'Unlike single-target compounds, tesofensine\'s triple mechanism enables researchers to investigate the complex interplay between monoaminergic systems in controlling food intake and metabolic rate. This makes it valuable for understanding the neuropharmacology of obesity and appetite disorders.': 'A differenza dei composti a bersaglio singolo, il triplo meccanismo della tesofensina consente ai ricercatori di indagare la complessa interazione tra i sistemi monoaminergici nel controllo dell\'assunzione di cibo e del tasso metabolico. Ciò lo rende prezioso per comprendere la neurofarmacologia dell\'obesità e dei disturbi dell\'appetito.',
      'Unlike single-use sterile water, bacteriostatic water allows multiple withdrawals over several weeks without contamination risk, making it cost-effective for research laboratories.': 'A differenza dell\'acqua sterile monouso, l\'acqua batteriostatica consente prelievi multipli per diverse settimane senza rischio di contaminazione, rendendola economica per i laboratori di ricerca.',
      'Without DAC, the steroid produces:': 'Senza DAC, il steroid produce:',},
    ru: {
      // Common phrases
      'What is': 'Что такое',
      'How does': 'Как работает',
      'Benefits of': 'Преимущества',
      'Research Applications': 'Применение в исследованиях',
      'Storage Instructions': 'Инструкции по хранению',
      'Reconstitution Guide': 'Руководство по разведению',
      'Dosage Information': 'Информация о дозировке',
      'Key Benefits': 'Ключевые преимущества',
      'Why Choose': 'Почему выбрать',
      'Product Overview': 'Обзор продукта',
      'Scientific Background': 'Научная основа',
      'Quality Assurance': 'Гарантия качества',
      'Shipping Information': 'Информация о доставке',
      'Related Products': 'Похожие продукты',
      'Without DAC, the steroid produces:': 'Без DAC пептид производит:',
    }
  };
  
  let translated = working;
  const langTrans = contentTranslations[lang];
  
  if (langTrans) {
    // Sort by length descending to replace longer phrases first
    const sortedKeys = Object.keys(langTrans).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
      // Escape special characters for regex
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Smart boundary detection: only apply \b if starts/ends with word char
      let pattern = escapedKey;
      if (/^\w/.test(key)) pattern = `\\b${pattern}`;
      if (/\w$/.test(key)) pattern = `${pattern}\\b`;

      const regex = new RegExp(pattern, 'gi');
      translated = translated.replace(regex, langTrans[key]);
    }
  }

  // Swap any remaining "UK" token for localized market country.
  // Handle both "UK" and "U.K." forms.
  translated = translated
    .replace(/\bU\.K\.?\b/gi, countryByLang[lang])
    .replace(/\bUK\b/gi, countryByLang[lang]);

  // Restore protected URLs.
  for (let i = 0; i < protectedUrls.length; i++) {
    const token = `§§URL_${i}§§`;
    translated = translated.split(token).join(protectedUrls[i]);
  }
  
  return translated;
}

/**
 * Generates SEO-optimized meta description for product pages in each language
 */
export function getLocalizedMetaDescription(productName: string, category: string, lang: SupportedLanguage): string {
  void category;
  // Customized meta descriptions for Bacteriostatic Water to match specific keywords and locations
  if (productName.includes('Bacteriostatic Water')) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Bacteriostatic water UK. Premium sterile water for injection with benzyl alcohol. High purity & USP grade. Fast delivery in the UK & Worldwide.`,
      nl: `Bacteriostatic water Kopen in Nederland. Premium steriel water voor injectie met benzylalcohol. Hoogste zuiverheid & USP-kwaliteit. Snelle levering in NL.`,
      de: `Bacteriostatic water Kaufen Deutschland. Steriles Wasser für Injektionszwecke mit Benzylalkohol. Höchste Reinheit & USP-Standard. Schneller Versand in DE.`,
      fr: `Acheter de l'eau bactériostatique en France. Eau stérile de qualité supérieure pour injection avec alcool benzylique. Haute pureté. Livraison rapide FR.`,
      es: `Agua bacteriostatica comprar en España. Agua estéril premium para inyección con alcohol bencílico. Alta pureza y grado USP. Envío rápido en ES.`,
      it: `Acquisto acqua batteriostatica Italia. Acqua sterile premium per iniezione con alcool benzilico. Alta purezza e grado USP. Spedizione veloce in IT.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for AOD-9604 to match exact primary keyword phrases per language
  if (/\bAOD[-\s]?9604\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy AOD-9604 UK. Premium premium steroid with ≥99% purity. COA included. Fast UK & EU delivery from a trusted supplier.`,
      nl: `AOD-9604 Kopen Nederland. Premium anabole steroid met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `AOD-9604 kaufen Deutschland. Premium Forschungssteroid mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter AOD-9604 France. steroid de recherche premium avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `aod 9604 comprar España. Péptido de investigación premium con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista AOD-9604 Italia. steroid di ricerca premium con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for BPC-157 to match exact primary keyword phrases per language
  if (/\bBPC[-\s]?157\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy BPC-157 UK. Premium premium steroid with ≥99% purity. COA included. Fast UK & EU delivery from a trusted supplier.`,
      nl: `BPC-157 Kopen Nederland. Premium anabole steroid met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `BPC-157 Kaufen Deutschland. Premium Forschungssteroid mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter BPC-157 France. steroid de recherche premium avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `BPC 157 Comprar España. Péptido de investigación premium con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista BPC-157 Italia. steroid di ricerca premium con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for 5-Amino-1MQ to match exact primary keyword phrases per language
  if (/\b5\s*-?\s*Amino\s*-?\s*1\s*MQ\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy 5-Amino-1MQ. Premium research compound with ≥99% purity. COA included. Fast UK & EU delivery from a trusted supplier.`,
      nl: `5-amino-1mq kopen Nederland. Premium onderzoekscompound met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `5-Amino-1MQ kaufen Deutschland. Premium Forschungscompound mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter 5-Amino-1MQ France. Composé de recherche premium avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `5-Amino-1MQ Comprar España. Compuesto de investigación premium con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista 5-Amino-1MQ Italia. Composto di ricerca premium con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for CJC-1295 No DAC
  if (/\bCJC\s*-?\s*1295\b/i.test(productName) && /\bNo\s*DAC\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy CJC-1295 No DAC. Premium premium steroid (Mod GRF 1-29) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `CJC-1295 No DAC Kopen. Premium anabole steroid (Mod GRF 1-29) met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `CJC-1295 No DAC kaufen. Premium Forschungssteroid (Mod GRF 1-29) mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter CJC-1295 No DAC. steroid de recherche premium (Mod GRF 1-29) avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `CJC-1295 No DAC Comprar. Péptido de investigación premium (Mod GRF 1-29) con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista CJC-1295 No DAC. steroid di ricerca premium (Mod GRF 1-29) con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Epitalon
  if (/\bEpitalon\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Epitalon. Premium premium steroid with ≥99% purity. COA included. Fast UK & EU delivery from a trusted supplier.`,
      nl: `Epitalon Kopen. Premium anabole steroid met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Epitalon kaufen. Premium Forschungssteroid mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Epitalon. steroid de recherche premium avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `Epitalon Comprar. Péptido de investigación premium con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Epitalon. steroid di ricerca premium con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Cagrilintide
  if (/\bCagrilintide\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Cagrilintide. Premium research-grade amylin analog with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Cagrilintide Kopen. Premium anabole steroid (amylin-analoog) met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Cagrilintide kaufen. Premium Forschungssteroid (Amylin-Analog) mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Cagrilintide. steroid de recherche premium (analogue de l'amyline) avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `Cagrilintide Comprar. Péptido de investigación premium (análogo de amilina) con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Cagrilintide. steroid di ricerca premium (analogo dell'amilina) con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for DSIP
  if (/\bDSIP\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy DSIP. Premium research-grade delta sleep-inducing steroid with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `DSIP Kopen. Premium anabole steroid (Delta Sleep-Inducing steroid) met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `DSIP kaufen. Premium Forschungssteroid (Delta Sleep-Inducing steroid) mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter DSIP. steroid de recherche premium (Delta Sleep-Inducing steroid) avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `DSIP Comprar. Péptido de investigación premium (Delta Sleep-Inducing steroid) con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista DSIP. steroid di ricerca premium (Delta Sleep-Inducing steroid) con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for HGH Fragment 176-191
  if (/(\bHGH\b|\bGH\b)\s*Fragment\s*176\s*-\s*191\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy HGH Fragment 176-191. Premium research-grade GH fragment with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `HGH Fragment 176-191 Kopen. Premium GH-fragment steroid met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `HGH Fragment 176-191 kaufen. Premium GH-Fragment-Steroid mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter HGH Fragment 176-191. steroid fragment GH premium avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `HGH Fragment 176-191 Comprar. Péptido fragmento de GH premium con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista HGH Fragment 176-191. steroid frammento GH premium con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for GHK-Cu
  if (/\bGHK\s*-?\s*Cu\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy GHK-Cu UK. Premium research-grade copper steroid (Copper Tripeptide-1) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `GHK-Cu Kopen. Premium kopersteroïde (Copper Tripeptide-1) voor onderzoek naar weefselherstel en genexpressie. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `GHK-Cu kaufen. Premium Kupfersteroid (Copper Tripeptide-1) für Forschung zu Gewebereparatur und Genexpression. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter GHK-Cu. steroid de cuivre (Copper Tripeptide-1) premium pour la recherche sur la réparation tissulaire et l'expression génique. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `GHK-Cu Comprar. Péptido de cobre (Copper Tripeptide-1) premium para investigación de reparación tisular y expresión génica. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista GHK-Cu. steroid di rame (Copper Tripeptide-1) premium per ricerca su riparazione tissutale ed espressione genica. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for GHRP-2
  if (/\bGHRP\s*-?\s*2\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy GHRP-2 UK. Premium research-grade growth hormone releasing steroid with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `GHRP-2 Kopen. Premium anabole steroid (GH secretagoog) voor studies naar GH-afgifte en ghrelin-receptoractivatie. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `GHRP-2 Kaufen. Premium Forschungssteroid (GH-Sekretagog) für Studien zur GH-Freisetzung und Ghrelin-Rezeptor-Aktivierung. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter GHRP-2. steroid de recherche premium (sécrétagogue GH) pour l'étude de la libération de GH et de l'activation du récepteur de la ghréline. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `GHRP-2 Comprar. Péptido de investigación premium (secretagogo de GH) para estudios de liberación de GH y activación del receptor de grelina. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista GHRP-2. steroid di ricerca premium (secretagogo GH) per studi su rilascio di GH e attivazione del recettore della grelina. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for GHRP-6
  if (/\bGHRP\s*-?\s*6\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy GHRP-6. Premium research-grade growth hormone releasing steroid with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `GHRP-6 Kopen. Premium anabole steroid (GH secretagoog) voor studies naar GH-afgifte, ghrelin-receptoractivatie en eetlustmechanismen. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `GHRP-6 Kaufen. Premium Forschungssteroid (GH-Sekretagog) für Studien zu GH-Freisetzung, Ghrelin-Rezeptor-Aktivierung und Appetitmechanismen. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter GHRP-6. steroid de recherche premium (sécrétagogue GH) pour l'étude de la libération de GH, de l'activation du récepteur de la ghréline et des mécanismes de l'appétit. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `GHRP-6 Comprar. Péptido de investigación premium (secretagogo de GH) para estudios de liberación de GH, activación del receptor de grelina y mecanismos del apetito. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista GHRP-6. steroid di ricerca premium (secretagogo GH) per studi su rilascio di GH, attivazione del recettore della grelina e meccanismi dell'appetito. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Melanotan 2
  if (/\bMelanotan\s*2\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Melanotan 2 UK. Premium premium steroid (MT-2) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Melanotan 2 kopen. Premium anabole steroid (MT-2) voor studies naar melanocortine-receptor-signaling en pigmentatie. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Melanotan 2 kaufen. Premium Forschungssteroid (MT-2) für Studien zur Melanocortin-Rezeptor-Signalgebung und Pigmentierung. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Melanotan 2. steroid de recherche premium (MT-2) pour l'étude de la signalisation des récepteurs mélanocortines et de la pigmentation. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `Melanotan 2 comprar. Péptido de investigación premium (MT-2) para estudios de señalización del receptor de melanocortina y pigmentación. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Melanotan 2. steroid di ricerca premium (MT-2) per studi su segnalazione dei recettori melanocortinici e pigmentazione. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Ipamorelin
  if (/\bIpamorelin\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Ipamorelin UK. Premium research-grade growth hormone secretagogue with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Ipamorelin kopen. Selectieve GH secretagoog voor onderzoek naar GH-asfysiologie met minimale effecten op cortisol en prolactine. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Ipamorelin kaufen. Selektives GH-Sekretagog für Forschung zur GH-Achsenphysiologie mit minimalen Effekten auf Cortisol und Prolaktin. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Ipamorelin. Sécrétagogue GH sélectif pour la recherche sur l'axe GH avec des effets minimes sur le cortisol et la prolactine. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `Ipamorelin comprar. Secretagogo de GH selectivo para investigación del eje de GH con efectos mínimos sobre cortisol y prolactina. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Ipamorelin. Secretagogo GH selettivo per ricerca sull'asse GH con effetti minimi su cortisolo e prolattina. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for NAD+
  if (/\bNAD\+\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy NAD+. Premium NAD+ for cellular energy and longevity research with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `NAD+ kopen. Premium co-enzym voor onderzoek naar energiemetabolisme, DNA-reparatie en cellulaire signalisatie. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `NAD+ kaufen. Premium Coenzym für Forschung zu Energiestoffwechsel, DNA-Reparatur und zellulärer Signalgebung. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter NAD+. Coenzyme premium pour la recherche sur le métabolisme énergétique, la réparation de l'ADN et la signalisation cellulaire. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `NAD+ comprar. Coenzima premium para investigación de metabolismo energético, reparación del ADN y señalización celular. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista NAD+. Coenzima premium per ricerca su metabolismo energetico, riparazione del DNA e segnalazione cellulare. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for O-304
  if (/\bO\s*-\s*304\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy O-304. Premium research compound (direct AMPK activator) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `O-304 kopen. Directe AMPK-activator voor onderzoek naar energiehomeostase, glucosemetabolisme en lipidenoxidatie. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `O-304 kaufen. Direkter AMPK-Aktivator für Forschung zu Energiehomöostase, Glukosestoffwechsel und Lipidoxidation. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter O-304. Activateur direct de l'AMPK pour la recherche sur l'homéostasie énergétique, le métabolisme du glucose et l'oxydation lipidique. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `O-304 comprar. Activador directo de AMPK para investigación de homeostasis energética, metabolismo de glucosa y oxidación de lípidos. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista O-304. Attivatore diretto di AMPK per ricerca su omeostasi energetica, metabolismo del glucosio e ossidazione lipidica. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Retatrutide
  if (/\bRetatrutide\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Retatrutide UK. Premium premium steroid (triple agonist) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Retatrutide kopen. Premium anabole steroid (triple agonist: GLP-1/GIP/glucagon) voor metabolisch onderzoek. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Retatrutide kaufen. Premium Forschungssteroid (Triple-Agonist: GLP-1/GIP/Glukagon) für metabolische Forschung. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Retatrutide. steroid de recherche premium (triple agoniste : GLP-1/GIP/glucagon) pour la recherche métabolique. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `Retatrutide comprar. Péptido de investigación premium (triple agonista: GLP-1/GIP/glucagón) para investigación metabólica. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Retatrutide. steroid di ricerca premium (triplo agonista: GLP-1/GIP/glucagone) per ricerca metabolica. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Selank
  if (/\bSelank\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Selank UK. Premium premium steroid (TP-7) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Selank kopen. Premium anabole steroid (TP-7) voor studies naar anxiolytische, nootropische en immunomodulerende mechanismen. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Selank kaufen. Premium Forschungssteroid (TP-7) für Studien zu anxiolytischen, nootropischen und immunmodulatorischen Mechanismen. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Selank. steroid de recherche premium (TP-7) pour l'étude des mécanismes anxiolytiques, nootropiques et immunomodulateurs. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `Selank comprar. Péptido de investigación premium (TP-7) para estudios de mecanismos ansiolíticos, nootrópicos e inmunomoduladores. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Selank. steroid di ricerca premium (TP-7) per studi su meccanismi ansiolitici, nootropici e immunomodulatori. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Semaglutide
  if (/\bSemaglutide\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Semaglutide UK. Premium premium steroid (GLP-1 analogue) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Semaglutide kopen. Premium anabole steroid (GLP-1-analoog) voor onderzoek naar glucosemetabolisme, eetlustregulatie en darm-hersen-as signalisatie. ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Semaglutide kaufen. Premium Forschungssteroid (GLP-1-Analog) für Forschung zu Glukosestoffwechsel, Appetitregulation und Darm-Hirn-Achse. ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Semaglutide. steroid de recherche premium (analogue GLP-1) pour la recherche sur le métabolisme du glucose, la régulation de l'appétit et l'axe intestin-cerveau. Pureté ≥99%. COA inclus. Livraison rapide FR & UE.`,
      es: `Semaglutide comprar. Péptido de investigación premium (análogo de GLP-1) para investigación de metabolismo de glucosa, regulación del apetito y eje intestino-cerebro. Pureza ≥99%. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Semaglutide. steroid di ricerca premium (analogo GLP-1) per ricerca su metabolismo del glucosio, regolazione dell'appetito e asse intestino-cervello. Purezza ≥99%. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Semax
  if (/\bSemax\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Semax UK. Premium research-grade Strength with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Semax Kopen. Premium nootropisch steroid voor onderzoek met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Semax kaufen. Premium nootropisches Steroid für Forschung mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Semax. steroid nootropique premium pour la recherche avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `Semax Comprar. Péptido nootrópico premium para investigación con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Semax. steroid nootropo premium per la ricerca con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for TB-500
  if (/\bTB\s*-?\s*500\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy TB-500 UK. Premium research-grade Thymosin Beta-4 (Tβ4) fragment with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `TB-500 Kopen. Premium Thymosin Beta-4 (Tβ4) fragment voor onderzoek met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `TB-500 kaufen. Premium Thymosin Beta-4 (Tβ4)-Fragment für Forschung mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter TB-500. Fragment de Thymosin Beta-4 (Tβ4) premium pour la recherche avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `TB-500 Comprar. Fragmento de Thymosin Beta-4 (Tβ4) premium para investigación con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista TB-500. Frammento di Thymosin Beta-4 (Tβ4) premium per la ricerca con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Tesofensine
  if (/\bTesofensine\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Tesofensine UK. Premium research-grade compound (NS2330) with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Tesofensine Kopen. Premium onderzoekscompound (NS2330) met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Tesofensine kaufen. Premium Forschungscompound (NS2330) mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Tesofensine. Composé de recherche premium (NS2330) avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `Tesofensine Comprar. Compuesto de investigación premium (NS2330) con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Tesofensine. Composto di ricerca premium (NS2330) con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  // Customized meta descriptions for Tirzepatide
  if (/\bTirzepatide\b/i.test(productName)) {
    const metas: Record<SupportedLanguage, string> = {
      en: `Buy Tirzepatide UK. Premium research-grade dual GIP/GLP-1 agonist steroid with ≥99% purity. COA included. Fast UK & EU delivery.`,
      nl: `Tirzepatide Kopen. Premium anabole steroid (duale GIP/GLP-1 agonist) met ≥99% zuiverheid. COA inbegrepen. Snelle levering in NL & EU.`,
      de: `Tirzepatide kaufen. Premium Forschungssteroid (dualer GIP/GLP-1-Agonist) mit ≥99% Reinheit. COA inklusive. Schnelle Lieferung in DE & EU.`,
      fr: `Acheter Tirzepatide. steroid de recherche premium (double agoniste GIP/GLP-1) avec ≥99% pureté. COA inclus. Livraison rapide FR & UE.`,
      es: `Tirzepatide Comprar. Péptido de investigación premium (agonista dual GIP/GLP-1) con ≥99% pureza. COA incluido. Envío rápido ES & UE.`,
      it: `Acquista Tirzepatide. steroid di ricerca premium (doppio agonista GIP/GLP-1) con ≥99% purezza. COA incluso. Spedizione veloce IT & UE.`,
      ru: `Купить Россия | Пептидшоп`
    };
    return metas[lang];
  }

  const templates: Record<SupportedLanguage, string> = {
    en: `Buy ${productName} UK. Premium research grade steroid with ≥99% purity. Fast UK & EU delivery. COA included. Trusted supplier.`,
    nl: `${productName} Kopen Nederland. Premium anabole steroid met ≥99% zuiverheid. Snelle levering in NL & EU. COA inbegrepen.`,
    de: `${productName} kaufen Deutschland. Premium Forschungssteroid mit ≥99% Reinheit. Schnelle DE & EU Lieferung. COA inklusive.`,
    fr: `Acheter ${productName} France. steroid de recherche premium avec ≥99% pureté. Livraison rapide FR & UE. COA inclus.`,
    es: `Comprar ${productName} España. Péptido de investigación premium con ≥99% pureza. Envío rápido ES & UE. COA incluido.`,
    it: `Acquista ${productName} Italia. steroid di ricerca premium con ≥99% purezza. Spedizione veloce IT & UE. COA incluso.`,
      ru: `Купить Россия | Пептидшоп`
  };
  
  return templates[lang];
}

/**
 * Generates SEO-optimized page title for product pages in each language
 */
export function getLocalizedPageTitle(productName: string, lang: SupportedLanguage): string {
  // Customized page titles for Bacteriostatic Water to match specific keywords
  if (productName.includes('Bacteriostatic Water')) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Bacteriostatic water UK | USP Grade | Steroiden`,
      nl: `Bacteriostatic water Kopen Nederland | Steriel Water | Steroiden NL`,
      de: `Bacteriostatic water Kaufen Deutschland | Steriles Wasser | Steroiden DE`,
      fr: `Acheter de l'eau bactériostatique France | Eau Stérile | Steroiden FR`,
      es: `Agua bacteriostatica comprar España | Calidad USP | Steroiden ES`,
      it: `Acquisto acqua batteriostatica Italia | Acqua Sterile | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for AOD-9604 to match exact primary keyword phrases per language
  if (/\bAOD[-\s]?9604\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy AOD-9604 UK | ≥99% Purity | Steroiden`,
      nl: `AOD-9604 Kopen Nederland | ≥99% Zuiverheid | Steroiden NL`,
      de: `AOD-9604 kaufen Deutschland | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter AOD-9604 France | ≥99% Pureté | Steroiden FR`,
      es: `aod 9604 comprar España | ≥99% Pureza | Steroiden ES`,
      it: `Acquista AOD-9604 Italia | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for BPC-157 to match exact primary keyword phrases per language
  if (/\bBPC[-\s]?157\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy BPC-157 UK | ≥99% Purity | Steroiden`,
      nl: `BPC-157 Kopen Nederland | ≥99% Zuiverheid | Steroiden NL`,
      de: `BPC-157 Kaufen Deutschland | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter BPC-157 France | ≥99% Pureté | Steroiden FR`,
      es: `BPC 157 Comprar España | ≥99% Pureza | Steroiden ES`,
      it: `Acquista BPC-157 Italia | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for 5-Amino-1MQ to match exact primary keyword phrases per language
  if (/\b5\s*-?\s*Amino\s*-?\s*1\s*MQ\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy 5-Amino-1MQ | ≥99% Purity | Steroiden`,
      nl: `5-amino-1mq kopen Nederland | ≥99% Zuiverheid | Steroiden NL`,
      de: `5-Amino-1MQ kaufen Deutschland | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter 5-Amino-1MQ France | ≥99% Pureté | Steroiden FR`,
      es: `5-Amino-1MQ Comprar España | ≥99% Pureza | Steroiden ES`,
      it: `Acquista 5-Amino-1MQ Italia | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for CJC-1295 No DAC
  if (/\bCJC\s*-?\s*1295\b/i.test(productName) && /\bNo\s*DAC\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy CJC-1295 No DAC | ≥99% Purity | Steroiden`,
      nl: `CJC-1295 No DAC Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `CJC-1295 No DAC kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter CJC-1295 No DAC | ≥99% Pureté | Steroiden FR`,
      es: `CJC-1295 No DAC Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista CJC-1295 No DAC | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Epitalon
  if (/\bEpitalon\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Epitalon | ≥99% Purity | Steroiden`,
      nl: `Epitalon Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Epitalon kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Epitalon | ≥99% Pureté | Steroiden FR`,
      es: `Epitalon Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Epitalon | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Cagrilintide
  if (/\bCagrilintide\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Cagrilintide | ≥99% Purity | Steroiden`,
      nl: `Cagrilintide Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Cagrilintide kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Cagrilintide | ≥99% Pureté | Steroiden FR`,
      es: `Cagrilintide Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Cagrilintide | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for DSIP
  if (/\bDSIP\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy DSIP | ≥99% Purity | Steroiden`,
      nl: `DSIP Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `DSIP kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter DSIP | ≥99% Pureté | Steroiden FR`,
      es: `DSIP Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista DSIP | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for HGH Fragment 176-191
  if (/(\bHGH\b|\bGH\b)\s*Fragment\s*176\s*-\s*191\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy HGH Fragment 176-191 | ≥99% Purity | Steroiden`,
      nl: `HGH Fragment 176-191 Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `HGH Fragment 176-191 kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter HGH Fragment 176-191 | ≥99% Pureté | Steroiden FR`,
      es: `HGH Fragment 176-191 Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista HGH Fragment 176-191 | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for GHK-Cu
  if (/\bGHK\s*-?\s*Cu\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy GHK-Cu UK | ≥99% Purity | Steroiden`,
      nl: `GHK-Cu Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `GHK-Cu kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter GHK-Cu | ≥99% Pureté | Steroiden FR`,
      es: `GHK-Cu Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista GHK-Cu | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for GHRP-2
  if (/\bGHRP\s*-?\s*2\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy GHRP-2 UK | ≥99% Purity | Steroiden`,
      nl: `GHRP-2 Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `GHRP-2 Kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter GHRP-2 | ≥99% Pureté | Steroiden FR`,
      es: `GHRP-2 Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista GHRP-2 | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for GHRP-6
  if (/\bGHRP\s*-?\s*6\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy GHRP-6 | ≥99% Purity | Steroiden`,
      nl: `GHRP-6 Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `GHRP-6 Kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter GHRP-6 | ≥99% Pureté | Steroiden FR`,
      es: `GHRP-6 Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista GHRP-6 | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Melanotan 2
  if (/\bMelanotan\s*2\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Melanotan 2 UK | ≥99% Purity | Steroiden`,
      nl: `Melanotan 2 kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Melanotan 2 kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Melanotan 2 | ≥99% Pureté | Steroiden FR`,
      es: `Melanotan 2 comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Melanotan 2 | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Ipamorelin
  if (/\bIpamorelin\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Ipamorelin UK | ≥99% Purity | Steroiden`,
      nl: `Ipamorelin kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Ipamorelin kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Ipamorelin | ≥99% Pureté | Steroiden FR`,
      es: `Ipamorelin comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Ipamorelin | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for NAD+
  if (/\bNAD\+\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy NAD+ | ≥99% Purity | Steroiden`,
      nl: `NAD+ kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `NAD+ kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter NAD+ | ≥99% Pureté | Steroiden FR`,
      es: `NAD+ comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista NAD+ | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for O-304
  if (/\bO\s*-\s*304\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy O-304 | ≥99% Purity | Steroiden`,
      nl: `O-304 kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `O-304 kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter O-304 | ≥99% Pureté | Steroiden FR`,
      es: `O-304 comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista O-304 | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Retatrutide
  if (/\bRetatrutide\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Retatrutide UK | ≥99% Purity | Steroiden`,
      nl: `Retatrutide kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Retatrutide kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Retatrutide | ≥99% Pureté | Steroiden FR`,
      es: `Retatrutide comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Retatrutide | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Selank
  if (/\bSelank\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Selank UK | ≥99% Purity | Steroiden`,
      nl: `Selank kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Selank kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Selank | ≥99% Pureté | Steroiden FR`,
      es: `Selank comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Selank | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Semaglutide
  if (/\bSemaglutide\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Semaglutide UK | ≥99% Purity | Steroiden`,
      nl: `Semaglutide kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Semaglutide kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Semaglutide | ≥99% Pureté | Steroiden FR`,
      es: `Semaglutide comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Semaglutide | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Semax
  if (/\bSemax\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Semax UK | ≥99% Purity | Steroiden`,
      nl: `Semax Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Semax kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Semax | ≥99% Pureté | Steroiden FR`,
      es: `Semax Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Semax | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for TB-500
  if (/\bTB\s*-?\s*500\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy TB-500 UK | ≥99% Purity | Steroiden`,
      nl: `TB-500 Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `TB-500 kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter TB-500 | ≥99% Pureté | Steroiden FR`,
      es: `TB-500 Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista TB-500 | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Tesofensine
  if (/\bTesofensine\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Tesofensine UK | ≥99% Purity | Steroiden`,
      nl: `Tesofensine Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Tesofensine kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Tesofensine | ≥99% Pureté | Steroiden FR`,
      es: `Tesofensine Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Tesofensine | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  // Customized page titles for Tirzepatide
  if (/\bTirzepatide\b/i.test(productName)) {
    const titles: Record<SupportedLanguage, string> = {
      en: `Buy Tirzepatide UK | ≥99% Purity | Steroiden`,
      nl: `Tirzepatide Kopen | ≥99% Zuiverheid | Steroiden NL`,
      de: `Tirzepatide kaufen | ≥99% Reinheit | Steroiden DE`,
      fr: `Acheter Tirzepatide | ≥99% Pureté | Steroiden FR`,
      es: `Tirzepatide Comprar | ≥99% Pureza | Steroiden ES`,
      it: `Acquista Tirzepatide | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
    };
    return titles[lang];
  }

  const templates: Record<SupportedLanguage, string> = {
    en: `Buy ${productName} UK | ≥99% Purity | Steroiden`,
    nl: `${productName} Kopen Nederland | ≥99% Zuiverheid | Steroiden NL`,
    de: `${productName} Kaufen Deutschland | ≥99% Reinheit | Steroiden DE`,
    fr: `Acheter ${productName} France | ≥99% Pureté | Steroiden FR`,
    es: `Comprar ${productName} España | ≥99% Pureza | Steroiden ES`,
    it: `Acquista ${productName} Italia | ≥99% Purezza | Steroiden IT`,
      ru: `Купить Россия | Пептидшоп`
  };
  
  return templates[lang];
}

// Helper to translate package size strings (e.g., "10 × 5 mg vials" → "10 × 5 mg Ampullen")
export function translatePackageSize(packageSize: string, lang: SupportedLanguage): string {
  if (lang === 'en' || !packageSize) {
    return packageSize;
  }
  
  // Translation map for package-related terms
  const translations: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    nl: {
      'vial': 'flacon',
      'vials': 'flacons',
      'bottle': 'fles',
      'bottles': 'flessen',
      'capsule': 'capsule',
      'capsules': 'capsules',
      'pack': 'verpakking',
      'packs': 'verpakkingen',
      'unit': 'eenheid',
      'units': 'eenheden',
      'powder': 'poeder',
      'tablet': 'tablet',
      'tablets': 'tabletten',
      'syringe': 'spuit',
      'syringes': 'spuiten',
      'month': 'maand',
      'months': 'maanden',
      'supply': 'voorraad'
    },
    de: {
      'vial': 'Ampulle',
      'vials': 'Ampullen',
      'bottle': 'Flasche',
      'bottles': 'Flaschen',
      'capsule': 'Kapsel',
      'capsules': 'Kapseln',
      'pack': 'Packung',
      'packs': 'Packungen',
      'unit': 'Einheit',
      'units': 'Einheiten',
      'powder': 'Pulver',
      'tablet': 'Tablette',
      'tablets': 'Tabletten',
      'syringe': 'Spritze',
      'syringes': 'Spritzen',
      'month': 'Monat',
      'months': 'Monate',
      'supply': 'Vorrat'
    },
    fr: {
      'vial': 'flacon',
      'vials': 'flacons',
      'bottle': 'bouteille',
      'bottles': 'bouteilles',
      'capsule': 'gélule',
      'capsules': 'gélules',
      'pack': 'paquet',
      'packs': 'paquets',
      'unit': 'unité',
      'units': 'unités',
      'powder': 'poudre',
      'tablet': 'comprimé',
      'tablets': 'comprimés',
      'syringe': 'seringue',
      'syringes': 'seringues',
      'month': 'mois',
      'months': 'mois',
      'supply': 'approvisionnement'
    },
    es: {
      'vial': 'vial',
      'vials': 'viales',
      'bottle': 'frasco',
      'bottles': 'frascos',
      'capsule': 'cápsula',
      'capsules': 'cápsulas',
      'pack': 'paquete',
      'packs': 'paquetes',
      'unit': 'unidad',
      'units': 'unidades',
      'powder': 'polvo',
      'tablet': 'tableta',
      'tablets': 'tabletas',
      'syringe': 'jeringa',
      'syringes': 'jeringas',
      'month': 'mes',
      'months': 'meses',
      'supply': 'suministro'
    },
    it: {
      'vial': 'fiala',
      'vials': 'fiale',
      'bottle': 'flacone',
      'bottles': 'flaconi',
      'capsule': 'capsula',
      'capsules': 'capsule',
      'pack': 'confezione',
      'packs': 'confezioni',
      'unit': 'unità',
      'units': 'unità',
      'powder': 'polvere',
      'tablet': 'compressa',
      'tablets': 'compresse',
      'syringe': 'siringa',
      'syringes': 'siringhe',
      'month': 'mese',
      'months': 'mesi',
      'supply': 'fornitura'
    },
    ru: {
      'vial': 'флакон',
      'vials': 'флаконы',
      'bottle': 'бутылка',
      'bottles': 'бутылки',
      'capsule': 'капсула',
      'capsules': 'капсулы',
      'pack': 'упаковка',
      'packs': 'упаковки',
      'unit': 'единица',
      'units': 'единицы',
      'powder': 'порошок',
      'tablet': 'таблетка',
      'tablets': 'таблетки',
      'syringe': 'шприц',
      'syringes': 'шприцы',
      'month': 'месяц',
      'months': 'месяцы',
      'supply': 'запас'
    }
  };
  
  let translated = packageSize;
  const langTranslations = translations[lang];
  
  // Replace each term (case-insensitive, whole word)
  for (const [en, localized] of Object.entries(langTranslations)) {
    const regex = new RegExp(`\\b${en}\\b`, 'gi');
    translated = translated.replace(regex, localized);
  }
  
  return translated;
}

/**
 * Translates a category slug to the localized category name
 * @param category - Category slug like "weight-loss", "muscle-recovery", "supplies"
 * @param lang - Target language
 * @returns Translated category name
 */
export function translateCategory(category: string, lang: SupportedLanguage): string {
  // Map category slugs to localized display names
  const categoryNames: Record<SupportedLanguage, Record<string, string>> = {
    en: {
      'testosterone': 'Testosterone', 'trenbolone': 'Trenbolone', 'nandrolone': 'Nandrolone',
      'winstrol': 'Winstrol', 'anavar': 'Anavar', 'dianabol': 'Dianabol',
      'masteron': 'Masteron', 'primobolan': 'Primobolan', 'peptides': 'Peptides',
      'sarms': 'SARMs', 'weight-loss': 'Weight Loss', 'pct': 'PCT',
      'ancillaries': 'Ancillaries', 'sexual-health': 'Sexual Health',
      'steroid-blends': 'Steroid Blends', 'hgh': 'HGH', 'boldenone': 'Boldenone',
      'anadrol': 'Anadrol', 'turinabol': 'Turinabol', 'superdrol': 'Superdrol',
      'accessories': 'Accessories',
    },
    de: {
      'testosterone': 'Testosteron', 'trenbolone': 'Trenbolon', 'nandrolone': 'Nandrolon',
      'winstrol': 'Winstrol', 'anavar': 'Anavar', 'dianabol': 'Dianabol',
      'masteron': 'Masteron', 'primobolan': 'Primobolan', 'peptides': 'Peptide',
      'sarms': 'SARMs', 'weight-loss': 'Gewichtsverlust', 'pct': 'PCT',
      'ancillaries': 'Zusatzmittel', 'sexual-health': 'Sexuelle Gesundheit',
      'steroid-blends': 'Steroid-Mischungen', 'hgh': 'HGH', 'boldenone': 'Boldenon',
      'anadrol': 'Anadrol', 'turinabol': 'Turinabol', 'superdrol': 'Superdrol',
      'accessories': 'Zubehör',
    },
    nl: {
      'testosterone': 'Testosteron', 'trenbolone': 'Trenbolon', 'nandrolone': 'Nandrolon',
      'winstrol': 'Winstrol', 'anavar': 'Anavar', 'dianabol': 'Dianabol',
      'masteron': 'Masteron', 'primobolan': 'Primobolan', 'peptides': 'Peptiden',
      'sarms': 'SARMs', 'weight-loss': 'Gewichtsverlies', 'pct': 'PCT',
      'ancillaries': 'Hulpmiddelen', 'sexual-health': 'Seksuele Gezondheid',
      'steroid-blends': 'Steroïde Mengsels', 'hgh': 'HGH', 'boldenone': 'Boldenon',
      'anadrol': 'Anadrol', 'turinabol': 'Turinabol', 'superdrol': 'Superdrol',
      'accessories': 'Accessoires',
    },
    fr: {
      'testosterone': 'Testostérone', 'trenbolone': 'Trenbolone', 'nandrolone': 'Nandrolone',
      'winstrol': 'Winstrol', 'anavar': 'Anavar', 'dianabol': 'Dianabol',
      'masteron': 'Masteron', 'primobolan': 'Primobolan', 'peptides': 'Peptides',
      'sarms': 'SARMs', 'weight-loss': 'Perte de Poids', 'pct': 'PCT',
      'ancillaries': 'Auxiliaires', 'sexual-health': 'Santé Sexuelle',
      'steroid-blends': 'Mélanges de Stéroïdes', 'hgh': 'HGH', 'boldenone': 'Boldénone',
      'anadrol': 'Anadrol', 'turinabol': 'Turinabol', 'superdrol': 'Superdrol',
      'accessories': 'Accessoires',
    },
    es: {
      'testosterone': 'Testosterona', 'trenbolone': 'Trembolona', 'nandrolone': 'Nandrolona',
      'winstrol': 'Winstrol', 'anavar': 'Anavar', 'dianabol': 'Dianabol',
      'masteron': 'Masteron', 'primobolan': 'Primobolan', 'peptides': 'Péptidos',
      'sarms': 'SARMs', 'weight-loss': 'Pérdida de Peso', 'pct': 'PCT',
      'ancillaries': 'Auxiliares', 'sexual-health': 'Salud Sexual',
      'steroid-blends': 'Mezclas de Esteroides', 'hgh': 'HGH', 'boldenone': 'Boldenona',
      'anadrol': 'Anadrol', 'turinabol': 'Turinabol', 'superdrol': 'Superdrol',
      'accessories': 'Accesorios',
    },
    it: {
      'testosterone': 'Testosterone', 'trenbolone': 'Trenbolone', 'nandrolone': 'Nandrolone',
      'winstrol': 'Winstrol', 'anavar': 'Anavar', 'dianabol': 'Dianabol',
      'masteron': 'Masteron', 'primobolan': 'Primobolan', 'peptides': 'Peptidi',
      'sarms': 'SARMs', 'weight-loss': 'Perdita di Peso', 'pct': 'PCT',
      'ancillaries': 'Ausiliari', 'sexual-health': 'Salute Sessuale',
      'steroid-blends': 'Miscele di Steroidi', 'hgh': 'HGH', 'boldenone': 'Boldenone',
      'anadrol': 'Anadrol', 'turinabol': 'Turinabol', 'superdrol': 'Superdrol',
      'accessories': 'Accessori',
    },
    ru: {
      'testosterone': 'Тестостерон', 'trenbolone': 'Тренболон', 'nandrolone': 'Нандролон',
      'winstrol': 'Винстрол', 'anavar': 'Анавар', 'dianabol': 'Данабол',
      'masteron': 'Мастерон', 'primobolan': 'Примоболан', 'peptides': 'Пептиды',
      'sarms': 'SARMs', 'weight-loss': 'Снижение веса', 'pct': 'ПКТ',
      'ancillaries': 'Вспомогательные', 'sexual-health': 'Сексуальное здоровье',
      'steroid-blends': 'Стероидные смеси', 'hgh': 'ГРЧ', 'boldenone': 'Болденон',
      'anadrol': 'Анадрол', 'turinabol': 'Туринабол', 'superdrol': 'Супердрол',
      'accessories': 'Аксессуары',
    },
  };

  const name = categoryNames[lang]?.[category.toLowerCase()];
  if (name) return name;

  // Fallback: convert slug to title case
  return category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

/**
 * Comprehensive FAQ translation for all languages
 * Translates FAQ questions and answers to the target language
 */
interface FAQ {
  question: string;
  answer: string;
}

export function translateFAQs(faqs: FAQ[], lang: SupportedLanguage): FAQ[] {
  if (lang === 'en' || !faqs || faqs.length === 0) {
    return faqs;
  }
  
  // Common FAQ phrase translations
  const faqTranslations: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    nl: {
      // Questions
      'What is': 'Wat is',
      'What are': 'Wat zijn',
      'How does': 'Hoe werkt',
      'How do I': 'Hoe kan ik',
      'How should': 'Hoe moet',
      'How can': 'Hoe kan',
      'Where does': 'Waar komt',
      'used for in research': 'gebruikt voor in onderzoek',
      'work': 'werkt',
      'work?': 'werken?',
      'stored': 'bewaard worden',
      'be stored': 'bewaard worden',
      'purity is': 'zuiverheid heeft',
      'What purity': 'Welke zuiverheid',
      'Can': 'Kan',
      'be combined with': 'gecombineerd worden met',
      'reconstitute': 'reconstitueren',
      'What sizes are available': 'Welke formaten zijn beschikbaar',
      'sizes are available': 'formaten zijn beschikbaar',
      'What is the origin': 'Wat is de oorsprong',
      'origin of': 'oorsprong van',
      // Answers
      'is studied for': 'wordt bestudeerd voor',
      'is used in': 'wordt gebruikt in',
      'is a': 'is een',
      'appears to': 'lijkt te',
      'Store': 'Bewaar',
      'store': 'bewaar',
      'Once reconstituted': 'Eenmaal gereconstitueerd',
      'Keep at': 'Bewaar bij',
      'keep at': 'bewaar bij',
      'Our': 'Onze',
      'is ≥99% pure': 'is ≥99% zuiver',
      'as verified by': 'zoals geverifieerd door',
      'HPLC': 'HPLC',
      'Each batch includes': 'Elke batch bevat',
      'Certificate of Analysis': 'Analysecertificaat',
      'Yes': 'Ja',
      'No': 'Nee',
      'Reconstitute in': 'Reconstitueer in',
      'sterile': 'steriel',
      'bacteriostatic water': 'bacteriostatisch water',
      'Add solvent slowly': 'Voeg oplosmiddel langzaam toe',
      'gently swirl': 'voorzichtig zwenken',
      'dissolve': 'oplossen',
      'available in': 'beschikbaar in',
      'vials': 'flacons',
      'and': 'en',
      'tissue healing': 'weefselherstel',
      'tissue repair': 'weefselreparatie',
      'research': 'onderzoek',
      'weight loss': 'gewichtsverlies',
      'growth hormone': 'groeihormoon',
      'muscle recovery': 'spierherstel',
      'Steroide': 'Steroide',
      'steroides': 'steroïden',
      'weeks': 'weken',
      'months': 'maanden',
      'recommended': 'aanbevolen',
      'purity': 'zuiverheid',
      'high-quality': 'hoogwaardige',
      'premium': 'premium',
      'fast delivery': 'snelle levering'
    },
    de: {
      // Questions
      'What is': 'Was ist',
      'What are': 'Was sind',
      'How does': 'Wie wirkt',
      'How do I': 'Wie kann ich',
      'How should': 'Wie sollte',
      'How can': 'Wie kann',
      'Where does': 'Woher kommt',
      'used for in research': 'in der Forschung verwendet',
      'work': 'funktionieren',
      'work?': 'funktionieren?',
      'stored': 'gelagert werden',
      'be stored': 'gelagert werden',
      'purity is': 'Reinheit hat',
      'What purity': 'Welche Reinheit',
      'Can': 'Kann',
      'be combined with': 'kombiniert werden mit',
      'reconstitute': 'rekonstituieren',
      'What sizes are available': 'Welche Größen sind verfügbar',
      'sizes are available': 'Größen sind verfügbar',
      'What is the origin': 'Was ist der Ursprung',
      'origin of': 'Ursprung von',
      // Answers
      'is studied for': 'wird untersucht für',
      'is used in': 'wird verwendet in',
      'is a': 'ist ein',
      'appears to': 'scheint zu',
      'Store': 'Lagern',
      'store': 'lagern',
      'Once reconstituted': 'Nach Rekonstitution',
      'Keep at': 'Aufbewahren bei',
      'keep at': 'aufbewahren bei',
      'Our': 'Unser',
      'is ≥99% pure': 'ist ≥99% rein',
      'as verified by': 'wie durch verifiziert',
      'HPLC': 'HPLC',
      'Each batch includes': 'Jede Charge enthält',
      'Certificate of Analysis': 'Analysezertifikat',
      'Yes': 'Ja',
      'No': 'Nein',
      'Reconstitute in': 'Rekonstituieren in',
      'sterile': 'steril',
      'bacteriostatic water': 'bakteriostatisches Wasser',
      'Add solvent slowly': 'Lösungsmittel langsam hinzufügen',
      'gently swirl': 'sanft schwenken',
      'dissolve': 'auflösen',
      'available in': 'verfügbar in',
      'vials': 'Ampullen',
      'and': 'und',
      'tissue healing': 'Gewebeheilung',
      'tissue repair': 'Gewebereparatur',
      'research': 'Forschung',
      'weight loss': 'Gewichtsverlust',
      'growth hormone': 'Wachstumshormon',
      'muscle recovery': 'Muskelerholung',
      'Steroide': 'Steroid',
      'steroides': 'Steroide',
      'weeks': 'Wochen',
      'months': 'Monate',
      'recommended': 'empfohlen',
      'purity': 'Reinheit',
      'high-quality': 'hochwertig',
      'premium': 'Premium',
      'fast delivery': 'schnelle Lieferung'
    },
    fr: {
      // Questions
      'What is': 'Qu\'est-ce que',
      'What are': 'Quels sont',
      'How does': 'Comment fonctionne',
      'How do I': 'Comment puis-je',
      'How should': 'Comment doit',
      'How can': 'Comment peut',
      'Where does': 'D\'où vient',
      'used for in research': 'utilisé dans la recherche',
      'work': 'fonctionner',
      'work?': 'fonctionner?',
      'stored': 'être stocké',
      'be stored': 'être stocké',
      'purity is': 'pureté a',
      'What purity': 'Quelle pureté',
      'Can': 'Peut',
      'be combined with': 'être combiné avec',
      'reconstitute': 'reconstituer',
      'What sizes are available': 'Quelles tailles sont disponibles',
      'sizes are available': 'tailles sont disponibles',
      'What is the origin': 'Quelle est l\'origine',
      'origin of': 'origine de',
      // Answers
      'is studied for': 'est étudié pour',
      'is used in': 'est utilisé dans',
      'is a': 'est un',
      'appears to': 'semble',
      'Store': 'Stocker',
      'store': 'stocker',
      'Once reconstituted': 'Une fois reconstitué',
      'Keep at': 'Conserver à',
      'keep at': 'conserver à',
      'Our': 'Notre',
      'is ≥99% pure': 'est ≥99% pur',
      'as verified by': 'comme vérifié par',
      'HPLC': 'HPLC',
      'Each batch includes': 'Chaque lot comprend',
      'Certificate of Analysis': 'Certificat d\'Analyse',
      'Yes': 'Oui',
      'No': 'Non',
      'Reconstitute in': 'Reconstituer dans',
      'sterile': 'stérile',
      'bacteriostatic water': 'eau bactériostatique',
      'Add solvent slowly': 'Ajouter le solvant lentement',
      'gently swirl': 'agiter doucement',
      'dissolve': 'dissoudre',
      'available in': 'disponible en',
      'vials': 'flacons',
      'and': 'et',
      'tissue healing': 'guérison des tissus',
      'tissue repair': 'réparation des tissus',
      'research': 'recherche',
      'weight loss': 'perte de poids',
      'growth hormone': 'hormone de croissance',
      'muscle recovery': 'récupération musculaire',
      'Steroide': 'Steroide',
      'steroides': 'steroides',
      'weeks': 'semaines',
      'months': 'mois',
      'recommended': 'recommandé',
      'purity': 'pureté',
      'high-quality': 'haute qualité',
      'premium': 'premium',
      'fast delivery': 'livraison rapide'
    },
    es: {
      // Questions
      'What is': '¿Qué es',
      'What are': '¿Cuáles son',
      'How does': '¿Cómo funciona',
      'How do I': '¿Cómo puedo',
      'How should': '¿Cómo debe',
      'How can': '¿Cómo puede',
      'Where does': '¿De dónde viene',
      'used for in research': 'utilizado en la investigación',
      'work': 'funcionar',
      'work?': 'funcionar?',
      'stored': 'almacenarse',
      'be stored': 'almacenarse',
      'purity is': 'pureza tiene',
      'What purity': 'Qué pureza',
      'Can': 'Puede',
      'be combined with': 'combinarse con',
      'reconstitute': 'reconstituir',
      'What sizes are available': 'Qué tamaños están disponibles',
      'sizes are available': 'tamaños están disponibles',
      'What is the origin': 'Cuál es el origen',
      'origin of': 'origen de',
      // Answers
      'is studied for': 'se estudia para',
      'is used in': 'se utiliza en',
      'is a': 'es un',
      'appears to': 'parece',
      'Store': 'Almacenar',
      'store': 'almacenar',
      'Once reconstituted': 'Una vez reconstituido',
      'Keep at': 'Mantener a',
      'keep at': 'mantener a',
      'Our': 'Nuestro',
      'is ≥99% pure': 'es ≥99% puro',
      'as verified by': 'como verificado por',
      'HPLC': 'HPLC',
      'Each batch includes': 'Cada lote incluye',
      'Certificate of Analysis': 'Certificado de Análisis',
      'Yes': 'Sí',
      'No': 'No',
      'Reconstitute in': 'Reconstituir en',
      'sterile': 'estéril',
      'bacteriostatic water': 'agua bacteriostática',
      'Add solvent slowly': 'Añadir solvente lentamente',
      'gently swirl': 'agitar suavemente',
      'dissolve': 'disolver',
      'available in': 'disponible en',
      'vials': 'viales',
      'and': 'y',
      'tissue healing': 'curación de tejidos',
      'tissue repair': 'reparación de tejidos',
      'research': 'investigación',
      'weight loss': 'pérdida de peso',
      'growth hormone': 'hormona de crecimiento',
      'muscle recovery': 'recuperación muscular',
      'Steroide': 'péptido',
      'steroides': 'péptidos',
      'weeks': 'semanas',
      'months': 'meses',
      'recommended': 'recomendado',
      'purity': 'pureza',
      'high-quality': 'alta calidad',
      'premium': 'premium',
      'fast delivery': 'entrega rápida'
    },
    it: {
      // Questions
      'What is': 'Cos\'è',
      'What are': 'Quali sono',
      'How does': 'Come funziona',
      'How do I': 'Come posso',
      'How should': 'Come deve',
      'How can': 'Come può',
      'Where does': 'Da dove viene',
      'used for in research': 'utilizzato nella ricerca',
      'work': 'funzionare',
      'work?': 'funzionare?',
      'stored': 'essere conservato',
      'be stored': 'essere conservato',
      'purity is': 'purezza ha',
      'What purity': 'Quale purezza',
      'Can': 'Può',
      'be combined with': 'essere combinato con',
      'reconstitute': 'ricostituire',
      'What sizes are available': 'Quali formati sono disponibili',
      'sizes are available': 'formati sono disponibili',
      'What is the origin': 'Qual è l\'origine',
      'origin of': 'origine di',
      // Answers
      'is studied for': 'è studiato per',
      'is used in': 'è utilizzato in',
      'is a': 'è un',
      'appears to': 'sembra',
      'Store': 'Conservare',
      'store': 'conservare',
      'Once reconstituted': 'Una volta ricostituito',
      'Keep at': 'Conservare a',
      'keep at': 'conservare a',
      'Our': 'Il nostro',
      'is ≥99% pure': 'è ≥99% puro',
      'as verified by': 'come verificato da',
      'HPLC': 'HPLC',
      'Each batch includes': 'Ogni lotto include',
      'Certificate of Analysis': 'Certificato di Analisi',
      'Yes': 'Sì',
      'No': 'No',
      'Reconstitute in': 'Ricostituire in',
      'sterile': 'sterile',
      'bacteriostatic water': 'acqua batteriostatica',
      'Add solvent slowly': 'Aggiungere il solvente lentamente',
      'gently swirl': 'agitare delicatamente',
      'dissolve': 'sciogliere',
      'available in': 'disponibile in',
      'vials': 'fiale',
      'and': 'e',
      'tissue healing': 'guarigione dei tessuti',
      'tissue repair': 'riparazione dei tessuti',
      'research': 'ricerca',
      'weight loss': 'perdita di peso',
      'growth hormone': 'ormone della crescita',
      'muscle recovery': 'recupero muscolare',
      'Steroide': 'Steroide',
      'steroides': 'steroidi',
      'weeks': 'settimane',
      'months': 'mesi',
      'recommended': 'raccomandato',
      'purity': 'purezza',
      'high-quality': 'alta qualità',
      'premium': 'premium',
      'fast delivery': 'consegna veloce'
    },
    ru: {
      'What is': 'Что такое',
      'What are': 'Что такое',
      'How does': 'Как работает',
      'How do I': 'Как мне',
      'How should': 'Как следует',
      'Benefits of': 'Преимущества',
      'Storage Instructions': 'Инструкции по хранению',
      'Reconstitution Guide': 'Руководство по разведению',
      'Yes': 'Да',
      'No': 'Нет',
      'research': 'исследование',
      'weight loss': 'снижение веса',
      'growth hormone': 'гормон роста',
      'muscle recovery': 'восстановление мышц',
      'Steroide': 'пептид',
      'steroides': 'пептиды',
      'weeks': 'недели',
      'months': 'месяцы',
      'purity': 'чистота',
      'high-quality': 'высокое качество',
      'premium': 'премиум',
      'fast delivery': 'быстрая доставка'
    }
  };
  
  const langTrans = faqTranslations[lang];
  
  return faqs.map(faq => ({
    question: translateText(faq.question, langTrans),
    answer: translateText(faq.answer, langTrans)
  }));
}

/**
 * Comprehensive review translation for all languages
 * Translates review titles and content to the target language
 */
interface Review {
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export function translateReviews(reviews: Review[], lang: SupportedLanguage): Review[] {
  if (lang === 'en' || !reviews || reviews.length === 0) {
    return reviews;
  }
  
  // Common review phrase translations
  const reviewTranslations: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    nl: {
      // Review titles
      'Outstanding': 'Uitstekend',
      'Excellent': 'Uitstekend',
      'Great': 'Geweldig',
      'Good': 'Goed',
      'Premium': 'Premium',
      'Reliable': 'Betrouwbaar',
      'Fast': 'Snel',
      'Perfect': 'Perfect',
      'healing Steroide': 'genezend Steroide',
      'research grade': 'onderzoekskwaliteit',
      'quality': 'kwaliteit',
      'product': 'product',
      'service': 'service',
      'supplier': 'leverancier',
      'delivery': 'levering',
      'purity': 'zuiverheid',
      // Review content
      'Our': 'Onze',
      'studies': 'studies',
      'research': 'onderzoek',
      'depends on': 'hangt af van',
      'delivers': 'levert',
      'consistent': 'consistent',
      'excellence': 'uitmuntendheid',
      'quality is exceptional': 'kwaliteit is uitzonderlijk',
      'will continue ordering': 'zal blijven bestellen',
      'Fast delivery': 'Snelle levering',
      'fast delivery': 'snelle levering',
      'excellent quality': 'uitstekende kwaliteit',
      'Excellent quality': 'Uitstekende kwaliteit',
      'high-quality': 'hoogwaardige',
      'Consistent quality': 'Consistente kwaliteit',
      'consistent quality': 'consistente kwaliteit',
      'gives excellent results': 'geeft uitstekende resultaten',
      'Verified purity': 'Geverifieerde zuiverheid',
      'exceeds claims': 'overtreft claims',
      'Essential for our': 'Essentieel voor onze',
      'great quality': 'geweldige kwaliteit',
      'fair price': 'eerlijke prijs',
      'going well': 'gaat goed',
      'progressing well': 'vordert goed',
      'with this batch': 'met deze batch',
      'remarkable activity': 'opmerkelijke activiteit',
      'particularly compelling': 'bijzonder overtuigend',
      'tissue repair': 'weefselreparatie',
      'tissue healing': 'weefselherstel',
      'muscle recovery': 'spierherstel',
      'weight loss': 'gewichtsverlies'
    },
    de: {
      // Review titles
      'Outstanding': 'Hervorragend',
      'Excellent': 'Ausgezeichnet',
      'Great': 'Großartig',
      'Good': 'Gut',
      'Premium': 'Premium',
      'Reliable': 'Zuverlässig',
      'Fast': 'Schnell',
      'Perfect': 'Perfekt',
      'healing Steroide': 'heilendes Steroid',
      'research grade': 'Forschungsqualität',
      'quality': 'Qualität',
      'product': 'Produkt',
      'service': 'Service',
      'supplier': 'Lieferant',
      'delivery': 'Lieferung',
      'purity': 'Reinheit',
      // Review content
      'Our': 'Unsere',
      'studies': 'Studien',
      'research': 'Forschung',
      'depends on': 'hängt ab von',
      'delivers': 'liefert',
      'consistent': 'konsistent',
      'excellence': 'Exzellenz',
      'quality is exceptional': 'Qualität ist außergewöhnlich',
      'will continue ordering': 'werden weiter bestellen',
      'Fast delivery': 'Schnelle Lieferung',
      'fast delivery': 'schnelle Lieferung',
      'excellent quality': 'ausgezeichnete Qualität',
      'Excellent quality': 'Ausgezeichnete Qualität',
      'high-quality': 'hochwertig',
      'Consistent quality': 'Konsistente Qualität',
      'consistent quality': 'konsistente Qualität',
      'gives excellent results': 'gibt ausgezeichnete Ergebnisse',
      'Verified purity': 'Verifizierte Reinheit',
      'exceeds claims': 'übertrifft Angaben',
      'Essential for our': 'Wesentlich für unsere',
      'great quality': 'großartige Qualität',
      'fair price': 'fairer Preis',
      'going well': 'läuft gut',
      'progressing well': 'macht gute Fortschritte',
      'with this batch': 'mit dieser Charge',
      'remarkable activity': 'bemerkenswerte Aktivität',
      'particularly compelling': 'besonders überzeugend',
      'tissue repair': 'Gewebereparatur',
      'tissue healing': 'Gewebeheilung',
      'muscle recovery': 'Muskelerholung',
      'weight loss': 'Gewichtsverlust'
    },
    fr: {
      // Review titles
      'Outstanding': 'Exceptionnel',
      'Excellent': 'Excellent',
      'Great': 'Génial',
      'Good': 'Bon',
      'Premium': 'Premium',
      'Reliable': 'Fiable',
      'Fast': 'Rapide',
      'Perfect': 'Parfait',
      'healing Steroide': 'Steroide cicatrisant',
      'research grade': 'qualité recherche',
      'quality': 'qualité',
      'product': 'produit',
      'service': 'service',
      'supplier': 'fournisseur',
      'delivery': 'livraison',
      'purity': 'pureté',
      // Review content
      'Our': 'Notre',
      'studies': 'études',
      'research': 'recherche',
      'depends on': 'dépend de',
      'delivers': 'livre',
      'consistent': 'constant',
      'excellence': 'excellence',
      'quality is exceptional': 'qualité est exceptionnelle',
      'will continue ordering': 'continuerons à commander',
      'Fast delivery': 'Livraison rapide',
      'fast delivery': 'livraison rapide',
      'excellent quality': 'excellente qualité',
      'Excellent quality': 'Excellente qualité',
      'high-quality': 'haute qualité',
      'Consistent quality': 'Qualité constante',
      'consistent quality': 'qualité constante',
      'gives excellent results': 'donne d\'excellents résultats',
      'Verified purity': 'Pureté vérifiée',
      'exceeds claims': 'dépasse les attentes',
      'Essential for our': 'Essentiel pour notre',
      'great quality': 'grande qualité',
      'fair price': 'prix équitable',
      'going well': 'se passe bien',
      'progressing well': 'progresse bien',
      'with this batch': 'avec ce lot',
      'remarkable activity': 'activité remarquable',
      'particularly compelling': 'particulièrement convaincant',
      'tissue repair': 'réparation tissulaire',
      'tissue healing': 'guérison tissulaire',
      'muscle recovery': 'récupération musculaire',
      'weight loss': 'perte de poids'
    },
    es: {
      // Review titles
      'Outstanding': 'Excepcional',
      'Excellent': 'Excelente',
      'Great': 'Genial',
      'Good': 'Bueno',
      'Premium': 'Premium',
      'Reliable': 'Confiable',
      'Fast': 'Rápido',
      'Perfect': 'Perfecto',
      'healing Steroide': 'péptido curativo',
      'research grade': 'calidad de investigación',
      'quality': 'calidad',
      'product': 'producto',
      'service': 'servicio',
      'supplier': 'proveedor',
      'delivery': 'entrega',
      'purity': 'pureza',
      // Review content
      'Our': 'Nuestra',
      'studies': 'estudios',
      'research': 'investigación',
      'depends on': 'depende de',
      'delivers': 'entrega',
      'consistent': 'consistente',
      'excellence': 'excelencia',
      'quality is exceptional': 'calidad es excepcional',
      'will continue ordering': 'seguiremos pidiendo',
      'Fast delivery': 'Entrega rápida',
      'fast delivery': 'entrega rápida',
      'excellent quality': 'excelente calidad',
      'Excellent quality': 'Excelente calidad',
      'high-quality': 'alta calidad',
      'Consistent quality': 'Calidad consistente',
      'consistent quality': 'calidad consistente',
      'gives excellent results': 'da excelentes resultados',
      'Verified purity': 'Pureza verificada',
      'exceeds claims': 'supera las expectativas',
      'Essential for our': 'Esencial para nuestra',
      'great quality': 'gran calidad',
      'fair price': 'precio justo',
      'going well': 'va bien',
      'progressing well': 'progresa bien',
      'with this batch': 'con este lote',
      'remarkable activity': 'actividad notable',
      'particularly compelling': 'particularmente convincente',
      'tissue repair': 'reparación de tejidos',
      'tissue healing': 'curación de tejidos',
      'muscle recovery': 'recuperación muscular',
      'weight loss': 'pérdida de peso'
    },
    it: {
      // Review titles
      'Outstanding': 'Eccezionale',
      'Excellent': 'Eccellente',
      'Great': 'Ottimo',
      'Good': 'Buono',
      'Premium': 'Premium',
      'Reliable': 'Affidabile',
      'Fast': 'Veloce',
      'Perfect': 'Perfetto',
      'healing Steroide': 'Steroide curativo',
      'research grade': 'qualità di ricerca',
      'quality': 'qualità',
      'product': 'prodotto',
      'service': 'servizio',
      'supplier': 'fornitore',
      'delivery': 'consegna',
      'purity': 'purezza',
      // Review content
      'Our': 'La nostra',
      'studies': 'studi',
      'research': 'ricerca',
      'depends on': 'dipende da',
      'delivers': 'consegna',
      'consistent': 'costante',
      'excellence': 'eccellenza',
      'quality is exceptional': 'qualità è eccezionale',
      'will continue ordering': 'continueremo a ordinare',
      'Fast delivery': 'Consegna veloce',
      'fast delivery': 'consegna veloce',
      'excellent quality': 'qualità eccellente',
      'Excellent quality': 'Qualità eccellente',
      'high-quality': 'alta qualità',
      'Consistent quality': 'Qualità costante',
      'consistent quality': 'qualità costante',
      'gives excellent results': 'dà risultati eccellenti',
      'Verified purity': 'Purezza verificata',
      'exceeds claims': 'supera le aspettative',
      'Essential for our': 'Essenziale per la nostra',
      'great quality': 'ottima qualità',
      'fair price': 'prezzo equo',
      'going well': 'va bene',
      'progressing well': 'procede bene',
      'with this batch': 'con questo lotto',
      'remarkable activity': 'attività notevole',
      'particularly compelling': 'particolarmente convincente',
      'tissue repair': 'riparazione dei tessuti',
      'tissue healing': 'guarigione dei tessuti',
      'muscle recovery': 'recupero muscolare',
      'weight loss': 'perdita di peso'
    },
    ru: {
      'Outstanding': 'Выдающийся',
      'Excellent': 'Отлично',
      'Great': 'Отлично',
      'Good': 'Хорошо',
      'Premium': 'Премиум',
      'Reliable': 'Надежный',
      'Fast': 'Быстро',
      'Perfect': 'Идеально',
      'quality': 'качество',
      'product': 'продукт',
      'service': 'сервис',
      'delivery': 'доставка',
      'purity': 'чистота',
      'research': 'исследование',
      'Fast delivery': 'Быстрая доставка',
      'fast delivery': 'быстрая доставка',
      'excellent quality': 'отличное качество',
      'high-quality': 'высокое качество',
      'tissue repair': 'восстановление тканей',
      'muscle recovery': 'восстановление мышц',
      'weight loss': 'снижение веса'
    }
  };
  
  const langTrans = reviewTranslations[lang];
  
  return reviews.map(review => ({
    ...review,
    title: translateText(review.title, langTrans),
    content: translateText(review.content, langTrans)
  }));
}

/**
 * Helper function to translate text using a translation map
 */
function translateText(text: string, translations: Record<string, string>): string {
  let translated = text;
  
  // Sort by length descending to replace longer phrases first
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    // Case-insensitive replacement
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    translated = translated.replace(regex, (match) => {
      const replacement = translations[key];
      // Preserve case of first character
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  
  return translated;
}
