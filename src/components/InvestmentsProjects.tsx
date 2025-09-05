import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent, ContentLoadingScreen } from '../contexts/ContentContext';

const InvestmentProjects: React.FC = () => {
  const { content, isLoading, error } = useContent();
  const sectionRef = useRef<HTMLElement | null>(null);

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

  // Convert projects object to array, add display properties, and limit to 3 projects
  const projectsArray = Object.values(projects)
    .map((project: any) => ({
      ...project,
      image: project.images[0],
      features: [
        "Lifetime Investment",
        project.status === "Available now" ? "Premium Arabica variety" : "High altitude benefits",
        project.status === "Available now" ? "Volcanic soil advantage" : "Proven yields",
      ],
      buttonColor: project.status === "Available now" ? "btn-secondary" : "btn-primary",
    }))
    .slice(0, 3); // Limit to a maximum of 3 projects

  // Ensure at least one project is available
  if (projectsArray.length === 0) {
    return null; // Optionally, you could return a fallback UI here
  }

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
      className="py-8 sm:py-12 md:py-16 bg-cream-50"
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-forest-600 mb-2 sm:mb-3">
            {projectsPage.projectsGrid.sectionTitle}
          </h2>
          <p className="animate-element element-hidden text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            {projectsPage.projectsGrid.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {projectsArray.map((project: any, index: number) => (
            <div
              key={project.id}
              className="card overflow-hidden animate-element element-hidden"
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
                  {project.features.map((feature: string, idx: number) => (
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
                  className={`animate-element element-hidden btn ${project.buttonColor} w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base inline-flex items-center justify-center touch-manipulation`}
                >
                  Explore more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProjects;