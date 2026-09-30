'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  Code,
  ShieldCheck,
  Cpu,
  UsersThree,
  ArrowRight,
  CheckCircle,
  Buildings,
  GlobeHemisphereWest,
  Sparkle,
} from '@phosphor-icons/react';

interface AboutViewProps {
  principles: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const leaders = [
  {
    name: 'Alexander Vance',
    role: 'Co-Founder & Chief Architect',
    background: 'Ex-AWS & Distributed Systems Lead',
    image: 'https://picsum.photos/seed/alex-vance-architect/500/600',
    specialty: 'High-throughput fault-tolerant micro-service mesh & Raft consensus',
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'VP of AI & Applied ML',
    background: 'Ex-DeepMind Fellow, PhD In Distributed Compute',
    image: 'https://picsum.photos/seed/elena-rostova-ai/500/600',
    specialty: 'Production LLM inference optimization & private vector retrieval',
  },
  {
    name: 'Marcus Chen',
    role: 'Principal Frontend Engineer',
    background: 'Ex-Stripe Design Systems & Web Core Vitals Lead',
    image: 'https://picsum.photos/seed/marcus-chen-frontend/500/600',
    specialty: 'Sub-millisecond interactive UIs, WebGL shaders & accessibility',
  },
  {
    name: 'Sophia Patel',
    role: 'Head of Reliability & Cloud SecOps',
    background: 'Ex-FinTech SecOps & SOC2 Auditor',
    image: 'https://picsum.photos/seed/sophia-patel-cloud/500/600',
    specialty: 'Zero-trust infrastructure, multi-region Kubernetes & HIPAA hardening',
  },
];

const milestones = [
  { metric: '99.98%', label: 'Production Uptime SLA', detail: 'Guaranteed across all managed clusters' },
  { metric: '48M+', label: 'Daily API Transactions', detail: 'Processing mission-critical financial & health events' },
  { metric: '100%', label: 'In-House Senior Engineers', detail: 'No juniors or opaque third-party subcontractors' },
  { metric: '0', label: 'Security Breaches or Leaks', detail: 'Audited against SOC2 Type II & HIPAA standards' },
];

export function AboutView({ principles }: AboutViewProps) {
  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* ── Section 1: Hero Split ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-6"
            >
              <Sparkle size={14} className="text-brand-400" />
              <span>ESTABLISHED FOR PRODUCT CRAFTSMANSHIP</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.1]"
            >
              We Build Software Systems That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:via-indigo-300 dark:to-white">
                Defy Technical Debt
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-6 max-w-2xl"
            >
              LUVMEX was founded on a simple principle: high-growth founders and enterprise leaders shouldn&apos;t have to settle for bloated agencies or disposable code templates. We engineer durable, scalable software with product-native rigor.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-body text-content-tertiary leading-relaxed mb-8 max-w-2xl"
            >
              From distributed financial clearing engines to real-time HIPAA medical data pipelines, our senior engineers embed alongside your team to design architectures that withstand years of explosive growth.
            </motion.p>

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
                <span>Consult Our Leadership</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-xl border border-surface-border bg-surface-secondary/70 text-content-primary font-medium text-sm hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Explore Shipped Systems</span>
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
                  src="https://picsum.photos/seed/engineering-lab-tech/1000/1250"
                  alt="LUVMEX engineering architectural war room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale-[0.2] contrast-110"
                  priority
                />
                {/* Gradient tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/90 via-surface-primary/20 to-transparent" />

                {/* Floating telemetry chips */}
                <div className="absolute top-4 right-4 glass px-3.5 py-2 rounded-xl border border-brand-500/30 flex items-center gap-2 text-xs font-mono text-content-primary shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>100% In-House Senior Core</span>
                </div>

                <div className="absolute bottom-6 inset-x-6">
                  <div className="glass rounded-2xl p-5 border border-surface-border/80 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-brand-300 uppercase tracking-wider">Engineering Culture</span>
                      <span className="text-xs font-mono text-emerald-400">Zero Technical Debt</span>
                    </div>
                    <div className="text-sm font-semibold text-content-primary mb-1">
                      Architected for high concurrency & enterprise scale
                    </div>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      Every contract delivers fully documented source code, CI/CD pipelines, and comprehensive test suites owned 100% by you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Quantified Track Record ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bezel-outer p-6 rounded-2xl bg-surface-card hover:border-brand-500/30 transition-all duration-400"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:via-indigo-200 dark:to-white mb-2">
                {m.metric}
              </div>
              <div className="text-sm font-semibold text-content-primary mb-1">
                {m.label}
              </div>
              <div className="text-xs text-content-secondary leading-relaxed">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Section 3: Leadership & Principal Architects ── */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-3">
              <UsersThree size={14} className="text-brand-400" />
              <span>ENGINEERING DIRECTORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              Principal Architects Who Have Built at Scale
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              When you work with LUVMEX, you partner directly with senior engineering specialists who have built foundational systems at global tech enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-surface-border bg-surface-card hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-400 flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-secondary">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-3 right-3 glass px-2 py-1 rounded-md text-[10px] font-mono text-brand-300 border border-brand-500/20">
                    Lead
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-content-primary group-hover:text-brand-300 transition-colors">
                      {leader.name}
                    </h3>
                    <div className="text-xs text-brand-400 font-mono mb-2">
                      {leader.role}
                    </div>
                    <div className="text-xs text-content-secondary mb-3 font-medium">
                      {leader.background}
                    </div>
                    <p className="text-xs text-content-tertiary leading-relaxed">
                      {leader.specialty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Section 4: Core Engineering Tenets Bento ── */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              Our Core Engineering Tenets
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              The non-negotiable architectural standards that govern every repository, pull request, and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bezel-outer p-8 rounded-2xl bg-surface-card hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-400"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                    {idx === 0 && <Code size={20} />}
                    {idx === 1 && <Cpu size={20} />}
                    {idx === 2 && <ShieldCheck size={20} />}
                    {idx === 3 && <UsersThree size={20} />}
                  </div>
                  <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                    Tenet 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-content-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Section 5: The Product-Engineering Difference ── */}
        <div className="bezel-outer rounded-3xl p-8 sm:p-12 mb-24 md:mb-32 bg-surface-secondary/70 backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
                <span>OUR PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-content-primary mb-4 font-display">
                The Product-Engineering Difference
              </h2>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Traditional dev shops build to satisfy an arbitrary specification document, hand over messy code, and leave you holding operational debt. Product engineering firms build as if they own the business outcome.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  'Clean CI/CD pipelines and zero-downtime deploy scripts',
                  '100% intellectual property & code ownership from Day 1',
                  'Automated end-to-end integration and load testing suites',
                  'Exhaustive documentation & architectural diagrams included',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-content-secondary">
                    <CheckCircle weight="fill" size={16} className="text-brand-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="glass p-5 rounded-2xl border border-surface-border">
                <div className="flex items-center gap-3 mb-2">
                  <GlobeHemisphereWest size={22} className="text-brand-400" />
                  <div className="text-sm font-semibold text-content-primary">Global Distributed Mesh</div>
                </div>
                <div className="text-xs text-content-secondary leading-relaxed">
                  Engineers collaborating across time zones with seamless asynchronous handoffs and continuous integration.
                </div>
              </div>
              <div className="glass p-5 rounded-2xl border border-surface-border">
                <div className="flex items-center gap-3 mb-2">
                  <Buildings size={22} className="text-brand-400" />
                  <div className="text-sm font-semibold text-content-primary">Enterprise Ready</div>
                </div>
                <div className="text-xs text-content-secondary leading-relaxed">
                  SOC2, HIPAA, and PCI-DSS compliance built directly into the foundation rather than bolted on later.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 6: CTA ── */}
        <CtaBanner
          headline="Ready to build your next engineering milestone?"
          description="Schedule a technical architecture discussion with our principal engineering team."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
