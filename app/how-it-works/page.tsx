import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'How It Works - Simple Credit Card Processing Setup',
  description: 'Get started with credit card processing in 3 easy steps. Choose your terminal, get set up quickly, and start accepting payments right away. Serving Grand Junction and Fruita, CO.',
  keywords: ['credit card processing setup', 'how to accept credit cards', 'payment processing setup', 'merchant account setup'],
  openGraph: {
    title: 'How It Works | With It Payments',
    description: 'Simple 3-step process to start accepting credit card payments for your business.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'How It Works', url: 'https://withitpayments.com/how-it-works' },
]);

const faqs = [
  {
    question: 'How long does it take to get set up?',
    answer: 'Most businesses are approved and processing payments within 1-3 business days. If you need a terminal shipped, add a couple days for delivery. Local businesses in Grand Junction and Fruita can often get same-day setup with in-person service.',
  },
  {
    question: 'Do I need a separate merchant account?',
    answer: 'We handle the merchant account setup as part of our service. You don\'t need to go to a bank or set anything up separately—we take care of everything.',
  },
  {
    question: 'What information do I need to apply?',
    answer: 'Basic business information (name, address, type of business), owner information, bank account details for deposits, and a valid ID. The application takes about 10 minutes to complete.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'We offer flexible terms. Ask us about month-to-month options if you prefer not to commit to a longer agreement.',
  },
  {
    question: 'What if I already have a terminal?',
    answer: 'In some cases, we can reprogram your existing terminal to work with our processing. We\'ll evaluate your current equipment and let you know your options.',
  },
  {
    question: 'Do you provide training on the terminal?',
    answer: 'Yes! We provide full training on your terminal—either in person for local businesses or via phone/video for others. We want you to feel confident using your equipment.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const steps = [
  {
    number: '1',
    title: 'Tell Us About Your Business',
    description: 'We start with a conversation. Tell us about your business, how you accept payments today, and what you\'re looking for. This helps us recommend the right terminal and pricing for your needs.',
    details: [
      'Free consultation—no obligation',
      'We\'ll explain your options clearly',
      'Get answers to all your questions',
      'Receive a custom quote',
    ],
  },
  {
    number: '2',
    title: 'Quick & Easy Setup',
    description: 'Once you\'re ready to move forward, we handle the paperwork and get your merchant account approved. Then we\'ll set up your terminal and make sure everything works perfectly.',
    details: [
      'Simple application process',
      'Fast approval (usually 1-3 days)',
      'Terminal programming included',
      'We configure everything for you',
    ],
  },
  {
    number: '3',
    title: 'Start Accepting Payments',
    description: 'You\'re live! Accept credit cards, debit cards, and contactless payments from your customers. We\'re here for ongoing support whenever you need us.',
    details: [
      'Full training on your terminal',
      'Accept all major card types',
      'Deposits directly to your bank',
      'Ongoing support from real people',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Getting Started is Simple
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;ve helped hundreds of local businesses start accepting credit cards. The process is straightforward—here&apos;s how it works.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-24 w-0.5 h-[calc(100%-6rem)] bg-gray-200 hidden md:block"></div>
                )}

                <div className="flex gap-6 md:gap-8 mb-12 md:mb-16">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[var(--primary)] rounded-full flex items-center justify-center relative z-10">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-[var(--secondary)] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary text-lg">
              Start Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you work with With It Payments, you get more than just a terminal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Terminal Setup',
                description: 'We configure and program your terminal so it\'s ready to use out of the box.',
                icon: '🔧',
              },
              {
                title: 'Merchant Account',
                description: 'Full merchant account setup included—no need to visit a bank.',
                icon: '🏦',
              },
              {
                title: 'Training',
                description: 'Learn how to use your terminal, run reports, and handle common situations.',
                icon: '📚',
              },
              {
                title: 'Ongoing Support',
                description: 'Real people to help when you have questions or issues—not a 1-800 maze.',
                icon: '🤝',
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={faqs}
        title="Common Questions"
        subtitle="Answers to questions we hear from business owners getting started with credit card processing."
      />

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="The first step is a simple conversation. Tell us about your business and we'll show you your options."
        primaryButtonText="Get Your Free Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Call Us: (970) 555-1234"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
