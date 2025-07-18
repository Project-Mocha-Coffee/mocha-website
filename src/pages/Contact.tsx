import { useState } from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

const Contact = () => {
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-b from-[#3C2F2F] to-[#4A3728] min-h-screen font-sans">
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scalePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animate-pulseHover:hover {
            animation: scalePulse 0.5s ease-in-out;
          }
          .input-focus {
            transition: all 0.3s ease;
          }
          .input-focus:focus {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      {/* Contact Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5E6CC] mb-4 tracking-tight">
              Let's Brew Something Together!
            </h1>
            <p className="text-[#E8D7B7] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Questions, ideas, or ready to invest in our coffee journey? Drop us a message, and we'll get back to you faster than a fresh espresso pour.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Company Details */}
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Header always at the top */}
                  <h2 className="text-2xl font-bold text-brown-800 mb-6">
                    Company Details
                  </h2>
                  {/* Info + Socials in a flex-col, with space-between */}
                  <div className="flex flex-col justify-between flex-1 py-8">
                    <div>
                      <h3 className="text-lg font-bold text-brown-700 mb-3">
                        The Mocha Coffee Enterprise
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600 mb-8">
                        <p><span className="font-medium">Postal Address:</span> P.O Box 314 Embu, Kenya</p>
                        <p><span className="font-medium"></span> </p>
                        <p><span className="font-medium">Headquarters: </span> Mutunduri, Embu County, Kenya</p>
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="bg-[#3C2F2F] p-8 lg:p-12 text-[#F5E6CC]">
                  <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                        />
                      </div>
                    </div>

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
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleSubmit}
                        className="bg-[#6B4E31] text-[#F5E6CC] px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#8B5E3C] transition-colors duration-300 animate-pulseHover flex items-center"
                      >
                        Send Message <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
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