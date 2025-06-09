import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';

const plans = [
  {
    id: 'green-start',
    name: 'Green Start',
    trees: '1 Tree',
    investment: '200€ investment',
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    badge: 'Exploring the beginnings',
    badgeColor: 'bg-forest-600',
    features: [
      'Affordable entry into coffee farming',
      'Long-term passive income for over 20 years',
      'Supports global reforestation efforts',
      'Fully managed by agricultural experts'
    ],
    buttonText: 'Invest now',
    buttonClass: 'btn-primary'
  },
  {
    id: 'wealth-forest',
    name: 'Wealth Forest',
    trees: '10 Trees + 1 Free Tree',
    investment: '2,000€ investment',
    image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    badge: 'Smart Choice',
    badgeColor: 'bg-coffee-600',
    isRecommended: true,
    tagline: 'Grow, Gather, Gain',
    features: [
      'Higher profit potential with 11 trees',
      'Long-term, consistent returns',
      'Create a meaningful legacy for future generations',
      'Supports ecological sustainability'
    ],
    buttonText: 'Invest now',
    buttonClass: 'btn-secondary'
  },
  {
    id: 'coffee-dynasty',
    name: 'Coffee Dynasty',
    trees: '300+ Trees',
    investment: 'Own the land',
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    badge: 'Peak Green Majesty',
    badgeColor: 'bg-coffee-600',
    features: [
      'Highest return potential with 300+ trees',
      'Land ownership for complete control',
      'Priority plantation care',
      'Premium tree management'
    ],
    buttonText: 'Talk To Our Advisor',
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
    <section className="section bg-cream-50 py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-10 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="heading-primary text-forest-600 mb-3">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto mb-1">
              Choose from flexible investment plans designed to fit any budget and financial goal.
            </p>
            <p className="text-gray-600 text-base max-w-3xl mx-auto">
              Each plan is fully managed and designed for long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                  className={`card h-full p-5 ${
                    plan.isRecommended 
                      ? 'bg-forest-600 text-white border-4 border-forest-700 transform scale-105' 
                      : 'bg-white hover:shadow-xl'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex justify-center mb-3">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                      plan.isRecommended ? 'bg-white text-forest-600' : plan.badgeColor
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative mb-4">
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    {plan.tagline && (
                      <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {plan.tagline}
                      </div>
                    )}
                  </div>

                  {/* Plan Details */}
                  <div className="text-center mb-4">
                    <h3 className={`text-xl font-bold mb-1 ${
                      plan.isRecommended ? 'text-white' : 'text-coffee-600'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-base font-semibold mb-1 ${
                      plan.isRecommended ? 'text-white' : 'text-gray-700'
                    }`}>
                      {plan.trees}
                    </p>
                    <p className={`text-sm ${
                      plan.isRecommended ? 'text-cream-100' : 'text-gray-600'
                    }`}>
                      {plan.investment}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${
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