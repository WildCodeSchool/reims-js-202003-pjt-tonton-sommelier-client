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
import Questions from './components/Questions';
import DebutJeu from './components/DebutJeu';
import PageScan from './components/PageScan';
import ChoixQuestion1 from './components/ChoixQuestion1';
import Reponse from './components/Reponse';
import SessionNamePage from './components/SessionName';
import Eyes from './components/Eyes';
import Nose from './components/Nose';

export default function App() {
  return (
    <div className="AppContent">
      <Router>
        <Switch>
          <Route path="/nez" component={Nose} />
          <Route path="/vue" component={Eyes} />
          <Route path="/reponse" component={Reponse} />
          <Route path="/questions" component={Questions} />
          <Route path="/home" component={HomePage} />
          <Route path="/boxes/:boxId" component={Box} />
          <Route path="/descriptions" component={Description} />
          <Route path="/register" component={Register} />
          <Route path="/debutjeu" component={DebutJeu} />
          <Route path="/sessionname" component={SessionNamePage} />
          <Route path="/login" component={Login} />
          <Route path="/scan" component={PageScan} />
          <Route path="/choixquestion1" component={ChoixQuestion1} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
