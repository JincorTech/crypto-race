import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import routes from '../../routes';

import Garage from '../Garage';
import Fuel from '../Fuel';
import Game from '../Game';
import MainPage from '../MainPage';

import s from './styles.css';

class Main extends Component {
  render() {
    return (
      <div className={s.container}>
        <Route exact path="/" render={() => <Redirect to={routes.main} />} />
        <Route exact path={routes.main} component={MainPage} />
        <Route exact path={routes.garage} component={Garage} />
        <Route exact path={routes.fuel} component={Fuel} />
        <Route exact path={routes.game} component={Game} />
      </div>
    );
  }
}

export default withRouter(Main);
