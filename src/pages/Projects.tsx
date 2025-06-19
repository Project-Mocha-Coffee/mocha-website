import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll functionality for mobile coffee facts carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) { // Only auto-scroll on mobile
        setCurrentSlide((prev) => (prev + 1) % coffeeFacts.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      slug: "nyeri-highland-2024",
      title: "Nyeri Highland Coffee Farm 2024",
      location: "Located in Kenya's premier coffee highlands",
      status: "Available",
      statusColor: "bg-brown-800",
      image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Lifetime Investment", "Premium Arabica variety", "Volcanic soil advantage"],
      buttonColor: "btn-secondary"
    },
    {
      id: 2,
      slug: "kiambu-highlands-2023",
      title: "Kiambu Highlands 2023/24",
      location: "Kiambu County, Central Kenya",
      status: "Sold out",
      statusColor: "bg-amber-600",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Lifetime Investment", "High altitude benefits", "Proven yields"],
      buttonColor: "btn-primary"
    },
    {
      id: 3,
      slug: "muranga-plantation-2022",
      title: "Muranga Plantation 2022",
      location: "Muranga County, Kenya",
      status: "Sold out",
      statusColor: "bg-amber-600",
      image: "https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Lifetime Investment", "Award-winning beans", "Cooperative farming"],
      buttonColor: "btn-primary"
    }
  ];

  const coffeeFacts = [
    {
      title: "Historically, Coffee Has Always Been In High Demand And Short Supply",
      description: "With coffee demand growing yearly and a stable supply, the market price of coffee is very consistent, making it an ideal long-term investment opportunity.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Coffee Trees Are Long-Term Investment Assets",
      description: "Coffee trees can produce beans for over 30 years, providing steady returns throughout their productive lifetime with peak yields after 5-7 years.",
      image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Premium Quality Kenyan Arabica Coffee",
      description: "Our Kenyan highland plantations produce world-renowned Arabica beans with bright acidity and wine-like flavors, commanding premium prices in global specialty markets.",
      image: "https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Sustainable Highland Farming Practices",
      description: "We employ eco-friendly farming methods in Kenya's highlands that ensure long-term volcanic soil health, sustainable production, and environmental stewardship alongside local communities.",
      image: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Growing Global Coffee Consumption",
      description: "Coffee consumption continues to rise globally, with specialty coffee driving premium pricing and consistent demand for quality beans.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Proven Kenyan Coffee Investment Returns",
      description: "Our existing Kenyan highland coffee plantations have consistently delivered strong returns to investors, with transparent profit-sharing, regular updates, and direct farmer partnerships.",
      image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coffeeFacts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coffeeFacts.length) % coffeeFacts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center px-4 sm:px-6">
          <div className="max-w-6xl mx-auto w-full py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              <div 
                className={`transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 md:mb-8 font-bold leading-tight">
                  Explore Our<br />
                  Projects
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-cream-100 max-w-3xl leading-relaxed">
                  Explore our active and sold-out projects - building wealth through sustainable Kenyan highland 
                  coffee plantations and premium Arabica cultivation.
                </p>
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <button className="btn btn-gold w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 touch-manipulation">
                  Free strategy session <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button className="btn btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 touch-manipulation">
                  Make long-term profits <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-base sm:text-lg">
                  Talk to our advisor and get to know everything you need for a secure investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-forest-600 mb-2 sm:mb-3">
              Our Investment Projects
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our current and completed coffee plantation projects across Kenya's premier highland regions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`card overflow-hidden transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover"
                  />
                  <div className={`absolute top-3 right-3 ${project.statusColor} text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-brown-800 mb-2 sm:mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    {project.location}
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                        <Check className="w-4 h-4 text-brown-700 mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/projects/${project.slug}`} 
                    className={`btn ${project.buttonColor} w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base inline-flex items-center justify-center touch-manipulation`}
                  >
                    Explore more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Facts Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-forest-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
              Why Invest In Coffee?
            </h2>
            <p className="text-cream-100 text-sm sm:text-base max-w-2xl mx-auto">
              Discover the compelling reasons behind Kenyan highland coffee plantation investments
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8">
              {/* Desktop Layout */}
              <div className="hidden md:grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="inline-block bg-coffee-600 text-forest-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    Continuous growth
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-coffee-600 mb-3 sm:mb-4 font-semibold leading-tight">
                    {coffeeFacts[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {coffeeFacts[currentSlide].description}
                  </p>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors touch-manipulation"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-coffee-600 font-medium text-sm sm:text-base">
                      {currentSlide + 1} / {coffeeFacts.length}
                    </span>
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors touch-manipulation"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={coffeeFacts[currentSlide].image}
                    alt="Coffee plantation investment benefits"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Mobile Carousel Layout */}
              <div className="md:hidden">
                <div className="relative overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out touch-manipulation"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {coffeeFacts.map((fact, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="space-y-4 sm:space-y-5">
                          {/* Image */}
                          <div className="relative">
                            <img
                              src={fact.image}
                              alt="Coffee plantation investment benefits"
                              className="w-full h-48 sm:h-56 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                            />
                          </div>

                          {/* Content */}
                          <div>
                            <div className="inline-block bg-coffee-600 text-forest-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                              Continuous growth
                            </div>
                            <h3 className="text-lg sm:text-xl text-coffee-600 mb-3 font-semibold leading-tight">
                              {fact.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              {fact.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button 
                    onClick={prevSlide}
                    className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors touch-manipulation"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-coffee-600 font-medium text-sm">
                    {currentSlide + 1} / {coffeeFacts.length}
                  </span>
                  <button 
                    onClick={nextSlide}
                    className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors touch-manipulation"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {coffeeFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 touch-manipulation ${
                        index === currentSlide 
                          ? 'bg-coffee-600 w-6 sm:w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-forest-600 mb-2 sm:mb-3">
              Stay Updated
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Be the first to know about new Kenyan highland coffee investment opportunities
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="relative order-2 lg:order-1">
                  <img
                    src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Kenyan coffee cherries growing in highland plantation"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                    Join The <span className="text-coffee-600">Waitlist</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    Join our waitlist and receive updates on upcoming Kenyan highland coffee plantation projects and exclusive early 
                    access to invest in sustainable, profitable Arabica coffee farming. Be part of Kenya's coffee heritage 
                    and the future of premium coffee investment with Project Mocha.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600 focus:border-transparent text-sm sm:text-base touch-manipulation"
                    />
                    <button className="btn bg-coffee-600 text-white hover:bg-coffee-700 px-6 py-3 text-sm sm:text-base rounded-lg touch-manipulation">
                      Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 