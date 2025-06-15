import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';

const CodeOfHonor = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-index]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
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

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 py-8 pt-24">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 mb-6 group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Code of Honor
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ten principles that define how we learn, grow, and lead as an AI community
            </p>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {principles.map((principle, index) => (
            <div 
              key={index}
              data-index={index}
              className={`bg-gray-900 border border-gray-700 rounded-lg overflow-hidden transition-all duration-700 transform ${
                visibleSections.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-6 text-left hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">🔥</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {index + 1}. {principle.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openSections.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-700">
                  <p className="text-gray-300 text-lg mb-4 mt-4 transition-all duration-500 transform">
                    {principle.intro}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {principle.points.map((point, pointIndex) => (
                      <li 
                        key={pointIndex}
                        className="flex items-start text-gray-300 transition-all duration-500 transform"
                        style={{ transitionDelay: `${pointIndex * 100}ms` }}
                      >
                        <span className="text-yellow-400 mr-3 mt-1">📌</span>
                        <span className="hover:text-white transition-colors duration-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-orange-400 font-bold text-lg transition-all duration-500 transform hover:text-orange-300">
                    <span className="mr-3">💣</span>
                    <span>{principle.punchline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className={`transition-all duration-700 transform ${
            visibleSections.length > 5 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Live by the Code?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join our tribe and start building the future with AI
            </p>
            <Link to="/">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/25"
              >
                Join AI Mastermind
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfHonor;
