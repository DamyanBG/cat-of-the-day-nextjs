import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/profile',
    },
    sitemap: 'https://cat-of-the-week.fun/sitemap.xml',
  }
}