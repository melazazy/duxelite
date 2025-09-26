import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-[#0A2540] to-[#1a4a6e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80">
              Let's work together to build a powerful web solution that drives your business forward.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#00CFFF]" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#00CFFF]" />
                <span>contact@duxelite.com</span>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <button className="group bg-gradient-to-r from-[#00CFFF] to-white text-[#0A2540] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto lg:mx-0 lg:ml-auto">
              Let's Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
