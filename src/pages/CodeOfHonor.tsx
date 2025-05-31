
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const codeOfHonorPrinciples = [
  {
    id: "1",
    title: "Learning Is Not Optional. It's Survival.",
    intro: "Traditional education is dead. We don't wait to be taught. We hunt answers.",
    points: [
      "Learn from ChatGPT, YouTube, each other — every single day.",
      "Miss a weekend session? Make up for it on your own.",
      "Remind yourself: Continuous learning is the #1 skill of the future (World Economic Forum backs it. We live it.)"
    ],
    punchline: "If you're not learning, you're decaying."
  },
  {
    id: "2",
    title: "Teach One. Lift All.",
    intro: "We don't grow in isolation. We rise by raising others.",
    points: [
      "Help at least one person each week — no exceptions.",
      "Share your latest insight, build, or failure.",
      "Hoarding knowledge is cowardice."
    ],
    punchline: "One person's growth is everyone's advantage."
  },
  {
    id: "3",
    title: "Build. Show. Inspire.",
    intro: "Talking is cheap. Execution is our culture.",
    points: [
      "Build at least one AI Agent — no matter how small.",
      "Share it with the tribe.",
      "Let feedback make you sharper."
    ],
    punchline: "If it's not applied, it's not real."
  },
  {
    id: "4",
    title: "Kill Ego. Stay Humble.",
    intro: "The loudest voice isn't always the wisest.",
    points: [
      "Be coachable. Stay grounded.",
      "Take feedback like fuel, not fire.",
      "Give credit. Stay curious."
    ],
    punchline: "The community thrives when egos die."
  },
  {
    id: "5",
    title: "Don't Lurk. Engage.",
    intro: "Lurkers don't lead.",
    points: [
      "Speak up. Ask. Share. Build in public.",
      "Join the conversation or risk irrelevance.",
      "Value is in the doing, not watching."
    ],
    punchline: "If you're silent, you're invisible."
  },
  {
    id: "6",
    title: "Mission Over Self.",
    intro: "This is bigger than any one of us.",
    points: [
      "The mission is to build the future of work with AI.",
      "Put the tribe first — ego second.",
      "Play long-term games with long-term people."
    ],
    punchline: "If you're not aligned, step aside."
  },
  {
    id: "7",
    title: "Be Useful or Be Forgotten.",
    intro: "Only value earns attention.",
    points: [
      "Share tools, tips, and templates.",
      "Ask better questions. Offer smarter answers.",
      "Raise the signal, kill the noise."
    ],
    punchline: "Contribution is the new credibility."
  },
  {
    id: "8",
    title: "Your Word Is Your Reputation.",
    intro: "Promises mean something here.",
    points: [
      "Show up. Follow through.",
      "Speak less. Deliver more.",
      "Consistency > intensity."
    ],
    punchline: "Trust is your most valuable currency."
  },
  {
    id: "9",
    title: "No Gatekeepers Allowed.",
    intro: "Secrets slow us down. Systems scale us up.",
    points: [
      "Share freely. Teach generously.",
      "We rise faster when knowledge is open.",
      "Don't protect — empower."
    ],
    punchline: "Lone wolves don't last here."
  },
  {
    id: "10",
    title: "Celebrate Progress, Not Perfection.",
    intro: "Done is better than perfect.",
    points: [
      "Show the messy middle.",
      "Improve in public.",
      "Celebrate the 1% daily wins."
    ],
    punchline: "If you're not failing forward, you're not moving."
  }
];

const CodeOfHonor = () => {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-purple-900/10 to-yellow-900/10 animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="relative group">
                <Shield className="w-20 h-20 text-yellow-400 transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-300 animate-pulse" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Code of Honor
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in hover:text-gray-200 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
              These 10 principles define how we learn, grow, and lead as a tribe.
              <br />
              <span className="text-yellow-400 font-bold">Live by them. Rise with them.</span>
            </p>

            <Link to="/">
              <Button 
                variant="ghost"
                className="text-gray-400 hover:text-white transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                <ArrowLeft className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {codeOfHonorPrinciples.map((principle, index) => (
                <AccordionItem 
                  key={principle.id} 
                  value={principle.id}
                  className="border border-gray-800 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 hover:from-gray-800/70 hover:to-gray-700/70 transition-all duration-500 animate-fade-in group hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group/trigger">
                    <div className="flex items-start space-x-4 w-full">
                      <span className="text-2xl animate-bounce-slow group-hover:scale-110 transition-transform duration-300">🔥</span>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover/trigger:text-yellow-400 transition-colors duration-300">
                          {principle.id}. {principle.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 animate-fade-in">
                      <p className="text-lg text-gray-300 font-medium leading-relaxed">
                        {principle.intro}
                      </p>
                      
                      <div className="space-y-3">
                        {principle.points.map((point, pointIndex) => (
                          <div 
                            key={pointIndex}
                            className="flex items-start space-x-3 group/point hover:translate-x-2 transition-transform duration-300"
                          >
                            <span className="text-yellow-400 mt-1 group-hover/point:scale-125 transition-transform duration-300">📌</span>
                            <p className="text-gray-300 leading-relaxed group-hover/point:text-white transition-colors duration-300">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex items-center space-x-3 group/punchline">
                          <span className="text-red-400 text-xl group-hover/punchline:animate-pulse">💣</span>
                          <p className="text-yellow-400 font-bold text-lg group-hover/punchline:text-yellow-300 transition-colors duration-300">
                            {principle.punchline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-green-900/20 border-t border-yellow-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
              Ready to Live the Code?
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join a tribe that builds, shares, and rises together.
            </p>
            <Link to="/#join">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-yellow-500/25 group animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="transition-all duration-300 group-hover:scale-105">Join the Tribe</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfHonor;
