import type { Metadata } from 'next';
import { Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Send ${siteConfig.name} a paragraph about what you're trying to ship.`,
};

const checklist = [
  {
    label: "What you're building",
    detail:
      "One paragraph is plenty. The clearer the problem, the faster we can tell you whether we're the right fit.",
  },
  {
    label: 'Where you are in the process',
    detail:
      'Idea, prototype, mid-build rescue, post-launch — every stage is fair game. Just tell us where you stand.',
  },
  {
    label: 'Timeline and rough budget',
    detail:
      'A bracket is fine. It helps us decide between a 2-week prototype, an 8-week build, or a longer partnership.',
  },
];

export default function ContactPage() {
  return (
    <section className='relative bg-canvas pt-14 md:pt-20 pb-section-lg'>
      <div className='container-1200'>
        <div className='max-w-180'>
          <div className='text-kicker text-muted'>Start a project</div>
          <h1
            className='text-display mt-3 text-[44px] sm:text-[52px] lg:text-[60px] leading-[1.04]'
            style={{ letterSpacing: 'var(--tracking-display-xl)' }}
          >
            Let&rsquo;s build something together.
          </h1>
          <p className='mt-5 text-[17px] leading-[1.6] text-body max-w-140'>
            Send us a paragraph about what you&rsquo;re trying to ship. We
            answer every project email inside two business days with an honest
            read on whether we&rsquo;re the right fit.
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className='press inline-flex items-center gap-2 rounded-btn bg-ink text-on-dark h-12 px-5 text-[14px] font-medium hover:bg-ink-active focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
            >
              <Mail className='size-4' />
              {siteConfig.contactEmail}
              <ArrowRight className='size-4' />
            </a>
          </div>
        </div>

        <div className='mt-16 grid sm:grid-cols-3 gap-4'>
          {checklist.map((item, i) => (
            <div
              key={item.label}
              className='rounded-card bg-surface-card p-6 ring-1 ring-hairline'
            >
              <div className='text-kicker text-muted'>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2
                className='mt-3 text-[17px] font-semibold text-ink'
                style={{ letterSpacing: '-0.02em' }}
              >
                {item.label}
              </h2>
              <p className='mt-2 text-[14px] leading-[1.6] text-body'>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p className='mt-14 text-[13px] text-muted'>
          A typed contact form is on the way. For now, email is the fastest
          path.
        </p>
      </div>
    </section>
  );
}
