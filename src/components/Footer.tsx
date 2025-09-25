import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        'Custom Web Development',
        'ERP System Solutions', 
        'Mobile App Development',
        'E-commerce Platforms',
        'Digital Consulting',
        'Technical Support'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Healthcare',
        'Manufacturing',
        'E-commerce',
        'Financial Services',
        'Education',
        'Real Estate'
      ]
    },
    // {
    //   title: 'Resources',
    //   links: [
    //     'Blog',
    //     'Case Studies',
    //     'White Papers',
    //     'Documentation',
    //     'API Reference',
    //     'Support Center'
    //   ]
    // },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Contact Us',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00CFFF] to-white rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-[#0A2540]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">TechFlow</h3>
                  <p className="text-[#00CFFF] text-sm">Digital Solutions</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                Transforming businesses through innovative web development, ERP systems, 
                and digital solutions. Your trusted partner for digital success.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-white/70">
                  <Mail className="w-5 h-5 mr-3 text-[#00CFFF]" />
                  hello@techflow.com
                </div>
                <div className="flex items-center text-white/70">
                  <Phone className="w-5 h-5 mr-3 text-[#00CFFF]" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-start text-white/70">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#00CFFF] flex-shrink-0" />
                  123 Tech Street, Innovation City, TC 12345
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-[#00CFFF] transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">Stay Updated</h4>
              <p className="text-white/70">
                Get the latest insights, tips, and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-[#00CFFF] transition-colors duration-300 backdrop-blur-sm"
              />
              <button className="bg-[#00CFFF] text-[#0A2540] px-6 py-3 rounded-xl font-semibold hover:bg-white transition-colors duration-300 flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 TechFlow Digital Solutions. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline mx-1 text-[#00CFFF]" /> for innovation.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00CFFF] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="border-t border-white/10 py-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 text-sm text-white/60">
              <button className="hover:text-white transition-colors duration-300 flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                English
              </button>
              <span>|</span>
              <button className="hover:text-white transition-colors duration-300">
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;