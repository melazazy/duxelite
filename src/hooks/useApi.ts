import { useState, useEffect } from 'react';
import apiService from '../services/apiService';
import type { PortfolioProject, Testimonial, Service, CaseStudy, BlogPost } from '../services/apiService';

// Generic API hook
export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
      return result;
    } catch (err: any) {
      // Don't set error for network errors (handled by the API service)
      if (err.code !== 'ERR_NETWORK' && !err.message?.includes('Network Error')) {
        setError(err.response?.data?.message || 'An error occurred');
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => fetchData() };
}

// Specific hooks for different data types
export function useBlogPosts(category?: string, search?: string) {
  return useApi(
    () => apiService.getBlogPosts({ category, search }),
    [category, search]
  );
}

export function usePortfolioProjects(category?: string) {
  const { data, loading, error, refetch } = useApi<PortfolioProject[]>(
    () => apiService.getPortfolioProjects(category),
    [category]
  );
  
  // Ensure we always return an array, even if data is null/undefined
  const projects = data || [];
  
  return { 
    data: projects, 
    loading, 
    error, 
    refetch 
  };
}

export function useServices() {
  return useApi(() => apiService.getServices());
}

export function useCaseStudies() {
  return useApi(() => apiService.getCaseStudies());
}

export function useTestimonials() {
  return useApi<Testimonial[]>(() => apiService.getTestimonials());
}

// Home page optimized data hooks
export function usePortfolioHomePageData() {
  return useApi<PortfolioProject[]>(() => apiService.getPortfolioHomePageData());
}

export function useServicesHomePageData() {
  return useApi<Service[]>(() => apiService.getServicesHomePageData());
}

export function useCaseStudiesHomePageData() {
  return useApi<CaseStudy[]>(() => apiService.getCaseStudiesHomePageData());
}

export function useBlogHomePageData() {
  return useApi<BlogPost[]>(() => apiService.getBlogHomePageData());
}

// Form submission hook
export function useFormSubmission<T>() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (apiCall: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      await apiCall();
      setSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, success, error };
}