import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PageScan from './components/PageScan';
import PageRaisin from './components/PageRaisin';
import PageTonneau from './components/PageTonneau';
import PageCouverts from './components/PageCouverts';
import PageRegion from './components/PageRegion';
import PageHistoire from './components/PageHistoire';
import PageTannin from './components/PageTannin';
import PageVue from './components/PageVue';
import PageNez from './components/PageNez';
import PageGout from './components/PageGout';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="PageScan">Scan</Link>
              </li>

              <ul>
                <li><Link to="PageRaisin">Raisin</Link></li>
                <li><Link to="PageTonneau">Tonneau</Link></li>
                <li><Link to="PageCouverts">Couverts</Link></li>
                <li><Link to="PageHistoire">Histoire</Link></li>
                <li><Link to="PageRegion">Region</Link></li>
                <li><Link to="PageTannin">Tannin</Link></li>
                <li><Link to="PageVue">Vue</Link></li>
                <li><Link to="PageNez">Nez</Link></li>
                <li><Link to="PageGout">Goût</Link></li>
              </ul>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/PageScan" component={PageScan} />
            <Route path="/PageRaisin" component={PageRaisin} />
            <Route path="/PageTonneau" component={PageTonneau} />
            <Route path="/PageCouverts" component={PageCouverts} />
            <Route path="/PageHistoire" component={PageHistoire} />
            <Route path="/PageGout" component={PageGout} />
            <Route path="/PageTannin" component={PageTannin} />
            <Route path="/PageRegion" component={PageRegion} />
            <Route path="/PageVue" component={PageVue} />
            <Route path="/PageNez" component={PageNez} />
            <Route path="/" />
          </Switch>
        </div>
      </Router>

    </div>
  );
}
