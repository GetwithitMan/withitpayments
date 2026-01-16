import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Ingenico Credit Card Terminals - Premium Quality',
  description: 'Ingenico credit card terminals with premium build quality and fast transaction processing. High-volume capable terminals for demanding business environments.',
  keywords: ['Ingenico terminal', 'Ingenico credit card machine', 'premium payment terminal', 'high volume terminal'],
  openGraph: {
    title: 'Ingenico Terminals | With It Payments',
    description: 'Premium Ingenico credit card terminals for high-volume businesses.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Ingenico', url: 'https://withitpayments.com/terminals/ingenico' },
]);

const productSchema = generateProductSchema({
  name: 'Ingenico Credit Card Terminal',
  description: 'Premium credit card terminals from Ingenico with excellent build quality and fast transaction processing.',
  brand: 'Ingenico',
  slug: 'ingenico',
});

export default function IngenicoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/terminals" className="text-[var(--primary)] text-sm font-medium hover:underline mb-4 inline-block">
                &larr; All Terminals
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ingenico Credit Card Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Ingenico is known for premium build quality and exceptional performance. For businesses that process high volumes or need the absolute best in hardware, Ingenico delivers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium build quality
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  High-volume capable
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast transaction speeds
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Global reputation
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get Ingenico for Your Business
              </Link>
            </div>
            <div className="image-placeholder aspect-square w-full">
              <span className="text-center px-4">
                Ingenico Terminal Product Image
                <br />
                <span className="text-xs">(500x500)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ingenico */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Ingenico?
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Exceptional Durability</h3>
                <p className="text-gray-600">Ingenico terminals are built with premium materials designed to withstand heavy daily use. These are terminals that last.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Speed When It Matters</h3>
                <p className="text-gray-600">Fast processors and optimized software mean quick transaction times—critical when you have a line of customers waiting.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Complete Payment Coverage</h3>
                <p className="text-gray-600">Accept every way customers want to pay: EMV chip, contactless, Apple Pay, Google Pay, and traditional magnetic stripe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready for an Ingenico Terminal?"
        description="Contact us to learn more about Ingenico options and get a quote for your business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
