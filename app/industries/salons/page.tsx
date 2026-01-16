import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Salon & Barber Credit Card Processing - Payment Solutions',
  description: 'Credit card processing for salons, barber shops, and spas. Easy checkout, tip functionality, and compact terminals for your front desk or station.',
  keywords: ['salon credit card processing', 'barber shop payment', 'spa payment terminal', 'beauty salon POS'],
  openGraph: {
    title: 'Salon Payment Solutions | With It Payments',
    description: 'Credit card processing designed for salons, barbers, and spas.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Salons', url: 'https://withitpayments.com/industries/salons' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Salon Credit Card Processing',
  description: 'Payment processing solutions for salons, barber shops, and spa businesses.',
  url: 'https://withitpayments.com/industries/salons',
});

export default function SalonsPage() {
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
                Credit Card Processing for Salons & Barbers
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Focus on your clients, not payment hassles. We offer simple, reliable payment solutions for salons, barber shops, and spas that make checkout smooth.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Salon Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Salon Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Salons Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Tip on Screen', desc: 'Customers tip right on the terminal screen' },
              { title: 'Compact Design', desc: 'Fits at your front desk or station' },
              { title: 'Easy to Clean', desc: 'Smooth surfaces wipe clean easily' },
              { title: 'Fast Checkout', desc: 'Process payments quickly between clients' },
              { title: 'Email Receipts', desc: 'Send digital receipts instead of printing' },
              { title: 'Appointment Integration', desc: 'Works with scheduling software' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Upgrade Your Salon Payments?" description="Contact us for a free quote tailored to your salon or spa." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
