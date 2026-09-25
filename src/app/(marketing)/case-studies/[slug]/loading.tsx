import { Container } from '@/components/ui/container';

export default function CaseStudyDetailLoading() {
  return (
    <div className="py-24 md:py-32 animate-pulse">
      <Container wide>
        {/* Back nav skeleton */}
        <div className="h-4 w-48 bg-surface-elevated rounded mb-10" />

        {/* Hero skeleton */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-6 w-36 bg-surface-elevated rounded-full" />
            <div className="h-4 w-32 bg-surface-elevated rounded" />
          </div>
          <div className="h-12 w-3/4 bg-surface-elevated rounded-lg mb-4" />
          <div className="h-6 w-full bg-surface-elevated rounded-lg mb-4" />
          <div className="h-6 w-2/3 bg-surface-elevated rounded-lg mb-8" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-7 w-20 bg-surface-elevated rounded-md" />
            ))}
          </div>
        </div>

        {/* Impact numbers skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 bg-surface-elevated rounded-2xl border border-surface-border" />
          ))}
        </div>

        {/* Challenge/Solution skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="h-52 bg-surface-elevated rounded-2xl border border-surface-border" />
          <div className="h-52 bg-surface-elevated rounded-2xl border border-surface-border" />
        </div>
      </Container>
    </div>
  );
}
