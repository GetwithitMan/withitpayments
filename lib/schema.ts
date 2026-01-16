// Schema.org structured data for SEO

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://withitpayments.com/#business',
  name: 'With It Payments',
  description: 'Credit card processing and terminal solutions for local businesses in Grand Junction, Fruita, and the Western Slope of Colorado.',
  url: 'https://withitpayments.com',
  telephone: '+19705551234',
  email: 'info@withitpayments.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2480 Hwy 6&50, Unit 4',
    addressLocality: 'Fruita',
    addressRegion: 'CO',
    postalCode: '81521',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.1583,
    longitude: -108.7289,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Grand Junction',
      containedInPlace: {
        '@type': 'State',
        name: 'Colorado',
      },
    },
    {
      '@type': 'City',
      name: 'Fruita',
      containedInPlace: {
        '@type': 'State',
        name: 'Colorado',
      },
    },
    {
      '@type': 'Place',
      name: 'Western Slope',
      containedInPlace: {
        '@type': 'State',
        name: 'Colorado',
      },
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  image: 'https://withitpayments.com/og-image.jpg',
  sameAs: [],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'With It Payments',
  url: 'https://withitpayments.com',
  logo: 'https://withitpayments.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+19705551234',
    contactType: 'sales',
    areaServed: 'US',
    availableLanguage: 'English',
  },
};

export function generateProductSchema(terminal: {
  name: string;
  description: string;
  brand: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: terminal.name,
    description: terminal.description,
    brand: {
      '@type': 'Brand',
      name: terminal.brand,
    },
    url: `https://withitpayments.com/terminals/${terminal.slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'State',
        name: 'Colorado',
      },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'With It Payments',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2480 Hwy 6&50, Unit 4',
        addressLocality: 'Fruita',
        addressRegion: 'CO',
        postalCode: '81521',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Colorado',
    },
  };
}
