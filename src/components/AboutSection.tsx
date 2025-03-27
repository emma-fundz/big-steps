
import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { Award, Star, Clock, Shield, Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    { 
      icon: <Award className="w-6 h-6" />, 
      title: 'Premium Quality', 
      description: 'We source only the best materials to ensure long-lasting comfort and style.' 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: 'Fast Delivery', 
      description: 'Enjoy quick shipping and tracking on all orders.' 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'Secure Shopping', 
      description: 'Your transactions are protected with industry-standard security.' 
    },
    { 
      icon: <Star className="w-6 h-6" />, 
      title: 'Customer Satisfaction', 
      description: 'We pride ourselves on exceptional customer service and support.' 
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <RevealAnimation direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="About BigSteps"
                className="w-full h-auto relative z-10 rounded-lg shadow-premium"
              />
              <div className="absolute right-8 bottom-8 bg-white rounded-xl shadow-lg p-5 max-w-xs z-20">
                <div className="flex gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">"The quality and comfort of my BigSteps sneakers are unmatched. Best purchase I've made this year!"</p>
                <div className="mt-3 font-medium">- Micheal K.</div>
              </div>
            </div>
          </RevealAnimation>
          
          {/* Content side */}
          <RevealAnimation direction="right">
            <div className="lg:pl-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Crafting Premium Footwear & Fashion Since 2010</h2>
              <p className="text-gray-600 mb-6">
                BigSteps started with a simple mission: to provide high-quality footwear and apparel that combines style, comfort, and durability. Based in Lagos, we've grown from a small boutique to a trusted fashion destination.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of fashion experts carefully selects each item in our inventory, ensuring that we offer only the best to our customers. We believe that great style shouldn't compromise on quality or comfort.
              </p>
              
              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Checkpoints */}
              <div className="mb-8">
                {['Authentic Products', 'Exclusive Collections', 'Personalized Shopping Experience'].map((point, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
