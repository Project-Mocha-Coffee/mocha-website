import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-cream-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm border border-gold-400">
                <img 
                  src="/mocha.jpg" 
                  alt="Project Mocha Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-2 text-xl font-serif font-medium tracking-wider text-cream-50">
                Project Mocha
              </span>
            </div>
            <p className="mb-6">
              Where luxury meets sustainability, and every cup tells a story of ethical farming, community empowerment, and exceptional returns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-50 hover:bg-gold-400 hover:text-coffee-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-50 hover:bg-gold-400 hover:text-coffee-900 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-50 hover:bg-gold-400 hover:text-coffee-900 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif text-cream-50 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Our Vision</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Investment Packages</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Growth Timeline</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Community Impact</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Partnerships</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif text-cream-50 mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Investment Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Coffee Market Trends</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Sustainability Report</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Farm Tour Videos</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Investor Dashboard</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Media Kit</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif text-cream-50 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                <span>kenya@projectmocha.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                <span>+254 (700) 123-456</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                <span>Kenya HQ: 123 Coffee Farm Road, Embu County, Kenya</span>
              </li>
            </ul>
            <button className="btn btn-gold mt-6">
              Schedule a Call
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-coffee-800 text-center text-sm">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Project Mocha. All rights reserved. Investments involve risk and past performance does not guarantee future results.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;