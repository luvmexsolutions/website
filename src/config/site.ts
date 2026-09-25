import type { SocialLink } from '@/types/navigation';

export const siteConfig = {
  name: 'LUVMEX',
  tagline: 'Custom Software & Product Engineering',
  description:
    'We engineer premium custom software solutions, SaaS products, and AI-powered systems that scale with your business.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luvmex.dev',

  contact: {
    email: 'hello@luvmex.dev',
  },

  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/luvmex', icon: 'linkedin' },
    { platform: 'GitHub', url: 'https://github.com/luvmexsolutions', icon: 'github' },
    { platform: 'X', url: 'https://x.com/luvmexdev', icon: 'x' },
  ] satisfies SocialLink[],

  legal: {
    copyright: `© ${new Date().getFullYear()} LUVMEX. All rights reserved.`,
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
} as const;
