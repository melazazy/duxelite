import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Smartphone, Search, Shield, Headphones, Settings, ArrowRight } from 'lucide-react';
import { useServices } from '../hooks/useApi';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const { data: apiServices, loading, error } = useServices();
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top of the right content when activeService changes
  useEffect(() => {
    if (contentRef.current) {
      const headerOffset = 120; // Approximate height of the header/navigation
      const elementPosition = contentRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeService]);

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
  const activeServiceData = services[activeService] || services[0];

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Code': <Code className="w-6 h-6" />,
      'Database': <Database className="w-6 h-6" />,
      'Smartphone': <Smartphone className="w-6 h-6" />,
      'Search': <Search className="w-6 h-6" />,
      'Shield': <Shield className="w-6 h-6" />,
      'Headphones': <Headphones className="w-6 h-6" />
    };
    return iconMap[iconName] || <Settings className="w-6 h-6" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#00CFFF]/30 border-t-[#00CFFF] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg">Error loading services: {error}</p>
          <p className="text-white/80 mt-2">Showing fallback services</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Header */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We offer a wide range of digital solutions designed to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Service List */}
            <div className="lg:w-1/3">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
                <nav className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={service.id || index}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left rounded-lg transition-all duration-300 ${
                        activeService === index
                          ? 'bg-[#00CFFF]/20 text-white shadow-lg'
                          : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                          {getIconComponent(service.icon)}
                        </div>
                        <span className="font-medium">{service.title}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Content - Service Details */}
            <div ref={contentRef} className="lg:w-3/4">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] rounded-2xl flex items-center justify-center text-white mr-6">
                    {getIconComponent(activeServiceData.icon)}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{activeServiceData.title}</h2>
                </div>

                <p className="text-white/80 mb-8 text-lg">
                  {activeServiceData.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeServiceData.features && activeServiceData.features.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {Array.isArray(activeServiceData.features) 
                          ? activeServiceData.features.map((feature: string, fIndex: number) => (
                              <li key={fIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-white/80">{feature}</span>
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                  )}

                  {activeServiceData.technologies && activeServiceData.technologies.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(activeServiceData.technologies)
                          ? activeServiceData.technologies.map((tech: string, tIndex: number) => (
                              <span 
                                key={tIndex} 
                                className="px-3 py-1.5 bg-white/10 text-white/90 text-sm font-medium rounded-full hover:bg-white/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ))
                          : null}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00CFFF]/10 to-[#00B2E2]/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help bring your ideas to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;