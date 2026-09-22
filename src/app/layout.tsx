import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/seo/json-ld';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    template: `%s | ${seoConfig.siteName}`,
    default: seoConfig.defaultTitle,
  },
  description: seoConfig.defaultDescription,
  openGraph: {
    type: 'website',
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [{ url: seoConfig.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-surface-primary text-content-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-600 text-white rounded-md font-medium shadow-lg"
        >
          Skip to content
        </a>

        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phone,
            sameAs: siteConfig.socialLinks.map((link) => link.url),
          }}
        />

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
