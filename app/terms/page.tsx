import { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms of Service - With It Payments',
  description: 'Terms of Service for With It Payments. Read our terms and conditions for using our credit card processing services, website, and SMS messaging services.',
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Terms of Service', url: 'https://withitpayments.com/terms' },
]);

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                Welcome to With It Payments. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the With It Payments website located at withitpayments.com (the &quot;Site&quot;), our credit card processing and terminal services (the &quot;Services&quot;), and any SMS/text messaging services we provide.
              </p>
              <p className="text-gray-600 mb-4">
                By accessing or using our Site or Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or Services.
              </p>
              <p className="text-gray-600">
                <strong>Company Information:</strong><br />
                With It Payments<br />
                2480 Hwy 6&50, Unit 4<br />
                Fruita, CO 81521<br />
                Email: <a href="mailto:info@withitpayments.com" className="text-[var(--primary)] hover:underline">info@withitpayments.com</a><br />
                Phone: <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a>
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                With It Payments provides credit card processing solutions and payment terminal equipment to businesses in Grand Junction, Fruita, and the Western Slope of Colorado. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Merchant account setup and credit card processing services</li>
                <li>Payment terminal sales, leasing, and support (including Dejavoo, PAX, Verifone, Ingenico, and Clover terminals)</li>
                <li>Payment gateway integration services</li>
                <li>Customer support and technical assistance</li>
                <li>SMS/text message notifications (with consent)</li>
              </ul>
              <p className="text-gray-600">
                Additional terms may apply to specific services. Payment processing services are subject to approval by our partner payment processors and are governed by separate merchant agreements.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              <p className="text-gray-600 mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal authority to enter into binding contracts</li>
                <li>Operate a legitimate business</li>
                <li>Not be prohibited from receiving services under applicable law</li>
                <li>Provide accurate and complete information during the application process</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our Services only for lawful business purposes</li>
                <li>Comply with all applicable laws, including payment card industry (PCI) requirements</li>
                <li>Not engage in fraudulent or deceptive practices</li>
                <li>Promptly notify us of any unauthorized use of your account</li>
              </ul>
            </div>

            {/* SMS/Text Messaging Terms */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS/Text Messaging Terms and Conditions</h2>
              <p className="text-gray-600 mb-4">
                This section describes the terms for our SMS/text messaging services, which comply with the Telephone Consumer Protection Act (TCPA), CTIA guidelines, and carrier requirements including A2P 10DLC registration standards.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Consent to Receive Messages</h3>
              <p className="text-gray-600 mb-4">
                By providing your mobile phone number and opting in to receive text messages from With It Payments, you expressly consent to receive recurring automated marketing and informational text messages from us at the phone number you provided. Your consent is not a condition of purchase.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Message Types and Frequency</h3>
              <p className="text-gray-600 mb-4">Messages may include:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Appointment reminders and confirmations</li>
                <li>Service updates and notifications</li>
                <li>Promotional offers and marketing messages</li>
                <li>Account-related alerts</li>
                <li>Customer support communications</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>Message frequency varies.</strong> You may receive up to 10 messages per month, depending on your interactions with us and your preferences.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Message and Data Rates</h3>
              <p className="text-gray-600 mb-4">
                <strong>Message and data rates may apply.</strong> Standard messaging rates from your wireless carrier may apply to messages you send or receive. Check with your mobile carrier for details about your plan.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 How to Opt-Out</h3>
              <p className="text-gray-600 mb-4">
                You may opt out of receiving text messages at any time by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Replying STOP</strong> to any message you receive from us</li>
                <li>Texting <strong>STOP</strong> to our messaging number</li>
                <li>Contacting us at <a href="mailto:info@withitpayments.com" className="text-[var(--primary)] hover:underline">info@withitpayments.com</a> or <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a></li>
              </ul>
              <p className="text-gray-600 mb-4">
                After you send STOP, we will send you a one-time confirmation message acknowledging your opt-out request. You will receive no further messages unless you opt in again. <strong>We honor all opt-out requests within 10 days as required by FCC regulations effective April 11, 2025.</strong>
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.5 How to Get Help</h3>
              <p className="text-gray-600 mb-4">
                For help or more information about our SMS program, reply <strong>HELP</strong> to any message or contact us at:
              </p>
              <ul className="list-none pl-0 text-gray-600 mb-4">
                <li>Email: <a href="mailto:info@withitpayments.com" className="text-[var(--primary)] hover:underline">info@withitpayments.com</a></li>
                <li>Phone: <a href="tel:+19705551234" className="text-[var(--primary)] hover:underline">(970) 555-1234</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.6 Carrier Disclaimer</h3>
              <p className="text-gray-600 mb-4">
                Carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission from your mobile carrier.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.7 Supported Carriers</h3>
              <p className="text-gray-600 mb-4">
                Our SMS services are compatible with major U.S. carriers including AT&T, Verizon, T-Mobile, Sprint, and most regional carriers. Carrier participation may change without notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.8 Privacy</h3>
              <p className="text-gray-600">
                Your mobile number and opt-in consent are used solely to send you messages as described herein. We do not sell, rent, or share your mobile phone number with third parties for their marketing purposes. For complete details on how we handle your information, please review our <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on this Site, including text, graphics, logos, images, and software, is the property of With It Payments or our licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission. Terminal brand names (Dejavoo, PAX, Verifone, Ingenico, Clover) are trademarks of their respective owners.
              </p>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">You agree not to use our Site or Services to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Process payments for illegal goods or services</li>
                <li>Engage in money laundering or terrorist financing</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our Site or Services</li>
                <li>Harass, abuse, or harm others</li>
                <li>Send unsolicited messages or spam</li>
                <li>Misrepresent your identity or affiliation</li>
              </ul>
            </div>

            {/* Payment Processing Terms */}
            <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Processing Terms</h2>
              <p className="text-gray-600 mb-4">
                This section governs the use of payment processing services, including point-of-sale (POS) systems, payment gateways, and online payment acceptance. These terms comply with Payment Card Industry (PCI) requirements and payment network rules.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Payment Gateway Services</h3>
              <p className="text-gray-600 mb-4">
                Payment processing services are provided through PCI DSS-compliant third-party payment gateways, which may include Authorize.net, NMI (Network Merchants Inc.), and other approved processors. By using our payment services, you agree to the additional terms imposed by these providers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 PCI DSS Compliance Requirements</h3>
              <p className="text-gray-600 mb-4">As a merchant using our payment processing services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Maintain compliance with the Payment Card Industry Data Security Standard (PCI DSS) applicable to your merchant level</li>
                <li>Complete an annual PCI Self-Assessment Questionnaire (SAQ) or third-party assessment as required</li>
                <li>Implement and maintain required security controls as specified by PCI DSS version 4.0</li>
                <li>Protect cardholder data and prevent unauthorized access</li>
                <li>Report any suspected data breach or security incident immediately</li>
                <li>Comply with all requirements effective March 31, 2025, including script integrity monitoring for payment pages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Payment Network Rules</h3>
              <p className="text-gray-600 mb-4">You agree to comply with all applicable payment network rules, including those of:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>Discover</li>
                <li>Any other payment networks through which you process transactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 Merchant Obligations</h3>
              <p className="text-gray-600 mb-4">As a merchant, you are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Accurate Business Information:</strong> Providing and maintaining accurate business details, including your legal entity name, EIN/Tax ID, business address, and contact information</li>
                <li><strong>Transaction Legitimacy:</strong> Ensuring all transactions processed are for legitimate goods or services provided by your business</li>
                <li><strong>Refund and Cancellation Policies:</strong> Clearly displaying your refund, return, and cancellation policies to customers</li>
                <li><strong>Customer Data Protection:</strong> Implementing appropriate measures to protect customer payment data</li>
                <li><strong>Chargeback Management:</strong> Responding to and managing chargebacks and disputes in accordance with payment network rules</li>
                <li><strong>Prohibited Transactions:</strong> Not processing transactions for prohibited goods or services as defined by payment networks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.5 Online Payment Requirements</h3>
              <p className="text-gray-600 mb-4">For e-commerce and online payment acceptance:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Payment pages must use HTTPS with TLS 1.2 or higher encryption</li>
                <li>You must display clear pricing, including any taxes or fees, before checkout</li>
                <li>A link to your privacy policy must be accessible from any page where payment information is collected</li>
                <li>Customer consent must be obtained before storing payment credentials for future transactions</li>
                <li>Recurring billing must include clear disclosure of terms and easy cancellation options</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.6 Third-Party Service Provider Terms</h3>
              <p className="text-gray-600 mb-4">
                Use of payment gateway services is also subject to the terms and conditions of our payment processing partners:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Authorize.net:</strong> Subject to the <a href="https://www.authorize.net/about-us/terms/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Authorize.net Service Agreement</a></li>
                <li><strong>NMI:</strong> Subject to <a href="https://www.nmi.com/policy/terms-conditions-for-nmis-services-merchant-terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">NMI Merchant Terms and Conditions</a></li>
              </ul>
              <p className="text-gray-600">
                In the event of any conflict between these Terms and the terms of a third-party payment processor, the more restrictive terms shall apply with respect to payment processing activities.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Fees and Billing</h2>
              <p className="text-gray-600 mb-4">
                Fees for our Services are as quoted and agreed upon in your merchant agreement or service contract. Payment processing fees, terminal costs, and other charges will be clearly disclosed before you commit to any services.
              </p>
              <p className="text-gray-600">
                We reserve the right to modify our pricing with 30 days&apos; notice. Failure to pay fees may result in suspension or termination of Services.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                THE SITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-600">
                We do not warrant that the Site or Services will be uninterrupted, error-free, or free of viruses or other harmful components. Payment processing is subject to the terms of third-party processors.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, WITH IT PAYMENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF THE SITE OR SERVICES.
              </p>
              <p className="text-gray-600">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SITE OR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify, defend, and hold harmless With It Payments, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Site or Services, your violation of these Terms, or your violation of any rights of a third party.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may suspend or terminate your access to the Site or Services at any time, with or without cause, and with or without notice. Upon termination, your right to use the Site and Services will immediately cease.
              </p>
              <p className="text-gray-600">
                Provisions of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property rights, disclaimers, limitations of liability, and indemnification.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law principles.
              </p>
              <p className="text-gray-600">
                Any dispute arising from these Terms or your use of the Site or Services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved in the state or federal courts located in Mesa County, Colorado, and you consent to the personal jurisdiction of such courts.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to These Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. When we make material changes, we will update the &quot;Last Updated&quot; date and post the revised Terms on the Site. Your continued use of the Site or Services after changes are posted constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Entire Agreement</h2>
              <p className="text-gray-600">
                These Terms, together with our <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link> and any applicable merchant agreements, constitute the entire agreement between you and With It Payments regarding your use of the Site and Services.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">With It Payments</p>
                <p className="text-gray-600">2480 Hwy 6&50, Unit 4</p>
                <p className="text-gray-600">Fruita, CO 81521</p>
                <p className="text-gray-600 mt-2">
                  Email: <a href="mailto:info@withitpayments.com" className="text-[var(--primary)] hover:underline">info@withitpayments.com</a>
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
