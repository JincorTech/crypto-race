import * as React from 'react';
import s from './styles.css';

export default class Button extends React.Component {
  render() {
    const {text, color} = this.props;

    return (
      <div style={{backgroundColor: color}} className={s.button}>
        {text}
      </div>
    )
  }
}