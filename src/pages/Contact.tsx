import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

// Custom X (Twitter) icon component
const XIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-brown-800 min-h-screen">
      {/* Contact Section */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Let's Connect!
            </h1>
            <p className="text-cream-100 text-sm max-w-2xl mx-auto">
              Have questions, feedback, or want to discuss a potential investment? Simply fill out the form below, and a member of our team will get back to you as soon as possible.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Company Details */}
                <div className="p-6 lg:p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-brown-800 mb-6">
                      Company Details
                    </h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-brown-700 mb-3">
                        The Mocha Coffee Enterprise
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Tax ID:</span> 53175249158</p>
                        <p><span className="font-medium">Identification number:</span> 05525209</p>
                        <p><span className="font-medium">Address:</span> Nairobi Business District, 10000 Nairobi, Kenya</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-brown-700 mb-3">
                        Head Office
                      </h3>
                      <div className="text-sm text-gray-600">
                        <p>Coffee Investment Center Floor 2, Office 2.11</p>
                        <p><span className="font-medium">Address:</span> Kenyatta Avenue 1, 21000 Nairobi, Kenya</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-brown-700 mb-3">
                        Follow Us:
                      </h3>
                      <div className="flex gap-3">
                        <a href="https://www.instagram.com/projectmocha254/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brown-200 rounded-full flex items-center justify-center hover:bg-brown-300 transition-colors">
                          <Instagram className="w-5 h-5 text-brown-700" />
                        </a>
                        <a href="https://www.x.com/projectmocha254" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brown-200 rounded-full flex items-center justify-center hover:bg-brown-300 transition-colors">
                          <XIcon className="w-5 h-5 text-brown-700" />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61561477005084" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brown-200 rounded-full flex items-center justify-center hover:bg-brown-300 transition-colors">
                          <Facebook className="w-5 h-5 text-brown-700" />
                        </a>
                        <a href="https://www.linkedin.com/company/project-mocha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brown-200 rounded-full flex items-center justify-center hover:bg-brown-300 transition-colors">
                          <Linkedin className="w-5 h-5 text-brown-700" />
                        </a>
                        <button className="w-10 h-10 bg-brown-200 rounded-full flex items-center justify-center hover:bg-brown-300 transition-colors">
                          <Youtube className="w-5 h-5 text-brown-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="bg-brown-800 p-6 lg:p-8 text-white">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Full name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brown-600 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brown-600 text-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Subject and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Question about investment"
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brown-600 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brown-600 text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brown-600 text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn bg-brown-600 text-white hover:bg-brown-700 px-6 py-3 text-sm font-medium"
                      >
                        Send message <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 