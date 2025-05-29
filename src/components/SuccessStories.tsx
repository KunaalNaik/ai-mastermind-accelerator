
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const SuccessStories = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Marketing Director",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The AI agents I built saved our team 20 hours per week. ROI was immediate!",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Founder",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "From zero to launching my first AI-powered SaaS in just 3 weeks. Incredible program!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Sales Manager",
      company: "SalesForce Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The automation templates alone are worth 10x the price. My lead qualification is now 100% automated.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            💬 Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how our community is transforming their careers and businesses with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 p-6 hover:scale-105 transition-all duration-300 hover:border-yellow-500">
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-center mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Profile */}
              <div className="text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-yellow-400"
                />
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-yellow-400 font-medium">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
