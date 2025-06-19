import React from 'react';
import { Link } from 'react-router-dom';

const TransparentReports: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      icon: '🍃☕',
      title: 'A Sweet Collaboration: Joining Forces With Kenya\'s Largest Coffee Cooperative',
      date: '23. January',
      description: 'As we are officially in harvest season with our plantations and trees, it\'s the perfect time to shift...',
      category: 'Latest news'
    },
    {
      id: 2,
      icon: '🌱',
      title: 'Coffee Growing Success in Nyeri: 80 Hands, 3 Days, And A Growing Opportunity',
      date: '13. January', 
      description: 'The Mocha Coffee Fund is excited to announce that the first phase of planting at our Nyeri location has...',
      category: 'Updates'
    }
  ];

  return (
    <section className="bg-brown-600 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Transparent Operational Reports And News
            </h2>
            <p className="text-sm sm:text-base text-brown-100 mb-4 sm:mb-6 leading-relaxed">
              Stay informed at all times with real-time updates from our plantations and projects.
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center bg-brown-700 hover:bg-brown-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base touch-manipulation"
            >
              View all
              <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Content - News Box */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
            {/* Latest News Badge */}
            <div className="inline-flex items-center bg-brown-700 text-white px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-5">
              Latest news
            </div>

            {/* News Items */}
            <div className="space-y-4 sm:space-y-6">
              {newsItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Line */}
                  {index < newsItems.length - 1 && (
                    <div className="absolute left-5 top-10 w-0.5 h-8 sm:h-12 bg-brown-300"></div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-brown-100 rounded-full flex items-center justify-center text-sm sm:text-base">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                        <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.date}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <Link 
                        to="/blog"
                        className="inline-flex items-center bg-brown-700 hover:bg-brown-800 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 touch-manipulation"
                      >
                        Read more
                        <svg className="ml-1 w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentReports; 