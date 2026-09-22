'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { FormSuccess } from './form-success';
import { contactSchema, type ContactFormData } from '../schemas/contact-schema';
import { submitContactForm } from '@/lib/api/contact';

const serviceOptions = [
  { value: 'custom-software', label: 'Custom Software Solutions' },
  { value: 'saas', label: 'SaaS Product Development' },
  { value: 'web-app', label: 'Modern Web Application' },
  { value: 'mobile-app', label: 'Mobile Application (iOS / Android)' },
  { value: 'ai-solutions', label: 'AI & Machine Learning Solutions' },
  { value: 'domain-solutions', label: 'Domain-Specific Vertical System' },
  { value: 'other', label: 'Other / Custom Architecture Inquiry' },
];

const budgetOptions = [
  { value: '<25k', label: '< $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k+', label: '$100,000+' },
  { value: 'not-sure', label: 'Still scoping / Not sure' },
];

const timelineOptions = [
  { value: 'asap', label: 'Immediate / ASAP' },
  { value: '1-3-months', label: '1 – 3 Months' },
  { value: '3-6-months', label: '3 – 6 Months' },
  { value: '6-months+', label: '6+ Months' },
  { value: 'flexible', label: 'Flexible / Research Phase' },
];

interface FormErrors {
  [key: string]: string | undefined;
}

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'custom-software',
    budget: '50k-100k',
    timeline: '1-3-months',
    description: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [leadId, setLeadId] = useState<string>('');

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side Zod validation for instant UX feedback
    const validationResult = contactSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of validationResult.error.issues) {
        const path = issue.path[0] as string;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setStatus('idle');
      return;
    }

    // Set submitting state
    setStatus('submitting');
    setErrors({});

    try {
      // Call typed API service layer (which isolates backend boundary)
      const res = await submitContactForm(validationResult.data);

      if (res.success) {
        setStatus('success');
        setServerMessage(res.data.message);
        setLeadId(res.data.id);
      } else {
        setStatus('error');
        setServerMessage(res.error || 'Failed to submit form. Please try again.');
        if (res.fieldErrors) {
          const mappedErrors: FormErrors = {};
          for (const [k, v] of Object.entries(res.fieldErrors)) {
            if (Array.isArray(v) && v.length > 0) {
              mappedErrors[k] = v[0];
            }
          }
          setErrors(mappedErrors);
        }
      }
    } catch {
      setStatus('error');
      setServerMessage('A network error occurred. Please try again or email us directly.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'custom-software',
      budget: '50k-100k',
      timeline: '1-3-months',
      description: '',
      honeypot: '',
    });
    setErrors({});
    setStatus('idle');
    setServerMessage('');
    setLeadId('');
  };

  if (status === 'success') {
    return (
      <FormSuccess
        message={serverMessage}
        leadId={leadId}
        onReset={handleReset}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-surface-border bg-surface-secondary/70 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-xl"
    >
      {/* General error message banner */}
      {status === 'error' && (
        <div
          role="alert"
          className="mb-8 flex items-start gap-3 rounded-lg border border-status-error/40 bg-status-error/10 p-4 text-sm text-status-error"
        >
          <Icon name="alert-circle" size={18} className="mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="font-medium">Submission Error</p>
            <p className="mt-0.5 text-xs opacity-90">{serverMessage}</p>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from screen reader & sighted users) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website-hp">Do not fill this field</label>
        <input
          id="website-hp"
          type="text"
          name="honeypot"
          value={formData.honeypot || ''}
          onChange={(e) => handleChange('honeypot', e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-6">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Full Name"
            id="contact-name"
            required
            placeholder="Jane Doe"
            value={formData.name || ''}
            error={errors.name}
            onChange={(e) => handleChange('name', e.target.value)}
            disabled={status === 'submitting'}
          />
          <Input
            label="Company / Organization"
            id="contact-company"
            placeholder="Acme Corp"
            value={formData.company || ''}
            error={errors.company}
            onChange={(e) => handleChange('company', e.target.value)}
            disabled={status === 'submitting'}
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Work Email"
            id="contact-email"
            type="email"
            required
            placeholder="jane@company.com"
            value={formData.email || ''}
            error={errors.email}
            onChange={(e) => handleChange('email', e.target.value)}
            disabled={status === 'submitting'}
          />
          <Input
            label="Phone Number"
            id="contact-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone || ''}
            error={errors.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            disabled={status === 'submitting'}
          />
        </div>

        {/* Primary Service Selection */}
        <Select
          label="Primary Service Interest"
          id="contact-service"
          required
          options={serviceOptions}
          value={formData.service || 'custom-software'}
          error={errors.service}
          onChange={(e) => handleChange('service', e.target.value)}
          disabled={status === 'submitting'}
        />

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Select
            label="Target Budget"
            id="contact-budget"
            options={budgetOptions}
            value={formData.budget || '50k-100k'}
            error={errors.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            disabled={status === 'submitting'}
          />
          <Select
            label="Target Timeline"
            id="contact-timeline"
            options={timelineOptions}
            value={formData.timeline || '1-3-months'}
            error={errors.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            disabled={status === 'submitting'}
          />
        </div>

        {/* Project Description */}
        <Textarea
          label="Project Overview & Requirements"
          id="contact-description"
          required
          rows={5}
          placeholder="Briefly describe what you are looking to engineer, key constraints, current infrastructure, or specific outcomes..."
          value={formData.description || ''}
          error={errors.description}
          onChange={(e) => handleChange('description', e.target.value)}
          disabled={status === 'submitting'}
        />

        {/* Form Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            isLoading={status === 'submitting'}
            disabled={status === 'submitting'}
          >
            <span>{status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}</span>
            {status !== 'submitting' && <Icon name="arrow-right" size={16} />}
          </Button>

          <p className="mt-3 text-center text-xs text-content-tertiary">
            Strict confidentiality guaranteed. We respect your intellectual property and sign NDAs upon request.
          </p>
        </div>
      </div>
    </form>
  );
}
