import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCaseStudies } from '../hooks/useApi';
import { Link } from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudy } from '../services/apiService';

interface HomeCaseStudiesProps {
  maxItems?: number;
  className?: string;
}

const HomeCaseStudies: React.FC<HomeCaseStudiesProps> = ({
  maxItems = 3,
  className = '',
}) => {
  const { data: apiCaseStudies, loading, error } = useCaseStudies();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  
  // Fallback data in case API is not available
  const fallbackCaseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Global Manufacturing ERP Implementation',
      client: 'ManufactureMax Industries',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing inefficiencies and data silos across multiple departments.',
      solution: 'Implemented comprehensive ERP system with integrated modules for production, inventory, HR, and finance.',
      results: [
        { metric: '40%', description: 'Increase in operational efficiency' },
        { metric: '60%', description: 'Reduction in manual processes' },
        { metric: '25%', description: 'Cost savings in first year' },
        { metric: '99.9%', description: 'System uptime achieved' }
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
      timeline: '6 months',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      featured: true,
      slug: 'global-manufacturing-erp',
      short_description: 'Enterprise resource planning system for manufacturing',
      description: 'Comprehensive case study on ERP implementation for manufacturing industry.'
    },
    {
      id: 2,
      title: 'Healthcare Digital Transformation',
      client: 'MediCare Plus Network',
      industry: 'Healthcare',
      challenge: 'Outdated patient management system affecting service quality and operational efficiency.',
      solution: 'Developed modern healthcare management platform with telemedicine capabilities and mobile app.',
      results: [
        { metric: '50%', description: 'Faster patient processing' },
        { metric: '80%', description: 'Increase in patient satisfaction' },
        { metric: '35%', description: 'Reduction in administrative costs' },
        { metric: '200%', description: 'Growth in online consultations' }
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      timeline: '8 months',
      image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg',
      featured: true,
      slug: 'healthcare-digital-transformation',
      short_description: 'Digital platform for healthcare providers',
      description: 'Case study on digital transformation in healthcare sector.'
    },
    {
      id: 3,
      title: 'E-commerce Platform Migration',
      client: 'StyleHub Fashion',
      industry: 'Retail',
      challenge: 'Outdated e-commerce platform with poor performance and limited scalability.',
      solution: 'Migrated to a modern headless commerce architecture with improved performance and scalability.',
      results: [
        { metric: '70%', description: 'Faster page load times' },
        { metric: '45%', description: 'Increase in conversion rate' },
        { metric: '60%', description: 'Reduction in bounce rate' },
        { metric: '90%', description: 'Mobile traffic increase' }
      ],
      technologies: ['Next.js', 'Shopify', 'GraphQL', 'Tailwind CSS'],
      timeline: '4 months',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      featured: false,
      slug: 'ecommerce-platform-migration',
      short_description: 'Headless e-commerce solution',
      description: 'Case study on modern e-commerce platform migration.'
    }
  ];

  // Get unique industries for filter
  const allIndustries = useMemo(() => {
    const studies: CaseStudy[] = (apiCaseStudies && apiCaseStudies.length > 0) ? apiCaseStudies : fallbackCaseStudies;
    const industries = new Set(studies.map(study => study.industry));
    return ['all', ...Array.from(industries)].filter(Boolean) as string[];
  }, [apiCaseStudies]);
  
  // Filter and sort case studies
  const filteredCaseStudies = useMemo(() => {
    const studies: CaseStudy[] = (apiCaseStudies && apiCaseStudies.length > 0) ? apiCaseStudies : fallbackCaseStudies;
    return studies
      .filter(study => selectedIndustry === 'all' || study.industry === selectedIndustry)
      .sort((a, b) => {
        const aFeatured = a.featured || false;
        const bFeatured = b.featured || false;
        return aFeatured === bFeatured ? 0 : aFeatured ? -1 : 1;
      })
      .slice(0, maxItems);
  }, [apiCaseStudies, selectedIndustry, maxItems]);

  if (loading && !apiCaseStudies) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-48 bg-gray-200 rounded-full mx-auto"></div>
            <div className="h-12 w-3/4 bg-gray-200 rounded-lg mx-auto"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-studies" className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#00CFFF] bg-[#F0FAFF] rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Real Results for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-[#00CFFF]">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across various industries achieve 
            digital transformation and measurable growth through our solutions.
          </p>
          
          {/* Industry Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {allIndustries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-[#0A2540] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={selectedIndustry === industry}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              className="h-full"
            />
          ))}
        </div>

        {maxItems > 0 && (
          <div className="mt-12 text-center">
            <Link 
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#00CFFF] hover:bg-[#00B2E2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF] transition-colors duration-200"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCaseStudies;
