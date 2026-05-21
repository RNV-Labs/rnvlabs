import type { MetadataRoute } from 'next';

// TODO: replace with the real production origin when the domain is confirmed.
const BASE_URL = 'https://rnvlabs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return (
    ['/', '/services', '/process', '/engagement', '/contact'] as const
  ).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
