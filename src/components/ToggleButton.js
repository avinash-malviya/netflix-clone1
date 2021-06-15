import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import ViewListIcon from '@material-ui/icons/ViewList';
import {Container,Card,CardContent,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const  useStyles = makeStyles((theme) => ({
  cardstyle: {
  
    width:220,
    textAlign :'center',
    height:120,
   marginTop:20,

      },
  togglebuttongroup:{
    marginTop:10,
  }
}));
export default function ToggleButtons() {
  const classes = useStyles();


  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  }; 

  return (
    <Container>
    <Card className={classes.cardstyle}>
    <CardContent>
    <Typography variant="h6">
     View Toggle
     </Typography>
    <ToggleButtonGroup className={classes.togglebuttongroup}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment" 
    >
      <ToggleButton value="left" aria-label="left aligned" color="primary">
        <FormatAlignLeftIcon />
      </ToggleButton>

      <ToggleButton value="list" aria-label="list">
    <ViewListIcon />
  </ToggleButton>
      
    </ToggleButtonGroup>
    </CardContent>
    </Card>

    </Container>

  );
}
