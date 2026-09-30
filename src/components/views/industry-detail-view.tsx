'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  LockKey,
  Database,
  Lightning,
  Sparkle,
  Cpu,
  FileText,
} from '@phosphor-icons/react';
import type { Industry } from '@/types/services';

const industryMedia: Record<string, { image: string; tag: string; compliance: string[] }> = {
  healthcare: {
    image: 'https://picsum.photos/seed/healthcare-telehealth-med/1200/800',
    tag: 'HIPAA & Telehealth Certified',
    compliance: ['HIPAA BAA Compliant', 'HL7 / FHIR Protocols', 'End-to-End PHI Encryption', 'FDA 21 CFR Part 11'],
  },
  fintech: {
    image: 'https://picsum.photos/seed/fintech-trading-finance/1200/800',
    tag: 'Sub-Millisecond Settlement',
    compliance: ['PCI-DSS Level 1', 'SOC2 Type II Certified', 'ISO 27001 Cryptography', 'Raft Consensus Audits'],
  },
  ecommerce: {
    image: 'https://picsum.photos/seed/ecommerce-logistics-store/1200/800',
    tag: 'High-Volume Transaction Flow',
    compliance: ['Global CDN Caching', 'PCI-DSS Tokenization', 'Inventory Concurrency Lock', 'GDPR / CCPA Compliant'],
  },
  logistics: {
    image: 'https://picsum.photos/seed/logistics-warehouse-fleet/1200/800',
    tag: 'Real-Time Telematics & Fleet Mesh',
    compliance: ['Real-Time Geospatial Ingestion', 'Offline-First Synchronization', 'Automated Route Recalibration', 'Sub-Second Dispatch SLAs'],
  },
  education: {
    image: 'https://picsum.photos/seed/education-campus-classroom/1200/800',
    tag: 'Low-Latency Virtual Classrooms',
    compliance: ['FERPA / COPPA Compliant', 'WebRTC Multi-Peer Mesh', 'SCORM & LTI Compatibility', 'Automated Assessment Proctoring'],
  },
  'real-estate': {
    image: 'https://picsum.photos/seed/modern-architecture-building/1200/800',
    tag: 'PropTech & Property Analytics',
    compliance: ['RETS & RESO Web API', 'Spatial Mapping & 3D Tours', 'Automated Lease Workflows', 'Tenant Ledger Encryption'],
  },
};

const defaultMedia = {
  image: 'https://picsum.photos/seed/tech-industry-data/1200/800',
  tag: 'Mission-Critical Engineering',
  compliance: ['Enterprise SLA Guarantees', 'Zero-Downtime Deployments', 'Granular Role-Based Access Control', 'Automated Disaster Recovery'],
};

export function IndustryDetailView({
  industry,
  verticalBenefits,
}: {
  industry: Industry;
  verticalBenefits: Array<{ title: string; description: string }>;
}) {
  const media = industryMedia[industry.slug] || defaultMedia;

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
            href="/#industries"
            className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Industries</span>
          </Link>
        </motion.div>

        {/* ── Section 1: Hero Split with Cinematic Industry Image ── */}
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
              <span>{media.tag.toUpperCase()}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.1]"
            >
              {industry.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-6 max-w-2xl"
            >
              {industry.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-body text-content-tertiary leading-relaxed mb-8 max-w-2xl"
            >
              From strict regulatory compliance to high-throughput transaction spikes, we engineer specialized platforms tailored to the rigorous demands of {industry.title}.
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
                <span>Consult Industry Engineers</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-xl border border-surface-border bg-surface-secondary/70 text-content-primary font-medium text-sm hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>View Real Case Studies</span>
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
                  src={media.image}
                  alt={`${industry.title} software architecture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale-[0.15] contrast-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/95 via-surface-primary/30 to-transparent" />

                {/* Floating badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-xl border border-brand-500/30 flex items-center gap-2 text-xs font-mono text-content-primary shadow-lg">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Compliance Audited</span>
                </div>

                {/* Floating compliance tags at bottom */}
                <div className="absolute bottom-6 inset-x-6">
                  <div className="glass rounded-2xl p-4 border border-surface-border/80 backdrop-blur-xl">
                    <div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2">
                      Regulatory & Security Frameworks
                    </div>
                    <div className="space-y-1.5">
                      {media.compliance.slice(0, 2).map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-content-primary">
                          <LockKey size={13} className="text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Compliance Badges Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-24 md:mb-32">
          {media.compliance.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bezel-outer p-4 rounded-xl bg-surface-card flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={16} />
              </div>
              <span className="text-xs font-medium text-content-primary">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Section 3: Vertical Capabilities Bento ── */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-3">
              <Cpu size={14} className="text-brand-400" />
              <span>DOMAIN ARCHITECTURE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary font-display mb-3">
              What We Solve for {industry.title}
            </h2>
            <p className="text-content-secondary text-base leading-relaxed">
              Every system is engineered to eliminate domain bottlenecks and support massive concurrent activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticalBenefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bezel-outer p-8 rounded-2xl bg-surface-card hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-400"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                    {idx === 0 && <ShieldCheck size={20} />}
                    {idx === 1 && <Lightning size={20} />}
                    {idx === 2 && <Database size={20} />}
                    {idx === 3 && <FileText size={20} />}
                  </div>
                  <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                    Capability 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-content-primary mb-3">
                  {b.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Section 4: CTA ── */}
        <CtaBanner
          headline={`Ready to build high-scale software for ${industry.title.toLowerCase()}?`}
          description="Speak with our domain engineers to review security mandates, data pipelines, and production architecture."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
