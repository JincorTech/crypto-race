import * as React from 'react';
import s from './styles.css';

import User from '../User';

export default class Layout extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.userContainer}>
          <User />
        </div>
      </div>
    )
  }
}