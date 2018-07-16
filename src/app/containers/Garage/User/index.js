import * as React from 'react';
import s from './styles.css';

import HealthIndicator from './HealthIndicator';
import Button from 'components/Button';
import Avatar from 'components/Avatar';

export default class User extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.avatar}>
            <Avatar />
          </div>
          <div className={s.name}>
            <span>STARLORD /</span>
            <div className={s.indicator}>
              <HealthIndicator />
            </div>
            <div className={s.level}>
              <span>15</span>
            </div>
          </div>
          <div className={s.balance}>
            <span><span className={s.balanceCaption}>RACES: </span>10 / 30 (40)<span className={s.balanceCaption}> | BALANCE: </span><span className={s.balanceEth}>100 ETH</span> 000,1 BTC</span>
          </div>
          <div className={s.buttons}>
            <div className={s.addButton}>
              <Button text="+ADD" color="#3593eb"/>
            </div>
            <Button text="WITHDRAW" color="#ed1c24"/>
          </div>
        </div>
        <div className={s.buttons}>
        </div>
      </div>
    )
  }
}