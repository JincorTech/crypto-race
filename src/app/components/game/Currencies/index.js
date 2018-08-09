import React, { Component } from 'react';
import s from './styles.css';

class Currencies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currencies, currenciesStart} = this.props;
    
    if (!currencies || currencies.length === 0) {
      return null
    }

    return (
      <div className={s.container}>
        {Object.getOwnPropertyNames(currencies).sort().map((ticker) => (
          <div>
            <span>{ticker}: </span>
            <span>{((currenciesStart[ticker] - currencies[ticker]) / currencies[ticker] * 100).toFixed(2)}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Currencies;
