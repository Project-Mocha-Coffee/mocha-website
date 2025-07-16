import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const { content } = useContent();
  const heroBackground = content?.hero?.backgroundImage || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-md">
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 border border-white/20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-coffee-900 text-emphasis mb-1">Welcome Back</h2>
            <p className="text-xs text-gray-600 text-emphasis">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-coffee-800 text-emphasis mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-emphasis"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium text-coffee-800 text-emphasis mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-2 py-1.5 pr-8 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-emphasis"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-3 w-3 text-coffee-600 focus:ring-coffee-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-1.5 block text-xs text-gray-700 text-emphasis">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-xs text-coffee-600 hover:text-coffee-800 text-emphasis">
                Forgot password?
              </Link>
            </div>

            <div className="flex gap-1.5">
              <button
                type="submit"
                className="flex-1 bg-coffee-600 text-white py-1.5 px-3 rounded-xl text-xs font-medium hover:bg-coffee-700 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2 transition duration-200 text-emphasis"
              >
                Log in
              </button>
              <button
                type="button"
                className="flex-1 bg-white text-gray-700 py-1.5 px-2 rounded-xl text-xs font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center gap-1 text-emphasis"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600 text-emphasis">
              Don't have an account?{' '}
              <Link to="/signup" className="text-coffee-600 hover:text-coffee-800 font-medium text-emphasis">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 