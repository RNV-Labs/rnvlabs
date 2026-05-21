import { SectionHeading } from '@/components/site/section-heading';
import { FeatureCard } from '@/components/cards/feature-card';
import { services } from '@/content/services';

export function Services() {
  return (
    <section id='services' className='bg-surface-card py-section'>
      <div className='container-1200'>
        <SectionHeading
          kicker='What we do'
          title='A small studio, end-to-end.'
          lede="We don't hand off design to engineering, then engineering to ops. The same team writes the brief, draws the screens, and ships the migration on a Tuesday night."
        />

        <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
