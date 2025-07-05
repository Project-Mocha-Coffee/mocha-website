import React, { useState, useEffect } from 'react';
import { Coffee, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentData, ContentData, subscribeToContentUpdates } from '../services/contentService';

const AvailableOpportunities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setContentVersion] = useState(0); // Force re-render trigger
  const sectionData = (contentData as ContentData)?.availableOpportunities;
  const projects = (contentData as ContentData)?.projects;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Subscribe to content updates
    const unsubscribe = subscribeToContentUpdates(() => {
      console.log('🔄 AvailableOpportunities: Content updated, re-rendering...');
      setContentVersion(prev => prev + 1); // Force re-render
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  // Show loading state if no content data yet
  if (!contentData || !sectionData || !projects) {
    console.log('⏳ AvailableOpportunities: Waiting for content...', { 
      contentData: !!contentData, 
      sectionData: !!sectionData, 
      projects: !!projects 
    });
    return (
      <section id="available-opportunities" className="py-6 sm:py-8 md:py-10 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8 animate-pulse">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="h-8 bg-brown-100 rounded-full w-32 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded-lg w-48 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded-lg w-full mb-6"></div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="bg-brown-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-20"></div>
                    <div className="bg-coffee-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-20"></div>
                  </div>
                  <div className="h-12 bg-gray-200 rounded-lg w-48"></div>
                </div>
                <div className="relative order-first lg:order-last">
                  <div className="aspect-video rounded-xl sm:rounded-2xl bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const featuredProjectId = sectionData.featuredProject;
  const availableProject = projects[featuredProjectId];

  // Return null if featured project not found
  if (!availableProject) {
    console.log('⚠️ AvailableOpportunities: Featured project not found:', featuredProjectId);
    return null;
  }

  console.log('✅ AvailableOpportunities: Rendering with content data');

  return (
    <section id="available-opportunities" className="py-6 sm:py-8 md:py-10 bg-cream-50">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`card-large p-4 sm:p-6 md:p-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-brown-100 text-brown-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
                  Available Plantation
                </div>
                <h2 className="text-base sm:text-lg md:text-xl text-brown-600 mb-2 font-semibold">
                  {sectionData.title}
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl text-coffee-600 mb-4 sm:mb-6 font-bold leading-tight">
                  {availableProject.title} Is Ready To Grow
                </h3>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="bg-brown-600 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Coffee className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                      <span className="text-lg sm:text-xl md:text-2xl font-bold">{availableProject.treesSold.toLocaleString()}</span>
                    </div>
                    <p className="text-xs opacity-90 font-medium">trees sold</p>
                  </div>
                  <div className="bg-coffee-600 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Coffee className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                      <span className="text-lg sm:text-xl md:text-2xl font-bold">{availableProject.treesAvailable.toLocaleString()}</span>
                    </div>
                    <p className="text-xs opacity-90 font-medium">trees available</p>
                  </div>
                </div>
                
                <Link to={`/projects/${availableProject.id}`} className="btn btn-primary w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation">
                  Explore plantation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="relative order-first lg:order-last">
                <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={availableProject.images[0]} 
                    alt={availableProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-coffee-600 bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform touch-manipulation">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white ml-0.5 sm:ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableOpportunities;