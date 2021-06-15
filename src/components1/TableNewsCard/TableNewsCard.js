import React, { useState } from "react";
import axios from 'axios'
import Card from '@material-ui/core/Card';
import {Container,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
    root: {
      maxWidth: 354,
      height: 350,
    },
    media: {
      height: 140,
    },
    close:{
      float: "right"
    },
    card:{
        backgroundColor:"white",
        //padding:"10",
        marginBottom:"10px",
        marginLeft:"5%",
    },
    paper: {
        position: 'absolute',
        //width: "80%",
        //backgroundColor: "white",
        border: '2px solid #000',
        //boxShadow: theme.shadows[5],
        //padding: theme.spacing(2, 4, 3),
      }
  });
  
  function getModalStyle() {
    const top = 50;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
const NewsCard = (props) => {
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);
  
      const [open, setOpen] = React.useState(false);
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  const [secondary, setSecondary] = React.useState(false);
  let history = useHistory();
  const classes = useStyles();
  let cardDetails = props.newsDetails;
  const [newsCard, setNewsCard] = useState({
    id:cardDetails.id,
    title: cardDetails.title,
    summary: cardDetails.summary,
    published: cardDetails.published,  
    link: cardDetails.link,
    image: cardDetails.image,
    showCard: true
  });
  const { id, title, summary, published, link, image, showCard } = newsCard;
  const deleteUser = (id)=>{
    console.log("user to delete"+id);  
    // implement delete functionality here
  }
  return (
<div>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <iframe height="900" width="900" src={link}></iframe>
          
        </div>
      </Modal>
      <ListItem className={classes.card} onClick={handleOpen}>
                  <ListItemAvatar>
                    <Avatar src ={image != undefined ? image : "https://www.first.org/_/img/1st-podcasts-2019.jpg"}>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={title}
                    secondary={ summary != undefined ? summary.substr(0,250)+"...":"" }
                  />
                  {/* <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => { deleteUser(id) }}>
                      <CloseIcon />
                    </IconButton>
                  </ListItemSecondaryAction> */}
                </ListItem>
</div>
    

  );
};
export default NewsCard;