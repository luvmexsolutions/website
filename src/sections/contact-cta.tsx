import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CtaBanner } from '@/components/common/cta-banner';

export function ContactCTA() {
  return (
    <SectionWrapper id="contact-cta" className="relative border-t border-surface-border/40 pb-32 md:pb-40">
      <CtaBanner />
    </SectionWrapper>
  );
}
