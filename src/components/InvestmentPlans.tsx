import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

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
    badgeTextColor: 'text-brown',
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

const InvestmentPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-scroll functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) { // Only auto-scroll on mobile/tablet
        setCurrentSlide((prev) => (prev + 1) % plans.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-cream-50" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-6 sm:mb-8 opacity-0 translate-y-12 scale-95 transition-all duration-1000 ease-out ${
              isVisible ? 'animate-slide-in-header' : ''
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
              Choose from flexible investment plans designed to fit any budget and financial goal. Each plan is fully managed and designed for long-term growth.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div 
            ref={cardsRef}
            className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {plans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`relative opacity-0 translate-y-16 scale-95 transition-all duration-1200 ease-out ${
                  isVisible ? 'animate-slide-in-card' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div 
                  className={`card h-full p-4 sm:p-5 md:p-6 ${
                    plan.isRecommended 
                      ? 'bg-brown-800 text-white border-4 border-brown-900 transform lg:scale-105' 
                      : 'bg-white hover:shadow-xl'
                  }`}
                >
                  <div className="flex justify-center mb-3">
                    <span className={`px-3 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold animate-badge-pop ${
                      plan.isRecommended ? 'bg-white !text-brown-900' : plan.badgeColor
                    }`}>
                      {plan.isRecommended && plan.tagline ? plan.tagline : plan.badge}
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-36 sm:h-40 md:h-32 object-cover animate-image-fade"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4 sm:mb-5">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 animate-text-slide ${
                      plan.isRecommended ? 'text-white' : 'text-brown-700'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm sm:text-base font-semibold mb-1 animate-text-slide ${
                      plan.isRecommended ? 'text-white' : 'text-gray-700'
                    }`} style={{ animationDelay: '0.1s' }}>
                      {plan.trees}
                    </p>
                    <p className={`text-xs sm:text-sm mb-2 animate-text-slide ${
                      plan.isRecommended ? 'text-cream-100' : 'text-gray-600'
                    }`} style={{ animationDelay: '0.2s' }}>
                      {plan.investment}
                    </p>
                    <div className="flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
                      <span className={`font-semibold animate-text-slide ${
                        plan.isRecommended ? 'text-green-300' : 'text-green-600'
                      }`} style={{ animationDelay: '0.3s' }}>
                        {plan.annualYield} Annual Yield
                      </span>
                      <span className={`animate-text-slide ${
                        plan.isRecommended ? 'text-cream-200' : 'text-gray-500'
                      }`} style={{ animationDelay: '0.4s' }}>
                        {plan.term}
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 sm:mb-6">
                    <ul className="space-y-2 sm:space-y-2.5">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start animate-text-slide" style={{ animationDelay: `${0.5 + featureIndex * 0.1}s` }}>
                          <Check className={`h-3 w-3 sm:h-4 sm:w-4 mr-2 mt-0.5 flex-shrink-0 animate-check-pop ${
                            plan.isRecommended ? 'text-green-300' : 'text-green-500'
                          }`} />
                          <span className={`text-xs sm:text-sm leading-relaxed ${
                            plan.isRecommended ? 'text-white' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <button 
                      className={`btn w-full text-sm sm:text-base py-3 sm:py-3.5 px-4 touch-manipulation animate-button-pop ${
                        plan.isRecommended 
                          ? 'bg-white text-forest-600 hover:bg-cream-100' 
                          : plan.buttonClass
                      }`}
                    >
                      {plan.buttonText} 
                      {plan.buttonText.includes('Advisor') ? (
                        <MessageCircle className="ml-2 h-4 w-4 animate-icon-bounce" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4 animate-icon-bounce" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div 
            ref={cardsRef}
            className="lg:hidden relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out touch-manipulation"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {plans.map((plan) => (
                  <div key={plan.id} className="w-full flex-shrink-0 px-2">
                    <div 
                      className={`card h-full p-5 sm:p-6 ${
                        isVisible ? 'animate-slide-in-card' : 'opacity-0 translate-y-16 scale-95'
                      } ${plan.isRecommended 
                          ? 'bg-brown-800 text-white border-4 border-brown-900' 
                          : 'bg-white'
                      }`}
                    >
                      <div className="flex justify-center mb-4">
                        <span className={`px-4 py-2 rounded-full text-white text-sm font-semibold animate-badge-pop ${
                          plan.isRecommended ? 'bg-white text-brown-900' : plan.badgeColor
                        }`}>
                          {plan.isRecommended && plan.tagline ? plan.tagline : plan.badge}
                        </span>
                      </div>
                      <div className="relative mb-5">
                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={plan.image}
                            alt={plan.name}
                            className="w-full h-48 sm:h-56 object-cover animate-image-fade"
                          />
                        </div>
                      </div>
                      <div className="text-center mb-5">
                        <h3 className={`text-xl sm:text-2xl font-bold mb-3 animate-text-slide ${
                          plan.isRecommended ? 'text-white' : 'text-brown-700'
                        }`}>
                          {plan.name}
                        </h3>
                        <p className={`text-base sm:text-lg font-semibold mb-2 animate-text-slide ${
                          plan.isRecommended ? 'text-white' : 'text-gray-700'
                        }`} style={{ animationDelay: '0.1s' }}>
                          {plan.trees}
                        </p>
                        <p className={`text-sm sm:text-base mb-3 animate-text-slide ${
                          plan.isRecommended ? 'text-cream-100' : 'text-gray-600'
                        }`} style={{ animationDelay: '0.2s' }}>
                          {plan.investment}
                        </p>
                        <div className="flex justify-center gap-4 sm:gap-6 text-sm sm:text-base">
                          <span className={`font-semibold animate-text-slide ${
                            plan.isRecommended ? 'text-green-300' : 'text-green-600'
                          }`} style={{ animationDelay: '0.3s' }}>
                            {plan.annualYield} Annual Yield
                          </span>
                          <span className={`animate-text-slide ${
                            plan.isRecommended ? 'text-cream-200' : 'text-gray-500'
                          }`} style={{ animationDelay: '0.4s' }}>
                            {plan.term}
                          </span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start animate-text-slide" style={{ animationDelay: `${0.5 + featureIndex * 0.1}s` }}>
                              <Check className={`h-4 w-4 mr-3 mt-1 flex-shrink-0 animate-check-pop ${
                                plan.isRecommended ? 'text-green-300' : 'text-green-500'
                              }`} />
                              <span className={`text-sm sm:text-base leading-relaxed ${
                                plan.isRecommended ? 'text-white' : 'text-gray-600'
                              }`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <button 
                          className={`btn w-full text-base sm:text-lg py-4 px-6 touch-manipulation animate-button-pop ${
                            plan.isRecommended 
                              ? 'bg-white text-forest-600 hover:bg-cream-100' 
                              : plan.buttonClass
                          }`}
                        >
                          {plan.buttonText} 
                          {plan.buttonText.includes('Advisor') ? (
                            <MessageCircle className="ml-2 h-5 w-5 animate-icon-bounce" />
                          ) : (
                            <ArrowRight className="ml-2 h-5 w-5 animate-icon-bounce" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className={`hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation ${
                isVisible ? 'animate-nav-pop' : 'opacity-0'
              }`}
            >
              <ChevronLeft className="h-6 w-6 animate-icon-bounce" />
            </button>
            <button
              onClick={nextSlide}
              className={`hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation ${
                isVisible ? 'animate-nav-pop' : 'opacity-0'
              }`}
            >
              <ChevronRight className="h-6 w-6 animate-icon-bounce" />
            </button>
            <div 
              ref={navRef}
              className={`flex justify-center mt-6 space-x-2 ${
                isVisible ? 'animate-nav-slide' : 'opacity-0 translate-y-12'
              }`}
            >
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation animate-dot-pop ${
                    index === currentSlide 
                      ? 'bg-brown-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                />
              ))}
            </div>
            <div className="text-center mt-4 sm:hidden">
              <p className="text-xs text-gray-500 animate-text-slide" style={{ animationDelay: '0.9s' }}>
                Swipe left or right to explore plans
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideInHeader {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes slideInCard {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9) rotate(-2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes imageFade {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes textSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes checkPop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes buttonPop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes badgePop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.15);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes navPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes navSlide {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes dotPop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.3);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes iconBounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slide-in-header {
          animation: slideInHeader 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-in-card {
          animation: slideInCard 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-image-fade {
          animation: imageFade 1s ease-out forwards;
        }
        .animate-text-slide {
          animation: textSlide 0.8s ease-out forwards;
        }
        .animate-check-pop {
          animation: checkPop 0.6s ease-out forwards;
        }
        .animate-button-pop {
          animation: buttonPop 0.8s ease-out forwards;
        }
        .animate-badge-pop {
          animation: badgePop 0.7s ease-out forwards;
        }
        .animate-nav-pop {
          animation: navPop 0.6s ease-out forwards;
        }
        .animate-nav-slide {
          animation: navSlide 1s ease-out forwards;
        }
        .animate-dot-pop {
          animation: dotPop 0.6s ease-out forwards;
        }
        .animate-icon-bounce {
          animation: iconBounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InvestmentPlans;