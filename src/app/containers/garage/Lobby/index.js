import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AwaitingRace from '../../../components/common/AwaitingRace';
import ActiveRace from '../../../components/common/ActiveRace';

import { getEmail } from '../../../utils/auth';

const Lobby = (props) => {
  const track = props.tracks.reduce((acc, trackEl) => {
    if (trackEl.status !== 'awaiting' && trackEl.status !== 'active') return acc;

    const isPlayerExist = trackEl.players.reduce((acc, playerEl) =>
      (playerEl.email === getEmail() ? true : acc), false);

    return isPlayerExist ? trackEl : acc;
  }, {});

  if (props.location.pathname === '/game') return null;
  if (track.status === 'awaiting') return <AwaitingRace track={track}/>;
  if (track.status === 'active') return <ActiveRace trackId={track.id}/>;

  return null;
};

export default withRouter(connect((state) => ({ ...state.garage.tracks }))(Lobby));
