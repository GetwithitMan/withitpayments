import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { localBusinessSchema, organizationSchema } from '@/lib/schema';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'With It Payments | Credit Card Processing & Terminals in Grand Junction & Fruita, CO',
    template: '%s | With It Payments',
  },
  description: 'Simple credit card processing and terminal solutions for local businesses in Grand Junction, Fruita, and the Western Slope. Fair rates, local support, top terminal brands like Dejavoo, Pax, and Verifone.',
  metadataBase: new URL('https://withitpayments.com'),
  keywords: [
    'credit card processing',
    'credit card terminal',
    'payment processing',
    'merchant services',
    'Grand Junction',
    'Fruita',
    'Western Slope Colorado',
    'Dejavoo',
    'Pax',
    'Verifone',
    'small business',
    'retail',
    'restaurant',
  ],
  authors: [{ name: 'With It Payments' }],
  creator: 'With It Payments',
  publisher: 'With It Payments',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://withitpayments.com',
    siteName: 'With It Payments',
    title: 'With It Payments | Credit Card Processing & Terminals',
    description: 'Simple credit card processing and terminal solutions for local businesses in Grand Junction, Fruita, and the Western Slope of Colorado.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'With It Payments - Credit Card Processing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'With It Payments | Credit Card Processing & Terminals',
    description: 'Simple credit card processing and terminal solutions for local businesses in Colorado.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Fruita, Colorado" />
        <meta name="geo.position" content="39.1583;-108.7289" />
        <meta name="ICBM" content="39.1583, -108.7289" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
