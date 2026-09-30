'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  ArrowRight,
  Briefcase,
  Cpu,
  GlobeHemisphereWest,
  Sparkle,
  Terminal,
  UsersThree,
  CheckCircle,
} from '@phosphor-icons/react';
import { siteConfig } from '@/config/site';

interface Role {
  title: string;
  type: string;
  location: string;
  description: string;
  stack: string[];
}

const engineeringPillars = [
  {
    icon: Terminal,
    title: 'Autonomous Execution',
    desc: 'You own system boundaries, write RFCs, and ship directly to staging and production. No micromanagement or endless ticket ping-pong.',
  },
  {
    icon: UsersThree,
    title: 'Zero Red Tape',
    desc: 'No bloated middle-management layers. You collaborate directly with fellow principal engineers, founders, and client CTOs.',
  },
  {
    icon: Cpu,
    title: 'Top 1% Engineering Rigor',
    desc: 'Strict peer code reviews, continuous typing, automated performance audits, and absolute intolerance for lazy architectural shortcuts.',
  },
  {
    icon: GlobeHemisphereWest,
    title: 'True Remote Freedom',
    desc: 'Work from anywhere in the world on an asynchronous cadence designed around deep focus blocks rather than calendar-filling syncs.',
  },
];

export function CareersView({ roles }: { roles: Role[] }) {
  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Background ambient glow */}
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
              <span>CAREERS AT LUVMEX</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.1]"
            >
              Build Systems That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:via-indigo-300 dark:to-white">
                Actually Matter
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-6 max-w-2xl"
            >
              We are a team of senior engineers and product architects. We believe in autonomous execution, zero red tape, high technical standards, and deep respect for developer craftsmanship.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-body text-content-tertiary leading-relaxed mb-8 max-w-2xl"
            >
              If you take pride in shipping robust, beautiful, high-throughput systems and want to work alongside like-minded senior peers, explore our active roles below.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#roles"
                className="px-6 py-3 rounded-xl bg-brand-500 text-white font-medium text-sm hover:bg-brand-400 transition-all duration-300 shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>View Open Positions</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=General Engineering Inquiry`}
                className="px-6 py-3 rounded-xl border border-surface-border bg-surface-secondary/70 text-content-primary font-medium text-sm hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>General Application</span>
              </a>
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
                  src="https://picsum.photos/seed/modern-developer-team/1000/1250"
                  alt="LUVMEX engineering sprint team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale-[0.2] contrast-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/90 via-surface-primary/25 to-transparent" />

                <div className="absolute top-4 right-4 glass px-3.5 py-1.5 rounded-xl border border-brand-500/30 flex items-center gap-2 text-xs font-mono text-content-primary shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Remote-First Team</span>
                </div>

                <div className="absolute bottom-6 inset-x-6">
                  <div className="glass rounded-2xl p-4 border border-surface-border/80 backdrop-blur-xl">
                    <div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-1">
                      Our Compensation Model
                    </div>
                    <div className="text-sm font-semibold text-content-primary mb-1">
                      Top-of-market rates & performance equity
                    </div>
                    <div className="text-xs text-content-secondary leading-relaxed">
                      Generous equipment stipends, flexible hours, and paid annual retreats.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Culture & Tenets Bento ── */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              Why Senior Engineers Choose LUVMEX
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              We eliminated everything that frustrates high-performing developers about corporate and agency life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
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
                      <IconComp size={20} />
                    </div>
                    <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                      Standard 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-content-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-body-sm text-content-secondary leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Section 3: Open Roles List ── */}
        <div id="roles" className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-3">
              <Briefcase size={14} className="text-brand-400" />
              <span>CURRENT OPENINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              Open Engineering Roles
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              Direct application process with no automated screening bots. Your submission is evaluated directly by an engineering lead.
            </p>
          </div>

          <div className="space-y-6">
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bezel-outer p-8 rounded-2xl bg-surface-card hover:border-brand-500/40 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                      {role.type}
                    </span>
                    <span className="text-xs text-content-tertiary font-mono">
                      {role.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-content-primary mb-2 group-hover:text-brand-300 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {role.stack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-surface-secondary border border-surface-border text-[11px] font-mono text-content-tertiary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Application for ${role.title}`}
                  className="px-5 py-2.5 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-300 hover:bg-brand-500 hover:text-white font-medium text-xs transition-all duration-300 shrink-0 inline-flex items-center gap-2 group/btn"
                >
                  <span>Apply Directly</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CtaBanner
          headline="Don't see your specific specialization?"
          description="We are always eager to meet world-class system architects, security engineers, and ML researchers."
          primaryLabel="Send an Open Application"
          primaryHref={`mailto:${siteConfig.contact.email}?subject=Open Engineering Application`}
        />
      </Container>
    </div>
  );
}
