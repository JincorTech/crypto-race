import * as React from 'react';
import cx from 'classnames';

import s from './styles.css';

export default class Indicator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: props.level
    }
  }

  getKeysArray = () => {
    const { length } = this.props;
    const result = [];
    for (let i = 0; i < length; ++i) {
      result.push(i);
    }
    return result;
  }

  renderInput = () => {
    const { thumbClass, color, onChange, level } = this.props;

    return (
      <div className={s.value}>
        <input onChange={(event) => onChange(event.target.value)} value={level} style={{ backgroundColor: color }} className={s[thumbClass]} type="range" id="start" name="volume" min="0" max="100" />
        {this.renderLevel()}
      </div>
    )
  }

  renderLevel = () => {
    const { level, color, units } = this.props;

    return (
      <span style={{ color }} className={s.level}>{`${level}${units || ''}`}</span>
    )
  }

  renderValue = () => {
    const { level, color, length } = this.props;

    return (
      <div className={s.value}>
          {this.getKeysArray().map((index) => (
              <div
              key={index}
              style={{ backgroundColor: index < length * (level / 100) ? color : '#000' }}
              className={s.point}
            />))
          }
          {this.renderLevel()}
        </div>
    )
  }

  render() {
    const { color, name, icon, isInput } = this.props;

    return (
      <div>
        <div className={s.name}>
          {icon && <img className={s.icon} src={icon} />}
          <span style={{ color }} className={s.caption}>{name}</span>
        </div>
        {isInput ? this.renderInput() : this.renderValue()}
      </div>
    )
  }
}