import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Credit Card Processing in Grand Junction, Fruita & Western Slope Colorado',
  description: 'Local credit card processing and terminal solutions serving Grand Junction, Fruita, and the Western Slope of Colorado. In-person service and support from our Fruita office.',
  keywords: ['credit card processing Grand Junction', 'merchant services Fruita', 'payment processing Western Slope', 'Colorado credit card terminal'],
  openGraph: {
    title: 'Service Area | With It Payments',
    description: 'Serving businesses throughout Grand Junction, Fruita, and the Western Slope of Colorado.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Service Area', url: 'https://withitpayments.com/service-area' },
]);

const areas = [
  {
    name: 'Grand Junction',
    description: 'Colorado\'s largest city between Denver and Salt Lake City. We serve retail stores, restaurants, and service businesses throughout the Grand Junction area.',
    href: '/service-area/grand-junction',
    highlights: ['Downtown businesses', 'Mesa Mall area', 'North Avenue corridor', 'Redlands'],
  },
  {
    name: 'Fruita',
    description: 'Home to our office! We\'re deeply rooted in the Fruita business community and provide same-day in-person service to local businesses.',
    href: '/service-area/fruita',
    highlights: ['Downtown Fruita', 'Highway 6&50 corridor', 'Local shops & restaurants', 'Our office location'],
  },
  {
    name: 'Western Slope',
    description: 'From Palisade to the Utah border, we serve businesses throughout the Western Slope region of Colorado.',
    href: '/service-area/western-slope',
    highlights: ['Palisade', 'Clifton', 'Orchard Mesa', 'Delta County'],
  },
];

export default function ServiceAreaPage() {
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
              Proudly Serving Colorado&apos;s Western Slope
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              With It Payments is based in Fruita, Colorado, and we serve businesses throughout Grand Junction, Fruita, and the entire Western Slope region. Being local means you get real, in-person support—not a distant call center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Local Support
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Local Service Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When you work with a local payment processor, you get more than just a terminal. You get a partner who understands your community and your business.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: 'In-Person Setup & Training',
                    description: 'We can come to your business to set up your terminal and train your staff face-to-face.',
                  },
                  {
                    title: 'Same-Day Support',
                    description: 'Terminal issues? We can often resolve problems the same day with an office visit or on-site service.',
                  },
                  {
                    title: 'Community Relationships',
                    description: 'We live and work here too. We understand the local business landscape and care about our community\'s success.',
                  },
                  {
                    title: 'Real People, Real Numbers',
                    description: 'Call us and talk to a real person who knows your account—not a 1-800 number with endless transfers.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-placeholder aspect-square w-full">
              <span className="text-center px-4">
                Map of Western Slope Colorado
                <br />
                <span className="text-xs">(500x500)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide credit card processing and terminal solutions throughout these Colorado communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link key={area.name} href={area.href} className="card group block">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors mb-3">
                  {area.name}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2 mb-4">
                  {area.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[var(--secondary)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <span className="text-[var(--primary)] font-medium text-sm group-hover:underline">
                  Learn more about {area.name} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-[var(--primary)] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Visit Our Fruita Office
                </h2>
                <p className="text-white text-opacity-90 mb-6">
                  Stop by our office on Highway 6&50 in Fruita. We&apos;re happy to discuss your payment processing needs in person, demo terminals, or just answer your questions.
                </p>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    2480 Hwy 6&50, Unit 4, Fruita, CO 81521
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Monday - Friday, 9am - 5pm
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (970) 555-1234
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-white text-[var(--primary)] hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
                >
                  Get Directions
                </Link>
              </div>
              <div className="image-placeholder aspect-video w-full bg-white bg-opacity-20 rounded-lg">
                <span className="text-center px-4 text-white">
                  Office exterior photo
                  <br />
                  <span className="text-xs">(500x280)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready for Local Service?"
        description="Get credit card processing from a company that's part of your community. Contact us today."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Call: (970) 555-1234"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
