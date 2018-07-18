import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import routes from '../../routes';

import Garage from '../Garage';
import Fuel from '../Fuel';
import Header from '../../components/main/Header';
import Footer from '../../components/main/Footer';
import Game from '../Game';
import MainPage from '../MainPage';
// import ScrollToTop from './ScrollToTop';

import s from './styles.css';

// TODO FIX THAT

const withHeader = (WrappedComponent) => (
  <React.Fragment>
    <Header />
      <div className={s.main}>
        <WrappedComponent/>
      </div>
    <Footer />
  </React.Fragment>
);

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

const ComponentWithRouter = withRouter(Main);
export default ComponentWithRouter;
