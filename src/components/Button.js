import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Container,Card,CardContent,Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      maxWidth:220,
      marginTop:20,
    },
    cardstyle: {
    width:220,
    marginTop:20,
    paddingLeft:20,
      },
      button:{
      backgroundColor: "#4aedc4",
      }
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
    <Card className={classes.cardstyle}>
    <CardContent>
    <Typography variant="h6">
     Have a Feedback?
     </Typography>
      <Button className={classes.button} variant="contained"  color="primary">We're Listening! </Button>
       </CardContent>
    </Card>

    </Container>
  );
}
