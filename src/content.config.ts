import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    part: z.enum(['anatomy-physiology', 'pathology']),
    group: z.string(),
    order: z.number().int(),
    summary: z.string().max(220),
    highYield: z.array(z.string()).min(3).max(6),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['foundational', 'intermediate', 'advanced']).default('intermediate'),
    examRelevance: z.enum(['core', 'high', 'extended']).default('high'),
    organ: z.string().default('Whole GI system'),
    clinicalImages: z.array(z.object({ src: z.string(), alt: z.string(), kind: z.string() })).default([]),
  }),
});

export const collections = { topics };
