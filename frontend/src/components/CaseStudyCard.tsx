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
    <div className={`bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-700/50 hover:border-blue-500/30 hover:shadow-blue-500/10 ${className}`}>
      <div className="aspect-w-16 aspect-h-9 h-48 md:h-56 relative overflow-hidden">
        <LazyImage 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full">
            View Details
          </span>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-900/40 rounded-full mb-3 group-hover:bg-blue-800/60 transition-colors">
          {caseStudy.industry || 'Case Study'}
        </span>
        <h3 className="text-xl font-bold text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {caseStudy.short_description || caseStudy.description}
        </p>
        <Link 
          to={`/case-studies/${caseStudy.slug || caseStudy.id}`}
          className="group flex items-center text-blue font-medium hover:text-blue-300 transition-colors duration-200"
          state={{ from: window.location.pathname }}
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;