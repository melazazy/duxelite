import apiService from './apiService';
import { ContactFormData } from './apiService';

interface NewsletterResponse {
  success: boolean;
  message: string;
  data?: {
    email: string;
    is_active: boolean;
    subscribed_at: string;
  };
  errors?: Record<string, string[]>;
}

/**
 * Service for handling form submissions
 */
class FormService {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Submit a contact form
   * @param formData - The contact form data
   * @returns Promise with the submission result
   */
  async submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      if (!this.emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Submit the form using the API service
      const response = await apiService.post<{ message?: string }>('/contact', formData);
      
      return {
        success: true,
        message: response?.message || 'Thank you for your message! We will get back to you soon.'
      };
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      return {
        success: false,
        message: error.response?.data?.message || error.message || 'Failed to submit the form. Please try again.'
      };
    }
  }

  /**
   * Subscribe to newsletter
   * @param email - The email to subscribe
   * @returns Promise with the subscription result
   */
  async subscribeToNewsletter(email: string): Promise<NewsletterResponse> {
    try {
      // Basic validation
      if (!email) {
        throw new Error('Email is required');
      }

      // Email validation
      if (!this.emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      // Submit the subscription using the API service
      const response = await apiService.post<NewsletterResponse>('/newsletter', { email });
      
      return {
        success: true,
        message: response.message || 'Thank you for subscribing to our newsletter!',
        data: response.data
      };
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      return {
        success: false,
        message: error.response?.data?.message || error.message || 'Failed to subscribe. Please try again.',
        errors: error.response?.data?.errors
      };
    }
  }
}

export default new FormService();
