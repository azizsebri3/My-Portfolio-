import React, { useState, useEffect } from "react";
import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import Intro from "./Intro"

const Header = ({ introRef, aboutRef, skillsRef }) => {
  const [value, setValue] = useState(0);
  const [navColour, updateNavbar] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const introOffset = introRef.current?.offsetTop || 0;
    const aboutOffset = aboutRef.current?.offsetTop || 0;
    const skillsOffset = skillsRef.current?.offsetTop || 0;

    if (scrollPosition < aboutOffset) {
      setValue(0); // Intro
    } else if ( scrollPosition > introOffset && scrollPosition < skillsOffset) {
      setValue(1); // About
    } else {
      setValue(2); // Skills
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  window.addEventListener("scroll", scrollHandler);

  const styleNavBar = {
    background: `rgba(255, 255, 255, 0)`,
    padding: "5px",
    borderRadius: "10px",  
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0)",
    position: "fixed",
  };

const executeScroll = (ref) => ref.current.scrollIntoView({ behavior : 'smooth'})  ; 
  

  return (
    <>
      <AppBar position="static" style={styleNavBar} className={navColour ? "sticky" : "navbar"} >
        <Toolbar>
          <Tabs
            sx={{ marginLeft: "35%" }}
            textColor="inherit"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { backgroundColor: "#E89E6F", },
            }}
          >
            <Tab onClick={() => executeScroll(introRef)} id="intro" label="Intro" />
            <Tab onClick={() => executeScroll(aboutRef)} id="about" label="About" />
            <Tab onClick={() => executeScroll(skillsRef)} id="skills" label="Skills" />
            <Tab /*  onClick={() => executeScroll(introRef)} */ id="projects" label="Projects" />
            <Tab /* onClick={() => executeScroll(introRef)} */  id="contact" label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
