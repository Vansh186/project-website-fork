import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Sponsors from '../components/sections/Sponsors';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Team />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default Home;