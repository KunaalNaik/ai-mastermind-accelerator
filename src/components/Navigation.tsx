
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about', isExternal: false },
    { name: 'Code of Honor', href: '/code-of-honor', isExternal: false },
    { name: 'Meet Kunaal Naik', href: '#meet-kunaal', isExternal: false },
    { name: 'Custom AI Agents', href: '/custom-ai-agents', isExternal: false },
    { name: 'Voice Agent', href: '/voice-agent', isExternal: false },
    { name: 'Join the Tribe', href: '#join', isExternal: false }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/c57ee613-58f7-42c6-b5b9-055fa248c710.png" 
              alt="AI Mastermind Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              AI Mastermind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                </a>
              ) : (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 bg-black/95 backdrop-blur-sm">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 px-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
