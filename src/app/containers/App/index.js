import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import s from './styles.css';

import routes from 'routes';
import Garage from '../Garage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.container}>
          <Route exact path="/" render={() => <Redirect to={routes.garage}/>} />
          <Route exact path={routes.garage} component={Garage} />
        </div>
      </Router>
    )
  }
}