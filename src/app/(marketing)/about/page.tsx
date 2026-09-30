import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/config/site';
import { AboutView } from '@/components/views/about-view';

export const metadata: Metadata = {
  title: 'About LUVMEX — Software & Product Engineering',
  description:
    'LUVMEX is a custom software and product engineering company. We engineer resilient, scalable software systems with zero technical debt.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Architectural Durability',
      description:
        'We build systems designed to withstand 5 to 10 years of business evolution. Every schema, boundary, and dependency is scrutinized for long-term viability.',
      icon: 'blocks',
    },
    {
      title: 'Performance as a Feature',
      description:
        'Latency directly impacts conversion and operational overhead. We profile memory, audit queries, and optimize bundle sizes down to the kilobyte.',
      icon: 'zap',
    },
    {
      title: 'Complete IP Transparency',
      description:
        'You own 100% of your source code, infrastructure declarations, and data pipelines from day one. No hidden dependencies, no proprietary runtime lock-in.',
      icon: 'shield',
    },
    {
      title: 'Senior-Led Engineering',
      description:
        'We do not bait-and-switch with junior contractors. You collaborate directly with principal architects and senior engineers who have shipped at scale.',
      icon: 'users',
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About LUVMEX',
          description: 'LUVMEX is a custom software and product engineering company.',
          url: `${siteConfig.url}/about`,
          mainEntity: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />
      <AboutView principles={principles} />
    </>
  );
}
