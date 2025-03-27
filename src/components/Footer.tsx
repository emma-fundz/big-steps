
import React from 'react';
import { ChevronRight, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'Shoes', href: '#' },
        { name: 'Clothing', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Our Blog', href: '#' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Track Order', href: '#' },
        { name: 'Returns & Refunds', href: '#' },
        { name: 'Shipping Policy', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and contact info */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl font-bold text-white mb-6 inline-block">
              BigSteps
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover premium quality footwear and apparel designed to elevate your style. Our products combine fashion, comfort, and durability.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-gray-300">+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-gray-300">info@bigsteps.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-300">123 Fashion Avenue, Lekki, Lagos</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">Stay updated with the latest products, exclusive offers, and fashion tips.</p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white p-3 rounded-lg flex-grow focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BigSteps. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
