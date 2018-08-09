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
          <div className={s.player}>
            <div>
              <span>Player: </span><span>{player && player.name}</span>
            </div>
            <div>
              <span>Position: </span><span>{position.position}</span>
            </div>
            <div>
              <span>Score: </span><span>{position.score}</span>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

export default Positions;
