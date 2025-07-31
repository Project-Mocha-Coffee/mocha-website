import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';

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

// Static JSON data
const content: Content = {
  blogArticlePage: {
    content: {
      notFoundTitle: "Article Not Found",
      notFoundMessage: "The article you're looking for doesn't exist or has been removed.",
      relatedImagesTitle: "Related Images"
    },
    navigation: {
      backToBlogs: "Back to All Blogs",
      previous: "Previous Article",
      next: "Next Article"
    }
  },
  blog: {
    pageTitle: "Our Blog Projects, People, Purpose",
    latestNewsBadge: "✓ Latest news",
    posts: [
      {
        id: "tech-meets-soil-weather-stations",
        title: "The Driving Forces Behind Kenya's Coffee Resurgence: A Data-Based Analysis",
        excerpt: "You can't manage what you don't measure. That's why we've begun installing cutting-edge METOS 5 weather stations across our coffee plantations...",
        content: `The Driving Forces Behind Kenya's Coffee Resurgence: A Data-Based Analysis

The Kenyan coffee sector, which experienced its golden age in the 1980s with peak production of 128,926 metric tonnes in 1987/88, has shown remarkable signs of recovery in recent years after decades of decline. This report analyses the key factors contributing to this resurgence, supported by concrete data from various sources.

**Recent Production Trends and Targets:**
- Production increased by 47% from 34,000 metric tonnes in 2021 to 51,583 metric tonnes in 2022
- According to the latest USDA Foreign Agricultural Service report from May 2025, a further 13.3% increase to 850,000 bags is forecast for the 2025/26 marketing year
- The Kenyan government has set ambitious targets to scale up production to 102,000 metric tons by 2027

**Government Policy Interventions:**
- Coffee Cherry Advance Revolving Fund:
  - Loan advances surged to Sh6.7 billion by early 2025
  - Around 500,000 small-scale farmers from 27 counties have borrowed
  - Seven counties from Mount Kenya region borrowed Sh4 billion
- Fertilizer Subsidy Program:
  - Provides fertilizer at lower cost than market price
  - Research shows 0.191074 kg increase in yields per bush per 50kg bag
- Debt Relief:
  - Sh6.7 billion in debt written off for cooperatives
  - Additional Sh4 billion allocated to Cherry Advance Fund

**Expansion of Coffee Growing Areas:**
- Coffee acreage increased by 2.29% from 109,384 hectares in FY 2021/22
- Nandi County recorded largest increase at 404 hectares
- Expansion to non-traditional regions like Rift Valley, Western, and Nyanza

**Public-Private Partnerships:**
- Coffee nurseries expanded, with seedlings per society up 367%
- Revenue per society increased by 400%
- Average membership per society up 15%

**Market Conditions and Price Incentives:**
- Arabica coffee futures trading at $370 per 60 kilograms
- Coffee farmers earned Sh61,416 per 100 kg in 2023
- Recovery from drought conditions in 2023/24

**Conclusion:**
The resurgence stems from government interventions, technological innovation, and market forces. Project Mocha's blockchain platform revolutionizes the industry by connecting farmers with global consumers and investors.

For more information: peter@projectmocha.com`,
        category: "Blog",
        date: "28. May",
        author: "Coffee Team",
        image: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800",
        readTime: "3 minute reading",
        featured: true,
        icon: "🌡️☕"
      },
      // Other blog posts remain unchanged but follow similar formatting
      {
        id: "first-cameras-installed",
        title: "We're Going Live: First Cameras Installed On Our Coffee Plantation!",
        excerpt: "As part of our ongoing commitment to transparency and investor trust, we've begun installing live cameras across our plantations...",
        content: `We're Going Live: First Cameras Installed On Our Coffee Plantation!

🎥 **Plantations Live Stream** 🌱
As part of our commitment to transparency, we've begun installing live cameras across our coffee plantations. This allows investors to witness daily progress in real-time.

**What you can expect to see:**
- Daily plantation activities
- Seasonal growth progress
- Weather conditions
- Team's dedicated care
- Harvest preparations

**Why transparency matters:**
Trust is the foundation of partnership. Live access shows the reality of sustainable coffee farming in Kenya's highlands.

Welcome to transparent agriculture! 📹🌿`,
        category: "Blog",
        date: "27. May",
        author: "Mocha Team",
        image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800",
        readTime: "2 minute reading",
        featured: false,
        icon: "📹🌱"
      },
      {
        id: "sweet-collaboration-kenya-cooperative",
        title: "A Sweet Collaboration: Joining Forces With Kenya's Largest Coffee Cooperative",
        excerpt: "As we are officially in harvest season with our plantations and trees, it's the perfect time to shift...",
        content: `A Sweet Collaboration: Joining Forces With Kenya's Largest Coffee Cooperative

🤝 **What This Partnership Means:**
- Enhanced Quality Control: Access to advanced processing facilities
- Expanded Reach: Integration with international supply chains
- Knowledge Sharing: Exchange of sustainable farming practices
- Community Impact: Supporting thousands of farming families

**Our Shared Vision:**
This partnership aligns with our mission to create sustainable coffee investments while supporting communities.

**What's Next:**
- Improved processing efficiency
- Enhanced bean quality
- Expanded market access
- Greater supply chain transparency

Here's to growing together! ☕🇰🇪`,
        category: "News",
        date: "23. January",
        author: "Partnership Team",
        image: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800",
        readTime: "4 minute reading",
        featured: false,
        icon: "🍃☕"
      },
      {
        id: "coffee-growing-success-nyeri",
        title: "Coffee Growing Success in Nyeri: 80 Hands, 3 Days, And A Growing Opportunity",
        excerpt: "The Mocha Coffee Fund is excited to announce that the first phase of planting at our Nyeri location has...",
        content: `Coffee Growing Success in Nyeri: 80 Hands, 3 Days, And A Growing Opportunity

🌱 **The Numbers:**
- 80 dedicated hands
- 3 intensive days
- 2,400 premium Arabica seedlings
- 15 hectares prepared

**Why Nyeri?**
Nyeri's volcanic soils and optimal altitude produce sought-after Arabica beans.

**The Planting Process:**
1. Soil Preparation: Enriched with organic compost
2. Spacing Optimization: For maximum growth
3. Water Management: Efficient irrigation
4. Shade Management: Companion planting

**What This Means for Investors:**
These trees will produce first harvest in 3-4 years.

**Community Impact:**
Provided employment for 80 local workers.

**Next Steps:**
Phase 2 with 3,600 more trees planned.

The future of Kenyan coffee is growing strong! 🇰🇪☕`,
        category: "Updates",
        date: "13. January",
        author: "Plantation Team",
        image: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800",
        readTime: "3 minute reading",
        featured: false,
        icon: "🌱"
      }
    ]
  }
};

const BlogArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { blogArticlePage, blog } = content;

  if (!blogArticlePage || !blog) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brown-700 mb-4">Content not available</h1>
          <p className="text-gray-600 mb-4">Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm rounded"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  const blogPosts = blog.posts;
  const currentArticle = blogPosts.find(post => post.id === articleId);

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

  const currentIndex = blogPosts.findIndex(post => post.id === articleId);
  const previousArticle = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

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
      if (paragraph.trim().startsWith('- ')) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="text-coffee-600 mr-2 mt-1">•</span>
            <span className="text-sm">{paragraph.replace(/^- /, '')}</span>
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
      if (/^[🎥🤝🌱🌿🌡️☕]/.test(paragraph.trim())) {
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

      {/* Navigation */}
      <div className="bg-forest-600 py-8">
        <div className="container mx-auto px-4">
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