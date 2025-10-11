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
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-[#00CFFF] mb-2">{category}</p>
        <h3 className="text-xl font-bold text-[#0A2540] mb-3">{name}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Link 
            to={`/projects/${slug}`}
            className="inline-flex items-center justify-center font-semibold text-[#0A2540] hover:text-[#00CFFF] transition-colors duration-300 border border-[#00CFFF] rounded-lg px-4 py-2 hover:bg-[#00CFFF]/10"
          >
            View Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link 
            to={`/case-studies/${slug}`}
            className="inline-flex items-center justify-center text-sm text-gray-600 hover:text-[#00CFFF] transition-colors duration-300"
          >
            Read Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
