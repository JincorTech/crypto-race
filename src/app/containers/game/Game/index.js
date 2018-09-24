import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { fetchInitialData } from '../../../redux/modules/game/game';

import DesktopGame from '../DesktopGame';
import MobileGame from '../MobileGame';
import ErrorState from '../../../components/game/ErrorState';

import md from '../../../utils/mobile';

export const PLAYERS_MOCK = [
  {
    email: 'amazing.space.invader@gmail.com',
    fuel: [
      { name: 'btc', value: 75 },
      { name: 'eth', value: 20 },
      { name: 'ltc', value: 5 }
    ],
    id: '5b5cc3cbcbbeae012934cbd0',
    name: 'Aidar Ibatullin',
    picture: '',
    position: 3,
    ship: {
      type: 0
    },
    x: 20,
    score: 99.8,
  },
  {
    email: 'amazing.space.invader@yandex.ru',
    fuel: [
      { name: 'bch', value: 10 },
      { name: 'btc', value: 20 },
      { name: 'eth', value: 20 },
      { name: 'ltc', value: 10 },
      { name: 'xrp', value: 10 },
      { name: 'rnd', value: 30 }
    ],
    id: '5b5cc3cbcbbeae012934cbd1',
    name: 'First',
    picture: '',
    position: 1,
    ship: {
      type: 1
    },
    x: 40,
    score: 100.1,
  },
  {
    email: 'amazing.space.invader@mail.ru',
    fuel: [
      { name: 'btc', value: 75 },
      { name: 'eth', value: 20 },
      { name: 'ltc', value: 5 }
    ],
    id: '5b5cc3cbcbbeae012934cbd2',
    name: 'Autobot',
    picture: '',
    position: 2,
    ship: {
      type: 2
    },
    x: 60,
    score: 100,
  },
  {
    email: 'amazing.space.invader@rambler.ru',
    fuel: [
      { name: 'btc', value: 100 },
    ],
    id: '5b5cc3cbcbbeae012934cbd3',
    name: 'Last',
    picture: '',
    position: 0,
    ship: {
      type: 3
    },
    x: 80,
    score: 99.8,
  }
];

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: false
    };

    this.trackId = queryString.parse(this.props.location.search).trackId;
  }

  componentDidMount() {
    if (!this.props.players.length > 0) {
      window.socket.emit('loadTrack', { trackId: this.trackId });
    }
  }

  render() {
    const { players } = this.props;
    // const players = PLAYERS_MOCK;

    if (players.length > 0 && md.mobile()) {
      return <MobileGame players={players} trackId={this.trackId} />;
    }

    if (players.length > 0) {
      return <DesktopGame trackId={this.trackId} />;
    }

    return <ErrorState/>;
  }
}

export default withRouter(connect(
  (state) => ({
    ...state.game.game
  }),
  {
    fetchInitialData
  }
)(Game));
