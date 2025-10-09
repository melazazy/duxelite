import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Linkedin, MessageSquare, Send, Clock, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import siteData from '../data/siteData.json';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  timeline: string;
}

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    content: siteData.contact.email,
    description: 'Send us an email anytime!',
    link: 'mailto:' + siteData.contact.email
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    content: siteData.contact.phone,
    description: 'Mon-Fri from 8am to 6pm',
    link: 'tel:' + siteData.contact.phone
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    content: siteData.contact.address,
    description: 'Come say hello at our office',
    link: 'https://maps.google.com'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    content: siteData.contact.workingHours,
    description: 'Weekend support available'
  }
];

const services = [
  'Custom Web Development',
  'ERP System Solutions',
  'Mobile App Development',
  'E-commerce Platform',
  'Digital Transformation',
  'Technical Consulting',
  'Other'
];

const budgetRanges = [
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000 - $75,000',
  '$75,000 - $150,000',
  '$150,000+'
];

const timelines = [
  'ASAP (Rush)',
  '1-2 months',
  '3-4 months',
  '5-6 months',
  '6+ months',
  'Not sure'
];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string().required('Company name is required'),
  phone: yup.string().required('Phone number is required'),
  service: yup.string().required('Please select a service'),
  budget: yup.string().required('Please select a budget range'),
  message: yup.string().required('Please enter your message'),
  timeline: yup.string().required('Please select a timeline')
});

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const successMessageRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError('');
      
        // Scroll to top of form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
      // Use the Vite environment variable with a fallback
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
      }
      
      // On success
      setIsSubmitted(true);
      reset();
      // Scroll to success message after a small delay to ensure it's rendered
      setTimeout(() => {
        if (successMessageRef.current) {
          successMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } catch (error: any) {
      setSubmitError(error.message || 'Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        ref={successMessageRef}
        className="min-h-screen bg-gradient-to-br from-[#0A2540] to-[#030D18] flex items-center justify-center px-4 py-16 text-white"
      >
        <div className="max-w-2xl w-full bg-white/5 rounded-2xl shadow-xl p-8 text-center border border-white/10 backdrop-blur-sm">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-white/80 mb-8">
            Your message has been sent successfully. We'll get back to you within 24-48 hours.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#00CFFF] hover:bg-[#00B2E2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF] transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#030D18] text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A2540] to-[#030D18] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Breadcrumb />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/5 rounded-2xl shadow-xl overflow-hidden border border-white/10 backdrop-blur-sm">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-white/80 mb-8">Fill out the form below and our team will get back to you as soon as possible.</p>
              
              {submitError && (
                <div className="bg-red-900/20 border-l-4 border-red-400 p-4 mb-6 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-300">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white placeholder-white/50`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white placeholder-white/50`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">Company Name *</label>
                    <input
                      id="company"
                      type="text"
                      {...register('company')}
                      className={`w-full px-4 py-3 border ${errors.company ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white placeholder-white/50`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white placeholder-white/50`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">Service Interest *</label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#0A2540] text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-1">Project Budget *</label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className={`w-full px-4 py-3 border ${errors.budget ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#0A2540] text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-1">Project Timeline *</label>
                  <select
                    id="timeline"
                    {...register('timeline')}
                    className={`w-full px-4 py-3 border ${errors.timeline ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline} className="bg-[#0A2540] text-white">
                        {timeline}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && <p className="mt-1 text-sm text-red-400">{errors.timeline.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white/10 text-white placeholder-white/50`}
                    placeholder="Tell us more about your project and needs..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] hover:from-[#00B2E2] hover:to-[#00CFFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 bg-white/5 rounded-2xl shadow-xl p-8 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">Our Contact Details</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-white/10 rounded-full text-[#00CFFF] mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 mb-1">{item.content}</p>
                    <p className="text-sm text-white/60">{item.description}</p>
                    {item.link && (
                      <a href={item.link} className="text-[#00CFFF] hover:underline text-sm mt-1 inline-block">
                        {item.title === 'Email Us' ? 'Send Email' : item.title === 'Call Us' ? 'Call Now' : 'Get Directions'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-[#00CFFF] transition-colors duration-300">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="#" className="text-white/80 hover:text-[#00CFFF] transition-colors duration-300">
                  <MessageSquare className="w-7 h-7" />
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
