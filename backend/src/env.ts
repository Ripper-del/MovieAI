import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(16),
  TMDB_API_KEY: z.string().min(10),
  OPENAI_API_KEY: z.string().min(10),
  OPENAI_MODEL: z.string().default('gpt-4o-mini'),
  PORT: z.coerce.number().default(4000)
});

export type Env = z.infer<typeof schema>;

export const env: Env = schema.parse(process.env);
