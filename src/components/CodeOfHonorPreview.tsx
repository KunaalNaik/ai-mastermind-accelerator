
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

export const CodeOfHonorPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Shield className="w-16 h-16 text-yellow-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Code of Honor
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We don't just build AI agents. We operate by a <span className="text-yellow-400 font-bold">Code of Honor</span>. 
            These 10 principles define how we learn, grow, and lead as a tribe.
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Read Full Code of Honor
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
