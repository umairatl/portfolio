import "../navbar/navbar.css";
import pdf from "../../assets/Resume(Umairatul).pdf";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemTetxt';

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="top-up-wrap">
        {['Portfolio Content'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} classes='item-text-wrap'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* {['Resume', 'Project', 'About Me'].map((text, index) => ( */}
          <ListItem className="list-item-wrap"  disablePadding>
            <ListItemButton>
              <ListItemText className="nav-side-item">
              <a  href="#resume">
              About Me
            </a>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem className="list-item-wrap"  disablePadding>
            <ListItemButton>
              <ListItemText  className="nav-side-item">
              <a  href="#project">
              Projects
            </a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          
          <ListItem className="list-item-wrap" disablePadding>
            <ListItemButton>
              <ListItemText  className="nav-side-item">
              <a href={pdf} download>
              Resume
            </a>
                </ListItemText>
            </ListItemButton>
          </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );
        

  return (
    <div>
      <div className="first-col">
        <nav className="nav-up">
          <div className="vis">
            <h1 className="font-burtons text-xl">developedbyuab</h1>
          </div>
          <ul className="nav-right">
            <a className="nav-text" href="#resume">
              About Me
            </a>
            <a className="nav-text" href="#project">
              Projects
            </a>
            <a className="nav-text" href={pdf} download>
              Resume
            </a>
          </ul>
        </nav>
      </div>

      <div className="nav-mobile">
      <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="top">

<div className="left-side">
          {/* <button onClick={toggleDrawer(anchor, true)} className='btn-sidenav'>≡</button> */}
          <button onClick={toggleDrawer(anchor, true)} className='btn-sidenav'>test</button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          </div>
<div className="right-side">developedbyuab</div>
</div>
        </React.Fragment>
      ))}
</div>
    </div>
        </div>
  );
};

export default Navbar;
