import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear form errors when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll-based visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('element-visible');
                el.classList.remove('element-hidden');
              }, index * 100); // Staggered delay of 100ms per element
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#3C2F2F] to-[#4A3728] min-h-screen font-sans">
      {/* Contact Section */}
      <section 
        ref={sectionRef}
        className="pt-20 pb-12 md:pt-24 md:pb-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="animate-element element-hidden text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5E6CC] mb-4 tracking-tight">
              Let's Brew Something Together!
            </h1>
            <p className="animate-element element-hidden text-[#E8D7B7] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Questions, ideas, or ready to invest in our coffee journey? Drop us a message, and we'll get back to you faster than a fresh espresso pour.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto animate-element element-hidden">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Company Details */}
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Header always at the top */}
                  <h2 className="animate-element element-hidden text-2xl font-bold text-brown-800 mb-6">
                    Company Details
                  </h2>
                  {/* Info + Socials in a flex-col, with space-between */}
                  <div className="flex flex-col justify-between flex-1 py-8">
                    <div>
                      <h3 className="animate-element element-hidden text-lg font-bold text-brown-700 mb-3">
                        The Mocha Coffee Enterprise
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600 mb-8">
                        <p className="animate-element element-hidden">
                          <span className="font-medium">Postal Address:</span> P.O Box 314 Embu, Kenya
                        </p>
                        <p className="animate-element element-hidden">
                          <span className="font-medium">Headquarters:</span> Mutunduri, Embu County, Kenya
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="animate-element element-hidden text-lg font-bold text-brown-700 mb-3">
                        Follow Us:
                      </h3>
                      <div className="flex gap-3">
                        <a 
                          href="https://www.instagram.com/projectmochahq/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="animate-element element-hidden w-10 h-10 bg-brown-200 rounded-full flex items-center justify-center hover:bg-brown-300 transition-colors"
                        >
                          <Instagram className="w-5 h-5 text-brown-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="bg-[#3C2F2F] p-8 lg:p-12 text-[#F5E6CC]">
                  <div className="space-y-6">
                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm">{errorMessage}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="animate-element element-hidden block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="animate-element element-hidden w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                          required
                        />
                        {formErrors.fullName && (
                          <p className="text-red-400 text-xs mt-1">{formErrors.fullName}</p>
                        )}
                      </div>
                      <div>
                        <label className="animate-element element-hidden block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="animate-element element-hidden w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                          required
                        />
                        {formErrors.email && (
                          <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="animate-element element-hidden block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Question about investment"
                          className="animate-element element-hidden w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                          required
                        />
                        {formErrors.subject && (
                          <p className="text-red-400 text-xs mt-1">{formErrors.subject}</p>
                        )}
                      </div>
                     {/*  <div>
                        <label className="animate-element element-hidden block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="animate-element element-hidden w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm"
                        />
                      </div> */}
                    </div>

                    <div>
                      <label className="animate-element element-hidden block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message..."
                        rows={6}
                        className="animate-element element-hidden w-full px-4 py-3 rounded-lg bg-[#FAF7F0] text-[#3C2F2F] placeholder-[#8B7A6A] input-focus text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`animate-element element-hidden px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-300 flex items-center ${
                                                     'bg-[#6B4E31] text-[#F5E6CC] hover:bg-[#8B5E3C] animate-pulseHover'
                        }`}
                      >
                         
                          <>
                            Send Message <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        
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