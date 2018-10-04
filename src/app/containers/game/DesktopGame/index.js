import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Phaser from 'phaser';
import queryString from 'query-string';
import isArrayEqual from 'array-equal';
import Slider from 'react-slick';
import cx from 'classnames';

import { fetchInitialData } from '../../../redux/modules/game/game';

import Game from './scenes/Game';
import GameOverPopup from '../../../components/game/GameOverPopup';
import Topbar from '../../../components/game/Topbar';
import Map from '../../../components/game/Map';
import Chat from '../../../components/game/Chat';
import Profile from '../../../components/game/Profile';

import MobileGame from '../MobileGame';

import md from '../../../utils/mobile';
import s from './styles.css';

import { PLAYERS_MOCK } from '../Game';

const ArrowLeftImg = '/assets/images/your_ship/arrow_left.png';
const ArrowRightImg = '/assets/images/your_ship/arrow_right.png';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <img className={cx(s.arrow, s.arrowRight)} src={ArrowRightImg} onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <img className={cx(s.arrow, s.arrowLeft)} src={ArrowLeftImg} onClick={onClick}/>
  );
}

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameover: false,
      players: [],
      currencies: [],
      currenciesStart: [],
      positions: [],
      track: null,
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

    const track = new Audio('/assets/track.mp3')
    if (track) {
      track.play()
      this.setState({track});
    }

    const { trackId } = queryString.parse(this.props.location.search);
    const { players } = this.props;

    // window.game.scene.start('game', { trackId, players: PLAYERS_MOCK });

    if (!this.props.players.length > 0) {
      window.socket.emit('loadTrack', { trackId });
    } else {
      window.game.scene.start('game', { trackId, players });
    }

    window.socket.on('gameover', (finalPlayers) => {
      this.setState({ gameover: true, players: finalPlayers });
      window.game.scene.pause('game');
    });

    window.socket.on('positionUpdate', (data) => {
      this.setState({ currencies: data[0].currencies, currenciesStart: data[0].currenciesStart, positions: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (!isArrayEqual(this.props.players, prevProps.players)) {
      console.log('new props arrived');
      if (!window.game.scene.isProcessing) {
        console.log('if game not started - start it with new props');
        console.log(this.props.players);
        const { trackId } = queryString.parse(this.props.location.search);
        // window.game.scene.start('game', { trackId, players: PLAYERS_MOCK });
        window.game.scene.start('game', { trackId, players: this.props.players });
      }
    }
  }

  componentWillUnmount() {
    if (window.game) window.game.destroy();
    if (this.state.track) {
      this.state.track.pause();
    }
  }

  render() {
    const {
      start,
      end,
      player,
      players
    } = this.props;

    const profileCarouselSettings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
    };

    if (md.mobile()) return <MobileGame />;

    return (
      <div>
        <div className={s.topbar}>
          <Topbar
            startTS={start}
            endTS={end}
            currencies={this.state.currencies}
            currenciesStart={this.state.currenciesStart}/>
        </div>

        <div className={s.chat}>
          <Chat trackId={queryString.parse(this.props.location.search).trackId}/>
        </div>

        <div className={s.map}>
          <Map
            startTS={start}
            endTS={end}/>
        </div>

        <div className={s.profile}>
          <div className={s.left}><Profile player={player}/></div>
          <div className={s.right}>
            <Slider {...profileCarouselSettings}>
              {players
              .filter((p) => p.id !== player.id)
              .map((p) =>
                <div className={s.pcsItem} key={p.id}><Profile player={p}/></div>)}
            </Slider>
          </div>
        </div>

        <div className={s.backdrop}/>

        <div className={s.container} id="content"/>

        {this.state.gameover &&
          <div className={s.gameover}>
            <GameOverPopup players={this.state.players}/>
          </div>}
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
