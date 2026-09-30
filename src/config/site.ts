import type { SocialLink } from '@/types/navigation';

export const siteConfig = {
  name: 'LUVMEX',
  tagline: 'Custom Software & Product Engineering',
  description:
    'We engineer premium custom software solutions, SaaS products, and AI-powered systems that scale with your business.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luvmex.com',

  contact: {
    email: 'luvmexsolutions@gmail.com',
  },

  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/luvmex', icon: 'linkedin' },
    { platform: 'Instagram', url: 'https://instagram.com/luvmexsolutions', icon: 'instagram' },
    { platform: 'YouTube', url: 'https://youtube.com/@luvmexsolutions', icon: 'youtube' },
    { platform: 'X', url: 'https://x.com/luvmexdev', icon: 'x' },
  ] satisfies SocialLink[],

  legal: {
    copyright: `© ${new Date().getFullYear()} LUVMEX. All rights reserved.`,
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
} as const;
