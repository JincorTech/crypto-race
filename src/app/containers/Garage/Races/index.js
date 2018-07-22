import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import s from './styles.css';
import { getToken } from '../../../utils/auth';

import { fetchTracks } from '../../../redux/modules/garage/tracks';

import RaceItem from './RaceItem';

class Races extends Component {
  componentDidMount() {
    window.tracksSocket = io.connect('https://game-api.secrettech.io/tracks', { query: `token=${getToken()}` });

    window.tracksSocket.on('connect', () => {
      window.tracksSocket.on('init', (tracks) => this.props.fetchTracks(tracks));
    });
  }

  render() {
    const activeTracks = this.props.tracks.filter((track) => track.status === 'active');
    const awaitingTracks = this.props.tracks.filter((track) => track.status === 'awaiting');

    return (
      <div className={s.container}>
        <div className={s.column}>
          <div className={s.caption}>RACES</div>
        </div>
        <div className={s.racesContainer}>
          <div className={s.racesColumn}>
            <div className={s.activeCaption}>ACTIVE</div>
            {activeTracks.map((race, index) =>
              <RaceItem key={race.id} index={index} data={race} isActive/>)}
          </div>
          <div className={s.racesColumn}>
            <div className={s.awaitingCaption}>AWAITING YOU</div>
            {awaitingTracks.map((race, index) =>
              <RaceItem key={race.id} index={index} data={race}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    ...state.garage.tracks
  }),
  {
    fetchTracks
  }
)(Races);
