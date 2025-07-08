import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Check, Play, MapPin, Calendar, TrendingUp, Plus, Minus } from 'lucide-react';
import Timeline from '../components/Timeline';
import { useContent, ContentLoadingScreen } from '../contexts/ContentContext';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { content, isLoading, error } = useContent();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  // Get data from async loaded content
  const { projectDetailPage, projects } = content;
  
  // Only proceed if we have the necessary data
  if (!projectDetailPage || !projects) {
    return <ContentLoadingScreen />;
  }

  const project = projectId ? projects[projectId] : null;

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brown-700 mb-4">{projectDetailPage.notFound.title}</h1>
          <p className="text-gray-600 mb-4">{projectDetailPage.notFound.message}</p>
        <Link to="/projects" className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm">
            {projectDetailPage.notFound.backButton} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="min-h-screen gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('${projectDetailPage.hero.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Project info */}
              <div>
                <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.fundName} {projectDetailPage.hero.badge}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-bold leading-tight">
                  {project.title.split(' ')[0]}<br />
                  {project.title.split(' ').slice(1).join(' ')}
                </h1>
                
                <p className="text-base md:text-lg text-cream-100 max-w-3xl leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  {projectDetailPage.hero.buttons.map((button: any, index: number) => (
                    <button key={index} className={`${button.type === 'primary' ? 'btn bg-amber-500 text-forest-600 hover:bg-amber-400' : 'btn btn-secondary'} px-4 py-2 text-sm`}>
                      {button.text} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  ))}
                </div>

                <p className="text-cream-200 italic text-sm">
                  {projectDetailPage.hero.callToAction}
                </p>
              </div>

              {/* Right side - Investment card */}
              <div className="lg:ml-auto">
                <div className="card bg-white rounded-3xl p-6 max-w-md">
                  <div className="bg-brown-800 text-white rounded-2xl p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">{projectDetailPage.investmentCard.title}</h3>
                    <div className={`inline-block ${project.statusColor} text-white px-3 py-1 rounded-full text-sm mb-2`}>
                      {project.status}
                    </div>
                    <p className="text-cream-100 text-sm">
                      {projectDetailPage.investmentCard.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <span className="text-amber-600 text-2xl font-bold mr-2">{project.treesAvailable}</span>
                      <span className="text-gray-600 text-sm">{projectDetailPage.investmentCard.treesLabel}</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-white text-xs">€</span>
                        </div>
                        <span className="text-gray-600">{projectDetailPage.investmentCard.priceLabel}</span>
                        <span className="font-medium">{project.pricePerTree}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full mr-2 flex items-center justify-center">
                          <TrendingUp className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-gray-600">{projectDetailPage.investmentCard.roiLabel}</span>
                        <span className="font-medium">{project.roi}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full mr-2 flex items-center justify-center">
                          <Calendar className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-gray-600">{projectDetailPage.investmentCard.cycleLabel}</span>
                        <span className="font-medium">{project.investmentCycle}</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn bg-forest-600 text-white hover:bg-forest-700 w-full px-4 py-3 text-sm">
                    {projectDetailPage.investmentCard.investButton.text} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">
              {projectDetailPage.welcome.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">
              {projectDetailPage.welcome.subtitle}
            </h3>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto">
              {projectDetailPage.welcome.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Video/Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl h-64 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-forest-200 rounded-3xl p-6 text-white">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-cream-200">{projectDetailPage.welcome.statsLabels.totalTrees}</span>
                  <span className="text-xl font-bold">{project.totalTrees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-cream-200">{projectDetailPage.welcome.statsLabels.treesSold}</span>
                  <span className="text-xl font-bold">{project.treesSold.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-cream-200">{projectDetailPage.welcome.statsLabels.treesAvailable}</span>
                  <span className="text-xl font-bold text-amber-400">{project.treesAvailable.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-cream-200">{projectDetailPage.welcome.statsLabels.altitude}</div>
                  <div className="font-bold">{project.altitude}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs">📐</span>
                  </div>
                  <div className="text-xs text-cream-200">{projectDetailPage.welcome.statsLabels.plotSize}</div>
                  <div className="font-bold text-xs">{project.plotSize}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs">☀️</span>
                  </div>
                  <div className="text-xs text-cream-200">{projectDetailPage.welcome.statsLabels.sunnyDays}</div>
                  <div className="font-bold">{project.sunnyDays}</div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                {projectDetailPage.welcome.buttons.map((button: any, index: number) => (
                  <button key={index} className={`${button.type === 'primary' ? 'btn bg-amber-500 text-forest-600 hover:bg-amber-400' : 'btn bg-white text-forest-600 hover:bg-cream-100'} px-4 py-2 text-sm`}>
                    {button.text} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plantation Status Timeline */}
      <Timeline 
        stages={project.timelineStages.map((stage: any) => ({
          title: stage.title,
          description: stage.description,
          image: stage.image,
          badge: stage.stage,
          status: stage.status
        }))}
        title={projectDetailPage.timeline.title}
        subtitle={projectDetailPage.timeline.subtitle}
        backgroundColor="bg-forest-200"
        textColor="text-white"
        accentColor="bg-amber-500"
        showCurvedConnectors={true}
        autoScroll={false}
      />

      {/* Investment and Returns */}
      <section className="py-16 md:py-20 bg-cream-50" style={{
        backgroundImage: `url('${projectDetailPage.investmentReturns.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="bg-white/95 backdrop-blur-sm">
          <div className="container-custom py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">
                {projectDetailPage.investmentReturns.title}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600">
                {projectDetailPage.investmentReturns.subtitle}
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Investment */}
              <div className="bg-forest-200 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">{projectDetailPage.investmentReturns.investmentSection.title}</h4>
                <p className="text-cream-100 text-sm leading-relaxed mb-6">
                  {project.investmentDescription}
                </p>
                <button className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-4 py-2 text-sm">
                  {projectDetailPage.investmentReturns.investmentSection.buttonText}
                </button>
              </div>

              {/* Returns */}
              <div className="bg-amber-500 rounded-3xl p-8 text-forest-600">
                <h4 className="text-2xl font-bold mb-6">{projectDetailPage.investmentReturns.returnsSection.title}</h4>
                <p className="text-forest-700 text-sm leading-relaxed mb-6">
                  {project.returnsDescription}
                </p>
                <button className="btn bg-forest-600 text-white hover:bg-forest-700 px-4 py-2 text-sm">
                  {projectDetailPage.investmentReturns.returnsSection.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest - Image Carousel */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt="Coffee plantation"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-200 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots indicator below image */}
              <div className="flex justify-center mt-6 gap-2">
                {project.images.map((_: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-forest-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Question prompt */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-amber-600">{projectDetailPage.faq.titleHighlight}</span><br />
                  <span className="text-forest-600">{projectDetailPage.faq.titleMain}</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {projectDetailPage.faq.description}
                </p>
                <p className="text-forest-600 font-medium text-sm mb-6">
                  {projectDetailPage.faq.transparency}
                </p>
                <button className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-4 py-2 text-sm">
                  {projectDetailPage.faq.scheduleButton.text} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Right side - FAQ Items */}
              <div className="space-y-4">
                {projectDetailPage.faq.questions.map((faq: any, index: number) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-forest-600 text-sm">{faq.question}</span>
                      <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                        {openFAQ === index ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;