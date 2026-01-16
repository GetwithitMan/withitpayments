import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Transparent Credit Card Processing Pricing',
  description: 'Fair, transparent pricing for credit card processing. No hidden fees, no surprises. See our rates and find the right plan for your business in Grand Junction and Fruita, CO.',
  keywords: ['credit card processing rates', 'merchant services pricing', 'payment processing fees', 'credit card terminal cost'],
  openGraph: {
    title: 'Transparent Pricing | With It Payments',
    description: 'Fair rates, no hidden fees. See what credit card processing really costs.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Pricing', url: 'https://withitpayments.com/pricing' },
]);

const pricingFaqs = [
  {
    question: 'What are interchange fees?',
    answer: 'Interchange fees are set by Visa, Mastercard, and other card networks. They vary based on the type of card (rewards, business, debit) and how it\'s processed. These fees go to the card-issuing bank, not to us.',
  },
  {
    question: 'Do you charge monthly fees?',
    answer: 'We have options with and without monthly fees. A small monthly fee often means lower per-transaction costs, which can save money for businesses with higher volume. We\'ll help you find the best fit.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees—period. We explain every line item on your statement before you sign up. If you see something you don\'t understand, we\'ll explain it.',
  },
  {
    question: 'How much does a terminal cost?',
    answer: 'Terminal options range from free placement programs to purchasing outright. Purchased terminals typically range from $200-$600 depending on the model. We\'ll explain all your options.',
  },
  {
    question: 'When do I get my money?',
    answer: 'Most businesses receive funds within 1-2 business days after the transaction. Deposits go directly to your business bank account.',
  },
  {
    question: 'Can you beat my current rates?',
    answer: 'Often, yes. Bring us a recent processing statement and we\'ll do a free analysis to show you exactly how we compare.',
  },
];

const faqSchema = generateFAQSchema(pricingFaqs);

export default function PricingPage() {
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Honest, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We believe you should understand exactly what you&apos;re paying for. No hidden fees, no confusing statements, no surprises. Just fair rates for reliable payment processing.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Credit Card Processing Pricing Works
              </h2>
              <p className="text-lg text-gray-600">
                Let&apos;s cut through the confusion. Here&apos;s what you&apos;re actually paying for.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Interchange Fees</h3>
                <p className="text-gray-600 text-sm">
                  Set by card networks (Visa, MC). These fees go to the bank that issued your customer&apos;s card. Everyone pays these.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment Fees</h3>
                <p className="text-gray-600 text-sm">
                  Small fees charged by card networks for using their payment rails. Also universal across all processors.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Processor Markup</h3>
                <p className="text-gray-600 text-sm">
                  This is where we make our money. We keep this fair and competitive, with no hidden add-ons.
                </p>
              </div>
            </div>

            <div className="bg-[var(--primary)] bg-opacity-5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Promise: No Hidden Fees
              </h3>
              <p className="text-gray-600 mb-4">
                We&apos;ll explain every fee on your statement before you sign up. If you ever see a charge you don&apos;t understand, call us and we&apos;ll explain it—or remove it if it shouldn&apos;t be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer different pricing models to fit different business types. We&apos;ll recommend the one that saves you the most money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flat Rate Pricing</h3>
              <p className="text-gray-600 mb-4">
                One simple rate for all transactions. Easy to understand and predict your costs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Simple and predictable
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Easy to budget
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Great for smaller businesses
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                <strong>Best for:</strong> Businesses with lower volume or mostly debit transactions
              </p>
            </div>

            <div className="card border-2 border-[var(--primary)]">
              <div className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interchange Plus Pricing</h3>
              <p className="text-gray-600 mb-4">
                Actual interchange cost plus a small, fixed markup. Maximum transparency and often the lowest total cost.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Most transparent pricing
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Often lowest overall cost
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[var(--secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  You see exactly what you pay
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                <strong>Best for:</strong> Most businesses, especially with higher volume
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Others Charge vs Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common Fees to Watch For
              </h2>
              <p className="text-lg text-gray-600">
                Some processors hide profits in obscure fees. Here&apos;s what to look out for.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { fee: 'PCI Compliance Fee', note: 'We help you stay compliant at no extra charge' },
                { fee: 'Statement Fee', note: 'Free online statements available' },
                { fee: 'Batch Fee', note: 'We keep this reasonable or waive it entirely' },
                { fee: 'Annual Fee', note: 'We don\'t charge annual fees' },
                { fee: 'Early Termination Fee', note: 'Ask about our flexible terms' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.fee}</span>
                  <span className="text-sm text-[var(--secondary)]">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Statement Analysis */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Free Statement Analysis
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-6">
            Already processing credit cards? Send us your current statement and we&apos;ll show you exactly how we compare—no obligation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[var(--secondary)] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
          >
            Get Your Free Analysis
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={pricingFaqs}
        title="Pricing Questions"
        subtitle="Straight answers to common questions about credit card processing costs."
      />

      {/* CTA */}
      <CTA
        title="Get Your Custom Quote"
        description="Every business is different. Contact us for a personalized quote based on your specific needs and volume."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Call: (970) 555-1234"
        secondaryButtonHref="tel:+19705551234"
      />
    </>
  );
}
