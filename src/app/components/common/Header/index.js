import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { removeToken, isAuth } from '../../../utils/auth';
import s from './styles.css';

console.log(isAuth());

const Header = () => (isAuth()
  ? (
    <div className={s.container}>
      <div className={s.linksBlock}>
        <NavLink to="/garage" className={s.link} activeClassName={s.active}>GARAGE</NavLink>|
        <NavLink to="/" className={s.link} onClick={() => removeToken()}>LOGOUT</NavLink>
      </div>
    </div>
  )
  : null);

export default Header;
