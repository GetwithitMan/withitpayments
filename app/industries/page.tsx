import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Industries We Serve - Retail, Restaurants, Salons & More',
  description: 'Credit card processing solutions tailored for retail, restaurants, salons, food trucks, medical offices, and professional services in Grand Junction, Fruita, and the Western Slope.',
  keywords: ['retail payment processing', 'restaurant credit card terminal', 'salon payment system', 'food truck payment', 'medical office payments'],
  openGraph: {
    title: 'Industries We Serve | With It Payments',
    description: 'Tailored payment solutions for every type of local business in Colorado.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
]);

const industries = [
  {
    name: 'Retail Stores',
    description: 'From boutiques to hardware stores, we help retail businesses accept payments efficiently at the counter.',
    href: '/industries/retail',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    features: ['Countertop terminals', 'Fast checkout', 'Inventory integration options'],
  },
  {
    name: 'Restaurants & Cafes',
    description: 'Whether dine-in, takeout, or delivery, we have terminal solutions that work for your service style.',
    href: '/industries/restaurants',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Tableside payments', 'Tip functionality', 'Fast service mode'],
  },
  {
    name: 'Salons & Barbers',
    description: 'Simple payment solutions for appointment-based businesses that let you focus on your clients.',
    href: '/industries/salons',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    features: ['Compact terminals', 'Tip on screen', 'Easy to clean'],
  },
  {
    name: 'Food Trucks & Mobile Vendors',
    description: 'Wireless terminals that go where you go. Accept payments at events, markets, and wherever your business takes you.',
    href: '/industries/food-trucks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m-6 7h6m-6-4h6M4 17h16M4 17a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2M4 17v2a1 1 0 001 1h2a1 1 0 001-1v-2m10 0v2a1 1 0 001 1h2a1 1 0 001-1v-2" />
      </svg>
    ),
    features: ['Cellular connectivity', 'Long battery life', 'Durable design'],
  },
  {
    name: 'Medical & Dental Offices',
    description: 'Professional payment solutions for healthcare practices with HIPAA-friendly options.',
    href: '/industries/medical',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    features: ['Front desk terminals', 'Secure processing', 'Professional appearance'],
  },
  {
    name: 'Professional Services',
    description: 'Lawyers, accountants, contractors, and consultants—get paid easily for your expertise.',
    href: '/industries/professional-services',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Invoice payments', 'Virtual terminal options', 'Mobile solutions'],
  },
  {
    name: 'Auto Repair & Service',
    description: 'Rugged terminal options for service bays and shops that can handle the shop environment.',
    href: '/industries/auto-repair',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Durable hardware', 'Large transaction amounts', 'Easy customer signatures'],
  },
];

export default function IndustriesPage() {
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
              Payment Solutions for Every Industry
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Every business is different. That&apos;s why we take the time to understand how you work before recommending a payment solution. From retail to restaurants to professional services—we&apos;ve got you covered.
            </p>
            <Link href="/contact" className="btn-primary">
              Tell Us About Your Business
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link key={industry.name} href={industry.href} className="card group block">
                <div className="w-16 h-16 mb-4 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  {industry.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors mb-2">
                  {industry.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[var(--secondary)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-[var(--primary)] font-medium text-sm group-hover:underline">
                  Learn more &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Industry */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We work with all types of businesses. If you accept payments from customers, we can help you find the right solution.
          </p>
          <Link href="/contact" className="btn-outline">
            Contact Us to Discuss Your Needs
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="Tell us about your business and we'll recommend the perfect payment solution for your industry."
        primaryButtonText="Get a Free Consultation"
        primaryButtonHref="/contact"
      />
    </>
  );
}
