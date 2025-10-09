import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import siteData from '../data/siteData.json';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'case-studies', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'case-studies') {
      window.location.href = '/#case-studies';
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  type NavItem = {
    id: string;
    label: string;
    type: 'scroll' | 'link';
    href?: string;
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', type: 'scroll' },
    { id: 'about', label: 'About Us', type: 'scroll' },
    { id: 'services', label: 'Services', type: 'scroll' },
    { id: 'portfolio', label: 'Portfolio', type: 'scroll' },
    { id: 'case-studies', label: 'Case Studies', type: 'scroll'},
    { id: 'blog', label: 'Blog', type: 'scroll'},
    { id: 'contact', label: 'Contact', type: 'link', href: '/contact' }
  ];

    // const achievements = siteData.home.features.map(feature => feature.title);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-15 h-15 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-lg flex items-center justify-center">
              <img src={isScrolled ? siteData.site.logo_black : siteData.site.logo_white} alt="Logo" className="w-13 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#00CFFF]">{siteData.site.name}</h1>
              <p className="text-xs text-gray-600">{siteData.site.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.href || `#${item.id}`}
                  className={`relative font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-[#00CFFF]' 
                      : isScrolled ? 'text-[#0A2540] hover:text-[#00CFFF]' : 'text-white hover:text-[#00CFFF]'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00CFFF] rounded-full"></span>
                  )}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-[#00CFFF]' 
                      : isScrolled ? 'text-[#0A2540] hover:text-[#00CFFF]' : 'text-white hover:text-[#00CFFF]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00CFFF] rounded-full"></span>
                  )}
                </a>
              )
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-1 text-sm">
              <Globe className="w-4 h-4" />
              <span className={isScrolled ? 'text-[#0A2540]' : 'text-white'}>EN</span>
              <ChevronDown className="w-4 h-4" />
            </div> */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.id}
                    to={item.href || '#'}
                    className="block w-full text-left px-4 py-3 text-[#0A2540] hover:bg-gray-50 hover:text-[#00CFFF] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-[#0A2540] hover:bg-gray-50 hover:text-[#00CFFF] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="border-t pt-4 px-4 pb-2">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white py-3 rounded-full font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;