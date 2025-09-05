import React from 'react';
import { Pen, Target, BookOpen, Users, Zap, Award } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Pen size={32} />,
      title: "Creative Writing",
      description: "Original content that captivates and inspires your audience with compelling narratives.",
      features: [
        "Blog posts and articles",
        "Creative fiction pieces",
        "Poetry and prose",
        "Storytelling consultation",
        "Content ideation"
      ],
      price: "Starting at $150"
    },
    {
      icon: <Target size={32} />,
      title: "Content Strategy",
      description: "Strategic content planning that aligns with your brand goals and engages your target audience.",
      features: [
        "Content calendar development",
        "Audience analysis",
        "Brand voice definition",
        "SEO optimization",
        "Performance tracking"
      ],
      price: "Starting at $300",
      popular: true
    },
    {
      icon: <BookOpen size={32} />,
      title: "Editorial Services",
      description: "Professional editing and proofreading to ensure your content is polished and impactful.",
      features: [
        "Copy editing and proofreading",
        "Developmental editing",
        "Fact-checking services",
        "Style guide creation",
        "Content optimization"
      ],
      price: "Starting at $100"
    },
    {
      icon: <Users size={32} />,
      title: "Brand Storytelling",
      description: "Authentic brand narratives that connect emotionally with your customers and build loyalty.",
      features: [
        "Brand story development",
        "Mission statement crafting",
        "Customer journey mapping",
        "Emotional branding",
        "Narrative consistency"
      ],
      price: "Starting at $500"
    },
    {
      icon: <Zap size={32} />,
      title: "Social Media Content",
      description: "Engaging social media content that builds communities and drives meaningful interactions.",
      features: [
        "Platform-specific content",
        "Hashtag research",
        "Engagement strategies",
        "Visual storytelling",
        "Community management"
      ],
      price: "Starting at $200"
    },
    {
      icon: <Award size={32} />,
      title: "Writing Workshops",
      description: "Personalized coaching and workshops to help you develop your writing skills and find your voice.",
      features: [
        "One-on-one coaching",
        "Group workshops",
        "Writing technique training",
        "Portfolio development",
        "Publishing guidance"
      ],
      price: "Starting at $250"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium mb-4">
              What I Offer
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="text-black">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From creative writing to strategic content planning, I offer comprehensive writing services 
              tailored to meet your unique needs and goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-gray-200 ring-offset-4' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-black text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black">
                      {service.price}
                    </span>
                    <button className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gray-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a tailored package that perfectly fits your needs.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;