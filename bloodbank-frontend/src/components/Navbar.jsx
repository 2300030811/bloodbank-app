import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, role, logout } = useAuth();

  const baseLinks = [
    { path: '/', label: 'Home' },
    { path: '/donor-registration', label: 'Donate' },
    { path: '/donors', label: 'Donors' },
    { path: '/request-blood', label: 'Request' },
    { path: '/admin-login', label: 'Admin Login' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
  ];

  const authLinks = [];
  if (role === 'ROLE_ADMIN') {
    authLinks.push({ path: '/inventory', label: 'Inventory' });
  }

  const navLinks = [...baseLinks, ...authLinks];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl text-gray-800">BloodBank</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={logout}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={() => { setIsMenuOpen(false); logout(); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;