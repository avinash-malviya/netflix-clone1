import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Container,Card} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';


import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles((theme) => ({


	root:{
		maxWidth:'78vw',
		marginLeft:270,
		backgroundColor:theme.palette.grey[200],

	},

	 cardstyle: {
	 	marginBottom:10,
	 	width:800,
  },
  list: {    
  },
  inline: {
    display: 'inline',
  },
  map:{
  	   display: "grid",
  gridTemplateColumns: "auto auto",

  },
  date:{
  	marginLeft:70,
  	
  }
}));





export default function AlignItemsList() {
  const classes = useStyles();

     const[users,setUsers]= useState([]);


  const getUsers = async ()=>{
    const response = await fetch("https://api.first.org/data/v1/news")
    const info = await response.json();
    console.log(info.data);
    setUsers(info.data);
    console.log(info.data);
  }
    useEffect(()=>{
    getUsers();
  },[])

  return (
  	<Container className={classes.root}>
  	  {
      users.map((val)=>{
            return (
              <div className={classes.map}>
              <div>
  	 <Card className={classes.cardstyle}>
    <List className={classes.list}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={val.link} />
        </ListItemAvatar>
        <ListItemText primary={val.title}
          secondary={
           
           <Typography component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary">
              {val.summary}
              </Typography>

              }
           />
      </ListItem>

    </List>
    <Typography className={classes.date}variant="body2" color="textSecondary">
              {val.published}
              </Typography> 
              

     </Card>
     </div>
     <div>
     <CardActions>
            <IconButton className="close">
      < CloseIcon/>
      </IconButton>

      </CardActions>
      </div>
      </div>
      )

              })
            }  
    </Container>
  );
}
