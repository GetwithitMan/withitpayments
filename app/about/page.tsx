import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About With It Payments - Local Colorado Business',
  description: 'With It Payments is a local credit card processing company based in Fruita, Colorado. We help businesses in Grand Junction and the Western Slope accept payments with fair rates and real support.',
  keywords: ['With It Payments', 'local payment processor', 'Fruita Colorado', 'Grand Junction merchant services'],
  openGraph: {
    title: 'About Us | With It Payments',
    description: 'Your local partner for credit card processing in Grand Junction, Fruita, and the Western Slope.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'About', url: 'https://withitpayments.com/about' },
]);

const values = [
  {
    title: 'Straight Talk',
    description: 'We explain things in plain English. No jargon, no fine print tricks, no surprise fees. You\'ll always know exactly what you\'re getting.',
  },
  {
    title: 'Local First',
    description: 'We\'re part of this community. When you call, you talk to someone who knows the Western Slope and understands local business.',
  },
  {
    title: 'Fair Pricing',
    description: 'We make a fair profit, not an excessive one. Our goal is a long-term relationship, not a quick sale.',
  },
  {
    title: 'Real Support',
    description: 'When you have a question, you get a real person—not a phone tree. We\'re here when you need us.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Neighbors in Payment Processing
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                With It Payments is a local business helping local businesses. Based right here in Fruita, Colorado, we provide credit card processing and terminal solutions to businesses throughout Grand Junction, Fruita, and the Western Slope.
              </p>
              <p className="text-lg text-gray-600">
                We&apos;re not a big national company with a call center somewhere far away. We&apos;re your neighbors, and we treat your business the way we&apos;d want ours to be treated.
              </p>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">
                Team Photo or Office Image
                <br />
                <span className="text-xs">(600x450)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why We Started With It Payments
            </h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                We saw too many local businesses getting taken advantage of by big payment processors. Hidden fees, confusing statements, and customer service that felt more like a maze than help.
              </p>
              <p>
                We knew there had to be a better way. So we built With It Payments around a simple idea: treat business owners the way we&apos;d want to be treated. Explain things clearly. Price things fairly. Be there when they need help.
              </p>
              <p>
                Today, we help businesses across the Western Slope accept credit card payments with confidence. Whether you&apos;re a retail store on Main Street, a food truck at the farmers market, or a contractor working job sites across the valley—we&apos;ve got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Do Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These aren&apos;t just words on a wall—they&apos;re how we operate every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Our Fruita Office
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;re located on Highway 6&50 in Fruita, just minutes from Grand Junction. Stop by to talk about your business, pick up equipment, or just say hello.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">2480 Hwy 6&50, Unit 4<br />Fruita, CO 81521</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">
                      <a href="tel:+19705551234" className="hover:text-[var(--primary)]">(970) 555-1234</a>
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="image-placeholder aspect-video w-full">
              <span className="text-center px-4">
                Office exterior or local Colorado imagery
                <br />
                <span className="text-xs">(600x400)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let&apos;s Talk About Your Business"
        description="We&apos;d love to hear about your business and show you how we can help. No pressure, just a conversation."
        primaryButtonText="Get in Touch"
        primaryButtonHref="/contact"
        variant="secondary"
      />
    </>
  );
}
