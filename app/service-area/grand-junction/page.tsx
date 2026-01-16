import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Credit Card Processing Grand Junction CO - Merchant Services',
  description: 'Credit card processing and terminal solutions for Grand Junction, Colorado businesses. Local service, fair rates, and top terminal brands. Serving downtown, Mesa Mall area, and all of Grand Junction.',
  keywords: ['credit card processing Grand Junction', 'Grand Junction merchant services', 'payment processing Grand Junction CO', 'credit card terminal Grand Junction'],
  openGraph: {
    title: 'Grand Junction Credit Card Processing | With It Payments',
    description: 'Local credit card processing for Grand Junction businesses. Fair rates, personal service.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Service Area', url: 'https://withitpayments.com/service-area' },
  { name: 'Grand Junction', url: 'https://withitpayments.com/service-area/grand-junction' },
]);

const neighborhoods = [
  'Downtown Grand Junction',
  'Mesa Mall Area',
  'North Avenue Corridor',
  'Redlands',
  'Orchard Mesa',
  'Clifton',
  'Fruitvale',
  'Appleton',
];

const industries = [
  { name: 'Retail Stores', href: '/industries/retail' },
  { name: 'Restaurants & Cafes', href: '/industries/restaurants' },
  { name: 'Salons & Spas', href: '/industries/salons' },
  { name: 'Medical Offices', href: '/industries/medical' },
  { name: 'Professional Services', href: '/industries/professional-services' },
  { name: 'Auto Repair', href: '/industries/auto-repair' },
];

export default function GrandJunctionPage() {
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
              Serving Grand Junction, Colorado
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Credit Card Processing for Grand Junction Businesses
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Whether you&apos;re on Main Street downtown, near Mesa Mall, or anywhere in the Grand Junction area, With It Payments provides local credit card processing with personal service. We&apos;re based just minutes away in Fruita and can provide same-day in-person support.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Grand Junction Businesses Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Grand Junction Businesses Choose Us
              </h2>
              <p className="text-gray-600 mb-6">
                As the largest city between Denver and Salt Lake City, Grand Junction has a thriving business community. We&apos;re proud to serve local retailers, restaurants, service providers, and professionals throughout the area.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Minutes Away</strong>
                    <p className="text-gray-600 text-sm">Our Fruita office is just 10-15 minutes from most Grand Junction locations.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">On-Site Service</strong>
                    <p className="text-gray-600 text-sm">We can set up and train at your location throughout Grand Junction.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Local Understanding</strong>
                    <p className="text-gray-600 text-sm">We know the Grand Junction market and the unique needs of local businesses.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">
                Grand Junction downtown or Main Street image
                <br />
                <span className="text-xs">(600x450)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Grand Junction
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From downtown to the surrounding neighborhoods, we provide service throughout the Grand Junction area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {neighborhoods.map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-gray-700 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grand Junction Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="card text-center group"
              >
                <p className="font-medium text-gray-700 group-hover:text-[var(--primary)]">
                  {industry.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Grand Junction Business Owner?"
        description="Get local credit card processing with fair rates and personal service. Contact us for a free quote."
        primaryButtonText="Get Your Free Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Call: (970) 555-1234"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
