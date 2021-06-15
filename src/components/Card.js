import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid,Typography,Card} from '@material-ui/core';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActionArea from '@material-ui/core/CardActionArea';
import image from './im1.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft:270,
    width : "78vw",
    backgroundColor:theme.palette.grey[200],
  },
  media: {
    height: 100,
    width:180,
    marginBottom:20,
    marginLeft:20,

  },
  cardstyle: {
  width:220,
  flexWrap: "wrap",
  marginTop:30,
  marginLeft:50,
},

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  

  return (
    <Container className={classes.root}>
    <Grid container spacing ={2}>
    <Grid item sm = {4}>
    <Card className={classes.cardstyle}>
      <CardHeader action ={ 
        <IconButton>
      < CloseIcon/>
      </IconButton>
      }/>
      <CardActionArea>
      <CardContent>
      <Typography variant="subtitle2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
         </Typography>
      <Typography variant = "body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
      </Typography>
      <Typography variant = "body2" color="textSecondary" component="p">
        "September 14, 2016"
      </Typography>
      </CardContent>
      
      <CardMedia
          className={classes.media}
          image={image}
        />
      </CardActionArea>

    </Card>
    </Grid>
    
      <Grid item sm = {4}>
    <Card className={classes.cardstyle}>
      
      <CardHeader action ={ 
        <IconButton>
      < CloseIcon/>
      </IconButton>
      }/>
      
      <CardActionArea>
      <CardContent>
      <Typography variant="subtitle2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
         </Typography>
      <Typography variant = "body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
      </Typography>
      <Typography variant = "body2" color="textSecondary" component="p">
        "September 14, 2016"
      </Typography>
      </CardContent>
      
      <CardMedia
          className={classes.media}
          image={image}
        />
      </CardActionArea>

    </Card>
    </Grid>
        <Grid item sm = {4}>
    <Card className={classes.cardstyle}>
    <CardHeader action ={ 
        <IconButton>
      < CloseIcon/>
      </IconButton>
      }/>
      
      <CardActionArea>
      <CardContent>
      <Typography variant="subtitle2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
         </Typography>
      <Typography variant = "body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
      </Typography>
      <Typography variant = "body2" color="textSecondary" component="p">
        "September 14, 2016"
      </Typography>
      </CardContent>
      <CardMedia
          className={classes.media}
          image={image}
        />
      </CardActionArea>

    </Card>
    </Grid>

     <Grid item sm = {4}>
    <Card className={classes.cardstyle}>
     <CardHeader action ={ 
        <IconButton>
      < CloseIcon/>
      </IconButton>
      }/>
      <CardActionArea>
      <CardContent>
      <Typography variant="subtitle2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
         </Typography>
      <Typography variant = "body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
      </Typography>
      <Typography variant = "body2" color="textSecondary" component="p">
        "September 14, 2016"
      </Typography>
      </CardContent>
      
      <CardMedia
          className={classes.media}
          image={image}
        />
      </CardActionArea>

    </Card>
    </Grid>
    
      <Grid item sm = {4}>
    <Card className={classes.cardstyle}>
      
    <CardHeader action ={ 
        <IconButton>
      < CloseIcon/>
      </IconButton>
      }/>
      <CardActionArea>
      <CardContent>
      <Typography variant="subtitle2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
         </Typography>
      <Typography variant = "body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
      </Typography>
      <Typography variant = "body2" color="textSecondary" component="p">
        "September 14, 2016"
      </Typography>
      </CardContent>
      
      <CardMedia
          className={classes.media}
          image={image}
        />
       </CardActionArea>

    </Card>
    </Grid>
        <Grid item sm = {4}>
    <Card className={classes.cardstyle}>
     <CardHeader action ={ 
        <IconButton>
      < CloseIcon/>
      </IconButton>
      }/>
      
      <CardActionArea>
      <CardContent>
      <Typography variant="subtitle2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
         </Typography>
      <Typography variant = "body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish..... 
      </Typography>
      <Typography variant = "body2" color="textSecondary" component="p">
        "September 14, 2016"
      </Typography>
      </CardContent> 
      <CardMedia
          className={classes.media}
          image={image}
        />
      </CardActionArea>

    </Card>
    </Grid>


    </Grid>
</Container>
  );
}
