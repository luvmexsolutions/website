import { describe, it, expect } from 'vitest';
import { submitContactForm } from './contact';

describe('submitContactForm', () => {
  const validPayload = {
    name: 'Sarah Connor',
    email: 'sarah@skynet-defense.org',
    service: 'ai-solutions' as const,
    description: 'Autonomous threat detection pipeline architecture.',
  };

  it('successfully returns a mock lead response for valid submission', async () => {
    const res = await submitContactForm(validPayload);
    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data).toBeDefined();
      expect(res.data.id).toContain('lead-');
    }
  });

  it('returns failure response when email is malformed', async () => {
    const res = await submitContactForm({
      ...validPayload,
      email: 'invalid-email',
    });
    expect(res.success).toBe(false);
    if (!res.success) {
      expect(res.error).toBeDefined();
    }
  });
});
