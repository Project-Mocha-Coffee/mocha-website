import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import contentData from '../data/content.json';
import type { TestimonialsData, Testimonial } from '../types/content';

const TestimonialsSection: React.FC = () => {
  const data = contentData.testimonials as TestimonialsData;
  const testimonials = data.testimonialsList;
  
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const People = [
    {
      id: 1,
      name: "Samuel Mwangi",
      role: "Head Grower & Agricultural Expert",
      initials: "SM",
      image: "https://images.pexels.com/photos/1438681/pexels-photo-1438681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Nyeri County, Kenya",
      experience: "25+ years",
      bio: "Samuel leads our agricultural operations with over 25 years of experience in highland coffee cultivation. He specializes in sustainable farming practices and has helped establish some of Kenya's most successful coffee plantations.",
      expertise: ["Sustainable Agriculture", "Highland Coffee Cultivation", "Soil Management", "Organic Certification"],
      achievements: "Transformed over 10,000 acres into productive coffee farms"
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      role: "Coffee Quality Manager",
      initials: "GW",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Kiambu County, Kenya",
      experience: "15+ years",
      bio: "Grace ensures every coffee bean meets our premium standards. She oversees quality control from harvesting to processing, maintaining the exceptional standards that make our coffee sought after globally.",
      expertise: ["Coffee Cupping", "Quality Assurance", "Processing Techniques", "Export Standards"],
      achievements: "Led quality certification for over 50 coffee cooperatives"
    },
    {
      id: 3,
      name: "David Kinyua",
      role: "Co-Founder & CEO",
      initials: "DK",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Nairobi, Kenya",
      experience: "20+ years",
      bio: "David co-founded Project Mocha with a vision to democratize coffee investment while supporting local communities. He brings extensive experience in sustainable agriculture and impact investing.",
      expertise: ["Impact Investing", "Sustainable Agriculture", "Community Development", "Strategic Planning"],
      achievements: "Raised over $10M for sustainable agriculture projects across East Africa"
    },
    {
      id: 4,
      name: "Maria Gonzalez",
      role: "Head of Investor Relations",
      initials: "MG",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Madrid, Spain",
      experience: "12+ years",
      bio: "Maria manages relationships with our global investor community. She ensures transparent communication and provides comprehensive support to help investors understand their coffee investment journey.",
      expertise: ["Investor Relations", "Financial Planning", "International Markets", "Customer Success"],
      achievements: "Successfully onboarded over 1,250 investors from 45 countries"
    },
    {
      id: 5,
      name: "James Ochieng",
      role: "Sustainability Director",
      initials: "JO",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Muranga County, Kenya",
      experience: "18+ years",
      bio: "James leads our environmental and social impact initiatives. He works closely with local communities to ensure our farming practices benefit both the environment and the people who depend on it.",
      expertise: ["Environmental Conservation", "Community Development", "Water Management", "Biodiversity Protection"],
      achievements: "Established 5+ water conservation systems serving 500+ farming families"
    },
    {
      id: 6,
      name: "Sarah Chen",
      role: "Technology & Innovation Lead",
      initials: "SC",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Singapore",
      experience: "10+ years",
      bio: "Sarah integrates cutting-edge technology into our farming operations. She develops IoT solutions for farm management and works on blockchain technology for supply chain transparency.",
      expertise: ["IoT Systems", "Blockchain Technology", "Data Analytics", "Smart Agriculture"],
      achievements: "Deployed IoT sensors across 2,000+ coffee trees for optimal growth monitoring"
    },
    {
      id: 7,
      name: "Peter Kamau",
      role: "Farm Operations Manager",
      initials: "PK",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "Embu County, Kenya",
      experience: "22+ years",
      bio: "Peter oversees day-to-day farm operations across all our plantation sites. His hands-on approach and deep understanding of coffee cultivation ensure optimal growing conditions for premium bean production.",
      expertise: ["Farm Management", "Harvest Planning", "Equipment Maintenance", "Team Leadership"],
      achievements: "Managed successful harvests from over 25,000 coffee trees annually"
    },
    {
      id: 8,
      name: "Lisa Thompson",
      role: "Financial Controller",
      initials: "LT",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      location: "London, UK",
      experience: "14+ years",
      bio: "Lisa manages our financial operations and ensures transparent reporting to all stakeholders. She oversees investor returns, operational budgets, and maintains the financial health of all our projects.",
      expertise: ["Financial Management", "Investment Analysis", "Risk Assessment", "Regulatory Compliance"],
      achievements: "Maintained 98% on-time payout record to over 1,250 investors"
    }
  ]

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