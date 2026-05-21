import { cn } from '@/lib/utils';

/**
 * Stylized mini of an RNV-style marketing site. Self-referential preview
 * used for the "RNV Labs — the site you're on" work case.
 */
export function MockupMarketing({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative rounded-mockup bg-canvas ring-1 ring-hairline shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18),0_8px_24px_-12px_rgba(15,23,42,0.10)] overflow-hidden',
        className,
      )}
    >
      {/* Window chrome */}
      <div className='flex items-center justify-between px-4 h-9 border-b border-hairline bg-surface-soft/70'>
        <div className='flex items-center gap-1.5'>
          <span className='size-2.5 rounded-full bg-[#ff5f57]' />
          <span className='size-2.5 rounded-full bg-[#febc2e]' />
          <span className='size-2.5 rounded-full bg-[#28c840]' />
        </div>
        <div className='flex items-center gap-2 rounded-pill bg-canvas ring-1 ring-hairline px-2.5 h-6 text-[11px] font-medium text-muted'>
          <svg viewBox='0 0 12 12' width='11' height='11' aria-hidden>
            <rect
              x='2.5'
              y='5'
              width='7'
              height='5.5'
              rx='1.2'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
            />
            <path
              d='M4 5V3.5a2 2 0 1 1 4 0V5'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
            />
          </svg>
          rnvlabs.com
        </div>
        <div className='size-5 rounded-full bg-surface-card ring-1 ring-hairline' />
      </div>

      {/* Faux nav strip */}
      <div className='flex items-center justify-between px-5 h-10 border-b border-hairline'>
        <div className='flex items-center gap-1.5'>
          <span className='size-4 rounded-md bg-ink text-on-dark text-[8px] font-semibold inline-flex items-center justify-center'>
            N°
          </span>
          <span
            className='text-[10px] font-semibold text-ink'
            style={{ letterSpacing: '-0.01em' }}
          >
            RNV Labs
          </span>
        </div>
        <div className='hidden sm:flex items-center gap-2.5 text-[9.5px] text-muted'>
          <span>Work</span>
          <span>Services</span>
          <span>Process</span>
          <span>Contact</span>
        </div>
        <div className='h-5 px-2 rounded-md bg-ink text-on-dark text-[9px] font-medium inline-flex items-center'>
          Start a project
        </div>
      </div>

      {/* Faux hero */}
      <div className='px-5 pt-6 pb-7'>
        <div
          className='text-[18px] font-semibold text-ink leading-[1.1]'
          style={{ letterSpacing: '-0.03em' }}
        >
          Senior product engineering,{' '}
          <span className='text-muted underline decoration-brand decoration-2 underline-offset-[3px]'>
            on demand.
          </span>
        </div>
        <p className='mt-2.5 text-[10.5px] leading-[1.55] text-body max-w-65'>
          A small full-stack web studio. End-to-end product engineering —
          design, frontend, backend, infra.
        </p>
        <div className='mt-4 flex items-center gap-2'>
          <div className='h-6 px-2.5 rounded-md bg-ink text-on-dark text-[9.5px] font-medium inline-flex items-center gap-1'>
            Start a project
            <span aria-hidden>→</span>
          </div>
          <div className='h-6 px-2.5 rounded-md ring-1 ring-hairline text-ink text-[9.5px] font-medium inline-flex items-center'>
            View services
          </div>
        </div>
      </div>

      {/* Hint of more page below */}
      <div className='h-3 bg-linear-to-b from-transparent to-surface-soft/60' />
    </div>
  );
}
