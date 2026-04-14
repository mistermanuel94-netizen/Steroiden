import { defineCollection, z } from 'astro:content';

// FAQ schema for product pages
const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

// Review schema for product pages
const reviewSchema = z.object({
  author: z.string(),
  rating: z.number().min(1).max(5),
  date: z.string(),
  title: z.string(),
  content: z.string(),
  verified: z.boolean().default(true),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    primary_keyword: z.string(),
    search_volume: z.union([z.number(), z.string()]),
    urlPath: z.string().optional(),
    lang: z.enum(['en', 'nl', 'de', 'fr', 'es', 'it', 'ru']).optional(),
    aliases: z.array(z.string()).optional(),
    active_ingredient: z.string().optional(),
    concentration: z.string().nullable().optional(),
    form: z.enum(['injectable', 'oral', 'capsule', 'tablet', 'cream', 'gel', 'patch', 'drops']).optional(),
    volume: z.string().optional(),
    manufacturer: z.string().optional(),
    half_life: z.string().optional(),
    detection_time: z.string().optional(),
    dosage_range: z.string().optional(),
    anabolic_rating: z.number().optional(),
    androgenic_rating: z.number().optional(),
    aromatization: z.enum(['none', 'low', 'moderate', 'high']).optional(),
    hepatotoxicity: z.enum(['none', 'low', 'moderate', 'high']).optional(),
    water_retention: z.enum(['none', 'low', 'moderate', 'high']).optional(),
    package_sizes: z.array(z.string()),
    moq: z.number(),
    price: z.number().optional(),
    price_range: z.string(),
    short_description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    images: z.array(z.string()),
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    cycle_info: z.object({
      recommended_duration: z.string(),
      stack_suggestions: z.array(z.string()),
      pct_required: z.boolean(),
    }).optional(),
    faqs: z.array(faqSchema).nullable().optional(),
    reviews: z.array(reviewSchema).optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'nl', 'de', 'fr', 'es', 'it', 'ru']).default('en'),
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('Steroiden Team'),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    seo: z.object({
      primaryKeyword: z.string(),
      searchVolume: z.number(),
      secondaryKeywords: z.array(z.object({
        keyword: z.string(),
        volume: z.number(),
      })).optional(),
    }).optional(),
  }),
});

const siteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'nl', 'de', 'fr', 'es', 'it', 'ru']),
    email: z.string(),
    telegram: z.string(),
    seo: z.object({
      homeName: z.string(),
      homeDescription: z.string(),
      organizationDescription: z.string(),
      primaryKeyword: z.string().optional(),
      searchVolume: z.number().optional(),
      secondaryKeywords: z.array(z.object({
        keyword: z.string(),
        volume: z.number(),
      })).optional(),
    }),
  }),
});

const pageCopyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'nl', 'de', 'fr', 'es', 'it', 'ru']),
    page: z.string(),
    copy: z.record(z.any()),
  }),
});

export const collections = {
  'products': productsCollection,
  'blog': blogCollection,
  'site': siteCollection,
  'pageCopy': pageCopyCollection,
};
