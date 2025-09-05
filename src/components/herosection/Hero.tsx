import React from 'react';
import { ArrowDown, FileText, Award, Users } from 'lucide-react';
import FavourBackgroundImage from '../../asset/images/favourJosiahPicture.jpg'

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-white">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-3">
          <img
            src={FavourBackgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Subtle geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-black rounded-full blur-xl opacity-5 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gray-800 rounded-full blur-xl opacity-5 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gray-600 rounded-full blur-xl opacity-5 animate-pulse delay-2000"></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-black">
                Creative Writer
              </span>
              <br />
              <span className="text-gray-200">& Editor</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Crafting compelling narratives that inspire, engage, and transform ideas into powerful stories that resonate with audiences worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-black text-white rounded-full font-semibold text-lg hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Let's Collaborate
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {/* <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full text-white text-2xl font-bold mx-auto mb-4">
                <FileText size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1</div>
              <div className="text-white">Published Works</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full text-white text-2xl font-bold mx-auto mb-4">
                <Award size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full text-white text-2xl font-bold mx-auto mb-4">
                <Users size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white">Happy Clients</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-black transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;