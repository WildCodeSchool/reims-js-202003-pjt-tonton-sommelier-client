import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/Home';
import Description from './components/Description';
import Box from './components/Box';
import Register from './components/Register';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/boxes/:boxId" component={Box} />
        <Route path="/descriptions/:descriptionId" component={Description} />
        <Route path="/register" component={Register} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
