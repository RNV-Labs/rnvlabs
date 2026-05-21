import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type WorkCardProps = {
  kicker: string;
  title: string;
  outcome: string;
  preview: ReactNode;
  className?: string;
};

export function WorkCard({
  kicker,
  title,
  outcome,
  preview,
  className,
}: WorkCardProps) {
  return (
    <article
      className={cn(
        'group relative rounded-mockup bg-canvas ring-1 ring-hairline overflow-hidden flex flex-col shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18),0_8px_24px_-12px_rgba(15,23,42,0.10)]',
        className,
      )}
    >
      {/* Preview stage */}
      <div className='relative bg-surface-soft p-6 pb-7'>
        <div
          aria-hidden
          className='absolute -inset-x-2 -top-2 bottom-4 z-0 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(59,130,246,0.08),transparent_70%)]'
        />
        <div className='relative'>{preview}</div>
      </div>

      {/* Copy footer */}
      <div className='p-6 border-t border-hairline'>
        <div className='text-kicker text-muted'>{kicker}</div>
        <h3
          className='mt-2 text-[20px] font-semibold text-ink'
          style={{ letterSpacing: '-0.025em' }}
        >
          {title}
        </h3>
        <p className='mt-2 text-[14px] leading-[1.6] text-body'>{outcome}</p>
      </div>
    </article>
  );
}
