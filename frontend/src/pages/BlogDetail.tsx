import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useBlogPost } from '../hooks/useApi';
import { format } from 'date-fns';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Fetch blog post data using the slug from the URL
  const { data: post, loading, error } = useBlogPost(slug || '');

  // Format the published date
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return dateString; // Return the original string if date parsing fails
    }
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Handle error state
  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] flex items-center justify-center text-white p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error loading blog post</h2>
          <p className="text-red-400 mb-6">The requested blog post could not be found or an error occurred.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center mb-8">
          <Breadcrumb className="mb-8" />
          
          {/* Category */}
          {post.category && (
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#00CFFF] bg-opacity-10 text-[#00CFFF] mb-6">
              {post.category.name}
            </span>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{post.title}</h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/70">
            {/* Author */}
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{typeof post.author === 'string' ? post.author : post.author?.name || 'Duxelite Team'}</span>
            </div>
            
            {/* Published Date */}
            {post.published_at && (
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{formatDate(post.published_at)}</span>
              </div>
            )}
            
            {/* Read Time */}
            {post.read_time && (
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.read_time} read</span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.featured_image && (
          <img 
            src={post.featured_image} 
            alt={post.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-12" 
          />
        )}

        {/* Article Content */}
        {post.content && (
          <div 
            className="prose lg:prose-xl max-w-none prose-invert mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/80"
              >
                <Tag className="w-3.5 h-3.5 mr-1.5" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-white/5 py-12 px-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Found this article helpful?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for more insights, tips, and updates in the world of technology and business solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#00B2E2] text-white px-8 py-3 rounded-full font-bold hover:from-[#00B2E2] hover:to-[#00CFFF] transition-all duration-300 shadow-lg"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
