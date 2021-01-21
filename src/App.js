import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import {RandomizerProject, TierlistProject, ItemBuilderProject} from './Components/Projects/Projects';

import DeskTopBreakpoint from '../src/Components/Responsive Utilities/desktop_breakpoint';
import TabletBreakpoint from '../src/Components/Responsive Utilities/tablet_breakpoint';
import PhoneBreakpoint from '../src/Components/Responsive Utilities/phone_breakpoint';


function App() {
  return (
    <div>
    <Router basename='/smitesociety'>
    <Switch>
      <Route path='/' component={LandingPage} exact />
      <Route path="/smitesociety" component={LandingPage} />
      <Route path="/About" component={About}  />
      <Route path="/Randomizer" component={RandomizerProject}  />
      <Route path="/Tierlist" component={TierlistProject}  />
      <Route path="/ItemBuilder" component={ItemBuilderProject}  />
    </Switch>
    </Router>
    </div>
  );
}
export default App;
