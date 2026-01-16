import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Retail Credit Card Processing - Payment Solutions for Retail Stores',
  description: 'Credit card processing and terminals for retail stores, boutiques, and shops. Fast checkout, inventory integration, and fair rates for retail businesses in Colorado.',
  keywords: ['retail credit card processing', 'retail payment terminal', 'store credit card machine', 'boutique payment processing'],
  openGraph: {
    title: 'Retail Payment Solutions | With It Payments',
    description: 'Credit card processing designed for retail stores and shops.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Retail', url: 'https://withitpayments.com/industries/retail' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Retail Credit Card Processing',
  description: 'Payment processing solutions designed for retail stores, boutiques, and shops.',
  url: 'https://withitpayments.com/industries/retail',
});

export default function RetailPage() {
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
                Credit Card Processing for Retail Stores
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Whether you run a boutique, gift shop, hardware store, or any retail business, we have payment solutions designed for fast checkout and happy customers.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Retail Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Retail Store Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Retail Businesses Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Fast Checkout', desc: 'Quick transaction processing to keep lines moving' },
              { title: 'All Payment Types', desc: 'Accept cards, contactless, Apple Pay, Google Pay' },
              { title: 'Tips Optional', desc: 'Enable or disable tip functionality as needed' },
              { title: 'Receipt Options', desc: 'Print or email receipts to customers' },
              { title: 'Inventory Integration', desc: 'Connect to your inventory system if needed' },
              { title: 'Employee Cards', desc: 'Track sales by employee for accountability' },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Terminals for Retail</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Most retail stores do great with a countertop terminal, but we also offer smart terminals with inventory features.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terminals/countertop" className="btn-outline">Countertop Terminals</Link>
            <Link href="/terminals/smart" className="btn-outline">Smart Terminals</Link>
          </div>
        </div>
      </section>

      <CTA title="Ready to Upgrade Your Retail Payments?" description="Contact us for a free quote tailored to your retail business." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
