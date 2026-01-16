import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Countertop Credit Card Terminals - Reliable Wired Terminals',
  description: 'Countertop credit card terminals for retail stores, offices, and businesses with fixed checkout locations. Reliable wired connection, fast processing, no battery concerns.',
  keywords: ['countertop terminal', 'wired credit card machine', 'retail payment terminal', 'fixed terminal'],
  openGraph: {
    title: 'Countertop Terminals | With It Payments',
    description: 'Reliable wired countertop credit card terminals for fixed checkout locations.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Countertop', url: 'https://withitpayments.com/terminals/countertop' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Countertop Credit Card Terminal',
  description: 'Reliable wired credit card terminals for fixed checkout locations in retail, offices, and service businesses.',
  url: 'https://withitpayments.com/terminals/countertop',
});

export default function CountertopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/terminals" className="text-[var(--primary)] text-sm font-medium hover:underline mb-4 inline-block">
                &larr; All Terminal Types
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Countertop Credit Card Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                For businesses with a fixed checkout location, countertop terminals offer the most reliable and cost-effective solution. Connected via Ethernet or phone line, these terminals are always ready to process payments.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Countertop Terminal
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">
                Countertop Terminal in Use
                <br />
                <span className="text-xs">(600x450)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose a Countertop Terminal?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Reliable Connection',
                description: 'Wired Ethernet connection means no dropped connections or signal issues.',
                icon: '🔌',
              },
              {
                title: 'No Battery Concerns',
                description: 'Always plugged in and ready to go. No charging or battery replacements needed.',
                icon: '⚡',
              },
              {
                title: 'Fast Processing',
                description: 'Wired connections typically offer the fastest transaction speeds.',
                icon: '🚀',
              },
              {
                title: 'Cost Effective',
                description: 'Usually the most affordable terminal option with lower ongoing costs.',
                icon: '💰',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Countertop Terminals Are Perfect For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Retail stores',
                'Boutiques & gift shops',
                'Convenience stores',
                'Dental & medical offices',
                'Hair salons with front desk',
                'Law offices',
                'Accounting firms',
                'Service counters',
              ].map((business) => (
                <div key={business} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{business}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Countertop Options by Brand
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer countertop terminals from all major brands.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Dejavoo', 'Pax', 'Verifone', 'Ingenico'].map((brand) => (
              <Link
                key={brand}
                href={`/terminals/${brand.toLowerCase()}`}
                className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Need a Countertop Terminal?"
        description="Contact us to find the right countertop terminal for your business at the best price."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
