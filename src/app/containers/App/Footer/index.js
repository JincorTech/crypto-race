import * as React from 'react';
import s from './styles.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={s.container}>
        {/* <div className={s.textBlock}>
          <div className={s.logo}>TO THE MOON ©</div>
          <div className={s.links}>
            <a href='#'>Contacts</a> | <a href='#'>Terms of Use</a> | <a href='#'>Privacy Policy</a>
          </div>
          <div className={s.copyright}>© 2018 All rights Reserved</div>
        </div> */}
      </div>
    )
  }
}