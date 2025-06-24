
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const VoiceAgentTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Sales",
      company: "TechFlow Solutions",
      quote: "Our lead qualification increased by 300% since implementing AI voice agents. They never miss a call and always follow our script perfectly.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Customer Success",
      company: "GrowthCorp",
      quote: "The quality is incredible - customers can't tell they're talking to AI. Our support costs dropped 70% while satisfaction went up.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Founder",
      company: "StartupHub",
      quote: "We're booking 5x more demo calls now. The AI handles objections better than some of our human reps. Game changer for scaling.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Real results from companies automating their conversations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-800 p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-125" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-center mb-6 italic transition-all duration-300 group-hover:text-white">
                "{testimonial.quote}"
              </blockquote>

              {/* Profile */}
              <div className="text-center">
                <div className="font-semibold text-white transition-all duration-300 group-hover:text-yellow-400 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                  {testimonial.role}
                </div>
                <div className="text-sm text-yellow-400 font-medium">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
