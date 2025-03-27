
import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { Send, Phone, MapPin, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-radial from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <RevealAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Have questions or need assistance? Our team is here to help. Feel free to reach out using any of the methods below.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <RevealAnimation direction="left">
            <div className="bg-white rounded-xl shadow-premium p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-shine bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors shadow-lg shadow-primary/20 w-full justify-center"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </RevealAnimation>

          {/* Contact information */}
          <RevealAnimation direction="right">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">+234 123 456 7890</p>
                    <p className="text-gray-600">+234 987 654 3210</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">info@bigsteps.com</p>
                    <p className="text-gray-600">support@bigsteps.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600 mt-1">123 Fashion Avenue, Lekki Phase 1</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Monday - Saturday: 9AM - 8PM</p>
                    <p className="text-gray-600">Sunday: 12PM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Live Chat</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Chat with our customer service team in real-time.
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors border border-primary">
                  Start Chat
                </button>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Social media links */}
        <RevealAnimation delay={300}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              {[
                { name: 'Facebook', icon: 'facebook.svg', color: 'bg-blue-100 text-blue-600' },
                { name: 'Instagram', icon: 'instagram.svg', color: 'bg-pink-100 text-pink-600' },
                { name: 'Twitter', icon: 'twitter.svg', color: 'bg-blue-100 text-blue-400' },
                { name: 'LinkedIn', icon: 'linkedin.svg', color: 'bg-blue-100 text-blue-700' },
                { name: 'YouTube', icon: 'youtube.svg', color: 'bg-red-100 text-red-600' },
              ].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${platform.color} w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition`}
                  aria-label={platform.name}
                >
                  <SocialIcon name={platform.name} />
                </a>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

// A simple component to render social media icons
const SocialIcon = ({ name }: { name: string }) => {
  // This is a simplified approach. In a real-world scenario, you would use proper SVG icons or import from a library
  return (
    <div className="w-5 h-5 flex items-center justify-center">
      {name.charAt(0)}
    </div>
  );
};

export default ContactSection;
