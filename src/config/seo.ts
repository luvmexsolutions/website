import type { SiteMetadata } from '@/types/seo';

export const seoConfig: SiteMetadata = {
  siteName: 'LUVMEX',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://luvmex.dev',
  defaultTitle: 'LUVMEX — Custom Software & Product Engineering',
  defaultDescription:
    'LUVMEX builds premium custom software solutions, SaaS products, web & mobile applications, and AI-powered systems. We engineer software that scales.',
  ogImage: '/images/og-default.png',
  twitterHandle: '@luvmexdev',
};
