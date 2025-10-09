import React, { useState, useEffect } from 'react';
import { useBlogPosts } from '../hooks/useApi';
import ArticleCard from '../components/ArticleCard';
import { format } from 'date-fns';
import Breadcrumb from '../components/Breadcrumb';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  read_time: string;
  category: {
    name: string;
    slug: string;
  };
  tags?: string[];
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { data, loading, error } = useBlogPosts();
  const [categories, setCategories] = useState<string[]>(['All']);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  // Extract unique categories from posts
  useEffect(() => {
    if (data) {
      // Get unique categories from posts
      const postCategories = new Set<string>();
      data.forEach(post => {
        if (post.category?.name) {
          postCategories.add(post.category.name);
        }
      });
      
      setCategories(['All', ...Array.from(postCategories)]);
      setFilteredPosts(data);
    }
  }, [data]);

  // Filter posts by category
  useEffect(() => {
    if (data) {
      const posts = activeCategory === 'All' 
        ? data 
        : data.filter(post => post.category?.name === activeCategory);
      setFilteredPosts(posts);
    }
  }, [activeCategory, data]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] to-[#030D18] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] to-[#030D18] flex items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Error loading blog posts</h2>
        <p className="text-red-400 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay updated with the latest industry trends, insights, and news from the Duxelite team.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white shadow-lg'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <ArticleCard 
                  key={post.id}
                  slug={post.slug}
                  thumbnail={post.featured_image || 'https://via.placeholder.com/600x400?text=No+Image'}
                  title={post.title}
                  description={post.excerpt}
                  category={post.category?.name || 'Uncategorized'}
                  date={post.published_at ? format(new Date(post.published_at), 'MMM d, yyyy') : ''}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl text-white/80">No blog posts found{activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.</h3>
                {activeCategory !== 'All' && (
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Posts
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blog;
