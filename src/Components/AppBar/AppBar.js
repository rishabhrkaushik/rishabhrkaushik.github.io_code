import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import "./AppBar.css"

class CustomAppBar extends Component{

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleDrawer = this.handleDrawer.bind(this)
  }

  handleDrawer(){
    this.setState({open: !this.state.open});
  };

  render(){
    return (
      <div>
        <AppBar>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu"  onClick={this.handleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Rishabh Kaushik
            </Typography>
            <div className="appbar-buttons">
              <Button color="inherit" href="https://drive.google.com/open?id=16SVIAxMAtndPNrYb_zQoiFPpt-VTz9sZ" target="_blank" rel="noopener noreferrer">
                Resume
              </Button>
              <Button color="inherit" href="#contact">
                Contact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={this.state.open}
        >
          <IconButton onClick={this.handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            <ListItem>
              <Button color="inherit" href="#summary">
                Summary
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" href="#experience">
                Experience
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" href="#skills">
                Skills
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" href="#projects">
                Projects
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" href="#certifications">
                Certifications
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" href="#contact">
                Contact
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default CustomAppBar;
