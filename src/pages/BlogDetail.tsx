import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // TODO: Fetch article data from API using the slug
  console.log('Blog post slug:', slug);

  // Placeholder data - this will be replaced with API data based on the slug
  const article = {
    title: 'Demystifying ERP: A Guide for Small and Medium Enterprises',
    author: 'John Doe',
    date: 'Oct 15, 2023',
    category: 'ERP',
    thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Enterprise Resource Planning (ERP) systems are powerful tools that can transform a business, but they often seem complex and out of reach for small and medium enterprises (SMEs). In this guide, we'll demystify ERPs and show you how they can be a game-changer for your growing business.</p>
      <h2 class="text-2xl font-bold text-[#0A2540] mt-8 mb-4">What is an ERP System?</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">At its core, an ERP system is a software platform that integrates and manages a company's main business processes in real-time. This includes everything from finance and accounting to human resources, manufacturing, supply chain, services, procurement, and more. Instead of having separate software for each department, an ERP brings them all together under one roof.</p>
      <blockquote class="border-l-4 border-[#00CFFF] pl-6 py-4 my-8 bg-gray-50">
        <p class="text-xl italic text-gray-800">"An ERP system is the central nervous system of a modern business, connecting all the moving parts and providing a single source of truth."</p>
      </blockquote>
      <h2 class="text-2xl font-bold text-[#0A2540] mt-8 mb-4">Key Benefits for SMEs</h2>
      <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
        <li><strong>Improved Efficiency:</strong> By automating repetitive tasks and streamlining workflows, an ERP can save your team countless hours.</li>
        <li><strong>Better Decision-Making:</strong> With all your data in one place, you can generate comprehensive reports and gain real-time insights into your business performance.</li>
        <li><strong>Enhanced Collaboration:</strong> A unified system breaks down information silos between departments, fostering better communication and teamwork.</li>
        <li><strong>Scalability:</strong> A good ERP system can grow with your business, supporting more users, transactions, and data as you expand.</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed">Implementing an ERP system is a significant step, but with the right partner and a clear strategy, it can unlock immense potential for your SME. At Duxelite, we specialize in creating custom ERP solutions that are tailored to the unique needs of your business.</p>
    `,
  };

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <div className="text-center mb-8">
          <Link to="/blog" className="text-lg font-semibold text-[#00CFFF] hover:underline">Back to Blog</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mt-4 mb-6">{article.title}</h1>
          <div className="flex items-center justify-center space-x-6 text-gray-500">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              <span>{article.category}</span>
            </div>
          </div>
        </div>

        <img src={article.thumbnail} alt={article.title} className="w-full h-96 object-cover rounded-2xl shadow-lg mb-12" />

        {/* Article Content */}
        <div 
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-50 py-12 px-8 rounded-2xl border">
          <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Ready to streamline your business?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let's talk about how a custom ERP solution can help you achieve your goals.</p>
          <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300">
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
