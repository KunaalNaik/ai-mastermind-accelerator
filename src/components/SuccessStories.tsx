
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const SuccessStories = () => {
  const testimonials = [
    {
      name: "Battu O.U",
      role: "Flogrammer",
      company: "AI Mastermind Program",
      quote: "Kunaal is only the best mentor in this world I feel. I have gone through many Digital coaches till now but no one can replace Kunal in training. May god bless him to train more people like us.🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻",
      rating: 5,
      delay: "0s"
    },
    {
      name: "Indrajit Pal",
      role: "Flogrammer",
      company: "AI Mastermind Program",
      quote: "In my journey of learning, I've come across many digital coaches, but none have touched my heart and mind the way Kunal has. He isn't just a mentor—he's a true guide, someone who genuinely wants to see us grow. His way of teaching makes you feel seen, understood, and empowered. I feel truly blessed to have learned under him. May God continue to bless him so he can uplift many more lives like ours. A heartfelt thank you to Arpan as well, whose support made executing tasks smoother and more achievable. Grateful to both of them for being such a beautiful part of this learning experience.",
      rating: 5,
      delay: "0.2s"
    },
    {
      name: "Suju Pillai",
      role: "Flogrammer",
      company: "AI Mastermind Program",
      quote: "Kunal's session stood out compared to others I've attended. I really appreciated his focus on practical application alongside theory (not just theory). Thank you, Kunal!",
      rating: 5,
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            💬 Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            See how our community is transforming their careers and businesses with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group animate-fade-in"
              style={{ animationDelay: testimonial.delay }}
            >
              {/* Rating Stars with animation */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-125 hover:rotate-12" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote with hover effect */}
              <blockquote className="text-gray-300 text-center mb-6 italic transition-all duration-300 group-hover:text-white group-hover:scale-105">
                "{testimonial.quote}"
              </blockquote>

              {/* Profile without image */}
              <div className="text-center">
                <div className="font-semibold text-white transition-all duration-300 group-hover:text-yellow-400 mb-1">{testimonial.name}</div>
                <div className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">{testimonial.role}</div>
                <div className="text-sm text-yellow-400 font-medium transition-all duration-300 group-hover:text-yellow-300">{testimonial.company}</div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
