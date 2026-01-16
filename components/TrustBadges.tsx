const brands = [
  { name: 'Dejavoo', href: '/terminals/dejavoo' },
  { name: 'Pax', href: '/terminals/pax' },
  { name: 'Verifone', href: '/terminals/verifone' },
  { name: 'Ingenico', href: '/terminals/ingenico' },
  { name: 'Clover', href: '/terminals/clover' },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <p className="text-center text-sm text-gray-500 mb-8">
          Authorized partner for leading terminal brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="image-placeholder w-32 h-12"
            >
              <span className="text-xs">{brand.name} Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
