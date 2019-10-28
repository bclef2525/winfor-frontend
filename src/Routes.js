import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './Pages/Main/';
import Signup from './Pages/Signup/';
import Signin from './Pages/Login/';
import StaticsChampions from './Pages/StaticsChampions';
import StaticsTiers from './Pages/StaticsTiers';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Signin} />
          <Route exact path="/Statics/Champions" component={StaticsChampions} />
          <Route exact path="/Statics/Tiers" component={StaticsTiers} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
