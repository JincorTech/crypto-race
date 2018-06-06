import * as React from 'react';
import s from './styles.css';

export default class ShipSettings extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.avatar}>
            <img className={s.avatarImage} src='/assets/images/user_info/avatar.png' />
          </div>
        </div>
        <div className={s.buttons}>
        </div>
      </div>
    )
  }
}