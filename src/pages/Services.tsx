import React, { useState } from 'react';
import { Code, Database, Smartphone, Search, Shield, Headphones, Globe, BarChart3, Settings, ArrowRight } from 'lucide-react';
import { useServices } from '../hooks/useApi';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const { data: apiServices, loading, error } = useServices();

  const fallbackServices = [
    {
      id: 1,
      title: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'From simple landing pages to complex web applications, we build tailored websites with cutting-edge technologies to ensure a strong online presence. Our solutions are scalable, secure, and optimized for performance.',
      short_description: 'Modern web solutions',
      icon: 'Code',
      features: ['Responsive Design', 'Scalable Architecture', 'SEO Optimization', 'CMS Integration'],
      technologies: ['React', 'Next.js', 'Node.js', 'Laravel']
    },
    {
      id: 2,
      title: 'ERP System Solutions',
      slug: 'erp-system-solutions',
      description: 'We develop comprehensive Enterprise Resource Planning (ERP) systems to streamline your business operations. Our ERP solutions integrate all essential business functions, from finance and HR to inventory and supply chain management.',
      short_description: 'Complete business solutions',
      icon: 'Database',
      features: ['Financial Management', 'HR & Payroll', 'Inventory Control', 'Supply Chain Visibility'],
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Odoo']
    },
    {
      id: 3,
      title: 'Mobile-First Design',
      slug: 'mobile-first-design',
      description: 'With a mobile-first approach, we create responsive and intuitive designs that provide a seamless user experience across all devices. Our goal is to ensure your brand looks and works great on smartphones, tablets, and desktops.',
      short_description: 'Cross-platform excellence',
      icon: 'Smartphone',
      features: ['Responsive Layouts', 'Touch-Optimized UI', 'Fast Load Times', 'Cross-Browser Compatibility'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
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
    <div className="bg-gray-50 pt-24">
      {/* Header */}
      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of digital solutions designed to help your business thrive in the digital age. Explore our services to find the perfect fit for your needs.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section id="services-content" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column: Service List */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-28">
                  <h3 className="text-xl font-semibold text-[#0A2540] mb-4">All Services</h3>
                  <nav className="space-y-2">
                    {services.map((service, index) => (
                      <a
                        key={service.id || index}
                        href={`#${service.slug}`}
                        onClick={() => setActiveService(index)}
                        className={`flex items-center p-3 rounded-lg transition-all duration-300 ${activeService === index ? 'bg-[#00CFFF]/10 text-[#0A2540]' : 'text-gray-600 hover:bg-gray-100'}`}>
                        <div className="w-8 h-8 mr-3">{getIconComponent(service.icon)}</div>
                        <span className="font-medium">{service.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Right Column: Service Details */}
              <div className="lg:col-span-2">
                {services.map((service, index) => (
                  <div id={service.slug} key={service.id || index} className="bg-white p-8 rounded-3xl shadow-xl mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-2xl flex items-center justify-center text-white mr-6">
                        {getIconComponent(service.icon)}
                      </div>
                      <h2 className="text-3xl font-bold text-[#0A2540]">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                    
                    {service.features && service.features.length > 0 &&
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-[#0A2540] mb-4">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-[#00CFFF] rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    }

                    {service.technologies && service.technologies.length > 0 &&
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-[#0A2540] mb-4">Technologies We Use:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, tIndex) => (
                            <span key={tIndex} className="px-3 py-1 bg-gray-100 text-[#0A2540] text-sm font-medium rounded-full">{tech}</span>
                          ))}
                        </div>
                      </div>
                    }

                    <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Request a Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#00CFFF] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
