import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { signupNewsletter } from '../lib/supabase';

const Cta = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'duplicate'>('idle');

  // Configurable booking URL - Updated to Investor Waitlist Form
  const BOOKING_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfGl7ml1yBLsz_KNkrc2M-vkIe-9q4_-1IKCnyBsBHitAtVbA/viewform";

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const result = await signupNewsletter(email);
      
      if (result.success) {
        setSubmitStatus('success');
        setEmail('');
        // Reset success message after 4 seconds
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        // Check for specific error types
        const error = result.error as any;
        if (error && error.code === '23505') {
          // Duplicate email error
          setSubmitStatus('duplicate');
        } else {
          // Generic error
          setSubmitStatus('error');
        }
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInvestClick = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-brown-800">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-6 lg:p-8 xl:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-12 items-center">
              {/* Left Side - Main CTA */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-6 lg:p-7 xl:p-8 order-2 lg:order-1">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-brown-800 mb-1 sm:mb-2 leading-tight">
                  Ready To Join 2000+
                </h3>
                <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-brown-700 mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6 leading-tight">
                  Kenyan Coffee Investors?
                </h4>
                <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-base mb-4 sm:mb-6 md:mb-5 lg:mb-6 leading-relaxed">
                  Take the first step toward sustainable and profitable growth.
                </p>
                <button 
                  onClick={handleInvestClick}
                  className="btn bg-brown-700 text-white hover:bg-brown-800 w-full sm:w-auto md:w-full lg:w-auto px-6 py-3 text-sm sm:text-base rounded-lg touch-manipulation"
                >
                  Invest now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Right Side - Newsletter */}
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                  Get Our Best Deals Straight In Your Inbox
                </h3>
                <p className="text-gray-100 text-sm sm:text-base md:text-sm lg:text-base mb-4 sm:mb-6 md:mb-5 lg:mb-6 leading-relaxed">
                  Learn more about Kenyan coffee farming opportunities and be the first to know about new investment openings in our Embu plantations.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-0 sm:flex sm:gap-3 md:space-y-3 md:block lg:space-y-0 lg:flex lg:gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full sm:flex-1 md:w-full lg:flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:border-transparent text-sm sm:text-base touch-manipulation"
                    required
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto md:w-full lg:w-auto btn bg-brown-700 text-white hover:bg-brown-800 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-sm sm:text-base rounded-lg touch-manipulation"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </form>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                    ✅ Thank you! You've been subscribed to our newsletter.
                  </div>
                )}
                {submitStatus === 'duplicate' && (
                  <div className="mt-3 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg text-sm">
                    ℹ️ This email is already subscribed to our newsletter. You're all set!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                    ❌ Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;