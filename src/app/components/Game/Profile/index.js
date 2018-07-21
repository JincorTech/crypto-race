import React from 'react';
import s from './styles.css';

const Profile = (props) => {
  const {
    player
  } = props;

  return (
    <div className={s.profile}>
      <div className={s.container}>
        <div className={s.summary}>
          <div className={s.firstRow}>
            <div className={s.name}>{player.id} / </div>
            <div className={s.xp}>
              <div className={s.filled}/><div/><div/><div/><div/><div/><div/><div/>
            </div>
            <div className={s.lvl}>
              LVL: 1
            </div>
          </div>

          <div className={s.secondRow}>
            <div className={s.avatar}>
              <img src="/assets/images/user_info/avatar.png"/>
            </div>
            <div className={s.fuel}>
              <div className={s.label}>
                FUEL:
              </div>
              <div className={s.el}>
                <img src="/assets/images/game_icons/curr/btc.png"/>
                <span>20%</span>
              </div>
              <div className={s.el}>
                <img src="/assets/images/game_icons/curr/eth.png"/>
                <span>20%</span>
              </div>
              <div className={s.el}>
                <img src="/assets/images/game_icons/curr/rpl.png"/>
                <span>20%</span>
              </div>
              <div className={s.el}>
                <img src="/assets/images/game_icons/curr/bch.png"/>
                <span>20%</span>
              </div>
              <div className={s.el}>
                <img src="/assets/images/game_icons/curr/ltc.png"/>
                <span>20%</span>
              </div>
              <div className={s.el}>
                <img src="/assets/images/game_icons/curr/rnd.png"/>
                <span>20%</span>
            </div>
            </div>
          </div>
        </div>
        <div className={s.right}></div>
      </div>
    </div>
  );
};

export default Profile;
