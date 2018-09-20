import * as React from 'react';
import s from './styles.css';

const Avatar = (props) => (
  <div className={s.avatar} {...props}>
    <img className={s.avatarImage} src={props.url || '/assets/images/user_info/avatar.png'}/>
  </div>
);

export default Avatar;
