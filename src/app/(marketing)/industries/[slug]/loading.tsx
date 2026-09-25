import { Container } from '@/components/ui/container';

export default function IndustryDetailLoading() {
  return (
    <div className="py-24 md:py-32 animate-pulse">
      <Container wide>
        {/* Back nav skeleton */}
        <div className="h-4 w-40 bg-surface-elevated rounded mb-10" />

        {/* Hero skeleton */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-surface-elevated" />
            <div className="h-6 w-40 bg-surface-elevated rounded-full" />
          </div>
          <div className="h-12 w-3/4 bg-surface-elevated rounded-lg mb-4" />
          <div className="h-6 w-full bg-surface-elevated rounded-lg mb-4" />
          <div className="h-6 w-2/3 bg-surface-elevated rounded-lg" />
        </div>

        {/* Value grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-52 bg-surface-elevated rounded-2xl border border-surface-border" />
          ))}
        </div>
      </Container>
    </div>
  );
}
