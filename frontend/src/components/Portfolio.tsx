import React, { useState } from 'react';
// import { ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { Eye, ArrowRight } from 'lucide-react';
import { usePortfolioProjects } from '../hooks/useApi';
import type { PortfolioProject } from '../services/apiService';
import { Link } from "react-router-dom";

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
    { id: 'uiux-design', name: 'UI/UX Design' }
  ];
  
  // Fallback data in case API is not available - Updated to match backend projects
  const fallbackProjects: PortfolioProject[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      slug: 'ecommerce-platform',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'A full-featured e-commerce platform with inventory management and payment processing.',
      image: 'http://localhost:8000/storage/optimized/ecommerce/main.webp',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Stripe'],
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Processing'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 2,
      title: 'Corporate Website',
      slug: 'corporate-website',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'A modern corporate website with blog and contact management system.',
      image: 'http://localhost:8000/storage/optimized/corporate/main.webp',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Sass'],
      features: ['Responsive Design', 'Blog System', 'Contact Management', 'SEO Optimized'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 3,
      title: 'Online Learning Platform',
      slug: 'online-learning-platform',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'An interactive e-learning platform with course management and student progress tracking.',
      image: 'http://localhost:8000/storage/optimized/learning-platform/main.webp',
      technologies: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'AWS S3'],
      features: ['Course Management', 'Student Progress Tracking', 'Video Streaming', 'Quizzes & Assessments'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      slug: 'real-estate-portal',
      category: { id: 1, name: 'Web Development', slug: 'web-development' },
      description: 'A comprehensive real estate listing platform with advanced search and property management.',
      image: 'http://localhost:8000/storage/optimized/real-estate/main.webp',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Mapbox'],
      features: ['Property Listings', 'Advanced Search', 'Virtual Tours', 'Agent Management'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 5,
      title: 'Fitness Mobile App',
      slug: 'fitness-mobile-app',
      category: { id: 4, name: 'Mobile Development', slug: 'mobile-development' },
      description: 'A fitness tracking application with workout plans and progress tracking.',
      image: 'http://localhost:8000/storage/optimized/fitness-app/main.webp',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      features: ['Workout Plans', 'Progress Tracking', 'Meal Planner', 'Social Sharing'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      slug: 'food-delivery-app',
      category: { id: 4, name: 'Mobile Development', slug: 'mobile-development' },
      description: 'A food delivery application connecting restaurants with customers.',
      image: 'http://localhost:8000/storage/optimized/food-delivery/main.webp',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
      features: ['Restaurant Listings', 'Food Ordering', 'Real-time Tracking', 'Payment Integration'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 7,
      title: 'Banking App Redesign',
      slug: 'banking-app-redesign',
      category: { id: 5, name: 'UI/UX Design', slug: 'uiux-design' },
      description: 'Complete UI/UX redesign of a mobile banking application for better user experience.',
      image: 'http://localhost:8000/storage/optimized/banking-app/main.webp',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'After Effects'],
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 8,
      title: 'Enterprise Resource Planning System',
      slug: 'enterprise-resource-planning',
      category: { id: 3, name: 'ERP Systems', slug: 'erp-systems' },
      description: 'A comprehensive ERP solution integrating all business processes including accounting, HR, inventory, and CRM.',
      image: 'http://localhost:8000/storage/optimized/erp-system/main.webp',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
      features: [
        'Accounting & Finance',
        'Human Resources',
        'Inventory Management',
        'Customer Relationship',
        'Supply Chain',
        'Business Analytics'
      ],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 9,
      title: 'E-commerce Dashboard',
      slug: 'ecommerce-dashboard',
      category: { id: 5, name: 'UI/UX Design', slug: 'uiux-design' },
      description: 'Admin dashboard design for e-commerce store management.',
      image: 'http://localhost:8000/storage/optimized/ecommerce-dashboard/main.webp',
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
      features: ['Sales Analytics', 'Inventory Management', 'Order Processing', 'Customer Management'],
      live_url: '#',
      github_url: '#'
    }
  ];
  // Use API data if available, otherwise use fallback data
  const projects: PortfolioProject[] = (apiProjects && apiProjects.length > 0) ? apiProjects : fallbackProjects;

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((project) => project.category?.slug === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a4a6e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-[#00CFFF] text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent Projects &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-white">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence 
            with innovative solutions and cutting-edge technology.
          </p>
        </div>

        {/* Filter Tabs - Simplified for home page */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#00CFFF] to-[#0A2540] text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - Show only featured projects on home page */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[#00CFFF]/30 border-t-[#00CFFF] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/60">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400">Error loading projects: {error}</p>
          </div>
        ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.slice(0, 6).map((project) => (
            <Link 
              to={`/portfolio/${project.slug}`} 
              key={project.id}
              className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-[#00CFFF]/30 backdrop-blur-sm block"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `/portfolio/${project.slug}`;
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-1 bg-[#00CFFF] text-white text-xs font-medium rounded-full">
                      {project.category?.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00CFFF] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-3 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <Link 
                          key={`${project.id}-tech-${index}`}
                          to={`/portfolio/${project.slug}`} 
                          className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                        >
                          {tech}
                        </Link>
                      ))}
                      {project.technologies.length > 2 && (
                        <Link 
                          key={`${project.id}-more`}
                          to={`/portfolio/${project.slug}`} 
                          className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                        >
                          +{project.technologies.length - 2}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        )}

        {/* CTA to Portfolio Page */}
        <div className="text-center">
          <Link to="/portfolio" className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#0A2540] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;