import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Garage from '../../garage/Garage';
import Fuel from '../../fuel/Fuel';
import Game from '../../game/Game';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/garage" component={Garage}/>
        <Route path="/fuel" component={Fuel}/>
        <Route path="/game" component={Game}/>
      </Switch>
    );
  }
}

export default withRouter(Main);
