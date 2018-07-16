import * as React from 'react';
import Phaser from 'phaser';
import io from 'socket.io-client';

import Game from './scenes/Game';
import Topbar from '../../components/Game/Topbar';
import Map from '../../components/Game/Map';
import Profile from '../../components/Game/Profile';
import s from './styles.css';

const socket = io('http://localhost:4000');

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    socket.on('connect', () => {
      socket.emit('requestInitData');

      socket.on('responseInitData', (players) => {
        window.game = new Phaser.Game({
          type: Phaser.AUTO,
          width: window.innerWidth,
          height: window.innerHeight,
          physics: {
            default: 'arcade',
            arcade: {
              gravity: { y: 0 },
              debug: true
            }
          },
          parent: 'content',
          scene: [
            Game
          ]
        });

        window.game.scene.start('game', players);
      });

      socket.on('update', (player) => {
        window.game.scene.keys.game.enemies.getChildren().forEach((otherPlayer) => {
          if (otherPlayer.id === player.id) {
            const percHeight = (window.innerHeight - 256 - 130) / 100;
            const percWidth = (window.innerWidth - 130) / 100;
            const y = (player.progress * percHeight) + 256 + 65;
            const x = (player.x * percWidth) - 65;
            otherPlayer.setPosition(x, y);
          }
        });
      });
    });
  }

  componentWillUnmount() {
    if (window.game) window.game.destroy();
  }

  render() {
    return (
      <div>
        <div className={s.topbar}><Topbar/></div>
        <div className={s.map}><Map/></div>
        <div className={s.profile}><Profile/></div>
        <div className={s.container} id="content"></div>
      </div>
    );
  }
}
