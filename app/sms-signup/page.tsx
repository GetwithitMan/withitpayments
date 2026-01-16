import { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';
import SMSOptInForm from '@/components/SMSOptInForm';

export const metadata: Metadata = {
  title: 'SMS Updates Sign Up - With It Payments',
  description: 'Sign up to receive text message updates from With It Payments. Get appointment reminders, special offers, and important notifications delivered to your phone.',
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'SMS Sign Up', url: 'https://withitpayments.com/sms-signup' },
]);

export default function SMSSignupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Connected with Text Updates
            </h1>
            <p className="text-lg text-gray-600">
              Sign up to receive helpful text message updates from With It Payments. Get appointment reminders, exclusive offers, and important service notifications.
            </p>
          </div>
        </div>
      </section>

      {/* Opt-In Form Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">

            {/* Form Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Sign Up for SMS Updates
              </h2>

              <SMSOptInForm />

              {/* What to Expect */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>After submitting, you&apos;ll receive a confirmation text message from us.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong>Reply YES</strong> to the text to confirm your subscription and start receiving messages.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>That&apos;s it! You&apos;ll start receiving updates from With It Payments.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[var(--secondary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Quick Updates</h4>
                <p className="text-xs text-gray-500 mt-1">Get instant notifications about your service</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[var(--secondary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Exclusive Offers</h4>
                <p className="text-xs text-gray-500 mt-1">Receive special promotions and deals</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[var(--secondary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Easy Support</h4>
                <p className="text-xs text-gray-500 mt-1">Reply to messages for quick help</p>
              </div>
            </div>

            {/* Compliance Info */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Important Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Message frequency:</strong> Up to 10 messages per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Message and data rates may apply</strong> from your carrier</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Opt out anytime:</strong> Reply STOP to any message</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Need help?</strong> Reply HELP or call <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Your privacy matters:</strong> We never sell your phone number</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                By signing up, you agree to our <Link href="/terms" className="text-[var(--primary)] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link>. Consent is not a condition of purchase.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Why do I need to reply YES?</h3>
                <p className="text-sm text-gray-600">
                  This is called &quot;double opt-in&quot; and it&apos;s an industry best practice to confirm that you own the phone number and truly want to receive our messages. It protects both you and us from unwanted texts.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">How do I unsubscribe?</h3>
                <p className="text-sm text-gray-600">
                  Simply reply <strong>STOP</strong> to any message we send, and you&apos;ll be immediately unsubscribed. You can also call us at (970) 555-1234 or email info@withitpayments.com.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">What if I didn&apos;t receive the confirmation text?</h3>
                <p className="text-sm text-gray-600">
                  Check that you entered your phone number correctly, including the area code. If you still don&apos;t receive it within a few minutes, contact us at (970) 555-1234 for assistance.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Will I be charged for receiving texts?</h3>
                <p className="text-sm text-gray-600">
                  We don&apos;t charge you for the texts we send. However, standard message and data rates from your mobile carrier may apply depending on your phone plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
