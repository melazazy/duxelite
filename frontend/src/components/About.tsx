import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ArrowRight, Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Zap className="w-8 h-8 text-[#00CFFF]" />, value: '10+', label: 'Years Experience' },
    { icon: <Award className="w-8 h-8 text-[#00CFFF]" />, value: '150+', label: 'Projects Delivered' },
    { icon: <Users className="w-8 h-8 text-[#00CFFF]" />, value: '100+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a4a6e] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#00CFFF] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00CFFF] rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-[#00CFFF] text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              About Duxelite
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Partner in Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-white">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              We are a team of strategists, designers, and developers passionate about creating powerful digital solutions. From custom web applications to scalable ERP systems, we build products that drive growth and deliver exceptional user experiences.
            </p>
            <Link to="/about" className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#0A2540] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Discover Our Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Right Column: Stats & Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team collaborating in a modern office"
              className="rounded-3xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 w-full max-w-sm backdrop-blur-sm">
              <div className="flex justify-around items-center text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;