import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchTracks } from '../../../redux/modules/garage/tracks';

import RaceItem from '../../../components/garage/RaceItem';

import s from './styles.css';

class Races extends Component {
  componentDidMount() {
    window.socket.on('initTracks', (tracks) => this.props.fetchTracks(tracks));
    window.socket.on('joinedTrack', (data) => console.log('player joined', data));
    window.socket.emit('getTracks');
  }

  render() {
    const activeTracks = this.props.tracks ? this.props.tracks.filter((track) => track.status === 'active') : [];
    const awaitingTracks = this.props.tracks ? this.props.tracks.filter((track) => track.status === 'awaiting') : [];

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

export default withRouter(connect(
  (state) => ({
    ...state.garage.tracks
  }),
  {
    fetchTracks
  }
)(Races));
