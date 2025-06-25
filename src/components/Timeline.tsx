import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineStage {
  stage?: string;
  timeline?: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  status?: 'completed' | 'coming-soon';
}

interface TimelineProps {
  stages: TimelineStage[];
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  showCurvedConnectors?: boolean;
  autoScroll?: boolean;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  stages,
  title,
  subtitle,
  backgroundColor = 'bg-forest-200',
  textColor = 'text-white',
  accentColor = 'bg-gold-400',
  showCurvedConnectors = true,
  autoScroll = true,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      if (window.innerWidth < 768) { // Only auto-scroll on mobile
        setCurrentSlide((prev) => (prev + 1) % stages.length);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [stages.length, autoScroll]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stages.length) % stages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getStatusBadge = (stage: TimelineStage) => {
    if (stage.status) {
      return stage.status === 'completed' 
        ? { text: 'Completed', class: 'bg-green-100 text-green-700' }
        : { text: 'Coming soon', class: 'bg-amber-100 text-amber-700' };
    }
    return { text: stage.badge, class: 'bg-brown-700 text-forest-600' };
  };

  return (
    <section className={`py-8 sm:py-12 md:py-16 ${backgroundColor} ${className}`}>
      <div className="container-custom px-4 sm:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-6 sm:mb-8">
            {title && (
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor} mb-2 sm:mb-3`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-cream-100 text-sm sm:text-base max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="space-y-8 sm:space-y-12">
              {stages.map((stage, index) => {
                const badge = getStatusBadge(stage);
                
                return (
                  <div key={index} className="relative">
                    {/* Curved Connector Line */}
                    {showCurvedConnectors && index < stages.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-0">
                        <svg 
                          width="300" 
                          height="80" 
                          viewBox="0 0 300 80" 
                          className="overflow-visible"
                        >
                          <path
                            d={index % 2 === 0 
                              ? "M150 0 Q50 40 150 80" 
                              : "M150 0 Q250 40 150 80"
                            }
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Straight Connector Line (fallback) */}
                    {!showCurvedConnectors && index < stages.length - 1 && (
                      <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-0.5 h-8 bg-white/30"></div>
                    )}
                    
                    {/* Timeline Node */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 ${accentColor} rounded-full flex items-center justify-center z-20 ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Card */}
                    <div className={`card bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative z-10 ${
                      index % 2 === 1 ? 'md:mr-auto md:ml-0 md:w-[55%]' 
                        : 'md:ml-auto md:mr-0 md:w-[55%]'
                    }`}>
                      <div className={`grid md:grid-cols-5 gap-4 items-center ${
                        index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                      }`}>
                        <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:col-start-3' : ''}`}>
                          <div className={`inline-block ${badge.class} px-3 py-1.5 rounded-full text-xs font-medium mb-2 sm:mb-3`}>
                            {badge.text}
                </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-coffee-600 mb-2 sm:mb-3">
                            {stage.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                            {stage.description}
                          </p>
                </div>
                        <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                          <img
                            src={stage.image}
                            alt={stage.title}
                            className="w-full h-32 sm:h-36 md:h-32 object-cover rounded-xl"
                          />
                </div>
              </div>
            </div>
          </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out touch-manipulation"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {stages.map((stage, index) => {
                  const badge = getStatusBadge(stage);
                  
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="card bg-white rounded-2xl p-5 sm:p-6">
                        {/* Badge */}
                        <div className="text-center mb-4">
                          <span className={`inline-block ${badge.class} px-4 py-2 rounded-full text-sm font-medium`}>
                            {badge.text}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="relative mb-5">
                          <img
                            src={stage.image}
                            alt={stage.title}
                            className="w-full h-48 sm:h-56 object-cover rounded-xl"
                          />
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-lg sm:text-xl font-bold text-coffee-600 mb-3">
                            {stage.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {stage.description}
                          </p>
                </div>
                </div>
                </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {stages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;