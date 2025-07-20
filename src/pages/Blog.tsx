import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent, ContentLoadingScreen } from '../contexts/ContentContext';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Blog' | 'News' | 'Updates'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const { content, isLoading, error } = useContent();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const postRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    postRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      postRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [currentPage, activeCategory]);

  if (isLoading || !content) {
    return <ContentLoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brown-700 mb-4">Failed to load content</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  const { blogPage, blog } = content;
  if (!blogPage || !blog) {
    return <ContentLoadingScreen />;
  }

  const blogPosts = Array.isArray(blog.posts) ? blog.posts.map(post => ({
    ...post,
    image: post.image || '/fallback-image.jpg',
    title: post.title || 'Untitled Post',
    category: post.category || 'Blog',
    date: post.date || new Date().toISOString().split('T')[0],
    author: post.author || 'Unknown Author',
    excerpt: post.excerpt || 'No description available',
  })) : [];

  const categories = ['All', 'Blog', 'News', 'Updates'] as const;
  const postsPerPage = 6;

  const featuredPost = blogPosts.find((post: any) => post.featured) || blogPosts[0] || null;
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
    <div className="bg-cream-50 min-h-screen">
      <style>
        {`
          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .animate-initial {
            opacity: 0;
            transform: translateY(20px);
          }
        `}
      </style>

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-coffee-700">
        <div className="container-custom">
          <div className="text-center mb-12 animate-initial" ref={(el) => (sectionRefs.current[0] = el)}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream-50 mb-4 leading-tight tracking-tight">
              Discover Our Stories<br />Projects, People, Purpose
            </h1>
            <p className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto">
              Dive into the latest updates, news, and insights from the Mocha Coffee Fund.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 relative animate-initial" ref={(el) => (sectionRefs.current[1] = el)}>
              <div className="grid lg:grid-cols-2 gap-0">
                {featuredPost ? (
                  <div className="relative h-96 lg:h-[600px]">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <span className="absolute top-6 left-6 inline-block bg-[#7a5540] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide transform rotate-3 shadow-md">
                      Featured Story
                    </span>
                  </div>
                ) : (
                  <div className="relative h-96 lg:h-[600px] bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-600">No featured post available</p>
                  </div>
                )}
                {featuredPost && (
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
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-forest-800 mb-6 leading-tight tracking-tight animate-pulse-slow">
                      {featuredPost.title} 🌟
                    </h2>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-[#7a5540]" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-[#7a5540]" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 line-clamp-3 font-medium">
                      {featuredPost.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center bg-[#7a5540] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#6a4a38] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Explore Now <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </div>
                )}
              </div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7a5540] to-forest-600"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 animate-initial" ref={(el) => (sectionRefs.current[2] = el)}>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-0">
              {blogPage.articlesSection.title}
            </h2>
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 animate-initial ${
                    activeCategory === category
                      ? 'bg-forest-600 text-white shadow-md'
                      : 'text-forest-600 hover:bg-forest-100'
                  }`}
                  ref={(el) => (sectionRefs.current[3 + index] = el)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post: any, index: number) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block animate-initial"
                  ref={(el) => (postRefs.current[index] = el)}
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className={`absolute top-3 left-3 inline-block ${getCategoryColor(post.category)} px-3 py-1 rounded-full text-xs font-semibold`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-forest-600 mb-2 leading-tight">
                      {post.title} {post.icon && post.icon}
                    </h3>
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-amber-600 hover:text-amber-700 text-xs font-medium">
                      {blogPage.hero.readMoreText} <ArrowRight className="ml-2 h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-600 text-center col-span-3">No posts available in this category.</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="text-center animate-initial" ref={(el) => (sectionRefs.current[7] = el)}>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages}
                className="inline-flex items-center bg-white text-forest-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {blogPage.articlesSection.nextButtonText} <ArrowRight className="ml-2 h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F5F0E5] animate-initial" ref={(el) => (sectionRefs.current[8] = el)}>
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