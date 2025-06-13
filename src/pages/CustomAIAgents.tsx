
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Phone, Users, Zap, CheckCircle, Bot, MessageSquare, FileText, UserCheck, TrendingUp, Shield } from 'lucide-react';

const CustomAIAgents = () => {
  const handleScheduleCall = () => {
    window.open('https://learn.datasciencemasterminds.com/l/aa01946050', '_blank');
  };

  const handleRequestDemo = () => {
    window.open('https://learn.datasciencemasterminds.com/l/eefd47b625', '_blank');
  };

  const useCases = [
    {
      department: 'Marketing',
      icon: TrendingUp,
      agents: [
        'Voice Agent for lead qualification calls',
        'LinkedIn Outreach automation',
        'Content Repurposer across platforms'
      ]
    },
    {
      department: 'Sales',
      icon: Users,
      agents: [
        'Follow-up automation system',
        'CRM data updater',
        'Meeting scheduler with prospects'
      ]
    },
    {
      department: 'HR',
      icon: UserCheck,
      agents: [
        'Resume screening automation',
        'Employee FAQ chatbot',
        'Onboarding process assistant'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-green-900/5 to-blue-900/5"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Bot className="w-16 h-16 text-yellow-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Custom AI Agents by{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                AI Mastermind
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Stop doing repetitive tasks. Let custom AI agents handle them while your team focuses on what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 group"
                onClick={handleScheduleCall}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 group"
                onClick={handleRequestDemo}
              >
                <Zap className="mr-2 w-5 h-5" />
                Try POC
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Kunaal Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Meet Your AI Strategist
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Coach Kunaal Naik</h3>
                <p className="text-lg text-gray-300 mb-6">
                  With 15+ years in AI and automation, Kunaal has helped 100+ companies globally transform their operations. 
                  As a recognized AI coach and consultant, he doesn't just build tools—he solves real business problems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>15+ years in AI & automation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>100+ companies transformed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Global AI coach & consultant</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                  alt="Kunaal Naik"
                  className="w-64 h-64 rounded-full object-cover border-4 border-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              The Problem We Solve
            </h2>
            
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Your Team Is Stuck in Repetitive Tasks</h3>
              <p className="text-lg text-gray-300">
                While your competitors automate and scale, your team spends hours on manual follow-ups, 
                data entry, scheduling, and other repetitive work that could be handled by AI.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">We Replace Manual Work with Custom AI Agents</h3>
              <p className="text-lg text-gray-300">
                Our custom AI agents handle the repetitive tasks, freeing your team to focus on strategy, 
                creativity, and high-value activities that actually grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              Custom AI Agents for Every Department
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <useCase.icon className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{useCase.department}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {useCase.agents.map((agent, agentIndex) => (
                      <li key={agentIndex} className="flex items-start">
                        <Bot className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span className="text-gray-300">{agent}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Why We're Different
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-900/20 to-green-900/20 border border-yellow-500/30 rounded-lg p-8">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                We Don't Sell Generic AI Tools
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Anyone can buy ChatGPT or generic automation software. We solve real business problems 
                with custom AI agents designed specifically for your workflows, your data, and your goals.
              </p>
              <p className="text-md text-gray-400 italic">
                "We build solutions, not just tools."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handler */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Why We Don't Show Client Names
            </h2>
            
            <div className="bg-black/50 border border-gray-700 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <p className="text-lg text-gray-300 mb-6">
                Every solution we build is unique and confidential. Our clients value discretion, 
                and we respect their competitive advantages. However, detailed case studies are 
                available upon request for serious prospects.
              </p>
              <Button 
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                onClick={handleRequestDemo}
              >
                Request Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's discuss how custom AI agents can transform your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black py-6 font-bold group"
                onClick={handleScheduleCall}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-6 font-bold group"
                onClick={handleRequestDemo}
              >
                <Zap className="mr-2 w-5 h-5" />
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black py-6 font-bold group"
                onClick={() => window.open('https://www.youtube.com/KunaalNaik', '_blank')}
              >
                <Users className="mr-2 w-5 h-5" />
                Meet Kunaal
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-4">
                AI Mastermind
              </h3>
              <p className="text-gray-400">
                Building the future of work with custom AI automation solutions.
              </p>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                Questions? Email us at{' '}
                <a 
                  href="mailto:hello@datasciencemasterminds.com" 
                  className="text-yellow-400 hover:text-yellow-300 underline"
                >
                  hello@datasciencemasterminds.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomAIAgents;
