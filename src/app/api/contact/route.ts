import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/features/contact/schemas/contact-schema';

/**
 * POST /api/contact
 *
 * Server-side proxy for contact form submissions.
 * - Re-validates with Zod (defense-in-depth)
 * - Checks honeypot field
 * - Rate-limits by IP (10 requests per minute)
 * - Forwards to the backend API (API_URL env var)
 * - Falls back to mock response when no backend is configured
 */

// ── Simple in-memory rate limiter ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Periodic cleanup to prevent memory leak (runs every 5 min)
if (typeof globalThis !== 'undefined') {
  const CLEANUP_INTERVAL = 5 * 60_000;
  const cleanupKey = '__contact_rate_limit_cleanup__';
  if (!(globalThis as Record<string, unknown>)[cleanupKey]) {
    (globalThis as Record<string, unknown>)[cleanupKey] = true;
    setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of rateLimitMap) {
        if (now > entry.resetAt) rateLimitMap.delete(key);
      }
    }, CLEANUP_INTERVAL);
  }
}

export async function POST(request: NextRequest) {
  try {
    // ── Rate limiting ──
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a moment and try again.',
        },
        { status: 429 }
      );
    }

    // ── Parse request body ──
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    // ── Honeypot check ──
    if (body.honeypot) {
      // Silently accept but discard (don't reveal the trap)
      return NextResponse.json({
        success: true,
        data: {
          id: `lead-${Date.now()}`,
          message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.',
        },
      });
    }

    // ── Server-side Zod validation ──
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of validation.error.issues) {
        const path = String(issue.path[0]);
        if (!fieldErrors[path]) fieldErrors[path] = [];
        fieldErrors[path].push(issue.message);
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please check the highlighted fields.',
          fieldErrors,
        },
        { status: 422 }
      );
    }

    // ── Forward to backend API ──
    const backendUrl = process.env.API_URL;

    if (backendUrl) {
      const endpoint = process.env.API_CONTACT_ENDPOINT || '/leads';
      const backendResponse = await fetch(`${backendUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
        signal: AbortSignal.timeout(10_000), // 10s timeout
      });

      const backendData = await backendResponse.json().catch(() => ({
        message: 'An unexpected error occurred.',
      }));

      if (!backendResponse.ok) {
        return NextResponse.json(
          {
            success: false,
            error: backendData.message || 'Failed to submit. Please try again.',
            fieldErrors: backendData.fieldErrors,
          },
          { status: backendResponse.status }
        );
      }

      return NextResponse.json({ success: true, data: backendData });
    }

    // ── Fallback: No backend configured (development mode) ──
    console.warn(
      '[LUVMEX] API_URL not configured — returning mock response. Set API_URL in .env.local for production.'
    );

    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      data: {
        id: `lead-${Date.now()}`,
        message:
          'Thank you for reaching out! We\'ll get back to you within 24 hours.',
      },
    });
  } catch (error) {
    console.error('[LUVMEX] Contact API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred. Please try again or email us directly.',
      },
      { status: 500 }
    );
  }
}
