import type { MetadataRoute } from 'next';

// TODO: replace with the real production origin when the domain is confirmed.
const BASE_URL = 'https://rnvlabs.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
