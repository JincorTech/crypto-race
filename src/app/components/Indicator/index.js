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
    const { level, color } = this.props;

    return (
      <div className={s.container}>
        {this.getKeysArray().map((index) => (
          <div
            style={{backgroundColor: index < level ? color : '#000'}}
            className={s.point}
          />
        ))}
      </div>
    )
  }
}