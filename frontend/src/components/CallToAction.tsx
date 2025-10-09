import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import siteData from '../data/siteData.json';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-[#0A2540] to-[#030D18] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {siteData.cta.title}            </h2>
            <p className="text-lg text-white/80">
              {siteData.cta.description}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#00CFFF]" />
                <span>{siteData.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#00CFFF]" />
                <span>{siteData.contact.email}</span>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white px-8 py-4 rounded-full font-semibold hover:from-[#00B2E2] hover:to-[#00CFFF] transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto lg:mx-0 lg:ml-auto shadow-lg"
            >
              {siteData.cta.buttonText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
