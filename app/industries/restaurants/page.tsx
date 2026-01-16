import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Restaurant Credit Card Processing - Payment Solutions for Restaurants & Cafes',
  description: 'Credit card processing for restaurants, cafes, and food service. Tableside payments, tip functionality, and fast checkout for busy restaurants in Colorado.',
  keywords: ['restaurant credit card processing', 'cafe payment terminal', 'tableside payment', 'restaurant POS'],
  openGraph: {
    title: 'Restaurant Payment Solutions | With It Payments',
    description: 'Credit card processing designed for restaurants and cafes.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Restaurants', url: 'https://withitpayments.com/industries/restaurants' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Restaurant Credit Card Processing',
  description: 'Payment processing solutions for restaurants, cafes, and food service businesses.',
  url: 'https://withitpayments.com/industries/restaurants',
});

export default function RestaurantsPage() {
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

      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/industries" className="text-[var(--primary)] text-sm font-medium hover:underline mb-4 inline-block">
                &larr; All Industries
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Credit Card Processing for Restaurants & Cafes
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                From quick-service cafes to full-service restaurants, we have payment solutions that fit how you serve your customers. Tableside, counter, or takeout—we&apos;ve got you covered.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Restaurant Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Restaurant Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Restaurants Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Tip on Screen', desc: 'Customers add tips right on the terminal' },
              { title: 'Tableside Payments', desc: 'Wireless terminals for pay-at-table service' },
              { title: 'Split Checks', desc: 'Handle split payments easily' },
              { title: 'Fast Service Mode', desc: 'Optimized for quick-service environments' },
              { title: 'Pre-Auth for Tabs', desc: 'Open tabs for bar service' },
              { title: 'Tip Adjust', desc: 'Adjust tips after the transaction' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Terminals for Restaurants</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Wireless and smart terminals are popular for restaurants. Smart terminals can also help with ordering and reporting.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terminals/mobile" className="btn-outline">Mobile/Wireless</Link>
            <Link href="/terminals/smart" className="btn-outline">Smart Terminals</Link>
            <Link href="/terminals/clover" className="btn-outline">Clover</Link>
          </div>
        </div>
      </section>

      <CTA title="Ready to Upgrade Your Restaurant Payments?" description="Contact us for a free quote tailored to your restaurant or cafe." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
