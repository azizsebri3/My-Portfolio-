import React, { forwardRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Logo from "./logo";
import "../style.css"

const Intro = forwardRef((props, ref) => {
  const [typeEffect] = useTypewriter({
    words: ["Aziz Sebri "],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  const introStyles = {
    display: 'flex',
    height: '100vh',
    marginLeft: '50px',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    justifyContent: 'spaceEvenly',
    alignItems: 'center',
    paddinfBottom : "1000px" , 
    
    
  };

  const headingStyles = {
    fontWeight: "bold",
    color: "white",
    fontSize: "35px",
    textAlign: "left", // Center text
  };

  const subheadingStyles = {
    fontWeight: "bold",
    color: "#EAA16E",
    fontSize: "50px",
    textAlign: "center", // Center text
  };

  const paragraphStyles = {
    color: "#8892B0",
    fontSize: "20px",
    textAlign: {}, // Center text
  };

  // Media query for screens with a width less than or equal to 768px
  const mediaQuery = `@media (max-width: 765px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0; // Remove the left margin on smaller screens
    margin-top : auto ; 
  }`;

  return (
    <section ref={ref} style={{ ...introStyles, ...getMediaQueryStyles() }}> 
      <h1 style={headingStyles}>
        Hi There! <p className="wave">👋🏻 </p>  <br />
        <span style={subheadingStyles}>
          {" "}
          <span style={{ color: "white " }}>I am </span> {typeEffect}
        </span>
        <p style={paragraphStyles}>
        I'm passionate about the MERN stack! 🚀<br />
        Currently diving deep into <br />
        MongoDB, Express.js, React.js <br />
        full-stack development. Let's create something amazing together! 🔧✨
      </p>
      </h1>
      
      <Logo />

      <style>{mediaQuery}</style>
    </section>
  );

  function getMediaQueryStyles() {
    if (window.innerWidth <= 768) {
      return {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: "0", // Remove the left margin on smaller screens
      };
    }
    return {};
  }
});

export default Intro;
