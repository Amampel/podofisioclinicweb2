import { MetadataRoute } from 'next';
import { services } from '../src/lib/service-data';
import { blogPosts } from '../src/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.podofisioclinic.com';
  
  // 1. Static Routes
  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'monthly' },
    { url: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/tarifas', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/nosotros', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  ] as const;

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamic Service Routes
  const serviceSitemap = services.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Dynamic Blog Post Routes
  const blogSitemap = blogPosts.map((post) => {
    let parsedDate = new Date();
    try {
      const dateVal = Date.parse(post.date);
      if (!isNaN(dateVal)) {
        parsedDate = new Date(dateVal);
      }
    } catch (e) {
      // Fallback to current date
    }
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: parsedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  return [...staticSitemap, ...serviceSitemap, ...blogSitemap];
}

