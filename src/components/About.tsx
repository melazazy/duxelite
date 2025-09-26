import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Lightbulb, Shield, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Cutting-edge solutions using the latest technologies to stay ahead of the curve.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Robust, secure, and scalable solutions that businesses can depend on.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Commitment to delivering exceptional quality in every project we undertake.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership',
      description: 'Building long-term relationships with our clients through trust and collaboration.'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2020', title: '50+ Projects', description: 'Reached milestone of 50 successful project deliveries' },
    { year: '2022', title: 'ERP Solutions', description: 'Expanded into comprehensive ERP system development' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading digital solutions provider' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00CFFF]/10 rounded-full text-[#0A2540] text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            About TechFlow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Driving Digital Transformation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-[#00CFFF]">
              Since 2019
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We create powerful digital solutions that transform businesses. From custom web development 
            to enterprise ERP systems, we deliver results that drive growth and success.
          </p>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a6e] p-8 rounded-3xl text-white">
            <Target className="w-12 h-12 text-[#00CFFF] mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower businesses through cutting-edge digital solutions that drive growth, 
              efficiency, and competitive advantage in today's digital marketplace.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#00CFFF]/10 to-[#00CFFF]/5 p-8 rounded-3xl border border-[#00CFFF]/20">
            <Eye className="w-12 h-12 text-[#0A2540] mb-6" />
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading digital transformation partner, recognized for innovative 
              solutions and exceptional service that helps businesses achieve their full potential.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#0A2540] text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-[#0A2540] mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-[#0A2540] text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#0A2540] to-[#00CFFF] hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-md">
                        <div className="text-2xl font-bold text-[#00CFFF] mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-semibold text-[#0A2540] mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-full mx-8 hidden md:block"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-8">Let's discuss how we can help you achieve your digital goals.</p>
          <button className="bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;