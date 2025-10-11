import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Breadcrumb from '../components/Breadcrumb';
import { usePortfolioProjects } from '../hooks/useApi';
import type { PortfolioProject } from '../services/apiService';

// Define category structure
interface Category {
  id: string;
  name: string;
  slug: string;
}

// Define available categories
const categories: Category[] = [
  { id: 'all', name: 'All Projects', slug: 'all' },
  { id: 'web-development', name: 'Web Development', slug: 'web-development' },
  { id: 'erp-systems', name: 'ERP Systems', slug: 'erp-systems' },
  { id: 'mobile-development', name: 'Mobile Development', slug: 'mobile-development' },
  { id: 'uiux-design', name: 'UI/UX Design', slug: 'uiux-design' }
];

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get projects from API
  const { data: apiProjects = [], loading, error } = usePortfolioProjects();
  
  // Handle category filter change
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setActiveCategory(category);
  }, [searchParams]);
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all'
    ? apiProjects
    : apiProjects.filter(project => project.category?.slug === activeCategory);
    
  // Handle category selection
  const handleCategoryChange = (categorySlug: string) => {
    setSearchParams(categorySlug === 'all' ? {} : { category: categorySlug });
    setIsFilterOpen(false);
  };
  
  // Fallback data in case API is not available
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
      title: 'Enterprise Resource Planning',
      slug: 'enterprise-resource-planning',
      category: { id: 2, name: 'ERP Systems', slug: 'erp-systems' },
      description: 'Comprehensive ERP solution integrating accounting, HR, inventory, and CRM modules.',
      image: 'http://localhost:8000/storage/optimized/erp-system/main.webp',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
      features: ['Accounting', 'HR Management', 'Inventory', 'CRM', 'Analytics'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 3,
      title: 'Fitness Mobile App',
      slug: 'fitness-mobile-app',
      category: { id: 3, name: 'Mobile Development', slug: 'mobile-development' },
      description: 'A fitness tracking application with workout plans and progress monitoring.',
      image: 'http://localhost:8000/storage/optimized/fitness-app/main.webp',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      features: ['Workout Plans', 'Progress Tracking', 'Meal Planner', 'Social Sharing'],
      live_url: '#',
      github_url: '#'
    },
    {
      id: 4,
      title: 'Banking App Redesign',
      slug: 'banking-app-redesign',
      category: { id: 4, name: 'UI/UX Design', slug: 'uiux-design' },
      description: 'Complete UI/UX redesign of a mobile banking application.',
      image: 'http://localhost:8000/storage/optimized/banking-app/main.webp',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'After Effects'],
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      live_url: '#',
      github_url: '#'
    }
  ];
  
  // Use API data if available, otherwise use fallback data
  const projects = apiProjects.length > 0 ? filteredProjects : fallbackProjects;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Explore our diverse range of projects and see how we've helped businesses transform their digital presence.
          </p>
          
          {/* Category Filter - Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.slug)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.slug
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-8">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium text-white"
            >
              <Filter className="w-4 h-4" />
              Filter by Category
              {activeCategory !== 'all' && (
                <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {categories.find(c => c.slug === activeCategory)?.name[0]}
                </span>
              )}
            </button>
            
            {/* Mobile Filter Dropdown */}
            {isFilterOpen && (
              <div className="mt-3 bg-gray-800 rounded-lg p-4 shadow-xl absolute left-4 right-4 z-10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-white">Filter by Category</h3>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.slug)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeCategory === category.slug
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/80">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="text-red-400 mb-4">Error loading projects</div>
              <p className="text-white/80 mb-4">Showing sample projects instead</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fallbackProjects.map((project) => ({
                  ...project,
                  name: project.title,
                  category: project.category.name
                })).map((project) => (
                  <ProjectCard key={project.slug} {...project} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => ({
                ...project,
                name: project.title,
                category: project.category?.name || 'Uncategorized'
              })).map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
