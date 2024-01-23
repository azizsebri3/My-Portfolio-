import React, { useEffect, useState, useRef } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import back from './assets/back.jpg';
import Intro from "./components/Intro";
import Skills from "./components/skills";
import Footer from "./components/Footer";
import Contact from './components/Contact';

function App() {

  const contentStyles = {
    backgroundImage : `url(${back})` ,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachement : 'fixed',
    overflowX : "hidden",
  
  };
  
  // Create refs for the components you want to track
  const introRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <div style={contentStyles}>
        <Header introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} />
        <Intro ref={introRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef}/>
        <Footer />
      </div>
    </>
  );
}

export default App;