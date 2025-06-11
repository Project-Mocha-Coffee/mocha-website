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

  const projects = [
    {
      id: 1,
      slug: "nyeri-highland-2024",
      title: "Nyeri Highland Coffee Farm 2024",
      location: "Located in Kenya's premier coffee highlands",
      status: "Available",
      statusColor: "bg-forest-600",
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

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="min-h-screen gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom h-screen flex items-center">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div 
                className={`transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-bold leading-tight">
                  Explore Our<br />
                  Projects
                </h1>
                <p className="text-base md:text-lg text-cream-100 max-w-3xl leading-relaxed mb-6">
                  Explore our active and sold-out projects - building wealth through sustainable Kenyan highland 
                  coffee plantations and premium Arabica cultivation.
                </p>
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-3 mb-8 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <button className="btn btn-gold">
                  Free strategy session <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="btn btn-secondary">
                  Make long-term profits <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-base">
                  Talk to our advisor and get to know everything you need for a secure investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="min-h-screen py-16 md:py-20 bg-cream-50 flex items-center">
        <div className="container-custom w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-2">
              Our Investment Projects
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Explore our current and completed coffee plantation projects across Kenya's premier highland regions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    className="w-full h-56 object-cover"
                  />
                  <div className={`absolute top-3 right-3 ${project.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-bold text-coffee-600 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    {project.location}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-forest-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/projects/${project.slug}`} className={`btn ${project.buttonColor} w-full px-4 py-2 text-sm inline-flex items-center justify-center`}>
                    Explore more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walnut Demand Section */}
      <section className="min-h-screen py-16 md:py-20 bg-forest-600 flex items-center">
        <div className="container-custom w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Why Invest In Coffee?
            </h2>
            <p className="text-cream-100 text-sm max-w-2xl mx-auto">
              Discover the compelling reasons behind Kenyan highland coffee plantation investments
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 md:p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="inline-block bg-forest-100 text-forest-600 px-2 py-1 rounded-full text-xs font-medium mb-3">
                    Continuous growth
                  </div>
                  <h3 className="text-lg md:text-xl text-coffee-600 mb-3 font-semibold leading-tight">
                    {coffeeFacts[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {coffeeFacts[currentSlide].description}
                  </p>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={prevSlide}
                      className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors"
                    >
                      <ChevronLeft className="w-3 h-3" />
                    </button>
                    <span className="text-coffee-600 font-medium text-sm">
                      {currentSlide + 1} / {coffeeFacts.length}
                    </span>
                    <button 
                      onClick={nextSlide}
                      className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={coffeeFacts[currentSlide].image}
                    alt="Coffee"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="min-h-screen py-16 md:py-20 bg-cream-100 flex items-center">
        <div className="container-custom w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-2">
              Stay Updated
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Be the first to know about new Kenyan highland coffee investment opportunities
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 md:p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Kenyan coffee cherries growing in highland plantation"
                    className="w-full h-56 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Join The <span className="text-coffee-600">Waitlist</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our waitlist and receive updates on upcoming Kenyan highland coffee plantation projects and exclusive early 
                    access to invest in sustainable, profitable Arabica coffee farming. Be part of Kenya's coffee heritage 
                    and the future of premium coffee investment with Project Mocha.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600 focus:border-transparent text-sm"
                    />
                    <button className="btn bg-coffee-600 text-white hover:bg-coffee-700 px-4 py-2 text-sm rounded-lg">
                      Subscribe <ArrowRight className="ml-1 h-3 w-3" />
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