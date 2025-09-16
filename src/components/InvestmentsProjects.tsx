import { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent, ContentLoadingScreen } from '../contexts/ContentContext';

const InvestmentProjects = () => {
  const { content, isLoading, error } = useContent();
  const sectionRef = useRef(null);

  // Show loading screen while content is being fetched
  if (isLoading || !content) {
    return <ContentLoadingScreen />;
  }

  // Show error state if content failed to load
  if (error) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="animate-element element-hidden text-2xl font-bold text-brown-700 mb-4">Failed to load content</h1>
          <p className="animate-element element-hidden text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="animate-element element-hidden btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm"
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

  // Convert projects object to array, add display properties
  const projectsArray = Object.values(projects).map((project) => ({
    ...project,
    image: project.images[0],
    features: [
      "Lifetime Investment",
      project.status === "Available now" ? "Premium Arabica variety" : "High altitude benefits",
      project.status === "Available now" ? "Volcanic soil advantage" : "Proven yields",
    ],
    buttonColor: project.status === "Available now" ? "btn-secondary" : "btn-primary",
  }));

  // Limit to 3 projects for display, unless it's a single project
  const displayProjects = projectsArray.slice(0, 3);

  // Scroll-based visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('element-visible');
                el.classList.remove('element-hidden');
              }, index * 100); // Staggered delay of 100ms per element
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="investment-projects"
      ref={sectionRef}
      className="py-0 sm:py-0 md:py-0 bg-cream-50"
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-forest-600 mb-2 sm:mb-3">
            {projectsPage.projectsGrid.sectionTitle}
          </h2>
          <p className="animate-element element-hidden text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            {projectsPage.projectsGrid.sectionDescription}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {displayProjects.length === 1 ? (
            // Magazine-style layout for single project
            <div className="animate-element element-hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Gainforest Section */}
                <div className="relative order-2 lg:order-1">
                  <div className="w-full h-48 sm:h-56 lg:h-full min-h-[300px] lg:min-h-[350px] rounded-2xl overflow-hidden">
                    <iframe
                      src="https://gainforest.app/080b9d6e7488da550a6488da0fdad1997ded06354d844a586ae57365d5840af7?overlay-active-tab=project&layers-historical-satellite-date=2020-10&project-site-id=83992c08-c4d9-425d-8342-6e94cf56c5d3&project-views=&search-q=pro"
                      title="Forest Project Location"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="geolocation; microphone; camera"
                    />
                  </div>
                  <div
                    className={`absolute top-3 right-3 ${displayProjects[0].statusColor} text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md`}
                  >
                    {displayProjects[0].status}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4 lg:pb-5 order-1 lg:order-2 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-brown-600 uppercase tracking-wide">
                      {displayProjects[0].fundName}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brown-800 mb-2 leading-tight">
                      {displayProjects[0].title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      {displayProjects[0].location}
                    </p>
                  </div>

                  {/* Project Description */}
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
                      {displayProjects[0].description}
                    </p>
                   {/*  {displayProjects[0].investmentDescription && (
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {displayProjects[0].investmentDescription}
                      </p>
                    )} */}
                  </div>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                    <div className="bg-cream-50 p-2 sm:p-3 rounded-md">
                      <div className="text-lg sm:text-xl font-bold text-brown-700">{displayProjects[0].pricePerTree}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Per Tree</div>
                    </div>
                    <div className="bg-cream-50 p-2 sm:p-3 rounded-md">
                      <div className="text-lg sm:text-xl font-bold text-brown-700">{displayProjects[0].roi}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Expected ROI</div>
                    </div>
                    <div className="bg-cream-50 p-2 sm:p-3 rounded-md">
                      <div className="text-lg sm:text-xl font-bold text-brown-700">{displayProjects[0].altitude}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Altitude</div>
                    </div>
                    <div className="bg-cream-50 p-2 sm:p-3 rounded-md">
                      <div className="text-lg sm:text-xl font-bold text-brown-700">{displayProjects[0].sunnyDays}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Sunny Days/Year</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {displayProjects[0].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-gray-700"
                      >
                        <Check className="w-3 h-3 text-brown-700 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Investment Details */}
                  <div className="bg-brown-50 p-2 sm:p-3 rounded-md mb-3">
                    <h4 className="font-semibold text-brown-800 mb-1 text-xs sm:text-sm">Investment Details</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Trees:</span>
                        <span className="font-medium text-brown-700">{displayProjects[0].totalTrees?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Available:</span>
                        <span className="font-medium text-brown-700">{displayProjects[0].treesAvailable?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plot Size:</span>
                        <span className="font-medium text-brown-700">{displayProjects[0].plotSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cycle:</span>
                        <span className="font-medium text-brown-700">{displayProjects[0].investmentCycle}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/projects/${displayProjects[0].id}`}
                      className="btn bg-[#7A5540] text-white hover:bg-[#5A3F2F] px-4 py-3 text-sm sm:text-base inline-flex items-center justify-center rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-md hover:shadow-lg flex-1"
                    >
                      Explore Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => window.open('https://portal-rho-lemon.vercel.app/', '_blank', 'noopener,noreferrer')}
                      className="btn bg-brown-600 text-white hover:bg-brown-700 px-4 py-3 text-sm sm:text-base inline-flex items-center justify-center rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-md hover:shadow-lg flex-1"
                    >
                      Invest Now <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Original card layout for multiple projects
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {displayProjects.map((project) => (
                <div
                  key={project.id}
                  className="card overflow-hidden animate-element element-hidden bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex-shrink-0 min-w-[280px] max-w-[320px]"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="animate-element element-hidden w-full h-48 sm:h-52 md:h-56 object-cover"
                    />
                    <div
                      className={`animate-element element-hidden absolute top-3 right-3 ${project.statusColor} text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="animate-element element-hidden text-base sm:text-lg md:text-xl font-bold text-brown-800 mb-2 sm:mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="animate-element element-hidden text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      {project.region}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm sm:text-base text-gray-700 animate-element element-hidden"
                        >
                          <Check className="w-4 h-4 text-brown-700 mr-2 sm:mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className={`animate-element element-hidden btn ${project.buttonColor} w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base inline-flex items-center justify-center touch-manipulation bg-[#7A5540] text-white hover:bg-[#5A3F2F] rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-md hover:shadow-lg`}
                    >
                      Explore more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {projectsArray.length > 2 && (
          <div className="text-center mt-4 sm:mt-6">
            <Link
              to="/farms"
              className="animate-element element-hidden btn w-full sm:w-auto text-sm sm:text-base px-6 py-3 bg-[#7A5540] text-white hover:bg-[#5A3F2F] rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 touch-manipulation shadow-md hover:shadow-lg"
            >
              View All Farms <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default InvestmentProjects;