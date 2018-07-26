import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import AppRoute from '../../../components/app/AppRoute';
import AppWrapper from '../AppWrapper';
import MainPage from '../MainPage';

import s from './styles.css';

class Main extends Component {
  render() {
    return (
      <div className={s.container}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <AppRoute component={AppWrapper}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
