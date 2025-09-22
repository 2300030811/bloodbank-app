import React, { useState } from 'react';
import { Building, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import PopupModal from '../components/PopupModal';
import { Link, useNavigate } from 'react-router-dom'; // <-- 1. IMPORT Link and useNavigate
import { login } from '../services/api'; // <-- 2. IMPORT the login function

const HospitalLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(''); // <-- 3. ADD state for error messages
  const navigate = useNavigate(); // Hook for navigation

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // <-- 4. UPDATED handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await login(formData);

      // Save the token to the browser's local storage
      localStorage.setItem('authToken', response.data.token);
      
      // Show the success modal
      setShowModal(true);

      // We will redirect after the user closes the modal
    } catch (err) {
      console.error("Login failed:", err);
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    // After closing the success modal, navigate to a protected page
    navigate('/requests'); // Redirect to the "View Requests" page
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <div className="text-center mb-8">
            <Building className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Hospital Login</h1>
            <p className="text-lg text-gray-600">
              Access your hospital's blood bank management system
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                Email Address
              </label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="hospital@example.com" />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="h-4 w-4 inline mr-2" />
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" required value={formData.password} onChange={handleChange} className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter your password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Error Message Display */}
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              Sign In
            </Button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                {/* 5. USE Link for proper navigation */}
                <Link to="/register-hospital" className="font-medium text-red-600 hover:text-red-500">
                  Register Hospital
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </div>

      {/* Success Modal */}
      <PopupModal
        isOpen={showModal}
        onClose={handleModalClose} // <-- Use the new close handler
        type="success"
        title="Login Successful!"
        message="Welcome back! You are now being redirected."
      />
    </div>
  );
};

export default HospitalLogin;