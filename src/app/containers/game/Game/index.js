import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Phaser from 'phaser';
import queryString from 'query-string';
import isArrayEqual from 'array-equal';

import { fetchInitialData } from '../../../redux/modules/game/game';

import Game from './scenes/Game';
import GameOverPopup from '../../../components/game/GameOverPopup';
import Topbar from '../../../components/game/Topbar';
import Map from '../../../components/game/Map';
import Currencies from '../../../components/game/Currencies';
import Positions from '../../../components/game/Positions';
import Chat from '../../../components/game/Chat';
import Profile from '../../../components/game/Profile';
import s from './styles.css';

const PLAYERS_MOCK = [
  {
    email: 'amazing.space.invader@gmail.com',
    fuel: [],
    id: '5b5cc3cbcbbeae012934cbd0',
    name: 'Aidar Ibatullin',
    picture: '',
    position: 0,
    ship: {
      type: 0
    },
    x: 20,
    score: 99.8,
  },
  {
    email: 'amazing.space.invader@yandex.ru',
    fuel: [],
    id: '5b5cc3cbcbbeae012934cbd1',
    name: 'Autobot',
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
    fuel: [],
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
    fuel: [],
    id: '5b5cc3cbcbbeae012934cbd3',
    name: 'Autobot',
    picture: '',
    position: 3,
    ship: {
      type: 3
    },
    x: 80,
    score: 99.8,
  }
];

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameover: false,
      players: [],
      currencies: [],
      currenciesStart: [],
      positions: []
    }
  }

  componentDidMount() {
    window.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      parent: 'content',
      scene: [
        Game
      ]
    });

    const { trackId } = queryString.parse(this.props.location.search);
    const { players } = this.props;

    console.log('game: ', window.game);
    console.log('players: ', players);
    console.log('track id: ', trackId);

    // window.game.scene.start('game', { trackId, players: PLAYERS_MOCK });

    if (!this.props.players.length > 0) {
      window.socket.emit('loadTrack', { trackId });
    } else {
      window.game.scene.start('game', { trackId, players: this.props.players });
    }

    window.socket.on('gameover', (finalPlayers) => {
      this.setState({ gameover: true, players: finalPlayers.map(player => {
        const playerInfo = players.find(item => item.id === player.id)

        return {
          ...player,
          ship: playerInfo && playerInfo.ship
        }
      })});
      window.game.scene.pause('game');
    });

    window.socket.on('positionUpdate', (data) => {
      this.setState({currencies: data[0].currencies, currenciesStart: data[0].currenciesStart, positions: data})
    })
  }

  componentDidUpdate(prevProps) {
    if (!isArrayEqual(this.props.players, prevProps.players)) {
      console.log('new props arrived');
      if (!window.game.scene.isProcessing) {
        console.log('if game not started - start it with new props');
        console.log(this.props.players);
        const { trackId } = queryString.parse(this.props.location.search);
        window.game.scene.start('game', { trackId, players: this.props.players });
      }
    }
  }

  componentWillUnmount() {
    if (window.game) window.game.destroy();
  }

  render() {
    const {
      start,
      end,
      player
    } = this.props;

    console.log('rerender');

    return (
      <div>
        <div className={s.topbar}><Topbar startTS={start} endTS={end}/></div>
        <div className={s.chat}><Chat trackId={queryString.parse(this.props.location.search).trackId}/></div>
        <div className={s.map}><Map startTS={start} endTS={end}/></div>
        <div className={s.currencies}><Currencies currencies={this.state.currencies} currenciesStart={this.state.currenciesStart}/></div>
        <div className={s.positions}><Positions positions={this.state.positions} players={this.props.players}/></div>
        <div className={s.profile}><Profile player={player}/></div>
        <div className={s.backdrop}/>
        <div className={s.container} id="content"></div>
        {this.state.gameover || true && <div className={s.gameover}><GameOverPopup players={PLAYERS_MOCK/*this.state.players*/}/></div>}
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    ...state.game.game
  }),
  {
    fetchInitialData
  }
)(GameContainer));
