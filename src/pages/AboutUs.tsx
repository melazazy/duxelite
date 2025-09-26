import React from 'react';

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
