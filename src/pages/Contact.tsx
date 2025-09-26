import React from 'react';
import { Phone, Mail, MapPin, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services or want to start a project, we're ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00CFFF] focus:border-[#00CFFF]" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00CFFF] focus:border-[#00CFFF]" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00CFFF] focus:border-[#00CFFF]" placeholder="Regarding your services" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00CFFF] focus:border-[#00CFFF]" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#0A2540] to-[#00CFFF] text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Contact Information</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#00CFFF] mr-4 mt-1" />
                  <span className="text-gray-700">123 Digital Avenue, Tech City, 12345</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#00CFFF] mr-4" />
                  <a href="mailto:contact@duxelite.com" className="text-gray-700 hover:text-[#00CFFF]">contact@duxelite.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#00CFFF] mr-4" />
                  <a href="tel:+1234567890" className="text-gray-700 hover:text-[#00CFFF]">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-80 rounded-2xl flex items-center justify-center text-gray-500">
              Google Maps Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
