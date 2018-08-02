import React, { Component } from 'react';

import s from './styles.css';


class AwaitingRace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  render() {
    const { track } = this.props;

    return (
      <div className={s.awaitingRace}>
        <div className={s.title} onClick={() => this.setState({ open: !this.state.open })}>
          Waiting players...
        </div>

        {this.state.open && (
          <div>
            <div className={s.info}>
              <div className={s.block}>
                <div className={s.blockLabel}>Duration</div>
                <div className={s.blockValue}>{track.duration / 1000}s</div>
              </div>
              <div className={s.block}>
                <div className={s.blockLabel}>Bet</div>
                <div className={s.blockValue}>{track.betAmount} ETH</div>
              </div>
              <div className={s.block}>
                <div className={s.blockLabel}>Players</div>
                <div className={s.blockValue}>{track.numPlayers}/{track.maxPlayers}</div>
              </div>
            </div>

            <div className={s.players}>
              <div className={s.label}>Players:</div>
              {track.players &&
                track.players.map((player, index) =>
                  (<div key={player.name} className={s.player}>{index + 1}. {player.name}</div>))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AwaitingRace;
