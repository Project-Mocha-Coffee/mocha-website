import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import type { TestimonialsData, Testimonial } from '../types/content';

const TestimonialsSection: React.FC = () => {
  const { content } = useContent();
  
  // Early return if content is not available
  if (!content) {
    return null;
  }
  
  const data = content.testimonials as TestimonialsData;
  const testimonials = data.testimonialsList;
  
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

 
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle window resize to reset carousel position
  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const slidesToShow = getSlidesToShow();
        const maxSlide = testimonials.length - slidesToShow;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to get number of slides to show based on screen size
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens - show 3 cards
      if (window.innerWidth >= 768) return 2;  // md screens - show 2 cards
      return 1; // sm screens - show 1 card
    }
    return 1;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const slidesToShow = getSlidesToShow();
      const maxSlide = testimonials.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const slidesToShow = getSlidesToShow();
      const maxSlide = testimonials.length - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const slidesToShow = getSlidesToShow();
    const maxSlide = testimonials.length - slidesToShow;
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="px-3 w-full flex">
      <div className="card bg-white hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-full">
      {/* Video Thumbnail */}
        <div className="relative flex-shrink-0">
        <img
          src={testimonial.thumbnail}
          alt={testimonial.name}
            className="w-full h-48 sm:h-56 lg:h-48 object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer touch-manipulation">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-gray-800 ml-1" />
          </div>
        </div>
        {/* Quote overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
            <p className="text-white italic leading-relaxed text-sm">
            "{testimonial.quote}"
          </p>
        </div>
      </div>

      {/* Content */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h4 className="text-brown-700 font-bold mb-2 line-clamp-2 text-sm lg:text-base">
          {testimonial.title}
        </h4>
          </div>
          <div className="space-y-1 mt-auto">
            <p className="text-gray-700 font-semibold text-sm">
            {testimonial.name}
          </p>
            <p className="text-gray-500 text-xs">
            {testimonial.location}
          </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section bg-forest-100">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              {data.sectionTitle}
            </h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl text-coffee-300 mb-6 sm:mb-8">
              {data.sectionSubtitle}
            </h3>
            <div className="flex justify-center lg:justify-end">
              <button className="btn bg-brown-700 text-white hover:bg-brown-800 border-brown-700 text-sm sm:text-base py-3 px-6 touch-manipulation">
                {data.viewMoreButton} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Unified Carousel for All Screen Sizes */}
          <div className="relative mb-8 sm:mb-12">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / getSlidesToShow())}%)` 
                }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 flex"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
                  </div>
                </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: testimonials.length - getSlidesToShow() + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
                    index === currentSlide 
                      ? 'bg-brown-600 w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="text-center mt-4 sm:hidden">
              <p className="text-xs text-white/70">
                {data.swipeHint}
                    </p>
                  </div>
          </div>

          {/* Bottom Section - Meet The People */}
          <div 
            className={`text-center transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="card-large bg-white p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div className="relative order-2 md:order-1">
                  <img
                    src={"https://res.cloudinary.com/ddainirdi/image/upload/v1751438591/Nairobi_Dream_VC---Mixer_57_ajwnhx.jpg"}
                    alt={data.meetThePeople.imageAlt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl sm:rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer touch-manipulation">
                    <div className="w-16 h-16 bg-forest-800 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs sm:text-sm italic">
                      "{data.meetThePeople.quote}"
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <h3 className="text-lg sm:text-xl text-brown-700 mb-1 sm:mb-2 font-bold">
                    {data.meetThePeople.title}
                  </h3>
                  <h4 className="text-base sm:text-lg text-brown-600 mb-3 sm:mb-4 font-semibold">
                    {data.meetThePeople.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                    {data.meetThePeople.description}
                  </p>
                  <button className="btn btn-primary text-sm sm:text-base py-3 px-6 touch-manipulation">
                    {data.meetThePeople.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 