import React from 'react';
import { Gift, Share2, Users, ArrowRight } from 'lucide-react';
import contentData from '../data/content.json';
import type { ContentData } from '../types/content';

const ReferralProgram: React.FC = () => {
  const data = (contentData as ContentData).referralProgram;

  return (
    <section className="py-8 md:py-10 bg-brown-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-white mb-2 font-bold">
              {data.sectionTitle}
            </h2>
            <p className="text-brown-200 max-w-2xl mx-auto">
              {data.sectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-800 mb-1">{data.earnCard.title}</h3>
                  <p className="text-brown-600 text-sm">{data.earnCard.subtitle}</p>
                </div>
              </div>
              <div className="bg-brown-50 p-4 rounded-lg mb-4">
                <p className="text-brown-800 font-semibold text-lg mb-2">
                  {data.earnCard.highlightText}
                </p>
                <p className="text-brown-600 text-sm">
                  {data.earnCard.description}
                </p>
              </div>
              <ul className="space-y-2 text-brown-700 text-sm mb-4">
                {data.earnCard.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-brown-400 rounded-full mr-2"></div>
                    {benefit}
                </li>
                ))}
              </ul>
            </div>

            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                  <Share2 className="h-6 w-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-800 mb-1">{data.shareCard.title}</h3>
                  <p className="text-brown-600 text-sm">{data.shareCard.subtitle}</p>
                </div>
              </div>
              <p className="text-brown-700 text-sm mb-4">
                {data.shareCard.description}
              </p>
              <div className="space-y-3">
                {data.shareCard.buttons.map((button, index) => {
                  const getIcon = () => {
                    switch (button.type) {
                      case 'social':
                        return <Share2 className="mr-2 h-4 w-4" />;
                      case 'invite':
                        return <Users className="mr-2 h-4 w-4" />;
                      case 'copy':
                        return null;
                      default:
                        return null;
                    }
                  };

                  const getButtonClass = () => {
                    switch (button.type) {
                      case 'social':
                        return 'w-full btn bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center';
                      case 'invite':
                        return 'w-full btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center';
                      case 'copy':
                        return 'w-full btn btn-secondary';
                      default:
                        return 'w-full btn btn-secondary';
                    }
                  };

                  return (
                    <button key={index} className={getButtonClass()}>
                      {getIcon()}
                      {button.text}
                </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn btn-gold">
              {data.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram; 