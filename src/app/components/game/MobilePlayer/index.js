import React from 'react';

import Avatar from '../../../components/common/Avatar';

import s from './styles.css';

const MobilePlayer = (props) => {
  const renderFuel = (fuel) => fuel.map((f) => (
    <div className={s.el} key={f.name}>
      <img src={`/assets/images/game_icons/curr/${f.name}.png`}/>
      <span>{f.value}%</span>
    </div>
  ));

  const renderScore = (val) => {
    if (val >= 100) return <span className={s.green}>{(val - 100).toFixed(2)}</span>;
    if (val <= 100) return <span className={s.red}>-{(100 - val).toFixed(2)}</span>;

    return null;
  };

  return (
    <div className={s.player}>
      <div className={s.top}>
        <div className={s.common}>
          <div className={s.avatar}>
            <Avatar src={props.picture} style={{ width: '60px', height: '60px' }}/>
          </div>

          <div className={s.info}>
            <div className={s.name}>{props.name}</div>
            <div className={s.position}>
              <div className={s.label}>Position</div>
              <div className={s.indicator}>{props.position + 1}/{props.total}</div>
            </div>
          </div>
        </div>

        <div className={s.change}>
          {renderScore(props.score)}
        </div>
      </div>

      <div className={s.bottom}>
        {renderFuel(props.fuel)}
      </div>
    </div>
  );
};

export default MobilePlayer;
