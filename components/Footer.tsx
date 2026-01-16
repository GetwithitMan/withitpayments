import Link from 'next/link';

const footerNavigation = {
  solutions: [
    { name: 'Terminals', href: '/terminals' },
    { name: 'Countertop Terminals', href: '/terminals/countertop' },
    { name: 'Mobile Terminals', href: '/terminals/mobile' },
    { name: 'Smart Terminals', href: '/terminals/smart' },
  ],
  industries: [
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Restaurants & Cafes', href: '/industries/restaurants' },
    { name: 'Salons & Barbers', href: '/industries/salons' },
    { name: 'Food Trucks', href: '/industries/food-trucks' },
    { name: 'Medical & Dental', href: '/industries/medical' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'SMS Updates', href: '/sms-signup' },
  ],
  serviceArea: [
    { name: 'Grand Junction', href: '/service-area/grand-junction' },
    { name: 'Fruita', href: '/service-area/fruita' },
    { name: 'Western Slope', href: '/service-area/western-slope' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-custom py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">With It</span>
              <span className="text-[var(--secondary)]"> Payments</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Simple credit card processing and terminal solutions for local businesses in Grand Junction, Fruita, and the Western Slope of Colorado.
            </p>
            {/* NAP - Name, Address, Phone */}
            <div className="text-sm text-gray-300 space-y-2">
              <p className="font-semibold text-white">With It Payments</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2480+Hwy+6%2650+Unit+4+Fruita+CO+81521"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[var(--secondary)] transition-colors"
              >
                <p>2480 Hwy 6&50, Unit 4</p>
                <p>Fruita, CO 81521</p>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2480+Hwy+6%2650+Unit+4+Fruita+CO+81521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--secondary)] hover:text-white transition-colors mt-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
              <p className="mt-2">
                <a href="tel:+19705551234" className="hover:text-[var(--secondary)] transition-colors">
                  (970) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@withitpayments.com" className="hover:text-[var(--secondary)] transition-colors">
                  info@withitpayments.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Solutions</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-300 hover:text-[var(--secondary)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Industries</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.industries.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-300 hover:text-[var(--secondary)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-300 hover:text-[var(--secondary)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Service Area</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.serviceArea.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-300 hover:text-[var(--secondary)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} With It Payments. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-[var(--secondary)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-400 hover:text-[var(--secondary)] transition-colors">
                Terms of Service
              </Link>
              <span className="text-xs text-gray-400">Proudly serving Colorado&apos;s Western Slope</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
