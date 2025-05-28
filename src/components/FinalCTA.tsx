
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const scrollToLevel = (levelId: string) => {
    document.getElementById(levelId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Entry Point
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Start your AI journey today. Every expert was once a beginner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToLevel('level-0')}
          >
            Start Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900 py-4 px-6 transition-all duration-300"
            onClick={() => scrollToLevel('level-1')}
          >
            Quick Start - ₹399
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white py-4 px-6 transition-all duration-300"
            onClick={() => scrollToLevel('level-2')}
          >
            Join Community
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-4 px-6 transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToLevel('level-3')}
          >
            Go Elite
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200 text-lg">
            Questions? Email us at{' '}
            <a href="mailto:hello@datasciencemasterminds.com" className="text-cyan-400 hover:text-cyan-300 underline">
              hello@datasciencemasterminds.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
