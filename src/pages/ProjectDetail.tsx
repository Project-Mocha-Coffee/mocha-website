import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Check, Play, MapPin, Calendar, TrendingUp, Plus, Minus } from 'lucide-react';
import Timeline from '../components/Timeline';

interface ProjectData {
  id: string;
  title: string;
  location: string;
  region: string;
  status: string;
  statusColor: string;
  fundName: string;
  pricePerTree: string;
  roi: string;
  investmentCycle: string;
  totalTrees: number;
  treesSold: number;
  treesAvailable: number;
  altitude: string;
  plotSize: string;
  sunnyDays: number;
  description: string;
  timelineStages: Array<{
    stage: string;
    title: string;
    description: string;
    status: 'completed' | 'coming-soon';
    image: string;
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
  investmentDescription: string;
  returnsDescription: string;
  images: string[];
}

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projectsData: Record<string, ProjectData> = {
    'nyeri-highland-2024': {
      id: 'nyeri-highland-2024',
      title: 'Nyeri Highland Coffee Farm 2024',
      location: 'Nyeri County, Central Kenya',
      region: 'Kenya\'s premier coffee highlands',
      status: 'Available now',
      statusColor: 'bg-brown-800',
      fundName: 'The Coffee Highland Project',
      pricePerTree: '200€',
      roi: '11% - 22%',
      investmentCycle: '2024-25',
      totalTrees: 25200,
      treesSold: 15480,
      treesAvailable: 9720,
      altitude: '1,650m',
      plotSize: '865,400m²',
      sunnyDays: 195,
      description: 'A sustainable investment rooted in the heart of Kenya\'s fertile highlands, designed for long-term growth and premium Arabica yields.',
      timelineStages: [
        {
          stage: 'Land In Progress',
          title: 'Highland Land Preparation',
          description: 'We are happy to announce that we are currently finishing all necessary administrative steps to start preparing the highland land. Part of the coffee trees will be planted in 2024, the rest will be planted by the end of 2025.',
          status: 'completed',
          image: 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          stage: 'Coffee Seedlings',
          title: 'Premium Arabica Seedlings',
          description: 'High-quality Arabica seedlings are the foundation for a successful coffee plantation. We are sourcing premium, disease-resistant coffee varietals from Kenya\'s top nurseries, specifically selected for highland growing conditions.',
          status: 'coming-soon',
          image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          stage: 'Highland Preparation',
          title: 'Volcanic Soil Preparation',
          description: 'Preparing Kenya\'s volcanic highland soil for optimal coffee cultivation. Our local agricultural experts ensure the land is perfectly conditioned for premium Arabica coffee trees to thrive.',
          status: 'coming-soon',
          image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          stage: 'Trees Planted',
          title: 'Coffee Trees Planted',
          description: 'Premium Arabica coffee trees planted in Kenya\'s ideal highland climate. Our experienced local farmers follow sustainable practices to ensure healthy growth and future premium yields.',
          status: 'coming-soon',
          image: 'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ],
      stats: [
        { number: '25', label: 'Years of Highland Farming' },
        { number: '8', label: 'Dedicated Coffee Experts' },
        { number: '2000+', label: 'Satisfied Investors' },
        { number: '15000+', label: 'Coffee trees managed' },
        { number: '40+', label: 'Years of Projected Returns' }
      ],
      investmentDescription: 'Coffee plantations provide over 40 years of stability and yield. Our investment strategy focuses on sustainable agricultural practices in Kenya\'s highlands that ensure consistent production and profitability for our investors over the long haul.',
      returnsDescription: 'Profits are prioritized to first cover the expenses of investors, thereby ensuring the security of your investment. We believe in creating a transparent and trustworthy relationship with our investors, where your financial well-being is our primary concern.',
      images: [
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'kiambu-highlands-2023': {
      id: 'kiambu-highlands-2023',
      title: 'Kiambu Highlands 2023/24',
      location: 'Kiambu County, Central Kenya',
      region: 'High-altitude coffee region',
      status: 'Sold out',
      statusColor: 'bg-amber-600',
      fundName: 'The Kiambu Coffee Project',
      pricePerTree: '200€',
      roi: '11% - 22%',
      investmentCycle: '2023-24',
      totalTrees: 18500,
      treesSold: 18500,
      treesAvailable: 0,
      altitude: '1,800m',
      plotSize: '650,000m²',
      sunnyDays: 210,
      description: 'A proven highland coffee investment in Kiambu\'s premium growing region, delivering exceptional Arabica quality and consistent returns.',
      timelineStages: [
        {
          stage: 'Land Completed',
          title: 'Highland Land Established',
          description: 'Successfully completed all land preparation in Kiambu\'s prime highland location. This established plantation is now in full production with mature coffee trees yielding premium Arabica beans.',
          status: 'completed',
          image: 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          stage: 'Trees Established',
          title: 'Mature Coffee Trees',
          description: 'All coffee trees are now mature and producing premium Arabica beans. This plantation represents our proven track record of successful highland coffee cultivation in Kenya.',
          status: 'completed',
          image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ],
      stats: [
        { number: '25', label: 'Years of Highland Farming' },
        { number: '8', label: 'Dedicated Coffee Experts' },
        { number: '1800+', label: 'Satisfied Investors' },
        { number: '18500', label: 'Coffee trees managed' },
        { number: '35+', label: 'Years of Projected Returns' }
      ],
      investmentDescription: 'This established Kiambu plantation demonstrates our proven ability to deliver consistent returns from highland coffee cultivation. With mature trees already producing premium beans, this project showcases the long-term value of Kenyan coffee investments.',
      returnsDescription: 'Investors in our Kiambu project have seen consistent returns as projected. Our transparent profit-sharing model ensures investors receive their entitled returns from this established highland coffee plantation.',
      images: [
        'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'muranga-plantation-2022': {
      id: 'muranga-plantation-2022',
      title: 'Muranga Plantation 2022',
      location: 'Muranga County, Kenya',
      region: 'Award-winning coffee region',
      status: 'Sold out',
      statusColor: 'bg-amber-600',
      fundName: 'The Muranga Coffee Cooperative',
      pricePerTree: '200€',
      roi: '11% - 22%',
      investmentCycle: '2022-23',
      totalTrees: 12000,
      treesSold: 12000,
      treesAvailable: 0,
      altitude: '1,750m',
      plotSize: '420,000m²',
      sunnyDays: 205,
      description: 'Our flagship mature plantation in Muranga, producing award-winning coffee beans and demonstrating the exceptional potential of Kenyan highland coffee investments.',
      timelineStages: [
        {
          stage: 'Fully Matured',
          title: 'Award-Winning Plantation',
          description: 'This mature plantation in Muranga is now producing award-winning coffee beans, representing the pinnacle of our highland coffee cultivation expertise. Trees are in peak production phase.',
          status: 'completed',
          image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ],
      stats: [
        { number: '25', label: 'Years of Highland Farming' },
        { number: '8', label: 'Dedicated Coffee Experts' },
        { number: '1200+', label: 'Satisfied Investors' },
        { number: '12000', label: 'Coffee trees managed' },
        { number: '30+', label: 'Years of Projected Returns' }
      ],
      investmentDescription: 'Our Muranga plantation represents the gold standard of Kenyan highland coffee cultivation. This mature plantation with award-winning beans demonstrates the exceptional long-term value and quality that defines our investment approach.',
      returnsDescription: 'As our flagship mature plantation, Muranga has consistently delivered exceptional returns to investors. The award-winning quality of these beans commands premium prices, ensuring strong profitability for our investment partners.',
      images: [
        'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  };

  const project = projectId ? projectsData[projectId] : null;

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
                  <h1 className="text-2xl font-bold text-brown-700 mb-4">Project Not Found</h1>
        <Link to="/projects" className="btn bg-brown-700 text-white hover:bg-brown-800 px-4 py-2 text-sm">
            Back to Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="min-h-screen gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Project info */}
              <div>
                <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.fundName} Since 2024
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-bold leading-tight">
                  {project.title.split(' ')[0]}<br />
                  {project.title.split(' ').slice(1).join(' ')}
                </h1>
                
                <p className="text-base md:text-lg text-cream-100 max-w-3xl leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-4 py-2 text-sm">
                    Free strategy session <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="btn btn-secondary px-4 py-2 text-sm">
                    View real results <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <p className="text-cream-200 italic text-sm">
                  Talk to our advisor and get to know everything you need for a secure investment.
                </p>
              </div>

              {/* Right side - Investment card */}
              <div className="lg:ml-auto">
                <div className="card bg-white rounded-3xl p-6 max-w-md">
                  <div className="bg-brown-800 text-white rounded-2xl p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">Invest Now</h3>
                    <div className={`inline-block ${project.statusColor} text-white px-3 py-1 rounded-full text-sm mb-2`}>
                      {project.status}
                    </div>
                    <p className="text-cream-100 text-sm">
                      See current availability and secure your share of this unique investment opportunity.
                    </p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <span className="text-amber-600 text-2xl font-bold mr-2">{project.treesAvailable}</span>
                      <span className="text-gray-600 text-sm">Total trees available now</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-white text-xs">€</span>
                        </div>
                        <span className="text-gray-600">Price per tree: </span>
                        <span className="font-medium">{project.pricePerTree}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full mr-2 flex items-center justify-center">
                          <TrendingUp className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-gray-600">ROI: </span>
                        <span className="font-medium">{project.roi}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full mr-2 flex items-center justify-center">
                          <Calendar className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-gray-600">Investment cycle: </span>
                        <span className="font-medium">{project.investmentCycle}</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn bg-forest-600 text-white hover:bg-forest-700 w-full px-4 py-3 text-sm">
                    Invest now <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">
              Welcome To Our
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">
              2024 Plantation
            </h3>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto">
              Part of the coffee trees will be planted in 2024, the rest will become part of this highland plantation by the end of 2025.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Video/Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl h-64 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-forest-200 rounded-3xl p-6 text-white">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-cream-200">Total trees</span>
                  <span className="text-xl font-bold">{project.totalTrees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-cream-200">Trees sold</span>
                  <span className="text-xl font-bold">{project.treesSold.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-cream-200">Trees available</span>
                  <span className="text-xl font-bold text-amber-400">{project.treesAvailable.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-cream-200">Altitude:</div>
                  <div className="font-bold">{project.altitude}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs">📐</span>
                  </div>
                  <div className="text-xs text-cream-200">Plot size:</div>
                  <div className="font-bold text-xs">{project.plotSize}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs">☀️</span>
                  </div>
                  <div className="text-xs text-cream-200">Sunny days:</div>
                  <div className="font-bold">{project.sunnyDays}</div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-4 py-2 text-sm">
                  Schedule a call <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="btn bg-white text-forest-600 hover:bg-cream-100 px-4 py-2 text-sm">
                  Invest now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plantation Status Timeline */}
      <Timeline 
        stages={project.timelineStages.map(stage => ({
          title: stage.title,
          description: stage.description,
          image: stage.image,
          badge: stage.stage,
          status: stage.status
        }))}
        title="Plantation Status"
        subtitle="Discover the growth stages of your coffee investment, from highland planting to peak profitability."
        backgroundColor="bg-forest-200"
        textColor="text-white"
        accentColor="bg-amber-500"
        showCurvedConnectors={true}
        autoScroll={false}
      />



      {/* Investment and Returns */}
      <section className="py-16 md:py-20 bg-cream-50" style={{
        backgroundImage: `url('https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="bg-white/95 backdrop-blur-sm">
          <div className="container-custom py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">
                Find Out More About
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600">
                Investment And Returns
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Investment */}
              <div className="bg-forest-200 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">Investment</h4>
                <p className="text-cream-100 text-sm leading-relaxed mb-6">
                  {project.investmentDescription}
                </p>
                <button className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-4 py-2 text-sm">
                  Register now
                </button>
              </div>

              {/* Returns */}
              <div className="bg-amber-500 rounded-3xl p-8 text-forest-600">
                <h4 className="text-2xl font-bold mb-6">Returns</h4>
                <p className="text-forest-700 text-sm leading-relaxed mb-6">
                  {project.returnsDescription}
                </p>
                <button className="btn bg-forest-600 text-white hover:bg-forest-700 px-4 py-2 text-sm">
                  My account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Header and Content */}
            

            {/* Stats */}
            

            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt="Coffee plantation"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-200 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots indicator below image */}
              <div className="flex justify-center mt-6 gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-forest-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Question prompt */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-amber-600">Do You Have A</span><br />
                  <span className="text-forest-600">Question?</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Take a look below at the most frequently asked questions. If you can not find the answer to your question, feel free to send us an email and we will get back to you as soon as possible.
                </p>
                <p className="text-forest-600 font-medium text-sm mb-6">
                  Transparency is always the best policy!
                </p>
                <button className="btn bg-amber-500 text-forest-600 hover:bg-amber-400 px-4 py-2 text-sm">
                  Schedule a call <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Right side - FAQ Items */}
              <div className="space-y-4">
                {[
                  {
                    question: "Who Can Invest?",
                    answer: "Everyone! We have investors from all around the world. Plant a tree and join the team!"
                  },
                  {
                    question: "What Is The Minimum Investment?",
                    answer: "The minimum investment is 200€ per coffee tree. This allows you to start your coffee investment journey with a manageable entry point while still participating in the long-term returns of premium Kenyan coffee cultivation."
                  },
                  {
                    question: "How Do I Fund My Investment?",
                    answer: "You can fund your coffee tree investment through bank transfer, credit card, or other secure payment methods. Our team will guide you through the simple funding process once you decide to invest."
                  },
                  {
                    question: "What Am I Investing In?",
                    answer: "You're investing in premium Arabica coffee trees in Kenya's highland regions. Each tree is carefully cultivated in optimal growing conditions to produce high-quality coffee beans that generate returns through sales of the harvested coffee."
                  },
                  {
                    question: "How Often Are Payouts Made?",
                    answer: "Payouts are typically made annually after the coffee harvest season. The exact timing depends on the harvest cycle and processing of the coffee beans, usually between 12-18 months after planting for new trees."
                  },
                  {
                    question: "How Are Payouts Calculated?",
                    answer: "Payouts are calculated based on the net profit from coffee sales after deducting operational costs, processing, and management fees. Returns typically range from 11-22% annually, depending on market prices and harvest yields."
                  },
                  {
                    question: "How Can I Receive My Payout?",
                    answer: "Payouts can be received via bank transfer to your designated account. We provide detailed statements showing the calculation of your returns and can accommodate various international payment methods."
                  },
                  {
                    question: "Can I Reinvest My Payouts?",
                    answer: "Yes! Many investors choose to reinvest their payouts into additional coffee trees, compound their investment growth. This allows you to expand your coffee plantation holdings and increase future returns."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-forest-600 text-sm">{faq.question}</span>
                      <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                        {openFAQ === index ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;