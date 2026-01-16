import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Auto Repair Credit Card Processing - Payment Solutions',
  description: 'Credit card processing for auto repair shops, mechanics, and service centers. Durable terminals, large transaction handling, and easy customer signatures.',
  keywords: ['auto repair credit card processing', 'mechanic payment terminal', 'auto shop POS', 'service center payment'],
  openGraph: {
    title: 'Auto Repair Payment Solutions | With It Payments',
    description: 'Credit card processing for auto repair and service businesses.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Auto Repair', url: 'https://withitpayments.com/industries/auto-repair' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Auto Repair Credit Card Processing',
  description: 'Payment processing for auto repair shops, mechanics, and service centers.',
  url: 'https://withitpayments.com/industries/auto-repair',
});

export default function AutoRepairPage() {
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
                Credit Card Processing for Auto Repair
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Get paid for your work with payment solutions built for the shop environment. Durable terminals that can handle grease and grime, with easy signature capture for larger repair bills.
              </p>
              <Link href="/contact" className="btn-primary">
                Get an Auto Shop Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Auto Repair Shop Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Auto Shops Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Durable Hardware', desc: 'Terminals built to handle shop environments' },
              { title: 'Large Transactions', desc: 'Process bigger repair bills without issues' },
              { title: 'Easy Signatures', desc: 'Clear signature capture for authorization' },
              { title: 'Front Counter Setup', desc: 'Works great at your service desk' },
              { title: 'Invoice Matching', desc: 'Match payments to work orders easily' },
              { title: 'Fleet Accounts', desc: 'Handle business fleet payments' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Upgrade Your Shop Payments?" description="Contact us for a payment solution built for auto repair businesses." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
