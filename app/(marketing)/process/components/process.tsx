import { SectionHeading } from '@/components/site/section-heading';
import { processSteps } from '@/content/process';

export function Process() {
  return (
    <section id='process' className='bg-canvas py-section'>
      <div className='container-1200'>
        <SectionHeading
          kicker='How we work'
          title="A four-step rhythm we don't shortcut."
          lede='Most studios pad the early weeks and rush the last. We do the opposite — most of the thinking lives in discovery.'
        />

        <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10'>
          {processSteps.map((step) => (
            <div key={step.number} className='relative'>
              <div
                className='text-display text-[64px] leading-none text-muted-soft/50 select-none'
                style={{ letterSpacing: 'var(--tracking-display-xl)' }}
              >
                {step.number}
              </div>
              <h3
                className='mt-3 text-[20px] font-semibold text-ink'
                style={{ letterSpacing: '-0.02em' }}
              >
                {step.title}
              </h3>
              <p className='mt-2 text-[14.5px] leading-[1.65] text-body'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
