import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '../input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeDefined();
  });

  it('generates id from label when no id provided', () => {
    render(<Input label="Full Name" />);
    const input = screen.getByLabelText('Full Name');
    expect(input.id).toBe('full-name');
  });

  it('uses provided id over generated one', () => {
    render(<Input label="Email" id="custom-email" />);
    const input = screen.getByLabelText('Email');
    expect(input.id).toBe('custom-email');
  });

  it('shows required asterisk', () => {
    render(<Input label="Name" required />);
    const asterisk = document.querySelector('[aria-hidden="true"]');
    expect(asterisk?.textContent).toBe('*');
  });

  it('renders error message with proper aria attributes', () => {
    render(<Input label="Email" id="email" error="Invalid email" />);
    const input = screen.getByLabelText('Email');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toBe('email-error');

    const errorMsg = screen.getByRole('alert');
    expect(errorMsg.textContent).toBe('Invalid email');
  });

  it('does not set aria-invalid when no error', () => {
    render(<Input label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input.getAttribute('aria-invalid')).toBe('false');
  });

  it('applies error border styling', () => {
    render(<Input label="Email" error="Required" />);
    const input = screen.getByLabelText('Email');
    expect(input.className).toContain('border-status-error');
  });
});
