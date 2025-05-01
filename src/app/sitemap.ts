import type { MetadataRoute } from 'next';
import { apps } from '@/data/apps';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://appsneak-clone.netlify.app';

  // Home page
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ] as MetadataRoute.Sitemap;

  // App detail pages
  const appRoutes = apps.map((app) => ({
    url: `${baseUrl}/app/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [...routes, ...appRoutes];
}
