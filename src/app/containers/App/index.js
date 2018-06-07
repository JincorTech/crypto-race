import * as React from 'react';
import cx from 'classnames';

import s from './styles.css';

import Garage from '../Garage';

export default class App extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Garage />
      </div>
    )
  }
}