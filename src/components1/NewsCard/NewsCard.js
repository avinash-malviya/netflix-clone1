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
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
    root: {
      maxWidth: 374,
      height: 350,
    },
    media: {
      height: 140,
    },
    close:{
      float: "right"
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
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let history = useHistory();
  let cardDetails = props.newsDetails;
  const [newsCard, setNewsCard] = useState({
    id:cardDetails.id,
    title: cardDetails.title,
    summary: cardDetails.summary,
    published: cardDetails.published,  
    link: cardDetails.link,
    image: cardDetails.image
  });

  const [showCard, setShowCard] = React.useState(true);
  const { id, title, summary, published, link, image } = newsCard;
  const deleteUser = (id)=>{
    console.log("user to delete"+id);  
    setShowCard(false);
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
      <Card className={classes.root} onClick={handleOpen}>
          <CardActionArea>
              <CardContent>
                  <div className={classes.close} onClick={() => { deleteUser(id) }}><CloseIcon fontSize="large" /> </div>
                  <Typography gutterBottom variant="h5" component="h5"> <b>{ title != undefined ? title.substr(0,50)+"...":"" }</b>
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                  { summary != undefined ? summary.substr(0,100)+"...":"" }
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {published}
                  </Typography>
              </CardContent>
              <CardMedia className={classes.media} image={image != undefined ? image : "https://www.first.org/_/img/1st-podcasts-2019.jpg"}>           
              </CardMedia>
          </CardActionArea>
        </Card>
    </div>
    

  );
};

export default NewsCard;