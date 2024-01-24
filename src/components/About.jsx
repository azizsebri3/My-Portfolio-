import React, { forwardRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const About = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = window.innerHeight / 2;

      // setIsVisible ll framer motion bech ye5dem fi kol mara
      scrollY > threshold && setIsVisible(true)
        
      
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
    padding: "0 10px",
    alignText: "center",
  };

  const headingStyles = {
    fontSize: "2.9em",
    color: "white",
    paddingBottom: "20px",
    paddingTop: "100px",
  };

  const sectionStyles = {
    width: "100%",
    paddingBottom: "20px",
  };

  const spanStyles = {
    color: "white",
    fontSize: "2em",
  };
  const isSm = useMediaQuery("(max-width:765px)");

  const textStyle = {
    fontSize: "20px",
    fontFamily: "sans-serif",
    color: "white",
    maxWidth: "1000px",
    ...(!isSm && {
      paddingLeft: "70px"
    }),
    paddingTop: "20px"
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
        <span style={spanStyles}>
          <b>🖥️ Academic Background: </b>
        </span>
        <p style={textStyle}>
          Exploring the complexities of algorithms and data structures at the
          Higher Institute of Computer Science of Mahdia, I've mastered crucial
          skills in C++ and Python, solidifying a robust foundation in
          theoretical concepts and practical applications.
        </p>
      </div>

      <div style={sectionStyles}>
        <span style={spanStyles}>
          <b>💡 Innovation and Creativity: </b>
        </span>
        <p style={textStyle}>
          Driven by a passion for innovation, I believe in tackling challenges
          with fresh perspectives. I developed a machine learning model to
          predict customer churn, significantly improving retention rates at a
          local startup.
        </p>
      </div>

      <div style={sectionStyles}>
        <span style={spanStyles}>🔧 Problem-Solving Skills:</span>
        <p style={textStyle}>
          With a knack for analytical thinking and a proven track record of
          success in problem-solving, I have consistently approached complex
          issues with a strategic mindset. This ability has not only
          contributed to my academic achievements but has also been honed
          through active participation in events like IEEEXtreme 17.0💻, where I
          secured the 34th place among 986 Tunisian teams and rank 1095 among
          the 7901 teams worldwide in IEEEXtreme.
        </p>
      </div>
    </motion.div>
  );
});

export default About;
