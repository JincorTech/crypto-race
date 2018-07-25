import * as React from 'react';
import s from './styles.css';

const Footer = () => (
  <div className={s.container}>
    <div className={s.textBlock}>
      <div className={s.logo}>TO THE MOON<span className={s.crSign}>©</span></div>
      <div className={s.links}>
        <a href='#'>Contacts</a>
        <span className={s.divider}>|</span>
        <a href='#'>Terms of Use</a>
        <span className={s.divider}>|</span>
        <a href='#'>Privacy Policy</a>
      </div>
      <div className={s.copyright}>© 2018 All rights Reserved</div>
    </div>
  </div>
);

export default Footer;
