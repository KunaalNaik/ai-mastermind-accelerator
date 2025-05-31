
import React from 'react';
import { Zap } from 'lucide-react';

export const RebrandNotice = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-yellow-900/20 to-green-900/20 border-y border-yellow-500/20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-green-900/10 to-yellow-900/10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-2 group">
            <Zap className="w-6 h-6 text-yellow-400 mr-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span className="text-yellow-400 font-bold text-lg transition-all duration-300 group-hover:text-yellow-300">REBRAND NOTICE</span>
            <Zap className="w-6 h-6 text-yellow-400 ml-2 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed hover:text-gray-200 transition-colors duration-300">
            Formerly <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300 cursor-pointer">Data Science Masterminds</span> — now rebranded to{' '}
            <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300 cursor-pointer">AI Mastermind</span>, your ecosystem to build, automate, and monetize AI agents.
          </p>
        </div>
      </div>
    </section>
  );
};
