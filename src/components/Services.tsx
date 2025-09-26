import React, { useState } from 'react';
import { Code, Database, Smartphone, Search, Shield, Headphones, Globe, BarChart3, Settings, ArrowRight } from 'lucide-react';
import { useServicesHomePageData } from '../hooks/useApi';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const { data: apiServices, loading, error } = useServicesHomePageData();

  // Fallback services data
  const fallbackServices = [
    {
      id: 1,
      title: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'Tailored websites built with cutting-edge technologies',
      short_description: 'Modern web solutions',
      icon: 'Code'
    },
    {
      id: 2,
      title: 'ERP System Solutions',
      slug: 'erp-system-solutions',
      description: 'Comprehensive enterprise resource planning systems',
      short_description: 'Complete business solutions',
      icon: 'Database'
    },
    {
      id: 3,
      title: 'Mobile-First Design',
      slug: 'mobile-first-design',
      description: 'Responsive designs optimized for all devices',
      short_description: 'Cross-platform excellence',
      icon: 'Smartphone'
    },
    {
      id: 4,
      title: 'SEO & Digital Marketing',
      slug: 'seo-digital-marketing',
      description: 'Boost your online visibility and rankings',
      short_description: 'Digital growth strategies',
      icon: 'Search'
    },
    {
      id: 5,
      title: 'Security & Maintenance',
      slug: 'security-maintenance',
      description: 'Keep your systems secure and up-to-date',
      short_description: 'Ongoing protection',
      icon: 'Shield'
    },
    {
      id: 6,
      title: '24/7 Technical Support',
      slug: 'technical-support',
      description: 'Round-the-clock support for your peace of mind',
      short_description: 'Always available help',
      icon: 'Headphones'
    }
  ];

  const services = apiServices && apiServices.length > 0 ? apiServices : fallbackServices;

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Code': <Code className="w-8 h-8" />,
      'Database': <Database className="w-8 h-8" />,
      'Smartphone': <Smartphone className="w-8 h-8" />,
      'Search': <Search className="w-8 h-8" />,
      'Shield': <Shield className="w-8 h-8" />,
      'Headphones': <Headphones className="w-8 h-8" />
    };
    return iconMap[iconName] || <Settings className="w-8 h-8" />;
  };

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
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[#00CFFF]/30 border-t-[#00CFFF] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading services: {error}</p>
          </div>
        ) : (
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id || index}
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
                {getIconComponent(service.icon)}
              </div>
              
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.short_description || service.description}</p>
              
              <Link 
                to={`/services#${service.slug}`}
                className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                  activeService === index ? 'text-[#00CFFF]' : 'text-[#0A2540] group-hover:text-[#00CFFF]'
                }`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        )}

        {/* Active Service Details */}
        {services.length > 0 && (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-xl flex items-center justify-center text-white mr-4">
                  {getIconComponent(services[activeService]?.icon)}
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540]">{services[activeService]?.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {services[activeService]?.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0A2540] mb-4">What We Offer:</h4>
                <p className="text-gray-600 leading-relaxed">
                  Professional {services[activeService]?.title.toLowerCase()} services designed to meet your specific business needs and drive growth.
                </p>
              </div>
              
              <Link 
                to={`/services#${services[activeService]?.slug}`}
                className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a6e] p-8 lg:p-12 text-white">
              <h4 className="text-xl font-semibold mb-6">Why Choose This Service?</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Expert team with years of experience in {services[activeService]?.title.toLowerCase()}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Customized solutions tailored to your business requirements
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ongoing support and maintenance for long-term success
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h5 className="font-semibold mb-2">Ready to Get Started?</h5>
                <p className="text-white/80 text-sm leading-relaxed">
                  Contact us today to discuss your project and discover how we can help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        )}

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