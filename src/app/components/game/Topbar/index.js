import React, { Component } from 'react';
import s from './styles.css';

import Currencies from '../Currencies';

import timers from '../../../utils/timers';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: 0 };
    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.setState({ timeLeft: this.props.endTS - Date.now() });
    this.timer = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _tick() {
    this.setState({ timeLeft: this.props.endTS - Date.now() });
  }

  render() {
    const timeLeft = new Date(this.state.timeLeft);

    return (
      <div className={s.topbarWrapper}>
        <div className={s.topbar}>
          <div className={s.name}>NEORACE</div>

          <div className={s.divider}/>

          <div className={s.info}>
            <img className={s.moonIcon} src="/assets/images/game_icons/moonIcon.png"/>
            <span className={s.moonValue}>10</span>
            <img className={s.currIcon} src="/assets/images/game_icons/ethIcon.png"/>
            <span className={s.curr}>eth</span>
          </div>

          <div className={s.divider}/>

          <div className={s.timer}>
            <span>{timers.formatTS(timeLeft).h}</span>
            :{timers.formatTS(timeLeft).m}:{timers.formatTS(timeLeft).s}
          </div>

          <div className={s.divider}/>

          <div className={s.currencies}>
            <Currencies
              currencies={this.props.currencies}
              currenciesStart={this.props.currenciesStart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
