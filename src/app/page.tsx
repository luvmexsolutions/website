import { Hero } from '@/sections/hero';
import { TechMarquee } from '@/sections/tech-marquee';
import { ServicesOverview } from '@/sections/services-overview';
import { WhyLuvmex } from '@/sections/why-luvmex';
import { Process } from '@/sections/process';
import { Industries } from '@/sections/industries';
import { Technology } from '@/sections/technology';
import { Testimonials } from '@/sections/testimonials';
import { Stats } from '@/sections/stats';
import { ContactCTA } from '@/sections/contact-cta';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Hero />
      <TechMarquee />
      <ServicesOverview />
      <WhyLuvmex />
      <Process />
      <Industries />
      <Technology />
      <Testimonials />
      <Stats />
      <ContactCTA />
    </main>
  );
}
