import * as React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import s from './styles.css';

const Header = () => (
  <div className={s.container}>
    <div className={s.linksBlock}>
      <span className={s.link}>RACES</span>|
      <NavLink to={routes.garage} className={s.link} activeClassName={s.active}>GARAGE</NavLink>|
      <span className={s.link}>SHOP</span>|
      <NavLink to={routes.main} className={s.link}>LOGOUT</NavLink>
    </div>
  </div>
);

export default Header;
