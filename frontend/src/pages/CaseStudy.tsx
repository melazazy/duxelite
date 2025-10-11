import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useAllCaseStudies, useCaseStudy } from '../hooks/useCaseStudy';
import Breadcrumb from '../components/Breadcrumb';
import type { CaseStudy as CaseStudyType } from '../services/apiService';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const { caseStudy, loading, error } = useCaseStudy(slug);
  const { caseStudies: allCaseStudies = [] } = useAllCaseStudies();

  // Parse the results field if it's a string or use as is if it's an object
  const parseResults = (results: any) => {
    if (!results) return { key_achievements: [], testimonial: '' };
    if (typeof results === 'string') {
      try {
        return JSON.parse(results);
      } catch (e) {
        console.error('Failed to parse results:', e);
        return { key_achievements: [], testimonial: '' };
      }
    }
    // If it's already an array (old format), convert to new format
    if (Array.isArray(results)) {
      return {
        key_achievements: results.map((r: any) => 
          r.metric && r.description ? `${r.metric} ${r.description}` : JSON.stringify(r)
        ),
        testimonial: ''
      };
    }
    return results;
  };

  // Get the parsed results
  const results = caseStudy ? parseResults(caseStudy.results) : { key_achievements: [], testimonial: '' };

  // If we have a slug, show the single case study
  if (slug) {
    // Show loading state for single case study
    if (loading) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/80">Loading project details...</p>
          </div>
        </div>
      );
    }

    // Show error state if any
    if (error || !caseStudy) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <div className="text-5xl mb-4">😕</div>
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-white/80 mb-6">
              The case study you're looking for doesn't exist or has been moved.
            </p>
            <button
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to All Case Studies
            </button>
          </div>
        </div>
      );
    }

    // Render single case study view
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
        {/* Back Button */}
        <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/case-studies')}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Case Studies
          </button>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <Breadcrumb className="mb-6" />
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#00CFFF] bg-opacity-10 text-[#00CFFF] mb-4">
                {caseStudy.industry || 'Case Study'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-lg md:text-xl mb-6">{caseStudy.short_description || caseStudy.description}</p>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {caseStudy.live_url && caseStudy.live_url !== '#' && (
                  <a
                    href={caseStudy.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {caseStudy.project?.slug && (
                  <a
                    href={`https://github.com/${caseStudy.project.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Project Image */}
            {caseStudy.image && (
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                    loading="eager"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto flex flex-wrap justify-between gap-12 mt-16">
            {/* Main Content */}
            <div className="w-full md:w-[calc(66.666%_-_24px)] space-y-12">
              {/* Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {caseStudy.challenge || 'No challenge description available.'}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {caseStudy.solution || 'No solution description available.'}
                  </p>
                </div>
              </div>

              {/* Results */}
              {(results.key_achievements?.length > 0 || results.testimonial) && (
                <div className="space-y-8">
                  {results.key_achievements?.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {results.key_achievements.map((achievement: string, index: number) => (
                          <div key={index} className="bg-white/5 p-6 rounded-xl">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3 mt-1">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className="text-gray-300">{achievement}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {results.testimonial && (
                    <div className="bg-white/5 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-3">Client Testimonial</h3>
                      <blockquote className="text-gray-300 italic">"{results.testimonial}"</blockquote>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-[calc(33.333%_-_24px)] space-y-8">
              {/* Project Info */}
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Client</span>
                    <span className="text-white">{caseStudy.client || 'N/A'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Industry</span>
                    <span className="text-white">{caseStudy.industry || 'N/A'}</span>
                  </li>
                  {caseStudy.timeline && (
                    <li className="flex justify-between">
                      <span className="text-gray-400">Timeline</span>
                      <span className="text-white">{caseStudy.timeline}</span>
                    </li>
                  )}
                  {caseStudy.published_at && (
                    <li className="flex justify-between">
                      <span className="text-gray-400">Published</span>
                      <span className="text-white">
                        {new Date(caseStudy.published_at).toLocaleDateString()}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(caseStudy.technologies) && caseStudy.technologies.length > 0 ? (
                    caseStudy.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-400">No technologies specified</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show all case studies
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses transform their operations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCaseStudies.map((caseStudy) => {
            // Ensure we have a valid case study
            if (!caseStudy) return null;
            
            // Parse the results to handle different formats
            const parseResults = (results: any) => {
              if (!results) return { key_achievements: [], testimonial: '' };
              if (typeof results === 'string') {
                try {
                  return JSON.parse(results);
                } catch (e) {
                  return { key_achievements: [], testimonial: '' };
                }
              }
              if (Array.isArray(results)) {
                return {
                  key_achievements: results.map((r: any) => 
                    r.metric && r.description ? `${r.metric} ${r.description}` : JSON.stringify(r)
                  ),
                  testimonial: ''
                };
              }
              return results;
            };
            
            const results = parseResults(caseStudy.results);
            const firstAchievement = results.key_achievements?.[0] || '';
            
            return (
              <div 
                key={caseStudy.id} 
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full border border-gray-700/50 hover:border-blue-500/30 hover:shadow-blue-500/10"
                onClick={() => navigate(`/case-studies/${caseStudy.slug}`)}
              >
                <div className="relative overflow-hidden">
                  {caseStudy.image && (
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    {caseStudy.industry && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/40 text-blue-200 group-hover:bg-blue-800/60 transition-colors">
                        {caseStudy.industry}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-3 flex-1">
                    {caseStudy.description || firstAchievement}
                  </p>
                  <div className="text-blue-400 group-hover:text-blue-300 text-sm font-medium inline-flex items-center mt-auto transition-colors">
                    Read full case study
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {allCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-white mb-2">No case studies available</h3>
            <p className="text-gray-400 mb-6">
              Check back later for our latest case studies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;