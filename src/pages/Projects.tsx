import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent, ContentLoadingScreen } from '../contexts/ContentContext';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { content, isLoading, error } = useContent();
  
  // Show loading screen while content is being fetched
  if (isLoading || !content) {
    return <ContentLoadingScreen />;
  }

  // Show error state if content failed to load
  if (error) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brown-700 mb-4">Failed to load content</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  const { projectsPage, projects } = content;
  
  // Only proceed if we have the necessary data
  if (!projectsPage || !projects) {
    return <ContentLoadingScreen />;
  }

  const coffeeFacts = projectsPage.coffeeFacts.facts;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll functionality for mobile coffee facts carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentSlide((prev) => (prev + 1) % coffeeFacts.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [coffeeFacts.length]);

  // Convert projects object to array and add display properties
  const projectsArray = Object.values(projects).map((project: any) => ({
    ...project,
    image: project.images[0],
    features: [
      "Lifetime Investment", 
      project.status === "Available now" ? "Premium Arabica variety" : "High altitude benefits",
      project.status === "Available now" ? "Volcanic soil advantage" : "Proven yields"
    ],
    buttonColor: project.status === "Available now" ? "btn-secondary" : "btn-primary"
  }));

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
            backgroundImage: `url('${projectsPage.hero.backgroundImage}')`,
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
                  {projectsPage.hero.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-cream-100 max-w-3xl leading-relaxed">
                  {projectsPage.hero.description}
                </p>
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {projectsPage.hero.buttons.map((button: any, index: number) => (
                  <button 
                    key={index}
                    className={`${button.type === 'primary' ? 'btn btn-gold' : 'btn btn-secondary'} w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 touch-manipulation`}
                  >
                    {button.text} <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                ))}
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-base sm:text-lg">
                  {projectsPage.hero.callToAction}
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
              {projectsPage.projectsGrid.sectionTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              {projectsPage.projectsGrid.sectionDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {projectsArray.map((project: any, index: number) => (
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
                    {project.region}
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    {project.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                        <Check className="w-4 h-4 text-brown-700 mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/projects/${project.id}`} 
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
              {projectsPage.coffeeFacts.sectionTitle}
            </h2>
            <p className="text-cream-100 text-sm sm:text-base max-w-2xl mx-auto">
              {projectsPage.coffeeFacts.sectionDescription}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8">
              {/* Desktop Layout */}
              <div className="hidden md:grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="inline-block bg-coffee-600 text-forest-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {projectsPage.coffeeFacts.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-coffee-600 mb-3 sm:mb-4 font-semibold leading-tight">
                    {coffeeFacts[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {coffeeFacts[currentSlide].description}
                  </p>
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    <div className="text-xs sm:text-sm text-gray-500">
                      {currentSlide + 1} / {coffeeFacts.length}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button 
                      onClick={prevSlide}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <span className="text-brown-800 font-medium text-sm sm:text-base">
                      Navigate facts
                    </span>
                    <button 
                      onClick={nextSlide}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
                    {coffeeFacts.map((fact: any, index: number) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="space-y-4 sm:space-y-5">
                          <div className="relative">
                            <img
                              src={fact.image}
                              alt="Coffee plantation investment benefits"
                              className="w-full h-48 sm:h-56 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                            />
                          </div>

                          <div>
                            <div className="inline-block bg-coffee-600 text-forest-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                              {projectsPage.coffeeFacts.badge}
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
                <div className="flex justify-center mt-6 space-x-2">
                  {coffeeFacts.map((_: any, index: number) => (
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
              {projectsPage.waitlist.sectionTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              {projectsPage.waitlist.sectionDescription}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="relative order-2 lg:order-1">
                  <img
                    src={projectsPage.waitlist.image}
                    alt={projectsPage.waitlist.imageAlt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                    Join The <span className="text-coffee-600">Waitlist</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {projectsPage.waitlist.cardDescription}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder={projectsPage.waitlist.emailPlaceholder}
                      className="flex-1 px-4 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-300 rounded-l-xl sm:rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-coffee-600 focus:border-transparent"
                    />
                    <button className="btn bg-coffee-600 text-white hover:bg-coffee-700 px-6 py-3 sm:py-4 text-sm sm:text-base rounded-r-xl sm:rounded-r-2xl touch-manipulation">
                      {projectsPage.waitlist.subscribeButton.text}
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