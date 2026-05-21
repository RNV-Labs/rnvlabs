import { cn } from '@/lib/utils';

type Status = 'progress' | 'review' | 'shipped';
type Owner = 'R' | 'V';

type Item = {
  id: string;
  title: string;
  owner: Owner;
};

const sections: { key: Status; label: string; items: Item[] }[] = [
  {
    key: 'progress',
    label: 'In progress',
    items: [
      { id: 'STU-018', title: 'Hero refresh', owner: 'R' },
      { id: 'STU-017', title: 'Engagement page copy', owner: 'V' },
    ],
  },
  {
    key: 'review',
    label: 'In review',
    items: [
      { id: 'STU-016', title: 'Process page', owner: 'R' },
      { id: 'STU-015', title: 'Services page polish', owner: 'V' },
    ],
  },
  {
    key: 'shipped',
    label: 'Shipped this week',
    items: [
      { id: 'STU-014', title: 'Landing page', owner: 'R' },
      { id: 'STU-013', title: 'Marketing nav + footer', owner: 'V' },
    ],
  },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === 'progress') {
    return (
      <svg
        viewBox='0 0 12 12'
        width='12'
        height='12'
        aria-hidden
        className='shrink-0 text-amber-500'
      >
        <circle
          cx='6'
          cy='6'
          r='5'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
          opacity='0.55'
        />
        <path d='M6 1 A5 5 0 0 1 6 11 Z' fill='currentColor' />
      </svg>
    );
  }
  if (status === 'review') {
    return (
      <svg
        viewBox='0 0 12 12'
        width='12'
        height='12'
        aria-hidden
        className='shrink-0 text-violet-500'
      >
        <circle
          cx='6'
          cy='6'
          r='5'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
          opacity='0.55'
        />
        <path d='M6 1 A5 5 0 1 1 1.34 8.5 Z' fill='currentColor' />
      </svg>
    );
  }
  return (
    <svg
      viewBox='0 0 12 12'
      width='12'
      height='12'
      aria-hidden
      className='shrink-0 text-emerald-500'
    >
      <circle cx='6' cy='6' r='5' fill='currentColor' />
      <path
        d='M3.6 6.2 5.2 7.8 8.4 4.6'
        fill='none'
        stroke='white'
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function OwnerAvatar({ owner }: { owner: Owner }) {
  const styles =
    owner === 'R'
      ? 'bg-violet-100 ring-violet-200/70 text-violet-700'
      : 'bg-amber-100 ring-amber-200/70 text-amber-700';
  return (
    <span
      className={cn(
        'size-5 rounded-full ring-1 inline-flex items-center justify-center text-[10px] font-semibold tabular-nums',
        styles,
      )}
      aria-label={`Owner ${owner}`}
    >
      {owner}
    </span>
  );
}

export function HeroStudioBoardCard({ className }: { className?: string }) {
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
          <span className='size-1.5 rounded-full bg-brand animate-brand-pulse' />
          RNV Labs · Studio board
        </div>
        <div className='flex items-center gap-1 text-muted-soft'>
          <span className='size-1 rounded-full bg-current' />
          <span className='size-1 rounded-full bg-current' />
          <span className='size-1 rounded-full bg-current' />
        </div>
      </div>

      {/* Body */}
      <div className='p-5'>
        {/* Header */}
        <div className='flex items-end justify-between gap-3'>
          <div>
            <div className='text-kicker text-muted-soft'>
              Studio · This week
            </div>
            <div
              className='mt-1.5 text-[18px] font-semibold text-ink'
              style={{ letterSpacing: '-0.02em' }}
            >
              What we&rsquo;re shipping
            </div>
          </div>
          <div className='hidden sm:flex items-center gap-1.5 shrink-0'>
            <div className='h-7 rounded-md ring-1 ring-hairline px-2.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-ink'>
              <span className='size-1.5 rounded-full bg-brand animate-brand-pulse [animation-delay:-1.2s]' />
              Tue · May 20
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className='mt-4 space-y-3'>
          {sections.map((section) => (
            <div key={section.key}>
              <div className='flex items-center gap-1.5 px-0.5'>
                <span className='text-[10px] uppercase tracking-[0.12em] text-muted font-semibold'>
                  {section.label}
                </span>
                <span className='text-[10px] text-muted-soft'>·</span>
                <span className='text-[10px] tabular-nums text-muted-soft'>
                  {section.items.length}
                </span>
              </div>
              <div className='mt-1.5 rounded-lg ring-1 ring-hairline overflow-hidden'>
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between gap-2 px-3 h-9 border-b last:border-b-0 border-hairline bg-canvas'
                  >
                    <div className='flex items-center gap-2.5 min-w-0 flex-1'>
                      <StatusIcon status={section.key} />
                      <span className='hidden sm:inline text-[10px] font-mono text-muted-soft tabular-nums shrink-0'>
                        {item.id}
                      </span>
                      <span
                        className={cn(
                          'text-[12px] truncate min-w-0',
                          section.key === 'shipped'
                            ? 'text-muted'
                            : 'text-body',
                        )}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 shrink-0'>
                      {section.key === 'shipped' && (
                        <span className='hidden sm:inline-block text-[9.5px] font-medium rounded-pill px-1.5 py-0.5 text-emerald-700 bg-emerald-50'>
                          Shipped
                        </span>
                      )}
                      <OwnerAvatar owner={item.owner} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
