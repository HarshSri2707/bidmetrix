import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">BidMetrix.ai</span>
            </div>
            <p className="text-gray-400 mb-4">
              The Intelligent DSP for Performance Marketing. Precision targeting, transparent bidding, measurable results.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-indigo-400 transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/channels" className="hover:text-indigo-400 transition-colors">Channels</Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-indigo-400 transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-indigo-400 transition-colors">Resources</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions#user-acquisition" className="hover:text-indigo-400 transition-colors">
                  User Acquisition
                </Link>
              </li>
              <li>
                <Link to="/solutions#retargeting" className="hover:text-indigo-400 transition-colors">
                  Retargeting & Conversion
                </Link>
              </li>
              <li>
                <Link to="/solutions#brand-safety" className="hover:text-indigo-400 transition-colors">
                  Brand Safety & Anti-Fraud
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@bidmetrix.ai" className="hover:text-indigo-400 transition-colors">
                  hello@bidmetrix.ai
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-indigo-400 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} BidMetrix.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;