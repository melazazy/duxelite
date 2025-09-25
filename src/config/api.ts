// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

// API endpoints
export const endpoints = {
  // Contact endpoints
  contact: '/contact',
  newsletter: '/newsletter',
  
  // Blog endpoints
  blog: {
    posts: '/blog/posts',
    categories: '/blog/categories',
    post: (slug: string) => `/blog/posts/${slug}`,
  },
  
  // Portfolio endpoints
  // portfolio: {
    projects: '/projects',
    categories: '/project-categories',
    project: (id: number) => `/projects/${id}`,
  // },
  
  // Services endpoints
  services: '/services',
  
  // Case studies endpoints
  caseStudies: '/case-studies',
  
  // General endpoints
  settings: '/settings',
  languages: '/languages',
};

export default apiConfig;