import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PageCouverts from './components/CouvertsPages/PageCouverts';
import PageGout from './components/GoutPage/PageGout';
import PageHistoire from './components/HistoirePage/PageHistoire';
import PageNez from './components/NezPage/PageNez';
import PageRaisin from './components/RaisinPage/PageRaisin';
import PageRegion from './components/RegionPage/PageRegion';
import PageScan from './components/ScanPage/PageScan';
import PageTannin from './components/TanninPage/PageTannin';
import PageTonneau from './components/TonneauPage/PageTonneau';
import PageVue from './components/VuePage/PageVue';
import TypeWines from './components/WinesType/TypeWines';

export default function App() {
  return (

    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/couverts" component={PageCouverts} />
        <Route path="/gout" component={PageGout} />
        <Route path="/histoire" component={PageHistoire} />
        <Route path="/nez" component={PageNez} />
        <Route path="/raisin" component={PageRaisin} />
        <Route path="/region" component={PageRegion} />
        <Route path="/tannin" component={PageTannin} />
        <Route path="/tonneau" component={PageTonneau} />
        <Route path="/vue" component={PageVue} />
        <Route path="/wine" component={TypeWines} />
        <Route path="/" component={PageScan} />
      </Switch>
    </Router>
  );
}
