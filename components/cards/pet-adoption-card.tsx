import { cn } from '@/lib/utils';

const KODA_ACCENT = '#F2A24A';
const KODA_ACCENT_SOFT = '#F9D9B8';
const KODA_CREAM = '#FBF6EC';
const KODA_INK = '#1F2A30';

const SERIF =
  'ui-serif, "Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", serif';

/**
 * Stylized mini of the KodaNest pet-adoption site (koda-nest.vercel.app).
 * Used as the preview for the "Live · Pet adoption" work case.
 */
export function PetAdoptionCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative rounded-mockup ring-1 ring-hairline shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18),0_8px_24px_-12px_rgba(15,23,42,0.10)] overflow-hidden',
        className,
      )}
      style={{ backgroundColor: KODA_CREAM }}
    >
      {/* Window chrome */}
      <div
        className='flex items-center justify-between px-4 h-9 border-b border-hairline'
        style={{ backgroundColor: 'rgba(245, 235, 215, 0.55)' }}
      >
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
          koda-nest.vercel.app
        </div>
        <div className='size-5 rounded-full bg-surface-card ring-1 ring-hairline' />
      </div>

      {/* Faux nav */}
      <div className='flex items-center justify-between px-4 h-10 border-b border-hairline'>
        <div className='flex items-center gap-1.5'>
          <span
            className='size-5 rounded-full inline-flex items-center justify-center'
            style={{ backgroundColor: KODA_ACCENT_SOFT }}
            aria-hidden
          >
            <span
              className='size-2.5 rounded-full'
              style={{ backgroundColor: '#7A4A2E' }}
            />
          </span>
          <span
            className='text-[11px] font-semibold'
            style={{
              fontFamily: SERIF,
              letterSpacing: '-0.005em',
              color: KODA_INK,
            }}
          >
            KodaNest
          </span>
        </div>
        <div className='hidden sm:flex items-center gap-2.5 text-[9px] font-medium text-muted'>
          <span
            className='pb-0.5'
            style={{
              color: KODA_INK,
              borderBottom: `1.5px solid ${KODA_ACCENT}`,
            }}
          >
            Home
          </span>
          <span>Browse Pets</span>
          <span>Shelters</span>
          <span>About</span>
        </div>
        <div className='flex items-center gap-1'>
          <div
            className='h-5 px-2 rounded-pill text-[9px] font-semibold inline-flex items-center text-white'
            style={{ backgroundColor: KODA_ACCENT }}
          >
            Donate
          </div>
          <div
            className='h-5 px-2 rounded-pill ring-1 ring-hairline text-[9px] font-semibold inline-flex items-center'
            style={{ color: KODA_INK }}
          >
            Login
          </div>
        </div>
      </div>

      {/* Faux hero */}
      <div className='px-5 pt-6 pb-4'>
        <div
          className='text-[20px] leading-[1.05]'
          style={{
            fontFamily: SERIF,
            fontWeight: 600,
            letterSpacing: '-0.015em',
            color: KODA_INK,
          }}
        >
          Find your next
          <br />
          family member
        </div>
        <p className='mt-2 text-[10px] leading-[1.55] text-body max-w-60'>
          Browse adoptable pets from verified shelters near you — no middlemen,
          no guesswork.
        </p>
        <div className='mt-3.5 flex items-center gap-1.5'>
          <div
            className='h-6 px-2.5 rounded-pill text-white text-[9.5px] font-semibold inline-flex items-center gap-1'
            style={{ backgroundColor: KODA_ACCENT }}
          >
            Browse Pets
          </div>
          <div
            className='h-6 px-2.5 rounded-pill ring-1 ring-hairline text-[9.5px] font-semibold inline-flex items-center bg-canvas'
            style={{ color: KODA_INK }}
          >
            Find Shelters
          </div>
        </div>
      </div>

      {/* Stats strip — mirrors the row directly under the live hero */}
      <div
        className='mx-4 mb-4 rounded-card bg-canvas ring-1 ring-hairline px-3 py-2 flex items-center justify-between'
        style={{ gap: '0.5rem' }}
      >
        {[
          { value: '12k+', label: 'Adoptions' },
          { value: '200+', label: 'Shelters' },
          { value: '98%', label: 'Happy' },
          { value: '4.92★', label: 'Rating' },
        ].map((stat, i, arr) => (
          <div key={stat.label} className='flex items-center gap-2 flex-1'>
            <div className='flex-1 text-center'>
              <div
                className='text-[10.5px] font-semibold leading-tight'
                style={{ color: KODA_INK, letterSpacing: '-0.01em' }}
              >
                {stat.value}
              </div>
              <div className='text-[7.5px] text-muted leading-tight mt-0.5'>
                {stat.label}
              </div>
            </div>
            {i < arr.length - 1 ? (
              <div className='h-5 w-px bg-hairline' />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
