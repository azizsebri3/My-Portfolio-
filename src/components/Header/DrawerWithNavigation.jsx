import * as React from 'react';
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
import { Typography, IconButton } from "@mui/material";

export function DrawerWithNavigation({ closeDrawer, scrollToSection, icons, Refs }) {
  const list = (
    <div
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        {['Intro', 'About', 'Skills', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => scrollToSection(Refs[index])}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Button style={{ color: "white", paddingRight: "50px" }} onClick={closeDrawer}><MenuIcon /></Button>
      <Drawer
        anchor="left"
        open={true} // Modify the open state as needed
        onClose={closeDrawer}
      >
        {list}
      </Drawer>
    </React.Fragment>
  );
}
