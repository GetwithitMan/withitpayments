import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Clover Credit Card Terminals - Smart Business Tools',
  description: 'Clover smart terminals with built-in business management tools. More than payment processing - inventory, employee management, and reporting all in one device.',
  keywords: ['Clover terminal', 'Clover POS', 'Clover Mini', 'Clover Flex', 'smart payment terminal'],
  openGraph: {
    title: 'Clover Terminals | With It Payments',
    description: 'Clover smart terminals with built-in business tools for your business.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terminals', url: 'https://withitpayments.com/terminals' },
  { name: 'Clover', url: 'https://withitpayments.com/terminals/clover' },
]);

const productSchema = generateProductSchema({
  name: 'Clover Smart Terminal',
  description: 'Smart terminals from Clover with built-in business management tools including inventory, employee management, and detailed reporting.',
  brand: 'Clover',
  slug: 'clover',
});

const models = [
  {
    name: 'Clover Flex',
    type: 'Mobile',
    description: 'Handheld smart terminal that goes wherever you need it. Perfect for tableside, curbside, or line-busting.',
    features: ['Portable design', 'All-day battery', 'Built-in printer', 'Full app access'],
  },
  {
    name: 'Clover Mini',
    type: 'Compact',
    description: 'Small footprint, big capabilities. Ideal for counters with limited space.',
    features: ['Compact size', 'Touchscreen', 'App marketplace', 'Customer display'],
  },
  {
    name: 'Clover Station',
    type: 'Full System',
    description: 'Complete point-of-sale solution with large display and full business management features.',
    features: ['Large HD screen', 'Cash drawer ready', 'Full POS features', 'Accessories available'],
  },
];

export default function CloverPage() {
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
                Clover Smart Terminals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Clover is more than a payment terminal—it&apos;s a complete business tool. With built-in apps for inventory, employee management, customer engagement, and detailed reporting, Clover helps you run your business better.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Built-in business tools
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  App marketplace
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Beautiful design
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud-based reporting
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get Clover for Your Business
              </Link>
            </div>
            <div className="image-placeholder aspect-square w-full">
              <span className="text-center px-4">
                Clover Terminal Product Image
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
              Clover Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From handheld to full station, Clover has a solution for every business size and type.
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

      {/* Clover Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Than Payment Processing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clover includes powerful business management features built right in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Inventory Tracking', description: 'Track stock levels and get alerts when items run low.' },
              { name: 'Employee Management', description: 'Clock in/out, permissions, and performance tracking.' },
              { name: 'Customer Loyalty', description: 'Build repeat business with rewards programs.' },
              { name: 'Detailed Reports', description: 'See sales trends, popular items, and business insights.' },
            ].map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready for a Clover System?"
        description="Contact us to learn more about Clover options and get a quote for your business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
      />
    </>
  );
}
