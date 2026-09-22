import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface FormSuccessProps {
  message?: string;
  leadId?: string;
  onReset: () => void;
}

export function FormSuccess({
  message = "Thank you for reaching out! We've received your project details.",
  leadId,
  onReset,
}: FormSuccessProps) {
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-surface-secondary/90 p-8 md:p-12 text-center backdrop-blur-md shadow-xl animate-in fade-in zoom-in-95 duration-300">
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6 shadow-glow shadow-emerald-500/20">
        <Icon name="check" size={32} />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-content-primary mb-3">
        Inquiry Received
      </h3>

      <p className="text-body text-content-secondary max-w-md mx-auto mb-6">
        {message}
      </p>

      {leadId && (
        <div className="inline-block px-3 py-1 rounded bg-surface-elevated border border-surface-border text-xs font-mono text-content-tertiary mb-8">
          Reference ID: {leadId}
        </div>
      )}

      {/* What happens next */}
      <div className="max-w-md mx-auto text-left rounded-xl bg-surface-elevated/60 border border-surface-border p-5 mb-8 space-y-3">
        <p className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold">
          What happens next:
        </p>
        <div className="flex items-start gap-3 text-xs text-content-secondary">
          <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center shrink-0 font-mono font-bold text-[10px]">
            1
          </span>
          <span>Our engineering leads review your scope and architectural constraints.</span>
        </div>
        <div className="flex items-start gap-3 text-xs text-content-secondary">
          <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center shrink-0 font-mono font-bold text-[10px]">
            2
          </span>
          <span>We reach out within 24 hours to schedule a 30-minute discovery call.</span>
        </div>
        <div className="flex items-start gap-3 text-xs text-content-secondary">
          <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center shrink-0 font-mono font-bold text-[10px]">
            3
          </span>
          <span>We deliver a high-level architecture proposal and delivery roadmap.</span>
        </div>
      </div>

      <Button variant="secondary" onClick={onReset}>
        Send Another Message
      </Button>
    </div>
  );
}
