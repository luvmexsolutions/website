import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { submitContactForm } from './contact';

describe('submitContactForm', () => {
  const validPayload = {
    name: 'Sarah Connor',
    email: 'sarah@skynet-defense.org',
    service: 'ai-solutions' as const,
    description: 'Autonomous threat detection pipeline architecture.',
  };

  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.stubGlobal('fetch', mockFetch);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sends POST request to /api/contact with JSON payload', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          data: { id: 'lead-123', message: 'Thank you!' },
        }),
    });

    const res = await submitContactForm(validPayload);

    expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validPayload),
    });

    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data.id).toBe('lead-123');
    }
  });

  it('returns error result when API responds with an error', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: () =>
        Promise.resolve({
          success: false,
          error: 'Validation failed.',
          fieldErrors: { email: ['Invalid email'] },
        }),
    });

    const res = await submitContactForm({
      ...validPayload,
      email: 'bad',
    });

    expect(res.success).toBe(false);
    if (!res.success) {
      expect(res.error).toBe('Validation failed.');
      expect(res.fieldErrors?.email).toContain('Invalid email');
    }
  });

  it('returns connection error on fetch failure', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));

    const res = await submitContactForm(validPayload);

    expect(res.success).toBe(false);
    if (!res.success) {
      expect(res.error).toContain('Unable to connect');
    }
  });

  it('handles malformed JSON response gracefully', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.reject(new Error('Invalid JSON')),
    });

    const res = await submitContactForm(validPayload);

    expect(res.success).toBe(false);
    if (!res.success) {
      expect(res.error).toBeDefined();
    }
  });
});
