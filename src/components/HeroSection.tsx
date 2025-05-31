
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-black text-white pt-20 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce-slow opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce-slow opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce-slow opacity-80" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brain Icon with enhanced animation */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative group">
              <Brain className="w-20 h-20 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300" />
              <Zap className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 transition-all duration-300 group-hover:scale-125" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            </div>
          </div>

          {/* Main Headline with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent hover:from-yellow-300 hover:via-green-300 hover:to-blue-300 transition-all duration-500">
              AI Mastermind
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="text-xl md:text-3xl font-semibold mb-6 text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Build & Monetize AI Agents
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Learn to automate workflows, scale your output, and ship revenue-generating tools.
          </p>

          {/* CTA Buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-yellow-500/25 group"
              onClick={() => scrollToSection('level-0')}
            >
              Attend Free Masterclass
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-green-500/25 group"
              onClick={() => scrollToSection('level-3')}
            >
              Apply to Builder Cohort
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators with enhanced animations */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-500 cursor-pointer group animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-yellow-400 transition-all duration-300 group-hover:text-yellow-300">5000+</div>
              <div className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">Trained</div>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 cursor-pointer group animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-3xl font-bold text-green-400 transition-all duration-300 group-hover:text-green-300">100+</div>
              <div className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">Agents Deployed</div>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 cursor-pointer group animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <div className="text-3xl font-bold text-blue-400 transition-all duration-300 group-hover:text-blue-300">100%</div>
              <div className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">Satisfaction</div>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
