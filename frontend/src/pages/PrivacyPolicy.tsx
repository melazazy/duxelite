import React from 'react';
import { Shield, Lock, User, Server, Mail } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'October 4, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      icon: <Server className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <>
          <p className="mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Personal information such as name, email address, and contact details when you register or contact us.</li>
            <li>Information about your use of our services, including browsing activity and interactions.</li>
            <li>Device and connection information, such as IP address, browser type, and operating system.</li>
          </ul>
        </>
      )
    },
    {
      title: 'How We Use Your Information',
      icon: <User className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide, maintain, and improve our services.</li>
          <li>To communicate with you about updates, security alerts, and support messages.</li>
          <li>To personalize your experience and provide content and features that match your interests.</li>
          <li>To analyze how our services are used and improve their functionality.</li>
        </ul>
      )
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <>
          <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit using SSL/TLS protocols.</li>
            <li>Regular security assessments and updates to our systems.</li>
            <li>Restricted access to personal information on a need-to-know basis.</li>
            <li>Regular backups and disaster recovery procedures.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Data Sharing and Disclosure',
      icon: <Shield className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <>
          <p className="mb-4">We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who perform services on our behalf.</li>
            <li>Business partners in connection with services that they provide to us.</li>
            <li>Law enforcement or government agencies when required by law or to protect our rights.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Your Rights',
      icon: <User className="w-5 h-5 text-[#00CFFF]" />,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, correct, or delete your personal information.</li>
          <li>Object to or restrict processing of your personal data.</li>
          <li>Request data portability where applicable.</li>
          <li>Withdraw consent at any time where we rely on consent to process your personal data.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
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
              At Duxelite, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@duxelite.com" className="text-[#00CFFF] hover:underline">
                    privacy@duxelite.com
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

export default PrivacyPolicy;
