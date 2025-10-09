import { useState, useEffect } from 'react';
import { CaseStudy } from '../services/apiService';

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
    client: 'MediCare Health Systems',
    industry: 'Healthcare',
    challenge: 'Patients needed a better way to access healthcare services and manage their health records on-the-go.',
    solution: 'Developed a secure, HIPAA-compliant mobile platform that allows patients to book appointments, access medical records, and consult with healthcare providers remotely.',
    results: [
      { metric: '40%', description: 'Reduction in no-show appointments' },
      { metric: '75%', description: 'Faster patient check-in process' },
      { metric: '90%', description: 'Patient satisfaction with digital services' },
      { metric: '50%', description: 'Reduction in administrative workload' }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'HIPAA Compliance'],
    timeline: '6 months',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
    slug: 'healthcare-mobile-platform',
    short_description: 'Mobile-first healthcare platform for patient engagement',
    description: 'A comprehensive mobile solution that transforms how patients interact with healthcare providers, making healthcare more accessible and efficient.'
  },
  {
    id: 3,
    title: 'E-commerce Platform Modernization',
    client: 'StyleHub Retail',
    industry: 'Retail & E-commerce',
    challenge: 'Legacy e-commerce platform with slow performance, high bounce rates, and outdated user experience affecting sales and customer retention.',
    solution: 'Modernized the entire e-commerce stack with a headless architecture, implementing a React-based frontend with Next.js for server-side rendering, and a microservices backend for better scalability and performance.',
    results: [
      { metric: '70%', description: 'Faster page load times' },
      { metric: '45%', description: 'Increase in conversion rates' },
      { metric: '60%', description: 'Reduction in server costs' },
      { metric: '80%', description: 'Improvement in mobile performance' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'GraphQL', 'MongoDB', 'AWS', 'Docker'],
    timeline: '5 months',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
    slug: 'ecommerce-modernization',
    short_description: 'Next-gen e-commerce platform with headless architecture',
    description: 'A complete overhaul of the e-commerce experience with modern web technologies, delivering exceptional performance and user experience across all devices.'
  }
];

export const useCaseStudy = (slug?: string) => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        
        // If no slug is provided, don't try to fetch a specific case study
        if (!slug) {
          setCaseStudy(null);
          return;
        }
        
        // In a real app, you would fetch from your API:
        // const response = await fetch(`/api/case-studies/${slug}`);
        // const data = await response.json();
        
        // For now, use the fallback data
        const normalizedSlug = slug.toLowerCase().trim();
        const foundCaseStudy = fallbackCaseStudies.find(
          (cs) => 
            cs.slug.toLowerCase().includes(normalizedSlug) || 
            cs.id.toString() === normalizedSlug ||
            cs.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === normalizedSlug
        ) || null;
        
        if (!foundCaseStudy) {
          throw new Error('Case study not found');
        }
        
        setCaseStudy(foundCaseStudy);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch case study'));
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCaseStudy();
    } else {
      setLoading(false);
    }
  }, [slug]);

  return { caseStudy, loading, error };
};

export const useAllCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from your API:
        // const response = await fetch('/api/case-studies');
        // const data = await response.json();
        
        // For now, use the fallback data
        setCaseStudies(fallbackCaseStudies);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch case studies'));
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return { caseStudies, loading, error };
};
