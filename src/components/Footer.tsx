import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-50 text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container-custom">
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
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <Twitter size={18} />
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
                <span className="text-gray-600 text-sm">kenya@projectmocha.com</span>
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