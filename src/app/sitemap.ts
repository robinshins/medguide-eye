import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site.config';
import { getAllArticleSlugs } from '@/lib/articles';
import { getAllBlogPosts } from '@/lib/blog';

// Rendered per request — NOT cached at the route level.
//
// Verified against production: neither revalidateTag('articles') nor
// revalidatePath('/sitemap.xml') purges a metadata route's cache, so with
// `export const revalidate = N` this file kept serving a stale URL set for up to N
// seconds after a publish while the home page updated instantly. Search engines
// discovering new articles late is the one thing this file exists to prevent.
//
// The cost of force-dynamic is bounded: getAllArticleSlugs() is still wrapped in
// unstable_cache tagged 'articles', so Firestore is only read again after a publish
// purges that tag. Every other request re-renders from cached data — cheap string
// formatting, no database round trip.
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${SITE.domain}`;

  const entries: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  for (const s of SITE.specialties) {
    entries.push({
      url: `${baseUrl}/s/${s.slug || 'general'}`,
      changeFrequency: 'daily',
      priority: 0.9,
    });
  }

  for (const key of ['about', 'privacy', 'terms', 'contact']) {
    entries.push({ url: `${baseUrl}/${key}`, changeFrequency: 'yearly', priority: 0.3 });
  }

  for (const post of getAllBlogPosts()) {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  const articles = await getAllArticleSlugs();
  for (const a of articles) {
    entries.push({
      url: `${baseUrl}/${a.slug}`,
      lastModified: a.publishedAt ? new Date(a.publishedAt) : undefined,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  return entries;
}
