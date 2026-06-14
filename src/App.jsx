import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './componenets/Navbar'; 
import Hero from './componenets/Hero';
import About from "./componenets/About";
import Skills from "./componenets/Skills";
import Project from "./componenets/Project";
import Education from './componenets/Education';
import Contact from './componenets/ContactMe';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="bg-grey-950">
      <Navbar /> {/**/}
      <Hero />
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
