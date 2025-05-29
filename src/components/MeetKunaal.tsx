
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Youtube, Linkedin } from 'lucide-react';

export const MeetKunaal = () => {
  return (
    <section id="meet-kunaal" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Kunaal Naik"
                  className="w-80 h-80 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full p-4">
                  <Brain className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meet Kunaal Naik
              </h2>
              
              <div className="text-xl text-yellow-400 font-semibold mb-6">
                AI Strategist • TEDx Speaker • Coach
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From building Fortune 500 AI solutions to empowering 5000+ professionals, 
                Kunaal has been at the forefront of the AI revolution. His mission: make AI 
                accessible, practical, and profitable for everyone.
              </p>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 font-bold transition-all duration-300"
                >
                  <Youtube className="mr-2 w-5 h-5" />
                  Watch on YouTube
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 font-bold transition-all duration-300"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book 1:1 Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
