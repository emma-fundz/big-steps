
import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { 
  TruckIcon, 
  RefreshCcw, 
  Headphones, 
  Calendar, 
  CreditCard, 
  Package
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <TruckIcon className="w-10 h-10" />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders within Lagos. Nationwide delivery available with minimal fees.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <RefreshCcw className="w-10 h-10" />,
      title: 'Easy Returns',
      description: 'Hassle-free returns within 14 days. We make exchanges and refunds simple and convenient.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is available around the clock to assist with any inquiries.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: 'Scheduled Deliveries',
      description: 'Choose your preferred delivery time and date for ultimate convenience.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Secure Payments',
      description: 'Multiple secure payment options including credit cards, transfers, and cash on delivery.',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Personal Shopping',
      description: 'Book a personal shopping appointment for a tailored fashion experience.',
      color: 'bg-rose-50 text-rose-600',
    },
  ];

  return (
    <section id="services" className="section-padding bg-section-pattern">
      <div className="container mx-auto">
        <RevealAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold mb-4">Premium Shopping Experience</h2>
            <p className="text-gray-600">
              We go beyond just selling products. Experience a range of services designed to make your shopping journey seamless and enjoyable.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealAnimation key={index} delay={index * 100} direction="up">
              <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Testimonials */}
        <RevealAnimation delay={300}>
          <div className="mt-20 bg-white rounded-xl shadow-premium p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full"></div>
            
            <div className="text-center mb-10 relative z-10">
              <h3 className="text-3xl font-bold mb-3">What Our Customers Say</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We take pride in delivering exceptional service and quality products. Here's what our happy customers have to say.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  text: "The customer service at BigSteps is exceptional! They went above and beyond to help me find the perfect pair of shoes.",
                  author: "Aisha M.",
                  role: "Loyal Customer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                },
                {
                  text: "The quality of their products is remarkable. I've been shopping with them for years and have never been disappointed.",
                  author: "Emmanuel O.",
                  role: "Fashion Enthusiast",
                  image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                },
                {
                  text: "Fast delivery, high-quality products, and amazing customer service. BigSteps is my go-to store for all my fashion needs.",
                  author: "Sophia T.",
                  role: "Regular Shopper",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-soft">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

// Import Star icon
const Star = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default ServicesSection;
