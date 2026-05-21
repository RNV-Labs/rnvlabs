import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { EngagementModel } from '@/lib/types';

export function PricingTierCard({ model }: { model: EngagementModel }) {
  const isFeatured = !!model.featured;

  return (
    <div
      className={cn(
        'relative rounded-card p-7 ring-1 flex flex-col h-full',
        isFeatured
          ? 'bg-surface-dark text-on-dark ring-white/10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.45)]'
          : 'bg-canvas ring-hairline',
      )}
    >
      {isFeatured ? (
        <span className='absolute -top-2.5 left-7 inline-flex items-center gap-1.5 rounded-pill bg-brand text-on-dark px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em]'>
          <span className='size-1.5 rounded-full bg-on-dark/90' />
          Most engagements
        </span>
      ) : null}

      <div>
        <div
          className={cn(
            'text-[12px] font-semibold uppercase tracking-kicker',
            isFeatured ? 'text-on-dark-muted' : 'text-muted',
          )}
        >
          {model.name}
        </div>
        <div
          className={cn(
            'mt-3 text-display text-[30px]',
            isFeatured ? 'text-on-dark' : 'text-ink',
          )}
          style={{ letterSpacing: 'var(--tracking-display-md)' }}
        >
          {model.price}
        </div>
        <div
          className={cn(
            'mt-1 text-[13px]',
            isFeatured ? 'text-on-dark-muted' : 'text-muted',
          )}
        >
          {model.cadence}
        </div>
      </div>

      <p
        className={cn(
          'mt-5 text-[14px] leading-[1.6]',
          isFeatured ? 'text-on-dark/85' : 'text-body',
        )}
      >
        {model.blurb}
      </p>

      <div
        className={cn('mt-6 h-px', isFeatured ? 'bg-white/10' : 'bg-hairline')}
      />

      <ul className='mt-6 space-y-3 flex-1'>
        {model.features.map((feature) => (
          <li
            key={feature}
            className={cn(
              'flex items-start gap-2.5 text-[14px] leading-[1.55]',
              isFeatured ? 'text-on-dark/90' : 'text-body',
            )}
          >
            <span
              className={cn(
                'mt-0.5 inline-flex items-center justify-center size-4 rounded-full shrink-0',
                isFeatured ? 'bg-brand text-on-dark' : 'bg-ink text-on-dark',
              )}
            >
              <Check className='size-2.5' strokeWidth={3} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className='mt-7'>
        <Link
          href='/contact'
          className={cn(
            'press inline-flex w-full items-center justify-center gap-2 rounded-btn h-11 px-5 text-[14px] font-medium',
            isFeatured
              ? 'bg-on-dark text-ink hover:bg-on-dark/90'
              : 'bg-ink text-on-dark hover:bg-ink-active',
            'focus-visible:outline-2 focus-visible:outline-offset-2',
            isFeatured
              ? 'focus-visible:outline-on-dark'
              : 'focus-visible:outline-ink',
          )}
        >
          {model.cta}
          <ArrowRight className='size-4' />
        </Link>
      </div>
    </div>
  );
}
