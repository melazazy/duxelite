import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { usePortfolioProjects } from '../hooks/useApi';
import type { PortfolioProject } from '../services/apiService';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { data: apiProjects, loading, error } = usePortfolioProjects(
    activeFilter === 'all' ? undefined : activeFilter
  );

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'erp-systems', name: 'ERP Systems' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'e-commerce', name: 'E-commerce' }
  ];
  
  // Fallback data in case API is not available
  const fallbackProjects: PortfolioProject[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'A full-featured e-commerce platform with inventory management and payment processing.',
      image: '/images/portfolio/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Processing'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: { id: 2, name: 'Mobile Apps', slug: 'mobile-apps' },
      description: 'A secure mobile banking application for managing accounts and transactions on the go.',
      image: '/images/portfolio/banking-app.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      features: ['Account Management', 'Fund Transfers', 'Bill Payments', 'Transaction History'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 3,
      title: 'Enterprise Dashboard',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'A comprehensive dashboard for enterprise analytics and data visualization.',
      image: '/images/portfolio/dashboard.jpg',
      technologies: ['Vue.js', 'D3.js', 'Laravel', 'MySQL'],
      features: ['Data Visualization', 'User Management', 'Custom Reports', 'Real-time Updates'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      category: { id: 2, name: 'Mobile Apps', slug: 'mobile-apps' },
      description: 'A fitness tracking application with workout plans and progress monitoring.',
      image: '/images/portfolio/fitness-app.jpg',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      features: ['Workout Plans', 'Progress Tracking', 'Meal Planner', 'Social Sharing'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'A responsive website for a restaurant with online ordering and table reservation.',
      image: '/images/portfolio/restaurant.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Strapi', 'Stripe'],
      features: ['Online Menu', 'Table Reservation', 'Online ordering', 'Admin Dashboard'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 6,
      title: 'Retail POS System',
      category: { id: 3, name: 'ERP Systems', slug: 'erp-systems' },
      description: 'A point of sale system with inventory management for retail businesses.',
      image: '/images/portfolio/pos-system.jpg',
      technologies: ['React', 'Electron', 'Node.js', 'SQLite'],
      features: ['POS System', 'Inventory Control', 'Staff Scheduling'],
      live_url: '#',
      github_url: '#'
    }
  ];
  // Use API data if available, otherwise use fallback data
  const projects: PortfolioProject[] = Array.isArray(apiProjects) ? apiProjects : fallbackProjects;
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((project) => project.category?.slug === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00CFFF]/10 rounded-full text-[#0A2540] text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Showcasing Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-[#00CFFF]">
              Best Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful projects spanning web development, 
            ERP systems, mobile applications, and e-commerce solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[#00CFFF]/30 border-t-[#00CFFF] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading projects: {error}</p>
          </div>
        ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#00CFFF]/30"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a
                        href={project.live_url}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#0A2540] hover:bg-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.github_url}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#0A2540] hover:bg-white transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="px-3 py-1 bg-[#00CFFF] text-white text-xs font-medium rounded-full">
                      {categories.find(cat => cat.id === project.category.slug)?.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 group-hover:text-[#00CFFF] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-[#0A2540] text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-[#00CFFF]/10 text-[#0A2540] text-xs font-medium rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Features */}
                {Array.isArray(project.features) && project.features.length > 0 && (
                <div className="space-y-2">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#00CFFF] rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                )}
              </div>
            </div>
          ))}
        </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Like What You See?</h3>
          <p className="text-gray-600 mb-8">Let's discuss your next project and bring your vision to life.</p>
          <button className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;