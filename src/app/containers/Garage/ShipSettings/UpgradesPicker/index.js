import * as React from 'react';
import s from './styles.css';

const Upgrade1Icon = '/assets/images/ship_settings/upgrade_1.png';
const Upgrade2Icon = '/assets/images/ship_settings/upgrade_2.png';
const Upgrade3Icon = '/assets/images/ship_settings/upgrade_3.png';

export default class UpgradesPicker extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>UPGRADES</div>
        {[Upgrade1Icon, Upgrade2Icon, Upgrade3Icon].map((icon) => (
          <img key={icon} src={icon} className={s.item}/>
        ))}
      </div>
    )
  }
}