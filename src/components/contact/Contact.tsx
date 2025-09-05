import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Create Something <span className="text-white">Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your story to life? I'd love to hear about your project and discuss how we can work together to create compelling content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 text-black">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">favourjosiah38@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-semibold">+234 9036015411 </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white font-semibold">Eket LGA, Akwa Ibom State, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: "#", color: "bg-gray-700 hover:bg-gray-600" },
                    { icon: Instagram, href: "#", color: "bg-gray-700 hover:bg-gray-600" },
                    { icon: Linkedin, href: "#", color: "bg-gray-700 hover:bg-gray-600" },
                    { icon: Github, href: "#", color: "bg-gray-700 hover:bg-gray-600" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select a service</option>
                    <option value="creative-writing" className="bg-gray-800">Creative Writing</option>
                    <option value="content-strategy" className="bg-gray-800">Content Strategy</option>
                    <option value="editorial" className="bg-gray-800">Editorial Services</option>
                    <option value="brand-storytelling" className="bg-gray-800">Brand Storytelling</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send size={20} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;