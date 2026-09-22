import { Hero } from '@/sections/hero';
import { ServicesOverview } from '@/sections/services-overview';
import { Industries } from '@/sections/industries';
import { Technology } from '@/sections/technology';
import { WhyLuvmex } from '@/sections/why-luvmex';
import { Process } from '@/sections/process';
import { Stats } from '@/sections/stats';
import { ContactCTA } from '@/sections/contact-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Industries />
      <Technology />
      <WhyLuvmex />
      <Process />
      <Stats />
      <ContactCTA />
    </>
  );
}
