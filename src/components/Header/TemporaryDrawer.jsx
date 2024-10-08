import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { motion } from 'framer-motion';

const sections = ['Intro', 'About', 'Skills','Projects','Contact'];

const icons = [<PlayArrowIcon />, <InfoIcon />, <CodeIcon />,<AppsRoundedIcon />, <MailIcon />];

const TemporaryDrawer = ({ introRef, aboutRef, skillsRef,projectsRef,contactRef }) => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const list = (anchor) => (
    <motion.div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <List>
        <CloseIcon sx={{ float: 'top' }}></CloseIcon>
        {sections.map((text, index) => (
          <motion.div key={text} layout>
            <ListItem disablePadding>
              <motion.div whileHover={{ scale: 1.1 }}>
                <ListItemButton onClick={() => scrollToSection([introRef, aboutRef, skillsRef,projectsRef, contactRef][index])}>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </motion.div>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </motion.div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{ color: 'white', paddingRight: '50px' }} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
