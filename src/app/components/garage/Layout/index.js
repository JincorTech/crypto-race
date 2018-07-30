import * as React from 'react';
import s from './styles.css';

import User from '../../../containers/garage/User';
import ShipSettings from '../ShipSettings';
import Races from '../../../containers/garage/Races';

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
        <div className={s.racesContainer}>
          <Races />
        </div>
      </div>
    )
  }
}
