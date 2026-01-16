import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Quote',
  description: 'Contact With It Payments for a free quote on credit card processing and terminals. Visit us in Fruita, CO or call for personalized service. Serving Grand Junction and the Western Slope.',
  openGraph: {
    title: 'Contact With It Payments - Get a Free Quote',
    description: 'Contact us for credit card processing and terminal solutions. Local support in Grand Junction, Fruita, and the Western Slope of Colorado.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Contact', url: 'https://withitpayments.com/contact' },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Ready to start accepting credit cards? Have questions about terminals or rates? We&apos;re here to help. Reach out and we&apos;ll get back to you quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-600">
                      2480 Hwy 6&50, Unit 4<br />
                      Fruita, CO 81521
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+19705551234" className="hover:text-[var(--primary)] transition-colors">
                        (970) 555-1234
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@withitpayments.com" className="hover:text-[var(--primary)] transition-colors">
                        info@withitpayments.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.5!2d-108.7289!3d39.1583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA5JzI5LjkiTiAxMDjCsDQzJzQ0LjAiVw!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="With It Payments Location - Fruita, CO"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Located on Highway 6&50 in Fruita, just minutes from Grand Junction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Note */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serving the Western Slope of Colorado
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We proudly serve businesses throughout Grand Junction, Fruita, Palisade, Clifton, and the entire Western Slope region. Need on-site setup? We can come to you!
          </p>
        </div>
      </section>
    </>
  );
}
