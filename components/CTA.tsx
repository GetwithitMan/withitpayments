import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTA({
  title = "Ready to Accept Credit Cards?",
  description = "Get a free quote and see how easy it is to start processing payments. No obligation, no pressure—just straightforward answers.",
  primaryButtonText = "Get a Free Quote",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  variant = 'primary',
}: CTAProps) {
  const bgClass = variant === 'primary'
    ? 'bg-[var(--primary)]'
    : 'bg-[var(--secondary)]';

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonHref}
            className="bg-white text-[var(--primary)] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
        <p className="mt-6 text-white text-opacity-75 text-sm">
          Or call us: <a href="tel:+19705551234" className="underline hover:text-white">(970) 555-1234</a>
        </p>
      </div>
    </section>
  );
}
