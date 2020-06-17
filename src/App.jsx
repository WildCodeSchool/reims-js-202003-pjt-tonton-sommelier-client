import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';

import PageScan from './components/PageScan';
import Description from './components/Description';
import Box from './components/Box';


export default function App() {
  return (

    <Router>
      <Switch>
        <Route path="/boxes/:boxId" component={Box} /> 
        <Route path="/descriptions/:descriptionId" component={Description} />
        <Route path="/" component={PageScan} />
      </Switch>
    </Router>
  );
}


