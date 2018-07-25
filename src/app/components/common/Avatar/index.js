import * as React from 'react';
import s from './styles.css';

export default class Avatar extends React.Component {
  render() {
    return (
      <div className={s.avatar}>
        <img className={s.avatarImage} src='/assets/images/user_info/avatar.png' />
      </div>
    )
  }
}