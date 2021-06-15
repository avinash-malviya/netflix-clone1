import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Modal from '@material-ui/core/Modal';
import Feedback from '../Feedback/Feedback';
import { createStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    //width: "80%",
    //backgroundColor: "white",
    border: '10px solid white',
    borderRadius: "10px",
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },
  feedback:{
    border: '2px solid white',
    borderRadius: "10px",
    backgroundColor:"white",
    color: "black",
    padding: "10px"
  },
  feedbackButton:{
    border: '4px solid aquamarine',
    backgroundColor:"aquamarine",
    borderRadius: "10px",
    padding: "2px"
  },
  viewButton:{
    padding:"5px",
    backgroundColor: "aquamarine",
    marginLeft: "2px",
    width: "10px",
    hight:"10px"
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: "60%"
  };
}

function Navbar() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <Feedback></Feedback>
          
        </div>
      </Modal>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        
        <nav className={'nav-menu active'}>

          <ul className='nav-menu-items' onClick={showSidebar}>
          <div className={classes.feedback}>
                      <center>
                      <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Hi Reader"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Here is your news
                        </Typography>
                        
                      </React.Fragment>
                    }
                  />
                </ListItem>
                      </center>
            </div>
            <br/>
            <div className={classes.feedback}>
            <center>
              <h2>View Toggle </h2>
              <Link  className={classes.viewButton} to="/">< AppsIcon fontSize="large"/></Link>
              <Link className={classes.viewButton} to="/tablenews">< ListIcon fontSize="large"/></Link>    
              
            </center>
            </div>
            <br/>
            <div className={classes.feedback}>
            <center>
            <h2>Have a Feedback ?</h2>
            <button className={classes.feedbackButton} type="button" onClick={handleOpen}>
            We are listening
            </button>
            </center>
            </div>
          </ul>
        </nav>
        <div>
          
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;