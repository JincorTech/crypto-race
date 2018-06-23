import * as React from 'react';
import {Link} from 'react-router-dom';
import s from './styles.css';

export default class Button extends React.Component {
  render() {
    const {to} = this.props;
    
    return to ? this.renderLink() : this.renderButton();
  }

  renderLink = () => {
    const {text, color, to} = this.props;

    return (
      <Link to={to} style={{ backgroundColor: color }} className={s.button}>
        {text}
      </Link>
    )
  }

  renderButton = () => {
    const {text, color} = this.props;

    return (
      <div style={{ backgroundColor: color }} className={s.button}>
        {text}
      </div>
    )
  }
}