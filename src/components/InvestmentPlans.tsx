import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { ContentData } from '../types/content';

const InvestmentPlans: React.FC = () => {
  const { content } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Configurable booking URL 
  const BOOKING_URL = "https://forms.gle/2Nv1M9KusmZPWn6X8";

  // Early return if content is not available
  if (!content) {
    return null;
  }

  const sectionData = content.investmentPlans;
  const plans = sectionData.plans;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  // Auto-scroll functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024 && !isDragging) { // Only auto-scroll on mobile/tablet when not dragging
        setCurrentSlide((prev) => (prev + 1) % plans.length);
      }
    }, 10000); 

    return () => clearInterval(interval);
  }, [isDragging, plans.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    setTouchStartX(0);
    setTouchEndX(0);
    setIsDragging(false);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-cream-50">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">
              {sectionData.sectionTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-1 sm:mb-2">
              {sectionData.sectionDescription[0]}
            </p>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
              {sectionData.sectionDescription[1]}
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6">
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
                  className={`card h-full p-4 sm:p-5 md:p-6 ${
                    plan.isRecommended 
                      ? 'bg-brown-800 text-white border-4 border-brown-900 transform lg:scale-105' 
                      : 'bg-white hover:shadow-xl'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex justify-center mb-3">
                    <span className={`px-3 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold ${
                      plan.isRecommended ? 'bg-brown-700 text-white' : plan.badgeColor
                    }`}>
                      {plan.isRecommended && plan.tagline ? plan.tagline : plan.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative mb-4">
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-36 sm:h-40 md:h-32 object-cover"
                      />
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="text-center mb-4 sm:mb-5">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                      plan.isRecommended ? 'text-white' : 'text-brown-700'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm sm:text-base font-semibold mb-1 ${
                      plan.isRecommended ? 'text-white' : 'text-gray-700'
                    }`}>
                      {plan.trees}
                    </p>
                    <p className={`text-xs sm:text-sm mb-2 ${
                      plan.isRecommended ? 'text-cream-100' : 'text-gray-600'
                    }`}>
                      {plan.investment}
                    </p>
                    <div className="flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
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
                  <div className="mb-5 sm:mb-6">
                    <ul className="space-y-2 sm:space-y-2.5">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`h-3 w-3 sm:h-4 sm:w-4 mr-2 mt-0.5 flex-shrink-0 ${
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

                  {/* Button */}
                  <div className="mt-auto">
                    <button 
                      onClick={handleButtonClick}
                      className={`btn w-full text-sm sm:text-base py-3 sm:py-3.5 px-4 touch-manipulation ${
                        plan.isRecommended 
                          ? 'bg-white text-forest-600 hover:bg-cream-100' 
                          : plan.buttonType === 'primary' ? 'btn-primary' : 'btn-secondary'
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

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className={`flex transition-transform duration-500 ease-in-out ${
                  isDragging ? 'transition-none' : ''
                }`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {plans.map((plan, index) => (
                  <div key={plan.id} className="w-full flex-shrink-0 px-2">
                    <div 
                      className={`card h-full p-5 sm:p-6 select-none ${
                        plan.isRecommended 
                          ? 'bg-brown-800 text-white border-4 border-brown-900' 
                          : 'bg-white'
                      }`}
                    >
                      {/* Badge */}
                      <div className="flex justify-center mb-4">
                        <span className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
                          plan.isRecommended ? 'bg-white text-brown-900' : plan.badgeColor
                        }`}>
                          {plan.isRecommended && plan.tagline ? plan.tagline : plan.badge}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative mb-5">
                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={plan.image}
                            alt={plan.name}
                            className="w-full h-48 sm:h-56 object-cover"
                            draggable={false}
                          />
                        </div>
                      </div>

                      {/* Plan Details */}
                      <div className="text-center mb-5">
                        <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                          plan.isRecommended ? 'text-white' : 'text-brown-700'
                        }`}>
                          {plan.name}
                        </h3>
                        <p className={`text-base sm:text-lg font-semibold mb-2 ${
                          plan.isRecommended ? 'text-white' : 'text-gray-700'
                        }`}>
                          {plan.trees}
                        </p>
                        <p className={`text-sm sm:text-base mb-3 ${
                          plan.isRecommended ? 'text-cream-100' : 'text-gray-600'
                        }`}>
                          {plan.investment}
                        </p>
                        <div className="flex justify-center gap-4 sm:gap-6 text-sm sm:text-base">
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
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className={`h-4 w-4 mr-3 mt-1 flex-shrink-0 ${
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

                      {/* Button */}
                      <div className="mt-auto">
                        <button 
                          onClick={handleButtonClick}
                          className={`btn w-full text-base sm:text-lg py-4 px-6 touch-manipulation ${
                            plan.isRecommended 
                              ? 'bg-white text-forest-600 hover:bg-cream-100' 
                              : plan.buttonType === 'primary' ? 'btn-primary' : 'btn-secondary'
                          }`}
                        >
                          {plan.buttonText} 
                          {plan.buttonText.includes('Advisor') ? (
                            <MessageCircle className="ml-2 h-5 w-5" />
                          ) : (
                            <ArrowRight className="ml-2 h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Hidden on small mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
                    index === currentSlide 
                      ? 'bg-brown-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="text-center mt-4 sm:hidden">
              <p className="text-xs text-gray-500">
                {sectionData.mobileSwipeHint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans; 