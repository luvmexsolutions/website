'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { TechBadge } from '@/components/common/tech-badge';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  ArrowLeft,
  ShieldCheck,
  TrendUp,
  Cpu,
  CheckCircle,
  WarningCircle,
  Sparkle,
} from '@phosphor-icons/react';
import type { CaseStudy } from '@/config/case-studies';

const caseStudyImages: Record<string, string> = {
  'telehealth-data-platform': 'https://picsum.photos/seed/telehealth-dashboard/1200/800',
  'fintech-clearing-engine': 'https://picsum.photos/seed/fintech-clearing-chart/1200/800',
  'autonomous-logistics-optimizer': 'https://picsum.photos/seed/fleet-routing-map/1200/800',
};

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
  const image = caseStudyImages[study.slug] || 'https://picsum.photos/seed/software-case/1200/800';

  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Case Studies</span>
          </Link>
        </motion.div>

        {/* ── Section 1: Hero Split with Project Visual ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
                {study.industry}
              </span>
              <span className="text-xs text-content-tertiary font-mono">
                Client: {study.client}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.15]"
            >
              {study.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-8 max-w-2xl"
            >
              {study.overview}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {study.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </motion.div>
          </div>

          {/* Right Image Visual with Luxury Bezel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bezel-outer overflow-hidden shadow-glow-sm">
              <div className="bezel-inner relative aspect-[4/3] rounded-[calc(2rem-6px)] overflow-hidden">
                <Image
                  src={image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale-[0.15] contrast-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/90 via-surface-primary/20 to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-xl border border-brand-500/30 flex items-center gap-1.5 text-xs font-mono text-content-primary shadow-lg">
                  <Sparkle size={14} className="text-brand-400" />
                  <span>Verified Production Run</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Quantified Results Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 md:mb-28">
          {study.results.map((result, idx) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bezel-outer p-6 rounded-2xl bg-surface-card text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:via-indigo-200 dark:to-white mb-2 flex items-center justify-center gap-1.5">
                <TrendUp size={20} className="text-emerald-400 shrink-0" />
                <span>{result.metric}</span>
              </div>
              <div className="text-xs sm:text-sm text-content-secondary font-medium">
                {result.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Section 3: The Challenge vs Engineered Solution ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 md:mb-28">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bezel-outer p-8 rounded-2xl bg-surface-card border-rose-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                <WarningCircle size={20} />
              </div>
              <h2 className="text-xl font-bold text-content-primary">
                The Engineering Challenge
              </h2>
            </div>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
              {study.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bezel-outer p-8 rounded-2xl bg-surface-card border-emerald-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-xl font-bold text-content-primary">
                The Engineered Solution
              </h2>
            </div>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
              {study.solution}
            </p>
          </motion.div>
        </div>

        {/* ── Section 4: Architecture Highlights ── */}
        <div className="bezel-outer p-8 sm:p-12 rounded-3xl bg-surface-card mb-20 md:mb-28">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-3">
              <Cpu size={14} className="text-brand-400" />
              <span>SYSTEM SPECIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-content-primary font-display">
              Key Technical Breakthroughs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.architectureHighlights.map((highlight, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl border border-surface-border">
                <div className="flex items-start gap-3">
                  <CheckCircle weight="fill" size={20} className="text-brand-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CtaBanner
          headline="Looking for similar performance breakthroughs?"
          description="Schedule a technical architecture discussion with our principal team."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
