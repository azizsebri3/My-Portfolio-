import React, { forwardRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import IEEE from "../assets/IEEE.jpg";
import Ai from "../assets/Ai.jpg";

const About = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = window.innerHeight / 2;

      // setIsVisible ll framer motion bech ye5dem fi kol mara
      scrollY > threshold && setIsVisible(true);
    };

    // Set the initial animation state
    controls.start({ opacity: 0, y: 50 });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 20, transition: { duration: 0.8, delay: 0.2 } },
  };

  const containerStyles = {
    paddingTop: "20%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center vertically and horizontally
    padding: "0 10px",
    textAlign: "center", // Corrected typo in 'textAlign'
  };

  const headingStyles = {
    fontSize: "3.5em",
    color: "white",
  };

  const sectionStyles = {
    width: "100%",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const spanStyles = {
    color: "white",
    fontSize: "1.7em",
    fontWeight: "bolder",
    display: "flex",
    flexDirection: "column",
  };

  const isSm = useMediaQuery("(max-width:765px)");

  const textStyle = {
    fontSize: "20px",
    fontFamily: "Roboto, sans-serif",
    color: "white",
    maxWidth: "1000px",
    ...(!isSm && {
      paddingLeft: "500px",
    }),
    paddingTop: "20px",
  };

  const imageStyles = {
    ...(isSm
      ? { flex: "0 0 119%", maxWidth: "580px" }
      : { flex: "0 0 100%", maxWidth: "580px" }),
    height: "auto",
    display: "flex",
    justifyContent: "flex-end", // Align to the right
    borderRadius: "150px",
    paddingTop: "30px",
    paddingBottom: "30px",
    position: "relative", // Add position relative to the container
    overflow: "hidden", // Hide overflow to prevent placeholder from being visible
    '&:hover': {
      '.image-placeholder': {
        opacity: 1,
      },
      '.responsive-image': {
        transform: 'scale(1.1)',
      },
    },
  };
  
  // Add corresponding styles for AOS (Animate On Scroll) animation if needed
  const aosStyles = {
    '[data-aos="fade-up"]': {
      /* Your AOS styles here */
    },
  };
  

  
  

  return (
    <motion.div
      ref={ref}
      style={containerStyles}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 style={headingStyles}>
        LET ME <span style={{ color: "#EAA16E" }}> INTRODUCE </span> MYSELF
      </h1>

      <div style={sectionStyles}>
        <span style={spanStyles}>🖥️ Academic Background:</span>
        <p style={textStyle}>
          Studying at the Higher Institute of Computer Science of Mahdia, I've
          delved into the intricacies of algorithms and data structures.
          Proficient in C++ and Python, I've built a strong foundation in both
          theoretical concepts and practical applications.
        </p>
      </div>

      <div style={sectionStyles}>
        <span style={spanStyles}>💡 Innovation and Creativity:</span>
        <p style={textStyle}>
          Driven by a passion for innovation, I believe in tackling challenges
          with fresh perspectives. I developed a machine learning model to
          predict customer churn, significantly improving retention rates at a
          local startup.
        </p>
      </div>
      <div>
        <img
          src={Ai}
          alt="Portfolio Photo"
          style={imageStyles}
          className="logoImage"
        />
      </div>

      <div style={sectionStyles}>
        <span style={spanStyles}> 🔧 Problem-Solving Skills: </span>
        <p style={textStyle}>
          I'm skilled at solving complex problems with a strategic mindset.
          Achieved success in academics and ranked 34th in IEEEXtreme 17.0💻
          among 986 Tunisian teams, 1095 worldwide among 7901 teams.
        </p>
      </div>
      <motion.div>
        <img src={IEEE} alt="Portfolio Photo" style={imageStyles} />
      </motion.div>
    </motion.div>
  );
});

export default About;
