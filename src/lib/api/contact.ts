import type { ContactFormData, ContactResponse } from '@/types/contact';
import type { ApiResult } from '@/types/api';
import { api } from './client';

/**
 * Submit a contact/lead form to the backend API.
 *
 * MVP: Returns a mock success response for frontend development.
 * When the backend is ready, uncomment the real API call.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResult<ContactResponse>> {
  // ── When backend is ready, use this: ──
  // return api.post<ContactResponse>('/leads', data);

  // ── MVP: Mock response for frontend development ──
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Simulate basic validation to test error states
  if (!data.email || !data.email.includes('@')) {
    return {
      success: false,
      error: 'Invalid email address.',
      fieldErrors: { email: ['Please provide a valid email address.'] },
    };
  }

  return {
    success: true,
    data: {
      id: `lead-${Date.now()}`,
      message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.',
    },
  };
}
