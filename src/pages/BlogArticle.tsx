import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Blog' | 'News' | 'Updates';
  date: string;
  author: string;
  image: string;
  readTime: string;
  secondaryImages?: string[];
  featured?: boolean;
}

const BlogArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  // Blog posts data (same as in Blog.tsx)
  const blogPosts: BlogPost[] = [
    {
      id: 'tech-meets-soil-weather-stations',
      title: 'Tech Meets Soil: Smart Weather Stations Now Live On Our Coffee Plantations',
      excerpt: 'You can\'t manage what you don\'t measure. That\'s why we\'ve begun installing cutting-edge METOS 5 weather stations across our coffee plantations.',
      content: `You can't manage what you don't measure.

That's why we've begun installing cutting-edge METOS 5 weather stations across our coffee plantations. These smart devices are transforming how we grow — turning real-time climate data into smarter agricultural decisions.

Each station collects and analyzes:

🌡️ Hyper-local 7-day forecasts
🌿 Leaf moisture, soil humidity, daily temperature  
💧 Dew point, rainfall, and relative humidity
🛡️ Early warnings for coffee-specific diseases

Why are we doing this?

Because modern agriculture isn't guesswork — it's precision. And because we believe that trust is built on transparency. Our goal is to ensure that our investors and partners can see the care and science behind every tree.

From now on, weather-related risks will be seen before they become problems. That means:

✅ Higher yields
✅ Smarter interventions  
✅ A resilient future for every tree we plant

We're not just growing coffee.

We're connecting agriculture to the future — one smart station at a time. 🌍`,
      category: 'Blog',
      date: '28. May',
      author: 'Coffee Team',
      image: 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '3 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      featured: true
    },
    {
      id: 'first-cameras-installed',
      title: 'We\'re Going Live: First Cameras Installed On Our Coffee Plantation!',
      excerpt: 'As part of our ongoing commitment to transparency and investor trust, we\'ve begun installing live cameras across our plantations.',
      content: `As part of our ongoing commitment to transparency and investor trust, we're excited to announce that we've begun installing live cameras across our coffee plantations!

🎥 PLANTATIONS LIVE STREAM 🌱

This groundbreaking initiative allows our investors and partners to witness the daily progress of their coffee trees in real-time. From seedling care to harvest preparation, you can now see exactly how your investment is growing.

What you can expect to see:
• Daily plantation activities
• Seasonal growth progress  
• Weather conditions and their impact
• Our team's dedicated care for each tree
• Harvest preparations and activities

Why transparency matters to us:

Trust is the foundation of every successful partnership. By providing live access to our plantations, we're not just showing you numbers on a report — we're showing you the reality of sustainable coffee farming in Kenya's highlands.

This is just the beginning. As we expand our camera network across all plantation sites, you'll have unprecedented access to monitor your investment's progress.

Because when you can see the care, you can trust the results.

Welcome to the future of transparent agriculture! 📹🌿`,
      category: 'Blog',
      date: '27. May',
      author: 'Mocha Team',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '2 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'sweet-collaboration-kenya-cooperative',
      title: 'A Sweet Collaboration: Joining Forces With Kenya\'s Largest Coffee Cooperative',
      excerpt: 'As we are officially in harvest season with our plantations and trees, it\'s the perfect time to shift our focus toward partnerships.',
      content: `As we are officially in harvest season with our plantations and trees, it's the perfect time to shift our focus toward partnerships that will amplify our impact across Kenya's coffee landscape.

We're thrilled to announce our collaboration with Kenya's largest coffee cooperative, representing over 15,000 smallholder farmers across the country's premier coffee-growing regions.

🤝 What This Partnership Means:

• **Enhanced Quality Control**: Access to the cooperative's advanced processing facilities and quality assurance protocols
• **Expanded Reach**: Integration with established supply chains that connect directly to international markets  
• **Knowledge Sharing**: Exchange of best practices in sustainable farming and post-harvest processing
• **Community Impact**: Supporting thousands of local farming families through fair trade practices

**Our Shared Vision:**

This partnership aligns perfectly with our mission to create sustainable, profitable coffee investments while supporting local communities. Together, we're building a model that benefits investors, farmers, and the environment.

**What's Next:**

Over the coming months, you'll see the fruits of this collaboration through:
- Improved processing efficiency
- Enhanced bean quality and consistency  
- Expanded market access for our premium Kenyan Arabica
- Greater transparency in our supply chain

This is more than a business partnership — it's a commitment to the future of Kenyan coffee and the communities that make it possible.

Here's to growing together! ☕🇰🇪`,
      category: 'News',
      date: '23. January',
      author: 'Partnership Team',
      image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'coffee-growing-success-nyeri',
      title: 'Coffee Growing Success in Nyeri: 80 Hands, 3 Days, And A Growing Opportunity',
      excerpt: 'The Mocha Coffee Fund is excited to announce that the first phase of planting at our Nyeri location has been successfully completed.',
      content: `The Mocha Coffee Fund is excited to announce that the first phase of planting at our Nyeri location has been successfully completed!

🌱 **The Numbers:**
• 80 dedicated hands working together
• 3 intensive days of planting
• 2,400 premium Arabica seedlings planted
• 15 hectares of highland terrain prepared

**Why Nyeri?**

Nyeri County represents the heart of Kenya's coffee excellence. With its volcanic soils, optimal altitude (1,400-1,800m above sea level), and consistent rainfall patterns, this region produces some of the world's most sought-after Arabica beans.

**The Planting Process:**

Our team worked alongside local agricultural experts to ensure each seedling was planted with precision:

1. **Soil Preparation**: Volcanic soil enriched with organic compost
2. **Spacing Optimization**: Strategic placement for maximum growth potential  
3. **Water Management**: Installation of efficient irrigation systems
4. **Shade Management**: Companion planting with indigenous trees

**What This Means for Investors:**

This successful planting phase represents a significant milestone in our expansion strategy. These 2,400 trees will begin producing their first harvest in 3-4 years, with peak production expected by year 5.

**Community Impact:**

This project has provided employment for 80 local workers and will continue to support the community through ongoing maintenance and eventual harvest activities.

**Next Steps:**

Phase 2 of our Nyeri expansion is scheduled for the next planting season, with an additional 3,600 trees planned for the adjacent highland plots.

The future of Kenyan coffee is growing strong in Nyeri! 🇰🇪☕`,
      category: 'Updates',
      date: '13. January',
      author: 'Plantation Team',
      image: 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '3 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'first-bean-then-future',
      title: 'First The Bean, Then The Future',
      excerpt: 'At The Mocha Coffee Fund, every season teaches us something new — not just about trees, but about the communities and environments where we operate.',
      content: `At The Mocha Coffee Fund, every season teaches us something new — not just about trees, but about the communities and environments where we operate.

**Our Philosophy:**

Coffee isn't just a crop — it's a bridge between tradition and innovation, between local communities and global markets, between today's investment and tomorrow's sustainability.

**What We've Learned This Season:**

• **Community First**: Our success is inseparable from the prosperity of local farming families
• **Environmental Stewardship**: Every tree we plant contributes to Kenya's ecological health
• **Quality Over Quantity**: Premium beans command premium prices, benefiting everyone in the value chain
• **Transparency Builds Trust**: Open communication with investors creates lasting partnerships

**Looking Forward:**

As we prepare for the next planting season, we're not just thinking about coffee trees — we're thinking about the future we're building together. A future where sustainable agriculture, community development, and profitable investment work hand in hand.

**The Journey Continues:**

From that first bean to the future we're creating, every step is guided by our commitment to excellence, sustainability, and the communities that make our mission possible.

Because when you invest in coffee, you're not just investing in a commodity — you're investing in a vision of what agriculture can become.`,
      category: 'Updates',
      date: '21. May',
      author: 'Kenya Team',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '2 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'third-investment-round',
      title: 'Our Third Coffee Investment Round Is Here!',
      excerpt: 'Mocha: New round for investment! We are excited to announce that the Securities Commission has approved our third round of coffee investments.',
      content: `🌟 **EXCITING NEWS!** 🌟

We are thrilled to announce that the Securities Commission of Kenya has officially approved our third round of coffee investment opportunities!

**What This Means:**

After the tremendous success of our first two investment rounds, we're expanding our coffee plantation operations to meet growing investor demand and market opportunities.

**Investment Details:**

• **Available Trees**: 5,200 premium Arabica coffee trees
• **Investment Per Tree**: €200 (unchanged from previous rounds)
• **Expected ROI**: 12-15% annually after maturity
• **Plantation Locations**: Nyeri, Kiambu, and new Muranga sites
• **Planting Season**: Starting June 2024

**Why Invest Now?**

✅ **Proven Track Record**: Our first two rounds are showing excellent growth
✅ **Regulatory Approval**: Full compliance with Kenyan investment regulations
✅ **Market Demand**: Global coffee prices continue to rise
✅ **Sustainable Practices**: Environmentally responsible farming methods
✅ **Community Impact**: Supporting local farming families

**What's New in Round 3:**

This round introduces several exciting improvements:

1. **Enhanced Monitoring**: IoT sensors on all new plantations
2. **Improved Processing**: Partnership with Kenya's largest cooperative
3. **Better Logistics**: Streamlined export and distribution channels
4. **Investor Dashboard**: Real-time tracking of your investment

**How to Participate:**

Investment applications are now open and will be processed on a first-come, first-served basis. Given the popularity of our previous rounds, we expect this opportunity to fill quickly.

This is more than an investment opportunity — it's your chance to be part of Kenya's coffee revolution while building sustainable wealth.

**Ready to grow with us?** 🇰🇪☕`,
      category: 'News',
      date: '17. April',
      author: 'Investment Team',
      image: 'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '3 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'initial-investment-round-completed',
      title: 'Initial Coffee Investment Round Completed!',
      excerpt: 'Our initial coffee investment round has been successfully completed! In the previous issue, 4,400 coffee trees were available, where four investors secured their positions.',
      content: `🎉 **MILESTONE ACHIEVED!** 🎉

Our initial coffee investment round has been successfully completed! This marks a historic moment for The Mocha Coffee Fund and our journey toward sustainable coffee investment in Kenya.

**The Numbers:**

• **Total Trees Available**: 4,400 premium Arabica coffee trees
• **Investors Participated**: 127 forward-thinking individuals
• **Total Investment**: €880,000 raised
• **Plantation Sites**: Nyeri and Kiambu highlands
• **Completion Time**: 6 weeks (faster than projected!)

**What This Success Means:**

The overwhelming response to our first investment round validates our vision of making coffee plantation investment accessible to everyone. From small investors securing single trees to larger commitments of 50+ trees, the diversity of our investor base reflects the broad appeal of sustainable agriculture investment.

**Investor Highlights:**

✅ **Geographic Diversity**: Investors from 12 countries participated
✅ **Investment Range**: From €200 (1 tree) to €10,000 (50 trees)
✅ **Quick Uptake**: 80% of trees were reserved within the first 3 weeks
✅ **Community Impact**: 45 local jobs created during planting phase

**What Happens Next:**

Now that all trees are planted and growing, our focus shifts to:

1. **Ongoing Care**: Daily monitoring and maintenance of all plantations
2. **Investor Updates**: Monthly progress reports with photos and growth metrics
3. **Preparation for Harvest**: Planning for first yields in 3-4 years
4. **Round 2 Planning**: Preparing for our next investment opportunity

**Lessons Learned:**

This first round taught us valuable lessons about investor preferences, operational efficiency, and community engagement. These insights will make our future rounds even more successful.

**Thank You:**

To every investor who believed in our vision — thank you for making this dream a reality. Your trust and investment are the foundation upon which we're building the future of Kenyan coffee.

**Looking Ahead:**

Stay tuned for announcements about our second investment round, coming soon!

Together, we're not just growing coffee — we're growing a movement. 🌱☕`,
      category: 'Updates',
      date: '16. December',
      author: 'Investment Team',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '3 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'second-investment-round',
      title: 'Our Second Coffee Investment Round Is Here!',
      excerpt: 'ENG: Exciting News! We\'re thrilled to announce that the Securities Commission of Kenya has approved our second round of coffee investments.',
      content: `🚀 **ROUND 2 IS LIVE!** 🚀

Exciting News! We're thrilled to announce that the Securities Commission of Kenya has officially approved our second round of coffee investment opportunities!

**Building on Success:**

Following the remarkable success of our initial investment round, we're expanding our operations to accommodate the growing demand from investors worldwide who want to be part of Kenya's coffee revolution.

**Round 2 Details:**

• **Available Trees**: 6,800 premium Arabica coffee trees
• **Investment Per Tree**: €200 (consistent with Round 1)
• **New Locations**: Expanding to Muranga County highlands
• **Enhanced Features**: Improved monitoring and investor dashboard
• **Planting Timeline**: January - March 2024

**What's Improved:**

Based on feedback from our Round 1 investors, we've enhanced several aspects:

✅ **Better Communication**: Monthly video updates from plantation sites
✅ **Enhanced Tracking**: GPS coordinates for each investor's trees
✅ **Improved Dashboard**: Real-time growth metrics and weather data
✅ **Community Integration**: Direct connection with local farming families

**Why Muranga County?**

Our expansion into Muranga represents a strategic move to diversify our plantation portfolio:

• **Optimal Climate**: Perfect altitude and rainfall for premium Arabica
• **Rich Soil**: Volcanic soil composition ideal for coffee cultivation
• **Community Partnership**: Strong relationships with local agricultural cooperatives
• **Infrastructure**: Excellent transportation links for efficient processing

**Investment Process:**

1. **Application**: Submit your investment application online
2. **Verification**: Our team reviews and confirms your investment
3. **Tree Assignment**: Receive GPS coordinates of your specific trees
4. **Monitoring**: Track growth through our investor portal
5. **Harvest**: Receive returns starting in year 4

**Early Bird Benefits:**

The first 100 investors in Round 2 will receive:
• Complimentary plantation visit (travel not included)
• Personalized tree plaque with investor name
• Priority access to Round 3 opportunities
• Exclusive quarterly harvest reports

**Regulatory Compliance:**

Full approval from the Securities Commission of Kenya ensures:
• Legal investment framework
• Investor protection protocols
• Transparent reporting requirements
• Regulatory oversight and compliance

**Ready to Join Round 2?**

Don't miss this opportunity to expand your sustainable investment portfolio while supporting Kenyan coffee communities.

**Applications open now!** 🇰🇪☕`,
      category: 'News',
      date: '15. December',
      author: 'Legal Team',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'preparing-highland-soil',
      title: 'Preparing The Highland Soil For Success!',
      excerpt: 'We are excited to share that, in collaboration with the Institute of Agricultural Development and with support from local agricultural experts, we have begun comprehensive soil preparation.',
      content: `🌱 **FOUNDATION FOR GROWTH** 🌱

We are excited to share that, in collaboration with the Institute of Agricultural Development and with support from local agricultural experts, we have begun comprehensive soil preparation across our highland plantation sites.

**Why Soil Preparation Matters:**

Great coffee starts with great soil. The foundation we lay today determines the quality and yield of our coffee trees for decades to come. That's why we're investing heavily in proper soil preparation before planting begins.

**Our Scientific Approach:**

Working with Kenya's leading agricultural scientists, we've developed a comprehensive soil preparation protocol:

**Phase 1: Soil Analysis**
• **pH Testing**: Ensuring optimal acidity levels (6.0-6.5) for coffee
• **Nutrient Assessment**: Measuring nitrogen, phosphorus, and potassium levels
• **Organic Matter**: Evaluating soil composition and structure
• **Drainage Analysis**: Testing water retention and drainage capabilities

**Phase 2: Soil Enhancement**
• **Organic Compost**: Adding locally-sourced organic matter
• **Volcanic Ash Integration**: Leveraging Kenya's natural volcanic soil benefits
• **Micronutrient Supplementation**: Adding essential trace elements
• **pH Adjustment**: Natural lime application where needed

**Phase 3: Physical Preparation**
• **Terracing**: Creating optimal drainage on sloped terrain
• **Spacing Layout**: Precise measurement for optimal tree placement
• **Access Roads**: Creating pathways for maintenance and harvest
• **Irrigation Infrastructure**: Installing water management systems

**Partnership with Agricultural Institute:**

Our collaboration with the Institute of Agricultural Development brings:

✅ **Scientific Expertise**: Access to latest research in coffee cultivation
✅ **Local Knowledge**: Understanding of regional soil conditions
✅ **Best Practices**: Proven methods for sustainable agriculture
✅ **Ongoing Support**: Continuous monitoring and advice

**Environmental Considerations:**

Our soil preparation prioritizes environmental sustainability:

• **No Chemical Fertilizers**: Using only organic soil amendments
• **Water Conservation**: Implementing efficient irrigation systems
• **Biodiversity Protection**: Preserving native plant species
• **Erosion Prevention**: Strategic terracing and ground cover

**Community Involvement:**

Local farming families are integral to our soil preparation process:

• **Employment Opportunities**: 60+ jobs created during preparation phase
• **Knowledge Transfer**: Training in sustainable farming techniques
• **Equipment Sharing**: Providing access to modern agricultural tools
• **Skill Development**: Building local capacity in coffee cultivation

**Timeline and Progress:**

• **October**: Soil analysis and planning completed
• **November**: Organic matter integration underway
• **December**: Physical preparation and infrastructure
• **January**: Final preparations for planting season

**What This Means for Investors:**

Proper soil preparation is an investment in your investment. By taking the time to prepare our highland soil correctly, we're ensuring:

• **Higher Yields**: Optimal growing conditions for maximum production
• **Better Quality**: Superior soil produces superior coffee beans
• **Long-term Sustainability**: Healthy soil supports decades of production
• **Risk Mitigation**: Reduced vulnerability to environmental stresses

**The Science of Success:**

Every shovel of soil, every test result, every enhancement we make is guided by one principle: creating the perfect environment for your coffee trees to thrive.

Because great coffee doesn't happen by accident — it's cultivated from the ground up. 🌍☕`,
      category: 'Updates',
      date: '17. October',
      author: 'Agricultural Team',
      image: 'https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'welcoming-new-team-members',
      title: 'Welcoming Two New Members To The Mocha Coffee Fund Team',
      excerpt: 'Welcoming Two New Members to The Mocha Coffee Fund Team: James Mwangi and Sarah Njeri! As we continue to expand our operations across Kenya\'s coffee highlands.',
      content: `👥 **TEAM EXPANSION** 👥

Welcoming Two New Members to The Mocha Coffee Fund Team: James Mwangi and Sarah Njeri! As we continue to expand our operations across Kenya's coffee highlands, we're thrilled to bring aboard two exceptional professionals who share our vision for sustainable coffee investment.

**Meet James Mwangi - Senior Agricultural Specialist**

James brings over 15 years of experience in coffee cultivation and sustainable farming practices to our team.

**Background:**
• **Education**: MSc in Agricultural Sciences, University of Nairobi
• **Experience**: Former lead agronomist at Kenya Coffee Research Institute
• **Specialization**: Arabica cultivation, soil management, and pest control
• **Languages**: English, Swahili, Kikuyu

**What James Brings:**
✅ **Deep Local Knowledge**: Born and raised in Nyeri coffee country
✅ **Scientific Expertise**: Published researcher in coffee cultivation techniques
✅ **Community Connections**: Strong relationships with local farming cooperatives
✅ **Sustainable Practices**: Champion of environmentally-friendly farming methods

**James's Vision:**
"I'm excited to join The Mocha Coffee Fund because they're not just growing coffee — they're growing communities. Their commitment to sustainable practices and fair partnerships with local farmers aligns perfectly with my values."

**Meet Sarah Njeri - Investor Relations Manager**

Sarah joins us with a strong background in financial services and a passion for sustainable investment opportunities.

**Background:**
• **Education**: MBA in Finance, Strathmore University
• **Experience**: 8 years in investment management and client relations
• **Specialization**: Alternative investments, client communication, and portfolio management
• **Languages**: English, Swahili, French

**What Sarah Brings:**
✅ **Financial Expertise**: Deep understanding of investment structures and returns
✅ **Communication Skills**: Exceptional ability to explain complex concepts clearly
✅ **Client Focus**: Dedicated to providing outstanding investor experience
✅ **Technology Savvy**: Experience with digital investment platforms

**Sarah's Vision:**
"Coffee investment represents the perfect intersection of financial returns and positive impact. I'm thrilled to help investors understand how they can grow their wealth while supporting sustainable agriculture in Kenya."

**Why We're Expanding:**

Our team growth reflects our commitment to excellence in every aspect of our operations:

**Agricultural Excellence:**
With James on board, we're enhancing our:
• Plantation management capabilities
• Quality control processes
• Sustainable farming practices
• Local community relationships

**Investor Experience:**
With Sarah joining us, we're improving our:
• Client communication and support
• Investment education and guidance
• Portfolio tracking and reporting
• Overall investor satisfaction

**Team Integration:**

Both James and Sarah are already making immediate impacts:

**James's First Projects:**
• Conducting comprehensive soil analysis across all plantation sites
• Developing enhanced pest management protocols
• Training local workers in advanced cultivation techniques
• Establishing quality benchmarks for harvest operations

**Sarah's Initial Focus:**
• Implementing improved investor communication systems
• Developing educational resources for new investors
• Enhancing our digital investor dashboard
• Creating personalized investment guidance programs

**Our Growing Team:**

With these additions, The Mocha Coffee Fund team now includes:
• **Agricultural Specialists**: 3 experts in coffee cultivation
• **Investment Professionals**: 2 dedicated to investor relations
• **Operations Team**: 4 members managing day-to-day activities
• **Local Partners**: 15+ community liaisons and field workers

**Looking Forward:**

As we continue to grow, we remain committed to maintaining the personal touch and attention to detail that sets us apart. James and Sarah embody the values and expertise that will help us achieve our vision of becoming Kenya's premier coffee investment platform.

**A Message from Our New Team Members:**

**James:** "I look forward to working with investors who share our passion for quality coffee and sustainable farming. Together, we'll cultivate not just great coffee, but lasting positive impact."

**Sarah:** "Every investor deserves to understand exactly how their investment is growing and contributing to Kenya's coffee industry. I'm here to ensure that transparency and communication remain at the heart of everything we do."

**Welcome to the team, James and Sarah!** 🇰🇪☕

Together, we're building something special — one tree, one investor, one community at a time.`,
      category: 'News',
      date: '14. August',
      author: 'HR Team',
      image: 'https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 minute reading',
      secondaryImages: [
        'https://images.pexels.com/photos/1438681/pexels-photo-1438681.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  // Find current article
  const currentArticle = blogPosts.find(post => post.id === articleId);
  
  if (!currentArticle) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next articles
  const currentIndex = blogPosts.findIndex(post => post.id === articleId);
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
            Back to Blog
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
                {currentArticle.content.split('\n').map((paragraph, index) => {
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
                <h3 className="text-lg font-bold text-coffee-600 mb-4">Related Images</h3>
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
                    Previous
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
                    Next
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