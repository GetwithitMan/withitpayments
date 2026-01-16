import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mobile & Wireless Credit Card Terminals - Portable Payment Solutions',
  description: 'Mobile and wireless credit card terminals for food trucks, restaurants, contractors, and businesses on the go. WiFi and cellular connectivity, long battery life.',
  keywords: ['mobile terminal', 'wireless credit card machine', 'portable payment terminal', 'food truck terminal', 'cellular terminal'],
  openGraph: {
    title: 'Mobile & Wireless Terminals | With It Payments',
    description: 'Portable credit card terminals that go wherever your business takes you.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Mobile', url: 'https://withitpayments.com/terminals/mobile' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Mobile & Wireless Credit Card Terminal',
  description: 'Portable credit card terminals with WiFi and cellular connectivity for businesses on the go.',
  url: 'https://withitpayments.com/terminals/mobile',
});

export default function MobilePage() {
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
                Mobile & Wireless Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Take payments anywhere your business goes. Mobile terminals connect via WiFi or cellular networks, giving you the freedom to accept cards at events, tableside, on job sites, or wherever your customers are.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Mobile Terminal
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">
                Mobile Terminal in Use
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
              Why Choose a Mobile Terminal?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Go Anywhere',
                description: 'Process payments at farmers markets, events, job sites, or anywhere with cellular coverage.',
                icon: '🌍',
              },
              {
                title: 'Tableside Service',
                description: 'Bring the terminal to your restaurant customers for a better dining experience.',
                icon: '🍽️',
              },
              {
                title: 'All-Day Battery',
                description: 'Long-lasting batteries keep you processing all day without needing a charge.',
                icon: '🔋',
              },
              {
                title: 'Multiple Connections',
                description: 'WiFi, Bluetooth, and cellular options to stay connected however works best.',
                icon: '📶',
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
              Mobile Terminals Are Perfect For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Food trucks',
                'Farmers market vendors',
                'Restaurants (tableside)',
                'Contractors & tradespeople',
                'Delivery services',
                'Event vendors',
                'Home service businesses',
                'Pop-up shops',
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

      {/* Connectivity */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Connectivity Options
            </h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">WiFi</h3>
                <p className="text-gray-600">Connect to your business WiFi or any available network. Great for restaurants and businesses with reliable WiFi coverage.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Cellular (4G/LTE)</h3>
                <p className="text-gray-600">Built-in cellular connection works anywhere with cell service. Perfect for food trucks, events, and on-the-go businesses.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Bluetooth</h3>
                <p className="text-gray-600">Pair with your smartphone or tablet for connectivity through your existing data plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Go Mobile?"
        description="Contact us to find the right mobile terminal for your business needs and budget."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
