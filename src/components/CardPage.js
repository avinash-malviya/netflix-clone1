import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Container,Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=>({
  root: {
    marginLeft:270,  
    backgroundColor:theme.palette.grey[200],
    maxWidth:1050,
   display: "grid",
  gridTemplateColumns: "auto auto auto",
  },
  media: {
    height: 140,
  },
  card:{
    width:300,
    margin:10,
  }
}));

export default function MediaCard() {

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
              <div>
     <Card className={classes.card}>
      <CardActions>
            <IconButton>
      < CloseIcon/>
      </IconButton>

      </CardActions>
      <CardActionArea> 
        <CardContent>
             
        <Typography variant="body1"> {val.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {val.summary}
          </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
            {val.published}
          </Typography>
         
        </CardContent>
        <CardMedia className={classes.media}>
          {val.link}
        </CardMedia>
      </CardActionArea>
      </Card>
       </div>
                )

              })
            }  
        
    </Container> 


  );
}
