import React from 'react';
import FallingLeaves from '../components/FallingLeaves';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Partners from '../components/sections/Partners';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <FallingLeaves />
      <div className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Team />
        <Partners />
        <Contact />
      </div>
    </div>
  );
};

export default Home;