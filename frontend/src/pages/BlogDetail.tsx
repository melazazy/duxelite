import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Clock, Share2, MessageSquare, Bookmark, Eye } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useBlogPost } from '../hooks/useApi';
import { format, formatDistanceToNow } from 'date-fns';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  published_at: string;
  read_time: string;
  meta_title: string;
  meta_description: string;
  is_featured: boolean | null;
  status: string | null;
  views: number;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
  author: {
    id: number;
    name: string;
    email: string;
  } | null;
  tags: string[];
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Fetch blog post data using the slug from the URL
  const { data: response, loading, error } = useBlogPost(slug || '');
  const post = (response as unknown as ApiResponse<BlogPost>)?.data;

  // Handle scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format the published date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return {
        formatted: format(date, 'MMMM d, yyyy'),
        relative: formatDistanceToNow(date, { addSuffix: true })
      };
    } catch (error) {
      console.error('Error formatting date:', error);
      return { formatted: dateString, relative: dateString };
    }
  };

  // Handle sharing
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse flex space-x-4 mb-4 justify-center">
            <div className="rounded-full bg-blue-500 h-12 w-12"></div>
          </div>
          <p className="text-blue-300">Loading article...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="text-center max-w-md bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-3">Article Not Found</h2>
          <p className="text-gray-300 mb-6">The article you're looking for doesn't exist or may have been moved.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const dateInfo = formatDate(post.published_at);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <main className="pt-16 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 mt-4">
            <Breadcrumb />
          </div>
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="text-center mb-8">
              {post.category && (
                <Link
                  to={`/blog/category/${post.category.slug}`}
                  className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase rounded-full bg-blue-900/30 hover:bg-blue-800/50 transition-all duration-300 mb-6"
                >
                  {post.category.name}
                </Link>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight mb-6">
                {post.title}
              </h1>

              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                  {post.author && (
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 overflow-hidden mr-3">
                        <User className="h-full w-full p-1.5 text-gray-400" />
                      </div>
                      <span className="font-medium text-white">{post.author.name}</span>
                    </div>
                  )}
                  
                  <div className="hidden sm:block">•</div>
                  
                  <div className="flex items-center" title={dateInfo.formatted}>
                    <Calendar className="w-4 h-4 mr-1.5 text-gray-500" />
                    <span>{dateInfo.relative}</span>
                  </div>
                  
                  {post.read_time && (
                    <>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5 text-gray-500" />
                        <span>{post.read_time} read</span>
                      </div>
                    </>
                  )}
                  
                  <div className="hidden sm:block">•</div>
                  
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1.5 text-gray-500" />
                    <span>{post.views || 0} views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-auto max-h-[600px] object-cover"
                  loading="eager"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="content-wrapper"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\\n/g, '') }} 
            />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <Tag className="w-3 h-3 mr-1.5" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {post.author && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gray-700 overflow-hidden">
                  <User className="h-full w-full p-3 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{post.author.name}</h3>
                  <p className="text-gray-400 text-sm">
                    Published on {formatDate(post.published_at).formatted}
                  </p>
                </div>
              </div>
            </div>
          )}

        </article>
      </main>

      {/* Sticky Navigation */}
      <div className={`sticky bottom-0 left-0 right-0 z-40 transition-all duration-300 bg-gray-900/95 backdrop-blur-md border-t border-gray-800`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Blog</span>
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleShare}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Share article"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Back to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors" aria-label="Save for later">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Styles */}
      <style>{`
        .content-wrapper {
          line-height: 1.7;
          color: #e5e7eb;
        }
        .content-wrapper h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #ffffff;
          line-height: 1.3;
        }
        .content-wrapper h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #f3f4f6;
        }
        .content-wrapper p {
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .content-wrapper a {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .content-wrapper a:hover {
          color: #3b82f6;
          text-decoration: underline;
        }
        .content-wrapper ul, 
        .content-wrapper ol {
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .content-wrapper li {
          margin-bottom: 0.5rem;
        }
        .content-wrapper code {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.9em;
          font-family: 'Fira Code', 'SFMono-Regular', Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        .content-wrapper pre {
          background: #1f2937;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-size: 0.9em;
          line-height: 1.5;
        }
        .content-wrapper blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #9ca3af;
          font-style: italic;
        }
        .content-wrapper img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;