import * as React from 'react';
import s from './styles.css';

const Avatar = ({ url }) => (
  <div className={s.avatar}>
    <img className={s.avatarImage} src={url || '/assets/images/user_info/avatar.png'}/>
  </div>
);

export default Avatar;
