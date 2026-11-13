import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per case study, per language:
//   src/content/work/en/<slug>.md  and  src/content/work/zh-hk/<slug>.md
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    tag: z.string(),
    title: z.string(),
    summary: z.string(),
    // Optional measurable outcome. Shown on the card only when filled in.
    result: z.string().optional(),
  }),
});

export const collections = { work };
