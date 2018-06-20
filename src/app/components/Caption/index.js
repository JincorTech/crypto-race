import * as React from 'react';
import s from './styles.css';

export default class Caption extends React.Component {
  render() {
    const {text, icon} = this.props;

    return (
      <div className={s.caption}>
        {icon && <img className={s.icon} src={icon}/>}
        {text}
      </div>
    )
  }
}