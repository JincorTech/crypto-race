import * as React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import { removeToken, getToken } from '../../../utils/auth';
import s from './styles.css';

const Header = ({signIn}) => (
  <div className={s.container}>
    <div className={s.linksBlock}>
      <span className={s.link}>RACES</span>|
      <NavLink to="/garage" className={s.link} activeClassName={s.active}>GARAGE</NavLink>|
      <span className={s.link}>SHOP</span>|
      {!getToken()
        ? <FacebookLogin
          cssClass={cx(s.fbLogin, s.link)}
          textButton="LOG IN"
          appId="1643728252419717"
          autoLoad={true}
          fields="name,email,picture"
          callback={(res) => {
            signIn(res.accessToken);
          }} />
        : <NavLink to="/" className={s.link} onClick={() => removeToken()}>LOGOUT</NavLink>}
      
    </div>
  </div>
);

export default Header;
