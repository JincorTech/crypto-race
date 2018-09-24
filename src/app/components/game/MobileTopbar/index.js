import React, { Component } from 'react';

import timers from '../../../utils/timers';
import s from './styles.css';

class MobileTopbar extends Component {
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
      <div className={s.topbar}>
        <div className={s.timer}>
          <span>{timers.formatTS(timeLeft).h}</span>
          :{timers.formatTS(timeLeft).m}:{timers.formatTS(timeLeft).s}
        </div>
      </div>
    );
  }
}

export default MobileTopbar;
