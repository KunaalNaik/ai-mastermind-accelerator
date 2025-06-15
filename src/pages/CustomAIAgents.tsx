import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Calendar, MessageSquare, Database, FileText, UserCheck } from 'lucide-react';

const CustomAIAgents = () => {
  const handleCTAClick = (type: string) => {
    if (type === 'call') {
      window.open('https://calendly.com/kunaalnaik', '_blank');
    } else if (type === 'demo') {
      window.open('mailto:support@datasciencemasterminds.com?subject=Request Demo', '_blank');
    }
  };

  const useCases = [
    {
      title: 'Lead Generation AI',
      description: 'Automate lead capture, qualification, and engagement to supercharge your sales pipeline.',
      features: [
        'Automated Lead Capture',
        'Intelligent Qualification',
        'Personalized Engagement',
      ],
      icon: Users,
    },
    {
      title: 'Appointment Booking AI',
      description: 'Streamline scheduling with AI-powered booking, reminders, and calendar management.',
      features: [
        '24/7 Availability',
        'Automated Reminders',
        'Calendar Sync',
      ],
      icon: Calendar,
    },
    {
      title: 'Customer Support AI',
      description: 'Provide instant, accurate support with AI chatbots that resolve queries and escalate complex issues.',
      features: [
        'Instant Responses',
        '24/7 Support',
        'Seamless Escalation',
      ],
      icon: MessageSquare,
    },
    {
      title: 'Data Analysis AI',
      description: 'Unlock insights from your data with AI-driven analytics, reporting, and predictive modeling.',
      features: [
        'Automated Reporting',
        'Predictive Modeling',
        'Custom Dashboards',
      ],
      icon: Database,
    },
    {
      title: 'Content Creation AI',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns with AI assistance.',
      features: [
        'AI-Powered Writing',
        'SEO Optimization',
        'Content Variety',
      ],
      icon: FileText,
    },
    {
      title: 'HR Automation AI',
      description: 'Automate HR tasks like onboarding, training, and compliance with AI-driven solutions.',
      features: [
        'Automated Onboarding',
        'Personalized Training',
        'Compliance Tracking',
      ],
      icon: UserCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Custom AI Agents for Your Business
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Unlock the power of AI with tailored solutions designed to automate, optimize, and transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={() => handleCTAClick('call')}>
                  Schedule a Call <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" onClick={() => handleCTAClick('demo')}>
                  Request a Demo
                </Button>
              </div>
            </div>
            <img
              src="/lovable-uploads/6f959311-8741-4933-8845-8ff1a6b9a413.png"
              alt="Custom AI Agents"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How Can Custom AI Agents Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
                <useCase.icon className="w-6 h-6 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <ul>
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 mb-1">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <p className="text-gray-300 italic mb-4">
                "The AI agent built for us has revolutionized our lead generation process. We've seen a 3x increase in qualified leads!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">John Doe</h4>
                  <p className="text-gray-400">CEO, Company XYZ</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <p className="text-gray-300 italic mb-4">
                "Our customer support AI has significantly reduced response times and improved customer satisfaction. It's like having a 24/7 support team!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b2933e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">Jane Smith</h4>
                  <p className="text-gray-400">Marketing Director, ABC Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Contact us today to discuss your specific needs and explore how custom AI agents can drive growth and efficiency.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={() => handleCTAClick('call')}>
              Schedule a Call <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" onClick={() => handleCTAClick('demo')}>
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/c57ee613-58f7-42c6-b5b9-055fa248c710.png" 
                alt="AI Mastermind Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                AI Mastermind
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Transforming businesses with custom AI automation solutions
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>15+ Years Experience</span>
              <span>100+ Companies Served</span>
              <span>Global AI Coach</span>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p>Contact: <a href="mailto:support@datasciencemasterminds.com" className="text-yellow-400 hover:text-yellow-300">support@datasciencemasterminds.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomAIAgents;
