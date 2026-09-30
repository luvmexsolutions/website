import type { Metadata } from 'next';
import { BlogView } from '@/components/views/blog-view';

export const metadata: Metadata = {
  title: 'Engineering Blog & Architectural Insights | LUVMEX',
  description:
    'Technical deep-dives on distributed systems, Next.js architecture, database optimization, and high-concurrency software engineering.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Architecting Next.js 16 Applications for Zero Frontend-Database Coupling',
      slug: 'architecting-nextjs-16-frontend-backend-boundary',
      date: 'September 2026',
      readTime: '7 min read',
      tag: 'Architecture',
      description:
        'Why separating your client UI from direct database access with a typed API service layer ensures long-term maintainability, auditability, and team scalability.',
      image: 'https://picsum.photos/seed/clean-architecture-code/800/500',
      author: {
        name: 'Alexander Vance',
        role: 'Chief Architect',
        avatar: 'https://picsum.photos/seed/alex-vance-architect/100/100',
      },
    },
    {
      title: 'Designing Double-Entry Ledgers for High-Frequency FinTech Applications',
      slug: 'double-entry-ledgers-high-frequency-fintech',
      date: 'August 2026',
      readTime: '11 min read',
      tag: 'FinTech',
      description:
        'A practical architectural guide to avoiding transaction race conditions, achieving sub-10ms reconciliation, and ensuring immutable audit logs.',
      image: 'https://picsum.photos/seed/cryptography-ledger-data/800/500',
      author: {
        name: 'Sophia Patel',
        role: 'Head of SecOps',
        avatar: 'https://picsum.photos/seed/sophia-patel-cloud/100/100',
      },
    },
    {
      title: 'Real-Time WebRTC Media Relays and HIPAA Telemetry Ingestion',
      slug: 'webrtc-media-relays-hipaa-telemetry',
      date: 'July 2026',
      readTime: '9 min read',
      tag: 'MedTech',
      description:
        'How we built a fault-tolerant medical video and sensor stream architecture with zero-knowledge encryption and sub-50ms peer-to-peer latency.',
      image: 'https://picsum.photos/seed/webrtc-streaming-network/800/500',
      author: {
        name: 'Dr. Elena Rostova',
        role: 'VP of AI & ML',
        avatar: 'https://picsum.photos/seed/elena-rostova-ai/100/100',
      },
    },
  ];

  return <BlogView articles={articles} />;
}
