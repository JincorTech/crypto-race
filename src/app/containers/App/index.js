import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import s from './styles.css';

import routes from 'routes';
import Garage from '../Garage';
import Fuel from '../Fuel';
import Header from './Header';
import Footer from './Footer';
import Game from '../Game';

const withHeader = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <div className={s.main}>
            <WrappedComponent/>
          </div>
          <Footer />
        </React.Fragment>
      )
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.container}>
          <Route exact path="/" render={() => <Redirect to={routes.garage} />} />
          <Route exact path={routes.garage} component={withHeader(Garage)} />
          <Route exact path={routes.fuel} component={withHeader(Fuel)} />
          <Route exact path={routes.game} component={Game} />
        </div>
      </Router>
    )
  }
}