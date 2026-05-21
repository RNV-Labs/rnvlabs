import { SectionHeading } from '@/components/site/section-heading';
import { PricingTierCard } from '@/components/cards/pricing-tier-card';
import { engagementModels } from '@/content/engagement-models';

export function EngagementModels() {
  return (
    <section id='engagement' className='bg-surface-card py-section'>
      <div className='container-1200'>
        <SectionHeading
          kicker='How we work together'
          title='Three ways to engage.'
          lede="Most projects start as a prototype or a build. Partnerships are reserved for teams we've already shipped with."
        />

        <div className='mt-12 grid lg:grid-cols-3 gap-5'>
          {engagementModels.map((model) => (
            <PricingTierCard key={model.name} model={model} />
          ))}
        </div>

        <p className='mt-10 text-[13px] text-muted text-center max-w-160 mx-auto'>
          Pricing is a guide, not a wall. Every project gets a fixed quote after
          a 30-minute scoping call.
        </p>
      </div>
    </section>
  );
}
