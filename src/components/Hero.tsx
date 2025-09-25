import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const achievements = [
    'Custom Web Development',
    'ERP System Solutions',
    '24/7 Technical Support',
    'SEO Optimization'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a4a6e]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00CFFF] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00CFFF] rounded-full filter blur-3xl"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#00CFFF]/30 rotate-45 rounded-lg"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-white/20 rotate-12 rounded-lg"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-[#00CFFF] text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#00CFFF] rounded-full mr-2"></span>
                Leading Digital Solutions Provider
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-white">
                  Digital Vision
                </span>
                Into Reality
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                We specialize in creating cutting-edge websites, robust web systems, and comprehensive ERP solutions that drive business growth and digital transformation.
              </p>
            </div>

            {/* Achievement List */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00CFFF] flex-shrink-0" />
                  <span className="text-white/90 text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#00CFFF] to-[#0A2540] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/10 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-white/40 text-xs">TechFlow Dashboard</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#00CFFF]/20 to-transparent p-4 rounded-lg border-l-2 border-[#00CFFF]">
                    <div className="text-white/90 text-sm font-medium mb-1">Website Performance</div>
                    <div className="text-2xl font-bold text-white">98.5%</div>
                    <div className="text-[#00CFFF] text-xs">↑ 12% from last month</div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white/90 text-sm font-medium mb-1">Active Projects</div>
                    <div className="text-2xl font-bold text-white">24</div>
                    <div className="text-green-400 text-xs">↑ 8 new projects</div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white/90 text-sm font-medium mb-1">Client Satisfaction</div>
                    <div className="text-2xl font-bold text-white">99.2%</div>
                    <div className="text-[#00CFFF] text-xs">Perfect rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#00CFFF] to-[#0A2540] rounded-2xl opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-xl opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white/60 text-xs">Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;