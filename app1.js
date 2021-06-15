import React from 'react';
import './styles/App.css';
import { Box,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components/Sidebar'; 
import Grid from './components/Grid'; 
import Card from './components/Card'; 
import Card3 from './components/Card3'; 
import ToggleButton from './components/ToggleButton'; 
import Button from './components/Button'; 
import CardPage from './components/CardPage'; 
import NewsPage from './components/NewsPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  
  return (
     <Router>
      <div className="App">
      <Sidebar/>
  
      <Switch>
      <Route exact path ='/' component = {CardPage}></Route>
      <Route exact path ='/newspage' component = {NewsPage}></Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;


