import React, { useRef } from "react";
import Header from "./components/Header/Header";
import About from "./components/About";
import back from "./assets/back.jpg";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills";
import Footer from "./components/Footer";
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
  const contactRef = useRef();

  return (
    <>
      <div style={contentStyles}>
        <Header
          introRef={introRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
        <Intro ref={introRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
