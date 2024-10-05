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

      // Trigger visibility for the framer motion animation
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
    textAlign: "center",
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
    fontSize: "2em",
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
    flex: "0 1 100%",
    maxWidth: isSm ? "100%" : "580px",
    height: "auto",
    display: "flex",
    justifyContent: "flex-end", // Align to the right
    paddingTop: "30px",
    paddingBottom: "50px",
    position: "relative",
    overflow: "hidden", // Hide overflow to prevent placeholder from being visible
    border: "1.3px solid rgba(255, 255, 255, 0.637) ",
    boxShadow: "2px 5px 8px 8px rgba(244, 237, 229, 0.137)",
    borderRadius: "50%",
  };

  return (
    <motion.div ref={ref} style={containerStyles} variants={containerVariants}>
      <h1 style={headingStyles}>
        LET ME <span style={{ color: "#EAA16E" }}> INTRODUCE </span> MYSELF
      </h1>

      <div style={sectionStyles}>
        <span style={spanStyles}>🖥️ Academic Background:</span>
        <p style={textStyle}>
          Currently pursuing a Bachelor's degree in Computer Science at the University of Namur, Belgium. I have expanded my skills in full-stack development, working with technologies like React.js, Node.js, and MongoDB, and have deepened my knowledge in data structures, algorithms, and web development.
        </p>
      </div>

      <div style={sectionStyles}>
        <span style={spanStyles}>💡 Full-Stack Development and Innovation:</span>
        <p style={textStyle}>
          With a passion for full-stack development, I have completed various projects, including an e-commerce platform using the MERN stack (MongoDB, Express, React, Node.js). My approach to development combines technical expertise with innovative problem-solving to deliver optimized solutions for clients.
        </p>
      </div>
      <div>
        <img
          src={Ai}
          alt="AI research and projects"
          style={imageStyles}
          className="logoImage"
        />
      </div>

      <div style={sectionStyles}>
        <span style={spanStyles}> 🔧 Problem-Solving and Competitive Programming: </span>
        <p style={textStyle}>
          My problem-solving skills have been honed through various competitions, where I ranked <b style={{ color: "#EAA16E" }}>34th in IEEEXtreme 17.0</b> among 986 teams in Tunisia, and <b>1095th</b> worldwide among 7901 teams. Additionally, I am actively working on improving my algorithmic skills through platforms like LeetCode and HackerRank.
        </p>
      </div>
      <div>
        <img src={IEEE} alt="IEEE competition ranking" style={imageStyles} />
      </div>
    </motion.div>
  );
});

export default About;
