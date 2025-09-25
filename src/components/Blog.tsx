import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, ArrowRight, Search } from 'lucide-react';
import { useBlogPosts } from '../hooks/useApi';

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
      title: 'The Future of ERP Systems: AI Integration and Smart Automation',
      excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing enterprise resource planning systems.',
      category: 'erp-systems',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tags: ['ERP', 'AI', 'Automation', 'Enterprise']
    },
    {
      id: 2,
      title: 'Modern Web Development: React 18 Features and Performance Optimization',
      excerpt: 'A comprehensive guide to leveraging React 18\'s new features for building high-performance web applications.',
      category: 'web-development',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['React', 'Performance', 'JavaScript', 'Frontend']
    },
    {
      id: 3,
      title: 'Digital Transformation Success: A Complete Roadmap for 2024',
      excerpt: 'Learn the essential strategies and best practices for successful digital transformation initiatives.',
      category: 'digital-trends',
      author: 'Lisa Rodriguez',
      date: '2024-01-10',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      tags: ['Digital Transformation', 'Strategy', 'Business']
    },
    {
      id: 4,
      title: 'Case Study: How We Reduced Loading Time by 70% for E-commerce Platform',
      excerpt: 'Detailed analysis of performance optimization techniques that dramatically improved user experience.',
      category: 'case-studies',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      tags: ['Performance', 'E-commerce', 'Optimization', 'Case Study']
    },
    {
      id: 5,
      title: 'Microservices Architecture: Best Practices for Scalable Applications',
      excerpt: 'Understanding when and how to implement microservices architecture for maximum scalability and maintainability.',
      category: 'web-development',
      author: 'Anna Wilson',
      date: '2024-01-05',
      readTime: '14 min read',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Backend']
    },
    {
      id: 6,
      title: 'The Rise of Low-Code Platforms: Opportunities and Challenges',
      excerpt: 'Analyzing the growing trend of low-code development platforms and their impact on the industry.',
      category: 'digital-trends',
      author: 'Robert Taylor',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      tags: ['Low-Code', 'Development', 'Trends', 'Innovation']
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
        <div className="bg-gradient-to-r from-[#0A2540] to-[#1a4a6e] rounded-3xl overflow-hidden mb-16 text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-block px-4 py-2 bg-[#00CFFF] rounded-full text-[#0A2540] text-sm font-medium mb-6">
                Featured Article
              </div>
              
              <h3 className="text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center space-x-6 mb-8 text-sm text-white/60">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="bg-[#00CFFF] text-[#0A2540] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 flex items-center">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A2540] text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 leading-tight group-hover:text-[#00CFFF] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.read_time}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.published_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-[#0A2540] text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="text-[#0A2540] font-medium text-sm hover:text-[#00CFFF] transition-colors duration-300 flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-[#00CFFF]/10 to-[#0A2540]/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-[#0A2540] mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tips, and updates 
            delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#00CFFF] transition-colors duration-300"
            />
            <button className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;