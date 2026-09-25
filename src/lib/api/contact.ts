import type { ContactFormData, ContactResponse } from '@/types/contact';
import type { ApiResult } from '@/types/api';

/**
 * Submit a contact/lead form to the internal API route.
 *
 * Flow: Client → /api/contact (Next.js API route) → Backend API
 *
 * The API route handles:
 * - Server-side re-validation
 * - Honeypot verification
 * - Rate limiting
 * - Proxying to the real backend (when API_URL is configured)
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResult<ContactResponse>> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const body = await res.json().catch(() => ({
      success: false,
      error: 'Invalid response from server.',
    }));

    if (!res.ok || !body.success) {
      return {
        success: false,
        error: body.error || 'Failed to submit form. Please try again.',
        fieldErrors: body.fieldErrors,
      };
    }

    return { success: true, data: body.data };
  } catch {
    return {
      success: false,
      error: 'Unable to connect. Please check your internet and try again.',
    };
  }
}
