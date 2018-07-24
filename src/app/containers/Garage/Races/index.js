import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './styles.css';

import RaceItem from './RaceItem';

class Races extends Component {
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
  null
)(Races));
