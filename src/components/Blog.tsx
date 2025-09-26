import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, ArrowRight, Search } from 'lucide-react';
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

  const blogPosts = [
    {
      id: 1,
      title: 'AI in ERP: The Future is Now',
      excerpt: 'How AI is transforming business operations through intelligent automation.',
      category: 'erp-systems',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tags: ['ERP', 'AI', 'Automation']
    },
    {
      id: 2,
      title: 'React 18: Performance Revolution',
      excerpt: 'Discover the game-changing features that make React 18 faster than ever.',
      category: 'web-development',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['React', 'Performance', 'JavaScript']
    },
    {
      id: 3,
      title: 'Digital Transformation Roadmap',
      excerpt: 'Essential strategies for successful digital transformation in 2024.',
      category: 'digital-trends',
      author: 'Lisa Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      tags: ['Strategy', 'Business', 'Innovation']
    }
  ];

  const posts = blogData?.data || [];
  const featuredPost = posts[0] || {
    title: 'Loading...',
    excerpt: 'Loading the latest articles...',
    author: 'Loading...',
    date: new Date().toISOString(),
    readTime: '2 min read',
    tags: ['loading'],
    image: '/placeholder-blog.jpg'
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
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.slice(0, 3).map((tag, index) => (
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
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[#00CFFF]/30 border-t-[#00CFFF] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading articles: {error}</p>
          </div>
        ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularPosts.slice(0, 6).map((post) => (
            <article key={post.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A2540] text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2 leading-tight group-hover:text-[#00CFFF] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-[#0A2540] text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link to={`/blog/${post.slug || post.id}`} className="text-[#0A2540] font-medium text-sm hover:text-[#00CFFF] transition-colors duration-300 flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        )}

        {/* CTA to Blog Page */}
        <div className="text-center">
          <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Read All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;