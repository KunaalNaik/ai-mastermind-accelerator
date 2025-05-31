
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Youtube, Linkedin, Brain } from 'lucide-react';

export const MeetKunaal = () => {
  return (
    <section id="meet-kunaal" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image with enhanced animations */}
            <div className="flex justify-center lg:justify-start animate-fade-in">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Kunaal Naik"
                  className="w-80 h-80 rounded-full object-cover border-4 border-yellow-400 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-yellow-300 group-hover:shadow-yellow-500/25"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full p-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <Brain className="w-8 h-8 text-black transition-transform duration-300 group-hover:scale-110" />
                </div>
                {/* Floating rings animation */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 scale-110 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border border-yellow-400/20 scale-125 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content with staggered animations */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Meet Kunaal Naik
              </h2>
              
              <div className="text-xl text-yellow-400 font-semibold mb-6 animate-fade-in hover:text-yellow-300 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
                AI Strategist • TEDx Speaker • Coach
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-in hover:text-gray-200 transition-colors duration-300" style={{ animationDelay: '0.6s' }}>
                From building Fortune 500 AI solutions to empowering 5000+ professionals, 
                Kunaal has been at the forefront of the AI revolution. His mission: make AI 
                accessible, practical, and profitable for everyone.
              </p>

              {/* Social Links with enhanced animations */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-red-500/25 group"
                >
                  <Youtube className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="transition-all duration-300 group-hover:tracking-wide">Watch on YouTube</span>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/25 group"
                >
                  <Calendar className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="transition-all duration-300 group-hover:tracking-wide">Book 1:1 Session</span>
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
