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
      title: 'Enterprise Resource Planning System',
      client: 'TechNova Solutions',
      industry: 'Technology',
      challenge: 'Disconnected business processes and lack of real-time data visibility across departments.',
      solution: 'Developed a custom ERP system integrating finance, HR, inventory, and project management modules with real-time analytics.',
      results: [
        { metric: '65%', description: 'Faster decision making with real-time data' },
        { metric: '40%', description: 'Reduction in operational costs' },
        { metric: '85%', description: 'Improvement in cross-departmental collaboration' },
        { metric: '30%', description: 'Increase in overall productivity' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
      timeline: '9 months',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      slug: 'enterprise-resource-planning-system',
      short_description: 'Comprehensive ERP solution for enterprise operations',
      description: 'End-to-end ERP system implementation that transformed business operations through digital transformation.'
    },
    {
      id: 2,
      title: 'Healthcare Mobile Platform',
      client: 'MediCare+',
      industry: 'Healthcare',
      challenge: 'Inefficient patient management and lack of telemedicine capabilities in existing systems.',
      solution: 'Built a HIPAA-compliant mobile platform with telemedicine, appointment scheduling, and health record management.',
      results: [
        { metric: '50%', description: 'Reduction in administrative workload' },
        { metric: '40%', description: 'Increase in patient engagement' },
        { metric: '90%', description: 'Faster appointment scheduling' },
        { metric: '4.8/5', description: 'Average user rating' }
      ],
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
      timeline: '6 months',
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      slug: 'healthcare-mobile-platform',
      short_description: 'Mobile-first healthcare solution for patients and providers',
      description: 'Comprehensive healthcare platform enabling remote consultations and health management.'
    },
    {
      id: 3,
      title: 'E-commerce Modernization',
      client: 'UrbanStyle Retail',
      industry: 'Retail',
      challenge: 'Legacy e-commerce platform with poor mobile experience and slow performance.',
      solution: 'Modernized the platform with a headless commerce architecture and progressive web app capabilities.',
      results: [
        { metric: '70%', description: 'Faster page load times' },
        { metric: '45%', description: 'Increase in mobile conversion rate' },
        { metric: '80%', description: 'Reduction in bounce rate' },
        { metric: '60%', description: 'Growth in mobile revenue' }
      ],
      technologies: ['Next.js', 'TypeScript', 'Shopify', 'Tailwind CSS', 'GraphQL'],
      timeline: '5 months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      slug: 'ecommerce-modernization',
      short_description: 'Next-gen e-commerce platform with PWA capabilities',
      description: 'Complete e-commerce platform overhaul focusing on mobile experience and performance optimization.'
    },
    {
      id: 4,
      title: 'Financial Analytics Dashboard',
      client: 'WealthGuard Capital',
      industry: 'Finance',
      challenge: 'Lack of real-time financial insights and reporting capabilities.',
      solution: 'Developed a custom analytics dashboard with interactive visualizations and automated reporting.',
      results: [
        { metric: '80%', description: 'Faster financial reporting' },
        { metric: '50%', description: 'Reduction in manual data processing' },
        { metric: '30%', description: 'Improvement in investment decisions' },
        { metric: '95%', description: 'Data accuracy rate' }
      ],
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      timeline: '4 months',
      image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      featured: false,
      slug: 'financial-analytics-dashboard',
      short_description: 'Interactive financial data visualization platform',
      description: 'Advanced analytics solution providing real-time financial insights and reporting.'
    },
    {
      id: 5,
      title: 'Smart Home Automation',
      client: 'HomeTech Innovations',
      industry: 'IoT',
      challenge: 'Fragmented smart home ecosystem with multiple, non-integrated devices.',
      solution: 'Created a unified smart home platform with AI-powered automation and voice control integration.',
      results: [
        { metric: '75%', description: 'Reduction in energy consumption' },
        { metric: '90%', description: 'Faster device response times' },
        { metric: '4.9/5', description: 'Customer satisfaction rating' },
        { metric: '60%', description: 'Increase in automation efficiency' }
      ],
      technologies: ['React Native', 'Node.js', 'Python', 'TensorFlow', 'AWS IoT'],
      timeline: '7 months',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false,
      slug: 'smart-home-automation',
      short_description: 'Unified smart home control system',
      description: 'Integrated platform for managing and automating smart home devices with AI capabilities.'
    },
    {
      id: 6,
      title: 'EdTech Learning Platform',
      client: 'EduFuture Academy',
      industry: 'Education',
      challenge: 'Ineffective online learning experience with limited engagement tools.',
      solution: 'Developed an interactive learning platform with gamification and personalized learning paths.',
      results: [
        { metric: '60%', description: 'Increase in course completion rates' },
        { metric: '85%', description: 'Student engagement improvement' },
        { metric: '40%', description: 'Reduction in support tickets' },
        { metric: '4.7/5', description: 'Average instructor rating' }
      ],
      technologies: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'WebRTC'],
      timeline: '8 months',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      slug: 'edtech-learning-platform',
      short_description: 'Interactive online education platform',
      description: 'Comprehensive e-learning solution with advanced engagement and assessment features.'
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

  if (error) {
    console.error('Error loading case studies:', error);
  }

  if (loading && !apiCaseStudies?.length) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 leading-tight">
            Our <span className="text-[#00CFFF]">Impactful</span> Case Studies
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedIndustry === 'all' ? 'bg-[#00CFFF] text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
            >
              All
            </button>
            {allIndustries.filter(industry => industry !== 'all').map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedIndustry === industry ? 'bg-[#00CFFF] text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
              >
                {industry}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="bg-white/5 rounded-2xl shadow-lg overflow-hidden h-96 animate-pulse border border-white/10 backdrop-blur-sm"
                aria-hidden="true"
              >
                <div className="h-48 bg-white/10 w-full"></div>
                <div className="p-6">
                  <div className="h-4 bg-white/10 rounded w-3/4 mb-3"></div>
                  <div className="h-6 bg-white/10 rounded w-4/5 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-full"></div>
                    <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    <div className="h-3 bg-white/10 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] hover:from-[#00B2E2] hover:to-[#00CFFF] transition-all duration-300 shadow-lg"
            >
              View All Case Studies
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-studies" className={`py-16 lg:py-24 bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#00CFFF] bg-white/10 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-[#00B2E2]">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across various industries achieve 
            digital transformation and measurable growth through our solutions.
          </p>
          
          {/* Industry Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter case studies by industry">
            {allIndustries.map((industry) => (
              <button
                key={industry}
                type="button"
                role="tab"
                id={`${industry}-tab`}
                aria-controls={`${industry}-panel`}
                aria-selected={selectedIndustry === industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-[#00CFFF] text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {industry === 'all' ? 'All Industries' : industry.charAt(0).toUpperCase() + industry.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        {error && !apiCaseStudies?.length ? (
          <div className="text-center py-12">
            <div className="text-red-400 mb-4">Failed to load case studies. Showing sample data.</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallbackCaseStudies.slice(0, maxItems).map((caseStudy) => (
                <CaseStudyCard 
                  key={caseStudy.id} 
                  caseStudy={caseStudy} 
                  className="h-full"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                className="h-full"
              />
            ))}
          </div>
        )}

        {maxItems > 0 && (
          <div className="mt-12 text-center">
            <Link 
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] hover:from-[#00B2E2] hover:to-[#00CFFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF] transition-colors duration-200"
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
