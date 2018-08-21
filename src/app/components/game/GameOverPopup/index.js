import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from './styles.css';

const MoonImg = '/assets/images/moon.png';
const FlagImg = '/assets/images/game_over/flag.jpg';

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
    return (
      <div className={s.popup}>
        <img src={MoonImg} className={s.moon} />
        <div className={s.title}>
          <img src={FlagImg} className={s.flag} />
          GAME OVER
          <img src={FlagImg} className={s.flag} />
        </div>
  
        <div className={s.players}>
          {this.props.players.map(this.renderPlayer)}
        </div>
  
        <div className="fb-share-button" data-href="https://jincortech.github.io/garage/" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjincortech.github.io%2Fgarage%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Поделиться</a></div>
  
        <div className={s.linkWrap}>
          <Link className={s.link} to="/garage">
            BACK TO GARAGE
          </Link>
        </div>
      </div>
    );
  }
};

export default GameOverPopup;
