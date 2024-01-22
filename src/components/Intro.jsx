import React, { forwardRef, useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Logo from "./logo";
import { motion, useAnimation } from "framer-motion";
import "../style.css";
import { useMediaQuery } from "@mui/material";

const Intro = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showIntro = () => {
      controls.start({ opacity: 1, x: 0 });
      setIsVisible(true);
    };

    // Set the initial animation state after a delay
    setTimeout(showIntro, 300); // Adjust the delay time as needed

    return () => {
      // Clean up if needed
    };
  }, [controls]);

  const [typeEffect] = useTypewriter({
    words: ["Aziz Sebri "],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  const isSm = useMediaQuery("(max-width:765px)");

  const introStyles = isSm
    ? {
        display: "flex",
        flexDirection: "column",
        margin: 60,
        alignItems: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: "18px",
        textAlign: "center",
      }
    : {
        display: "flex",
        height: "100vh",
        marginLeft: "200px",
        flexWrap: "wrap",
        alignContent: "stretch",
        justifyContent: "space-evenly",
        alignItems: "center",
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
    ...(isSm && { textAlign: "center" }),
  };

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      ref={ref}
      style={introStyles}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 style={headingStyles}>
        Hi There! <p className="wave">👋🏻 </p> <br />
        <span style={subheadingStyles}>
          {" "}
          <span style={{ color: "white ", ...(isSm && { fontSize: "35px" }) }}>
            I am{" "}
          </span>
          <span style={{ ...(isSm && { fontSize: "35px" }) }}>
            {typeEffect}
          </span>
        </span>
        <p style={paragraphStyles}>
          I'm passionate about the MERN stack! 🚀<br />
          Currently diving deep into <br />
          MongoDB, Express.js, React.js <br />
          full-stack development. Let's create something amazing together! 🔧✨
        </p>
      </h1>

      <Logo />
    </motion.section>
  );
});

export default Intro;
