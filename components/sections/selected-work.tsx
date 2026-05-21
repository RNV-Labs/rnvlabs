import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { WorkCard } from '@/components/cards/work-card';
import { WORK_PREVIEWS } from '@/components/cards/work-previews';
import { work } from '@/content/work';

export function SelectedWork() {
  const featured = work.slice(0, 3);

  return (
    <section id='selected-work' className='bg-surface-card py-section'>
      <div className='container-1200'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
          <SectionHeading
            kicker='Selected work'
            title='Where the bar is.'
            lede='One real shipped site, plus a small set of capability demos we hand-built to show how we work. No stock screenshots, no fake clients.'
          />
          <Link
            href='/work'
            className='press inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-brand focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 rounded-sm self-start md:self-auto'
          >
            View all work
            <ArrowUpRight className='size-4' />
          </Link>
        </div>

        <div className='mt-12 grid md:grid-cols-2 gap-6'>
          {featured.map((c) => (
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
