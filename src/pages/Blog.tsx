import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
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
}

interface BlogPage {
  hero: {
    title: string;
    latestNewsBadge: string;
    featuredPostSuffix: string;
    readMoreText: string;
  };
  articlesSection: {
    title: string;
    nextButtonText: string;
  };
  callToAction: {
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
}

interface Content {
  blogPage: BlogPage;
  blog: {
    pageTitle: string;
    latestNewsBadge: string;
    posts: BlogPost[];
  };
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Blog' | 'News' | 'Updates'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const postRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { content, isLoading } = useContent();

  // Static JSON data
//   const content: Content = {
//     blogPage: {
//       hero: {
//         title: "Our Blog Projects, People, Purpose",
//         latestNewsBadge: "✓ Latest news",
//         featuredPostSuffix: "🌿 ❄️",
//         readMoreText: "Read more"
//       },
//       articlesSection: {
//         title: "See More Articles",
//         nextButtonText: "Next page"
//       },
//       callToAction: {
//         title: "Ready To Start Your",
//         subtitle: "Coffee Investment Journey?",
//         description: "Join thousands of investors who are already growing their wealth through sustainable coffee plantation investments in Kenya's fertile highlands.",
//         primaryButtonText: "Start Investing",
//         secondaryButtonText: "Schedule a Call"
//       }
//     },
//     blog: {
//       pageTitle: "Our Blog Projects, People, Purpose",
//       latestNewsBadge: "✓ Latest news",
//       posts: [
//         {
//           id: "tech-meets-soil-weather-stations",
//           title: "The Driving Forces Behind Kenya's Coffee Resurgence: A Data-Based Analysis",
//           excerpt: "The Driving Forces Behind Kenya's Coffee Resurgence: A Data-Based Analysis The Kenyan coffee sector, which experienced its...",
//           content: `The Driving Forces Behind Kenya's Coffee Resurgence: A Data-Based Analysis
// The Kenyan coffee sector, which experienced its golden age in the 1980s with peak production of 128,926 metric tonnes in 1987/88, has shown remarkable signs of recovery in recent years after decades of decline. This report analyses the key factors contributing to this resurgence, supported by concrete data from various sources.

// Recent Production Trends and Targets
// Kenya has experienced substantial growth in coffee production in recent years. Production increased by 47% from 34,000 metric tonnes in 2021 to 51,583 metric tonnes in 2022. According to the latest USDA Foreign Agricultural Service report from May 2025, a further 13.3% increase to 850,000 bags is forecast for the 2025/26 marketing year. The Kenyan government has set ambitious targets to scale up production to 102,000 metric tons by 2027, more than doubling the current output of approximately 50,000 metric tons.

// Government Policy Interventions
// Coffee Cherry Advance Revolving Fund
// One of the most significant contributors to increased production has been the Coffee Cherry Advance Revolving Fund:

// Loan advances surged to Sh6.7 billion by early 2025, compared to Sh1.1 billion in November 2023, representing a 500% increase

// Around 500,000 small-scale farmers from 27 of the 32 coffee-growing counties have borrowed from the fund

// Seven counties from the Mount Kenya region borrowed Sh4 billion, accounting for 59.7% of the total fund

// The government boosted the fund with an additional Sh4 billion in December 2023

// The fund was established to provide affordable, sustainable, and accessible cherry advance to smallholder coffee farmers with less than 20 acres of land under coffee cultivation.

// Fertilizer Subsidy Program

// The fertilizer subsidy program has played a crucial role in improving coffee yields:

// The program aims to provide fertilizer to coffee farmers at a lower cost than market price

// Research shows that an increase in one 50kg bag of subsidized fertilizer results in a 0.191074 kg increase in coffee yields per bush

// Farmers using 1, 2, and 3 bags (50kg each) of subsidized fertilizer harvested 2, 3, and 4 kg per coffee bush respectively, showing a direct correlation between fertilizer use and yields

// Debt Relief and Financial Support

// The government has implemented financial relief measures to support coffee farmers:

// President William Ruto approved writing off Sh6.7 billion in debt for cooperatives

// The enhanced Cherry Advance Revolving Fund received an additional allocation of Sh4 billion on top of the Sh2.7 billion previously available

// Expansion of Coffee Growing Areas
// Increased Acreage Under Cultivation

// The area under coffee cultivation has grown significantly:

// Coffee acreage increased by 2.29% from 109,384 hectares in FY 2021/22 to 111,902 hectares in FY 2022/23

// Nandi County recorded the largest increase in area under coffee farming at 404 hectares during FY 2022/23

// The transition of land from coffee plantations to housing near Kenya's largest cities has slowed, stabilizing area planted

// Diversification to Non-Traditional Growing Regions

// Coffee production is expanding beyond traditional growing areas:

// There has been an increase in coffee bushes in parts of Rift Valley, Western, and Nyanza regions

// The government is implementing a coffee expansion program targeting both traditional and new growing regions

// This geographical diversification is expected to increase national coffee production significantly in the next three years

// Public-Private Partnerships

// Collaboration with Cooperative Societies

// Public-Private Partnerships (PPP) between the Coffee Research Institute and Cooperative Societies have yielded impressive results:

// Coffee nurseries in cooperatives expanded, with annual mean coffee seedlings produced per society increasing by 367% from 15,000 to 70,000

// Revenue generated per society increased by 400% from an average of Ksh 200,000 to Ksh 1,000,000 from seedling sales

// Average membership per society increased by 15% from 2,444 to 2,807 members

// Coffee cherry delivered per society increased by 25% from 228 to 286 metric tons

// The partnerships created an average of nine jobs per society in coffee nurseries

// Market Conditions and Price Incentives

// Favorable Coffee Prices

// Rising coffee prices have motivated farmers to increase production:

// Arabica coffee futures are trading at $370 per 60 kilograms, significantly higher than the $100-$150 price range recorded in 2019 and 2020

// Coffee farmers earned Sh61,416 per 100 kg in 2023, compared to tea farmers who earned Sh28,371 for the same quantity, making coffee more lucrative

// Farmers are responding to high prices by improving farm practices and increasing production

// Recovery from Environmental Challenges

// Improved environmental conditions have also contributed to production increases:

// The 2023/24 marketing year production increase of 6.7% to 800,000 bags (48,000 tons) was partly attributed to recovery from drought conditions

// This was complemented by higher fertiliser usage, highlighting the combined effect of improved environmental conditions and input access

// Conclusion

// The resurgence of Kenya's coffee production stems from a multi-pronged approach combining government interventions, technological innovation, and market forces. While traditional policy measures like the Coffee Cherry Advance Revolving Fund (Sh6.7 billion disbursed by 2025) and fertiliser subsidies (correlating with 0.191 kg yield increase per bush) have driven short-term gains, emerging blockchain-based solutions like Project Mocha address systemic challenges in smallholder financing and value chain transparency.

// Project Mocha is a blockchain-powered platform revolutionizing the coffee industry by connecting smallholder farmers directly with global consumers and investors. By digitizing coffee trees and their yields, the platform ensures transparency, traceability, and fair compensation for farmers while enabling access to finance and improved farm management. Coffee consumers can become investors by purchasing fractional ownership of coffee trees, allowing them to support sustainable agriculture and share in the economic return. Project Mocha's tokenisation model introduces a paradigm shift by enabling farmers to fractionalize ownership of coffee trees through blockchain-secured tokens. This innovation directly targets the historical funding gap, where 70% of Kenya's coffee farmers lacked access to affordable capital despite producing 90% of the national output.

// For more information reach out to peter@projectmocha.com

// `,
//           category: "Blog",
//           date: "28. May",
//           author: "Coffee Team",
//           image: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800",
//           readTime: "3 minute reading",
//           featured: true,
//           icon: "🌡️☕"
//         },
//       ]
//     }
//   };

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

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    postRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
      postRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [currentPage, activeCategory]);

  if (isLoading) {
    return <ContentLoadingScreen />;
  }

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

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    postRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
      postRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [currentPage, activeCategory]);

  if (!content) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brown-700 mb-4">Content not available</h1>
          <p className="text-gray-600 mb-4">Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm rounded"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  const blogPage = content.blogPage;
  const blog = content.blog;

  const blogPosts = blog.posts.map((post) => ({
    ...post,
    image: post.image || '/fallback-image.jpg',
    title: post.title || 'Untitled Post',
    category: post.category || 'Blog',
    date: post.date || new Date().toLocaleDateString(),
    author: post.author || 'Unknown Author',
    excerpt: post.excerpt || 'No description available',
  }));

  const categories = ['All', 'Blog', 'News', 'Updates'] as const;
  const postsPerPage = 6;

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0] || null;
  // Include all posts (including featured) when there is only one post
  const regularPosts = blogPosts.length === 1 ? blogPosts : blogPosts.filter((post) => !post.featured);

  const filteredPosts =
    activeCategory === 'All'
      ? regularPosts
      : regularPosts.filter((post) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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
          .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-coffee-700">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12 animate-initial"
            ref={(el) => (sectionRefs.current[0] = el)}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream-50 mb-4 leading-tight tracking-tight">
              Discover Our Stories<br />Projects, People, Purpose
            </h1>
            <p className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto">
              Dive into the latest updates, news, and insights from the Mocha Coffee Fund.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div
              className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 relative animate-initial"
              ref={(el) => (sectionRefs.current[1] = el)}
            >
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
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(
                            featuredPost.category
                          )}`}
                        >
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
                      {console.log(featuredPost.id)}
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
                    <p className="text-gray-700 text-lg leading-rgitelaxed mb-8 line-clamp-3 font-medium">
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

      {/* Articles Section */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 animate-initial"
            ref={(el) => (sectionRefs.current[2] = el)}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-forest-600 mb-4 lg:mb-0">
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
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post: BlogPost, index: number) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-initial"
                  ref={(el) => (postRefs.current[index] = el)}
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span
                      className={`absolute top-3 left-3 ${getCategoryColor(post.category)} px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-forest-600 mb-2 leading-tight">
                      {post.title} {post.icon}
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
              <p className="text-gray-600 text-center col-span-3">
                No posts available in this category.
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div
              className="text-center animate-initial"
              ref={(el) => (sectionRefs.current[7] = el)}
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages}
                className="inline-flex items-center bg-white text-forest-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {blogPage.articlesSection.nextButtonText} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-12 md:py-16 bg-[#F5F0E5] animate-initial"
        ref={(el) => (sectionRefs.current[8] = el)}
      >
        <div className="container mx-auto px-4">
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
              <button 
                onClick={() => window.open('https://portal-rho-lemon.vercel.app/', '_blank', 'noopener,noreferrer')}
                className="bg-forest-600 text-white hover:bg-forest-700 px-6 py-3 text-sm rounded-full flex items-center gap-x-2"
              >
                {blogPage.callToAction.primaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => window.open('https://t.me/+tLhhdY-EiWRkZGY0', '_blank', 'noopener,noreferrer')}
                className="border border-forest-600 text-forest-600 hover:bg-forest-100 px-6 py-3 text-sm rounded-full flex items-center gap-x-2"
              >
                {blogPage.callToAction.secondaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;