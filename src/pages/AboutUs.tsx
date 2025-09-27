import React from 'react';
import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', photo: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'CTO', photo: 'https://via.placeholder.com/150' },
    { name: 'Peter Jones', role: 'Lead Developer', photo: 'https://via.placeholder.com/150' },
    { name: 'Sara Williams', role: 'UI/UX Designer', photo: 'https://via.placeholder.com/150' },
  ];

  const achievements = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '10+', label: 'Years of Experience' },
    { number: '100+', label: 'Happy Clients' },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 pt-24">
      {/* Company Introduction */}
      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Duxelite</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of innovators dedicated to building cutting-edge digital solutions that drive business growth. Our mission is to empower organizations with technology that is both powerful and easy to use.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600">
                We build beautiful, responsive, and high-performing websites tailored to your brand's unique identity. Our expertise ensures a seamless user experience across all devices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">SaaS Platforms</h3>
              <p className="text-gray-600">
                From concept to launch, we develop scalable and secure Software-as-a-Service platforms that solve real-world problems and create lasting value for your users.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">ERP Systems</h3>
              <p className="text-gray-600">
                We design and implement robust ERP systems that streamline your business processes, improve efficiency, and provide critical insights for better decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Purpose</h2>
          <div className="grid md:grid-cols-2 gap-12">
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
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
              [
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
              ].map((value, index) => (
                <div key={index} className="group text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold text-[#0A2540] mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#0A2540] to-[#00CFFF] hidden md:block"></div>
            <div className="space-y-12 md:space-y-16">
              {
                [
                  { year: '2019', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
                  { year: '2020', title: '50+ Projects', description: 'Reached milestone of 50 successful project deliveries' },
                  { year: '2022', title: 'ERP Solutions', description: 'Expanded into comprehensive ERP system development' },
                  { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading digital solutions provider' }
                ].map((milestone, index) => (
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
                    <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-[#0A2540] to-[#00CFFF] rounded-full mx-8 hidden md:block"></div>
                    <div className="flex-1"></div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Numbers */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {achievements.map((item, index) => (
              <div key={index}>
                <p className="text-5xl font-bold">{item.number}</p>
                <p className="text-xl mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Want to know how we can help your business?</h2>
          <a href="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Contact Us Today!
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
