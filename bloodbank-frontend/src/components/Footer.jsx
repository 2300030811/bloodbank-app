import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">BloodBank System</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Connecting donors with those in need. Our blood banking system helps save lives 
              by managing blood donations and ensuring quick access to blood products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/donor-registration" className="text-gray-300 hover:text-red-400 transition-colors">
                  Become a Donor
                </a>
              </li>
              <li>
                <a href="/request-blood" className="text-gray-300 hover:text-red-400 transition-colors">
                  Request Blood
                </a>
              </li>
              <li>
                <a href="/inventory" className="text-gray-300 hover:text-red-400 transition-colors">
                  Blood Inventory
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">919214229142. </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">emergency@bloodbank.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 BloodBank System. All rights reserved. | Saving lives together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
