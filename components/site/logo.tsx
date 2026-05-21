import { cn } from '@/lib/utils';

const ACCENT = 'var(--color-brand)';

export function Logo({
  className,
  variant = 'ink',
  showWordmark = true,
  size = 18,
}: {
  className?: string;
  variant?: 'ink' | 'on-dark';
  showWordmark?: boolean;
  size?: number;
}) {
  const isDark = variant === 'on-dark';
  const colorClass = isDark ? 'text-on-dark' : 'text-ink';
  const dividerColor = isDark
    ? 'rgba(255,255,255,0.22)'
    : 'rgba(17,17,17,0.18)';

  return (
    <span
      aria-label='RNV Labs'
      className={cn(
        'inline-flex items-center select-none',
        colorClass,
        className,
      )}
      style={{ gap: `${size * 0.45}px` }}
    >
      <span
        className='inline-flex items-center'
        style={{ gap: `${size * 0.18}px` }}
      >
        <span
          aria-hidden='true'
          className='font-display font-extrabold leading-none'
          style={{
            fontSize: `${size}px`,
            letterSpacing: '-0.07em',
          }}
        >
          RNV
        </span>
        <span
          aria-hidden='true'
          className='inline-block'
          style={{
            width: `${Math.max(4, Math.round(size * 0.33))}px`,
            height: `${Math.max(4, Math.round(size * 0.33))}px`,
            backgroundColor: ACCENT,
            transform: `translateY(${Math.round(size * 0.22)}px)`,
          }}
        />
      </span>

      {showWordmark && (
        <>
          <span
            aria-hidden='true'
            className='inline-block'
            style={{
              width: '1px',
              height: `${Math.round(size * 0.95)}px`,
              backgroundColor: dividerColor,
            }}
          />
          <span
            aria-hidden='true'
            className='font-display font-medium leading-none'
            style={{
              fontSize: `${Math.round(size * 0.82)}px`,
              letterSpacing: '-0.015em',
            }}
          >
            Labs
          </span>
        </>
      )}
    </span>
  );
}
