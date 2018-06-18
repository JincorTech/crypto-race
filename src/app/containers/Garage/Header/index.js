import * as React from 'react';
import {Link} from 'react-router-dom';
import s from './styles.css';
import routes from 'routes';

export default class Header extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.linksBlock}>
          <span className={s.link}>RACES</span>|
          <Link to={routes.garage} className={s.link}>GARAGE</Link>|
          <span className={s.link}>SHOP</span>|
          <span className={s.link}>LOGOUT</span>
        </div>
      </div>
    )
  }
}