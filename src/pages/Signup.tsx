import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight, Coffee, Globe, Leaf, Users } from 'lucide-react'; // Assuming lucide-react is installed and configured

const Onboarding: React.FC = () => { // Renamed from Signup to Onboarding for clarity
  const { content } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen gradient-forest relative overflow-hidden">
        {/* Background image with improved opacity for better readability */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url('${content?.hero?.backgroundImage || 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1920'}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 pt-24">
          <div className={`w-full max-w-5xl transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white bg-opacity-95 backdrop-blur-lg backdrop-filter rounded-3xl shadow-2xl p-6 md:p-8 border border-white border-opacity-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Side - Educational Content and Video (now order-1 on mobile) */}
                <div className="order-1 space-y-8">
                  {/* Improved title with icon */}
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-8 h-8 text-brown-600" />
                    <h1 className="text-3xl font-bold text-coffee-800">Discover Project Mocha</h1>
                  </div>
                  
                  {/* Video first for better engagement */}
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/V4p5oup4R8A" 
                      title="Project Mocha: Unlocking Finance for Kenyan Coffee Farmers" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="transition-transform duration-300 hover:scale-105"
                    ></iframe>
                  </div>

                  {/* Improved content with bullet points and icons for scannability */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-coffee-800">Empowering Coffee Farmers Through Blockchain</h2>
                    <p className="text-coffee-600 text-base leading-relaxed">
                      Project Mocha connects smallholder farmers in Kenya and beyond directly with global investors by tokenizing coffee trees.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-coffee-600 text-base">
                          <span className="font-semibold">Boost Productivity:</span> Farmers get upfront capital to improve their yields and access global markets.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-coffee-600 text-base">
                          <span className="font-semibold">Transparency & Traceability:</span> Blockchain ensures every step is verifiable, building trust.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-brown-600 flex-shrink-0 mt-1" />
                        <p className="text-coffee-600 text-base">
                          <span className="font-semibold">Shared Benefits:</span> Investors own tokens representing coffee trees and share in future harvests.
                        </p>
                      </div>
                    </div>

                    <p className="text-coffee-600 text-base italic">
                      Addressing key challenges like finance access and sustainability for a more equitable coffee ecosystem.
                    </p>
                  </div>
                </div>

                {/* Right Side - CTA Section (now order-2 on mobile, sticky on desktop) */}
                <div className="order-2 lg:sticky lg:top-24 self-start">
                  <div className="bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-coffee-800 mb-4">Ready to Join the Revolution?</h2>
                    <p className="text-coffee-600 text-base mb-6">
                      Start your journey with Project Mocha and make a real impact in the coffee industry.
                    </p>
                    
                    {/* Improved button with icon and hover effect */}
                    <button
                      onClick={() => window.location.href = 'https://portal-rho-lemon.vercel.app/marketplace'}
                      className="w-full btn btn-gold py-3 px-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Proceed to Portal</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;