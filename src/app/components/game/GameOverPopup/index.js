import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {shipsStatic} from '../../../ships';
import s from './styles.css';

const MoonImg = '/assets/images/moon.png';
const FlagImg = '/assets/images/game_over/flag.jpg';
const CircleImg = '/assets/images/main_page/circle.png';

class GameOverPopup extends Component {
  componentDidMount() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

  renderPlayer = (player) => (
    <div className={s.player} key={player.position}>
      #{player.position} {player.name} | {+player.score.toFixed(3)} pts | {player.prize} ETH
    </div>
  );

  render () {
    const {
      players
    } = this.props

    if (!players) {
      return null
    }

    const firstPlayer = players[0];
    const secondPlayer = players[1];
    const thirdPlayer = players[2];

    return (
      <div className={s.popup}>
        <img src={CircleImg} className={s.circle} />
        <img src={MoonImg} className={s.moon} />
        {firstPlayer && 
          <React.Fragment>
            <img src={shipsStatic[firstPlayer.ship.type]} className={s.firstShip} />
            <div className={s.info}>
              <div className={s.name}>
                <div className={s.shipNumber}>1</div>
                <div className={s.nameText}>{firstPlayer.name}</div>
              </div>
              <div className={s.result}>RESULT: <span className={s.resultValue}>+20%</span></div>
              <div className={s.result}>PRIZE: <span className={s.prizeValue}>5 ETH</span></div>
            </div>
          </React.Fragment>
        }
        {secondPlayer && 
          <React.Fragment>
            <div className={s.info2}>
            <div className={s.otherShipContainer}>
              <img src={shipsStatic[secondPlayer.ship.type]} className={s.otherShip} />
            </div>
              <div className={s.name}>
                <div className={s.shipNumber}>2</div>
                <div className={s.nameText}>{secondPlayer.name}</div>
              </div>
              <div className={s.result}>RESULT: <span className={s.resultValue}>+20%</span></div>
              <div className={s.result}>PRIZE: <span className={s.prizeValue}>5 ETH</span></div>
            </div>
          </React.Fragment>
        }
        {thirdPlayer && 
          <React.Fragment>
            <div className={s.info3}>
              <div className={s.otherShipContainer}>
                <img src={shipsStatic[thirdPlayer.ship.type]} className={s.otherShip} />
              </div>
              <div className={s.name}>
                <div className={s.shipNumber}>3</div>
                <div className={s.nameText}>{thirdPlayer.name}</div>
              </div>
              <div className={s.result}>RESULT: <span className={s.resultValue}>+20%</span></div>
              <div className={s.result}>PRIZE: <span className={s.prizeValue}>5 ETH</span></div>
            </div>
          </React.Fragment>
        }
        <div className={s.title}>
          <img src={FlagImg} className={s.flag} />
          GAME OVER
          <img src={FlagImg} className={s.flag} />
        </div>
        <div className={s.buttons}>
          <div className={s.listButton}>LIST</div>
          <Link className={s.okButton} to="/garage">OK</Link>
        </div>
        {/* <div className={s.players}>
          {players.map(this.renderPlayer)}
        </div> */}
  
        <div className="fb-share-button" data-href="https://jincortech.github.io/garage/" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjincortech.github.io%2Fgarage%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Поделиться</a></div>
  
        {/* <div className={s.linkWrap}>
          <Link className={s.link} to="/garage">
            BACK TO GARAGE
          </Link>
        </div> */}
      </div>
    );
  }
};

export default GameOverPopup;
