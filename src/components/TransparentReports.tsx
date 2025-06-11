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
    <section className="min-h-screen bg-forest-800 flex items-center py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Transparent Operational Reports And News
            </h2>
            <p className="text-base text-forest-100 mb-6">
              Stay informed at all times with real-time updates from our plantations and projects.
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center bg-coffee-600 hover:bg-coffee-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
            >
              View all
              <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Content - News Box */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            {/* Latest News Badge */}
            <div className="inline-flex items-center bg-forest-700 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
              Latest news
            </div>

            {/* News Items */}
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Line */}
                  {index < newsItems.length - 1 && (
                    <div className="absolute left-5 top-10 w-0.5 h-12 bg-coffee-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center text-base">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 leading-tight text-sm">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.date}
                      </div>
                      <p className="text-gray-600 text-xs mb-3">
                        {item.description}
                      </p>
                      <Link 
                        to="/blog"
                        className="inline-flex items-center bg-coffee-600 hover:bg-coffee-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200"
                      >
                        Read more
                        <svg className="ml-1 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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