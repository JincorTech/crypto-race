import React, { Component } from 'react';
import s from './styles.css';

import timers from '../../../utils/timers';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { timePass: 0, progress: 0 };
    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.setState({ timePass: Date.now() - this.props.startTS });
    console.log(Date.now(), this.props.startTS, Date.now() - this.props.startTS);
    this.timer = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _tick() {
    const raceTime = this.props.endTS - this.props.startTS;
    const percent = raceTime / 100;
    const progress = (Date.now() - this.props.startTS) / percent;
    this.setState({
      progress,
      timePass: Date.now() - this.props.startTS
    });
  }

  render() {
    const timePass = new Date(this.state.timePass);

    return (
      <div className={s.map}>
        <img className={s.moon} src="/assets/images/game_icons/map/moon.png"/>
        <div className={s.line}>
          <div className={s.progress} style={{ height: `${this.state.progress}%` }}/>
        </div>
        <div className={s.timer}>
          <div className={s.numbers}>
            {timers.formatTS(timePass).h}:
            {timers.formatTS(timePass).m}:
            {timers.formatTS(timePass).s}
          </div>
          <div className={s.divider}/>
          <div className={s.label}>FLY TIME</div>
        </div>
      </div>
    );
  }
}

export default Map;
