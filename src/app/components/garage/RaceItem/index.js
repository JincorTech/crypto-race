import * as React from 'react';
import { Link } from 'react-router-dom';
import s from './styles.css';

const DurationIcon = '/assets/images/races/duration.png';
const PrizeIcon = '/assets/images/races/prize.png';
const ParticipantsIcon = '/assets/images/races/participants.png';
const ShowIcon = '/assets/images/races/show.png';
// const PlusIcon = '/assets/images/races/plus.png';

const RaceItem = ({
  type,
  isActive,
  data,
  index
}) => {
  const {
    id,
    duration,
    numPlayers,
    maxPlayers,
    betAmount
  } = data;

  return (
    <div className={s.container}>
      <div className={s.info}>
        <div style={{ backgroundColor: type === 'active' ? '#39ef99' : '#3593eb' }} className={s.number}>{index + 1}</div>
        <div className={s.duration}>
          <img src={DurationIcon}/>
          <span className={s.infoValue}>{`${duration / 1000} s`}</span>
        </div>
        <div className={s.prize}>
          <img src={PrizeIcon}/>
          <span className={s.infoValue}>{`${betAmount} ETH`}</span>
        </div>
        <div className={s.participants}>
          <img src={ParticipantsIcon}/>
          <span className={s.infoValue}>{`${numPlayers}/${maxPlayers}`}</span>
        </div>
      </div>
      <div className={s.buttons}>
        {isActive && <div className={s.showButton}><img src={ShowIcon}/></div>}
        {!isActive && <Link to={`/fuel?trackId=${id}`} className={s.addButton}>GET IN</Link>}
      </div>
    </div>
  );
};

export default RaceItem;
