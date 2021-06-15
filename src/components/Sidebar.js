import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card3 from './Card3'; 
import ToggleButton from './ToggleButton'; 
import Button from './Button'; 

const drawerWidth = "30vw";

const useStyles = makeStyles((theme) => ({
  root: {
  
  },

  drawer: {
    width: drawerWidth,

  },
  container:{
     backgroundColor:theme.palette.grey[200],
      height:'100vh',
      padingTop:30,

  }
  
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer}
        variant="permanent"
        anchor="left">
        <Container className = {classes.container}>
          <Grid container spacing={5} direction ="column">
        <List className="list">
          <Card3/>
        </List>
        <List className="list">
          <ToggleButton/>
        </List>
        <List className="list">
          <Button/>
        </List>

      </Grid>
      </Container>
    </Drawer>

    </div>
  );
}
