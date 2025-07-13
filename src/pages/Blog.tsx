import React, { useState } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Blog' | 'News' | 'Updates';
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Blog' | 'News' | 'Updates'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  const blogPosts: BlogPost[] = [
    {
      id: 'tech-meets-soil-weather-stations',
      title: 'Tech Meets Soil: Smart Weather Stations Now Live On Our Coffee Plantations',
      excerpt: 'You can\'t manage what you don\'t measure. That\'s why we\'ve begun installing cutting-edge METOS 5 weather stations across our coffee plantations. These smart devices are transforming how we...',
      content: 'Full article content here...',
      category: 'Blog',
      date: '28. May',
      author: 'Coffee Team',
      image: 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 'first-cameras-installed',
      title: 'We\'re Going Live: First Cameras Installed On Our Coffee Plantation!',
      excerpt: 'As part of our ongoing commitment to transparency and investor trust, we\'re excited to announce that we\'ve begun...',
      content: 'Full article content here...',
      category: 'Blog',
      date: '27. May',
      author: 'Mocha Team',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'first-bean-then-future',
      title: 'First The Bean, Then The Future',
      excerpt: 'At The Mocha Coffee Fund, every season teaches us something new — not just about trees, but about the...',
      content: 'Full article content here...',
      category: 'Updates',
      date: '21. May',
      author: 'Kenya Team',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'third-investment-round',
      title: 'Our Third Coffee Investment Round Is Here!',
      excerpt: 'Mocha: New round for investment! We are excited to announce that the Securities Commission has approved our third round of coffee investments...',
      content: 'Full article content here...',
      category: 'News',
      date: '17. April',
      author: 'Investment Team',
      image: 'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'sweet-collaboration-kenya-cooperative',
      title: 'A Sweet Collaboration: Joining Forces With Kenya\'s Largest Coffee Cooperative',
      excerpt: 'As we are officially in harvest season with our plantations and trees, it\'s the perfect time to shift...',
      content: 'Full article content here...',
      category: 'News',
      date: '23. January',
      author: 'Partnership Team',
      image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'coffee-growing-success-nyeri',
      title: 'Coffee Growing Success in Nyeri: 80 Hands, 3 Days, And A Growing Opportunity',
      excerpt: 'The Mocha Coffee Fund is excited to announce that the first phase of planting at our Nyeri location has...',
      content: 'Full article content here...',
      category: 'Updates',
      date: '13. January',
      author: 'Plantation Team',
      image: 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'initial-investment-round-completed',
      title: 'Initial Coffee Investment Round Completed!',
      excerpt: 'Our initial coffee investment round has been successfully completed! In the previous issue, 4,400 coffee trees were available, where four...',
      content: 'Full article content here...',
      category: 'Updates',
      date: '16. December',
      author: 'Investment Team',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'second-investment-round',
      title: 'Our Second Coffee Investment Round Is Here!',
      excerpt: 'ENG: Exciting News! We\'re thrilled to announce that the Securities Commission of Kenya has...',
      content: 'Full article content here...',
      category: 'News',
      date: '15. December',
      author: 'Legal Team',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'preparing-highland-soil',
      title: 'Preparing The Highland Soil For Success!',
      excerpt: 'We are excited to share that, in collaboration with the Institute of Agricultural Development and with...',
      content: 'Full article content here...',
      category: 'Updates',
      date: '17. October',
      author: 'Agricultural Team',
      image: 'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'welcoming-new-team-members',
      title: 'Welcoming Two New Members To The Mocha Coffee Fund Team',
      excerpt: 'Welcoming Two New Members to The Mocha Coffee Fund Team: James Mwangi and Sarah Njeri! As we...',
      content: 'Full article content here...',
      category: 'News',
      date: '14. August',
      author: 'HR Team',
      image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = activeCategory === 'All' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  const postsPerPage = 6;
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
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-coffee-700">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream-50 mb-4 leading-tight tracking-tight">
              Discover Our Stories<br />Projects, People, Purpose
            </h1>
            <p className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto">
              Dive into the latest updates, news, and insights from the Mocha Coffee Fund.
            </p>
          </div>

          {/* Featured Article */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 relative">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
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

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-cream-50 to-cream-100">
                  <div className={`inline-block ${getCategoryColor(featuredPost.category)} px-5 py-2 rounded-full text-sm font-bold mb-6 tracking-wide shadow-sm`}>
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-forest-800 mb-6 leading-tight tracking tight animate-pulse-slow">
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
              </div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7a5540] to-forest-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* See More Articles Section */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-forest-700 mb-6 lg:mb-0">
              More Stories
            </h2>
            
            {/* Category Filters */}
            <div className="flex gap-3 bg-white p-2 rounded-full shadow-sm">
              {(['All', 'Blog', 'News', 'Updates'] as const).map((category) => (
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
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {currentPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
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
                <div className="p-5">
                  <h3 className="text-lg font-bold text-forest-700 mb-3 leading-tight">
                    {post.title} {post.id === 'first-cameras-installed' && '📹 🌱'} {post.id === 'third-investment-round' && '🌟'} {post.id === 'coffee-growing-success-nyeri' && '🌱'} {post.id === '10' && '🌱'}
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
                  <div className="inline-flex items-center text-[#7a5540] hover:text-[#6a4a38] text-sm font-semibold transition-colors duration-200">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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
                className="inline-flex items-center bg-white text-forest-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Page <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F5F0E5]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-forest-700 mb-4">
              Start Your Coffee Investment Journey
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Join thousands of investors growing their wealth through sustainable coffee plantation investments in Kenya's fertile highlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-[#7a5540] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#6a4a38] transition-all duration-300 transform hover:scale-105">
                Start Investing <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="btn bg-transparent border-2 border-forest-600 text-forest-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;