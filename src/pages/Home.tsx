import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CaseStudies from '../components/CaseStudies';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CaseStudies />
      <Blog />
      <Contact />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
