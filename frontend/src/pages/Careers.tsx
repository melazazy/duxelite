import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, Check, Users, Award, Zap } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Cairo, Egypt',
      salary: 'Competitive',
      department: 'Engineering',
      description: 'We are looking for an experienced Frontend Developer to join our growing team.',
      requirements: [
        '5+ years of experience with React.js',
        'Strong TypeScript skills',
        'Experience with state management (Redux/Context)',
        'Knowledge of modern CSS and responsive design'
      ],
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      salary: 'Competitive',
      department: 'Design',
      description: 'Join our design team to create beautiful and intuitive user experiences.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma/Sketch',
        'Strong portfolio showcasing design work',
        'Understanding of design systems'
      ],
      postedDate: '1 week ago'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Cairo, Egypt',
      salary: 'Competitive',
      department: 'Engineering',
      description: 'Looking for a DevOps engineer to optimize our infrastructure and deployment pipelines.',
      requirements: [
        'Experience with AWS/GCP',
        'CI/CD pipeline setup and maintenance',
        'Containerization with Docker/Kubernetes',
        'Infrastructure as Code (Terraform/CloudFormation)'
      ],
      postedDate: '1 week ago'
    }
  ];

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const filteredJobs = jobOpenings.filter(job => 
    activeTab === 'all' || job.department.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're building the future of business software. Come be part of our journey.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00CFFF]/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-[#00CFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Great Team</h3>
                  <p className="text-white/80">Work with talented and passionate people who care about your growth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#00CFFF]/10 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-[#00CFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Competitive Salary</h3>
                  <p className="text-white/80">We offer competitive compensation packages and benefits.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#00CFFF]/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-[#00CFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunities</h3>
                  <p className="text-white/80">Continuous learning and professional development support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#00CFFF]/10 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-[#00CFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Flexible Work</h3>
                  <p className="text-white/80">Remote work options and flexible working hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-[#00CFFF] text-[#0A2540]' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                All Positions
              </button>
              <button
                onClick={() => setActiveTab('Engineering')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'Engineering' 
                    ? 'bg-[#00CFFF] text-[#0A2540]' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Engineering
              </button>
              <button
                onClick={() => setActiveTab('Design')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'Design' 
                    ? 'bg-[#00CFFF] text-[#0A2540]' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Design
              </button>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all hover:border-[#00CFFF]/30"
                  >
                    <div 
                      className="flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer"
                      onClick={() => toggleJob(job.id)}
                    >
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-white/80">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1.5" /> {job.type}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1.5" /> {job.location}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1.5" /> {job.salary}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1.5" /> {job.postedDate}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <span className={`transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`}>
                          <ArrowRight className="w-5 h-5 text-[#00CFFF]" />
                        </span>
                      </div>
                    </div>

                    {expandedJob === job.id && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <h4 className="text-lg font-medium text-white mb-3">Job Description</h4>
                        <p className="text-white/80 mb-4">{job.description}</p>
                        
                        <h4 className="text-lg font-medium text-white mb-3">Requirements</h4>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((requirement, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-5 h-5 text-[#00CFFF] mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-white/80">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <a
                          href="#apply"
                          className="inline-flex items-center px-6 py-3 bg-[#00CFFF] text-[#0A2540] font-medium rounded-lg hover:bg-[#00B8E6] transition-colors"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/80">No open positions in this category at the moment. Please check back later!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
