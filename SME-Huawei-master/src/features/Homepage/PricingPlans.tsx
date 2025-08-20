import { HiCheckCircle } from 'react-icons/hi';

function PricingPlans() {
  const plans = [
    {
      name: 'Basic',
      price: '19.99',
      features: [
        'Inventory tracking for up to 1,000 SKUs',
        'Basic demand forecasting with historical data',
        '50 automated reports per month',
        'Email support during business hours',
        'Access to standard analytics dashboard',
        'Integration with accounting tools (e.g., QuickBooks)',
        'Basic shipment tracking for up to 500 orders/month',
        'Automated low-stock notifications',
      ],
      borderColor: 'border-gray-200',
      recommended: false,
    },
    {
      name: 'Pro',
      price: '99.99',
      features: [
        'All Basic features',
        'Inventory tracking for up to 10,000 SKUs',
        'Advanced demand forecasting with AI insights',
        'Unlimited automated reports',
        'Priority email and live chat support',
        'Customizable dashboards with KPI tracking',
        'Integration with premium logistics tools (e.g., ShipBob)',
        'Multi-location inventory management',
        'Predictive stock replenishment algorithms',
        'Real-time shipment tracking with carrier APIs',
      ],
      borderColor: 'border-blue-500',
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        'Unlimited SKU and order management',
        'AI-powered supply chain optimization',
        '24/7 dedicated support with SLA guarantees',
        'Custom API access and webhooks for ERP integration',
        'Dedicated account manager for strategic planning',
        'End-to-end visibility across supply chain networks',
        'Automated workflows for supply chain operations',
        'Integration with proprietary tools and custom systems',
        'AI-driven supplier and vendor performance insights',
      ],
      borderColor: 'border-gray-200',
      recommended: false,
    },
  ];

  return (
    <section className="bg-blue-100 px-4 py-16" id="pricing">
      <div className="container mx-auto max-w-[100rem]">
        <h2 className="mb-16 text-center text-6xl font-bold text-primary">
          Our <span className="text-blue-600">Pricing Plans</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl ${plan.borderColor} ${
                plan.recommended
                  ? 'bg-white ring-4 ring-blue-500/20'
                  : 'bg-white'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}

              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {plan.name}
              </h3>

              <p className="mb-6 text-5xl font-extrabold text-blue-600">
                {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                <span className="text-lg font-normal text-gray-500">
                  {plan.price !== 'Custom' && '/month'}
                </span>
              </p>

              <ul className="mb-8 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <HiCheckCircle className="mr-3 text-blue-500" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full rounded-lg py-3 font-semibold transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-primary to-secondary text-lg text-white hover:shadow-lg hover:ring-4 hover:ring-cyan-500 hover:ring-opacity-50 hover:ring-offset-4'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
