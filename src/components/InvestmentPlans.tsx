import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    trees: '50 Trees',
    investment: '$5,000 investment',
    annualYield: '12%',
    term: '5 years',
    image: 'https://images.pexels.com/photos/7125492/pexels-photo-7125492.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    badge: 'Perfect Entry Point',
    badgeColor: 'bg-brown-600',
    features: [
      'Minimum investment to start earning',
      '12% annual yield from Year 3',
      'Expert agronomist management',
      'Quarterly harvest reports',
      'Full crop insurance coverage'
    ],
    buttonText: 'Start Investing',
    buttonClass: 'btn-primary'
  },
  {
    id: 'professional',
    name: 'Professional',
    trees: '200 Trees',
    investment: '$20,000 investment',
    annualYield: '14%',
    term: '7 years',
    image: 'https://images.unsplash.com/photo-1647220577886-6a5faaa7c141?auto=format&fit=crop&w=600&h=400&q=80',
    badge: 'Most Popular',
    badgeColor: 'bg-brown-700',
    isRecommended: true,
    tagline: 'Most Popular',
    features: [
      'Higher returns with 200 trees',
      '14% annual yield potential',
      'Priority plantation management',
      'Detailed investment tracking',
      'Reinvestment options for compounding'
    ],
    buttonText: 'Choose Professional',
    buttonClass: 'btn-secondary'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    trees: '1,000+ Trees',
    investment: '$100,000 investment',
    annualYield: '16%',
    term: '10 years',
    image: 'https://images.unsplash.com/photo-1736017703593-30934e35cc8c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=luckas-spalinger-P_d9EfO5MjE-unsplash.jpg&w=640',
    badge: 'Maximum Returns',
    badgeColor: 'bg-brown-800',
    features: [
      'Highest return potential at 16%',
      'Large-scale coffee plantation',
      'Dedicated account management',
      'Premium harvest priority',
      'Custom investment strategies'
    ],
    buttonText: 'Talk To Advisor',
    buttonClass: 'btn-primary'
  }
];

const InvestmentPlans: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 md:py-10 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-brown-700 mb-2 font-bold">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto mb-1">
              Choose from flexible investment plans designed to fit any budget and financial goal.
            </p>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto">
              Each plan is fully managed and designed for long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Plan Card */}
                <div 
                  className={`card h-full p-4 ${
                    plan.isRecommended 
                      ? 'bg-brown-800 text-white border-4 border-brown-900 transform scale-105' 
                      : 'bg-white hover:shadow-xl'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex justify-center mb-2">
                    <span className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${
                      plan.isRecommended ? 'bg-white text-brown-900' : plan.badgeColor
                    }`}>
                      {plan.isRecommended && plan.tagline ? plan.tagline : plan.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative mb-3">
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="text-center mb-3">
                    <h3 className={`text-lg font-bold mb-1 ${
                      plan.isRecommended ? 'text-white' : 'text-brown-700'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm font-semibold mb-1 ${
                      plan.isRecommended ? 'text-white' : 'text-gray-700'
                    }`}>
                      {plan.trees}
                    </p>
                    <p className={`text-xs mb-1 ${
                      plan.isRecommended ? 'text-cream-100' : 'text-gray-600'
                    }`}>
                      {plan.investment}
                    </p>
                    <div className="flex justify-center gap-4 text-xs">
                      <span className={`${
                        plan.isRecommended ? 'text-green-300' : 'text-green-600'
                      } font-semibold`}>
                        {plan.annualYield} Annual Yield
                      </span>
                      <span className={`${
                        plan.isRecommended ? 'text-cream-200' : 'text-gray-500'
                      }`}>
                        {plan.term}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1.5">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`h-3 w-3 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.isRecommended ? 'text-green-300' : 'text-green-500'
                          }`} />
                          <span className={`text-xs ${
                            plan.isRecommended ? 'text-white' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="mt-auto">
                    <button 
                      className={`btn w-full text-sm py-2 ${
                        plan.isRecommended 
                          ? 'bg-white text-forest-600 hover:bg-cream-100' 
                          : plan.buttonClass
                      }`}
                    >
                      {plan.buttonText} 
                      {plan.buttonText.includes('Advisor') ? (
                        <MessageCircle className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans; 