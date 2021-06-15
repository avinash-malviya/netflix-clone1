import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Container,Grid} from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import image from './im1.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
   cardstyle: {
  width:220,
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap", 
  marginTop:50,
},
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <Container>
    <Grid container spacing  direction ="column">
    <Card className={classes.cardstyle}>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary="Hi Reader"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary" >
                Here's your News!
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Card>
       </Grid>
  </Container>

  );
}
