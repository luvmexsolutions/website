import type { Metadata } from 'next';
import { CareersView } from '@/components/views/careers-view';

export const metadata: Metadata = {
  title: 'Careers at LUVMEX — Senior Engineering Roles',
  description:
    'Join our product engineering team. We build mission-critical custom software and distributed systems.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CareersPage() {
  const roles = [
    {
      title: 'Principal Distributed Systems Architect',
      type: 'Full-time / Remote',
      location: 'Global (Any Timezone)',
      description:
        'Lead architectural evaluations, high-throughput database topology designs, and distributed consensus implementations for client platforms.',
      stack: ['Go', 'Rust', 'PostgreSQL', 'Kafka', 'Raft', 'Kubernetes'],
    },
    {
      title: 'Senior Full-Stack Engineer (React / Next.js / Node.js)',
      type: 'Full-time / Remote',
      location: 'Global (Any Timezone)',
      description:
        'Engineer high-performance client applications, component design systems, and resilient serverless micro-services with TypeScript.',
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    },
    {
      title: 'AI / ML Solutions Engineer',
      type: 'Full-time / Remote',
      location: 'Global (Any Timezone)',
      description:
        'Design and deploy production-grade LLM workflows, data ingestion pipelines, vector databases, and custom model inference layers.',
      stack: ['Python', 'PyTorch', 'FastAPI', 'pgvector', 'LangChain', 'AWS Bedrock'],
    },
  ];

  return <CareersView roles={roles} />;
}
