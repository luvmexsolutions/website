/**
 * Contact form submission data.
 */
export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  projectType?: string;
  budget?: string;
  description: string;
  timeline?: string;
  honeypot?: string;
}

/**
 * Response from the backend after submitting a contact form.
 */
export interface ContactResponse {
  id: string;
  message: string;
}
