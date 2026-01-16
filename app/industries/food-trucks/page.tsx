import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Food Truck Credit Card Processing - Mobile Payment Solutions',
  description: 'Credit card processing for food trucks and mobile vendors. Cellular terminals, long battery life, and fast checkout for events, farmers markets, and mobile business.',
  keywords: ['food truck credit card processing', 'mobile vendor payment', 'farmers market payment terminal', 'mobile food business POS'],
  openGraph: {
    title: 'Food Truck Payment Solutions | With It Payments',
    description: 'Mobile credit card processing for food trucks and vendors.',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://withitpayments.com' },
  { name: 'Industries', url: 'https://withitpayments.com/industries' },
  { name: 'Food Trucks', url: 'https://withitpayments.com/industries/food-trucks' },
]);

const serviceSchema = generateServiceSchema({
  name: 'Food Truck Credit Card Processing',
  description: 'Mobile payment processing for food trucks, mobile vendors, and event businesses.',
  url: 'https://withitpayments.com/industries/food-trucks',
});

export default function FoodTrucksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/industries" className="text-[var(--primary)] text-sm font-medium hover:underline mb-4 inline-block">
                &larr; All Industries
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Credit Card Processing for Food Trucks
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Take payments wherever your food truck goes. Our cellular terminals work at events, farmers markets, festivals, and anywhere else your business takes you.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Mobile Solution
              </Link>
            </div>
            <div className="image-placeholder aspect-[4/3] w-full">
              <span className="text-center px-4">Food Truck Image<br /><span className="text-xs">(600x450)</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Food Trucks Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Cellular Connectivity', desc: 'Works anywhere with cell service—no WiFi needed' },
              { title: 'All-Day Battery', desc: 'Lasts through festivals and busy events' },
              { title: 'Durable Build', desc: 'Handles outdoor conditions and busy kitchens' },
              { title: 'Fast Processing', desc: 'Keep the line moving with quick transactions' },
              { title: 'Tip Functionality', desc: 'Easy tipping for your customers' },
              { title: 'Compact Size', desc: 'Doesn\'t take up precious counter space' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Western Slope Events</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">From the Palisade Peach Festival to Fruita Fat Tire, our cellular terminals keep you processing no matter where in the region you&apos;re serving.</p>
          <Link href="/terminals/mobile" className="btn-outline">View Mobile Terminals</Link>
        </div>
      </section>

      <CTA title="Ready to Go Mobile?" description="Contact us for a food truck payment solution that goes wherever you go." primaryButtonText="Get a Quote" primaryButtonHref="/contact" />
    </>
  );
}
