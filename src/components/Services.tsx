import React from 'react';
import { useServices } from '../hooks/useApi';
import { Link } from 'react-router-dom';
import { Code, Database, Smartphone, Layers, Settings } from 'lucide-react';

// Define the service interface for type safety
interface ServicePreview {
  id: number | string;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  icon?: string;
}

// Map service icons
const getServiceIcon = (iconName: string = '') => {
  const iconMap: { [key: string]: JSX.Element } = {
    'Code': <Code className="w-6 h-6" />,
    'Database': <Database className="w-6 h-6" />,
    'Smartphone': <Smartphone className="w-6 h-6" />,
    'Layers': <Layers className="w-6 h-6" />,
  };
  return iconMap[iconName] || <Settings className="w-6 h-6" />;
};

const Services: React.FC = () => {
  // Use the useServices hook to fetch services data with proper null check
  const { data: services = [], loading, error } = useServices();
  
  // Fallback services in case the API call fails or is loading
  const fallbackServices: ServicePreview[] = [
    {
      id: 1,
      title: 'Web Development',
      slug: 'web-development',
      short_description: 'Custom websites and web applications built with modern technologies.',
      icon: 'Code'
    },
    {
      id: 2,
      title: 'ERP Solutions',
      slug: 'erp-solutions',
      short_description: 'Comprehensive business management solutions for your operations.',
      icon: 'Database'
    },
    {
      id: 3,
      title: 'Mobile Apps',
      slug: 'mobile-apps',
      short_description: 'Responsive and intuitive mobile applications.',
      icon: 'Smartphone'
    },
    {
      id: 4,
      title: 'Cloud Services',
      slug: 'cloud-services',
      short_description: 'Scalable cloud solutions for your business needs.',
      icon: 'Layers'
    }
  ];

  // Determine which services to display
  const servicesToDisplay = services && services.length > 0 ? services.slice(0, 4) : fallbackServices;

  if (error) {
    console.error('Error loading services:', error);
  }

  // Helper function to get service description
  const getServiceDescription = (service: ServicePreview) => {
    if (service.short_description) return service.short_description;
    if (service.description) return service.description.substring(0, 100) + '...';
    return `Learn more about our ${service.title.toLowerCase()} services.`;
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert solutions designed to drive your business forward in the digital landscape.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 animate-pulse h-64">
                <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesToDisplay.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-xl flex items-center justify-center text-white mb-4">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm">
                  {getServiceDescription(service)}
                </p>
                <Link 
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#00CFFF] hover:text-[#0A2540] transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#0A2540] to-[#00CFFF] hover:from-[#00CFFF] hover:to-[#0A2540] transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            View All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
