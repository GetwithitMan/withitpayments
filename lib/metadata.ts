import { Metadata } from 'next';

const siteConfig = {
  name: 'With It Payments',
  description: 'Credit card processing and terminal solutions for local businesses in Grand Junction, Fruita, and the Western Slope of Colorado. Simple setup, fair pricing, local support.',
  url: 'https://withitpayments.com',
  ogImage: 'https://withitpayments.com/og-image.jpg',
  phone: '(970) 555-1234',
  address: '2480 Hwy 6&50, Unit 4, Fruita, CO 81521',
};

export function generateMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Credit Card Processing`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: {
      'geo.region': 'US-CO',
      'geo.placename': 'Fruita, Colorado',
      'geo.position': '39.1583;-108.7289',
      'ICBM': '39.1583, -108.7289',
    },
  };
}

// Pre-defined metadata for common pages
export const pageMetadata = {
  home: generateMetadata({
    title: 'With It Payments | Credit Card Processing & Terminals in Grand Junction & Fruita, CO',
    description: 'Simple credit card processing and terminal solutions for local businesses in Grand Junction, Fruita, and the Western Slope. Fair rates, local support, top terminal brands.',
    path: '',
  }),
  terminals: generateMetadata({
    title: 'Credit Card Terminals for Small Business',
    description: 'Explore countertop, mobile, and smart credit card terminals from Dejavoo, Pax, Verifone, and more. Find the right terminal for your business.',
    path: '/terminals',
  }),
  industries: generateMetadata({
    title: 'Industries We Serve - Retail, Restaurants, Salons & More',
    description: 'Credit card processing solutions tailored for retail, restaurants, salons, food trucks, medical offices, and professional services in Colorado.',
    path: '/industries',
  }),
  howItWorks: generateMetadata({
    title: 'How It Works - Simple Credit Card Processing Setup',
    description: 'Get started with credit card processing in 3 easy steps. Choose your terminal, get set up quickly, and start accepting payments right away.',
    path: '/how-it-works',
  }),
  pricing: generateMetadata({
    title: 'Transparent Credit Card Processing Pricing',
    description: 'Fair, transparent pricing for credit card processing. No hidden fees, no surprises. See our rates and find the right plan for your business.',
    path: '/pricing',
  }),
  serviceArea: generateMetadata({
    title: 'Credit Card Processing in Grand Junction, Fruita & Western Slope',
    description: 'Serving local businesses in Grand Junction, Fruita, and throughout the Western Slope of Colorado with credit card processing and terminal solutions.',
    path: '/service-area',
  }),
  about: generateMetadata({
    title: 'About With It Payments - Local Colorado Business',
    description: 'With It Payments is a local credit card processing company based in Fruita, Colorado. We help businesses accept payments with fair rates and real support.',
    path: '/about',
  }),
  contact: generateMetadata({
    title: 'Contact Us - Get a Free Quote',
    description: 'Contact With It Payments for a free quote on credit card processing. Visit us in Fruita, CO or call for personalized service.',
    path: '/contact',
  }),
};

export { siteConfig };
