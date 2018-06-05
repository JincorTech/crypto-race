import * as React from 'react';
import s from './styles.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.linksBlock}>
          <span className={s.link}>RACES</span>|
          <span className={s.link}>GARAGE</span>|
          <span className={s.link}>SHOP</span>|
          <span className={s.link}>LOGOUT</span>
        </div>
      </div>
    )
  }
}