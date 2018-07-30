import React from 'react';
import s from './styles.css';

const Profile = (props) => {
  const {
    player
  } = props;

  const renderFuel = (fuel) => fuel.map((f) => (
    <div className={s.el} key={f.name}>
      <img src={`/assets/images/game_icons/curr/${f.name}.png`}/>
      <span>{f.value}%</span>
    </div>
  ));

  return (
    <div className={s.profile}>
      <div className={s.container}>
        <div className={s.summary}>
          <div className={s.firstRow}>
            <div className={s.name}>{player.name} / </div>
            <div className={s.xp}>
              <div className={s.filled}/><div/><div/><div/><div/><div/><div/><div/>
            </div>
            <div className={s.lvl}>
              LVL: 1
            </div>
          </div>

          <div className={s.secondRow}>
            <div className={s.avatar}>
              <img src={player.picture || '/assets/images/user_info/avatar.png'}/>
            </div>
            <div className={s.fuel}>
              <div className={s.label}>
                FUEL:
              </div>
              {renderFuel(player.fuel)}
            </div>
          </div>
        </div>
        <div className={s.right}></div>
      </div>
    </div>
  );
};

export default Profile;
