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
    <div className="bg-forest-600 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Our Blog Projects,<br />
              People, Purpose
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
                      ✓ Latest news
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-forest-600 mb-3 leading-tight">
                      {featuredPost.title} 🌿 ❄️
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
                      Read more <ArrowRight className="ml-2 h-3 w-3" />
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
              See More Articles
            </h2>
            
            {/* Category Filters */}
            <div className="flex gap-2">
              {(['All', 'Blog', 'News', 'Updates'] as const).map((category) => (
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
            {currentPosts.map((post) => (
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
                    {post.title} {post.id === 'first-cameras-installed' && '📹 🌱'} {post.id === 'third-investment-round' && '🌟'} {post.id === 'coffee-growing-success-nyeri' && '🌱'} {post.id === '10' && '🌱'}
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
                    Read more <ArrowRight className="ml-2 h-3 w-3" />
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
                Next page <ArrowRight className="ml-2 h-3 w-3" />
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
              Ready To Start Your
            </h2>
            <h3 className="text-xl lg:text-2xl font-bold text-amber-600 mb-6">
              Coffee Investment Journey?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Join thousands of investors who are already growing their wealth through sustainable coffee plantation investments in Kenya's fertile highlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn bg-forest-600 text-white hover:bg-forest-700 px-4 py-2 text-xs">
                Start Investing <ArrowRight className="ml-2 h-3 w-3" />
              </button>
              <button className="btn btn-secondary px-4 py-2 text-xs">
                Schedule a Call <ArrowRight className="ml-2 h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 