import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // TODO: Fetch project data from API using the slug
  console.log('Case study slug:', slug);

  // Placeholder data - this will be replaced with API data based on the slug
  const project = {
    title: 'TechCorp ERP Overhaul',
    client: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    challenge: 'TechCorp was struggling with decentralized data, inefficient workflows, and a lack of real-time visibility into their operations. Their legacy systems were fragmented, leading to costly errors and delays.',
    solution: 'Duxelite designed and implemented a custom, cloud-based ERP system that unified all business processes, from supply chain management to financial reporting. The new system provides a single source of truth and automates key workflows.',
    features: [
      'Centralized Inventory Management',
      'Automated Financial Reporting',
      'Real-time Sales & Analytics Dashboard',
      'Integrated CRM and HR Modules',
      'Scalable Cloud Architecture',
    ],
    screenshots: [
      'https://via.placeholder.com/800x450.png?text=Dashboard',
      'https://via.placeholder.com/800x450.png?text=Inventory+Module',
      'https://via.placeholder.com/800x450.png?text=Sales+Analytics',
    ],
    outcome: 'The new ERP system reduced operational costs by 25%, improved inventory accuracy by 98%, and provided management with real-time data, leading to a 15% increase in overall profitability within the first year.',
  };

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-[#00CFFF]">Case Study</p>
          <h1 className="text-5xl font-bold text-[#0A2540] mt-2 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">Client: <span className="font-semibold">{project.client}</span></p>
        </div>

        <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-2xl shadow-lg mb-16" />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4">The Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.solution}</p>
            </div>

            {/* Outcome */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Result & Outcome</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Key Features */}
          <aside className="bg-gray-50 p-8 rounded-2xl self-start">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Key Features</h3>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#00CFFF] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Screenshots */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0A2540] text-center mb-8">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.screenshots.map((src, index) => (
              <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white py-16 px-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Want a similar solution?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Let's discuss how we can help your business achieve its goals with a custom-tailored solution.</p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#0A2540] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
