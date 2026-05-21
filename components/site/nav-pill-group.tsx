import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function NavPillGroup() {
  return (
    <nav
      aria-label='Primary'
      className='hidden md:flex items-center rounded-pill bg-surface-card/80 backdrop-blur-sm px-1.5 py-1.5 ring-1 ring-hairline'
    >
      {siteConfig.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className='press text-[13px] font-medium text-body hover:text-brand rounded-pill px-3.5 py-1.5 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2'
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
