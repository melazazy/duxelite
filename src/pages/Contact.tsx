import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, MessageSquare, Send, Clock, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
    content: 'hello@duxelite.com',
    description: 'Send us an email anytime!',
    link: 'mailto:hello@duxelite.com'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    link: 'tel:+15551234567'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    content: '123 Digital Avenue, Tech City, 12345',
    description: 'Come say hello at our office',
    link: 'https://maps.google.com'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    content: 'Mon - Fri: 8:00 AM - 6:00 PM',
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

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError('');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#00CFFF] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you as soon as possible.</p>
              
              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input
                      id="company"
                      type="text"
                      {...register('company')}
                      className={`w-full px-4 py-3 border ${errors.company ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest *</label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`w-full px-4 py-3 border ${errors.service ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Project Budget *</label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className={`w-full px-4 py-3 border ${errors.budget ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Project Timeline *</label>
                  <select
                    id="timeline"
                    {...register('timeline')}
                    className={`w-full px-4 py-3 border ${errors.timeline ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#0A2540] to-[#00CFFF] hover:from-[#00CFFF] hover:to-[#0A2540] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CFFF] transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a6e] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg">
                      {React.cloneElement(item.icon, { className: 'w-6 h-6 text-[#00CFFF]' })}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-200 hover:text-white transition-colors duration-200"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-200">{item.content}</p>
                      )}
                      <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/duxelite" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
            
            {/* CTA Card */}
            <div className="bg-gradient-to-r from-[#00CFFF] to-[#0099FF] text-white p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Need Help?</h4>
              <p className="mb-4 opacity-90">Have questions about our services or need a custom quote? We're here to help!</p>
              <a 
                href="mailto:support@duxelite.com" 
                className="inline-flex items-center text-sm font-medium bg-white text-[#0A2540] px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What services do you offer?',
                answer: 'We offer a wide range of digital services including custom web development, mobile app development, ERP solutions, e-commerce platforms, and digital transformation consulting.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a custom web application could take 3-6 months or more. We provide detailed timelines after understanding your requirements.'
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team engagement. The best approach depends on your project requirements and timeline.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally after launch.'
              },
              {
                question: 'What technologies do you work with?',
                answer: 'Our team is proficient in modern technologies including React, Node.js, Python, .NET, and various cloud platforms. We choose the best stack based on your specific project needs.'
              },
              {
                question: 'How do we get started?',
                answer: 'Getting started is easy! Simply fill out our contact form, and we\'ll schedule a free consultation to discuss your project requirements and provide a detailed proposal.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
