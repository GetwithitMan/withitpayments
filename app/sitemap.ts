import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://withitpayments.com';
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/terminals', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/industries', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/how-it-works', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/service-area', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/sms-signup', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  // Terminal brand pages
  const terminalBrands = [
    '/terminals/dejavoo',
    '/terminals/pax',
    '/terminals/verifone',
    '/terminals/ingenico',
    '/terminals/clover',
  ];

  // Terminal type pages
  const terminalTypes = [
    '/terminals/countertop',
    '/terminals/mobile',
    '/terminals/smart',
  ];

  // Industry pages
  const industries = [
    '/industries/retail',
    '/industries/restaurants',
    '/industries/salons',
    '/industries/food-trucks',
    '/industries/medical',
    '/industries/professional-services',
    '/industries/auto-repair',
  ];

  // Service area pages
  const serviceAreas = [
    '/service-area/grand-junction',
    '/service-area/fruita',
    '/service-area/western-slope',
  ];

  const allUrls = [
    ...mainPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...terminalBrands.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...terminalTypes.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...industries.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...serviceAreas.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return allUrls;
}
