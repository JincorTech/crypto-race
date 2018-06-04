import * as React from 'react';
import cx from 'classnames';

import s from './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={cx(s.caption, s.container)}>Hello, world!</div>
    )
  }
}