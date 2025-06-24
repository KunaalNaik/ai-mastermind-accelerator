
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Play } from 'lucide-react';

export const VoiceAgentDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
            See It In Action
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Call our AI voice agent and experience the future of conversations.
          </p>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-black/20 rounded-full scale-110 animate-pulse"></div>
            <a href="tel:+918035738778">
              <Button 
                size="lg" 
                className="relative bg-black hover:bg-gray-900 text-white px-16 py-8 text-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-black/50 group rounded-full"
              >
                <Phone className="mr-4 w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                Call Me Now
                <Play className="ml-4 w-8 h-8 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </a>
          </div>
          
          <p className="text-lg text-gray-900 mt-8 font-semibold animate-fade-in" style={{ animationDelay: '0.6s' }}>
            📞 +91 80357 38778
          </p>
        </div>
      </div>
    </section>
  );
};
