import React, { useState, useMemo } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { useCaseStudies } from '../hooks/useApi';
import { Link } from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudy } from '../services/apiService';

const CaseStudies: React.FC = () => {
  const { data: apiCaseStudies, loading } = useCaseStudies();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
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
        { metric: '30%', description: 'Increase in operational efficiency' },
        { metric: '40%', description: 'Reduction in manual data entry' },
        { metric: '25%', description: 'Faster month-end close' }
      ],
      technologies: ['SAP S/4HANA', 'SAP Fiori', 'SAP Analytics Cloud'],
      timeline: '6 months',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      featured: true,
      slug: 'manufacturing-erp-implementation',
      short_description: 'Enterprise-wide digital transformation for a leading manufacturer',
      description: 'A comprehensive case study on how we helped a global manufacturer modernize their operations with a state-of-the-art ERP system.'
    },
    {
      id: 2,
      title: 'E-commerce Platform Migration',
      client: 'StyleHub',
      industry: 'Retail',
      challenge: 'Outdated e-commerce platform unable to handle peak traffic and provide modern shopping experiences.',
      solution: 'Migrated to a headless commerce architecture with a modern tech stack for better performance and scalability.',
      results: [
        { metric: '3x', description: 'Faster page loads' },
        { metric: '45%', description: 'Increase in conversion rate' },
        { metric: '99.9%', description: 'Uptime during peak sales' }
      ],
      technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
      timeline: '4 months',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      featured: true,
      slug: 'ecommerce-platform-migration',
      short_description: 'Scalable e-commerce solution for high-growth retail',
      description: 'How we helped StyleHub migrate to a modern, scalable e-commerce platform that could handle their growing customer base and sales volume.'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Inability to derive actionable insights from vast amounts of patient and operational data.',
      solution: 'Developed a custom analytics platform with advanced visualization and predictive modeling capabilities.',
      results: [
        { metric: '50%', description: 'Faster data processing' },
        { metric: '35%', description: 'Reduction in operational costs' },
        { metric: '20%', description: 'Improvement in patient outcomes' }
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      timeline: '5 months',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      slug: 'healthcare-data-analytics',
      short_description: 'Data-driven healthcare decision making',
      description: 'Transforming healthcare delivery through advanced data analytics and machine learning to improve patient outcomes and operational efficiency.'
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
      .filter(study => {
        const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
        const matchesSearch = searchQuery === '' || 
          study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (study.short_description && study.short_description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (study.description && study.description.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesIndustry && matchesSearch;
      })
      .sort((a, b) => {
        const aFeatured = a.featured || false;
        const bFeatured = b.featured || false;
        return aFeatured === bFeatured ? 0 : aFeatured ? -1 : 1;
      });
  }, [apiCaseStudies, selectedIndustry, searchQuery]);

  if (loading && !apiCaseStudies) {
    return (
      <section className="py-20 bg-white">
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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#00CFFF] bg-[#F0FAFF] rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Our Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-[#00CFFF]">
              Case Studies
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 bg-gray-50 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Case Studies
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, description..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Industry
              </label>
              <div className="relative">
                <select
                  id="industry"
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent appearance-none"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  {allIndustries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry.charAt(0).toUpperCase() + industry.slice(1).replace(/-/g, ' ')}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-medium">{filteredCaseStudies.length}</span> case studies
            {selectedIndustry !== 'all' && ` in ${selectedIndustry}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                className="h-full hover:shadow-lg transition-shadow duration-300"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No case studies found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00CFFF] hover:bg-[#00B2E2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF]"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedIndustry('all');
                  }}
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Have a project in mind?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our custom software solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#00CFFF] hover:bg-[#00B2E2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF] transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
