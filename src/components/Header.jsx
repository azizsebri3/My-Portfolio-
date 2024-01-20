import React, { useState, useEffect } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import Intro from "./Intro";

const Header = ({ introRef, aboutRef, skillsRef }) => {
  const [value, setValue] = useState(0);
  const [navColour, updateNavbar] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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

  const isSmScreen = useMediaQuery("(max-width:600px)");

  const styleNavBar = {
    background: isSmScreen ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)",
    padding: "5px",
    borderRadius: "10px",
    margin: "0 auto",
    boxShadow: isSmScreen ? "0 0 10px rgba(0, 0, 0, 0.5)" : "0 0 10px rgba(0, 0, 0, 0)",
    position: "fixed",
  };

  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      <ListItem button component="div" onClick={() => { executeScroll(introRef); setDrawerOpen(false); }}>
        <ListItemText primary="Intro" />
      </ListItem>
      <ListItem button component="div" onClick={() => { executeScroll(aboutRef); setDrawerOpen(false); }}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component="div" onClick={() => { executeScroll(skillsRef); setDrawerOpen(false); }}>
        <ListItemText primary="Skills" />
      </ListItem>
      {/* Add more items as needed */}
    </List>
  );

  return (
    <>
      <AppBar position="static" style={styleNavBar} className={navColour ? "sticky" : "navbar"}>
        <Toolbar>
          {isSmScreen ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
            </>
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
            <Tab /* onClick={() => executeScroll(introRef)} */  id="contact" label="Contact" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
