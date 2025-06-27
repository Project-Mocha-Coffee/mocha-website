import React, { useState } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import contentData from '../data/content.json';

const typedContentData = contentData as any;

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Blog' | 'News' | 'Updates'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get data from centralized JSON
  const { blogPage, blog } = typedContentData;
  const blogPosts = blog.posts;

  // Component-level configuration (not editable via JSON)
  const categories = ['All', 'Blog', 'News', 'Updates'] as const;
  const postsPerPage = 6;

  const featuredPost = blogPosts.find((post: any) => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((post: any) => !post.featured);

  const filteredPosts = activeCategory === 'All' 
    ? regularPosts 
    : regularPosts.filter((post: any) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blog': return 'bg-forest-600 text-white';
      case 'News': return 'bg-amber-600 text-white';
      case 'Updates': return 'bg-coffee-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="bg-forest-100 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {blogPage.hero.title}
            </h1>
          </div>

          {/* Featured Article */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 lg:p-6 flex flex-col justify-center">
                  <div className="mb-3">
                    <div className="inline-block bg-forest-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-3">
                      {blogPage.hero.latestNewsBadge}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-forest-600 mb-3 leading-tight">
                      {featuredPost.title} {blogPage.hero.featuredPostSuffix}
                    </h2>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-600 text-xs">{featuredPost.date}</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-3 py-2 text-xs"
                    >
                      {blogPage.hero.readMoreText} <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See More Articles Section */}
      <section className="py-8 md:py-10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-0">
              {blogPage.articlesSection.title}
            </h2>
            
            {/* Category Filters */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-white text-forest-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {currentPosts.map((post: any) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="relative h-32">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-forest-600 mb-2 leading-tight">
                    {post.title} {post.icon && post.icon}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center text-amber-600 hover:text-amber-700 text-xs font-medium">
                    {blogPage.hero.readMoreText} <ArrowRight className="ml-2 h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="text-center">
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages}
                className="btn bg-white text-forest-600 hover:bg-gray-100 px-4 py-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {blogPage.articlesSection.nextButtonText} <ArrowRight className="ml-2 h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 md:py-10 bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-forest-600 mb-4">
              {blogPage.callToAction.title}
            </h2>
            <h3 className="text-xl lg:text-2xl font-bold text-amber-600 mb-6">
              {blogPage.callToAction.subtitle}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {blogPage.callToAction.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn bg-forest-600 text-white hover:bg-forest-700 px-4 py-2 text-xs">
                {blogPage.callToAction.primaryButtonText} <ArrowRight className="ml-2 h-3 w-3" />
              </button>
              <button className="btn btn-secondary px-4 py-2 text-xs">
                {blogPage.callToAction.secondaryButtonText} <ArrowRight className="ml-2 h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 