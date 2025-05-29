
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Rocket, Crown } from 'lucide-react';

export const EngagementLevels = () => {
  const levels = [
    {
      id: 'level-0',
      level: "Level 0",
      title: "Free AI Agent Masterclass",
      price: "FREE",
      description: "Still watching YouTube tutorials? In 90 mins, build your first AI Agent — no fluff, no jargon.",
      icon: Star,
      badge: "Most Popular",
      badgeColor: "bg-yellow-500",
      features: [
        "Live session with expert guidance",
        "No technical skills required",
        "3 free agent templates included",
        "Q&A session with community"
      ],
      cta: "Reserve Free Spot",
      ctaColor: "from-yellow-500 to-orange-600",
      highlight: true
    },
    {
      id: 'level-1',
      level: "Level 1",
      title: "AI Agent Kickstarter",
      price: "₹399",
      description: "If you're not automating at least 1 task with AI — you're already behind.",
      icon: Rocket,
      badge: "Quick Start",
      badgeColor: "bg-green-500",
      features: [
        "5 ready-made AI agents",
        "Step-by-step video guide",
        "Premium prompt pack",
        "1-week email support"
      ],
      cta: "Buy & Build Now",
      ctaColor: "from-green-500 to-blue-600"
    },
    {
      id: 'level-2',
      level: "Level 2",
      title: "AI Agent Launchpad",
      price: "₹12,000",
      description: "Become the person who replaces repetitive work with automations in 21 days.",
      icon: CheckCircle,
      badge: "Best Value",
      badgeColor: "bg-blue-500",
      features: [
        "Weekly live mentorship sessions",
        "Private community access",
        "Peer support and networking",
        "Certificate of completion"
      ],
      cta: "Join Launchpad",
      ctaColor: "from-blue-500 to-purple-600"
    },
    {
      id: 'level-3',
      level: "Level 3",
      title: "AI Agent Product Builder Cohort",
      price: "Premium",
      description: "No VC? No problem. Ship monetizable AI-powered tools and start earning.",
      icon: Crown,
      badge: "Elite",
      badgeColor: "bg-purple-500",
      features: [
        "Master N8N, LangChain, Cursor, Supabase",
        "Deploy with integrated payments",
        "Ship 3 real monetizable tools",
        "1-on-1 founder mentorship"
      ],
      cta: "Apply for Builder",
      ctaColor: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="engagement-levels" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 Choose Your Stage
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're just starting or ready to build products, we have the perfect path for your AI journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <Card 
              key={index} 
              id={level.id}
              className={`relative bg-gray-900 border-gray-700 p-8 transition-all duration-300 hover:scale-105 ${
                level.highlight ? 'ring-2 ring-yellow-500 scale-105' : 'hover:border-yellow-500'
              }`}
            >
              {/* Badge */}
              <Badge className={`absolute -top-3 left-6 ${level.badgeColor} text-white px-3 py-1 font-bold`}>
                {level.badge}
              </Badge>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${level.ctaColor} rounded-full flex items-center justify-center`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Level */}
              <div className="text-center mb-4">
                <div className="text-sm font-semibold text-yellow-400 mb-2">{level.level}</div>
                <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
                <div className="text-2xl font-bold text-green-400 mb-3">{level.price}</div>
                <p className="text-gray-400 mb-6 font-semibold">{level.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {level.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full py-3 font-bold transition-all duration-300 bg-gradient-to-r ${level.ctaColor} hover:scale-105 text-white shadow-lg`}
              >
                {level.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
