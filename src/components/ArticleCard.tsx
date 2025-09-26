import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface ArticleCardProps {
  slug: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ slug, thumbnail, title, description, category, date }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2 text-[#00CFFF]" />
            <span>{category}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#0A2540] mb-3 h-14 overflow-hidden">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow h-24 overflow-hidden text-ellipsis">{description}</p>
        <div className="mt-auto">
          <Link 
            to={`/blog/${slug}`}
            className="inline-flex items-center font-semibold text-[#0A2540] hover:text-[#00CFFF] transition-colors duration-300"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
