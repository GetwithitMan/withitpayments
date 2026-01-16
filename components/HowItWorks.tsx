const steps = [
  {
    number: '1',
    title: 'Choose Your Terminal',
    description: 'We help you pick the right terminal for your business—countertop, mobile, or smart terminal from trusted brands.',
  },
  {
    number: '2',
    title: 'Quick Setup',
    description: 'We handle the setup and programming. Most businesses are up and running the same day.',
  },
  {
    number: '3',
    title: 'Start Processing',
    description: 'Accept credit cards, debit cards, and contactless payments with competitive rates and no hidden fees.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with credit card processing is simple. We make it easy so you can focus on running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
              )}

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[var(--primary)] rounded-full flex items-center justify-center relative z-10">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
