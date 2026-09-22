import type { TechnologyCategory } from '@/types/services';

export const technologies: TechnologyCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'React Native' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'Go' },
      { name: 'GraphQL' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'Elasticsearch' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS' },
      { name: 'Google Cloud' },
      { name: 'Vercel' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'CI/CD' },
    ],
  },
  {
    category: 'AI & Data',
    items: [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'OpenAI' },
      { name: 'LangChain' },
      { name: 'Data Pipelines' },
    ],
  },
];
