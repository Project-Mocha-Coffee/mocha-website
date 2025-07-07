import React from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { ContentData } from '../types/content';

const HowItWorks: React.FC = () => {
  const { content } = useContent();
  
  // Early return if content is not available
  if (!content) {
    return null;
  }
  
  const sectionData = content.howItWorks;

  return (
    <section id="how-it-works" className="py-6 sm:py-8 md:py-10 gradient-forest">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-white mb-3 sm:mb-4 fade-in text-xl sm:text-2xl md:text-3xl font-bold">{sectionData.sectionTitle}</h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto fade-in font-medium">
            {sectionData.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="card p-4 sm:p-6 text-center fade-in stagger-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gold-500 mb-2 sm:mb-3">{sectionData.steps[0].title}</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
              👉 <strong>{sectionData.steps[0].stepNumber}:</strong> {sectionData.steps[0].actionText}
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              {sectionData.steps[0].description}
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 text-center fade-in stagger-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Sprout className="h-5 w-5 sm:h-6 sm:w-6 text-forest-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gold-500 mb-2 sm:mb-3">{sectionData.steps[1].title}</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
              👉 <strong>{sectionData.steps[1].stepNumber}:</strong> {sectionData.steps[1].actionText}
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              {sectionData.steps[1].description}
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 text-center fade-in stagger-3 sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gold-500 mb-2 sm:mb-3">{sectionData.steps[2].title}</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
              👉 <strong>{sectionData.steps[2].stepNumber}:</strong> {sectionData.steps[2].actionText}
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              {sectionData.steps[2].description}
            </p>
          </div>
        </div>
        
        <div className="text-center fade-in stagger-4">
          <button className="btn btn-gold w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation">
            {sectionData.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;