import * as React from 'react';
import {Link} from 'react-router-dom';
import routes from 'routes';
import s from './styles.css';

const DurationIcon = '/assets/images/races/duration.png';
const PrizeIcon = '/assets/images/races/prize.png';
const ParticipantsIcon = '/assets/images/races/participants.png';
const ShowIcon = '/assets/images/races/show.png';
const PlusIcon = '/assets/images/races/plus.png';

export default class RaceItem extends React.Component {
  render() {
    const {
      number,
      duration,
      prize,
      participants,
      capacity
    } = this.props.data;

    const { type, isActive } = this.props;

    return (
      <div className={s.container}>
        <div className={s.info}>
          <div style={{ backgroundColor: type === 'active' ? '#39ef99' : '#3593eb' }} className={s.number}>{number}</div>
          <div className={s.duration}>
            <img src={DurationIcon} />
            <span className={s.infoValue}>{`${duration}.00`}</span>
          </div>
          <div className={s.prize}>
            <img src={PrizeIcon} />
            <span className={s.infoValue}>{`${prize}$`}</span>
          </div>
          <div className={s.participants}>
            <img src={ParticipantsIcon} />
            <span className={s.infoValue}>{`${participants}/${capacity}`}</span>
          </div>
        </div>
        <div className={s.buttons}>
          <div className={s.showButton}><img src={ShowIcon} /></div>
          {!isActive && <Link to={routes.fuel} className={s.addButton}><img src={PlusIcon} /></Link>}
        </div>
      </div>
    )
  }
}