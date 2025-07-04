
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">FinanceBot</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your intelligent financial assistant providing personalized advice and helping you make smarter money decisions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">support@financebot.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/financebot" className="text-gray-300 hover:text-white transition-colors">
                  FinanceBot
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Personal Finance Planning</li>
              <li>Budget Management</li>
              <li>Expense Tracking</li>
              <li>Investment Advice</li>
              <li>Financial Goal Setting</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FinanceBot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
