import * as React from 'react';
import s from './styles.css';

import RaceItem from './RaceItem';

const ActiveRacesMock = [
  {number: 1, duration: 45, prize: 1500, participants: 5, capacity: 10},
  {number: 2, duration: 45, prize: 1500, participants: 5, capacity: 10},
  {number: 3, duration: 45, prize: 1500, participants: 5, capacity: 10}
]

const AwaitingRacesMock = [
  {number: 1, duration: 45, prize: 1500, participants: 5, capacity: 10},
  {number: 2, duration: 45, prize: 1500, participants: 5, capacity: 10},
  {number: 3, duration: 45, prize: 1500, participants: 5, capacity: 10}
]

export default class Races extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.column}>
          <div className={s.caption}>RACES</div>
        </div>
        <div className={s.racesContainer}>
          <div className={s.racesColumn}>
            <div className={s.activeCaption}>ACTIVE</div>
            {ActiveRacesMock.map((item) => (
              <RaceItem key={item.number} type={'active'} data={item} />
            ))}
          </div>
          <div className={s.racesColumn}>
            <div className={s.awaitingCaption}>AWAITING</div>
            {AwaitingRacesMock.map((item) => (
              <RaceItem key={item.number} type={'awaiting'} data={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}