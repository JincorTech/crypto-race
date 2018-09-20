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
          <a href='#'>Telegram</a>
          <span className={s.divider}>|</span>
          <a href='#'>Send feedback</a>
        </div>
        <div className={s.copyright}>© 2018 All rights Reserved</div>
      </div>

      <div className={s.mvp}>
        <div className={s.ver}>MVP v0.9.5</div>
        <div className={s.row}><a href="https://ropsten.etherscan.io/" target="_blank">Ropsten Etherscan</a></div>
        <div className={s.copyright}>This application uses Ropsten testnet</div>
      </div>
    </div>
  </div>
);

export default Footer;
