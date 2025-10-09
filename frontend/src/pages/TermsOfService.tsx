import React from 'react';
import { FileText, Code, AlertCircle, Shield, Mail } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const TermsOfService: React.FC = () => {
  const lastUpdated = 'October 4, 2025';

  const sections = [
    {
      title: 'Introduction',
      icon: <FileText className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <>
          <p className="mb-4">Welcome to DuxElite. These Terms of Service ("Terms") govern your access to and use of our website and services.</p>
          <p>By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.</p>
        </>
      )
    },
    {
      title: 'Use of Services',
      icon: <Code className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <>
          <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our services in any way that violates any applicable law or regulation.</li>
            <li>Engage in any fraudulent, deceptive, or illegal activity.</li>
            <li>Attempt to gain unauthorized access to our systems or networks.</li>
            <li>Interfere with or disrupt the integrity or performance of our services.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Intellectual Property',
      icon: <AlertCircle className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <p>All content, features, and functionality on our platform, including text, graphics, logos, and software, are the property of DuxElite and are protected by intellectual property laws.</p>
      )
    },
    {
      title: 'Limitation of Liability',
      icon: <Shield className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <p>In no event shall DuxElite be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.</p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
            <p className="text-lg text-white/90 mb-8">
              Please read these Terms of Service carefully before using our website or services. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  </div>
                  <div className="text-white/80 pl-8">
                    {section.content}
                  </div>
                </div>
              ))}
              
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <Mail className="w-5 h-5 text-[#00CFFF]" />
                  <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
                </div>
                <p className="text-white/80 pl-8">
                  If you have any questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@duxelite.com" className="text-[#00CFFF] hover:underline">
                    legal@duxelite.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
