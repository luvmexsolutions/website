import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '@/config/industries';
import { siteConfig } from '@/config/site';
import { IndustryDetailView } from '@/components/views/industry-detail-view';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industry.seo.title,
    description: industry.seo.description,
    openGraph: {
      title: `${industry.title} | ${siteConfig.name}`,
      description: industry.seo.description,
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const verticalBenefits = [
    {
      title: 'Regulatory & Security Compliance',
      description:
        'Engineered to meet specific industry benchmarks, cryptographic standards, data residency, and audit log mandates.',
    },
    {
      title: 'Mission-Critical Reliability',
      description:
        'Architected with zero single points of failure, redundant services, and automated disaster recovery protocols.',
    },
    {
      title: 'Domain Workflow Automation',
      description:
        'Digitize complex human workflows, manual handoffs, and external legacy system dependencies seamlessly.',
    },
    {
      title: 'Real-Time Insights & Auditability',
      description:
        'Full observability across transactions and operational pipelines with granular telemetry and reporting.',
    },
  ];

  return (
    <IndustryDetailView
      industry={industry}
      verticalBenefits={verticalBenefits}
    />
  );
}
