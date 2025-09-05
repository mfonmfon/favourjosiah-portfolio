import React from 'react';
import { BookOpen, Pen, Heart, Star } from 'lucide-react';
import FavourAboutBackgroundImage from '../../asset/images/favourJosiahSecondPicture.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-black">Favour</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate storyteller with over a decade of experience in crafting narratives that captivate, inspire, and drive meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={FavourAboutBackgroundImage}
                alt="Alexandra Chen"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Creative Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My writing journey began with a simple belief: every story has the power to change the world. 
                From crafting compelling marketing narratives to developing award-winning creative content, 
                I've dedicated my career to the art of storytelling.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With expertise spanning creative writing, content strategy, and brand storytelling, 
                I help individuals and businesses discover their unique voice and share it with the world 
                in ways that truly resonate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not writing, you'll find me exploring new cultures, reading contemporary literature, 
                or mentoring emerging writers in my community.
              </p>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Creative Writing</h4>
              <p className="text-gray-600">Fiction, poetry, and creative non-fiction that captivates readers</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Pen size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Content Strategy</h4>
              <p className="text-gray-600">Strategic content that drives engagement and builds brands</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Brand Storytelling</h4>
              <p className="text-gray-600">Authentic narratives that connect brands with their audience</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Editorial Services</h4>
              <p className="text-gray-600">Professional editing and proofreading for polished content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;