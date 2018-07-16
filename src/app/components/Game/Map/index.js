import React from 'react';
import s from './styles.css';

const Map = () => {
  return (
    <div className={s.map}>
      <img className={s.moon} src="/assets/images/game_icons/map/moon.png"/>
      <div className={s.line}>
        <div className={s.progress}></div>
      </div>
      <div className={s.timer}>
        <div className={s.numbers}>05:20:33</div>
        <div className={s.divider}/>
        <div className={s.label}>FLY TIME</div>
      </div>
    </div>
  );
};

export default Map;
