import { describe, it, expect } from 'vitest';
import { contactSchema } from './contact-schema';

describe('contactSchema', () => {
  const validData = {
    name: 'Alex Mercer',
    company: 'NextGen Systems',
    email: 'alex@nextgen.com',
    phone: '+1 555 123 4567',
    service: 'custom-software' as const,
    budget: '50k-100k' as const,
    timeline: '1-3-months' as const,
    description: 'We need to design a scalable real-time medical telemetry system.',
  };

  it('validates a correct payload', () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('fails when name is too short', () => {
    const result = contactSchema.safeParse({ ...validData, name: 'A' });
    expect(result.success).toBe(false);
  });

  it('fails when email is invalid', () => {
    const result = contactSchema.safeParse({ ...validData, email: 'not-an-email' });
    expect(result.success).toBe(false);
  });

  it('fails when description is under 10 characters', () => {
    const result = contactSchema.safeParse({ ...validData, description: 'Short' });
    expect(result.success).toBe(false);
  });

  it('fails if honeypot is filled (bot trap)', () => {
    const result = contactSchema.safeParse({
      ...validData,
      honeypot: 'spam-bot-value',
    });
    expect(result.success).toBe(false);
  });
});
