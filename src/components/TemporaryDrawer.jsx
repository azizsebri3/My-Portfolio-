import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function TemporaryDrawer({ introRef, aboutRef, skillsRef }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const listItems = [
    { text: 'Intro', icon: <MenuIcon /> },
    { text: 'About', icon: <PlayArrowIcon /> },
    { text: 'Skills', icon: <WorkspacePremiumIcon /> },
  ];

  const list = (
    <Box
      sx={{
         width: 350,
         color : '#EAA16E',
         fontWeight: 'bold',
         display : 'flex' , 
         justifyContent : 'center',
         fontSize : '35px' ,


        }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
      

    >
    <List>
      {listItems.map((item, index) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={() => executeScroll(item.text)}>
            {item.icon && <span>{item.icon}</span>}
            <ListItemText sx={{fontWeight: 'medium'}} primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </Box>
  );

  const executeScroll = (section) => {
    let ref;
    switch (section) {
      case 'Intro':
        ref = introRef;
        break;
      case 'About':
        ref = aboutRef;
        break;
      case 'Skills':
        ref = skillsRef;
        break;
      default:
        ref = null;
    }

    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Button style={{color : 'white' , marginLeft: '-27px'}} onClick={toggleDrawer('left', true)}><MenuIcon  /></Button>
      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list}
      </Drawer>
    </div>
  );
}
