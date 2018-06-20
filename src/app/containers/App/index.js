import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import s from './styles.css';

import routes from 'routes';
import Garage from '../Garage';
import Fuel from '../Fuel';
import Header from './Header'
import Footer from './Footer'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.container}>
          <Header />
          <Route exact path="/" render={() => <Redirect to={routes.garage} />} />
          <Route exact path={routes.garage} component={Garage} />
          <Route exact path={routes.fuel} component={Fuel} />
          <Footer />
        </div>
      </Router>
    )
  }
}