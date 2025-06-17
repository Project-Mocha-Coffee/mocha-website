import React, { useState, useEffect } from 'react';
import { Coffee, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AvailableOpportunities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Use the same project data as in ProjectDetail page
  const availableProject = {
    id: 'nyeri-highland-2024',
    title: 'Nyeri Highland Coffee Farm 2024',
    location: 'Kenya\'s premier coffee highlands',
    status: 'Available now',
    statusColor: 'bg-brown-600',
    totalTrees: 25200,
    treesSold: 15480,
    treesAvailable: 9720,
    description: 'A sustainable investment rooted in the heart of Kenya\'s fertile highlands, designed for long-term growth and premium Arabica yields.',
    image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  };

  return (
    <section id="available-opportunities" className="py-8 md:py-10 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`card-large p-6 md:p-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
                <div className="inline-block bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                Available Plantation
              </div>
                <h2 className="text-lg md:text-xl text-brown-600 mb-2 font-semibold">
                Available Investment Opportunities
              </h2>
                <h3 className="text-2xl md:text-3xl text-coffee-600 mb-6 font-bold">
                  {availableProject.title} Is Ready To Grow
              </h3>
              
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-brown-600 text-white rounded-2xl p-4 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Coffee className="h-5 w-5 mr-2" />
                      <span className="text-2xl font-bold">{availableProject.treesSold.toLocaleString()}</span>
                  </div>
                  <p className="text-xs opacity-90 font-medium">trees sold</p>
                </div>
                  <div className="bg-coffee-600 text-white rounded-2xl p-4 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Coffee className="h-5 w-5 mr-2" />
                      <span className="text-2xl font-bold">{availableProject.treesAvailable.toLocaleString()}</span>
                  </div>
                  <p className="text-xs opacity-90 font-medium">trees available</p>
                </div>
              </div>
              
                <Link to={`/projects/${availableProject.id}`} className="btn btn-primary">
                Explore plantation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
              <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                    src={availableProject.image} 
                    alt={availableProject.title} 
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-coffee-600 bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
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