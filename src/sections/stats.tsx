import { SectionWrapper } from '@/components/layout/section-wrapper';
import { statsContent } from '@/content/stats';

export function Stats() {
  return (
    <SectionWrapper id="stats" className="relative border-t border-surface-border/40 py-16 md:py-24">
      {/* Background glow behind stats */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-gradient-radial from-brand-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="rounded-3xl border border-surface-border/80 bg-surface-secondary/60 backdrop-blur-md p-8 md:p-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsContent.items.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-content-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
