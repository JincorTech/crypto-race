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
import Chat from '../../../components/game/Chat';
import Profile from '../../../components/game/Profile';
import s from './styles.css';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameover: false,
      players: []
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

    if (!this.props.players.length > 0) {
      window.socket.emit('loadTrack', { trackId });
    } else {
      window.game.scene.start('game', { trackId, players: this.props.players });
    }

    window.socket.on('gameover', (players) => {
      this.setState({ gameover: true, players });
      window.game.scene.pause('game');
    });
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

    return (
      <div>
        <div className={s.topbar}><Topbar startTS={start} endTS={end}/></div>
        <div className={s.chat}><Chat trackId={queryString.parse(this.props.location.search).trackId}/></div>
        <div className={s.map}><Map startTS={start} endTS={end}/></div>
        <div className={s.profile}><Profile player={player}/></div>
        <div className={s.backdrop}/>
        <div className={s.container} id="content"></div>
        {this.state.gameover && <div className={s.gameover}><GameOverPopup players={this.state.players}/></div>}
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
