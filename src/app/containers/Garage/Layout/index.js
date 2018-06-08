import * as React from 'react';
import s from './styles.css';

import User from '../User';
import ShipSettings from '../ShipSettings';

export default class Layout extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.userContainer}>
          <User />
        </div>
        <div className={s.shipSettingsContainer}>
          <ShipSettings />
        </div>
      </div>
    )
  }
}