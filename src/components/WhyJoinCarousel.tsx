import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const whyJoinData = [
  {
    title: "20% Average Expected",
    subtitle: "Annual Returns",
    description: "Your wealth grows with your trees: with 20% historical annual returns, this investment truly bears fruit.",
    image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
  },
  {
    title: "An Investment You Can",
    subtitle: "See, Touch, Smell, And Taste",
    description: "Unlike traditional investments you often don't understand, this one is simple: plant trees, grow fruit and sell the harvest.",
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
  },
  {
    title: "Sustainable Agriculture",
    subtitle: "For Future Generations",
    description: "Support eco-friendly farming practices while building wealth for yourself and preserving the environment.",
    image: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
  }
];

const WhyJoinCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

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
    <section className="py-8 md:py-10 bg-cream-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-forest-600 mb-2 font-bold">
              Why Join
            </h2>
            <h3 className="text-lg md:text-xl text-coffee-600 mb-6 font-semibold">
              Project Mocha?
            </h3>
          </div>

          <div className="relative px-12 md:px-16">
            {/* Navigation arrows - positioned outside the card */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main slide container with overflow hidden for smooth animations */}
            <div className="overflow-hidden rounded-3xl">
              <div 
                className={`card-large p-6 md:p-8 transition-all duration-300 ease-in-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${
                  isTransitioning 
                    ? slideDirection === 'right' 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className={`order-2 md:order-1 transition-all duration-250 delay-50 ${
                    isTransitioning 
                      ? 'translate-y-4 opacity-0' 
                      : 'translate-y-0 opacity-100'
                  }`}>
                    <h3 className="text-xl md:text-2xl text-forest-600 mb-1 font-bold">
                      {currentData.title}
                    </h3>
                    <h4 className="text-lg md:text-xl text-coffee-600 mb-4 font-semibold">
                      {currentData.subtitle}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
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
                    <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-250 hover:scale-105">
                      <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="w-full h-64 object-cover transition-transform duration-350"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile navigation - below the card on smaller screens */}
            <div className="flex justify-center mt-3 space-x-3 md:hidden">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-8 h-8 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors shadow-lg disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-8 h-8 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors shadow-lg disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {whyJoinData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-10 h-1.5 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
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