import type { SocialLink } from '@/types/navigation';

export const siteConfig = {
  name: 'LUMEX',
  tagline: 'Custom Software & Product Engineering',
  description:
    'We engineer premium custom software solutions, SaaS products, and AI-powered systems that scale with your business.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lumex.dev',

  contact: {
    email: 'hello@lumex.dev',
    phone: '+1 (555) 000-0000',
    address: '',
  },

  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/lumex', icon: 'linkedin' },
    { platform: 'GitHub', url: 'https://github.com/luvmexsolutions', icon: 'github' },
    { platform: 'X', url: 'https://x.com/lumexdev', icon: 'x' },
  ] satisfies SocialLink[],

  legal: {
    copyright: `© ${new Date().getFullYear()} LUMEX. All rights reserved.`,
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
} as const;
