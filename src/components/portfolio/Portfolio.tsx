import React, { useState } from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import TeeFlirtImage from '../../asset/cardsimae/teeFlirtImage.webp'
import TakeYourFlowersImage from '../../asset/cardsimae/TakeYourFlowersImage.webp'
import TimeDoesNotHealAllWoundsImage from '../../asset/cardsimae/TimeDoesNotHeal.webp'
import RideToTwenty from '../../asset/cardsimae/RideToTwenty.jpg'
import SusanImage from '../../asset/cardsimae/SusanImage.jpg'

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Ride To Twenty",
      category: "Article",
      description: "Becoming The Best Version of Yourself. Published (2024) A memoir/self-help book to overcoming low self-esteem.",
      image: RideToTwenty,
      link: "https://drive.google.com/file/d/1-C9Fv2xl9qmxIEDD4kwskaNRd77ITjOF/view?usp=drivesdk",
      date: "Jan 2024",
      readTime: "8 min read",
      tags: ["Digital", "Storytelling", "Technology"],
      featured: true
    },
    {
      id: 2,
      title: "Susanna",
      category: "Poetry",
      description: "Manuscript completed. Awaiting release in September, 2025. A short story about new beginnings and unlikely friendship between two ladies.",
      image: SusanImage,
      link: "https://docs.google.com/document/d/1e9pt2z4FBcUtUPLzGDdETydcFtHsItL8uIdoEzKW6cI/edit?usp=drivesdk",
      date: "September 2025",
      readTime: "5 min read",
      tags: ["Poetry", "Nature", "Emotions"]
    },
    {
      id: 3,
      title: "Take Your Flowers",
      category: "Marketing",
      description: "You’re a bit unkind to yourself, don't you think? Yes, you. You beat yourself up too much. You rush past your victories and stare too long at your failures. You forget to pause and breathe, to",
      image: TakeYourFlowersImage,
      link: "https://favourjosiah.substack.com/p/take-your-flowers",
      date: "Feb 2024",
      readTime: "12 min read",
      tags: ["Branding", "Marketing", "Business"],
      featured: true
    },
    {
      id: 4,
      title: "Twists, Turns, and the In-Betweens.",
      category: "Fiction",
      description: "That unpredictable, sometimes painful, often confusing, but deeply necessary middle..",
      image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
      link: "https://favourjosiah.substack.com/p/twists-turns-and-the-in-betweens",
      date: "June 2025",
      readTime: "15 min read",
      tags: ["Fiction", "Drama", "Psychology"]
    },
    {
      id: 5,
      title: "TEE UNFILTERED",
      category: "Article",
      description: "Tee Unfiltered is a behind-the-scenes seat into the life of Toyo-Abasi, a Christian content creator with a growing platform. Behind her uploads and polished captions, there’s a quiet wrestle which has her longing for something.",
      image: TeeFlirtImage,
      link: "https://favourjosiah.substack.com/p/tee-unfiltered-fc5",
      date: "Jan 2024",
      readTime: "10 min read",
      tags: ["Content", "Drama", "Storytelling"]
    },
    {
      id: 6,
      title: "Time Does Not Heal All Wounds",
      category: "Poetry",
      description: "I don't believe that simply waiting for time to pass heals our wounds..",
      image: TimeDoesNotHealAllWoundsImage,
      link: "https://favourjosiah.substack.com/p/time-does-not-heal-all-wounds",
      date: "Oct 2023",
      readTime: "6 min read",
      tags: ["Poetry", "Urban", "Travel"]
    }
  ];

  const categories = ['All', 'Article', 'Poetry', 'Marketing', 'Fiction'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium mb-4">
              Featured Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="text-black">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore a curated collection of my finest work spanning various genres and mediums, 
              each piece crafted with passion and precision.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  item.featured ? 'ring-2 ring-indigo-200 ring-offset-2' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-sm font-semibold rounded-full">
                    Featured
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 right-4">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">

                      <ExternalLink size={20} />
                      </a> 
                        
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map(tag => (
                        <span 
                          key={tag}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{item.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;