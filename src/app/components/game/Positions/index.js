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
              <span className={s.label}>Position: </span><span>{position.position + 1}</span>
            </div>
            <div>
              <span className={s.label}>Score: </span><span>{position.score && (position.score - 100).toFixed(2)}</span>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

export default Positions;
