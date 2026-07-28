import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Prompts', 'Automatizaciones', 'Herramientas', 'Guías', 'Plantillas']),
    delivery: z.enum(['prompt', 'file', 'guide', 'link']),
    gated: z.boolean().optional().default(false),
    date: z.string(),
    description: z.string(),
    tiktok: z.string().url().optional(),
    contents: z.array(z.string()).optional(),
    content: z.string().optional(),
  }),
});

export const collections = { resources };
