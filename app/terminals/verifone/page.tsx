import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Verifone Credit Card Terminals - Industry Leading',
  description: 'Verifone credit card terminals trusted by major retailers worldwide. Enterprise-grade security and reliability for businesses of all sizes.',
  keywords: ['Verifone terminal', 'Verifone credit card machine', 'Verifone VX series', 'enterprise payment terminal'],
  openGraph: {
    title: 'Verifone Terminals | With It Payments',
    description: 'Industry-leading Verifone credit card terminals for your business.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Verifone', url: 'https://withitpayments.com/terminals/verifone' },
]);

const productSchema = generateProductSchema({
  name: 'Verifone Credit Card Terminal',
  description: 'Industry-leading credit card terminals from Verifone with enterprise-grade security and reliability.',
  brand: 'Verifone',
  slug: 'verifone',
});

export default function VerifonePage() {
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
                Verifone Credit Card Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Verifone is one of the most recognized names in payment terminals. Trusted by major retailers and small businesses alike, Verifone delivers enterprise-grade security and proven reliability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industry-leading brand
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Enterprise-grade security
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Long-lasting hardware
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wide compatibility
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get Verifone for Your Business
              </Link>
            </div>
            <div className="image-placeholder aspect-square w-full">
              <span className="text-center px-4">
                Verifone Terminal Product Image
                <br />
                <span className="text-xs">(500x500)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Verifone */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Businesses Trust Verifone
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Verifone has been making payment terminals for decades. From corner stores to Fortune 500 companies, their hardware is battle-tested in real-world environments.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Verifone terminals are built with security at the core, featuring advanced encryption and tamper-resistant designs that protect your customers&apos; data.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Built to Last</h3>
                <p className="text-gray-600">Verifone hardware is known for its durability. These terminals are designed to handle high-volume environments and years of daily use.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Universal Acceptance</h3>
                <p className="text-gray-600">Accept all major card types, contactless payments, mobile wallets, and more. Verifone terminals keep you ready for how customers want to pay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready for a Verifone Terminal?"
        description="Contact us to learn more about Verifone options and get a quote for your business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
