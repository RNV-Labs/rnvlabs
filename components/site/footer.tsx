import Link from 'next/link';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className='bg-surface-dark text-on-dark'>
      <div className='container-1200 py-20'>
        <div className='grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12'>
          <div className='col-span-2 md:col-span-4'>
            <Logo variant='on-dark' />
            <p className='mt-4 text-[14px] leading-relaxed text-on-dark-muted max-w-[280px]'>
              {siteConfig.tagline}. We design and build modern web products for
              small, ambitious teams.
            </p>
          </div>

          {siteConfig.footerColumns.map((col) => (
            <div key={col.title} className='md:col-span-2'>
              <div className='text-kicker text-on-dark-muted/80'>
                {col.title}
              </div>
              <ul className='mt-4 space-y-2.5'>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='press text-[14px] text-on-dark/90 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 rounded-sm'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <p className='text-[13px] text-on-dark-muted'>
            © {new Date().getFullYear()} {siteConfig.name}. All work shipped
            from independent ground.
          </p>
          <div className='flex items-center gap-5 text-[13px] text-on-dark-muted'>
            <Link href='/contact' className='press hover:text-brand'>
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
