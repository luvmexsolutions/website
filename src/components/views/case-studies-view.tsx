'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { TechBadge } from '@/components/common/tech-badge';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  ArrowRight,
  Sparkle,
  TrendUp,
  Cpu,
} from '@phosphor-icons/react';
import type { CaseStudy } from '@/config/case-studies';

const caseStudyImages: Record<string, string> = {
  'telehealth-data-platform': 'https://picsum.photos/seed/telehealth-dashboard/1000/650',
  'fintech-clearing-engine': 'https://picsum.photos/seed/fintech-clearing-chart/1000/650',
  'autonomous-logistics-optimizer': 'https://picsum.photos/seed/fleet-routing-map/1000/650',
};

export function CaseStudiesView({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-6"
          >
            <Sparkle size={14} className="text-brand-400" />
            <span>PROVEN ENGINEERING RESULTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.1]"
          >
            Architecture in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:via-indigo-300 dark:to-white">
              Practice
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-content-secondary leading-relaxed"
          >
            Real systems engineered for high concurrency, strict compliance, and measurable business impact. Here is how we turn complex technical requirements into resilient software.
          </motion.p>
        </div>

        {/* Case Studies Detailed List with Imagery */}
        <div className="space-y-12 md:space-y-16 mb-24 md:mb-32">
          {caseStudies.map((study, idx) => {
            const image = caseStudyImages[study.slug] || 'https://picsum.photos/seed/software-case/1000/650';

            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bezel-outer p-6 sm:p-10 rounded-3xl bg-surface-card hover:border-brand-500/40 transition-all duration-400 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                        {study.industry}
                      </span>
                      <span className="text-xs text-content-tertiary font-mono">
                        Client: {study.client}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-content-primary mb-4 group-hover:text-brand-300 transition-colors font-display">
                      <Link href={`/case-studies/${study.slug}`}>
                        {study.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-content-secondary mb-6 leading-relaxed">
                      {study.overview}
                    </p>

                    {/* Challenge vs Solution snippet */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-surface-elevated/40 border border-surface-border">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-rose-400 mb-1">
                          The Bottleneck:
                        </div>
                        <p className="text-xs text-content-secondary leading-relaxed line-clamp-3">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-1">
                          Engineered Fix:
                        </div>
                        <p className="text-xs text-content-secondary leading-relaxed line-clamp-3">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group/link"
                    >
                      <span>Read full technical deep-dive</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Column: Visual Preview Card & Metrics */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-surface-border bg-surface-secondary">
                      <Image
                        src={image}
                        alt={study.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 glass px-2.5 py-1 rounded-md text-[10px] font-mono text-brand-300 border border-brand-500/20 flex items-center gap-1.5">
                        <Cpu size={12} />
                        <span>Production Verified</span>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((r) => (
                        <div
                          key={r.label}
                          className="glass p-3 rounded-xl border border-surface-border text-center"
                        >
                          <div className="text-xl sm:text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:to-white flex items-center justify-center gap-1">
                            <TrendUp size={16} className="text-emerald-400 shrink-0" />
                            <span>{r.metric}</span>
                          </div>
                          <div className="text-[11px] text-content-tertiary mt-0.5">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <CtaBanner
          headline="Have a high-scale architectural challenge?"
          description="Speak with our principal engineers to design a zero-downtime, fault-tolerant roadmap."
          primaryLabel="Start Architecture Discussion"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
