import * as React from 'react';
import {NavLink} from 'react-router-dom';
import s from './styles.css';
import routes from 'routes';

export default class Header extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.linksBlock}>
          <span className={s.link}>RACES</span>|
          <NavLink to={routes.fuel} className={s.link} activeClassName={s.active}>FUEL</NavLink>|
          <NavLink to={routes.garage} className={s.link} activeClassName={s.active}>GARAGE</NavLink>|
          <span className={s.link}>SHOP</span>|
          <span className={s.link}>LOGOUT</span>
        </div>
      </div>
    )
  }
}