import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';

const Blog: React.FC = () => {
  const categories = ['All', 'Web Development', 'ERP', 'SaaS', 'Tech Trends'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Placeholder data - this will be replaced with API data later
  const articles = [
    {
      slug: 'demystifying-erp-for-smes',
      thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Demystifying ERP: A Guide for Small and Medium Enterprises',
      description: 'Learn how a well-implemented ERP system can revolutionize your business operations, improve efficiency, and drive growth.',
      category: 'ERP',
      date: 'Oct 15, 2023',
    },
    {
      slug: 'the-rise-of-headless-cms',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'The Rise of Headless CMS in Modern Web Development',
      description: 'Discover the benefits of using a headless CMS for your next web project, from improved performance to greater flexibility.',
      category: 'Web Development',
      date: 'Sep 28, 2023',
    },
    {
      slug: 'building-a-scalable-saas-platform',
      thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Key Considerations for Building a Scalable SaaS Platform',
      description: 'A deep dive into the architectural decisions and best practices for creating a successful and scalable SaaS product.',
      category: 'SaaS',
      date: 'Sep 10, 2023',
    },
    {
      slug: 'ai-in-business-automation',
      thumbnail: 'https://images.unsplash.com/photo-1600880292203-942bb68b2432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: 'RetailPro E-commerce Site',
      title: 'How AI is Shaping the Future of Business Automation',
      description: 'Explore the latest AI trends and how they are being leveraged to automate tasks, improve decision-making, and create new opportunities.',
      category: 'Tech Trends',
      date: 'Aug 22, 2023',
    },
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest industry trends, insights, and news from the Duxelite team.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
