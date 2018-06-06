import * as React from 'react';
import s from './styles.css';

import ShipSettings from '../ShipSettings';

export default class Layout extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.settingsContainer}>
          <ShipSettings />
        </div>
      </div>
    )
  }
}