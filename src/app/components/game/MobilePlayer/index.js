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
              <div className={s.indicator}>{props.position}/{props.total}</div>
            </div>
          </div>
        </div>

        <div className={s.change}>
          +325%
        </div>
      </div>

      <div className={s.bottom}>
        {renderFuel(props.fuel)}
      </div>
    </div>
  );
};

export default MobilePlayer;
