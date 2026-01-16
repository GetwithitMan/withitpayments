import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy - With It Payments',
  description: 'Privacy Policy for With It Payments. Learn how we collect, use, and protect your personal information in compliance with CCPA/CPRA and other privacy regulations.',
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Privacy Policy', url: 'https://withitpayments.com/privacy' },
]);

export default function PrivacyPage() {
  const lastUpdated = 'January 16, 2026';
  const effectiveDate = 'January 16, 2026';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">

            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                With It Payments (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website withitpayments.com (the &quot;Site&quot;), use our services, or interact with us in any way.
              </p>
              <p className="text-gray-600 mb-4">
                This policy complies with the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), and other applicable privacy laws effective January 1, 2026.
              </p>
              <p className="text-gray-600">
                <strong>Business Contact Information:</strong><br />
                With It Payments<br />
                2480 Hwy 6&50, Unit 4<br />
                Fruita, CO 81521<br />
                Email: <a href="mailto:info@withitpayments.com" className="text-[var(--primary)] hover:underline">info@withitpayments.com</a><br />
                Phone: <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a>
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information You Provide</h3>
              <p className="text-gray-600 mb-4">We collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, business name, and mailing address</li>
                <li><strong>Business Information:</strong> Business type, industry, estimated transaction volume, and current payment processing details</li>
                <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or contact forms</li>
                <li><strong>SMS/Text Messaging Data:</strong> Phone number and consent records when you opt-in to receive text messages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Automatically Collected</h3>
              <p className="text-gray-600 mb-4">When you visit our Site, we may automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring URLs, click patterns</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address (city/region level only)</li>
                <li><strong>Cookies and Tracking Technologies:</strong> See our &quot;Cookies&quot; section below</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sensitive Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We do not intentionally collect sensitive personal information such as Social Security numbers, financial account numbers, precise geolocation, racial or ethnic origin, religious beliefs, health information, or biometric data through our website. If such information is required for payment processing services, it is collected and processed by our third-party payment processor partners under their own privacy policies and security protocols.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Provide Services:</strong> To deliver credit card processing and terminal solutions you request</li>
                <li><strong>Communication:</strong> To respond to inquiries, provide quotes, and deliver customer support</li>
                <li><strong>SMS Messaging:</strong> To send text messages if you have opted in (see our SMS Terms)</li>
                <li><strong>Marketing:</strong> To send promotional materials with your consent (you may opt out at any time)</li>
                <li><strong>Analytics:</strong> To understand how visitors use our Site and improve our services</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Security:</strong> To detect, prevent, and address fraud or security issues</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 mb-4">We retain your personal information for the following periods:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Contact Form Submissions:</strong> 3 years from date of submission, or until you request deletion</li>
                <li><strong>Customer Account Information:</strong> Duration of business relationship plus 7 years for legal/tax compliance</li>
                <li><strong>SMS Consent Records:</strong> 4 years from date of consent or opt-out (as required by TCPA)</li>
                <li><strong>Website Analytics Data:</strong> 26 months</li>
                <li><strong>Marketing Preferences:</strong> Until you withdraw consent or request deletion</li>
              </ul>
              <p className="text-gray-600">
                After these retention periods, we securely delete or anonymize your personal information unless a longer retention period is required by law.
              </p>
            </div>

            {/* Disclosure of Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclosure of Your Information</h2>
              <p className="text-gray-600 mb-4">
                In the preceding 12 months, we have disclosed the following categories of personal information for business purposes:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers and Contractors</h3>
              <p className="text-gray-600 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Payment Processing Partners:</strong> To facilitate merchant account setup and processing services</li>
                <li><strong>Communication Providers:</strong> Such as Twilio for SMS messaging services</li>
                <li><strong>Website Hosting:</strong> Vercel for website hosting services</li>
                <li><strong>Analytics Services:</strong> Google Analytics (if enabled) for website analytics</li>
                <li><strong>Email Services:</strong> For sending transactional and marketing communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-600 mb-4">We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">We Do Not Sell Your Personal Information</h3>
              <p className="text-gray-600 mb-4">
                <strong>With It Payments does not sell your personal information.</strong> We do not share your personal information with third parties for their direct marketing purposes. We do not engage in the &quot;sharing&quot; of personal information for cross-context behavioral advertising as defined under CPRA.
              </p>
            </div>

            {/* Your Privacy Rights - CCPA/CPRA */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights (CCPA/CPRA)</h2>
              <p className="text-gray-600 mb-4">
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you, the sources of that information, our purposes for collecting it, and the categories of third parties with whom we share it.</li>
                <li><strong>Right to Delete:</strong> You can request that we delete personal information we have collected from you, subject to certain exceptions.</li>
                <li><strong>Right to Correct:</strong> You can request that we correct inaccurate personal information we maintain about you.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing:</strong> While we do not sell or share your personal information, you have the right to opt-out if this changes.</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You can limit our use of sensitive personal information to what is necessary to provide services.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h3>
              <p className="text-gray-600 mb-4">
                To exercise any of these rights, please contact us at:
              </p>
              <ul className="list-none pl-0 text-gray-600 mb-4">
                <li>Email: <a href="mailto:privacy@withitpayments.com" className="text-[var(--primary)] hover:underline">privacy@withitpayments.com</a></li>
                <li>Phone: <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a></li>
                <li>Mail: With It Payments, 2480 Hwy 6&50, Unit 4, Fruita, CO 81521</li>
              </ul>
              <p className="text-gray-600 mb-4">
                We will verify your identity before processing your request. We will respond to verifiable requests within 45 days, or notify you if we need additional time (up to 90 days total).
              </p>
              <p className="text-gray-600">
                You may also designate an authorized agent to make a request on your behalf. We may require proof of authorization.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-600">
                We honor Do Not Track (DNT) browser signals. When we detect a DNT signal, we limit data collection to essential functions only.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-600">
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Payment Processing and Financial Data */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Processing and Financial Data</h2>
              <p className="text-gray-600 mb-4">
                When you engage our payment processing services or make payments through our platform, certain financial information may be collected and processed. This section describes how payment data is handled.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Information We Process</h3>
              <p className="text-gray-600 mb-4">In connection with payment processing services, the following information may be collected:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Cardholder Data:</strong> Credit/debit card numbers, expiration dates, and security codes (CVV/CVC)</li>
                <li><strong>Bank Account Information:</strong> For ACH/eCheck transactions, when applicable</li>
                <li><strong>Billing Information:</strong> Billing name, address, email, and phone number</li>
                <li><strong>Transaction Data:</strong> Purchase amounts, dates, times, and merchant information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Payment Processors</h3>
              <p className="text-gray-600 mb-4">
                Payment card data and financial transactions are processed through PCI DSS-compliant third-party payment gateways and processors, which may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Authorize.net:</strong> Payment gateway services</li>
                <li><strong>NMI (Network Merchants Inc.):</strong> Payment gateway and processing services</li>
                <li><strong>Other Payment Processors:</strong> As required for specific terminal or processing solutions</li>
              </ul>
              <p className="text-gray-600 mb-4">
                These third-party processors have their own privacy policies governing the collection and use of payment data. We encourage you to review their privacy policies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Authorize.net Privacy Policy: <a href="https://www.authorize.net/about-us/privacy/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">authorize.net/about-us/privacy</a></li>
                <li>NMI Privacy Policy: <a href="https://www.nmi.com/policy/privacy/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">nmi.com/policy/privacy</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">PCI DSS Compliance</h3>
              <p className="text-gray-600 mb-4">
                We are committed to maintaining the security of payment card data in accordance with the Payment Card Industry Data Security Standard (PCI DSS). Our approach includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>No Storage of Sensitive Card Data:</strong> We do not store full credit card numbers, CVV codes, or magnetic stripe data on our servers</li>
                <li><strong>Tokenization:</strong> When card data must be referenced, we use secure tokenization through our payment gateway partners</li>
                <li><strong>Encrypted Transmission:</strong> All payment data is transmitted using TLS 1.2 or higher encryption</li>
                <li><strong>PCI-Compliant Partners:</strong> We only work with payment processors and gateways that maintain PCI DSS certification</li>
                <li><strong>Regular Security Assessments:</strong> We conduct ongoing security reviews and maintain compliance with PCI DSS requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">How Payment Data is Used</h3>
              <p className="text-gray-600 mb-4">Payment information is used solely for:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Processing your payment transactions</li>
                <li>Preventing fraud and unauthorized transactions</li>
                <li>Resolving disputes and chargebacks</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Providing transaction receipts and records</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Data Retention</h3>
              <p className="text-gray-600">
                Transaction records are retained for 7 years as required by tax and financial regulations. Tokenized payment references may be retained for recurring billing purposes until you cancel your service or request deletion. Actual card numbers are not stored by With It Payments; they are processed and stored by our PCI-compliant payment gateway partners.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Secure hosting with reputable providers</li>
                <li>Access controls limiting who can access personal data</li>
                <li>Regular security assessments</li>
                <li>PCI DSS compliance for payment processing</li>
                <li>Secure payment page scripts with integrity monitoring (per PCI DSS 4.0 requirements)</li>
              </ul>
              <p className="text-gray-600">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page and, where appropriate, notify you by email or through a notice on our Site. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">With It Payments</p>
                <p className="text-gray-600">2480 Hwy 6&50, Unit 4</p>
                <p className="text-gray-600">Fruita, CO 81521</p>
                <p className="text-gray-600 mt-2">
                  Email: <a href="mailto:privacy@withitpayments.com" className="text-[var(--primary)] hover:underline">privacy@withitpayments.com</a>
                </p>
                <p className="text-gray-600">
                  Phone: <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
