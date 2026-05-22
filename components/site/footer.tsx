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
            <p className='mt-4 text-[14px] leading-relaxed text-on-dark-muted max-w-70'>
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
            {siteConfig.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={s.label}
                className='press inline-flex items-center text-on-dark-muted hover:text-brand focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 rounded-sm'
              >
                {s.label === 'Facebook' ? (
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.03 1.46-4.03 4.13v2.3H7.6V14h2.66v8h3.24z' />
                  </svg>
                ) : (
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <rect x='3' y='3' width='18' height='18' rx='5' />
                    <circle cx='12' cy='12' r='4' />
                    <circle cx='17.5' cy='6.5' r='1' fill='currentColor' />
                  </svg>
                )}
              </a>
            ))}
            <Link href='/contact' className='press hover:text-brand'>
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
