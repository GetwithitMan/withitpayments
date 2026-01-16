import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Credit Card Processing Western Slope Colorado - Merchant Services',
  description: 'Credit card processing and terminal solutions for businesses across the Western Slope of Colorado. Serving Palisade, Delta, Montrose, and beyond from our Fruita office.',
  keywords: ['credit card processing Western Slope', 'Western Slope Colorado merchant services', 'payment processing Colorado', 'credit card terminal Western Slope'],
  openGraph: {
    title: 'Western Slope Credit Card Processing | With It Payments',
    description: 'Serving businesses throughout the Western Slope of Colorado with local credit card processing.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Service Area', url: 'https://withitpayments.com/service-area' },
  { name: 'Western Slope', url: 'https://withitpayments.com/service-area/western-slope' },
]);

const communities = [
  { name: 'Palisade', description: 'Wineries, orchards, and local shops' },
  { name: 'Clifton', description: 'Growing business community' },
  { name: 'Delta', description: 'Agricultural and retail businesses' },
  { name: 'Montrose', description: 'Regional hub for the Uncompahgre Valley' },
  { name: 'Rifle', description: 'Gateway to the mountains' },
  { name: 'Glenwood Springs', description: 'Tourism and hospitality businesses' },
  { name: 'Parachute', description: 'Energy and local commerce' },
  { name: 'De Beque', description: 'Small town businesses' },
];

export default function WesternSlopePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[var(--secondary)] font-semibold text-sm uppercase tracking-wide mb-2">
              Serving All of Western Colorado
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Credit Card Processing for the Western Slope
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From the peach orchards of Palisade to the ski towns near Aspen, With It Payments serves businesses throughout Colorado&apos;s Western Slope. While we&apos;re based in Fruita, we provide service to businesses across the entire region.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Communities We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No matter where you are on the Western Slope, we can help you accept credit cards with reliable terminals and fair rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community) => (
              <div key={community.name} className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{community.name}</h3>
                <p className="text-gray-600 text-sm">{community.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Don&apos;t see your town? We likely serve your area too—<Link href="/contact" className="text-[var(--primary)] hover:underline">contact us</Link> to find out.
          </p>
        </div>
      </section>

      {/* How We Serve the Region */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Serve the Entire Region
              </h2>
              <p className="text-gray-600 mb-6">
                Even if you&apos;re not in Grand Junction or Fruita, you still get the personal service that sets us apart from national processors.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Ship Terminals Anywhere</strong>
                    <p className="text-gray-600 text-sm">We can ship programmed terminals directly to your business, ready to use.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Phone & Video Support</strong>
                    <p className="text-gray-600 text-sm">Get training and support via phone or video call—we&apos;ll walk you through everything.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">On-Site Visits Available</strong>
                    <p className="text-gray-600 text-sm">For businesses in the region, we can often arrange on-site setup and training.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Local Knowledge</strong>
                    <p className="text-gray-600 text-sm">We understand the Western Slope economy and the businesses that drive it.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">
                Western Slope Colorado landscape
                <br />
                <span className="text-xs">(600x450)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries on the Western Slope */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Western Slope Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Western Slope has a diverse economy, and we have solutions for all types of businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Wineries & Tasting Rooms', icon: '🍷' },
              { name: 'Farm Stands & Orchards', icon: '🍑' },
              { name: 'Tourism & Hospitality', icon: '🏨' },
              { name: 'Outdoor Recreation', icon: '🚴' },
              { name: 'Restaurants & Cafes', icon: '☕' },
              { name: 'Retail & Boutiques', icon: '🛍️' },
              { name: 'Professional Services', icon: '💼' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Auto & Equipment', icon: '🔧' },
            ].map((industry) => (
              <div key={industry.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-medium text-gray-700">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Western Slope Business Owner?"
        description="Get local credit card processing with personal service, no matter where you are on the Western Slope."
        primaryButtonText="Get Your Free Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Call: (970) 555-1234"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
