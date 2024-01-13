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
    minHeight: '100vh', 
    width: '100%',
    position: 'fixed', 
    zIndex: -1,
  };

  const contentStyles = {
    paddingTop: '0%', // Adjust this value based on your header height
  };

  // Create refs for the components you want to track
  const introRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();


  return (
    <div>
      <div style={containerStyles}></div>
      <div style={contentStyles}>
        <Header introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef}/>
        <Logo />
        <Intro ref={introRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Footer />
        
        
      </div>
    </div>
  );
}

export default App;
