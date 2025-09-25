import React, { useState } from 'react';
import { Code, Database, Smartphone, Search, Shield, Headphones, Globe, BarChart3, Settings, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Web Development',
      shortDesc: 'Tailored websites built with cutting-edge technologies',
      fullDesc: 'We create custom websites using the latest web technologies including React, Next.js, and Node.js. Our solutions are scalable, secure, and optimized for performance.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuned', 'Modern UI/UX'],
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'ERP System Solutions',
      shortDesc: 'Comprehensive enterprise resource planning systems',
      fullDesc: 'Complete ERP solutions that streamline your business operations, from inventory management to financial reporting and human resources.',
      features: ['Inventory Management', 'Financial Reporting', 'HR Management', 'Real-time Analytics'],
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Redis']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First Design',
      shortDesc: 'Responsive designs optimized for all devices',
      fullDesc: 'Mobile-first approach ensuring your website looks and performs perfectly on smartphones, tablets, and desktops.',
      features: ['Cross-Platform', 'Touch Optimized', 'Fast Loading', 'App-like Experience'],
      technologies: ['PWA', 'React Native', 'Flutter', 'Ionic']
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & Digital Marketing',
      shortDesc: 'Boost your online visibility and rankings',
      fullDesc: 'Comprehensive SEO strategies and digital marketing solutions to increase your online presence and drive more traffic.',
      features: ['On-Page SEO', 'Technical SEO', 'Content Strategy', 'Analytics Setup'],
      technologies: ['Google Analytics', 'Search Console', 'Schema Markup', 'Core Web Vitals']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Maintenance',
      shortDesc: 'Keep your systems secure and up-to-date',
      fullDesc: 'Ongoing security monitoring, regular updates, and maintenance services to keep your digital assets protected and performing optimally.',
      features: ['Security Monitoring', 'Regular Updates', 'Backup Solutions', 'Performance Optimization'],
      technologies: ['SSL Certificates', 'Firewall Protection', 'CDN Integration', 'Monitoring Tools']
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Technical Support',
      shortDesc: 'Round-the-clock support for your peace of mind',
      fullDesc: 'Dedicated technical support team available 24/7 to help with any issues, updates, or questions you may have.',
      features: ['24/7 Availability', 'Quick Response', 'Expert Team', 'Multiple Channels'],
      technologies: ['Live Chat', 'Ticketing System', 'Remote Support', 'Knowledge Base']
    }
  ];

  const processSteps = [
    { icon: <Globe className="w-6 h-6" />, title: 'Discovery', desc: 'Understanding your business needs and goals' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Planning', desc: 'Creating detailed project roadmap and strategy' },
    { icon: <Code className="w-6 h-6" />, title: 'Development', desc: 'Building your solution with best practices' },
    { icon: <Settings className="w-6 h-6" />, title: 'Launch', desc: 'Deploying and optimizing your solution' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00CFFF]/10 rounded-full text-[#0A2540] text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Comprehensive Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-[#00CFFF]">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From custom web development to enterprise ERP systems, we provide end-to-end 
            digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                activeService === index ? 'border-[#00CFFF]' : 'border-transparent hover:border-[#00CFFF]/30'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                activeService === index 
                  ? 'bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white' 
                  : 'bg-gray-100 text-[#0A2540] group-hover:bg-gradient-to-r group-hover:from-[#0A2540] group-hover:to-[#00CFFF] group-hover:text-white'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDesc}</p>
              
              <button className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                activeService === index ? 'text-[#00CFFF]' : 'text-[#0A2540] group-hover:text-[#00CFFF]'
              }`}>
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-xl flex items-center justify-center text-white mr-4">
                  {services[activeService].icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540]">{services[activeService].title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {services[activeService].fullDesc}
              </p>
              
              <h4 className="text-lg font-semibold text-[#0A2540] mb-4">Key Features:</h4>
              <ul className="space-y-2 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-[#00CFFF] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a6e] p-8 lg:p-12 text-white">
              <h4 className="text-xl font-semibold mb-6">Technologies We Use</h4>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services[activeService].technologies.map((tech, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h5 className="font-semibold mb-2">Why Choose This Service?</h5>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our expertise in this area ensures you get cutting-edge solutions that are 
                  scalable, secure, and optimized for your specific business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#0A2540] mb-12">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#0A2540] mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#00CFFF] to-transparent transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;