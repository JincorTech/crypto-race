import * as React from 'react';
import s from './styles.css';

const Footer = () => (
  <div className={s.footer}>
    <div className={s.container}>
      <div className={s.textBlock}>
        <div className={s.logo}>TO THE MOON<span className={s.crSign}>©</span></div>
        <div className={s.links}>
          <a href='#'>Terms of Use</a>
          <span className={s.divider}>|</span>
          <a href='#'>Privacy Policy</a>
          <span className={s.divider}>|</span>
          <a href='https://t-do.ru/joinchat/CG4UE0bhtznEIFYfRMnJPw' target="_blank">Telegram</a>
          <span className={s.divider}>|</span>
          <a href='https://goo.gl/forms/rbBg0xaiopM2VOjk2' target="_blank">Send feedback</a>
        </div>
        <div className={s.copyright}>© 2018 All rights Reserved</div>
      </div>
    </div>
  </div>
);

export default Footer;
