import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroStudioBoardCard } from '@/components/cards/hero-studio-board-card';

export function Hero() {
  return (
    <section className='relative bg-canvas pt-14 md:pt-20 pb-section'>
      <div className='container-1200'>
        <div className='grid lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
          {/* Left: copy */}
          <div className='lg:col-span-7'>
            <h1
              className='text-display text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.02]'
              style={{ letterSpacing: 'var(--tracking-display-xl)' }}
            >
              Senior product engineering,{' '}
              <span className='text-muted underline decoration-brand decoration-[3px] underline-offset-8'>
                on demand.
              </span>
            </h1>

            <p className='mt-6 text-[17px] leading-[1.6] text-body max-w-140'>
              We&rsquo;re a small full-stack web studio. End-to-end product
              engineering — design, frontend, backend, infra — without the
              agency overhead.
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <Link
                href='/contact'
                className='press inline-flex items-center gap-2 rounded-btn bg-ink text-on-dark h-11 px-5 text-[14px] font-medium hover:bg-ink-active focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
              >
                Start a project
                <ArrowRight className='size-4' />
              </Link>
              <Link
                href='/services'
                className='press inline-flex items-center gap-2 rounded-btn h-11 px-5 text-[14px] font-medium text-ink ring-1 ring-hairline hover:bg-surface-card focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
              >
                View services
                <ArrowUpRight className='size-4' />
              </Link>
            </div>
          </div>

          {/* Right: hero app mockup */}
          <div className='lg:col-span-5 relative'>
            <div
              aria-hidden
              className='absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(59,130,246,0.18),transparent_70%)] animate-brand-breathe'
            />
            <HeroStudioBoardCard />
          </div>
        </div>
      </div>
    </section>
  );
}
