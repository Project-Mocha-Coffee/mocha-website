import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import { useContent, ContentLoadingScreen } from '../contexts/ContentContext';

// Define interfaces for type safety
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  featured: boolean;
  icon?: string;
  secondaryImages?: string[];
}

interface BlogArticlePage {
  content: {
    notFoundTitle: string;
    notFoundMessage: string;
    relatedImagesTitle: string;
  };
  navigation: {
    backToBlogs: string;
    previous: string;
    next: string;
  };
}

interface Content {
  blogArticlePage: BlogArticlePage;
  blog: {
    pageTitle: string;
    latestNewsBadge: string;
    posts: BlogPost[];
  };
}

const BlogArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { content, isLoading, error } = useContent();

  // Show loading screen while content is being fetched
  if (isLoading || !content) {
    return <ContentLoadingScreen />;
  }

  // Show error state if content failed to load
  if (error) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brown-700 mb-4">Failed to load content</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm rounded"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // Get data from async loaded content
  const { blogArticlePage, blog } = content;
  
  // Only proceed if we have the necessary data
  if (!blogArticlePage || !blog) {
    return <ContentLoadingScreen />;
  }

  const blogPosts = blog.posts;

  const currentArticle = blogPosts.find((post: BlogPost) => post.id === articleId);
  
  if (!currentArticle) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {blogArticlePage.content.notFoundTitle}
          </h1>
          <p className="text-gray-600 mb-6">
            {blogArticlePage.content.notFoundMessage}
          </p>
          <Link to="/blog" className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm rounded">
            {blogArticlePage.navigation.backToBlogs}
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = blogPosts.filter((post: BlogPost) => post.id !== articleId);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blog':
        return 'bg-forest-600 text-white';
      case 'News':
        return 'bg-amber-600 text-white';
      case 'Updates':
        return 'bg-coffee-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;

      // Handle headers
      if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
        return (
          <h3 key={index} className="text-lg font-bold text-coffee-600 mt-6 mb-2">
            {paragraph.replace(/\*\*/g, '').replace(/:$/, '')}
          </h3>
        );
      }

      // Handle bullet points
      if (paragraph.trim().startsWith('- ') || paragraph.trim().startsWith('• ') || paragraph.trim().startsWith('✅ ')) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="text-coffee-600 mr-2 mt-1">•</span>
            <span className="text-sm">{paragraph.replace(/^[-•✅]\s*/, '')}</span>
          </div>
        );
      }

      // Handle numbered lists
      if (/^\d+\./.test(paragraph.trim())) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="text-coffee-600 mr-2 mt-1">{paragraph.match(/^\d+\./)?.[0]}</span>
            <span className="text-sm">{paragraph.replace(/^\d+\.\s*/, '')}</span>
          </div>
        );
      }

      // Handle emoji headers
      if (/^[🎥🤝🌱🌿🌡️☕✅💧🛡️]/.test(paragraph.trim())) {
        const [emoji, ...rest] = paragraph.split(' ');
        return (
          <div key={index} className="flex items-center mb-2 mt-4">
            <span className="mr-2 text-lg">{emoji}</span>
            <h3 className="text-lg font-bold text-coffee-600">{rest.join(' ')}</h3>
          </div>
        );
      }

      // Handle bold text
      if (paragraph.includes('**')) {
        const parts = paragraph.split(/(\*\*.*?\*\*)/);
        return (
          <p key={index} className="mb-4 text-sm">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={partIndex} className="font-semibold text-coffee-600">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      }

      return (
        <p key={index} className="mb-4 text-sm leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-forest-600 pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-coffee-300 mb-6 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {blogArticlePage.navigation.backToBlogs}
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentArticle.category)}`}
              >
                {currentArticle.category}
              </span>
              <span className="text-cream-200 text-sm">{currentArticle.date}</span>
              <span className="text-cream-200 text-sm">|</span>
              <span className="text-cream-200 text-sm">{currentArticle.readTime}</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {currentArticle.title} {currentArticle.icon}
            </h1>

            <div className="flex items-center text-cream-200 text-sm">
              <User className="w-4 h-4 mr-2" />
              <span>By {currentArticle.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="mb-8">
              <img
                src={currentArticle.image}
                alt={currentArticle.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Text */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-gray-700 leading-relaxed">
                {renderContent(currentArticle.content)}
              </div>
            </div>

            {/* Secondary Images */}
            {currentArticle.secondaryImages && currentArticle.secondaryImages.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-coffee-600 mb-4">
                  {blogArticlePage.content.relatedImagesTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentArticle.secondaryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${currentArticle.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <div className="bg-forest-600 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">More from Our Blog</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.id}`}
                    className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-gray-600 text-xs">{article.date}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 group-hover:text-coffee-600 transition-colors text-sm mb-2">
                      {article.title} {article.icon}
                    </h4>
                    <div className="flex items-center text-gray-600 text-xs">
                      <User className="w-3 h-3 mr-1" />
                      <span>By {article.author}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogArticle;