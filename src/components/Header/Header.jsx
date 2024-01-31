import React, { useState, useEffect, Fragment } from "react";
import { AppBar, Tabs, Tab, Toolbar, useMediaQuery } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";
import "../../style.css";

const Header = ({ introRef, aboutRef, skillsRef, contactRef }) => {
  const [value, setValue] = useState(0);
  const [navColour, updateNavbar] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const introOffset = introRef.current?.offsetTop || 0;
    const aboutOffset = aboutRef.current?.offsetTop || 0;
    const skillsOffset = skillsRef.current?.offsetTop || 0;
    const contactOffset = contactRef.current?.offsetTop || 0;

    if (scrollPosition < aboutOffset) {
      setValue(0); // Intro
    } else if (scrollPosition > introOffset && scrollPosition < skillsOffset) {
      setValue(1); // About
    } else if (scrollPosition > aboutOffset && scrollPosition < contactOffset) {
      setValue(2); // Skills
    } else {
      setValue(3); // Contact
    }

    // Update navbar color
    scrollPosition >= 20 ? updateNavbar(true) : updateNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSmScreen = useMediaQuery("(max-width:765px)");

  const styleNavBar = {
    backgroundColor: `rgba(255, 255, 255, ${navColour ? 1 : 0})`,
    margin: "0px",
    backdropFilter: `blur(${navColour ? 5 : 0}px)`,
    transition: "backdrop-filter 0.3s ease",
    position: "fixed",
    width: "100%",
    left: 0,
    zIndex: 1000,
  };

  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <AppBar style={styleNavBar}>
        <Toolbar>
          {isSmScreen ? (
            <Fragment>
              <TemporaryDrawer introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} />
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
              <Tab onClick={() => executeScroll(contactRef)} id="contact" label="Contact" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
