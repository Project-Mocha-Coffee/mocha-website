import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// Custom X (Twitter) icon component
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-50 text-gray-700 border-t border-gray-200">
      {/* Conversion CTA Section */}
      <div className="bg-brown-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download Our 10-Year Cash Flow Projection
            </h2>
            <p className="text-brown-200 mb-6 max-w-2xl mx-auto">
              See exactly how your coffee investment will grow over the next decade with our detailed financial projections.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-brown-600 bg-brown-700 text-white placeholder-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-400"
                required
              />
              <select
                className="w-full px-4 py-3 rounded-lg border border-brown-600 bg-brown-700 text-white focus:outline-none focus:ring-2 focus:ring-brown-400"
                required
              >
                <option value="">Investment Interest</option>
                <option value="<$10k">&lt;$10k</option>
                <option value="$10k–$50k">$10k–$50k</option>
                <option value="$50k+">$50k+</option>
              </select>
              <button
                type="submit"
                className="w-full bg-brown-600 hover:bg-brown-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Download Free Projection
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm border border-coffee-200">
                <img 
                  src="/mocha.jpg" 
                  alt="Project Mocha Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-coffee-800 text-emphasis">
                Project Mocha
              </span>
            </div>
            <p className="mb-6 text-gray-600 leading-relaxed text-sm">
              Where luxury meets sustainability, and every cup tells a story of ethical farming, community empowerment, and exceptional returns.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/projectmocha254/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brown-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61561477005084" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brown-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.x.com/projectmocha254" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brown-600 hover:text-white transition-colors">
                <XIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/company/project-mocha/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brown-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-coffee-800 mb-6 text-emphasis">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Our Vision</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Investment Packages</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Growth Timeline</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Community Impact</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Partnerships</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-coffee-800 mb-6 text-emphasis">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Investment Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Coffee Market Trends</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Sustainability Report</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Farm Tour Videos</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Investor Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm">Media Kit</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-coffee-800 mb-6 text-emphasis">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-coffee-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">info@projectmocha.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-coffee-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">+254 (700) 123-456</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-coffee-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">Kenya HQ: 123 Coffee Farm Road, Embu County, Kenya</span>
              </li>
            </ul>
            <button className="btn btn-primary mt-6 text-sm">
              Schedule a Call
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Project Mocha. All rights reserved. Investments involve risk and past performance does not guarantee future results.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-coffee-600 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-coffee-600 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-coffee-600 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;