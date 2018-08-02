import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Garage from '../../garage/Garage';
import Fuel from '../../fuel/Fuel';
import Game from '../../game/Game';
import Lobby from '../../garage/Lobby';

import s from './styles.css';

class AppWrapper extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/garage" component={Garage}/>
          <Route path="/fuel" component={Fuel}/>
          <Route path="/game" component={Game}/>
        </Switch>
        <div className={s.lobby}><Lobby/></div>
      </div>
    );
  }
}

export default withRouter(AppWrapper);
