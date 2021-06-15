import React from 'react';
import './App.css';
import Navbar from './components1/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './components1/Feedback/Feedback';
import TableNewsV2 from './components1/TableNews/TableNewV2';
import GridNews from './components1/GridNews/GridNews';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={GridNews} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/tablenews' component={TableNewsV2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;