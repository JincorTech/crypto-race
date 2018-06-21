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

  render() {
    const { level, color, length, name, icon } = this.props;

    return (
      <div>
        <div className={s.name}>
          {icon && <img className={s.icon} src={icon} />}
          <span style={{ color }} className={s.caption}>{name}</span>
        </div>
        <div className={s.value}>
          {this.getKeysArray().map((index) => (
            <div
              key={index}
              style={{ backgroundColor: index < length * (level / 100) ? color : '#000' }}
              className={s.point}
            />
          ))}
          <span style={{ color }} className={s.level}>{level}</span>
        </div>
      </div>
    )
  }
}