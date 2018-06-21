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
    const { level, color, length } = this.props;

    return (
      <div className={s.container}>
        {this.getKeysArray().map((index) => (
          <div
            key={index}
            style={{ backgroundColor: index < length * (level / 100) ? color : '#000' }}
            className={s.point}
          />
        ))}
        <span className={s.level}>{level}</span>
      </div>
    )
  }
}