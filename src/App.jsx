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
import Login from './components/Login';

export default function App() {
  return (
    <div className="AppContent">
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/boxes/:boxId" component={Box} />
          <Route path="/descriptions/:descriptionId" component={Description} />
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
