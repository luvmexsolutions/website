import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | LUVMEX',
  description: 'LUVMEX privacy policy and data governance practices.',
};

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container narrow>
        <div className="bezel-outer p-8 sm:p-12 rounded-3xl bg-surface-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
            <span>LEGAL & GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary mb-3 font-display">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-content-tertiary mb-10">
            Last updated: September 2026
          </p>

          <div className="space-y-6 text-sm sm:text-base text-content-secondary leading-relaxed">
            <p>
              At {siteConfig.name}, we hold privacy, confidentiality, and data integrity to the highest standard. This Privacy Policy describes how we collect, use, and protect your information when interacting with our website and engineering consultation services.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-content-primary pt-4 font-display">
              1. Information We Collect
            </h2>
            <p>
              We collect information you explicitly submit through our contact and project inquiry forms, such as your name, corporate email address, organization name, phone number, and project scope details.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-content-primary pt-4 font-display">
              2. How We Use Your Information
            </h2>
            <p>
              Information provided is used strictly to evaluate project inquiries, prepare technical estimates, schedule discovery sessions, and communicate directly regarding your software engineering requirements. We never sell, lease, or distribute your information to third-party advertisers.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-content-primary pt-4 font-display">
              3. Mutual Non-Disclosure & Confidentiality
            </h2>
            <p>
              All proprietary architecture details, code snippets, business plans, and intellectual property shared with LUVMEX during technical discovery are governed by strict confidentiality obligations and standard mutual non-disclosure agreements (NDAs).
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-content-primary pt-4 font-display">
              4. Contact & Inquiries
            </h2>
            <p>
              If you have questions regarding our privacy practices or wish to request data deletion, contact us at{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-400 hover:text-brand-300 underline underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
