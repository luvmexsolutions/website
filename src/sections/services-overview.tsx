'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { cn } from '@/lib/utils';

// Image-led service cards with real Picsum images
const imageServices = [
  {
    slug: 'custom-software',
    title: 'Custom Software',
    description: 'Tailored solutions built from the ground up to solve complex business challenges with precision.',
    image: 'https://picsum.photos/seed/developers-coding-office/900/600',
    span: 'lg:col-span-2 lg:row-span-2',
    aspectClass: 'h-72 sm:h-80 lg:h-full lg:min-h-[360px]',
    accentColor: 'from-brand-600/60',
  },
  {
    slug: 'saas',
    title: 'SaaS Products',
    description: 'Scalable, multi-tenant platforms designed for seamless delivery and user experience.',
    image: 'https://picsum.photos/seed/server-room-dark/600/400',
    span: 'lg:col-span-1',
    aspectClass: 'h-64 lg:h-full lg:min-h-[170px]',
    accentColor: 'from-indigo-700/60',
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Leveraging LLMs and machine learning to create smarter, automated operations.',
    image: 'https://picsum.photos/seed/neural-network-purple/600/400',
    span: 'lg:col-span-1',
    aspectClass: 'h-64 lg:h-full lg:min-h-[170px]',
    accentColor: 'from-violet-700/70',
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Apps',
    description: 'Cross-platform and native apps for iOS and Android with buttery-smooth UX.',
    image: 'https://picsum.photos/seed/mobile-dev-dark/600/400',
    span: 'lg:col-span-1',
    aspectClass: 'h-64',
    accentColor: 'from-sky-700/60',
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    description: 'High-performance React & Next.js apps, SSR-optimized and Core Web Vitals ready.',
    image: 'https://picsum.photos/seed/web-dashboard-dark/600/400',
    span: 'lg:col-span-1',
    aspectClass: 'h-64',
    accentColor: 'from-emerald-800/60',
  },
  {
    slug: 'domain-solutions',
    title: 'Domain Solutions',
    description: 'Industry-specific software — healthcare, fintech, logistics — with deep domain expertise.',
    image: 'https://picsum.photos/seed/tech-industry-data/600/400',
    span: 'lg:col-span-1',
    aspectClass: 'h-64',
    accentColor: 'from-amber-800/60',
  },
];

function ServiceImageCard({ service, index }: { service: typeof imageServices[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group relative overflow-hidden rounded-[1.75rem] cursor-pointer', service.span)}
    >
      <Link href={`/services/${service.slug}`} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary rounded-[1.75rem]">
        {/* Background image with parallax */}
        <div className={cn('relative w-full overflow-hidden', service.aspectClass)}>
          <motion.div style={{ y: imageY }} className="absolute inset-[-8%] w-[116%] h-[116%]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center grayscale-[0.25] group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </motion.div>

          {/* Dark gradient overlay */}
          <div className={cn('absolute inset-0 bg-gradient-to-t', service.accentColor, 'via-black/40 to-black/10 group-hover:opacity-90 transition-opacity duration-500')} />

          {/* Top-right arrow (reveal on hover) */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-400">
            <ArrowUpRight size={14} weight="bold" className="text-white" />
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
            <div className="overflow-hidden">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-[30ms]">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-[36ch] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-[60ms]">
              {service.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="relative">
      {/* Section header: split layout */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-[-0.025em] text-content-primary leading-[1.08] max-w-[14ch]"
        >
          Engineered for Resilience &amp; Scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xs text-sm text-content-secondary leading-relaxed md:text-right"
        >
          Architecting robust digital solutions that adapt and grow — ensuring peak performance under any load.
        </motion.p>
      </div>

      {/* Image-led bento grid — grid-flow-dense prevents empty cells */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-auto grid-flow-dense">
        {imageServices.map((s, i) => (
          <ServiceImageCard key={s.slug} service={s} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
