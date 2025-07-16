import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import type { WhyJoinData, WhyJoinSlide } from '../types/content';

const WhyJoinCarousel: React.FC = () => {
  const { content } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  // Don't render if content is not available
  if (!content?.whyJoin) {
    return null;
  }

  const data = content.whyJoin as WhyJoinData;
  const whyJoinData = data.slides;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const changeSlide = (newSlide: number, direction: 'left' | 'right') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setSlideDirection(direction);
    
    // Wait for exit animation, then change slide
    setTimeout(() => {
      setCurrentSlide(newSlide);
      // Reset transition state after enter animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 250);
    }, 150);
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % whyJoinData.length;
    changeSlide(newSlide, 'right');
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + whyJoinData.length) % whyJoinData.length;
    changeSlide(newSlide, 'left');
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    const direction = index > currentSlide ? 'right' : 'left';
    changeSlide(index, direction);
  };

  const currentData = whyJoinData[currentSlide];

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-cream-100">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-forest-600 mb-1 sm:mb-2 font-bold">
              {data.sectionTitle}
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-coffee-600 mb-4 sm:mb-6 font-semibold">
              {data.sectionSubtitle}
            </h3>
          </div>

          <div className="relative px-6 sm:px-8 md:px-12 lg:px-16">
            {/* Navigation arrows - hidden on mobile, shown on desktop */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main slide container with overflow hidden for smooth animations */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <div 
                className={`card-large p-4 sm:p-6 md:p-8 transition-all duration-300 ease-in-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${
                  isTransitioning 
                    ? slideDirection === 'right' 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
                  <div className={`order-2 md:order-1 text-center md:text-left transition-all duration-250 delay-50 ${
                    isTransitioning 
                      ? 'translate-y-4 opacity-0' 
                      : 'translate-y-0 opacity-100'
                  }`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-forest-600 mb-1 font-bold leading-tight">
                      {currentData.title}
                    </h3>
                    <h4 className="text-base sm:text-lg md:text-xl text-coffee-600 mb-3 sm:mb-4 font-semibold leading-tight">
                      {currentData.subtitle}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {currentData.description}
                    </p>
                  </div>
                  <div className={`order-1 md:order-2 transition-all duration-250 delay-100 ${
                    isTransitioning 
                      ? slideDirection === 'right'
                        ? 'translate-x-8 opacity-0'
                        : '-translate-x-8 opacity-0'
                      : 'translate-x-0 opacity-100'
                  }`}>
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-250 hover:scale-105">
                      <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-350"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile navigation - below the card on smaller screens */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-4 md:hidden">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors shadow-lg disabled:opacity-50 touch-manipulation"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors shadow-lg disabled:opacity-50 touch-manipulation"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {whyJoinData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-8 sm:w-10 h-1.5 rounded-full transition-all duration-300 disabled:cursor-not-allowed touch-manipulation ${
                  index === currentSlide
                    ? 'bg-coffee-600 scale-110'
                    : 'bg-coffee-200 hover:bg-coffee-400 hover:scale-105'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinCarousel; 