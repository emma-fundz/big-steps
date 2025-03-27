
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import RevealAnimation from '@/components/ui/RevealAnimation';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, #FF9800 40%, #f5f5f5 40%)',
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute right-0 bottom-0 w-1/2 h-full">
          <div className="w-full h-full bg-contain bg-no-repeat bg-right-bottom" style={{
            backgroundImage: "url('/images/footprint-pattern.png')"
          }}></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <RevealAnimation direction="left">
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">DON'T YOU WANT TO BECOME A</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#553622]">
                Verified 
                <br />
                <span className="text-[#663d1f]">bigstepper</span>
              </h1>
              <p className="text-xl mb-8 text-gray-800 font-semibold">WE GIVE 100% QUALITY</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { name: 'SHOES', icon: <Check className="w-5 h-5 text-green-600" /> },
                  { name: 'SLIDES', icon: <Check className="w-5 h-5 text-green-600" /> },
                  { name: 'TOPS', icon: <Check className="w-5 h-5 text-green-600" /> },
                  { name: 'BAGS', icon: <Check className="w-5 h-5 text-green-600" /> },
                  { name: 'JEANS', icon: <Check className="w-5 h-5 text-green-600" /> },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span className="font-bold text-gray-800">{item.name}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-xl mb-8 text-gray-800 font-medium italic">
                CREATE A SENSATION WITH EVERY STEP YOU TAKE
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="button-shine bg-[#663d1f] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#553622] transition-colors shadow-lg shadow-amber-900/20"
                >
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-lg font-medium flex items-center gap-2 border-2 border-[#663d1f] text-[#663d1f] hover:bg-[#663d1f] hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/09065271124"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-[#663d1f] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#553622] transition"
                >
                  <span className="text-green-400">✓</span>
                  <span>09065271124</span>
                </a>
                <a 
                  href="tel:09065271124"
                  className="bg-[#663d1f] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#553622] transition"
                >
                  <span className="text-blue-400">✓</span>
                  <span>09065271124</span>
                </a>
                <a 
                  href="https://instagram.com/big_stepstores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#663d1f] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#553622] transition"
                >
                  <span className="text-pink-400">✓</span>
                  <span>@big_stepstores</span>
                </a>
                <a 
                  href="https://twitter.com/Big__steps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#663d1f] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#553622] transition"
                >
                  <span className="text-blue-400">✓</span>
                  <span>@Big__steps</span>
                </a>
              </div>
            </div>
          </RevealAnimation>

          {/* Hero Image */}
          <RevealAnimation direction="right">
            <div className="relative h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/80 flex items-center justify-center shadow-2xl">
                <img 
                  src="/lovable-uploads/b2f95788-2540-47a1-be06-482bdbc211a5.png" 
                  alt="BigSteps Logo" 
                  className="w-56 h-56 md:w-72 md:h-72 object-contain"
                />
              </div>
              <div className="absolute -z-10 w-full h-full flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-amber-500/20 animate-pulse"></div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
