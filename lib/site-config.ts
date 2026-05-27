export const siteConfig = {
  name: 'RNV Labs',
  wordmark: 'RNV Labs',
  tagline: 'A full-stack web studio',
  description:
    'RNV Labs is a small full-stack web studio. We design and build web applications end-to-end — discovery, design, frontend, backend, and infrastructure.',
  contactEmail: '@rnvlabs.gmail.com',
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
        { label: 'rnvlabs@gmail.com', href: 'mailto:rnvlabs@gmail.com' },
      ],
    },
  ],
  social: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1F1Ga7FYwU/?mibextid=wwXIfr',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/rnvlabs2026?igsh=c2trNnljN2Z0ZW1k&utm_source=qr',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
