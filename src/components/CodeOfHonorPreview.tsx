
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

export const CodeOfHonorPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-purple-900/5 to-yellow-900/5 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative group">
              <Shield className="w-16 h-16 text-yellow-400 transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-300" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Code of Honor
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in hover:text-gray-200 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
            We don't just build AI agents. We operate by a <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300">Code of Honor</span>. 
            These 10 principles define how we learn, grow, and lead as a tribe.
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-yellow-500/25 group animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="transition-all duration-300 group-hover:scale-105">Read Full Code of Honor</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
