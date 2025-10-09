import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  tools?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, tools }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-xl flex items-center justify-center mr-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#0A2540]">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-[#0A2540] mb-3">Key Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#00CFFF] mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {tools && tools.length > 0 && (
        <div className="mb-8">
          <h4 className="font-semibold text-[#0A2540] mb-3">Tools & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto">
        <Link 
          to="/contact" 
          className="block text-center w-full bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Request This Service
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
