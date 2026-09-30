'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/common/tech-badge';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Cpu,
  ShieldCheck,
  Terminal,
  Clock,
  Sparkle,
  GitBranch,
} from '@phosphor-icons/react';
import type { Service } from '@/types/services';

const serviceImages: Record<string, { hero: string; secondary: string; tag: string }> = {
  'custom-software': {
    hero: 'https://picsum.photos/seed/developers-coding-office/1200/800',
    secondary: 'https://picsum.photos/seed/code-review-team/800/600',
    tag: 'Enterprise Custom Systems',
  },
  'saas': {
    hero: 'https://picsum.photos/seed/server-room-dark/1200/800',
    secondary: 'https://picsum.photos/seed/cloud-cluster-servers/800/600',
    tag: 'Multi-Tenant Cloud Platforms',
  },
  'web-applications': {
    hero: 'https://picsum.photos/seed/web-dashboard-dark/1200/800',
    secondary: 'https://picsum.photos/seed/modern-ui-interface/800/600',
    tag: 'Next.js & Ultra-Fast Web Apps',
  },
  'mobile-applications': {
    hero: 'https://picsum.photos/seed/mobile-dev-dark/1200/800',
    secondary: 'https://picsum.photos/seed/smartphone-testing-lab/800/600',
    tag: 'Cross-Platform iOS & Android',
  },
  'ai-solutions': {
    hero: 'https://picsum.photos/seed/neural-network-purple/1200/800',
    secondary: 'https://picsum.photos/seed/data-scientist-models/800/600',
    tag: 'LLM & Autonomous Automation',
  },
};

const defaultImage = {
  hero: 'https://picsum.photos/seed/software-architecture/1200/800',
  secondary: 'https://picsum.photos/seed/tech-team-agile/800/600',
  tag: 'Specialized Product Engineering',
};

const lifecycleSteps = [
  { step: '01', title: 'Domain Modeling & RFC', desc: 'Thorough discovery, data boundary definition, and architectural specification before writing production code.' },
  { step: '02', title: 'Core Scaffold & CI/CD', desc: 'Immutable infrastructure declarations, automated linting/testing pipelines, and staging environments established on Day 1.' },
  { step: '03', title: 'Sprint-Based Implementation', desc: 'Bi-weekly releases with tangible working software, continuous demos, and direct access to PR reviews.' },
  { step: '04', title: 'Hardening & Observability', desc: 'Load testing, security penetration audits, OpenTelemetry instrumentation, and production failover simulations.' },
];

export function ServiceDetailView({ service }: { service: Service }) {
  const images = serviceImages[service.slug] || defaultImage;

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
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </Link>
        </motion.div>

        {/* ── Section 1: Hero Split with Cinematic Bezel Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono">
                <Sparkle size={14} className="text-brand-400" />
                <span>{images.tag.toUpperCase()}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.1]"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-8 max-w-2xl"
            >
              {service.longDescription}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8"
            >
              <div className="text-xs font-mono text-content-tertiary mb-3 uppercase tracking-wider">
                Production Stack & Tooling:
              </div>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} size="md" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-brand-500 text-white font-medium text-sm hover:bg-brand-400 transition-all duration-300 shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>Request Architecture Review</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-xl border border-surface-border bg-surface-secondary/70 text-content-primary font-medium text-sm hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>View Related Case Studies</span>
              </Link>
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
              <div className="bezel-inner relative aspect-[4/5] rounded-[calc(2rem-6px)] overflow-hidden">
                <Image
                  src={images.hero}
                  alt={`${service.title} architectural overview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale-[0.2] contrast-110"
                  priority
                />
                {/* Gradient tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/90 via-surface-primary/25 to-transparent" />

                {/* Floating telemetry chip */}
                <div className="absolute top-4 right-4 glass px-3.5 py-2 rounded-xl border border-brand-500/30 flex items-center gap-2 text-xs font-mono text-content-primary shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Ready</span>
                </div>

                {/* Floating bottom code/architecture badge */}
                <div className="absolute bottom-6 inset-x-6">
                  <div className="glass rounded-2xl p-4 border border-surface-border/80 backdrop-blur-xl">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-brand-300 flex items-center gap-1.5">
                        <Terminal size={14} />
                        <span>runtime: v20.x · lts</span>
                      </span>
                      <span className="text-emerald-400 font-mono">100% CI pass</span>
                    </div>
                    <div className="font-mono text-[11px] text-content-secondary bg-surface-primary/80 p-2.5 rounded-lg border border-surface-border overflow-x-auto">
                      <code>{`const cluster = await initMesh({ failover: true, telemetry: 'otel' });`}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Production Guarantees Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 md:mb-32">
          {[
            { label: 'Test Coverage', value: '≥ 90%', sub: 'Unit, integration & E2E suites' },
            { label: 'Uptime SLA', value: '99.98%', sub: 'Zero single point of failure' },
            { label: 'Code Ownership', value: '100%', sub: 'No vendor lock-in or licensing' },
            { label: 'Audit Trail', value: 'Day 1', sub: 'Git commit telemetry & RFCs' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bezel-outer p-5 rounded-2xl bg-surface-card"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-300 mb-1">
                {item.value}
              </div>
              <div className="text-xs font-semibold text-content-primary mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-content-tertiary">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Section 3: Core Architectural Pillars ── */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-3">
              <Cpu size={14} className="text-brand-400" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              What We Deliver for {service.title}
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              Every system is engineered to strict operational standards with automated deployment, testing, and continuous monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bezel-outer p-7 rounded-2xl bg-surface-card hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
                      Pillar 0{idx + 1}
                    </span>
                    <CheckCircle weight="fill" size={18} className="text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold text-content-primary mb-2">
                    {feature}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    Designed to modern cloud-native principles. Includes automated smoke tests, container manifests, and operational runbooks.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-surface-border/60 flex items-center gap-2 text-[11px] font-mono text-content-tertiary">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Verified for enterprise scale</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Section 4: Engineering Lifecycle Roadmap ── */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-3">
              <GitBranch size={14} className="text-brand-400" />
              <span>THE ENGINEERING LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              From Architecture Blueprint to Production
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              We execute with predictable, sprint-based cadences that keep you in full control of every architectural decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 border border-surface-border bg-surface-card hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold font-mono text-brand-400/30 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-content-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-brand-400">
                  <Clock size={13} />
                  <span>Sprint phase</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Section 5: CTA ── */}
        <CtaBanner
          headline={`Ready to build your ${service.title.toLowerCase()}?`}
          description="Speak with our engineering leads to review your requirements, design the architecture, and establish a clear delivery timeline."
          primaryLabel="Schedule Architecture Consultation"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
