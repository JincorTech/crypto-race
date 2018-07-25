import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import AppRoute from '../../../components/app/AppRoute';
import AppWrapper from '../AppWrapper';
import MainPage from '../MainPage';

import s from './styles.css';

class Main extends Component {
  render() {
    return (
      <div className={s.container}>
        <Route exact path="/" component={MainPage} />
        <AppRoute component={AppWrapper}/>
      </div>
    );
  }
}

export default withRouter(Main);
