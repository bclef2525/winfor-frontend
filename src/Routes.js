import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/";
import Signup from "./Pages/Signup/";
import Signin from "./Pages/Login/";
import StaticsChampions from "./Pages/StaticsChampions/StaticsChampions";
import StaticsTiers from "./Pages/StaticsTiers";
import MyMatchList from "./Pages/MyMatchList/MyMatchList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Signin} />
          <Route exact path="/MyMatchList" component={MyMatchList} />
          <Route
            exact
            path="/StaticsChampions/:name"
            component={StaticsChampions}
          />
          <Route exact path="/StaticsTiers/:name" component={StaticsTiers} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
