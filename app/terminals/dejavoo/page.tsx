import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dejavoo Credit Card Terminals - Reliable & Affordable',
  description: 'Dejavoo credit card terminals for small business. Reliable, affordable, and easy to use. Countertop and wireless options available. Get a free quote from With It Payments.',
  keywords: ['Dejavoo terminal', 'Dejavoo credit card machine', 'Dejavoo Z11', 'Dejavoo QD series', 'affordable payment terminal'],
  openGraph: {
    title: 'Dejavoo Terminals | With It Payments',
    description: 'Reliable and affordable Dejavoo credit card terminals for your business.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Dejavoo', url: 'https://withitpayments.com/terminals/dejavoo' },
]);

const productSchema = generateProductSchema({
  name: 'Dejavoo Credit Card Terminal',
  description: 'Reliable and affordable credit card terminals from Dejavoo, trusted by thousands of small businesses.',
  brand: 'Dejavoo',
  slug: 'dejavoo',
});

const models = [
  {
    name: 'Dejavoo Z11',
    type: 'Countertop',
    description: 'Compact countertop terminal with all essential features. Perfect for small retail locations.',
    features: ['EMV chip reader', 'NFC contactless', 'Built-in printer', 'Ethernet connection'],
  },
  {
    name: 'Dejavoo QD2',
    type: 'Wireless',
    description: 'Portable wireless terminal with long battery life. Great for tableside or mobile service.',
    features: ['WiFi + Bluetooth', 'All-day battery', 'Touchscreen', 'Compact design'],
  },
  {
    name: 'Dejavoo QD4',
    type: 'Smart Terminal',
    description: 'Android-based smart terminal with apps and advanced features.',
    features: ['Android OS', 'Large touchscreen', 'App support', 'Tip on screen'],
  },
];

export default function DejavooPage() {
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
                Dejavoo Credit Card Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Dejavoo terminals are trusted by thousands of businesses for their reliability, affordability, and ease of use. Whether you need a simple countertop terminal or a wireless option, Dejavoo has you covered.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Affordable pricing
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Proven durability
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Easy to use interface
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast transaction speeds
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get Dejavoo for Your Business
              </Link>
            </div>
            <div className="image-placeholder aspect-square w-full">
              <span className="text-center px-4">
                Dejavoo Terminal Product Image
                <br />
                <span className="text-xs">(500x500)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dejavoo Terminal Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From basic countertop to advanced smart terminals, find the right Dejavoo for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div key={model.name} className="card">
                <div className="image-placeholder aspect-square w-full mb-4">
                  <span className="text-center px-2">
                    {model.name} Image
                    <br />
                    <span className="text-xs">(300x300)</span>
                  </span>
                </div>
                <span className="text-xs font-semibold text-[var(--primary)] uppercase">{model.type}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{model.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                <ul className="space-y-1">
                  {model.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[var(--secondary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dejavoo */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dejavoo?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Dejavoo has built a reputation for making terminals that just work. No fancy gimmicks—just reliable payment processing day after day.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Budget-Friendly</h3>
                <p className="text-gray-600 text-sm">Dejavoo terminals are often the most affordable option without sacrificing quality or features.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Easy to Learn</h3>
                <p className="text-gray-600 text-sm">Simple interface means your staff can learn to use it quickly with minimal training.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Built to Last</h3>
                <p className="text-gray-600 text-sm">Solid construction means these terminals hold up to daily use in busy environments.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">All Payment Types</h3>
                <p className="text-gray-600 text-sm">Accept EMV chip, contactless/NFC, Apple Pay, Google Pay, and traditional swipe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready for a Dejavoo Terminal?"
        description="Contact us to learn more about Dejavoo options and get a quote for your business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
