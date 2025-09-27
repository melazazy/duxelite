import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import HomeCaseStudies from '../components/HomeCaseStudies';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <HomeCaseStudies />
      <Blog />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
