import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Professional Services Credit Card Processing - Payment Solutions',
  description: 'Credit card processing for lawyers, accountants, contractors, and consultants. Invoice payments, virtual terminals, and professional payment solutions.',
  keywords: ['professional services payment', 'lawyer credit card processing', 'contractor payment terminal', 'consultant payment solutions'],
  openGraph: {
    title: 'Professional Services Payment Solutions | With It Payments',
    description: 'Credit card processing for professional service businesses.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Professional Services', url: 'https://withitpayments.com/industries/professional-services' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Professional Services Credit Card Processing',
  description: 'Payment processing for lawyers, accountants, contractors, and consulting businesses.',
  url: 'https://withitpayments.com/industries/professional-services',
});

export default function ProfessionalServicesPage() {
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
                Credit Card Processing for Professional Services
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Lawyers, accountants, contractors, and consultants—get paid for your expertise. We offer flexible payment solutions including in-office terminals, virtual terminals, and invoice integration.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Professional Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Professional Office Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Professional Services Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Invoice Payments', desc: 'Accept payments on invoices easily' },
              { title: 'Virtual Terminal', desc: 'Process payments from your computer' },
              { title: 'Mobile Option', desc: 'Take payments on client sites' },
              { title: 'Large Transactions', desc: 'Handle larger professional fees' },
              { title: 'Recurring Billing', desc: 'Set up retainer and subscription payments' },
              { title: 'Professional Image', desc: 'Payment options that match your brand' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Streamline Your Payments?" description="Contact us for a payment solution designed for professional service businesses." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
