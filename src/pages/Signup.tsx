import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useContent } from '../contexts/ContentContext';

const Signup: React.FC = () => {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    agreeToTerms: false,
    subscribeToNews: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    if (!formData.country) {
      alert('Please select your country');
      return;
    }
    
    // Handle signup logic here
    console.log('Signup attempt:', formData);
    // For now, just redirect to login
    navigate('/login');
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log('Google signup attempt');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen gradient-forest relative overflow-hidden">
        {/* Background image with same setup as hero */}
        <div className="absolute inset-0 opacity-10">
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
          <div className={`w-full max-w-4xl transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 border border-white border-opacity-20">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                {/* Left Side - Image */}
                <div className="relative order-2 lg:order-1 lg:col-span-2">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img 
                      src={content?.hero?.backgroundImage || 'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1920'}
                      alt="Coffee plantation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="order-1 lg:order-2 lg:col-span-3">
                  {/* Title */}
                  <div className="mb-3">
                    <h1 className="text-base font-bold text-coffee-800 text-emphasis mb-1">
                      Ready To Join The Community? <span className="text-brown-600">Register Now!</span>
                    </h1>
                    <p className="text-coffee-600 text-xs text-emphasis">
                      Already a member? <Link to="/login" className="text-brown-600 hover:text-brown-800 font-semibold">Login</Link> to access your account.
                    </p>
                  </div>

                  {/* Signup Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name and Email Fields */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-coffee-800 mb-1 text-emphasis">
                          Full name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-2 py-1.5 rounded-xl border border-coffee-200 bg-white bg-opacity-70 text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-all duration-200 text-xs"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-coffee-800 mb-1 text-emphasis">
                          Enter email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-2 py-1.5 rounded-xl border border-coffee-200 bg-white bg-opacity-70 text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-all duration-200 text-xs"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="password" className="block text-xs font-semibold text-coffee-800 mb-1 text-emphasis">
                          Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-2 py-1.5 pr-8 rounded-xl border border-coffee-200 bg-white bg-opacity-70 text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-all duration-200 text-xs"
                            placeholder="Enter your password"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-coffee-500 hover:text-coffee-700 transition-colors"
                          >
                            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-xs font-semibold text-coffee-800 mb-1 text-emphasis">
                          Confirm password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-2 py-1.5 pr-8 rounded-xl border border-coffee-200 bg-white bg-opacity-70 text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-all duration-200 text-xs"
                            placeholder="Confirm password"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-coffee-500 hover:text-coffee-700 transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Country Selection */}
                    <div>
                      <label htmlFor="country" className="block text-xs font-semibold text-coffee-800 mb-1 text-emphasis">
                        Select your country <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-2 py-1.5 rounded-xl border border-coffee-200 bg-white bg-opacity-70 text-coffee-800 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-all duration-200 text-xs"
                        required
                      >
                        <option value="">Select a country / region...</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="w-3 h-3 text-brown-600 bg-white border-coffee-300 rounded focus:ring-brown-500 focus:ring-2 mt-1"
                          required
                        />
                        <label htmlFor="agreeToTerms" className="ml-1.5 text-xs text-coffee-600 text-emphasis">
                          I agree to the{' '}
                          <Link to="/terms" className="text-brown-600 hover:text-brown-800 underline text-emphasis">
                            Terms of Use
                          </Link>
                          {' '}&{' '}
                          <Link to="/privacy" className="text-brown-600 hover:text-brown-800 underline text-emphasis">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="subscribeToNews"
                          name="subscribeToNews"
                          checked={formData.subscribeToNews}
                          onChange={handleChange}
                          className="w-3 h-3 text-brown-600 bg-white border-coffee-300 rounded focus:ring-brown-500 focus:ring-2 mt-1"
                        />
                        <label htmlFor="subscribeToNews" className="ml-1.5 text-xs text-coffee-600 text-emphasis">
                          I want to be updated with the latest news.
                        </label>
                      </div>
                    </div>

                    {/* Signup Buttons - Horizontal Layout */}
                    <div className="flex gap-1.5">
                      <button
                        type="submit"
                        className="flex-1 btn btn-gold py-1.5 px-3 text-xs font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Register
                      </button>

                      <button
                        type="button"
                        onClick={handleGoogleSignup}
                        className="flex-1 flex items-center justify-center px-2 py-1.5 border border-coffee-300 rounded-xl bg-white bg-opacity-70 text-coffee-800 font-medium hover:bg-coffee-50 transition-all duration-300 text-xs"
                      >
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Register with Google
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup; 