
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Play } from 'lucide-react';

export const VoiceAgentDemo = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6 animate-fade-in px-4">
            See It In Action
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Call our AI voice agent and experience the future of conversations.
          </p>
          
          <div className="relative animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-black/20 rounded-full scale-110 animate-pulse"></div>
            <a href="tel:+918035738778">
              <Button 
                size="lg" 
                className="relative w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 sm:px-16 py-6 sm:py-8 text-xl sm:text-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-black/50 group rounded-full"
              >
                <Phone className="mr-3 sm:mr-4 w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
                Call Me Now
                <Play className="ml-3 sm:ml-4 w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </a>
          </div>
          
          <p className="text-base sm:text-lg text-gray-900 mt-6 sm:mt-8 font-semibold animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            📞 +91 80357 38778
          </p>
        </div>
      </div>
    </section>
  );
};
