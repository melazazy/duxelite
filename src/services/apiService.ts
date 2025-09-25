import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { apiConfig } from '../config/api';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create(apiConfig);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add CSRF token if available
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (csrfToken) {
          config.headers['X-CSRF-TOKEN'] = csrfToken;
        }
        
        // Add language header
        const language = localStorage.getItem('language') || 'en';
        config.headers['Accept-Language'] = language;
        
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 422) {
          // Handle validation errors
          console.error('Validation errors:', error.response.data.errors);
        } else if (error.response?.status === 500) {
          console.error('Server error:', error.response.data.message);
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic methods
  async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get(url);
      return response.data;
    } catch (error: any) {
      if (error.code === 'ERR_NETWORK' || error.message?.includes('Network Error')) {
        console.warn('Backend server is not available. Using fallback data.');
        // Return empty array as fallback, the component will use local data
        return [] as unknown as T;
      }
      throw error;
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(url, data);
    return response.data;
  }

  async put<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.api.delete(url);
    return response.data;
  }

  // Contact form submission
  async submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
    return this.post('/contact', formData);
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<NewsletterResponse> {
    return this.post('/newsletter', { email });
  }

  // Blog methods
  async getBlogPosts(params?: BlogParams): Promise<BlogPostsResponse> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.get(`/blog/posts${queryString}`);
  }

  async getBlogPost(slug: string): Promise<BlogPost> {
    return this.get(`/blog/posts/${slug}`);
  }

  // Portfolio methods
  async getPortfolioProjects(category?: string): Promise<PortfolioProject[]> {
    const queryString = category ? `?category=${category}` : '';
    return this.get(`/portfolio/projects${queryString}`);
  }

  // Services methods
  async getServices(): Promise<Service[]> {
    return this.get('/services');
  }

  // Case studies methods
  async getCaseStudies(): Promise<CaseStudy[]> {
    return this.get('/case-studies');
  }
}

// Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

export interface BlogParams {
  page?: number;
  category?: string;
  search?: string;
  per_page?: number;
}

export interface BlogPostsResponse {
  data: BlogPost[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  published_at: string;
  read_time: string;
  category: string;
  tags: string[];
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  live_url?: string;
  github_url?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    description: string;
  }>;
  technologies: string[];
  timeline: string;
  image: string;
}

export default new ApiService();