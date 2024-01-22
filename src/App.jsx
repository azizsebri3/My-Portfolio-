import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import back from './assets/back.jpg';
import Logo from "./components/logo";
import Intro from "./components/Intro";
import Skills from "./components/skills";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const containerStyles = {
    background: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Fixed background
    
  };
  

  const contentStyles = {
    width: '98%',
    boxSizing: 'border-box',
    padding: '10px', // Add padding for better spacing
  };

  // Create refs for the components you want to track
  const introRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <Header introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef} />
        <Intro ref={introRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
