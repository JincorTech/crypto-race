import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles.css';

const GameOverPopup = (props) => {
  const renderPlayer = (player) => (
    <div className={s.player} key={player.position}>
      #{player.position} {player.name} | {player.score} pts | {player.prize} ETH
    </div>
  );

  return (
    <div className={s.popup}>
      <div className={s.title}>GAME OVER</div>

      <div className={s.players}>
        {props.players.map(renderPlayer)}
      </div>

      <div className={s.linkWrap}>
        <Link className={s.link} to="/garage">
          BACK TO GARAGE
        </Link>
      </div>
    </div>
  );
};

export default GameOverPopup;
