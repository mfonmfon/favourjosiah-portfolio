import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Favour Josiah
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Creative writer and storyteller passionate about crafting compelling narratives that inspire, 
                engage, and transform ideas into powerful stories.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map(link => (
                  <li key={link}>
                    <button 
                      onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Creative Writing</span></li>
                <li><span className="text-gray-400">Content Strategy</span></li>
                <li><span className="text-gray-400">Editorial Services</span></li>
                <li><span className="text-gray-400">Brand Storytelling</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-gray-400">Made with</span>
                <Heart size={16} className="text-red-500 mx-2" />
                <span className="text-gray-400">by Favour Josiah</span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 Favour Josiah. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;