import React from 'react';
import { Link } from 'react-router-dom';
import contentData from '../data/content.json';
import type { TransparentReportsData, BlogData, BlogPost } from '../types/content';

const TransparentReports: React.FC = () => {
  const data = contentData.transparentReports as TransparentReportsData;
  const blogData = contentData.blog as BlogData;
  
  // Get the latest posts based on maxDisplayItems (first 2 posts)
  const newsItems = blogData.posts.slice(0, data.maxDisplayItems);

  return (
    <section className="bg-brown-600 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              {data.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-brown-100 mb-4 sm:mb-6 leading-relaxed">
              {data.sectionSubtitle}
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center bg-brown-700 hover:bg-brown-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base touch-manipulation"
            >
              {data.viewAllButton}
              <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Content - News Box */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
            {/* Latest News Badge */}
            <div className="inline-flex items-center bg-brown-700 text-white px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-5">
              {data.latestNewsBadge}
            </div>

            {/* News Items */}
            <div className="space-y-4 sm:space-y-6">
              {newsItems.map((item: BlogPost, index: number) => (
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
                        {item.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${item.id}`}
                        className="inline-flex items-center bg-brown-700 hover:bg-brown-800 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 touch-manipulation"
                      >
                        {data.readMoreButton}
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