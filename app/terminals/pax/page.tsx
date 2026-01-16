import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Pax Credit Card Terminals - Modern & Secure',
  description: 'Pax credit card terminals with advanced security and modern touchscreen interfaces. Android-based smart terminals for retail, restaurants, and service businesses.',
  keywords: ['Pax terminal', 'Pax A920', 'Pax credit card machine', 'Android payment terminal', 'smart terminal'],
  openGraph: {
    title: 'Pax Terminals | With It Payments',
    description: 'Modern Pax credit card terminals with advanced features for your business.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Pax', url: 'https://withitpayments.com/terminals/pax' },
]);

const productSchema = generateProductSchema({
  name: 'Pax Credit Card Terminal',
  description: 'Modern Android-based credit card terminals from Pax with advanced security and touchscreen interfaces.',
  brand: 'Pax',
  slug: 'pax',
});

const models = [
  {
    name: 'Pax A80',
    type: 'Countertop',
    description: 'Compact countertop terminal with touchscreen. Great for retail and quick-service environments.',
    features: ['Touchscreen display', 'Fast processor', 'EMV & NFC', 'Compact footprint'],
  },
  {
    name: 'Pax A920',
    type: 'Smart Terminal',
    description: 'Popular Android smart terminal with large display. Perfect for restaurants and full-service retail.',
    features: ['5" touchscreen', 'Android OS', 'Built-in camera', 'All-day battery'],
  },
  {
    name: 'Pax A920 Pro',
    type: 'Smart Terminal',
    description: 'Enhanced smart terminal with larger display and more power for demanding applications.',
    features: ['6" HD display', 'Enhanced processor', 'Dual cameras', 'Extended battery'],
  },
];

export default function PaxPage() {
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
                Pax Credit Card Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Pax terminals combine modern Android technology with enterprise-grade security. With intuitive touchscreens and powerful processors, Pax terminals deliver a premium payment experience for your customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modern touchscreen interface
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Android-based flexibility
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced security features
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast processing speeds
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get Pax for Your Business
              </Link>
            </div>
            <div className="image-placeholder aspect-square w-full">
              <span className="text-center px-4">
                Pax Terminal Product Image
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
              Pax Terminal Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From compact countertop to feature-rich smart terminals, Pax has options for every business.
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

      {/* Why Pax */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pax?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Pax has become a leader in smart payment terminals, offering the technology and features modern businesses need.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Modern Technology</h3>
                <p className="text-gray-600 text-sm">Android-based systems mean familiar interfaces and future-ready hardware.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Customer Experience</h3>
                <p className="text-gray-600 text-sm">Large, clear touchscreens make checkout smooth and professional.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">App Ecosystem</h3>
                <p className="text-gray-600 text-sm">Access business apps for loyalty, inventory, and more beyond payments.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Flexible Connectivity</h3>
                <p className="text-gray-600 text-sm">WiFi, Ethernet, and cellular options to fit your business setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready for a Pax Terminal?"
        description="Contact us to learn more about Pax options and get a quote for your business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
