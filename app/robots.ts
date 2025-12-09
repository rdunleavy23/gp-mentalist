import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
      // Explicitly block common crawlers
      {
        userAgent: 'Googlebot',
        disallow: '/',
      },
      {
        userAgent: 'Bingbot',
        disallow: '/',
      },
      {
        userAgent: 'Slurp',
        disallow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider',
        disallow: '/',
      },
      {
        userAgent: 'YandexBot',
        disallow: '/',
      },
      {
        userAgent: 'Sogou',
        disallow: '/',
      },
      {
        userAgent: 'Exabot',
        disallow: '/',
      },
      {
        userAgent: 'facebot',
        disallow: '/',
      },
      {
        userAgent: 'ia_archiver',
        disallow: '/',
      },
    ],
    // No sitemap reference
  }
}

