import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Phaser from 'phaser';
import io from 'socket.io-client';

import { fetchInitialData } from '../../../redux/modules/game/game';

import Game from './scenes/Game';
import Topbar from '../../../components/game/Topbar';
import Map from '../../../components/game/Map';
import Chat from '../../../components/game/Chat';
import Profile from '../../../components/game/Profile';
import s from './styles.css';
import { getToken, getEmail } from '../../../utils/auth';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    window.globalSocket = io.connect('https://game-api.secrettech.io/race', { query: `token=${getToken()}` });

    window.globalSocket.on('connect', () => {
      window.globalSocket.on('init', (data) => {
        const { players, ...rest } = data;
        console.log(data);
        const player = players.filter((p) => p.email === getEmail())[0];
        const enemies = players.filter((p) => p.email !== getEmail())[0];
        this.props.fetchInitialData({ player, enemies, ...rest });

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

        window.game.scene.start('game', { player, enemies });
      });
    });
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

    return (
      <div>
        <div className={s.topbar}><Topbar startTS={start} endTS={end}/></div>
        <div className={s.chat}><Chat/></div>
        <div className={s.map}><Map startTS={start} endTS={end}/></div>
        <div className={s.profile}><Profile player={player}/></div>
        <div className={s.backdrop}/>
        <div className={s.container} id="content"></div>
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
