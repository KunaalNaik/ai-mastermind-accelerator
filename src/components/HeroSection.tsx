
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20 animate-pulse"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brain Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Brain className="w-20 h-20 text-cyan-400" />
              <Zap className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Mastermind
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="text-xl md:text-3xl font-semibold mb-6 text-gray-300">
            Build & Monetize AI Agents
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Learn to automate workflows, scale your output, and ship revenue-generating tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={() => scrollToSection('level-0')}
            >
              Attend Free Masterclass
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={() => scrollToSection('level-3')}
            >
              Apply to Builder Cohort
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-yellow-400">5000+</div>
              <div className="text-gray-400">Trained</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-400">100+</div>
              <div className="text-gray-400">Agents Deployed</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
