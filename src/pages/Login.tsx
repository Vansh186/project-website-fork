import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Users } from 'lucide-react';
import Cookies from 'js-cookie';
import BlobButton from '../components/BlobButton';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Demo credentials
  const demoCredentials = {
    email: 'admin@enactusbitspilani.com',
    password: 'enactus2024'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (formData.email === demoCredentials.email && formData.password === demoCredentials.password) {
        // Generate a mock JWT token
        const mockToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlbmFjdHVzIiwiaWF0IjoxNzM0MDU2NDAwLCJleHAiOjE3MzQwNjAwMDAsImF1ZCI6ImVuYWN0dXNiaXRzcGlsYW5pLmNvbSIsInN1YiI6ImFkbWluIn0';
        Cookies.set('token', mockToken, { expires: 7 });
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please use demo credentials.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-charcoal-700/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-charcoal-600">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-4"
            >
              <Users className="h-8 w-8 text-charcoal-800" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to access your dashboard</p>
          </div>

          {/* Demo Credentials Info */}
          <div className="bg-charcoal-600/80 backdrop-blur-sm rounded-lg p-4 mb-6 border-l-4 border-gold-500">
            <h4 className="text-gold-500 font-semibold mb-2">Demo Credentials:</h4>
            <p className="text-sm text-gray-300">Email: admin@enactusbitspilani.com</p>
            <p className="text-sm text-gray-300">Password: enactus2024</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-500/10 border border-red-500/50 rounded-lg p-3"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-charcoal-600/80 backdrop-blur-sm border border-charcoal-500 rounded-lg text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-600/80 backdrop-blur-sm border border-charcoal-500 rounded-lg text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <BlobButton
              type="submit"
              className="w-full"
              variant="primary"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-charcoal-800 border-t-transparent rounded-full mx-auto"
                />
              ) : (
                'Sign In'
              )}
            </BlobButton>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Don't have an account? Contact the administrator.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;