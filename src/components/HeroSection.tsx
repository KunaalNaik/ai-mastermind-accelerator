
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brain Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Brain className="w-16 h-16 text-cyan-400" />
              <Zap className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Data Science Masterminds
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl font-semibold mb-4">
            Build & Monetize AI Agents
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn to build, automate, and ship AI Agents that save time, scale businesses, and unlock income.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => scrollToSection('level-0')}
            >
              Attend Free Masterclass
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => scrollToSection('engagement-levels')}
            >
              See All Offers
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">5000+</div>
              <div className="text-blue-200">Trained</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">100+</div>
              <div className="text-blue-200">Agents Deployed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-blue-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
