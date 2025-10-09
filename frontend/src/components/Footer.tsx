import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart, Check, X } from 'lucide-react';
import siteData from '../data/siteData.json';
import formService from '../services/formService';
import { motion, AnimatePresence } from 'framer-motion';

type FooterLink = {
  text: string;
  to: string;
};

type FooterSection = {
  title: string;
  links: (string | FooterLink)[];
};

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  name: string;
};

const Footer: React.FC = () => {
  const [formState, setFormState] = useState<{
    loading: boolean;
    success: boolean;
    message: string | null;
  }>({
    loading: false,
    success: false,
    message: null
  });
  const formRef = useRef<HTMLFormElement>(null);
  const footerSections: FooterSection[] = [
    // {
    //   title: 'Services',
    //   links: [
    //     'Custom Web Development',
    //     'ERP System Solutions', 
    //     'Mobile App Development',
    //     'E-commerce Platforms',
    //     'Digital Consulting',
    //     'Technical Support'
    //   ]
    // },
    // {
    //   title: 'Industries',
    //   links: [
    //     'Healthcare',
    //     'Manufacturing',
    //     'E-commerce',
    //     'Financial Services',
    //     'Education',
    //     'Real Estate'
    //   ]
    // },
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
        { text: 'About Us', to: '/about' },
        { text: 'Our Team', to: '/team' },
        { text: 'Careers', to: '/careers' },
        { text: 'Contact Us', to: '/contact' },
        { text: 'Privacy Policy', to: '/privacy-policy' },
        { text: 'Terms of Service', to: '/terms-of-service' }
      ]
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/duxelite', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/duxelite', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/duxelite', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/duxelite', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info - Wider column */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00CFFF] to-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-[#0A2540]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{siteData.site.name}</h3>
                  <p className="text-[#00CFFF] text-sm md:text-base">{siteData.site.tagline}</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-8 max-w-2xl">
                {siteData.site.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-[#00CFFF] flex-shrink-0" />
                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-[#00CFFF] transition-colors">
                      {siteData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-[#00CFFF] flex-shrink-0" />
                    <a href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`} className="hover:text-[#00CFFF] transition-colors">
                      {siteData.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#00CFFF] flex-shrink-0" />
                  <span>{siteData.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Single Footer Links Section */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-white/10">
                {footerSections[0].title}
              </h4>
              <ul className="space-y-3">
                {footerSections[0].links.map((link, linkIndex) => {
                  const linkText = typeof link === 'string' ? link : link.text;
                  const linkTo = typeof link === 'string' ? `/${link.toLowerCase().replace(/\s+/g, '-')}` : link.to;
                  
                  return (
                    <li key={linkIndex}>
                      <Link
                        to={linkTo}
                        className="text-white/70 hover:text-[#00CFFF] transition-colors duration-300 text-sm"
                      >
                        {linkText}
                      </Link>
                    </li>
                  );
                })}
              </ul>
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
            <form 
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                setFormState(prev => ({ ...prev, loading: true, message: null, success: false }));
                
                try {
                  const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
                  if (email) {
                    const result = await formService.subscribeToNewsletter(email);
                    
                    setFormState({
                      loading: false,
                      success: result.success,
                      message: result.message || 'An error occurred. Please try again.'
                    });
                    
                    if (result.success && formRef.current) {
                      formRef.current.reset();
                      // Clear success message after 5 seconds
                      setTimeout(() => {
                        setFormState(prev => ({ ...prev, message: null }));
                      }, 5000);
                    }
                  }
                } catch (error: any) {
                  console.error('Subscription error:', error);
                  setFormState({
                    loading: false,
                    success: false,
                    message: error.response?.data?.message || error.message || 'An error occurred. Please try again.'
                  });
                }
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      formState.message
                        ? formState.success
                          ? 'border-[#00CFFF]'
                          : 'border-red-400'
                        : 'border-white/20'
                    } rounded-xl focus:outline-none focus:border-[#00CFFF] transition-colors duration-300 backdrop-blur-sm text-white placeholder-white/50`}
                  />
                </div>
                <AnimatePresence>
                  {formState.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`overflow-hidden text-sm ${
                        formState.success ? 'text-[#00CFFF]' : 'text-red-400'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {formState.success ? (
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        )}
                        <span>{formState.message}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                type="submit"
                disabled={formState.loading}
                className="w-full bg-[#00CFFF] text-[#0A2540] px-6 py-3 rounded-xl font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState.loading ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
            {siteData.forms.copyright.text}
              {siteData.forms.copyright.madeWith} {' '}
              <Heart className="w-4 h-4 inline mx-1 text-[#00CFFF]" />{siteData.forms.copyright.for}.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
        {/* <div className="border-t border-white/10 py-4">
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
        </div> */}
      </div>
      </div>
    </footer>
  );
};

export default Footer;