
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
      description: "Build your first AI agent in 90 minutes",
      icon: Star,
      badge: "Most Popular",
      badgeColor: "bg-green-500",
      features: [
        "Live session with expert guidance",
        "No technical skills required",
        "3 free agent templates included",
        "Q&A session with community"
      ],
      cta: "Reserve Your Free Spot",
      ctaVariant: "default" as const,
      highlight: true
    },
    {
      id: 'level-1',
      level: "Level 1",
      title: "AI Agent Kickstarter Bundle",
      price: "₹399",
      description: "Launch your first automation in under 1 hour",
      icon: Rocket,
      badge: "Quick Start",
      badgeColor: "bg-blue-500",
      features: [
        "5 ready-made AI agents",
        "Step-by-step video guide",
        "Premium prompt pack",
        "1-week email support"
      ],
      cta: "Buy Now",
      ctaVariant: "outline" as const
    },
    {
      id: 'level-2',
      level: "Level 2",
      title: "AI Agent Launchpad",
      price: "₹12,000",
      description: "21-day guided community challenge to build 6 AI agents",
      icon: CheckCircle,
      badge: "Best Value",
      badgeColor: "bg-purple-500",
      features: [
        "Weekly live mentorship sessions",
        "Private community access",
        "Peer support and networking",
        "Certificate of completion"
      ],
      cta: "Join Launchpad",
      ctaVariant: "outline" as const
    },
    {
      id: 'level-3',
      level: "Level 3",
      title: "AI Agent Product Builder Cohort",
      price: "Premium",
      description: "Build & ship AI-powered apps and monetize them",
      icon: Crown,
      badge: "Elite",
      badgeColor: "bg-yellow-500",
      features: [
        "Master N8N, LangChain, Cursor, Supabase",
        "Deploy with integrated payments",
        "Ship 3 real monetizable tools",
        "1-on-1 founder mentorship"
      ],
      cta: "Apply Now",
      ctaVariant: "default" as const
    }
  ];

  return (
    <section id="engagement-levels" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Choose Your Stage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting or ready to build products, we have the perfect path for your AI journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <Card 
              key={index} 
              id={level.id}
              className={`relative p-8 transition-all duration-300 hover:shadow-xl ${
                level.highlight ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
              }`}
            >
              {/* Badge */}
              <Badge className={`absolute -top-3 left-6 ${level.badgeColor} text-white px-3 py-1`}>
                {level.badge}
              </Badge>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <level.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Level */}
              <div className="text-center mb-4">
                <div className="text-sm font-semibold text-blue-600 mb-2">{level.level}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{level.title}</h3>
                <div className="text-2xl font-bold text-purple-600 mb-3">{level.price}</div>
                <p className="text-gray-600 mb-6">{level.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {level.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full py-3 font-semibold transition-all duration-300 ${
                  level.ctaVariant === 'default' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                variant={level.ctaVariant}
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
