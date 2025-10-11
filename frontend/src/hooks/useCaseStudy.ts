import { useState, useEffect } from 'react';
import { CaseStudy as ApiCaseStudy } from '../services/apiService';

// Define the CaseStudy interface with proper typing
export interface CaseStudyResultItem {
  metric?: string;
  description?: string;
  [key: string]: any;
}

export interface CaseStudy {
  id: string | number;
  slug: string;
  title: string;
  client?: string;
  description: string;
  short_description?: string;
  industry: string;
  image?: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  timeline?: string;
  is_featured?: boolean;
  results: {
    key_achievements: string[];
    testimonial?: string;
  };
  [key: string]: any; // Allow for additional properties
}

// Fallback data in case API is not available
const fallbackCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Enterprise Resource Planning System',
    client: 'TechNova Solutions',
    industry: 'Technology',
    challenge: 'Disconnected business processes and lack of real-time data visibility across departments.',
    solution: 'Developed a custom ERP system integrating finance, HR, inventory, and project management modules with real-time analytics.',
    results: {
      key_achievements: [
        '65% Faster decision making with real-time data',
        '40% Reduction in operational costs',
        '85% Improvement in cross-departmental collaboration',
        '30% Increase in overall productivity'
      ],
      testimonial: 'The ERP system has revolutionized our business operations, providing real-time visibility and streamlining our processes across all departments.'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    timeline: '9 months',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    is_featured: true,
    slug: 'enterprise-resource-planning-system',
    description: 'End-to-end ERP system implementation that transformed business operations through digital transformation.'
  }
  // ... other case studies
];

import apiService from '../services/apiService';

export const useCaseStudy = (slug?: string) => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Helper function to normalize case study data
  const normalizeCaseStudy = (data: any): CaseStudy => {
    // If results is a string, try to parse it as JSON
    let results = data.results;
    if (typeof results === 'string') {
      try {
        results = JSON.parse(results);
      } catch (e) {
        console.warn('Failed to parse results as JSON:', e);
        // If parsing fails, provide a default structure
        results = { key_achievements: [], testimonial: '' };
      }
    }
    
    // If results is an array (old format), convert it to the new format
    if (Array.isArray(results)) {
      results = {
        key_achievements: results.map((r: any) => `${r.metric} ${r.description}`),
        testimonial: ''
      };
    }
    
    return {
      ...data,
      results
    };
  };

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        
        // If no slug is provided, don't try to fetch a specific case study
        if (!slug) {
          setCaseStudy(null);
          return;
        }
        
        try {
          // Try to fetch from API first
          const data = await apiService.getCaseStudy(slug);
          setCaseStudy(normalizeCaseStudy(data));
        } catch (apiError) {
          console.warn('API fetch failed, falling back to local data', apiError);
          
          // Fallback to local data if API fails
          const normalizedSlug = slug.toLowerCase().trim();
          let foundCaseStudy = fallbackCaseStudies.find(
            (cs) => 
              cs.slug.toLowerCase().includes(normalizedSlug) || 
              cs.id.toString() === normalizedSlug ||
              cs.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === normalizedSlug
          ) || null;
          
          if (!foundCaseStudy) {
            throw new Error('Case study not found');
          }
          
          // Normalize the case study data
          foundCaseStudy = normalizeCaseStudy(foundCaseStudy);
          setCaseStudy(foundCaseStudy);
        }
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

  // Helper function to normalize case study data
  const normalizeCaseStudy = (data: any): CaseStudy => {
    // If results is a string, try to parse it as JSON
    let results = data.results;
    if (typeof results === 'string') {
      try {
        results = JSON.parse(results);
      } catch (e) {
        console.warn('Failed to parse results as JSON:', e);
        // If parsing fails, provide a default structure
        results = { key_achievements: [], testimonial: '' };
      }
    }
    
    // If results is an array (old format), convert it to the new format
    if (Array.isArray(results)) {
      results = {
        key_achievements: results.map((r: any) => `${r.metric} ${r.description}`),
        testimonial: ''
      };
    }
    
    return {
      ...data,
      results
    };
  };

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        
        try {
          // Try to fetch from API first
          const data = await apiService.getCaseStudies();
          const normalizedData = Array.isArray(data) 
            ? data.map(cs => normalizeCaseStudy(cs))
            : [];
          setCaseStudies(normalizedData);
        } catch (apiError) {
          console.warn('API fetch failed, falling back to local data', apiError);
          // Fallback to local data if API fails
          setCaseStudies(fallbackCaseStudies.map(cs => normalizeCaseStudy(cs)));
        }
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