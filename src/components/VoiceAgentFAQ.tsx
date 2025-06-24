
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const VoiceAgentFAQ = () => {
  const faqs = [
    {
      question: "Can it speak multiple languages?",
      answer: "Yes! Our AI voice agents support over 30 languages and can switch between them during conversations. Perfect for global businesses."
    },
    {
      question: "Does it integrate with my CRM?",
      answer: "Absolutely. We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and 50+ others. Data syncs in real-time."
    },
    {
      question: "What happens if the customer wants a human?",
      answer: "The AI can seamlessly transfer to a human agent at any time. It will provide a complete conversation summary to ensure smooth handoffs."
    },
    {
      question: "How realistic does the voice sound?",
      answer: "Our AI uses advanced voice synthesis that's virtually indistinguishable from humans. Most customers don't realize they're talking to AI."
    },
    {
      question: "Can I customize the conversation flow?",
      answer: "Yes! You can upload custom scripts, set decision trees, and train the AI on your specific use cases and brand voice."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees, no monthly minimums. You only pay ₹2 per call. We'll have you up and running in under 10 minutes."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything you need to know about AI voice agents
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900 border-gray-800 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
