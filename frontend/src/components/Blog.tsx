import React, { useState, useEffect, useMemo } from 'react';
import { User, Clock, ArrowRight, Search } from 'lucide-react';
import { useBlogPosts } from '../hooks/useApi';
import { Link } from "react-router-dom";
import { format } from 'date-fns';

interface BlogApiResponse {
  data: BlogPost[];
  meta?: {
    total: number;
    current_page?: number;
    last_page?: number;
    per_page?: number;
  };
}
import Breadcrumb from './Breadcrumb';

interface Author {
  name: string;
}

interface Category {
  name: string;
  slug: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: Author | string;
  published_at: string;
  read_time: string;
  category: Category;
  tags: string[];
  featured_image: string;
}

// interface BlogResponse {
//   data: BlogPost[];
//   meta: {
//     total: number;
//     per_page: number;
//     current_page: number;
//     last_page: number;
//   };
// }

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Debounce search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const { data: blogData, loading, error } = useBlogPosts(
    activeCategory === 'all' ? undefined : activeCategory,
    debouncedSearchTerm
  ) as { data: BlogPost[] | null; loading: boolean; error: string | null; };
  useEffect(() => {
    console.log('Active Category:', activeCategory);
    console.log('Search Term:', debouncedSearchTerm);
    console.log('Blog Data:', blogData);
  }, [activeCategory, debouncedSearchTerm, blogData]);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'erp-solutions', name: 'ERP Solutions' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'ui-ux-design', name: 'UI/UX Design' },
    { id: 'fintech', name: 'Fintech' },
    { id: 'healthcare-it', name: 'Healthcare IT' },
    { id: 'retail-technology', name: 'Retail Technology' }
  ];

  // Memoize posts to prevent unnecessary re-renders
  const posts = useMemo(() => {
    if (!blogData) return [];
    return blogData;
  }, [blogData]);
  
  const featuredPost = posts[0];

  
  // Show loading state
  if (loading && !blogData) {
    return (
      <section className="py-20 bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-lg">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 text-red-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Error Loading Content</h3>
            <p className="text-red-300 mb-6">
              We're having trouble loading the blog posts. {typeof error === 'string' ? error : 'Please try again later.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-[#00CFFF] text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech Insights &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-[#00B2E2]">
              Industry Updates
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights 
            in web development, ERP systems, and digital transformation.
          </p>
        </div>
        {/* Search and Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          {/* Search Bar */}
          {/* <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-[#00CFFF] text-white placeholder-white/60 transition-colors duration-300"
              aria-label="Search blog posts"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div> */}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/70">No blog posts found matching your criteria.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-white/5 rounded-3xl shadow-lg overflow-hidden mb-12 text-white border border-white/10 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#00CFFF] text-sm font-medium mb-6">
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
                      {Array.isArray(featuredPost.tags) && featuredPost.tags.slice(0, 3).map((tag: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/blog/${featuredPost.slug}`} 
                      className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white px-6 py-3 rounded-full font-semibold hover:from-[#00B2E2] hover:to-[#00CFFF] transition-colors duration-300 shadow-lg"
                    >
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
            )}

            {/* Regular Posts Grid */}
            {/* {posts.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white/5 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/10 backdrop-blur-sm">
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-white/60 mb-2">
                        <span className="text-[#00CFFF] font-medium">{post.category?.name || 'General'}</span>
                        <span className="mx-2">•</span>
                        <span>{post.read_time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-white/70 mb-4 line-clamp-2">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-[#00CFFF] font-medium inline-flex items-center hover:text-white transition-colors duration-200"
                      >
                        Read more <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )} */}
          </>
        )}

        {/* CTA to Blog Page */}
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white px-8 py-4 rounded-full font-semibold hover:from-[#00B2E2] hover:to-[#00CFFF] transition-all duration-300 shadow-lg"
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