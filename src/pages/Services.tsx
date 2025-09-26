import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Code, Database, Layers, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Web Design & Development',
      description: 'We build beautiful, responsive, and high-performing websites tailored to your brand\'s unique identity. Our expertise ensures a seamless user experience across all devices.',
      benefits: [
        'Custom designs that reflect your brand',
        'Mobile-first and responsive layouts',
        'Optimized for speed and performance',
        'SEO-friendly architecture',
      ],
      tools: ['React', 'Next.js', 'Laravel', 'TailwindCSS', 'Figma'],
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'ERP Systems',
      description: 'We design and implement robust ERP systems that streamline your business processes, improve efficiency, and provide critical insights for better decision-making.',
      benefits: [
        'Centralized data management',
        'Automated workflows and processes',
        'Improved operational efficiency',
        'Scalable for business growth',
      ],
      tools: ['Odoo', 'SAP Business One', 'Custom Laravel ERP'],
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: 'SaaS Development',
      description: 'From concept to launch, we develop scalable and secure Software-as-a-Service platforms that solve real-world problems and create lasting value for your users.',
      benefits: [
        'Scalable multi-tenant architecture',
        'Subscription-based billing integration',
        'High security and data protection',
        'Continuous feature updates and support',
      ],
      tools: ['React', 'Node.js', 'Laravel', 'AWS/GCP', 'Stripe'],
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: 'E-learning Platforms',
      description: 'We create engaging and intuitive e-learning platforms with features like virtual classrooms, course management, and subscription support to deliver a seamless educational experience.',
      benefits: [
        'Interactive and engaging user experience',
        'Comprehensive course and user management',
        'Secure payment and subscription models',
        'SCORM and xAPI compliance',
      ],
      tools: ['Moodle', 'LearnDash', 'Custom React/Laravel platforms'],
    },
  ];

  return (
    <div className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
