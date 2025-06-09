import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Cta: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };
  
  return (
    <section className="section bg-forest-600">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`card-large p-8 md:p-12 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Main CTA */}
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="heading-secondary text-coffee-600 mb-2">
                  Ready To Join 2000+
                </h3>
                <h4 className="heading-secondary text-forest-600 mb-6">
                  Kenyan Coffee Investors?
                </h4>
                <p className="text-gray-700 mb-6">
                  Take the first step toward sustainable and profitable growth.
                </p>
                <button className="btn btn-primary">
                  Invest now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              {/* Right Side - Newsletter */}
              <div>
                <h3 className="heading-secondary text-white mb-2">
                  Get Our Best Deals Straight In Your Inbox
                </h3>
                <p className="text-green-100 mb-6">
                  Learn more about Kenyan coffee farming opportunities and be the first to know about new investment openings in our Embu plantations.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coffee-600 focus:border-transparent"
                    required
                  />
                  <button 
                    type="submit"
                    className="btn bg-coffee-600 text-white hover:bg-coffee-700 border-coffee-600 px-8"
                  >
                    Subscribe <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;