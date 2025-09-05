import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content: "Alexandra's storytelling ability transformed our brand narrative completely. Her creative approach to content strategy increased our engagement by 300% within just three months. Simply outstanding work!",
      rating: 5,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Creative Studios",
      content: "Working with Alexandra was a game-changer for our content marketing. Her ability to weave compelling narratives while maintaining brand consistency is unmatched. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Founder",
      company: "Startup Hub",
      content: "Alexandra helped us find our brand voice and tell our story in a way that truly resonates with our audience. Her editorial expertise and creative vision are exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Content Manager",
      company: "Digital Agency",
      content: "The content strategy Alexandra developed for us exceeded all expectations. Her understanding of audience psychology and storytelling techniques is remarkable. A true professional!",
      rating: 5,
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium mb-4">
              Client Love
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Clients <span className="text-black">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                    <Quote size={32} />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic max-w-4xl mx-auto">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-gray-600">{currentTestimonial.role} at {currentTestimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-black w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid (Smaller Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 bg-white/70 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer ${
                  index === currentIndex ? 'ring-2 ring-gray-200 bg-white shadow-lg' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h5>
                    <p className="text-gray-600 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;