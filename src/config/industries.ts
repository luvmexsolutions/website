import type { Industry } from '@/types/services';

export const industries: Industry[] = [
  {
    title: 'Healthcare & MedTech',
    slug: 'healthcare',
    description:
      'HIPAA-compliant systems, patient management platforms, telehealth solutions, and medical data analytics.',
    icon: 'heart-pulse',
    seo: {
      title: 'Healthcare Software Development',
      description: 'LUMEX builds HIPAA-compliant healthcare software — EMR, telehealth, patient management, and medical analytics.',
    },
  },
  {
    title: 'Financial Services & FinTech',
    slug: 'fintech',
    description:
      'Secure payment systems, banking platforms, trading tools, and regulatory compliance solutions.',
    icon: 'trending-up',
    seo: {
      title: 'FinTech Software Development',
      description: 'LUMEX builds secure fintech solutions — payment systems, banking platforms, and compliance tools.',
    },
  },
  {
    title: 'E-Commerce & Retail',
    slug: 'ecommerce',
    description:
      'Scalable e-commerce platforms, inventory management, order processing, and customer engagement systems.',
    icon: 'shopping-bag',
    seo: {
      title: 'E-Commerce Software Development',
      description: 'LUMEX builds scalable e-commerce platforms — inventory, payments, and customer engagement.',
    },
  },
  {
    title: 'Logistics & Supply Chain',
    slug: 'logistics',
    description:
      'Fleet management, route optimization, warehouse automation, and real-time tracking systems.',
    icon: 'truck',
    seo: {
      title: 'Logistics Software Development',
      description: 'LUMEX builds logistics software — fleet management, route optimization, and supply chain automation.',
    },
  },
  {
    title: 'Education & EdTech',
    slug: 'education',
    description:
      'Learning management systems, virtual classrooms, assessment platforms, and educational content delivery.',
    icon: 'graduation-cap',
    seo: {
      title: 'EdTech Software Development',
      description: 'LUMEX builds education platforms — LMS, virtual classrooms, and assessment tools.',
    },
  },
  {
    title: 'Real Estate & PropTech',
    slug: 'real-estate',
    description:
      'Property management platforms, listing portals, tenant management, and real estate analytics.',
    icon: 'building',
    seo: {
      title: 'PropTech Software Development',
      description: 'LUMEX builds real estate software — property management, listing portals, and analytics.',
    },
  },
];
