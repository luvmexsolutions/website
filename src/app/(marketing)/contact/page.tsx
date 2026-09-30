import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/config/site';
import { ContactView } from '@/components/views/contact-view';

export const metadata: Metadata = {
  title: 'Contact Us & Start Your Project',
  description:
    'Connect directly with the LUVMEX engineering team. Get a detailed technical consultation and architecture estimate within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact LUVMEX',
          description: 'Get in touch with LUVMEX for custom software engineering.',
          url: `${siteConfig.url}/contact`,
        }}
      />
      <ContactView />
    </>
  );
}
