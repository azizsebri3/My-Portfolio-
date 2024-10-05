import React, { useRef } from "react";
import Header from "./components/Header/Header";
import About from "./components/About";
import back from "./assets/back.jpg";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const contentStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Note the corrected spelling
    overflowX: "hidden",
    height: "100vh",
  };

  // Create refs for the components you want to track
  const introRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <div style={contentStyles}>
        <Header
          introRef={introRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Intro ref={introRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
