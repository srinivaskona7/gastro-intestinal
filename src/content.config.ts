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
  }),
});

export const collections = { topics };
