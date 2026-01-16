import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Medical & Dental Credit Card Processing - Healthcare Payment Solutions',
  description: 'Credit card processing for medical offices, dental practices, and healthcare providers. Professional terminals, secure processing, and HIPAA-friendly options.',
  keywords: ['medical credit card processing', 'dental payment terminal', 'healthcare payment processing', 'doctor office POS'],
  openGraph: {
    title: 'Healthcare Payment Solutions | With It Payments',
    description: 'Credit card processing for medical and dental practices.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Medical', url: 'https://withitpayments.com/industries/medical' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Medical & Dental Credit Card Processing',
  description: 'Payment processing for medical offices, dental practices, and healthcare providers.',
  url: 'https://withitpayments.com/industries/medical',
});

export default function MedicalPage() {
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
                Credit Card Processing for Medical & Dental Offices
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Professional payment solutions for healthcare practices. Collect co-pays, process payments for services, and maintain the professional appearance your patients expect.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Healthcare Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Medical Office Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Healthcare Practices Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Professional Appearance', desc: 'Clean, modern terminals that match your office' },
              { title: 'Secure Processing', desc: 'PCI-compliant security for patient payment data' },
              { title: 'Front Desk Ready', desc: 'Countertop terminals perfect for reception' },
              { title: 'Large Payments', desc: 'Handle larger healthcare payments easily' },
              { title: 'Digital Receipts', desc: 'Email receipts for patient records' },
              { title: 'Payment Plans', desc: 'Options for recurring and installment payments' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Upgrade Your Practice Payments?" description="Contact us for a payment solution designed for healthcare offices." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
