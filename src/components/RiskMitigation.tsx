import React from 'react';
import { Shield, CloudRain, Award } from 'lucide-react';
import contentData from '../data/content.json';
import type { RiskMitigationData } from '../types/content';

const RiskMitigation: React.FC = () => {
  const data = contentData.riskMitigation as RiskMitigationData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return Shield;
      case 'CloudRain':
        return CloudRain;
      case 'Award':
        return Award;
      default:
        return Shield;
    }
  };

  return (
    <section className="section bg-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-coffee-800 mb-6 fade-in">{data.sectionTitle}</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
          <p className="text-coffee-700 fade-in">
            {data.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {data.safeguards.map((safeguard, index) => {
            const IconComponent = getIcon(safeguard.icon);
            return (
              <div 
                key={index}
                className="bg-cream-100 p-8 fade-in"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-coffee-600 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-cream-50" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-center mb-4 text-coffee-800">{safeguard.title}</h3>
                <p className="text-coffee-600 text-center">
                  {safeguard.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center fade-in">
          <div className="bg-gold-100 p-6 rounded-lg inline-block">
            <h3 className="text-xl font-serif text-coffee-800 mb-2">{data.community.title}</h3>
            <p className="text-coffee-600 text-lg font-semibold">{data.community.description}</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-coffee-700 p-8 md:p-12 text-cream-50 shadow-md fade-in">
            <h3 className="text-2xl font-serif mb-6 text-center">{data.transparency.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {data.transparency.sections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-serif text-xl mb-4 text-gold-400">{section.title}</h4>
                  {section.description && (
                    <p className="text-cream-100 mb-4">
                      {section.description}
                    </p>
                  )}
                  {section.buttonText && (
                    <button className="btn bg-transparent text-cream-50 border border-cream-50 hover:bg-cream-50 hover:text-coffee-800">
                      {section.buttonText}
                    </button>
                  )}
                  {section.reports && (
                    <ul className="space-y-3 text-cream-100">
                      {section.reports.map((report, reportIndex) => (
                        <li key={reportIndex} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 mr-2"></div>
                          <span>{report}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskMitigation;