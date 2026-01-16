import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Credit Card Processing Fruita CO - Local Merchant Services',
  description: 'Credit card processing for Fruita, Colorado businesses. Visit our local office on Hwy 6&50 for same-day terminal setup and in-person support. Fair rates, no hidden fees.',
  keywords: ['credit card processing Fruita', 'Fruita merchant services', 'payment processing Fruita Colorado', 'credit card terminal Fruita'],
  openGraph: {
    title: 'Fruita Credit Card Processing | With It Payments',
    description: 'Your local credit card processor based right here in Fruita. Same-day service available.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Service Area', url: 'https://withitpayments.com/service-area' },
  { name: 'Fruita', url: 'https://withitpayments.com/service-area/fruita' },
]);

export default function FruitaPage() {
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
              Our Home Base
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Credit Card Processing for Fruita Businesses
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              With It Payments is proudly based in Fruita, Colorado. As your neighbors, we provide the most responsive, personal service to local businesses. Stop by our office on Highway 6&50 or let us come to you for same-day setup and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/about" className="btn-outline">
                Visit Our Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantage */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="image-placeholder aspect-[4/3] w-full">
                <span className="text-center px-4">
                  Fruita downtown or Colorado National Monument view
                  <br />
                  <span className="text-xs">(600x450)</span>
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Local Payment Partner
              </h2>
              <p className="text-gray-600 mb-6">
                Being based in Fruita means we can offer service that no national company can match. Need a terminal today? Come pick it up. Having an issue? We can be there in person.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Same-Day Service</strong>
                    <p className="text-gray-600 text-sm">Walk-in to our office or request on-site service same day.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Face-to-Face Support</strong>
                    <p className="text-gray-600 text-sm">Have questions? Stop by and we&apos;ll explain everything in person.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Community Commitment</strong>
                    <p className="text-gray-600 text-sm">We live here too. Your success is our success.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Our Fruita Office
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re on Highway 6&50, easy to find and plenty of parking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location & Hours</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>2480 Hwy 6&50, Unit 4<br />Fruita, CO 81521</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Monday - Friday<br />9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>(970) 555-1234</span>
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free parking available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No appointment necessary
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Demo terminals on-site
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pick up equipment same day
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free statement analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Fruita Business Owner?"
        description="As your neighbors, we're committed to helping local businesses succeed. Stop by our office or give us a call."
        primaryButtonText="Get a Free Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Call: (970) 555-1234"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
