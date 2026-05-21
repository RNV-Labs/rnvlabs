import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaBand() {
  return (
    <section className='bg-canvas py-section'>
      <div className='container-1200'>
        <div className='relative overflow-hidden rounded-mockup bg-surface-card ring-1 ring-hairline px-6 md:px-14 py-14 md:py-16 text-center'>
          {/* Subtle radial accent — sparing use of brand color */}
          <div
            aria-hidden
            className='absolute inset-x-0 -top-24 z-0 h-72 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(59,130,246,0.12),transparent_75%)]'
          />

          <div className='relative'>
            <div className='text-kicker text-muted'>Start a project</div>
            <h2
              className='mt-3 text-display text-[34px] md:text-[44px]'
              style={{ letterSpacing: 'var(--tracking-display-md)' }}
            >
              Let&rsquo;s build something together.
            </h2>
            <p className='mt-4 text-[16px] leading-[1.6] text-body max-w-130 mx-auto'>
              Send us a paragraph about what you&rsquo;re trying to ship.
              We&rsquo;ll write back inside two business days with an honest
              read on whether we&rsquo;re the right fit.
            </p>

            <div className='mt-7 flex items-center justify-center gap-3'>
              <Link
                href='/contact'
                className='press inline-flex items-center gap-2 rounded-btn bg-ink text-on-dark h-11 px-5 text-[14px] font-medium hover:bg-ink-active focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
              >
                Start a project
                <ArrowRight className='size-4' />
              </Link>
              <a
                href='mailto:hello@rnvlabs.com'
                className='press inline-flex items-center gap-2 rounded-btn h-11 px-5 text-[14px] font-medium text-ink ring-1 ring-hairline hover:bg-canvas focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
              >
                hello@rnvlabs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
