import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/config/case-studies';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/seo/json-ld';
import { CaseStudyDetailView } from '@/components/views/case-study-detail-view';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.overview,
    openGraph: {
      title: `${study.title} | ${siteConfig.name}`,
      description: study.overview,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: study.title,
          description: study.overview,
          url: `${siteConfig.url}/case-studies/${study.slug}`,
          creator: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />
      <CaseStudyDetailView study={study} />
    </>
  );
}
