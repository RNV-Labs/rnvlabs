import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  variant?: 'ink' | 'on-dark';
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  lede,
  align = 'left',
  variant = 'ink',
  className,
}: SectionHeadingProps) {
  const isDark = variant === 'on-dark';

  return (
    <div
      className={cn(
        'max-w-[640px]',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker ? (
        <div
          className={cn(
            'text-kicker',
            isDark ? 'text-on-dark-muted' : 'text-muted',
          )}
        >
          {kicker}
        </div>
      ) : null}
      <h2
        className={cn(
          'text-display mt-3 text-[34px] md:text-[42px] leading-[1.05]',
          isDark ? 'text-on-dark' : 'text-ink',
        )}
        style={{ letterSpacing: 'var(--tracking-display-md)' }}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-4 text-[16px] leading-[1.6] max-w-[560px]',
            align === 'center' && 'mx-auto',
            isDark ? 'text-on-dark-muted' : 'text-body',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
