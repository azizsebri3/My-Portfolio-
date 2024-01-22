import React, { forwardRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Logo from "./logo";
import "../style.css"
import {useMediaQuery} from "@mui/material"

const Intro = forwardRef((props, ref) => {
  const [typeEffect] = useTypewriter({
    words: ["Aziz Sebri "],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  const isSm = useMediaQuery("(max-width:765px)");
  const introStyles = isSm
  ? {
      display: 'flex',
      flexDirection: 'column',
      margin: 60,
      alignItems: 'center',
      fontWeight: 'bold',
      color: 'white',
      fontSize: '18px',
      textAlign: 'center'
    }
  : {
      display: 'flex',
      height: '100vh',
      marginLeft: '200px',
      flexWrap: 'wrap',
      alignContent: 'stretch',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      
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
    color: "white",
    fontSize: "20px",
    textAlign: {}, // Center text
    ...(isSm &&{textAlign : "center"}) , 
  };
  

  // Media query for screens with a width less than or equal to 768px
  const mediaQuery = `@media (max-width: 765px) {
    display : flex ; 
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0; // Remove the left margin on smaller screens
    margin-top : auto ; 
    
  }`;

  return (
    <section ref={ref} style={introStyles}> 
      <h1 style={headingStyles}>
        Hi There! <p className="wave">👋🏻 </p>  <br />
        <span style={subheadingStyles}>
          {" "}
          <span style={{ color: "white " , ...(isSm &&{fontSize : "35px"}) ,   }}>I am </span>
          <span style={{...(isSm &&{fontSize : "35px"})}}>{typeEffect}</span>
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
