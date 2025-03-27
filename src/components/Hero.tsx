
import React from 'react';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import RevealAnimation from '@/components/ui/RevealAnimation';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1604868189265-a6436d5123c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-soft animate-delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <RevealAnimation>
            <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
              Premium Quality Fashion
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Step Into <span className="text-gradient bg-gradient-to-r from-white to-blue-200">Style</span> with BigSteps
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover a curated collection of premium footwear and apparel designed to elevate your style. Quality meets fashion in every product.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={600}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products" 
                className="button-shine bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors shadow-lg shadow-primary/20"
              >
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </a>
              <a 
                href="#about" 
                className="glass-effect text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/30 transition-colors"
              >
                Learn More
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white/70 text-sm mb-2">Scroll to explore</div>
        <div className="w-0.5 h-10 bg-white/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white absolute top-0 animate-bounce-soft"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
