import { Container } from '@/components/ui/container';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <Container narrow>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-brand-500/20" />
            <div className="absolute inset-0 rounded-full border-2 border-brand-400 border-t-transparent animate-spin" />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-content-tertiary">
            Loading System Architecture...
          </p>
        </div>
      </Container>
    </div>
  );
}
