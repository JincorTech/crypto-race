import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { removeToken } from '../../../utils/auth';
import s from './styles.css';

const Header = () => (
  <div className={s.container}>
    <div className={s.linksBlock}>
      <span className={s.link}>RACES</span>|
      <NavLink to="/garage" className={s.link} activeClassName={s.active}>GARAGE</NavLink>|
      <span className={s.link}>SHOP</span>|
      <NavLink to="/" className={s.link} onClick={() => removeToken()}>LOGOUT</NavLink>
    </div>
  </div>
);

export default Header;
