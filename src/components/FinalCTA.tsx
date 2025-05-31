
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const scrollToLevel = (levelId: string) => {
    document.getElementById(levelId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-green-900/5 to-blue-900/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Start Building. Start Shipping. Start Earning.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Choose your entry point and transform your relationship with AI today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black py-6 px-6 font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-yellow-500/25 group animate-fade-in"
            onClick={() => scrollToLevel('level-0')}
            style={{ animationDelay: '0.4s' }}
          >
            <span className="transition-all duration-300 group-hover:scale-105">Start Free</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-6 px-6 font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/25 group animate-fade-in"
            onClick={() => scrollToLevel('level-1')}
            style={{ animationDelay: '0.6s' }}
          >
            <span className="transition-all duration-300 group-hover:scale-105">Quick Start - ₹399</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 px-6 font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/25 group animate-fade-in"
            onClick={() => scrollToLevel('level-2')}
            style={{ animationDelay: '0.8s' }}
          >
            <span className="transition-all duration-300 group-hover:scale-105">Join Community</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-6 px-6 font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-purple-500/25 group animate-fade-in"
            onClick={() => scrollToLevel('level-3')}
            style={{ animationDelay: '1s' }}
          >
            <span className="transition-all duration-300 group-hover:scale-105">Go Elite</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <p className="text-gray-400 text-lg transition-all duration-300 hover:text-gray-300">
            Questions? Email us at{' '}
            <a 
              href="mailto:hello@datasciencemasterminds.com" 
              className="text-yellow-400 hover:text-yellow-300 underline transition-all duration-300 hover:scale-105 inline-block"
            >
              hello@datasciencemasterminds.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
