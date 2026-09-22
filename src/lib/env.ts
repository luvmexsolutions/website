import { z } from 'zod/v4';

/**
 * Environment variable validation.
 * Validates at import time — app fails fast if env is misconfigured.
 */
const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().optional().default('http://localhost:3000'),
  NEXT_PUBLIC_API_URL: z.url().optional().default('http://localhost:8000/api'),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

function createEnv() {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  });

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten());
    throw new Error('Invalid environment variables. Check .env.local against .env.example');
  }

  return parsed.data;
}

export const env = createEnv();
