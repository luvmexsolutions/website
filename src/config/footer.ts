import type { FooterLinkGroup } from '@/types/navigation';

export const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'SaaS Products', href: '/services/saas' },
      { label: 'Web Applications', href: '/services/web-applications' },
      { label: 'Mobile Applications', href: '/services/mobile-applications' },
      { label: 'AI Solutions', href: '/services/ai-solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/#process' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];
