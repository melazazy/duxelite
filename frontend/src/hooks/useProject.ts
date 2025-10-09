import { useState, useEffect } from 'react';
import { fetchProjectBySlug, fetchProjects } from '../services/projectService';

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  date: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  screenshots: string[];
}

// Fallback data in case API is not available or fails
const fallbackProjects: Record<string, ProjectDetail> = {
  'enterprise-resource-planning': {
    id: '1',
    slug: 'enterprise-resource-planning',
    title: 'Enterprise Resource Planning System',
    description: 'A comprehensive ERP solution that streamlines business processes across multiple departments including finance, HR, and supply chain management.',
    category: 'Enterprise Software',
    image: '/images/projects/erp.jpg',
    client: 'Global Corp Inc.',
    date: '2024',
    demoUrl: 'https://erp.demo.com',
    githubUrl: 'https://github.com/duxelite/erp-system',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    features: [
      'Real-time financial reporting',
      'Supply chain management',
      'Human resources management',
      'Customer relationship management',
      'Inventory and warehouse management'
    ],
    screenshots: [
      '/images/projects/erp-dashboard.jpg',
      '/images/projects/erp-inventory.jpg',
      '/images/projects/erp-reports.jpg'
    ]
  },
  'ecommerce-platform': {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    category: 'E-commerce',
    image: '/images/projects/ecommerce.jpg',
    client: 'ShopEasy',
    date: '2023',
    demoUrl: 'https://ecommerce.demo.com',
    githubUrl: 'https://github.com/duxelite/ecommerce-platform',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Product catalog with categories',
      'Shopping cart functionality',
      'Secure checkout with Stripe',
      'User authentication',
      'Order tracking'
    ],
    screenshots: [
      '/images/projects/ecommerce-home.jpg',
      '/images/projects/ecommerce-product.jpg',
      '/images/projects/ecommerce-cart.jpg'
    ]
  },
  'mobile-app': {
    id: '3',
    slug: 'mobile-app',
    title: 'Fitness Tracker Mobile App',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and health metrics.',
    category: 'Mobile App',
    image: '/images/projects/fitness-app.jpg',
    client: 'FitLife',
    date: '2023',
    demoUrl: 'https://fitlife.demo.com',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    features: [
      'Workout tracking and planning',
      'Nutrition and calorie counter',
      'Progress tracking with charts',
      'Social features',
      'Offline support'
    ],
    screenshots: [
      '/images/projects/app-dashboard.jpg',
      '/images/projects/app-workout.jpg',
      '/images/projects/app-progress.jpg'
    ]
  }
};

export const useProject = (slug?: string) => {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) {
        setProject(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch from API first
        if (!useFallback) {
          try {
            const data = await fetchProjectBySlug(slug);
            setProject(data);
            return;
          } catch (apiError) {
            console.warn('API request failed, falling back to mock data', apiError);
            setUseFallback(true);
            // Continue to fallback data
          }
        }
        
        // Fallback to mock data if API fails or useFallback is true
        const fallbackProject = Object.values(fallbackProjects).find(
          (p) => p.slug === slug
        ) || null;
        
        if (!fallbackProject) {
          throw new Error('Project not found');
        }
        
        setProject(fallbackProject);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch project'));
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug, useFallback]);

  return { project, loading, error };
};

// Hook to get all projects
export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch from API first
        if (!useFallback) {
          try {
            const data = await fetchProjects();
            setProjects(data);
            return;
          } catch (apiError) {
            console.warn('API request failed, falling back to mock data', apiError);
            setUseFallback(true);
            // Continue to fallback data
          }
        }
        
        // Fallback to mock data if API fails or useFallback is true
        const fallbackProjectsArray = Object.values(fallbackProjects);
        setProjects(fallbackProjectsArray);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch projects'));
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [useFallback]);

  return { projects, loading, error };
};

export default useProject;
