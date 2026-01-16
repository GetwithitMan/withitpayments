import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA = { text: 'Get a Free Quote', href: '/contact' },
  secondaryCTA,
  showImage = true,
  imageSrc,
  imageAlt = 'With It Payments - Credit card processing for local businesses',
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {subtitle && (
              <p className="text-[var(--secondary)] font-semibold text-sm uppercase tracking-wide mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryCTA.href} className="btn-primary text-lg">
                {primaryCTA.text}
              </Link>
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-outline text-lg">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Local Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Fast Setup</span>
              </div>
            </div>
          </div>
          {showImage && (
            <div className="relative">
              {imageSrc ? (
                <div className="relative aspect-[4/3] w-full min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                <div className="image-placeholder aspect-[4/3] w-full min-h-[300px] lg:min-h-[400px]">
                  <span className="text-center px-4">
                    Terminal in use at business counter
                    <br />
                    <span className="text-xs">(600x450 recommended)</span>
                  </span>
                </div>
              )}
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--primary)] opacity-10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--secondary)] opacity-10 rounded-lg -z-10"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
