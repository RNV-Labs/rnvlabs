import Link from 'next/link';
import { Logo } from './logo';
import { NavPillGroup } from './nav-pill-group';
import { MobileMenu } from './mobile-menu';

export function TopNav() {
  return (
    <header className='sticky top-0 z-40 bg-canvas/80 backdrop-blur-md border-b border-hairline'>
      <div className='container-1200 h-16 flex items-center justify-between gap-6'>
        <Link
          href='/'
          aria-label='Home'
          className='press rounded-btn focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-4'
        >
          <Logo />
        </Link>

        <NavPillGroup />
        <div className='hidden md:flex items-center gap-6'>
          <Link
            href='/contact'
            className='press inline-flex items-center rounded-btn px-3.5 h-9 text-[13px] font-medium bg-ink text-on-dark hover:bg-ink-active focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
          >
            Start a project
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
