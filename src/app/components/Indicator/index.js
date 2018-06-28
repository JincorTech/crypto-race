import * as React from 'react';

import s from './styles.css';

export default class Indicator extends React.Component {
  getKeysArray = () => {
    const { length } = this.props;
    const result = [];
    for (let i = 0; i < length; ++i) {
      result.push(i);
    }
    return result;
  }

  renderInput = () => {
    const { name } = this.props;
    console.log('!!! ', name);
    return <input className={s.BITCOIN} type="range" id="start" name="volume" min="0" max="100" />;
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
          <span style={{ color }} className={s.level}>{level}</span>
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