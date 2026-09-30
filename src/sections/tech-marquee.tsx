'use client';

import { motion } from 'motion/react';

const techs = [
  'TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL',
  'AWS', 'Python', 'Docker', 'GraphQL', 'Kubernetes', 'TensorFlow',
  'Redis', 'Stripe', 'Vercel', 'GitHub Actions', 'LangChain',
];

// Doubled for seamless infinite loop
const doubled = [...techs, ...techs];

export function TechMarquee() {
  return (
    <section className="relative border-t border-b border-surface-border/40 py-5 overflow-hidden bg-surface-secondary/40">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-surface-primary to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-surface-primary to-transparent z-10" />

      <div className="flex overflow-hidden select-none">
        <motion.ul
          className="flex items-center gap-0 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((tech, i) => (
            <li key={i} className="flex items-center flex-shrink-0">
              <span className="text-sm sm:text-base font-mono font-medium text-content-secondary hover:text-brand-300 transition-colors duration-300 cursor-default px-5 sm:px-7 whitespace-nowrap">
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600/50 flex-shrink-0" />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
