import React from 'react';
import { Linkedin, Twitter, Mail, Users, Award, Briefcase } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Team: React.FC = () => {
  const teamMembers = [
    { 
      name: 'John Doe', 
      role: 'CEO & Founder', 
      bio: 'Visionary leader with 15+ years of experience in tech industry',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    { 
      name: 'Jane Smith', 
      role: 'CTO', 
      bio: 'Technology expert specializing in enterprise solutions',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    { 
      name: 'Alex Johnson', 
      role: 'Lead Developer', 
      bio: 'Full-stack developer with a passion for clean code',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    { 
      name: 'Sara Williams', 
      role: 'UI/UX Designer', 
      bio: 'Creative designer focused on user-centered design',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '15+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8" />, value: '5+', label: 'Years Experience' },
    { icon: <Briefcase className="w-8 h-8" />, value: '50+', label: 'Projects Delivered' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're a diverse team of passionate individuals dedicated to delivering exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Team Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#00CFFF] to-[#4A90E2] flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#00CFFF] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00CFFF]/10">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-sm text-gray-300 mb-2">{member.role}</p>
                      <p className="text-sm text-white">{member.bio}</p>
                      <div className="flex space-x-3 mt-4">
                        <a href={member.social.linkedin} className="text-gray-300 hover:text-[#00CFFF] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.social.twitter} className="text-gray-300 hover:text-[#00CFFF] transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${member.social.email}`} className="text-gray-300 hover:text-[#00CFFF] transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#00CFFF] text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00CFFF]/10 to-[#4A90E2]/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for talented individuals to join our growing team. Check out our open positions.
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#00CFFF] to-[#4A90E2] hover:opacity-90 transition-all duration-300"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
