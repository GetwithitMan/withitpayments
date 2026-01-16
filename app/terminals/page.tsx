import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Credit Card Terminals for Small Business',
  description: 'Explore countertop, mobile, and smart credit card terminals from Dejavoo, Pax, Verifone, Ingenico, and Clover. Find the right terminal for your Colorado business.',
  keywords: ['credit card terminal', 'payment terminal', 'Dejavoo', 'Pax', 'Verifone', 'small business terminal', 'countertop terminal', 'mobile terminal'],
  openGraph: {
    title: 'Credit Card Terminals for Small Business | With It Payments',
    description: 'Explore our selection of credit card terminals from top brands. Countertop, mobile, and smart terminals for any business.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
]);

const terminalBrands = [
  {
    name: 'Dejavoo',
    description: 'Reliable and affordable terminals trusted by thousands of businesses. Known for durability and ease of use.',
    href: '/terminals/dejavoo',
    features: ['Fast processing', 'EMV chip ready', 'Contactless payments'],
  },
  {
    name: 'Pax',
    description: 'Modern payment terminals with advanced security features. Great for businesses wanting cutting-edge technology.',
    href: '/terminals/pax',
    features: ['Touchscreen options', 'Android-based', 'Multiple connectivity'],
  },
  {
    name: 'Verifone',
    description: 'Industry-leading terminals with proven reliability. Trusted by major retailers worldwide.',
    href: '/terminals/verifone',
    features: ['Enterprise-grade security', 'Long lifespan', 'Wide compatibility'],
  },
  {
    name: 'Ingenico',
    description: 'Premium terminals with excellent build quality. Perfect for high-volume businesses.',
    href: '/terminals/ingenico',
    features: ['High durability', 'Fast transactions', 'NFC enabled'],
  },
  {
    name: 'Clover',
    description: 'Smart terminals with built-in business tools. More than just payment processing.',
    href: '/terminals/clover',
    features: ['Inventory tracking', 'Employee management', 'Reporting tools'],
  },
];

const terminalTypes = [
  {
    name: 'Countertop Terminals',
    description: 'Traditional wired terminals perfect for fixed checkout locations like retail counters, reception desks, and service windows.',
    href: '/terminals/countertop',
    benefits: ['Reliable wired connection', 'No battery concerns', 'Fast transaction speeds', 'Lower cost option'],
    idealFor: 'Retail stores, dental offices, salons with fixed checkout',
  },
  {
    name: 'Mobile & Wireless Terminals',
    description: 'Battery-powered terminals that connect via WiFi or cellular. Take payments anywhere in your business or on the go.',
    href: '/terminals/mobile',
    benefits: ['Portable freedom', 'Tableside payments', 'Outdoor events', 'Multiple connectivity options'],
    idealFor: 'Restaurants, food trucks, contractors, delivery services',
  },
  {
    name: 'Smart Terminals',
    description: 'Touchscreen terminals running Android with apps and advanced features beyond basic payment processing.',
    href: '/terminals/smart',
    benefits: ['Touchscreen interface', 'Business apps', 'Detailed reporting', 'Tips and signatures on screen'],
    idealFor: 'Restaurants, retail with inventory needs, service businesses',
  },
];

export default function TerminalsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Credit Card Terminals for Every Business
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Whether you need a simple countertop terminal or a feature-rich smart device, we have options from the most trusted brands in the industry. We&apos;ll help you find the right fit for your business.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Terminal Recommendations
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal Types Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Terminal Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The best terminal depends on how you do business. Here&apos;s a breakdown of your options.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {terminalTypes.map((type) => (
              <Link key={type.name} href={type.href} className="card group block">
                <div className="image-placeholder aspect-video w-full mb-4">
                  <span className="text-center px-2">
                    {type.name} Image
                    <br />
                    <span className="text-xs">(400x225)</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2 mb-4">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[var(--secondary)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">
                  <strong>Ideal for:</strong> {type.idealFor}
                </p>
                <div className="mt-4 text-[var(--primary)] font-medium text-sm group-hover:underline">
                  Learn more &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terminal Brands We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with the most trusted names in payment terminals. Each brand has its strengths—we&apos;ll help you pick the right one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terminalBrands.map((brand) => (
              <Link key={brand.name} href={brand.href} className="card group block">
                <div className="image-placeholder w-24 h-12 mb-4">
                  <span className="text-xs">{brand.name} Logo</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors mb-2">
                  {brand.name} Terminals
                </h3>
                <p className="text-gray-600 text-sm mb-4">{brand.description}</p>
                <ul className="space-y-1">
                  {brand.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[var(--secondary)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-[var(--primary)] font-medium text-sm group-hover:underline">
                  View {brand.name} options &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features All Terminals Support */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Our Terminals Support
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'EMV Chip Cards', icon: '💳' },
              { name: 'Contactless/NFC', icon: '📱' },
              { name: 'Apple Pay', icon: '🍎' },
              { name: 'Google Pay', icon: '🤖' },
              { name: 'Debit Cards', icon: '💰' },
              { name: 'PIN Entry', icon: '🔢' },
              { name: 'Tip Adjustment', icon: '💵' },
              { name: 'Receipt Printing', icon: '🧾' },
            ].map((feature) => (
              <div key={feature.name} className="text-center p-4">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-sm font-medium text-gray-700">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Not Sure Which Terminal You Need?"
        description="Tell us about your business and we'll recommend the best terminal options for how you work."
        primaryButtonText="Get Personalized Recommendations"
        primaryButtonHref="/contact"
      />
    </>
  );
}
