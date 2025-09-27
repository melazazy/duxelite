import React, { useState } from 'react';
import { User, Clock, ArrowRight, Search } from 'lucide-react';
import { useBlogPosts } from '../hooks/useApi';
import { Link } from "react-router-dom";


const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: blogData, loading, error } = useBlogPosts(
    activeCategory === 'all' ? undefined : activeCategory,
    searchTerm
  );

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'erp-systems', name: 'ERP Systems' },
    { id: 'digital-trends', name: 'Digital Trends' },
    { id: 'case-studies', name: 'Case Studies' }
  ];


  const posts = blogData?.data || [];
  const featuredPost = posts[0] || {
    id: 0,
    title: 'Loading...',
    slug: 'loading',
    excerpt: 'Loading the latest articles...',
    author: { name: 'Loading...' },
    published_at: new Date().toISOString(),
    read_time: '...',
    category: { name: 'General', slug: 'general' },
    tags: ['loading'],
    featured_image: '/placeholder-blog.jpg'
  };
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];
  
  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="animate-pulse">Loading blog posts...</div>
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-20 text-red-500">
            Error loading blog posts. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00CFFF]/10 rounded-full text-[#0A2540] text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Tech Insights &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-[#00CFFF]">
              Industry Updates
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights 
            in web development, ERP systems, and digital transformation.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#00CFFF] transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-[#0A2540] to-[#1a4a6e] rounded-3xl overflow-hidden mb-12 text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-block px-4 py-2 bg-[#00CFFF] rounded-full text-[#0A2540] text-sm font-medium mb-6">
                Featured Article
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
              <p className="text-white/80 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center space-x-4 mb-6 text-sm text-white/60">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {typeof featuredPost.author === 'object' ? featuredPost.author?.name : featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.read_time}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {(featuredPost.tags || []).slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <Link to={`/blog/${featuredPost.slug || 'featured-post'}`} className="inline-flex items-center bg-[#00CFFF] text-[#0A2540] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <img
                src={featuredPost.featured_image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[#00CFFF]/30 border-t-[#00CFFF] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading articles...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading articles: {error}</p>
          </div>
        )}

        {/* CTA to Blog Page */}
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Read All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;