import type { ProcessStep } from '@/types/services';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business, users, and goals. Together we define the scope, identify technical requirements, and create a clear project roadmap.',
    icon: 'search',
  },
  {
    step: 2,
    title: 'Architecture & Design',
    description:
      'Our architects design a scalable system architecture while our designers create intuitive user interfaces. Every decision is driven by your business goals.',
    icon: 'drafting-compass',
  },
  {
    step: 3,
    title: 'Engineering & Development',
    description:
      'We build your product iteratively with regular demos and feedback cycles. Clean code, thorough testing, and continuous integration ensure quality at every step.',
    icon: 'code',
  },
  {
    step: 4,
    title: 'Quality Assurance',
    description:
      'Rigorous testing across devices, browsers, and edge cases. Performance optimization, accessibility audits, and security reviews ensure production-readiness.',
    icon: 'shield-check',
  },
  {
    step: 5,
    title: 'Launch & Scale',
    description:
      'We handle deployment, monitoring, and optimization. Post-launch, we provide ongoing support, maintenance, and feature development as your product grows.',
    icon: 'rocket',
  },
];
