import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import TrustBadges from '@/components/TrustBadges';
import CTA from '@/components/CTA';
import IndustryCard, {
  RetailIcon,
  RestaurantIcon,
  SalonIcon,
  FoodTruckIcon,
  MedicalIcon,
  ProfessionalIcon,
} from '@/components/IndustryCard';

const terminalTypes = [
  {
    name: 'Countertop Terminals',
    description: 'Reliable, wired terminals perfect for fixed checkout locations. Ideal for retail stores and front desk setups.',
    href: '/terminals/countertop',
    image: 'Countertop Terminal',
  },
  {
    name: 'Mobile & Wireless',
    description: 'Take payments anywhere in your business or on the go. Great for tableside service and mobile vendors.',
    href: '/terminals/mobile',
    image: 'Mobile Terminal',
  },
  {
    name: 'Smart Terminals',
    description: 'Modern touchscreen terminals with advanced features. Accept all payment types including contactless.',
    href: '/terminals/smart',
    image: 'Smart Terminal',
  },
];

const industries = [
  {
    name: 'Retail',
    description: 'From boutiques to hardware stores',
    href: '/industries/retail',
    icon: <RetailIcon />,
  },
  {
    name: 'Restaurants & Cafes',
    description: 'Dine-in, takeout, and delivery',
    href: '/industries/restaurants',
    icon: <RestaurantIcon />,
  },
  {
    name: 'Salons & Barbers',
    description: 'Appointment-based services',
    href: '/industries/salons',
    icon: <SalonIcon />,
  },
  {
    name: 'Food Trucks',
    description: 'Mobile vendors and pop-ups',
    href: '/industries/food-trucks',
    icon: <FoodTruckIcon />,
  },
  {
    name: 'Medical & Dental',
    description: 'Healthcare practices',
    href: '/industries/medical',
    icon: <MedicalIcon />,
  },
  {
    name: 'Professional Services',
    description: 'Contractors, lawyers, accountants',
    href: '/industries/professional-services',
    icon: <ProfessionalIcon />,
  },
];

const valueProps = [
  {
    title: 'Simple Setup',
    description: 'Get your terminal and start accepting cards fast. Most businesses are processing the same day.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Fair, Transparent Pricing',
    description: 'No hidden fees, no surprises on your statement. We explain everything upfront so you know exactly what you pay.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Top Terminal Brands',
    description: 'Choose from Dejavoo, Pax, Verifone, and more. Countertop, wireless, and smart terminal options available.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Local to Colorado',
    description: 'We\'re based in Fruita, serving Grand Junction and the Western Slope. Stop by our office or we\'ll come to you.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Real Support',
    description: 'Not a 1-800 number—we\'re your neighbors. Get help from real people who know your business.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Works for Any Business',
    description: 'Retail, restaurants, salons, food trucks, medical offices—if you need to accept cards, we can help.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Credit Card Processing for Local Businesses"
        title="Accept Cards. Grow Your Business. It's That Simple."
        description="With It Payments helps local businesses in Grand Junction, Fruita, and the Western Slope accept credit card payments with reliable terminals, fair rates, and real support from real people."
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Terminals', href: '/terminals' }}
        imageSrc="/images/team-photo.jpg"
        imageAlt="Brian and his wife - the team behind With It Payments in Fruita, Colorado"
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Value Propositions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Local Businesses Choose With It Payments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re not a faceless national company. We&apos;re your neighbors, and we treat your business like our own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h3>
                  <p className="text-gray-600 text-sm">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Credit Card Terminals for Every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From countertop to wireless to smart terminals—we&apos;ll help you find the right fit for how you do business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {terminalTypes.map((terminal) => (
              <Link key={terminal.name} href={terminal.href} className="card group block">
                <div className="image-placeholder aspect-[4/3] w-full mb-4">
                  <span className="text-center px-2">
                    {terminal.image}
                    <br />
                    <span className="text-xs">(400x300)</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors mb-2">
                  {terminal.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{terminal.description}</p>
                <span className="text-[var(--primary)] font-medium text-sm group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/terminals" className="btn-outline">
              View All Terminal Options
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Solutions for Your Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every business is different. We&apos;ll help you find the terminal and processing solution that fits how you work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                description={industry.description}
                href={industry.href}
                icon={industry.icon}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/industries" className="btn-outline">
              See All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proudly Serving Grand Junction, Fruita & the Western Slope
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;re a local Colorado business, based right here in Fruita. When you work with us, you get a real partner who understands the local business community—not some call center across the country.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Stop by our Fruita office for in-person support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  On-site terminal setup and training available
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Serving Mesa County and surrounding areas
                </li>
              </ul>
              <Link href="/service-area" className="btn-primary">
                View Service Area
              </Link>
            </div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/team-photo.jpg"
                alt="Brian and his wife - the local team behind With It Payments serving Grand Junction, Fruita, and the Western Slope"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Accept Credit Cards?"
        description="Get a free quote and see how easy it is to start processing payments. No obligation, no pressure—just straightforward answers."
        primaryButtonText="Get a Free Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Call Us Now"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
