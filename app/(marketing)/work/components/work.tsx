import { SectionHeading } from '@/components/site/section-heading';
import { WorkCard } from '@/components/cards/work-card';
import { WORK_PREVIEWS } from '@/components/cards/work-previews';
import { work } from '@/content/work';

export function Work() {
  return (
    <section id='work' className='bg-canvas py-section'>
      <div className='container-1200'>
        <SectionHeading
          kicker='Work'
          title='What we ship.'
          lede="A young studio shows craft, not stickers. Below: the site you're reading, and capability demos we built end-to-end to prove the bar."
        />

        <div className='mt-12 grid lg:grid-cols-2 gap-6'>
          {work.map((c) => (
            <WorkCard
              key={c.previewKey}
              kicker={c.kicker}
              title={c.title}
              outcome={c.outcome}
              preview={WORK_PREVIEWS[c.previewKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
