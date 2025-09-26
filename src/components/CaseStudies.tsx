import React from 'react';
import { TrendingUp, Clock, Award, ArrowRight } from 'lucide-react';
import { useCaseStudies } from '../hooks/useApi';
import type { CaseStudy } from '../services/apiService';

const CaseStudies: React.FC = () => {
  const { data: apiCaseStudies, loading, error } = useCaseStudies();

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
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
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
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      timeline: '4 months',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
    },
    {
      id: 3,
      title: 'E-commerce Platform Scaling',
      client: 'TechGear Online',
      industry: 'E-commerce',
      challenge: 'Existing platform couldn\'t handle growing traffic and complex inventory requirements.',
      solution: 'Built scalable e-commerce platform with advanced search, AI recommendations, and multi-vendor support.',
      results: [
        { metric: '300%', description: 'Increase in concurrent users' },
        { metric: '45%', description: 'Improvement in conversion rate' },
        { metric: '70%', description: 'Faster page load times' },
        { metric: '150%', description: 'Growth in mobile sales' }
      ],
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Vercel'],
      timeline: '5 months',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg'
    }
  ];

  // Use API data if available, otherwise use fallback data
  const caseStudies: CaseStudy[] = (apiCaseStudies && apiCaseStudies.length > 0) ? apiCaseStudies : fallbackCaseStudies;

  if (loading) {
    return (
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600">Loading case studies...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching case studies:", error);
    // The component will proceed to render with fallback data, so no specific UI for error is needed here.
  }

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00CFFF]/10 rounded-full text-[#0A2540] text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
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
        </div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-[#0A2540]/10 rounded-full text-[#0A2540] text-sm font-medium mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-3xl font-bold text-[#0A2540] mb-4">{study.title}</h3>
                  <p className="text-lg text-[#00CFFF] font-medium">{study.client}</p>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Solution</h4>
                  <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                </div>

                {/* Technologies & Timeline */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-semibold text-[#0A2540] mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-[#0A2540] text-sm font-medium rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0A2540] mb-3">Timeline</h5>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.timeline}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Results & Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Background Image */}
                  <div className="relative z-10 bg-white rounded-3xl shadow-xl overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Results Overlay */}
                    <div className="p-8">
                      <h4 className="text-xl font-semibold text-[#0A2540] mb-6 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-[#00CFFF]" />
                        Key Results
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-2xl font-bold text-[#00CFFF] mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-600 leading-tight">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#00CFFF] to-[#0A2540] rounded-2xl opacity-20 rotate-12"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-xl opacity-30 -rotate-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-[#0A2540] to-[#1a4a6e] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-white/80">Measurable results across all our projects</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00CFFF] mb-2">200+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00CFFF] mb-2">99.5%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00CFFF] mb-2">150%</div>
              <div className="text-white/80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00CFFF] mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;