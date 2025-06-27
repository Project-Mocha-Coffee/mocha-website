import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import contentData from '../data/content.json';

const typedContentData = contentData as any;

const BlogArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  // Get data from centralized JSON
  const { blogArticlePage, blog } = typedContentData;
  const blogPosts = blog.posts;

  const currentArticle = blogPosts.find((post: any) => post.id === articleId);
  
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
          <Link to="/blog" className="btn btn-primary">
            {blogArticlePage.navigation.backToBlogs}
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next articles
  const currentIndex = blogPosts.findIndex((post: any) => post.id === articleId);
  const previousArticle = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blog': return 'bg-forest-600 text-white';
      case 'News': return 'bg-amber-600 text-white';
      case 'Updates': return 'bg-coffee-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-forest-600 pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container-custom">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white hover:text-coffee-300 mb-6 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {blogArticlePage.navigation.backToBlogs}
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentArticle.category)}`}>
                {currentArticle.category}
              </span>
              <span className="text-cream-200 text-sm">{currentArticle.date}</span>
              <span className="text-cream-200 text-sm">|</span>
              <span className="text-cream-200 text-sm">{currentArticle.readTime}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {currentArticle.title}
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
        <div className="container-custom">
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
                {currentArticle.content.split('\n').map((paragraph: string, index: number) => {
                  if (paragraph.trim() === '') return null;
                  
                  // Handle bullet points
                  if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('✅')) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="text-coffee-600 mr-2 mt-1">
                          {paragraph.trim().startsWith('✅') ? '✅' : '•'}
                        </span>
                        <span className="text-sm">{paragraph.replace(/^[•✅]\s*/, '')}</span>
                      </div>
                    );
                  }
                  
                  // Handle emoji headers
                  if (paragraph.includes('🌡️') || paragraph.includes('🌿') || paragraph.includes('💧') || paragraph.includes('🛡️')) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="mr-2">{paragraph.split(' ')[0]}</span>
                        <span className="text-sm">{paragraph.substring(paragraph.indexOf(' ') + 1)}</span>
                      </div>
                    );
                  }
                  
                  // Handle bold headers
                  if (paragraph.includes('**') && paragraph.includes(':**')) {
                    const boldText = paragraph.match(/\*\*(.*?)\*\*/)?.[1] || '';
                    const restText = paragraph.replace(/\*\*(.*?)\*\*/, '').replace(':', '').trim();
                    return (
                      <div key={index} className="mb-4">
                        <h3 className="text-lg font-bold text-coffee-600 mb-2">{boldText}</h3>
                        {restText && <p className="text-sm text-gray-700">{restText}</p>}
                      </div>
                    );
                  }
                  
                  // Handle regular bold text
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split(/(\*\*.*?\*\*)/);
                    return (
                      <p key={index} className="mb-4 text-sm">
                        {parts.map((part, partIndex) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={partIndex} className="font-semibold text-coffee-600">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  }
                  
                  // Regular paragraphs
                  return (
                    <p key={index} className="mb-4 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Secondary Images */}
            {currentArticle.secondaryImages && currentArticle.secondaryImages.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-coffee-600 mb-4">
                  {blogArticlePage.content.relatedImagesTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentArticle.secondaryImages.map((image: string, index: number) => (
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

      {/* Navigation */}
      <div className="bg-forest-600 py-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Previous Article */}
              {previousArticle && (
                <Link 
                  to={`/blog/${previousArticle.id}`}
                  className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center text-coffee-600 text-sm mb-2">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {blogArticlePage.navigation.previous}
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-coffee-600 transition-colors text-sm">
                    {previousArticle.title}
                  </h4>
                </Link>
              )}
              
              {/* Next Article */}
              {nextArticle && (
                <Link 
                  to={`/blog/${nextArticle.id}`}
                  className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 md:text-right"
                >
                  <div className="flex items-center justify-end text-coffee-600 text-sm mb-2">
                    {blogArticlePage.navigation.next}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-coffee-600 transition-colors text-sm">
                    {nextArticle.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle; 