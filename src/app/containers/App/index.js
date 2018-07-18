import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import s from './styles.css';

import routes from '../../routes';
import Garage from '../Garage';
import Fuel from '../Fuel';
import Header from './Header';
import Footer from './Footer';
import Game from '../Game';
import MainPage from '../MainPage';
import ScrollToTop from './ScrollToTop';

const withHeader = (WrappedComponent) => (
  <React.Fragment>
    <Header />
    <div className={s.main}>
      <WrappedComponent />
    </div>
    <Footer />
  </React.Fragment>
);

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className={s.container}>
            <Route exact path="/" render={() => <Redirect to={routes.main} />} />
            <Route exact path={routes.main} component={withHeader(MainPage)} />
            <Route exact path={routes.garage} component={withHeader(Garage)} />
            <Route exact path={routes.fuel} component={withHeader(Fuel)} />
            <Route exact path={routes.game} component={Game} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
