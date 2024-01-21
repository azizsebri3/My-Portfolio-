import React, { useState, useEffect, Fragment } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Intro from "./Intro";
import TemporaryDrawer from "./TemporaryDrawer"; // Import the TemporaryDrawer component
import "../style.css";

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
    } else if (scrollPosition > introOffset && scrollPosition < skillsOffset) {
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

  const isSmScreen = useMediaQuery("(max-width:765px)");

  const styleNavBar = {
    background: "rgba(255, 255, 255, 0)",
    position: "fixed",
    margin: "0px",
  };

  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <AppBar position="static" style={styleNavBar}>
        <Toolbar>
          {isSmScreen ? (
           <Fragment>
              <TemporaryDrawer introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef} />
           </Fragment>
          ) : (
            <Tabs
              sx={{ marginLeft: isSmScreen ? "5%" : "35%" }}
              textColor="inherit"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: { backgroundColor: "#E89E6F" },
              }}
            >
              <Tab onClick={() => executeScroll(introRef)} id="intro" label="Intro" />
              <Tab onClick={() => executeScroll(aboutRef)} id="about" label="About" />
              <Tab onClick={() => executeScroll(skillsRef)} id="skills" label="Skills" />
              <Tab /*  onClick={() => executeScroll(introRef)} */ id="projects" label="Projects" />
              <Tab /* onClick={() => executeScroll(introRef)} */ id="contact" label="Contact" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
