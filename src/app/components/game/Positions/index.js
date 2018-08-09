import React, { Component } from 'react';
import s from './styles.css';

class Positions extends Component {
  render() {
    const {positions, players} = this.props;

    return (
      <div className={s.container}>
        {positions.map((position) => {
          const player = players.find(one => one.id === position.id)
          return (
          <div key={position.id} className={s.player}>
            <div>
              <span className={s.label}>Player: </span><span>{player && player.name}</span>
            </div>
            <div>
              <span className={s.label}>Position: </span><span>{position.position}</span>
            </div>
            <div>
              <span className={s.label}>Score: </span><span>{position.score.toFixed(0)}</span>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

export default Positions;
