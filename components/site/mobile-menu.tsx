'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Detect post-hydration so the portal only renders on the client —
  // required to avoid an SSR/client tree mismatch. This is one of the
  // legitimate "set state in effect" cases.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const panel = (
    <div
      id='mobile-menu-panel'
      role='dialog'
      aria-modal='true'
      aria-label='Site navigation'
      className={cn(
        'md:hidden fixed inset-x-0 top-16 bottom-0 z-30 bg-canvas transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-opacity motion-reduce:transform-none',
        open
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-2 pointer-events-none',
      )}
    >
      <div className='container-1200 pt-6 pb-10 flex flex-col h-full'>
        <nav aria-label='Primary mobile' className='flex flex-col'>
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'block py-3 text-[20px] text-ink press border-b border-hairline last:border-b-0 focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2',
                  isActive &&
                    'underline decoration-brand decoration-[3px] underline-offset-8',
                )}
                style={{ letterSpacing: '-0.02em' }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className='mt-auto pt-8'>
          <Link
            href='/contact'
            onClick={() => setOpen(false)}
            className='press inline-flex w-full items-center justify-center gap-2 rounded-btn bg-ink text-on-dark h-12 px-5 text-[14px] font-medium hover:bg-ink-active focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
          >
            Start a project
            <ArrowRight className='size-4' />
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className='press mt-3 block text-center text-[14px] text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 rounded-btn'
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls='mobile-menu-panel'
        aria-label={open ? 'Close menu' : 'Open menu'}
        className='md:hidden inline-flex items-center justify-center size-10 -mr-2 rounded-btn text-ink press focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2'
      >
        {open ? <X className='size-5' /> : <Menu className='size-5' />}
      </button>
      {mounted && createPortal(panel, document.body)}
    </>
  );
}
