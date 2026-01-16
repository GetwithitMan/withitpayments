import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Smart Credit Card Terminals - Android Touchscreen Devices',
  description: 'Smart credit card terminals with Android touchscreens, business apps, and advanced features. More than payment processing - inventory, loyalty, and reporting built in.',
  keywords: ['smart terminal', 'Android payment terminal', 'touchscreen credit card machine', 'POS terminal', 'business apps'],
  openGraph: {
    title: 'Smart Terminals | With It Payments',
    description: 'Android-based smart terminals with touchscreens and business apps.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Smart Terminals', url: 'https://withitpayments.com/terminals/smart' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Smart Credit Card Terminal',
  description: 'Android-based smart terminals with touchscreens, business apps, and advanced features beyond basic payment processing.',
  url: 'https://withitpayments.com/terminals/smart',
});

export default function SmartPage() {
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
                Smart Credit Card Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Smart terminals are the next generation of payment devices. Running on Android with beautiful touchscreens, they can do much more than process payments—think inventory tracking, loyalty programs, employee management, and detailed reporting.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Smart Terminal
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">
                Smart Terminal in Use
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
              Why Choose a Smart Terminal?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Touchscreen Interface',
                description: 'Intuitive screens that are easy for staff and customers to use.',
                icon: '👆',
              },
              {
                title: 'Business Apps',
                description: 'Access apps for inventory, loyalty, scheduling, and more.',
                icon: '📱',
              },
              {
                title: 'Better Experience',
                description: 'Tips, signatures, and receipts all on screen for smooth checkout.',
                icon: '✨',
              },
              {
                title: 'Cloud Reporting',
                description: 'Access sales data and reports from anywhere, anytime.',
                icon: '☁️',
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

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beyond Payment Processing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Smart terminals can help you run your entire business, not just accept payments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Inventory Management', desc: 'Track stock levels, get low inventory alerts' },
              { name: 'Employee Tools', desc: 'Clock in/out, permissions, performance tracking' },
              { name: 'Customer Loyalty', desc: 'Reward repeat customers automatically' },
              { name: 'Digital Receipts', desc: 'Email or text receipts to customers' },
              { name: 'Sales Analytics', desc: 'See trends, popular items, peak hours' },
              { name: 'Menu Management', desc: 'Update items, prices, and modifiers easily' },
            ].map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{feature.name}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Smart Terminals Are Perfect For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Full-service restaurants',
                'Quick-service restaurants',
                'Retail with inventory needs',
                'Coffee shops & cafes',
                'Bars & breweries',
                'Salons & spas',
                'Service businesses',
                'Any business wanting more',
              ].map((business) => (
                <div key={business} className="flex items-center bg-gray-50 rounded-lg p-4">
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
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Smart Terminal Brands We Offer</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Pax', 'Clover', 'Dejavoo'].map((brand) => (
              <Link
                key={brand}
                href={`/terminals/${brand.toLowerCase()}`}
                className="px-6 py-3 bg-white rounded-lg text-gray-700 font-medium hover:bg-[var(--primary)] hover:text-white transition-colors shadow-sm"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Smart?"
        description="Contact us to explore smart terminal options and find the right solution for your business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
