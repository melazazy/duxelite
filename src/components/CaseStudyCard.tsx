import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../services/apiService';
import LazyImage from './LazyImage';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="aspect-w-16 aspect-h-9 h-48 md:h-56">
        <LazyImage 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-medium text-[#00CFFF] bg-[#F0FAFF] rounded-full mb-3">
          {caseStudy.industry}
        </span>
        <h3 className="text-xl font-bold text-[#0A2540] mb-2 line-clamp-2">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {caseStudy.short_description || caseStudy.description}
        </p>
        <Link 
          to={`/portfolio/${caseStudy.slug || caseStudy.id}`}
          className="group flex items-center text-[#00CFFF] font-medium hover:text-[#00B2E2] transition-colors duration-200"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;