import type { Metadata } from 'next';
import { caseStudies } from '@/config/case-studies';
import { CaseStudiesView } from '@/components/views/case-studies-view';

export const metadata: Metadata = {
  title: 'Engineering Case Studies & System Architecture',
  description:
    'Explore how LUVMEX designs, architects, and builds mission-critical software, SaaS platforms, and distributed systems for modern businesses.',
};

export default function CaseStudiesPage() {
  return <CaseStudiesView caseStudies={caseStudies} />;
}
