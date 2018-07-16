import React from 'react';
import s from './styles.css';

const Topbar = () => {
  return (
    <div className={s.topbarWrapper}>
      <div className={s.topbar}>
        <div className={s.name}>NEORACE</div>

        <div className={s.divider}/>

        <div className={s.info}>
          <img className={s.moonIcon} src="/assets/images/game_icons/moonIcon.png"/>
          <span className={s.moonValue}>10</span>
          <img className={s.currIcon} src="/assets/images/game_icons/ethIcon.png"/>
          <span className={s.curr}>eth</span>
        </div>

        <div className={s.divider}/>

        <div className={s.timer}><span>06:</span>24:01</div>

        <div className={s.divider}/>

        <nav className={s.nav}>
          <a href="javascript:void(0);">RACES</a>
          <a href="javascript:void(0);">GARAGE</a>
          <a href="javascript:void(0);">SHOP</a>
          <a href="javascript:void(0);">LOG OUT</a>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
