import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Card,Container,CardContent} from '@material-ui/core';

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
  },
  inline: {
    display: 'inline',
  },
  card:{
  marginBottom:50,
  marginLeft:270,
  width : "65vw",
  },
  container:{
  	   backgroundColor:theme.palette.grey[200],
  	   height:'50vw',
  	   paddingTop:50,
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
  	<Container className={classes.container}>
  	<Card className={classes.card}>
  	<CardContent>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary="..........................................."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors..........................................
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
     </List>
     </CardContent>
    </Card>

      	<Card className={classes.card}>
  	<CardContent>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary="..........................................."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors..........................................
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
     </List>
     </CardContent>
    </Card>

      	<Card className={classes.card}>
  	<CardContent>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary="..........................................."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors..........................................
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
     </List>
     </CardContent>
    </Card>
    </Container>
     
  );
}
