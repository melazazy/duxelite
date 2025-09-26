import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  image: string;
  name: string;
  description: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, image, name, description, category }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-[#00CFFF] mb-2">{category}</p>
        <h3 className="text-xl font-bold text-[#0A2540] mb-3 truncate">{name}</h3>
        <p className="text-gray-600 mb-6 h-20 overflow-hidden text-ellipsis">{description}</p>
        <Link 
          to={`/portfolio/${slug}`}
          className="inline-flex items-center font-semibold text-[#0A2540] hover:text-[#00CFFF] transition-colors duration-300"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
