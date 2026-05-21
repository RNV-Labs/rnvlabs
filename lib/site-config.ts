export const siteConfig = {
  name: 'RNV Labs',
  wordmark: 'RNV Labs',
  tagline: 'A full-stack web studio',
  description:
    'RNV Labs is a small full-stack web studio. We design and build web applications end-to-end — discovery, design, frontend, backend, and infrastructure.',
  contactEmail: 'hello@rnvlabs.com',
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Engagement', href: '/engagement' },
    { label: 'Contact', href: '/contact' },
  ],
  footerColumns: [
    {
      title: 'Studio',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Services', href: '/services' },
        { label: 'Process', href: '/process' },
        { label: 'Engagement', href: '/engagement' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Start a project', href: '/contact' },
        { label: 'hello@rnvlabs.com', href: 'mailto:hello@rnvlabs.com' },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
