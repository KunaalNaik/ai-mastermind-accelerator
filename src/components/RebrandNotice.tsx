
import React from 'react';
import { Zap } from 'lucide-react';

export const RebrandNotice = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-yellow-900/20 to-green-900/20 border-y border-yellow-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
            <span className="text-yellow-400 font-bold text-lg">REBRAND NOTICE</span>
            <Zap className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Formerly <span className="text-blue-400 font-semibold">Data Science Masterminds</span> — now rebranded to{' '}
            <span className="text-yellow-400 font-bold">AI Mastermind</span>, your ecosystem to build, automate, and monetize AI agents.
          </p>
        </div>
      </div>
    </section>
  );
};
