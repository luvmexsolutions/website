import { Hero } from '@/sections/hero';
import { ServicesOverview } from '@/sections/services-overview';
import { Industries } from '@/sections/industries';
import { Technology } from '@/sections/technology';
import { WhyLumex } from '@/sections/why-lumex';
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
      <WhyLumex />
      <Process />
      <Stats />
      <ContactCTA />
    </>
  );
}
