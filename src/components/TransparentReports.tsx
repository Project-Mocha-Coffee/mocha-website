import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import contentData from '../data/content.json';
import type { TransparentReportsData, BlogData, BlogPost } from '../types/content';

const TransparentReports: React.FC = () => {
  const data = contentData.transparentReports as TransparentReportsData;
  const blogData = contentData.blog as BlogData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Get the latest posts based on maxDisplayItems (first 2 posts)
  const newsItems = blogData.posts.slice(0, data.maxDisplayItems);

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
      ref={sectionRef}
      className={`py-12 md:py-16 bg-cream-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ backgroundColor: '#FFFCF7' }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div className="text-forest-700">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in">
              {data.sectionTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in delay-100">
              {data.sectionSubtitle}
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center bg-[#7A5540] hover:bg-[#5A3F2F] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 text-base touch-manipulation animate-fade-in delay-200"
            >
              {data.viewAllButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right Content - News Box */}
          <div
            className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in delay-300"
          >
            {/* Latest News Badge */}
            <div className="inline-flex items-center bg-[#7A5540] text-white px-3 py-1.5 rounded-full text-sm font-medium mb-5 animate-fade-in delay-300">
              {data.latestNewsBadge}
            </div>

            {/* News Items */}
            <div className="space-y-6">
              {newsItems.map((item: BlogPost, index: number) => (
                <div
                  key={item.id}
                  className="relative hover:bg-cream-50 rounded-xl transition-all duration-200 p-2"
                >
                  {/* Timeline Line */}
                  {index < newsItems.length - 1 && (
                    <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-gold-500 to-[#7A5540]"></div>
                  )}

                  <div className="flex items-start space-x-3">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-10 h-10 bg-cream-100 rounded-full flex items-center justify-center text-base text-gold-500">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-forest-700 mb-2 leading-tight text-base md:text-lg">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <svg
                          className="w-3 h-3 mr-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item.date}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <Link
                        to={`/blog/${item.id}`}
                        className="inline-flex items-center bg-[#7A5540] hover:bg-[#5A3F2F] text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 touch-manipulation"
                      >
                        {data.readMoreButton}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default TransparentReports;