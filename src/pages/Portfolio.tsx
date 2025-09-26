import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {
  // Placeholder data - this will be replaced with API data later
  const projects = [
    {
      slug: 'techcorp-erp',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: 'TechCorp ERP Overhaul',
      description: 'A comprehensive ERP system to streamline operations, from inventory to finance, for a leading tech manufacturer.',
      category: 'ERP Systems',
    },
    {
      slug: 'innovate-saas',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: 'Innovate Inc. SaaS Platform',
      description: 'A scalable multi-tenant SaaS platform for project management, designed for growing teams and enterprises.',
      category: 'SaaS Development',
    },
    {
      slug: 'e-learn-platform',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: 'E-Learn Co. Online Academy',
      description: 'An engaging and interactive e-learning platform with course management, virtual classrooms, and payment integration.',
      category: 'E-learning Platforms',
    },
    {
      slug: 'retail-pro-website',
      image: 'https://images.unsplash.com/photo-1600880292203-942bb68b2432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: 'RetailPro E-commerce Site',
      description: 'A modern, fast, and user-friendly e-commerce website with a custom CMS for easy product management.',
      category: 'Web Design & Development',
    },
  ];

  return (
    <div className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of the innovative solutions we\'ve delivered to our clients across various industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
